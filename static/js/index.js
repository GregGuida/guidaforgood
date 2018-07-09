/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/formdata-polyfill/formdata.min.js":
/*!********************************************************!*\
  !*** ./node_modules/formdata-polyfill/formdata.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {;(function(){var k,l="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,e){a!=Array.prototype&&a!=Object.prototype&&(a[b]=e.value)},m="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function n(){n=function(){};m.Symbol||(m.Symbol=p)}var p=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function r(){n();var a=m.Symbol.iterator;a||(a=m.Symbol.iterator=m.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&l(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return u(this)}});r=function(){}}function u(a){var b=0;return v(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function v(a){r();a={next:a};a[m.Symbol.iterator]=function(){return this};return a}function w(a){r();n();r();var b=a[Symbol.iterator];return b?b.call(a):u(a)}
function x(){this.g=!1;this.c=null;this.m=void 0;this.b=1;this.l=this.o=0;this.f=null}function z(a){if(a.g)throw new TypeError("Generator is already running");a.g=!0}x.prototype.h=function(a){this.m=a};x.prototype.i=function(a){this.f={s:a,u:!0};this.b=this.o||this.l};x.prototype["return"]=function(a){this.f={"return":a};this.b=this.l};function A(a,b,e){a.b=e;return{value:b}}function B(a){this.v=a;this.j=[];for(var b in a)this.j.push(b);this.j.reverse()}function C(a){this.a=new x;this.w=a}
C.prototype.h=function(a){z(this.a);if(this.a.c)return D(this,this.a.c.next,a,this.a.h);this.a.h(a);return E(this)};function F(a,b){z(a.a);var e=a.a.c;if(e)return D(a,"return"in e?e["return"]:function(a){return{value:a,done:!0}},b,a.a["return"]);a.a["return"](b);return E(a)}C.prototype.i=function(a){z(this.a);if(this.a.c)return D(this,this.a.c["throw"],a,this.a.h);this.a.i(a);return E(this)};
function D(a,b,e,c){try{var d=b.call(a.a.c,e);if(!(d instanceof Object))throw new TypeError("Iterator result "+d+" is not an object");if(!d.done)return a.a.g=!1,d;var f=d.value}catch(g){return a.a.c=null,a.a.i(g),E(a)}a.a.c=null;c.call(a.a,f);return E(a)}function E(a){for(;a.a.b;)try{var b=a.w(a.a);if(b)return a.a.g=!1,{value:b.value,done:!1}}catch(e){a.a.m=void 0,a.a.i(e)}a.a.g=!1;if(a.a.f){b=a.a.f;a.a.f=null;if(b.u)throw b.s;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function G(a){this.next=function(b){return a.h(b)};this["throw"]=function(b){return a.i(b)};this["return"]=function(b){return F(a,b)};r();this[Symbol.iterator]=function(){return this}}function H(a,b){G.prototype=a.prototype;return new G(new C(b))}
if("undefined"===typeof FormData||!FormData.prototype.keys){var I=function(a,b,e){if(2>arguments.length)throw new TypeError("2 arguments required, but only "+arguments.length+" present.");return b instanceof Blob?[a+"",b,void 0!==e?e+"":"string"===typeof b.name?b.name:"Blob"]:[a+"",b+""]},J=function(a){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");return[a+""]},K=function(a){var b=w(a);a=b.next().value;b=b.next().value;a instanceof Blob&&(a=new File([a],b,{type:a.type,
lastModified:a.lastModified}));return a},L="object"===typeof window?window:"object"===typeof self?self:this,M=L.FormData,N=L.XMLHttpRequest&&L.XMLHttpRequest.prototype.send,O=L.Request&&L.fetch;n();var P=L.Symbol&&Symbol.toStringTag,Q=new WeakMap,R=Array.from||function(a){return[].slice.call(a)};P&&(Blob.prototype[P]||(Blob.prototype[P]="Blob"),"File"in L&&!File.prototype[P]&&(File.prototype[P]="File"));try{new File([],"")}catch(a){L.File=function(b,e,c){b=new Blob(b,c);c=c&&void 0!==c.lastModified?
new Date(c.lastModified):new Date;Object.defineProperties(b,{name:{value:e},lastModifiedDate:{value:c},lastModified:{value:+c},toString:{value:function(){return"[object File]"}}});P&&Object.defineProperty(b,P,{value:"File"});return b}}var S=function(a){Q.set(this,Object.create(null));if(!a)return this;a=w(R(a.elements));for(var b=a.next();!b.done;b=a.next())if(b=b.value,b.name&&!b.disabled)if("file"===b.type)for(var e=w(b.files),c=e.next();!c.done;c=e.next())this.append(b.name,c.value);else if("select-multiple"===
b.type||"select-one"===b.type)for(e=w(R(b.options)),c=e.next();!c.done;c=e.next())c=c.value,c.selected&&this.append(b.name,c.value);else"checkbox"===b.type||"radio"===b.type?b.checked&&this.append(b.name,b.value):this.append(b.name,b.value)};k=S.prototype;k.append=function(a,b,e){var c=Q.get(this);c[a]||(c[a]=[]);c[a].push([b,e])};k["delete"]=function(a){delete Q.get(this)[a]};k.entries=function b(){var e=this,c,d,f,g,h,q;return H(b,function(b){switch(b.b){case 1:c=Q.get(e),f=new B(c);case 2:var t;
a:{for(t=f;0<t.j.length;){var y=t.j.pop();if(y in t.v){t=y;break a}}t=null}if(null==(d=t)){b.b=0;break}g=w(c[d]);h=g.next();case 5:if(h.done){b.b=2;break}q=h.value;return A(b,[d,K(q)],6);case 6:h=g.next(),b.b=5}})};k.forEach=function(b,e){for(var c=w(this),d=c.next();!d.done;d=c.next()){var f=w(d.value);d=f.next().value;f=f.next().value;b.call(e,f,d,this)}};k.get=function(b){var e=Q.get(this);return e[b]?K(e[b][0]):null};k.getAll=function(b){return(Q.get(this)[b]||[]).map(K)};k.has=function(b){return b in
Q.get(this)};k.keys=function e(){var c=this,d,f,g,h,q;return H(e,function(e){switch(e.b){case 1:d=w(c),f=d.next();case 2:if(f.done){e.b=0;break}g=f.value;h=w(g);q=h.next().value;return A(e,q,3);case 3:f=d.next(),e.b=2}})};k.set=function(e,c,d){Q.get(this)[e]=[[c,d]]};k.values=function c(){var d=this,f,g,h,q,y;return H(c,function(c){switch(c.b){case 1:f=w(d),g=f.next();case 2:if(g.done){c.b=0;break}h=g.value;q=w(h);q.next();y=q.next().value;return A(c,y,3);case 3:g=f.next(),c.b=2}})};S.prototype._asNative=
function(){for(var c=new M,d=w(this),f=d.next();!f.done;f=d.next()){var g=w(f.value);f=g.next().value;g=g.next().value;c.append(f,g)}return c};S.prototype._blob=function(){for(var c="----formdata-polyfill-"+Math.random(),d=[],f=w(this),g=f.next();!g.done;g=f.next()){var h=w(g.value);g=h.next().value;h=h.next().value;d.push("--"+c+"\r\n");h instanceof Blob?d.push('Content-Disposition: form-data; name="'+g+'"; filename="'+h.name+'"\r\n',"Content-Type: "+(h.type||"application/octet-stream")+"\r\n\r\n",
h,"\r\n"):d.push('Content-Disposition: form-data; name="'+g+'"\r\n\r\n'+h+"\r\n")}d.push("--"+c+"--");return new Blob(d,{type:"multipart/form-data; boundary="+c})};n();r();S.prototype[Symbol.iterator]=function(){return this.entries()};S.prototype.toString=function(){return"[object FormData]"};P&&(S.prototype[P]="FormData");[["append",I],["delete",J],["get",J],["getAll",J],["has",J],["set",I]].forEach(function(c){var d=S.prototype[c[0]];S.prototype[c[0]]=function(){return d.apply(this,c[1].apply(this,
R(arguments)))}});N&&(XMLHttpRequest.prototype.send=function(c){c instanceof S?(c=c._blob(),this.setRequestHeader("Content-Type",c.type),N.call(this,c)):N.call(this,c)});if(O){var T=L.fetch;L.fetch=function(c,d){d&&d.body&&d.body instanceof S&&(d.body=d.body._blob());return T(c,d)}}L.FormData=S};
})();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/waypoints/lib/noframework.waypoints.min.js":
/*!*****************************************************************!*\
  !*** ./node_modules/waypoints/lib/noframework.waypoints.min.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(n){if(!n)throw new Error("No options passed to Waypoint constructor");if(!n.element)throw new Error("No element option passed to Waypoint constructor");if(!n.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,n),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=n.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var n in i)e.push(i[n]);for(var o=0,r=e.length;r>o;o++)e[o][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=o.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,n[t.waypointContextKey]=this,i+=1,o.windowContext||(o.windowContext=!0,o.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,n={},o=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete n[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,o.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||o.isTouch)&&(e.didScroll=!0,o.requestAnimationFrame(t))})},e.prototype.handleResize=function(){o.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var n=e[i],o=n.newScroll>n.oldScroll,r=o?n.forward:n.backward;for(var s in this.waypoints[i]){var l=this.waypoints[i][s];if(null!==l.triggerPoint){var a=n.oldScroll<l.triggerPoint,h=n.newScroll>=l.triggerPoint,p=a&&h,u=!a&&!h;(p||u)&&(l.queueTrigger(r),t[l.group.id]=l.group)}}}for(var d in t)t[d].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?o.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?o.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var n=0,o=t.length;o>n;n++)t[n].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),n={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var l in this.waypoints[r]){var a,h,p,u,d,f=this.waypoints[r][l],c=f.options.offset,w=f.triggerPoint,y=0,g=null==w;f.element!==f.element.window&&(y=f.adapter.offset()[s.offsetProp]),"function"==typeof c?c=c.apply(f):"string"==typeof c&&(c=parseFloat(c),f.options.offset.indexOf("%")>-1&&(c=Math.ceil(s.contextDimension*c/100))),a=s.contextScroll-s.contextOffset,f.triggerPoint=Math.floor(y+a-c),h=w<s.oldScroll,p=f.triggerPoint>=s.oldScroll,u=h&&p,d=!h&&!p,!g&&u?(f.queueTrigger(s.backward),n[f.group.id]=f.group):!g&&d?(f.queueTrigger(s.forward),n[f.group.id]=f.group):g&&s.oldScroll>=f.triggerPoint&&(f.queueTrigger(s.forward),n[f.group.id]=f.group)}}return o.requestAnimationFrame(function(){for(var t in n)n[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in n)n[t].refresh()},e.findByElement=function(t){return n[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},o.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},o.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),n[this.axis][this.name]=this}var n={vertical:{},horizontal:{}},o=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var n=this.triggerQueues[i],o="up"===i||"left"===i;n.sort(o?e:t);for(var r=0,s=n.length;s>r;r+=1){var l=n[r];(l.options.continuous||r===n.length-1)&&l.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=o.Adapter.inArray(e,this.waypoints),n=i===this.waypoints.length-1;return n?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=o.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=o.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return n[t.axis][t.name]||new i(t)},o.Group=i}(),function(){"use strict";function t(t){return t===t.window}function e(e){return t(e)?e:e.defaultView}function i(t){this.element=t,this.handlers={}}var n=window.Waypoint;i.prototype.innerHeight=function(){var e=t(this.element);return e?this.element.innerHeight:this.element.clientHeight},i.prototype.innerWidth=function(){var e=t(this.element);return e?this.element.innerWidth:this.element.clientWidth},i.prototype.off=function(t,e){function i(t,e,i){for(var n=0,o=e.length-1;o>n;n++){var r=e[n];i&&i!==r||t.removeEventListener(r)}}var n=t.split("."),o=n[0],r=n[1],s=this.element;if(r&&this.handlers[r]&&o)i(s,this.handlers[r][o],e),this.handlers[r][o]=[];else if(o)for(var l in this.handlers)i(s,this.handlers[l][o]||[],e),this.handlers[l][o]=[];else if(r&&this.handlers[r]){for(var a in this.handlers[r])i(s,this.handlers[r][a],e);this.handlers[r]={}}},i.prototype.offset=function(){if(!this.element.ownerDocument)return null;var t=this.element.ownerDocument.documentElement,i=e(this.element.ownerDocument),n={top:0,left:0};return this.element.getBoundingClientRect&&(n=this.element.getBoundingClientRect()),{top:n.top+i.pageYOffset-t.clientTop,left:n.left+i.pageXOffset-t.clientLeft}},i.prototype.on=function(t,e){var i=t.split("."),n=i[0],o=i[1]||"__default",r=this.handlers[o]=this.handlers[o]||{},s=r[n]=r[n]||[];s.push(e),this.element.addEventListener(n,e)},i.prototype.outerHeight=function(e){var i,n=this.innerHeight();return e&&!t(this.element)&&(i=window.getComputedStyle(this.element),n+=parseInt(i.marginTop,10),n+=parseInt(i.marginBottom,10)),n},i.prototype.outerWidth=function(e){var i,n=this.innerWidth();return e&&!t(this.element)&&(i=window.getComputedStyle(this.element),n+=parseInt(i.marginLeft,10),n+=parseInt(i.marginRight,10)),n},i.prototype.scrollLeft=function(){var t=e(this.element);return t?t.pageXOffset:this.element.scrollLeft},i.prototype.scrollTop=function(){var t=e(this.element);return t?t.pageYOffset:this.element.scrollTop},i.extend=function(){function t(t,e){if("object"==typeof t&&"object"==typeof e)for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}for(var e=Array.prototype.slice.call(arguments),i=1,n=e.length;n>i;i++)t(e[0],e[i]);return e[0]},i.inArray=function(t,e,i){return null==e?-1:e.indexOf(t,i)},i.isEmptyObject=function(t){for(var e in t)return!1;return!0},n.adapters.push({name:"noframework",Adapter:i}),n.Adapter=i}();

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sitckynav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sitckynav.js */ "./src/sitckynav.js");
/* harmony import */ var _sitckynav_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sitckynav_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rsvp_form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rsvp_form.js */ "./src/rsvp_form.js");
/* harmony import */ var _rsvp_form_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rsvp_form_js__WEBPACK_IMPORTED_MODULE_2__);





