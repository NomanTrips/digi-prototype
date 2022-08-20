<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 700px">
      <q-card class="my-card">
        <q-card-section>
          <h6 class="text-pink q-my-md">About Digissist</h6>
          <div class="text-body2 text-left">
            Digissist is a user interface to help people and AI's interact in a
            fun and productive way. Think of it as a 'skin' for AI systems.
            <br />
            <br />
            <p>
              Digissist is powered by an AI called GPT-3 which was created by
              <a href="https://openai.com/">OpenAi</a>. Digissist did not create
              or train the AI models.
            </p>
          </div>
          <h6 class="text-pink q-my-md">Contact</h6>
          <div class="row">
            <a>admin@digissist.io</a>
          </div>
          <div class="row q-my-md">
            <q-btn
              outline
              label="Submit feedback"
              color="pink"
              to="/feedback"
            />
          </div>
          <h6 class="text-pink q-my-md">Usage policy</h6>
          <div class="row">
            <b>Interact with the AI responsibly:</b>

            <ul>
              <li>Avoid sensitive topics that could lead to harmful output.</li>
              <li>Don't prompt the AI with profane or erotic content.</li>
              <li>
                Don't prompt the AI with conversation that is racist, biased or
                attacks a specific people group in anyway. (religion, race,
                ethnicity, nationality, gender, sexual orientation)
              </li>
              <li>
                Don't attempt to get the AI to generate propoganda or other
                false statments.
              </li>
              <li>Don't use the AI to cheat on homework questions.</li>
              <li>
                Don't attempt to coerce the AI into saying things that are
                racist or hateful.
              </li>
              <li>
                Don't take medical or professional advice from the AI: it didn't
                go to med school or pass the bar exam.
              </li>
              <li>
                Don't incite the AI to say things and then post about them on
                social media to stoke controversy.
              </li>
            </ul>
            <p class="text-pink">
              Failure to interact with the AI responsibly will lead to a
              temporary or permanent ban at the discrection of the developer.
            </p>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutPage",
  data: function () {
    return {
      is_failure: false,
      err_msg: "",
      subscription_status: "",
    };
  },
  created: function () {
    var vm = this; // vm = view model, the vue instance'
  },
  methods: {},
});
</script>