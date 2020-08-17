<template>
    <div class="skill-level-bar">
        <i class="skill-level-bar__item" v-for="data in iconData">
            <font-awesome-icon :icon="data" size="lg" />
        </i>
    </div>
</template>

<script>

  import iconData from '../_js/skill-level-icon';

  export default {
    name: "SkillLevelBar",
    data: () => {
      return {
        iconData
      }
    }
  }
</script>

<style scoped lang="scss">
    .skill-level-bar {
        background-color: $primary;
        color: whitesmoke;
        padding: 10px 15px;
        display: inline-block;
        border-radius: 8px;
        
        &__item {
            
            &:last-child {
                &::after {
                    content: '';
                    margin: 0;
                }
            }
            
            &::after {
                content: '<';
                margin: 0 8px;
            }
        }
    }
</style>