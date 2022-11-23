<template>
  <div>
    <NavbarComponent :links="NavbarLinks"/>
   <router-view></router-view>
  </div>
</template>

<script>

import NavbarComponent from '../components/NavbarComponent.vue';
export default {
name:'App',
components: {
NavbarComponent
    },
    data(){
        return{
            NavbarLinks:[
            {
                path:'/',
                name: 'Home'
            },
            {
                path:'/posts',
                name: 'Blog'
            },
            ]
        }
    }

}
</script>

<style>

</style>
