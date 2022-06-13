<template>

  <div class="q-pa-md row justify-center" >
    <div style="width: 100%; max-width: 500px">
      <q-card class="my-card">
        <q-card-section>
          <q-chat-message
            v-for="message in convo_json.messages"
            :key="message.messageId"
            :name="message.sender"
            :text="[message.message_text]"
            :sent="message.sender != 'AI'"
            :bg-color="message.sender == 'AI' ? 'pink' : 'light-grey'"
            :text-color="message.sender == 'AI' ? 'white' : 'black'"
            
          >

          <template v-slot:avatar="props">
            <q-avatar size="58px" :props="props" class="q-mx-xs" v-show="! is_loading">
              <img v-show="message.sender == 'AI'" :src="getBotAvatarPath">
              <img v-show="message.sender != 'AI'" :src="getHumanAvatarPath">
            </q-avatar>
            <div v-show="is_loading" class="q-pa-xs">
              <q-spinner
                color="pink"
                size="2em"
                />  
            </div>       
          </template>
          </q-chat-message>


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



          <div  style="max-width: 500px">
          <q-chat-message
            style="font-style:italic;"
            size="10"
            v-show="prompt_type == 'summarization'"
            name="Human"
            :text="[message_prefix]"
            text-color="grey-7"
            sent
          >
          <template v-slot:avatar>
            <q-avatar size="58px" class="q-mx-xs">
              <img :src="getHumanAvatarPath">
            </q-avatar>            
          </template>
          </q-chat-message>

            <q-input
              v-model="user_input"
              outlined
              color="pink"
              autogrow
              :disable="toggle_spinner"
              :placeholder="prompt_type == 'summarization' ? '[Insert Text Here]':''"
              placeholder-color="orange"
              id="userinput"
            >
            <template v-slot:after>
            <q-btn round dense flat icon="send" @click="send_message"/>
            </template>
            </q-input>


  </div>
              </q-card-section>
                    <q-card-actions align="around">
                      <div class="row justify-center">
                        <q-btn outline color="pink" icon="edit_note" @click="card = true" class="q-mx-xs">Edit prompt</q-btn>
                        <q-btn outline color="pink" icon="collections_bookmark" @click="radio" class="q-mx-xs">Templates</q-btn>
                        <q-btn outline color="pink" icon="settings" @click="show_settings = true" class="q-mx-xs"></q-btn>
                      </div>

    <q-dialog v-model="card">
      <q-card class="my-card" style="width:400px;">
        <q-card-section>
          <div class="text-h6">Edit prompt text:</div>
        </q-card-section>
        <q-card-section>
          <div>
            <q-input
              v-model="convo_template"
              outlined
              color="pink"
              type="textarea"
              autogrow
            />
          </div>
        </q-card-section>

        <q-separator />
        <q-card-actions align="right">
          <q-btn v-close-popup outline color="pink" label="Okay" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="show_settings">
      <q-card class="my-card" style="width:400px;">
        <q-card-section>
          <div class="text-h6">AI Settings:</div>
        </q-card-section>
        <q-card-section>
          <div>
            <q-select outlined v-model="ai_model_engine" :options="ai_model_engines" label="GPT-3 model engine" color="pink">
              <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
                Davinci is the most powerful. Ada is the fastest.
              </q-tooltip>
            </q-select>
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

