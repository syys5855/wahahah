<template>
  <div class="container-fluid bg-full">

  </div>
</template>

<script>

export default {
  name: 'bg'
}
</script>

<style lang="scss" scoped>
.bg-full {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: url(/static/img/bg.4250751.jpg) center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
}
</style>
