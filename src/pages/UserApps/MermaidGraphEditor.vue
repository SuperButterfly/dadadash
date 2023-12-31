<template>

  <q-page-container style="padding-top: 0">
    <q-page style="min-height:calc(100vh  - 50%);">
          <q-splitter
            v-model="splitterModel"
          >
            <template v-slot:before>
              <div class="q-pa-sm" >
                <div class="col-12">
                  <q-btn label="Insert diagram template">
                    <q-menu auto-close fit>
                      <q-list style="min-width: 100px">
                        <q-item clickable @click="setDiagramFromTemplate(template)"
                                v-for="template in diagramTemplates" :key="template.name">
                          <q-item-section>{{ template.name }}</q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-btn>
                </div>
                <div class="q-pa-sm">
                  <codemirror style="width: 100%" :options="cmOptions" ref="editor"></codemirror>
                </div>
              </div>
            </template>

            <template v-slot:after>
              <div class="mermaid" style="min-height: 50vh">
              </div>
            </template>

          </q-splitter>
    </q-page>
  </q-page-container>


</template>
<style>

</style>
<script>
var randomColor = require('randomcolor'); // import the script
import mermaid from 'mermaid';
import {mapActions, mapGetters} from "vuex";
import {ref} from 'vue'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/3024-day.css'

import * as Y from 'yjs'
import {WebsocketProvider} from 'y-websocket'
import {CodemirrorBinding} from 'y-codemirror'

import 'codemirror/mode/markdown/markdown'
import {fromUint8Array, toUint8Array} from "js-base64";

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

