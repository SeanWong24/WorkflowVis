(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cc206ae2"],{"0cad":function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return a})),e.d(n,"d",(function(){return i}));var i=function(){var t=window.TapticEngine;t&&t.selection()},o=function(){var t=window.TapticEngine;t&&t.gestureSelectionStart()},r=function(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()},a=function(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}},"264c":function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return o})),e.d(n,"d",(function(){return d}));var i=e("9ab4"),o=function(t,n){return null!==n.closest(t)},r=function(t){var n;return"string"===typeof t&&t.length>0?(n={"ion-color":!0},n["ion-color-"+t]=!0,n):void 0},a=function(t){if(void 0!==t){var n=Array.isArray(t)?t:t.split(" ");return n.filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t}))}return[]},c=function(t){var n={};return a(t).forEach((function(t){return n[t]=!0})),n},s=/^[a-z][a-z0-9+\-.]*:/,d=function(t,n,e){return Object(i["a"])(void 0,void 0,void 0,(function(){var o;return Object(i["c"])(this,(function(i){return null!=t&&"#"!==t[0]&&!s.test(t)&&(o=document.querySelector("ion-router"),o)?(null!=n&&n.preventDefault(),[2,o.push(t,e)]):[2,!1]}))}))}},ae8d:function(t,n,e){"use strict";e.r(n),e.d(n,"ion_toggle",(function(){return s}));var i=e("9ab4"),o=e("4f09"),r=(e("b6d2"),e("c123")),a=e("264c"),c=e("0cad"),s=function(){function t(t){var n=this;Object(o["l"])(this,t),this.inputId="ion-tg-"+u++,this.lastDrag=0,this.activated=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on",this.onClick=function(){n.lastDrag+300<Date.now()&&(n.checked=!n.checked)},this.onFocus=function(){n.ionFocus.emit()},this.onBlur=function(){n.ionBlur.emit()},this.ionChange=Object(o["d"])(this,"ionChange",7),this.ionFocus=Object(o["d"])(this,"ionFocus",7),this.ionBlur=Object(o["d"])(this,"ionBlur",7),this.ionStyle=Object(o["d"])(this,"ionStyle",7)}return t.prototype.checkedChanged=function(t){this.ionChange.emit({checked:t,value:this.value})},t.prototype.disabledChanged=function(){this.emitStyle(),this.gesture&&this.gesture.setDisabled(this.disabled)},t.prototype.connectedCallback=function(){return Object(i["a"])(this,void 0,void 0,(function(){var t,n=this;return Object(i["c"])(this,(function(i){switch(i.label){case 0:return t=this,[4,Promise.resolve().then(e.bind(null,"c682"))];case 1:return t.gesture=i.sent().createGesture({el:this.el,gestureName:"toggle",gesturePriority:100,threshold:5,passive:!1,onStart:function(){return n.onStart()},onMove:function(t){return n.onMove(t)},onEnd:function(t){return n.onEnd(t)}}),this.disabledChanged(),[2]}}))}))},t.prototype.disconnectedCallback=function(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},t.prototype.componentWillLoad=function(){this.emitStyle()},t.prototype.emitStyle=function(){this.ionStyle.emit({"interactive-disabled":this.disabled})},t.prototype.onStart=function(){this.activated=!0,this.setFocus()},t.prototype.onMove=function(t){d(document,this.checked,t.deltaX,-10)&&(this.checked=!this.checked,Object(c["d"])())},t.prototype.onEnd=function(t){this.activated=!1,this.lastDrag=Date.now(),t.event.preventDefault(),t.event.stopImmediatePropagation()},t.prototype.getValue=function(){return this.value||""},t.prototype.setFocus=function(){this.buttonEl&&this.buttonEl.focus()},t.prototype.render=function(){var t,n=this,e=this,i=e.inputId,c=e.disabled,s=e.checked,d=e.activated,u=e.color,l=e.el,g=Object(o["e"])(this),p=i+"-lbl",b=Object(r["f"])(l),h=this.getValue();return b&&(b.id=p),Object(r["a"])(!0,l,this.name,s?h:"",c),Object(o["i"])(o["a"],{onClick:this.onClick,role:"checkbox","aria-disabled":c?"true":null,"aria-checked":""+s,"aria-labelledby":p,class:Object.assign(Object.assign({},Object(a["a"])(u)),(t={},t[g]=!0,t["in-item"]=Object(a["c"])("ion-item",l),t["toggle-activated"]=d,t["toggle-checked"]=s,t["toggle-disabled"]=c,t["interactive"]=!0,t))},Object(o["i"])("div",{class:"toggle-icon"},Object(o["i"])("div",{class:"toggle-inner"})),Object(o["i"])("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:c,ref:function(t){return n.buttonEl=t}}))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(o["f"])(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;outline:none;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}:host{--background:rgba(var(--ion-text-color-rgb,0,0,0),0.3);--background-checked:rgba(var(--ion-color-primary-rgb,56,128,255),0.5);--handle-background:#fff;--handle-background-checked:var(--ion-color-primary,#3880ff);padding-left:12px;padding-right:12px;padding-top:12px;padding-bottom:12px;-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:36px;height:14px;contain:strict}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}:host(.ion-color.toggle-checked) .toggle-icon{background:rgba(var(--ion-color-base-rgb),.5)}:host(.ion-color.toggle-checked) .toggle-inner{background:var(--ion-color-base)}.toggle-icon{border-radius:14px;display:block;position:relative;width:100%;height:100%;-webkit-transition:background-color .16s;transition:background-color .16s;background:var(--background);pointer-events:none}.toggle-inner{left:0;top:-3px;border-radius:50%;position:absolute;width:20px;height:20px;-webkit-transition-duration:.16s;transition-duration:.16s;-webkit-transition-property:background-color,-webkit-transform;transition-property:background-color,-webkit-transform;transition-property:transform,background-color;transition-property:transform,background-color,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);background:var(--handle-background);-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);will-change:transform,background-color;contain:strict}:host-context([dir=rtl]) .toggle-inner,[dir=rtl] .toggle-inner{left:unset;right:unset;right:0}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}:host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(16px,0,0);transform:translate3d(16px,0,0);background:var(--handle-background-checked)}:host-context([dir=rtl]).toggle-checked .toggle-inner,:host-context([dir=rtl]):host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(-1 * 16px),0,0);transform:translate3d(calc(-1 * 16px),0,0)}:host(.toggle-disabled){opacity:.3}:host(.in-item[slot]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:16px;padding-right:0;padding-top:12px;padding-bottom:12px;cursor:pointer}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot]){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:0;padding-inline-end:0}}:host(.in-item[slot=start]){padding-left:2px;padding-right:18px;padding-top:12px;padding-bottom:12px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){padding-left:unset;padding-right:unset;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:18px;padding-inline-end:18px}}"},enumerable:!0,configurable:!0}),t}(),d=function(t,n,e,i){var o="rtl"===t.dir;return n?!o&&i>e||o&&-i<e:!o&&-i<e||o&&i>e},u=0}}]);
//# sourceMappingURL=chunk-cc206ae2.519d0f22.js.map