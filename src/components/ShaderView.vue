<template>
  <component v-if="current" :is="current.shader" />
</template>

<script>
import ShaderList from '@/shaders/shader-list';

export default {
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },

  computed: {
    current() {
      return ShaderList.find(it => it.id === +this.id);
    }
  }
}
</script>
