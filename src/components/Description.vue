<template>
  <div>
    {{ description }}
  </div>
</template>

<script>
export default {
  name: 'Description',
  props: {
    description: String
  }
}
</script>

<style scoped lang="scss">
div {
    margin: 10px 0;
}
</style>