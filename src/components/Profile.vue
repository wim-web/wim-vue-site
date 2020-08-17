<template>
    <div class="profile">
        <Avatar class="avatar-size" />
        <h2>うぃむ</h2>
        <p>そこら辺のWebエンジニア</p>
    </div>
</template>

<script>
  import Avatar from "../atoms/Avatar";

  export default {
    name: "Profile",
    components: {Avatar}
  }
</script>

<style scoped lang="scss">
    
    .profile {
        text-align: center;
    }
    
    .avatar-size {
        height: 200px;
        width: 200px;
        margin-bottom: 10px;
    }
</style>