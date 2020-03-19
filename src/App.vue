<template>
  <div id="app">
    <div class="sidebar-container">
      <sidebar />
    </div>

    <router-view />
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar';

export default {
  name: 'App',
  components: {
    Sidebar,
  },
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
