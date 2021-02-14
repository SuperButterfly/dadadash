(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{e422:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-6 offset-3 col-sm-6 col-xs-12"},[n("div",{staticClass:"flex flex-center"},[n("q-card",{staticClass:"q-pa-md",staticStyle:{"min-width":"300px",width:"30vw"},attrs:{flat:""}},[n("q-card-section",[n("span",{staticClass:"text-h4"},[t._v("Create a new account")])]),n("q-card-section",[n("q-form",{staticClass:"q-gutter-md",attrs:{autofocus:""},on:{submit:t.onSubmit}},[n("q-input",{attrs:{filled:"",label:"Email","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Please type something"}]},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),n("q-input",{attrs:{filled:"",type:"password",label:"Password","lazy-rules":""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("q-input",{attrs:{filled:"",type:"password",label:"Confirm Password","lazy-rules":""},model:{value:t.passwordConfirm,callback:function(e){t.passwordConfirm=e},expression:"passwordConfirm"}}),n("div",[n("q-btn",{staticClass:"float-left",attrs:{label:"Sign up",type:"submit",color:"primary"}}),n("q-btn",{staticClass:"float-right",attrs:{label:"Login",type:"reset",color:"secondary",flat:""},on:{click:function(e){return t.$router.push("/login")}}})],1)],1)],1)],1)],1)])])},a=[],r=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),o=n.n(r),i=n("2f62");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={name:"PageSignup",methods:c(c({},Object(i["b"])(["executeAction","setToken"])),{},{onSubmit:function(){var t=this;t.executeAction({tableName:"user_account",actionName:"signup",params:{email:this.email,password:this.password,name:this.email,passwordConfirm:this.passwordConfirm}}).then((function(e){for(var n=0;n<e.length;n++){var s=e[n];if("client.notify"==s.ResponseType){if("success"==s.Attributes.type){t.$q.notify(s.Attributes);break}return void t.$q.notify(s.Attributes)}}t.executeAction({tableName:"user_account",actionName:"signin",params:{email:t.email,password:t.password}}).then((function(e){for(var n=0;n<e.length;n++)"client.notify"===e[n].ResponseType&&t.$q.notify(e[n].Attributes);t.setToken(),t.$router.push("/workspace")})).catch((function(e){console.log("Failed to sign in",arguments),t.$q.notify("Error","Failed to login"),t.$router.push("/login")}))})).catch((function(e){var n=e.response.data;console.log("Failed to register",n);for(var s=0;s<n.length;s++)"client.notify"===n[s].ResponseType&&t.$q.notify(n[s].Attributes)}))}}),data:function(){return{email:null,password:null,passwordConfirm:null}},mounted:function(){}},p=u,f=n("2877"),d=n("f09f"),m=n("a370"),b=n("0378"),w=n("27f9"),y=n("9c40"),h=n("eebe"),g=n.n(h),v=Object(f["a"])(p,s,a,!1,null,null,null);e["default"]=v.exports;g()(v,"components",{QCard:d["a"],QCardSection:m["a"],QForm:b["a"],QInput:w["a"],QBtn:y["a"]})}}]);