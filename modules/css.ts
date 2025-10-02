import { defineNuxtModule, addTemplate, createResolver } from '@nuxt/kit'
import { joinURL } from 'ufo'
import { resolveModulePath } from 'exsolve'

export default defineNuxtModule({
  meta: { name: 'css' },
  async setup(_options, nuxt) {
    const resolver = createResolver(import.meta.url)

    const contentDir = joinURL(dir, 'content')
    const uiPath = resolveModulePath('@nuxt/ui', { from: import.meta.url, conditions: ['style'] })
    const tailwindPath = resolveModulePath('tailwindcss', { from: import.meta.url, conditions: ['style'] })
    const layerDir = resolver.resolve('../app')

    const cssTemplate = addTemplate({
      filename: 'nsi-core.css',
      getContents: () => {
        return `@import "${tailwindPath}";
@import "${uiPath}";

@source "${contentDir.replace(/\\/g, '/')}/**/*";
@source "${layerDir.replace(/\\/g, '/')}/**/*";
@source "../../app.config.ts";`
      }
    })

    // injecte le CSS généré en premier
    nuxt.options.css = [cssTemplate.dst, ...(nuxt.options.css || [])]
  }
})