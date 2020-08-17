<template>
    <ul class="menu-bar">
        <li v-for="menu in menuList" class="menu-bar__item">
            <MenuItem
                    :icon-data="menu.iconData"
                    :text="menu.text"
                    :handle-click="() => handleClickMenu(menu.text, menu.path)"
                    :is-active="$route.path === menu.path"
                    :key="menu.text"
            />
        </li>
    </ul>
</template>

<script>
  import MenuItem from "../atoms/MenuItem";
  
  export default {
    name: "MenuBar",
    components: {MenuItem},
    data: () => {
      return {
        menuList: [
          {text: 'Skill', isActive: true, iconData: ['fas', 'bolt'], path: '/'},
          {text: 'About', isActive: false, iconData: ['far', 'address-card'], path: '/about'},
          {text: 'Link', isActive: false, iconData: ['fas', 'link'], path: '/link'},
        ],
      }
    },
    methods: {
      handleClickMenu(text, path) {
        this.$router.push(path);
      },
    }
  }
</script>

<style scoped lang="scss">
    .menu-bar {
        display: flex;
        justify-content: center;
        
        &__item {
            width: 100px;
            margin-right: 20px;
            
            &:last-child {
                margin-right: 0;
            }
        }
    }
</style>