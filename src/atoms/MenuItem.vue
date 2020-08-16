<template>
    <div v-on:click="handleClick" class="menu-item" :class="{ 'menu-item--active': isActive }">
        <div class="menu-item__icon" :class="{ 'menu-item__icon--active': isActive }">
            <font-awesome-icon :icon="iconData" size="3x"></font-awesome-icon>
        </div>
        <p class="menu-item__text" :class="{ 'menu-item__text--active': isActive }">
           {{ text }}
        </p>
    </div>
</template>

<script>
  export default {
    name: "MenuItem",
    props: {
      handleClick: {
        type: Function,
      },
      iconData: {
        required: true,
        type: Array,
      },
      text: {
        required: true,
        type: String,
      },
      isActive: {
        type: Boolean,
        default: false,
      }
    },
  }
</script>

<style scoped lang="scss">
    
    .menu-item {
        text-align: center;
        transition: .6s;
        border-bottom: 3px $disabled solid;
        padding: 10px;
        cursor: pointer;
        
        &--active {
            border-bottom: 3px $accent solid;
        }
        
        &__icon, &__text {
            transition: .6s;
            color: $disabled;
            
            &--active {
                color: $accent;
            }
        }
    }
    
</style>