<template>
    <div>
        <h1>{{val}}</h1>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                val : '测试'
            }
        }
    }
</script>

<style scoped>
    h1{
        font-size: 30px;
        color: pink;
    }
</style>