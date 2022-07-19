<template>
  <div class="q-pa-md row justify-center" >
    <div style="width: 100%; max-width: 500px">
      <q-card class="my-card">
        <q-card-section>
            <h6 class="text-center" text-color="pink">
                Premium upgrade canceled.
            </h6>
            <div class="text-body2 text-center">
                You can still talk to the AI's on the free tier! If you change your mind, just hit the 'Go Premium' button in the user dropdown (upper right).
            </div>
            <div class="row justify-center">
              <q-btn outline color="pink" icon="keyboard_return" to="/" class="q-ma-md">Back to AI</q-btn>
            </div>
        </q-card-section>
      </q-card>
    </div>
   </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CanceledPage',
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