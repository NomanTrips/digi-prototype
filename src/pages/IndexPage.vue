<template>
  <div class="q-pa-xs row justify-center">
    <div style="width: 100%; max-width: 600px">
      <q-card class="my-card" style="margin-bottom: 15px">
        <q-card-section style="padding: 10px">
          <div
            v-for="message in convo_json.messages"
            :key="message.messageId"
            :class="
              message.sender == 'AI'
                ? 'row justify-start no-wrap'
                : 'row justify-end no-wrap'
            "
          >
            <div class="col-shrink">
              <q-chat-message
                :name="message.sender"
                :text="[message.message_text]"
                :sent="message.sender != 'AI'"
                :bg-color="
                  message.sender == 'AI' ? primary_color : 'light-grey'
                "
                :text-color="message.sender == 'AI' ? 'white' : 'black'"
                :text-html="message.is_code"
              >
                <template v-slot:avatar="props">
                  <q-avatar
                    :size="screenSize > 600 ? '58px' : '48px'"
                    :props="props"
                    class="q-mx-xs"
                  >
                    <img
                      v-show="message.sender == 'AI'"
                      :src="getBotAvatarPath"
                    />
                    <img
                      :v-show="message.sender != 'AI'"
                      :src="getHumanAvatarPath"
                    />
                  </q-avatar>
                </template>
              </q-chat-message>
            </div>
            <div
              class="col-auto"
              v-show="message.sender == 'AI' && screenSize > 600"
            >
              <q-btn
                flat
                round
                size="xs"
                icon="content_copy"
                align="center"
                style="width: 16px; height: 16px; margin-top: 20px"
                @click="updateClipboard(message.message_text)"
              ></q-btn>
            </div>
          </div>

          <q-chat-message
            v-show="toggle_spinner"
            name="AI"
            :avatar="getBotAvatarPath"
            :bg-color="primary_color"
            text-color="white"
          >
            <q-spinner-dots size="2rem" />
          </q-chat-message>
        </q-card-section>
        <q-separator />
        <q-card-section style="padding: 8px">
          <div style="max-width: 600px" id="inputbox">
            <q-chat-message
              style="font-style: italic"
              size="10"
              v-show="show_prefix"
              name="Human"
              :text="[selected_template.prefix]"
              text-color="grey-7"
              sent
            >
              <template v-slot:avatar>
                <q-avatar
                  :size="screenSize > 600 ? '58px' : '38px'"
                  class="q-mx-xs"
                >
                  <img :src="getHumanAvatarPath" />
                </q-avatar>
              </template>
            </q-chat-message>
            <q-input
              v-model="user_input"
              outlined
              :color="primary_color"
              autogrow
              :disable="toggle_spinner"
              :placeholder="show_prefix ? '[Insert Text Here]' : ''"
              ref="userinput"
              :error="is_error"
              hide-bottom-space
              @clear="is_error = false"
            >
              <template v-slot:append>
                <q-btn
                  :size="screenSize > 600 ? 'md' : 'sm'"
                  round
                  dense
                  flat
                  icon="send"
                  @click="send_message"
                  :disable="is_error"
                />
              </template>
              <template v-slot:error>
                {{ error_message }}
              </template>
            </q-input>
          </div>
        </q-card-section>
        <q-card-actions align="around">
          <div class="row justify-center">
            <q-btn
              :size="screenSize > 600 ? 'md' : 'sm'"
              outline
              :color="primary_color"
              icon="psychology"
              @click="show_templates = true"
              class="q-mx-xs q-mb-md"
              >Tasks</q-btn
            >
            <q-btn
              :size="screenSize > 600 ? 'md' : 'sm'"
              outline
              :color="primary_color"
              icon="text_snippet"
              @click="card = true"
              class="q-mx-xs q-mb-md"
              >View prompt</q-btn
            >
            <q-btn
              :size="screenSize > 600 ? 'md' : 'sm'"
              outline
              :color="primary_color"
              icon="settings"
              @click="show_settings = true"
              class="q-mx-xs q-mb-md"
            ></q-btn>
            <q-chip
              dense
              class="q-mx-xs q-mb-md"
              :color="getTokenCount > 1024 ? primary_color : 'light-grey'"
              :text-color="getTokenCount > 1024 ? 'white' : 'grey-6'"
              :size="screenSize > 600 ? 'md' : 'sm'"
            >
              {{ getTokenCount }}/1024
              <q-tooltip>Token limit</q-tooltip>
            </q-chip>
          </div>
          <div class="row justify-center text-caption" style="color: goldenrod">
            Interacting with an AI system: verify the output carefully.
          </div>
          <q-dialog v-model="card">
            <q-card class="my-card" style="width: 400px">
              <q-card-section>
                <div class="text-h6">Prompt text:</div>
              </q-card-section>
              <q-card-section>
                <div>
                  <q-input
                    v-model="selected_template.text"
                    outlined
                    :color="primary_color"
                    type="textarea"
                    autogrow
                    @focus="user_input = ''"
                    :disable="user_id != 17"
                  />
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

          <q-dialog v-model="show_settings">
            <q-card class="my-card" style="width: 400px">
              <q-card-section>
                <div class="text-h6">AI Settings:</div>
              </q-card-section>
              <q-card-section>
                <div>
                  <q-select
                    outlined
                    v-model="ai_model_engine"
                    :options="ai_model_engines"
                    label="GPT-3 model engine"
                    :color="primary_color"
                    bottom-slots
                    :hide-hint="premium_tf"
                  >
                    <q-tooltip
                      anchor="top middle"
                      self="bottom middle"
                      :offset="[10, 10]"
                    >
                      Davinci is the most powerful. Ada is the fastest.
                    </q-tooltip>
                    <template v-slot:hint>
                      <div style="color: goldenrod">
                        Sign up for Premium to talk to Davinci!
                      </div>
                    </template>
                  </q-select>
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

          <q-dialog v-model="show_templates">
            <q-card class="my-card" style="width: 400px">
              <q-card-section>
                <div class="text-h6">Choose a task:</div>
              </q-card-section>
              <q-card-section>
                <div>
                  <q-list bordered separator dense>
                    <q-item-label header>General</q-item-label>
                    <q-item
                      tag="label"
                      v-ripple
                      v-for="template in conversation_templates"
                      :key="template.value"
                    >
                      <q-item-section avatar>
                        <q-radio
                          v-model="selected_template_key"
                          :val="template.value"
                          :color="primary_color"
                        />
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>{{ template.label }}</q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-separator />
                    <q-item-label header>Internet tasks</q-item-label>
                    <q-item
                      tag="label"
                      v-ripple
                      v-for="template in internet_task_templates"
                      :key="template.value"
                    >
                      <q-item-section avatar>
                        <q-radio
                          v-model="selected_template_key"
                          :val="template.value"
                          :color="primary_color"
                        />
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>{{ template.label }}</q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-separator />
                    <q-item-label header>Software development</q-item-label>
                    <q-item
                      tag="label"
                      v-ripple
                      v-for="template in digital_work_templates"
                      :key="template.value"
                    >
                      <q-item-section avatar>
                        <q-radio
                          v-model="selected_template_key"
                          :val="template.value"
                          :color="primary_color"
                        />
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>{{ template.label }}</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </div>
              </q-card-section>

              <q-separator />
            </q-card>
          </q-dialog>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
