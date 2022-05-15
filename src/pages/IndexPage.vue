<template >

  <div class="q-pa-md row justify-center" >
    <div style="width: 100%; max-width: 500px">
      <q-card class="my-card">
        <q-card-section>
          <q-chat-message
            v-for="message in convo_json.messages"
            :key="message.messageId"
            :name="message.sender"
            :avatar="message.sender == 'AI' ? getBotAvatarPath : 'https://cdn.quasar.dev/img/avatar1.jpg'"
            :text="[message.message_text]"
            :sent="message.sender != 'AI'"
            :bg-color="message.sender == 'AI' ? 'pink' : 'light-grey'"
            :text-color="message.sender == 'AI' ? 'white' : 'black'"
            
          />

      <q-chat-message
            v-show="toggle_spinner"
            name="AI"
            :avatar="getBotAvatarPath"
            bg-color="pink"
            text-color="white"
      >
        <q-spinner-dots size="2rem" />
      </q-chat-message>
         
        </q-card-section>
        <q-separator />
        <q-card-section>
          <div class="q-pa-md" style="max-width: 500px">
            <q-input
              v-model="user_input"
              outlined
              color="pink"
              autogrow
              :disable="toggle_spinner"
            >
            <template v-slot:after>
            <q-btn round dense flat icon="send" @click="send_message"/>
            </template>
            </q-input>
  </div>
              </q-card-section>
                    <q-card-actions align="around">
        <q-btn outline color="pink" icon="content_paste">Paste</q-btn>
        <q-btn outline color="pink" icon="refresh">Clear</q-btn>
        <q-btn outline color="pink" icon="collections_bookmark" @click="radio">Templates</q-btn>
        <q-btn outline color="pink" icon="edit_note" @click="card = true" >Edit text</q-btn>

    <q-dialog v-model="card">
      <q-card class="my-card">
        <q-card-section>
          <div class="text-h6">Edit conversation text:</div>
        </q-card-section>
        <q-card-section>
          <div>
            <q-input
              v-model="convo_template"
              outlined
              color="pink"
              type="textarea"
              autogrow
              style="width:500px;"
            />
          </div>
        </q-card-section>

        <q-separator />
        <q-card-actions align="right">
          <q-btn v-close-popup outline color="pink" label="Okay" />
        </q-card-actions>
      </q-card>
    </q-dialog>

      </q-card-actions>
    </q-card>
    </div>
  </div>

</template>

<script>
import { defineComponent } from 'vue'
import { useQuasar } from 'quasar'
import TestJson from '../assets/convo.json'
import axios from "axios"
import { v4 as uuidv4 } from 'uuid'
import _ from "lodash"
import { ref } from 'vue'
//import DotEnv  from "dotenv"
//const parsedEnv = DotEnv.config().parsed

export default defineComponent({
  name: 'IndexPage',
  Components: {
  },
  data: function (){
    return {
      convo_template: "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\r\n\r\nHuman: Hello, who are you?\r\nAI: I am an AI created by OpenAI. How can I help you today?\r\n\r\nHuman: ",
      convo_json: {"messages":[]},
      user_input: "",
      msg_sequence: 2,
      toggle_spinner: false,
      user_id: 0,
      is_signed_in: true,
      bot_avatar: 'robot-1',
      //user_setting:{
      //  bot_avatar: 'robot_1',
      //},
    }
  },
  computed: {
    // a computed getter
    getBotAvatarPath() {
      var vm = this;
      if (vm.bot_avatar === 'robot-2') {
        return `${process.env.ICON_PATH}/robot-2.png`
      } else if (vm.bot_avatar === 'robot-3'){
        return `${process.env.ICON_PATH}/robot-3.png`
      } else if (vm.bot_avatar === 'robot-4'){
        return `${process.env.ICON_PATH}/robot-4.png`
      } else if (vm.bot_avatar === 'robot-5'){
        return `${process.env.ICON_PATH}/robot-5.png`
      } else {
        return `${process.env.ICON_PATH}/robot-1.png`
      }
    }
  },
  created: function (){
    var vm = this; // vm = view model, the vue instance
    if (localStorage.user_id) {
      this.user_id = localStorage.user_id;
      this.is_signed_in = true;
      vm.getSettings();
    }
    vm.loadTemplate('Conversation');
    
  },
  mounted() {

  },
  watch: {
    name(user_id) {
      localStorage.user_id = user_id;
    }
  },
  methods: {
    radio: function (){
      this.$q.dialog({
        title: 'Templates',
        message: 'Choose an conversation template:',
        options: {
          type: 'radio',
          model: 'opt1',
          // inline: true
          items: [
            { label: 'TL;DR Summarization', value: 'opt1', color: 'pink' },
            { label: 'Question and answering', value: 'opt2', color: 'pink' },
            { label: 'Free form conversation', value: 'opt3', color: 'pink' }
          ]
        },
        cancel: true,
        persistent: true
      }).onOk(data => {
        // console.log('>>>> OK, received', data)
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    },
    loadTemplate: function (template_name) {
      var vm = this;
      vm.convo_json = TestJson;
    },
    send_message: function (){
      var vm= this;
      var human_message = {
		    "messageId": uuidv4(), // make this guid
	      "sender":"Human",
        "message_text": vm.user_input
      };
      human_message.messageId =  human_message.messageId + 1;
      vm.convo_json.messages.push(human_message);
      vm.user_input = "";
      vm.toggle_spinner = true;
      vm.convo_template = String(vm.convo_template) + String(human_message.message_text) + '\r\n';
      const api_headers = {
        'Content-Type': 'application/json',
        //'Authorization': vm.openai_key,
      }
      //axios.post('https://digissist-server.azurewebsites.net/completions', {
      axios.post(`${process.env.API}/completions`, {
          engine: "text-davinci-002",
          prompt: vm.convo_template,
          max_tokens: 150,
          temperature: 0.9,
          top_p: 1,
          n: 1,
          frequency_penalty: 0.0,
          presence_penalty: 0.6,
          stream: false,
          logprobs: null
        },
         {
          headers: api_headers
        }
        )
        .then(function (response) {
          var ai_message = {
            "messageId": uuidv4(),
            "sender":"AI",
            "message_text": String(response.data.choices[0].text)
          };
          vm.toggle_spinner = false;
          vm.convo_json.messages.push(ai_message);
          vm.convo_template = String(vm.convo_template) + String(ai_message.message_text) + '\r\n\r\n' + 'Human: ';
          //console.log(":::Messages Obj:::");
          //console.log(vm.convo_json);
          //console.log(":::Messages str:::");
          //console.log(vm.convo_template);
        })
        .catch(function (error) {
          console.log(error);
          vm.toggle_spinner = false;
        });
    },
    getSettings: function (){
      var vm = this;
      if (vm.is_signed_in){
        //axios.get(`http://localhost:3000/users/${localStorage.user_id}/settings`)
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
          });
      }
    },
  },
   setup () {
    return {
      card: ref(false),
    }
   }
})
</script>