export default {

  name: "MermaidGraphEditor",
  data() {
    return {
      editor: null,
      ydoc: null,
      ytext: null,
      splitterModel: 50,
      cmOptions: {
        theme: '3024-day',
        lineNumbers: true,
        mode: "markdown",
        height: '400px',
        line: true,
      },
      showSideBar: true,
      diagramSpec: 'sequenceDiagram\n' +
        '                participant Alice\n' +
        '                participant Bob\n' +
        '                Alice->>John: Hello John, how are you?\n' +
        '                loop Healthcheck\n' +
        '                John->>John: Fight against hypochondria\n' +
        '                end\n' +
        '                Note right of John: Rational thoughts <br/>prevail...\n' +
        '                John-->>Alice: Great!\n' +
        '                John->>Bob: How about you?\n' +
        '                Bob-->>John: Jolly good!',
      viewParameters: {
        tableName: 'document'
      },
      diagramTemplates: [
        {
          name: 'Sequence diagram',
          template: 'sequenceDiagram\n' +
            '                participant Alice\n' +
            '                participant Bob\n' +
            '                Alice->>John: Hello John, how are you?\n' +
            '                loop Healthcheck\n' +
            '                John->>John: Fight against hypochondria\n' +
            '                end\n' +
            '                Note right of John: Rational thoughts <br/>prevail...\n' +
            '                John-->>Alice: Great!\n' +
            '                John->>Bob: How about you?\n' +
            '                Bob-->>John: Jolly good!'
        },
        {
          name: 'Flow chart',
          template: 'graph TD\n' +
            '    A[Christmas] -->|Get money| B(Go shopping)\n' +
            '    B --> C{Let me think}\n' +
            '    C -->|One| D[Laptop]\n' +
            '    C -->|Two| E[iPhone]\n' +
            '    C -->|Three| F[fa:fa-car Car]'
        },
        {
          name: 'Class diagram',
          template: 'classDiagram\n' +
            '    Animal <|-- Duck\n' +
            '    Animal <|-- Fish\n' +
            '    Animal <|-- Zebra\n' +
            '    Animal : +int age\n' +
            '    Animal : +String gender\n' +
            '    Animal: +isMammal()\n' +
            '    Animal: +mate()\n' +
            '    class Duck{\n' +
            '      +String beakColor\n' +
            '      +swim()\n' +
            '      +quack()\n' +
            '    }\n' +
            '    class Fish{\n' +
            '      -int sizeInFeet\n' +
            '      -canEat()\n' +
            '    }\n' +
            '    class Zebra{\n' +
            '      +bool is_wild\n' +
            '      +run()\n' +
            '    }\n' +
            '            '
        },
        {
          name: 'State diagram',
          template: 'stateDiagram-v2\n' +
            '    [*] --> Still\n' +
            '    Still --> [*]\n' +
            '    Still --> Moving\n' +
            '    Moving --> Still\n' +
            '    Moving --> Crash\n' +
            '    Crash --> [*]\n' +
            '            '
        },
        {
          name: 'Gantt chart',
          template: 'gantt\n' +
            '    title A Gantt Diagram\n' +
            '    dateFormat  YYYY-MM-DD\n' +
            '    section Section\n' +
            '    A task           :a1, 2014-01-01, 30d\n' +
            '    Another task     :after a1  , 20d\n' +
            '    section Another\n' +
            '    Task in sec      :2014-01-12  , 12d\n' +
            '    another task      : 24d\n' +
            '            '
        },
        {
          name: 'Pie chart',
          template: 'pie title Pets adopted by volunteers\n' +
            '    "Dogs" : 386\n' +
            '    "Cats" : 85\n' +
            '    "Rats" : 15\n' +
            '            '
        },
        {
          name: 'ER diagram',
          template: 'erDiagram\n' +
            '          CUSTOMER }|..|{ DELIVERY-ADDRESS : has\n' +
            '          CUSTOMER ||--o{ ORDER : places\n' +
            '          CUSTOMER ||--o{ INVOICE : "liable for"\n' +
            '          DELIVERY-ADDRESS ||--o{ ORDER : receives\n' +
            '          INVOICE ||--|{ ORDER : covers\n' +
            '          ORDER ||--|{ ORDER-ITEM : includes\n' +
            '          PRODUCT-CATEGORY ||--|{ PRODUCT : contains\n' +
            '          PRODUCT ||--o{ ORDER-ITEM : "ordered in"\n' +
            '            '
        },
        {
          name: 'User journey',
          template: 'journey\n' +
            '    title My working day\n' +
            '    section Go to work\n' +
            '      Make tea: 5: Me\n' +
            '      Go upstairs: 3: Me\n' +
            '      Do work: 1: Me, Cat\n' +
            '    section Go home\n' +
            '      Go downstairs: 5: Me\n' +
            '      Sit down: 5: Me'
        },
        {
          name: 'Large flowchart',
          template: 'graph TB\n' +
            '    sq[Square shape] --> ci((Circle shape))\n' +
            '\n' +
            '    subgraph A\n' +
            '        od>Odd shape]-- Two line<br/>edge comment --> ro\n' +
            '        di{Diamond with <br/> line break} -.-> ro(Rounded<br>square<br>shape)\n' +
            '        di==>ro2(Rounded square shape)\n' +
            '    end\n' +
            '\n' +
            '    %% Notice that no text in shape are added here instead that is appended further down\n' +
            '    e --> od3>Really long text with linebreak<br>in an Odd shape]\n' +
            '\n' +
            '    %% Comments after double percent signs\n' +
            '    e((Inner / circle<br>and some odd <br>special characters)) --> f(,.?!+-*ز)\n' +
            '\n' +
            '    cyr[Cyrillic]-->cyr2((Circle shape Начало));\n' +
            '\n' +
            '     classDef green fill:#9f6,stroke:#333,stroke-width:2px;\n' +
            '     classDef orange fill:#f96,stroke:#333,stroke-width:4px;\n' +
            '     class sq,e green\n' +
            '     class di orange'
        },
        {
          name: 'Sequence diagram with loops',
          template: 'sequenceDiagram\n' +
            '    loop Daily query\n' +
            '        Alice->>Bob: Hello Bob, how are you?\n' +
            '        alt is sick\n' +
            '            Bob->>Alice: Not so good :(\n' +
            '        else is well\n' +
            '            Bob->>Alice: Feeling fresh like a daisy\n' +
            '        end\n' +
            '\n' +
            '        opt Extra response\n' +
            '            Bob->>Alice: Thanks for asking\n' +
            '        end\n' +
            '    end'
        },
      ],
      containerId: "id-" + new Date().getMilliseconds(),
      screenWidth: (window.screen.width < 1200 ? window.screen.width : 1200) + "px",
      eventMap: {},
      originalDiagram: null,
      debouncedSave: null,
      debouncedUpdate: null,
    }
  },
  methods: {
    setDiagramFromTemplate(template) {
      // this.diagramSpec = template.template;
      this.ytext.delete(0, this.ytext.toString().length)
      this.ytext.insert(0, template.template)
      this.updateDiagram();
    },
    saveDiagram() {
      const that = this;
      console.log("save diagram", that.baseItem, that.ydoc)

      let newDiagram = that.ytext.toString();
      if (that.originalDiagram === newDiagram) {
        return
      }
      that.originalDiagram = newDiagram;
      let diagram = JSON.stringify({
        diagramSpec: newDiagram,
        encodedStateVector: fromUint8Array(Y.encodeStateAsUpdate(that.ydoc))
      })

      that.$emit("save-base-item-contents", btoa(diagram))
    },
    updateDiagram() {
      const that = this;
      let diagramString = this.ytext.toString();
      console.log("Update diagram", diagramString)
      var element = document.querySelector(".mermaid");
      var insertSvg = function (svgCode, bindFunctions) {
        element.innerHTML = svgCode;
      };
      that.calendar = mermaid.mermaidAPI.render('mermaid', diagramString, insertSvg);
      that.debouncedSave()
    },
    ...mapActions(['createRow', "loadData", "updateRow"]),
  },
  computed: {
    ...mapGetters(["endpoint", "authToken", 'decodedAuthToken']),
  },

  watch: {},
  props: ["baseItem"],
  mounted() {
    const that = this;
    that.containerId = "id-" + new Date().getMilliseconds();
    that.debouncedSave = debounce(that.saveDiagram, 3 * 1000, false)
    that.debouncedUpdate = debounce(that.updateDiagram, 3 * 1000, false)
    console.log("Mounted Mermaid Graph Editor", that.decodedAuthToken, that.containerId, this.baseItem);
    const file = this.baseItem.file;
    console.log("File: ", JSON.stringify(file));
    let mermaidEditorConfig = {};
    if (file) {
      try {
        mermaidEditorConfig = JSON.parse(atob(file));
        that.diagramSpec = mermaidEditorConfig.diagramSpec;
        that.originalDiagram = mermaidEditorConfig.diagramSpec;
        console.log("Restore saved diagram", mermaidEditorConfig)
      } catch (e) {
        console.log("Failed to parse existing data", e)
      }
    }
    that.mermaidEditorConfig = mermaidEditorConfig;
    that.$refs.editor.codemirror.setSize(600, 800)

    if (that.authToken) {

      // console.log("Auth token is ", that.authToken, that.authToken())

      let endpoint = that.endpoint;
      endpoint = endpoint.substring(endpoint.indexOf("//"))

      const ydoc = new Y.Doc()
      const provider = new WebsocketProvider(
        (window.location.protocol === "https:" ? "wss:" : "ws:") + '//' + endpoint + '/live/document/' + this.baseItem.reference_id + "/document_content",
        "yjs?token=" + that.authToken,
        ydoc
      )
      that.ydoc = ydoc;
      const ytext = ydoc.getText('codemirror')
      that.ytext = ytext;

      if (that.mermaidEditorConfig.encodedStateVector) {

        Y.applyUpdate(that.ydoc, toUint8Array(that.mermaidEditorConfig.encodedStateVector))
      }

      const binding = new CodemirrorBinding(ytext, that.$refs.editor.codemirror, provider.awareness)
      if (that.decodedAuthToken && that.decodedAuthToken.name) {
        provider.awareness.setLocalStateField('user', {
          name: that.decodedAuthToken.name,
          color: randomColor()
        })

      }

      that.debouncedUpdate();
      ytext.observe(function () {
        // console.log("Ytext updates: ", ytext.toString())
        that.debouncedUpdate();
        // that.updateDiagram();
      })
      provider.connect();
    } else {
      that.ytext = that.diagramSpec;
      that.$refs.editor.codemirror.setValue(that.diagramSpec)
      that.updateDiagram();
      //   mermaid.mermaidAPI.initialize({
      //     startOnLoad: false
      //   });

    }

    // setTimeout(function () {
    //   console.log("initialize mermaid", that.$refs.editor);
    //   that.$refs.editor.codemirror.setSize(500, 600)
    //   mermaid.mermaidAPI.initialize({
    //     startOnLoad: false
    //   });
    //   // that.updateDiagram()
    // }, 200)
  }
}
</script>
