<template>
    <div>
        <ul>
            <li v-for="link in links" :key="link.path">
                <router-link :to="link.path">
                    {{link.name}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'NavbarComponent',
    props: {links:Array}
}
</script>

<style lang="scss" scoped>

</style>
