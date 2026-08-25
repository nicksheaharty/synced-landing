(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,88143,(e,r,t)=>{"use strict";function i({widthInt:e,heightInt:r,blurWidth:t,blurHeight:a,blurDataURL:n,objectFit:s}){let o=t?40*t:e,l=a?40*a:r,d=o&&l?`viewBox='0 0 ${o} ${l}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${d}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${d?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${n}'/%3E%3C/svg%3E`}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},87690,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={VALID_LOADERS:function(){return n},imageConfigDefault:function(){return s}};for(var a in i)Object.defineProperty(t,a,{enumerable:!0,get:i[a]});let n=["default","imgix","cloudinary","akamai","custom"],s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},8927,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return d}}),e.r(33525);let i=e.r(43369),a=e.r(88143),n=e.r(87690),s=["-moz-initial","fill","none","scale-down",void 0];function o(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function d({src:e,sizes:r,unoptimized:t=!1,priority:c=!1,preload:p=!1,loading:m,className:h,quality:u,width:g,height:f,fill:x=!1,style:b,overrideSrc:y,onLoad:v,onLoadingComplete:w,placeholder:j="empty",blurDataURL:k,fetchPriority:z,decoding:C="async",layout:P,objectFit:N,objectPosition:S,lazyBoundary:_,lazyRoot:E,...O},R){var L;let D,M,A,{imgConf:I,showAltText:T,blurComplete:B,defaultLoader:F}=R,$=I||n.imageConfigDefault;if("allSizes"in $)D=$;else{let e=[...$.deviceSizes,...$.imageSizes].sort((e,r)=>e-r),r=$.deviceSizes.sort((e,r)=>e-r),t=$.qualities?.sort((e,r)=>e-r);D={...$,allSizes:e,deviceSizes:r,qualities:t}}if(void 0===F)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let G=O.loader||F;delete O.loader,delete O.srcSet;let W="__next_img_default"in G;if(W){if("custom"===D.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=G;G=r=>{let{config:t,...i}=r;return e(i)}}if(P){"fill"===P&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(b={...b,...e});let t={responsive:"100vw",fill:"100vw"}[P];t&&!r&&(r=t)}let H="",V=l(g),U=l(f);if((L=e)&&"object"==typeof L&&(o(L)||void 0!==L.src)){let r=o(e)?e.default:e;if(!r.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(r)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!r.height||!r.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(r)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(M=r.blurWidth,A=r.blurHeight,k=k||r.blurDataURL,H=r.src,!x)if(V||U){if(V&&!U){let e=V/r.width;U=Math.round(r.height*e)}else if(!V&&U){let e=U/r.height;V=Math.round(r.width*e)}}else V=r.width,U=r.height}let q=!c&&!p&&("lazy"===m||void 0===m);(!(e="string"==typeof e?e:H)||e.startsWith("data:")||e.startsWith("blob:"))&&(t=!0,q=!1),D.unoptimized&&(t=!0),W&&!D.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(t=!0);let X=l(u),Y=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:N,objectPosition:S}:{},T?{}:{color:"transparent"},b),Z=B||"empty"===j?null:"blur"===j?`url("data:image/svg+xml;charset=utf-8,${(0,a.getImageBlurSvg)({widthInt:V,heightInt:U,blurWidth:M,blurHeight:A,blurDataURL:k||"",objectFit:Y.objectFit})}")`:`url("${j}")`,J=s.includes(Y.objectFit)?"fill"===Y.objectFit?"100% 100%":"cover":Y.objectFit,Q=Z?{backgroundSize:J,backgroundPosition:Y.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Z}:{},K=function({config:e,src:r,unoptimized:t,width:a,quality:n,sizes:s,loader:o}){if(t){if(r.startsWith("/")&&!r.startsWith("//")){let e=(0,i.getDeploymentId)();if(e){let t=r.indexOf("?");if(-1!==t){let i=new URLSearchParams(r.slice(t+1));i.get("dpl")||(i.append("dpl",e),r=r.slice(0,t)+"?"+i.toString())}else r+=`?dpl=${e}`}}return{src:r,srcSet:void 0,sizes:void 0}}let{widths:l,kind:d}=function({deviceSizes:e,allSizes:r},t,i){if(i){let t=/(^|\s)(1?\d?\d)vw/g,a=[];for(let e;e=t.exec(i);)a.push(parseInt(e[2]));if(a.length){let t=.01*Math.min(...a);return{widths:r.filter(r=>r>=e[0]*t),kind:"w"}}return{widths:r,kind:"w"}}return"number"!=typeof t?{widths:e,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>r.find(r=>r>=e)||r[r.length-1]))],kind:"x"}}(e,a,s),c=l.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:l.map((t,i)=>`${o({config:e,src:r,quality:n,width:t})} ${"w"===d?t:i+1}${d}`).join(", "),src:o({config:e,src:r,quality:n,width:l[c]})}}({config:D,src:e,unoptimized:t,width:V,quality:X,sizes:r,loader:G}),ee=q?"lazy":m;return{props:{...O,loading:ee,fetchPriority:z,width:V,height:U,decoding:C,className:h,style:{...Y,...Q},sizes:K.sizes,srcSet:K.srcSet,src:y||K.src},meta:{unoptimized:t,preload:p||c,placeholder:j,fill:x}}}},98879,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let i=e.r(71645),a="u"<typeof window,n=a?()=>{}:i.useLayoutEffect,s=a?()=>{}:i.useEffect;function o(e){let{headManager:r,reduceComponentsToState:t}=e;function o(){if(r&&r.mountedInstances){let e=i.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(t(e))}}return a&&(r?.mountedInstances?.add(e.children),o()),n(()=>(r?.mountedInstances?.add(e.children),()=>{r?.mountedInstances?.delete(e.children)})),n(()=>(r&&(r._pendingUpdate=o),()=>{r&&(r._pendingUpdate=o)})),s(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},25633,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={default:function(){return g},defaultHead:function(){return p}};for(var a in i)Object.defineProperty(t,a,{enumerable:!0,get:i[a]});let n=e.r(55682),s=e.r(90809),o=e.r(43476),l=s._(e.r(71645)),d=n._(e.r(98879)),c=e.r(42732);function p(){return[(0,o.jsx)("meta",{charSet:"utf-8"},"charset"),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function m(e,r){return"string"==typeof r||"number"==typeof r?e:r.type===l.default.Fragment?e.concat(l.default.Children.toArray(r.props.children).reduce((e,r)=>"string"==typeof r||"number"==typeof r?e:e.concat(r),[])):e.concat(r)}e.r(33525);let h=["name","httpEquiv","charSet","itemProp"];function u(e){let r,t,i,a;return e.reduce(m,[]).reverse().concat(p().reverse()).filter((r=new Set,t=new Set,i=new Set,a={},e=>{let n=!0,s=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){s=!0;let t=e.key.slice(e.key.indexOf("$")+1);r.has(t)?n=!1:r.add(t)}switch(e.type){case"title":case"base":t.has(e.type)?n=!1:t.add(e.type);break;case"meta":for(let r=0,t=h.length;r<t;r++){let t=h[r];if(e.props.hasOwnProperty(t))if("charSet"===t)i.has(t)?n=!1:i.add(t);else{let r=e.props[t],i=a[t]||new Set;("name"!==t||!s)&&i.has(r)?n=!1:(i.add(r),a[t]=i)}}}return n})).reverse().map((e,r)=>{let t=e.key||r;return l.default.cloneElement(e,{key:t})})}let g=function({children:e}){let r=(0,l.useContext)(c.HeadManagerContext);return(0,o.jsx)(d.default,{reduceComponentsToState:u,headManager:r,children:e})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),r.exports=t.default)},18556,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return n}});let i=e.r(55682)._(e.r(71645)),a=e.r(87690),n=i.default.createContext(a.imageConfigDefault)},65856,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return i}});let i=e.r(55682)._(e.r(71645)).default.createContext(null)},70965,(e,r,t)=>{"use strict";function i(e,r){let t=e||75;return r?.qualities?.length?r.qualities.reduce((e,r)=>Math.abs(r-t)<Math.abs(e-t)?r:e,r.qualities[0]):t}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"findClosestQuality",{enumerable:!0,get:function(){return i}})},1948,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let i=e.r(70965),a=e.r(43369);function n({config:e,src:r,width:t,quality:s}){let o=(0,a.getDeploymentId)();if(r.startsWith("/")&&!r.startsWith("//")){let e=r.indexOf("?");if(-1!==e){let t=new URLSearchParams(r.slice(e+1)),i=t.get("dpl");if(i){o=i,t.delete("dpl");let a=t.toString();r=r.slice(0,e)+(a?"?"+a:"")}}}if(r.startsWith("/")&&r.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${r}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let l=(0,i.findClosestQuality)(s,e);return`${e.path}?url=${encodeURIComponent(r)}&w=${t}&q=${l}${r.startsWith("/")&&o?`&dpl=${o}`:""}`}n.__next_img_default=!0;let s=n},18581,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return a}});let i=e.r(71645);function a(e,r){let t=(0,i.useRef)(null),a=(0,i.useRef)(null);return(0,i.useCallback)(i=>{if(null===i){let e=t.current;e&&(t.current=null,e());let r=a.current;r&&(a.current=null,r())}else e&&(t.current=n(e,i)),r&&(a.current=n(r,i))},[e,r])}function n(e,r){if("function"!=typeof e)return e.current=r,()=>{e.current=null};{let t=e(r);return"function"==typeof t?t:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),r.exports=t.default)},5500,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let i=e.r(55682),a=e.r(90809),n=e.r(43476),s=a._(e.r(71645)),o=i._(e.r(74080)),l=i._(e.r(25633)),d=e.r(8927),c=e.r(87690),p=e.r(18556);e.r(33525);let m=e.r(65856),h=i._(e.r(1948)),u=e.r(18581),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function f(e,r,t,i,a,n,s){let o=e?.src;e&&e["data-loaded-src"]!==o&&(e["data-loaded-src"]=o,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==r&&a(!0),t?.current){let r=new Event("load");Object.defineProperty(r,"target",{writable:!1,value:e});let i=!1,a=!1;t.current({...r,nativeEvent:r,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{i=!0,r.preventDefault()},stopPropagation:()=>{a=!0,r.stopPropagation()}})}i?.current&&i.current(e)}}))}function x(e){return s.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let b=(0,s.forwardRef)(({src:e,srcSet:r,sizes:t,height:i,width:a,decoding:o,className:l,style:d,fetchPriority:c,placeholder:p,loading:m,unoptimized:h,fill:g,onLoadRef:b,onLoadingCompleteRef:y,setBlurComplete:v,setShowAltText:w,sizesInput:j,onLoad:k,onError:z,...C},P)=>{let N=(0,s.useCallback)(e=>{e&&(z&&(e.src=e.src),e.complete&&f(e,p,b,y,v,h,j))},[e,p,b,y,v,z,h,j]),S=(0,u.useMergedRef)(P,N);return(0,n.jsx)("img",{...C,...x(c),loading:m,width:a,height:i,decoding:o,"data-nimg":g?"fill":"1",className:l,style:d,sizes:t,srcSet:r,src:e,ref:S,onLoad:e=>{f(e.currentTarget,p,b,y,v,h,j)},onError:e=>{w(!0),"empty"!==p&&v(!0),z&&z(e)}})});function y({isAppRouter:e,imgAttributes:r}){let t={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...x(r.fetchPriority)};return e&&o.default.preload?(o.default.preload(r.src,t),null):(0,n.jsx)(l.default,{children:(0,n.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...t},"__nimg-"+r.src+r.srcSet+r.sizes)})}let v=(0,s.forwardRef)((e,r)=>{let t=(0,s.useContext)(m.RouterContext),i=(0,s.useContext)(p.ImageConfigContext),a=(0,s.useMemo)(()=>{let e=g||i||c.imageConfigDefault,r=[...e.deviceSizes,...e.imageSizes].sort((e,r)=>e-r),t=e.deviceSizes.sort((e,r)=>e-r),a=e.qualities?.sort((e,r)=>e-r);return{...e,allSizes:r,deviceSizes:t,qualities:a,localPatterns:"u"<typeof window?i?.localPatterns:e.localPatterns}},[i]),{onLoad:o,onLoadingComplete:l}=e,u=(0,s.useRef)(o);(0,s.useEffect)(()=>{u.current=o},[o]);let f=(0,s.useRef)(l);(0,s.useEffect)(()=>{f.current=l},[l]);let[x,v]=(0,s.useState)(!1),[w,j]=(0,s.useState)(!1),{props:k,meta:z}=(0,d.getImgProps)(e,{defaultLoader:h.default,imgConf:a,blurComplete:x,showAltText:w});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b,{...k,unoptimized:z.unoptimized,placeholder:z.placeholder,fill:z.fill,onLoadRef:u,onLoadingCompleteRef:f,setBlurComplete:v,setShowAltText:j,sizesInput:e.sizes,ref:r}),z.preload?(0,n.jsx)(y,{isAppRouter:!t,imgAttributes:k}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),r.exports=t.default)},94909,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={default:function(){return c},getImageProps:function(){return d}};for(var a in i)Object.defineProperty(t,a,{enumerable:!0,get:i[a]});let n=e.r(55682),s=e.r(8927),o=e.r(5500),l=n._(e.r(1948));function d(e){let{props:r}=(0,s.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,t]of Object.entries(r))void 0===t&&delete r[e];return{props:r}}let c=o.Image},57688,(e,r,t)=>{r.exports=e.r(94909)},31713,e=>{"use strict";var r=e.i(47167),t=e.i(43476),i=e.i(57688),a=e.i(71645),n=e.i(72637),s=e.i(40141),o=e.i(53501),l=e.i(28129);let d="https://forms.gle/g64ZQ3Wy7hhp1M6X7",c=r.default.env.NEXT_PUBLIC_BASE_PATH??"",p=[{icon:n.PiScrollDuotone,title:"Find information instantly",body:"Synced searches your email, files, and cloud storage without you leaving the conversation, and pulls in whatever context it needs."},{icon:n.PiPencilSimpleLineDuotone,title:"Draft replies and documents",body:"Synced drafts email replies and creates documents for you, ready to review and send the moment you approve."},{icon:n.PiCalendarDuotone,title:"Coordinate schedules effortlessly",body:"Synced checks calendars, finds times that work, and proposes meetings, so you skip the back-and-forth."},{icon:n.PiClockDuotone,title:"Turn messages into tasks",body:"Delegate work to Synced straight from a conversation, then follow its progress and review the finished result in one place."},{icon:n.PiPlugsConnectedDuotone,title:"Connects to everything you use",body:"Email, messages, cloud storage, calendar, and more, all synced together so work gets done without switching apps."},{icon:n.PiCursorClickDuotone,title:"Synced prompts you",body:"Instead of you prompting Synced, Synced comes to you with the decisions only you can make, then handles everything else."}],m=[{name:"Gmail",icon:function({size:e=24,style:r}){return(0,t.jsxs)("svg",{width:e,height:e,viewBox:"0 0 64 64",fill:"none","aria-hidden":"true",style:r,children:[(0,t.jsx)("path",{d:"M54.5 17.4639C54.4999 16.2258 53.1364 15.6155 52.2373 16.294L52.2354 16.295L48.8613 18.8389L48.8604 18.8379L32.001 31.5635L15.1377 18.8418L15.1357 18.8408L11.7627 16.294L11.6768 16.2334C10.7794 15.6534 9.50006 16.2619 9.5 17.4639V48H13.5469V23.3701L32 37.2959L50.4531 23.3701V47.9981H54.5V17.4639ZM58.5 48.3633C58.5 50.3716 56.8831 51.998 54.8867 51.998H48.4531L48.249 51.9873C47.3077 51.8917 46.5594 51.1435 46.4639 50.2022L46.4531 49.998V31.3994L32 42.3076L17.5469 31.3994V50L17.5361 50.2041C17.4339 51.2127 16.5824 51.9998 15.5469 52H9.11328L8.93555 51.9951C8.52149 51.9747 8.11328 51.8826 7.72949 51.7227C7.34598 51.5627 6.99343 51.3375 6.68652 51.0576L6.55762 50.9346C6.26399 50.639 6.02375 50.295 5.84668 49.918L5.77441 49.7549C5.59298 49.3137 5.49971 48.8408 5.5 48.3633V17.4639C5.50006 12.9699 10.5988 10.404 14.1719 13.1006L32 26.5528L49.8281 13.1006C53.399 10.4063 58.4999 12.9699 58.5 17.4639V48.3633Z",fill:"currentColor"}),(0,t.jsx)("path",{opacity:"0.2",d:"M59 48.3633V17.4639C59 12.9698 53.8987 10.4061 50.3279 13.1008L46.9535 15.6445L32.5 26.5523L18.0465 15.6489L14.6721 13.1008C11.099 10.4039 6 12.9698 6 17.4639V48.3633C5.99971 48.8408 6.09295 49.3136 6.27438 49.7549C6.45581 50.1961 6.72188 50.597 7.05739 50.9347C7.39291 51.2724 7.79128 51.5403 8.22975 51.7231C8.66823 51.9059 9.1382 52 9.61283 52H16.0465C17.151 52 18.0465 51.1046 18.0465 50V31.3997L32.5 42.3074L46.9535 31.3997V49.9978C46.9535 51.1023 47.849 51.9978 48.9535 51.9978H55.3872C57.3835 51.9978 59 50.3716 59 48.3633Z",fill:"currentColor"})]})},color:"#EA4335"},{name:"Outlook",icon:n.PiMicrosoftOutlookLogo,color:"#0078D4"},{name:"Slack",icon:n.PiSlackLogo,color:"#E01E5A"},{name:"Microsoft Teams",icon:n.PiMicrosoftTeamsLogo,color:"#6264A7"},{name:"WhatsApp Business",icon:n.PiWhatsappLogo,color:"#25D366"},{name:"Zoom",icon:function(e){return(0,s.GenIcon)({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5.033 14.649H.743a.74.74 0 0 1-.686-.458.74.74 0 0 1 .16-.808L3.19 10.41H1.06A1.06 1.06 0 0 1 0 9.35h3.957c.301 0 .57.18.686.458a.74.74 0 0 1-.161.808L1.51 13.59h2.464c.585 0 1.06.475 1.06 1.06zM24 11.338c0-1.14-.927-2.066-2.066-2.066-.61 0-1.158.265-1.537.686a2.061 2.061 0 0 0-1.536-.686c-1.14 0-2.066.926-2.066 2.066v3.311a1.06 1.06 0 0 0 1.06-1.06v-2.251a1.004 1.004 0 0 1 2.013 0v2.251c0 .586.474 1.06 1.06 1.06v-3.311a1.004 1.004 0 0 1 2.012 0v2.251c0 .586.475 1.06 1.06 1.06zM16.265 12a2.728 2.728 0 1 1-5.457 0 2.728 2.728 0 0 1 5.457 0zm-1.06 0a1.669 1.669 0 1 0-3.338 0 1.669 1.669 0 0 0 3.338 0zm-4.82 0a2.728 2.728 0 1 1-5.458 0 2.728 2.728 0 0 1 5.457 0zm-1.06 0a1.669 1.669 0 1 0-3.338 0 1.669 1.669 0 0 0 3.338 0z"},child:[]}]})(e)},color:"#2D8CFF"},{name:"iMessage",icon:n.PiChatCircle,color:"#30D158"},{name:"Google Drive",icon:n.PiGoogleDriveLogo,color:"#34A853"},{name:"OneDrive",icon:n.PiCloud,color:"#0078D4"},{name:"Dropbox",icon:n.PiDropboxLogo,color:"#0061FF"},{name:"Notion",icon:function(e){return(0,s.GenIcon)({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"},child:[]}]})(e)},color:"#000000"},{name:"GitHub",icon:n.PiGithubLogo,color:"#000000"},{name:"Calendar",icon:n.PiCalendar,color:"#4285F4"}],h="#4429F2",u="#000000",g="#FFFFFF",f="rgba(0, 0, 0, 0.08)",x="#E5E5EA",b="rgba(0, 0, 0, 0.4)",y="rgba(0, 0, 0, 0.1)",v="rgba(68, 41, 242, 0.10)",w={gmail:"#EA4335",imessage:"#30D158"},j={gmail:n.PiEnvelopeSimpleDuotone,imessage:n.PiChatCircleDuotone},k={gmail:"Gmail",imessage:"iMessage"},z={id:"boss",name:"Gary (your boss)",source:"gmail",time:"11:58 PM",inbound:'quick thing before tomorrow\'s 8am, need this "ASAP" 🙏🙏🙏',tasksTotal:4,tasks:['Decode what "quick thing" actually means',"Rebuild the deck Gary deleted by accident","Pretend the 11:58 PM email was totally normal","Draft a reply that hides how annoyed you are"],fileOn:1,file:"Deck_FINAL_v7_ForRealThisTime.pptx"},C={id:"mom",name:"Mom",time:"Just now",messages:[{from:"them",text:"Thanksgiving's at our place this year, 3pm. Let me know if you're bringing a side!",source:"gmail"},{from:"me",text:"yep, added it to the calendar and told everyone to bring a side, no ambush green bean casserole this year"}]};function P({t:e}){return(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:8},children:e.messages.map((e,r)=>{let i="me"===e.from,a=e.source?j[e.source]:null;return(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:i?"flex-end":"flex-start",gap:4},children:[a?(0,t.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11,fontWeight:600,color:w[e.source]},children:[(0,t.jsx)(a,{size:12}),k[e.source]]}):null,(0,t.jsx)("div",{style:{maxWidth:"85%",padding:"10px 14px",fontSize:14,lineHeight:1.45,background:i?"#007AFF":x,color:i?"#fff":u,borderRadius:18,borderTopLeftRadius:i?18:4,borderTopRightRadius:i?4:18},children:e.text})]},r)})})}function N({p:e}){let[r,i]=(0,a.useState)(!0),s=w[e.source],o=j[e.source],{tasks:l,tasksTotal:d,inbound:c,fileOn:p,file:m}=e;return(0,t.jsxs)("div",{className:"app-message-card",style:{background:g,border:`1px solid ${f}`},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"14px 14px 12px"},children:[(0,t.jsx)("div",{style:{width:36,height:36,borderRadius:18,background:s,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,color:"#fff",fontSize:15,fontWeight:700},children:e.name.charAt(0)}),(0,t.jsxs)("div",{style:{flex:1,minWidth:0},children:[(0,t.jsx)("div",{style:{fontSize:14,fontWeight:600,color:u,marginBottom:3},children:e.name}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},children:[(0,t.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:4,background:s+"20",padding:"3px 7px",borderRadius:6},children:[(0,t.jsx)(o,{size:12,style:{color:s}}),(0,t.jsx)("span",{style:{fontSize:11,fontWeight:600,color:s},children:k[e.source]})]}),(0,t.jsx)("span",{style:{fontSize:11,color:b},children:e.time})]})]})]}),(0,t.jsx)("div",{style:{padding:"0 14px 14px"},children:(0,t.jsx)("div",{style:{maxWidth:"85%",padding:"10px 14px",fontSize:14,lineHeight:1.45,background:x,color:u,borderRadius:18,borderTopLeftRadius:4},children:c})}),(0,t.jsx)("div",{style:{height:1,background:y,margin:"0 14px"}}),(0,t.jsxs)("div",{style:{padding:"12px 14px 14px"},children:[(0,t.jsxs)("button",{type:"button","aria-expanded":r,"aria-controls":"completed-tasks",onClick:()=>i(!r),className:"task-disclosure",style:{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between",cursor:"pointer",padding:0,border:0,background:"transparent"},children:[(0,t.jsxs)("span",{style:{fontSize:13,fontWeight:600,color:h},children:[d," Task",1===d?"":"s"," Completed"]}),(0,t.jsx)(n.PiCaretDownBold,{size:14,style:{color:h,transform:r?"rotate(180deg)":"none",transition:"transform .2s"}})]}),(0,t.jsx)("div",{id:"completed-tasks",className:`task-list${r?" is-expanded":""}`,"aria-hidden":!r,children:(0,t.jsx)("div",{className:"task-list-inner",style:{marginTop:12},children:l.map((e,r)=>(0,t.jsxs)("div",{style:{display:"flex",gap:0,position:"relative",paddingBottom:16*(r!==l.length-1)},children:[(0,t.jsxs)("div",{style:{position:"relative",width:22,flexShrink:0},children:[(0,t.jsx)("div",{style:{width:22,height:22,borderRadius:11,background:v,display:"flex",alignItems:"center",justifyContent:"center",position:"relative",zIndex:2},children:(0,t.jsx)(n.PiCheckBold,{size:11,style:{color:h}})}),r<l.length-1?(0,t.jsx)("div",{style:{position:"absolute",top:22,bottom:-16,left:10.5,width:1.5,background:y}}):null]}),(0,t.jsxs)("div",{style:{flex:1,paddingLeft:10},children:[(0,t.jsx)("div",{style:{fontSize:12,fontWeight:600,color:u},children:e}),r===p?(0,t.jsx)("div",{style:{display:"inline-flex",alignItems:"center",gap:4,marginTop:6,background:"rgba(0,0,0,0.06)",padding:"4px 8px",borderRadius:6},children:(0,t.jsx)("span",{style:{fontSize:11,color:b},children:m})}):null]})]},e))})})]})]})}e.s(["default",0,function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"bg-container","aria-hidden":"true"}),(0,t.jsx)(o.default,{}),(0,t.jsxs)("main",{className:"flex flex-col flex-1",children:[(0,t.jsxs)("section",{className:"hero-section",children:[(0,t.jsx)("div",{className:"hero-glow"}),(0,t.jsxs)("div",{className:"container hero-container",children:[(0,t.jsx)("span",{className:"eyebrow",children:"Your AI Inbox on Autopilot"}),(0,t.jsxs)("h1",{className:"hero-title",children:[(0,t.jsx)("span",{className:"hero-title-line",children:"Turn your inbox into"}),(0,t.jsx)("span",{className:"hero-title-line hero-accent",children:"completed work."})]}),(0,t.jsx)("p",{className:"hero-sub",children:"Stop copying emails into AI, digging through files, and coordinating schedules. Synced is an AI inbox assistant that connects to your email, messages, cloud storage, and calendar to handle the busywork for you."}),(0,t.jsx)("div",{className:"hero-ctas",children:(0,t.jsxs)("a",{href:d,className:"btn-primary btn-lg",children:["Get Early Access",(0,t.jsx)(n.PiArrowRightDuotone,{size:18})]})}),(0,t.jsx)("p",{className:"hero-footnote",children:"Coming soon · Be first to access"}),(0,t.jsx)("div",{className:"hero-3d-wrap",children:(0,t.jsx)(i.default,{src:`${c}/logo3d.webp`,alt:"Synced AI inbox assistant logo",width:720,height:683,priority:!0,sizes:"(max-width: 640px) 78vw, 360px",className:"hero-3d-img"})})]})]}),(0,t.jsx)("section",{className:"app-showcase-section",children:(0,t.jsxs)("div",{className:"container app-showcase-inner",children:[(0,t.jsxs)("div",{className:"app-showcase-copy",children:[(0,t.jsx)("div",{className:"uppercase-label",children:"Inside Synced"}),(0,t.jsxs)("h2",{className:"section-heading",children:["Open your inbox.",(0,t.jsx)("br",{}),"Find work ready to approve."]}),(0,t.jsx)("p",{className:"section-sub",children:'An 11:58 PM "quick thing" from your boss becomes a rebuilt deck and a diplomatic reply, before you\'ve even opened your laptop.'})]}),(0,t.jsx)("div",{className:"app-showcase-card-wrap",children:(0,t.jsx)(N,{p:z})})]})}),(0,t.jsx)("section",{id:"integrations",className:"agency-section",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("p",{className:"uppercase-label",children:"Connects to your favorite tools"}),(0,t.jsx)("div",{className:"agency-badges",children:m.map(({name:e,icon:r,color:i})=>(0,t.jsxs)("span",{className:"agency-badge",children:[(0,t.jsx)("span",{className:"integration-icon-wrap",children:(0,t.jsx)(r,{size:22,style:{color:i,flexShrink:0}})}),(0,t.jsx)("span",{className:"integration-name",children:e})]},e))})]})}),(0,t.jsx)("section",{id:"features",className:"features-section",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("div",{className:"section-header features-header",children:[(0,t.jsxs)("div",{className:"section-header-copy",children:[(0,t.jsx)("div",{className:"uppercase-label",children:"How Synced works"}),(0,t.jsxs)("h2",{className:"section-heading",children:["Email as easy as",(0,t.jsx)("br",{}),"iMessage."]}),(0,t.jsx)("p",{className:"section-sub",children:"Synced learns what you need, finds the information, drafts responses, and manages follow-ups, all while asking for input only when it matters."})]}),(0,t.jsx)("div",{className:"features-header-card",children:(0,t.jsxs)("div",{className:"product-window message-window",children:[(0,t.jsxs)("div",{className:"product-window-bar",children:[(0,t.jsx)("span",{className:"window-dot"}),(0,t.jsx)("span",{className:"window-dot"}),(0,t.jsx)("span",{className:"window-dot"}),(0,t.jsx)("span",{className:"window-title",children:"Synced"})]}),(0,t.jsx)("div",{className:"product-window-content",children:(0,t.jsx)(P,{t:C})})]})})]}),(0,t.jsx)("div",{className:"feature-grid",children:p.map(({icon:e,title:r,body:i})=>(0,t.jsxs)("article",{className:"feature-card",children:[(0,t.jsx)("div",{className:"feature-icon-wrap",children:(0,t.jsx)(e,{size:22})}),(0,t.jsxs)("div",{className:"feature-copy",children:[(0,t.jsx)("h3",{className:"feature-title",children:r}),(0,t.jsx)("p",{className:"feature-body",children:i})]})]},r))})]})}),(0,t.jsx)("section",{id:"pricing",className:"pricing-section",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("div",{className:"section-header",style:{textAlign:"center",marginInline:"auto"},children:[(0,t.jsx)("div",{className:"uppercase-label",children:"Pricing"}),(0,t.jsx)("h2",{className:"section-heading",children:"Simple pricing, no surprises."}),(0,t.jsx)("p",{className:"section-sub",style:{marginInline:"auto"},children:"Start free. Upgrade when Synced becomes part of how you work."})]}),(0,t.jsxs)("div",{className:"pricing-grid pricing-grid-3",children:[(0,t.jsxs)("div",{className:"pricing-card",children:[(0,t.jsxs)("div",{className:"pricing-card-head",children:[(0,t.jsx)("div",{className:"pricing-plan-name",children:"Free"}),(0,t.jsxs)("div",{className:"pricing-price",children:[(0,t.jsx)("span",{className:"pricing-amount",children:"$0"}),(0,t.jsx)("span",{className:"pricing-period",children:"/user"})]}),(0,t.jsx)("p",{className:"pricing-tagline",children:"Try Synced on your main inbox."})]}),(0,t.jsxs)("ul",{className:"pricing-features",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)(n.PiCheckBold,{size:14})," 20 Action Plans a week"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(n.PiCheckBold,{size:14})," Unlimited Signals"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(n.PiCheckBold,{size:14})," Gmail, Drive, OneDrive & Calendar"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(n.PiCheckBold,{size:14})," Decide queue & Tasks"]})]}),(0,t.jsx)("a",{href:d,className:"btn-ghost pricing-cta",children:"Get Early Access"})]}),(0,t.jsxs)("div",{className:"pricing-card pricing-card-featured",children:[(0,t.jsx)("span",{className:"pricing-badge",children:"Most popular"}),(0,t.jsxs)("div",{className:"pricing-card-head",children:[(0,t.jsx)("div",{className:"pricing-plan-name",children:"Pro"}),(0,t.jsxs)("div",{className:"pricing-price",children:[(0,t.jsx)("span",{className:"pricing-amount",children:"$29.99"}),(0,t.jsx)("span",{className:"pricing-period",children:"/user/month"})]}),(0,t.jsx)("p",{className:"pricing-tagline",children:"$24.99/user/month billed annually."})]}),(0,t.jsxs)("ul",{className:"pricing-features",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)(n.PiCheckBold,{size:14})," 100 Action Plans a week"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(n.PiCheckBold,{size:14})," Unlimited Signals"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(n.PiCheckBold,{size:14})," All integrations (adds Notion, GitHub, Slack & Teams)"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(n.PiCheckBold,{size:14})," Decide queue & Tasks"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(n.PiCheckBold,{size:14})," Priority support"]})]}),(0,t.jsx)("a",{href:d,className:"btn-primary pricing-cta",children:"Get Early Access"})]}),(0,t.jsxs)("div",{className:"pricing-card",children:[(0,t.jsxs)("div",{className:"pricing-card-head",children:[(0,t.jsx)("div",{className:"pricing-plan-name",children:"Enterprise"}),(0,t.jsx)("div",{className:"pricing-price",children:(0,t.jsx)("span",{className:"pricing-amount pricing-amount-sm",children:"Contact us"})}),(0,t.jsx)("p",{className:"pricing-tagline",children:"For teams and companies."})]}),(0,t.jsxs)("ul",{className:"pricing-features",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)(n.PiCheckBold,{size:14})," Custom Action Plan limits"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(n.PiCheckBold,{size:14})," SSO & admin controls"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(n.PiCheckBold,{size:14})," Security review & custom contract"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(n.PiCheckBold,{size:14})," Dedicated support"]})]}),(0,t.jsx)("a",{href:"https://forms.gle/tP89zuGpCL1BsR6f6",target:"_blank",rel:"noopener noreferrer",className:"btn-ghost pricing-cta",children:"Contact Sales"})]})]}),(0,t.jsxs)("p",{className:"pricing-footnote",children:["An Action Plan is one message Synced reads and acts on, whether it finishes the task or hands it to you in Decide. ",(0,t.jsx)("a",{href:`${c}/pricing`,className:"text-link",children:"See full pricing details"}),"."]})]})}),(0,t.jsx)("section",{className:"cta-section",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"cta-inner",children:[(0,t.jsxs)("div",{className:"cta-copy-block",children:[(0,t.jsx)("div",{className:"uppercase-label",children:"Get started"}),(0,t.jsxs)("h2",{className:"cta-title",children:["Make your inbox",(0,t.jsx)("br",{}),"work for you."]}),(0,t.jsx)("p",{className:"cta-sub",children:"Join thousands ready to reclaim their time. Synced handles the busywork, you focus on what matters."})]}),(0,t.jsxs)("a",{href:d,className:"btn-primary btn-lg",children:["Get Early Access",(0,t.jsx)(n.PiArrowRightDuotone,{size:18})]})]})})})]}),(0,t.jsx)(l.default,{}),(0,t.jsx)("style",{children:`

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
          cursor: url('${c}/icon-cursor.png') 16 16, pointer;
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

        /* ── Pricing ── */
        .pricing-section {
          padding: 5rem 0;
          border-top: 1px solid hsl(var(--border));
        }
        .pricing-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          max-width: 760px;
          margin-inline: auto;
        }
        .pricing-grid-3 {
          grid-template-columns: repeat(3, 1fr);
          max-width: 1040px;
        }
        .pricing-card {
          position: relative;
          background: hsl(var(--card));
          border: 1px solid hsl(var(--border));
          border-radius: 16px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
        }
        .pricing-card-featured {
          border-color: hsl(var(--primary) / .4);
          box-shadow: 0 16px 40px rgba(68, 41, 242, 0.12);
        }
        .pricing-badge {
          position: absolute;
          top: -0.7rem;
          left: 50%;
          transform: translateX(-50%);
          background: hsl(var(--primary));
          color: hsl(248 100% 98%);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 0.3rem 0.75rem;
          border-radius: 999px;
        }
        .pricing-card-head { margin-bottom: 1.5rem; }
        .pricing-plan-name {
          font-family: "p22-mackinac-pro", serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: hsl(var(--fg));
          margin-bottom: 0.5rem;
        }
        .pricing-price {
          display: flex;
          align-items: baseline;
          gap: 0.3rem;
        }
        .pricing-amount {
          font-family: "p22-mackinac-pro", serif;
          font-size: 2.5rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: hsl(var(--fg));
        }
        .pricing-amount-sm { font-size: 1.75rem; }
        .pricing-period {
          font-size: 0.9rem;
          color: hsl(var(--muted-fg));
        }
        .pricing-tagline {
          font-size: 0.82rem;
          color: hsl(var(--muted-fg));
          margin-top: 0.5rem;
        }
        .pricing-features {
          list-style: none;
          margin: 0 0 2rem;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex: 1;
        }
        .pricing-features li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.88rem;
          color: hsl(var(--fg));
          line-height: 1.45;
        }
        .pricing-features li svg {
          color: hsl(var(--primary));
          flex-shrink: 0;
          margin-top: 0.2rem;
        }
        .pricing-cta {
          width: 100%;
          justify-content: center;
        }
        .pricing-footnote {
          text-align: center;
          font-size: 0.8rem;
          color: hsl(var(--muted-fg));
          max-width: 560px;
          margin: 2rem auto 0;
          line-height: 1.6;
        }
        .text-link {
          color: hsl(var(--primary));
          text-decoration: underline;
          transition: opacity 0.2s;
        }
        .text-link:hover { opacity: 0.8; }

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


        /* ── Mobile ── */
        @media (max-width: 768px) {
          .hero-section { padding: 7rem 0 3rem; }

          .feature-grid {
            grid-template-columns: 1fr;
          }

          .cta-inner { align-items: flex-start; }
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
        .pricing-section { padding: 6rem 0; border-top: 1px solid hsl(var(--border) / .75); }
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
        .team-social-btn { min-width: 36px; min-height: 36px; justify-content: center; border-radius: 50%; transition: background-color .18s ease, opacity .18s ease, transform 80ms ease; }
        .team-social-btn:hover { transform: none; background: hsl(var(--primary) / .08); }
        .team-social-btn:active { transform: scale(.92); }

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

        @media (max-width: 900px) {
          .hero-section { min-height: auto; }
          .hero-container { padding-right: clamp(1rem, 5vw, 2rem); }
          .app-showcase-inner { grid-template-columns: 1fr; }
          .features-header { align-items: flex-start; }
          .pricing-grid { grid-template-columns: 1fr; max-width: 380px; }
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
          .pricing-section { padding: 3.5rem 0; }
          .pricing-card { padding: 1.5rem; }
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