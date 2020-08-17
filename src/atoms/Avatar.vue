<template>
    <img src="../assets/icon.jpg" alt="wim-icon" class="round">
</template>

<script>
  export default {
    name: "Avatar",
  }
</script>

<style scoped lang="scss">
    .round {
        border-radius: 50%;
        border: 3px $primary solid;
    }
</style>