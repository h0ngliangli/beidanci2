<template>
  <UDropdownMenu size="xl" :items="items">
    <UButton color="neutral" size="xl" variant="outline">
      <UIcon name="i-lucide-menu" class="size-6" mode="svg" />
    </UButton>
  </UDropdownMenu>
</template>

<script setup>
const items = ref([
  {
    icon: 'i-lucide-user',
    label: '登陆/登出',
    onSelect: () => {
      useRouter().push('/login')
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
