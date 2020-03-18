<template>
  <div class="content">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
.content {
  width: calc(100% - 250px);
  height: 100%;
}

</style>
