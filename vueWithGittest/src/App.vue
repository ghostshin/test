<template>
  <div id="app">

    <h1>使用router-link</h1>
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>

    <!-- <router-link to="/home" tag="button" replace="">首页</router-link>
    tag:用来搞样子
    replace:用来搞重定向
    -->
    <h1>使用router-link和tag=button重定向</h1>
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>

    <h1>使用 this.$router.push(url)</h1>
    <button @click="showHome">首页</button>
    <button @click="showAbout">关于</button>
    
    <h1>使用 this.$router.replace(url)</h1>
    <button @click="showHome2">首页</button>
    <button @click="showAbout2">关于</button>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods:{
      showHome(){
        this.$router.push('/home');
      },
      showAbout(){
        this.$router.push('/about')
      },
      showHome2(){
        this.$router.replace('/home');
      },
      showAbout2(){
        this.$router.replace('/about')
      }
    }


  }
</script>

<style>
  .router-link-active {
    color: red;
  }
</style>
