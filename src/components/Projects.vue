<template>
  <div>
    <h1>Projects</h1>
    <Filters/>
    <div class="projects">
      <template v-for="project in filteredProjects">
        <transition :key="project.id" name="fade" appear>
          <Project v-bind="project"/>
        </transition>
      </template>
    </div>
  </div>
</template>

<script>
import Project from './Project'
import Filters from './Filters'

export default {
  components: {
    Project,
    Filters
  },
  data () {
    return {
      projects: this.$store.getters['projects/projects']
    }
  },
  computed: {
    filteredProjects () {
      let searchFiltersProjects = this.projects.filter(project => {
        return project.name.toLowerCase().indexOf(this.$store.getters['filters/search']) > -1
      })
      const activeFilters = this.$store.getters['filters/activeFilters']
      for (var filter in activeFilters) {
        searchFiltersProjects = searchFiltersProjects.filter(project => project[filter.toLowerCase()].some(r => activeFilters[filter].includes(r)))
      }
      return searchFiltersProjects
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.projects {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: row;
}
.project {
  padding: 20px 40px;
}
</style>
