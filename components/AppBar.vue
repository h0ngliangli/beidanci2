<template>
  <div class="flex items-center justify-between border-b p-4">
    <!--标题 -->
    <AppBarTitle />
    <!-- 功能菜单栏 -->
    <div class="flex items-center space-x-4">
      <AppBarButton
        icon="i-lucide-apple"
        label="复习"
        goto="/review"
      />

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
    <!-- 用户/配置菜单栏 -->
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
