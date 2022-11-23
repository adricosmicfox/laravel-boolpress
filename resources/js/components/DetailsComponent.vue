<template>
    <div v-if="post">
        {{post.content}}
    </div>
</template>

<script>
export default {
    data(){
        return{
            post:undefined
        }
    },
    methods:{
        saveDetails(url){
            axios.get('api/posts/'+url).then((response)=>{
                if(response.status == 200)
                console.log(response)
                this.post=response.data
            })
        }
    },
    mounted(){
        const idUrl = this.$route.params.id
        this.saveDetails(idUrl)
    }
}
</script>

<style lang="scss" scoped>

</style>
