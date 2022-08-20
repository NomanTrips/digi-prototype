<template>
  <div class="q-pa-md q-gutter-sm">
    <q-banner
      inline-actions
      rounded
      class="bg-orange text-white"
      v-show="is_failure"
    >
      Feedback submission failed: {{ err_msg }}
      <template v-slot:action>
        <q-btn flat label="Dismiss" />
      </template>
    </q-banner>
  </div>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 500px">
      <q-card class="my-card">
        <q-card-section v-show="!is_submitted">
          <h6 class="text-pink q-my-md">
            Complete form to submit feedback/issues:
          </h6>
          <q-form @submit="onSubmit" class="q-gutter-md">
            <q-input
              filled
              color="pink"
              v-model="email"
              label="Email address"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Please enter your email address',
              ]"
            />

            <q-input
              filled
              color="pink"
              v-model="title"
              label="Title"
              lazy-rules
              :rules="[
                (val) =>
                  (val !== null && val !== '') ||
                  'Please enter a title for your feedback',
              ]"
            >
            </q-input>

            <q-input
              v-model="feedback"
              color="pink"
              label="Feedback"
              filled
              type="textarea"
              :rules="[
                (val) =>
                  (val !== null && val !== '') ||
                  'Please enter some feedback text',
              ]"
            />

            <div class="row">
              <div class="q-pl-xs">
                <q-btn
                  outline
                  label="Submit"
                  type="submit"
                  color="pink"
                  :disable="email === '' || title === '' || feedback === ''"
                />
              </div>
            </div>
          </q-form>
        </q-card-section>
        <q-card-section v-show="is_submitted">
          <h6 class="text-pink q-my-md text-center">
            Thanks for your feedback!
          </h6>
          <div class="row justify-center">
            <div class="q-pl-xs">
              <q-btn
                outline
                label="Digissist"
                to="/"
                color="pink"
                icon="keyboard_return"
              />
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
  name: "FeedbackPage",
  data: function () {
    return {
      email: "",
      title: "",
      feedback: "",
      err_msg: "",
      is_failure: false,
      is_submitted: false,
    };
  },
  created: function () {},
  mounted: function () {},
  methods: {
    onSubmit: function () {
      var vm = this;
      vm.is_failure = false;
      const api_headers = {
        "Content-Type": "application/json",
      };
      axios
        .post(
          `${process.env.API}/users/feedback`,
          {
            email: vm.email,
            title: vm.title,
            feedback: vm.feedback,
          },
          {
            headers: api_headers,
          }
        )
        .then(function (response) {
          console.log(response);
          if (response.status === 200) {
            console.log(`login resp data:  ${response.data}`);
            vm.is_submitted = true;
          } else {
            vm.is_failure = true;
            vm.err_msg = "Unknown";
          }
        })
        .catch(function (error) {
          console.log(error);
          vm.is_failure = true;
          vm.err_msg = "error";
        });
    },
  },
});
</script>