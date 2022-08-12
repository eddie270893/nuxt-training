export const state = () => ({
  isLoggedIn: false,
  userName: '',
  counter: 5,
})

export const mutations = {
  increment(state) {
    // api
    state.counter++
  },

  setLogin(state) {
    state.isLoggedIn = true
  },

  setLogout(state) {
    state.isLoggedIn = false
  }
}
