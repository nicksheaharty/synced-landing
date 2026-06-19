(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,88143,(e,t,r)=>{"use strict";function a({widthInt:e,heightInt:t,blurWidth:r,blurHeight:i,blurDataURL:n,objectFit:o}){let s=r?40*r:e,l=i?40*i:t,c=s&&l?`viewBox='0 0 ${s} ${l}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${c}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${c?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${n}'/%3E%3C/svg%3E`}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return a}})},87690,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={VALID_LOADERS:function(){return n},imageConfigDefault:function(){return o}};for(var i in a)Object.defineProperty(r,i,{enumerable:!0,get:a[i]});let n=["default","imgix","cloudinary","akamai","custom"],o={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},8927,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return c}}),e.r(33525);let a=e.r(43369),i=e.r(88143),n=e.r(87690),o=["-moz-initial","fill","none","scale-down",void 0];function s(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function c({src:e,sizes:t,unoptimized:r=!1,priority:d=!1,preload:u=!1,loading:m,className:f,quality:p,width:h,height:g,fill:b=!1,style:v,overrideSrc:x,onLoad:y,onLoadingComplete:w,placeholder:j="empty",blurDataURL:N,fetchPriority:O,decoding:_="async",layout:C,objectFit:P,objectPosition:S,lazyBoundary:k,lazyRoot:E,...A},M){var z;let R,H,V,{imgConf:Z,showAltText:I,blurComplete:T,defaultLoader:D}=M,B=Z||n.imageConfigDefault;if("allSizes"in B)R=B;else{let e=[...B.deviceSizes,...B.imageSizes].sort((e,t)=>e-t),t=B.deviceSizes.sort((e,t)=>e-t),r=B.qualities?.sort((e,t)=>e-t);R={...B,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===D)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let $=A.loader||D;delete A.loader,delete A.srcSet;let F="__next_img_default"in $;if(F){if("custom"===R.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=$;$=t=>{let{config:r,...a}=t;return e(a)}}if(C){"fill"===C&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(v={...v,...e});let r={responsive:"100vw",fill:"100vw"}[C];r&&!t&&(t=r)}let L="",U=l(h),W=l(g);if((z=e)&&"object"==typeof z&&(s(z)||void 0!==z.src)){let t=s(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(H=t.blurWidth,V=t.blurHeight,N=N||t.blurDataURL,L=t.src,!b)if(U||W){if(U&&!W){let e=U/t.width;W=Math.round(t.height*e)}else if(!U&&W){let e=W/t.height;U=Math.round(t.width*e)}}else U=t.width,W=t.height}let q=!d&&!u&&("lazy"===m||void 0===m);(!(e="string"==typeof e?e:L)||e.startsWith("data:")||e.startsWith("blob:"))&&(r=!0,q=!1),R.unoptimized&&(r=!0),F&&!R.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(r=!0);let G=l(p),Y=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:S}:{},I?{}:{color:"transparent"},v),X=T||"empty"===j?null:"blur"===j?`url("data:image/svg+xml;charset=utf-8,${(0,i.getImageBlurSvg)({widthInt:U,heightInt:W,blurWidth:H,blurHeight:V,blurDataURL:N||"",objectFit:Y.objectFit})}")`:`url("${j}")`,J=o.includes(Y.objectFit)?"fill"===Y.objectFit?"100% 100%":"cover":Y.objectFit,K=X?{backgroundSize:J,backgroundPosition:Y.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},Q=function({config:e,src:t,unoptimized:r,width:i,quality:n,sizes:o,loader:s}){if(r){if(t.startsWith("/")&&!t.startsWith("//")){let e=(0,a.getDeploymentId)();if(e){let r=t.indexOf("?");if(-1!==r){let a=new URLSearchParams(t.slice(r+1));a.get("dpl")||(a.append("dpl",e),t=t.slice(0,r)+"?"+a.toString())}else t+=`?dpl=${e}`}}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:l,kind:c}=function({deviceSizes:e,allSizes:t},r,a){if(a){let r=/(^|\s)(1?\d?\d)vw/g,i=[];for(let e;e=r.exec(a);)i.push(parseInt(e[2]));if(i.length){let r=.01*Math.min(...i);return{widths:t.filter(t=>t>=e[0]*r),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof r?{widths:e,kind:"w"}:{widths:[...new Set([r,2*r].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,i,o),d=l.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:l.map((r,a)=>`${s({config:e,src:t,quality:n,width:r})} ${"w"===c?r:a+1}${c}`).join(", "),src:s({config:e,src:t,quality:n,width:l[d]})}}({config:R,src:e,unoptimized:r,width:U,quality:G,sizes:t,loader:$}),ee=q?"lazy":m;return{props:{...A,loading:ee,fetchPriority:O,width:U,height:W,decoding:_,className:f,style:{...Y,...K},sizes:Q.sizes,srcSet:Q.srcSet,src:x||Q.src},meta:{unoptimized:r,preload:u||d,placeholder:j,fill:b}}}},98879,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return s}});let a=e.r(71645),i="u"<typeof window,n=i?()=>{}:a.useLayoutEffect,o=i?()=>{}:a.useEffect;function s(e){let{headManager:t,reduceComponentsToState:r}=e;function s(){if(t&&t.mountedInstances){let e=a.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return i&&(t?.mountedInstances?.add(e.children),s()),n(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),n(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},25633,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return h},defaultHead:function(){return u}};for(var i in a)Object.defineProperty(r,i,{enumerable:!0,get:a[i]});let n=e.r(55682),o=e.r(90809),s=e.r(43476),l=o._(e.r(71645)),c=n._(e.r(98879)),d=e.r(42732);function u(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function m(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(33525);let f=["name","httpEquiv","charSet","itemProp"];function p(e){let t,r,a,i;return e.reduce(m,[]).reverse().concat(u().reverse()).filter((t=new Set,r=new Set,a=new Set,i={},e=>{let n=!0,o=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){o=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?n=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?n=!1:r.add(e.type);break;case"meta":for(let t=0,r=f.length;t<r;t++){let r=f[t];if(e.props.hasOwnProperty(r))if("charSet"===r)a.has(r)?n=!1:a.add(r);else{let t=e.props[r],a=i[r]||new Set;("name"!==r||!o)&&a.has(t)?n=!1:(a.add(t),i[r]=a)}}}return n})).reverse().map((e,t)=>{let r=e.key||t;return l.default.cloneElement(e,{key:r})})}let h=function({children:e}){let t=(0,l.useContext)(d.HeadManagerContext);return(0,s.jsx)(c.default,{reduceComponentsToState:p,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18556,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return n}});let a=e.r(55682)._(e.r(71645)),i=e.r(87690),n=a.default.createContext(i.imageConfigDefault)},65856,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return a}});let a=e.r(55682)._(e.r(71645)).default.createContext(null)},70965,(e,t,r)=>{"use strict";function a(e,t){let r=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,t.qualities[0]):r}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"findClosestQuality",{enumerable:!0,get:function(){return a}})},1948,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return o}});let a=e.r(70965),i=e.r(43369);function n({config:e,src:t,width:r,quality:o}){let s=(0,i.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")){let e=t.indexOf("?");if(-1!==e){let r=new URLSearchParams(t.slice(e+1)),a=r.get("dpl");if(a){s=a,r.delete("dpl");let i=r.toString();t=t.slice(0,e)+(i?"?"+i:"")}}}if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let l=(0,a.findClosestQuality)(o,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${l}${t.startsWith("/")&&s?`&dpl=${s}`:""}`}n.__next_img_default=!0;let o=n},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return i}});let a=e.r(71645);function i(e,t){let r=(0,a.useRef)(null),i=(0,a.useRef)(null);return(0,a.useCallback)(a=>{if(null===a){let e=r.current;e&&(r.current=null,e());let t=i.current;t&&(i.current=null,t())}else e&&(r.current=n(e,a)),t&&(i.current=n(t,a))},[e,t])}function n(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},5500,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Image",{enumerable:!0,get:function(){return y}});let a=e.r(55682),i=e.r(90809),n=e.r(43476),o=i._(e.r(71645)),s=a._(e.r(74080)),l=a._(e.r(25633)),c=e.r(8927),d=e.r(87690),u=e.r(18556);e.r(33525);let m=e.r(65856),f=a._(e.r(1948)),p=e.r(18581),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,r,a,i,n,o){let s=e?.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),r?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{a=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}a?.current&&a.current(e)}}))}function b(e){return o.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let v=(0,o.forwardRef)(({src:e,srcSet:t,sizes:r,height:a,width:i,decoding:s,className:l,style:c,fetchPriority:d,placeholder:u,loading:m,unoptimized:f,fill:h,onLoadRef:v,onLoadingCompleteRef:x,setBlurComplete:y,setShowAltText:w,sizesInput:j,onLoad:N,onError:O,..._},C)=>{let P=(0,o.useCallback)(e=>{e&&(O&&(e.src=e.src),e.complete&&g(e,u,v,x,y,f,j))},[e,u,v,x,y,O,f,j]),S=(0,p.useMergedRef)(C,P);return(0,n.jsx)("img",{..._,...b(d),loading:m,width:i,height:a,decoding:s,"data-nimg":h?"fill":"1",className:l,style:c,sizes:r,srcSet:t,src:e,ref:S,onLoad:e=>{g(e.currentTarget,u,v,x,y,f,j)},onError:e=>{w(!0),"empty"!==u&&y(!0),O&&O(e)}})});function x({isAppRouter:e,imgAttributes:t}){let r={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...b(t.fetchPriority)};return e&&s.default.preload?(s.default.preload(t.src,r),null):(0,n.jsx)(l.default,{children:(0,n.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...r},"__nimg-"+t.src+t.srcSet+t.sizes)})}let y=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(m.RouterContext),a=(0,o.useContext)(u.ImageConfigContext),i=(0,o.useMemo)(()=>{let e=h||a||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t),i=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r,qualities:i,localPatterns:"u"<typeof window?a?.localPatterns:e.localPatterns}},[a]),{onLoad:s,onLoadingComplete:l}=e,p=(0,o.useRef)(s);(0,o.useEffect)(()=>{p.current=s},[s]);let g=(0,o.useRef)(l);(0,o.useEffect)(()=>{g.current=l},[l]);let[b,y]=(0,o.useState)(!1),[w,j]=(0,o.useState)(!1),{props:N,meta:O}=(0,c.getImgProps)(e,{defaultLoader:f.default,imgConf:i,blurComplete:b,showAltText:w});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(v,{...N,unoptimized:O.unoptimized,placeholder:O.placeholder,fill:O.fill,onLoadRef:p,onLoadingCompleteRef:g,setBlurComplete:y,setShowAltText:j,sizesInput:e.sizes,ref:t}),O.preload?(0,n.jsx)(x,{isAppRouter:!r,imgAttributes:N}):null]})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},94909,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return d},getImageProps:function(){return c}};for(var i in a)Object.defineProperty(r,i,{enumerable:!0,get:a[i]});let n=e.r(55682),o=e.r(8927),s=e.r(5500),l=n._(e.r(1948));function c(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let d=s.Image},57688,(e,t,r)=>{t.exports=e.r(94909)},31713,e=>{"use strict";var t=e.i(43476),r=e.i(57688),a=e.i(71645),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=a.default.createContext&&a.default.createContext(i),o=["attr","size","title"];function s(){return(s=Object.assign.bind()).apply(null,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){var a,i,n;a=e,i=t,n=r[t],(i=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(i))in a?Object.defineProperty(a,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[i]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function d(e){return t=>a.default.createElement(u,s({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>a.default.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function u(e){var t=t=>{var r,{attr:i,size:n,title:l}=e,d=function(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r={};for(var a in e)if(({}).hasOwnProperty.call(e,a)){if(-1!==t.indexOf(a))continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],-1===t.indexOf(r)&&({}).propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(e,o),u=n||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.default.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,d,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&a.default.createElement("title",null,l),e.children)};return void 0!==n?a.default.createElement(n.Consumer,null,e=>t(e)):t(i)}function m(e){return d({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M224,40V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H216A8,8,0,0,1,224,40Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"},child:[]}]})(e)}function f(e){return d({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216,128l-72,72V56Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"},child:[]}]})(e)}let p="https://app.synced.it",h=[{icon:function(e){return d({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"},child:[]}]})(e)},title:"Meeting coordination",body:"Sync Google and Outlook calendars. Find team availability instantly. Schedule exam meetings in seconds."},{icon:function(e){return d({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"},child:[]}]})(e)},title:"Deadline tracking",body:"Never miss a statutory response window. Deadlines surface before they're urgent, with alerts for every exam type."},{icon:function(e){return d({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M200,176H104s8,6,8,16a24,24,0,0,1-48,0V64A24,24,0,0,0,40,40H176a24,24,0,0,1,24,24Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M96,104a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H104A8,8,0,0,1,96,104Zm8,40h64a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16Zm128,48a32,32,0,0,1-32,32H88a32,32,0,0,1-32-32V64a16,16,0,0,0-32,0c0,5.74,4.83,9.62,4.88,9.66h0A8,8,0,0,1,24,88a7.89,7.89,0,0,1-4.79-1.61h0C18.05,85.54,8,77.61,8,64A32,32,0,0,1,40,32H176a32,32,0,0,1,32,32V168h8a8,8,0,0,1,4.8,1.6C222,170.46,232,178.39,232,192ZM96.26,173.48A8.07,8.07,0,0,1,104,168h88V64a16,16,0,0,0-16-16H67.69A31.71,31.71,0,0,1,72,64V192a16,16,0,0,0,32,0c0-5.74-4.83-9.62-4.88-9.66A7.82,7.82,0,0,1,96.26,173.48ZM216,192a12.58,12.58,0,0,0-3.23-8h-94a26.92,26.92,0,0,1,1.21,8,31.82,31.82,0,0,1-4.29,16H200A16,16,0,0,0,216,192Z"},child:[]}]})(e)},title:"Compliance audit trail",body:"Every action timestamped and logged. Produce a complete ledger for examiners — no scrambling, no gaps."},{icon:function(e){return d({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M136,108A52,52,0,1,1,84,56,52,52,0,0,1,136,108Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"},child:[]}]})(e)},title:"Team-wide visibility",body:"Compliance managers, legal counsel, audit leads — one shared workspace. Everyone sees the same picture."},{icon:function(e){return d({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM208,208V48H48V208H208Z"},child:[]}]})(e)},title:"Follow-up management",body:"Track open items and document requests from examiners. Close the loop before it becomes a finding."},{icon:function(e){return d({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M224,64V176a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V64A16,16,0,0,1,48,48H208A16,16,0,0,1,224,64Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Zm-48,48a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224Z"},child:[]}]})(e)},title:"Keyboard-first UX",body:"Command palette, dark mode, VS Code-style navigation. Built for people who care about how their tools feel."}],g=["SEC","OCC","CFPB","FDIC","Federal Reserve","Partner Banks"],b=[{name:"Aum Dhruv",role:"Chief Executive Officer",bio:"ORFE at Princeton. Built TigerMeet.org — used across Princeton, Penn, UF, and Brandeis for 10,000+ meetings. Two internships at Amazon building AR hardware. Worked at the SEC.",photo:"/aum.jpeg",linkedin:"https://www.linkedin.com/in/aumdhruv/"},{name:"Nick Harty",role:"Chief Technology Officer",bio:"Engineering & Economics at Wharton. Shipped product inside regulated institutions. Raised $20k non-dilutive. Coordinated 400 congressional offices for the Congressional App Challenge.",photo:"/nick.jpeg",linkedin:"https://www.linkedin.com/in/nicksheaharty/"}];function v({small:e}){return(0,t.jsxs)("span",{style:{fontFamily:"p22-mackinac-pro, serif",fontSize:e?"1rem":"1.25rem",fontWeight:700,letterSpacing:"-0.01em",lineHeight:1,color:"hsl(var(--fg))"},children:["Synced",(0,t.jsx)("span",{style:{color:"hsl(var(--primary))"},children:"."}),"It"]})}e.s(["default",0,function(){let[e,i]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=()=>i(window.scrollY>20);return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("nav",{className:`synced-nav${e?" scrolled":""}`,children:(0,t.jsxs)("div",{className:"container nav-inner",children:[(0,t.jsxs)("a",{href:"/","aria-label":"Synced home",className:"nav-logo",children:[(0,t.jsx)("img",{src:"/icon-light.png",alt:"",width:26,height:26,className:"nav-icon"}),(0,t.jsx)(v,{})]}),(0,t.jsx)("a",{href:p,className:"btn-primary",children:"Try the app"})]})}),(0,t.jsxs)("main",{className:"flex flex-col flex-1",children:[(0,t.jsxs)("section",{className:"hero-section",children:[(0,t.jsx)("div",{className:"hero-glow"}),(0,t.jsxs)("div",{className:"container hero-container",children:[(0,t.jsx)("span",{className:"eyebrow",children:"Regulatory compliance scheduling"}),(0,t.jsxs)("h1",{className:"hero-title",children:["Exam-ready",(0,t.jsx)("br",{}),(0,t.jsx)("em",{className:"not-italic hero-accent",children:"from day one."})]}),(0,t.jsx)("p",{className:"hero-sub",children:"Synced gives compliance teams one place to coordinate exams — scheduling, deadlines, follow-ups, and audit logs across SEC, OCC, and CFPB examinations."}),(0,t.jsxs)("div",{className:"hero-ctas",children:[(0,t.jsxs)("a",{href:p,className:"btn-primary btn-lg",children:["Get started free",(0,t.jsx)(f,{size:18})]}),(0,t.jsx)("a",{href:"mailto:nick@storiara.com",className:"btn-ghost btn-lg",children:"Talk to us"})]}),(0,t.jsx)("p",{className:"hero-footnote",children:"No credit card required · Free for small teams"})]})]}),(0,t.jsx)("section",{className:"screenshot-section",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"screenshot-wrap",children:(0,t.jsx)(r.default,{src:"/demo-light.png",alt:"Synced app dashboard",width:1200,height:720,priority:!0,className:"w-full h-auto block"})})})}),(0,t.jsx)("section",{className:"agency-section",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("p",{className:"uppercase-label",children:"Built for institutions regulated by"}),(0,t.jsx)("div",{className:"agency-badges",children:g.map(e=>(0,t.jsxs)("span",{className:"agency-badge",children:[(0,t.jsx)("span",{className:"badge-dot"}),e]},e))})]})}),(0,t.jsx)("section",{className:"features-section",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("div",{className:"section-header",children:[(0,t.jsx)("div",{className:"uppercase-label",children:"Why Synced"}),(0,t.jsxs)("h2",{className:"section-heading",children:["Everything an exam demands.",(0,t.jsx)("br",{}),"Nothing it doesn't."]}),(0,t.jsx)("p",{className:"section-sub",children:"Regulatory examinations move fast. Synced keeps your team coordinated from day one to final response."})]}),(0,t.jsx)("div",{className:"feature-grid",children:h.map(({icon:e,title:r,body:a})=>(0,t.jsxs)("div",{className:"feature-card",children:[(0,t.jsx)("div",{className:"feature-icon-wrap",children:(0,t.jsx)(e,{size:22})}),(0,t.jsx)("h3",{className:"feature-title",children:r}),(0,t.jsx)("p",{className:"feature-body",children:a})]},r))})]})}),(0,t.jsx)("section",{className:"team-section",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("div",{className:"section-header",children:[(0,t.jsx)("div",{className:"uppercase-label",children:"The team"}),(0,t.jsxs)("h2",{className:"section-heading",children:["Built by people who've seen",(0,t.jsx)("br",{}),"the pain firsthand."]}),(0,t.jsx)("p",{className:"section-sub",children:"Building together since middle school."})]}),(0,t.jsx)("div",{className:"team-grid",children:b.map(({name:e,role:a,bio:i,photo:n,linkedin:o})=>(0,t.jsxs)("div",{className:"team-card",children:[(0,t.jsxs)("div",{className:"team-card-top",children:[(0,t.jsx)(r.default,{src:n,alt:e,width:52,height:52,className:"team-photo"}),(0,t.jsxs)("div",{className:"team-info",children:[(0,t.jsx)("div",{className:"team-name",children:e}),(0,t.jsx)("div",{className:"team-role",children:a})]}),(0,t.jsx)("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"team-linkedin-btn","aria-label":"LinkedIn",children:(0,t.jsx)(m,{size:22})})]}),(0,t.jsx)("p",{className:"team-bio",children:i})]},e))})]})}),(0,t.jsx)("section",{className:"cta-section",children:(0,t.jsxs)("div",{className:"container cta-inner",children:[(0,t.jsxs)("h2",{className:"cta-title",children:["Your next exam",(0,t.jsx)("br",{}),"starts now."]}),(0,t.jsx)("p",{className:"cta-sub",children:"Join compliance teams already using Synced to run cleaner, faster examinations."}),(0,t.jsxs)("a",{href:p,className:"btn-primary btn-lg",children:["Try Synced free",(0,t.jsx)(f,{size:18})]})]})})]}),(0,t.jsx)("footer",{className:"site-footer",children:(0,t.jsxs)("div",{className:"container footer-inner",children:[(0,t.jsxs)("a",{href:"/","aria-label":"Synced home",className:"nav-logo",children:[(0,t.jsx)("img",{src:"/icon-light.png",alt:"",width:20,height:20,className:"nav-icon"}),(0,t.jsx)(v,{small:!0})]}),(0,t.jsxs)("nav",{className:"footer-links",children:[(0,t.jsx)("a",{href:"mailto:nick@storiara.com",className:"footer-link",children:"Contact"}),(0,t.jsx)("a",{href:`${p}/privacy`,className:"footer-link",children:"Privacy"}),(0,t.jsx)("a",{href:`${p}/terms`,className:"footer-link",children:"Terms"})]}),(0,t.jsx)("span",{className:"footer-copy",children:"© 2026 Synced.it"})]})}),(0,t.jsx)("style",{children:`
        /* ── Tokens ── */
        :root {
          --bg:      248 30% 97%;
          --fg:      248 60% 8%;
          --card:    0 0% 100%;
          --primary: 248 89% 55%;
          --accent:  248 89% 65%;
          --muted:   248 20% 92%;
          --muted-fg:248 22% 44%;
          --border:  248 25% 89%;
          --radius:  0.5rem;
        }

        body {
          background: hsl(var(--bg));
          color: hsl(var(--fg));
        }

        .container {
          width: 100%;
          max-width: 1120px;
          margin-inline: auto;
          padding-inline: clamp(1rem, 5vw, 2rem);
        }

        /* ── Nav ── */
        .synced-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          transition: background .25s, border-color .25s, box-shadow .25s;
          border-bottom: 1px solid transparent;
        }
        .synced-nav.scrolled {
          background: color-mix(in srgb, hsl(var(--bg)) 88%, transparent);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom-color: hsl(var(--border));
          box-shadow: 0 1px 12px rgba(0,0,0,.05);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 60px;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
        }
        .nav-icon { border-radius: 6px; display: block; }

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
          padding: 0.3rem 0.75rem;
          border-radius: 999px;
          margin-bottom: 1.5rem;
        }
        .hero-title {
          font-family: "p22-mackinac-pro", serif;
          font-size: clamp(2.4rem, 5.5vw, 3.75rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.08;
          margin-bottom: 1.5rem;
          color: hsl(var(--fg));
          max-width: 580px;
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
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid hsl(var(--border));
          box-shadow:
            0 0 0 1px hsl(var(--border) / .5),
            0 24px 80px -16px rgba(68,41,242,.15);
          line-height: 0;
          cursor: url('/icon-light.png') 16 16, pointer;
        }

        /* ── Agency strip ── */
        .agency-section {
          padding: 3rem 0;
          border-top: 1px solid hsl(var(--border));
          margin-top: 4rem;
          text-align: center;
        }
        .agency-section .uppercase-label { margin-bottom: 1.25rem; }
        .agency-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
        }
        .agency-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.3rem 0.85rem;
          border-radius: 999px;
          border: 1px solid hsl(var(--border));
          background: hsl(var(--card));
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: hsl(var(--muted-fg));
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
          background: hsl(var(--card));
          padding: 1.75rem;
          transition: background .2s;
        }
        .feature-card:hover {
          background: hsl(var(--muted));
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
          background: hsl(var(--card));
          border: 1px solid hsl(var(--border));
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
          transition: border-color .2s, box-shadow .2s;
        }
        .team-card-top {
          display: flex;
          align-items: center;
          gap: 0.875rem;
        }
        .team-card:hover {
          border-color: hsl(var(--primary) / .35);
          box-shadow: 0 4px 16px -4px rgba(68,41,242,.1);
        }
        .team-photo {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          object-fit: cover;
          object-position: center top;
          border: 2px solid hsl(var(--border));
          flex-shrink: 0;
          cursor: url('/icon-light.png') 16 16, pointer;
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