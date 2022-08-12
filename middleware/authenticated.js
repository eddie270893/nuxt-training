export default function (nuxtContext) {
  // If the user is not authenticated
  if (!nuxtContext.store.state.auth.isLoggedIn) {
    return nuxtContext.redirect('/')
  }

}
