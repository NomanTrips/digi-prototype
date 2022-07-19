<template>
  <div class="q-pa-md row justify-center" >
    <div style="width: 100%; max-width: 500px">
      <q-card class="my-card">
        <q-card-section>
            <h6 class="text-center" text-color="pink">
                Succesfully upgraded to premium!
            </h6>
            <div class="text-body2 text-center">
                Enjoy talking to the smartest AI of the GPT-3 family: Davinci. Also checkout the premium avatars and AI skins under the user settings (Accessible via the user setting dropdown).
            </div>
            <div class="row justify-center">
              <q-btn outline color="pink" icon="keyboard_return" to="/" class="q-ma-md">Talk to AI</q-btn>
            </div>
        </q-card-section>
      </q-card>
    </div>
   </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SuccessPage',
  data: function (){
    return {
        is_failure: false,
        err_msg: "",
    }
  },
  created: function (){
    var vm = this; // vm = view model, the vue instance
  },
  methods: {
  }
})
</script>