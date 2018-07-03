<template>
    <div class="col-sm-12">
      <br/>
      <table class="table custom">
        <!-- ===== Table Name ===== -->
        <thead>
          <tr>
            <th width="33%">Mesin</th>
            <th width="33%">Status</th>
            <th width="33%">Antrian</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <!-- ===== Machine Name ===== -->
            <td align="center">
              <!-- Get machine name -->
              <mach-list :machineList='machineList'></mach-list>
            </td>

            <!-- ===== Downtime Status ===== -->
            <td align="center">
              <!-- Get Downtime status from DB -->
              <stat-list :statusList='statusList'></stat-list>
            </td>

            <!-- ===== queue Downtime ===== -->
            <td class="left-border">
              <downtime-list :listdt="listDt"></downtime-list>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
    // Import Vue Components
    import DowntimeCounter from './MachineDt/DowntimeCounter'
    // import DowntimeList from './MachineDt/DowntimeList'
    import machList from './MachineDt/machineList'
    import statList from './MachineDt/statusList'
    
    export default{
      name: 'machine-dt',
      // Registering Vue Components
      components: { DowntimeCounter, machList, statList },
      // Passing data using props from parent component
      props: ['machineList', 'statusList', 'dtList'],
      // data property of vue
      data: () => ({
        listDt: []
      }),
      // executed after mounting proccess
      mounted (){
        // Call a method
        this.getAllDt()
      },
      // Methods property
      methods: {
        getAllDt: function (mid) {
          // HTTP get request with angular JS
          // Get fdowntimelist based on machineid from url pointed to server
          this.$http.get('/device/getdtlist/' + this.machineid).then(ress => {
            // copy data to listDT
            this.listDt = ress.data
          }).catch(error => {
            // error log
            console.log('error data get dt', error.config)
          })
        }
      }
    }
</script>

<style>
</style>
