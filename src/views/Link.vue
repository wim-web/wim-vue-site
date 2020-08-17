<template>
    <div class="link-button-list">
        <link-button
                class="link-button-list__item"
                v-for="link in links"
                :text="link.text"
                :icon-data="link.iconData"
                :link="link.link"
        />
    </div>
</template>

<script>
  import LinkButton from "../atoms/LinkButton";

  export default {
    name: "Link",
    components: {LinkButton},
    data: () => {
      return {
        links: [
          {text: 'Twitter', iconData: ['fab', 'twitter'], link: 'https://twitter.com/wim_web'},
          {text: 'Github', iconData: ['fab', 'github'], link: 'https://github.com/wim-web'},
          {text: 'Qiita', iconData: ['fas', 'link'], link: 'https://qiita.com/wim'},
        ],
      }
    }
  }
</script>

<style scoped lang="scss">
    .link-button-list {
        display: flex;
        justify-content: center;
        
        &__item {
            margin-right: 20px;
            
            &:last-child {
                margin-right: 0;
            }
        }
    }
</style>