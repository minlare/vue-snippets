<template>
  <div class="project">
    <h3>{{name}}</h3>
    <p>{{description}}</p>
    <router-link :to="{ name: 'project/view', params: { id: id }}">Read More</router-link>
  </div>
</template>

<script>
export default {
  props: ['id', 'name', 'description']
}
</script>