export default defineComponent({
  name: 'IndexPage',
  Components: {
  },
  data: function (){
    return {
      convo_template: "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\r\n\r\nHuman: Hello, who are you?\r\nAI: I am an AI created by OpenAI. How can I help you today?\r\nHuman: ",
      summarization_template: "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\r\n\r\nHuman: Hello, who are you?\r\nAI: I am an AI created by OpenAI. How can I help you today?\r\nHuman: Can you summarize this into one sentance for me?\r\n",
      summarization_long_template: "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\r\n\r\nHuman: Hello, who are you?\r\nAI: I am an AI created by OpenAI. How can I help you today?\r\nHuman: Can you summarize the following text?\r\n",
      summarization_dev_template: "The following is a conversation with an AI assistant. The conversation is about software development.\r\n\r\nHuman: Hello, who are you?\r\nAI: I am an AI created by OpenAI. How can I help you today?\r\nHuman: Can you summarize the following text?\r\n",
      generic_conversation_template: "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\r\n\r\nHuman: Hello, who are you?\r\nAI: I am an AI created by OpenAI. How can I help you today?\r\nHuman: ",
      convo_json: {"messages":[]},
      user_input: "",
      msg_sequence: 2,
      toggle_spinner: false,
      user_id: 0,
      is_signed_in: true,
      avatar: 'human_1',
      bot_avatar: 'default',
      is_loading: false,
      message_prefix: "",
      prompt_type: "generic_conversation",
      ai_model_engines: ['text-davinci-002', 'text-curie-001', 'text-babbage-001', 'text-ada-001'],
      ai_model_engine: 'text-davinci-002',
      //user_setting:{
      //  bot_avatar: 'robot_1',
      //},
    }
  },
  computed: {
    // a computed getter
    getBotAvatarPath() {
      var vm = this;
      if (vm.is_loading){
        return `${process.env.ICON_PATH}/white_square.png`;
      } else {
        if (vm.bot_avatar === 'green_spark') {
          return `${process.env.ICON_PATH}/green_spark.png`
        } else if (vm.bot_avatar === 'penguin'){
          return `${process.env.ICON_PATH}/penguin.png`
        } else if (vm.bot_avatar === 'owley'){
          return `${process.env.ICON_PATH}/owley.png`
        } else if (vm.bot_avatar === 'diaspora'){
          return `${process.env.ICON_PATH}/diaspora.png`
        } else {
          return `${process.env.ICON_PATH}/default.png`
        }
      }
    },
    getHumanAvatarPath() {
      var vm = this;
      if (vm.is_loading){
        return `${process.env.ICON_PATH}/white_square.png`;
      } else {
        if (vm.avatar === 'human_2') {
          return `${process.env.ICON_PATH}/human_2.png`
        } else if (vm.avatar === 'human_3'){
          return `${process.env.ICON_PATH}/human_3.png`
        } else if (vm.avatar === 'human_4'){
          return `${process.env.ICON_PATH}/human_4.png`
        } else if (vm.avatar === 'human_5'){
          return `${process.env.ICON_PATH}/human_5.png`
        } else {
          return `${process.env.ICON_PATH}/human_1.png`
        }
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
  
  const log = document.getElementById('userinput');
  document.addEventListener('keydown', logKey);
  function logKey(e) {
    if (e.code === 'Enter'){ // hack to send the message when hitting 'enter' since the input is a text area
      if (vm.user_input != ""){
        vm.send_message();
      }
    }
  }

  },
  mounted() {

  },
  watch: {
    name(user_id) {
      console.log('watcher firing');
      localStorage.user_id = user_id;
    }
  },
  methods: {
    radio: function (){
      var vm = this;
      this.$q.dialog({
        title: 'Choose a prompt template:',
        //message: 'Choose a prompt template:',
        options: {
          type: 'radio',
          model: 'opt1',
          // inline: true
          items: [
            { label: 'Generic conversation (default)', value: 'generic_conversation', color: 'pink' },
            { label: 'Summarization - into one sentance', value: 'summarization', color: 'pink' },
            { label: 'Summarization', value: 'summarization_long', color: 'pink' },
            { label: 'Summarization - software development', value: 'summarization_dev', color: 'pink' },
          ]
        },
        cancel: true,
        persistent: true
      }).onOk(data => {
         //console.log('>>>> OK, received', data);
         vm.loadTemplate(data);
      }).onCancel(() => {
         console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    },
    loadTemplate: function (template_name) {
      var vm = this;
      if (template_name === 'generic_conversation'){
        vm.prompt_type = "generic_conversation";
        vm.convo_template = vm.generic_conversation_template;
      } else if (template_name === 'summarization'){
        vm.prompt_type = "summarization";
        vm.convo_template = vm.summarization_template;
        vm.message_prefix = "Can you summarize this into one sentance for me?\r\n"
      } else if (template_name === 'summarization_long'){
        vm.prompt_type = "summarization";
        vm.convo_template = vm.summarization_long_template;
        vm.message_prefix = "Can you summarize the following text?\r\n"
      } else if (template_name === 'summarization_dev'){
        vm.prompt_type = "summarization";
        vm.convo_template = vm.summarization_dev_template;
        vm.message_prefix = "Can you summarize the following text?\r\n"
      }
      vm.convo_json = TestJson;
    },
    add_quotes_for_summarization: function(userinput){
      if ( _.startsWith(userinput, '"') && _.endsWith(userinput, '"') ){
        return userinput;
      }
      else if (_.startsWith(userinput, '\'') && _.endsWith(userinput, '\'')){
        return userinput;
      } else {
        return `"${userinput}"`;
      }
    },
    logInput: function(){
      var vm= this;
      console.log(vm.user_input);
    },
    send_message: function (){
      var vm= this;
      if (vm.prompt_type == 'summarization'){
        // task specific molding of input 
        vm.user_input = vm.add_quotes_for_summarization(vm.user_input); // quotes for passage to summarize bc LLM magicks?
      };
      var human_message = {
		    "messageId": uuidv4(), // make this guid
	      "sender":"Human",
        "message_text": vm.message_prefix + vm.user_input // prepend the task instruction.... 'Can you summarize this?' etc
      };
      human_message.messageId =  human_message.messageId + 1;
      vm.convo_json.messages.push(human_message);
      vm.toggle_spinner = true;
      vm.convo_template = String(vm.convo_template) + String(vm.user_input) + '\r\nAI:';
      vm.user_input = "";
      const api_headers = {
        'Content-Type': 'application/json',
        //'Authorization': vm.openai_key,
      }
      //axios.post('https://digissist-server.azurewebsites.net/completions', {
      axios.post(`${process.env.API}/completions`, {
          engine: vm.ai_model_engine,
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
          vm.convo_template = String(vm.convo_template) + String(ai_message.message_text) + '\r\n' + 'Human: ';
          console.log(":::Messages Obj:::");
          console.log(vm.convo_json);
          console.log(":::Messages str:::");
          console.log(vm.convo_template);
        })
        .catch(function (error) {
          console.log(error);
          vm.toggle_spinner = false;
        })
        .then(function () {
          // always executed
          vm.prompt_type = "generic_conversation"; // even if coming from summarization task, set to genric after to continue w additional questions
          vm.message_prefix = "";
        });
    },
    getSettings: function (){
      var vm = this;
      vm.is_loading = true;
      if (vm.is_signed_in){
        //axios.get(`http://localhost:3000/users/${localStorage.user_id}/settings`)
        axios.get(`${process.env.API}/users/${localStorage.user_id}/settings`)
          .then(function (response) {
            // handle success
            vm.bot_avatar = response.data.bot_avatar;
            vm.avatar = response.data.avatar;
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
    return {
      card: ref(false),
      show_settings: ref(false),
    }
   }
})
</script>
<style scoped>
img q-message-avatar {
    border-radius: 50%;
    width: 64px;
    height: 64px;
    min-width: 64px;
}
</style>