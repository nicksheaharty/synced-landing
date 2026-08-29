(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,88143,(e,t,r)=>{"use strict";function i({widthInt:e,heightInt:t,blurWidth:r,blurHeight:a,blurDataURL:n,objectFit:o}){let s=r?40*r:e,l=a?40*a:t,d=s&&l?`viewBox='0 0 ${s} ${l}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${d}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${d?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${n}'/%3E%3C/svg%3E`}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},87690,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={VALID_LOADERS:function(){return n},imageConfigDefault:function(){return o}};for(var a in i)Object.defineProperty(r,a,{enumerable:!0,get:i[a]});let n=["default","imgix","cloudinary","akamai","custom"],o={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},8927,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return d}}),e.r(33525);let i=e.r(43369),a=e.r(88143),n=e.r(87690),o=["-moz-initial","fill","none","scale-down",void 0];function s(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function d({src:e,sizes:t,unoptimized:r=!1,priority:c=!1,preload:u=!1,loading:m,className:f,quality:p,width:g,height:h,fill:b=!1,style:y,overrideSrc:x,onLoad:v,onLoadingComplete:w,placeholder:j="empty",blurDataURL:_,fetchPriority:P,decoding:O="async",layout:C,objectFit:S,objectPosition:E,lazyBoundary:k,lazyRoot:z,...R},N){var M;let I,$,A,{imgConf:D,showAltText:T,blurComplete:L,defaultLoader:B}=N,U=D||n.imageConfigDefault;if("allSizes"in U)I=U;else{let e=[...U.deviceSizes,...U.imageSizes].sort((e,t)=>e-t),t=U.deviceSizes.sort((e,t)=>e-t),r=U.qualities?.sort((e,t)=>e-t);I={...U,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===B)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let F=R.loader||B;delete R.loader,delete R.srcSet;let W="__next_img_default"in F;if(W){if("custom"===I.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=F;F=t=>{let{config:r,...i}=t;return e(i)}}if(C){"fill"===C&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(y={...y,...e});let r={responsive:"100vw",fill:"100vw"}[C];r&&!t&&(t=r)}let q="",G=l(g),H=l(h);if((M=e)&&"object"==typeof M&&(s(M)||void 0!==M.src)){let t=s(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if($=t.blurWidth,A=t.blurHeight,_=_||t.blurDataURL,q=t.src,!b)if(G||H){if(G&&!H){let e=G/t.width;H=Math.round(t.height*e)}else if(!G&&H){let e=H/t.height;G=Math.round(t.width*e)}}else G=t.width,H=t.height}let X=!c&&!u&&("lazy"===m||void 0===m);(!(e="string"==typeof e?e:q)||e.startsWith("data:")||e.startsWith("blob:"))&&(r=!0,X=!1),I.unoptimized&&(r=!0),W&&!I.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(r=!0);let V=l(p),J=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:S,objectPosition:E}:{},T?{}:{color:"transparent"},y),Q=L||"empty"===j?null:"blur"===j?`url("data:image/svg+xml;charset=utf-8,${(0,a.getImageBlurSvg)({widthInt:G,heightInt:H,blurWidth:$,blurHeight:A,blurDataURL:_||"",objectFit:J.objectFit})}")`:`url("${j}")`,K=o.includes(J.objectFit)?"fill"===J.objectFit?"100% 100%":"cover":J.objectFit,Y=Q?{backgroundSize:K,backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Q}:{},Z=function({config:e,src:t,unoptimized:r,width:a,quality:n,sizes:o,loader:s}){if(r){if(t.startsWith("/")&&!t.startsWith("//")){let e=(0,i.getDeploymentId)();if(e){let r=t.indexOf("?");if(-1!==r){let i=new URLSearchParams(t.slice(r+1));i.get("dpl")||(i.append("dpl",e),t=t.slice(0,r)+"?"+i.toString())}else t+=`?dpl=${e}`}}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:l,kind:d}=function({deviceSizes:e,allSizes:t},r,i){if(i){let r=/(^|\s)(1?\d?\d)vw/g,a=[];for(let e;e=r.exec(i);)a.push(parseInt(e[2]));if(a.length){let r=.01*Math.min(...a);return{widths:t.filter(t=>t>=e[0]*r),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof r?{widths:e,kind:"w"}:{widths:[...new Set([r,2*r].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,a,o),c=l.length-1;return{sizes:o||"w"!==d?o:"100vw",srcSet:l.map((r,i)=>`${s({config:e,src:t,quality:n,width:r})} ${"w"===d?r:i+1}${d}`).join(", "),src:s({config:e,src:t,quality:n,width:l[c]})}}({config:I,src:e,unoptimized:r,width:G,quality:V,sizes:t,loader:F}),ee=X?"lazy":m;return{props:{...R,loading:ee,fetchPriority:P,width:G,height:H,decoding:O,className:f,style:{...J,...Y},sizes:Z.sizes,srcSet:Z.srcSet,src:x||Z.src},meta:{unoptimized:r,preload:u||c,placeholder:j,fill:b}}}},98879,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return s}});let i=e.r(71645),a="u"<typeof window,n=a?()=>{}:i.useLayoutEffect,o=a?()=>{}:i.useEffect;function s(e){let{headManager:t,reduceComponentsToState:r}=e;function s(){if(t&&t.mountedInstances){let e=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return a&&(t?.mountedInstances?.add(e.children),s()),n(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),n(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},25633,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={default:function(){return g},defaultHead:function(){return u}};for(var a in i)Object.defineProperty(r,a,{enumerable:!0,get:i[a]});let n=e.r(55682),o=e.r(90809),s=e.r(43476),l=o._(e.r(71645)),d=n._(e.r(98879)),c=e.r(42732);function u(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function m(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(33525);let f=["name","httpEquiv","charSet","itemProp"];function p(e){let t,r,i,a;return e.reduce(m,[]).reverse().concat(u().reverse()).filter((t=new Set,r=new Set,i=new Set,a={},e=>{let n=!0,o=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){o=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?n=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?n=!1:r.add(e.type);break;case"meta":for(let t=0,r=f.length;t<r;t++){let r=f[t];if(e.props.hasOwnProperty(r))if("charSet"===r)i.has(r)?n=!1:i.add(r);else{let t=e.props[r],i=a[r]||new Set;("name"!==r||!o)&&i.has(t)?n=!1:(i.add(t),a[r]=i)}}}return n})).reverse().map((e,t)=>{let r=e.key||t;return l.default.cloneElement(e,{key:r})})}let g=function({children:e}){let t=(0,l.useContext)(c.HeadManagerContext);return(0,s.jsx)(d.default,{reduceComponentsToState:p,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18556,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return n}});let i=e.r(55682)._(e.r(71645)),a=e.r(87690),n=i.default.createContext(a.imageConfigDefault)},65856,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return i}});let i=e.r(55682)._(e.r(71645)).default.createContext(null)},70965,(e,t,r)=>{"use strict";function i(e,t){let r=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,t.qualities[0]):r}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"findClosestQuality",{enumerable:!0,get:function(){return i}})},1948,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return o}});let i=e.r(70965),a=e.r(43369);function n({config:e,src:t,width:r,quality:o}){let s=(0,a.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")){let e=t.indexOf("?");if(-1!==e){let r=new URLSearchParams(t.slice(e+1)),i=r.get("dpl");if(i){s=i,r.delete("dpl");let a=r.toString();t=t.slice(0,e)+(a?"?"+a:"")}}}if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let l=(0,i.findClosestQuality)(o,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${l}${t.startsWith("/")&&s?`&dpl=${s}`:""}`}n.__next_img_default=!0;let o=n},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return a}});let i=e.r(71645);function a(e,t){let r=(0,i.useRef)(null),a=(0,i.useRef)(null);return(0,i.useCallback)(i=>{if(null===i){let e=r.current;e&&(r.current=null,e());let t=a.current;t&&(a.current=null,t())}else e&&(r.current=n(e,i)),t&&(a.current=n(t,i))},[e,t])}function n(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},5500,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Image",{enumerable:!0,get:function(){return v}});let i=e.r(55682),a=e.r(90809),n=e.r(43476),o=a._(e.r(71645)),s=i._(e.r(74080)),l=i._(e.r(25633)),d=e.r(8927),c=e.r(87690),u=e.r(18556);e.r(33525);let m=e.r(65856),f=i._(e.r(1948)),p=e.r(18581),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e,t,r,i,a,n,o){let s=e?.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&a(!0),r?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,a=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}})}i?.current&&i.current(e)}}))}function b(e){return o.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let y=(0,o.forwardRef)(({src:e,srcSet:t,sizes:r,height:i,width:a,decoding:s,className:l,style:d,fetchPriority:c,placeholder:u,loading:m,unoptimized:f,fill:g,onLoadRef:y,onLoadingCompleteRef:x,setBlurComplete:v,setShowAltText:w,sizesInput:j,onLoad:_,onError:P,...O},C)=>{let S=(0,o.useCallback)(e=>{e&&(P&&(e.src=e.src),e.complete&&h(e,u,y,x,v,f,j))},[e,u,y,x,v,P,f,j]),E=(0,p.useMergedRef)(C,S);return(0,n.jsx)("img",{...O,...b(c),loading:m,width:a,height:i,decoding:s,"data-nimg":g?"fill":"1",className:l,style:d,sizes:r,srcSet:t,src:e,ref:E,onLoad:e=>{h(e.currentTarget,u,y,x,v,f,j)},onError:e=>{w(!0),"empty"!==u&&v(!0),P&&P(e)}})});function x({isAppRouter:e,imgAttributes:t}){let r={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...b(t.fetchPriority)};return e&&s.default.preload?(s.default.preload(t.src,r),null):(0,n.jsx)(l.default,{children:(0,n.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...r},"__nimg-"+t.src+t.srcSet+t.sizes)})}let v=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(m.RouterContext),i=(0,o.useContext)(u.ImageConfigContext),a=(0,o.useMemo)(()=>{let e=g||i||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t),a=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r,qualities:a,localPatterns:"u"<typeof window?i?.localPatterns:e.localPatterns}},[i]),{onLoad:s,onLoadingComplete:l}=e,p=(0,o.useRef)(s);(0,o.useEffect)(()=>{p.current=s},[s]);let h=(0,o.useRef)(l);(0,o.useEffect)(()=>{h.current=l},[l]);let[b,v]=(0,o.useState)(!1),[w,j]=(0,o.useState)(!1),{props:_,meta:P}=(0,d.getImgProps)(e,{defaultLoader:f.default,imgConf:a,blurComplete:b,showAltText:w});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y,{..._,unoptimized:P.unoptimized,placeholder:P.placeholder,fill:P.fill,onLoadRef:p,onLoadingCompleteRef:h,setBlurComplete:v,setShowAltText:j,sizesInput:e.sizes,ref:t}),P.preload?(0,n.jsx)(x,{isAppRouter:!r,imgAttributes:_}):null]})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},94909,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={default:function(){return c},getImageProps:function(){return d}};for(var a in i)Object.defineProperty(r,a,{enumerable:!0,get:i[a]});let n=e.r(55682),o=e.r(8927),s=e.r(5500),l=n._(e.r(1948));function d(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let c=s.Image},57688,(e,t,r)=>{t.exports=e.r(94909)},58274,e=>{"use strict";var t=e.i(47167),r=e.i(43476),i=e.i(57688),a=e.i(72637),n=e.i(53501),o=e.i(28129);let s=t.default.env.NEXT_PUBLIC_BASE_PATH??"",l=[{name:"Aum Dhruv",role:"Chief Executive Officer",bio:"ORFE at Princeton. Built TigerMeet.org, used across Princeton, Penn, UF, and Brandeis for 10,000+ meetings. Two internships at Amazon building AR hardware. Worked at the SEC.",photo:`${s}/aum.webp`,linkedin:"https://www.linkedin.com/in/aumdhruv/",instagram:"https://www.instagram.com/aum.dhruv/"},{name:"Nick Harty",role:"Chief Technology Officer",bio:"Engineering & Economics at Wharton. Shipped product inside regulated institutions. Raised $20k non-dilutive. Coordinated 400 congressional offices for the Congressional App Challenge.",photo:`${s}/nick.webp`,linkedin:"https://www.linkedin.com/in/nicksheaharty/",instagram:"https://www.instagram.com/nicksheaharty/"}];e.s(["default",0,function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"bg-container","aria-hidden":"true"}),(0,r.jsx)(n.default,{}),(0,r.jsxs)("main",{className:"flex flex-col flex-1 relative z-2",children:[(0,r.jsx)("section",{className:"team-hero-section",children:(0,r.jsxs)("div",{className:"container",style:{textAlign:"center"},children:[(0,r.jsx)("span",{className:"eyebrow",style:{justifyContent:"center"},children:"The team"}),(0,r.jsx)("h1",{className:"team-hero-title",children:"Built by people who know the pain of inbox overload."}),(0,r.jsx)("p",{className:"team-hero-sub",children:"Building together since middle school."})]})}),(0,r.jsx)("section",{className:"team-section",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"team-grid",children:l.map(({name:e,role:t,bio:n,photo:o,linkedin:s,instagram:l})=>(0,r.jsxs)("div",{className:"team-card",children:[(0,r.jsxs)("div",{className:"team-card-top",children:[(0,r.jsx)(i.default,{src:o,alt:e,width:52,height:52,sizes:"52px",className:"team-photo"}),(0,r.jsxs)("div",{className:"team-info",children:[(0,r.jsx)("div",{className:"team-name",children:e}),(0,r.jsx)("div",{className:"team-role",children:t})]}),(0,r.jsxs)("div",{className:"team-social-links",children:[(0,r.jsx)("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"team-social-btn","aria-label":`${e} on LinkedIn`,children:(0,r.jsx)(a.PiLinkedinLogoDuotone,{size:22})}),(0,r.jsx)("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:"team-social-btn","aria-label":`${e} on Instagram`,children:(0,r.jsx)(a.PiInstagramLogoDuotone,{size:22})})]})]}),(0,r.jsx)("p",{className:"team-bio",children:n})]},e))})})}),(0,r.jsx)("section",{className:"cta-section",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"cta-inner",children:[(0,r.jsxs)("div",{className:"cta-copy-block",children:[(0,r.jsx)("div",{className:"uppercase-label",children:"Get started"}),(0,r.jsxs)("h2",{className:"cta-title",children:["Make your inbox",(0,r.jsx)("br",{}),"work for you."]}),(0,r.jsx)("p",{className:"cta-sub",children:"Join thousands ready to reclaim their time. Synced handles the busywork, you focus on what matters."})]}),(0,r.jsxs)("a",{href:"https://forms.gle/g64ZQ3Wy7hhp1M6X7",className:"btn-primary btn-lg",children:["Get Early Access",(0,r.jsx)(a.PiArrowRightDuotone,{size:18})]})]})})})]}),(0,r.jsx)(o.default,{}),(0,r.jsx)("style",{children:`
        main, nav, footer { position: relative; z-index: 2; }

        /* ── Hero ── */
        .eyebrow {
          padding: 0;
          margin-bottom: 1.35rem;
          border: 0;
          border-radius: 0;
          background: transparent;
          box-shadow: none;
          letter-spacing: .08em;
        }
        .team-hero-section {
          padding: 10rem 0 4rem;
        }
        .team-hero-title {
          font-family: "p22-mackinac-pro", serif;
          font-size: clamp(2.25rem, 5vw, 3.5rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: hsl(var(--fg));
          margin: 0 auto 0.9rem;
          max-width: 760px;
        }
        .team-hero-sub {
          font-size: 1.05rem;
          color: hsl(var(--muted-fg));
          max-width: 460px;
          line-height: 1.6;
          margin-inline: auto;
        }

        /* ── Team ── */
        .team-section {
          padding: 2rem 0 8rem;
        }
        .team-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          align-items: stretch;
          border-top: 1px solid hsl(var(--border));
          border-bottom: 1px solid hsl(var(--border));
        }
        @media (max-width: 520px) {
          .team-grid { grid-template-columns: 1fr; }
        }
        .team-card {
          padding: 2rem 2rem 2rem 0;
          border-radius: 0;
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
        }
        .team-card + .team-card {
          padding-left: 2rem;
          border-left: 1px solid hsl(var(--border));
        }
        @media (max-width: 520px) {
          .team-card { padding: 1.5rem 0; }
          .team-card + .team-card { padding-left: 0; border-left: 0; border-top: 1px solid hsl(var(--border)); }
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
          border: 0;
          flex-shrink: 0;
          cursor: url('${s}/icon-cursor.png') 16 16, pointer;
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
          min-width: 36px;
          min-height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          flex-shrink: 0;
          transition: background-color .18s ease, opacity .18s ease, transform 80ms ease;
        }
        .team-social-btn:hover { opacity: 1; background: hsl(var(--primary) / .08); }
        .team-social-btn:active { transform: scale(.92); }
        .team-bio {
          font-size: 0.82rem;
          line-height: 1.6;
          color: hsl(var(--muted-fg));
        }

        /* ── CTA (matches homepage) ── */
        .uppercase-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: hsl(var(--primary));
          margin-bottom: 0.75rem;
        }
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
        .cta-title {
          font-family: "p22-mackinac-pro", serif;
          font-size: clamp(2.25rem, 4.5vw, 3.6rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: hsl(var(--fg));
          margin: 0;
        }
        .cta-sub {
          font-size: 1rem;
          color: hsl(var(--muted-fg));
          max-width: 520px;
          line-height: 1.65;
          margin-top: 1rem;
        }
        .cta-inner > .btn-primary { min-width: 190px; justify-content: center; flex-shrink: 0; }

        @media (max-width: 900px) {
          .cta-inner { grid-template-columns: 1fr; justify-items: start; }
        }
        @media (max-width: 768px) {
          .team-hero-section { padding: 7rem 0 3rem; }
        }
        @media (max-width: 640px) {
          .team-hero-section { padding: 8.5rem 0 3rem; }
          .team-section { padding: 1.5rem 0 5rem; }
          .cta-section { padding: 2rem 0 4rem; }
          .cta-section > .container { padding-inline: 1.5rem; }
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
      `})]})}])}]);