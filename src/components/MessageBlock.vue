<template>

    <div v-for="segment in messageSegments" :key="segment.id" style="white-space:pre-wrap;margin-bottom: 5px;" v-show="! displayRaw">

        <table v-if="segment.isCode" style="margin-top:8px;width:475px;border-spacing:0px;">
          <tr style="padding-top:5px;">
            <th style="color:black;margin:0px;padding:0px 0px 0px 5px;font-size:12px;background-color:#c9c6c3;border-top-left-radius: 5px;border-top-right-radius: 5px;display:flex;justify-content:space-between;align-items: center;">
              <div>Code:</div>
            </th>
          </tr>
          <tr>
            <td style="margin:0px;padding:0px;">
              <pre style="width:475px;margin:0px;padding:0px;"><code >{{ segment.text }}</code></pre>
            </td>
          </tr>
        </table>
      <div v-else >{{ segment.text }}</div>
    </div>
    <div style="white-space:pre-wrap;" v-show="displayRaw">{{ message }}</div>
    <q-btn v-show="messageContainsCode" @click="displayRaw = ! displayRaw" flat size="xs" style="color:black;position:absolute;right:5px;bottom:5px;"><span v-show="! displayRaw">Show raw</span><span v-show="displayRaw">Show formatted</span></q-btn>
</template>
  
  <script>
  import hljs from 'highlight.js';
  import 'highlight.js/styles/vs2015.css';
  import { defineComponent } from 'vue'
  
export default defineComponent({
    name: 'MessageBlock',
    props: {
      message: {
        type: String,
        required: true
      }
    },
    data: function () {
        return {
            messageSegments: [],
            tableWidth: 475,
            messageContainsCode: false,
            displayRaw: false,
        }
    },
    methods: {
      highlightCode() {
        document.querySelectorAll('code').forEach((block) => {
        hljs.highlightBlock(block)
    })
        //if (this.isCode) {
         // hljs.highlightBlock(this.$refs.code);
        //}
      },
      countOccurrences(str) {
        let regex = /```/g;
        let matches = str.match(regex);
        matches = matches ?? [];
        return matches.length;
      },
      isEven(num) {
          return num % 2 === 0;
      },
      strToArr(str){ // this is filthy don't look
        var arr = [];
        var strSegment ="";
        var isCode = false;
        for (let i = 0; i < str.length; i++) {
            if ( (str[i] == '`') && (i + 3 <= str.length) &&  str[i +1] == '`' &&  str[i +2] == '`'){
              this.messageContainsCode = true;
              if ( arr.length === 0 && ! this.isEven(this.countOccurrences(str))) {
                let regex = /([\#\{\(;])\S*/g;
                let matches = str.slice(0, i).match(regex);
                matches = matches ?? [];
                if (matches.length > 0){
                  isCode = true;
                }
              }
                arr.push({'text':strSegment, 'isCode':isCode, 'id': i});
                strSegment = "";
                isCode = !isCode;
                i = i +2;
            } else {
                strSegment = strSegment + str[i];
            }
        }
        if (strSegment.length > 0){
            arr.push({'text':strSegment, 'isCode':isCode, 'id': 999});
        }
        if (! this.isEven(this.countOccurrences(str))) {
                let regex = /([\#\{\(;])\S*/g;
                let matches = arr[arr.length -1]["text"].match(regex);
                matches = matches ?? [];
                if (matches.length > 0){
                  arr[arr.length -1]["isCode"] = true;
                }
              }
        return arr;
      }
    },
    mounted() {
      this.messageSegments = this.strToArr(this.message);
      //this.highlightCode();
      if (this.$q.screen.width < 600){
        this.tableWidth = 250;
      } else {
        this.tableWidth = 475;
      }
      setTimeout(() => {
          this.highlightCode();
        }, 5);
    }
  })
  </script>
  
  <style scoped>
.message-block {
  margin-bottom: 10px;
}

.message-block code {
  background-color: #282c34;
  color: white;
  padding: 5px;
}
</style>