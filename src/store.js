import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
			planStep: 0,
			maxStep: 4
    }
  },
})

export default store
