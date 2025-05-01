export const isDarkMode = computed(() => {
  const colorMode = useColorMode()
  return colorMode.value === 'dark'
})

export const toggleColorMode = () => {
  const colorMode = useColorMode()
  colorMode.preference = isDarkMode.value ? 'light' : 'dark'
}
