webpackJsonp([22],{516:function(e,t,o){var n=o(517);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);o(3)("621e607a",n,!0)},517:function(e,t,o){(e.exports=o(2)(!1)).push([e.i,"",""])},518:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{form:{email_notify_enabled:!0},loading:!1}},created:function(){this.form.email_notify_enabled="yes"==this.$store.state.user.userinfo.email_notify_enabled},methods:{handleSubmit:function(){var e=this;this.loading=!0,this.$http.put("users/"+this.$route.params.name+"/email_notify_enabled",this.form).then(function(t){e.$Message.success("修改成功");var o=e.form.email_notify_enabled?"yes":"no";e.$store.commit("modifyEmailNotify",o),e.loading=!1})}}}},519:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h2",[o("Icon",{attrs:{type:"gear-b"}}),e._v(" Email 通知设置")],1),e._v(" "),o("hr"),e._v(" "),o("Form",{attrs:{model:e.form,"label-width":150}},[o("FormItem",{attrs:{label:"开启邮件通知？"}},[o("v-switch",{attrs:{color:"orange"},model:{value:e.form.email_notify_enabled,callback:function(t){e.$set(e.form,"email_notify_enabled",t)},expression:"form.email_notify_enabled"}})],1),e._v(" "),o("Button",{staticStyle:{color:"#fff","background-color":"#1abc9c","border-color":"#1abc9c"},attrs:{loading:e.loading},on:{click:e.handleSubmit}},[e.loading?o("span",[e._v("Loading...")]):o("span",[e._v("应用修改")])])],1)],1)},staticRenderFns:[]}},578:function(e,t,o){var n=o(1)(o(518),o(519),!1,function(e){o(516)},"data-v-07b434ed",null);e.exports=n.exports}});