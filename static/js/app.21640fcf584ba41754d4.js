webpackJsonp([3],{"1pno":function(t,a){},"2q3B":function(t,a,e){"use strict";var n={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"title-sub"},[this._t("default")],2)},staticRenderFns:[]};a.a=n},"3hA3":function(t,a){},"4/hK":function(t,a){},"6m1c":function(t,a){},"7QVd":function(t,a){},"9TV3":function(t,a,e){"use strict";var n={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("div",{staticClass:"xg-phone"},[a("div",{staticClass:"content"},[this._t("default")],2)])])},staticRenderFns:[]};a.a=n},"Bhy/":function(t,a,e){"use strict";var n={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"text"},[this._t("default")],2)},staticRenderFns:[]};a.a=n},DkvG:function(t,a){},FW0T:function(t,a){},HXdm:function(t,a){},LbWl:function(t,a,e){"use strict";var n=e("xQ2f"),s=e.n(n),i=e("2q3B");var l=function(t){e("hXIF")},r=e("VU/8")(s.a,i.a,!1,l,"data-v-19fa9e32",null);a.default=r.exports},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("7+uW"),s=e("YkcW"),i=e.n(s),l={data:function(){return{list:[],mode:"vertical",nav_show:!1}},methods:{show:function(){this.nav_show=!this.nav_show},hiden:function(){this.nav_show=!1}},mounted:function(){console.log(i.a),this.list=i.a.navList}},r={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"nav-list",class:{"nav-list-on":t.nav_show}},[e("div",{staticClass:"logo"},[t._v("Xgun")]),t._v(" "),e("Menu",{attrs:{"active-name":1,mode:t.mode}},t._l(t.list,function(a,n){return a.is_sub?e("Submenu",{attrs:{name:n}},[e("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v("\n        "+t._s(a.title)+"\n      ")]),t._v(" "),t._l(a.sub_item,function(a,s){return e("MenuItem",{key:s,attrs:{to:a.herf,name:n+"-"+s}},[e("div",{staticClass:"child-title"},[t._v("\n        "+t._s(a.title)+"\n      ")])])})],2):e("MenuItem",{key:n,attrs:{to:a.herf,name:n}},[e("div",{staticClass:"title"},[t._v("\n      "+t._s(a.title)+"\n    ")])])}),1),t._v(" "),e("div",{staticClass:"menu-btn",on:{click:t.show}},[e("svg",{staticClass:"btn",attrs:{fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"}})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.nav_show,expression:"nav_show"}],staticClass:"mask",on:{click:function(a){return a.stopPropagation(),t.hiden.apply(null,arguments)}}})],1)},staticRenderFns:[]};var o={name:"App",components:{sideBar:e("VU/8")(l,r,!1,function(t){e("DkvG"),e("eBbD")},"data-v-4d929cd7",null).exports}},c={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("transition",[a("sideBar")],1),this._v(" "),a("transition",[a("router-view")],1)],1)},staticRenderFns:[]};var u=e("VU/8")(o,c,!1,function(t){e("kKUD"),e("smmI")},null,null).exports,d=e("/ocq");n.default.use(d.a);var m=new d.a({routes:[{path:"/",name:"index",component:function(){return e.e(2).then(e.bind(null,"xccv"))}},{path:"/media",name:"media",component:function(){return e.e(1).then(e.bind(null,"CdkS"))}},{path:"/bullet",name:"bullet",component:function(){return e.e(0).then(e.bind(null,"d1EW"))}}]}),v=(e("QKTF"),e("b3L9")),h=e.n(v),f=(e("7QVd"),e("4/hK"),e("jGSh"),e("E5Az")),p=e.n(f),_=e("VWz3"),y={name:"media",data:function(){return{}},props:{item:{type:Object,default:function(){return{avatar:"",time:"",username:"",already_follow:!1,content:"",already_zan:!1,num_zan:0,already_chat:!1,num_chat:0,already_share:!1,num_share:0}}},theme:{type:String,default:"black"},backgroundUrl:{type:String,default:""}},methods:{follow:function(){this.item.already_follow?(this.$emit("cancel_follow",this.item),this.item.already_follow=!this.item.already_follow):(this.$emit("follow",this.item),this.item.already_follow=!this.item.already_follow)},toUser:function(){this.$emit("toUser",this.item)},zan:function(){this.item.already_zan?(this.$emit("cancel_zan",this.item),this.item.num_zan--,this.item.already_zan=!this.item.already_zan):(this.$emit("zan",this.item),this.item.num_zan++,this.item.already_zan=!this.item.already_zan)},chat:function(){this.$emit("chat",this.item)},share:function(){this.$emit("share",this.item)}}},w={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"xg-media-box",style:"background:"+t.backgroundUrl+" no-repeat 0 0"},[e("div",{staticClass:"xg-media-head"},[e("div",{staticClass:"xg-media-head-avatar"},[t.item.avatar?e("img",{staticClass:"avatar",attrs:{src:t.item.avatar},on:{click:function(a){return a.stopPropagation(),t.toUser.apply(null,arguments)}}}):e("svg",{staticClass:"avatar",attrs:{fill:"currentColor",viewBox:"0 0 16 16"},on:{click:function(a){return a.stopPropagation(),t.toUser.apply(null,arguments)}}},[e("path",{attrs:{d:"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"}})])]),t._v(" "),e("div",{staticClass:"xg-media-head-user"},[e("div",{staticClass:"username",style:"color:"+t.theme,on:{click:function(a){return a.stopPropagation(),t.toUser.apply(null,arguments)}}},[t._v("\n        "+t._s(t.item.username)+"\n      ")]),t._v(" "),e("div",{staticClass:"time sub"},[t._v("\n        "+t._s(t.item.time)+"\n      ")])]),t._v(" "),e("div",{staticClass:"xg-media-head-buttom",on:{click:function(a){return a.stopPropagation(),t.follow.apply(null,arguments)}}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.item.already_follow,expression:"!item.already_follow"}],staticClass:"buttom",style:""!=t.theme?"background:"+t.theme+";color:white":""},[t._v("关注")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.item.already_follow,expression:"item.already_follow"}],staticClass:"buttom on"},[t._v("已关注")])])]),t._v(" "),e("div",{staticClass:"xg-media-content"},[e("span",{staticClass:"content",domProps:{innerHTML:t._s(t.item.content?t.item.content:"暂无内容")}})]),t._v(" "),e("div",{staticClass:"xg-media-foot",style:"color:"+t.theme},[e("div",{staticClass:"tools",on:{click:function(a){return a.stopPropagation(),t.zan.apply(null,arguments)}}},[e("svg",{directives:[{name:"show",rawName:"v-show",value:!t.item.already_zan,expression:"!item.already_zan"}],staticClass:"svg",attrs:{fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"}})]),t._v(" "),e("svg",{directives:[{name:"show",rawName:"v-show",value:t.item.already_zan,expression:"item.already_zan"}],staticClass:"svg",attrs:{fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"}})]),t._v(" "),e("span",[t._v(t._s(t.item.num_zan))])]),t._v(" "),e("div",{staticClass:"tools",on:{click:function(a){return a.stopPropagation(),t.chat.apply(null,arguments)}}},[e("svg",{directives:[{name:"show",rawName:"v-show",value:!t.item.already_chat,expression:"!item.already_chat"}],staticClass:"svg",attrs:{fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}}),t._v(" "),e("path",{attrs:{d:"m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"}})]),t._v(" "),e("svg",{directives:[{name:"show",rawName:"v-show",value:t.item.already_chat,expression:"item.already_chat"}],staticClass:"svg",attrs:{fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}})]),t._v(" "),e("span",[t._v(t._s(t.item.num_chat))])]),t._v(" "),e("div",{staticClass:"tools",on:{click:function(a){return a.stopPropagation(),t.share.apply(null,arguments)}}},[e("svg",{directives:[{name:"show",rawName:"v-show",value:!t.item.already_share,expression:"!item.already_share"}],staticClass:"svg",attrs:{fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"}})]),t._v(" "),e("svg",{directives:[{name:"show",rawName:"v-show",value:t.item.already_share,expression:"item.already_share"}],staticClass:"svg",attrs:{fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"}})]),t._v(" "),e("span",[t._v(t._s(t.item.num_share))])])])])},staticRenderFns:[]};var b=e("VU/8")(y,w,!1,function(t){e("3hA3"),e("mhsT"),e("6m1c")},"data-v-c0bcc5b2",null).exports,C=e("sJac"),x=e("LbWl"),z=e("oCab"),g={data:function(){return{columns:[{title:"属性",key:"porps"},{title:"说明",key:"instruction"},{title:"类型",key:"type"},{title:"默认值",key:"defalut"}]}},props:{data:{type:Array}}},k={render:function(){var t=this.$createElement;return(this._self._c||t)("Table",{attrs:{columns:this.columns,data:this.data}})},staticRenderFns:[]};var U=e("VU/8")(g,k,!1,function(t){e("ZjqG")},null,null).exports,V={data:function(){return{columns:[{title:"事件名",key:"events"},{title:"说明",key:"instruction"},{title:"返回值",key:"ret"}]}},props:{data:{type:Array}}},A={render:function(){var t=this.$createElement;return(this._self._c||t)("Table",{attrs:{columns:this.columns,data:this.data}})},staticRenderFns:[]};var B=e("VU/8")(V,A,!1,function(t){e("HXdm")},null,null).exports,M={data:function(){return{columns:[{title:"name",key:"name"},{title:"说明",key:"instruction"}]}},props:{data:{type:Array}}},$={render:function(){var t=this.$createElement;return(this._self._c||t)("Table",{attrs:{columns:this.columns,data:this.data}})},staticRenderFns:[]};var F=e("VU/8")(M,$,!1,function(t){e("rnAS")},null,null).exports;n.default.use(h.a),n.default.use(p.a),n.default.component("phone",_.default),n.default.component("media",b),n.default.component("flexBox",C.default),n.default.component("titleSub",x.default),n.default.component("text-sub",z.default),n.default.component("apiTable",U),n.default.component("eventTable",B),n.default.component("slotTable",F),n.default.config.productionTip=!1,new n.default({el:"#app",router:m,components:{App:u},template:"<App/>"})},Nrtu:function(t,a){},VWz3:function(t,a,e){"use strict";var n=e("FW0T"),s=e.n(n),i=e("9TV3");var l=function(t){e("1pno")},r=e("VU/8")(s.a,i.a,!1,l,"data-v-4b6b3d26",null);a.default=r.exports},YkcW:function(t,a){t.exports={navList:[{title:"项目介绍",herf:"/",is_sub:!1,sub_item:[]},{title:"Vue组件",herf:"",is_sub:!0,sub_item:[{title:"弹幕",herf:"/bullet"}]},{title:"移动端常用组件",herf:"",is_sub:!0,sub_item:[{title:"媒体窗口",herf:"/media"}]}]}},Z6Kp:function(t,a){},ZjqG:function(t,a){},b3E6:function(t,a,e){"use strict";var n={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"box"},[this._t("default")],2)},staticRenderFns:[]};a.a=n},eBbD:function(t,a){},hXIF:function(t,a){},jGSh:function(t,a){},kKUD:function(t,a){},mhsT:function(t,a){},o4wJ:function(t,a){},oCab:function(t,a,e){"use strict";var n=e("Nrtu"),s=e.n(n),i=e("Bhy/");var l=function(t){e("uaQc")},r=e("VU/8")(s.a,i.a,!1,l,"data-v-bbe98992",null);a.default=r.exports},rnAS:function(t,a){},sJac:function(t,a,e){"use strict";var n=e("o4wJ"),s=e.n(n),i=e("b3E6");var l=function(t){e("Z6Kp")},r=e("VU/8")(s.a,i.a,!1,l,"data-v-1c2f8516",null);a.default=r.exports},smmI:function(t,a){},uaQc:function(t,a){},xQ2f:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.21640fcf584ba41754d4.js.map