<template>
  <div class="flex items-center justify-between border-b">
    <!--标题 -->
    <AppBarTitle />
    <!-- 功能菜单栏 -->
    <div class="flex">
      <AppBarButton icon="i-lucide-apple" label="复习" goto="/review" />
      <AppBarButton icon="i-lucide-circle-plus" label="添加" goto="/add" />
      <AppBarButton icon="i-lucide-book" label="单词本" goto="/words" />
    </div>
    <AppBarMenu />
  </div>
</template>