import TestJson from "../assets/convo.json";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
import { ref } from "vue";

export default defineComponent({
  name: "IndexPage",
  Components: {},
  data: function () {
    return {
      summarization_template:
        "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\r\n\r\nHuman: Hello, who are you?\r\nAI: I am an AI created by OpenAI. How can I help you today?\r\nHuman: Can you summarize this into one sentance for me?\r\n",
      summarization_long_template:
        "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\r\n\r\nHuman: Hello, who are you?\r\nAI: I am an AI created by OpenAI. How can I help you today?\r\nHuman: Can you summarize the following text?\r\n",
      summarization_dev_template:
        "The following is a conversation with an AI assistant. The conversation is about software development.\r\n\r\nHuman: Hello, who are you?\r\nAI: I am an AI created by OpenAI. How can I help you today?\r\nHuman: Can you summarize the following text?\r\n",
      generic_conversation_template:
        "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\r\n\r\nHuman: Hello, who are you?\r\nAI: I am an AI created by OpenAI. How can I help you today?\r\nHuman: ",
      summarization_email:
        "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\r\n\r\nHuman: Hello, who are you?\r\nAI: I am an AI created by OpenAI. How can I help you today?\r\nHuman: Can you summarize this email?\r\n",
      summarization_bug:
        "The following is a conversation with an AI assistant. The conversation is about software development.\r\n\r\nHuman: Hello, who are you?\r\nAI: I am an AI created by OpenAI. How can I help you today?\r\nHuman: Can you summarize this bug?\r\n",
      internet_comment:
        "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\r\n\r\nHuman: Hello, who are you?\r\nAI: I am an AI created by OpenAI. How can I help you today?\r\nHuman: Can you summarize this internet comment?\r\n",
      email_writing:
        "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\r\n\r\nHuman: Hello, who are you?\r\nAI: I am an AI created by OpenAI. How can I help you today?\r\nHuman: Can you re-write this email more succinctly?\r\n",
      software_requirements_writing:
        "The following is a conversation with an AI assistant. The conversation is about software development.\r\n\r\nHuman: Hello, who are you?\r\nAI: I am an AI created by OpenAI. How can I help you today?\r\nHuman: Can you re-write this software requirment more succinctly?\r\n",
      summarization_ticket:
        "The following is a conversation with an AI assistant. The conversation is about software development.\r\n\r\nHuman: Hello, who are you?\r\nAI: I am an AI created by OpenAI. How can I help you today?\r\nHuman: Can you summarize what this ticket is asking for?\r\n",
      convo_json: {},
      user_input: "",
      msg_sequence: 2,
      toggle_spinner: false,
      user_id: 24, // free account user id
      is_signed_in: true,
      avatar: null,
      bot_avatar: null,
      primary_color: null,
      is_loading: false,
      message_prefix: "",
      prompt_type: "generic_conversation",
      ai_model_engines: [
        "text-davinci-003",
        "text-davinci-002",
        "text-curie-001",
        "text-babbage-001",
        "text-ada-001",
      ],
      ai_model_engine: "text-davinci-003",
      showTokenWarning: false,
      conversation_templates: [
        {
          label: "Conversation (default)",
          value: "generic_conversation",
          color: "pink",
          text: "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\r\n\r\nHuman: Hello, who are you?\r\nAI: I am an AI created by OpenAI. How can I help you today?\r\nHuman: ",
          prefix: "",
        },
        {
          label: "Summarize into one sentance",
          value: "summarization",
          color: "pink",
          text: "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\r\n\r\nHuman: Hello, who are you?\r\nAI: I am an AI created by OpenAI. How can I help you today?\r\nHuman: Can you summarize this into one sentance for me?\r\n",
          prefix: "Can you summarize this into one sentance for me?\r\n",
        },
        {
          label: "Summarization",
          value: "summarization_long",
          color: "pink",
          text: "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\r\n\r\nHuman: Hello, who are you?\r\nAI: I am an AI created by OpenAI. How can I help you today?\r\nHuman: Can you summarize the following text?\r\n",
          prefix: "Can you summarize the following text?\r\n",
        },
      ],
      internet_task_templates: [
        {
          label: "Email summarization",
          value: "summarization_email",
          color: "pink",
          text: "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\r\n\r\nHuman: Hello, who are you?\r\nAI: I am an AI created by OpenAI. How can I help you today?\r\nHuman: Can you summarize the following email?\r\n",
          prefix: "Can you summarize the following email?\r\n",
        },
        {
          label: "Email writing help",
          value: "email_writing",
          color: "pink",
          text: "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\r\n\r\nHuman: Hello, who are you?\r\nAI: I am an AI created by OpenAI. How can I help you today?\r\nHuman: Can you re-write the following email body more succinctly?\r\n",
          prefix:
            "Can you re-write the following email body more succinctly?\r\n",
        },
        {
          label: "Summarize internet comment",
          value: "internet_comment",
          color: "pink",
          text: "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\r\n\r\nHuman: Hello, who are you?\r\nAI: I am an AI created by OpenAI. How can I help you today?\r\nHuman: Can you summarize this internet comment?\r\n",
          prefix: "Can you summarize this internet comment?\r\n",
        },
      ],
      digital_work_templates: [
        {
          label: "Bug summarization",
          value: "summarization_bug",
          color: "pink",
          text: "The following is a conversation with an AI assistant. The conversation is about software development.\r\n\r\nHuman: Hello, who are you?\r\nAI: I am an AI created by OpenAI. How can I help you today?\r\nHuman: Can you summarize this bug?\r\n",
          prefix: "Can you summarize this bug?\r\n",
        },
        {
          label: "Customer ticket summarization",
          value: "summarization_ticket",
          color: "pink",
          text: "The following is a conversation with an AI assistant. The conversation is about software development.\r\n\r\nHuman: Hello, who are you?\r\nAI: I am an AI created by OpenAI. How can I help you today?\r\nHuman: Can you summarize what this ticket is asking for?\r\n",
          prefix: "Can you summarize what this ticket is asking for?\r\n",
        },
        {
          label: "Software requirement writing",
          value: "software_requirement_writing",
          color: "pink",
          text: "The following is a conversation with an AI assistant. The conversation is about software development.\r\n\r\nHuman: Hello, who are you?\r\nAI: I am an AI created by OpenAI. How can I help you today?\r\nHuman: Can you re-write the following software requirement more succinctly?\r\n",
          prefix:
            "Can you re-write the following software requirement more succinctly?\r\n",
        },
      ],
      selected_template: {
        label: "Conversation (default)",
        value: "generic_conversation",
        color: "pink",
        text: "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\r\n\r\nHuman: Hello, who are you?\r\nAI: I am an AI created by OpenAI. How can I help you today?\r\nHuman: ",
        prefix: "",
      },
      selected_template_key: "generic_conversation",
      show_prefix: false,
      premium_tf: false,
      error_message: "",
      is_error: false,
      //user_setting:{
      //  bot_avatar: 'robot_1',
      //},
    };
  },
  computed: {
    // a computed getter
    screenSize() {
      return this.$q.screen.width;
    },
    getTokenCount() {
      var vm = this;
      return Math.round(
        (vm.selected_template.text.length + vm.user_input.length) / 4
      );
    },
    getBotAvatarPath() {
      var vm = this;
      if (vm.bot_avatar === null) {
        return `${process.env.ICON_PATH}/white_square.png`;
      } else if (vm.bot_avatar === "green_spark") {
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
    },
    getHumanAvatarPath() {
      var vm = this;
      if (vm.avatar === null) {
        return `${process.env.ICON_PATH}/white_square.png`;
      } else if (vm.avatar === "human_2") {
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
    },
  },
  created: function () {
    var vm = this; // vm = view model, the vue instance
    vm.convo_json = _.cloneDeep(TestJson);
    if (localStorage.getItem("bot_avatar") != null) {
      vm.bot_avatar = localStorage.bot_avatar;
    }
    if (localStorage.getItem("avatar") != null) {
      vm.avatar = localStorage.avatar;
    }
    if (localStorage.getItem("primary_color") != null) {
      vm.primary_color = localStorage.primary_color;
    }
    if (localStorage.user_id) {
      this.user_id = localStorage.user_id;
      this.is_signed_in = true;
      vm.getSettings();
    } else {
      // set some default skins
      vm.bot_avatar = "owley";
      vm.avatar = "human_1";
      vm.primary_color = "pink";
    }
    // vm.loadTemplate("Conversation");

    //const log = document.getElementById('userinput'); this is broke... should be in mounted

    document.addEventListener("keydown", logKey);
    function logKey(e) {
      //console.log(e);
      if (e.code === "Enter") {
        // hack to send the message when hitting 'enter' since the input is a text area
        if (vm.user_input != "") {
          vm.$refs.userinput.blur();
          vm.send_message();
        }
      }
    }
    if (localStorage.premium_tf === "true") {
      vm.premium_tf = true;
    }

    if (!vm.premium_tf) {
      // only premium users can access davinci
      vm.ai_model_engines = _.slice(
        vm.ai_model_engines,
        1,
        vm.ai_model_engines.length
      );
      vm.ai_model_engine = "text-curie-001";
    }
  },
  mounted() {},
  watch: {
    selected_template_key(key) {
      // set the selected template based on radio selection
      var vm = this;
      var template = undefined;

      template = _.find(vm.conversation_templates, function (o) {
        return o.value === key;
      });
      if (template != undefined) {
        vm.selected_template = template;
      }
      template = _.find(vm.internet_task_templates, function (o) {
        return o.value === key;
      });
      if (template != undefined) {
        vm.selected_template = template;
      }
      template = _.find(vm.digital_work_templates, function (o) {
        return o.value === key;
      });
      if (template != undefined) {
        vm.selected_template = template;
      }

      if (vm.selected_template.prefix != "") {
        vm.show_prefix = true;
      }
      vm.show_templates = false;
      vm.convo_json = _.cloneDeep(TestJson);
    },
    user_input(input) {
      var vm = this;
      if (input != null) {
        if (input.length > 1000) {
          vm.is_error = true;
          vm.error_message = "Input is too big. Try something smaller";
        } else {
          vm.is_error = false;
          vm.error_message = "";
        }
      }
    },
    getTokenCount(count) {
      var vm = this;
      if (count > 1024) {
        vm.is_error = true;
        vm.error_message =
          "Token limit reached. Refresh the page to start a new conversation.";
      }
    },
    name(user_id) {
      console.log("watcher firing");
      localStorage.user_id = user_id;
    },
  },
  methods: {
    removeTags(str) {
      return str.replace(/<\/?pre[^>]*>|<\/?code>/gi, "");
    },
    updateClipboard(newClip) {
      var vm = this;
      newClip = vm.removeTags(newClip);
      navigator.clipboard.writeText(newClip).then(
        () => {
          /* clipboard successfully set */
        },
        () => {
          /* clipboard write failed */
        }
      );
    },
    doesStrContainProgrammingChars(str) {
      let regex = /([\#\{\(;])\S*/g;
      let matches = str.match(regex);
      console.log(matches);
      if (matches != null && matches.length > 1) {
        return true;
      } else {
        return false;
      }
    },
    loadTemplate: function (template) {
      var vm = this;
      vm.prompt_type = template.value;
      vm.selected_template.text = template.text;
      vm.message_prefix = template.prefix;

      if (template_name === "generic_conversation") {
        vm.prompt_type = "generic_conversation";
        vm.selected_template.text = vm.generic_conversation_template;
      } else if (template_name === "summarization") {
        vm.prompt_type = "summarization";
        vm.selected_template.text = vm.summarization_template;
        vm.message_prefix =
          "Can you summarize this into one sentance for me?\r\n";
      } else if (template_name === "summarization_long") {
        vm.prompt_type = "summarization";
        vm.selected_template.text = vm.summarization_long_template;
        vm.message_prefix = "Can you summarize the following text?\r\n";
      } else if (template_name === "summarization_dev") {
        vm.prompt_type = "summarization";
        vm.selected_template.text = vm.summarization_dev_template;
        vm.message_prefix = "Can you summarize the following text?\r\n";
      }
      //vm.convo_json = TestJson;
    },
    add_quotes_for_summarization: function (userinput) {
      if (_.startsWith(userinput, '"') && _.endsWith(userinput, '"')) {
        return userinput;
      } else if (_.startsWith(userinput, "'") && _.endsWith(userinput, "'")) {
        return userinput;
      } else {
        return `"${userinput}"`;
      }
    },
    logInput: function () {
      var vm = this;
      console.log(vm.user_input);
    },
    send_message: function () {
      var vm = this;
      if (vm.show_prefix) {
        // task specific molding of input
        vm.user_input = vm.add_quotes_for_summarization(vm.user_input); // quotes for passage to summarize bc LLM magicks?
        vm.message_prefix = vm.selected_template.prefix;
        vm.show_prefix = false;
      }
      var human_message = {
        messageId: uuidv4(), // make this guid
        sender: "Human",
        message_text: vm.message_prefix + vm.user_input, // prepend the task instruction.... 'Can you summarize this?' etc
      };
      vm.message_prefix = "";
      human_message.messageId = human_message.messageId + 1;
      vm.convo_json.messages.push(human_message);
      vm.toggle_spinner = true;
      vm.selected_template.text =
        String(vm.selected_template.text) + String(vm.user_input) + "\r\nAI:";
      vm.user_input = "";
      const api_headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer " + ${localStorage.token}`,
        //'Authorization': vm.openai_key,
      };
      //axios.post('https://digissist-server.azurewebsites.net/completions', {
      axios
        .post(
          `${process.env.API}/completions`,
          {
            engine: vm.ai_model_engine,
            prompt: vm.selected_template.text,
            max_tokens: 150,
            temperature: 0.9,
            top_p: 1,
            n: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.6,
            stream: false,
            logprobs: null,
            user: String(vm.user_id),
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.token,
              "Content-Type": "application/json",
            },
            //headers: api_headers,
          }
        )
        .then(function (response) {
          var ai_message = {
            messageId: uuidv4(),
            sender: "AI",
            message_text: String(response.data.choices[0].text),
            is_code: false,
          };
          vm.toggle_spinner = false;
          vm.selected_template.text =
            String(vm.selected_template.text) +
            String(ai_message.message_text) +
            "\r\n" +
            "Human: ";
          if (vm.doesStrContainProgrammingChars(ai_message.message_text)) {
            //console.log("matches");
            // add code and pre tags to render the code better on the screen
            ai_message.is_code = true;
            var pattern = /\b(def|function|public|var|import|let)\b/; // common coding keywords
            var match = ai_message.message_text.match(pattern);
            if (match) {
              // wrap code in tags
              ai_message.message_text =
                ai_message.message_text.slice(0, match.index) +
                '<pre style="white-space:pre-wrap;"><code>' +
                ai_message.message_text.slice(match.index);
              ai_message.message_text += "</code></pre>";
            } else {
              // failed to find keywords, just wrap the whole thing
              ai_message.message_text = `<pre style="white-space:pre-wrap;"><code>${ai_message.message_text}</code></pre>`;
            }
          }
          vm.convo_json.messages.push(ai_message);
          console.log(":::Messages Obj:::");
          console.log(vm.convo_json);
          console.log(":::Messages str:::");
          console.log(vm.selected_template.text);
          const element = document.getElementById("inputbox");
          element.scrollIntoView();
        })
        .catch(function (error) {
          console.log(error);
          if (error.response.status === 429) {
            // too many requests to the api
            vm.error_message = error.response.data;
            vm.is_error = true;
          } else if (error.response.status === 500) {
            if (error.response.data === "Unsafe content") {
              vm.error_message =
                "We detected inappropriate content in the output. Please refresh the page and try a new conversation.";
              vm.is_error = true;
            }
          }
        })
        .then(function () {
          // always executed
          vm.toggle_spinner = false;
          vm.prompt_type = "generic_conversation"; // even if coming from summarization task, set to genric after to continue w additional questions
          vm.message_prefix = "";
        });
    },
    getSettings: function () {
      var vm = this;
      vm.is_loading = true;
      if (vm.is_signed_in) {
        //axios.get(`http://localhost:3000/users/${localStorage.user_id}/settings`)
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
    return {
      card: ref(false),
      show_settings: ref(false),
      show_templates: ref(false),
    };
  },
});
</script>
<style scoped>
body {
  font-size: 1rem;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  min-height: 100vh;
  background-color: #dadada;
}
pre {
  background: #eee;
  padding-bottom: 2em;
}
img q-message-avatar {
  border-radius: 50%;
  width: 64px;
  height: 64px;
  min-width: 64px;
}
</style>