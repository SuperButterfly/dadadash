(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{eeb7:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[0===e.documents.length?a("div",[a("q-page-container",[a("q-page",[a("router-view")],1)],1)],1):e._e(),e.documents.length>0?a("div",{staticClass:"row"},[a("div",{staticClass:"col-12",staticStyle:{height:"48px"}},[a("guest-header-bar",{attrs:{"on-back":!1,buttons:[],title:e.currentItem?e.currentItem.document_name:"Home"},on:{login:function(t){e.rightDrawerOpen=!e.rightDrawerOpen}}})],1),a("div",{staticClass:"col-12"},[e.currentItem?a(e.baseItemComponentMap[e.currentItem.document_extension],{tag:"component",attrs:{baseItem:e.baseItemConfigMap[e.currentItem.document_name]}}):e._e()],1)]):e._e(),e.documents.length>0?a("q-drawer",{staticClass:"bg-primary",attrs:{side:"left"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("q-scroll-area",{staticStyle:{height:"100vh"}},[a("q-list",{attrs:{bordered:""}},[a("q-item-label",{attrs:{header:""}},[a("span",{staticClass:"text-bold"},[e._v("Workspaces")])])],1),e._l(e.workspaces,(function(t){return a("q-list",{key:t,attrs:{bordered:""}},[a("q-item-label",{attrs:{header:""}},[e._v(e._s(t))]),e._l(e.workspaceMap[t].items,(function(t){return a("q-item",{key:t.document_name,attrs:{active:e.currentItem===t,"active-class":"bg-primary text-white",clickable:""},on:{click:function(a){return e.setCurrentItem(t)}}},[a("q-item-section",{attrs:{avatar:""}},[e.baseItemTypes()[t.document_extension]?a("q-icon",{attrs:{name:e.baseItemTypes()[t.document_extension].icon}}):e._e()],1),a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[e._v(e._s(t.document_name))]),a("q-item-section",{staticClass:"text-black",attrs:{side:""}},[e._v(e._s(t.document_path.split("/")[2]))])],1)],1)}))],2)}))],2)],1):e._e(),e.documents.length>0?a("q-drawer",{staticClass:"bg-primary",attrs:{overlay:"",width:300,side:"right"},model:{value:e.rightDrawerOpen,callback:function(t){e.rightDrawerOpen=t},expression:"rightDrawerOpen"}},[a("router-view")],1):e._e()],1)},r=[],o=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("967e")),c=a.n(o),s=(a("7f7f"),a("96cf"),a("fa84")),i=a.n(s),l=(a("28a5"),a("c47a")),u=a.n(l),m=a("2f62"),d=a("bf3a");function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){u()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function f(e,t,a){return a.indexOf(e)===t}var g={name:"GuestLayout",components:{BaseViewContainer:d["default"]},methods:b({setCurrentItem:function(e){var t=this;t.currentItem=null,t.$nextTick().then((function(){t.currentItem=e}))}},Object(m["b"])(["loadTable","loadModel","loadData"])),meta:function(){return{title:this.currentItem?this.currentItem.document_name:"Login"}},computed:{workspaces:function(){var e=this,t=this.documents.map((function(t){var a=t.document_path.split("/")[1];return e.workspaceMap[a]||(e.workspaceMap[a]={items:[]}),e.workspaceMap[a].items.push(t),a})).filter(f);return t.sort((function(e,t){return e.toLowerCase()>t.toLowerCase()})),console.log("Workspace name",t),t}},mounted:function(){console.log("mounted guest layout",this.documentTable());var e=this;e.$q.loading.show(),e.loadModel(["world","document","user_account"]).then(i()(c.a.mark((function t(){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.loadData({tableName:"document",params:{page:{size:10},query:JSON.stringify([{column:"mime_type",operator:"like",value:"workspace/%"}]),included_relations:"document_content"}}).then((function(t){e.$q.loading.hide(),console.log("document table is public",t.data),e.documents=t.data,e.documents.length>0&&(e.leftDrawerOpen=!0);for(var a=0;a<e.documents.length;a++){var n=e.documents[a],r=n;if(n.document_content)try{var o=JSON.parse(atob(n.document_content[0].contents));r=b(b({},n),o)}catch(c){console.log("Failed to read contents of item",c,n),r=n}r.targetTable||(r.attributes&&r.attributes.TableName?r.targetTable=e.tableMap[r.attributes.TableName]:r.target&&r.target.name&&(r.targetTable=e.tableMap[r.target.name])),e.baseItemConfigMap[n.document_name]=r,"workspace/root"!==n.mime_type&&"workspace/base"!==n.mime_type&&null===e.currentItem&&(e.$route.params.document_name?e.$route.params.document_name===n.document_name&&(e.currentItem=n):(e.currentItem=n,e.$router.push("/guest/"+n.document_name)))}})).catch((function(t){e.$q.loading.hide(),console.log("Document table is not public",t)}));case 1:case"end":return t.stop()}}),t)})))).catch((function(t){e.$q.loading.hide(),console.log("No models available, lets wait for login",t)}))},data:function(){return b({leftDrawerOpen:!1,baseItemConfigMap:{},currentItem:null,baseItemComponentMap:{view:"edit-data-table",table:"edit-data-table",document:"document-editor",folder:"file-browser",spreadsheet:"spreadsheet-editor",calendar:"calendar-view"},rightDrawerOpen:!1,workspaceMap:{},documents:[]},Object(m["c"])(["documentTable","baseItemTypes"]))}},h=g,w=a("2877"),_=a("4d5a"),v=a("09e3"),O=a("9989"),y=a("9404"),I=a("4983"),k=a("1c1c"),q=a("0170"),D=a("66e5"),C=a("4074"),j=a("0016"),M=a("eebe"),x=a.n(M),T=Object(w["a"])(h,n,r,!1,null,null,null);t["default"]=T.exports;x()(T,"components",{QLayout:_["a"],QPageContainer:v["a"],QPage:O["a"],QDrawer:y["a"],QScrollArea:I["a"],QList:k["a"],QItemLabel:q["a"],QItem:D["a"],QItemSection:C["a"],QIcon:j["a"]})}}]);