new _rsvp_form_js__WEBPACK_IMPORTED_MODULE_2___default.a();

var sticky_nav = new _sitckynav_js__WEBPACK_IMPORTED_MODULE_1___default.a(document.getElementById("nav"));
sticky_nav.setUp();


/***/ }),

/***/ "./src/rsvp_form.js":
/*!**************************!*\
  !*** ./src/rsvp_form.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! formdata-polyfill */ "./node_modules/formdata-polyfill/formdata.min.js");

function RSVPForm() {
  this.rsvp_form = document.getElementById("rsvp-form");
  this.rsvp_form_loader = document.getElementById("rsvp-form-loader");
  this.rsvp_form_success = document.getElementById("rsvp-form-success");
  this.text_inputs = [
    document.getElementById("rsvp-form-name"),
    document.getElementById("rsvp-form-email"),
    document.getElementById("rsvp-form-number-of-guests")
  ];
  this.radio_inputs = [
    document.getElementById("rsvp-form-will-attend"),
    document.getElementById("rsvp-form-will-not-attend")
  ];

  this.rsvp_form.onsubmit = this.onSubmit.bind(this);
}

RSVPForm.prototype.onSubmit = function(e) {
  e.preventDefault();
  e.stopPropagation();

  if (!this.validate()) {
    return false;
  }

  var form_data = new FormData(this.rsvp_form);

  fetch("/rsvp", {
    method: "POST",
    body: form_data
  })
    .then(this.handleErrors.bind(this))
    .then(this.onSuccess.bind(this))
    .catch(this.onFailure.bind(this));

  this.rsvp_form.classList.add("is-hidden");
  this.rsvp_form_loader.classList.remove("is-hidden");
};

