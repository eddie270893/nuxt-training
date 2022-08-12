const cookieparser = process.server ? require('cookieparser') : undefined


export const state = () => ({
  counter: 1,
  items: []
})

export const getters = {
  getCounter(state) {
    return state.counter
  },
  totalItems(state) {
    return state.items.length;
  }
}

export const mutations = {
  increment(state) {
    // api
    state.counter++
  },

  descrement(state) {
    state.counter--
  },

  incementByValue(state, payload) {
    state.counter = state.counter + payload.value
  }
}

export const actions = {
  actionIncrement(context, payload) {
    console.log('context', context);
    // Api
    context.commit('increment');
  },

  nuxtServerInit(storeContext, nuxtContext) {
    const parsered = cookieparser.parse(nuxtContext.req.headers.cookie);
    if (parsered.token) {
      storeContext.commit('auth/setLogin')
    }
  }
}
