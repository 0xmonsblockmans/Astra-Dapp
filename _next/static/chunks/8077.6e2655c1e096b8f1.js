"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8077],{88077:function(t,n,e){e.r(n),e.d(n,{default:function(){return Q}});var o=e(37881),i=e(9007),r=e(53536),a=e(60561),l=e(53478);function s(t,n){let{from:e,to:i}=n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=getComputedStyle(t),l="none"===a.transform?"":a.transform,[s,c]=a.transformOrigin.split(" ").map(parseFloat),d=e.left+e.width*s/i.width-(i.left+s),f=e.top+e.height*c/i.height-(i.top+c),{delay:v=0,duration:p=t=>120*Math.sqrt(t),easing:u=o.an}=r;return{delay:v,duration:(0,o.Z)(p)?p(Math.sqrt(d*d+f*f)):p,easing:u,css:(t,n)=>{let o=t+n*e.width/i.width,r=t+n*e.height/i.height;return"transform: ".concat(l," translate(").concat(n*d,"px, ").concat(n*f,"px) scale(").concat(o,", ").concat(r,");")}}}function c(t){(0,o.a)(t,"svelte-13cuwwo","div.svelte-13cuwwo{box-sizing:content-box}.border.svelte-13cuwwo{border:2px solid;border-radius:120px;overflow:hidden}")}function d(t){let n,e;return{c(){n=(0,o.j)("div"),(0,o.k)(n,"class","border svelte-13cuwwo"),(0,o.k)(n,"style",e="\n    width: ".concat(t[2]-2*t[3],"px; \n    height: ").concat(t[2]-2*t[3],"px; \n    border-color: var(").concat(t[1],"); \n    padding: ").concat(t[3],"px; \n    background-color: ").concat(t[4],";\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n  "))},m(e,i){(0,o.b)(e,n,i),n.innerHTML=t[0]},p(t,i){let[r]=i;1&r&&(n.innerHTML=t[0]),30&r&&e!==(e="\n    width: ".concat(t[2]-2*t[3],"px; \n    height: ").concat(t[2]-2*t[3],"px; \n    border-color: var(").concat(t[1],"); \n    padding: ").concat(t[3],"px; \n    background-color: ").concat(t[4],";\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n  "))&&(0,o.k)(n,"style",e)},i:o.n,o:o.n,d(t){t&&(0,o.d)(n)}}}function f(t,n,e){let{icon:o}=n,{borderColorVar:i}=n,{size:r}=n,{padding:a=0}=n,{background:l="transparent"}=n;return t.$$set=t=>{"icon"in t&&e(0,o=t.icon),"borderColorVar"in t&&e(1,i=t.borderColorVar),"size"in t&&e(2,r=t.size),"padding"in t&&e(3,a=t.padding),"background"in t&&e(4,l=t.background)},[o,i,r,a,l]}e(88676),e(68595),e(32907),e(33414),e(46666),e(64826);class v extends o.S{constructor(t){super(),(0,o.i)(this,t,f,d,o.s,{icon:0,borderColorVar:1,size:2,padding:3,background:4},c)}}function p(t){(0,o.a)(t,"svelte-jvic9v","div.notification-icons-wrapper.svelte-jvic9v{height:32px;width:32px}.border.svelte-jvic9v{border-radius:8px}div.notification-icon.svelte-jvic9v{padding:6px}div.pending-icon.svelte-jvic9v{animation:svelte-jvic9v-blink 2s ease-in infinite;height:100%;width:100%;padding:7px}@keyframes svelte-jvic9v-blink{from,to{opacity:1}50%{opacity:0.2}}div.border-action.svelte-jvic9v{height:32px;min-width:32px;border-radius:8px;overflow:hidden;will-change:transform}div.border-action.svelte-jvic9v:before{content:'';background-image:conic-gradient(#b1b7f2 20deg, #6370e5 120deg);height:140%;width:140%;position:absolute;left:-25%;top:-25%;animation:svelte-jvic9v-rotate 2s infinite linear}div.chain-icon-container.svelte-jvic9v{left:18px;top:18px}@keyframes svelte-jvic9v-rotate{100%{transform:rotate(-360deg)}}")}function u(t){let n,e,i,r,a,l,s,c;let d=o.ao[t[1].type].eventIcon+"",f=!t[1].id.includes("customNotification")&&!t[1].id.includes("preflight"),v="pending"===t[1].type&&m(),p=f&&y(t);return{c(){n=(0,o.j)("div"),v&&v.c(),e=(0,o.G)(),i=(0,o.j)("div"),r=(0,o.j)("div"),s=(0,o.G)(),p&&p.c(),(0,o.k)(r,"class",a=(0,o.l)("notification-icon flex items-center justify-center ".concat("pending"===t[1].type?"pending-icon":""))+" svelte-jvic9v"),(0,o.k)(i,"class","flex items-center justify-center border relative notification-icons-wrapper svelte-jvic9v"),(0,o.k)(i,"style",l="background:".concat(o.ao[t[1].type].backgroundColor,"; color: ").concat(o.ao[t[1].type].iconColor||"","; ").concat("pending"===t[1].type?"height: 28px; width: 28px; margin: 2px;":"border: 2px solid ".concat(o.ao[t[1].type].borderColor),"; ")),(0,o.k)(n,"class","relative")},m(t,a){(0,o.b)(t,n,a),v&&v.m(n,null),(0,o.m)(n,e),(0,o.m)(n,i),(0,o.m)(i,r),r.innerHTML=d,(0,o.m)(n,s),p&&p.m(n,null),c=!0},p(t,s){"pending"===t[1].type?v||((v=m()).c(),v.m(n,e)):v&&(v.d(1),v=null),(!c||2&s)&&d!==(d=o.ao[t[1].type].eventIcon+"")&&(r.innerHTML=d),(!c||2&s&&a!==(a=(0,o.l)("notification-icon flex items-center justify-center ".concat("pending"===t[1].type?"pending-icon":""))+" svelte-jvic9v"))&&(0,o.k)(r,"class",a),(!c||2&s&&l!==(l="background:".concat(o.ao[t[1].type].backgroundColor,"; color: ").concat(o.ao[t[1].type].iconColor||"","; ").concat("pending"===t[1].type?"height: 28px; width: 28px; margin: 2px;":"border: 2px solid ".concat(o.ao[t[1].type].borderColor),"; ")))&&(0,o.k)(i,"style",l),2&s&&(f=!t[1].id.includes("customNotification")&&!t[1].id.includes("preflight")),f?p?(p.p(t,s),2&s&&(0,o.x)(p,1)):((p=y(t)).c(),(0,o.x)(p,1),p.m(n,null)):p&&((0,o.y)(),(0,o.A)(p,1,1,()=>{p=null}),(0,o.z)())},i(t){c||((0,o.x)(p),c=!0)},o(t){(0,o.A)(p),c=!1},d(t){t&&(0,o.d)(n),v&&v.d(),p&&p.d()}}}function m(t){let n;return{c(){n=(0,o.j)("div"),(0,o.k)(n,"class","border-action absolute svelte-jvic9v")},m(t,e){(0,o.b)(t,n,e)},d(t){t&&(0,o.d)(n)}}}function y(t){let n,e,i;return e=new v({props:{icon:t[0].icon,size:16,background:t[0].color,borderColorVar:"--notify-onboard-background, var(--onboard-gray-600, var(--gray-600))",padding:3}}),{c(){n=(0,o.j)("div"),(0,o.F)(e.$$.fragment),(0,o.k)(n,"class","absolute chain-icon-container svelte-jvic9v")},m(t,r){(0,o.b)(t,n,r),(0,o.I)(e,n,null),i=!0},p(t,n){let o={};1&n&&(o.icon=t[0].icon),1&n&&(o.background=t[0].color),e.$set(o)},i(t){i||((0,o.x)(e.$$.fragment,t),i=!0)},o(t){(0,o.A)(e.$$.fragment,t),i=!1},d(t){t&&(0,o.d)(n),(0,o.K)(e)}}}function b(t){let n,e;let i=t[1].type&&u(t);return{c(){i&&i.c(),n=(0,o.e)()},m(t,r){i&&i.m(t,r),(0,o.b)(t,n,r),e=!0},p(t,e){let[r]=e;t[1].type?i?(i.p(t,r),2&r&&(0,o.x)(i,1)):((i=u(t)).c(),(0,o.x)(i,1),i.m(n.parentNode,n)):i&&((0,o.y)(),(0,o.A)(i,1,1,()=>{i=null}),(0,o.z)())},i(t){e||((0,o.x)(i),e=!0)},o(t){(0,o.A)(i),e=!1},d(t){i&&i.d(t),t&&(0,o.d)(n)}}}function h(t,n,e){let{chainStyles:i=o.a6}=n,{notification:r}=n;return t.$$set=t=>{"chainStyles"in t&&e(0,i=t.chainStyles),"notification"in t&&e(1,r=t.notification)},[i,r]}class g extends o.S{constructor(t){super(),(0,o.i)(this,t,h,b,o.s,{chainStyles:0,notification:1},p)}}function k(t){(0,o.a)(t,"svelte-pm7idu","div.svelte-pm7idu{display:flex;justify-content:center;font-size:inherit;font-family:inherit;margin:0 1.5rem 0 0.75rem}span.svelte-pm7idu{font-family:inherit;display:flex;align-items:center;margin:0 2px}.time.svelte-pm7idu{color:var(\n      --notify-onboard-timer-color,\n      var(--onboard-gray-300, var(--gray-300))\n    );margin-left:4px}")}function x(t){let n,e,i,r;let a=t[2](t[1]-t[0])+"";return{c(){n=(0,o.t)("-\n    "),e=(0,o.j)("span"),i=(0,o.t)(a),r=(0,o.t)("\n    ago"),(0,o.k)(e,"class","svelte-pm7idu")},m(t,a){(0,o.b)(t,n,a),(0,o.b)(t,e,a),(0,o.m)(e,i),(0,o.b)(t,r,a)},p(t,n){3&n&&a!==(a=t[2](t[1]-t[0])+"")&&(0,o.v)(i,a)},d(t){t&&(0,o.d)(n),t&&(0,o.d)(e),t&&(0,o.d)(r)}}}function w(t){let n;let e=t[0]&&x(t);return{c(){n=(0,o.j)("div"),e&&e.c(),(0,o.k)(n,"class","time svelte-pm7idu")},m(t,i){(0,o.b)(t,n,i),e&&e.m(n,null)},p(t,o){let[i]=o;t[0]?e?e.p(t,i):((e=x(t)).c(),e.m(n,null)):e&&(e.d(1),e=null)},i:o.n,o:o.n,d(t){t&&(0,o.d)(n),e&&e.d()}}}function $(t,n,e){let r,a;(0,o.c)(t,i._,t=>e(3,r=t)),(0,o.c)(t,i.SP,t=>e(4,a=t));let{startTime:l}=n,s=Date.now(),c=setInterval(()=>{e(1,s=Date.now())},1e3);return(0,o.al)(()=>{clearInterval(c)}),t.$$set=t=>{"startTime"in t&&e(0,l=t.startTime)},[l,s,function(t){let n=Math.floor(t/1e3),e=n<0?0:n;return e>=60?"".concat(Math.floor(e/60).toLocaleString(a)," ").concat(r("notify.time.minutes")):"".concat(e.toLocaleString(a)," ").concat(r("notify.time.seconds"))}]}class j extends o.S{constructor(t){super(),(0,o.i)(this,t,$,w,o.s,{startTime:0},k)}}function z(t){(0,o.a)(t,"svelte-1otz6tt","div.notify-transaction-data.svelte-1otz6tt{font-size:var(\n      --notify-onboard-transaction-font-size,\n      var(--onboard-font-size-6, var(--font-size-6))\n    );font-family:inherit;margin:0px 20px 0px 8px;justify-content:center}.hash-time.svelte-1otz6tt{display:inline-flex;margin-top:4px;font-size:var(\n      --notify-onboard-hash-time-font-size,\n      var(--onboard-font-size-7, var(--font-size-7))\n    );line-height:var(\n      --notify-onboard-hash-time-font-line-height,\n      var(--onboard-font-line-height-4, var(--font-line-height-4))\n    )}.address-hash.svelte-1otz6tt{color:var(\n      --notify-onboard-address-hash-color,\n      var(--onboard-primary-200, var(--primary-200))\n    )}a.address-hash.svelte-1otz6tt{color:var(\n      --notify-onboard-anchor-color,\n      var(--onboard-primary-400, var(--primary-400))\n    )}a.svelte-1otz6tt{display:flex;text-decoration:none;color:inherit}.transaction-status.svelte-1otz6tt{color:var(--notify-onboard-transaction-status, inherit);line-height:var(\n      --notify-onboard-font-size-5,\n      var(--onboard-font-size-5, var(--font-size-5))\n    );font-weight:400;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}")}function C(t){let n,e,i,r;let a=t[0].link?T:L,l=a(t);return i=new j({props:{startTime:t[0].startTime}}),{c(){n=(0,o.j)("span"),l.c(),e=(0,o.G)(),(0,o.F)(i.$$.fragment),(0,o.k)(n,"class","hash-time svelte-1otz6tt")},m(t,a){(0,o.b)(t,n,a),l.m(n,null),(0,o.m)(n,e),(0,o.I)(i,n,null),r=!0},p(t,o){a===(a=t[0].link?T:L)&&l?l.p(t,o):(l.d(1),(l=a(t))&&(l.c(),l.m(n,e)));let r={};1&o&&(r.startTime=t[0].startTime),i.$set(r)},i(t){r||((0,o.x)(i.$$.fragment,t),r=!0)},o(t){(0,o.A)(i.$$.fragment,t),r=!1},d(t){t&&(0,o.d)(n),l.d(),(0,o.K)(i)}}}function L(t){let n,e;let i=(0,o.E)(t[0].id)+"";return{c(){n=(0,o.j)("div"),e=(0,o.t)(i),(0,o.k)(n,"class","address-hash svelte-1otz6tt")},m(t,i){(0,o.b)(t,n,i),(0,o.m)(n,e)},p(t,n){1&n&&i!==(i=(0,o.E)(t[0].id)+"")&&(0,o.v)(e,i)},d(t){t&&(0,o.d)(n)}}}function T(t){let n,e,i;let r=(0,o.E)(t[0].id)+"";return{c(){n=(0,o.j)("a"),e=(0,o.t)(r),(0,o.k)(n,"class","address-hash svelte-1otz6tt"),(0,o.k)(n,"href",i=t[0].link),(0,o.k)(n,"target","_blank"),(0,o.k)(n,"rel","noreferrer noopener")},m(t,i){(0,o.b)(t,n,i),(0,o.m)(n,e)},p(t,a){1&a&&r!==(r=(0,o.E)(t[0].id)+"")&&(0,o.v)(e,r),1&a&&i!==(i=t[0].link)&&(0,o.k)(n,"href",i)},d(t){t&&(0,o.d)(n)}}}function S(t){let n,e,i,r,a;let l=t[0].message+"",s=t[0].id&&!t[0].id.includes("customNotification")&&!t[0].id.includes("preflight"),c=s&&C(t);return{c(){n=(0,o.j)("div"),e=(0,o.j)("span"),i=(0,o.t)(l),r=(0,o.G)(),c&&c.c(),(0,o.k)(e,"class","transaction-status svelte-1otz6tt"),(0,o.k)(n,"class","flex flex-column notify-transaction-data svelte-1otz6tt")},m(t,l){(0,o.b)(t,n,l),(0,o.m)(n,e),(0,o.m)(e,i),(0,o.m)(n,r),c&&c.m(n,null),a=!0},p(t,e){let[r]=e;(!a||1&r)&&l!==(l=t[0].message+"")&&(0,o.v)(i,l),1&r&&(s=t[0].id&&!t[0].id.includes("customNotification")&&!t[0].id.includes("preflight")),s?c?(c.p(t,r),1&r&&(0,o.x)(c,1)):((c=C(t)).c(),(0,o.x)(c,1),c.m(n,null)):c&&((0,o.y)(),(0,o.A)(c,1,1,()=>{c=null}),(0,o.z)())},i(t){a||((0,o.x)(c),a=!0)},o(t){(0,o.A)(c),a=!1},d(t){t&&(0,o.d)(n),c&&c.d()}}}function A(t,n,e){let{notification:o}=n;return t.$$set=t=>{"notification"in t&&e(0,o=t.notification)},[o]}class M extends o.S{constructor(t){super(),(0,o.i)(this,t,A,S,o.s,{notification:0},z)}}let P=["txPool"],E=["main","matic-main"],I=["Ledger","Trezor","Keystone","KeepKey","D'CENT"],F=t=>P.includes(t),G=t=>E.includes(t),R=t=>t&&I.includes(t.label);async function H(t){let{type:n,wallet:e,transaction:i}=t,{from:r,input:a,value:s,to:c,nonce:d,gas:f,network:v}=i,p=o.ap[v],{gasPriceProbability:u}=o.a3.get().notify.replacement,{gas:m,apiKey:y}=o.af;if(!m)return;let[b]=await m.get({chains:[o.ap[v]],endpoint:"blockPrices",apiKey:y}),{maxFeePerGas:h,maxPriorityFeePerGas:g}=b.blockPrices[0].estimatedPrices.find(t=>{let{confidence:e}=t;return e===("speedup"===n?null==u?void 0:u.speedup:null==u?void 0:u.cancel)})||{};if(!h||!g)return;let k=(0,o.aq)(h),x=(0,o.aq)(g);return e.provider.request({method:"eth_sendTransaction",params:[Object.assign({type:"0x2",from:r,to:"cancel"===n?r:c,chainId:parseInt(p),value:(0,l.Z4)(BigInt(s)),nonce:(0,o.ar)(d),gasLimit:(0,o.ar)(f),maxFeePerGas:k,maxPriorityFeePerGas:x},"0x"===a?{}:{data:a})]})}function N(t){(0,o.a)(t,"svelte-ftkynd",".bn-notify-notification.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{--backround-color:var(--notify-onboard-background, var(--w3o-backround-color, var(--gray-700)));--foreground-color:var(--w3o-foreground-color, var(--gray-600));--text-color:var(--w3o-text-color, #FFF);--border-color:var(--w3o-border-color);font-family:inherit;transition:background 300ms ease-in-out, color 300ms ease-in-out;pointer-events:all;backdrop-filter:blur(5px);width:100%;min-height:56px;display:flex;flex-direction:column;position:relative;overflow:hidden;border:1px solid transparent;border-radius:var(\n      --notify-onboard-border-radius,\n      var(--onboard-border-radius-4, var(--border-radius-4))\n    );background:var(--foreground-color);color:var(--text-color)}.bn-notify-notification-inner.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{padding:0.75rem}.bn-notify-notification.svelte-ftkynd:hover>div.bn-notify-notification-inner.svelte-ftkynd>div.notify-close-btn-desktop.svelte-ftkynd{visibility:visible;opacity:1}div.notify-close-btn.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{margin-left:auto;margin-bottom:auto;height:24px;width:24px;position:absolute;top:8px;right:8px;justify-content:center;align-items:center}div.notify-close-btn-desktop.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{visibility:hidden;transition:visibility 0.15s linear, opacity 0.15s linear;opacity:0}.notify-close-btn.svelte-ftkynd .close-icon.svelte-ftkynd.svelte-ftkynd{width:20px;margin:auto;color:var(--text-color)}.notify-close-btn.svelte-ftkynd>.close-icon.svelte-ftkynd.svelte-ftkynd{color:var(--notify-onboard-close-icon-color)}.notify-close-btn.svelte-ftkynd:hover>.close-icon.svelte-ftkynd.svelte-ftkynd{color:var(--notify-onboard-close-icon-hover)}.transaction-status.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{color:var(\n      --notify-onboard-transaction-status-color,\n      var(--onboard-primary-100, var(--primary-100))\n    );line-height:14px}.dropdown.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{height:0px;overflow:hidden;transition:height 150ms ease-in-out}.dropdown-visible.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{height:48px}.dropdown-buttons.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{background-color:var(\n      --notify-onboard-dropdown-background,\n      var(--onboard-gray-700, var(--gray-700))\n    );width:100%;padding:8px}.dropdown-button.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{padding:4px 12px;border-radius:var(\n      --notify-onboard-dropdown-border-radius,\n      var(--onboard-border-radius-5, var(--border-radius-5))\n    );background-color:transparent;font-size:var(\n      --notify-onboard-dropdown-font-size,\n      var(--onboard-font-size-6, var(--font-size-6))\n    );color:var(\n      --notify-onboard-dropdown-text-color,\n      var(--onboard-primary-400, var(--primary-400))\n    );transition:all 150ms ease-in-out;cursor:pointer}.dropdown-button.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd:hover{background:var(\n      --notify-onboard-dropdown-btn-hover-background,\n      rgba(146, 155, 237, 0.2)\n    )}")}function K(t){let n,e,i,r,a,l;return{c(){n=(0,o.j)("div"),(e=(0,o.j)("button")).textContent="Cancel",i=(0,o.G)(),(r=(0,o.j)("button")).textContent="Speed-up",(0,o.k)(e,"class","dropdown-button svelte-ftkynd"),(0,o.k)(r,"class","dropdown-button svelte-ftkynd"),(0,o.k)(n,"class","dropdown-buttons flex items-center justify-end svelte-ftkynd")},m(s,c){(0,o.b)(s,n,c),(0,o.m)(n,e),(0,o.m)(n,i),(0,o.m)(n,r),a||(l=[(0,o.p)(e,"click",t[10]),(0,o.p)(r,"click",t[11])],a=!0)},p:o.n,d(t){t&&(0,o.d)(n),a=!1,(0,o.L)(l)}}}function _(t){let n,e,i,r,a,l,s,c,d,f,v,p,u,m;i=new g({props:{notification:t[0],chainStyles:o.as[o.ap[t[0].network]]}}),a=new M({props:{notification:t[0]}});let y="txPool"===t[0].eventCode&&K(t);return{c(){n=(0,o.j)("div"),e=(0,o.j)("div"),(0,o.F)(i.$$.fragment),r=(0,o.G)(),(0,o.F)(a.$$.fragment),l=(0,o.G)(),s=(0,o.j)("div"),c=(0,o.j)("div"),d=(0,o.G)(),f=(0,o.j)("div"),y&&y.c(),(0,o.k)(c,"class","flex items-center close-icon svelte-ftkynd"),(0,o.k)(s,"class","notify-close-btn notify-close-btn-"+t[4].type+" pointer flex svelte-ftkynd"),(0,o.k)(e,"class","flex bn-notify-notification-inner svelte-ftkynd"),(0,o.k)(f,"class","dropdown svelte-ftkynd"),(0,o.H)(f,"dropdown-visible",t[2]&&t[5]&&F(t[0].eventCode)&&G(t[0].network)&&R(t[7])),(0,o.k)(n,"class",v="bn-notify-notification bn-notify-notification-"+t[0].type+"} svelte-ftkynd"),(0,o.H)(n,"bn-notify-clickable",t[0].onClick)},m(v,b){(0,o.b)(v,n,b),(0,o.m)(n,e),(0,o.I)(i,e,null),(0,o.m)(e,r),(0,o.I)(a,e,null),(0,o.m)(e,l),(0,o.m)(e,s),(0,o.m)(s,c),c.innerHTML='\n<svg width="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" fill="currentColor"/>\n</svg>\n',(0,o.m)(n,d),(0,o.m)(n,f),y&&y.m(f,null),p=!0,u||(m=[(0,o.p)(s,"click",(0,o.J)(t[9])),(0,o.p)(n,"mouseenter",t[12]),(0,o.p)(n,"mouseleave",t[13]),(0,o.p)(n,"click",t[8])],u=!0)},p(t,e){let[r]=e,l={};1&r&&(l.notification=t[0]),1&r&&(l.chainStyles=o.as[o.ap[t[0].network]]),i.$set(l);let s={};1&r&&(s.notification=t[0]),a.$set(s),"txPool"===t[0].eventCode?y?y.p(t,r):((y=K(t)).c(),y.m(f,null)):y&&(y.d(1),y=null),(!p||165&r)&&(0,o.H)(f,"dropdown-visible",t[2]&&t[5]&&F(t[0].eventCode)&&G(t[0].network)&&R(t[7])),(!p||1&r&&v!==(v="bn-notify-notification bn-notify-notification-"+t[0].type+"} svelte-ftkynd"))&&(0,o.k)(n,"class",v),(!p||1&r)&&(0,o.H)(n,"bn-notify-clickable",t[0].onClick)},i(t){p||((0,o.x)(i.$$.fragment,t),(0,o.x)(a.$$.fragment,t),p=!0)},o(t){(0,o.A)(i.$$.fragment,t),(0,o.A)(a.$$.fragment,t),p=!1},d(t){t&&(0,o.d)(n),(0,o.K)(i),(0,o.K)(a),y&&y.d(),u=!1,(0,o.L)(m)}}}function D(t,n,e){let r,a,l;(0,o.c)(t,o.w,t=>e(15,r=t)),(0,o.c)(t,i._,t=>e(3,a=t));let{device:s,gas:c}=o.af,{notification:d}=n,{updateParentOnRemove:f}=n,v=!1,p=o.at.getValue().find(t=>{let{hash:n}=t;return n===d.id}),u=p&&r.find(t=>{let{accounts:n}=t;return!!n.find(t=>{let{address:n}=t;return n.toLowerCase()===p.from.toLowerCase()})});(0,o.al)(()=>{clearTimeout(l)});let m=async()=>{try{await H({type:"cancel",wallet:u,transaction:p})}catch(n){let t="".concat(p.hash.slice(0,9),":txReplaceError").concat(p.hash.slice(-5));(0,o.aw)({id:t,type:"hint",eventCode:"txError",message:a("notify.transaction.txReplaceError"),key:t,autoDismiss:4e3})}},y=async()=>{try{await H({type:"speedup",wallet:u,transaction:p})}catch(n){let t="".concat(p.hash.slice(0,9),":txReplaceError").concat(p.hash.slice(-5));(0,o.aw)({id:t,type:"hint",eventCode:"txError",message:a("notify.transaction.txReplaceError"),key:t,autoDismiss:4e3})}};return t.$$set=t=>{"notification"in t&&e(0,d=t.notification),"updateParentOnRemove"in t&&e(1,f=t.updateParentOnRemove)},t.$$.update=()=>{1&t.$$.dirty&&d.autoDismiss&&(l=setTimeout(()=>{(0,o.au)(d.id),(0,o.av)(d.id)},d.autoDismiss))},[d,f,v,a,s,c,p,u,function(t){(null==d?void 0:d.onClick)&&d.onClick(t)},()=>{(0,o.au)(d.id),(0,o.av)(d.id),f()},m,y,()=>e(2,v=!0),()=>e(2,v=!1)]}class O extends o.S{constructor(t){super(),(0,o.i)(this,t,D,_,o.s,{notification:0,updateParentOnRemove:1},N)}}function V(t){(0,o.a)(t,"svelte-1h8mmo3","ul.svelte-1h8mmo3{padding-left:0;display:flex;flex-flow:column nowrap;font-size:var(\n      --notify-onboard-font-size,\n      var(--onboard-font-size-5, var(--font-size-5))\n    );list-style-type:none;overflow:visible;scrollbar-width:none;box-sizing:border-box;z-index:var(--notify-onboard-z-index, 300);font-family:var(\n      --notify-onboard-font-family,\n      var(--onboard-font-family-normal, inherit)\n    );margin:8px 0;pointer-events:all}.y-scroll.svelte-1h8mmo3{overflow-y:scroll}.y-visible.svelte-1h8mmo3{overflow-y:visible}li.notification-list-top.svelte-1h8mmo3:not(:first-child){margin-top:8px}li.notification-list-bottom.svelte-1h8mmo3:not(:first-child){margin-bottom:8px}ul.bn-notify-bottomLeft.svelte-1h8mmo3,ul.bn-notify-bottomRight.svelte-1h8mmo3{flex-direction:column-reverse}@media only screen and (max-width: 450px){ul.svelte-1h8mmo3{width:100%}}.bn-notify-clickable:hover{cursor:pointer}.svelte-1h8mmo3::-webkit-scrollbar{display:none}")}function q(t,n,e){let o=t.slice();return o[12]=n[e],o}function Z(t){let n,e,i,r;let a=[],l=new Map,s=t[2],c=t=>t[12].key;for(let n=0;n<s.length;n+=1){let e=q(t,s,n),o=c(e);l.set(o,a[n]=B(o,e))}return{c(){n=(0,o.j)("ul");for(let t=0;t<a.length;t+=1)a[t].c();(0,o.k)(n,"class",e="bn-notify-"+t[0]+" "+t[5]+" svelte-1h8mmo3"),(0,o.k)(n,"style",i="".concat(t[0].includes("top")?"justify-content:flex-start;":"","; max-height: calc(100vh - ").concat(t[6].expanded?"412px":t[1]&&"mobile"!==t[7].type?"82px":t[1]||"mobile"!==t[7].type?"24px":"108px",")"))},m(t,e){(0,o.b)(t,n,e);for(let t=0;t<a.length;t+=1)a[t]&&a[t].m(n,null);r=!0},p(t,d){if(517&d){s=t[2],(0,o.y)();for(let t=0;t<a.length;t+=1)a[t].r();a=(0,o.u)(a,d,c,1,t,s,l,n,o.aA,B,null,q);for(let t=0;t<a.length;t+=1)a[t].a();(0,o.z)()}(!r||33&d&&e!==(e="bn-notify-"+t[0]+" "+t[5]+" svelte-1h8mmo3"))&&(0,o.k)(n,"class",e),(!r||67&d&&i!==(i="".concat(t[0].includes("top")?"justify-content:flex-start;":"","; max-height: calc(100vh - ").concat(t[6].expanded?"412px":t[1]&&"mobile"!==t[7].type?"82px":t[1]||"mobile"!==t[7].type?"24px":"108px",")")))&&(0,o.k)(n,"style",i)},i(t){if(!r){for(let t=0;t<s.length;t+=1)(0,o.x)(a[t]);r=!0}},o(t){for(let t=0;t<a.length;t+=1)(0,o.A)(a[t]);r=!1},d(t){t&&(0,o.d)(n);for(let t=0;t<a.length;t+=1)a[t].d()}}}function B(t,n){let e,i,r,a,l,c,d,f,v,p;let u=o.n;return i=new O({props:{notification:n[12],updateParentOnRemove:n[9]}}),{key:t,first:null,c(){e=(0,o.j)("li"),(0,o.F)(i.$$.fragment),r=(0,o.G)(),(0,o.k)(e,"class",a=(0,o.l)("bn-notify-li-".concat(n[0]," ").concat(n[0].includes("top")?"notification-list-top":"notification-list-bottom"))+" svelte-1h8mmo3"),this.first=e},m(t,a){(0,o.b)(t,e,a),(0,o.I)(i,e,null),(0,o.m)(e,r),f=!0,v||(p=(0,o.p)(e,"click",(0,o.J)(n[10])),v=!0)},p(t,r){n=t;let l={};4&r&&(l.notification=n[12]),i.$set(l),(!f||1&r&&a!==(a=(0,o.l)("bn-notify-li-".concat(n[0]," ").concat(n[0].includes("top")?"notification-list-top":"notification-list-bottom"))+" svelte-1h8mmo3"))&&(0,o.k)(e,"class",a)},r(){d=e.getBoundingClientRect()},f(){(0,o.ax)(e),u(),(0,o.ay)(e,d)},a(){u(),u=(0,o.az)(e,d,s,{duration:500})},i(t){f||((0,o.x)(i.$$.fragment,t),t&&(0,o.U)(()=>{f&&(c&&c.end(1),(l=(0,o.V)(e,o.ab,{duration:1200,delay:300,x:n[3],y:n[4],easing:U})).start())}),f=!0)},o(t){(0,o.A)(i.$$.fragment,t),l&&l.invalidate(),c=(0,o.ak)(e,o.X,{duration:300,easing:o.an}),f=!1},d(t){t&&(0,o.d)(e),(0,o.K)(i),t&&c&&c.end(),v=!1,p()}}}function J(t){let n,e;let i=t[2].length&&Z(t);return{c(){i&&i.c(),n=(0,o.e)()},m(t,r){i&&i.m(t,r),(0,o.b)(t,n,r),e=!0},p(t,e){let[r]=e;t[2].length?i?(i.p(t,r),4&r&&(0,o.x)(i,1)):((i=Z(t)).c(),(0,o.x)(i,1),i.m(n.parentNode,n)):i&&((0,o.y)(),(0,o.A)(i,1,1,()=>{i=null}),(0,o.z)())},i(t){e||((0,o.x)(i),e=!0)},o(t){(0,o.A)(i),e=!1},d(t){i&&i.d(t),t&&(0,o.d)(n)}}}function U(t){return Math.sin(-13*(t+1)*Math.PI/2)*Math.pow(2,-35*t)+1}function X(t,n,e){let i,l,s;let{device:c}=o.af,d=o.a3.select("accountCenter").pipe((0,r.O)(o.a3.get().accountCenter),(0,a.d)(1));(0,o.c)(t,d,t=>e(6,i=t));let{position:f}=n,{sharedContainer:v}=n,{notifications:p}=n;l=0;let u="y-scroll",m=(s=null,(t,n)=>{clearTimeout(s),s=setTimeout(t,n)});return t.$$set=t=>{"position"in t&&e(0,f=t.position),"sharedContainer"in t&&e(1,v=t.sharedContainer),"notifications"in t&&e(2,p=t.notifications)},t.$$.update=()=>{1&t.$$.dirty&&(f.includes("top")?e(4,l=-50):e(4,l=50))},[f,v,p,0,l,u,i,c,d,()=>{"y-visible"!==u&&e(5,u="y-visible"),m(function(){e(5,u="y-scroll")},1e3)},function(n){o.ai.call(this,t,n)}]}class Q extends o.S{constructor(t){super(),(0,o.i)(this,t,X,J,o.s,{position:0,sharedContainer:1,notifications:2},V)}}}}]);