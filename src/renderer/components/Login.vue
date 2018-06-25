<template>
    <div class="container">

      <div class="row">
        <div class="col-sm-6">
          <div class="brand-logo"></div>
        </div>
        <div class="col-sm-6 text-right">
          <br/>
          <!-- ================== Line Info ==================  -->
          <!-- &amp; = & -->
          <span class="border border-primary" style="padding: 10px; background:#fff; color: #4061D7; font-weight: bold;">HMI PACKAGING LINE 23</span>
        </div>
      </div>

      <div class="col-sm-6 offset-sm-3">
        <br/>

        <!-- If user is not login before -->
        <div v-if="$store.state.Login.userid === 0">
          <!-- ===== Please Insert RFID ===== -->
          <div class="text-center">
            <br/>
            <!-- ================== Line Info ==================  -->
            <!-- &amp; = & -->
            <span class="" style="padding: 10px 30px 10px 30px; background:#FFC107; color:#fff; font-weight: bold; font-family: sans-serif; font-size: 24px;">Tempelkan RFID</span><br/><br/>
            <input type="text" id="rfid" class="form-control" v-model="user" @keyup.enter="postLogin()" v-focus="selFocus">
          </div>
        </div>

        <!-- If login success -->
        <div class="text-center" v-if="$store.state.Login.userid !== 0">
          <h1 class="h3 mb-3 font-weight-normal">Berhasil login</h1>
          <router-link :class="['btn-machine', 'btn', 'btn-outline-primary', 'btn-sm']" to="/downtimepage">Tekan untuk melanjutkan</router-link>
          <!-- <router-link to="/downtimepage">Go to Bar</router-link> -->
        </div>

        <!-- <div class="form-signin">
          <div v-if="$store.state.Login.userid === 0">
            <h1 class="h3 mb-3 font-weight-normal text-center">Login</h1>
            <div class="form-group">
              <label for="rfid">RFID</label> 
              <input type="text" id="rfid" class="form-control" v-model="user" @keyup.enter="postLogin()" v-focus="selFocus">
              <small class="form-text">Tap kartu anda</small>
            </div>
            <div class="form-group">
              <br/><br/>
            </div>
            <button class="btn btn-warning btn-block" @click="selFocus = !selFocus">SIGN IN</button>
          </div>
          <div v-if="$store.state.Login.userid !== 0">
            <h1 class="h3 mb-3 font-weight-normal text-center">Berhasil login</h1>
            <router-link :class="['btn-machine', 'btn', 'btn-outline-primary', 'btn-sm']" to="/downtimepage">Tekan untuk melanjutkan</router-link>
          </div>
        </div> -->
      </div>

      <!-- <div class="row"> -->
        <!-- ====== For not registered RFID Card ====== -->
        <div class="text-center" id="failed-login" style="color: #B5211F; font-size: 24px; visibility: hidden;">
          <br/>
          <span>RFID yang ditempelkan tidak terdaftar</span> <br/>
          <span>- COBA KEMBALI -</span>
        </div>
      <!-- </div> -->
      <!-- =================== MV Copyright part =================== -->
      <!-- <div class="row"> -->
        <div class="" style="position: absolute; left: 0; bottom: 0;">
          <span class="" style="padding: 0px 0px 0px 10px; color: #000;">&copy;MachineVision2018</span>
        </div>

        <div class="" style="position: absolute; right: 0; bottom: 0; padding: 0 0 0 0;">
          <div class="bottom-right-corner"></div>
        </div>
      <!-- </div> -->

      <!-- <div class="row">
        <div class="col-sm-6">
          <br/><br/><br/><br/>
          <span class="copyright">&copy;MachineVision2018</span>
        </div>
        <div class="col-sm-6 text-right">
        </div>
      </div> -->
      <!-- ========================================================= -->
    </div>
</template> 

<!-- ##################### Javascript Part #####################  -->
<script>
    import { focus } from 'vue-focus'

    export default {
      name: 'login',
      directives: { focus: focus },
      data: () => ({
        user: '',
        selFocus: true
      }),
      beforeMount () {
        this.$store.commit('setOffLogin')
      },
      methods: {
        postLogin: function () {
          this.$http.post('/device/loginrfid', {rfid: this.user}).then(ress => {
            document.getElementById("failed-login").style.visibility = "hidden"; 
            this.$store.commit('updateLogin', {userid: ress.data.userid, role: ress.data.role, username: ress.data.username})
            this.loadStart()
          }).catch(error => {
            console.log('login gagal', error.response.data);
            document.getElementById("failed-login").style.visibility = "visible"; 
          })
          this.user = ''
        },
        loadStart: function(){
          var vm = this
          //this.$db.findOne({_id: 'wtB7GdFkV5SaQI8m'}, function(err,doc){
          this.$db.findOne({machid: '2001'}, function(err,doc){
            //set for store
            vm.$store.commit('updateWebServiceUrl',doc.webserviceurl) //webservice url
            vm.$store.commit('updateMachines',doc.machines) //machines

            vm.$http.get('/devices/loadreason').then(ress => {
              let reas = {
                mainreason: ress.data.mainreason,
                subreason: ress.data.subreason
              }
              vm.$store.commit('updateReason',reas)
            }).catch(error => {
              console.log('error get reason', error.response.data)
            })
          })
        }
      }
    }
</script>
