<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 500px">
      <q-card class="my-card">
        <q-card-section>
          <h6 class="text-center" text-color="pink">
            Succesfully upgraded to premium!
          </h6>
          <div class="text-body2 text-center">
            Enjoy unlimited conversations with ChatGPT! Also checkout the
            premium avatars and AI skins under the user settings (Accessible via
            the user setting dropdown).
          </div>
          <div class="row justify-center">
            <q-btn
              outline
              color="pink"
              icon="keyboard_return"
              to="/"
              class="q-ma-md"
              >Talk to AI</q-btn
            >
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
  name: "SuccessPage",
  data: function () {
    return {
      is_failure: false,
      err_msg: "",
      subscription_status: "",
    };
  },
  created: function () {
    var vm = this; // vm = view model, the vue instance'
    vm.get_billing_details();
  },
  methods: {
    get_billing_details: function () {
      var vm = this;
      axios
        .get(`${process.env.API}/users/${localStorage.user_id}/billing`)
        .then(function (response) {
          console.log(response);
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
        });
    },
  },
});
</script>