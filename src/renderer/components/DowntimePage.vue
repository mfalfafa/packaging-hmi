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

      <!-- <router-link to="/logout">Logout</router-link> -->
      <!-- <div class="row">
        <div class="col-sm-8">
          <router-link :class="['btn-machine', 'btn', 'btn-outline-primary', 'btn-sm']" to="/konfigurasi" v-if="$store.state.Login.role === 1">Konfigurasi</router-link>
        </div>

        <div class="col-sm-4 text-right">
          <button type="button" :class="['btn-machine', 'btn', 'btn-outline-primary', 'btn-sm', {'active-machine': machineShow[ind]}]" v-for="(mesin,ind) in mesinList" :key="ind" @click="showMachine(ind)">{{ mesin.name }}</button>
        </div>
      </div> -->

      <div class="col-sm-4 text-right">
          <button type="button" :class="['btn-machine', 'btn', 'btn-outline-primary', 'btn-sm', {'active-machine': machineShow[ind]}]" v-for="(mesin,ind) in mesinList" :key="ind" @click="showMachine(ind)">{{ mesin.name }}</button>
        </div>

      <div class="row">
        <machine-dt v-for="(mesin,ind) in mesinList" :key="ind" :machineid="mesin.id" :machinename="mesin.name" v-show="machineShow[ind]"></machine-dt>
      </div>
    </div>
</template>

<script>
    import MachineDt from './DowntimePage/MachineDt'

    export default {
      name: 'donwtime-page',
      components: { MachineDt },
      data: () => ({
        mesinList: [],
        machineShow: []
      }),
      mounted () {
        this.loadMachine()
        console.log(this.$store.state.Machines.machines)
      },
      methods: {
        showMachine: function (ind) {
          for (let i = 0; i < this.mesinList.length; i++) {
            this.$set(this.machineShow, i, false)
          }
          this.$set(this.machineShow, ind, true)
        },
        loadMachine: function () {
          this.mesinList = this.$store.state.Machines.machines
          this.showMachine(0)
          console.log(this.mesinList);
        }
      }
    }
</script>

<style>
.btn-machine{
    margin-right: 5px;
}
</style>

