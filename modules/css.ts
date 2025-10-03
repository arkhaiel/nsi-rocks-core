import { defineNuxtModule, addTemplate, createResolver } from '@nuxt/kit'
import { joinURL } from 'ufo'
import { resolveModulePath } from 'exsolve'

export default defineNuxtModule({
  meta: { name: 'css' },
  async setup(_options, nuxt) {
    const dir = nuxt.options.rootDir
    const resolver = createResolver(import.meta.url)

    const contentDir = joinURL(dir, 'content')
    const uiPath = resolveModulePath('@nuxt/ui', { from: import.meta.url, conditions: ['style'] })
    const tailwindPath = resolveModulePath('tailwindcss', { from: import.meta.url, conditions: ['style'] })
    const layerDir = resolver.resolve('../app')

    const cssTemplate = addTemplate({
      filename: 'nsi-core.css',
      getContents: () => {
        const content =  `@import "${tailwindPath}";
@import "${uiPath}";

@source "${contentDir.replace(/\\/g, '/')}/**/*";
@source "${layerDir.replace(/\\/g, '/')}/**/*";
@source "../../app.config.ts";`
        console.info('CSS template content:\n', content)
        return content
      }
    })

    nuxt.options.css.unshift(cssTemplate.dst)
  }
})