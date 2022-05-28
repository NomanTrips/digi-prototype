<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar
        class="bg-pink"
      >
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Digissist
        </q-toolbar-title>
        <div style="padding:20px;">version 0.1</div>
        <div>
          <q-btn
            v-show="is_signed_in === false"
            flat
            dense
            round
            icon="login"
            aria-label="login"
            to="/login"
          />


    <q-btn-dropdown
      v-show="is_signed_in === true"
      outline
      color="white"
      fab-mini
      icon="account_circle"
      @click="getSettings"
    >
      <div class="row no-wrap q-pa-md" style="width:400px">
        <div class="col-8">
          <div class="text-h6 q-mb-md">Choose AI skin:</div>
          <div v-show="is_updating">
            Saving...
            <q-spinner
              color="pink"
              size="2em"
              />
          </div>

    <q-list>
      <!--
        Rendering a <label> tag (notice tag="label")
        so QRadios will respond to clicks on QItems to
        change Toggle state.
      -->

      <q-item :disable="is_updating" tag="label" v-ripple>
        <q-item-section avatar>
          <q-radio v-model="bot_avatar" val="default" color="pink" />
        </q-item-section>
        <q-item-section>
          <q-item-label>default</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-avatar>
            <img src="../assets/default.png">
          </q-avatar>
        </q-item-section>        
      </q-item>

      <q-item :disable="is_updating" tag="label" v-ripple>
        <q-item-section avatar>
          <q-radio v-model="bot_avatar" val="green_spark" color="pink" />
        </q-item-section>
        <q-item-section>
          <q-item-label>green spark</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-avatar>
            <img src="../assets/green_spark.png">
          </q-avatar>
        </q-item-section>        
      </q-item>

      <q-item :disable="is_updating" tag="label" v-ripple>
        <q-item-section avatar>
          <q-radio v-model="bot_avatar" val="penguin" color="pink" />
        </q-item-section>
        <q-item-section>
          <q-item-label>penguin</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-avatar>
            <img src="../assets/penguin.png">
          </q-avatar>
        </q-item-section>        
      </q-item>

      <q-item :disable="is_updating" tag="label" v-ripple>
        <q-item-section avatar>
          <q-radio v-model="bot_avatar" val="owley" color="pink" />
        </q-item-section>
        <q-item-section>
          <q-item-label>owley</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-avatar>
            <img src="../assets/owley.png">
          </q-avatar>
        </q-item-section>        
      </q-item>

      <q-item :disable="is_updating" tag="label" v-ripple>
        <q-item-section avatar>
          <q-radio v-model="bot_avatar" val="diaspora" color="pink" />
        </q-item-section>
        <q-item-section>
          <q-item-label>diaspora</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-avatar>
            <img src="../assets/diaspora.png">
          </q-avatar>
        </q-item-section>        
      </q-item>

    </q-list>

        </div>

        <q-separator vertical inset class="q-mx-lg" />

        <div class="column items-center">
          <q-avatar size="72px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>

          <div class="text-subtitle1 q-mt-md q-mb-xs">{{user_id}}</div>

          <q-btn
            color="pink"
            label="Logout"
            push
            size="sm"
            v-close-popup
            @click="logout"
          />
        </div>
      </div>
    </q-btn-dropdown>

        </div>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="false"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import axios from "axios"

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },
  data: function (){
    return {
      user_id: null,
      bot_avatar: 'default',
      is_updating: false,
      err_msg : '',
      is_failure: false,
      is_signed_in: false,
      is_loading: false,
    }
  },
  created: function (){
    //console.log(`masthead create`)
    var vm = this; // vm = view model, the vue instance
    if (localStorage.user_id) {
      this.user_id = localStorage.user_id;
      this.is_signed_in = true;
    }
  },
  mounted() {
    //console.log(`the masthead is now mounted.`)
  },
  updated(){
    //console.log(`masthead update`)
      var vm = this; // vm = view model, the vue instance
    if (localStorage.user_id) {
      vm.user_id = localStorage.user_id;
      vm.is_signed_in = true;
    } else{
      vm.is_signed_in = false;
    }
  },
  watch: {
    bot_avatar(old_avatar, new_avatar){
      var vm = this;
      if (vm.is_loading === false && new_avatar != old_avatar){
        vm.updateSettings();  
      }     
    },
    name(user_id) {
      localStorage.user_id = user_id;
    },
  },
  methods: {
    logout: function (){
      var vm = this;
      localStorage.removeItem('user_id');
      vm.is_signed_in = false;
    },
    updateSettings: function (){
      var vm = this;
          vm.is_failure = false;
          vm.is_updating = true;
          const api_headers = {
            'Content-Type': 'application/json',
          }
            //axios.post(`http://localhost:3000/users/${localStorage.user_id}/settings`, {
              axios.post(`${process.env.API}/users/${localStorage.user_id}/settings`, {
                    bot_avatar: vm.bot_avatar,
                },
                {
                headers: api_headers
                }
                )
                .then(function (response) {
                    console.log(response);
                    if (response.status === 200){
                      vm.$router.go();
                    } else{
                        vm.is_failure = true;
                        vm.err_msg = 'Failed to update setting';
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    vm.is_failure = true;
                    vm.err_msg = error;
                })
                .then(function () {
                  // always executed
                  vm.is_updating = false;
                });
    },
      getSettings: function (){
      var vm = this;
      vm.is_loading = true;
      if (vm.is_signed_in){
        //axios.get(`http://localhost:3000/users/${localStorage.user_id}/settings`)  process.env.API
        axios.get(`${process.env.API}/users/${localStorage.user_id}/settings`)
          .then(function (response) {
            // handle success
            console.log(response);
            vm.bot_avatar = response.data.bot_avatar
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
            vm.is_loading = false;
          });
      }
    },
  },
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>