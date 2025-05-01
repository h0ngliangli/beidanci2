<template>
  <div>
    <UButton variant="ghost" color="neutral" size="xl" @click="$emit('click')">
      <div class="flex flex-col items-center justify-center">
        <UIcon :name="props.icon" class="size-6" mode="svg" />
        <span class="text-sm">{{ props.label }}</span>
      </div>
    </UButton>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "Apple",
  },
  icon: {
    type: String,
    default: "i-lucide-apple",
  },
})
</script>
