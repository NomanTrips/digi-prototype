<template>
  <div class="q-pa-md q-gutter-sm">
    <q-banner
      inline-actions
      rounded
      class="bg-orange text-white"
      v-show="is_failure"
    >
      Checkout failed: {{ err_msg }}
      <template v-slot:action>
        <q-btn flat label="Dismiss" />
      </template>
    </q-banner>
  </div>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 800px">
      <q-card class="my-card">
        <q-card-section>
          <h6 class="text-center" text-color="pink" style="color: goldenrod">
            Upgrade to Premium!
          </h6>
          <div class="text-body2 text-center">
            Premium users get unlimited tokens and access to premium AI avatars.
          </div>

          <div class="q-pa-md">
            <q-table
              title="Digissist account tiers"
              :rows="rows"
              :columns="columns"
              row-key="name"
              hide-pagination
            />
          </div>

          <div class="row justify-center">
            <q-btn
              outline
              color="pink"
              icon="shopping_cart"
              @click="checkout"
              class="q-ma-md"
              :disable="temp_account_tf"
              >Checkout</q-btn
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

const columns = [
  {
    name: "name",
    required: true,
    label: "Account tier",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "ai_models",
    align: "center",
    label: "AI Models",
    align: "left",
    field: "ai_models",
    sortable: false,
  },
  {
    name: "token_limit",
    label: "Token limit",
    align: "left",
    field: "token_limit",
    sortable: false,
  },
  {
    name: "ai_skins",
    label: "Premium AI skins",
    align: "left",
    field: "ai_skins",
  },
  {
    name: "price",
    label: "Price",
    align: "left",
    field: "price",
  },
];

const rows = [
  {
    name: "Premium",
    ai_models: "GPT-3.5 Turbo/ChatGPT",
    token_limit: "Unlimited",
    ai_skins: "Yes",
    price: "5$/month",
  },
  {
    name: "Free",
    ai_models: "GPT-3.5 Turbo/ChatGPT",
    token_limit: "25,000 per month",
    ai_skins: "No",
    price: "Free",
  },
];

export default defineComponent({
  name: "PremiumUpgradePage",
  data: function () {
    return {
      is_failure: false,
      err_msg: "",
      temp_account_tf: true,
    };
  },
  created: function () {
    var vm = this; // vm = view model, the vue instance
    vm.temp_account_tf = localStorage.getItem("temp_account_tf");
  },
  methods: {
    checkout: function () {
      var vm = this;
      // price_1LJe6FB25siso4xC4uYciP0j
      axios
        .post(`${process.env.API}/stripe/checkout`, {
          price_id: "price_1LNHMuB25siso4xCIjrwYMRB",
          user_id: localStorage.user_id,
        })
        .then(function (response) {
          console.log(response.data);
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
  },
  setup() {
    return {
      columns,
      rows,
    };
  },
});
</script>