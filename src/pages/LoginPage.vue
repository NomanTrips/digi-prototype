<template>
  <div class="q-pa-md q-gutter-sm">
    <q-banner inline-actions rounded class="bg-orange text-white" v-show="is_failure">
      Sign in failed: {{}}
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
            @reset="onReset"
            class="q-gutter-md"
            >
            <q-input
                filled
                color="pink"
                v-model="username"
                label="Username"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please enter your username']"
            />

            <q-input
                filled
                color="pink"
                v-model="password"
                label="Password"
                lazy-rules
                :rules="[
                val => val !== null && val !== '' || 'Please type your password',
                ]"
            />

            <q-toggle color="pink" v-model="accept" label="I agree to the ai pledge" />

            <div>
                <q-btn outline label="Login" type="submit" color="pink"/>
                <q-btn outline label="Signup" color="pink" to="/signup"/>
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
  name: 'LoginPage',
  data: function (){
    return {
        username: "",
        password: "",
        accept: true,
        is_failure: false,
        err_msg: "",
    }
  },
  created: function (){
    var vm = this; // vm = view model, the vue instance
  },
  methods: {
      onSubmit: function (){
          var vm = this;
          vm.is_failure = false;
          const api_headers = {
            'Content-Type': 'application/json',
          }
            axios.post(`${process.env.API}/users/login`, {
                    username: vm.username,
                    password: vm.password,
                },
                {
                headers: api_headers
                }
                )
                .then(function (response) {
                    console.log(response);
                    if (response.status === 200){
                        console.log(`login resp data:  ${response.data}`)
                        localStorage.user_id = response.data.user_id;
                        vm.$router.push('/')
                    } else{
                        vm.is_failure = true;
                        vm.err_msg = 'Unknown';
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    vm.is_failure = true;
                    vm.err_msg = 'error';
                });
      }
  }
})
</script>
