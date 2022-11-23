<template>
  <ol>
    <li v-for='post in posts' :key="post.id">
        {{post.title}}
        <button @click="takeId(post.id)">Details</button>
    </li>
  </ol>
</template>

<script>
import { emit } from 'process';

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
    },
    methods:{
        takeId(id){
            this.$router.push('/posts/'+id)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
