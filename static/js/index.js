!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=4)}([,function(t,e,r){},function(t,e){
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(n){if(!n)throw new Error("No options passed to Waypoint constructor");if(!n.element)throw new Error("No element option passed to Waypoint constructor");if(!n.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,n),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=n.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),r[this.key]=this,e+=1}var e=0,r={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete r[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var n in r)e.push(r[n]);for(var o=0,i=e.length;i>o;o++)e[o][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){for(var e in t.Context.refreshAll(),r)r[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=o.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+r,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,n[t.waypointContextKey]=this,r+=1,o.windowContext||(o.windowContext=!0,o.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var r=0,n={},o=window.Waypoint,i=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),r=this.element==this.element.window;t&&e&&!r&&(this.adapter.off(".waypoints"),delete n[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,o.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||o.isTouch)&&(e.didScroll=!0,o.requestAnimationFrame(t))})},e.prototype.handleResize=function(){o.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var r in e){var n=e[r],o=n.newScroll>n.oldScroll?n.forward:n.backward;for(var i in this.waypoints[r]){var s=this.waypoints[r][i];if(null!==s.triggerPoint){var a=n.oldScroll<s.triggerPoint,l=n.newScroll>=s.triggerPoint;(a&&l||!a&&!l)&&(s.queueTrigger(o),t[s.group.id]=s.group)}}}for(var h in t)t[h].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?o.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?o.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var r in this.waypoints[e])t.push(this.waypoints[e][r]);for(var n=0,o=t.length;o>n;n++)t[n].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,r=e?void 0:this.adapter.offset(),n={};for(var i in this.handleScroll(),t={horizontal:{contextOffset:e?0:r.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:r.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}}){var s=t[i];for(var a in this.waypoints[i]){var l,h,u,f,p=this.waypoints[i][a],d=p.options.offset,c=p.triggerPoint,y=0,w=null==c;p.element!==p.element.window&&(y=p.adapter.offset()[s.offsetProp]),"function"==typeof d?d=d.apply(p):"string"==typeof d&&(d=parseFloat(d),p.options.offset.indexOf("%")>-1&&(d=Math.ceil(s.contextDimension*d/100))),l=s.contextScroll-s.contextOffset,p.triggerPoint=Math.floor(y+l-d),h=c<s.oldScroll,u=p.triggerPoint>=s.oldScroll,f=!h&&!u,!w&&(h&&u)?(p.queueTrigger(s.backward),n[p.group.id]=p.group):!w&&f?(p.queueTrigger(s.forward),n[p.group.id]=p.group):w&&s.oldScroll>=p.triggerPoint&&(p.queueTrigger(s.forward),n[p.group.id]=p.group)}}return o.requestAnimationFrame(function(){for(var t in n)n[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in n)n[t].refresh()},e.findByElement=function(t){return n[t.waypointContextKey]},window.onload=function(){i&&i(),e.refreshAll()},o.requestAnimationFrame=function(e){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t).call(window,e)},o.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function r(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),n[this.axis][this.name]=this}var n={vertical:{},horizontal:{}},o=window.Waypoint;r.prototype.add=function(t){this.waypoints.push(t)},r.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},r.prototype.flushTriggers=function(){for(var r in this.triggerQueues){var n=this.triggerQueues[r],o="up"===r||"left"===r;n.sort(o?e:t);for(var i=0,s=n.length;s>i;i+=1){var a=n[i];(a.options.continuous||i===n.length-1)&&a.trigger([r])}}this.clearTriggerQueues()},r.prototype.next=function(e){this.waypoints.sort(t);var r=o.Adapter.inArray(e,this.waypoints);return r===this.waypoints.length-1?null:this.waypoints[r+1]},r.prototype.previous=function(e){this.waypoints.sort(t);var r=o.Adapter.inArray(e,this.waypoints);return r?this.waypoints[r-1]:null},r.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},r.prototype.remove=function(t){var e=o.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},r.prototype.first=function(){return this.waypoints[0]},r.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},r.findOrCreate=function(t){return n[t.axis][t.name]||new r(t)},o.Group=r}(),function(){"use strict";function t(t){return t===t.window}function e(e){return t(e)?e:e.defaultView}function r(t){this.element=t,this.handlers={}}var n=window.Waypoint;r.prototype.innerHeight=function(){return t(this.element)?this.element.innerHeight:this.element.clientHeight},r.prototype.innerWidth=function(){return t(this.element)?this.element.innerWidth:this.element.clientWidth},r.prototype.off=function(t,e){function r(t,e,r){for(var n=0,o=e.length-1;o>n;n++){var i=e[n];r&&r!==i||t.removeEventListener(i)}}var n=t.split("."),o=n[0],i=n[1],s=this.element;if(i&&this.handlers[i]&&o)r(s,this.handlers[i][o],e),this.handlers[i][o]=[];else if(o)for(var a in this.handlers)r(s,this.handlers[a][o]||[],e),this.handlers[a][o]=[];else if(i&&this.handlers[i]){for(var l in this.handlers[i])r(s,this.handlers[i][l],e);this.handlers[i]={}}},r.prototype.offset=function(){if(!this.element.ownerDocument)return null;var t=this.element.ownerDocument.documentElement,r=e(this.element.ownerDocument),n={top:0,left:0};return this.element.getBoundingClientRect&&(n=this.element.getBoundingClientRect()),{top:n.top+r.pageYOffset-t.clientTop,left:n.left+r.pageXOffset-t.clientLeft}},r.prototype.on=function(t,e){var r=t.split("."),n=r[0],o=r[1]||"__default",i=this.handlers[o]=this.handlers[o]||{};(i[n]=i[n]||[]).push(e),this.element.addEventListener(n,e)},r.prototype.outerHeight=function(e){var r,n=this.innerHeight();return e&&!t(this.element)&&(r=window.getComputedStyle(this.element),n+=parseInt(r.marginTop,10),n+=parseInt(r.marginBottom,10)),n},r.prototype.outerWidth=function(e){var r,n=this.innerWidth();return e&&!t(this.element)&&(r=window.getComputedStyle(this.element),n+=parseInt(r.marginLeft,10),n+=parseInt(r.marginRight,10)),n},r.prototype.scrollLeft=function(){var t=e(this.element);return t?t.pageXOffset:this.element.scrollLeft},r.prototype.scrollTop=function(){var t=e(this.element);return t?t.pageYOffset:this.element.scrollTop},r.extend=function(){function t(t,e){if("object"==typeof t&&"object"==typeof e)for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return t}for(var e=Array.prototype.slice.call(arguments),r=1,n=e.length;n>r;r++)t(e[0],e[r]);return e[0]},r.inArray=function(t,e,r){return null==e?-1:e.indexOf(t,r)},r.isEmptyObject=function(t){for(var e in t)return!1;return!0},n.adapters.push({name:"noframework",Adapter:r}),n.Adapter=r}()},function(t,e){!function(t){"use strict";if(!t.fetch){var e={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(e.arrayBuffer)var r=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],n=function(t){return t&&DataView.prototype.isPrototypeOf(t)},o=ArrayBuffer.isView||function(t){return t&&r.indexOf(Object.prototype.toString.call(t))>-1};u.prototype.append=function(t,e){t=a(t),e=l(e);var r=this.map[t];this.map[t]=r?r+","+e:e},u.prototype.delete=function(t){delete this.map[a(t)]},u.prototype.get=function(t){return t=a(t),this.has(t)?this.map[t]:null},u.prototype.has=function(t){return this.map.hasOwnProperty(a(t))},u.prototype.set=function(t,e){this.map[a(t)]=l(e)},u.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},u.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),h(t)},u.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),h(t)},u.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),h(t)},e.iterable&&(u.prototype[Symbol.iterator]=u.prototype.entries);var i=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];w.prototype.clone=function(){return new w(this,{body:this._bodyInit})},y.call(w.prototype),y.call(g.prototype),g.prototype.clone=function(){return new g(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new u(this.headers),url:this.url})},g.error=function(){var t=new g(null,{status:0,statusText:""});return t.type="error",t};var s=[301,302,303,307,308];g.redirect=function(t,e){if(-1===s.indexOf(e))throw new RangeError("Invalid status code");return new g(null,{status:e,headers:{location:t}})},t.Headers=u,t.Request=w,t.Response=g,t.fetch=function(t,r){return new Promise(function(n,o){var i=new w(t,r),s=new XMLHttpRequest;s.onload=function(){var t,e,r={status:s.status,statusText:s.statusText,headers:(t=s.getAllResponseHeaders()||"",e=new u,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e)};r.url="responseURL"in s?s.responseURL:r.headers.get("X-Request-URL");var o="response"in s?s.response:s.responseText;n(new g(o,r))},s.onerror=function(){o(new TypeError("Network request failed"))},s.ontimeout=function(){o(new TypeError("Network request failed"))},s.open(i.method,i.url,!0),"include"===i.credentials?s.withCredentials=!0:"omit"===i.credentials&&(s.withCredentials=!1),"responseType"in s&&e.blob&&(s.responseType="blob"),i.headers.forEach(function(t,e){s.setRequestHeader(e,t)}),s.send(void 0===i._bodyInit?null:i._bodyInit)})},t.fetch.polyfill=!0}function a(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function l(t){return"string"!=typeof t&&(t=String(t)),t}function h(t){var r={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return e.iterable&&(r[Symbol.iterator]=function(){return r}),r}function u(t){this.map={},t instanceof u?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function f(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function p(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function d(t){var e=new FileReader,r=p(e);return e.readAsArrayBuffer(t),r}function c(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function y(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(e.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(e.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(e.arrayBuffer&&e.blob&&n(t))this._bodyArrayBuffer=c(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!e.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!o(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=c(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},e.blob&&(this.blob=function(){var t=f(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(d)}),this.text=function(){var t,e,r,n=f(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=p(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},e.formData&&(this.formData=function(){return this.text().then(m)}),this.json=function(){return this.text().then(JSON.parse)},this}function w(t,e){var r,n,o=(e=e||{}).body;if(t instanceof w){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new u(t.headers)),this.method=t.method,this.mode=t.mode,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new u(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),i.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function m(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function g(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new u(e.headers),this.url=e.url||"",this._initBody(t)}}("undefined"!=typeof self?self:this)},function(t,e,r){"use strict";r.r(e);r(3),r(1);r(2);new Waypoint({element:document.getElementById("nav"),handler:function(){document.getElementById("nav-sticky").classList.toggle("is-hidden")}});var n=document.getElementById("rsvp-form");n.onsubmit=function(t){t.preventDefault(),t.stopPropagation(),fetch("/rsvp",{method:"POST",body:new FormData(n)})}}]);
//# sourceMappingURL=index.js.map