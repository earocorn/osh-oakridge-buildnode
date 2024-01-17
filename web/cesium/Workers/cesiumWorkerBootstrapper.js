/*! For license information please see cesiumWorkerBootstrapper.js.LICENSE.txt */
function setTimeout(e){e()}var requirejs,require,define;typeof self>"u"&&(self={}),self.onmessage=function(e){var t=e.data;require(t.loaderConfig,[t.workerModule],(function(e){self.onmessage=e,self.CESIUM_BASE_URL=t.loaderConfig.baseUrl}))},function(global){var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version="2.1.20",commentRegExp=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,ap=Array.prototype,isBrowser=!!(typeof window<"u"&&typeof navigator<"u"&&window.document),isWebWorker=!isBrowser&&typeof importScripts<"u",readyRegExp=isBrowser&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera=typeof opera<"u"&&"[object Opera]"===opera.toString(),contexts={},cfg={},globalDefQueue=[],useInteractive=!1;function isFunction(e){return"[object Function]"===ostring.call(e)}function isArray(e){return"[object Array]"===ostring.call(e)}function each(e,t){var r;if(e)for(r=0;r<e.length&&(!e[r]||!t(e[r],r,e));r+=1);}function eachReverse(e,t){var r;if(e)for(r=e.length-1;r>-1&&(!e[r]||!t(e[r],r,e));r-=1);}function hasProp(e,t){return hasOwn.call(e,t)}function getOwn(e,t){return hasProp(e,t)&&e[t]}function eachProp(e,t){var r;for(r in e)if(hasProp(e,r)&&t(e[r],r))break}function mixin(e,t,r,i){return t&&eachProp(t,(function(t,n){(r||!hasProp(e,n))&&(!i||"object"!=typeof t||!t||isArray(t)||isFunction(t)||t instanceof RegExp?e[n]=t:(e[n]||(e[n]={}),mixin(e[n],t,r,i)))})),e}function bind(e,t){return function(){return t.apply(e,arguments)}}function scripts(){return document.getElementsByTagName("script")}function defaultOnError(e){throw e}function getGlobal(e){if(!e)return e;var t=global;return each(e.split("."),(function(e){t=t[e]})),t}function makeError(e,t,r,i){var n=new Error(t+"\nhttp://requirejs.org/docs/errors.html#"+e);return n.requireType=e,n.requireModules=i,r&&(n.originalError=r),n}if(!(typeof define<"u")){if(typeof requirejs<"u"){if(isFunction(requirejs))return;cfg=requirejs,requirejs=void 0}typeof require<"u"&&!isFunction(require)&&(cfg=require,require=void 0),req=requirejs=function(e,t,r,i){var n,o,a=defContextName;return!isArray(e)&&"string"!=typeof e&&(o=e,isArray(t)?(e=t,t=r,r=i):e=[]),o&&o.context&&(a=o.context),(n=getOwn(contexts,a))||(n=contexts[a]=req.s.newContext(a)),o&&n.configure(o),n.require(e,t,r)},req.config=function(e){return req(e)},req.nextTick=typeof setTimeout<"u"?function(e){setTimeout(e,4)}:function(e){e()},require||(require=req),req.version=version,req.jsExtRegExp=/^\/|:|\?|\.js$/,req.isBrowser=isBrowser,s=req.s={contexts,newContext},req({}),each(["toUrl","undef","defined","specified"],(function(e){req[e]=function(){var t=contexts[defContextName];return t.require[e].apply(t,arguments)}})),isBrowser&&(head=s.head=document.getElementsByTagName("head")[0],baseElement=document.getElementsByTagName("base")[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=defaultOnError,req.createNode=function(e,t,r){var i=e.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");return i.type=e.scriptType||"text/javascript",i.charset="utf-8",i.async=!0,i},req.load=function(e,t,r){var i,n=e&&e.config||{};if(isBrowser)return i=req.createNode(n,t,r),n.onNodeCreated&&n.onNodeCreated(i,n,t,r),i.setAttribute("data-requirecontext",e.contextName),i.setAttribute("data-requiremodule",t),!i.attachEvent||i.attachEvent.toString&&i.attachEvent.toString().indexOf("[native code")<0||isOpera?(i.addEventListener("load",e.onScriptLoad,!1),i.addEventListener("error",e.onScriptError,!1)):(useInteractive=!0,i.attachEvent("onreadystatechange",e.onScriptLoad)),i.src=r,currentlyAddingScript=i,baseElement?head.insertBefore(i,baseElement):head.appendChild(i),currentlyAddingScript=null,i;if(isWebWorker)try{importScripts(r),e.completeLoad(t)}catch(i){e.onError(makeError("importscripts","importScripts failed for "+t+" at "+r,i,[t]))}},isBrowser&&!cfg.skipDataMain&&eachReverse(scripts(),(function(e){if(head||(head=e.parentNode),dataMain=e.getAttribute("data-main"))return mainScript=dataMain,cfg.baseUrl||(src=mainScript.split("/"),mainScript=src.pop(),subPath=src.length?src.join("/")+"/":"./",cfg.baseUrl=subPath),mainScript=mainScript.replace(jsSuffixRegExp,""),req.jsExtRegExp.test(mainScript)&&(mainScript=dataMain),cfg.deps=cfg.deps?cfg.deps.concat(mainScript):[mainScript],!0})),define=function(e,t,r){var i,n;"string"!=typeof e&&(r=t,t=e,e=null),isArray(t)||(r=t,t=null),!t&&isFunction(r)&&(t=[],r.length&&(r.toString().replace(commentRegExp,"").replace(cjsRequireRegExp,(function(e,r){t.push(r)})),t=(1===r.length?["require"]:["require","exports","module"]).concat(t))),useInteractive&&(i=currentlyAddingScript||getInteractiveScript())&&(e||(e=i.getAttribute("data-requiremodule")),n=contexts[i.getAttribute("data-requirecontext")]),n?(n.defQueue.push([e,t,r]),n.defQueueMap[e]=!0):globalDefQueue.push([e,t,r])},define.amd={jQuery:!0},req.exec=function(text){return eval(text)},req(cfg)}function newContext(e){var t,r,i,n,o,a={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},s={},u={},c={},p=[],d={},f={},l={},h=1,m=1;function g(e,t,r){var i,n,o,s,u,c,p,d,f,l,h=t&&t.split("/"),m=a.map,g=m&&m["*"];if(e&&(c=(e=e.split("/")).length-1,a.nodeIdCompat&&jsSuffixRegExp.test(e[c])&&(e[c]=e[c].replace(jsSuffixRegExp,"")),"."===e[0].charAt(0)&&h&&(e=h.slice(0,h.length-1).concat(e)),function(e){var t,r;for(t=0;t<e.length;t++)if("."===(r=e[t]))e.splice(t,1),t-=1;else if(".."===r){if(0===t||1===t&&".."===e[2]||".."===e[t-1])continue;t>0&&(e.splice(t-1,2),t-=2)}}(e),e=e.join("/")),r&&m&&(h||g)){e:for(o=(n=e.split("/")).length;o>0;o-=1){if(u=n.slice(0,o).join("/"),h)for(s=h.length;s>0;s-=1)if((i=getOwn(m,h.slice(0,s).join("/")))&&(i=getOwn(i,u))){p=i,d=o;break e}!f&&g&&getOwn(g,u)&&(f=getOwn(g,u),l=o)}!p&&f&&(p=f,d=l),p&&(n.splice(0,d,p),e=n.join("/"))}return getOwn(a.pkgs,e)||e}function v(e){isBrowser&&each(scripts(),(function(t){if(t.getAttribute("data-requiremodule")===e&&t.getAttribute("data-requirecontext")===i.contextName)return t.parentNode.removeChild(t),!0}))}function x(e){var t=getOwn(a.paths,e);if(t&&isArray(t)&&t.length>1)return t.shift(),i.require.undef(e),i.makeRequire(null,{skipMap:!0})([e]),!0}function b(e){var t,r=e?e.indexOf("!"):-1;return r>-1&&(t=e.substring(0,r),e=e.substring(r+1,e.length)),[t,e]}function q(e,t,r,n){var o,a,s,u,c=null,p=t?t.name:null,f=e,l=!0,v="";return e||(l=!1,e="_@r"+(h+=1)),c=(u=b(e))[0],e=u[1],c&&(c=g(c,p,n),a=getOwn(d,c)),e&&(c?v=a&&a.normalize?a.normalize(e,(function(e){return g(e,p,n)})):-1===e.indexOf("!")?g(e,p,n):e:(c=(u=b(v=g(e,p,n)))[0],v=u[1],r=!0,o=i.nameToUrl(v))),{prefix:c,name:v,parentMap:t,unnormalized:!!(s=!c||a||r?"":"_unnormalized"+(m+=1)),url:o,originalName:f,isDefine:l,id:(c?c+"!"+v:v)+s}}function E(e){var t=e.id,r=getOwn(s,t);return r||(r=s[t]=new i.Module(e)),r}function w(e,t,r){var i=e.id,n=getOwn(s,i);!hasProp(d,i)||n&&!n.defineEmitComplete?(n=E(e)).error&&"error"===t?r(n.error):n.on(t,r):"defined"===t&&r(d[i])}function y(e,t){var r=e.requireModules,i=!1;t?t(e):(each(r,(function(t){var r=getOwn(s,t);r&&(r.error=e,r.events.error&&(i=!0,r.emit("error",e)))})),i||req.onError(e))}function S(){globalDefQueue.length&&(each(globalDefQueue,(function(e){var t=e[0];"string"==typeof t&&(i.defQueueMap[t]=!0),p.push(e)})),globalDefQueue=[])}function k(e){delete s[e],delete u[e]}function M(e,t,r){var i=e.map.id;e.error?e.emit("error",e.error):(t[i]=!0,each(e.depMaps,(function(i,n){var o=i.id,a=getOwn(s,o);a&&!e.depMatched[n]&&!r[o]&&(getOwn(t,o)?(e.defineDep(n,d[o]),e.check()):M(a,t,r))})),r[i]=!0)}function O(){var e,r,n=1e3*a.waitSeconds,s=n&&i.startTime+n<(new Date).getTime(),c=[],p=[],d=!1,f=!0;if(!t){if(t=!0,eachProp(u,(function(e){var t=e.map,i=t.id;if(e.enabled&&(t.isDefine||p.push(e),!e.error))if(!e.inited&&s)x(i)?(r=!0,d=!0):(c.push(i),v(i));else if(!e.inited&&e.fetched&&t.isDefine&&(d=!0,!t.prefix))return f=!1})),s&&c.length)return(e=makeError("timeout","Load timeout for modules: "+c,null,c)).contextName=i.contextName,y(e);f&&each(p,(function(e){M(e,{},{})})),(!s||r)&&d&&(isBrowser||isWebWorker)&&!o&&(o=setTimeout((function(){o=0,O()}),50)),t=!1}}function j(e){hasProp(d,e[0])||E(q(e[0],null,!0)).init(e[1],e[2])}function P(e,t,r,i){e.detachEvent&&!isOpera?i&&e.detachEvent(i,t):e.removeEventListener(r,t,!1)}function R(e){var t=e.currentTarget||e.srcElement;return P(t,i.onScriptLoad,"load","onreadystatechange"),P(t,i.onScriptError,"error"),{node:t,id:t&&t.getAttribute("data-requiremodule")}}function A(){var e;for(S();p.length;){if(null===(e=p.shift())[0])return y(makeError("mismatch","Mismatched anonymous define() module: "+e[e.length-1]));j(e)}i.defQueueMap={}}return n={require:function(e){return e.require?e.require:e.require=i.makeRequire(e.map)},exports:function(e){if(e.usingExports=!0,e.map.isDefine)return e.exports?d[e.map.id]=e.exports:e.exports=d[e.map.id]={}},module:function(e){return e.module?e.module:e.module={id:e.map.id,uri:e.map.url,config:function(){return getOwn(a.config,e.map.id)||{}},exports:e.exports||(e.exports={})}}},(r=function(e){this.events=getOwn(c,e.id)||{},this.map=e,this.shim=getOwn(a.shim,e.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0}).prototype={init:function(e,t,r,i){i=i||{},!this.inited&&(this.factory=t,r?this.on("error",r):this.events.error&&(r=bind(this,(function(e){this.emit("error",e)}))),this.depMaps=e&&e.slice(0),this.errback=r,this.inited=!0,this.ignore=i.ignore,i.enabled||this.enabled?this.enable():this.check())},defineDep:function(e,t){this.depMatched[e]||(this.depMatched[e]=!0,this.depCount-=1,this.depExports[e]=t)},fetch:function(){if(!this.fetched){this.fetched=!0,i.startTime=(new Date).getTime();var e=this.map;if(!this.shim)return e.prefix?this.callPlugin():this.load();i.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],bind(this,(function(){return e.prefix?this.callPlugin():this.load()})))}},load:function(){var e=this.map.url;f[e]||(f[e]=!0,i.load(this.map.id,e))},check:function(){if(this.enabled&&!this.enabling){var e,t,r=this.map.id,n=this.depExports,o=this.exports,a=this.factory;if(this.inited){if(this.error)this.emit("error",this.error);else if(!this.defining){if(this.defining=!0,this.depCount<1&&!this.defined){if(isFunction(a)){if(this.events.error&&this.map.isDefine||req.onError!==defaultOnError)try{o=i.execCb(r,a,n,o)}catch(t){e=t}else o=i.execCb(r,a,n,o);if(this.map.isDefine&&void 0===o&&((t=this.module)?o=t.exports:this.usingExports&&(o=this.exports)),e)return e.requireMap=this.map,e.requireModules=this.map.isDefine?[this.map.id]:null,e.requireType=this.map.isDefine?"define":"require",y(this.error=e)}else o=a;this.exports=o,this.map.isDefine&&!this.ignore&&(d[r]=o,req.onResourceLoad&&req.onResourceLoad(i,this.map,this.depMaps)),k(r),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else hasProp(i.defQueueMap,r)||this.fetch()}},callPlugin:function(){var e=this.map,t=e.id,r=q(e.prefix);this.depMaps.push(r),w(r,"defined",bind(this,(function(r){var n,o,u,c=getOwn(l,this.map.id),p=this.map.name,d=this.map.parentMap?this.map.parentMap.name:null,f=i.makeRequire(e.parentMap,{enableBuildCallback:!0});return this.map.unnormalized?(r.normalize&&(p=r.normalize(p,(function(e){return g(e,d,!0)}))||""),w(o=q(e.prefix+"!"+p,this.map.parentMap),"defined",bind(this,(function(e){this.init([],(function(){return e}),null,{enabled:!0,ignore:!0})}))),void((u=getOwn(s,o.id))&&(this.depMaps.push(o),this.events.error&&u.on("error",bind(this,(function(e){this.emit("error",e)}))),u.enable()))):c?(this.map.url=i.nameToUrl(c),void this.load()):((n=bind(this,(function(e){this.init([],(function(){return e}),null,{enabled:!0})}))).error=bind(this,(function(e){this.inited=!0,this.error=e,e.requireModules=[t],eachProp(s,(function(e){0===e.map.id.indexOf(t+"_unnormalized")&&k(e.map.id)})),y(e)})),n.fromText=bind(this,(function(r,o){var s=e.name,u=q(s),c=useInteractive;o&&(r=o),c&&(useInteractive=!1),E(u),hasProp(a.config,t)&&(a.config[s]=a.config[t]);try{req.exec(r)}catch(e){return y(makeError("fromtexteval","fromText eval for "+t+" failed: "+e,e,[t]))}c&&(useInteractive=!0),this.depMaps.push(u),i.completeLoad(s),f([s],n)})),void r.load(e.name,f,n,a))}))),i.enable(r,this),this.pluginMaps[r.id]=r},enable:function(){u[this.map.id]=this,this.enabled=!0,this.enabling=!0,each(this.depMaps,bind(this,(function(e,t){var r,o,a;if("string"==typeof e){if(e=q(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[t]=e,a=getOwn(n,e.id))return void(this.depExports[t]=a(this));this.depCount+=1,w(e,"defined",bind(this,(function(e){this.undefed||(this.defineDep(t,e),this.check())}))),this.errback?w(e,"error",bind(this,this.errback)):this.events.error&&w(e,"error",bind(this,(function(e){this.emit("error",e)})))}r=e.id,o=s[r],!hasProp(n,r)&&o&&!o.enabled&&i.enable(e,this)}))),eachProp(this.pluginMaps,bind(this,(function(e){var t=getOwn(s,e.id);t&&!t.enabled&&i.enable(e,this)}))),this.enabling=!1,this.check()},on:function(e,t){var r=this.events[e];r||(r=this.events[e]=[]),r.push(t)},emit:function(e,t){each(this.events[e],(function(e){e(t)})),"error"===e&&delete this.events[e]}},i={config:a,contextName:e,registry:s,defined:d,urlFetched:f,defQueue:p,defQueueMap:{},Module:r,makeModuleMap:q,nextTick:req.nextTick,onError:y,configure:function(e){e.baseUrl&&"/"!==e.baseUrl.charAt(e.baseUrl.length-1)&&(e.baseUrl+="/");var t=a.shim,r={paths:!0,bundles:!0,config:!0,map:!0};eachProp(e,(function(e,t){r[t]?(a[t]||(a[t]={}),mixin(a[t],e,!0,!0)):a[t]=e})),e.bundles&&eachProp(e.bundles,(function(e,t){each(e,(function(e){e!==t&&(l[e]=t)}))})),e.shim&&(eachProp(e.shim,(function(e,r){isArray(e)&&(e={deps:e}),(e.exports||e.init)&&!e.exportsFn&&(e.exportsFn=i.makeShimExports(e)),t[r]=e})),a.shim=t),e.packages&&each(e.packages,(function(e){var t;t=(e="string"==typeof e?{name:e}:e).name,e.location&&(a.paths[t]=e.location),a.pkgs[t]=e.name+"/"+(e.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")})),eachProp(s,(function(e,t){!e.inited&&!e.map.unnormalized&&(e.map=q(t,null,!0))})),(e.deps||e.callback)&&i.require(e.deps||[],e.callback)},makeShimExports:function(e){return function(){var t;return e.init&&(t=e.init.apply(global,arguments)),t||e.exports&&getGlobal(e.exports)}},makeRequire:function(t,r){function o(a,u,c){var p,f;return r.enableBuildCallback&&u&&isFunction(u)&&(u.__requireJsBuild=!0),"string"==typeof a?isFunction(u)?y(makeError("requireargs","Invalid require call"),c):t&&hasProp(n,a)?n[a](s[t.id]):req.get?req.get(i,a,t,o):(p=q(a,t,!1,!0).id,hasProp(d,p)?d[p]:y(makeError("notloaded",'Module name "'+p+'" has not been loaded yet for context: '+e+(t?"":". Use require([])")))):(A(),i.nextTick((function(){A(),(f=E(q(null,t))).skipMap=r.skipMap,f.init(a,u,c,{enabled:!0}),O()})),o)}return r=r||{},mixin(o,{isBrowser,toUrl:function(e){var r,n=e.lastIndexOf("."),o=e.split("/")[0];return-1!==n&&(!("."===o||".."===o)||n>1)&&(r=e.substring(n,e.length),e=e.substring(0,n)),i.nameToUrl(g(e,t&&t.id,!0),r,!0)},defined:function(e){return hasProp(d,q(e,t,!1,!0).id)},specified:function(e){return e=q(e,t,!1,!0).id,hasProp(d,e)||hasProp(s,e)}}),t||(o.undef=function(e){S();var r=q(e,t,!0),n=getOwn(s,e);n.undefed=!0,v(e),delete d[e],delete f[r.url],delete c[e],eachReverse(p,(function(t,r){t[0]===e&&p.splice(r,1)})),delete i.defQueueMap[e],n&&(n.events.defined&&(c[e]=n.events),k(e))}),o},enable:function(e){getOwn(s,e.id)&&E(e).enable()},completeLoad:function(e){var t,r,n,o=getOwn(a.shim,e)||{},u=o.exports;for(S();p.length;){if(null===(r=p.shift())[0]){if(r[0]=e,t)break;t=!0}else r[0]===e&&(t=!0);j(r)}if(i.defQueueMap={},n=getOwn(s,e),!t&&!hasProp(d,e)&&n&&!n.inited){if(a.enforceDefine&&(!u||!getGlobal(u)))return x(e)?void 0:y(makeError("nodefine","No define call for "+e,null,[e]));j([e,o.deps||[],o.exportsFn])}O()},nameToUrl:function(e,t,r){var n,o,s,u,c,p,d=getOwn(a.pkgs,e);if(d&&(e=d),p=getOwn(l,e))return i.nameToUrl(p,t,r);if(req.jsExtRegExp.test(e))u=e+(t||"");else{for(n=a.paths,s=(o=e.split("/")).length;s>0;s-=1)if(c=getOwn(n,o.slice(0,s).join("/"))){isArray(c)&&(c=c[0]),o.splice(0,s,c);break}u=o.join("/"),u=("/"===(u+=t||(/^data\:|\?/.test(u)||r?"":".js")).charAt(0)||u.match(/^[\w\+\.\-]+:/)?"":a.baseUrl)+u}return a.urlArgs?u+(-1===u.indexOf("?")?"?":"&")+a.urlArgs:u},load:function(e,t){req.load(i,e,t)},execCb:function(e,t,r,i){return t.apply(i,r)},onScriptLoad:function(e){if("load"===e.type||readyRegExp.test((e.currentTarget||e.srcElement).readyState)){interactiveScript=null;var t=R(e);i.completeLoad(t.id)}},onScriptError:function(e){var t=R(e);if(!x(t.id))return y(makeError("scripterror","Script error for: "+t.id,e,[t.id]))}},i.require=i.makeRequire(),i}function getInteractiveScript(){return interactiveScript&&"interactive"===interactiveScript.readyState||eachReverse(scripts(),(function(e){if("interactive"===e.readyState)return interactiveScript=e})),interactiveScript}}(this);