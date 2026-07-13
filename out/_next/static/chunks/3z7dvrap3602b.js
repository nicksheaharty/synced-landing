(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,88143,(e,t,r)=>{"use strict";function a({widthInt:e,heightInt:t,blurWidth:r,blurHeight:i,blurDataURL:n,objectFit:o}){let s=r?40*r:e,l=i?40*i:t,c=s&&l?`viewBox='0 0 ${s} ${l}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${c}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${c?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${n}'/%3E%3C/svg%3E`}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return a}})},87690,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={VALID_LOADERS:function(){return n},imageConfigDefault:function(){return o}};for(var i in a)Object.defineProperty(r,i,{enumerable:!0,get:a[i]});let n=["default","imgix","cloudinary","akamai","custom"],o={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},8927,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return c}}),e.r(33525);let a=e.r(43369),i=e.r(88143),n=e.r(87690),o=["-moz-initial","fill","none","scale-down",void 0];function s(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function c({src:e,sizes:t,unoptimized:r=!1,priority:d=!1,preload:p=!1,loading:m,className:h,quality:u,width:f,height:g,fill:x=!1,style:b,overrideSrc:v,onLoad:y,onLoadingComplete:w,placeholder:j="empty",blurDataURL:k,fetchPriority:z,decoding:N="async",layout:A,objectFit:S,objectPosition:M,lazyBoundary:_,lazyRoot:C,...P},O){var E;let R,V,H,{imgConf:L,showAltText:I,blurComplete:Z,defaultLoader:B}=O,$=L||n.imageConfigDefault;if("allSizes"in $)R=$;else{let e=[...$.deviceSizes,...$.imageSizes].sort((e,t)=>e-t),t=$.deviceSizes.sort((e,t)=>e-t),r=$.qualities?.sort((e,t)=>e-t);R={...$,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===B)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let T=P.loader||B;delete P.loader,delete P.srcSet;let D="__next_img_default"in T;if(D){if("custom"===R.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=T;T=t=>{let{config:r,...a}=t;return e(a)}}if(A){"fill"===A&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[A];e&&(b={...b,...e});let r={responsive:"100vw",fill:"100vw"}[A];r&&!t&&(t=r)}let F="",W=l(f),G=l(g);if((E=e)&&"object"==typeof E&&(s(E)||void 0!==E.src)){let t=s(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(V=t.blurWidth,H=t.blurHeight,k=k||t.blurDataURL,F=t.src,!x)if(W||G){if(W&&!G){let e=W/t.width;G=Math.round(t.height*e)}else if(!W&&G){let e=G/t.height;W=Math.round(t.width*e)}}else W=t.width,G=t.height}let Y=!d&&!p&&("lazy"===m||void 0===m);(!(e="string"==typeof e?e:F)||e.startsWith("data:")||e.startsWith("blob:"))&&(r=!0,Y=!1),R.unoptimized&&(r=!0),D&&!R.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(r=!0);let q=l(u),U=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:S,objectPosition:M}:{},I?{}:{color:"transparent"},b),X=Z||"empty"===j?null:"blur"===j?`url("data:image/svg+xml;charset=utf-8,${(0,i.getImageBlurSvg)({widthInt:W,heightInt:G,blurWidth:V,blurHeight:H,blurDataURL:k||"",objectFit:U.objectFit})}")`:`url("${j}")`,J=o.includes(U.objectFit)?"fill"===U.objectFit?"100% 100%":"cover":U.objectFit,Q=X?{backgroundSize:J,backgroundPosition:U.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},K=function({config:e,src:t,unoptimized:r,width:i,quality:n,sizes:o,loader:s}){if(r){if(t.startsWith("/")&&!t.startsWith("//")){let e=(0,a.getDeploymentId)();if(e){let r=t.indexOf("?");if(-1!==r){let a=new URLSearchParams(t.slice(r+1));a.get("dpl")||(a.append("dpl",e),t=t.slice(0,r)+"?"+a.toString())}else t+=`?dpl=${e}`}}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:l,kind:c}=function({deviceSizes:e,allSizes:t},r,a){if(a){let r=/(^|\s)(1?\d?\d)vw/g,i=[];for(let e;e=r.exec(a);)i.push(parseInt(e[2]));if(i.length){let r=.01*Math.min(...i);return{widths:t.filter(t=>t>=e[0]*r),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof r?{widths:e,kind:"w"}:{widths:[...new Set([r,2*r].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,i,o),d=l.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:l.map((r,a)=>`${s({config:e,src:t,quality:n,width:r})} ${"w"===c?r:a+1}${c}`).join(", "),src:s({config:e,src:t,quality:n,width:l[d]})}}({config:R,src:e,unoptimized:r,width:W,quality:q,sizes:t,loader:T}),ee=Y?"lazy":m;return{props:{...P,loading:ee,fetchPriority:z,width:W,height:G,decoding:N,className:h,style:{...U,...Q},sizes:K.sizes,srcSet:K.srcSet,src:v||K.src},meta:{unoptimized:r,preload:p||d,placeholder:j,fill:x}}}},98879,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return s}});let a=e.r(71645),i="u"<typeof window,n=i?()=>{}:a.useLayoutEffect,o=i?()=>{}:a.useEffect;function s(e){let{headManager:t,reduceComponentsToState:r}=e;function s(){if(t&&t.mountedInstances){let e=a.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return i&&(t?.mountedInstances?.add(e.children),s()),n(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),n(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},25633,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return f},defaultHead:function(){return p}};for(var i in a)Object.defineProperty(r,i,{enumerable:!0,get:a[i]});let n=e.r(55682),o=e.r(90809),s=e.r(43476),l=o._(e.r(71645)),c=n._(e.r(98879)),d=e.r(42732);function p(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function m(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(33525);let h=["name","httpEquiv","charSet","itemProp"];function u(e){let t,r,a,i;return e.reduce(m,[]).reverse().concat(p().reverse()).filter((t=new Set,r=new Set,a=new Set,i={},e=>{let n=!0,o=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){o=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?n=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?n=!1:r.add(e.type);break;case"meta":for(let t=0,r=h.length;t<r;t++){let r=h[t];if(e.props.hasOwnProperty(r))if("charSet"===r)a.has(r)?n=!1:a.add(r);else{let t=e.props[r],a=i[r]||new Set;("name"!==r||!o)&&a.has(t)?n=!1:(a.add(t),i[r]=a)}}}return n})).reverse().map((e,t)=>{let r=e.key||t;return l.default.cloneElement(e,{key:r})})}let f=function({children:e}){let t=(0,l.useContext)(d.HeadManagerContext);return(0,s.jsx)(c.default,{reduceComponentsToState:u,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18556,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return n}});let a=e.r(55682)._(e.r(71645)),i=e.r(87690),n=a.default.createContext(i.imageConfigDefault)},65856,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return a}});let a=e.r(55682)._(e.r(71645)).default.createContext(null)},70965,(e,t,r)=>{"use strict";function a(e,t){let r=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,t.qualities[0]):r}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"findClosestQuality",{enumerable:!0,get:function(){return a}})},1948,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return o}});let a=e.r(70965),i=e.r(43369);function n({config:e,src:t,width:r,quality:o}){let s=(0,i.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")){let e=t.indexOf("?");if(-1!==e){let r=new URLSearchParams(t.slice(e+1)),a=r.get("dpl");if(a){s=a,r.delete("dpl");let i=r.toString();t=t.slice(0,e)+(i?"?"+i:"")}}}if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let l=(0,a.findClosestQuality)(o,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${l}${t.startsWith("/")&&s?`&dpl=${s}`:""}`}n.__next_img_default=!0;let o=n},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return i}});let a=e.r(71645);function i(e,t){let r=(0,a.useRef)(null),i=(0,a.useRef)(null);return(0,a.useCallback)(a=>{if(null===a){let e=r.current;e&&(r.current=null,e());let t=i.current;t&&(i.current=null,t())}else e&&(r.current=n(e,a)),t&&(i.current=n(t,a))},[e,t])}function n(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},5500,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Image",{enumerable:!0,get:function(){return y}});let a=e.r(55682),i=e.r(90809),n=e.r(43476),o=i._(e.r(71645)),s=a._(e.r(74080)),l=a._(e.r(25633)),c=e.r(8927),d=e.r(87690),p=e.r(18556);e.r(33525);let m=e.r(65856),h=a._(e.r(1948)),u=e.r(18581),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,r,a,i,n,o){let s=e?.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),r?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{a=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}a?.current&&a.current(e)}}))}function x(e){return o.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let b=(0,o.forwardRef)(({src:e,srcSet:t,sizes:r,height:a,width:i,decoding:s,className:l,style:c,fetchPriority:d,placeholder:p,loading:m,unoptimized:h,fill:f,onLoadRef:b,onLoadingCompleteRef:v,setBlurComplete:y,setShowAltText:w,sizesInput:j,onLoad:k,onError:z,...N},A)=>{let S=(0,o.useCallback)(e=>{e&&(z&&(e.src=e.src),e.complete&&g(e,p,b,v,y,h,j))},[e,p,b,v,y,z,h,j]),M=(0,u.useMergedRef)(A,S);return(0,n.jsx)("img",{...N,...x(d),loading:m,width:i,height:a,decoding:s,"data-nimg":f?"fill":"1",className:l,style:c,sizes:r,srcSet:t,src:e,ref:M,onLoad:e=>{g(e.currentTarget,p,b,v,y,h,j)},onError:e=>{w(!0),"empty"!==p&&y(!0),z&&z(e)}})});function v({isAppRouter:e,imgAttributes:t}){let r={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...x(t.fetchPriority)};return e&&s.default.preload?(s.default.preload(t.src,r),null):(0,n.jsx)(l.default,{children:(0,n.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...r},"__nimg-"+t.src+t.srcSet+t.sizes)})}let y=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(m.RouterContext),a=(0,o.useContext)(p.ImageConfigContext),i=(0,o.useMemo)(()=>{let e=f||a||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t),i=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r,qualities:i,localPatterns:"u"<typeof window?a?.localPatterns:e.localPatterns}},[a]),{onLoad:s,onLoadingComplete:l}=e,u=(0,o.useRef)(s);(0,o.useEffect)(()=>{u.current=s},[s]);let g=(0,o.useRef)(l);(0,o.useEffect)(()=>{g.current=l},[l]);let[x,y]=(0,o.useState)(!1),[w,j]=(0,o.useState)(!1),{props:k,meta:z}=(0,c.getImgProps)(e,{defaultLoader:h.default,imgConf:i,blurComplete:x,showAltText:w});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b,{...k,unoptimized:z.unoptimized,placeholder:z.placeholder,fill:z.fill,onLoadRef:u,onLoadingCompleteRef:g,setBlurComplete:y,setShowAltText:j,sizesInput:e.sizes,ref:t}),z.preload?(0,n.jsx)(v,{isAppRouter:!r,imgAttributes:k}):null]})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},94909,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return d},getImageProps:function(){return c}};for(var i in a)Object.defineProperty(r,i,{enumerable:!0,get:a[i]});let n=e.r(55682),o=e.r(8927),s=e.r(5500),l=n._(e.r(1948));function c(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let d=s.Image},57688,(e,t,r)=>{t.exports=e.r(94909)},31713,e=>{"use strict";var t=e.i(47167),r=e.i(43476),a=e.i(57688),i=e.i(71645),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=i.default.createContext&&i.default.createContext(n),s=["attr","size","title"];function l(){return(l=Object.assign.bind()).apply(null,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){var a,i,n;a=e,i=t,n=r[t],(i=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(i))in a?Object.defineProperty(a,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[i]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function p(e){return t=>i.default.createElement(m,l({attr:d({},e.attr)},t),function e(t){return t&&t.map((t,r)=>i.default.createElement(t.tag,d({key:r},t.attr),e(t.child)))}(e.child))}function m(e){var t=t=>{var r,{attr:a,size:n,title:o}=e,c=function(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r={};for(var a in e)if(({}).hasOwnProperty.call(e,a)){if(-1!==t.indexOf(a))continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],-1===t.indexOf(r)&&({}).propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(e,s),p=n||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),i.default.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,c,{className:r,style:d(d({color:e.color||t.color},t.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),o&&i.default.createElement("title",null,o),e.children)};return void 0!==o?i.default.createElement(o.Consumer,null,e=>t(e)):t(n)}function h(e){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M224,40V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H216A8,8,0,0,1,224,40Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"},child:[]}]})(e)}function u(e){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216,128l-72,72V56Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"},child:[]}]})(e)}function f(e){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"},child:[]}]})(e)}function g(e){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"},child:[]}]})(e)}let x="https://forms.gle/g64ZQ3Wy7hhp1M6X7",b=t.default.env.NEXT_PUBLIC_BASE_PATH??"",v=[{icon:function(e){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M200,176H104s8,6,8,16a24,24,0,0,1-48,0V64A24,24,0,0,0,40,40H176a24,24,0,0,1,24,24Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M96,104a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H104A8,8,0,0,1,96,104Zm8,40h64a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16Zm128,48a32,32,0,0,1-32,32H88a32,32,0,0,1-32-32V64a16,16,0,0,0-32,0c0,5.74,4.83,9.62,4.88,9.66h0A8,8,0,0,1,24,88a7.89,7.89,0,0,1-4.79-1.61h0C18.05,85.54,8,77.61,8,64A32,32,0,0,1,40,32H176a32,32,0,0,1,32,32V168h8a8,8,0,0,1,4.8,1.6C222,170.46,232,178.39,232,192ZM96.26,173.48A8.07,8.07,0,0,1,104,168h88V64a16,16,0,0,0-16-16H67.69A31.71,31.71,0,0,1,72,64V192a16,16,0,0,0,32,0c0-5.74-4.83-9.62-4.88-9.66A7.82,7.82,0,0,1,96.26,173.48ZM216,192a12.58,12.58,0,0,0-3.23-8h-94a26.92,26.92,0,0,1,1.21,8,31.82,31.82,0,0,1-4.29,16H200A16,16,0,0,0,216,192Z"},child:[]}]})(e)},title:"Find information instantly",body:"Search your email, files, and cloud storage without leaving your inbox. Synced pulls context from across your accounts."},{icon:function(e){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM208,208V48H48V208H208Z"},child:[]}]})(e)},title:"Draft and schedule automatically",body:"Reply to emails, create documents, and set up meetings — all from your conversation. Just approve and send."},{icon:function(e){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"},child:[]}]})(e)},title:"Coordinate schedules effortlessly",body:"Synced checks calendars, finds available times, and proposes meetings. No more back-and-forth scheduling."},{icon:function(e){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"},child:[]}]})(e)},title:"Manage follow-ups intelligently",body:"Set reminders, track commitments, and never let a task slip through the cracks."},{icon:function(e){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M136,108A52,52,0,1,1,84,56,52,52,0,0,1,136,108Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"},child:[]}]})(e)},title:"Work in one unified space",body:"All your conversations, files, and tasks in one place. No more context switching between apps."},{icon:function(e){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M224,64V176a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V64A16,16,0,0,1,48,48H208A16,16,0,0,1,224,64Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Zm-48,48a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224Z"},child:[]}]})(e)},title:"Built for how you work",body:"Command palette, shortcuts, VS Code-style navigation. Designed for people who value efficiency."}],y=[{name:"Gmail",icon:function(e){return p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"},child:[]}]})(e)},color:"#EA4335"},{name:"Google Calendar",icon:function(e){return p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18.316 5.684H24v12.632h-5.684V5.684zM5.684 24h12.632v-5.684H5.684V24zM18.316 5.684V0H1.895A1.894 1.894 0 0 0 0 1.895v16.421h5.684V5.684h12.632zm-7.207 6.25v-.065c.272-.144.5-.349.687-.617s.279-.595.279-.982c0-.379-.099-.72-.3-1.025a2.05 2.05 0 0 0-.832-.714 2.703 2.703 0 0 0-1.197-.257c-.6 0-1.094.156-1.481.467-.386.311-.65.671-.793 1.078l1.085.452c.086-.249.224-.461.413-.633.189-.172.445-.257.767-.257.33 0 .602.088.816.264a.86.86 0 0 1 .322.703c0 .33-.12.589-.36.778-.24.19-.535.284-.886.284h-.567v1.085h.633c.407 0 .748.109 1.02.327.272.218.407.499.407.843 0 .336-.129.614-.387.832s-.565.327-.924.327c-.351 0-.651-.103-.897-.311-.248-.208-.422-.502-.521-.881l-1.096.452c.178.616.505 1.082.977 1.401.472.319.984.478 1.538.477a2.84 2.84 0 0 0 1.293-.291c.382-.193.684-.458.902-.794.218-.336.327-.72.327-1.149 0-.429-.115-.797-.344-1.105a2.067 2.067 0 0 0-.881-.689zm2.093-1.931l.602.913L15 10.045v5.744h1.187V8.446h-.827l-2.158 1.557zM22.105 0h-3.289v5.184H24V1.895A1.894 1.894 0 0 0 22.105 0zm-3.289 23.5l4.684-4.684h-4.684V23.5zM0 22.105C0 23.152.848 24 1.895 24h3.289v-5.184H0v3.289z"},child:[]}]})(e)},color:"#4285F4"},{name:"Slack",icon:function(e){return p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"},child:[]}]})(e)},color:"#4A154B"},{name:"Google Drive",icon:function(e){return p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.01 1.485c-2.082 0-3.754.02-3.743.047.01.02 1.708 3.001 3.774 6.62l3.76 6.574h3.76c2.081 0 3.753-.02 3.742-.047-.005-.02-1.708-3.001-3.775-6.62l-3.76-6.574zm-4.76 1.73a789.828 789.861 0 0 0-3.63 6.319L0 15.868l1.89 3.298 1.885 3.297 3.62-6.335 3.618-6.33-1.88-3.287C8.1 4.704 7.255 3.22 7.25 3.214zm2.259 12.653-.203.348c-.114.198-.96 1.672-1.88 3.287a423.93 423.948 0 0 1-1.698 2.97c-.01.026 3.24.042 7.222.042h7.244l1.796-3.157c.992-1.734 1.85-3.23 1.906-3.323l.104-.167h-7.249z"},child:[]}]})(e)},color:"#0F9D58"},{name:"Dropbox",icon:function(e){return p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6 1.807L0 5.629l6 3.822 6.001-3.822L6 1.807zM18 1.807l-6 3.822 6 3.822 6-3.822-6-3.822zM0 13.274l6 3.822 6.001-3.822L6 9.452l-6 3.822zM18 9.452l-6 3.822 6 3.822 6-3.822-6-3.822zM6 18.371l6.001 3.822 6-3.822-6-3.822L6 18.371z"},child:[]}]})(e)},color:"#0061FF"},{name:"Notion",icon:function(e){return p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"},child:[]}]})(e)},color:"#000000"}],w=[{name:"Aum Dhruv",role:"Chief Executive Officer",bio:"ORFE at Princeton. Built TigerMeet.org — used across Princeton, Penn, UF, and Brandeis for 10,000+ meetings. Two internships at Amazon building AR hardware. Worked at the SEC.",photo:`${b}/aum.jpeg`,linkedin:"https://www.linkedin.com/in/aumdhruv/"},{name:"Nick Harty",role:"Chief Technology Officer",bio:"Engineering & Economics at Wharton. Shipped product inside regulated institutions. Raised $20k non-dilutive. Coordinated 400 congressional offices for the Congressional App Challenge.",photo:`${b}/nick.jpeg`,linkedin:"https://www.linkedin.com/in/nicksheaharty/"}],j="#4429F2",k="#000000",z="#FFFFFF",N="rgba(0, 0, 0, 0.08)",A="#E5E5EA",S="rgba(0, 0, 0, 0.4)",M="rgba(0, 0, 0, 0.1)",_="rgba(68, 41, 242, 0.10)",C={gmail:"#EA4335",imessage:"#30D158"},P={gmail:function(e){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M224,56l-96,88L32,56Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"},child:[]}]})(e)},imessage:function(e){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M224,128A96,96,0,0,1,79.93,211.11h0L42.54,223.58a8,8,0,0,1-10.12-10.12l12.47-37.39h0A96,96,0,1,1,224,128Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"},child:[]}]})(e)}},O={gmail:"Gmail",imessage:"iMessage"},E={id:"boss",name:"Gary (your boss)",source:"gmail",time:"11:58 PM",inbound:'quick thing before tomorrow\'s 8am — need this "ASAP" 🙏🙏🙏',tasksTotal:4,tasks:['Decode what "quick thing" actually means',"Rebuild the deck Gary deleted by accident","Pretend the 11:58 PM email was totally normal","Draft a reply that hides how annoyed you are"],fileOn:1,file:"Deck_FINAL_v7_ForRealThisTime.pptx"},R={id:"mom",name:"Mom",source:"imessage",time:"Just now",messages:[{from:"them",text:"did you get my email about thanksgiving"},{from:"me",text:"yep — added it to the calendar and told everyone to bring a side, no ambush green bean casserole this year"}]};function V({t:e}){return(0,r.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:8},children:e.messages.map((e,t)=>{let a="me"===e.from;return(0,r.jsx)("div",{style:{display:"flex",justifyContent:a?"flex-end":"flex-start"},children:(0,r.jsx)("div",{style:{maxWidth:"85%",padding:"10px 14px",fontSize:14,lineHeight:1.45,background:a?"#007AFF":A,color:a?"#fff":k,borderRadius:18,borderTopLeftRadius:a?18:4,borderTopRightRadius:a?4:18},children:e.text})},t)})})}function H({p:e}){let[t,a]=(0,i.useState)(!0),n=C[e.source],o=P[e.source],{tasks:s,tasksTotal:l,inbound:c,fileOn:d,file:p}=e;return(0,r.jsxs)("div",{className:"app-message-card",style:{background:z,border:`1px solid ${N}`},children:[(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"14px 14px 12px"},children:[(0,r.jsx)("div",{style:{width:36,height:36,borderRadius:18,background:n,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,color:"#fff",fontSize:15,fontWeight:700},children:e.name.charAt(0)}),(0,r.jsxs)("div",{style:{flex:1,minWidth:0},children:[(0,r.jsx)("div",{style:{fontSize:14,fontWeight:600,color:k,marginBottom:3},children:e.name}),(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},children:[(0,r.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:4,background:n+"20",padding:"3px 7px",borderRadius:6},children:[(0,r.jsx)(o,{size:12,style:{color:n}}),(0,r.jsx)("span",{style:{fontSize:11,fontWeight:600,color:n},children:O[e.source]})]}),(0,r.jsx)("span",{style:{fontSize:11,color:S},children:e.time})]})]})]}),(0,r.jsx)("div",{style:{padding:"0 14px 14px"},children:(0,r.jsx)("div",{style:{maxWidth:"85%",padding:"10px 14px",fontSize:14,lineHeight:1.45,background:A,color:k,borderRadius:18,borderTopLeftRadius:4},children:c})}),(0,r.jsx)("div",{style:{height:1,background:M,margin:"0 14px"}}),(0,r.jsxs)("div",{style:{padding:"12px 14px 14px"},children:[(0,r.jsxs)("div",{onClick:()=>a(!t),style:{display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer"},children:[(0,r.jsxs)("span",{style:{fontSize:13,fontWeight:600,color:j},children:[l," Task",1===l?"":"s"," Completed"]}),(0,r.jsx)(g,{size:14,style:{color:j,transform:t?"rotate(180deg)":"none",transition:"transform .2s"}})]}),t?(0,r.jsx)("div",{style:{marginTop:12},children:s.map((e,t)=>(0,r.jsxs)("div",{style:{display:"flex",gap:0,position:"relative",paddingBottom:16*(t!==s.length-1)},children:[(0,r.jsxs)("div",{style:{position:"relative",width:22,flexShrink:0},children:[(0,r.jsx)("div",{style:{width:22,height:22,borderRadius:11,background:_,display:"flex",alignItems:"center",justifyContent:"center",position:"relative",zIndex:2},children:(0,r.jsx)(f,{size:11,style:{color:j}})}),t<s.length-1?(0,r.jsx)("div",{style:{position:"absolute",top:22,bottom:-16,left:10.5,width:1.5,background:M}}):null]}),(0,r.jsxs)("div",{style:{flex:1,paddingLeft:10},children:[(0,r.jsx)("div",{style:{fontSize:12,fontWeight:600,color:k},children:e}),t===d?(0,r.jsx)("div",{style:{display:"inline-flex",alignItems:"center",gap:4,marginTop:6,background:"rgba(0,0,0,0.06)",padding:"4px 8px",borderRadius:6},children:(0,r.jsx)("span",{style:{fontSize:11,color:S},children:p})}):null]})]},e))}):null]})]})}function L({small:e}){return(0,r.jsx)("span",{style:{fontFamily:"p22-mackinac-pro, serif",fontSize:e?"1rem":"1.25rem",fontWeight:700,letterSpacing:"-0.01em",lineHeight:1,color:"hsl(var(--fg))"},children:"Synced"})}e.s(["default",0,function(){let[e,t]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=()=>t(window.scrollY>20);return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[]),(0,i.useEffect)(()=>{let e=document.querySelector(".bg-container"),t=t=>{e&&(e.style.setProperty("--mouse-x",`${t.clientX}px`),e.style.setProperty("--mouse-y",`${t.clientY}px`))};window.addEventListener("pointermove",t);let r=document.querySelectorAll(".feature-card, .pricing-card, .team-card, .screenshot-wrap"),a=e=>{let t=e.currentTarget,r=t.getBoundingClientRect(),a=e.clientX-r.left,i=e.clientY-r.top;t.style.setProperty("--card-mouse-x",`${a}px`),t.style.setProperty("--card-mouse-y",`${i}px`)};return r.forEach(e=>{e.addEventListener("mousemove",a)}),()=>{window.removeEventListener("pointermove",t),r.forEach(e=>{e.removeEventListener("mousemove",a)})}},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"bg-container",children:[(0,r.jsx)("div",{className:"bg-grid-base"}),(0,r.jsx)("div",{className:"bg-grid-glow"}),(0,r.jsx)("div",{className:"cursor-glow"}),(0,r.jsx)("div",{className:"ambient-blob-1"}),(0,r.jsx)("div",{className:"ambient-blob-2"}),(0,r.jsx)("div",{className:"ambient-blob-3"})]}),(0,r.jsx)("nav",{className:`synced-nav${e?" scrolled":""}`,children:(0,r.jsxs)("div",{className:"container nav-inner",children:[(0,r.jsxs)("a",{href:`${b}/`,"aria-label":"Synced home",className:"nav-logo",children:[(0,r.jsx)("img",{src:`${b}/icon-light.png`,alt:"",width:26,height:26,className:"nav-icon"}),(0,r.jsx)(L,{})]}),(0,r.jsxs)("nav",{className:"nav-links",children:[(0,r.jsx)("a",{href:"#features",className:"nav-link",children:"Features"}),(0,r.jsx)("a",{href:"#integrations",className:"nav-link",children:"Integrations"}),(0,r.jsx)("a",{href:"#team",className:"nav-link",children:"Team"})]}),(0,r.jsx)("div",{style:{display:"flex",alignItems:"center",gap:"1.25rem"},children:(0,r.jsx)("a",{href:x,className:"btn-primary",children:"Get Early Access"})})]})}),(0,r.jsxs)("main",{className:"flex flex-col flex-1",children:[(0,r.jsxs)("section",{className:"hero-section",children:[(0,r.jsx)("div",{className:"hero-glow"}),(0,r.jsxs)("div",{className:"container hero-container",children:[(0,r.jsx)("span",{className:"eyebrow",children:"Your Automated Inbox"}),(0,r.jsxs)("h1",{className:"hero-title",children:[(0,r.jsx)("span",{className:"hero-title-line",children:"Turn conversations into"}),(0,r.jsx)("span",{className:"hero-title-line hero-accent",children:"completed work."})]}),(0,r.jsx)("p",{className:"hero-sub",children:"Stop copying emails into AI, digging through files, and coordinating schedules. Synced connects to your email, messages, cloud storage, and calendar to handle the busywork for you."}),(0,r.jsx)("div",{className:"hero-ctas",children:(0,r.jsxs)("a",{href:x,className:"btn-primary btn-lg",children:["Get Early Access",(0,r.jsx)(u,{size:18})]})}),(0,r.jsx)("p",{className:"hero-footnote",children:"Coming soon · Be first to access"}),(0,r.jsx)("div",{className:"hero-3d-wrap",children:(0,r.jsx)(a.default,{src:`${b}/logo3d.png`,alt:"Synced 3D Logo",width:360,height:360,priority:!0,className:"hero-3d-img"})})]})]}),(0,r.jsx)("section",{className:"app-showcase-section",children:(0,r.jsxs)("div",{className:"container app-showcase-inner",children:[(0,r.jsxs)("div",{className:"app-showcase-copy",children:[(0,r.jsx)("div",{className:"uppercase-label",children:"Inside Synced"}),(0,r.jsxs)("h2",{className:"section-heading",children:["Even your worst",(0,r.jsx)("br",{}),"senders get handled."]}),(0,r.jsx)("p",{className:"section-sub",children:'An 11:58 PM "quick thing" from your boss becomes a rebuilt deck and a diplomatic reply — before you\'ve even opened your laptop.'})]}),(0,r.jsx)("div",{className:"app-showcase-card-wrap",children:(0,r.jsx)(H,{p:E})})]})}),(0,r.jsx)("section",{id:"integrations",className:"agency-section",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("p",{className:"uppercase-label",children:"Connects to your favorite tools"}),(0,r.jsx)("div",{className:"agency-badges",children:y.map(({name:e,icon:t,color:a})=>(0,r.jsxs)("span",{className:"agency-badge",children:[(0,r.jsx)(t,{size:18,style:{color:a,flexShrink:0}}),e]},e))})]})}),(0,r.jsx)("section",{id:"features",className:"features-section",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"section-header features-header",children:[(0,r.jsxs)("div",{className:"section-header-copy",children:[(0,r.jsx)("div",{className:"uppercase-label",children:"How Synced works"}),(0,r.jsxs)("h2",{className:"section-heading",children:["Email as easy as",(0,r.jsx)("br",{}),"iMessage."]}),(0,r.jsx)("p",{className:"section-sub",children:"Synced learns what you need, finds the information, drafts responses, and manages follow-ups — all while asking for input only when it matters."})]}),(0,r.jsx)("div",{className:"features-header-card",children:(0,r.jsx)(V,{t:R})})]}),(0,r.jsx)("div",{className:"feature-grid",children:v.map(({icon:e,title:t,body:a})=>(0,r.jsxs)("div",{className:"feature-card",children:[(0,r.jsx)("div",{className:"feature-icon-wrap",children:(0,r.jsx)(e,{size:22})}),(0,r.jsx)("h3",{className:"feature-title",children:t}),(0,r.jsx)("p",{className:"feature-body",children:a})]},t))})]})}),(0,r.jsx)("section",{id:"team",className:"team-section",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"section-header",children:[(0,r.jsx)("div",{className:"uppercase-label",children:"The team"}),(0,r.jsxs)("h2",{className:"section-heading",children:["Built by people who know",(0,r.jsx)("br",{}),"the pain of inbox overload."]}),(0,r.jsx)("p",{className:"section-sub",children:"Building together since middle school."})]}),(0,r.jsx)("div",{className:"team-grid",children:w.map(({name:e,role:t,bio:i,photo:n,linkedin:o})=>(0,r.jsxs)("div",{className:"team-card",children:[(0,r.jsxs)("div",{className:"team-card-top",children:[(0,r.jsx)(a.default,{src:n,alt:e,width:52,height:52,className:"team-photo"}),(0,r.jsxs)("div",{className:"team-info",children:[(0,r.jsx)("div",{className:"team-name",children:e}),(0,r.jsx)("div",{className:"team-role",children:t})]}),(0,r.jsx)("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"team-linkedin-btn","aria-label":"LinkedIn",children:(0,r.jsx)(h,{size:22})})]}),(0,r.jsx)("p",{className:"team-bio",children:i})]},e))})]})}),(0,r.jsx)("section",{className:"cta-section",children:(0,r.jsxs)("div",{className:"container cta-inner",children:[(0,r.jsxs)("h2",{className:"cta-title",children:["Make your inbox",(0,r.jsx)("br",{}),"work for you."]}),(0,r.jsx)("p",{className:"cta-sub",children:"Join thousands ready to reclaim their time. Synced handles the busywork — you focus on what matters."}),(0,r.jsxs)("a",{href:x,className:"btn-primary btn-lg",children:["Get Early Access",(0,r.jsx)(u,{size:18})]})]})})]}),(0,r.jsx)("footer",{className:"site-footer",children:(0,r.jsxs)("div",{className:"container footer-inner",children:[(0,r.jsxs)("a",{href:`${b}/`,"aria-label":"Synced home",className:"nav-logo",children:[(0,r.jsx)("img",{src:`${b}/icon-light.png`,alt:"",width:20,height:20,className:"nav-icon"}),(0,r.jsx)(L,{small:!0})]}),(0,r.jsxs)("nav",{className:"footer-links",children:[(0,r.jsx)("a",{href:x,className:"footer-link",children:"Get Early Access"}),(0,r.jsx)("a",{href:`${b}/privacy`,className:"footer-link",children:"Privacy"}),(0,r.jsx)("a",{href:`${b}/terms`,className:"footer-link",children:"Terms"})]}),(0,r.jsx)("span",{className:"footer-copy",children:"© 2026 Synced"})]})}),(0,r.jsx)("style",{children:`

        .container {
          width: 100%;
          max-width: 1120px;
          margin-inline: auto;
          padding-inline: clamp(1rem, 5vw, 2rem);
        }

        /* ── Premium Interactive Background & Grids ── */
        .bg-container {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .bg-grid-base {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(hsl(248 30% 70% / 0.12) 1.2px, transparent 1.2px);
          background-size: 32px 32px;
          pointer-events: none;
          z-index: 0;
        }

        .bg-grid-glow {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(hsl(var(--primary)) 1.2px, transparent 1.2px);
          background-size: 32px 32px;
          mask-image: radial-gradient(300px circle at var(--mouse-x, -999px) var(--mouse-y, -999px), black 0%, transparent 100%);
          -webkit-mask-image: radial-gradient(300px circle at var(--mouse-x, -999px) var(--mouse-y, -999px), black 0%, transparent 100%);
          pointer-events: none;
          z-index: 1;
          opacity: 0.65;
          transition: opacity 0.5s ease;
          will-change: mask-image, -webkit-mask-image;
        }

        .cursor-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, hsl(var(--primary) / 0.055) 0%, transparent 70%);
          transform: translate3d(calc(var(--mouse-x, -999px) - 400px), calc(var(--mouse-y, -999px) - 400px), 0);
          pointer-events: none;
          z-index: 0;
          will-change: transform;
        }

        /* Ambient Animated Blobs */
        .ambient-blob-1 {
          position: absolute;
          top: 10%;
          left: 5%;
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, hsl(248 89% 65% / 0.12) 0%, transparent 70%);
          filter: blur(40px);
          pointer-events: none;
          z-index: 0;
          animation: drift-slow 25s infinite alternate ease-in-out;
        }
        .ambient-blob-2 {
          position: fixed;
          bottom: 15%;
          right: 5%;
          width: 550px;
          height: 550px;
          background: radial-gradient(circle, hsl(280 80% 65% / 0.08) 0%, transparent 70%);
          filter: blur(50px);
          pointer-events: none;
          z-index: 0;
          animation: drift-slower 35s infinite alternate-reverse ease-in-out;
        }
        .ambient-blob-3 {
          position: fixed;
          top: 45%;
          left: 55%;
          width: 380px;
          height: 380px;
          background: radial-gradient(circle, hsl(220 80% 65% / 0.07) 0%, transparent 70%);
          filter: blur(45px);
          pointer-events: none;
          z-index: 0;
          animation: drift-rotate 30s infinite linear;
        }

        @keyframes drift-slow {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(80px, -60px) scale(1.15); }
          100% { transform: translate(-60px, 80px) scale(0.9); }
        }
        @keyframes drift-slower {
          0% { transform: translate(0, 0) scale(0.95); }
          50% { transform: translate(-70px, 80px) scale(1.1); }
          100% { transform: translate(60px, -60px) scale(1); }
        }
        @keyframes drift-rotate {
          0% { transform: rotate(0deg) translate(40px) rotate(0deg); }
          100% { transform: rotate(360deg) translate(40px) rotate(-360deg); }
        }

        main, nav, footer { position: relative; z-index: 2; }

        /* ── Glassmorphic & Reactive Cards ── */
        .feature-card,
        .pricing-card,
        .team-card {
          position: relative;
          overflow: hidden;
          background: color-mix(in srgb, hsl(var(--card)) 65%, transparent);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid hsl(var(--border) / 0.6);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.015);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                      border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                      box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      background-color 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }

        .feature-card:hover,
        .pricing-card:hover,
        .team-card:hover {
          transform: translateY(-4px);
          background: color-mix(in srgb, hsl(var(--card)) 85%, transparent);
          border-color: hsl(var(--primary) / 0.35);
          box-shadow: 
            0 12px 30px -10px hsl(248 89% 65% / 0.08),
            0 1px 1px hsl(var(--primary) / 0.05);
        }

        /* Border glow indicator */
        .feature-card::before,
        .pricing-card::before,
        .team-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(240px circle at var(--card-mouse-x, -999px) var(--card-mouse-y, -999px), hsl(var(--primary) / 0.08), transparent 80%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          z-index: 0;
        }

        .feature-card:hover::before,
        .pricing-card:hover::before,
        .team-card:hover::before {
          opacity: 1;
        }

        /* Ensure card contents stay on top of the relative glow */
        .feature-card > *,
        .pricing-card > *,
        .team-card > * {
          position: relative;
          z-index: 1;
        }

        /* ── Nav ── */
        .synced-nav {
          position: fixed;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 100%;
          z-index: 100;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid transparent;
          background: transparent;
          padding-top: 1rem;
          padding-bottom: 0.35rem;
        }
        .synced-nav.scrolled {
          top: 1rem;
          width: calc(100% - 2rem);
          max-width: 1120px;
          background: color-mix(in srgb, hsl(var(--card)) 65%, transparent);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-color: hsl(var(--border) / 0.6);
          border-radius: 14px;
          padding-top: 0.35rem;
          padding-bottom: 0.35rem;
          box-shadow: 
            0 12px 30px -10px rgba(0,0,0,.05),
            0 1px 1px hsl(var(--primary) / 0.02);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 48px;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
        }
        .nav-icon { border-radius: 6px; display: block; }
        .nav-inner {
          gap: 2rem;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 1.75rem;
          margin-right: auto;
          margin-left: 2rem;
        }
        .nav-link {
          font-size: 0.875rem;
          font-weight: 500;
          color: hsl(var(--muted-fg));
          text-decoration: none;
          padding-bottom: 2px;
          position: relative;
          transition: color .2s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: hsl(var(--primary));
          border-radius: 1px;
          transition: width .25s ease;
        }
        .nav-link:hover {
          color: hsl(var(--fg));
        }
        .nav-link:hover::after {
          width: 100%;
        }
        @media (max-width: 640px) {
          .nav-links { display: none; }
        }

        /* ── Buttons ── */
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          height: 2.5rem;
          padding: 0 1.2rem;
          border-radius: var(--radius);
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          border: none;
          text-decoration: none;
          background: linear-gradient(to bottom, hsl(248 89% 55%), hsl(248 89% 63%));
          color: hsl(248 100% 98%);
          transition: opacity .15s, transform .1s;
          white-space: nowrap;
        }
        .btn-primary:hover  { opacity: .9; transform: translateY(-1px); }
        .btn-primary:active { transform: translateY(0); }

        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          height: 2.5rem;
          padding: 0 1.2rem;
          border-radius: var(--radius);
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          border: none;
          background: color-mix(in srgb, hsl(248 89% 65%) 10%, transparent);
          color: hsl(248 89% 50%);
          transition: background .15s, box-shadow .15s, transform .1s;
          white-space: nowrap;
        }
        .btn-ghost:hover {
          background: hsl(var(--card));
          box-shadow: 0 2px 8px rgba(0,0,0,.08);
          transform: translateY(-1px);
        }
        .btn-ghost:active { transform: translateY(0); }

        .btn-lg {
          height: 2.75rem;
          padding: 0 1.4rem;
          font-size: 0.9375rem;
        }

        .btn-sm {
          height: 2.25rem;
          padding: 0 1rem;
          font-size: 0.8125rem;
          border-radius: var(--radius);
        }

        /* ── Hero ── */
        .hero-section {
          padding: 9rem 0 4rem;
          position: relative;
          overflow: hidden;
        }
        .hero-glow {
          position: absolute;
          top: -200px;
          left: -150px;
          width: 900px;
          height: 700px;
          background: radial-gradient(ellipse at 30% 40%, hsl(248 89% 60% / .13) 0%, transparent 65%);
          pointer-events: none;
          user-select: none;
        }
        .hero-container {
          position: relative;
        }
        .hero-3d-wrap {
          display: none;
          margin-right: 2em;
        }
        @media (min-width: 1024px) {
          .hero-3d-wrap {
            display: block;
            position: absolute;
            top: 45%;
            right: -20px;
            transform: translateY(-50%);
            width: 320px;
            height: 320px;
            pointer-events: none;
            z-index: 10;
            animation: float-3d 6s ease-in-out infinite;
          }
          .hero-3d-img {
            width: 100%;
            height: auto;
            display: block;
            filter: drop-shadow(0 25px 50px rgba(68, 41, 242, 0.12));
          }
        }
        @keyframes float-3d {
          0% {
            transform: translateY(-50%) translate3d(0, 0px, 0) rotate(0deg);
          }
          50% {
            transform: translateY(-50%) translate3d(0, -15px, 0) rotate(2.5deg);
          }
          100% {
            transform: translateY(-50%) translate3d(0, 0px, 0) rotate(0deg);
          }
        }
        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: hsl(var(--primary));
          background: hsl(var(--primary) / .08);
          border: 1px solid hsl(var(--primary) / .18);
          padding: 0.5rem 1rem;
          border-radius: 999px;
          margin-bottom: 1.5rem;
          box-shadow: 0 2px 8px rgba(68, 41, 242, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }
        .hero-title {
          font-family: "p22-mackinac-pro", serif;
          font-size: clamp(2rem, 5.5vw, 3.5rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.15;
          margin-bottom: 1.5rem;
          color: hsl(var(--fg));
          max-width: 800px;
        }
        .hero-title-line {
          display: block;
          white-space: nowrap;
        }
        .hero-accent {
          color: hsl(var(--primary));
        }
        .hero-sub {
          font-size: clamp(1rem, 2vw, 1.1rem);
          line-height: 1.7;
          color: hsl(var(--muted-fg));
          max-width: 520px;
          margin-bottom: 2.25rem;
        }
        .hero-ctas {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          align-items: center;
        }
        .hero-footnote {
          margin-top: 1.25rem;
          font-size: 0.78rem;
          color: hsl(var(--muted-fg));
          opacity: 0.65;
        }

        /* ── Screenshot ── */
        .screenshot-section {
          padding-bottom: 0;
        }
        .screenshot-wrap {
          display: block;
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid hsl(var(--border));
          box-shadow:
            0 0 0 1px hsl(var(--border) / .5),
            0 24px 80px -16px rgba(68,41,242,.15);
          line-height: 0;
          cursor: url('${b}/icon-cursor.png') 16 16, pointer;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), 
                      border-color 0.5s cubic-bezier(0.16, 1, 0.3, 1), 
                      box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .screenshot-wrap:hover {
          transform: translateY(-4px);
          border-color: hsl(var(--primary) / 0.3);
          box-shadow:
            0 0 0 1px hsl(var(--primary) / 0.1),
            0 32px 90px -12px rgba(68,41,242,.24);
        }
        .screenshot-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(600px circle at var(--card-mouse-x, -999px) var(--card-mouse-y, -999px), hsl(var(--primary) / 0.08), transparent 80%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          z-index: 10;
        }
        .screenshot-wrap:hover::before {
          opacity: 1;
        }
        .screenshot-wrap > * {
          position: relative;
          z-index: 1;
        }


        /* ── App showcase ── */
        .app-showcase-section {
          padding: 5rem 0 2rem;
        }
        .app-showcase-inner {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 3rem;
        }
        .app-showcase-copy {
          max-width: 420px;
        }
        .app-showcase-card-wrap {
          width: 340px;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .app-showcase-card-wrap:hover {
          transform: translateY(-4px);
        }
        .app-message-card {
          border-radius: 20px;
          overflow: hidden;
          font-family: var(--font-sans, inherit);
          box-shadow:
            0 0 0 1px hsl(var(--border) / .5),
            0 24px 70px -20px rgba(68, 41, 242, 0.22);
        }
        @media (max-width: 900px) {
          .app-showcase-inner {
            grid-template-columns: 1fr;
            justify-items: center;
            text-align: center;
            gap: 2.5rem;
          }
          .app-showcase-copy {
            max-width: 480px;
          }
          .app-showcase-card-wrap {
            width: 100%;
            max-width: 380px;
          }
          .section-sub {
            margin-inline: auto;
          }
        }

        /* ── Agency strip ── */
        .agency-section {
          padding: 3rem 0;
          border-top: 1px solid hsl(var(--border));
          margin-top: 1.5rem;
          text-align: center;
        }
        .agency-section .uppercase-label { margin-bottom: 1.25rem; }
        .agency-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
        }
        .agency-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          border: 1px solid hsl(var(--border));
          background: hsl(var(--card));
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: hsl(var(--muted-fg));
          transition: all 0.2s ease;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }
        .agency-badge:hover {
          border-color: hsl(var(--primary) / 0.3);
          background: hsl(var(--primary) / 0.05);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(68, 41, 242, 0.1);
        }
        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: hsl(var(--primary));
          flex-shrink: 0;
        }

        /* ── Section commons ── */
        .features-section,
        .team-section {
          padding: 5rem 0;
          border-top: 1px solid hsl(var(--border));
        }
        .section-header { margin-bottom: 3rem; }
        .features-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
        }
        .section-header-copy { flex: 1; min-width: 0; }
        .features-header-card {
          width: 300px;
          flex-shrink: 0;
        }
        @media (max-width: 900px) {
          .features-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .features-header-card {
            width: 100%;
            max-width: 360px;
          }
        }
        .uppercase-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: hsl(var(--primary));
          margin-bottom: 0.75rem;
        }
        .section-heading {
          font-family: "p22-mackinac-pro", serif;
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 700;
          letter-spacing: -0.025em;
          line-height: 1.15;
          margin-bottom: 0.75rem;
          color: hsl(var(--fg));
        }
        .section-sub {
          font-size: 1rem;
          color: hsl(var(--muted-fg));
          max-width: 480px;
          line-height: 1.65;
        }

        /* ── Features ── */
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: hsl(var(--border));
          border: 1px solid hsl(var(--border));
          border-radius: 12px;
          overflow: hidden;
        }
        .feature-card {
          padding: 1.75rem;
        }
        .feature-icon-wrap {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: hsl(var(--primary) / .1);
          border-radius: 0.5rem;
          margin-bottom: 1rem;
          color: hsl(var(--primary));
        }
        .feature-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: hsl(var(--fg));
          margin-bottom: 0.4rem;
          font-family: inherit;
        }
        .feature-body {
          font-size: 0.85rem;
          color: hsl(var(--muted-fg));
          line-height: 1.6;
        }

        /* ── Team ── */
        .team-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          align-items: stretch;
        }
        @media (max-width: 520px) {
          .team-grid { grid-template-columns: 1fr; }
        }
        .team-card {
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
        }
        .team-card-top {
          display: flex;
          align-items: center;
          gap: 0.875rem;
        }
        .team-photo {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          object-fit: cover;
          object-position: center top;
          border: 2px solid hsl(var(--border));
          flex-shrink: 0;
          cursor: url('${b}/icon-cursor.png') 16 16, pointer;
        }
        .team-info {
          flex: 1;
          min-width: 0;
        }
        .team-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: hsl(var(--fg));
          line-height: 1.2;
        }
        .team-role {
          font-size: 0.78rem;
          font-weight: 500;
          color: hsl(var(--muted-fg));
          margin-top: 0.15rem;
        }
        .team-linkedin-btn {
          color: hsl(var(--primary));
          opacity: 0.7;
          transition: opacity .15s, transform .15s;
          display: flex;
          align-items: center;
          flex-shrink: 0;
          margin-left: auto;
        }
        .team-linkedin-btn:hover { opacity: 1; transform: scale(1.1); }
        .team-bio {
          font-size: 0.82rem;
          line-height: 1.6;
          color: hsl(var(--muted-fg));
        }

        /* ── CTA ── */
        .cta-section {
          padding: 6rem 0;
          border-top: 1px solid hsl(var(--border));
        }
        .cta-inner {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
        }
        .cta-title {
          font-family: "p22-mackinac-pro", serif;
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: hsl(var(--fg));
          margin: 0;
        }
        .cta-sub {
          font-size: 1rem;
          color: hsl(var(--muted-fg));
          max-width: 400px;
          line-height: 1.65;
        }

        /* ── Pricing ── */
        .pricing-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        @media (max-width: 640px) {
          .pricing-grid { grid-template-columns: 1fr; }
        }
        .pricing-card {
          border-radius: 14px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .pricing-card-featured {
          border-color: hsl(var(--primary) / 0.4);
          background: color-mix(in srgb, hsl(var(--card)) 75%, transparent);
        }
        .pricing-card-featured:hover {
          border-color: hsl(var(--primary) / 0.6);
          box-shadow: 
            0 16px 40px -12px rgba(68,41,242,.2),
            0 1px 2px hsl(var(--primary) / 0.1);
        }
        .pricing-card-featured::before {
          background: radial-gradient(240px circle at var(--card-mouse-x, -999px) var(--card-mouse-y, -999px), hsl(var(--primary) / 0.15), transparent 80%);
        }
        .pricing-card-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        .pricing-icon {
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: hsl(var(--primary) / .1);
          border-radius: 12px;
          color: hsl(var(--primary));
          flex-shrink: 0;
        }
        .pricing-icon-featured {
          background: hsl(var(--primary) / .15);
        }
        .pricing-title {
          font-family: "p22-mackinac-pro", serif;
          font-size: 1.35rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: hsl(var(--fg));
          margin-bottom: 0.3rem;
        }
        .pricing-sub {
          font-size: 0.875rem;
          color: hsl(var(--muted-fg));
          line-height: 1.6;
        }
        .pricing-features {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          flex: 1;
        }
        .pricing-features li {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.875rem;
          color: hsl(var(--fg));
        }
        .pricing-features li svg {
          color: hsl(var(--primary));
          flex-shrink: 0;
        }
/* ── Footer ── */
        .site-footer {
          border-top: 1px solid hsl(var(--border));
          padding: 2rem 0;
        }
        .footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .footer-links {
          display: flex;
          gap: 1.5rem;
        }
        .footer-link {
          font-size: 0.82rem;
          color: hsl(var(--muted-fg));
          text-decoration: none;
          transition: color .15s;
        }
        .footer-link:hover { color: hsl(var(--fg)); }
        .footer-copy {
          font-size: 0.82rem;
          color: hsl(var(--muted-fg));
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .hero-section { padding: 7rem 0 3rem; }

          .feature-grid {
            grid-template-columns: 1fr;
          }

          .cta-inner { align-items: flex-start; }

          .footer-inner { flex-direction: column; align-items: flex-start; }
        }

        @media (max-width: 600px) {
          .feature-grid { grid-template-columns: 1fr; }
        }

        @media (min-width: 601px) and (max-width: 900px) {
          .feature-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `})]})}],31713)}]);