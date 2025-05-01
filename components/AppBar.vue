<template>
  <div class="flex items-center justify-between p-4 border-b">
    <div class="text-lg font-bold shrink-0">背单词</div>
    <div class="flex items-center space-x-4">
        <AppBarButton
          icon="i-lucide-apple"
          label="复习"
          @click="$router.push('/review')"
        />
      <UButton variant="ghost" color="neutral">
        <UIcon name="i-lucide-apple" class="size-6" mode="svg" />
      </UButton>
      <UButton
        icon="i-lucide-apple"
        color="neutral"
        size="xl"
        variant="ghost"
        @click="$router.push('/review')"
      />
      <UButton
        icon="i-lucide-circle-plus"
        color="neutral"
        size="xl"
        variant="ghost"
        @click="$router.push('/words')"
      />
      <UButton
        icon="i-lucide-book"
        color="neutral"
        size="xl"
        variant="ghost"
        @click="$router.push('/books')"
      />
    </div>
    <div class="flex items-center space-x-4 border">
      <UButton icon="i-lucide-user" color="neutral" size="xl" variant="ghost" />
      <UButton icon="i-lucide-bell" color="neutral" size="xl" variant="ghost" />
      <UButton
        icon="i-lucide-settings"
        color="neutral"
        size="xl"
        variant="ghost"
      />
      <ColorModeButton />
      <UButton
        icon="i-lucide-log-out"
        color="neutral"
        size="xl"
        variant="ghost"
      />
    </div>
  </div>
</template>
