<template>
  <div class="q-pa-md q-gutter-sm">
    <q-banner
      inline-actions
      rounded
      class="bg-orange text-white"
      v-show="is_failure"
    >
      Sign in failed: {{}}
      <template v-slot:action>
        <q-btn flat label="Dismiss" />
      </template>
    </q-banner>
  </div>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 500px">
      <q-card class="my-card">
        <q-card-section>
          <q-form @submit="onSubmit" class="q-gutter-md">
            <q-input
              filled
              color="pink"
              v-model="username"
              label="Username"
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
              label="Password"
              lazy-rules
              :rules="[
                (val) =>
                  (val !== null && val !== '') || 'Please type your password',
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

            <div class="row">
              <div class="q-pl-xs">
                <q-btn
                  outline
                  label="Login"
                  type="submit"
                  color="pink"
                  :disable="is_loading"
                  :loading="is_loading"
                />
              </div>
              <div class="q-pl-xs">
                <q-btn
                  outline
                  label="Signup"
                  color="pink"
                  to="/signup"
                  :disable="is_loading"
                />
              </div>
            </div>
          </q-form>
          <div class="row">
            <div class="q-pa-sm">
              <router-link to="/resetpassword">Forgot password?</router-link>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "LoginPage",
  data: function () {
    return {
      username: "",
      password: "",
      is_failure: false,
      err_msg: "",
      isPwd: true,
      stripe_customer_id: null,
      subscription_status: null,
      is_signed_in: false,
      is_loading: false,
    };
  },
  created: function () {
    var vm = this; // vm = view model, the vue instance
    if (localStorage.user_id) {
      vm.is_signed_in = true;
    }
  },
  mounted: function () {
    var vm = this;
    //if (vm.is_signed_in) {
    //  vm.$router.push("/");
    // }
  },
  methods: {
    get_billing_details: function (callback) {
      var vm = this;
      if (localStorage.user_id === undefined) {
        return;
      }
      axios
        .get(`${process.env.API}/users/${localStorage.user_id}/billing`)
        .then(function (response) {
          vm.stripe_customer_id = response.data.stripe_customer_id;
          vm.subscription_status = response.data.subscription_status;
          if (vm.subscription_status === "active") {
            localStorage.premium_tf = true;
          } else {
            localStorage.premium_tf = false;
          }
        })
        .catch(function (error) {
          console.log(error);
          vm.is_failure = true;
          vm.err_msg = error;
        })
        .then(function () {
          // always executed
          callback();
        });
    },
    onSubmit: function () {
      var vm = this;
      vm.is_failure = false;
      vm.is_loading = true;
      const api_headers = {
        "Content-Type": "application/json",
      };
      axios
        .post(
          `${process.env.API}/users/login`,
          {
            username: vm.username,
            password: vm.password,
          },
          {
            headers: api_headers,
          }
        )
        .then(function (response) {
          console.log(response);
          if (response.status === 200) {
            console.log(`login resp data:  ${response.data}`);
            localStorage.user_id = response.data.user_id;
            localStorage.token = response.data.token;
            localStorage.username = response.data.username;
            localStorage.temp_account_tf = false;
            vm.is_signed_in = true;
            //vm.$root.$forceUpdate();
            //console.log(vm.$parent.name);
            //vm.$router.go();
            vm.get_billing_details(function () {
              window.location.reload();
            });
            vm.$router.push("/");
          } else {
            vm.is_failure = true;
            vm.err_msg = "Unknown";
          }
        })
        .catch(function (error) {
          console.log(error);
          vm.is_failure = true;
          vm.err_msg = "error";
        })
        .then(function () {
          // always executed
          vm.is_loading = false;
        });
    },
  },
});
</script>