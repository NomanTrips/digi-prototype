<template>
  <div class="q-pa-md q-gutter-sm">
    <q-banner inline-actions rounded class="bg-orange text-white" v-show="is_failure">
      Reset failed: {{}}
      <template v-slot:action>
        <q-btn flat label="Dismiss" />
      </template>
    </q-banner>
  </div>
  <div class="q-pa-md row justify-center" >
    <div style="width: 100%; max-width: 500px">
      <q-card class="my-card">
        <q-card-section>
            <q-form
            @submit="onSubmit"
            class="q-gutter-md"
            >
            <p v-show="!isResetLinkSent">Enter the email address you used to make the user account and then click send. If we have a user account that matches the email address you provided we'll send you a reset password link.</p>
            <q-input
                filled
                color="pink"
                v-model="email"
                label="Email"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please enter your email address']"
                type="email"
                v-show="!isResetLinkSent"
                :disable="isLoading"
            />
          <div class="row">        
            <div class="q-pl-xs">
                <q-btn :disable="isLoading" v-show="!isResetLinkSent" outline label="Send Reset Email" type="submit" color="pink" />              
            </div>
              </div>
            </q-form>
            <p v-show="isResetLinkSent" color="pink">Check your email inbox for the reset password link. You can close this page.</p>          
        </q-card-section>
      </q-card>
    </div>
   </div>
</template>

<script>
import { defineComponent } from 'vue'
import axios from "axios"

export default defineComponent({
  name: 'ResetPasswordPage',
  data: function (){
    return {
        email: "",
        is_failure: false,
        err_msg: "",
        isResetLinkSent: false,
        isLoading: false,
    }
  },
  created: function (){
    var vm = this; // vm = view model, the vue instance
  },
  methods: {
      onSubmit: function (){
          var vm = this;
          vm.is_failure = false;
          vm.isLoading = true;
          const api_headers = {
            'Content-Type': 'application/json',
          }
            axios.post(`${process.env.API}/reset-pw-email`, {
                    email: vm.email,
                },
                {
                headers: api_headers
                }
                )
                .then(function (response) {
                    console.log(response);
                    if (response.status === 200){
                        console.log(`login resp data:  ${response.data}`);
                        vm.isResetLinkSent = true;
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
                  vm.isLoading = false;
                });
      }
  }
})
</script>