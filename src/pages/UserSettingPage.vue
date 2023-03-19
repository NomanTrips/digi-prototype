<template>
  <div class="q-pa-md q-gutter-sm">
    <q-banner
      inline-actions
      rounded
      class="bg-orange text-white"
      v-show="is_failure"
    >
      Error: {{ err_msg }}
      <template v-slot:action>
        <q-btn flat label="Dismiss" />
      </template>
    </q-banner>
  </div>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 500px">
      <q-card class="my-card">
        <q-card-section>
          <div class="row justify-center">
            <q-btn round @click="show_avatars = true">
              <q-avatar size="64px">
                <img :src="getHumanAvatarPath" />
              </q-avatar>
              <q-tooltip> Pick an Avatar </q-tooltip>
            </q-btn>
          </div>

          <div
            class="row justify-center text-caption"
            v-show="!temp_account_tf"
          >
            {{ username }}
          </div>
          <div class="row justify-center text-caption" v-show="temp_account_tf">
            Temp account
          </div>

          <div class="row justify-center text-subtitle1 q-mt-md q-mb-xs">
            <b>Account type:</b>
            <div
              class="text-subtitle1"
              v-bind:style="[
                premium_tf === true
                  ? { color: 'goldenrod' }
                  : { color: 'black' },
              ]"
            >
              &nbsp; {{ account_tier }}
            </div>
          </div>
          <div class="row justify-center text-body1 q-ma-md">
            <b>Subscription status:</b> &nbsp;{{ subscription_status }}
          </div>

          <div class="row justify-center text-subtitle1 q-mt-md q-mb-xs">
            <b>AI avatar:</b>
          </div>
          <div class="row justify-center text-subtitle1 q-mb-xs">
            <q-btn round @click="show_ai_avatars = true">
              <q-avatar size="64px">
                <img :src="getBotAvatarPath" />
              </q-avatar>
              <q-tooltip> Pick an AI Avatar </q-tooltip>
            </q-btn>
          </div>

          <div class="row justify-center text-subtitle1 q-mt-md q-mb-xs">
            <b>Color scheme:</b>
          </div>
          <div class="row justify-center q-ma-md">
            <q-radio
              v-model="primary_color"
              val="pink"
              label="Pink"
              color="pink"
              @click="set_color()"
            />
            <q-radio
              v-model="primary_color"
              val="grey-10"
              label="Grey"
              color="grey-10"
              @click="set_color()"
            />
            <q-radio
              v-model="primary_color"
              val="green-13"
              label="Green"
              color="green-13"
              @click="set_color()"
            />
            <q-radio
              v-model="primary_color"
              val="cyan"
              label="Cyan"
              color="cyan"
              @click="set_color()"
            />
            <q-radio
              v-model="primary_color"
              val="blue-10"
              label="Blue"
              color="blue-10"
              @click="set_color()"
            />
            <q-radio
              v-model="primary_color"
              val="purple-6"
              label="Purple"
              color="purple-6"
              @click="set_color()"
            />
          </div>

          <div class="row justify-center q-ma-md">
            <q-btn
              v-show="is_stripe_customer"
              :color="primary_color"
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
    <q-card class="my-card" style="width: 400px">
      <q-card-section>
        <div class="text-h6">Pick your avatar:</div>
      </q-card-section>
      <q-card-section>
        <div class="q-pa-md">
          <q-list bordered separator>
            <q-item clickable v-ripple @click="set_avatar('human_1')">
              <q-item-section>
                <q-avatar>
                  <img src="../assets/human_1.png" />
                </q-avatar>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple @click="set_avatar('human_2')">
              <q-item-section>
                <q-avatar>
                  <img src="../assets/human_2.png" />
                </q-avatar>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple @click="set_avatar('human_3')">
              <q-item-section>
                <q-avatar>
                  <img src="../assets/human_3.png" />
                </q-avatar>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple @click="set_avatar('human_4')">
              <q-item-section>
                <q-avatar>
                  <img src="../assets/human_4.png" />
                </q-avatar>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple @click="set_avatar('human_5')">
              <q-item-section>
                <q-avatar>
                  <img src="../assets/human_5.png" />
                </q-avatar>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-card-section>

      <q-separator />
      <q-card-actions align="right">
        <q-btn v-close-popup outline :color="primary_color" label="Okay" />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <q-dialog v-model="show_ai_avatars">
    <q-card class="my-card" style="width: 400px">
      <q-card-section>
        <div class="text-h6">Choose AI skin:</div>
      </q-card-section>
      <q-card-section>
        <div>
          <div v-show="is_updating">
            Saving...
            <q-spinner :color="primary_color" size="2em" />
          </div>

          <q-list>
            <q-item :disable="is_updating" tag="label" v-ripple>
              <q-item-section avatar>
                <q-radio
                  v-model="bot_avatar"
                  val="default"
                  :color="primary_color"
                />
              </q-item-section>
              <q-item-section>
                <q-item-label>default</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-avatar>
                  <img src="../assets/default.png" />
                </q-avatar>
              </q-item-section>
            </q-item>

            <q-item :disable="is_updating" tag="label" v-ripple>
              <q-item-section avatar>
                <q-radio
                  v-model="bot_avatar"
                  val="green_spark"
                  :color="primary_color"
                />
              </q-item-section>
              <q-item-section>
                <q-item-label>green spark</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-avatar>
                  <img src="../assets/green_spark.png" />
                </q-avatar>
              </q-item-section>
            </q-item>

            <q-item :disable="is_updating" tag="label" v-ripple>
              <q-item-section avatar>
                <q-radio
                  v-model="bot_avatar"
                  val="penguin"
                  :color="primary_color"
                />
              </q-item-section>
              <q-item-section>
                <q-item-label>penguin</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-avatar>
                  <img src="../assets/penguin.png" />
                </q-avatar>
              </q-item-section>
            </q-item>

            <q-item :disable="is_updating" tag="label" v-ripple>
              <q-item-section avatar>
                <q-radio
                  v-model="bot_avatar"
                  val="owley"
                  :color="primary_color"
                />
              </q-item-section>
              <q-item-section>
                <q-item-label>owley</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-avatar>
                  <img src="../assets/owley.png" />
                </q-avatar>
              </q-item-section>
            </q-item>

            <q-item :disable="is_updating" tag="label" v-ripple>
              <q-item-section avatar>
                <q-radio
                  v-model="bot_avatar"
                  val="diaspora"
                  :color="primary_color"
                />
              </q-item-section>
              <q-item-section>
                <q-item-label>diaspora</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-avatar>
                  <img src="../assets/diaspora.png" />
                </q-avatar>
              </q-item-section>
            </q-item>

            <q-item :disable="is_updating" tag="label" v-ripple>
              <q-item-section avatar>
                <q-radio
                  v-model="bot_avatar"
                  val="big_un"
                  color="amber"
                  :disable="!premium_tf"
                />
              </q-item-section>
              <q-item-section style="color: goldenrod">
                <q-item-label>big 'un</q-item-label>
                <q-item-label caption><i>Premium</i></q-item-label>
              </q-item-section>
              <q-item-section>
                <q-avatar>
                  <img src="../assets/big_un.png" />
                </q-avatar>
              </q-item-section>
            </q-item>

            <q-item :disable="is_updating" tag="label" v-ripple>
              <q-item-section avatar>
                <q-radio
                  v-model="bot_avatar"
                  val="mantis"
                  color="amber"
                  :disable="!premium_tf"
                />
              </q-item-section>
              <q-item-section style="color: goldenrod">
                <q-item-label>mantis</q-item-label>
                <q-item-label caption><i>Premium</i></q-item-label>
              </q-item-section>
              <q-item-section>
                <q-avatar>
                  <img src="../assets/mantis.png" />
                </q-avatar>
              </q-item-section>
            </q-item>

            <q-item :disable="is_updating" tag="label" v-ripple>
              <q-item-section avatar>
                <q-radio
                  v-model="bot_avatar"
                  val="orphan"
                  color="amber"
                  :disable="!premium_tf"
                />
              </q-item-section>
              <q-item-section style="color: goldenrod">
                <q-item-label>orphan</q-item-label>
                <q-item-label caption><i>Premium</i></q-item-label>
              </q-item-section>
              <q-item-section>
                <q-avatar>
                  <img src="../assets/orphan.png" />
                </q-avatar>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-card-section>

      <q-separator />
      <q-card-actions align="right">
        <q-btn v-close-popup outline :color="primary_color" label="Okay" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent, ref } from "vue";
