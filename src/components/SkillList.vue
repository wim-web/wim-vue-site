<template>
    <ul class="skill-list">
        <li v-for="skill in skills" class="skill-list__item">
            <skill-card
                    :icon-data="skill.iconData"
                    :text="skill.text"
                    :image="skill.image"
            />
        </li>
    </ul>
</template>

<script>
  import iconData from '../_js/skill-level-icon';
  import SkillCard from "../atoms/SkillCard";
  
  export default {
    name: "SkillList",
    components: {SkillCard},
    data: () => {
      return {
        skills: [
          {iconData: iconData.four, text: 'Laravel', image: {src: require('@/assets/laravel.png'), alt: 'Laravel'}},
          {iconData: iconData.three, text: 'PHP', image: {src: require('@/assets/php.png'), alt: 'PHP'}},
          {iconData: iconData.two, text: 'Sass', image: {src: require('@/assets/sass.png'), alt: 'Sass'}},
          {iconData: iconData.two, text: 'Vue', image: {src: require('@/assets/vue.png'), alt: 'Vue'}},
          {iconData: iconData.one, text: 'Flutter', image: {src: require('@/assets/flutter.png'), alt: 'Flutter'}},
          {iconData: iconData.two, text: 'AWS', image: {src: require('@/assets/aws.png'), alt: 'AWS'}},
          {iconData: iconData.three, text: 'Docker', image: {src: require('@/assets/docker.png'), alt: 'Docker'}},
          {iconData: iconData.three, text: 'Circle CI', image: {src: require('@/assets/circleci.png'), alt: 'Circle CI'}},
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
    .skill-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        
        &::after {
            content: "";
            display: block;
            width: 30%;
            margin: 20px 10px;
        }
        
        &__item {
            margin: 20px 10px;
            width: 30%;
            display: flex;
            justify-content: center;
        }
    }
</style>