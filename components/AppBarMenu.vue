<template>
  <UDropdownMenu size="xl" :items="items">
    <UButton color="neutral" size="xl" variant="outline">
      <UIcon name="i-lucide-menu" class="size-6" mode="svg" />
    </UButton>
    <template v-if="isUserLoggedIn()" #content-top>
      <div class="flex flex-col items-center p-2">
        <UAvatar
          :src="loginUser().value.picture"
          :alt="loginUser().value.name"
          class="mb-2 size-24"
        />
        <span class="text-sm">{{ loginUser().value.name }}</span>
      </div>
    </template>
  </UDropdownMenu>
</template>

<script setup>
const items = ref([
  {
    icon: 'i-lucide-user',
    label: computed(() => (isUserLoggedIn().value ? '登出' : '登录')),
    onSelect: async () => {
      if (!isUserLoggedIn().value) {
        await navigateTo('/api/auth/google', { external: true })
      } else {
        logoutUser()
        navigateTo('/')
      }
    },
  },
  {
    label: computed(() => (isDarkMode.value ? '开灯' : '关灯')),
    icon: computed(() => (isDarkMode.value ? 'i-lucide-sun' : 'i-lucide-moon')),
    onSelect: () => {
      toggleColorMode()
    },
  },
])
</script>
