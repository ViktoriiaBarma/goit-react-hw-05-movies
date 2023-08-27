/*! For license information please see 24.21d3a4d4.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[24],{6493:function(t,r,e){e.r(r),e.d(r,{default:function(){return S}});var n,o,i,a,c,u,l,s,f=e(5861),h=e(9439),p=e(2791),d=e(7689),g=e(9787),v=e(168),y=e(5867),m=y.ZP.ul(n||(n=(0,v.Z)(["\n  display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 16px;\n    padding-top: 32px;\n    padding-bottom: 32px;\n    text-align: center;\n     background-color: rgb(248 170 96 / 39%);;\n}\n"]))),x=y.ZP.li(o||(o=(0,v.Z)(["\n  display: flex;\n  flex-flow: column wrap;\n  max-width: 100%;\n  width: 180px;\n  height: 100%;\n  border-radius: 8px;\n  border: none;\n  outline: none;\n  box-shadow: rgba(42, 79, 42, 0.17) 9px 7px 19px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  overflow: hidden;\n"]))),w=y.ZP.div(i||(i=(0,v.Z)(["\n  position: relative;\n  overflow: hidden;\n"]))),b=y.ZP.img(a||(a=(0,v.Z)(["\n  display: block;\n  min-height: 100%;\n  height: 240px;\n  width: 100%;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  transition: transform 250ms linear 0s;\n  transform: scale(1);\n  object-fit: cover;\n  object-position: center center;\n\n  &:hover {\n    transform: scale(1.1);\n  }\n"]))),j=y.ZP.div(c||(c=(0,v.Z)(["\n  flex-direction: column;\n  align-items: center;\n  flex: 1 0 auto;\n  padding: 4px;\n  background-color: #fff;\n"]))),L=y.ZP.span(u||(u=(0,v.Z)(["\n  color: rgb(255, 66, 8);\n  padding-left:5px;\n"]))),E=y.ZP.h3(l||(l=(0,v.Z)(["\n  margin-bottom: 16px;\n  text-align: center;\n  color: rgb(0, 0, 0);\n  font-size: 14px;\n  font-weight: 500;\n"]))),_=y.ZP.p(s||(s=(0,v.Z)(["\n  margin-bottom: 16px;\n  text-align: center;\n  color: rgb(0, 0, 0);\n  font-size: 14px;\n  font-weight: 500;\n"]))),k=e(854),Z=e.p+"static/media/avatar.572020fdd104f0014f95.jpg",O=e(184);function P(){P=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var i=r&&r.prototype instanceof v?r:v,a=Object.create(i.prototype),c=new S(n||[]);return o(a,"_invoke",{value:_(t,e,c)}),a}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=s;var h="suspendedStart",p="executing",d="completed",g={};function v(){}function y(){}function m(){}var x={};l(x,a,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(G([])));b&&b!==e&&n.call(b,a)&&(x=b);var j=m.prototype=v.prototype=Object.create(x);function L(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function E(t,r){function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&n.call(s,"__await")?r.resolve(s.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function _(r,e,n){var o=h;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=k(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var l=f(r,e,n);if("normal"===l.type){if(o=n.done?d:"suspendedYield",l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=d,n.method="throw",n.arg=l.arg)}}}function k(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,k(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=f(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function Z(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(Z,this),this.reset(!0)}function G(r){if(r||""===r){var e=r[a];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return y.prototype=m,o(j,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:y,configurable:!0}),y.displayName=l(m,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===y||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},r.awrap=function(t){return{__await:t}},L(E.prototype),l(E.prototype,c,(function(){return this})),r.AsyncIterator=E,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new E(s(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(j),l(j,u,"Generator"),l(j,a,(function(){return this})),l(j,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=G,S.prototype={constructor:S,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:G(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),g}},r}var S=function(){var t=(0,d.UO)().movieId,r=(0,p.useState)([]),e=(0,h.Z)(r,2),n=e[0],o=e[1],i=(0,p.useState)(!1),a=(0,h.Z)(i,2),c=a[0],u=a[1];return(0,p.useEffect)((function(){var r=function(){var r=(0,f.Z)(P().mark((function r(){var e;return P().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,u(!0),r.next=4,(0,g.yo)("".concat(t));case 4:e=r.sent,o(e),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.log(r.t0);case 11:return r.prev=11,u(!1),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[0,8,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}),[t]),(0,O.jsxs)(O.Fragment,{children:[c&&(0,O.jsx)(k.a,{}),(0,O.jsx)(m,{children:0===n.length?(0,O.jsx)("p",{children:"\u0406\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f \u043f\u0440\u043e \u0430\u043a\u0442\u043e\u0440\u0441\u044c\u043a\u0438\u0439 \u0441\u043a\u043b\u0430\u0434 \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u0430"}):n.map((function(t){var r=t.cast_id,e=t.name,n=t.character,o=t.profile_path;return(0,O.jsxs)(x,{children:[(0,O.jsx)(w,{children:(0,O.jsx)(b,{src:o?"https://image.tmdb.org/t/p/original".concat(o):Z,alt:e,width:300})}),(0,O.jsxs)(j,{children:[(0,O.jsx)(E,{children:e}),n&&(0,O.jsxs)(_,{children:["\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u0436:",(0,O.jsx)(L,{children:n})]})]})]},r)}))})]})}},854:function(t,r,e){e.d(r,{a:function(){return i}});var n=e(3430),o=e(184),i=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.gy,{justifyContent:"center",height:"80",width:"80",color:"#001b4c",ariaLabel:"tail-spin-loading",radius:"1",wrapperStyle:{justifyContent:"center"},wrapperClass:"",visible:!0})})}}}]);
//# sourceMappingURL=24.21d3a4d4.chunk.js.map