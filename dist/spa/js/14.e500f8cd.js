(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{e667:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-layout",[o("router-view")],1)},n=[],c=(o("8e6e"),o("8a81"),o("ac6a"),o("cadf"),o("06db"),o("456d"),o("c47a")),a=o.n(c),u=o("2f62");function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){a()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}o("14b7");var d={name:"S",data:function(){return i({},Object(u["c"])(["loggedIn","drawerLeft","authToken","decodedAuthToken"]))},mounted:function(){},methods:i(i({},Object(u["b"])(["getDefaultCloudStore","loadModel","executeAction","loadData","setDecodedAuthToken"])),{},{logout:function(){localStorage.removeItem("token"),localStorage.removeItem("user"),this.$router.push("/login"),window.location=window.location}})},s=d,b=o("2877"),f=o("4d5a"),p=o("eebe"),O=o.n(p),w=Object(b["a"])(s,r,n,!1,null,null,null);t["default"]=w.exports;O()(w,"components",{QLayout:f["a"]})}}]);