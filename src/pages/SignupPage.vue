<template>
  <div class="q-pa-md q-gutter-sm">
    <q-banner
      inline-actions
      rounded
      class="bg-orange text-white"
      v-show="is_failure"
    >
      User account creation failed. Please try again.
      <template v-slot:action>
        <q-btn flat label="Dismiss" />
      </template>
    </q-banner>
  </div>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 500px">
      <q-card class="my-card">
        <!--
        <q-card-section>
          <div class="text-h6">Sign up with:</div>
        </q-card-section>
        
        <q-card-actions vertical>
            <q-btn outline label="Google" type="submit" color="pink"/>
            <q-btn outline label="Facebook" type="submit" color="pink"/>
            <q-btn outline label="Github" type="submit" color="pink"/>
            <q-btn outline label="Username & Password" type="submit" color="pink" @click="username_pw_tf = !username_pw_tf"/>
        </q-card-actions>
        -->
        <q-card-section v-show="username_pw_tf">
          <div class="q-pa-sm text-h6">Please enter the following fields:</div>
          <q-form @submit="onSubmit" class="q-gutter-md">
            <q-input
              filled
              color="pink"
              v-model="username"
              label="Username*"
              label-color="pink"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Please enter your username',
              ]"
            />

            <q-input
              filled
              :type="isPwd ? 'password' : 'text'"
              color="pink"
              v-model="password"
              label="Password*"
              label-color="pink"
              lazy-rules
              :rules="[
                (val) =>
                  (val !== null && val !== '') || 'Please type your password',
                (val) =>
                  val.length >= 8 ||
                  'Password must be at least 8 characters long.',
                (val) =>
                  val.match(/\W|_/g) != null ||
                  'Password must contain at least one special character.', // at least 1 spec char
                (val) =>
                  val.match(/\d+/g) != null ||
                  'Password must contain at least one number.', // at least 1 number
                (val) =>
                  val.match(/[a-zA-Z]/) != null ||
                  'Password must contain at least letter.', // at least 1 letter
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
              label="Re-type password:*"
              label-color="pink"
              lazy-rules
              :rules="[
                (val) =>
                  (val !== null && val !== '') ||
                  'Please re-type your password',
                (val) => val === password || 'Password does not match.',
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
              color="pink"
              v-model="email"
              filled
              type="email"
              label="Email*"
              label-color="pink"
              @blur="emailUniquenessCheck"
              :error="is_validation_error"
              clearable
              @clear="is_validation_error = false"
              :disable="is_validating"
              :loading="is_validating"
            >
              <template v-slot:error>
                There's already a user account associated to that email address
              </template>
            </q-input>

            <q-input
              filled
              color="pink"
              v-model="firstname"
              label="Firstname*"
              label-color="pink"
            />

            <q-input
              v-show="false"
              filled
              color="pink"
              v-model="middle_initial"
              label="Middle initial"
              hint="Optional"
            />

            <q-input
              filled
              color="pink"
              v-model="lastname"
              label="Lastname*"
              label-color="pink"
            />

            <q-input
              v-show="false"
              color="pink"
              v-model="dob"
              filled
              type="date"
              hint="Date of birth - Optional"
            />
            <!--
            <q-toggle
              color="pink"
              v-model="accept"
              label="I agree to the ai pledge"
            />
            -->

            <div>
              <q-btn
                outline
                label="Create"
                type="submit"
                color="pink"
                :disable="
                  is_validating ||
                  is_validation_error ||
                  username === '' ||
                  password === '' ||
                  retyped_password === '' ||
                  email === '' ||
                  firstname === '' ||
                  lastname === ''
                "
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";
import _ from "lodash";

export default defineComponent({
  name: "SignupPage",
  data: function () {
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
      username_pw_tf: true,
      accept: true,
      is_failure: false,
      isPwd: true,
      is_validation_error: false,
      is_validating: false,
    };
  },
  created: function () {
    var vm = this; // vm = view model, the vue instance
  },
  methods: {
    emailUniquenessCheck: function () {
      var vm = this;
      if (vm.email === null || vm.email.length === 0) {
        return;
      }
      vm.is_validating = true;
      vm.is_validation_error = false;
      axios
        .post(`${process.env.API}/users/email-uniqueness-check`, {
          email: vm.email,
        })
        .then(function (response) {
          console.log(response);
          if (!response.data.is_unique) {
            vm.is_validation_error = true;
          }
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          // always executed
          vm.is_validating = false;
        });
    },
    onSubmit: function () {
      var vm = this;
      vm.is_failure = false;
      //vm.dob = _.replace(vm.dob, '-', '');
      vm.dob = "19880719";
      console.log(vm.dob);
      const api_headers = {
        "Content-Type": "application/json",
      };
      axios
        .post(
          `${process.env.API}/users/create`,
          {
            first_name: vm.firstname,
            middle_initial: vm.middle_initial,
            last_name: vm.lastname,
            date_of_birth: vm.dob,
            username: vm.username,
            password: vm.password,
            email: vm.email,
            temp_account_tf: false,
          },
          {
            headers: api_headers,
          }
        )
        .then(function (response) {
          console.log(response);
          if (response.status === 200) {
            localStorage.user_id = response.data.user_id;
            localStorage.token = response.data.token;
            localStorage.username = response.data.username;
            localStorage.temp_account_tf = response.data.temp_account_tf;
            vm.$router.push("/");
          } else {
            vm.is_failure = true;
          }
        })
        .catch(function (error) {
          console.log(error);
          vm.is_failure = true;
        });
    },
  },
});
</script>
