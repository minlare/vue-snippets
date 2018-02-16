<template>
  <div>
    <h4>{{attribute | capitalize}}</h4>
    <div v-for="value in values" :key="value.name">
      <input type="checkbox" v-bind:value="value.name" v-bind:checked="value.active" @click="toggleFilterValue">
      <span>{{value.name | capitalize}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['attribute', 'values'],
  methods: {
    toggleFilterValue (e) {
      this.$store.commit('filters/toggleFilterValue', {
        attribute: this.attribute,
        value: e.target.value,
        active: e.target.checked
      })
    }
  },
  filters: {
    capitalize (value) {
      if (!value) return ''
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>
