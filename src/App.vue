<template lang="pug">
div
  h1 Hello world!   
</template>

<script>
import Todolist from './components/Todolist.vue'
export default {
    data(){
        return{
            message: ''
        }
    },
    components: {
        Todolist
    }
}
</script>

<style lang="scss">
    .app{
        color: red;
    }
</style>