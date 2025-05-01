export const isUserLoggedIn = () => {
  const { loggedIn } = useUserSession()
  return loggedIn
}

export const logoutUser = () => {
  const { clear } = useUserSession()
  clear()
}

export const loginUser = () => {
  const { user } = useUserSession()
  if (user) {
    console.log('User is already logged in', user.value)
    return user
  } else {
    // Redirect to login page or show a message
    console.log('User is not logged in')
    return null
  }
}
