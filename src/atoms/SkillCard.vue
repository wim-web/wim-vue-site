<template>
    <div class="skill-card">
        <div class="skill-card-main">
            <img class="skill-card__image" :src="image.src" :alt="image.alt">
        </div>
        <div class="skill-card-tail">
            <div>
                {{ text }}
            </div>
            <font-awesome-icon class="icon" :icon="iconData" size="lg"></font-awesome-icon>
        </div>
    </div>
</template>

<script>
  export default {
    name: "SkillCard",
    props: {
      iconData: {
        required: true,
        type: Array
      },
      image: {
        required: true,
        type: Object,
      },
      text: {
        required: true,
        type: String,
      }
    },
  }
</script>

<style scoped lang="scss">
    .skill-card {
        width: 200px;
        border-radius: 10px;
        text-align: center;
        box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.3);
        
        &__image {
            width: 90px;
            height: 90px;
        }
        
        &-main {
            padding: 35px 8px;
            background: whitesmoke;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }
        
        &-tail {
            padding: 10px;
            background-color: $primary;
            color: whitesmoke;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }
    }
    
</style>