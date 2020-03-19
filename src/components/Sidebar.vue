<template>
  <div id="sidebar">
    <router-link
      v-for="shader in shaderLists"
      :key="shader.id"
      :to="{ name: 'shader-view', params: { id: shader.id }}"
      tag="div"
      class="sidebar-item"
    >
      {{ shader.label }}
    </router-link>
  </div>
</template>

<script>
import ShaderList from '@/shaders/shader-list';

export default {
  data: () => ({
    shaderLists: ShaderList,
  })
}
</script>

<style lang="css" scoped>
.sidebar-item {
  line-height: 2.5rem;
  padding: 0 10px;
  border-bottom: 1px solid #fdfdfd;
  cursor: pointer;
}

.sidebar-item.router-link-exact-active {
  background-color: rgba(0, 0, 0, .2);
}
</style>
