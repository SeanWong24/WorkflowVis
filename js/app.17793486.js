(function(e){function t(t){for(var a,o,r=t[0],d=t[1],c=t[2],l=0,h=[];l<r.length;l++)o=r[l],i[o]&&h.push(i[o][0]),i[o]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);u&&u(t);while(h.length)h.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var d=n[o];0!==i[d]&&(a=!1)}a&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},i={app:0},s=[];function o(e){return r.p+"js/"+({}[e]||e)+"."+{"chunk-03a3b882":"3efefd60","chunk-0757a354":"5a77a369","chunk-0cf8d3fd":"68c9f476","chunk-1236b7ea":"65a60fe9","chunk-13b67bd6":"097c4b26","chunk-13d808b0":"af81ac95","chunk-147347c2":"66f4cbb8","chunk-173239cb":"58026316","chunk-17df5384":"8dfa11ce","chunk-17e4da91":"de4593d1","chunk-19749bdc":"e0ecc610","chunk-1d09176a":"18b81e29","chunk-1f01ba41":"1fe8ef5e","chunk-23d04875":"bd7b98d3","chunk-26cd360e":"508e1529","chunk-276d98b6":"46b0093b","chunk-287bfebe":"314925bd","chunk-2d0aef65":"4893330c","chunk-2d0b5965":"5f66789b","chunk-2d0b95c5":"2fb86377","chunk-2d0c1f4a":"e41cbaf7","chunk-2d0d43da":"e91b302c","chunk-2d0d5f78":"e2740842","chunk-2d0da04a":"e35f08c2","chunk-2d0df486":"012e9a61","chunk-2d0e5812":"9104ae9a","chunk-2d20825f":"0ef9ca4f","chunk-2d208821":"ea60c853","chunk-2d2107eb":"847e0f26","chunk-2d218068":"edac2af6","chunk-2d21d14c":"e58acb42","chunk-2d221c44":"0ddd41f2","chunk-2d225766":"43f3d110","chunk-2d228cf2":"82e3c9a3","chunk-2d22bf12":"8d9c71e3","chunk-2d22e146":"049aa95a","chunk-2e3dea86":"3571d028","chunk-310e4a24":"72459783","chunk-35303782":"077d10b4","chunk-40389203":"a442ba88","chunk-41db7d2e":"b11d1df6","chunk-42c9b51a":"a5221bb9","chunk-451c033d":"eaf57cfb","chunk-48aa0eb2":"2b8e8a22","chunk-4bd21d71":"4deb4312","chunk-4bfff9a0":"0f202a13","chunk-4c152a7f":"8a5a698c","chunk-4fd53c67":"304ede0c","chunk-5236e874":"0603fbf4","chunk-524b3904":"f9bd0565","chunk-55740014":"de756f76","chunk-5ae09e80":"04a5ac29","chunk-5afd4824":"ca07ee7d","chunk-62fecb36":"61dda2e7","chunk-6815f227":"e9a603f8","chunk-685f1802":"4a147ca2","chunk-68f689f8":"18cec306","chunk-698cf714":"e28c37f0","chunk-6f8305ec":"52f99371","chunk-6fab0da2":"a34bac48","chunk-724db1a8":"20c5c3ea","chunk-72f73b22":"1894dcd3","chunk-7466af47":"06be0c6a","chunk-747507c6":"b74cdcf0","chunk-7654979d":"6ad84f98","chunk-76ed02b0":"52719764","chunk-7abcb7ec":"f470d670","chunk-85bd8bec":"fd542701","chunk-895ed252":"34fe362d","chunk-90f00036":"4fbfe044","chunk-99349a2c":"c78dbb44","chunk-a3226176":"e6cc7db3","chunk-af516e02":"2294eb85","chunk-af53ba2c":"27197be0","chunk-af55936a":"cf48276f","chunk-af59c236":"2dadcce9","chunk-b133bd62":"f4324132","chunk-c17a989a":"26b39303","chunk-c5ec1966":"f6ba93d8","chunk-cb3bc3aa":"1ce949ce","chunk-cc206ae2":"519d0f22","chunk-cf035038":"30c2cbf3","chunk-d09df222":"ed70456d","chunk-d6d98622":"56147e04","chunk-d968f544":"f0d7136e","chunk-e10b5e90":"efd09cfb","chunk-e1d3363c":"45b183ea","chunk-f9bc50ea":"d8148819","chunk-2d0b1bd7":"3efbdbe6","chunk-2d0b9b8a":"b5eb44d8","chunk-2d0c5785":"4e1f1d26","chunk-2d0e13d1":"e8196d90","chunk-2d0e8e5e":"85a4ef5c","chunk-2d217649":"0e65dff4","chunk-2d21b2db":"9be871fa","chunk-2d2292b1":"dcece24a","chunk-2d0cfec5":"0f0b5602"}[e]+".js"}function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=i[e]=[t,a]}));t.push(n[2]=a);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,r.nc&&d.setAttribute("nonce",r.nc),d.src=o(e),s=function(t){d.onerror=d.onload=null,clearTimeout(c);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+a+": "+s+")");o.type=a,o.request=s,n[1](o)}i[e]=void 0}};var c=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],c=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),i=n.n(a);i.a},"03e4":function(e,t,n){},"05fe":function(e,t,n){var a={"./ion-action-sheet-controller_8.entry.js":["b628","chunk-03a3b882"],"./ion-action-sheet-ios.entry.js":["f1fc","chunk-55740014"],"./ion-action-sheet-md.entry.js":["fcd0","chunk-42c9b51a"],"./ion-alert-ios.entry.js":["bf7f","chunk-1f01ba41"],"./ion-alert-md.entry.js":["2ced","chunk-cf035038"],"./ion-app_8-ios.entry.js":["4078","chunk-40389203"],"./ion-app_8-md.entry.js":["a805","chunk-17df5384"],"./ion-avatar_3-ios.entry.js":["d1d6","chunk-7654979d"],"./ion-avatar_3-md.entry.js":["2822","chunk-0757a354"],"./ion-back-button-ios.entry.js":["6a57","chunk-d09df222"],"./ion-back-button-md.entry.js":["53f8","chunk-7abcb7ec"],"./ion-backdrop-ios.entry.js":["47f7","chunk-2d0c1f4a"],"./ion-backdrop-md.entry.js":["a40f","chunk-2d20825f"],"./ion-button_2-ios.entry.js":["32cb","chunk-d968f544"],"./ion-button_2-md.entry.js":["bbf3","chunk-d6d98622"],"./ion-card_5-ios.entry.js":["9553","chunk-72f73b22"],"./ion-card_5-md.entry.js":["19bf","chunk-13d808b0"],"./ion-checkbox-ios.entry.js":["d98b","chunk-2e3dea86"],"./ion-checkbox-md.entry.js":["9522","chunk-5ae09e80"],"./ion-chip-ios.entry.js":["87e5","chunk-c5ec1966"],"./ion-chip-md.entry.js":["775e","chunk-6f8305ec"],"./ion-col_3.entry.js":["6a8a","chunk-2d0da04a"],"./ion-datetime_3-ios.entry.js":["495e","chunk-1236b7ea"],"./ion-datetime_3-md.entry.js":["2aa2","chunk-35303782"],"./ion-fab_3-ios.entry.js":["41d0","chunk-c17a989a"],"./ion-fab_3-md.entry.js":["c0b4","chunk-0cf8d3fd"],"./ion-img.entry.js":["9588","chunk-2d0e5812"],"./ion-infinite-scroll_2-ios.entry.js":["5bdc","chunk-af53ba2c"],"./ion-infinite-scroll_2-md.entry.js":["3acb","chunk-af55936a"],"./ion-input-ios.entry.js":["4d6d","chunk-287bfebe"],"./ion-input-md.entry.js":["037b","chunk-26cd360e"],"./ion-item-option_3-ios.entry.js":["4121","chunk-4bfff9a0"],"./ion-item-option_3-md.entry.js":["2dcf","chunk-4fd53c67"],"./ion-item_8-ios.entry.js":["c899","chunk-48aa0eb2"],"./ion-item_8-md.entry.js":["9c96","chunk-13b67bd6"],"./ion-loading-ios.entry.js":["a9f3","chunk-b133bd62"],"./ion-loading-md.entry.js":["568c","chunk-76ed02b0"],"./ion-menu_4-ios.entry.js":["1413","chunk-e10b5e90"],"./ion-menu_4-md.entry.js":["83f2","chunk-276d98b6"],"./ion-modal-ios.entry.js":["d3e0","chunk-a3226176"],"./ion-modal-md.entry.js":["005e","chunk-6fab0da2"],"./ion-nav_5.entry.js":["9c3e","chunk-41db7d2e"],"./ion-popover-ios.entry.js":["646f","chunk-17e4da91"],"./ion-popover-md.entry.js":["cf49","chunk-895ed252"],"./ion-progress-bar-ios.entry.js":["d984","chunk-cb3bc3aa"],"./ion-progress-bar-md.entry.js":["a831","chunk-6815f227"],"./ion-radio_2-ios.entry.js":["20ea","chunk-19749bdc"],"./ion-radio_2-md.entry.js":["4386","chunk-4c152a7f"],"./ion-range-ios.entry.js":["b74f","chunk-23d04875"],"./ion-range-md.entry.js":["1f2e","chunk-698cf714"],"./ion-refresher_2-ios.entry.js":["0128","chunk-af59c236"],"./ion-refresher_2-md.entry.js":["9626","chunk-af516e02"],"./ion-reorder_2-ios.entry.js":["68cb","chunk-5236e874"],"./ion-reorder_2-md.entry.js":["c026","chunk-524b3904"],"./ion-ripple-effect.entry.js":["c8da","chunk-2d218068"],"./ion-route_4.entry.js":["10e8","chunk-85bd8bec"],"./ion-searchbar-ios.entry.js":["4579","chunk-4bd21d71"],"./ion-searchbar-md.entry.js":["7dfb","chunk-173239cb"],"./ion-segment_2-ios.entry.js":["2e86","chunk-f9bc50ea"],"./ion-segment_2-md.entry.js":["866f","chunk-5afd4824"],"./ion-select_3-ios.entry.js":["9317","chunk-147347c2"],"./ion-select_3-md.entry.js":["4518","chunk-1d09176a"],"./ion-slide_2-ios.entry.js":["332a","chunk-2d0b95c5"],"./ion-slide_2-md.entry.js":["a4a9","chunk-2d208821"],"./ion-spinner.entry.js":["e11b","chunk-685f1802"],"./ion-split-pane-ios.entry.js":["f0b4","chunk-2d22bf12"],"./ion-split-pane-md.entry.js":["cc6d","chunk-2d221c44"],"./ion-tab-bar_2-ios.entry.js":["ae2e","chunk-62fecb36"],"./ion-tab-bar_2-md.entry.js":["df13","chunk-68f689f8"],"./ion-tab_2.entry.js":["6725","chunk-90f00036"],"./ion-text.entry.js":["ed3b","chunk-310e4a24"],"./ion-textarea-ios.entry.js":["6d1b","chunk-451c033d"],"./ion-textarea-md.entry.js":["4680","chunk-e1d3363c"],"./ion-toast-ios.entry.js":["5bda","chunk-99349a2c"],"./ion-toast-md.entry.js":["5c21","chunk-7466af47"],"./ion-toggle-ios.entry.js":["6daf","chunk-724db1a8"],"./ion-toggle-md.entry.js":["ae8d","chunk-cc206ae2"],"./ion-virtual-scroll.entry.js":["5fd7","chunk-2d0d43da"]};function i(e){var t=a[e];return t?n.e(t[1]).then((function(){var e=t[0];return n(e)})):Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}i.keys=function(){return Object.keys(a)},i.id="05fe",e.exports=i},"0b90":function(e,t,n){},"0c9e":function(e,t,n){"use strict";var a=n("0b90"),i=n.n(a);i.a},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("MainView",{attrs:{title:"Workflow Vis"}})],1)},s=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ion-app",[n("ion-header",[n("ion-toolbar",[n("ion-title",[e._v(e._s(e.title)+" - "+e._s(e.datasetName))]),n("ion-buttons",{attrs:{slot:"end"},slot:"end"},[n("ion-button",{attrs:{title:"Upload Dataset File"},on:{click:function(t){return e.upload()}}},[n("ion-icon",{attrs:{slot:"icon-only",name:"cloud-upload",size:"large"},slot:"icon-only"}),n("input",{ref:"fileUploadInput",attrs:{type:"file",id:"file-upload-input",accept:".json"},on:{input:function(t){return e.fileUploaded()}}})],1)],1)],1)],1),n("ion-content",{attrs:{fixed:"",id:"main-content"}},[n("VisView",{attrs:{visComponentList:e.visComponentList,dataset:e.dataset,visComponent1:e.visComponent1,visComponent2:e.visComponent2,visComponent3:e.visComponent3,visComponent4:e.visComponent4,dataSourceVis1:e.dataSourceVis1,dataSourceVis2:e.dataSourceVis2,dataSourceVis3:e.dataSourceVis3,dataSourceVis4:e.dataSourceVis4,dataForVis1:e.dataForVis1,dataForVis2:e.dataForVis2,dataForVis3:e.dataForVis3,dataForVis4:e.dataForVis4},on:{visFilteredDataChange:e.visFilteredDataChangeHandler,visComponentChange:e.visComponentChangeHandler,visDataSourceChange:e.visDataSourceChangeHandler}})],1)],1)},r=[],d=n("1dbb"),c=n("faa9"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ion-grid",[n("ion-row",[n("ion-col",[n("ion-card",[n("VisConfigView",{attrs:{visIndex:1,visComponentList:e.visComponentList,visComponent:e.visComponent1,visDataSource:e.dataSourceVis1,visSettingDefinitions:e.visSettingDefinitionsMap.get(1),visSettingDataMap:e.visSettingDataMapMap.get(1)},on:{visComponentChange:e.visComponentChangeHandler,visDataSourceChange:e.visDataSourceChangeHandler,visSettingChange:e.visSettingChangeHandler}}),n("div",{staticClass:"vis-container"},[n(e.visComponent1,{ref:"vis1",tag:"component",attrs:{visIndex:1,dataset:e.dataForVis1,completeDataset:e.dataset,moduleColorScale:e.moduleColorScale},on:{filteredDataChange:e.filteredDataChangeHandler,settingDefinitionsChange:e.visSettingDefinitionsChange,settingDataMapChange:e.visSettingDataMapChange}})],1)],1)],1),n("ion-col",[n("ion-card",[n("VisConfigView",{attrs:{visIndex:2,visComponentList:e.visComponentList,visComponent:e.visComponent2,visDataSource:e.dataSourceVis2,visSettingDefinitions:e.visSettingDefinitionsMap.get(2),visSettingDataMap:e.visSettingDataMapMap.get(2)},on:{visComponentChange:e.visComponentChangeHandler,visDataSourceChange:e.visDataSourceChangeHandler,visSettingChange:e.visSettingChangeHandler}}),n("div",{staticClass:"vis-container"},[n(e.visComponent2,{ref:"vis2",tag:"component",attrs:{visIndex:2,dataset:e.dataForVis2,completeDataset:e.dataset,moduleColorScale:e.moduleColorScale},on:{filteredDataChange:e.filteredDataChangeHandler,settingDefinitionsChange:e.visSettingDefinitionsChange,settingDataMapChange:e.visSettingDataMapChange}})],1)],1)],1)],1),n("ion-row",[n("ion-col",[n("ion-card",[n("VisConfigView",{attrs:{visIndex:3,visComponentList:e.visComponentList,visComponent:e.visComponent3,visDataSource:e.dataSourceVis3,visSettingDefinitions:e.visSettingDefinitionsMap.get(3),visSettingDataMap:e.visSettingDataMapMap.get(3)},on:{visComponentChange:e.visComponentChangeHandler,visDataSourceChange:e.visDataSourceChangeHandler,visSettingChange:e.visSettingChangeHandler}}),n("div",{staticClass:"vis-container"},[n(e.visComponent3,{ref:"vis3",tag:"component",attrs:{visIndex:3,dataset:e.dataForVis3,completeDataset:e.dataset,moduleColorScale:e.moduleColorScale},on:{filteredDataChange:e.filteredDataChangeHandler,settingDefinitionsChange:e.visSettingDefinitionsChange,settingDataMapChange:e.visSettingDataMapChange}})],1)],1)],1),n("ion-col",[n("ion-card",[n("VisConfigView",{attrs:{visIndex:4,visComponentList:e.visComponentList,visComponent:e.visComponent4,visDataSource:e.dataSourceVis4,visSettingDefinitions:e.visSettingDefinitionsMap.get(4),visSettingDataMap:e.visSettingDataMapMap.get(4)},on:{visComponentChange:e.visComponentChangeHandler,visDataSourceChange:e.visDataSourceChangeHandler,visSettingChange:e.visSettingChangeHandler}}),n("div",{staticClass:"vis-container"},[n(e.visComponent4,{ref:"vis4",tag:"component",attrs:{visIndex:4,dataset:e.dataForVis4,completeDataset:e.dataset,moduleColorScale:e.moduleColorScale},on:{filteredDataChange:e.filteredDataChangeHandler,settingDefinitionsChange:e.visSettingDefinitionsChange,settingDataMapChange:e.visSettingDataMapChange}})],1)],1)],1)],1)],1)},u=[],h=n("5698"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ion-card-header",[n("ion-label",{staticClass:"vis-title-label"},[e._v("Vis "+e._s(e.visIndex))]),n("div",{staticClass:"header-item"},[n("ion-select",{attrs:{interface:"popover",placeholder:"Vis Type",value:e.visComponent.name},on:{ionChange:function(t){return e.visComponentChangeHandler(e.visComponentList.find((function(e){return e.name===t.detail.value})))}}},e._l(e.visComponentList,(function(t){return n("ion-select-option",{key:t.name,attrs:{value:t.name}},[e._v(e._s(t.displayedName))])})),1)],1),n("div",{staticClass:"header-item"},[n("ion-select",{attrs:{interface:"popover",placeholder:"Data From",value:e.visDataSource},on:{ionChange:function(t){return e.visDataSourceChangeHandler(t.detail.value)}}},e._l([0,1,2,3,4].filter((function(t){return t!==e.visIndex})),(function(t){return n("ion-select-option",{key:t,attrs:{value:t}},[e._v("From "+e._s(t>0?"Vis"+t:"Default"))])})),1)],1),n("ion-buttons",{staticClass:"header-item"},[n("ion-button",{on:{click:e.settingButtonClickHandler}},[n("ion-icon",{attrs:{slot:"icon-only",name:"settings"},slot:"icon-only"})],1)],1)],1)},f=[],m=n("275f"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ion-content",[e.settingDefinitions&&e.settingDefinitions.length<1?n("ion-label",[e._v("No settings available.")]):e._e(),e._l(e.settingDefinitions,(function(t){return n("ion-item",{key:t.label},[n("ion-label",[e._v(e._s(t.label))]),"selection"===t.type?n("ion-select",{attrs:{interface:"popover",value:e.settingDataMap.get(t.label)},on:{ionChange:function(n){return e.settingChangeHandler(t.label,n.detail.value)}}},e._l(t.options,(function(t){return n("ion-select-option",{key:t,attrs:{value:t}},[e._v(e._s(t))])})),1):"checkbox"===t.type?n("ion-checkbox",{attrs:{checked:e.settingDataMap.get(t.label)},on:{ionChange:function(n){return e.settingChangeHandler(t.label,n.target.checked)}}}):n("ion-label",[e._v("Unsupported setting item")])],1)}))],2)},v=[],b={name:"VisSettingsView",props:["settingDefinitions","settingDataMap","settingChangeHandler"]},k=b,y=n("2877"),C=Object(y["a"])(k,g,v,!1,null,null,null),D=C.exports;Object(d["a"])({"md-settings":m["a"].md,"ios-settings":m["a"].ios});var M={name:"VisConfigView",props:["visIndex","visComponentList","visComponent","visDataSource","visSettingDefinitions","visSettingDataMap"],methods:{visComponentChangeHandler(e){this.$emit("visComponentChange",{index:this.visIndex,component:e})},visDataSourceChangeHandler(e){this.$emit("visDataSourceChange",{index:this.visIndex,sourceIndex:e})},async settingButtonClickHandler(e){const t=await this.$ionic.popoverController.create({component:D,componentProps:{propsData:{settingDefinitions:this.visSettingDefinitions,settingDataMap:this.visSettingDataMap,settingChangeHandler:this.settingChangeHandler}},event:e,translucent:!0});return await t.present()},settingChangeHandler(e,t){this.$emit("visSettingChange",{index:this.visIndex,label:e,value:t})}}},S=M,_=(n("e952"),Object(y["a"])(S,p,f,!1,null,"39daa72e",null)),j=_.exports,x={name:"VisView",components:{VisConfigView:j},props:["visComponentList","dataset","visComponent1","visComponent2","visComponent3","visComponent4","dataSourceVis1","dataSourceVis2","dataSourceVis3","dataSourceVis4","dataForVis1","dataForVis2","dataForVis3","dataForVis4"],data:()=>({moduleColorScale:()=>"black",visSettingDefinitionsMap:new Map([[1,[]],[2,[]],[3,[]],[4,[]]]),visSettingDataMapMap:new Map([[1,new Map],[2,new Map],[3,new Map],[4,new Map]])}),watch:{dataset:function(e){const t=e.nodes.filter(e=>"module"===e.label);this.moduleColorScale=h["n"](h["p"]).domain(t.filter((e,n)=>t.findIndex(t=>e===t)===n).map(e=>e.NAME))}},methods:{filteredDataChangeHandler(e){this.$emit("visFilteredDataChange",e)},visComponentChangeHandler(e){this.$emit("visComponentChange",e)},visDataSourceChangeHandler(e){this.$emit("visDataSourceChange",e)},visSettingChangeHandler({index:e,label:t,value:n}){this.$refs["vis"+e].settingChangeHandler(t,n)},visSettingDefinitionsChange({index:e,definitions:t}){this.visSettingDefinitionsMap.set(e,t),this.visSettingDefinitionsMap=new Map(this.visSettingDefinitionsMap)},visSettingDataMapChange({index:e,map:t}){this.visSettingDataMapMap.set(e,t),this.visSettingDataMapMap=new Map(this.visSettingDataMapMap)}}},V=x,w=(n("645b"),Object(y["a"])(V,l,u,!1,null,"0f553b8a",null)),N=w.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ion-card-header",[n("ion-card-title",[e._v("No Vis Selected")]),n("ion-card-subtitle",[e._v("Selecting Vis type from the control view.")])],1)},A=[],E={name:"DefaultVisView",displayedName:"None",props:["dataset","completeDataset","visIndex","moduleColorScale"],data:()=>({settingDefinitions:[],settingDataMap:new Map}),watch:{dataset:function(e){this.refresh(e)},completeDataset:function(e){this.refresh(e)}},computed:{filteredData:{get:function(){return this.dataset}}},mounted:function(){this.$emit("settingDefinitionsChange",{index:this.visIndex,definitions:this.settingDefinitions}),this.$emit("settingDataMapChange",{index:this.visIndex,map:this.settingDataMap}),this.dataset&&this.refresh(this.dataset)},methods:{refresh(e){this.resetFilter(),this.emitFilteredDataChangEvent(),this.generateVis(e)},emitFilteredDataChangEvent(){this.$emit("filteredDataChange",{index:this.visIndex,data:this.filteredData})},resetFilter(){},generateVis(){},applySettings(){},settingChangeHandler(e,t){this.settingDataMap.set(e,t),this.$emit("settingDataMapChange",{index:this.visIndex,map:this.settingDataMap}),this.applySettings()}}},H=E,I=Object(y["a"])(H,F,A,!1,null,null,null),O=I.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{ref:"mainSvg",attrs:{width:"100%",height:"100%",viewBox:"0 0 500 500",preserveAspectRatio:"none"}})},P=[],L={name:"ModuleTimeSeriesVisView",displayedName:"Module Time Series",extends:O,data:()=>({selectedModules:[],settingDefinitions:[{label:"Show CPU",type:"checkbox"},{label:"Show Memory",type:"checkbox"},{label:"Show Errors",type:"checkbox"}],settingDataMap:new Map([["Show CPU",!0],["Show Memory",!0],["Show Errors",!0]])}),computed:{filteredData:{get:function(){return this.selectedModules.length>0?{nodes:this.dataset.nodes.filter(e=>"module"===e.label&&this.selectedModules.find(t=>e.id===t.id)||"module"!==e.label&&this.dataset.edges.find(t=>t.source===e.id&&this.selectedModules.find(e=>e.id===t.target)||t.target===e.id&&this.selectedModules.find(e=>e.id===t.source))),edges:this.dataset.edges.filter(e=>this.selectedModules.find(t=>t.id===e.source||t.id===e.target))}:this.dataset}}},methods:{resetFilter(){this.selectedModules=[]},generateVis(e){const t=h["q"](this.$refs.mainSvg);t.selectAll("*").remove();const n=e.nodes.filter(e=>"module"===e.label).sort((e,t)=>Date.parse(e.time)-Date.parse(t.time)),a=JSON.parse(JSON.stringify(n[n.length-1]));a.time=a.time_run,n.push(a);const i=h["o"]().domain([Date.parse(n[0].time),Date.parse(n[n.length-1].time)]).range([50,425]),s=h["m"]().domain([0,h["h"](n.map(e=>+e.cpu_run))]).range([450,50]),o=h["m"]().domain([h["j"](n.map(e=>+e.memory_run)),h["h"](n.map(e=>+e.memory_run))]).range([450,50]);if(this.settingDataMap.get("Show CPU")){const e=h["g"]().x(e=>i(Date.parse(e.time))).y(e=>s(e.cpu_run)).curve(h["e"]),a=t.append("g").append("path");a.datum(n).attr("d",e).attr("stroke","red").attr("stroke-width",1).attr("fill","none").attr("opacity",.7)}if(this.settingDataMap.get("Show Memory")){const e=h["g"]().x(e=>i(Date.parse(e.time))).y(e=>o(e.memory_run)).curve(h["e"]),a=t.append("g").append("path");a.datum(n).attr("d",e).attr("stroke","blue").attr("stroke-width",1).attr("fill","none").attr("opacity",.7)}const r=t.append("g").selectAll("rect").data(n).enter().append("rect");if(r.attr("x",e=>i(Date.parse(e.time))).attr("y",450).attr("width",(e,t)=>(t<n.length-1?i(Date.parse(n[t+1].time)):425)-i(Date.parse(e.time))).attr("height",20).attr("fill",e=>this.moduleColorScale(e.NAME)),this.settingDataMap.get("Show Errors")){const e=t.append("g").selectAll("rect").data(n).enter().append("rect");e.attr("x",e=>i(Date.parse(e.time))).attr("y",470).attr("width",(e,t)=>(t<n.length-1?i(Date.parse(n[t+1].time)):425)-i(Date.parse(e.time))).attr("height",10).attr("fill",e=>"null"===e.error?"green":"red")}const d=t.append("g").attr("transform","translate(50, 0)");d.call(h["c"](s).tickFormat(e=>e+"%"));const c=t.append("g").attr("transform","translate(425, 0)");c.call(h["d"](o));const l=t.append("g").selectAll("rect").data(n).enter().append("rect");l.attr("x",e=>i(Date.parse(e.time))).attr("y",50).attr("width",(e,t)=>(t<n.length-1?i(Date.parse(n[t+1].time)):425)-i(Date.parse(e.time))).attr("height",430).attr("fill",e=>this.moduleColorScale(e.NAME)).attr("opacity",0).style("cursor","pointer").on("mouseover",()=>{h["q"](h["f"].target).style("opacity",e=>this.selectedModules.find(t=>e===t)?.5:.3)}).on("mouseout",()=>{h["q"](h["f"].target).style("opacity",e=>this.selectedModules.find(t=>e===t)?.2:0)}).on("click",e=>{const t=this.selectedModules.findIndex(t=>e===t);t>=0?(this.selectedModules.splice(t,1),h["q"](h["f"].target).style("opacity",.3)):(this.selectedModules.push(e),h["q"](h["f"].target).style("opacity",.5)),this.emitFilteredDataChangEvent()}),l.append("title").text(e=>e.time+"\n"+e.NAME+"\nCPU Load: "+e.cpu_run+"%\nMemory Load: "+e.memory_run+"\nError: "+e.error)},applySettings(){this.generateVis(this.dataset)}}},q=L,U=Object(y["a"])(q,$,P,!1,null,null,null),T=U.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{ref:"mainSvg",attrs:{width:"100%",height:"100%",viewBox:"0 0 500 500",preserveAspectRatio:"none"}})},B=[],J={name:"ModuleMetricsVisView",displayedName:"Module Metrics",extends:O,data:()=>({selectedModuleNames:[]}),computed:{filteredData:{get:function(){return this.selectedModuleNames.length>0?{nodes:this.dataset.nodes.filter(e=>"module"===e.label&&this.selectedModuleNames.find(t=>e.NAME===t)||"module"!==e.label&&this.dataset.edges.find(t=>t.source===e.id&&this.selectedModuleNames.find(e=>e===this.dataset.nodes.find(e=>e.id===t.target).NAME)||t.target===e.id&&this.selectedModuleNames.find(e=>e===this.dataset.nodes.find(e=>e.id===t.source).NAME))),edges:this.dataset.edges.filter(e=>this.selectedModuleNames.find(t=>this.dataset.nodes.find(n=>"module"===n.label&&n.NAME===t&&(n.id===e.source||n.id===e.target))))}:this.dataset}}},methods:{resetFilter(){this.selectedModuleNames=[]},generateVis(e){const t=h["q"](this.$refs.mainSvg);t.selectAll("*").remove();const n=e.nodes.filter(e=>"module"===e.label),a=n.filter((e,t)=>n.findIndex(t=>t.NAME===e.NAME)===t).map(e=>e.NAME),i=new Map;a.forEach(e=>{const t=n.filter(t=>t.NAME===e);i.set(e,{cpu:h["i"](t.map(e=>e.cpu_run)),memory:h["i"](t.map(e=>e.memory_run)),errors:h["r"](t.map(e=>"null"===e.error?0:1))})});const s=h["l"]().domain(a).range([50,425]).padding(.1),o=h["m"]().domain([.9*h["j"](Array.from(i.values()).map(e=>e.cpu)),1.1*h["h"](Array.from(i.values()).map(e=>e.cpu))]).range([450,50]),r=h["m"]().domain([.999*h["j"](Array.from(i.values()).map(e=>e.memory)),1.001*h["h"](Array.from(i.values()).map(e=>e.memory))]).range([450,50]),d=h["m"]().domain([.9*h["j"](Array.from(i.values()).map(e=>e.errors)),1.1*h["h"](Array.from(i.values()).map(e=>e.errors))]).range([450,50]),c=t.append("g");c.selectAll("rect").data(Array.from(i.entries())).enter().append("rect").attr("x",e=>s(e[0])).attr("width",s.bandwidth()/3).attr("y",e=>o(e[1].cpu)).attr("height",e=>450-o(e[1].cpu)).attr("fill","red");const l=t.append("g");l.selectAll("rect").data(Array.from(i.entries())).enter().append("rect").attr("x",e=>s(e[0])+s.bandwidth()/3).attr("width",s.bandwidth()/3).attr("y",e=>r(e[1].memory)).attr("height",e=>450-r(e[1].memory)).attr("fill","blue");const u=t.append("g");u.selectAll("rect").data(Array.from(i.entries())).enter().append("rect").attr("x",e=>s(e[0])+s.bandwidth()/3*2).attr("width",s.bandwidth()/3).attr("y",e=>d(e[1].errors)).attr("height",e=>450-d(e[1].errors)).attr("fill","green");const p=t.append("g").selectAll("rect").data(Array.from(i.entries())).enter().append("rect");p.attr("x",e=>s(e[0])).attr("width",s.bandwidth()).attr("y",50).attr("height",400).attr("fill",e=>this.moduleColorScale(e[0])).attr("opacity",0).attr("cursor","pointer").on("mouseover",()=>{h["q"](h["f"].target).style("opacity",e=>this.selectedModuleNames.find(t=>t===e[0])?.5:.3)}).on("mouseout",()=>{h["q"](h["f"].target).style("opacity",e=>this.selectedModuleNames.find(t=>t===e[0])?.2:0)}).on("click",e=>{const t=this.selectedModuleNames.findIndex(t=>e[0]===t);t>=0?(this.selectedModuleNames.splice(t,1),h["q"](h["f"].target).style("opacity",.3)):(this.selectedModuleNames.push(e[0]),h["q"](h["f"].target).style("opacity",.5)),this.emitFilteredDataChangEvent()}).append("title").text(e=>e[0]+"\nCPU: "+e[1].cpu.toFixed(1)+"%\nMemory: "+e[1].memory+"\nErrors: "+e[1].errors);const f=t.append("g").attr("transform","translate(0, 450)");f.call(h["b"](s));const m=t.append("g").attr("transform","translate(50, 0)");m.call(h["c"](o).tickFormat(e=>e+"%"));const g=t.append("g").attr("transform","translate(425, 0)");g.call(h["d"](r))}}},z=J,W=Object(y["a"])(z,R,B,!1,null,null,null),Y=W.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{ref:"mainSvg",attrs:{width:"100%",height:"100%",viewBox:"0 0 500 500",preserveAspectRatio:"xMidYMid meet"}})},K=[],Q={name:"ModuleErrorProportionVisView",displayedName:"Module Error Proportion",extends:O,data:()=>({selectedPartitionMap:new Map}),computed:{filteredData:{get:function(){const e=Array.from(this.selectedPartitionMap.entries()).flatMap(e=>[{moduleName:e[0],status:"success",isSelected:e[1].get("success")},{moduleName:e[0],status:"error",isSelected:e[1].get("error")}]).filter(e=>e.isSelected);if(e.length>0){const t=this.dataset.nodes.filter(t=>"module"!==t.label||e.find(e=>t.NAME===e.moduleName&&("success"===e.status?"null"===t.error:"null"!==t.error))),n=t.filter(e=>"module"===e.label||this.dataset.edges.find(n=>n.source===e.id&&t.find(e=>"module"===e.label&&e.id===n.target)||n.target===e.id&&t.find(e=>"module"===e.label&&e.id===n.source))),a=this.dataset.edges.filter(e=>n.find(t=>t.id===e.source||t.id===e.target));return{nodes:n,edges:a}}return this.dataset}}},methods:{resetFilter(){this.selectedPartitionMap=new Map},generateVis(e){const t=500,n=500,a=h["q"](this.$refs.mainSvg);a.selectAll("*").remove(),this.selectedPartitionMap=new Map;const i=a.append("g").attr("transform","translate("+t/2+","+n/2+")"),s=e.nodes.filter(e=>"module"===e.label),o={};for(const h of s){if(!o[h.NAME]){o[h.NAME]=[];const e=new Map;e.set("success",!1),e.set("error",!1),this.selectedPartitionMap.set(h.NAME,e)}o[h.NAME].push(h)}const r=h["k"]().value(e=>e[1].length).sort(null),d=r(Object.entries(o)),c=r(Object.entries(o).flatMap(e=>[[e[0]+"_success",e[1].filter(e=>"null"===e.error)],[e[0]+"_error",e[1].filter(e=>"null"!==e.error)]])),l=h["n"]().domain([!0,!1]).range(["green","red"]),u=i.append("g"),p=u.selectAll("path").data(d).enter().append("path").attr("d",h["a"]().innerRadius(50).outerRadius(100)).attr("fill",e=>this.moduleColorScale(e.data[0])).attr("stroke","black").attr("stroke-width","2px").attr("opacity",.7).style("cursor","pointer").on("click",e=>{const t=this.selectedPartitionMap.get(e.data[0]),n=t.get("success")&&t.get("error");t.set("success",!n),t.set("error",!n),this.updateSelection()});p.append("title").text(e=>e.data[0]+"\n"+(e.value/s.length*100).toFixed(2)+"%");const f=i.append("g"),m=f.selectAll("path").data(c).enter().append("path").attr("d",h["a"]().innerRadius(100).outerRadius(150)).attr("fill",e=>l("success"===e.data[0].split("_")[1])).attr("stroke","black").attr("stroke-width","2px").attr("opacity",.7).style("cursor","pointer").on("click",e=>{const[t,n]=e.data[0].split("_"),a=this.selectedPartitionMap.get(t);a.set(n,!a.get(n)),this.updateSelection()});m.append("title").text(e=>e.data[0]+"\n"+(e.value/s.length*100).toFixed(2)+"%")},updateSelection(){h["q"](this.$refs.mainSvg).select("g").selectAll("g").selectAll("path").attr("stroke-width",e=>{const[t,n]=e.data[0].split("_");let a=!1;if(n){const e=this.selectedPartitionMap.get(t);a=e.get(n)}else{const e=this.selectedPartitionMap.get(t);a=e.get("success")&&e.get("error")}return a?"5px":"2px"});const e=this.selectedPartitionMap;this.selectedPartitionMap=null,this.selectedPartitionMap=e,this.emitFilteredDataChangEvent()}}},X=Q,Z=Object(y["a"])(X,G,K,!1,null,null,null),ee=Z.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ion-content",{attrs:{"scroll-x":"true"}},[n("ion-segment",{attrs:{slot:"fixed",scrollable:"",value:e.queryingNodeIndex},on:{ionChange:function(t){return e.queryingNodeIndex=t.detail.value}},slot:"fixed"},e._l(e.dataNodes,(function(t,a){return n("ion-segment-button",{key:a,attrs:{value:a,title:"Label: "+t.label+"\nId: "+t.id}},[e._v(e._s(a))])})),1),n("table",[n("tr",[n("th",[e._v("Type")]),n("th",[e._v("Value/Source")]),n("th",[e._v("Label")]),n("th",[e._v("Module")]),n("th",[e._v("Error")]),n("th",[e._v("User")])]),e._l(e.dataHistoryList,(function(t){return n("tr",{key:t.dataNode.id},[n("th",[e._v(e._s(t.dataNode.type))]),n("th",[e._v(e._s("object"===t.dataNode.label?t.dataNode.VALUE:t.dataNode.SOURCE))]),n("th",[e._v(e._s(t.dataNode.label))]),n("th",[e._v(e._s(t.sourceModule?t.sourceModule.NAME:""))]),n("th",[e._v(e._s(t.dataNode.error))]),n("th",[e._v(e._s(t.dataNode.user))])])}))],2)],1)},ne=[],ae={name:"DataHistoryTableVisView",displayedName:"Data Histroy Table",extends:O,data:()=>({_queryingNodeIndex:0,dataHistoryList:[]}),computed:{dataNodes:{get:function(){return this.dataset.nodes.filter(e=>"object"===e.label||"file"===e.label)}},queryingNodeIndex:{get:function(){return this.$data._queryingNodeIndex},set:function(e){this.$data._queryingNodeIndex=e,this.refreshTable(e)}}},methods:{generateVis(e){this.queryingNodeIndex=0},refreshTable(e){const t=[];let n=this.dataNodes[e];while(n){const e=this.completeDataset.edges.find(e=>e.target===n.id);if(e){const a=e.source,i=this.completeDataset.nodes.find(e=>e.id===a);t.push({dataNode:n,sourceModule:i});const s=this.completeDataset.edges.find(e=>e.target===a);if(s){const e=s.source;n=this.completeDataset.nodes.find(t=>t.id===e);continue}}else t.push({dataNode:n,sourceModule:void 0});n=void 0}this.dataHistoryList=t},segmentChangeHandler(e){const t=e.detail.value;this.refreshTable(t)}}},ie=ae,se=(n("a417"),Object(y["a"])(ie,te,ne,!1,null,"6f4bd9bc",null)),oe=se.exports;Object(d["a"])({"md-cloud-upload":c["a"].md,"ios-cloud-upload":c["a"].ios});var re={name:"MainView",components:{VisView:N},props:{title:String},data:()=>({_dataset:null,datasetFile:File,visComponentList:[O,T,Y,ee,oe].sort((e,t)=>{return"Default"===e.displayedName?-1:"Default"===t.displayedName?1:e.displayedName>t.displayedName?1:e.displayedName<t.displayedName?-1:0}),visComponent1:O,visComponent2:O,visComponent3:O,visComponent4:O,filteredDataVis1:null,filteredDataVis2:null,filteredDataVis3:null,filteredDataVis4:null,dataSourceVis1:0,dataSourceVis2:1,dataSourceVis3:2,dataSourceVis4:3,dataForVis1:null,dataForVis2:null,dataForVis3:null,dataForVis4:null}),computed:{datasetName:{get(){const e=this.datasetFile.name.substring(0,this.datasetFile.name.lastIndexOf("."));return this.datasetFile&&this.dataset?e:"No Dataset Loaded"}},dataset:{get(){return this.$data._dataset},set(e){this.$data._dataset=e,this.dataForVis1=this.dataset,this.dataForVis2=this.dataset,this.dataForVis3=this.dataset,this.dataForVis4=this.dataset}}},methods:{upload(){this.$refs.fileUploadInput.click()},fileUploaded(){if(this.datasetFile=this.$refs.fileUploadInput.files[0],this.datasetFile&&"json"===this.datasetFile.name.split(".").pop()){const e=new FileReader;e.onload=()=>{const t=e.result;this.dataset=JSON.parse(t)},e.readAsText(this.datasetFile)}else this.dataset=null},visComponentChangeHandler({index:e,component:t}){switch(e){case 1:this.visComponent1=t;break;case 2:this.visComponent2=t;break;case 3:this.visComponent3=t;break;case 4:this.visComponent4=t;break}},visDataSourceChangeHandler({index:e,sourceIndex:t}){this["dataSourceVis"+e]=t,this["dataForVis"+e]=t>0?this["filteredDataVis"+t]:this.dataset},visFilteredDataChangeHandler({index:e,data:t}){this["filteredDataVis"+e]=t;for(let n=1;n<=4;n++)this["dataSourceVis"+n]==e&&(this["dataForVis"+n]=t)}}},de=re,ce=(n("0c9e"),Object(y["a"])(de,o,r,!1,null,"1f655769",null)),le=ce.exports,ue={name:"App",components:{MainView:le}},he=ue,pe=(n("034f"),Object(y["a"])(he,i,s,!1,null,null,null)),fe=pe.exports,me=n("481b");a["a"].config.productionTip=!1,a["a"].use(me["a"]),new a["a"]({render:e=>e(fe)}).$mount("#app")},"645b":function(e,t,n){"use strict";var a=n("d3fc"),i=n.n(a);i.a},"64a9":function(e,t,n){},a0f0:function(e,t,n){},a417:function(e,t,n){"use strict";var a=n("a0f0"),i=n.n(a);i.a},d3fc:function(e,t,n){},e952:function(e,t,n){"use strict";var a=n("03e4"),i=n.n(a);i.a},f2bd:function(e,t,n){var a={"./ion-icon.entry.js":["88f6","chunk-2d0df486"]};function i(e){var t=a[e];return t?n.e(t[1]).then((function(){var e=t[0];return n(e)})):Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}i.keys=function(){return Object.keys(a)},i.id="f2bd",e.exports=i}});
//# sourceMappingURL=app.17793486.js.map