(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,88143,(e,t,r)=>{"use strict";function a({widthInt:e,heightInt:t,blurWidth:r,blurHeight:i,blurDataURL:n,objectFit:o}){let s=r?40*r:e,l=i?40*i:t,d=s&&l?`viewBox='0 0 ${s} ${l}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${d}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${d?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${n}'/%3E%3C/svg%3E`}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return a}})},87690,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={VALID_LOADERS:function(){return n},imageConfigDefault:function(){return o}};for(var i in a)Object.defineProperty(r,i,{enumerable:!0,get:a[i]});let n=["default","imgix","cloudinary","akamai","custom"],o={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},8927,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return d}}),e.r(33525);let a=e.r(43369),i=e.r(88143),n=e.r(87690),o=["-moz-initial","fill","none","scale-down",void 0];function s(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function d({src:e,sizes:t,unoptimized:r=!1,priority:c=!1,preload:p=!1,loading:m,className:h,quality:u,width:g,height:f,fill:x=!1,style:b,overrideSrc:v,onLoad:y,onLoadingComplete:w,placeholder:j="empty",blurDataURL:k,fetchPriority:A,decoding:C="async",layout:M,objectFit:Z,objectPosition:N,lazyBoundary:L,lazyRoot:z,..._},H){var S;let O,P,V,{imgConf:E,showAltText:R,blurComplete:I,defaultLoader:B}=H,D=E||n.imageConfigDefault;if("allSizes"in D)O=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t),r=D.qualities?.sort((e,t)=>e-t);O={...D,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===B)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let T=_.loader||B;delete _.loader,delete _.srcSet;let $="__next_img_default"in T;if($){if("custom"===O.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=T;T=t=>{let{config:r,...a}=t;return e(a)}}if(M){"fill"===M&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[M];e&&(b={...b,...e});let r={responsive:"100vw",fill:"100vw"}[M];r&&!t&&(t=r)}let F="",W=l(g),G=l(f);if((S=e)&&"object"==typeof S&&(s(S)||void 0!==S.src)){let t=s(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(P=t.blurWidth,V=t.blurHeight,k=k||t.blurDataURL,F=t.src,!x)if(W||G){if(W&&!G){let e=W/t.width;G=Math.round(t.height*e)}else if(!W&&G){let e=G/t.height;W=Math.round(t.width*e)}}else W=t.width,G=t.height}let U=!c&&!p&&("lazy"===m||void 0===m);(!(e="string"==typeof e?e:F)||e.startsWith("data:")||e.startsWith("blob:"))&&(r=!0,U=!1),O.unoptimized&&(r=!0),$&&!O.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(r=!0);let q=l(u),Y=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:Z,objectPosition:N}:{},R?{}:{color:"transparent"},b),X=I||"empty"===j?null:"blur"===j?`url("data:image/svg+xml;charset=utf-8,${(0,i.getImageBlurSvg)({widthInt:W,heightInt:G,blurWidth:P,blurHeight:V,blurDataURL:k||"",objectFit:Y.objectFit})}")`:`url("${j}")`,J=o.includes(Y.objectFit)?"fill"===Y.objectFit?"100% 100%":"cover":Y.objectFit,Q=X?{backgroundSize:J,backgroundPosition:Y.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},K=function({config:e,src:t,unoptimized:r,width:i,quality:n,sizes:o,loader:s}){if(r){if(t.startsWith("/")&&!t.startsWith("//")){let e=(0,a.getDeploymentId)();if(e){let r=t.indexOf("?");if(-1!==r){let a=new URLSearchParams(t.slice(r+1));a.get("dpl")||(a.append("dpl",e),t=t.slice(0,r)+"?"+a.toString())}else t+=`?dpl=${e}`}}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:l,kind:d}=function({deviceSizes:e,allSizes:t},r,a){if(a){let r=/(^|\s)(1?\d?\d)vw/g,i=[];for(let e;e=r.exec(a);)i.push(parseInt(e[2]));if(i.length){let r=.01*Math.min(...i);return{widths:t.filter(t=>t>=e[0]*r),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof r?{widths:e,kind:"w"}:{widths:[...new Set([r,2*r].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,i,o),c=l.length-1;return{sizes:o||"w"!==d?o:"100vw",srcSet:l.map((r,a)=>`${s({config:e,src:t,quality:n,width:r})} ${"w"===d?r:a+1}${d}`).join(", "),src:s({config:e,src:t,quality:n,width:l[c]})}}({config:O,src:e,unoptimized:r,width:W,quality:q,sizes:t,loader:T}),ee=U?"lazy":m;return{props:{..._,loading:ee,fetchPriority:A,width:W,height:G,decoding:C,className:h,style:{...Y,...Q},sizes:K.sizes,srcSet:K.srcSet,src:v||K.src},meta:{unoptimized:r,preload:p||c,placeholder:j,fill:x}}}},98879,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return s}});let a=e.r(71645),i="u"<typeof window,n=i?()=>{}:a.useLayoutEffect,o=i?()=>{}:a.useEffect;function s(e){let{headManager:t,reduceComponentsToState:r}=e;function s(){if(t&&t.mountedInstances){let e=a.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return i&&(t?.mountedInstances?.add(e.children),s()),n(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),n(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},25633,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return g},defaultHead:function(){return p}};for(var i in a)Object.defineProperty(r,i,{enumerable:!0,get:a[i]});let n=e.r(55682),o=e.r(90809),s=e.r(43476),l=o._(e.r(71645)),d=n._(e.r(98879)),c=e.r(42732);function p(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function m(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(33525);let h=["name","httpEquiv","charSet","itemProp"];function u(e){let t,r,a,i;return e.reduce(m,[]).reverse().concat(p().reverse()).filter((t=new Set,r=new Set,a=new Set,i={},e=>{let n=!0,o=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){o=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?n=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?n=!1:r.add(e.type);break;case"meta":for(let t=0,r=h.length;t<r;t++){let r=h[t];if(e.props.hasOwnProperty(r))if("charSet"===r)a.has(r)?n=!1:a.add(r);else{let t=e.props[r],a=i[r]||new Set;("name"!==r||!o)&&a.has(t)?n=!1:(a.add(t),i[r]=a)}}}return n})).reverse().map((e,t)=>{let r=e.key||t;return l.default.cloneElement(e,{key:r})})}let g=function({children:e}){let t=(0,l.useContext)(c.HeadManagerContext);return(0,s.jsx)(d.default,{reduceComponentsToState:u,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18556,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return n}});let a=e.r(55682)._(e.r(71645)),i=e.r(87690),n=a.default.createContext(i.imageConfigDefault)},65856,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return a}});let a=e.r(55682)._(e.r(71645)).default.createContext(null)},70965,(e,t,r)=>{"use strict";function a(e,t){let r=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,t.qualities[0]):r}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"findClosestQuality",{enumerable:!0,get:function(){return a}})},1948,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return o}});let a=e.r(70965),i=e.r(43369);function n({config:e,src:t,width:r,quality:o}){let s=(0,i.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")){let e=t.indexOf("?");if(-1!==e){let r=new URLSearchParams(t.slice(e+1)),a=r.get("dpl");if(a){s=a,r.delete("dpl");let i=r.toString();t=t.slice(0,e)+(i?"?"+i:"")}}}if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let l=(0,a.findClosestQuality)(o,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${l}${t.startsWith("/")&&s?`&dpl=${s}`:""}`}n.__next_img_default=!0;let o=n},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return i}});let a=e.r(71645);function i(e,t){let r=(0,a.useRef)(null),i=(0,a.useRef)(null);return(0,a.useCallback)(a=>{if(null===a){let e=r.current;e&&(r.current=null,e());let t=i.current;t&&(i.current=null,t())}else e&&(r.current=n(e,a)),t&&(i.current=n(t,a))},[e,t])}function n(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},5500,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Image",{enumerable:!0,get:function(){return y}});let a=e.r(55682),i=e.r(90809),n=e.r(43476),o=i._(e.r(71645)),s=a._(e.r(74080)),l=a._(e.r(25633)),d=e.r(8927),c=e.r(87690),p=e.r(18556);e.r(33525);let m=e.r(65856),h=a._(e.r(1948)),u=e.r(18581),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function f(e,t,r,a,i,n,o){let s=e?.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),r?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{a=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}a?.current&&a.current(e)}}))}function x(e){return o.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let b=(0,o.forwardRef)(({src:e,srcSet:t,sizes:r,height:a,width:i,decoding:s,className:l,style:d,fetchPriority:c,placeholder:p,loading:m,unoptimized:h,fill:g,onLoadRef:b,onLoadingCompleteRef:v,setBlurComplete:y,setShowAltText:w,sizesInput:j,onLoad:k,onError:A,...C},M)=>{let Z=(0,o.useCallback)(e=>{e&&(A&&(e.src=e.src),e.complete&&f(e,p,b,v,y,h,j))},[e,p,b,v,y,A,h,j]),N=(0,u.useMergedRef)(M,Z);return(0,n.jsx)("img",{...C,...x(c),loading:m,width:i,height:a,decoding:s,"data-nimg":g?"fill":"1",className:l,style:d,sizes:r,srcSet:t,src:e,ref:N,onLoad:e=>{f(e.currentTarget,p,b,v,y,h,j)},onError:e=>{w(!0),"empty"!==p&&y(!0),A&&A(e)}})});function v({isAppRouter:e,imgAttributes:t}){let r={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...x(t.fetchPriority)};return e&&s.default.preload?(s.default.preload(t.src,r),null):(0,n.jsx)(l.default,{children:(0,n.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...r},"__nimg-"+t.src+t.srcSet+t.sizes)})}let y=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(m.RouterContext),a=(0,o.useContext)(p.ImageConfigContext),i=(0,o.useMemo)(()=>{let e=g||a||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t),i=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r,qualities:i,localPatterns:"u"<typeof window?a?.localPatterns:e.localPatterns}},[a]),{onLoad:s,onLoadingComplete:l}=e,u=(0,o.useRef)(s);(0,o.useEffect)(()=>{u.current=s},[s]);let f=(0,o.useRef)(l);(0,o.useEffect)(()=>{f.current=l},[l]);let[x,y]=(0,o.useState)(!1),[w,j]=(0,o.useState)(!1),{props:k,meta:A}=(0,d.getImgProps)(e,{defaultLoader:h.default,imgConf:i,blurComplete:x,showAltText:w});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b,{...k,unoptimized:A.unoptimized,placeholder:A.placeholder,fill:A.fill,onLoadRef:u,onLoadingCompleteRef:f,setBlurComplete:y,setShowAltText:j,sizesInput:e.sizes,ref:t}),A.preload?(0,n.jsx)(v,{isAppRouter:!r,imgAttributes:k}):null]})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},94909,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return c},getImageProps:function(){return d}};for(var i in a)Object.defineProperty(r,i,{enumerable:!0,get:a[i]});let n=e.r(55682),o=e.r(8927),s=e.r(5500),l=n._(e.r(1948));function d(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let c=s.Image},57688,(e,t,r)=>{t.exports=e.r(94909)},31713,e=>{"use strict";var t=e.i(47167),r=e.i(43476),a=e.i(57688),i=e.i(71645),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=i.default.createContext&&i.default.createContext(n),s=["attr","size","title"];function l(){return(l=Object.assign.bind()).apply(null,arguments)}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach(function(t){var a,i,n;a=e,i=t,n=r[t],(i=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(i))in a?Object.defineProperty(a,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[i]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function p(e){return t=>i.default.createElement(m,l({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>i.default.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function m(e){var t=t=>{var r,{attr:a,size:n,title:o}=e,d=function(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r={};for(var a in e)if(({}).hasOwnProperty.call(e,a)){if(-1!==t.indexOf(a))continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],-1===t.indexOf(r)&&({}).propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(e,s),p=n||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),i.default.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,d,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),o&&i.default.createElement("title",null,o),e.children)};return void 0!==o?i.default.createElement(o.Consumer,null,e=>t(e)):t(n)}function h(e){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M224,40V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H216A8,8,0,0,1,224,40Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"},child:[]}]})(e)}function u(e){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M176,32H80A48,48,0,0,0,32,80v96a48,48,0,0,0,48,48h96a48,48,0,0,0,48-48V80A48,48,0,0,0,176,32ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm64-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"},child:[]}]})(e)}function g(e){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216,128l-72,72V56Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"},child:[]}]})(e)}function f(e){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"},child:[]}]})(e)}function x(e){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"},child:[]}]})(e)}var b=e.i(53501);let v="https://forms.gle/g64ZQ3Wy7hhp1M6X7",y=t.default.env.NEXT_PUBLIC_BASE_PATH??"",w=[{icon:function(e){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M200,176H104s8,6,8,16a24,24,0,0,1-48,0V64A24,24,0,0,0,40,40H176a24,24,0,0,1,24,24Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M96,104a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H104A8,8,0,0,1,96,104Zm8,40h64a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16Zm128,48a32,32,0,0,1-32,32H88a32,32,0,0,1-32-32V64a16,16,0,0,0-32,0c0,5.74,4.83,9.62,4.88,9.66h0A8,8,0,0,1,24,88a7.89,7.89,0,0,1-4.79-1.61h0C18.05,85.54,8,77.61,8,64A32,32,0,0,1,40,32H176a32,32,0,0,1,32,32V168h8a8,8,0,0,1,4.8,1.6C222,170.46,232,178.39,232,192ZM96.26,173.48A8.07,8.07,0,0,1,104,168h88V64a16,16,0,0,0-16-16H67.69A31.71,31.71,0,0,1,72,64V192a16,16,0,0,0,32,0c0-5.74-4.83-9.62-4.88-9.66A7.82,7.82,0,0,1,96.26,173.48ZM216,192a12.58,12.58,0,0,0-3.23-8h-94a26.92,26.92,0,0,1,1.21,8,31.82,31.82,0,0,1-4.29,16H200A16,16,0,0,0,216,192Z"},child:[]}]})(e)},title:"Find information instantly",body:"Synced searches your email, files, and cloud storage without you leaving the conversation, and pulls in whatever context it needs."},{icon:function(e){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M221.66,90.34,192,120,136,64l29.66-29.66a8,8,0,0,1,11.31,0L221.66,79A8,8,0,0,1,221.66,90.34Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM48,163.31l88-88L180.69,120l-88,88H48Zm144-54.62L147.32,64l24-24L216,84.69Z"},child:[]}]})(e)},title:"Draft replies and documents",body:"Synced drafts email replies and creates documents for you, ready to review and send the moment you approve."},{icon:function(e){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"},child:[]}]})(e)},title:"Coordinate schedules effortlessly",body:"Synced checks calendars, finds times that work, and proposes meetings, so you skip the back-and-forth."},{icon:function(e){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"},child:[]}]})(e)},title:"Manage follow-ups automatically",body:"Synced tracks commitments and follow-ups across your conversations, so nothing slips through the cracks."},{icon:function(e){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M185,127,127,185a24,24,0,0,1-33.94,0L71,162.91A24,24,0,0,1,71,129L129,71a24,24,0,0,1,33.94,0L185,93.09A24,24,0,0,1,185,127Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M237.66,18.34a8,8,0,0,0-11.32,0l-52.4,52.41-5.37-5.38a32.05,32.05,0,0,0-45.26,0L100,88.69l-6.34-6.35A8,8,0,0,0,82.34,93.66L88.69,100,65.37,123.31a32,32,0,0,0,0,45.26l5.38,5.37-52.41,52.4a8,8,0,0,0,11.32,11.32l52.4-52.41,5.37,5.38a32.06,32.06,0,0,0,45.26,0L156,167.31l6.34,6.35a8,8,0,0,0,11.32-11.32L167.31,156l23.32-23.31a32,32,0,0,0,0-45.26l-5.38-5.37,52.41-52.4A8,8,0,0,0,237.66,18.34Zm-116.29,161a16,16,0,0,1-22.62,0L76.69,157.25a16,16,0,0,1,0-22.62L100,111.31,144.69,156Zm57.94-57.94h0L156,144.69,111.31,100l23.32-23.31a16,16,0,0,1,22.62,0l22.06,22a16,16,0,0,1,0,22.63ZM88.57,35A8,8,0,0,1,103.43,29l8,20A8,8,0,0,1,96.57,55ZM24.57,93A8,8,0,0,1,35,88.57l20,8A8,8,0,0,1,49,111.43l-20-8A8,8,0,0,1,24.57,93ZM231.43,163a8,8,0,0,1-10.4,4.46l-20-8A8,8,0,1,1,207,144.57l20,8A8,8,0,0,1,231.43,163Zm-64,58.06A8,8,0,0,1,152.57,227l-8-20A8,8,0,0,1,159.43,201Z"},child:[]}]})(e)},title:"Connects to everything you use",body:"Email, messages, cloud storage, calendar, and more, all synced together so work gets done without switching apps."},{icon:function(e){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M213.66,201,201,213.66a8,8,0,0,1-11.31,0l-51.31-51.31a8,8,0,0,0-13,2.46l-17.82,46.41a8,8,0,0,1-14.85-.71L40.41,50.44a8,8,0,0,1,10-10L210.51,92.68a8,8,0,0,1,.71,14.85l-46.41,17.82a8,8,0,0,0-2.46,13l51.31,51.31A8,8,0,0,1,213.66,201Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M88,24V16a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0ZM16,104h8a8,8,0,0,0,0-16H16a8,8,0,0,0,0,16ZM124.42,39.16a8,8,0,0,0,10.74-3.58l8-16a8,8,0,0,0-14.31-7.16l-8,16A8,8,0,0,0,124.42,39.16Zm-96,81.69-16,8a8,8,0,0,0,7.16,14.31l16-8a8,8,0,1,0-7.16-14.31ZM219.31,184a16,16,0,0,1,0,22.63l-12.68,12.68a16,16,0,0,1-22.63,0L132.7,168,115,214.09c0,.1-.08.21-.13.32a15.83,15.83,0,0,1-14.6,9.59l-.79,0a15.83,15.83,0,0,1-14.41-11L32.8,52.92A16,16,0,0,1,52.92,32.8L213,85.07a16,16,0,0,1,1.41,29.8l-.32.13L168,132.69ZM208,195.31,156.69,144h0a16,16,0,0,1,4.93-26l.32-.14,45.95-17.64L48,48l52.2,159.86,17.65-46c0-.11.08-.22.13-.33a16,16,0,0,1,11.69-9.34,16.72,16.72,0,0,1,3-.28,16,16,0,0,1,11.3,4.69L195.31,208Z"},child:[]}]})(e)},title:"Only asks when it matters",body:"Approve an email, pick a meeting time, confirm a detail, Synced lists exactly what needs you and handles the rest on its own."}],j=[{name:"Gmail",icon:function({size:e=24,style:t}){return(0,r.jsxs)("svg",{width:e,height:e,viewBox:"0 0 64 64",fill:"none","aria-hidden":"true",style:t,children:[(0,r.jsx)("path",{d:"M54.5 17.4639C54.4999 16.2258 53.1364 15.6155 52.2373 16.294L52.2354 16.295L48.8613 18.8389L48.8604 18.8379L32.001 31.5635L15.1377 18.8418L15.1357 18.8408L11.7627 16.294L11.6768 16.2334C10.7794 15.6534 9.50006 16.2619 9.5 17.4639V48H13.5469V23.3701L32 37.2959L50.4531 23.3701V47.9981H54.5V17.4639ZM58.5 48.3633C58.5 50.3716 56.8831 51.998 54.8867 51.998H48.4531L48.249 51.9873C47.3077 51.8917 46.5594 51.1435 46.4639 50.2022L46.4531 49.998V31.3994L32 42.3076L17.5469 31.3994V50L17.5361 50.2041C17.4339 51.2127 16.5824 51.9998 15.5469 52H9.11328L8.93555 51.9951C8.52149 51.9747 8.11328 51.8826 7.72949 51.7227C7.34598 51.5627 6.99343 51.3375 6.68652 51.0576L6.55762 50.9346C6.26399 50.639 6.02375 50.295 5.84668 49.918L5.77441 49.7549C5.59298 49.3137 5.49971 48.8408 5.5 48.3633V17.4639C5.50006 12.9699 10.5988 10.404 14.1719 13.1006L32 26.5528L49.8281 13.1006C53.399 10.4063 58.4999 12.9699 58.5 17.4639V48.3633Z",fill:"currentColor"}),(0,r.jsx)("path",{opacity:"0.2",d:"M59 48.3633V17.4639C59 12.9698 53.8987 10.4061 50.3279 13.1008L46.9535 15.6445L32.5 26.5523L18.0465 15.6489L14.6721 13.1008C11.099 10.4039 6 12.9698 6 17.4639V48.3633C5.99971 48.8408 6.09295 49.3136 6.27438 49.7549C6.45581 50.1961 6.72188 50.597 7.05739 50.9347C7.39291 51.2724 7.79128 51.5403 8.22975 51.7231C8.66823 51.9059 9.1382 52 9.61283 52H16.0465C17.151 52 18.0465 51.1046 18.0465 50V31.3997L32.5 42.3074L46.9535 31.3997V49.9978C46.9535 51.1023 47.849 51.9978 48.9535 51.9978H55.3872C57.3835 51.9978 59 50.3716 59 48.3633Z",fill:"currentColor"})]})},color:"#EA4335"},{name:"Outlook",icon:function(e){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M120,128a32,32,0,1,0-32,32A32,32,0,0,0,120,128Zm-48,0a16,16,0,1,1,16,16A16,16,0,0,1,72,128Zm152-24H208V40a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8V64H40A16,16,0,0,0,24,80v96a16,16,0,0,0,16,16H72v16a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V112A8,8,0,0,0,224,104Zm-58.34,60L216,127.65v72.7ZM112,48h80v77.24l-40,28.89V80a16,16,0,0,0-16-16H112ZM40,80h96v77.9c0,.12,0,.24,0,.36V176H40ZM88,192h48a16,16,0,0,0,16-16v-2.13L199.26,208H88Z"},child:[]}]})(e)},color:"#0078D4"},{name:"Slack",icon:function(e){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M221.13,128A32,32,0,0,0,184,76.31V56a32,32,0,0,0-56-21.13A32,32,0,0,0,76.31,72H56a32,32,0,0,0-21.13,56A32,32,0,0,0,72,179.69V200a32,32,0,0,0,56,21.13A32,32,0,0,0,179.69,184H200a32,32,0,0,0,21.13-56ZM72,152a16,16,0,1,1-16-16H72Zm48,48a16,16,0,0,1-32,0V152a16,16,0,0,1,16-16h16Zm0-80H56a16,16,0,0,1,0-32h48a16,16,0,0,1,16,16Zm0-48H104a16,16,0,1,1,16-16Zm16-16a16,16,0,0,1,32,0v48a16,16,0,0,1-16,16H136Zm16,160a16,16,0,0,1-16-16V184h16a16,16,0,0,1,0,32Zm48-48H152a16,16,0,0,1-16-16V136h64a16,16,0,0,1,0,32Zm0-48H184V104a16,16,0,1,1,16,16Z"},child:[]}]})(e)},color:"#E01E5A"},{name:"Microsoft Teams",icon:function(e){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M112,104a8,8,0,0,1-8,8H96v40a8,8,0,0,1-16,0V112H72a8,8,0,0,1,0-16h32A8,8,0,0,1,112,104ZM232,92.74V152a40,40,0,0,1-36.63,39.85,64,64,0,0,1-118.7.15H40a16,16,0,0,1-16-16V80A16,16,0,0,1,40,64H96.81a40,40,0,0,1,73.31-28.85A32,32,0,0,1,211.69,80h7.57A12.76,12.76,0,0,1,232,92.74ZM112,56a23.82,23.82,0,0,0,1.38,8H136a16,16,0,0,1,15.07,10.68A24,24,0,1,0,112,56Zm24,120h0V80H40v96h96Zm48-80H152v80a16,16,0,0,1-16,16H94.44A48,48,0,0,0,184,168Zm16-32a16,16,0,0,0-24.4-13.6A39.89,39.89,0,0,1,168,80h16A16,16,0,0,0,200,64Zm16,32H200v72a62.76,62.76,0,0,1-.36,6.75A24,24,0,0,0,216,152Z"},child:[]}]})(e)},color:"#6264A7"},{name:"WhatsApp Business",icon:function(e){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"},child:[]}]})(e)},color:"#25D366"},{name:"Zoom",icon:function(e){return p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5.033 14.649H.743a.74.74 0 0 1-.686-.458.74.74 0 0 1 .16-.808L3.19 10.41H1.06A1.06 1.06 0 0 1 0 9.35h3.957c.301 0 .57.18.686.458a.74.74 0 0 1-.161.808L1.51 13.59h2.464c.585 0 1.06.475 1.06 1.06zM24 11.338c0-1.14-.927-2.066-2.066-2.066-.61 0-1.158.265-1.537.686a2.061 2.061 0 0 0-1.536-.686c-1.14 0-2.066.926-2.066 2.066v3.311a1.06 1.06 0 0 0 1.06-1.06v-2.251a1.004 1.004 0 0 1 2.013 0v2.251c0 .586.474 1.06 1.06 1.06v-3.311a1.004 1.004 0 0 1 2.012 0v2.251c0 .586.475 1.06 1.06 1.06zM16.265 12a2.728 2.728 0 1 1-5.457 0 2.728 2.728 0 0 1 5.457 0zm-1.06 0a1.669 1.669 0 1 0-3.338 0 1.669 1.669 0 0 0 3.338 0zm-4.82 0a2.728 2.728 0 1 1-5.458 0 2.728 2.728 0 0 1 5.457 0zm-1.06 0a1.669 1.669 0 1 0-3.338 0 1.669 1.669 0 0 0 3.338 0z"},child:[]}]})(e)},color:"#2D8CFF"},{name:"iMessage",icon:function(e){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"},child:[]}]})(e)},color:"#30D158"},{name:"Google Drive",icon:function(e){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M237.6,143.78,169.13,31.52A15.91,15.91,0,0,0,155.56,24H100.43a15.89,15.89,0,0,0-13.56,7.52l-.05.07L18.44,143.7a16,16,0,0,0-.33,16.42l27.32,47.82A16,16,0,0,0,59.32,216H196.67a16,16,0,0,0,13.89-8.06l27.32-47.82A15.91,15.91,0,0,0,237.6,143.78ZM219,144H172.52L137.33,85.33l22.75-37.92Zm-116.87,0L128,100.88,153.87,144Zm61.34,16,24,40H68.53l24-40ZM128,69.78,110.12,40l35.78-.05ZM95.91,47.41l22.76,37.92L83.47,144H37ZM36.54,160H73.87L54.72,191.92Zm164.74,31.93L182.12,160h37.41Z"},child:[]}]})(e)},color:"#34A853"},{name:"OneDrive",icon:function(e){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M160,40A88.09,88.09,0,0,0,81.29,88.67,64,64,0,1,0,72,216h88a88,88,0,0,0,0-176Zm0,160H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.11A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,72,72Z"},child:[]}]})(e)},color:"#0078D4"},{name:"Dropbox",icon:function(e){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M236.55,149.42,194.05,120l42.5-29.42a8,8,0,0,0,0-13.16l-52-36a8,8,0,0,0-9.1,0L128,74.27,80.55,41.42a8,8,0,0,0-9.1,0l-52,36a8,8,0,0,0,0,13.16L62,120l-42.5,29.42a8,8,0,0,0,0,13.16l52,36a8,8,0,0,0,9.1,0L128,165.73l47.45,32.85a8,8,0,0,0,9.1,0l52-36a8,8,0,0,0,0-13.16ZM128,146.27,90.05,120l38-26.27L166,120Zm52-88.54L218,84,180,110.27,142.05,84Zm-104,0L114,84,76,110.27,38.05,84Zm0,124.54L38.05,156l38-26.27L114,156Zm104,0L142.05,156,180,129.73,218,156Zm-21.53,24.64a8,8,0,0,1-2,11.13l-23.89,16.54a8,8,0,0,1-9.1,0L99.56,218a8,8,0,0,1,9.1-13.16L128,218.27l19.34-13.39A8,8,0,0,1,158.47,206.91Z"},child:[]}]})(e)},color:"#0061FF"},{name:"Notion",icon:function(e){return p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"},child:[]}]})(e)},color:"#000000"},{name:"GitHub",icon:function(e){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"},child:[]}]})(e)},color:"#000000"},{name:"Calendar",icon:function(e){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"},child:[]}]})(e)},color:"#4285F4"}],k=[{name:"Aum Dhruv",role:"Chief Executive Officer",bio:"ORFE at Princeton. Built TigerMeet.org, used across Princeton, Penn, UF, and Brandeis for 10,000+ meetings. Two internships at Amazon building AR hardware. Worked at the SEC.",photo:`${y}/aum.webp`,linkedin:"https://www.linkedin.com/in/aumdhruv/",instagram:"https://www.instagram.com/aum.dhruv/"},{name:"Nick Harty",role:"Chief Technology Officer",bio:"Engineering & Economics at Wharton. Shipped product inside regulated institutions. Raised $20k non-dilutive. Coordinated 400 congressional offices for the Congressional App Challenge.",photo:`${y}/nick.webp`,linkedin:"https://www.linkedin.com/in/nicksheaharty/",instagram:"https://www.instagram.com/nicksheaharty/"}],A="#4429F2",C="#000000",M="#FFFFFF",Z="rgba(0, 0, 0, 0.08)",N="#E5E5EA",L="rgba(0, 0, 0, 0.4)",z="rgba(0, 0, 0, 0.1)",_="rgba(68, 41, 242, 0.10)",H={gmail:"#EA4335",imessage:"#30D158"},S={gmail:function(e){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M224,56l-96,88L32,56Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"},child:[]}]})(e)},imessage:function(e){return p({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M224,128A96,96,0,0,1,79.93,211.11h0L42.54,223.58a8,8,0,0,1-10.12-10.12l12.47-37.39h0A96,96,0,1,1,224,128Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"},child:[]}]})(e)}},O={gmail:"Gmail",imessage:"iMessage"},P={id:"boss",name:"Gary (your boss)",source:"gmail",time:"11:58 PM",inbound:'quick thing before tomorrow\'s 8am, need this "ASAP" 🙏🙏🙏',tasksTotal:4,tasks:['Decode what "quick thing" actually means',"Rebuild the deck Gary deleted by accident","Pretend the 11:58 PM email was totally normal","Draft a reply that hides how annoyed you are"],fileOn:1,file:"Deck_FINAL_v7_ForRealThisTime.pptx"},V={id:"mom",name:"Mom",time:"Just now",messages:[{from:"them",text:"Thanksgiving's at our place this year, 3pm. Let me know if you're bringing a side!",source:"gmail"},{from:"me",text:"yep, added it to the calendar and told everyone to bring a side, no ambush green bean casserole this year"}]};function E({t:e}){return(0,r.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:8},children:e.messages.map((e,t)=>{let a="me"===e.from,i=e.source?S[e.source]:null;return(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:a?"flex-end":"flex-start",gap:4},children:[i?(0,r.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11,fontWeight:600,color:H[e.source]},children:[(0,r.jsx)(i,{size:12}),O[e.source]]}):null,(0,r.jsx)("div",{style:{maxWidth:"85%",padding:"10px 14px",fontSize:14,lineHeight:1.45,background:a?"#007AFF":N,color:a?"#fff":C,borderRadius:18,borderTopLeftRadius:a?18:4,borderTopRightRadius:a?4:18},children:e.text})]},t)})})}function R({p:e}){let[t,a]=(0,i.useState)(!0),n=H[e.source],o=S[e.source],{tasks:s,tasksTotal:l,inbound:d,fileOn:c,file:p}=e;return(0,r.jsxs)("div",{className:"app-message-card",style:{background:M,border:`1px solid ${Z}`},children:[(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"14px 14px 12px"},children:[(0,r.jsx)("div",{style:{width:36,height:36,borderRadius:18,background:n,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,color:"#fff",fontSize:15,fontWeight:700},children:e.name.charAt(0)}),(0,r.jsxs)("div",{style:{flex:1,minWidth:0},children:[(0,r.jsx)("div",{style:{fontSize:14,fontWeight:600,color:C,marginBottom:3},children:e.name}),(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},children:[(0,r.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:4,background:n+"20",padding:"3px 7px",borderRadius:6},children:[(0,r.jsx)(o,{size:12,style:{color:n}}),(0,r.jsx)("span",{style:{fontSize:11,fontWeight:600,color:n},children:O[e.source]})]}),(0,r.jsx)("span",{style:{fontSize:11,color:L},children:e.time})]})]})]}),(0,r.jsx)("div",{style:{padding:"0 14px 14px"},children:(0,r.jsx)("div",{style:{maxWidth:"85%",padding:"10px 14px",fontSize:14,lineHeight:1.45,background:N,color:C,borderRadius:18,borderTopLeftRadius:4},children:d})}),(0,r.jsx)("div",{style:{height:1,background:z,margin:"0 14px"}}),(0,r.jsxs)("div",{style:{padding:"12px 14px 14px"},children:[(0,r.jsxs)("button",{type:"button","aria-expanded":t,"aria-controls":"completed-tasks",onClick:()=>a(!t),className:"task-disclosure",style:{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between",cursor:"pointer",padding:0,border:0,background:"transparent"},children:[(0,r.jsxs)("span",{style:{fontSize:13,fontWeight:600,color:A},children:[l," Task",1===l?"":"s"," Completed"]}),(0,r.jsx)(x,{size:14,style:{color:A,transform:t?"rotate(180deg)":"none",transition:"transform .2s"}})]}),(0,r.jsx)("div",{id:"completed-tasks",className:`task-list${t?" is-expanded":""}`,"aria-hidden":!t,children:(0,r.jsx)("div",{className:"task-list-inner",style:{marginTop:12},children:s.map((e,t)=>(0,r.jsxs)("div",{style:{display:"flex",gap:0,position:"relative",paddingBottom:16*(t!==s.length-1)},children:[(0,r.jsxs)("div",{style:{position:"relative",width:22,flexShrink:0},children:[(0,r.jsx)("div",{style:{width:22,height:22,borderRadius:11,background:_,display:"flex",alignItems:"center",justifyContent:"center",position:"relative",zIndex:2},children:(0,r.jsx)(f,{size:11,style:{color:A}})}),t<s.length-1?(0,r.jsx)("div",{style:{position:"absolute",top:22,bottom:-16,left:10.5,width:1.5,background:z}}):null]}),(0,r.jsxs)("div",{style:{flex:1,paddingLeft:10},children:[(0,r.jsx)("div",{style:{fontSize:12,fontWeight:600,color:C},children:e}),t===c?(0,r.jsx)("div",{style:{display:"inline-flex",alignItems:"center",gap:4,marginTop:6,background:"rgba(0,0,0,0.06)",padding:"4px 8px",borderRadius:6},children:(0,r.jsx)("span",{style:{fontSize:11,color:L},children:p})}):null]})]},e))})})]})]})}e.s(["default",0,function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"bg-container","aria-hidden":"true"}),(0,r.jsx)(b.default,{}),(0,r.jsxs)("main",{className:"flex flex-col flex-1",children:[(0,r.jsxs)("section",{className:"hero-section",children:[(0,r.jsx)("div",{className:"hero-glow"}),(0,r.jsxs)("div",{className:"container hero-container",children:[(0,r.jsx)("span",{className:"eyebrow",children:"Your Inbox on Autopilot"}),(0,r.jsxs)("h1",{className:"hero-title",children:[(0,r.jsx)("span",{className:"hero-title-line",children:"Turn your inbox into"}),(0,r.jsx)("span",{className:"hero-title-line hero-accent",children:"completed work."})]}),(0,r.jsx)("p",{className:"hero-sub",children:"Stop copying emails into AI, digging through files, and coordinating schedules. Synced is an AI inbox assistant that connects to your email, messages, cloud storage, and calendar to handle the busywork for you."}),(0,r.jsx)("div",{className:"hero-ctas",children:(0,r.jsxs)("a",{href:v,className:"btn-primary btn-lg",children:["Get Early Access",(0,r.jsx)(g,{size:18})]})}),(0,r.jsx)("p",{className:"hero-footnote",children:"Coming soon · Be first to access"}),(0,r.jsx)("div",{className:"hero-3d-wrap",children:(0,r.jsx)(a.default,{src:`${y}/logo3d.webp`,alt:"Synced AI inbox assistant logo",width:720,height:683,priority:!0,sizes:"(max-width: 640px) 78vw, 360px",className:"hero-3d-img"})})]})]}),(0,r.jsx)("section",{className:"app-showcase-section",children:(0,r.jsxs)("div",{className:"container app-showcase-inner",children:[(0,r.jsxs)("div",{className:"app-showcase-copy",children:[(0,r.jsx)("div",{className:"uppercase-label",children:"Inside Synced"}),(0,r.jsxs)("h2",{className:"section-heading",children:["Even your worst",(0,r.jsx)("br",{}),"senders get handled."]}),(0,r.jsx)("p",{className:"section-sub",children:'An 11:58 PM "quick thing" from your boss becomes a rebuilt deck and a diplomatic reply, before you\'ve even opened your laptop.'})]}),(0,r.jsx)("div",{className:"app-showcase-card-wrap",children:(0,r.jsx)(R,{p:P})})]})}),(0,r.jsx)("section",{id:"integrations",className:"agency-section",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("p",{className:"uppercase-label",children:"Connects to your favorite tools"}),(0,r.jsx)("div",{className:"agency-badges",children:j.map(({name:e,icon:t,color:a})=>(0,r.jsxs)("span",{className:"agency-badge",children:[(0,r.jsx)("span",{className:"integration-icon-wrap",children:(0,r.jsx)(t,{size:22,style:{color:a,flexShrink:0}})}),(0,r.jsx)("span",{className:"integration-name",children:e})]},e))})]})}),(0,r.jsx)("section",{id:"features",className:"features-section",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"section-header features-header",children:[(0,r.jsxs)("div",{className:"section-header-copy",children:[(0,r.jsx)("div",{className:"uppercase-label",children:"How Synced works"}),(0,r.jsxs)("h2",{className:"section-heading",children:["Email as easy as",(0,r.jsx)("br",{}),"iMessage."]}),(0,r.jsx)("p",{className:"section-sub",children:"Synced learns what you need, finds the information, drafts responses, and manages follow-ups, all while asking for input only when it matters."})]}),(0,r.jsx)("div",{className:"features-header-card",children:(0,r.jsxs)("div",{className:"product-window message-window",children:[(0,r.jsxs)("div",{className:"product-window-bar",children:[(0,r.jsx)("span",{className:"window-dot"}),(0,r.jsx)("span",{className:"window-dot"}),(0,r.jsx)("span",{className:"window-dot"}),(0,r.jsx)("span",{className:"window-title",children:"Synced"})]}),(0,r.jsx)("div",{className:"product-window-content",children:(0,r.jsx)(E,{t:V})})]})})]}),(0,r.jsx)("div",{className:"feature-grid",children:w.map(({icon:e,title:t,body:a})=>(0,r.jsxs)("article",{className:"feature-card",children:[(0,r.jsx)("div",{className:"feature-icon-wrap",children:(0,r.jsx)(e,{size:22})}),(0,r.jsxs)("div",{className:"feature-copy",children:[(0,r.jsx)("h3",{className:"feature-title",children:t}),(0,r.jsx)("p",{className:"feature-body",children:a})]})]},t))})]})}),(0,r.jsx)("section",{id:"team",className:"team-section",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"section-header",children:[(0,r.jsx)("div",{className:"uppercase-label",children:"The team"}),(0,r.jsxs)("h2",{className:"section-heading",children:["Built by people who know",(0,r.jsx)("br",{}),"the pain of inbox overload."]}),(0,r.jsx)("p",{className:"section-sub",children:"Building together since middle school."})]}),(0,r.jsx)("div",{className:"team-grid",children:k.map(({name:e,role:t,bio:i,photo:n,linkedin:o,instagram:s})=>(0,r.jsxs)("div",{className:"team-card",children:[(0,r.jsxs)("div",{className:"team-card-top",children:[(0,r.jsx)(a.default,{src:n,alt:e,width:52,height:52,sizes:"52px",className:"team-photo"}),(0,r.jsxs)("div",{className:"team-info",children:[(0,r.jsx)("div",{className:"team-name",children:e}),(0,r.jsx)("div",{className:"team-role",children:t})]}),(0,r.jsxs)("div",{className:"team-social-links",children:[(0,r.jsx)("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"team-social-btn","aria-label":`${e} on LinkedIn`,children:(0,r.jsx)(h,{size:22})}),(0,r.jsx)("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"team-social-btn","aria-label":`${e} on Instagram`,children:(0,r.jsx)(u,{size:22})})]})]}),(0,r.jsx)("p",{className:"team-bio",children:i})]},e))})]})}),(0,r.jsx)("section",{className:"cta-section",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"cta-inner",children:[(0,r.jsxs)("div",{className:"cta-copy-block",children:[(0,r.jsx)("div",{className:"uppercase-label",children:"Get started"}),(0,r.jsxs)("h2",{className:"cta-title",children:["Make your inbox",(0,r.jsx)("br",{}),"work for you."]}),(0,r.jsx)("p",{className:"cta-sub",children:"Join thousands ready to reclaim their time. Synced handles the busywork, you focus on what matters."})]}),(0,r.jsxs)("a",{href:v,className:"btn-primary btn-lg",children:["Get Early Access",(0,r.jsx)(g,{size:18})]})]})})})]}),(0,r.jsx)("footer",{className:"site-footer",children:(0,r.jsxs)("div",{className:"container footer-inner",children:[(0,r.jsxs)("a",{href:`${y}/`,"aria-label":"Synced home",className:"nav-logo",children:[(0,r.jsx)("img",{src:`${y}/icon-light.png`,alt:"",width:20,height:20,className:"nav-icon"}),(0,r.jsx)(b.LogoText,{small:!0})]}),(0,r.jsxs)("nav",{className:"footer-links",children:[(0,r.jsx)("a",{href:v,className:"footer-link",children:"Get Early Access"}),(0,r.jsx)("a",{href:`${y}/privacy`,className:"footer-link",children:"Privacy"}),(0,r.jsx)("a",{href:`${y}/terms`,className:"footer-link",children:"Terms"})]}),(0,r.jsxs)("div",{className:"footer-social-links",children:[(0,r.jsx)("a",{href:"https://www.linkedin.com/company/syncedinbox/",target:"_blank",rel:"noopener noreferrer",className:"footer-social-btn","aria-label":"Synced on LinkedIn",children:(0,r.jsx)(h,{size:20})}),(0,r.jsx)("a",{href:"https://www.instagram.com/synced.it/",target:"_blank",rel:"noopener noreferrer",className:"footer-social-btn","aria-label":"Synced on Instagram",children:(0,r.jsx)(u,{size:20})})]}),(0,r.jsx)("span",{className:"footer-copy",children:"© 2026 Synced"})]})}),(0,r.jsx)("style",{children:`

        main, nav, footer { position: relative; z-index: 2; }

        /* ── Glassmorphic & Reactive Cards ── */
        .feature-card,
        .team-card {
          position: relative;
          overflow: hidden;
          background: color-mix(in srgb, hsl(var(--card)) 65%, transparent);
          -webkit-backdrop-filter: blur(12px);
          backdrop-filter: blur(12px);
          border: 1px solid hsl(var(--border) / 0.6);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.015);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      background-color 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }

        .feature-card:hover,
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
        .team-card:hover::before {
          opacity: 1;
        }

        /* Ensure card contents stay on top of the relative glow */
        .feature-card > *,
        .team-card > * {
          position: relative;
          z-index: 1;
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
          text-align: left;
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
          cursor: url('${y}/icon-cursor.png') 16 16, pointer;
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
        .team-social-links {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-shrink: 0;
          margin-left: auto;
        }
        .team-social-btn {
          color: hsl(var(--primary));
          opacity: 0.7;
          transition: opacity .15s, transform .15s;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .team-social-btn:hover { opacity: 1; transform: scale(1.1); }
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

/* ── Footer ── */
        .footer-social-links {
          display: flex;
          gap: 0.75rem;
        }
        .footer-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          color: hsl(var(--muted-fg));
          opacity: 0.85;
          transition: opacity .15s, color .15s;
        }
        .footer-social-btn:hover { opacity: 1; color: hsl(var(--fg)); }

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

        /* ── 2026 spatial system: quiet, product-led, and physically responsive ── */
        main, nav, footer { position: relative; z-index: 2; }

        .feature-card,
        .team-card {
          background: transparent;
          -webkit-backdrop-filter: none;
          backdrop-filter: none;
          border: 0;
          box-shadow: none;
          will-change: auto;
        }
        .feature-card:hover,
        .team-card:hover {
          transform: none;
          background: transparent;
          border-color: transparent;
          box-shadow: none;
        }
        .feature-card::before,
        .team-card::before { display: none; }

        .hero-section {
          min-height: min(860px, 92svh);
          display: flex;
          align-items: center;
          padding: 10rem 0 7rem;
          overflow: clip;
        }
        .hero-glow {
          top: -28rem;
          left: 50%;
          width: 80rem;
          height: 58rem;
          transform: translateX(-50%);
          background: radial-gradient(ellipse, hsl(var(--primary) / .095), transparent 66%);
        }
        .hero-container { padding-right: min(36vw, 24rem); }
        .eyebrow {
          padding: 0;
          margin-bottom: 1.35rem;
          border: 0;
          border-radius: 0;
          background: transparent;
          box-shadow: none;
          letter-spacing: .08em;
        }
        .hero-title {
          font-size: clamp(2.75rem, 5vw, 4.15rem);
          line-height: 1.03;
          letter-spacing: -.04em;
          max-width: 720px;
          margin-bottom: 1.75rem;
        }
        .hero-sub { max-width: 600px; font-size: clamp(1rem, 1.7vw, 1.16rem); line-height: 1.62; }
        .hero-footnote { opacity: .78; }
        .hero-3d-wrap { margin-right: 0; }
        @media (min-width: 1024px) {
          .hero-3d-wrap {
            top: 51%;
            right: clamp(1rem, 3vw, 2.5rem);
            width: clamp(270px, 29vw, 370px);
            height: auto;
            animation: none;
          }
          .hero-3d-img { filter: drop-shadow(0 28px 42px rgba(68, 41, 242, .13)); }
        }

        .app-showcase-section { padding: 7rem 0; }
        .app-showcase-inner { grid-template-columns: minmax(0, .85fr) minmax(380px, 1fr); gap: clamp(3rem, 8vw, 8rem); }
        .app-showcase-copy { max-width: 440px; }
        .app-showcase-card-wrap { width: 100%; max-width: 500px; transform: none; transition: none; }
        .app-showcase-card-wrap:hover { transform: none; }
        .product-window {
          overflow: hidden;
          border: 1px solid hsl(var(--card) / .88);
          border-radius: 26px;
          background: color-mix(in srgb, hsl(var(--card)) 72%, transparent);
          -webkit-backdrop-filter: blur(28px) saturate(150%);
          backdrop-filter: blur(28px) saturate(150%);
          box-shadow: 0 34px 80px rgba(35, 27, 72, .11), inset 0 1px 0 hsl(var(--card));
        }
        .product-window-bar {
          position: relative;
          display: flex;
          align-items: center;
          gap: 7px;
          height: 48px;
          padding: 0 18px;
          border-bottom: 1px solid hsl(var(--border) / .7);
        }
        .window-dot { width: 8px; height: 8px; border-radius: 50%; background: hsl(var(--muted-fg) / .28); }
        .window-title { position: absolute; inset-inline: 0; text-align: center; font-size: .76rem; font-weight: 700; color: hsl(var(--muted-fg)); }
        .product-window-content { padding: clamp(1rem, 3vw, 1.5rem); background: hsl(var(--muted) / .55); }
        .app-showcase-card-wrap .app-message-card {
          border-radius: 22px;
          box-shadow: 0 24px 64px rgba(35, 27, 72, .11), 0 0 0 1px hsl(var(--border) / .55);
        }
        .task-disclosure { min-height: 28px; border-radius: 8px !important; transition: background-color .18s ease, transform 80ms ease; }
        .task-disclosure:hover { background: hsl(var(--primary) / .055) !important; }
        .task-disclosure:active { transform: scale(.985); }
        .task-disclosure:focus-visible { outline: 3px solid hsl(var(--primary) / .24); outline-offset: 3px; }
        .task-list { display: grid; grid-template-rows: 0fr; opacity: 0; transition: grid-template-rows .4s cubic-bezier(.22, 1, .36, 1), opacity .2s ease; }
        .task-list.is-expanded { grid-template-rows: 1fr; opacity: 1; }
        .task-list-inner { min-height: 0; overflow: hidden; }

        .agency-section { padding: 5rem 0; margin: 0; border-top: 1px solid hsl(var(--border) / .75); border-bottom: 1px solid hsl(var(--border) / .75); }
        .agency-section .uppercase-label { margin-bottom: 1.75rem; }
        .agency-badges {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.1rem .8rem;
          max-width: 960px;
          margin-inline: auto;
        }
        .agency-badge {
          flex: 0 1 112px;
          min-width: 0;
          min-height: 92px;
          padding: .25rem;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: .65rem;
          border: 0;
          border-radius: 0;
          background: transparent;
          box-shadow: none;
          opacity: .8;
          transition: opacity .18s ease, transform 80ms ease;
        }
        .agency-badge:hover { background: transparent; box-shadow: none; transform: none; opacity: 1; }
        .agency-badge:active { transform: scale(.97); }
        .integration-icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          flex: 0 0 52px;
          border: 1px solid hsl(var(--border) / .62);
          border-radius: 13px;
          background: hsl(var(--card));
          box-shadow: 0 5px 14px rgba(35, 27, 72, .07), inset 0 1px 0 hsl(var(--card));
          transition: transform .32s cubic-bezier(.22, 1, .36, 1), box-shadow .18s ease;
        }
        .integration-icon-wrap svg { width: 26px; height: 26px; }
        .agency-badge:hover .integration-icon-wrap { transform: scale(1.06); box-shadow: 0 8px 20px rgba(35, 27, 72, .1), inset 0 1px 0 hsl(var(--card)); }
        .integration-name {
          overflow: hidden;
          max-width: 100%;
          font-size: .74rem;
          line-height: 1.25;
          text-align: center;
          text-overflow: ellipsis;
        }

        .features-section { padding: 8rem 0; border-top: 0; }
        .team-section { padding: 8rem 0 4rem; border-top: 0; }
        .features-section { background: hsl(var(--card) / .46); }
        .features-header { align-items: flex-end; margin-bottom: 4rem; }
        .features-header-card { width: min(380px, 100%); }
        .message-window { border-radius: 24px; box-shadow: 0 22px 52px rgba(35, 27, 72, .09), inset 0 1px 0 hsl(var(--card)); }
        .message-window .product-window-bar { height: 44px; }
        .message-window .product-window-content { padding: 1.25rem; }
        .uppercase-label { letter-spacing: .08em; }
        .section-heading { font-size: clamp(2rem, 4.5vw, 3.25rem); line-height: 1.04; letter-spacing: -.035em; margin-bottom: 1rem; }
        .section-sub { line-height: 1.62; }
        .feature-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 0;
          overflow: hidden;
          border: 1px solid hsl(var(--border) / .85);
          border-radius: 24px;
          background: hsl(var(--card));
          box-shadow: 0 20px 55px rgba(35, 27, 72, .055);
        }
        .feature-card {
          display: flex;
          align-items: flex-start;
          gap: 1.1rem;
          padding: 2rem;
          border-bottom: 1px solid hsl(var(--border) / .75);
          transition: background-color .18s ease;
        }
        .feature-card:hover { background: hsl(var(--primary) / .035); }
        .feature-card:active { background: hsl(var(--primary) / .055); }
        .feature-card:nth-child(odd) { border-right: 1px solid hsl(var(--border) / .75); }
        .feature-card:nth-last-child(-n + 2) { border-bottom: 0; }
        .feature-icon-wrap {
          flex: 0 0 auto;
          margin: 0;
          border-radius: 12px;
          transition: transform .32s cubic-bezier(.22, 1, .36, 1), background-color .18s ease;
        }
        .feature-card:hover .feature-icon-wrap { transform: scale(1.06); background: hsl(var(--primary) / .14); }
        .feature-card:active .feature-icon-wrap { transform: scale(.96); transition-duration: 80ms; }
        .feature-copy { min-width: 0; }
        .feature-title { font-size: .95rem; margin-bottom: .45rem; }
        .feature-body { line-height: 1.58; }

        .team-section { border-top: 1px solid hsl(var(--border) / .7); }
        .team-grid { gap: 0; border-top: 1px solid hsl(var(--border)); border-bottom: 1px solid hsl(var(--border)); }
        .team-card { padding: 2rem 2rem 2rem 0; border-radius: 0; }
        .team-card + .team-card { padding-left: 2rem; border-left: 1px solid hsl(var(--border)); }
        .team-photo { border: 0; }
        .team-social-btn, .footer-social-btn { min-width: 36px; min-height: 36px; justify-content: center; border-radius: 50%; transition: background-color .18s ease, opacity .18s ease, transform 80ms ease; }
        .team-social-btn:hover, .footer-social-btn:hover { transform: none; background: hsl(var(--primary) / .08); }
        .team-social-btn:active, .footer-social-btn:active { transform: scale(.92); }

        .cta-section { padding: 4rem 0 8rem; border-top: 0; }
        .cta-inner {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          align-items: center;
          gap: clamp(2rem, 7vw, 6rem);
          text-align: left;
          padding: clamp(2.5rem, 5vw, 4rem);
          border: 1px solid hsl(var(--border) / .7);
          border-radius: 32px;
          background:
            radial-gradient(circle at 92% 15%, hsl(var(--primary) / .09), transparent 34%),
            hsl(var(--card) / .78);
          box-shadow: 0 24px 70px rgba(35, 27, 72, .06), inset 0 1px 0 hsl(var(--card));
        }
        .cta-copy-block { min-width: 0; }
        .cta-copy-block .uppercase-label { margin-bottom: .8rem; }
        .cta-title { font-size: clamp(2.25rem, 4.5vw, 3.6rem); }
        .cta-sub { max-width: 520px; margin-top: 1rem; }
        .cta-inner > .btn-primary { min-width: 190px; justify-content: center; }
        .site-footer { border-color: hsl(var(--border) / .75); }
        .footer-link { padding: .5rem 0; }

        @media (max-width: 900px) {
          .hero-section { min-height: auto; }
          .hero-container { padding-right: clamp(1rem, 5vw, 2rem); }
          .app-showcase-inner { grid-template-columns: 1fr; }
          .features-header { align-items: flex-start; }
          .cta-inner { grid-template-columns: 1fr; justify-items: start; }
          .agency-badge { flex-basis: 104px; }
        }
        @media (max-width: 640px) {
          .hero-section { padding: 8.5rem 0 5rem; }
          .hero-title { font-size: clamp(2.5rem, 12.5vw, 3.7rem); }
          .hero-title-line { white-space: normal; }
          .hero-sub { line-height: 1.55; }
          .app-showcase-section, .features-section { padding: 5rem 0; }
          .agency-section { padding: 3.25rem 0; }
          .agency-section .uppercase-label { margin-bottom: 1.25rem; }
          .agency-badges { gap: .65rem .2rem; }
          .agency-badge { flex: 0 1 calc(33.333% - .2rem); min-height: 88px; padding: 0; gap: .45rem; }
          .integration-icon-wrap { width: 58px; height: 58px; flex-basis: 58px; border-radius: 15px; }
          .integration-icon-wrap svg { width: 30px; height: 30px; }
          .integration-name { font-size: .7rem; line-height: 1.15; }
          .team-section { padding: 5rem 0 2.5rem; }
          .cta-section { padding: 2rem 0 4rem; }
          .cta-section > .container { padding-inline: 1.5rem; }
          .product-window { border-radius: 22px; }
          .product-window-content { padding: .75rem; }
          .feature-grid { grid-template-columns: 1fr; border-radius: 20px; }
          .feature-card { padding: 1.4rem; border-right: 0 !important; border-bottom: 1px solid hsl(var(--border) / .75) !important; }
          .feature-card:last-child { border-bottom: 0 !important; }
          .team-grid { grid-template-columns: 1fr; }
          .team-card { padding: 1.5rem 0; }
          .team-card + .team-card { padding-left: 0; border-left: 0; border-top: 1px solid hsl(var(--border)); }
          .cta-inner {
            gap: 1.4rem;
            border-radius: 22px;
            padding: 1.75rem 1.25rem 1.25rem;
            background:
              radial-gradient(circle at 100% 0%, hsl(var(--primary) / .075), transparent 42%),
              hsl(var(--card) / .82);
          }
          .cta-copy-block .uppercase-label { margin-bottom: .55rem; font-size: .66rem; }
          .cta-title { font-size: clamp(1.9rem, 10vw, 2.45rem); line-height: 1.03; letter-spacing: -.035em; }
          .cta-sub { margin-top: .75rem; font-size: .92rem; line-height: 1.5; }
          .cta-inner > .btn-primary { width: 100%; min-width: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-3d-wrap, .app-showcase-card-wrap, .agency-badge { transform: none !important; }
          .task-list { transition: opacity .2s ease; }
        }
        @media (prefers-reduced-transparency: reduce) {
          .product-window, .synced-nav.scrolled { background: hsl(var(--card)); -webkit-backdrop-filter: none; backdrop-filter: none; }
        }
        @media (prefers-contrast: more) {
          .product-window, .feature-grid, .cta-inner, .features-header-card { border-color: hsl(var(--fg)); }
        }
      `})]})}],31713)}]);