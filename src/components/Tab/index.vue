<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="v.name" :name="v.name" v-for="(v,i) in tabList" :key="i"></el-tab-pane>
    </el-tabs>
</template>

<script>
export default {
    name:"Tab",
    props:{
        tabList:{
            type:Array,
            default:()=>[]
        }
    },
    methods:{
        handleClick(v){
            this.$router.push({path:v.url})
        }
    }

}
</script>

<style lang="scss" scoped>

</style>