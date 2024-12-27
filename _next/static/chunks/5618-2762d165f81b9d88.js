"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5618],{27865:function(t,e,r){r.d(e,{FF:function(){return v},S5:function(){return d},Wd:function(){return y},bytesToNumberBE:function(){return u},ci:function(){return l},dQ:function(){return m},eV:function(){return p},hexToBytes:function(){return a},n$:function(){return b},ql:function(){return g},tL:function(){return h},ty:function(){return c}}),BigInt(0);let n=BigInt(1),i=BigInt(2),o=t=>t instanceof Uint8Array,f=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function l(t){if(!o(t))throw Error("Uint8Array expected");let e="";for(let r=0;r<t.length;r++)e+=f[t[r]];return e}function s(t){if("string"!=typeof t)throw Error("hex string expected, got "+typeof t);return BigInt(""===t?"0":"0x".concat(t))}function a(t){if("string"!=typeof t)throw Error("hex string expected, got "+typeof t);let e=t.length;if(e%2)throw Error("padded hex string expected, got unpadded hex of length "+e);let r=new Uint8Array(e/2);for(let e=0;e<r.length;e++){let n=2*e,i=Number.parseInt(t.slice(n,n+2),16);if(Number.isNaN(i)||i<0)throw Error("Invalid byte sequence");r[e]=i}return r}function u(t){return s(l(t))}function c(t){if(!o(t))throw Error("Uint8Array expected");return s(l(Uint8Array.from(t).reverse()))}function h(t,e){return a(t.toString(16).padStart(2*e,"0"))}function d(t,e){return h(t,e).reverse()}function g(t,e,r){let n;if("string"==typeof e)try{n=a(e)}catch(r){throw Error("".concat(t,' must be valid hex string, got "').concat(e,'". Cause: ').concat(r))}else if(o(e))n=Uint8Array.from(e);else throw Error("".concat(t," must be hex string or Uint8Array"));let i=n.length;if("number"==typeof r&&i!==r)throw Error("".concat(t," expected ").concat(r," bytes, got ").concat(i));return n}function p(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];let n=new Uint8Array(e.reduce((t,e)=>t+e.length,0)),i=0;return e.forEach(t=>{if(!o(t))throw Error("Uint8Array expected");n.set(t,i),i+=t.length}),n}function y(t,e){if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0}let m=t=>(i<<BigInt(t-1))-n,E=t=>new Uint8Array(t),w=t=>Uint8Array.from(t);function b(t,e,r){if("number"!=typeof t||t<2)throw Error("hashLen must be a number");if("number"!=typeof e||e<2)throw Error("qByteLen must be a number");if("function"!=typeof r)throw Error("hmacFn must be a function");let n=E(t),i=E(t),o=0,f=()=>{n.fill(1),i.fill(0),o=0},l=function(){for(var t=arguments.length,e=Array(t),o=0;o<t;o++)e[o]=arguments[o];return r(i,n,...e)},s=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E();i=l(w([0]),t),n=l(),0!==t.length&&(i=l(w([1]),t),n=l())},a=()=>{if(o++>=1e3)throw Error("drbg: tried 1000 values");let t=0,r=[];for(;t<e;){let e=(n=l()).slice();r.push(e),t+=n.length}return p(...r)};return(t,e)=>{let r;for(f(),s(t);!(r=e(a()));)s();return f(),r}}let B={bigint:t=>"bigint"==typeof t,function:t=>"function"==typeof t,boolean:t=>"boolean"==typeof t,string:t=>"string"==typeof t,stringOrUint8Array:t=>"string"==typeof t||t instanceof Uint8Array,isSafeInteger:t=>Number.isSafeInteger(t),array:t=>Array.isArray(t),field:(t,e)=>e.Fp.isValid(t),hash:t=>"function"==typeof t&&Number.isSafeInteger(t.outputLen)};function v(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=(e,r,n)=>{let i=B[r];if("function"!=typeof i)throw Error('Invalid validator "'.concat(r,'", expected function'));let o=t[e];if((!n||void 0!==o)&&!i(o,t))throw Error("Invalid param ".concat(String(e),"=").concat(o," (").concat(typeof o,"), expected ").concat(r))};for(let[t,r]of Object.entries(e))n(t,r,!1);for(let[t,e]of Object.entries(r))n(t,e,!0);return t}},75618:function(t,e,r){r.d(e,{kA:function(){return Z}});var n=r(76867),i=r(27865);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */let o=BigInt(0),f=BigInt(1),l=BigInt(2),s=BigInt(3),a=BigInt(4),u=BigInt(5),c=BigInt(8);function h(t,e){let r=t%e;return r>=o?r:e+r}function d(t,e,r){let n=t;for(;e-- >o;)n*=n,n%=r;return n}function g(t,e){if(t===o||e<=o)throw Error("invert: expected positive integers, got n=".concat(t," mod=").concat(e));let r=h(t,e),n=e,i=o,l=f,s=f,a=o;for(;r!==o;){let t=n/r,e=n%r,o=i-s*t,f=l-a*t;n=r,r=e,i=s,l=a,s=o,a=f}if(n!==f)throw Error("invert: does not exist");return h(i,e)}BigInt(9),BigInt(16);let p=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function y(t,e){let r=void 0!==e?e:t.toString(2).length;return{nBitLength:r,nByteLength:Math.ceil(r/8)}}function m(t){if("bigint"!=typeof t)throw Error("field order must be bigint");return Math.ceil(t.toString(2).length/8)}function E(t){let e=m(t);return e+Math.ceil(e/2)}var w=r(40521),b=r(87196);class B extends b.kb{update(t){return(0,w.Gg)(this),this.iHash.update(t),this}digestInto(t){(0,w.Gg)(this),(0,w.aI)(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){let t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));let{oHash:e,iHash:r,finished:n,destroyed:i,blockLen:o,outputLen:f}=this;return t.finished=n,t.destroyed=i,t.blockLen=o,t.outputLen=f,t.oHash=e._cloneInto(t.oHash),t.iHash=r._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}constructor(t,e){super(),this.finished=!1,this.destroyed=!1,(0,w.vp)(t);let r=(0,b.O0)(e);if(this.iHash=t.create(),"function"!=typeof this.iHash.update)throw Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;let n=this.blockLen,i=new Uint8Array(n);i.set(r.length>n?t.create().update(r).digest():r);for(let t=0;t<i.length;t++)i[t]^=54;this.iHash.update(i),this.oHash=t.create();for(let t=0;t<i.length;t++)i[t]^=106;this.oHash.update(i),i.fill(0)}}let v=(t,e,r)=>new B(t,e).update(r).digest();v.create=(t,e)=>new B(t,e);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */let x=BigInt(0),I=BigInt(1);function S(t){return!function(t){let e=p.reduce((t,e)=>(t[e]="function",t),{ATAI:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"});(0,i.FF)(t,e)}(t.Fp),(0,i.FF)(t,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...y(t.n,t.nBitLength),...t,p:t.Fp.ATAI})}let{bytesToNumberBE:A,hexToBytes:q}=i,O={Err:class extends Error{constructor(t=""){super(t)}},_parseInt(t){let{Err:e}=O;if(t.length<2||2!==t[0])throw new e("Invalid signature integer tag");let r=t[1],n=t.subarray(2,r+2);if(!r||n.length!==r)throw new e("Invalid signature integer: wrong length");if(128&n[0])throw new e("Invalid signature integer: negative");if(0===n[0]&&!(128&n[1]))throw new e("Invalid signature integer: unnecessary leading zero");return{d:A(n),l:t.subarray(r+2)}},toSig(t){let{Err:e}=O,r="string"==typeof t?q(t):t;if(!(r instanceof Uint8Array))throw Error("ui8a expected");let n=r.length;if(n<2||48!=r[0])throw new e("Invalid signature tag");if(r[1]!==n-2)throw new e("Invalid signature: incorrect length");let{d:i,l:o}=O._parseInt(r.subarray(2)),{d:f,l:l}=O._parseInt(o);if(l.length)throw new e("Invalid signature: left bytes after parsing");return{r:i,s:f}},hexFromSig(t){let e=t=>8&Number.parseInt(t[0],16)?"00"+t:t,r=t=>{let e=t.toString(16);return 1&e.length?"0".concat(e):e},n=e(r(t.s)),i=e(r(t.r)),o=n.length/2,f=i.length/2,l=r(o),s=r(f);return"30".concat(r(f+o+4),"02").concat(s).concat(i,"02").concat(l).concat(n)}},N=BigInt(0),R=BigInt(1),L=(BigInt(2),BigInt(3));BigInt(4);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */let H=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),F=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),U=BigInt(1),T=BigInt(2),z=(t,e)=>(t+e/T)/e,P=function(t,e){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(t<=o)throw Error("Expected Field ATAI > 0, got ".concat(t));let{nBitLength:d,nByteLength:p}=y(t,e);if(p>2048)throw Error("Field lengths over 2048 bytes are not supported");let m=function(t){if(t%a===s){let e=(t+f)/a;return function(t,r){let n=t.pow(r,e);if(!t.eql(t.sqr(n),r))throw Error("Cannot find square root");return n}}if(t%c===u){let e=(t-u)/c;return function(t,r){let n=t.mul(r,l),i=t.pow(n,e),o=t.mul(r,i),f=t.mul(t.mul(o,l),i),s=t.mul(o,t.sub(f,t.ONE));if(!t.eql(t.sqr(s),r))throw Error("Cannot find square root");return s}}return function(t){let e,r,n;let i=(t-f)/l;for(e=t-f,r=0;e%l===o;e/=l,r++);for(n=l;n<t&&function(t,e,r){if(r<=o||e<o)throw Error("Expected power/modulo > 0");if(r===f)return o;let n=f;for(;e>o;)e&f&&(n=n*t%r),t=t*t%r,e>>=f;return n}(n,i,t)!==t-f;n++);if(1===r){let e=(t+f)/a;return function(t,r){let n=t.pow(r,e);if(!t.eql(t.sqr(n),r))throw Error("Cannot find square root");return n}}let s=(e+f)/l;return function(t,o){if(t.pow(o,i)===t.neg(t.ONE))throw Error("Cannot find square root");let l=r,a=t.pow(t.mul(t.ONE,n),e),u=t.pow(o,s),c=t.pow(o,e);for(;!t.eql(c,t.ONE);){if(t.eql(c,t.ZERO))return t.ZERO;let e=1;for(let r=t.sqr(c);e<l&&!t.eql(r,t.ONE);e++)r=t.sqr(r);let r=t.pow(a,f<<BigInt(l-e-1));a=t.sqr(r),u=t.mul(u,r),c=t.mul(c,a),l=e}return u}}(t)}(t),E=Object.freeze({ATAI:t,BITS:d,BYTES:p,MASK:(0,i.dQ)(d),ZERO:o,ONE:f,create:e=>h(e,t),isValid:e=>{if("bigint"!=typeof e)throw Error("Invalid field element: expected bigint, got ".concat(typeof e));return o<=e&&e<t},is0:t=>t===o,isOdd:t=>(t&f)===f,neg:e=>h(-e,t),eql:(t,e)=>t===e,sqr:e=>h(e*e,t),add:(e,r)=>h(e+r,t),sub:(e,r)=>h(e-r,t),mul:(e,r)=>h(e*r,t),pow:(t,e)=>(function(t,e,r){if(r<o)throw Error("Expected power > 0");if(r===o)return t.ONE;if(r===f)return e;let n=t.ONE,i=e;for(;r>o;)r&f&&(n=t.mul(n,i)),i=t.sqr(i),r>>=f;return n})(E,t,e),div:(e,r)=>h(e*g(r,t),t),sqrN:t=>t*t,addN:(t,e)=>t+e,subN:(t,e)=>t-e,mulN:(t,e)=>t*e,inv:e=>g(e,t),sqrt:n.sqrt||(t=>m(E,t)),invertBatch:t=>(function(t,e){let r=Array(e.length),n=e.reduce((e,n,i)=>t.is0(n)?e:(r[i]=e,t.mul(e,n)),t.ONE),i=t.inv(n);return e.reduceRight((e,n,i)=>t.is0(n)?e:(r[i]=t.mul(e,r[i]),t.mul(e,n)),i),r})(E,t),cmov:(t,e,r)=>r?e:t,toBytes:t=>r?(0,i.S5)(t,p):(0,i.tL)(t,p),fromBytes:t=>{if(t.length!==p)throw Error("Fp.fromBytes: expected ".concat(p,", got ").concat(t.length));return r?(0,i.ty)(t):(0,i.bytesToNumberBE)(t)}});return Object.freeze(E)}(H,void 0,void 0,{sqrt:function(t){let e=BigInt(3),r=BigInt(6),n=BigInt(11),i=BigInt(22),o=BigInt(23),f=BigInt(44),l=BigInt(88),s=t*t*t%H,a=s*s*t%H,u=d(a,e,H)*a%H,c=d(u,e,H)*a%H,h=d(c,T,H)*s%H,g=d(h,n,H)*h%H,p=d(g,i,H)*g%H,y=d(p,f,H)*p%H,m=d(y,l,H)*y%H,E=d(m,f,H)*p%H,w=d(E,e,H)*a%H,b=d(w,o,H)*g%H,B=d(b,r,H)*s%H,v=d(B,T,H);if(!P.eql(P.sqr(v),t))throw Error("Cannot find square root");return v}}),Z=function(t,e){let r=e=>(function(t){let e=function(t){let e=S(t);return i.FF(e,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...e})}(t),{Fp:r,n:n}=e,o=r.BYTES+1,l=2*r.BYTES+1;function s(t){return h(t,n)}let{ProjectivePoint:a,normPrivateKeyToScalar:u,weierstrassEquation:c,isWithinCurveOrder:d}=function(t){let e=/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function(t){let e=S(t);i.FF(e,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});let{endo:r,Fp:n,a:o}=e;if(r){if(!n.eql(o,n.ZERO))throw Error("Endomorphism can only be defined for Koblitz curves that have a=0");if("object"!=typeof r||"bigint"!=typeof r.beta||"function"!=typeof r.splitScalar)throw Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...e})}(t),{Fp:r}=e,n=e.toBytes||((t,e,n)=>{let o=e.toAffine();return i.eV(Uint8Array.from([4]),r.toBytes(o.x),r.toBytes(o.y))}),o=e.fromBytes||(t=>{let e=t.subarray(1);return{x:r.fromBytes(e.subarray(0,r.BYTES)),y:r.fromBytes(e.subarray(r.BYTES,2*r.BYTES))}});function f(t){let{a:n,b:i}=e,o=r.sqr(t),f=r.mul(o,t);return r.add(r.add(f,r.mul(t,n)),i)}if(!r.eql(r.sqr(e.Gy),f(e.Gx)))throw Error("bad generator point: equation left != right");function l(t){return"bigint"==typeof t&&N<t&&t<e.n}function s(t){if(!l(t))throw Error("Expected valid bigint: 0 < bigint < curve.n")}function a(t){let r;let{allowedPrivateKeyLengths:n,nByteLength:o,wrapPrivateKey:f,n:l}=e;if(n&&"bigint"!=typeof t){if(t instanceof Uint8Array&&(t=i.ci(t)),"string"!=typeof t||!n.includes(t.length))throw Error("Invalid key");t=t.padStart(2*o,"0")}try{r="bigint"==typeof t?t:i.bytesToNumberBE((0,i.ql)("private key",t,o))}catch(e){throw Error("private key must be ".concat(o," bytes, hex or bigint, not ").concat(typeof t))}return f&&(r=h(r,l)),s(r),r}let u=new Map;function c(t){if(!(t instanceof d))throw Error("ProjectivePoint expected")}class d{static fromAffine(t){let{x:e,y:n}=t||{};if(!t||!r.isValid(e)||!r.isValid(n))throw Error("invalid affine point");if(t instanceof d)throw Error("projective point not allowed");let i=t=>r.eql(t,r.ZERO);return i(e)&&i(n)?d.ZERO:new d(e,n,r.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(t){let e=r.invertBatch(t.map(t=>t.pz));return t.map((t,r)=>t.toAffine(e[r])).map(d.fromAffine)}static fromHex(t){let e=d.fromAffine(o((0,i.ql)("pointHex",t)));return e.assertValidity(),e}static fromPrivateKey(t){return d.BASE.multiply(a(t))}_setWindowSize(t){this._WINDOW_SIZE=t,u.delete(this)}assertValidity(){if(this.is0()){if(e.allowInfinityPoint&&!r.is0(this.py))return;throw Error("bad point: ZERO")}let{x:t,y:n}=this.toAffine();if(!r.isValid(t)||!r.isValid(n))throw Error("bad point: x or y not FE");let i=r.sqr(n),o=f(t);if(!r.eql(i,o))throw Error("bad point: equation left != right");if(!this.isTorsionFree())throw Error("bad point: not in prime-order subgroup")}hasEvenY(){let{y:t}=this.toAffine();if(r.isOdd)return!r.isOdd(t);throw Error("Field doesn't support isOdd")}equals(t){c(t);let{px:e,py:n,pz:i}=this,{px:o,py:f,pz:l}=t,s=r.eql(r.mul(e,l),r.mul(o,i)),a=r.eql(r.mul(n,l),r.mul(f,i));return s&&a}negate(){return new d(this.px,r.neg(this.py),this.pz)}double(){let{a:t,b:n}=e,i=r.mul(n,L),{px:o,py:f,pz:l}=this,s=r.ZERO,a=r.ZERO,u=r.ZERO,c=r.mul(o,o),h=r.mul(f,f),g=r.mul(l,l),p=r.mul(o,f);return p=r.add(p,p),u=r.mul(o,l),u=r.add(u,u),s=r.mul(t,u),a=r.mul(i,g),a=r.add(s,a),s=r.sub(h,a),a=r.add(h,a),a=r.mul(s,a),s=r.mul(p,s),u=r.mul(i,u),g=r.mul(t,g),p=r.sub(c,g),p=r.mul(t,p),p=r.add(p,u),u=r.add(c,c),c=r.add(u,c),c=r.add(c,g),c=r.mul(c,p),a=r.add(a,c),g=r.mul(f,l),g=r.add(g,g),c=r.mul(g,p),s=r.sub(s,c),u=r.mul(g,h),u=r.add(u,u),new d(s,a,u=r.add(u,u))}add(t){c(t);let{px:n,py:i,pz:o}=this,{px:f,py:l,pz:s}=t,a=r.ZERO,u=r.ZERO,h=r.ZERO,g=e.a,p=r.mul(e.b,L),y=r.mul(n,f),m=r.mul(i,l),E=r.mul(o,s),w=r.add(n,i),b=r.add(f,l);w=r.mul(w,b),b=r.add(y,m),w=r.sub(w,b),b=r.add(n,o);let B=r.add(f,s);return b=r.mul(b,B),B=r.add(y,E),b=r.sub(b,B),B=r.add(i,o),a=r.add(l,s),B=r.mul(B,a),a=r.add(m,E),B=r.sub(B,a),h=r.mul(g,b),a=r.mul(p,E),h=r.add(a,h),a=r.sub(m,h),h=r.add(m,h),u=r.mul(a,h),m=r.add(y,y),m=r.add(m,y),E=r.mul(g,E),b=r.mul(p,b),m=r.add(m,E),E=r.sub(y,E),E=r.mul(g,E),b=r.add(b,E),y=r.mul(m,b),u=r.add(u,y),y=r.mul(B,b),a=r.mul(w,a),a=r.sub(a,y),y=r.mul(w,m),h=r.mul(B,h),new d(a,u,h=r.add(h,y))}subtract(t){return this.add(t.negate())}is0(){return this.equals(d.ZERO)}wNAF(t){return p.wNAFCached(this,u,t,t=>{let e=r.invertBatch(t.map(t=>t.pz));return t.map((t,r)=>t.toAffine(e[r])).map(d.fromAffine)})}multiplyUnsafe(t){let n=d.ZERO;if(t===N)return n;if(s(t),t===R)return this;let{endo:i}=e;if(!i)return p.unsafeLadder(this,t);let{k1neg:o,k1:f,k2neg:l,k2:a}=i.splitScalar(t),u=n,c=n,h=this;for(;f>N||a>N;)f&R&&(u=u.add(h)),a&R&&(c=c.add(h)),h=h.double(),f>>=R,a>>=R;return o&&(u=u.negate()),l&&(c=c.negate()),c=new d(r.mul(c.px,i.beta),c.py,c.pz),u.add(c)}multiply(t){let n,i;s(t);let{endo:o}=e;if(o){let{k1neg:e,k1:f,k2neg:l,k2:s}=o.splitScalar(t),{p:a,f:u}=this.wNAF(f),{p:c,f:h}=this.wNAF(s);a=p.constTimeNegate(e,a),c=p.constTimeNegate(l,c),c=new d(r.mul(c.px,o.beta),c.py,c.pz),n=a.add(c),i=u.add(h)}else{let{p:e,f:r}=this.wNAF(t);n=e,i=r}return d.normalizeZ([n,i])[0]}multiplyAndAddUnsafe(t,e,r){let n=d.BASE,i=(t,e)=>e!==N&&e!==R&&t.equals(n)?t.multiply(e):t.multiplyUnsafe(e),o=i(this,e).add(i(t,r));return o.is0()?void 0:o}toAffine(t){let{px:e,py:n,pz:i}=this,o=this.is0();null==t&&(t=o?r.ONE:r.inv(i));let f=r.mul(e,t),l=r.mul(n,t),s=r.mul(i,t);if(o)return{x:r.ZERO,y:r.ZERO};if(!r.eql(s,r.ONE))throw Error("invZ was invalid");return{x:f,y:l}}isTorsionFree(){let{h:t,isTorsionFree:r}=e;if(t===R)return!0;if(r)return r(d,this);throw Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){let{h:t,clearCofactor:r}=e;return t===R?this:r?r(d,this):this.multiplyUnsafe(e.h)}toRawBytes(){let t=!(arguments.length>0)||void 0===arguments[0]||arguments[0];return this.assertValidity(),n(d,this,t)}toHex(){let t=!(arguments.length>0)||void 0===arguments[0]||arguments[0];return i.ci(this.toRawBytes(t))}constructor(t,e,n){if(this.px=t,this.py=e,this.pz=n,null==t||!r.isValid(t))throw Error("x required");if(null==e||!r.isValid(e))throw Error("y required");if(null==n||!r.isValid(n))throw Error("z required")}}d.BASE=new d(e.Gx,e.Gy,r.ONE),d.ZERO=new d(r.ZERO,r.ONE,r.ZERO);let g=e.nBitLength,p=function(t,e){let r=(t,e)=>{let r=e.negate();return t?r:e},n=t=>({windows:Math.ceil(e/t)+1,windowSize:2**(t-1)});return{constTimeNegate:r,unsafeLadder(e,r){let n=t.ZERO,i=e;for(;r>x;)r&I&&(n=n.add(i)),i=i.double(),r>>=I;return n},precomputeWindow(t,e){let{windows:r,windowSize:i}=n(e),o=[],f=t,l=f;for(let t=0;t<r;t++){l=f,o.push(l);for(let t=1;t<i;t++)l=l.add(f),o.push(l);f=l.double()}return o},wNAF(e,i,o){let{windows:f,windowSize:l}=n(e),s=t.ZERO,a=t.BASE,u=BigInt(2**e-1),c=2**e,h=BigInt(e);for(let t=0;t<f;t++){let e=t*l,n=Number(o&u);o>>=h,n>l&&(n-=c,o+=I);let f=e+Math.abs(n)-1,d=t%2!=0,g=n<0;0===n?a=a.add(r(d,i[e])):s=s.add(r(g,i[f]))}return{p:s,f:a}},wNAFCached(t,e,r,n){let i=t._WINDOW_SIZE||1,o=e.get(t);return o||(o=this.precomputeWindow(t,i),1!==i&&e.set(t,n(o))),this.wNAF(i,o,r)}}}(d,e.endo?Math.ceil(g/2):g);return{CURVE:e,ProjectivePoint:d,normPrivateKeyToScalar:a,weierstrassEquation:f,isWithinCurveOrder:l}}({...e,toBytes(t,e,n){let o=e.toAffine(),f=r.toBytes(o.x),l=i.eV;return n?l(Uint8Array.from([e.hasEvenY()?2:3]),f):l(Uint8Array.from([4]),f,r.toBytes(o.y))},fromBytes(t){let e=t.length,n=t[0],f=t.subarray(1);if(e===o&&(2===n||3===n)){let t=i.bytesToNumberBE(f);if(!(N<t&&t<r.ATAI))throw Error("Point is not on curve");let e=c(t),o=r.sqrt(e);return(1&n)==1!=((o&R)===R)&&(o=r.neg(o)),{x:t,y:o}}if(e===l&&4===n)return{x:r.fromBytes(f.subarray(0,r.BYTES)),y:r.fromBytes(f.subarray(r.BYTES,2*r.BYTES))};throw Error("Point of length ".concat(e," was invalid. Expected ").concat(o," compressed bytes or ").concat(l," uncompressed bytes"))}}),p=t=>i.ci(i.tL(t,e.nByteLength)),y=(t,e,r)=>i.bytesToNumberBE(t.slice(e,r));class w{static fromCompact(t){let r=e.nByteLength;return new w(y(t=(0,i.ql)("compactSignature",t,2*r),0,r),y(t,r,2*r))}static fromDER(t){let{r:e,s:r}=O.toSig((0,i.ql)("DER",t));return new w(e,r)}assertValidity(){if(!d(this.r))throw Error("r must be 0 < r < CURVE.n");if(!d(this.s))throw Error("s must be 0 < s < CURVE.n")}addRecoveryBit(t){return new w(this.r,this.s,t)}recoverPublicKey(t){let{r:o,s:f,recovery:l}=this,u=v((0,i.ql)("msgHash",t));if(null==l||![0,1,2,3].includes(l))throw Error("recovery id invalid");let c=2===l||3===l?o+e.n:o;if(c>=r.ATAI)throw Error("recovery id 2 or 3 invalid");let h=(1&l)==0?"02":"03",d=a.fromHex(h+p(c)),y=g(c,n),m=s(-u*y),E=s(f*y),w=a.BASE.multiplyAndAddUnsafe(d,m,E);if(!w)throw Error("point at infinify");return w.assertValidity(),w}hasHighS(){return this.s>n>>R}normalizeS(){return this.hasHighS()?new w(this.r,s(-this.s),this.recovery):this}toDERRawBytes(){return i.hexToBytes(this.toDERHex())}toDERHex(){return O.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return i.hexToBytes(this.toCompactHex())}toCompactHex(){return p(this.r)+p(this.s)}constructor(t,e,r){this.r=t,this.s=e,this.recovery=r,this.assertValidity()}}function b(t){let e=t instanceof Uint8Array,r="string"==typeof t,n=(e||r)&&t.length;return e?n===o||n===l:r?n===2*o||n===2*l:t instanceof a}let B=e.bits2int||function(t){let r=i.bytesToNumberBE(t),n=8*t.length-e.nBitLength;return n>0?r>>BigInt(n):r},v=e.bits2int_modN||function(t){return s(B(t))},A=i.dQ(e.nBitLength);function q(t){if("bigint"!=typeof t)throw Error("bigint expected");if(!(N<=t&&t<A))throw Error("bigint expected < 2^".concat(e.nBitLength));return i.tL(t,e.nByteLength)}let H={lowS:e.lowS,prehash:!1},F={lowS:e.lowS,prehash:!1};return a.BASE._setWindowSize(8),{CURVE:e,getPublicKey:function(t){let e=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return a.fromPrivateKey(t).toRawBytes(e)},getSharedSecret:function(t,e){let r=!(arguments.length>2)||void 0===arguments[2]||arguments[2];if(b(t))throw Error("first arg must be private key");if(!b(e))throw Error("second arg must be public key");return a.fromHex(e).multiply(u(t)).toRawBytes(r)},sign:function(t,o){let f=arguments.length>2&&void 0!==arguments[2]?arguments[2]:H,{seed:l,k2sig:c}=function(t,o){let f=arguments.length>2&&void 0!==arguments[2]?arguments[2]:H;if(["recovered","canonical"].some(t=>t in f))throw Error("sign() legacy options not supported");let{hash:l,randomBytes:c}=e,{lowS:h,prehash:p,extraEntropy:y}=f;null==h&&(h=!0),t=(0,i.ql)("msgHash",t),p&&(t=(0,i.ql)("prehashed msgHash",l(t)));let m=v(t),E=u(o),b=[q(E),q(m)];if(null!=y){let t=!0===y?c(r.BYTES):y;b.push((0,i.ql)("extraEntropy",t))}return{seed:i.eV(...b),k2sig:function(t){let e=B(t);if(!d(e))return;let r=g(e,n),i=a.BASE.multiply(e).toAffine(),o=s(i.x);if(o===N)return;let f=s(r*s(m+o*E));if(f===N)return;let l=(i.x===o?0:2)|Number(i.y&R),u=f;if(h&&f>n>>R)u=f>n>>R?s(-f):f,l^=1;return new w(o,u,l)}}}(t,o,f);return i.n$(e.hash.outputLen,e.nByteLength,e.hmac)(l,c)},verify:function(t,r,o){var f;let l;let u,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:F;if(r=(0,i.ql)("msgHash",r),o=(0,i.ql)("publicKey",o),"strict"in c)throw Error("options.strict was renamed to lowS");let{lowS:h,prehash:d}=c;try{if("string"==typeof t||t instanceof Uint8Array)try{l=w.fromDER(t)}catch(e){if(!(e instanceof O.Err))throw e;l=w.fromCompact(t)}else if("object"==typeof t&&"bigint"==typeof t.r&&"bigint"==typeof t.s){let{r:e,s:r}=t;l=new w(e,r)}else throw Error("PARSE");u=a.fromHex(o)}catch(t){if("PARSE"===t.message)throw Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(h&&l.hasHighS())return!1;d&&(r=e.hash(r));let{r:p,s:y}=l,m=v(r),E=g(y,n),b=s(m*E),B=s(p*E),x=null===(f=a.BASE.multiplyAndAddUnsafe(u,b,B))||void 0===f?void 0:f.toAffine();return!!x&&s(x.x)===p},ProjectivePoint:a,Signature:w,utils:{isValidPrivateKey(t){try{return u(t),!0}catch(t){return!1}},normPrivateKeyToScalar:u,randomPrivateKey:()=>{let t=E(e.n);return function(t,e){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=t.length,o=m(e),l=E(e);if(n<16||n<l||n>1024)throw Error("expected ".concat(l,"-1024 bytes of input, got ").concat(n));let s=h(r?(0,i.bytesToNumberBE)(t):(0,i.ty)(t),e-f)+f;return r?(0,i.S5)(s,o):(0,i.tL)(s,o)}(e.randomBytes(t),e.n)},precompute(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.BASE;return e._setWindowSize(t),e.multiply(BigInt(3)),e}}}})({...t,hash:e,hmac:function(t){for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return v(e,t,(0,b.eV)(...n))},randomBytes:b.O6});return Object.freeze({...r(e),create:r})}({a:BigInt(0),b:BigInt(7),Fp:P,n:F,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:t=>{let e=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),r=-U*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),n=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),i=BigInt("0x100000000000000000000000000000000"),o=z(e*t,F),f=z(-r*t,F),l=h(t-o*e-f*n,F),s=h(-o*r-f*e,F),a=l>i,u=s>i;if(a&&(l=F-l),u&&(s=F-s),l>i||s>i)throw Error("splitScalar: Endomorphism failed, k="+t);return{k1neg:a,k1:l,k2neg:u,k2:s}}}},n.J);BigInt(0),Z.ProjectivePoint}}]);