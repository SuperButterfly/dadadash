(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{4336:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page-container",[a("q-page",[a("q-card",{staticStyle:{width:"100%"},attrs:{flat:""}},[a("q-card-section",[e.user?a("div",{staticClass:"row"},[a("div",{staticClass:"col-1 col-xl-2 col-lg-2 col-xs-6 col-sm-4 q-pa-md"},[a("q-img",{attrs:{src:e.decodedAuthToken.picture}})],1),a("div",{staticClass:"col-6 col-xs-6 col-sm-6 q-pa-md"},[a("span",{staticClass:"text-h6"},[e._v(e._s(e.user.name))]),a("br"),a("span",{staticClass:"text-bold"},[e._v(e._s(e.user.email))])]),a("div",{staticClass:"col-5"},[a("q-btn",{staticClass:"float-right text-black",attrs:{color:"warning",label:"Reset password"}})],1)]):e._e()])],1)],1)],1)},n=[],s=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("c47a")),c=a.n(s),o=a("2f62");function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u={name:"UserProfile",methods:i(i({createUser:function(){var e=this;console.log("new user",this.user),this.user.tableName="user_account",e.createRow(e.user).then((function(t){e.user={},e.$q.notify({message:"User created"}),e.refresh(),e.newUserDrawer=!1})).catch((function(t){t instanceof Array?e.$q.notify({message:t[0].title}):e.$q.notify({message:"Failed to create user"})}))}},Object(o["b"])(["loadData","getTableSchema","createRow","loadOneData"])),{},{refresh:function(){var e=this,t="user_account";this.loadOneData({tableName:t,referenceId:"mine"}).then((function(t){console.log("Loaded data",t),e.user=t.data})),console.log("Token",e.authToken)}}),data:function(){return i({text:"",user:null,newUserDrawer:!1,users:[],filter:null,columns:[{name:"email",field:"email",label:"Email",align:"left",sortable:!0},{name:"name",field:"name",label:"Name",align:"left"}]},Object(o["d"])([]))},mounted:function(){this.refresh()},computed:i(i({},Object(o["c"])(["selectedTable","authToken","decodedAuthToken"])),Object(o["d"])([])),watch:{}},d=u,f=a("2877"),b=a("09e3"),m=a("9989"),p=a("f09f"),h=a("a370"),g=a("068f"),w=a("9c40"),O=a("eebe"),j=a.n(O),y=Object(f["a"])(d,r,n,!1,null,null,null);t["default"]=y.exports;j()(y,"components",{QPageContainer:b["a"],QPage:m["a"],QCard:p["a"],QCardSection:h["a"],QImg:g["a"],QBtn:w["a"]})}}]);