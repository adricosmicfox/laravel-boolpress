<template>
  <ol>
    <li v-for='post in posts' :key="post.id">{{post.title}}</li>
  </ol>
</template>

<script>
export default {
    name: 'ListPostComponent',
    data(){
        return{
            posts:[]
        }
    },
    mounted(){
        axios.get('/api/posts').then((response)=>{
            console.log(response);
            this.posts=response.data;
        })
    }

}
</script>

<style lang="scss" scoped>

</style>
