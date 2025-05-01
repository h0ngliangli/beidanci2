<template>
  <UButton
    variant="ghost"
    color="neutral"
    size="xl"
    class="flex flex-col items-center justify-center whitespace-nowrap"
    @click="goto"
  >
    <UIcon :name="props.icon" class="size-6" mode="svg" />
    <span class="text-sm">{{ props.label }}</span>
  </UButton>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: 'Apple',
  },
  icon: {
    type: String,
    default: 'i-lucide-apple',
  },
  goto: {
    type: String,
    default: '/',
  },
})
const goto = () => {
  useRouter().push(props.goto)
}
</script>
