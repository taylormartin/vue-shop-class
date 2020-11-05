<template>
  <div>
      <div class="container">
          I'm the child component. I can change the count on the parent.
        <button v-on:click="$emit('decrement')">Decrement</button>
        <button v-on:click="$emit('increment')">Increment</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Child'
}
</script>

<style lang="scss" scoped>
button {
    margin: 5px;
}
</style>
