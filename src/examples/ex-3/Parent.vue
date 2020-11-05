<template>
  <div class="container">
    <p>I'm the parent component. I'm keeping up with the count.</p>
    <div>Count: {{count}}</div>
    <Child
        v-on:increment="count += $event"
        v-on:decrement="count -= $event"
    />
  </div>
</template>

<script>
import Child from '@/examples/ex-3/Child.vue'

export default {
  name: 'Parent',
  components: {
      Child
  },
  data: () => {
      return { count: 0 }
  }
}
</script>

<style lang="scss" scoped>
.container {
    max-width: 400px;
}
</style>