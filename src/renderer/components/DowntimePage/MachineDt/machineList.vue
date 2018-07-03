<template>
    <div>
        <h3 class="lists" v-for="machine in machineList" v-bind:key="machine.id">{{machine.name}}</h3>
    </div>
</template>

<script>
export default {
    name: 'machine-list',
    components:{},
    data(){
        return{

        }
    },
    props: ['machineList'],
    methods: {

    }
}
</script>

<style>
    .lists{
        padding: 8px 0px 8px 0px;
        margin: 10px 0px 10px 0px;
        background-color: aqua;
    }
</style>
