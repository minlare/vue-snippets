import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import projects from './modules/projects'
import filters from './modules/filters'

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    projects: projects,
    filters: filters
  }
})

export default store
