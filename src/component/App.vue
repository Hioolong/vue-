<template>
    <div>
        this is root component,{{ introduce }}
    </div>
</template>

<script>
    export default {
        data(){
            return {
                introduce:'and my name is curry'
            }
        }
    }
</script>

<style scoped>
    div{
        color: blue;
        background-color: yellow;
        height: 100px;
    }
</style>