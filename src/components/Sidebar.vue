<template>
  <div id="sidebar">
    <div
      v-for="item in items"
      :key="item.id"
      :class="{ selected: value && value.id === item.id, 'sidebar-item': true }"
      @click="onItemClick(item)"
    >
      {{ item.label }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: undefined,
    },

    items: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    onItemClick(item) {
      this.$router.push({ name: 'shader-view', params: { id: item.id } })
    }
  }
}
</script>

<style lang="css" scoped>
.sidebar-item {
  line-height: 2.5rem;
  padding: 0 10px;
  border-bottom: 1px solid #fdfdfd;
  cursor: pointer;
}

.sidebar-item.selected {
  background-color: rgba(0, 0, 0, .2);
}
</style>
