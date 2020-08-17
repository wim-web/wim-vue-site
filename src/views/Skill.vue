<template>
    <div class="skill">
        <skill-level-bar class="skill__bar"/>
        <skill-list />
    </div>
</template>

<script>
  import SkillList from "../components/SkillList";
  import SkillLevelBar from "../components/SkillLevelBar";

  export default {
    name: "Skill",
    components: {SkillLevelBar, SkillList},
  }
</script>

<style scoped lang="scss">
    .skill {
        text-align: center;
        
        &__bar {
            margin-bottom: 40px;
        }
    }
</style>