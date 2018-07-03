<template>
    <div>
        <ul>
            <li v-for="statusList in statusList" v-bind:key="statusList.id" class="downtime-indicator-gr" v-bind:class="{ 'downtime-indicator-rd': statusList.status }" >{{statusList.id}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'status-list',
    components:{

    },
    data(){
        return{
            x: true,
            y: false
        }
    },
    props:[ 'statusList'],
    methods:{

    },
    computed:{

    }
}
</script>

<style>
.downtime-indicator-gr {
    height: 50px;
    width: 50px;
    background-color: green;
    border-radius: 50%;
    display: block;
    margin: 10px 0px 10px 0px;
  }

.downtime-indicator-rd {
    /* height: 50px; */
    /* width: 50px; */
    background-color:red;
    /* border-radius: 50%; */
    /* display: block; */
    /* margin: 10px 0px 10px 0px; */
  }

</style>
