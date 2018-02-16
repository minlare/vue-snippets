<template>
  <div>
    <input type="text" v-model="search" placeholder="Search for projects">
    <div class="filters">
      <Filtr v-for="filter in filters" :key="filter.id" v-bind="filter"></Filtr>
    </div>
  </div>
</template>

<script>
import Filtr from './Filter'

export default {
  components: {
    Filtr
  },
  data () {
    return {
      filters: this.$store.getters['filters/filters']
    }
  },
  computed: {
    search: {
      set (term) {
        this.$store.commit('filters/setSearch', term)
      },
      get () {
        return this.$store.getters['filters/search']
      }
    },
    activeFilters () {
      return this.$store.getters['filters/activeFilters']
    }
  }
}
</script>
