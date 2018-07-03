<template>
    <div class="col-sm-12">
      <br/>
      <!-- <span class="badge badge-pill badge-dark"><h3>{{ machinename }}</h3></span> -->
    </div>
</template>

<script>
    // import DowntimeCounter from './MachineDt/DowntimeCounter'
    // import DowntimeList from './MachineDt/DowntimeList'
    
    export default{
      name: 'package-name',
      // components: { DowntimeCounter, DowntimeList },
      props: ['machineid', 'machinename'],
      data: () => ({
        // listDt: []
      }),
      mounted (){
        // this.getAllDt()
      },
      methods: {
        // getAllDt: function (mid) {
          // this.$http.get('/device/getdtlist/' + this.machineid).then(ress => {
          //   this.listDt = ress.data
          // }).catch(error => {
          //   console.log('error data get dt', error.config)
          // })
        // }
      }
    }
</script>