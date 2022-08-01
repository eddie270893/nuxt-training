export default function ({ redirect, store }) {
  // If the user is not authenticated
  if (!store.state.auth.isAuthenticated) {
    return redirect('/')
  }

}
