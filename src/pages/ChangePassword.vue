<template>
  <div class="q-pa-md q-gutter-sm">
    <q-banner inline-actions rounded class="bg-orange text-white" v-show="is_failure">
      Password update failed: {{}}
      <template v-slot:action>
        <q-btn flat label="Dismiss" />
      </template>
    </q-banner>
  </div>
  <div class="q-pa-md row justify-center" >
    <div style="width: 100%; max-width: 500px">
      <q-card class="my-card">
        <q-card-section>
            <p>Please enter in the desired new password:</p>
            <q-form
            @submit="onSubmit"
            class="q-gutter-md"
            >
            <q-input
                filled
                :type="isPwd ? 'password' : 'text'"
                color="pink"
                v-model="password"
                label="Password*"
                label-color="pink"
                lazy-rules
                :rules="[
                val => val !== null && val !== '' || 'Please type your new password',
                ]"
                :disable="isUpdating"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>

            <q-input
                filled
                :type="isPwd ? 'password' : 'text'"
                color="pink"
                v-model="retyped_password"
                label="Re-type password:*"
                label-color="pink"
                lazy-rules
                :rules="[
                val => val !== null && val !== '' || 'Please re-type your new password',
                retyped_password === password
                ]"
                :disable="isUpdating"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
          <div class="row">        
            <div class="q-pl-xs">
                <q-btn :disable="isUpdating" outline label="Change password" type="submit" color="pink" />              
            </div>
              </div>
            </q-form>            
        </q-card-section>
      </q-card>
    </div>
   </div>
</template>

<script>
import { defineComponent } from 'vue'
import axios from "axios"

export default defineComponent({
  name: 'ChangePasswordPage',
  data: function (){
    return {
        password: "",
        retyped_password: "",
        is_failure: false,
        err_msg: "",
        isPwd: true,
        isUpdating: false,
    }
  },
  created: function (){
    var vm = this; // vm = view model, the vue instance
  },
  methods: {
      onSubmit: function (){
          var vm = this;
          vm.is_failure = false;
          vm.isUpdating = true;
          const api_headers = {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + vm.$route.params.token,
          }
            axios.post(`${process.env.API}/users/${vm.$route.params.user_id}/changepassword`, {
                    password: vm.password,
                },
                {
                headers: api_headers
                }
                )
                .then(function (response) {
                    console.log(response);
                    if (response.status === 200){
                        console.log(`Password succesfully changed:  ${response.data}`)
                        vm.$router.push('/login');
                    } else{
                        vm.is_failure = true;
                        vm.err_msg = 'Unknown';
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    vm.is_failure = true;
                    vm.err_msg = 'error';
                })
                .then(function () {
                  // always executed
                  vm.isUpdating = false;
                });
      }
  }
})
</script>