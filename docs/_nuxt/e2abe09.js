(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{354:function(e,t,r){"use strict";r.r(t);var n=r(13),o=(r(9),r(77),"今ぐらい幸福にさせろ"),c={data:function(){return{claim:o,who:"村正ぁ",original:this.$basePath()+"original.png",idata:"",completed:!1,processing:!1,rules:{required:function(e){return!!e||"必ず入力して下さい"}}}},computed:{disableGenerate:function(){var e=null===this.claim||""===this.claim,t=null===this.who||""===this.who;return e||t||this.processing}},methods:{process:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var img;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.disableGenerate){t.next=3;break}return window.alert("入力に不足があります"),t.abrupt("return");case 3:return e.processing=!0,t.next=6,e.get_img_base64();case 6:img=t.sent,e.processing=!1,""!==img&&(e.completed=!0,e.$nextTick(e.scrollToBottom));case 9:case"end":return t.stop()}}),t)})))()},get_img_base64:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,img;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://2beswjj1xl.execute-api.ap-northeast-1.amazonaws.com/Prod/muramasala",{method:"POST",body:JSON.stringify({claim:e.claim,who:e.who}),headers:{"Content-Type":"application/json"}});case 3:return r=t.sent,t.next=6,r.json();case 6:n=t.sent,img=n.image,e.idata=img,t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.error(t.t0),e.idata="";case 15:case"end":return t.stop()}}),t,null,[[0,11]])})))()},reset_img:function(){this.claim=o,this.who="村正ぁ",this.idata="",this.completed=!1,this.$nextTick((function(){window.scroll({top:0,left:0,behavior:"smooth"})}))},scrollToBottom:function(){var element=document.documentElement,e=element.scrollHeight-element.clientHeight;window.scroll({top:e,left:0,behavior:"smooth"})}}},l=r(73),m=r(107),v=r.n(m),d=r(357),h=r(306),w=r(296),f=r(349),x=r(292),_=r(350),k=r(356),V=r(351),y=r(305),j=r(352),C=r(291),T=r(353),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{staticClass:"mt-3",attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8"}},[r("v-overlay",{attrs:{value:e.processing}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),e._v(" "),r("v-container",[r("v-row",[r("v-spacer"),e._v(" "),r("h1",{staticClass:"headline mb-3"},[e._v("\n          そういうところだぞ村正ぁーーーー！ジェネレータ\n        ")]),e._v(" "),r("v-spacer")],1),e._v(" "),r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-img",{attrs:{"lazy-src":e.original,src:e.original,alt:"オリジナル村正ぁ"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-form",[r("v-container",[r("v-row",[r("v-text-field",{attrs:{rules:[e.rules.required],label:"○○○○○よぅ、",clearable:"",counter:"",maxlength:"20"},model:{value:e.claim,callback:function(t){e.claim=t},expression:"claim"}})],1),e._v(" "),r("v-row",[r("v-text-field",{attrs:{rules:[e.rules.required],label:"そういうところだぞ○○ーーーー！",clearable:"",counter:"",maxlength:"10"},model:{value:e.who,callback:function(t){e.who=t},expression:"who"}})],1),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-card",{attrs:{flat:""}},[r("v-card-actions",[r("v-row",{attrs:{justify:"center"}},[r("v-btn",{staticClass:"ml-2 mr-2",attrs:{color:e.disableGenerate?"grey":"indigo",dark:""},on:{click:e.process}},[e._v("Generate")]),e._v(" "),r("v-btn",{staticClass:"ml-2 mr-2",on:{click:e.reset_img}},[e._v("reset")])],1)],1)],1)],1)],1)],1)],1)],1)],1),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("LazyTextImage",{directives:[{name:"show",rawName:"v-show",value:e.completed,expression:"completed"}],attrs:{encoded:e.idata}})],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VBtn:d.a,VCard:h.a,VCardActions:w.a,VCol:f.a,VContainer:x.a,VForm:_.a,VImg:k.a,VOverlay:V.a,VProgressCircular:y.a,VRow:j.a,VSpacer:C.a,VTextField:T.a})}}]);