<template>
  <div class="q-pa-md q-gutter-sm">
    <q-banner inline-actions rounded class="bg-orange text-white" v-show="is_failure">
      Error: {{err_msg}}
      <template v-slot:action>
        <q-btn flat label="Dismiss" />
      </template>
    </q-banner>
  </div>
  <div class="q-pa-md row justify-center" >
    <div style="width: 100%; max-width: 500px">
      <q-card class="my-card">
        <q-card-section>
          <div class="row justify-center">
            <q-btn round @click="show_avatars = true">
              <q-avatar size="64px">
                <img :src="getHumanAvatarPath">
              </q-avatar>
              <q-tooltip>
                Pick an Avatar
              </q-tooltip>
            </q-btn>
          </div>

          <div class="row justify-center text-caption">{{username}}</div>
          <div class="row justify-center text-body1 q-ma-md">Account tier:&nbsp;<div style="color: goldenrod;">{{account_tier}}</div></div>
          <div class="row justify-center text-body1 q-ma-md">Subscription status: {{subscription_status}}</div>
          <div class="row justify-center q-ma-md">
            <q-btn
              color="pink"
              outline
              v-close-popup
              label="Manage Billing"
              @click="manage_billing"
              class="q-mx-xs"
            />
          </div>
        </q-card-section>
      </q-card>
    </div>
   </div>

       <q-dialog v-model="show_avatars">
      <q-card class="my-card" style="width:400px;">
        <q-card-section>
          <div class="text-h6">Pick your avatar:</div>
        </q-card-section>
        <q-card-section>
          <div class="q-pa-md" >
            <q-list bordered separator>
              
              <q-item clickable v-ripple @click="set_avatar('human_1')">
                <q-item-section>
                  <q-avatar>
                    <img src="../assets/human_1.png">
                  </q-avatar>
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple @click="set_avatar('human_2')">
                <q-item-section>
                  <q-avatar>
                    <img src="../assets/human_2.png">
                  </q-avatar>
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple @click="set_avatar('human_3')">
                <q-item-section>
                  <q-avatar>
                    <img src="../assets/human_3.png">
                  </q-avatar>
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple @click="set_avatar('human_4')">
                <q-item-section>
                  <q-avatar>
                    <img src="../assets/human_4.png">
                  </q-avatar>
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple @click="set_avatar('human_5')">
                <q-item-section>
                  <q-avatar>
                    <img src="../assets/human_5.png">
                  </q-avatar>
                </q-item-section>
              </q-item>

            </q-list>
          </div>
        </q-card-section>

        <q-separator />
        <q-card-actions align="right">
          <q-btn v-close-popup outline color="pink" label="Okay" />
        </q-card-actions>
      </q-card>
    </q-dialog>

</template>

<script>
import { defineComponent, ref } from 'vue'
import axios from "axios"

export default defineComponent({
  name: 'UserSettingsPage',
  data: function (){
    return {
      username: null,
      user_id: null,
      avatar:'human_1',
      bot_avatar: 'default',
      is_updating: false,
      err_msg : '',
      is_failure: false,
      is_signed_in: false,
      is_loading: false,
      stripe_customer_id: null,
      subscription_status: '',
    }
  },
  computed:{
    account_tier(){
      var vm = this;
      if (vm.subscription_status === 'active'){
        return "Premium"
      } else {
        return "Free"
      }
    },
    getHumanAvatarPath() {
      var vm = this;
      if (vm.is_loading){
        return `${process.env.ICON_PATH}/white_square.png`;
      } else {
        if (vm.avatar === 'human_2') {
          return `${process.env.ICON_PATH}/human_2.png`
        } else if (vm.avatar === 'human_3'){
          return `${process.env.ICON_PATH}/human_3.png`
        } else if (vm.avatar === 'human_4'){
          return `${process.env.ICON_PATH}/human_4.png`
        } else if (vm.avatar === 'human_5'){
          return `${process.env.ICON_PATH}/human_5.png`
        } else {
          return `${process.env.ICON_PATH}/human_1.png`
        }
      }
    }
  },
  created: function (){
    var vm = this; // vm = view model, the vue instance
    if (localStorage.user_id) {
      vm.user_id = localStorage.user_id;
      vm.is_signed_in = true;
      vm.username = localStorage.username;
    };
    vm.get_billing_details();
  },
  methods: {
    get_billing_details: function(){
      var vm = this;
      axios.get(`${process.env.API}/users/${localStorage.user_id}/billing`)
      .then(function (response) {
        console.log(response);
        vm.stripe_customer_id = response.data.stripe_customer_id;
        vm.subscription_status = response.data.subscription_status;
      })
      .catch(function (error) {
        console.log(error);
        vm.is_failure = true;
        vm.err_msg = error;
      })
      .then(function () {
        // always executed
      });
    },
    manage_billing: function(){
          var vm = this;
          axios.post(`${process.env.API}/stripe/customer_portal`, {
            customer_id: vm.stripe_customer_id,
          },
          )
          .then(function (response) {
            console.log(response);
            window.location.href = response.data.url;
           })
          .catch(function (error) {
            console.log(error);
            vm.is_failure = true;
            vm.err_msg = error;
           })
           .then(function () {
            // always executed
           });
    },
    set_avatar:function(avatar_name){
      console.log(avatar_name);
      var vm = this;
      vm.avatar = avatar_name;
      vm.show_avatars = false;
      vm.updateSettings();
    },
    updateSettings: function (){
      var vm = this;
          vm.is_failure = false;
          vm.is_updating = true;
          const api_headers = {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + localStorage.token,
          }
            //axios.post(`http://localhost:3000/users/${localStorage.user_id}/settings`, {
              axios.post(`${process.env.API}/users/${localStorage.user_id}/settings`, {
                    bot_avatar: vm.bot_avatar,
                    avatar: vm.avatar,
                },
                {
                headers: api_headers
                }
                )
                .then(function (response) {
                    console.log(response);
                    if (response.status === 200){
                      vm.$router.go();
                    } else{
                        vm.is_failure = true;
                        vm.err_msg = 'Failed to update setting';
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    vm.is_failure = true;
                    vm.err_msg = error;
                    if (error.response.status == 403){
                      localStorage.removeItem('user_id');
                      localStorage.removeItem('token');
                      vm.is_signed_in = false;
                        vm.$router.push('/login');
                      }
                })
                .then(function () {
                  // always executed
                  vm.is_updating = false;
                });
    },
      getSettings: function (){
      var vm = this;
      vm.is_loading = true;
      if (vm.is_signed_in){
        //axios.get(`http://localhost:3000/users/${localStorage.user_id}/settings`)  process.env.API
        axios.get(`${process.env.API}/users/${localStorage.user_id}/settings`,
          {
            headers: {Authorization: "Bearer " + localStorage.token}
          }
          )
          .then(function (response) {
            // handle success
            //console.log(response);

            vm.bot_avatar = response.data.bot_avatar;
            vm.avatar = response.data.avatar;
          })
          .catch(function (error) {
            // handle error
            console.log(error);
           if (error.response.status == 403){
             localStorage.removeItem('user_id');
             localStorage.removeItem('token');
             vm.is_signed_in = false;
              vm.$router.push('/login');
            }
          })
          .then(function () {
            // always executed
            vm.is_loading = false;
          });
      }
    },
  },
  setup () {
    return {
      show_avatars: ref(false),
    }
  }
})
</script>