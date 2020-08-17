<template>
    <a class="link-button" :href="link" target="_blank">
        <font-awesome-icon :icon="iconData" size="lg"></font-awesome-icon>
        <div class="link-button__text">{{ text }}</div>
    </a>
</template>

<script>
  export default {
    name: "LinkButton",
    props: {
      text: {
        required: true,
        type: String,
      },
      iconData: {
        required: true,
        type: Array,
      },
      link: {
        required: true,
        type: String,
      }
    }
  }
</script>

<style scoped lang="scss">
    .link-button {
        color: whitesmoke;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background-color: $disabled;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        transition: .4s;
        cursor: pointer;
        
        &:hover {
            background-color: $primary;
        }
        
        &__text {
            margin-top: 5px;
        }
    }
</style>