RSVPForm.prototype.validate = function() {
  var errors = 0;

  for (var text_input of this.text_inputs) {
    if (text_input.value === "") {
      text_input.classList.add("error");
      errors += 1;
    } else {
      text_input.classList.remove("error");
    }
  }

  var checked_inputs = 0;
  for (var radio_input of this.radio_inputs) {
    checked_inputs += radio_input.checked ? 1 : 0;
  }

  if (checked_inputs == 0) {
    for (var radio_input of this.radio_inputs) {
      radio_input.parentElement.classList.add("error");
    }
    errors += 1;
  } else {
    for (var radio_input of this.radio_inputs) {
      radio_input.parentElement.classList.remove("error");
    }
  }

  return errors === 0;
};

RSVPForm.prototype.handleErrors = function(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

RSVPForm.prototype.onSuccess = function() {
  this.rsvp_form_loader.classList.add("is-hidden");
  this.rsvp_form_success.classList.remove("is-hidden");
};

RSVPForm.prototype.onFailure = function() {
  this.rsvp_form.classList.remove("is-hidden");
  this.rsvp_form_loader.classList.add("is-hidden");
};

module.exports = RSVPForm;


/***/ }),

/***/ "./src/sitckynav.js":
/*!**************************!*\
  !*** ./src/sitckynav.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! waypoints/lib/noframework.waypoints.min */ "./node_modules/waypoints/lib/noframework.waypoints.min.js");

function StickyNav(element) {
  this.element = element;
  this.sticky = element.cloneNode(true);
}

StickyNav.prototype.setUp = function() {
  this.sticky.classList.add("is-fixed-top", "is-hidden");
  this.element.parentNode.insertBefore(this.sticky, this.element);

  var waypoint = new Waypoint({
    element: this.element,
    handler: () => {
      this.sticky.classList.toggle("is-hidden");
    }
  });
};

module.exports = StickyNav;


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=index.js.map