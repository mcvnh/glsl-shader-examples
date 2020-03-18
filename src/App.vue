<template>
  <div id="app">
    <div class="sidebar-container">
      <sidebar :items="menuItems" />
    </div>

    <router-view />
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar';
import ShaderList from '@/shader-list';

export default {
  name: 'App',
  components: {
    Sidebar,
  },
  data: () => ({
    menuItems: ShaderList,
  }),
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Archivo', sans-serif;
  font-size: 14px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.sidebar-container {
  position: fixed;
  right: 0;
  height: 100vh;
  background-color: #ededed;
  width: 250px;
}
</style>
