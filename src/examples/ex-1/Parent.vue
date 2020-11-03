<template>
  <div class="container">
    <p>I'm the parent component</p>
    <Child staticProp='I am a static prop' :dynamicProp=dynamicProp />
  </div>
</template>

<script>
import Child from '@/examples/ex-1/Child.vue'

export default {
  name: 'Parent',
  components: {
      Child
  },
  data: () => {
      return { dynamicProp: 'I am a dynamic prop' }
  }
}
</script>

<style lang="scss" scoped>
.container {
    max-width: 400px;
}
</style>