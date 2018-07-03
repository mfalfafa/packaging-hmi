<template>
    <div class="container-fluid">
      <!-- ===== For Logout Buuton and Line Info ===== -->
      <div class="row" style="margin-bottom: 5px;">
        <div class="col-sm-6">
          <!-- ===== Logout Button ===== -->
          <button class="btn-machine btn btn-sm" type="button" style="background: #CF582E; color: #fff; font-size: 18px; font-weight: bold;">Logout</button>
        </div>
        <div class="col-sm-6 text-right">
          <!-- ================== Line Info ==================  -->
          <span class="border border-primary" style="padding: 10px; background:#fff; color: #4061D7; font-weight: bold;">HMI PACKAGING LINE 23</span>
        </div>
      </div>

      <!-- ===== For Username and Time Info ===== -->
      <div class="row" style="color: #C1272D; font-weight: bold; font-size: 18px;">
        <div class="col-sm-6">
          <!-- For username -->
          <span style="padding: 10px 0px 10px 0px;">Faiz Ulala</span>
        </div>
        <div class="col-sm-6 text-right">
          <!-- ================== Line Info ==================  -->
          <span class="" style="padding: 10px 0px 10px 0px;">08:00</span>
        </div>
      </div>

      <machine-dt :machineList='mesinList' :statusList='statusList'></machine-dt>

      <div class="row">
        <!-- <machine-dt v-for="(mesin,ind) in mesinList" :key="ind" :machineid="mesin.id" :machinename="mesin.name" :machineList='mesinList' v-show="machineShow[ind]"></machine-dt> -->
      </div>
    </div>
</template>

<script>
    // Import vue components
    import MachineDt from './DowntimePage/MachineDt'

    export default {
      name: 'donwtime-page',
      // Registering Child Component
      components: { MachineDt},
      // Data
      data: () => ({
        // Get Main List from DB
        mesinList: [],
        // Get status List from DB
        statusList:[
          {id:1, status: false},
          {id:2, status: true},
          {id:3, status: false},
          {id:4, status: true}
        ],
        machineShow: [],
      }),
      // Executed after mounting proccess
      mounted () {
        this.loadMachine()
        // console.log(this.$store.state.Machines.machines)
      },
      // Methods
      methods: {
        showMachine: function (ind) {
          // Showing all machines with disable (false) state
          for (let i = 0; i < this.mesinList.length; i++) {
            this.$set(this.machineShow, i, false)
          }
          // Showing just machine 0 with enable (true) state
          this.$set(this.machineShow, ind, true)
        },
        // Load all machines
        loadMachine: function () {
          // Saving all machines to mesinList
          this.mesinList = this.$store.state.Machines.machines
          // Enable (true) state for machine 0
          this.showMachine(0)
          
          // console.log(this.mesinList.name);
        }
      }
    }
</script>

<style>
.btn-machine{
    margin-right: 5px;
}
</style>

