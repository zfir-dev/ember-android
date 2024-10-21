"use strict"
define("view/app",["exports","@ember/application","ember-resolver","ember-load-initializers","view/config/environment"],(function(e,t,r,i,n){function o(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var i=r.call(e,t||"default")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string")
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class a extends t.default{constructor(...e){super(...e),o(this,"modulePrefix",n.default.modulePrefix),o(this,"podModulePrefix",n.default.podModulePrefix),o(this,"Resolver",r.default)}}e.default=a,(0,i.default)(a,n.default.modulePrefix)})),define("view/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("view/components/ember-android-camera",["exports","@ember/component","@glimmer/component","@ember/object","@ember/service","@ember/template-factory"],(function(e,t,r,i,n,o){var a,l,u
function s(e,t,r,i,n){var o={}
return Object.keys(i).forEach((function(e){o[e]=i[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=r.slice().reverse().reduce((function(r,i){return i(e,t,r)||r}),o),n&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(n):void 0,o.initializer=void 0),void 0===o.initializer?(Object.defineProperty(e,t,o),null):o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const c=(0,o.createTemplateFactory)({id:"BiUwTy6n",block:'[[[11,"button"],[24,4,"button"],[4,[38,1],["click",[30,0,["openCamera"]]],null],[12],[1,"\\n  Open Camera\\n"],[13],[1,"\\n"]],[],false,["button","on"]]',moduleName:"view/components/ember-android-camera.hbs",isStrictMode:!1})
let d=e.default=(a=(0,n.inject)("native-bridge"),l=class extends r.default{constructor(...e){var t,r,i,n
super(...e),t=this,r="nativeBridge",n=this,(i=u)&&Object.defineProperty(t,r,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(n):void 0})}openCamera(){this.nativeBridge.run("EmberAndroidCamera","openCamera",{})}},u=s(l.prototype,"nativeBridge",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s(l.prototype,"openCamera",[i.action],Object.getOwnPropertyDescriptor(l.prototype,"openCamera"),l.prototype),l);(0,t.setComponentTemplate)(c,d)})),define("view/components/ember-android-toast",["exports","@ember/component","@glimmer/component","@ember/object","@ember/service","@ember/template-factory"],(function(e,t,r,i,n,o){var a,l,u
function s(e,t,r,i,n){var o={}
return Object.keys(i).forEach((function(e){o[e]=i[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=r.slice().reverse().reduce((function(r,i){return i(e,t,r)||r}),o),n&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(n):void 0,o.initializer=void 0),void 0===o.initializer?(Object.defineProperty(e,t,o),null):o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const c=(0,o.createTemplateFactory)({id:"3bwViZeW",block:'[[[11,"button"],[24,4,"button"],[4,[38,1],["click",[30,0,["triggerToast"]]],null],[12],[1,"\\n  Show Native Toast\\n"],[13],[1,"\\n"]],[],false,["button","on"]]',moduleName:"view/components/ember-android-toast.hbs",isStrictMode:!1})
let d=e.default=(a=(0,n.inject)("native-bridge"),l=class extends r.default{constructor(...e){var t,r,i,n
super(...e),t=this,r="nativeBridge",n=this,(i=u)&&Object.defineProperty(t,r,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(n):void 0})}triggerToast(){this.nativeBridge.run("EmberAndroidToast","showToast",{message:"Hello from Ember"})}},u=s(l.prototype,"nativeBridge",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s(l.prototype,"triggerToast",[i.action],Object.getOwnPropertyDescriptor(l.prototype,"triggerToast"),l.prototype),l);(0,t.setComponentTemplate)(c,d)})),define("view/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("view/data-adapter",["exports","@ember/array","@ember/debug/data-adapter","@ember/object/observers","@ember/service","@embroider/macros","@ember-data/request-utils/string","@ember-data/store"],(function(e,t,r,i,n,o,a,l){function u(e,t,r){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,r)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var s=Object.defineProperty;((e,t)=>{for(var r in t)s(e,r,{get:t[r],enumerable:!0})})({},{c:()=>v,f:()=>d,g:()=>f,i:()=>m,m:()=>p,n:()=>b,p:()=>g})
var c=new WeakMap
function d(e,t,r,i){return f(e.prototype,t,r,i)}function f(e,t,r,i){let n={configurable:!0,enumerable:!0,writable:!0,initializer:null}
i&&(n.initializer=i)
for(let o of r)n=o(e,t,n)||n
void 0===n.initializer?Object.defineProperty(e,t,n):function(e,t,r){let i=c.get(e)
i||(i=new Map,c.set(e,i)),i.set(t,r)}(e,t,n)}function p({prototype:e},t,r){return b(e,t,r)}function b(e,t,r){let i={...Object.getOwnPropertyDescriptor(e,t)}
for(let n of r)i=n(e,t,i)||i
void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(e):void 0,i.initializer=void 0),Object.defineProperty(e,t,i)}function m(e,t){let r=function(e,t){let r=e.prototype
for(;r;){let e=c.get(r)?.get(t)
if(e)return e
r=r.prototype}}(e.constructor,t)
r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(e):void 0})}function v(e,t){return t.reduce(((e,t)=>t(e)||e),e)}function g(e,t){for(let[r,i,n]of t)"field"===r?y(e,i,n):b(e,i,n)
return e}function y(e,t,r){let i={configurable:!0,enumerable:!0,writable:!0,initializer:()=>Object.getOwnPropertyDescriptor(e,t)?.value}
for(let n of r)i=n(e,t,i)||i
i.initializer&&(i.value=i.initializer.call(e),delete i.initializer),Object.defineProperty(e,t,i)}const h=new WeakMap
function w(){const e={},t=[],r=(0,l.recordIdentifierFor)(this),i=this.store.schema.fields(r),n={name:"Attributes",properties:["id"],expand:!0},o=n.properties,a=[n]
for(const l of i.values())switch(l.kind){case"attribute":o.push(l.name)
break
case"belongsTo":case"hasMany":{let r=e[l.kind]
void 0===r&&(r=e[l.kind]=[],a.push({name:l.kind,properties:r,expand:!0})),r.push(l.name),t.push(l.name)
break}}return a.push({name:"Flags",properties:["isLoaded","hasDirtyAttributes","isSaving","isDeleted","isError","isNew","isValid"],expand:!1}),{propertyInfo:{includeOtherProperties:!0,groups:a,expensiveProperties:t}}}var P=new WeakMap
class O extends r.default{constructor(...e){super(...e),u(this,P,void m(this,"store"))}getFilters(){return[{name:"isNew",desc:"New"},{name:"isModified",desc:"Modified"},{name:"isClean",desc:"Clean"}]}_nameToClass(e){return this.store.modelFor(e)}watchModelTypes(e,t){const{store:r}=this,i=function(e){let t=h.get(e)
return void 0===t&&(t=new Map,h.set(e,t)),t}(r),n=r.notifications.subscribe("resource",((n,a)=>{"added"===a&&this.watchTypeIfUnseen(r,i,n.type,e,t,o)})),o=[()=>{r.notifications.unsubscribe(n)}]
Object.keys(r.identifierCache._cache.resourcesByType).forEach((e=>{i.set(e,!1)})),i.forEach(((n,a)=>{this.watchTypeIfUnseen(r,i,a,e,t,o)}))
const a=()=>{o.forEach((e=>e())),i.forEach(((e,t)=>{i.set(t,!1)})),this.releaseMethods.removeObject(a)}
return this.releaseMethods.pushObject(a),a}watchTypeIfUnseen(e,t,r,i,n,o){if(!0!==t.get(r)){const a=e.modelFor(r)
a.prototype._debugInfo=w
const l=this.wrapModelType(a,r)
o.push(this.observeModelType(r,n)),i([l]),t.set(r,!0)}}columnNameToDesc(e){return(0,a.capitalize)((0,a.underscore)(e).replace(/_/g," ").trim())}columnsForType(e){const t=[{name:"id",desc:"Id"}]
let r=0
return e.attributes.forEach(((e,i)=>{if(r++>this.attributeLimit)return!1
const n=this.columnNameToDesc(i)
t.push({name:i,desc:n})})),t}getRecords(e,t){if(arguments.length<2){const r=e._debugContainerKey
if(r){const e=r.match(/model:(.*)/)
null!==e&&(t=e[1])}}return!(0,o.macroCondition)((0,o.getGlobalConfig)().WarpDrive.env.DEBUG)||(e=>{if(!e)throw new Error("Cannot find model name. Please upgrade to Ember.js >= 1.13 for Ember Inspector support")})(!!t),this.store.peekAll(t)}getRecordColumnValues(e){let t=0
const r={id:e.id}
return e.eachAttribute((i=>{if(t++>this.attributeLimit)return!1
r[i]=e[i]})),r}getRecordKeywords(e){const r=[e.id]
return e.eachAttribute((t=>{r.push(e[t])})),(0,t.A)(r)}getRecordFilterValues(e){return{isNew:e.isNew,isModified:e.hasDirtyAttributes&&!e.isNew,isClean:!e.hasDirtyAttributes}}getRecordColor(e){let t="black"
return e.isNew?t="green":e.hasDirtyAttributes&&(t="blue"),t}observeRecord(e,t){const r=[],n=["id","isNew","hasDirtyAttributes"]
e.eachAttribute((e=>n.push(e))),n.forEach((n=>{const o=()=>{t(this.wrapRecord(e))};(0,i.addObserver)(e,n,o),r.push((function(){(0,i.removeObserver)(e,n,o)}))}))
return function(){r.forEach((e=>e()))}}}f(O.prototype,"store",[(0,n.inject)("store")])
e.default=(0,o.macroCondition)((0,o.getGlobalConfig)().WarpDrive.includeDataAdapter)?O:null})),define("view/helpers/app-version",["exports","@ember/component/helper","view/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,r,i){function n(e,t={}){const n=r.default.APP.version
let o=t.versionOnly||t.hideSha,a=t.shaOnly||t.hideVersion,l=null
return o&&(t.showExtended&&(l=n.match(i.versionExtendedRegExp)),l||(l=n.match(i.versionRegExp))),a&&(l=n.match(i.shaRegExp)),l?l[0]:n}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=n,e.default=void 0
e.default=(0,t.helper)(n)})),define("view/helpers/page-title",["exports","ember-page-title/helpers/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("view/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","view/config/environment"],(function(e,t,r){let i,n
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r.default.APP&&(i=r.default.APP.name,n=r.default.APP.version)
e.default={name:"App Version",initialize:(0,t.default)(i,n)}})),define("view/initializers/ember-data",["exports","@ember-data/request-utils/deprecation-support"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={name:"ember-data",initialize(e){e.registerOptionsForType("serializer",{singleton:!1}),e.registerOptionsForType("adapter",{singleton:!1})}}})),define("view/router",["exports","@ember/routing/router","view/config/environment"],(function(e,t,r){function i(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var i=r.call(e,t||"default")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string")
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class n extends t.default{constructor(...e){super(...e),i(this,"location",r.default.locationType),i(this,"rootURL",r.default.rootURL)}}e.default=n,n.map((function(){}))})),define("view/services/native-bridge",["exports","@ember/service"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class r extends t.default{run(e,t,r={}){if(e&&t)if(window.nativeBridge&&"function"==typeof window.nativeBridge.run)try{window.nativeBridge.run(e,t,JSON.stringify(r))}catch(i){console.error("Error calling native bridge:",i)}else console.warn("Native bridge is not available.")}}e.default=r})),define("view/services/page-title",["exports","ember-page-title/services/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("view/services/store",["exports","@ember/debug","ember-data/store"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.default}})})),define("view/templates/application",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,t.createTemplateFactory)({id:"y9mDClYK",block:'[[[1,[28,[35,0],["View"],null]],[1,"\\n\\n"],[46,[28,[37,2],null,null],null,null,null],[1,"\\n\\n"],[8,[39,3],null,null,null],[1,"\\n"],[1,"\\n"]],[],false,["page-title","component","-outlet","welcome-page"]]',moduleName:"view/templates/application.hbs",isStrictMode:!1})})),define("view/transforms/boolean",["exports","@ember/debug","@ember-data/serializer/transform"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.BooleanTransform}})})),define("view/transforms/date",["exports","@ember/debug","@ember-data/serializer/transform"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.DateTransform}})})),define("view/transforms/number",["exports","@ember/debug","@ember-data/serializer/transform"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.NumberTransform}})})),define("view/transforms/string",["exports","@ember/debug","@ember-data/serializer/transform"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.StringTransform}})})),define("view/config/environment",[],(function(){try{var e="view/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(i){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("view/app").default.create({name:"view",version:"0.0.0+d9ac7a31"})
