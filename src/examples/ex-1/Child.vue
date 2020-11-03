<template>
  <div>
      <div class="container">
        <p>{{ staticProp }}</p>
        <p>{{ dynamicProp }}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Child',
  props: {
    staticProp: String,
    dynamicProp: String,
  }
}
</script>