import axios from "axios";

export default defineComponent({
  name: "UserSettingsPage",
  data: function () {
    return {
      username: null,
      user_id: null,
      avatar: "human_1",
      bot_avatar: "owley",
      is_updating: false,
      err_msg: "",
      is_failure: false,
      is_signed_in: false,
      is_loading: false,
      stripe_customer_id: null,
      subscription_status: "",
      premium_tf: false,
      show_ai_avatars: false,
      is_stripe_customer: false,
      primary_color: "pink",
      temp_account_tf: true,
    };
  },
  computed: {
    account_tier() {
      var vm = this;
      if (vm.premium_tf) {
        return "Premium";
      } else {
        return "Free tier";
      }
    },
    getBotAvatarPath() {
      var vm = this;
      if (vm.is_loading) {
        return `${process.env.ICON_PATH}/white_square.png`;
      } else {
        if (vm.bot_avatar === "green_spark") {
          return `${process.env.ICON_PATH}/green_spark.png`;
        } else if (vm.bot_avatar === "penguin") {
          return `${process.env.ICON_PATH}/penguin.png`;
        } else if (vm.bot_avatar === "default") {
          return `${process.env.ICON_PATH}/default.png`;
        } else if (vm.bot_avatar === "diaspora") {
          return `${process.env.ICON_PATH}/diaspora.png`;
        } else if (vm.bot_avatar === "big_un") {
          return `${process.env.ICON_PATH}/big_un.png`;
        } else if (vm.bot_avatar === "mantis") {
          return `${process.env.ICON_PATH}/mantis.png`;
        } else if (vm.bot_avatar === "orphan") {
          return `${process.env.ICON_PATH}/orphan.png`;
        } else {
          return `${process.env.ICON_PATH}/owley.png`;
        }
      }
    },
    getHumanAvatarPath() {
      var vm = this;
      if (vm.is_loading) {
        return `${process.env.ICON_PATH}/white_square.png`;
      } else {
        if (vm.avatar === "human_2") {
          return `${process.env.ICON_PATH}/human_2.png`;
        } else if (vm.avatar === "human_3") {
          return `${process.env.ICON_PATH}/human_3.png`;
        } else if (vm.avatar === "human_4") {
          return `${process.env.ICON_PATH}/human_4.png`;
        } else if (vm.avatar === "human_5") {
          return `${process.env.ICON_PATH}/human_5.png`;
        } else {
          return `${process.env.ICON_PATH}/human_1.png`;
        }
      }
    },
  },
  created: function () {
    var vm = this; // vm = view model, the vue instance
    if (localStorage.getItem("primary_color") != null) {
      vm.primary_color = localStorage.primary_color;
    }
    if (localStorage.user_id) {
      vm.user_id = localStorage.user_id;
      vm.is_signed_in = true;
      vm.username = localStorage.username;
    }
    if (localStorage.getItem("temp_account_tf") != null) {
      vm.temp_account_tf = localStorage.temp_account_tf;
    }
    vm.get_billing_details();
    vm.getSettings();
    if (localStorage.premium_tf === "true") {
      vm.premium_tf = true;
    }
  },
  watch: {
    bot_avatar(old_avatar, new_avatar) {
      var vm = this;
      if (vm.is_loading === false && new_avatar != old_avatar) {
        vm.updateSettings();
      }
    },
  },
  methods: {
    get_billing_details: function () {
      var vm = this;
      axios
        .get(`${process.env.API}/users/${localStorage.user_id}/billing`)
        .then(function (response) {
          console.log(response);
          vm.stripe_customer_id = response.data.stripe_customer_id;
          if (vm.stripe_customer_id != undefined) {
            vm.is_stripe_customer = true;
          }
          vm.subscription_status = response.data.subscription_status;
          if (vm.subscription_status === null) {
            vm.subscription_status = "N/A";
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
    manage_billing: function () {
      var vm = this;
      axios
        .post(`${process.env.API}/stripe/customer_portal`, {
          customer_id: vm.stripe_customer_id,
        })
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
    set_avatar: function (avatar_name) {
      console.log(avatar_name);
      var vm = this;
      vm.avatar = avatar_name;
      vm.show_avatars = false;
      vm.updateSettings();
    },
    set_color: function () {
      var vm = this;

      // vm.avatar = avatar_name;
      // vm.show_avatars = false;
      vm.updateSettings();
    },
    updateSettings: function () {
      var vm = this;
      vm.is_failure = false;
      vm.is_updating = true;
      const api_headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.token,
      };
      console.log(vm.primary_color);
      //axios.post(`http://localhost:3000/users/${localStorage.user_id}/settings`, {
      axios
        .post(
          `${process.env.API}/users/${localStorage.user_id}/settings`,
          {
            bot_avatar: vm.bot_avatar,
            avatar: vm.avatar,
            primary_color: vm.primary_color,
          },
          {
            headers: api_headers,
          }
        )
        .then(function (response) {
          console.log(response);
          vm.emitter.emit("setting_change", {
            is_setting_changed: true,
            primary_color: vm.primary_color,
          });
          // location.replace("/");
          // location.reload();
          /*
          if (response.status === 200) {
            vm.$router.go(vm.$route.name);
          } else {
            vm.is_failure = true;
            vm.err_msg = "Failed to update setting";
          }
          */
        })
        .catch(function (error) {
          console.log(error);
          vm.is_failure = true;
          vm.err_msg = error;
          if (error.response.status == 403) {
            localStorage.removeItem("user_id");
            localStorage.removeItem("token");
            vm.is_signed_in = false;
            vm.$router.push("/login");
          }
        })
        .then(function () {
          // always executed
          vm.is_updating = false;
        });
    },
    getSettings: function () {
      var vm = this;
      vm.is_loading = true;
      if (vm.is_signed_in) {
        //axios.get(`http://localhost:3000/users/${localStorage.user_id}/settings`)  process.env.API
        axios
          .get(`${process.env.API}/users/${localStorage.user_id}/settings`, {
            headers: { Authorization: "Bearer " + localStorage.token },
          })
          .then(function (response) {
            // handle success
            //console.log(response);

            vm.bot_avatar = response.data.bot_avatar;
            vm.avatar = response.data.avatar;
            vm.primary_color = response.data.primary_color;
          })
          .catch(function (error) {
            // handle error
            console.log(error);
            if (error.response.status == 403) {
              localStorage.removeItem("user_id");
              localStorage.removeItem("token");
              vm.is_signed_in = false;
              vm.$router.push("/login");
            }
          })
          .then(function () {
            // always executed
            vm.is_loading = false;
          });
      }
    },
  },
  setup() {
    return {
      show_avatars: ref(false),
    };
  },
});
</script>