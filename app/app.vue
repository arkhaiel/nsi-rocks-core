<script setup lang="ts">
</script>

<template>
  <UApp>
    <UHeader title="nsi.rocks">
      <template #right>
        <UContentSearchButton label="" />
        <ClientOnly>
          <UColorModeSwitch />
        </ClientOnly>
      </template>
    </UHeader>
    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>
  </UApp>
</template>
