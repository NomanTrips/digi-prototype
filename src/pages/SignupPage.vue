<template>
  <div class="q-pa-md q-gutter-sm">
    <q-banner inline-actions rounded class="bg-orange text-white" v-show="is_failure">
      User account creation failed. Please try again.
      <template v-slot:action>
        <q-btn flat label="Dismiss" />
      </template>
    </q-banner>
  </div>
  <div class="q-pa-md row justify-center" >
    <div style="width: 100%; max-width: 500px">
      <q-card class="my-card">
        <q-card-section>
            <div class="text-h6">Sign up with:</div>
        </q-card-section>
        <q-card-actions vertical>
            <q-btn outline label="Google" type="submit" color="pink"/>
            <q-btn outline label="Facebook" type="submit" color="pink"/>
            <q-btn outline label="Github" type="submit" color="pink"/>
            <q-btn outline label="Username & Password" type="submit" color="pink" @click="username_pw_tf = !username_pw_tf"/>
        </q-card-actions>
        <q-card-section v-show="username_pw_tf">
            <q-form
            @submit="onSubmit"
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
                :type="isPwd ? 'password' : 'text'"
                color="pink"
                v-model="password"
                label="Password"
                lazy-rules
                :rules="[
                val => val !== null && val !== '' || 'Please type your password',
                ]"
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
                label="Re-type password:"
                lazy-rules
                :rules="[
                val => val !== null && val !== '' || 'Please re-type your password',
                retyped_password === password
                ]"
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
                color="pink"
                v-model="firstname"
                label="Firstname *"
                hint="Firstname"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
            />

            <q-input
                filled
                color="pink"
                v-model="middle_initial"
                label="Middle initial"
                hint="middle initial"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
            />

            <q-input
                filled
                color="pink"
                v-model="lastname"
                label="Lastname"
                hint="middle initial"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
            />

            <q-input color="pink" v-model="dob" filled type="date" hint="Date of Birth" />

            <q-input color="pink" v-model="email" filled type="email" hint="Email" />

            <q-toggle color="pink" v-model="accept" label="I agree to the ai pledge" />

            <div>
                <q-btn outline label="Create" type="submit" color="pink" />
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
import _ from "lodash"

export default defineComponent({
  name: 'SignupPage',
  data: function (){
    return {
        username: "",
        password: "",
        retyped_password: "",
        firstname: "",
        lastname: "",
        middle_initial: "",
        dob: "",
        email: "",
        google_tf: false,
        username_pw_tf : false,
        accept: true,
        is_failure: false,
        isPwd: true,
    }
  },
  created: function (){
    var vm = this; // vm = view model, the vue instance
  },
  methods: {
      onSubmit: function (){
          var vm = this;
          vm.is_failure = false;
          //vm.dob = _.replace(vm.dob, '-', '');
          vm.dob = '19880719';
           console.log(vm.dob);
            const api_headers = {
                'Content-Type': 'application/json',
            }
            axios.post(`${process.env.API}/users/create`, {
                    first_name: vm.firstname,
                    middle_initial: vm.middle_initial,
                    last_name: vm.lastname,
                    date_of_birth: vm.dob,
                    username: vm.username,
                    password: vm.password,
                    email: vm.email,
                },
                {
                headers: api_headers
                }
                )
                .then(function (response) {
                    console.log(response);
                    if (response.status === 200){
                        localStorage.user_id = response.data.user_id;
                        vm.$router.push('/')
                    } else{
                        vm.is_failure = true;
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    vm.is_failure = true;
                });
      }
  }
})
</script>
