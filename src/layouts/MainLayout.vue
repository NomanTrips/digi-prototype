<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar :class="toolbarClass">
        <q-toolbar-title>
          <router-link to="/" style="text-decoration: none; color: white"
            >Digi buddy</router-link
          >
        </q-toolbar-title>
        <div>
          <q-btn
            flat
            round
            color="white"
            icon="help"
            to="/about"
            :size="screenSize > 600 ? 'sm' : 'xs'"
            class="q-mx-xs"
          />
          <q-btn
            v-show="is_signed_in === false || temp_account_tf === true"
            aria-label="login"
            to="/login"
            label="Login"
            outline
            color="white"
            :size="screenSize > 600 ? 'sm' : 'xs'"
            class="q-mx-xs"
          />

          <q-btn
            v-show="is_signed_in === false || temp_account_tf === true"
            aria-label="signup"
            to="/signup"
            label="Sign up"
            outline
            color="white"
            :size="screenSize > 600 ? 'sm' : 'xs'"
            class="q-mx-xs"
          >
          </q-btn>
          <q-btn
            outline
            style="color: white; background-color: white"
            label="Go Premium"
            v-close-popup
            to="/upgrade"
            :size="screenSize > 600 ? 'sm' : 'xs'"
            class="q-mx-xs"
            v-show="is_signed_in && !premium_tf && !temp_account_tf"
          />
          <q-btn-dropdown
            v-show="is_signed_in === true"
            outline
            color="white"
            icon="settings"
            :size="screenSize > 600 ? 'sm' : 'xs'"
            @click="getSettings"
          >
            <div class="row no-wrap q-pa-sm" style="width: 400px">
              <div class="col-7">
                <div class="text-h6 q-mb-md">Choose AI skin:</div>
                <div v-show="is_updating">
                  Saving...
                  <q-spinner :color="primary_color" size="2em" />
                </div>

                <q-list dense>
                  <!--
        Rendering a <label> tag (notice tag="label")
        so QRadios will respond to clicks on QItems to
        change Toggle state.
      -->

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
                  <!--
                  <q-item :disable="is_updating" tag="label" v-ripple>
                    <q-item-section avatar>
                      <q-radio
                        v-model="bot_avatar"
                        val="penguin"
                        color="pink"
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
-->
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
                  <!--
                  <q-item :disable="is_updating" tag="label" v-ripple>
                    <q-item-section avatar>
                      <q-radio
                        v-model="bot_avatar"
                        val="diaspora"
                        color="pink"
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
-->
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

              <q-separator vertical class="q-mx-sm" />

              <div class="column items-center">
                <q-btn round @click="show_avatars = true">
                  <q-avatar size="64px">
                    <img :src="getHumanAvatarPath" />
                  </q-avatar>
                  <q-tooltip> Pick an Avatar </q-tooltip>
                </q-btn>

                <div
                  class="row justify-center text-caption"
                  v-show="!temp_account_tf"
                >
                  {{ username }}
                </div>
                <div
                  class="row justify-center text-caption"
                  v-show="temp_account_tf"
                >
                  Temp account
                </div>
                <div
                  class="text-subtitle1 q-mt-md q-mb-xs"
                  v-bind:style="[
                    premium_tf === true
                      ? { color: 'goldenrod' }
                      : { color: 'black' },
                  ]"
                >
                  {{ account_tier }}
                </div>

                <div style="margin-top: 140px">
                  <!--
                  <div class="row justify-center q-ma-md">                   
                    <q-btn
                      outline
                      style="color: goldenrod; width: 108px"
                      label="Go Premium"
                      v-close-popup
                      to="/upgrade"
                      size="sm"
                      class="q-mx-xs"
                      v-show="!premium_tf"
                    />
                  </div>
                  -->
                  <div class="row justify-center q-ma-md">
                    <q-btn
                      :color="primary_color"
                      label="Settings"
                      outline
                      size="sm"
                      v-close-popup
                      to="/usersettings"
                      icon="settings"
                      style="width: 108px"
                    />
                  </div>
                  <div class="row justify-center q-ma-md">
                    <q-btn
                      label="Logout"
                      :color="primary_color"
                      outline
                      size="sm"
                      v-close-popup
                      @click="logout"
                      icon="logout"
                      class="q-mx-xs"
                      style="width: 108px"
                    >
                    </q-btn>
                  </div>
                </div>
              </div>
            </div>
          </q-btn-dropdown>

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
                <q-btn
                  v-close-popup
                  outline
                  :color="primary_color"
                  label="Okay"
                />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-if="false" v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-dialog v-model="show_signup_hint" seamless>
      <q-card style="width: 160px; position: absolute; right: 25px; top: 40px">
        <q-linear-progress :value="prompt_progress" color="amber" />

        <div class="row items-center no-wrap q-ma-xs">
          <div>
            <q-icon name="arrow_upward" size="14px" />
          </div>
          <div>
            <div style="font-size: 10px">
              {{ signup_hint }}
            </div>
          </div>

          <q-space />

          <q-btn size="xs" flat round icon="close" v-close-popup />
        </div>
      </q-card>
    </q-dialog>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import axios from "axios";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },
  data: function () {
    return {
      username: null,
      user_id: null,
      avatar: "human_1",
      bot_avatar: "default",
      is_updating: false,
      err_msg: "",
      is_failure: false,
      is_signed_in: false,
      is_loading: false,
      subscription_status: "",
      premium_tf: false,
      show_signup_hint: false,
      prompt_progress: 0.0,
      intervalID: null,
      signup_hint: "",
      primary_color: "cyan",
      temp_account_tf: true,
      update_value: "",
      is_setting_changed: false,
    };
  },
  computed: {
    toolbarClass() {
      return `bg-${this.primary_color}`;
    },
    screenSize() {
      return this.$q.screen.width;
    },
    account_tier() {
      var vm = this;
      if (vm.premium_tf) {
        return "Premium";
      } else {
        return "Free tier";
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
    //vm.get_billing_details();
    if (localStorage.premium_tf === "true") {
      vm.premium_tf = true;
    }

    if (localStorage.getItem("temp_account_tf") != null) {
      if (localStorage.temp_account_tf === "false") {
        vm.temp_account_tf = false;
      }
    }

    /*
    if (vm.$router.currentRoute._value.path === "/") {
      // only show the hint on the main page
      if (!vm.is_signed_in) {
        vm.signup_hint = "Sign up to pick an AI skin!";
        setTimeout(() => {
          vm.prompt_timer();
        }, 30000);
      } else if (!vm.premium_tf) {
        vm.signup_hint = "Go Premium to talk to a smarter AI!";
        setTimeout(() => {
          vm.prompt_timer();
        }, 30000);
      }
    }
    */
  },
  mounted() {
    this.emitter.on("setting_refresh", (e) => {
      this.is_setting_changed = e.is_setting_changed;
      this.primary_color = e.primary_color;
      this.is_signed_in = e.is_signed_in;
    });
    this.emitter.on("login_change", (e) => {
      this.premium_tf = e.premium_tf;
      this.is_signed_in = e.is_signed_in;
      this.temp_account_tf = e.temp_account_tf;
    });
    //console.log(`the masthead is now mounted.`)
    // EventBus.$on("signedin", this.refresh_layout);
  },
  updated() {
    //console.log(`masthead update`)
    var vm = this; // vm = view model, the vue instance
    if (localStorage.user_id) {
      vm.user_id = localStorage.user_id;
      vm.is_signed_in = true;
    } else {
      vm.is_signed_in = false;
    }
  },
  watch: {
    prompt_progress(value) {
      var vm = this;
      if (value > 1) {
        clearInterval(vm.intervalID);
        setTimeout(() => {
          vm.show_signup_hint = false;
        }, 2000);
      }
    },
    bot_avatar(old_avatar, new_avatar) {
      var vm = this;
      if (vm.is_loading === false && new_avatar != old_avatar) {
        vm.updateSettings();
      }
    },
    name(user_id) {
      localStorage.user_id = user_id;
    },
  },
  methods: {
    refresh_layout: function () {
      // vm.$router.push("/");
      this.update_value = true;
      console.log("refreshing the layout");
    },
    prompt_timer: function () {
      var vm = this;
      vm.show_signup_hint = true;
      var incrementProgress = function () {
        vm.prompt_progress = vm.prompt_progress + 0.05;
      };
      vm.intervalID = setInterval(incrementProgress, 200);
    },
    get_billing_details: function () {
      var vm = this;
      if (localStorage.user_id === undefined) {
        return;
      }
      axios
        .get(`${process.env.API}/users/${localStorage.user_id}/billing`)
        .then(function (response) {
          console.log(response);
          vm.stripe_customer_id = response.data.stripe_customer_id;
          vm.subscription_status = response.data.subscription_status;
          if (vm.subscription_status === "active" || vm.subscription_status === "complete") {
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
    set_avatar: function (avatar_name) {
      console.log(avatar_name);
      var vm = this;
      vm.avatar = avatar_name;
      vm.show_avatars = false;
      vm.updateSettings();
    },
    logout: function () {
      var vm = this;
      localStorage.removeItem("user_id");
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("premium_tf");
      localStorage.removeItem("bot_avatar");
      localStorage.removeItem("avatar");
      localStorage.removeItem("primary_color");
      localStorage.removeItem("temp_account_tf");
      vm.is_signed_in = false;
      window.location.reload();
    },
    updateSettings: function () {
      var vm = this;
      vm.is_failure = false;
      vm.is_updating = true;
      const api_headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.token,
      };
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
          if (response.status === 200) {
            vm.$router.go();
          } else {
            vm.is_failure = true;
            vm.err_msg = "Failed to update setting";
          }
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
            vm.bot_avatar = response.data.bot_avatar;
            vm.avatar = response.data.avatar;
            vm.primary_color = response.data.primary_color;
            // save avatars to local storage for quick access later
            localStorage.bot_avatar = response.data.bot_avatar;
            localStorage.avatar = response.data.avatar;
            localStorage.primary_color = response.data.primary_color;
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
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      show_avatars: ref(false),
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>