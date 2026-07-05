(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,2704,e=>{"use strict";let t,r;var i,n,l,s,a,o=e.i(47167),h=e.i(43476),u=e.i(71645),d=Object.defineProperty,c=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&g(e,r,t[r]);if(c)for(var r of c(t))m.call(t,r)&&g(e,r,t[r]);return e},E=(e,t)=>{var r={};for(var i in e)f.call(e,i)&&0>t.indexOf(i)&&(r[i]=e[i]);if(null!=e&&c)for(var i of c(e))0>t.indexOf(i)&&m.call(e,i)&&(r[i]=e[i]);return r};(e=>{let t=class t{constructor(e,r,i,l){if(this.version=e,this.errorCorrectionLevel=r,this.modules=[],this.isFunction=[],e<t.MIN_VERSION||e>t.MAX_VERSION)throw RangeError("Version value out of range");if(l<-1||l>7)throw RangeError("Mask value out of range");this.size=4*e+17;let s=[];for(let e=0;e<this.size;e++)s.push(!1);for(let e=0;e<this.size;e++)this.modules.push(s.slice()),this.isFunction.push(s.slice());this.drawFunctionPatterns();const a=this.addEccAndInterleave(i);if(this.drawCodewords(a),-1==l){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);const r=this.getPenaltyScore();r<e&&(l=t,e=r),this.applyMask(t)}}n(0<=l&&l<=7),this.mask=l,this.applyMask(l),this.drawFormatBits(l),this.isFunction=[]}static encodeText(r,i){let n=e.QrSegment.makeSegments(r);return t.encodeSegments(n,i)}static encodeBinary(r,i){let n=e.QrSegment.makeBytes(r);return t.encodeSegments([n],i)}static encodeSegments(e,i,l=1,a=40,o=-1,h=!0){let u,d;if(!(t.MIN_VERSION<=l&&l<=a&&a<=t.MAX_VERSION)||o<-1||o>7)throw RangeError("Invalid value");for(u=l;;u++){let r=8*t.getNumDataCodewords(u,i),n=s.getTotalBits(e,u);if(n<=r){d=n;break}if(u>=a)throw RangeError("Data too long")}for(let e of[t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH])h&&d<=8*t.getNumDataCodewords(u,e)&&(i=e);let c=[];for(let t of e)for(let e of(r(t.mode.modeBits,4,c),r(t.numChars,t.mode.numCharCountBits(u),c),t.getData()))c.push(e);n(c.length==d);let f=8*t.getNumDataCodewords(u,i);n(c.length<=f),r(0,Math.min(4,f-c.length),c),r(0,(8-c.length%8)%8,c),n(c.length%8==0);for(let e=236;c.length<f;e^=253)r(e,8,c);let m=[];for(;8*m.length<c.length;)m.push(0);return c.forEach((e,t)=>m[t>>>3]|=e<<7-(7&t)),new t(u,i,m,o)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);let e=this.getAlignmentPatternPositions(),t=e.length;for(let r=0;r<t;r++)for(let i=0;i<t;i++)(0!=r||0!=i)&&(0!=r||i!=t-1)&&(r!=t-1||0!=i)&&this.drawAlignmentPattern(e[r],e[i]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){let t=this.errorCorrectionLevel.formatBits<<3|e,r=t;for(let e=0;e<10;e++)r=r<<1^(r>>>9)*1335;let l=(t<<10|r)^21522;n(l>>>15==0);for(let e=0;e<=5;e++)this.setFunctionModule(8,e,i(l,e));this.setFunctionModule(8,7,i(l,6)),this.setFunctionModule(8,8,i(l,7)),this.setFunctionModule(7,8,i(l,8));for(let e=9;e<15;e++)this.setFunctionModule(14-e,8,i(l,e));for(let e=0;e<8;e++)this.setFunctionModule(this.size-1-e,8,i(l,e));for(let e=8;e<15;e++)this.setFunctionModule(8,this.size-15+e,i(l,e));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;let t=this.version<<12|e;n(t>>>18==0);for(let e=0;e<18;e++){let r=i(t,e),n=this.size-11+e%3,l=Math.floor(e/3);this.setFunctionModule(n,l,r),this.setFunctionModule(l,n,r)}}drawFinderPattern(e,t){for(let r=-4;r<=4;r++)for(let i=-4;i<=4;i++){let n=Math.max(Math.abs(i),Math.abs(r)),l=e+i,s=t+r;0<=l&&l<this.size&&0<=s&&s<this.size&&this.setFunctionModule(l,s,2!=n&&4!=n)}}drawAlignmentPattern(e,t){for(let r=-2;r<=2;r++)for(let i=-2;i<=2;i++)this.setFunctionModule(e+i,t+r,1!=Math.max(Math.abs(i),Math.abs(r)))}setFunctionModule(e,t,r){this.modules[t][e]=r,this.isFunction[t][e]=!0}addEccAndInterleave(e){let r=this.version,i=this.errorCorrectionLevel;if(e.length!=t.getNumDataCodewords(r,i))throw RangeError("Invalid argument");let l=t.NUM_ERROR_CORRECTION_BLOCKS[i.ordinal][r],s=t.ECC_CODEWORDS_PER_BLOCK[i.ordinal][r],a=Math.floor(t.getNumRawDataModules(r)/8),o=l-a%l,h=Math.floor(a/l),u=[],d=t.reedSolomonComputeDivisor(s);for(let r=0,i=0;r<l;r++){let n=e.slice(i,i+h-s+(r<o?0:1));i+=n.length;let l=t.reedSolomonComputeRemainder(n,d);r<o&&n.push(0),u.push(n.concat(l))}let c=[];for(let e=0;e<u[0].length;e++)u.forEach((t,r)=>{(e!=h-s||r>=o)&&c.push(t[e])});return n(c.length==a),c}drawCodewords(e){if(e.length!=Math.floor(t.getNumRawDataModules(this.version)/8))throw RangeError("Invalid argument");let r=0;for(let t=this.size-1;t>=1;t-=2){6==t&&(t=5);for(let n=0;n<this.size;n++)for(let l=0;l<2;l++){let s=t-l,a=(t+1&2)==0?this.size-1-n:n;!this.isFunction[a][s]&&r<8*e.length&&(this.modules[a][s]=i(e[r>>>3],7-(7&r)),r++)}}n(r==8*e.length)}applyMask(e){if(e<0||e>7)throw RangeError("Mask value out of range");for(let t=0;t<this.size;t++)for(let r=0;r<this.size;r++){let i;switch(e){case 0:i=(r+t)%2==0;break;case 1:i=t%2==0;break;case 2:i=r%3==0;break;case 3:i=(r+t)%3==0;break;case 4:i=(Math.floor(r/3)+Math.floor(t/2))%2==0;break;case 5:i=r*t%2+r*t%3==0;break;case 6:i=(r*t%2+r*t%3)%2==0;break;case 7:i=((r+t)%2+r*t%3)%2==0;break;default:throw Error("Unreachable")}!this.isFunction[t][r]&&i&&(this.modules[t][r]=!this.modules[t][r])}}getPenaltyScore(){let e=0;for(let r=0;r<this.size;r++){let i=!1,n=0,l=[0,0,0,0,0,0,0];for(let s=0;s<this.size;s++)this.modules[r][s]==i?5==++n?e+=t.PENALTY_N1:n>5&&e++:(this.finderPenaltyAddHistory(n,l),i||(e+=this.finderPenaltyCountPatterns(l)*t.PENALTY_N3),i=this.modules[r][s],n=1);e+=this.finderPenaltyTerminateAndCount(i,n,l)*t.PENALTY_N3}for(let r=0;r<this.size;r++){let i=!1,n=0,l=[0,0,0,0,0,0,0];for(let s=0;s<this.size;s++)this.modules[s][r]==i?5==++n?e+=t.PENALTY_N1:n>5&&e++:(this.finderPenaltyAddHistory(n,l),i||(e+=this.finderPenaltyCountPatterns(l)*t.PENALTY_N3),i=this.modules[s][r],n=1);e+=this.finderPenaltyTerminateAndCount(i,n,l)*t.PENALTY_N3}for(let r=0;r<this.size-1;r++)for(let i=0;i<this.size-1;i++){let n=this.modules[r][i];n==this.modules[r][i+1]&&n==this.modules[r+1][i]&&n==this.modules[r+1][i+1]&&(e+=t.PENALTY_N2)}let r=0;for(let e of this.modules)r=e.reduce((e,t)=>e+ +!!t,r);let i=this.size*this.size,l=Math.ceil(Math.abs(20*r-10*i)/i)-1;return n(0<=l&&l<=9),n(0<=(e+=l*t.PENALTY_N4)&&e<=2568888),e}getAlignmentPatternPositions(){if(1==this.version)return[];{let e=Math.floor(this.version/7)+2,t=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*e-2)),r=[6];for(let i=this.size-7;r.length<e;i-=t)r.splice(1,0,i);return r}}static getNumRawDataModules(e){if(e<t.MIN_VERSION||e>t.MAX_VERSION)throw RangeError("Version number out of range");let r=(16*e+128)*e+64;if(e>=2){let t=Math.floor(e/7)+2;r-=(25*t-10)*t-55,e>=7&&(r-=36)}return n(208<=r&&r<=29648),r}static getNumDataCodewords(e,r){return Math.floor(t.getNumRawDataModules(e)/8)-t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][e]*t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw RangeError("Degree out of range");let r=[];for(let t=0;t<e-1;t++)r.push(0);r.push(1);let i=1;for(let n=0;n<e;n++){for(let e=0;e<r.length;e++)r[e]=t.reedSolomonMultiply(r[e],i),e+1<r.length&&(r[e]^=r[e+1]);i=t.reedSolomonMultiply(i,2)}return r}static reedSolomonComputeRemainder(e,r){let i=r.map(e=>0);for(let n of e){let e=n^i.shift();i.push(0),r.forEach((r,n)=>i[n]^=t.reedSolomonMultiply(r,e))}return i}static reedSolomonMultiply(e,t){if(e>>>8!=0||t>>>8!=0)throw RangeError("Byte out of range");let r=0;for(let i=7;i>=0;i--)r=r<<1^(r>>>7)*285^(t>>>i&1)*e;return n(r>>>8==0),r}finderPenaltyCountPatterns(e){let t=e[1];n(t<=3*this.size);let r=t>0&&e[2]==t&&e[3]==3*t&&e[4]==t&&e[5]==t;return(r&&e[0]>=4*t&&e[6]>=t?1:0)+(r&&e[6]>=4*t&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,r){return e&&(this.finderPenaltyAddHistory(t,r),t=0),t+=this.size,this.finderPenaltyAddHistory(t,r),this.finderPenaltyCountPatterns(r)}finderPenaltyAddHistory(e,t){0==t[0]&&(e+=this.size),t.pop(),t.unshift(e)}};function r(e,t,r){if(t<0||t>31||e>>>t!=0)throw RangeError("Value out of range");for(let i=t-1;i>=0;i--)r.push(e>>>i&1)}function i(e,t){return(e>>>t&1)!=0}function n(e){if(!e)throw Error("Assertion error")}t.MIN_VERSION=1,t.MAX_VERSION=40,t.PENALTY_N1=3,t.PENALTY_N2=3,t.PENALTY_N3=40,t.PENALTY_N4=10,t.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],t.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=t;let l=class e{constructor(e,t,r){if(this.mode=e,this.numChars=t,this.bitData=r,t<0)throw RangeError("Invalid argument");this.bitData=r.slice()}static makeBytes(t){let i=[];for(let e of t)r(e,8,i);return new e(e.Mode.BYTE,t.length,i)}static makeNumeric(t){if(!e.isNumeric(t))throw RangeError("String contains non-numeric characters");let i=[];for(let e=0;e<t.length;){let n=Math.min(t.length-e,3);r(parseInt(t.substring(e,e+n),10),3*n+1,i),e+=n}return new e(e.Mode.NUMERIC,t.length,i)}static makeAlphanumeric(t){let i;if(!e.isAlphanumeric(t))throw RangeError("String contains unencodable characters in alphanumeric mode");let n=[];for(i=0;i+2<=t.length;i+=2){let l=45*e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(i));r(l+=e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(i+1)),11,n)}return i<t.length&&r(e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(i)),6,n),new e(e.Mode.ALPHANUMERIC,t.length,n)}static makeSegments(t){return""==t?[]:e.isNumeric(t)?[e.makeNumeric(t)]:e.isAlphanumeric(t)?[e.makeAlphanumeric(t)]:[e.makeBytes(e.toUtf8ByteArray(t))]}static makeEci(t){let i=[];if(t<0)throw RangeError("ECI assignment value out of range");if(t<128)r(t,8,i);else if(t<16384)r(2,2,i),r(t,14,i);else if(t<1e6)r(6,3,i),r(t,21,i);else throw RangeError("ECI assignment value out of range");return new e(e.Mode.ECI,0,i)}static isNumeric(t){return e.NUMERIC_REGEX.test(t)}static isAlphanumeric(t){return e.ALPHANUMERIC_REGEX.test(t)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let r=0;for(let i of e){let e=i.mode.numCharCountBits(t);if(i.numChars>=1<<e)return 1/0;r+=4+e+i.bitData.length}return r}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let r=0;r<e.length;r++)"%"!=e.charAt(r)?t.push(e.charCodeAt(r)):(t.push(parseInt(e.substring(r+1,r+3),16)),r+=2);return t}};l.NUMERIC_REGEX=/^[0-9]*$/,l.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,l.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let s=l;e.QrSegment=l})(a||(a={})),n=(i=a||(a={})).QrCode||(i.QrCode={}),(t=class{constructor(e,t){this.ordinal=e,this.formatBits=t}}).LOW=new t(0,1),t.MEDIUM=new t(1,0),t.QUARTILE=new t(2,3),t.HIGH=new t(3,2),n.Ecc=t,s=(l=a||(a={})).QrSegment||(l.QrSegment={}),(r=class{constructor(e,t){this.modeBits=e,this.numBitsCharCount=t}numCharCountBits(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}}).NUMERIC=new r(1,[10,12,14]),r.ALPHANUMERIC=new r(2,[9,11,13]),r.BYTE=new r(4,[8,16,16]),r.KANJI=new r(8,[8,10,12]),r.ECI=new r(7,[0,0,0]),s.Mode=r;var M=a,C={L:M.QrCode.Ecc.LOW,M:M.QrCode.Ecc.MEDIUM,Q:M.QrCode.Ecc.QUARTILE,H:M.QrCode.Ecc.HIGH},w="#FFFFFF",b="#000000";function R(e,t=0){let r=[];return e.forEach(function(e,i){let n=null;e.forEach(function(l,s){if(!l&&null!==n){r.push(`M${n+t} ${i+t}h${s-n}v1H${n+t}z`),n=null;return}if(s===e.length-1){if(!l)return;null===n?r.push(`M${s+t},${i+t} h1v1H${s+t}z`):r.push(`M${n+t},${i+t} h${s+1-n}v1H${n+t}z`);return}l&&null===n&&(n=s)})}),r.join("")}function N(e,t){return e.slice().map((e,r)=>r<t.y||r>=t.y+t.h?e:e.map((e,r)=>(r<t.x||r>=t.x+t.w)&&e))}function y({value:e,level:t,minVersion:r,includeMargin:i,marginSize:n,imageSettings:l,size:s,boostLevel:a}){let o=u.default.useMemo(()=>{let i=(Array.isArray(e)?e:[e]).reduce((e,t)=>(e.push(...M.QrSegment.makeSegments(t)),e),[]);return M.QrCode.encodeSegments(i,C[t],r,void 0,void 0,a)},[e,t,r,a]),{cells:h,margin:d,numCells:c,calculatedImageSettings:f}=u.default.useMemo(()=>{let e=o.getModules(),t=null!=n?Math.max(Math.floor(n),0):4*!!i,r=e.length+2*t,a=function(e,t,r,i){if(null==i)return null;let n=e.length+2*r,l=Math.floor(.1*t),s=n/t,a=(i.width||l)*s,o=(i.height||l)*s,h=null==i.x?e.length/2-a/2:i.x*s,u=null==i.y?e.length/2-o/2:i.y*s,d=null==i.opacity?1:i.opacity,c=null;if(i.excavate){let e=Math.floor(h),t=Math.floor(u),r=Math.ceil(a+h-e),i=Math.ceil(o+u-t);c={x:e,y:t,w:r,h:i}}return{x:h,y:u,h:o,w:a,excavation:c,opacity:d,crossOrigin:i.crossOrigin}}(e,s,t,l);return{cells:e,margin:t,numCells:r,calculatedImageSettings:a}},[o,s,l,i,n]);return{qrcode:o,margin:d,cells:h,numCells:c,calculatedImageSettings:f}}var v=function(){try{new Path2D().addPath(new Path2D)}catch(e){return!1}return!0}();u.default.forwardRef(function(e,t){let{value:r,size:i=128,level:n="L",bgColor:l=w,fgColor:s=b,includeMargin:a=!1,minVersion:o=1,boostLevel:h,marginSize:d,imageSettings:c}=e,f=E(e,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:m}=f,g=E(f,["style"]),M=null==c?void 0:c.src,C=u.default.useRef(null),x=u.default.useRef(null),A=u.default.useCallback(e=>{C.current=e,"function"==typeof t?t(e):t&&(t.current=e)},[t]),[P,S]=u.default.useState(!1),{margin:I,cells:O,numCells:_,calculatedImageSettings:z}=y({value:r,level:n,minVersion:o,boostLevel:h,includeMargin:a,marginSize:d,imageSettings:c,size:i});u.default.useEffect(()=>{if(null!=C.current){let e=C.current,t=e.getContext("2d");if(!t)return;let r=O,n=x.current,a=null!=z&&null!==n&&n.complete&&0!==n.naturalHeight&&0!==n.naturalWidth;a&&null!=z.excavation&&(r=N(O,z.excavation));let o=window.devicePixelRatio||1;e.height=e.width=i*o;let h=i/_*o;t.scale(h,h),t.fillStyle=l,t.fillRect(0,0,_,_),t.fillStyle=s,v?t.fill(new Path2D(R(r,I))):O.forEach(function(e,r){e.forEach(function(e,i){e&&t.fillRect(i+I,r+I,1,1)})}),z&&(t.globalAlpha=z.opacity),a&&t.drawImage(n,z.x+I,z.y+I,z.w,z.h)}}),u.default.useEffect(()=>{S(!1)},[M]);let k=p({height:i,width:i},m),L=null;return null!=M&&(L=u.default.createElement("img",{src:M,key:M,style:{display:"none"},onLoad:()=>{S(!0)},ref:x,crossOrigin:null==z?void 0:z.crossOrigin})),u.default.createElement(u.default.Fragment,null,u.default.createElement("canvas",p({style:k,height:i,width:i,ref:A,role:"img"},g)),L)}).displayName="QRCodeCanvas";var x=u.default.forwardRef(function(e,t){let{value:r,size:i=128,level:n="L",bgColor:l=w,fgColor:s=b,includeMargin:a=!1,minVersion:o=1,boostLevel:h,title:d,marginSize:c,imageSettings:f}=e,m=E(e,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:g,cells:M,numCells:C,calculatedImageSettings:v}=y({value:r,level:n,minVersion:o,boostLevel:h,includeMargin:a,marginSize:c,imageSettings:f,size:i}),x=M,A=null;null!=f&&null!=v&&(null!=v.excavation&&(x=N(M,v.excavation)),A=u.default.createElement("image",{href:f.src,height:v.h,width:v.w,x:v.x+g,y:v.y+g,preserveAspectRatio:"none",opacity:v.opacity,crossOrigin:v.crossOrigin}));let P=R(x,g);return u.default.createElement("svg",p({height:i,width:i,viewBox:`0 0 ${C} ${C}`,ref:t,role:"img"},m),!!d&&u.default.createElement("title",null,d),u.default.createElement("path",{fill:l,d:`M0,0 h${C}v${C}H0z`,shapeRendering:"crispEdges"}),u.default.createElement("path",{fill:s,d:P,shapeRendering:"crispEdges"}),A)});x.displayName="QRCodeSVG";let A="https://forms.gle/g64ZQ3Wy7hhp1M6X7",P=o.default.env.NEXT_PUBLIC_BASE_PATH??"";e.s(["default",0,function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"bg-container",children:[(0,h.jsx)("div",{className:"bg-grid-base"}),(0,h.jsx)("div",{className:"ambient-blob-1"}),(0,h.jsx)("div",{className:"ambient-blob-2"})]}),(0,h.jsx)("main",{className:"qr-main",children:(0,h.jsxs)("div",{className:"qr-card",children:[(0,h.jsxs)("div",{className:"qr-logo",children:[(0,h.jsx)("img",{src:`${P}/icon-light.png`,alt:"",width:36,height:36,className:"qr-icon"}),(0,h.jsx)("span",{className:"qr-brand",children:"Synced"})]}),(0,h.jsx)("div",{className:"qr-wrap",children:(0,h.jsx)(x,{value:A,size:260,bgColor:"transparent",fgColor:"hsl(248, 89%, 55%)",level:"M",includeMargin:!1})}),(0,h.jsx)("p",{className:"qr-label",children:"Scan to join the waitlist"}),(0,h.jsx)("p",{className:"qr-url",children:A})]})}),(0,h.jsx)("style",{children:`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body { min-height: 100dvh; }

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
        }

        .ambient-blob-1 {
          position: absolute;
          top: -10%;
          left: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, hsl(248 89% 65% / 0.14) 0%, transparent 70%);
          filter: blur(50px);
          animation: drift-slow 25s infinite alternate ease-in-out;
        }

        .ambient-blob-2 {
          position: absolute;
          bottom: -10%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, hsl(280 80% 65% / 0.1) 0%, transparent 70%);
          filter: blur(60px);
          animation: drift-slower 35s infinite alternate-reverse ease-in-out;
        }

        @keyframes drift-slow {
          0%   { transform: translate(0, 0) scale(1); }
          50%  { transform: translate(80px, -60px) scale(1.15); }
          100% { transform: translate(-60px, 80px) scale(0.9); }
        }
        @keyframes drift-slower {
          0%   { transform: translate(0, 0) scale(0.95); }
          50%  { transform: translate(-70px, 80px) scale(1.1); }
          100% { transform: translate(60px, -60px) scale(1); }
        }

        .qr-main {
          position: relative;
          z-index: 2;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .qr-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.75rem;
          background: color-mix(in srgb, hsl(var(--card)) 70%, transparent);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid hsl(var(--border) / 0.6);
          border-radius: 24px;
          padding: 3rem 3.5rem;
          box-shadow:
            0 0 0 1px hsl(var(--border) / 0.3),
            0 32px 80px -20px hsl(248 89% 55% / 0.15);
        }

        .qr-logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .qr-icon {
          border-radius: 8px;
          display: block;
        }

        .qr-brand {
          font-family: "p22-mackinac-pro", serif;
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: hsl(var(--fg));
        }

        .qr-wrap {
          padding: 1.25rem;
          background: white;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(68, 41, 242, 0.12);
          line-height: 0;
        }

        .qr-label {
          font-size: 1rem;
          font-weight: 600;
          color: hsl(var(--fg));
          letter-spacing: -0.01em;
        }

        .qr-url {
          font-size: 0.75rem;
          color: hsl(var(--muted-fg));
          opacity: 0.7;
          font-family: monospace;
        }
      `})]})}],2704)}]);