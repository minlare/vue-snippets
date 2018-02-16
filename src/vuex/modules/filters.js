export default {
  namespaced: true,
  state: {
    search: '',
    filters: [
      {
        attribute: 'color',
        values: [
          { name: 'red', active: false },
          { name: 'blue', active: false },
          { name: 'green', active: false }
        ]
      },
      {
        attribute: 'size',
        values: [
          { name: 'small', active: false },
          { name: 'medium', active: false },
          { name: 'large', active: false }
        ]
      }
    ]
  },
  mutations: {
    setSearch (state, search) {
      state.search = search
    },
    toggleFilterValue (state, data) {
      state.filters.find(filter => filter.attribute === data.attribute).values.find(value => value.name === data.value).active = data.active
    }
  },
  getters: {
    search: (state) => state.search,
    filters: (state) => state.filters,
    filter: (state) => (attribute) => {
      return state.filters.find(filter => filter.attribute === attribute)
    },
    activeFilters: (state) => {
      let activeFilters = {}
      state.filters.filter(filter => {
        const filterValues = filter.values.filter(value => value.active).map(value => value.name)
        if (filterValues.length) {
          activeFilters[filter.attribute] = filterValues
        }
      })
      return activeFilters
    }
  }
}
