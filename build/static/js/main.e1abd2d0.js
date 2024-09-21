/*! For license information please see main.e1abd2d0.js.LICENSE.txt */
(()=>{var e={6785:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7053);function i(e,t,n){return void 0===t&&(t=new Uint8Array(2)),void 0===n&&(n=0),t[n+0]=e>>>8,t[n+1]=e>>>0,t}function o(e,t,n){return void 0===t&&(t=new Uint8Array(2)),void 0===n&&(n=0),t[n+0]=e>>>0,t[n+1]=e>>>8,t}function a(e,t){return void 0===t&&(t=0),e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]}function s(e,t){return void 0===t&&(t=0),(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0}function l(e,t){return void 0===t&&(t=0),e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t]}function c(e,t){return void 0===t&&(t=0),(e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t])>>>0}function u(e,t,n){return void 0===t&&(t=new Uint8Array(4)),void 0===n&&(n=0),t[n+0]=e>>>24,t[n+1]=e>>>16,t[n+2]=e>>>8,t[n+3]=e>>>0,t}function d(e,t,n){return void 0===t&&(t=new Uint8Array(4)),void 0===n&&(n=0),t[n+0]=e>>>0,t[n+1]=e>>>8,t[n+2]=e>>>16,t[n+3]=e>>>24,t}function h(e,t,n){return void 0===t&&(t=new Uint8Array(8)),void 0===n&&(n=0),u(e/4294967296>>>0,t,n),u(e>>>0,t,n+4),t}function f(e,t,n){return void 0===t&&(t=new Uint8Array(8)),void 0===n&&(n=0),d(e>>>0,t,n),d(e/4294967296>>>0,t,n+4),t}t.readInt16BE=function(e,t){return void 0===t&&(t=0),(e[t+0]<<8|e[t+1])<<16>>16},t.readUint16BE=function(e,t){return void 0===t&&(t=0),(e[t+0]<<8|e[t+1])>>>0},t.readInt16LE=function(e,t){return void 0===t&&(t=0),(e[t+1]<<8|e[t])<<16>>16},t.readUint16LE=function(e,t){return void 0===t&&(t=0),(e[t+1]<<8|e[t])>>>0},t.writeUint16BE=i,t.writeInt16BE=i,t.writeUint16LE=o,t.writeInt16LE=o,t.readInt32BE=a,t.readUint32BE=s,t.readInt32LE=l,t.readUint32LE=c,t.writeUint32BE=u,t.writeInt32BE=u,t.writeUint32LE=d,t.writeInt32LE=d,t.readInt64BE=function(e,t){void 0===t&&(t=0);var n=a(e,t),r=a(e,t+4);return 4294967296*n+r-4294967296*(r>>31)},t.readUint64BE=function(e,t){return void 0===t&&(t=0),4294967296*s(e,t)+s(e,t+4)},t.readInt64LE=function(e,t){void 0===t&&(t=0);var n=l(e,t);return 4294967296*l(e,t+4)+n-4294967296*(n>>31)},t.readUint64LE=function(e,t){void 0===t&&(t=0);var n=c(e,t);return 4294967296*c(e,t+4)+n},t.writeUint64BE=h,t.writeInt64BE=h,t.writeUint64LE=f,t.writeInt64LE=f,t.readUintBE=function(e,t,n){if(void 0===n&&(n=0),e%8!==0)throw new Error("readUintBE supports only bitLengths divisible by 8");if(e/8>t.length-n)throw new Error("readUintBE: array is too short for the given bitLength");for(var r=0,i=1,o=e/8+n-1;o>=n;o--)r+=t[o]*i,i*=256;return r},t.readUintLE=function(e,t,n){if(void 0===n&&(n=0),e%8!==0)throw new Error("readUintLE supports only bitLengths divisible by 8");if(e/8>t.length-n)throw new Error("readUintLE: array is too short for the given bitLength");for(var r=0,i=1,o=n;o<n+e/8;o++)r+=t[o]*i,i*=256;return r},t.writeUintBE=function(e,t,n,i){if(void 0===n&&(n=new Uint8Array(e/8)),void 0===i&&(i=0),e%8!==0)throw new Error("writeUintBE supports only bitLengths divisible by 8");if(!r.isSafeInteger(t))throw new Error("writeUintBE value must be an integer");for(var o=1,a=e/8+i-1;a>=i;a--)n[a]=t/o&255,o*=256;return n},t.writeUintLE=function(e,t,n,i){if(void 0===n&&(n=new Uint8Array(e/8)),void 0===i&&(i=0),e%8!==0)throw new Error("writeUintLE supports only bitLengths divisible by 8");if(!r.isSafeInteger(t))throw new Error("writeUintLE value must be an integer");for(var o=1,a=i;a<i+e/8;a++)n[a]=t/o&255,o*=256;return n},t.readFloat32BE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat32(t)},t.readFloat32LE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat32(t,!0)},t.readFloat64BE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat64(t)},t.readFloat64LE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat64(t,!0)},t.writeFloat32BE=function(e,t,n){return void 0===t&&(t=new Uint8Array(4)),void 0===n&&(n=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat32(n,e),t},t.writeFloat32LE=function(e,t,n){return void 0===t&&(t=new Uint8Array(4)),void 0===n&&(n=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat32(n,e,!0),t},t.writeFloat64BE=function(e,t,n){return void 0===t&&(t=new Uint8Array(8)),void 0===n&&(n=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat64(n,e),t},t.writeFloat64LE=function(e,t,n){return void 0===t&&(t=new Uint8Array(8)),void 0===n&&(n=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat64(n,e,!0),t}},4491:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6785),i=n(6537);function o(e,t,n){for(var i=1634760805,o=857760878,a=2036477234,s=1797285236,l=n[3]<<24|n[2]<<16|n[1]<<8|n[0],c=n[7]<<24|n[6]<<16|n[5]<<8|n[4],u=n[11]<<24|n[10]<<16|n[9]<<8|n[8],d=n[15]<<24|n[14]<<16|n[13]<<8|n[12],h=n[19]<<24|n[18]<<16|n[17]<<8|n[16],f=n[23]<<24|n[22]<<16|n[21]<<8|n[20],p=n[27]<<24|n[26]<<16|n[25]<<8|n[24],m=n[31]<<24|n[30]<<16|n[29]<<8|n[28],g=t[3]<<24|t[2]<<16|t[1]<<8|t[0],y=t[7]<<24|t[6]<<16|t[5]<<8|t[4],v=t[11]<<24|t[10]<<16|t[9]<<8|t[8],w=t[15]<<24|t[14]<<16|t[13]<<8|t[12],b=i,x=o,E=a,C=s,k=l,_=c,S=u,P=d,A=h,T=f,I=p,O=m,N=g,R=y,M=v,$=w,j=0;j<20;j+=2)k=(k^=A=A+(N=(N^=b=b+k|0)>>>16|N<<16)|0)>>>20|k<<12,_=(_^=T=T+(R=(R^=x=x+_|0)>>>16|R<<16)|0)>>>20|_<<12,S=(S^=I=I+(M=(M^=E=E+S|0)>>>16|M<<16)|0)>>>20|S<<12,P=(P^=O=O+($=($^=C=C+P|0)>>>16|$<<16)|0)>>>20|P<<12,S=(S^=I=I+(M=(M^=E=E+S|0)>>>24|M<<8)|0)>>>25|S<<7,P=(P^=O=O+($=($^=C=C+P|0)>>>24|$<<8)|0)>>>25|P<<7,_=(_^=T=T+(R=(R^=x=x+_|0)>>>24|R<<8)|0)>>>25|_<<7,k=(k^=A=A+(N=(N^=b=b+k|0)>>>24|N<<8)|0)>>>25|k<<7,_=(_^=I=I+($=($^=b=b+_|0)>>>16|$<<16)|0)>>>20|_<<12,S=(S^=O=O+(N=(N^=x=x+S|0)>>>16|N<<16)|0)>>>20|S<<12,P=(P^=A=A+(R=(R^=E=E+P|0)>>>16|R<<16)|0)>>>20|P<<12,k=(k^=T=T+(M=(M^=C=C+k|0)>>>16|M<<16)|0)>>>20|k<<12,P=(P^=A=A+(R=(R^=E=E+P|0)>>>24|R<<8)|0)>>>25|P<<7,k=(k^=T=T+(M=(M^=C=C+k|0)>>>24|M<<8)|0)>>>25|k<<7,S=(S^=O=O+(N=(N^=x=x+S|0)>>>24|N<<8)|0)>>>25|S<<7,_=(_^=I=I+($=($^=b=b+_|0)>>>24|$<<8)|0)>>>25|_<<7;r.writeUint32LE(b+i|0,e,0),r.writeUint32LE(x+o|0,e,4),r.writeUint32LE(E+a|0,e,8),r.writeUint32LE(C+s|0,e,12),r.writeUint32LE(k+l|0,e,16),r.writeUint32LE(_+c|0,e,20),r.writeUint32LE(S+u|0,e,24),r.writeUint32LE(P+d|0,e,28),r.writeUint32LE(A+h|0,e,32),r.writeUint32LE(T+f|0,e,36),r.writeUint32LE(I+p|0,e,40),r.writeUint32LE(O+m|0,e,44),r.writeUint32LE(N+g|0,e,48),r.writeUint32LE(R+y|0,e,52),r.writeUint32LE(M+v|0,e,56),r.writeUint32LE($+w|0,e,60)}function a(e,t,n,r,a){if(void 0===a&&(a=0),32!==e.length)throw new Error("ChaCha: key size must be 32 bytes");if(r.length<n.length)throw new Error("ChaCha: destination is shorter than source");var l,c;if(0===a){if(8!==t.length&&12!==t.length)throw new Error("ChaCha nonce must be 8 or 12 bytes");c=(l=new Uint8Array(16)).length-t.length,l.set(t,c)}else{if(16!==t.length)throw new Error("ChaCha nonce with counter must be 16 bytes");l=t,c=a}for(var u=new Uint8Array(64),d=0;d<n.length;d+=64){o(u,l,e);for(var h=d;h<d+64&&h<n.length;h++)r[h]=n[h]^u[h-d];s(l,0,c)}return i.wipe(u),0===a&&i.wipe(l),r}function s(e,t,n){for(var r=1;n--;)r=r+(255&e[t])|0,e[t]=255&r,r>>>=8,t++;if(r>0)throw new Error("ChaCha: counter overflow")}t.streamXOR=a,t.stream=function(e,t,n,r){return void 0===r&&(r=0),i.wipe(n),a(e,t,n,n,r)}},8953:(e,t,n)=>{"use strict";var r=n(4491),i=n(6657),o=n(6537),a=n(6785),s=n(825);t.J4=32,t.PX=12,t.iW=16;var l=new Uint8Array(16),c=function(){function e(e){if(this.nonceLength=t.PX,this.tagLength=t.iW,e.length!==t.J4)throw new Error("ChaCha20Poly1305 needs 32-byte key");this._key=new Uint8Array(e)}return e.prototype.seal=function(e,t,n,i){if(e.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");var a=new Uint8Array(16);a.set(e,a.length-e.length);var s=new Uint8Array(32);r.stream(this._key,a,s,4);var l,c=t.length+this.tagLength;if(i){if(i.length!==c)throw new Error("ChaCha20Poly1305: incorrect destination length");l=i}else l=new Uint8Array(c);return r.streamXOR(this._key,a,t,l,4),this._authenticate(l.subarray(l.length-this.tagLength,l.length),s,l.subarray(0,l.length-this.tagLength),n),o.wipe(a),l},e.prototype.open=function(e,t,n,i){if(e.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");if(t.length<this.tagLength)return null;var a=new Uint8Array(16);a.set(e,a.length-e.length);var l=new Uint8Array(32);r.stream(this._key,a,l,4);var c=new Uint8Array(this.tagLength);if(this._authenticate(c,l,t.subarray(0,t.length-this.tagLength),n),!s.equal(c,t.subarray(t.length-this.tagLength,t.length)))return null;var u,d=t.length-this.tagLength;if(i){if(i.length!==d)throw new Error("ChaCha20Poly1305: incorrect destination length");u=i}else u=new Uint8Array(d);return r.streamXOR(this._key,a,t.subarray(0,t.length-this.tagLength),u,4),o.wipe(a),u},e.prototype.clean=function(){return o.wipe(this._key),this},e.prototype._authenticate=function(e,t,n,r){var s=new i.Poly1305(t);r&&(s.update(r),r.length%16>0&&s.update(l.subarray(r.length%16))),s.update(n),n.length%16>0&&s.update(l.subarray(n.length%16));var c=new Uint8Array(8);r&&a.writeUint64LE(r.length,c),s.update(c),a.writeUint64LE(n.length,c),s.update(c);for(var u=s.digest(),d=0;d<u.length;d++)e[d]=u[d];s.clean(),o.wipe(u),o.wipe(c)},e}();t.g6=c},825:(e,t)=>{"use strict";function n(e,t){if(e.length!==t.length)return 0;for(var n=0,r=0;r<e.length;r++)n|=e[r]^t[r];return 1&n-1>>>8}Object.defineProperty(t,"__esModule",{value:!0}),t.select=function(e,t,n){return~(e-1)&t|e-1&n},t.lessOrEqual=function(e,t){return(0|e)-(0|t)-1>>>31&1},t.compare=n,t.equal=function(e,t){return 0!==e.length&&0!==t.length&&0!==n(e,t)}},8967:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSerializableHash=function(e){return"undefined"!==typeof e.saveState&&"undefined"!==typeof e.restoreState&&"undefined"!==typeof e.cleanSavedState}},269:(e,t,n)=>{"use strict";var r=n(2553),i=n(6537),o=function(){function e(e,t,n,i){void 0===n&&(n=new Uint8Array(0)),this._counter=new Uint8Array(1),this._hash=e,this._info=i;var o=r.hmac(this._hash,n,t);this._hmac=new r.HMAC(e,o),this._buffer=new Uint8Array(this._hmac.digestLength),this._bufpos=this._buffer.length}return e.prototype._fillBuffer=function(){this._counter[0]++;var e=this._counter[0];if(0===e)throw new Error("hkdf: cannot expand more");this._hmac.reset(),e>1&&this._hmac.update(this._buffer),this._info&&this._hmac.update(this._info),this._hmac.update(this._counter),this._hmac.finish(this._buffer),this._bufpos=0},e.prototype.expand=function(e){for(var t=new Uint8Array(e),n=0;n<t.length;n++)this._bufpos===this._buffer.length&&this._fillBuffer(),t[n]=this._buffer[this._bufpos++];return t},e.prototype.clean=function(){this._hmac.clean(),i.wipe(this._buffer),i.wipe(this._counter),this._bufpos=0},e}();t.i=o},2553:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8967),i=n(825),o=n(6537),a=function(){function e(e,t){this._finished=!1,this._inner=new e,this._outer=new e,this.blockSize=this._outer.blockSize,this.digestLength=this._outer.digestLength;var n=new Uint8Array(this.blockSize);t.length>this.blockSize?this._inner.update(t).finish(n).clean():n.set(t);for(var i=0;i<n.length;i++)n[i]^=54;this._inner.update(n);for(i=0;i<n.length;i++)n[i]^=106;this._outer.update(n),r.isSerializableHash(this._inner)&&r.isSerializableHash(this._outer)&&(this._innerKeyedState=this._inner.saveState(),this._outerKeyedState=this._outer.saveState()),o.wipe(n)}return e.prototype.reset=function(){if(!r.isSerializableHash(this._inner)||!r.isSerializableHash(this._outer))throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");return this._inner.restoreState(this._innerKeyedState),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.clean=function(){r.isSerializableHash(this._inner)&&this._inner.cleanSavedState(this._innerKeyedState),r.isSerializableHash(this._outer)&&this._outer.cleanSavedState(this._outerKeyedState),this._inner.clean(),this._outer.clean()},e.prototype.update=function(e){return this._inner.update(e),this},e.prototype.finish=function(e){return this._finished?(this._outer.finish(e),this):(this._inner.finish(e),this._outer.update(e.subarray(0,this.digestLength)).finish(e),this._finished=!0,this)},e.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},e.prototype.saveState=function(){if(!r.isSerializableHash(this._inner))throw new Error("hmac: can't saveState() because hash doesn't implement it");return this._inner.saveState()},e.prototype.restoreState=function(e){if(!r.isSerializableHash(this._inner)||!r.isSerializableHash(this._outer))throw new Error("hmac: can't restoreState() because hash doesn't implement it");return this._inner.restoreState(e),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.cleanSavedState=function(e){if(!r.isSerializableHash(this._inner))throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");this._inner.cleanSavedState(e)},e}();t.HMAC=a,t.hmac=function(e,t,n){var r=new a(e,t);r.update(n);var i=r.digest();return r.clean(),i},t.equal=i.equal},7053:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mul=Math.imul||function(e,t){var n=65535&e,r=65535&t;return n*r+((e>>>16&65535)*r+n*(t>>>16&65535)<<16>>>0)|0},t.add=function(e,t){return e+t|0},t.sub=function(e,t){return e-t|0},t.rotl=function(e,t){return e<<t|e>>>32-t},t.rotr=function(e,t){return e<<32-t|e>>>t},t.isInteger=Number.isInteger||function(e){return"number"===typeof e&&isFinite(e)&&Math.floor(e)===e},t.MAX_SAFE_INTEGER=9007199254740991,t.isSafeInteger=function(e){return t.isInteger(e)&&e>=-t.MAX_SAFE_INTEGER&&e<=t.MAX_SAFE_INTEGER}},6657:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(825),i=n(6537);t.DIGEST_LENGTH=16;var o=function(){function e(e){this.digestLength=t.DIGEST_LENGTH,this._buffer=new Uint8Array(16),this._r=new Uint16Array(10),this._h=new Uint16Array(10),this._pad=new Uint16Array(8),this._leftover=0,this._fin=0,this._finished=!1;var n=e[0]|e[1]<<8;this._r[0]=8191&n;var r=e[2]|e[3]<<8;this._r[1]=8191&(n>>>13|r<<3);var i=e[4]|e[5]<<8;this._r[2]=7939&(r>>>10|i<<6);var o=e[6]|e[7]<<8;this._r[3]=8191&(i>>>7|o<<9);var a=e[8]|e[9]<<8;this._r[4]=255&(o>>>4|a<<12),this._r[5]=a>>>1&8190;var s=e[10]|e[11]<<8;this._r[6]=8191&(a>>>14|s<<2);var l=e[12]|e[13]<<8;this._r[7]=8065&(s>>>11|l<<5);var c=e[14]|e[15]<<8;this._r[8]=8191&(l>>>8|c<<8),this._r[9]=c>>>5&127,this._pad[0]=e[16]|e[17]<<8,this._pad[1]=e[18]|e[19]<<8,this._pad[2]=e[20]|e[21]<<8,this._pad[3]=e[22]|e[23]<<8,this._pad[4]=e[24]|e[25]<<8,this._pad[5]=e[26]|e[27]<<8,this._pad[6]=e[28]|e[29]<<8,this._pad[7]=e[30]|e[31]<<8}return e.prototype._blocks=function(e,t,n){for(var r=this._fin?0:2048,i=this._h[0],o=this._h[1],a=this._h[2],s=this._h[3],l=this._h[4],c=this._h[5],u=this._h[6],d=this._h[7],h=this._h[8],f=this._h[9],p=this._r[0],m=this._r[1],g=this._r[2],y=this._r[3],v=this._r[4],w=this._r[5],b=this._r[6],x=this._r[7],E=this._r[8],C=this._r[9];n>=16;){var k=e[t+0]|e[t+1]<<8;i+=8191&k;var _=e[t+2]|e[t+3]<<8;o+=8191&(k>>>13|_<<3);var S=e[t+4]|e[t+5]<<8;a+=8191&(_>>>10|S<<6);var P=e[t+6]|e[t+7]<<8;s+=8191&(S>>>7|P<<9);var A=e[t+8]|e[t+9]<<8;l+=8191&(P>>>4|A<<12),c+=A>>>1&8191;var T=e[t+10]|e[t+11]<<8;u+=8191&(A>>>14|T<<2);var I=e[t+12]|e[t+13]<<8;d+=8191&(T>>>11|I<<5);var O=e[t+14]|e[t+15]<<8,N=0,R=N;R+=i*p,R+=o*(5*C),R+=a*(5*E),R+=s*(5*x),N=(R+=l*(5*b))>>>13,R&=8191,R+=c*(5*w),R+=u*(5*v),R+=d*(5*y),R+=(h+=8191&(I>>>8|O<<8))*(5*g);var M=N+=(R+=(f+=O>>>5|r)*(5*m))>>>13;M+=i*m,M+=o*p,M+=a*(5*C),M+=s*(5*E),N=(M+=l*(5*x))>>>13,M&=8191,M+=c*(5*b),M+=u*(5*w),M+=d*(5*v),M+=h*(5*y),N+=(M+=f*(5*g))>>>13,M&=8191;var $=N;$+=i*g,$+=o*m,$+=a*p,$+=s*(5*C),N=($+=l*(5*E))>>>13,$&=8191,$+=c*(5*x),$+=u*(5*b),$+=d*(5*w),$+=h*(5*v);var j=N+=($+=f*(5*y))>>>13;j+=i*y,j+=o*g,j+=a*m,j+=s*p,N=(j+=l*(5*C))>>>13,j&=8191,j+=c*(5*E),j+=u*(5*x),j+=d*(5*b),j+=h*(5*w);var U=N+=(j+=f*(5*v))>>>13;U+=i*v,U+=o*y,U+=a*g,U+=s*m,N=(U+=l*p)>>>13,U&=8191,U+=c*(5*C),U+=u*(5*E),U+=d*(5*x),U+=h*(5*b);var L=N+=(U+=f*(5*w))>>>13;L+=i*w,L+=o*v,L+=a*y,L+=s*g,N=(L+=l*m)>>>13,L&=8191,L+=c*p,L+=u*(5*C),L+=d*(5*E),L+=h*(5*x);var D=N+=(L+=f*(5*b))>>>13;D+=i*b,D+=o*w,D+=a*v,D+=s*y,N=(D+=l*g)>>>13,D&=8191,D+=c*m,D+=u*p,D+=d*(5*C),D+=h*(5*E);var B=N+=(D+=f*(5*x))>>>13;B+=i*x,B+=o*b,B+=a*w,B+=s*v,N=(B+=l*y)>>>13,B&=8191,B+=c*g,B+=u*m,B+=d*p,B+=h*(5*C);var F=N+=(B+=f*(5*E))>>>13;F+=i*E,F+=o*x,F+=a*b,F+=s*w,N=(F+=l*v)>>>13,F&=8191,F+=c*y,F+=u*g,F+=d*m,F+=h*p;var W=N+=(F+=f*(5*C))>>>13;W+=i*C,W+=o*E,W+=a*x,W+=s*b,N=(W+=l*w)>>>13,W&=8191,W+=c*v,W+=u*y,W+=d*g,W+=h*m,i=R=8191&(N=(N=((N+=(W+=f*p)>>>13)<<2)+N|0)+(R&=8191)|0),o=M+=N>>>=13,a=$&=8191,s=j&=8191,l=U&=8191,c=L&=8191,u=D&=8191,d=B&=8191,h=F&=8191,f=W&=8191,t+=16,n-=16}this._h[0]=i,this._h[1]=o,this._h[2]=a,this._h[3]=s,this._h[4]=l,this._h[5]=c,this._h[6]=u,this._h[7]=d,this._h[8]=h,this._h[9]=f},e.prototype.finish=function(e,t){void 0===t&&(t=0);var n,r,i,o,a=new Uint16Array(10);if(this._leftover){for(o=this._leftover,this._buffer[o++]=1;o<16;o++)this._buffer[o]=0;this._fin=1,this._blocks(this._buffer,0,16)}for(n=this._h[1]>>>13,this._h[1]&=8191,o=2;o<10;o++)this._h[o]+=n,n=this._h[o]>>>13,this._h[o]&=8191;for(this._h[0]+=5*n,n=this._h[0]>>>13,this._h[0]&=8191,this._h[1]+=n,n=this._h[1]>>>13,this._h[1]&=8191,this._h[2]+=n,a[0]=this._h[0]+5,n=a[0]>>>13,a[0]&=8191,o=1;o<10;o++)a[o]=this._h[o]+n,n=a[o]>>>13,a[o]&=8191;for(a[9]-=8192,r=(1^n)-1,o=0;o<10;o++)a[o]&=r;for(r=~r,o=0;o<10;o++)this._h[o]=this._h[o]&r|a[o];for(this._h[0]=65535&(this._h[0]|this._h[1]<<13),this._h[1]=65535&(this._h[1]>>>3|this._h[2]<<10),this._h[2]=65535&(this._h[2]>>>6|this._h[3]<<7),this._h[3]=65535&(this._h[3]>>>9|this._h[4]<<4),this._h[4]=65535&(this._h[4]>>>12|this._h[5]<<1|this._h[6]<<14),this._h[5]=65535&(this._h[6]>>>2|this._h[7]<<11),this._h[6]=65535&(this._h[7]>>>5|this._h[8]<<8),this._h[7]=65535&(this._h[8]>>>8|this._h[9]<<5),i=this._h[0]+this._pad[0],this._h[0]=65535&i,o=1;o<8;o++)i=(this._h[o]+this._pad[o]|0)+(i>>>16)|0,this._h[o]=65535&i;return e[t+0]=this._h[0]>>>0,e[t+1]=this._h[0]>>>8,e[t+2]=this._h[1]>>>0,e[t+3]=this._h[1]>>>8,e[t+4]=this._h[2]>>>0,e[t+5]=this._h[2]>>>8,e[t+6]=this._h[3]>>>0,e[t+7]=this._h[3]>>>8,e[t+8]=this._h[4]>>>0,e[t+9]=this._h[4]>>>8,e[t+10]=this._h[5]>>>0,e[t+11]=this._h[5]>>>8,e[t+12]=this._h[6]>>>0,e[t+13]=this._h[6]>>>8,e[t+14]=this._h[7]>>>0,e[t+15]=this._h[7]>>>8,this._finished=!0,this},e.prototype.update=function(e){var t,n=0,r=e.length;if(this._leftover){(t=16-this._leftover)>r&&(t=r);for(var i=0;i<t;i++)this._buffer[this._leftover+i]=e[n+i];if(r-=t,n+=t,this._leftover+=t,this._leftover<16)return this;this._blocks(this._buffer,0,16),this._leftover=0}if(r>=16&&(t=r-r%16,this._blocks(e,n,t),n+=t,r-=t),r){for(i=0;i<r;i++)this._buffer[this._leftover+i]=e[n+i];this._leftover+=r}return this},e.prototype.digest=function(){if(this._finished)throw new Error("Poly1305 was finished");var e=new Uint8Array(16);return this.finish(e),e},e.prototype.clean=function(){return i.wipe(this._buffer),i.wipe(this._r),i.wipe(this._h),i.wipe(this._pad),this._leftover=0,this._fin=0,this._finished=!0,this},e}();t.Poly1305=o,t.oneTimeAuth=function(e,t){var n=new o(e);n.update(t);var r=n.digest();return n.clean(),r},t.equal=function(e,n){return e.length===t.DIGEST_LENGTH&&n.length===t.DIGEST_LENGTH&&r.equal(e,n)}},5473:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.randomStringForEntropy=t.randomString=t.randomUint32=t.randomBytes=t.defaultRandomSource=void 0;const r=n(15),i=n(6785),o=n(6537);function a(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.defaultRandomSource).randomBytes(e)}t.defaultRandomSource=new r.SystemRandomSource,t.randomBytes=a,t.randomUint32=function(){const e=a(4,arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.defaultRandomSource),n=(0,i.readUint32LE)(e);return(0,o.wipe)(e),n};const s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function l(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.defaultRandomSource;if(n.length<2)throw new Error("randomString charset is too short");if(n.length>256)throw new Error("randomString charset is too long");let i="";const l=n.length,c=256-256%l;for(;e>0;){const t=a(Math.ceil(256*e/c),r);for(let r=0;r<t.length&&e>0;r++){const o=t[r];o<c&&(i+=n.charAt(o%l),e--)}(0,o.wipe)(t)}return i}t.randomString=l,t.randomStringForEntropy=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.defaultRandomSource;return l(Math.ceil(e/(Math.log(n.length)/Math.LN2)),n,r)}},4968:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BrowserRandomSource=void 0;t.BrowserRandomSource=class{constructor(){this.isAvailable=!1,this.isInstantiated=!1;const e="undefined"!==typeof self?self.crypto||self.msCrypto:null;e&&void 0!==e.getRandomValues&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}randomBytes(e){if(!this.isAvailable||!this._crypto)throw new Error("Browser random byte generator is not available.");const t=new Uint8Array(e);for(let n=0;n<t.length;n+=65536)this._crypto.getRandomValues(t.subarray(n,n+Math.min(t.length-n,65536)));return t}}},5786:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NodeRandomSource=void 0;const r=n(6537);t.NodeRandomSource=class{constructor(){this.isAvailable=!1,this.isInstantiated=!1;{const e=n(9432);e&&e.randomBytes&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}}randomBytes(e){if(!this.isAvailable||!this._crypto)throw new Error("Node.js random byte generator is not available.");let t=this._crypto.randomBytes(e);if(t.length!==e)throw new Error("NodeRandomSource: got fewer bytes than requested");const n=new Uint8Array(e);for(let r=0;r<n.length;r++)n[r]=t[r];return(0,r.wipe)(t),n}}},15:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SystemRandomSource=void 0;const r=n(4968),i=n(5786);t.SystemRandomSource=class{constructor(){return this.isAvailable=!1,this.name="",this._source=new r.BrowserRandomSource,this._source.isAvailable?(this.isAvailable=!0,void(this.name="Browser")):(this._source=new i.NodeRandomSource,this._source.isAvailable?(this.isAvailable=!0,void(this.name="Node")):void 0)}randomBytes(e){if(!this.isAvailable)throw new Error("System random byte generator is not available.");return this._source.randomBytes(e)}}},153:(e,t,n)=>{"use strict";var r=n(6785),i=n(6537);t.On=32,t.cS=64;var o=function(){function e(){this.digestLength=t.On,this.blockSize=t.cS,this._state=new Int32Array(8),this._temp=new Int32Array(64),this._buffer=new Uint8Array(128),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return e.prototype._initState=function(){this._state[0]=1779033703,this._state[1]=3144134277,this._state[2]=1013904242,this._state[3]=2773480762,this._state[4]=1359893119,this._state[5]=2600822924,this._state[6]=528734635,this._state[7]=1541459225},e.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},e.prototype.clean=function(){i.wipe(this._buffer),i.wipe(this._temp),this.reset()},e.prototype.update=function(e,t){if(void 0===t&&(t=e.length),this._finished)throw new Error("SHA256: can't update because hash was finished.");var n=0;if(this._bytesHashed+=t,this._bufferLength>0){for(;this._bufferLength<this.blockSize&&t>0;)this._buffer[this._bufferLength++]=e[n++],t--;this._bufferLength===this.blockSize&&(s(this._temp,this._state,this._buffer,0,this.blockSize),this._bufferLength=0)}for(t>=this.blockSize&&(n=s(this._temp,this._state,e,n,t),t%=this.blockSize);t>0;)this._buffer[this._bufferLength++]=e[n++],t--;return this},e.prototype.finish=function(e){if(!this._finished){var t=this._bytesHashed,n=this._bufferLength,i=t/536870912|0,o=t<<3,a=t%64<56?64:128;this._buffer[n]=128;for(var l=n+1;l<a-8;l++)this._buffer[l]=0;r.writeUint32BE(i,this._buffer,a-8),r.writeUint32BE(o,this._buffer,a-4),s(this._temp,this._state,this._buffer,0,a),this._finished=!0}for(l=0;l<this.digestLength/4;l++)r.writeUint32BE(this._state[l],e,4*l);return this},e.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},e.prototype.saveState=function(){if(this._finished)throw new Error("SHA256: cannot save finished state");return{state:new Int32Array(this._state),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},e.prototype.restoreState=function(e){return this._state.set(e.state),this._bufferLength=e.bufferLength,e.buffer&&this._buffer.set(e.buffer),this._bytesHashed=e.bytesHashed,this._finished=!1,this},e.prototype.cleanSavedState=function(e){i.wipe(e.state),e.buffer&&i.wipe(e.buffer),e.bufferLength=0,e.bytesHashed=0},e}();t.aD=o;var a=new Int32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function s(e,t,n,i,o){for(;o>=64;){for(var s=t[0],l=t[1],c=t[2],u=t[3],d=t[4],h=t[5],f=t[6],p=t[7],m=0;m<16;m++){var g=i+4*m;e[m]=r.readUint32BE(n,g)}for(m=16;m<64;m++){var y=e[m-2],v=(y>>>17|y<<15)^(y>>>19|y<<13)^y>>>10,w=((y=e[m-15])>>>7|y<<25)^(y>>>18|y<<14)^y>>>3;e[m]=(v+e[m-7]|0)+(w+e[m-16]|0)}for(m=0;m<64;m++){v=(((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+(d&h^~d&f)|0)+(p+(a[m]+e[m]|0)|0)|0,w=((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+(s&l^s&c^l&c)|0;p=f,f=h,h=d,d=u+v|0,u=c,c=l,l=s,s=v+w|0}t[0]+=s,t[1]+=l,t[2]+=c,t[3]+=u,t[4]+=d,t[5]+=h,t[6]+=f,t[7]+=p,i+=64,o-=64}return i}t.tW=function(e){var t=new o;t.update(e);var n=t.digest();return t.clean(),n}},6537:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.wipe=function(e){for(var t=0;t<e.length;t++)e[t]=0;return e}},7887:(e,t,n)=>{"use strict";t.Tc=t.TZ=t.wE=t.Xx=void 0;const r=n(5473),i=n(6537);function o(e){const t=new Float64Array(16);if(e)for(let n=0;n<e.length;n++)t[n]=e[n];return t}t.Xx=32,t.wE=32;const a=new Uint8Array(32);a[0]=9;const s=o([56129,1]);function l(e){let t=1;for(let n=0;n<16;n++){let r=e[n]+t+65535;t=Math.floor(r/65536),e[n]=r-65536*t}e[0]+=t-1+37*(t-1)}function c(e,t,n){const r=~(n-1);for(let i=0;i<16;i++){const n=r&(e[i]^t[i]);e[i]^=n,t[i]^=n}}function u(e,t,n){for(let r=0;r<16;r++)e[r]=t[r]+n[r]}function d(e,t,n){for(let r=0;r<16;r++)e[r]=t[r]-n[r]}function h(e,t,n){let r,i,o=0,a=0,s=0,l=0,c=0,u=0,d=0,h=0,f=0,p=0,m=0,g=0,y=0,v=0,w=0,b=0,x=0,E=0,C=0,k=0,_=0,S=0,P=0,A=0,T=0,I=0,O=0,N=0,R=0,M=0,$=0,j=n[0],U=n[1],L=n[2],D=n[3],B=n[4],F=n[5],W=n[6],z=n[7],q=n[8],H=n[9],Z=n[10],V=n[11],K=n[12],G=n[13],Y=n[14],J=n[15];r=t[0],o+=r*j,a+=r*U,s+=r*L,l+=r*D,c+=r*B,u+=r*F,d+=r*W,h+=r*z,f+=r*q,p+=r*H,m+=r*Z,g+=r*V,y+=r*K,v+=r*G,w+=r*Y,b+=r*J,r=t[1],a+=r*j,s+=r*U,l+=r*L,c+=r*D,u+=r*B,d+=r*F,h+=r*W,f+=r*z,p+=r*q,m+=r*H,g+=r*Z,y+=r*V,v+=r*K,w+=r*G,b+=r*Y,x+=r*J,r=t[2],s+=r*j,l+=r*U,c+=r*L,u+=r*D,d+=r*B,h+=r*F,f+=r*W,p+=r*z,m+=r*q,g+=r*H,y+=r*Z,v+=r*V,w+=r*K,b+=r*G,x+=r*Y,E+=r*J,r=t[3],l+=r*j,c+=r*U,u+=r*L,d+=r*D,h+=r*B,f+=r*F,p+=r*W,m+=r*z,g+=r*q,y+=r*H,v+=r*Z,w+=r*V,b+=r*K,x+=r*G,E+=r*Y,C+=r*J,r=t[4],c+=r*j,u+=r*U,d+=r*L,h+=r*D,f+=r*B,p+=r*F,m+=r*W,g+=r*z,y+=r*q,v+=r*H,w+=r*Z,b+=r*V,x+=r*K,E+=r*G,C+=r*Y,k+=r*J,r=t[5],u+=r*j,d+=r*U,h+=r*L,f+=r*D,p+=r*B,m+=r*F,g+=r*W,y+=r*z,v+=r*q,w+=r*H,b+=r*Z,x+=r*V,E+=r*K,C+=r*G,k+=r*Y,_+=r*J,r=t[6],d+=r*j,h+=r*U,f+=r*L,p+=r*D,m+=r*B,g+=r*F,y+=r*W,v+=r*z,w+=r*q,b+=r*H,x+=r*Z,E+=r*V,C+=r*K,k+=r*G,_+=r*Y,S+=r*J,r=t[7],h+=r*j,f+=r*U,p+=r*L,m+=r*D,g+=r*B,y+=r*F,v+=r*W,w+=r*z,b+=r*q,x+=r*H,E+=r*Z,C+=r*V,k+=r*K,_+=r*G,S+=r*Y,P+=r*J,r=t[8],f+=r*j,p+=r*U,m+=r*L,g+=r*D,y+=r*B,v+=r*F,w+=r*W,b+=r*z,x+=r*q,E+=r*H,C+=r*Z,k+=r*V,_+=r*K,S+=r*G,P+=r*Y,A+=r*J,r=t[9],p+=r*j,m+=r*U,g+=r*L,y+=r*D,v+=r*B,w+=r*F,b+=r*W,x+=r*z,E+=r*q,C+=r*H,k+=r*Z,_+=r*V,S+=r*K,P+=r*G,A+=r*Y,T+=r*J,r=t[10],m+=r*j,g+=r*U,y+=r*L,v+=r*D,w+=r*B,b+=r*F,x+=r*W,E+=r*z,C+=r*q,k+=r*H,_+=r*Z,S+=r*V,P+=r*K,A+=r*G,T+=r*Y,I+=r*J,r=t[11],g+=r*j,y+=r*U,v+=r*L,w+=r*D,b+=r*B,x+=r*F,E+=r*W,C+=r*z,k+=r*q,_+=r*H,S+=r*Z,P+=r*V,A+=r*K,T+=r*G,I+=r*Y,O+=r*J,r=t[12],y+=r*j,v+=r*U,w+=r*L,b+=r*D,x+=r*B,E+=r*F,C+=r*W,k+=r*z,_+=r*q,S+=r*H,P+=r*Z,A+=r*V,T+=r*K,I+=r*G,O+=r*Y,N+=r*J,r=t[13],v+=r*j,w+=r*U,b+=r*L,x+=r*D,E+=r*B,C+=r*F,k+=r*W,_+=r*z,S+=r*q,P+=r*H,A+=r*Z,T+=r*V,I+=r*K,O+=r*G,N+=r*Y,R+=r*J,r=t[14],w+=r*j,b+=r*U,x+=r*L,E+=r*D,C+=r*B,k+=r*F,_+=r*W,S+=r*z,P+=r*q,A+=r*H,T+=r*Z,I+=r*V,O+=r*K,N+=r*G,R+=r*Y,M+=r*J,r=t[15],b+=r*j,x+=r*U,E+=r*L,C+=r*D,k+=r*B,_+=r*F,S+=r*W,P+=r*z,A+=r*q,T+=r*H,I+=r*Z,O+=r*V,N+=r*K,R+=r*G,M+=r*Y,$+=r*J,o+=38*x,a+=38*E,s+=38*C,l+=38*k,c+=38*_,u+=38*S,d+=38*P,h+=38*A,f+=38*T,p+=38*I,m+=38*O,g+=38*N,y+=38*R,v+=38*M,w+=38*$,i=1,r=o+i+65535,i=Math.floor(r/65536),o=r-65536*i,r=a+i+65535,i=Math.floor(r/65536),a=r-65536*i,r=s+i+65535,i=Math.floor(r/65536),s=r-65536*i,r=l+i+65535,i=Math.floor(r/65536),l=r-65536*i,r=c+i+65535,i=Math.floor(r/65536),c=r-65536*i,r=u+i+65535,i=Math.floor(r/65536),u=r-65536*i,r=d+i+65535,i=Math.floor(r/65536),d=r-65536*i,r=h+i+65535,i=Math.floor(r/65536),h=r-65536*i,r=f+i+65535,i=Math.floor(r/65536),f=r-65536*i,r=p+i+65535,i=Math.floor(r/65536),p=r-65536*i,r=m+i+65535,i=Math.floor(r/65536),m=r-65536*i,r=g+i+65535,i=Math.floor(r/65536),g=r-65536*i,r=y+i+65535,i=Math.floor(r/65536),y=r-65536*i,r=v+i+65535,i=Math.floor(r/65536),v=r-65536*i,r=w+i+65535,i=Math.floor(r/65536),w=r-65536*i,r=b+i+65535,i=Math.floor(r/65536),b=r-65536*i,o+=i-1+37*(i-1),i=1,r=o+i+65535,i=Math.floor(r/65536),o=r-65536*i,r=a+i+65535,i=Math.floor(r/65536),a=r-65536*i,r=s+i+65535,i=Math.floor(r/65536),s=r-65536*i,r=l+i+65535,i=Math.floor(r/65536),l=r-65536*i,r=c+i+65535,i=Math.floor(r/65536),c=r-65536*i,r=u+i+65535,i=Math.floor(r/65536),u=r-65536*i,r=d+i+65535,i=Math.floor(r/65536),d=r-65536*i,r=h+i+65535,i=Math.floor(r/65536),h=r-65536*i,r=f+i+65535,i=Math.floor(r/65536),f=r-65536*i,r=p+i+65535,i=Math.floor(r/65536),p=r-65536*i,r=m+i+65535,i=Math.floor(r/65536),m=r-65536*i,r=g+i+65535,i=Math.floor(r/65536),g=r-65536*i,r=y+i+65535,i=Math.floor(r/65536),y=r-65536*i,r=v+i+65535,i=Math.floor(r/65536),v=r-65536*i,r=w+i+65535,i=Math.floor(r/65536),w=r-65536*i,r=b+i+65535,i=Math.floor(r/65536),b=r-65536*i,o+=i-1+37*(i-1),e[0]=o,e[1]=a,e[2]=s,e[3]=l,e[4]=c,e[5]=u,e[6]=d,e[7]=h,e[8]=f,e[9]=p,e[10]=m,e[11]=g,e[12]=y,e[13]=v,e[14]=w,e[15]=b}function f(e,t){h(e,t,t)}function p(e,t){const n=new Uint8Array(32),r=new Float64Array(80),i=o(),a=o(),p=o(),m=o(),g=o(),y=o();for(let o=0;o<31;o++)n[o]=e[o];n[31]=127&e[31]|64,n[0]&=248,function(e,t){for(let n=0;n<16;n++)e[n]=t[2*n]+(t[2*n+1]<<8);e[15]&=32767}(r,t);for(let o=0;o<16;o++)a[o]=r[o];i[0]=m[0]=1;for(let o=254;o>=0;--o){const e=n[o>>>3]>>>(7&o)&1;c(i,a,e),c(p,m,e),u(g,i,p),d(i,i,p),u(p,a,m),d(a,a,m),f(m,g),f(y,i),h(i,p,i),h(p,a,g),u(g,i,p),d(i,i,p),f(a,i),d(p,m,y),h(i,p,s),u(i,i,m),h(p,p,i),h(i,m,y),h(m,a,r),f(a,g),c(i,a,e),c(p,m,e)}for(let o=0;o<16;o++)r[o+16]=i[o],r[o+32]=p[o],r[o+48]=a[o],r[o+64]=m[o];const v=r.subarray(32),w=r.subarray(16);!function(e,t){const n=o();for(let r=0;r<16;r++)n[r]=t[r];for(let r=253;r>=0;r--)f(n,n),2!==r&&4!==r&&h(n,n,t);for(let r=0;r<16;r++)e[r]=n[r]}(v,v),h(w,w,v);const b=new Uint8Array(32);return function(e,t){const n=o(),r=o();for(let i=0;i<16;i++)r[i]=t[i];l(r),l(r),l(r);for(let i=0;i<2;i++){n[0]=r[0]-65517;for(let t=1;t<15;t++)n[t]=r[t]-65535-(n[t-1]>>16&1),n[t-1]&=65535;n[15]=r[15]-32767-(n[14]>>16&1);const e=n[15]>>16&1;n[14]&=65535,c(r,n,1-e)}for(let i=0;i<16;i++)e[2*i]=255&r[i],e[2*i+1]=r[i]>>8}(b,w),b}function m(e){return p(e,a)}function g(e){if(e.length!==t.wE)throw new Error(`x25519: seed must be ${t.wE} bytes`);const n=new Uint8Array(e);return{publicKey:m(n),secretKey:n}}t.TZ=function(e){const t=(0,r.randomBytes)(32,e),n=g(t);return(0,i.wipe)(t),n},t.Tc=function(e,n){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(e.length!==t.Xx)throw new Error("X25519: incorrect secret key length");if(n.length!==t.Xx)throw new Error("X25519: incorrect public key length");const i=p(e,n);if(r){let e=0;for(let t=0;t<i.length;t++)e|=i[t];if(0===e)throw new Error("X25519: invalid shared key")}return i}},8251:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(6121);r.__exportStar(n(8951),t),r.__exportStar(n(5746),t)},8951:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_THOUSAND=t.ONE_HUNDRED=void 0,t.ONE_HUNDRED=100,t.ONE_THOUSAND=1e3},5746:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_YEAR=t.FOUR_WEEKS=t.THREE_WEEKS=t.TWO_WEEKS=t.ONE_WEEK=t.THIRTY_DAYS=t.SEVEN_DAYS=t.FIVE_DAYS=t.THREE_DAYS=t.ONE_DAY=t.TWENTY_FOUR_HOURS=t.TWELVE_HOURS=t.SIX_HOURS=t.THREE_HOURS=t.ONE_HOUR=t.SIXTY_MINUTES=t.THIRTY_MINUTES=t.TEN_MINUTES=t.FIVE_MINUTES=t.ONE_MINUTE=t.SIXTY_SECONDS=t.THIRTY_SECONDS=t.TEN_SECONDS=t.FIVE_SECONDS=t.ONE_SECOND=void 0,t.ONE_SECOND=1,t.FIVE_SECONDS=5,t.TEN_SECONDS=10,t.THIRTY_SECONDS=30,t.SIXTY_SECONDS=60,t.ONE_MINUTE=t.SIXTY_SECONDS,t.FIVE_MINUTES=5*t.ONE_MINUTE,t.TEN_MINUTES=10*t.ONE_MINUTE,t.THIRTY_MINUTES=30*t.ONE_MINUTE,t.SIXTY_MINUTES=60*t.ONE_MINUTE,t.ONE_HOUR=t.SIXTY_MINUTES,t.THREE_HOURS=3*t.ONE_HOUR,t.SIX_HOURS=6*t.ONE_HOUR,t.TWELVE_HOURS=12*t.ONE_HOUR,t.TWENTY_FOUR_HOURS=24*t.ONE_HOUR,t.ONE_DAY=t.TWENTY_FOUR_HOURS,t.THREE_DAYS=3*t.ONE_DAY,t.FIVE_DAYS=5*t.ONE_DAY,t.SEVEN_DAYS=7*t.ONE_DAY,t.THIRTY_DAYS=30*t.ONE_DAY,t.ONE_WEEK=t.SEVEN_DAYS,t.TWO_WEEKS=2*t.ONE_WEEK,t.THREE_WEEKS=3*t.ONE_WEEK,t.FOUR_WEEKS=4*t.ONE_WEEK,t.ONE_YEAR=365*t.ONE_DAY},3901:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(6121);r.__exportStar(n(5871),t),r.__exportStar(n(1822),t),r.__exportStar(n(1067),t),r.__exportStar(n(8251),t)},1067:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(6121).__exportStar(n(656),t)},656:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IWatch=void 0;t.IWatch=class{}},568:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fromMiliseconds=t.toMiliseconds=void 0;const r=n(8251);t.toMiliseconds=function(e){return e*r.ONE_THOUSAND},t.fromMiliseconds=function(e){return Math.floor(e/r.ONE_THOUSAND)}},296:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.delay=void 0,t.delay=function(e){return new Promise((t=>{setTimeout((()=>{t(!0)}),e)}))}},5871:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(6121);r.__exportStar(n(296),t),r.__exportStar(n(568),t)},1822:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Watch=void 0;class n{constructor(){this.timestamps=new Map}start(e){if(this.timestamps.has(e))throw new Error(`Watch already started for label: ${e}`);this.timestamps.set(e,{started:Date.now()})}stop(e){const t=this.get(e);if("undefined"!==typeof t.elapsed)throw new Error(`Watch already stopped for label: ${e}`);const n=Date.now()-t.started;this.timestamps.set(e,{started:t.started,elapsed:n})}get(e){const t=this.timestamps.get(e);if("undefined"===typeof t)throw new Error(`No timestamp found for label: ${e}`);return t}elapsed(e){const t=this.get(e);return t.elapsed||Date.now()-t.started}}t.Watch=n,t.default=n},6121:(e,t,n)=>{"use strict";n.r(t),n.d(t,{__assign:()=>o,__asyncDelegator:()=>b,__asyncGenerator:()=>w,__asyncValues:()=>x,__await:()=>v,__awaiter:()=>u,__classPrivateFieldGet:()=>_,__classPrivateFieldSet:()=>S,__createBinding:()=>h,__decorate:()=>s,__exportStar:()=>f,__extends:()=>i,__generator:()=>d,__importDefault:()=>k,__importStar:()=>C,__makeTemplateObject:()=>E,__metadata:()=>c,__param:()=>l,__read:()=>m,__rest:()=>a,__spread:()=>g,__spreadArrays:()=>y,__values:()=>p});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},r(e,t)};function i(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)};function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function s(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}function l(e,t){return function(n,r){t(n,r,e)}}function c(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)}function u(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{l(r.next(e))}catch(t){o(t)}}function s(e){try{l(r.throw(e))}catch(t){o(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((r=r.apply(e,t||[])).next())}))}function d(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(s){o=[6,s],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function h(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}function f(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||(t[n]=e[n])}function p(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function m(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(s){i={error:s}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function g(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(m(arguments[t]));return e}function y(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r}function v(e){return this instanceof v?(this.v=e,this):new v(e)}function w(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,i=n.apply(e,t||[]),o=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(e){i[e]&&(r[e]=function(t){return new Promise((function(n,r){o.push([e,t,n,r])>1||s(e,t)}))})}function s(e,t){try{(n=i[e](t)).value instanceof v?Promise.resolve(n.value.v).then(l,c):u(o[0][2],n)}catch(r){u(o[0][3],r)}var n}function l(e){s("next",e)}function c(e){s("throw",e)}function u(e,t){e(t),o.shift(),o.length&&s(o[0][0],o[0][1])}}function b(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,i){t[r]=e[r]?function(t){return(n=!n)?{value:v(e[r](t)),done:"return"===r}:i?i(t):t}:i}}function x(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=p(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,i){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,i,(t=e[n](t)).done,t.value)}))}}}function E(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function C(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function k(e){return e&&e.__esModule?e:{default:e}}function _(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function S(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}},7326:(e,t,n)=>{"use strict";n.d(t,{bE:()=>N,ny:()=>Wt,Lp:()=>j,Xw:()=>_e,Wx:()=>we,K3:()=>be,x0:()=>Z,Yc:()=>K,ov:()=>z,iu:()=>G,w:()=>V,hE:()=>Pe,gO:()=>Ce,jU:()=>me,AD:()=>Ee,QJ:()=>ze,TZ:()=>F,tw:()=>W,Zz:()=>T,lF:()=>fe,w4:()=>he,jT:()=>Ie,Gu:()=>at,a:()=>Re,n6:()=>Ne,aZ:()=>et,Hj:()=>st,n3:()=>Te,EN:()=>q,AL:()=>H,Bd:()=>ue,nW:()=>tt,Xq:()=>jt,_d:()=>Se,Ll:()=>le,sc:()=>Dt,CT:()=>gt,lV:()=>ce,HN:()=>ft,mr:()=>yt,V7:()=>Q,b0:()=>ut,OP:()=>lt,tk:()=>vt,X3:()=>Tt,FR:()=>Nt,Al:()=>Pt,Fi:()=>kt,tL:()=>Rt,z2:()=>$t,oK:()=>Mt,aF:()=>ct,Te:()=>At,ku:()=>_t,V9:()=>St,iV:()=>It,Hb:()=>Lt,es:()=>Ct,M8:()=>Ot,Qh:()=>dt,AY:()=>mt,h0:()=>ye,TR:()=>Ae,bR:()=>rt,PU:()=>ve,_Y:()=>A,c8:()=>ke,ko:()=>nt,wY:()=>Fe,bb:()=>Bt,C5:()=>Y,Aw:()=>J});var r=n(8953),i=n(269),o=n(5473),a=n(153),s=n(7887),l=n(7136),c=function(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},u=function(e,t,n){this.name=e,this.version=t,this.os=n,this.type="browser"},d=function(e){this.version=e,this.type="node",this.name="node",this.os=process.platform},h=function(e,t,n,r){this.name=e,this.version=t,this.os=n,this.bot=r,this.type="bot-device"},f=function(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},p=function(){this.type="react-native",this.name="react-native",this.version=null,this.os=null},m=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,g=3,y=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],v=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function w(e){return e?x(e):"undefined"===typeof document&&"undefined"!==typeof navigator&&"ReactNative"===navigator.product?new p:"undefined"!==typeof navigator?x(navigator.userAgent):"undefined"!==typeof process&&process.version?new d(process.version.slice(1)):null}function b(e){return""!==e&&y.reduce((function(t,n){var r=n[0],i=n[1];if(t)return t;var o=i.exec(e);return!!o&&[r,o]}),!1)}function x(e){var t=b(e);if(!t)return null;var n=t[0],r=t[1];if("searchbot"===n)return new f;var i=r[1]&&r[1].split(".").join("_").split("_").slice(0,3);i?i.length<g&&(i=c(c([],i,!0),function(e){for(var t=[],n=0;n<e;n++)t.push("0");return t}(g-i.length),!0)):i=[];var o=i.join("."),a=function(e){for(var t=0,n=v.length;t<n;t++){var r=v[t],i=r[0];if(r[1].exec(e))return i}return null}(e),s=m.exec(e);return s&&s[1]?new h(n,o,a,s[1]):new u(n,o,a)}var E=n(3901),C=n(33),k=n(9332),_=n(5005);const S={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe",batchFetchMessages:"waku_batchFetchMessages"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe",batchFetchMessages:"irn_batchFetchMessages"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe",batchFetchMessages:"iridium_batchFetchMessages"}},P=":";function A(e){const[t,n]=e.split(P);return{namespace:t,reference:n}}function T(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const n=[];return Object.keys(e).forEach((r=>{if(t.length&&!t.includes(r))return;const i=e[r];n.push(...i.accounts)})),n}function I(e,t){return e.includes(":")?[e]:t.chains||[]}const O="base10",N="base16",R="base64pad",M="utf8",$=0,j=1,U=0,L=1,D=12,B=32;function F(){const e=s.TZ();return{privateKey:(0,l.dI)(e.secretKey,N),publicKey:(0,l.dI)(e.publicKey,N)}}function W(){const e=(0,o.randomBytes)(B);return(0,l.dI)(e,N)}function z(e,t){const n=s.Tc((0,l.sH)(e,N),(0,l.sH)(t,N),!0),r=new i.i(a.aD,n).expand(B);return(0,l.dI)(r,N)}function q(e){const t=(0,a.tW)((0,l.sH)(e,N));return(0,l.dI)(t,N)}function H(e){const t=(0,a.tW)((0,l.sH)(e,M));return(0,l.dI)(t,N)}function Z(e){return Number((0,l.dI)(e,O))}function V(e){const t=function(e){return(0,l.sH)(`${e}`,O)}(typeof e.type<"u"?e.type:$);if(Z(t)===j&&typeof e.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");const n=typeof e.senderPublicKey<"u"?(0,l.sH)(e.senderPublicKey,N):void 0,i=typeof e.iv<"u"?(0,l.sH)(e.iv,N):(0,o.randomBytes)(D);return function(e){if(Z(e.type)===j){if(typeof e.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");return(0,l.dI)((0,l.xW)([e.type,e.senderPublicKey,e.iv,e.sealed]),R)}return(0,l.dI)((0,l.xW)([e.type,e.iv,e.sealed]),R)}({type:t,sealed:new r.g6((0,l.sH)(e.symKey,N)).seal(i,(0,l.sH)(e.message,M)),iv:i,senderPublicKey:n})}function K(e){const t=new r.g6((0,l.sH)(e.symKey,N)),{sealed:n,iv:i}=G(e.encoded),o=t.open(i,n);if(null===o)throw new Error("Failed to decrypt");return(0,l.dI)(o,M)}function G(e){const t=(0,l.sH)(e,R),n=t.slice(U,L),r=L;if(Z(n)===j){const e=r+B,i=e+D,o=t.slice(r,e),a=t.slice(e,i);return{type:n,sealed:t.slice(i),iv:a,senderPublicKey:o}}const i=r+D,o=t.slice(r,i);return{type:n,sealed:t.slice(i),iv:o}}function Y(e,t){const n=G(e);return J({type:Z(n.type),senderPublicKey:typeof n.senderPublicKey<"u"?(0,l.dI)(n.senderPublicKey,N):void 0,receiverPublicKey:t?.receiverPublicKey})}function J(e){const t=e?.type||$;if(t===j){if(typeof e?.senderPublicKey>"u")throw new Error("missing sender public key");if(typeof e?.receiverPublicKey>"u")throw new Error("missing receiver public key")}return{type:t,senderPublicKey:e?.senderPublicKey,receiverPublicKey:e?.receiverPublicKey}}function Q(e){return e.type===j&&"string"==typeof e.senderPublicKey&&"string"==typeof e.receiverPublicKey}var X=Object.defineProperty,ee=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable,re=(e,t,n)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ie=(e,t)=>{for(var n in t||(t={}))te.call(t,n)&&re(e,n,t[n]);if(ee)for(var n of ee(t))ne.call(t,n)&&re(e,n,t[n]);return e};const oe="ReactNative",ae={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"},se="js";function le(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}function ce(){return!(0,C.getDocument)()&&!!(0,C.getNavigator)()&&navigator.product===oe}function ue(){return!le()&&!!(0,C.getNavigator)()&&!!(0,C.getDocument)()}function de(){return ce()?ae.reactNative:le()?ae.node:ue()?ae.browser:ae.unknown}function he(){var e;try{return ce()&&typeof n.g<"u"&&typeof(null==n.g?void 0:n.g.Application)<"u"?null==(e=n.g.Application)?void 0:e.applicationId:void 0}catch{return}}function fe(){return(0,k.g)()||{name:"",description:"",url:"",icons:[""]}}function pe(e,t,r){const i=function(){if(de()===ae.reactNative&&typeof n.g<"u"&&typeof(null==n.g?void 0:n.g.Platform)<"u"){const{OS:e,Version:t}=n.g.Platform;return[e,t].join("-")}const e=w();if(null===e)return"unknown";const t=e.os?e.os.replace(" ","").toLowerCase():"unknown";return"browser"===e.type?[t,e.name,e.version].join("-"):[t,e.version].join("-")}(),o=function(){var e;const t=de();return t===ae.browser?[t,(null==(e=(0,C.getLocation)())?void 0:e.host)||"unknown"].join(":"):t}();return[[e,t].join("-"),[se,r].join("-"),i,o].join("/")}function me(e){let{protocol:t,version:n,relayUrl:r,sdkVersion:i,auth:o,projectId:a,useOnCloseEvent:s,bundleId:l}=e;const c=r.split("?"),u={auth:o,ua:pe(t,n,i),projectId:a,useOnCloseEvent:s||void 0,origin:l||void 0},d=function(e,t){let n=_.parse(e);return n=ie(ie({},n),t),_.stringify(n)}(c[1]||"",u);return c[0]+"?"+d}function ge(e,t){return e.filter((e=>t.includes(e))).length===e.length}function ye(e){return Object.fromEntries(e.entries())}function ve(e){return new Map(Object.entries(e))}function we(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E.FIVE_MINUTES,t=arguments.length>1?arguments[1]:void 0;const n=(0,E.toMiliseconds)(e||E.FIVE_MINUTES);let r,i,o;return{resolve:e=>{o&&r&&(clearTimeout(o),r(e))},reject:e=>{o&&i&&(clearTimeout(o),i(e))},done:()=>new Promise(((e,a)=>{o=setTimeout((()=>{a(new Error(t))}),n),r=e,i=a}))}}function be(e,t,n){return new Promise((async(r,i)=>{const o=setTimeout((()=>i(new Error(n))),t);try{r(await e)}catch(a){i(a)}clearTimeout(o)}))}function xe(e,t){if("string"==typeof t&&t.startsWith(`${e}:`))return t;if("topic"===e.toLowerCase()){if("string"!=typeof t)throw new Error('Value must be "string" for expirer target type: topic');return`topic:${t}`}if("id"===e.toLowerCase()){if("number"!=typeof t)throw new Error('Value must be "number" for expirer target type: id');return`id:${t}`}throw new Error(`Unknown expirer target type: ${e}`)}function Ee(e){return xe("topic",e)}function Ce(e){return xe("id",e)}function ke(e){const[t,n]=e.split(":"),r={id:void 0,topic:void 0};if("topic"===t&&"string"==typeof n)r.topic=n;else{if("id"!==t||!Number.isInteger(Number(n)))throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${n}`);r.id=Number(n)}return r}function _e(e,t){return(0,E.fromMiliseconds)((t||Date.now())+(0,E.toMiliseconds)(e))}function Se(e){return Date.now()>=(0,E.toMiliseconds)(e)}function Pe(e,t){return`${e}${t?`:${t}`:""}`}function Ae(){return[...new Set([...arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],...arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]])]}async function Te(e){let{id:t,topic:r,wcDeepLink:i}=e;try{if(!i)return;const e="string"==typeof i?JSON.parse(i):i;let o=e?.href;if("string"!=typeof o)return;o.endsWith("/")&&(o=o.slice(0,-1));const a=`${o}/wc?requestId=${t}&sessionTopic=${r}`,s=de();s===ae.browser?a.startsWith("https://")?window.open(a,"_blank","noreferrer noopener"):window.open(a,"_self","noreferrer noopener"):s===ae.reactNative&&typeof(null==n.g?void 0:n.g.Linking)<"u"&&await n.g.Linking.openURL(a)}catch(o){console.error(o)}}async function Ie(e,t){try{return await e.getItem(t)||(ue()?localStorage.getItem(t):void 0)}catch(n){console.error(n)}}const Oe="irn";function Ne(e){return e?.relay||{protocol:Oe}}function Re(e){const t=S[e];if(typeof t>"u")throw new Error(`Relay Protocol not supported: ${e}`);return t}var Me=Object.defineProperty,$e=Object.getOwnPropertySymbols,je=Object.prototype.hasOwnProperty,Ue=Object.prototype.propertyIsEnumerable,Le=(e,t,n)=>t in e?Me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,De=(e,t)=>{for(var n in t||(t={}))je.call(t,n)&&Le(e,n,t[n]);if($e)for(var n of $e(t))Ue.call(t,n)&&Le(e,n,t[n]);return e};function Be(e){const t={},n="relay"+(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-");return Object.keys(e).forEach((r=>{if(r.startsWith(n)){const i=r.replace(n,""),o=e[r];t[i]=o}})),t}function Fe(e){const t=(e=(e=e.includes("wc://")?e.replace("wc://",""):e).includes("wc:")?e.replace("wc:",""):e).indexOf(":"),n=-1!==e.indexOf("?")?e.indexOf("?"):void 0,r=e.substring(0,t),i=e.substring(t+1,n).split("@"),o=typeof n<"u"?e.substring(n):"",a=_.parse(o);return{protocol:r,topic:We(i[0]),version:parseInt(i[1],10),symKey:a.symKey,relay:Be(a)}}function We(e){return e.startsWith("//")?e.substring(2):e}function ze(e){return`${e.protocol}:${e.topic}@${e.version}?`+_.stringify(De({symKey:e.symKey},function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";const n={};return Object.keys(e).forEach((r=>{const i="relay"+t+r;e[r]&&(n[i]=e[r])})),n}(e.relay)))}var qe=Object.defineProperty,He=Object.defineProperties,Ze=Object.getOwnPropertyDescriptors,Ve=Object.getOwnPropertySymbols,Ke=Object.prototype.hasOwnProperty,Ge=Object.prototype.propertyIsEnumerable,Ye=(e,t,n)=>t in e?qe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Je=(e,t)=>{for(var n in t||(t={}))Ke.call(t,n)&&Ye(e,n,t[n]);if(Ve)for(var n of Ve(t))Ge.call(t,n)&&Ye(e,n,t[n]);return e},Qe=(e,t)=>He(e,Ze(t));function Xe(e){const t=[];return e.forEach((e=>{const[n,r]=e.split(":");t.push(`${n}:${r}`)})),t}function et(e,t){const n=kt(e,t);if(n)throw new Error(n.message);const r={};for(const[i,o]of Object.entries(e))r[i]={methods:o.methods,events:o.events,chains:o.accounts.map((e=>`${e.split(":")[0]}:${e.split(":")[1]}`))};return r}function tt(e){return e.includes(":")}function nt(e){return tt(e)?e.split(":")[0]:e}function rt(e){var t,n,r;const i={};if(!ct(e))return i;for(const[o,a]of Object.entries(e)){const e=tt(o)?[o]:a.chains,s=a.methods||[],l=a.events||[],c=nt(o);i[c]=Qe(Je({},i[c]),{chains:Ae(e,null==(t=i[c])?void 0:t.chains),methods:Ae(s,null==(n=i[c])?void 0:n.methods),events:Ae(l,null==(r=i[c])?void 0:r.events)})}return i}const it={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},ot={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function at(e,t){const{message:n,code:r}=ot[e];return{message:t?`${n} ${t}`:n,code:r}}function st(e,t){const{message:n,code:r}=it[e];return{message:t?`${n} ${t}`:n,code:r}}function lt(e,t){return!!Array.isArray(e)&&(!(typeof t<"u"&&e.length)||e.every(t))}function ct(e){return Object.getPrototypeOf(e)===Object.prototype&&Object.keys(e).length}function ut(e){return typeof e>"u"}function dt(e,t){return!(!t||!ut(e))||"string"==typeof e&&!!e.trim().length}function ht(e,t){return!(!t||!ut(e))||"number"==typeof e&&!isNaN(e)}function ft(e,t){const{requiredNamespaces:n}=t,r=Object.keys(e.namespaces),i=Object.keys(n);let o=!0;return!!ge(i,r)&&(r.forEach((t=>{const{accounts:r,methods:i,events:a}=e.namespaces[t],s=Xe(r),l=n[t];(!ge(I(t,l),s)||!ge(l.methods,i)||!ge(l.events,a))&&(o=!1)})),o)}function pt(e){return!(!dt(e,!1)||!e.includes(":"))&&2===e.split(":").length}function mt(e){if(dt(e,!1))try{return typeof new URL(e)<"u"}catch{return!1}return!1}function gt(e){var t;return null==(t=e?.proposer)?void 0:t.publicKey}function yt(e){return e?.topic}function vt(e,t){let n=null;return dt(e?.publicKey,!1)||(n=at("MISSING_OR_INVALID",`${t} controller public key should be a string`)),n}function wt(e){let t=!0;return lt(e)?e.length&&(t=e.every((e=>dt(e,!1)))):t=!1,t}function bt(e,t,n){let r=null;return Object.entries(e).forEach((e=>{let[i,o]=e;if(r)return;const a=function(e,t,n){let r=null;return lt(t)&&t.length?t.forEach((e=>{r||pt(e)||(r=st("UNSUPPORTED_CHAINS",`${n}, chain ${e} should be a string and conform to "namespace:chainId" format`))})):pt(e)||(r=st("UNSUPPORTED_CHAINS",`${n}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),r}(i,I(i,o),`${t} ${n}`);a&&(r=a)})),r}function xt(e,t){let n=null;return lt(e)?e.forEach((e=>{n||function(e){if(dt(e,!1)&&e.includes(":")){const t=e.split(":");if(3===t.length){const e=t[0]+":"+t[1];return!!t[2]&&pt(e)}}return!1}(e)||(n=st("UNSUPPORTED_ACCOUNTS",`${t}, account ${e} should be a string and conform to "namespace:chainId:address" format`))})):n=st("UNSUPPORTED_ACCOUNTS",`${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),n}function Et(e,t){let n=null;return Object.values(e).forEach((e=>{if(n)return;const r=function(e,t){let n=null;return wt(e?.methods)?wt(e?.events)||(n=st("UNSUPPORTED_EVENTS",`${t}, events should be an array of strings or empty array for no events`)):n=st("UNSUPPORTED_METHODS",`${t}, methods should be an array of strings or empty array for no methods`),n}(e,`${t}, namespace`);r&&(n=r)})),n}function Ct(e,t,n){let r=null;if(e&&ct(e)){const i=Et(e,t);i&&(r=i);const o=bt(e,t,n);o&&(r=o)}else r=at("MISSING_OR_INVALID",`${t}, ${n} should be an object with data`);return r}function kt(e,t){let n=null;if(e&&ct(e)){const r=Et(e,t);r&&(n=r);const i=function(e,t){let n=null;return Object.values(e).forEach((e=>{if(n)return;const r=xt(e?.accounts,`${t} namespace`);r&&(n=r)})),n}(e,t);i&&(n=i)}else n=at("MISSING_OR_INVALID",`${t}, namespaces should be an object with data`);return n}function _t(e){return dt(e.protocol,!0)}function St(e,t){let n=!1;return t&&!e?n=!0:e&&lt(e)&&e.length&&e.forEach((e=>{n=_t(e)})),n}function Pt(e){return"number"==typeof e}function At(e){return typeof e<"u"&&null!==typeof e}function Tt(e){return!(!e||"object"!=typeof e||!e.code||!ht(e.code,!1)||!e.message||!dt(e.message,!1))}function It(e){return!(ut(e)||!dt(e.method,!1))}function Ot(e){return!(ut(e)||ut(e.result)&&ut(e.error)||!ht(e.id,!1)||!dt(e.jsonrpc,!1))}function Nt(e){return!(ut(e)||!dt(e.name,!1))}function Rt(e,t){return!(!pt(t)||!function(e){const t=[];return Object.values(e).forEach((e=>{t.push(...Xe(e.accounts))})),t}(e).includes(t))}function Mt(e,t,n){return!!dt(n,!1)&&function(e,t){const n=[];return Object.values(e).forEach((e=>{Xe(e.accounts).includes(t)&&n.push(...e.methods)})),n}(e,t).includes(n)}function $t(e,t,n){return!!dt(n,!1)&&function(e,t){const n=[];return Object.values(e).forEach((e=>{Xe(e.accounts).includes(t)&&n.push(...e.events)})),n}(e,t).includes(n)}function jt(e,t,n){let r=null;const i=function(e){const t={};return Object.keys(e).forEach((n=>{var r;n.includes(":")?t[n]=e[n]:null==(r=e[n].chains)||r.forEach((r=>{t[r]={methods:e[n].methods,events:e[n].events}}))})),t}(e),o=function(e){const t={};return Object.keys(e).forEach((n=>{if(n.includes(":"))t[n]=e[n];else{const r=Xe(e[n].accounts);r?.forEach((r=>{t[r]={accounts:e[n].accounts.filter((e=>e.includes(`${r}:`))),methods:e[n].methods,events:e[n].events}}))}})),t}(t),a=Object.keys(i),s=Object.keys(o),l=Ut(Object.keys(e)),c=Ut(Object.keys(t)),u=l.filter((e=>!c.includes(e)));return u.length&&(r=at("NON_CONFORMING_NAMESPACES",`${n} namespaces keys don't satisfy requiredNamespaces.\n      Required: ${u.toString()}\n      Received: ${Object.keys(t).toString()}`)),ge(a,s)||(r=at("NON_CONFORMING_NAMESPACES",`${n} namespaces chains don't satisfy required namespaces.\n      Required: ${a.toString()}\n      Approved: ${s.toString()}`)),Object.keys(t).forEach((e=>{if(!e.includes(":")||r)return;const i=Xe(t[e].accounts);i.includes(e)||(r=at("NON_CONFORMING_NAMESPACES",`${n} namespaces accounts don't satisfy namespace accounts for ${e}\n        Required: ${e}\n        Approved: ${i.toString()}`))})),a.forEach((e=>{r||(ge(i[e].methods,o[e].methods)?ge(i[e].events,o[e].events)||(r=at("NON_CONFORMING_NAMESPACES",`${n} namespaces events don't satisfy namespace events for ${e}`)):r=at("NON_CONFORMING_NAMESPACES",`${n} namespaces methods don't satisfy namespace methods for ${e}`))})),r}function Ut(e){return[...new Set(e.map((e=>e.includes(":")?e.split(":")[0]:e)))]}function Lt(e,t){return ht(e,!1)&&e<=t.max&&e>=t.min}function Dt(){const e=de();return new Promise((t=>{switch(e){case ae.browser:t(ue()&&navigator?.onLine);break;case ae.reactNative:t(async function(){if(ce()&&typeof n.g<"u"&&null!=n.g&&n.g.NetInfo){const e=await(null==n.g?void 0:n.g.NetInfo.fetch());return e?.isConnected}return!0}());break;case ae.node:default:t(!0)}}))}function Bt(e){switch(de()){case ae.browser:!function(e){!ce()&&ue()&&(window.addEventListener("online",(()=>e(!0))),window.addEventListener("offline",(()=>e(!1))))}(e);break;case ae.reactNative:!function(e){ce()&&typeof n.g<"u"&&null!=n.g&&n.g.NetInfo&&n.g?.NetInfo.addEventListener((t=>e(t?.isConnected)))}(e);case ae.node:}}const Ft={};class Wt{static get(e){return Ft[e]}static set(e,t){Ft[e]=t}static delete(e){delete Ft[e]}}},5005:(e,t,n)=>{"use strict";const r=n(7491),i=n(5707),o=n(1289),a=n(38),s=Symbol("encodeFragmentIdentifier");function l(e){if("string"!==typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function c(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}function u(e,t){return t.decode?i(e):e}function d(e){return Array.isArray(e)?e.sort():"object"===typeof e?d(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function h(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function f(e){const t=(e=h(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function p(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"===typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function m(e,t){l((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const n=function(e){let t;switch(e.arrayFormat){case"index":return(e,n,r)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return(e,n,r)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};case"colon-list-separator":return(e,n,r)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};case"comma":case"separator":return(t,n,r)=>{const i="string"===typeof n&&n.includes(e.arrayFormatSeparator),o="string"===typeof n&&!i&&u(n,e).includes(e.arrayFormatSeparator);n=o?u(n,e):n;const a=i||o?n.split(e.arrayFormatSeparator).map((t=>u(t,e))):null===n?n:u(n,e);r[t]=a};case"bracket-separator":return(t,n,r)=>{const i=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!i)return void(r[t]=n?u(n,e):n);const o=null===n?[]:n.split(e.arrayFormatSeparator).map((t=>u(t,e)));void 0!==r[t]?r[t]=[].concat(r[t],o):r[t]=o};default:return(e,t,n)=>{void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t),r=Object.create(null);if("string"!==typeof e)return r;if(!(e=e.trim().replace(/^[?#&]/,"")))return r;for(const i of e.split("&")){if(""===i)continue;let[e,a]=o(t.decode?i.replace(/\+/g," "):i,"=");a=void 0===a?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?a:u(a,t),n(u(e,t),a,r)}for(const i of Object.keys(r)){const e=r[i];if("object"===typeof e&&null!==e)for(const n of Object.keys(e))e[n]=p(e[n],t);else r[i]=p(e,t)}return!1===t.sort?r:(!0===t.sort?Object.keys(r).sort():Object.keys(r).sort(t.sort)).reduce(((e,t)=>{const n=r[t];return Boolean(n)&&"object"===typeof n&&!Array.isArray(n)?e[t]=d(n):e[t]=n,e}),Object.create(null))}t.extract=f,t.parse=m,t.stringify=(e,t)=>{if(!e)return"";l((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const n=n=>{return t.skipNull&&(null===(r=e[n])||void 0===r)||t.skipEmptyString&&""===e[n];var r},r=function(e){switch(e.arrayFormat){case"index":return t=>(n,r)=>{const i=n.length;return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[c(t,e),"[",i,"]"].join("")]:[...n,[c(t,e),"[",c(i,e),"]=",c(r,e)].join("")]};case"bracket":return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[c(t,e),"[]"].join("")]:[...n,[c(t,e),"[]=",c(r,e)].join("")];case"colon-list-separator":return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[c(t,e),":list="].join("")]:[...n,[c(t,e),":list=",c(r,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return n=>(r,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?r:(i=null===i?"":i,0===r.length?[[c(n,e),t,c(i,e)].join("")]:[[r,c(i,e)].join(e.arrayFormatSeparator)])}default:return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,c(t,e)]:[...n,[c(t,e),"=",c(r,e)].join("")]}}(t),i={};for(const a of Object.keys(e))n(a)||(i[a]=e[a]);const o=Object.keys(i);return!1!==t.sort&&o.sort(t.sort),o.map((n=>{const i=e[n];return void 0===i?"":null===i?c(n,t):Array.isArray(i)?0===i.length&&"bracket-separator"===t.arrayFormat?c(n,t)+"[]":i.reduce(r(n),[]).join("&"):c(n,t)+"="+c(i,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[n,r]=o(e,"#");return Object.assign({url:n.split("?")[0]||"",query:m(f(e),t)},t&&t.parseFragmentIdentifier&&r?{fragmentIdentifier:u(r,t)}:{})},t.stringifyUrl=(e,n)=>{n=Object.assign({encode:!0,strict:!0,[s]:!0},n);const r=h(e.url).split("?")[0]||"",i=t.extract(e.url),o=t.parse(i,{sort:!1}),a=Object.assign(o,e.query);let l=t.stringify(a,n);l&&(l=`?${l}`);let u=function(e){let t="";const n=e.indexOf("#");return-1!==n&&(t=e.slice(n)),t}(e.url);return e.fragmentIdentifier&&(u=`#${n[s]?c(e.fragmentIdentifier,n):e.fragmentIdentifier}`),`${r}${l}${u}`},t.pick=(e,n,r)=>{r=Object.assign({parseFragmentIdentifier:!0,[s]:!1},r);const{url:i,query:o,fragmentIdentifier:l}=t.parseUrl(e,r);return t.stringifyUrl({url:i,query:a(o,n),fragmentIdentifier:l},r)},t.exclude=(e,n,r)=>{const i=Array.isArray(n)?e=>!n.includes(e):(e,t)=>!n(e,t);return t.pick(e,i,r)}},33:(e,t)=>{"use strict";function n(e){let t;return"undefined"!==typeof window&&"undefined"!==typeof window[e]&&(t=window[e]),t}function r(e){const t=n(e);if(!t)throw new Error(`${e} is not defined in Window`);return t}Object.defineProperty(t,"__esModule",{value:!0}),t.getLocalStorage=t.getLocalStorageOrThrow=t.getCrypto=t.getCryptoOrThrow=t.getLocation=t.getLocationOrThrow=t.getNavigator=t.getNavigatorOrThrow=t.getDocument=t.getDocumentOrThrow=t.getFromWindowOrThrow=t.getFromWindow=void 0,t.getFromWindow=n,t.getFromWindowOrThrow=r,t.getDocumentOrThrow=function(){return r("document")},t.getDocument=function(){return n("document")},t.getNavigatorOrThrow=function(){return r("navigator")},t.getNavigator=function(){return n("navigator")},t.getLocationOrThrow=function(){return r("location")},t.getLocation=function(){return n("location")},t.getCryptoOrThrow=function(){return r("crypto")},t.getCrypto=function(){return n("crypto")},t.getLocalStorageOrThrow=function(){return r("localStorage")},t.getLocalStorage=function(){return n("localStorage")}},9332:(e,t,n)=>{"use strict";t.g=void 0;const r=n(33);t.g=function(){let e,t;try{e=r.getDocumentOrThrow(),t=r.getLocationOrThrow()}catch(o){return null}function n(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const i=e.getElementsByTagName("meta");for(let e=0;e<i.length;e++){const t=i[e],r=["itemprop","property","name"].map((e=>t.getAttribute(e))).filter((e=>!!e&&n.includes(e)));if(r.length&&r){const e=t.getAttribute("content");if(e)return e}}return""}const i=function(){let t=n("name","og:site_name","og:title","twitter:title");return t||(t=e.title),t}();return{description:n("description","og:description","twitter:description","keywords"),url:t.origin,icons:function(){const n=e.getElementsByTagName("link"),r=[];for(let e=0;e<n.length;e++){const i=n[e],o=i.getAttribute("rel");if(o&&o.toLowerCase().indexOf("icon")>-1){const e=i.getAttribute("href");if(e)if(-1===e.toLowerCase().indexOf("https:")&&-1===e.toLowerCase().indexOf("http:")&&0!==e.indexOf("//")){let n=t.protocol+"//"+t.host;if(0===e.indexOf("/"))n+=e;else{const r=t.pathname.split("/");r.pop();n+=r.join("/")+"/"+e}r.push(n)}else if(0===e.indexOf("//")){const n=t.protocol+e;r.push(n)}else r.push(e)}}return r}(),name:i}}},4445:(e,t)=>{"use strict";t.byteLength=function(e){var t=s(e),n=t[0],r=t[1];return 3*(n+r)/4-r},t.toByteArray=function(e){var t,n,o=s(e),a=o[0],l=o[1],c=new i(function(e,t,n){return 3*(t+n)/4-n}(0,a,l)),u=0,d=l>0?a-4:a;for(n=0;n<d;n+=4)t=r[e.charCodeAt(n)]<<18|r[e.charCodeAt(n+1)]<<12|r[e.charCodeAt(n+2)]<<6|r[e.charCodeAt(n+3)],c[u++]=t>>16&255,c[u++]=t>>8&255,c[u++]=255&t;2===l&&(t=r[e.charCodeAt(n)]<<2|r[e.charCodeAt(n+1)]>>4,c[u++]=255&t);1===l&&(t=r[e.charCodeAt(n)]<<10|r[e.charCodeAt(n+1)]<<4|r[e.charCodeAt(n+2)]>>2,c[u++]=t>>8&255,c[u++]=255&t);return c},t.fromByteArray=function(e){for(var t,r=e.length,i=r%3,o=[],a=16383,s=0,c=r-i;s<c;s+=a)o.push(l(e,s,s+a>c?c:s+a));1===i?(t=e[r-1],o.push(n[t>>2]+n[t<<4&63]+"==")):2===i&&(t=(e[r-2]<<8)+e[r-1],o.push(n[t>>10]+n[t>>4&63]+n[t<<2&63]+"="));return o.join("")};for(var n=[],r=[],i="undefined"!==typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0;a<64;++a)n[a]=o[a],r[o.charCodeAt(a)]=a;function s(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function l(e,t,r){for(var i,o,a=[],s=t;s<r;s+=3)i=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),a.push(n[(o=i)>>18&63]+n[o>>12&63]+n[o>>6&63]+n[63&o]);return a.join("")}r["-".charCodeAt(0)]=62,r["_".charCodeAt(0)]=63},6382:(e,t,n)=>{"use strict";const r=n(4445),i=n(6900),o="function"===typeof Symbol&&"function"===typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;t.Buffer=l,t.SlowBuffer=function(e){+e!=e&&(e=0);return l.alloc(+e)},t.INSPECT_MAX_BYTES=50;const a=2147483647;function s(e){if(e>a)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,l.prototype),t}function l(e,t,n){if("number"===typeof e){if("string"===typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return d(e)}return c(e,t,n)}function c(e,t,n){if("string"===typeof e)return function(e,t){"string"===typeof t&&""!==t||(t="utf8");if(!l.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|m(e,t);let r=s(n);const i=r.write(e,t);i!==n&&(r=r.slice(0,i));return r}(e,t);if(ArrayBuffer.isView(e))return function(e){if(G(e,Uint8Array)){const t=new Uint8Array(e);return f(t.buffer,t.byteOffset,t.byteLength)}return h(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(G(e,ArrayBuffer)||e&&G(e.buffer,ArrayBuffer))return f(e,t,n);if("undefined"!==typeof SharedArrayBuffer&&(G(e,SharedArrayBuffer)||e&&G(e.buffer,SharedArrayBuffer)))return f(e,t,n);if("number"===typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const r=e.valueOf&&e.valueOf();if(null!=r&&r!==e)return l.from(r,t,n);const i=function(e){if(l.isBuffer(e)){const t=0|p(e.length),n=s(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!==typeof e.length||Y(e.length)?s(0):h(e);if("Buffer"===e.type&&Array.isArray(e.data))return h(e.data)}(e);if(i)return i;if("undefined"!==typeof Symbol&&null!=Symbol.toPrimitive&&"function"===typeof e[Symbol.toPrimitive])return l.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function u(e){if("number"!==typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function d(e){return u(e),s(e<0?0:0|p(e))}function h(e){const t=e.length<0?0:0|p(e.length),n=s(t);for(let r=0;r<t;r+=1)n[r]=255&e[r];return n}function f(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(r,l.prototype),r}function p(e){if(e>=a)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a.toString(16)+" bytes");return 0|e}function m(e,t){if(l.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||G(e,ArrayBuffer))return e.byteLength;if("string"!==typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Z(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return V(e).length;default:if(i)return r?-1:Z(e).length;t=(""+t).toLowerCase(),i=!0}}function g(e,t,n){let r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return I(this,t,n);case"utf8":case"utf-8":return S(this,t,n);case"ascii":return A(this,t,n);case"latin1":case"binary":return T(this,t,n);case"base64":return _(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return O(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function y(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function v(e,t,n,r,i){if(0===e.length)return-1;if("string"===typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Y(n=+n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0){if(!i)return-1;n=0}if("string"===typeof t&&(t=l.from(t,r)),l.isBuffer(t))return 0===t.length?-1:w(e,t,n,r,i);if("number"===typeof t)return t&=255,"function"===typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):w(e,[t],n,r,i);throw new TypeError("val must be string, number or Buffer")}function w(e,t,n,r,i){let o,a=1,s=e.length,l=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;a=2,s/=2,l/=2,n/=2}function c(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(i){let r=-1;for(o=n;o<s;o++)if(c(e,o)===c(t,-1===r?0:o-r)){if(-1===r&&(r=o),o-r+1===l)return r*a}else-1!==r&&(o-=o-r),r=-1}else for(n+l>s&&(n=s-l),o=n;o>=0;o--){let n=!0;for(let r=0;r<l;r++)if(c(e,o+r)!==c(t,r)){n=!1;break}if(n)return o}return-1}function b(e,t,n,r){n=Number(n)||0;const i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;const o=t.length;let a;for(r>o/2&&(r=o/2),a=0;a<r;++a){const r=parseInt(t.substr(2*a,2),16);if(Y(r))return a;e[n+a]=r}return a}function x(e,t,n,r){return K(Z(t,e.length-n),e,n,r)}function E(e,t,n,r){return K(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function C(e,t,n,r){return K(V(t),e,n,r)}function k(e,t,n,r){return K(function(e,t){let n,r,i;const o=[];for(let a=0;a<e.length&&!((t-=2)<0);++a)n=e.charCodeAt(a),r=n>>8,i=n%256,o.push(i),o.push(r);return o}(t,e.length-n),e,n,r)}function _(e,t,n){return 0===t&&n===e.length?r.fromByteArray(e):r.fromByteArray(e.slice(t,n))}function S(e,t,n){n=Math.min(e.length,n);const r=[];let i=t;for(;i<n;){const t=e[i];let o=null,a=t>239?4:t>223?3:t>191?2:1;if(i+a<=n){let n,r,s,l;switch(a){case 1:t<128&&(o=t);break;case 2:n=e[i+1],128===(192&n)&&(l=(31&t)<<6|63&n,l>127&&(o=l));break;case 3:n=e[i+1],r=e[i+2],128===(192&n)&&128===(192&r)&&(l=(15&t)<<12|(63&n)<<6|63&r,l>2047&&(l<55296||l>57343)&&(o=l));break;case 4:n=e[i+1],r=e[i+2],s=e[i+3],128===(192&n)&&128===(192&r)&&128===(192&s)&&(l=(15&t)<<18|(63&n)<<12|(63&r)<<6|63&s,l>65535&&l<1114112&&(o=l))}}null===o?(o=65533,a=1):o>65535&&(o-=65536,r.push(o>>>10&1023|55296),o=56320|1023&o),r.push(o),i+=a}return function(e){const t=e.length;if(t<=P)return String.fromCharCode.apply(String,e);let n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=P));return n}(r)}t.kMaxLength=a,l.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),l.TYPED_ARRAY_SUPPORT||"undefined"===typeof console||"function"!==typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.buffer}}),Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.byteOffset}}),l.poolSize=8192,l.from=function(e,t,n){return c(e,t,n)},Object.setPrototypeOf(l.prototype,Uint8Array.prototype),Object.setPrototypeOf(l,Uint8Array),l.alloc=function(e,t,n){return function(e,t,n){return u(e),e<=0?s(e):void 0!==t?"string"===typeof n?s(e).fill(t,n):s(e).fill(t):s(e)}(e,t,n)},l.allocUnsafe=function(e){return d(e)},l.allocUnsafeSlow=function(e){return d(e)},l.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==l.prototype},l.compare=function(e,t){if(G(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),G(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),!l.isBuffer(e)||!l.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,r=t.length;for(let i=0,o=Math.min(n,r);i<o;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0},l.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return l.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const r=l.allocUnsafe(t);let i=0;for(n=0;n<e.length;++n){let t=e[n];if(G(t,Uint8Array))i+t.length>r.length?(l.isBuffer(t)||(t=l.from(t)),t.copy(r,i)):Uint8Array.prototype.set.call(r,t,i);else{if(!l.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(r,i)}i+=t.length}return r},l.byteLength=m,l.prototype._isBuffer=!0,l.prototype.swap16=function(){const e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)y(this,t,t+1);return this},l.prototype.swap32=function(){const e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)y(this,t,t+3),y(this,t+1,t+2);return this},l.prototype.swap64=function(){const e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)y(this,t,t+7),y(this,t+1,t+6),y(this,t+2,t+5),y(this,t+3,t+4);return this},l.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?S(this,0,e):g.apply(this,arguments)},l.prototype.toLocaleString=l.prototype.toString,l.prototype.equals=function(e){if(!l.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===l.compare(this,e)},l.prototype.inspect=function(){let e="";const n=t.INSPECT_MAX_BYTES;return e=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(e+=" ... "),"<Buffer "+e+">"},o&&(l.prototype[o]=l.prototype.inspect),l.prototype.compare=function(e,t,n,r,i){if(G(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),!l.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&t>=n)return 0;if(r>=i)return-1;if(t>=n)return 1;if(this===e)return 0;let o=(i>>>=0)-(r>>>=0),a=(n>>>=0)-(t>>>=0);const s=Math.min(o,a),c=this.slice(r,i),u=e.slice(t,n);for(let l=0;l<s;++l)if(c[l]!==u[l]){o=c[l],a=u[l];break}return o<a?-1:a<o?1:0},l.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},l.prototype.indexOf=function(e,t,n){return v(this,e,t,n,!0)},l.prototype.lastIndexOf=function(e,t,n){return v(this,e,t,n,!1)},l.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"===typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}const i=this.length-t;if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let o=!1;for(;;)switch(r){case"hex":return b(this,e,t,n);case"utf8":case"utf-8":return x(this,e,t,n);case"ascii":case"latin1":case"binary":return E(this,e,t,n);case"base64":return C(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return k(this,e,t,n);default:if(o)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),o=!0}},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const P=4096;function A(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}function T(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}function I(e,t,n){const r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);let i="";for(let o=t;o<n;++o)i+=J[e[o]];return i}function O(e,t,n){const r=e.slice(t,n);let i="";for(let o=0;o<r.length-1;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1]);return i}function N(e,t,n){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function R(e,t,n,r,i,o){if(!l.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function M(e,t,n,r,i){W(t,r,i,e,n,7);let o=Number(t&BigInt(4294967295));e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o;let a=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a,n}function $(e,t,n,r,i){W(t,r,i,e,n,7);let o=Number(t&BigInt(4294967295));e[n+7]=o,o>>=8,e[n+6]=o,o>>=8,e[n+5]=o,o>>=8,e[n+4]=o;let a=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=a,a>>=8,e[n+2]=a,a>>=8,e[n+1]=a,a>>=8,e[n]=a,n+8}function j(e,t,n,r,i,o){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function U(e,t,n,r,o){return t=+t,n>>>=0,o||j(e,0,n,4),i.write(e,t,n,r,23,4),n+4}function L(e,t,n,r,o){return t=+t,n>>>=0,o||j(e,0,n,8),i.write(e,t,n,r,52,8),n+8}l.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const r=this.subarray(e,t);return Object.setPrototypeOf(r,l.prototype),r},l.prototype.readUintLE=l.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||N(e,t,this.length);let r=this[e],i=1,o=0;for(;++o<t&&(i*=256);)r+=this[e+o]*i;return r},l.prototype.readUintBE=l.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||N(e,t,this.length);let r=this[e+--t],i=1;for(;t>0&&(i*=256);)r+=this[e+--t]*i;return r},l.prototype.readUint8=l.prototype.readUInt8=function(e,t){return e>>>=0,t||N(e,1,this.length),this[e]},l.prototype.readUint16LE=l.prototype.readUInt16LE=function(e,t){return e>>>=0,t||N(e,2,this.length),this[e]|this[e+1]<<8},l.prototype.readUint16BE=l.prototype.readUInt16BE=function(e,t){return e>>>=0,t||N(e,2,this.length),this[e]<<8|this[e+1]},l.prototype.readUint32LE=l.prototype.readUInt32LE=function(e,t){return e>>>=0,t||N(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},l.prototype.readUint32BE=l.prototype.readUInt32BE=function(e,t){return e>>>=0,t||N(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},l.prototype.readBigUInt64LE=Q((function(e){z(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||q(e,this.length-8);const r=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,i=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(r)+(BigInt(i)<<BigInt(32))})),l.prototype.readBigUInt64BE=Q((function(e){z(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||q(e,this.length-8);const r=t*2**24+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)})),l.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||N(e,t,this.length);let r=this[e],i=1,o=0;for(;++o<t&&(i*=256);)r+=this[e+o]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*t)),r},l.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||N(e,t,this.length);let r=t,i=1,o=this[e+--r];for(;r>0&&(i*=256);)o+=this[e+--r]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*t)),o},l.prototype.readInt8=function(e,t){return e>>>=0,t||N(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},l.prototype.readInt16LE=function(e,t){e>>>=0,t||N(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},l.prototype.readInt16BE=function(e,t){e>>>=0,t||N(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},l.prototype.readInt32LE=function(e,t){return e>>>=0,t||N(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},l.prototype.readInt32BE=function(e,t){return e>>>=0,t||N(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},l.prototype.readBigInt64LE=Q((function(e){z(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||q(e,this.length-8);const r=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),l.prototype.readBigInt64BE=Q((function(e){z(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||q(e,this.length-8);const r=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(r)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),l.prototype.readFloatLE=function(e,t){return e>>>=0,t||N(e,4,this.length),i.read(this,e,!0,23,4)},l.prototype.readFloatBE=function(e,t){return e>>>=0,t||N(e,4,this.length),i.read(this,e,!1,23,4)},l.prototype.readDoubleLE=function(e,t){return e>>>=0,t||N(e,8,this.length),i.read(this,e,!0,52,8)},l.prototype.readDoubleBE=function(e,t){return e>>>=0,t||N(e,8,this.length),i.read(this,e,!1,52,8)},l.prototype.writeUintLE=l.prototype.writeUIntLE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){R(this,e,t,n,Math.pow(2,8*n)-1,0)}let i=1,o=0;for(this[t]=255&e;++o<n&&(i*=256);)this[t+o]=e/i&255;return t+n},l.prototype.writeUintBE=l.prototype.writeUIntBE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){R(this,e,t,n,Math.pow(2,8*n)-1,0)}let i=n-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+n},l.prototype.writeUint8=l.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||R(this,e,t,1,255,0),this[t]=255&e,t+1},l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||R(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||R(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||R(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||R(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeBigUInt64LE=Q((function(e){return M(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,BigInt(0),BigInt("0xffffffffffffffff"))})),l.prototype.writeBigUInt64BE=Q((function(e){return $(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,BigInt(0),BigInt("0xffffffffffffffff"))})),l.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);R(this,e,t,n,r-1,-r)}let i=0,o=1,a=0;for(this[t]=255&e;++i<n&&(o*=256);)e<0&&0===a&&0!==this[t+i-1]&&(a=1),this[t+i]=(e/o|0)-a&255;return t+n},l.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);R(this,e,t,n,r-1,-r)}let i=n-1,o=1,a=0;for(this[t+i]=255&e;--i>=0&&(o*=256);)e<0&&0===a&&0!==this[t+i+1]&&(a=1),this[t+i]=(e/o|0)-a&255;return t+n},l.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||R(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},l.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||R(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||R(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||R(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},l.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||R(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeBigInt64LE=Q((function(e){return M(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),l.prototype.writeBigInt64BE=Q((function(e){return $(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),l.prototype.writeFloatLE=function(e,t,n){return U(this,e,t,!0,n)},l.prototype.writeFloatBE=function(e,t,n){return U(this,e,t,!1,n)},l.prototype.writeDoubleLE=function(e,t,n){return L(this,e,t,!0,n)},l.prototype.writeDoubleBE=function(e,t,n){return L(this,e,t,!1,n)},l.prototype.copy=function(e,t,n,r){if(!l.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);const i=r-n;return this===e&&"function"===typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),i},l.prototype.fill=function(e,t,n,r){if("string"===typeof e){if("string"===typeof t?(r=t,t=0,n=this.length):"string"===typeof n&&(r=n,n=this.length),void 0!==r&&"string"!==typeof r)throw new TypeError("encoding must be a string");if("string"===typeof r&&!l.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===e.length){const t=e.charCodeAt(0);("utf8"===r&&t<128||"latin1"===r)&&(e=t)}}else"number"===typeof e?e&=255:"boolean"===typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let i;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"===typeof e)for(i=t;i<n;++i)this[i]=e;else{const o=l.isBuffer(e)?e:l.from(e,r),a=o.length;if(0===a)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<n-t;++i)this[i+t]=o[i%a]}return this};const D={};function B(e,t,n){D[e]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function F(e){let t="",n=e.length;const r="-"===e[0]?1:0;for(;n>=r+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function W(e,t,n,r,i,o){if(e>n||e<t){const r="bigint"===typeof t?"n":"";let i;throw i=o>3?0===t||t===BigInt(0)?`>= 0${r} and < 2${r} ** ${8*(o+1)}${r}`:`>= -(2${r} ** ${8*(o+1)-1}${r}) and < 2 ** ${8*(o+1)-1}${r}`:`>= ${t}${r} and <= ${n}${r}`,new D.ERR_OUT_OF_RANGE("value",i,e)}!function(e,t,n){z(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||q(t,e.length-(n+1))}(r,i,o)}function z(e,t){if("number"!==typeof e)throw new D.ERR_INVALID_ARG_TYPE(t,"number",e)}function q(e,t,n){if(Math.floor(e)!==e)throw z(e,n),new D.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new D.ERR_BUFFER_OUT_OF_BOUNDS;throw new D.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}B("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),B("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),B("ERR_OUT_OF_RANGE",(function(e,t,n){let r=`The value of "${e}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>2**32?i=F(String(n)):"bigint"===typeof n&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=F(i)),i+="n"),r+=` It must be ${t}. Received ${i}`,r}),RangeError);const H=/[^+/0-9A-Za-z-_]/g;function Z(e,t){let n;t=t||1/0;const r=e.length;let i=null;const o=[];for(let a=0;a<r;++a){if(n=e.charCodeAt(a),n>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(a+1===r){(t-=3)>-1&&o.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&o.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;o.push(n)}else if(n<2048){if((t-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function V(e){return r.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(H,"")).length<2)return"";for(;e.length%4!==0;)e+="=";return e}(e))}function K(e,t,n,r){let i;for(i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}function G(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Y(e){return e!==e}const J=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const r=16*n;for(let i=0;i<16;++i)t[r+i]=e[n]+e[i]}return t}();function Q(e){return"undefined"===typeof BigInt?X:e}function X(){throw new Error("BigInt not supported")}},446:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),o=n-i<0,a=t.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:h,h:a,m:o,s:i,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},w="en",b={};b[w]=g;var x="$isDayjsObject",E=function(e){return e instanceof S||!(!e||!e[x])},C=function e(t,n,r){var i;if(!t)return w;if("string"==typeof t){var o=t.toLowerCase();b[o]&&(i=o),n&&(b[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;b[s]=t,i=s}return!r&&i&&(w=i),i||!r&&w},k=function(e,t){if(E(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new S(n)},_=v;_.l=C,_.i=E,_.w=function(e,t){return k(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var S=function(){function g(e){this.$L=C(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[x]=!0}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(_.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return _},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=k(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return k(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<k(e)},y.$g=function(e,t,n){return _.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!_.u(t)||t,u=_.p(e),f=function(e,t){var i=_.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return _.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case c:return r?f(1,g):f(0,g+1);case l:var w=this.$locale().weekStart||0,b=(m<w?m+7:m)-w;return f(r?y-b:y+(6-b),g);case s:case h:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=_.p(e),u="set"+(this.$u?"UTC":""),f=(n={},n[s]=u+"Date",n[h]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[o]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var m=this.clone().set(h,1);m.$d[f](p),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[_.p(e)]()},y.add=function(r,u){var h,f=this;r=Number(r);var p=_.p(u),m=function(e){var t=k(f);return _.w(t.date(t.date()+Math.round(e*r)),f)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return m(1);if(p===l)return m(7);var g=(h={},h[o]=t,h[a]=n,h[i]=e,h)[p]||1,y=this.$d.getTime()+r*g;return _.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=_.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},h=function(e){return _.s(o%12||12,e,"0")},p=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return _.s(t.$y,4,"0");case"M":return s+1;case"MM":return _.s(s+1,2,"0");case"MMM":return d(n.monthsShort,s,c,3);case"MMMM":return d(c,s);case"D":return t.$D;case"DD":return _.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,l,2);case"ddd":return d(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return _.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return p(o,a,!0);case"A":return p(o,a,!1);case"m":return String(a);case"mm":return _.s(a,2,"0");case"s":return String(t.$s);case"ss":return _.s(t.$s,2,"0");case"SSS":return _.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var p,m=this,g=_.p(h),y=k(r),v=(y.utcOffset()-this.utcOffset())*t,w=this-y,b=function(){return _.m(m,y)};switch(g){case d:p=b()/12;break;case c:p=b();break;case u:p=b()/3;break;case l:p=(w-v)/6048e5;break;case s:p=(w-v)/864e5;break;case a:p=w/n;break;case o:p=w/t;break;case i:p=w/e;break;default:p=w}return f?p:_.a(p)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return b[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=C(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return _.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),P=S.prototype;return k.prototype=P,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",d],["$D",h]].forEach((function(e){P[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),k.extend=function(e,t){return e.$i||(e(t,S,k),e.$i=!0),k},k.locale=C,k.isDayjs=E,k.unix=function(e){return k(1e3*e)},k.en=b[w],k.Ls=b,k.p={},k}()},8092:function(e){e.exports=function(){"use strict";return function(e,t,n){e=e||{};var r=t.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function o(e,t,n,i){return r.fromToBase(e,t,n,i)}n.en.relativeTime=i,r.fromToBase=function(t,r,o,a,s){for(var l,c,u,d=o.$locale().relativeTime||i,h=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=h.length,p=0;p<f;p+=1){var m=h[p];m.d&&(l=a?n(t).diff(o,m.d,!0):o.diff(t,m.d,!0));var g=(e.rounding||Math.round)(Math.abs(l));if(u=l>0,g<=m.r||!m.r){g<=1&&p>0&&(m=h[p-1]);var y=d[m.l];s&&(g=s(""+g)),c="string"==typeof y?y.replace("%d",g):y(g,r,m.l,u);break}}if(r)return c;var v=u?d.future:d.past;return"function"==typeof v?v(c):v.replace("%s",c)},r.to=function(e,t){return o(e,t,this,!0)},r.from=function(e,t){return o(e,t,this)};var a=function(e){return e.$u?n.utc():n()};r.toNow=function(e){return this.to(a(this),e)},r.fromNow=function(e){return this.from(a(this),e)}}}()},2658:function(e){e.exports=function(){"use strict";return function(e,t,n){n.updateLocale=function(e,t){var r=n.Ls[e];if(r)return(t?Object.keys(t):[]).forEach((function(e){r[e]=t[e]})),r}}}()},5707:e=>{"use strict";var t="%[a-f0-9]{2}",n=new RegExp("("+t+")|([^%]+?)","gi"),r=new RegExp("("+t+")+","gi");function i(e,t){try{return[decodeURIComponent(e.join(""))]}catch(o){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],i(n),i(r))}function o(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(n)||[],r=1;r<t.length;r++)t=(e=i(t,r).join("")).match(n)||[];return e}}e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var n={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},i=r.exec(e);i;){try{n[i[0]]=decodeURIComponent(i[0])}catch(t){var a=o(i[0]);a!==i[0]&&(n[i[0]]=a)}i=r.exec(e)}n["%C2"]="\ufffd";for(var s=Object.keys(n),l=0;l<s.length;l++){var c=s[l];e=e.replace(new RegExp(c,"g"),n[c])}return e}(e)}}},7347:e=>{"use strict";var t={single_source_shortest_paths:function(e,n,r){var i={},o={};o[n]=0;var a,s,l,c,u,d,h,f=t.PriorityQueue.make();for(f.push(n,0);!f.empty();)for(l in s=(a=f.pop()).value,c=a.cost,u=e[s]||{})u.hasOwnProperty(l)&&(d=c+u[l],h=o[l],("undefined"===typeof o[l]||h>d)&&(o[l]=d,f.push(l,d),i[l]=s));if("undefined"!==typeof r&&"undefined"===typeof o[r]){var p=["Could not find a path from ",n," to ",r,"."].join("");throw new Error(p)}return i},extract_shortest_path_from_predecessor_list:function(e,t){for(var n=[],r=t;r;)n.push(r),e[r],r=e[r];return n.reverse(),n},find_path:function(e,n,r){var i=t.single_source_shortest_paths(e,n,r);return t.extract_shortest_path_from_predecessor_list(i,r)},PriorityQueue:{make:function(e){var n,r=t.PriorityQueue,i={};for(n in e=e||{},r)r.hasOwnProperty(n)&&(i[n]=r[n]);return i.queue=[],i.sorter=e.sorter||r.default_sorter,i},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){var n={value:e,cost:t};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};e.exports=t},5558:e=>{"use strict";e.exports=function(e){for(var t=[],n=e.length,r=0;r<n;r++){var i=e.charCodeAt(r);if(i>=55296&&i<=56319&&n>r+1){var o=e.charCodeAt(r+1);o>=56320&&o<=57343&&(i=1024*(i-55296)+o-56320+65536,r+=1)}i<128?t.push(i):i<2048?(t.push(i>>6|192),t.push(63&i|128)):i<55296||i>=57344&&i<65536?(t.push(i>>12|224),t.push(i>>6&63|128),t.push(63&i|128)):i>=65536&&i<=1114111?(t.push(i>>18|240),t.push(i>>12&63|128),t.push(i>>6&63|128),t.push(63&i|128)):t.push(239,191,189)}return new Uint8Array(t).buffer}},7283:e=>{"use strict";var t=Object.prototype.hasOwnProperty,n="~";function r(){}function i(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function o(e,t,r,o,a){if("function"!==typeof r)throw new TypeError("The listener must be a function");var s=new i(r,o||e,a),l=n?n+t:t;return e._events[l]?e._events[l].fn?e._events[l]=[e._events[l],s]:e._events[l].push(s):(e._events[l]=s,e._eventsCount++),e}function a(e,t){0===--e._eventsCount?e._events=new r:delete e._events[t]}function s(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(n=!1)),s.prototype.eventNames=function(){var e,r,i=[];if(0===this._eventsCount)return i;for(r in e=this._events)t.call(e,r)&&i.push(n?r.slice(1):r);return Object.getOwnPropertySymbols?i.concat(Object.getOwnPropertySymbols(e)):i},s.prototype.listeners=function(e){var t=n?n+e:e,r=this._events[t];if(!r)return[];if(r.fn)return[r.fn];for(var i=0,o=r.length,a=new Array(o);i<o;i++)a[i]=r[i].fn;return a},s.prototype.listenerCount=function(e){var t=n?n+e:e,r=this._events[t];return r?r.fn?1:r.length:0},s.prototype.emit=function(e,t,r,i,o,a){var s=n?n+e:e;if(!this._events[s])return!1;var l,c,u=this._events[s],d=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),d){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,r),!0;case 4:return u.fn.call(u.context,t,r,i),!0;case 5:return u.fn.call(u.context,t,r,i,o),!0;case 6:return u.fn.call(u.context,t,r,i,o,a),!0}for(c=1,l=new Array(d-1);c<d;c++)l[c-1]=arguments[c];u.fn.apply(u.context,l)}else{var h,f=u.length;for(c=0;c<f;c++)switch(u[c].once&&this.removeListener(e,u[c].fn,void 0,!0),d){case 1:u[c].fn.call(u[c].context);break;case 2:u[c].fn.call(u[c].context,t);break;case 3:u[c].fn.call(u[c].context,t,r);break;case 4:u[c].fn.call(u[c].context,t,r,i);break;default:if(!l)for(h=1,l=new Array(d-1);h<d;h++)l[h-1]=arguments[h];u[c].fn.apply(u[c].context,l)}}return!0},s.prototype.on=function(e,t,n){return o(this,e,t,n,!1)},s.prototype.once=function(e,t,n){return o(this,e,t,n,!0)},s.prototype.removeListener=function(e,t,r,i){var o=n?n+e:e;if(!this._events[o])return this;if(!t)return a(this,o),this;var s=this._events[o];if(s.fn)s.fn!==t||i&&!s.once||r&&s.context!==r||a(this,o);else{for(var l=0,c=[],u=s.length;l<u;l++)(s[l].fn!==t||i&&!s[l].once||r&&s[l].context!==r)&&c.push(s[l]);c.length?this._events[o]=1===c.length?c[0]:c:a(this,o)}return this},s.prototype.removeAllListeners=function(e){var t;return e?(t=n?n+e:e,this._events[t]&&a(this,t)):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=n,s.EventEmitter=s,e.exports=s},38:e=>{"use strict";e.exports=function(e,t){for(var n={},r=Object.keys(e),i=Array.isArray(t),o=0;o<r.length;o++){var a=r[o],s=e[a];(i?-1!==t.indexOf(a):t(a,s,e))&&(n[a]=s)}return n}},6900:(e,t)=>{t.read=function(e,t,n,r,i){var o,a,s=8*i-r-1,l=(1<<s)-1,c=l>>1,u=-7,d=n?i-1:0,h=n?-1:1,f=e[t+d];for(d+=h,o=f&(1<<-u)-1,f>>=-u,u+=s;u>0;o=256*o+e[t+d],d+=h,u-=8);for(a=o&(1<<-u)-1,o>>=-u,u+=r;u>0;a=256*a+e[t+d],d+=h,u-=8);if(0===o)o=1-c;else{if(o===l)return a?NaN:1/0*(f?-1:1);a+=Math.pow(2,r),o-=c}return(f?-1:1)*a*Math.pow(2,o-r)},t.write=function(e,t,n,r,i,o){var a,s,l,c=8*o-i-1,u=(1<<c)-1,d=u>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=r?0:o-1,p=r?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,a=u):(a=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-a))<1&&(a--,l*=2),(t+=a+d>=1?h/l:h*Math.pow(2,1-d))*l>=2&&(a++,l/=2),a+d>=u?(s=0,a=u):a+d>=1?(s=(t*l-1)*Math.pow(2,i),a+=d):(s=t*Math.pow(2,d-1)*Math.pow(2,i),a=0));i>=8;e[n+f]=255&s,f+=p,s/=256,i-=8);for(a=a<<i|s,c+=i;c>0;e[n+f]=255&a,f+=p,a/=256,c-=8);e[n+f-p]|=128*m}},8970:(e,t,n)=>{const r=n(6116),i=n(4772),o=n(2182),a=n(5487);function s(e,t,n,o,a){const s=[].slice.call(arguments,1),l=s.length,c="function"===typeof s[l-1];if(!c&&!r())throw new Error("Callback required as last argument");if(!c){if(l<1)throw new Error("Too few arguments provided");return 1===l?(n=t,t=o=void 0):2!==l||t.getContext||(o=n,n=t,t=void 0),new Promise((function(r,a){try{const a=i.create(n,o);r(e(a,t,o))}catch(s){a(s)}}))}if(l<2)throw new Error("Too few arguments provided");2===l?(a=n,n=t,t=o=void 0):3===l&&(t.getContext&&"undefined"===typeof a?(a=o,o=void 0):(a=o,o=n,n=t,t=void 0));try{const r=i.create(n,o);a(null,e(r,t,o))}catch(u){a(u)}}t.create=i.create,t.toCanvas=s.bind(null,o.render),t.toDataURL=s.bind(null,o.renderToDataURL),t.toString=s.bind(null,(function(e,t,n){return a.render(e,n)}))},6116:e=>{e.exports=function(){return"function"===typeof Promise&&Promise.prototype&&Promise.prototype.then}},9382:(e,t,n)=>{const r=n(7969).getSymbolSize;t.getRowColCoords=function(e){if(1===e)return[];const t=Math.floor(e/7)+2,n=r(e),i=145===n?26:2*Math.ceil((n-13)/(2*t-2)),o=[n-7];for(let r=1;r<t-1;r++)o[r]=o[r-1]-i;return o.push(6),o.reverse()},t.getPositions=function(e){const n=[],r=t.getRowColCoords(e),i=r.length;for(let t=0;t<i;t++)for(let e=0;e<i;e++)0===t&&0===e||0===t&&e===i-1||t===i-1&&0===e||n.push([r[t],r[e]]);return n}},9642:(e,t,n)=>{const r=n(7421),i=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function o(e){this.mode=r.ALPHANUMERIC,this.data=e}o.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let n=45*i.indexOf(this.data[t]);n+=i.indexOf(this.data[t+1]),e.put(n,11)}this.data.length%2&&e.put(i.indexOf(this.data[t]),6)},e.exports=o},4566:e=>{function t(){this.buffer=[],this.length=0}t.prototype={get:function(e){const t=Math.floor(e/8);return 1===(this.buffer[t]>>>7-e%8&1)},put:function(e,t){for(let n=0;n<t;n++)this.putBit(1===(e>>>t-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},e.exports=t},4661:e=>{function t(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}t.prototype.set=function(e,t,n,r){const i=e*this.size+t;this.data[i]=n,r&&(this.reservedBit[i]=!0)},t.prototype.get=function(e,t){return this.data[e*this.size+t]},t.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},t.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},e.exports=t},8697:(e,t,n)=>{const r=n(5558),i=n(7421);function o(e){this.mode=i.BYTE,"string"===typeof e&&(e=r(e)),this.data=new Uint8Array(e)}o.getBitsLength=function(e){return 8*e},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){for(let t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)},e.exports=o},1805:(e,t,n)=>{const r=n(6272),i=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],o=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];t.getBlocksCount=function(e,t){switch(t){case r.L:return i[4*(e-1)+0];case r.M:return i[4*(e-1)+1];case r.Q:return i[4*(e-1)+2];case r.H:return i[4*(e-1)+3];default:return}},t.getTotalCodewordsCount=function(e,t){switch(t){case r.L:return o[4*(e-1)+0];case r.M:return o[4*(e-1)+1];case r.Q:return o[4*(e-1)+2];case r.H:return o[4*(e-1)+3];default:return}}},6272:(e,t)=>{t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(e){return e&&"undefined"!==typeof e.bit&&e.bit>=0&&e.bit<4},t.from=function(e,n){if(t.isValid(e))return e;try{return function(e){if("string"!==typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+e)}}(e)}catch(r){return n}}},9021:(e,t,n)=>{const r=n(7969).getSymbolSize;t.getPositions=function(e){const t=r(e);return[[0,0],[t-7,0],[0,t-7]]}},350:(e,t,n)=>{const r=n(7969),i=r.getBCHDigit(1335);t.getEncodedBits=function(e,t){const n=e.bit<<3|t;let o=n<<10;for(;r.getBCHDigit(o)-i>=0;)o^=1335<<r.getBCHDigit(o)-i;return 21522^(n<<10|o)}},1166:(e,t)=>{const n=new Uint8Array(512),r=new Uint8Array(256);!function(){let e=1;for(let t=0;t<255;t++)n[t]=e,r[e]=t,e<<=1,256&e&&(e^=285);for(let t=255;t<512;t++)n[t]=n[t-255]}(),t.log=function(e){if(e<1)throw new Error("log("+e+")");return r[e]},t.exp=function(e){return n[e]},t.mul=function(e,t){return 0===e||0===t?0:n[r[e]+r[t]]}},5200:(e,t,n)=>{const r=n(7421),i=n(7969);function o(e){this.mode=r.KANJI,this.data=e}o.getBitsLength=function(e){return 13*e},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let n=i.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else{if(!(n>=57408&&n<=60351))throw new Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");n-=49472}n=192*(n>>>8&255)+(255&n),e.put(n,13)}},e.exports=o},4833:(e,t)=>{t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const n=3,r=3,i=40,o=10;function a(e,n,r){switch(e){case t.Patterns.PATTERN000:return(n+r)%2===0;case t.Patterns.PATTERN001:return n%2===0;case t.Patterns.PATTERN010:return r%3===0;case t.Patterns.PATTERN011:return(n+r)%3===0;case t.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(r/3))%2===0;case t.Patterns.PATTERN101:return n*r%2+n*r%3===0;case t.Patterns.PATTERN110:return(n*r%2+n*r%3)%2===0;case t.Patterns.PATTERN111:return(n*r%3+(n+r)%2)%2===0;default:throw new Error("bad maskPattern:"+e)}}t.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(e){const t=e.size;let r=0,i=0,o=0,a=null,s=null;for(let l=0;l<t;l++){i=o=0,a=s=null;for(let c=0;c<t;c++){let t=e.get(l,c);t===a?i++:(i>=5&&(r+=n+(i-5)),a=t,i=1),t=e.get(c,l),t===s?o++:(o>=5&&(r+=n+(o-5)),s=t,o=1)}i>=5&&(r+=n+(i-5)),o>=5&&(r+=n+(o-5))}return r},t.getPenaltyN2=function(e){const t=e.size;let n=0;for(let r=0;r<t-1;r++)for(let i=0;i<t-1;i++){const t=e.get(r,i)+e.get(r,i+1)+e.get(r+1,i)+e.get(r+1,i+1);4!==t&&0!==t||n++}return n*r},t.getPenaltyN3=function(e){const t=e.size;let n=0,r=0,o=0;for(let i=0;i<t;i++){r=o=0;for(let a=0;a<t;a++)r=r<<1&2047|e.get(i,a),a>=10&&(1488===r||93===r)&&n++,o=o<<1&2047|e.get(a,i),a>=10&&(1488===o||93===o)&&n++}return n*i},t.getPenaltyN4=function(e){let t=0;const n=e.data.length;for(let r=0;r<n;r++)t+=e.data[r];return Math.abs(Math.ceil(100*t/n/5)-10)*o},t.applyMask=function(e,t){const n=t.size;for(let r=0;r<n;r++)for(let i=0;i<n;i++)t.isReserved(i,r)||t.xor(i,r,a(e,i,r))},t.getBestMask=function(e,n){const r=Object.keys(t.Patterns).length;let i=0,o=1/0;for(let a=0;a<r;a++){n(a),t.applyMask(a,e);const r=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(a,e),r<o&&(o=r,i=a)}return i}},7421:(e,t,n)=>{const r=n(3257),i=n(8511);t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(e,t){if(!e.ccBits)throw new Error("Invalid mode: "+e);if(!r.isValid(t))throw new Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]},t.getBestModeForData=function(e){return i.testNumeric(e)?t.NUMERIC:i.testAlphanumeric(e)?t.ALPHANUMERIC:i.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(e){if(e&&e.id)return e.id;throw new Error("Invalid mode")},t.isValid=function(e){return e&&e.bit&&e.ccBits},t.from=function(e,n){if(t.isValid(e))return e;try{return function(e){if("string"!==typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+e)}}(e)}catch(r){return n}}},900:(e,t,n)=>{const r=n(7421);function i(e){this.mode=r.NUMERIC,this.data=e.toString()}i.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t,n,r;for(t=0;t+3<=this.data.length;t+=3)n=this.data.substr(t,3),r=parseInt(n,10),e.put(r,10);const i=this.data.length-t;i>0&&(n=this.data.substr(t),r=parseInt(n,10),e.put(r,3*i+1))},e.exports=i},1312:(e,t,n)=>{const r=n(1166);t.mul=function(e,t){const n=new Uint8Array(e.length+t.length-1);for(let i=0;i<e.length;i++)for(let o=0;o<t.length;o++)n[i+o]^=r.mul(e[i],t[o]);return n},t.mod=function(e,t){let n=new Uint8Array(e);for(;n.length-t.length>=0;){const e=n[0];for(let o=0;o<t.length;o++)n[o]^=r.mul(t[o],e);let i=0;for(;i<n.length&&0===n[i];)i++;n=n.slice(i)}return n},t.generateECPolynomial=function(e){let n=new Uint8Array([1]);for(let i=0;i<e;i++)n=t.mul(n,new Uint8Array([1,r.exp(i)]));return n}},4772:(e,t,n)=>{const r=n(7969),i=n(6272),o=n(4566),a=n(4661),s=n(9382),l=n(9021),c=n(4833),u=n(1805),d=n(8177),h=n(4980),f=n(350),p=n(7421),m=n(4004);function g(e,t,n){const r=e.size,i=f.getEncodedBits(t,n);let o,a;for(o=0;o<15;o++)a=1===(i>>o&1),o<6?e.set(o,8,a,!0):o<8?e.set(o+1,8,a,!0):e.set(r-15+o,8,a,!0),o<8?e.set(8,r-o-1,a,!0):o<9?e.set(8,15-o-1+1,a,!0):e.set(8,15-o-1,a,!0);e.set(r-8,8,1,!0)}function y(e,t,n){const i=new o;n.forEach((function(t){i.put(t.mode.bit,4),i.put(t.getLength(),p.getCharCountIndicator(t.mode,e)),t.write(i)}));const a=8*(r.getSymbolTotalCodewords(e)-u.getTotalCodewordsCount(e,t));for(i.getLengthInBits()+4<=a&&i.put(0,4);i.getLengthInBits()%8!==0;)i.putBit(0);const s=(a-i.getLengthInBits())/8;for(let r=0;r<s;r++)i.put(r%2?17:236,8);return function(e,t,n){const i=r.getSymbolTotalCodewords(t),o=u.getTotalCodewordsCount(t,n),a=i-o,s=u.getBlocksCount(t,n),l=i%s,c=s-l,h=Math.floor(i/s),f=Math.floor(a/s),p=f+1,m=h-f,g=new d(m);let y=0;const v=new Array(s),w=new Array(s);let b=0;const x=new Uint8Array(e.buffer);for(let r=0;r<s;r++){const e=r<c?f:p;v[r]=x.slice(y,y+e),w[r]=g.encode(v[r]),y+=e,b=Math.max(b,e)}const E=new Uint8Array(i);let C,k,_=0;for(C=0;C<b;C++)for(k=0;k<s;k++)C<v[k].length&&(E[_++]=v[k][C]);for(C=0;C<m;C++)for(k=0;k<s;k++)E[_++]=w[k][C];return E}(i,e,t)}function v(e,t,n,i){let o;if(Array.isArray(e))o=m.fromArray(e);else{if("string"!==typeof e)throw new Error("Invalid data");{let r=t;if(!r){const t=m.rawSplit(e);r=h.getBestVersionForData(t,n)}o=m.fromString(e,r||40)}}const u=h.getBestVersionForData(o,n);if(!u)throw new Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<u)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+u+".\n")}else t=u;const d=y(t,n,o),f=r.getSymbolSize(t),p=new a(f);return function(e,t){const n=e.size,r=l.getPositions(t);for(let i=0;i<r.length;i++){const t=r[i][0],o=r[i][1];for(let r=-1;r<=7;r++)if(!(t+r<=-1||n<=t+r))for(let i=-1;i<=7;i++)o+i<=-1||n<=o+i||(r>=0&&r<=6&&(0===i||6===i)||i>=0&&i<=6&&(0===r||6===r)||r>=2&&r<=4&&i>=2&&i<=4?e.set(t+r,o+i,!0,!0):e.set(t+r,o+i,!1,!0))}}(p,t),function(e){const t=e.size;for(let n=8;n<t-8;n++){const t=n%2===0;e.set(n,6,t,!0),e.set(6,n,t,!0)}}(p),function(e,t){const n=s.getPositions(t);for(let r=0;r<n.length;r++){const t=n[r][0],i=n[r][1];for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)-2===n||2===n||-2===r||2===r||0===n&&0===r?e.set(t+n,i+r,!0,!0):e.set(t+n,i+r,!1,!0)}}(p,t),g(p,n,0),t>=7&&function(e,t){const n=e.size,r=h.getEncodedBits(t);let i,o,a;for(let s=0;s<18;s++)i=Math.floor(s/3),o=s%3+n-8-3,a=1===(r>>s&1),e.set(i,o,a,!0),e.set(o,i,a,!0)}(p,t),function(e,t){const n=e.size;let r=-1,i=n-1,o=7,a=0;for(let s=n-1;s>0;s-=2)for(6===s&&s--;;){for(let n=0;n<2;n++)if(!e.isReserved(i,s-n)){let r=!1;a<t.length&&(r=1===(t[a]>>>o&1)),e.set(i,s-n,r),o--,-1===o&&(a++,o=7)}if(i+=r,i<0||n<=i){i-=r,r=-r;break}}}(p,d),isNaN(i)&&(i=c.getBestMask(p,g.bind(null,p,n))),c.applyMask(i,p),g(p,n,i),{modules:p,version:t,errorCorrectionLevel:n,maskPattern:i,segments:o}}t.create=function(e,t){if("undefined"===typeof e||""===e)throw new Error("No input text");let n,o,a=i.M;return"undefined"!==typeof t&&(a=i.from(t.errorCorrectionLevel,i.M),n=h.from(t.version),o=c.from(t.maskPattern),t.toSJISFunc&&r.setToSJISFunction(t.toSJISFunc)),v(e,n,a,o)}},8177:(e,t,n)=>{const r=n(1312);function i(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}i.prototype.initialize=function(e){this.degree=e,this.genPoly=r.generateECPolynomial(this.degree)},i.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const t=new Uint8Array(e.length+this.degree);t.set(e);const n=r.mod(t,this.genPoly),i=this.degree-n.length;if(i>0){const e=new Uint8Array(this.degree);return e.set(n,i),e}return n},e.exports=i},8511:(e,t)=>{const n="[0-9]+";let r="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";r=r.replace(/u/g,"\\u");const i="(?:(?![A-Z0-9 $%*+\\-./:]|"+r+")(?:.|[\r\n]))+";t.KANJI=new RegExp(r,"g"),t.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),t.BYTE=new RegExp(i,"g"),t.NUMERIC=new RegExp(n,"g"),t.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");const o=new RegExp("^"+r+"$"),a=new RegExp("^"+n+"$"),s=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");t.testKanji=function(e){return o.test(e)},t.testNumeric=function(e){return a.test(e)},t.testAlphanumeric=function(e){return s.test(e)}},4004:(e,t,n)=>{const r=n(7421),i=n(900),o=n(9642),a=n(8697),s=n(5200),l=n(8511),c=n(7969),u=n(7347);function d(e){return unescape(encodeURIComponent(e)).length}function h(e,t,n){const r=[];let i;for(;null!==(i=e.exec(n));)r.push({data:i[0],index:i.index,mode:t,length:i[0].length});return r}function f(e){const t=h(l.NUMERIC,r.NUMERIC,e),n=h(l.ALPHANUMERIC,r.ALPHANUMERIC,e);let i,o;c.isKanjiModeEnabled()?(i=h(l.BYTE,r.BYTE,e),o=h(l.KANJI,r.KANJI,e)):(i=h(l.BYTE_KANJI,r.BYTE,e),o=[]);return t.concat(n,i,o).sort((function(e,t){return e.index-t.index})).map((function(e){return{data:e.data,mode:e.mode,length:e.length}}))}function p(e,t){switch(t){case r.NUMERIC:return i.getBitsLength(e);case r.ALPHANUMERIC:return o.getBitsLength(e);case r.KANJI:return s.getBitsLength(e);case r.BYTE:return a.getBitsLength(e)}}function m(e,t){let n;const l=r.getBestModeForData(e);if(n=r.from(t,l),n!==r.BYTE&&n.bit<l.bit)throw new Error('"'+e+'" cannot be encoded with mode '+r.toString(n)+".\n Suggested mode is: "+r.toString(l));switch(n!==r.KANJI||c.isKanjiModeEnabled()||(n=r.BYTE),n){case r.NUMERIC:return new i(e);case r.ALPHANUMERIC:return new o(e);case r.KANJI:return new s(e);case r.BYTE:return new a(e)}}t.fromArray=function(e){return e.reduce((function(e,t){return"string"===typeof t?e.push(m(t,null)):t.data&&e.push(m(t.data,t.mode)),e}),[])},t.fromString=function(e,n){const i=function(e){const t=[];for(let n=0;n<e.length;n++){const i=e[n];switch(i.mode){case r.NUMERIC:t.push([i,{data:i.data,mode:r.ALPHANUMERIC,length:i.length},{data:i.data,mode:r.BYTE,length:i.length}]);break;case r.ALPHANUMERIC:t.push([i,{data:i.data,mode:r.BYTE,length:i.length}]);break;case r.KANJI:t.push([i,{data:i.data,mode:r.BYTE,length:d(i.data)}]);break;case r.BYTE:t.push([{data:i.data,mode:r.BYTE,length:d(i.data)}])}}return t}(f(e,c.isKanjiModeEnabled())),o=function(e,t){const n={},i={start:{}};let o=["start"];for(let a=0;a<e.length;a++){const s=e[a],l=[];for(let e=0;e<s.length;e++){const c=s[e],u=""+a+e;l.push(u),n[u]={node:c,lastCount:0},i[u]={};for(let e=0;e<o.length;e++){const a=o[e];n[a]&&n[a].node.mode===c.mode?(i[a][u]=p(n[a].lastCount+c.length,c.mode)-p(n[a].lastCount,c.mode),n[a].lastCount+=c.length):(n[a]&&(n[a].lastCount=c.length),i[a][u]=p(c.length,c.mode)+4+r.getCharCountIndicator(c.mode,t))}}o=l}for(let r=0;r<o.length;r++)i[o[r]].end=0;return{map:i,table:n}}(i,n),a=u.find_path(o.map,"start","end"),s=[];for(let t=1;t<a.length-1;t++)s.push(o.table[a[t]].node);return t.fromArray(function(e){return e.reduce((function(e,t){const n=e.length-1>=0?e[e.length-1]:null;return n&&n.mode===t.mode?(e[e.length-1].data+=t.data,e):(e.push(t),e)}),[])}(s))},t.rawSplit=function(e){return t.fromArray(f(e,c.isKanjiModeEnabled()))}},7969:(e,t)=>{let n;const r=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];t.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return 4*e+17},t.getSymbolTotalCodewords=function(e){return r[e]},t.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},t.setToSJISFunction=function(e){if("function"!==typeof e)throw new Error('"toSJISFunc" is not a valid function.');n=e},t.isKanjiModeEnabled=function(){return"undefined"!==typeof n},t.toSJIS=function(e){return n(e)}},3257:(e,t)=>{t.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}},4980:(e,t,n)=>{const r=n(7969),i=n(1805),o=n(6272),a=n(7421),s=n(3257),l=r.getBCHDigit(7973);function c(e,t){return a.getCharCountIndicator(e,t)+4}function u(e,t){let n=0;return e.forEach((function(e){const r=c(e.mode,t);n+=r+e.getBitsLength()})),n}t.from=function(e,t){return s.isValid(e)?parseInt(e,10):t},t.getCapacity=function(e,t,n){if(!s.isValid(e))throw new Error("Invalid QR Code version");"undefined"===typeof n&&(n=a.BYTE);const o=8*(r.getSymbolTotalCodewords(e)-i.getTotalCodewordsCount(e,t));if(n===a.MIXED)return o;const l=o-c(n,e);switch(n){case a.NUMERIC:return Math.floor(l/10*3);case a.ALPHANUMERIC:return Math.floor(l/11*2);case a.KANJI:return Math.floor(l/13);case a.BYTE:default:return Math.floor(l/8)}},t.getBestVersionForData=function(e,n){let r;const i=o.from(n,o.M);if(Array.isArray(e)){if(e.length>1)return function(e,n){for(let r=1;r<=40;r++)if(u(e,r)<=t.getCapacity(r,n,a.MIXED))return r}(e,i);if(0===e.length)return 1;r=e[0]}else r=e;return function(e,n,r){for(let i=1;i<=40;i++)if(n<=t.getCapacity(i,r,e))return i}(r.mode,r.getLength(),i)},t.getEncodedBits=function(e){if(!s.isValid(e)||e<7)throw new Error("Invalid QR Code version");let t=e<<12;for(;r.getBCHDigit(t)-l>=0;)t^=7973<<r.getBCHDigit(t)-l;return e<<12|t}},2182:(e,t,n)=>{const r=n(8293);t.render=function(e,t,n){let i=n,o=t;"undefined"!==typeof i||t&&t.getContext||(i=t,t=void 0),t||(o=function(){try{return document.createElement("canvas")}catch(e){throw new Error("You need to specify a canvas element")}}()),i=r.getOptions(i);const a=r.getImageWidth(e.modules.size,i),s=o.getContext("2d"),l=s.createImageData(a,a);return r.qrToImageData(l.data,e,i),function(e,t,n){e.clearRect(0,0,t.width,t.height),t.style||(t.style={}),t.height=n,t.width=n,t.style.height=n+"px",t.style.width=n+"px"}(s,o,a),s.putImageData(l,0,0),o},t.renderToDataURL=function(e,n,r){let i=r;"undefined"!==typeof i||n&&n.getContext||(i=n,n=void 0),i||(i={});const o=t.render(e,n,i),a=i.type||"image/png",s=i.rendererOpts||{};return o.toDataURL(a,s.quality)}},5487:(e,t,n)=>{const r=n(8293);function i(e,t){const n=e.a/255,r=t+'="'+e.hex+'"';return n<1?r+" "+t+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function o(e,t,n){let r=e+t;return"undefined"!==typeof n&&(r+=" "+n),r}t.render=function(e,t,n){const a=r.getOptions(t),s=e.modules.size,l=e.modules.data,c=s+2*a.margin,u=a.color.light.a?"<path "+i(a.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",d="<path "+i(a.color.dark,"stroke")+' d="'+function(e,t,n){let r="",i=0,a=!1,s=0;for(let l=0;l<e.length;l++){const c=Math.floor(l%t),u=Math.floor(l/t);c||a||(a=!0),e[l]?(s++,l>0&&c>0&&e[l-1]||(r+=a?o("M",c+n,.5+u+n):o("m",i,0),i=0,a=!1),c+1<t&&e[l+1]||(r+=o("h",s),s=0)):i++}return r}(l,s,a.margin)+'"/>',h='viewBox="0 0 '+c+" "+c+'"',f='<svg xmlns="http://www.w3.org/2000/svg" '+(a.width?'width="'+a.width+'" height="'+a.width+'" ':"")+h+' shape-rendering="crispEdges">'+u+d+"</svg>\n";return"function"===typeof n&&n(null,f),f}},8293:(e,t)=>{function n(e){if("number"===typeof e&&(e=e.toString()),"string"!==typeof e)throw new Error("Color should be defined as hex string");let t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw new Error("Invalid hex color: "+e);3!==t.length&&4!==t.length||(t=Array.prototype.concat.apply([],t.map((function(e){return[e,e]})))),6===t.length&&t.push("F","F");const n=parseInt(t.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:255&n,hex:"#"+t.slice(0,6).join("")}}t.getOptions=function(e){e||(e={}),e.color||(e.color={});const t="undefined"===typeof e.margin||null===e.margin||e.margin<0?4:e.margin,r=e.width&&e.width>=21?e.width:void 0,i=e.scale||4;return{width:r,scale:r?4:i,margin:t,color:{dark:n(e.color.dark||"#000000ff"),light:n(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},t.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},t.getImageWidth=function(e,n){const r=t.getScale(e,n);return Math.floor((e+2*n.margin)*r)},t.qrToImageData=function(e,n,r){const i=n.modules.size,o=n.modules.data,a=t.getScale(i,r),s=Math.floor((i+2*r.margin)*a),l=r.margin*a,c=[r.color.light,r.color.dark];for(let t=0;t<s;t++)for(let n=0;n<s;n++){let u=4*(t*s+n),d=r.color.light;if(t>=l&&n>=l&&t<s-l&&n<s-l){d=c[o[Math.floor((t-l)/a)*i+Math.floor((n-l)/a)]?1:0]}e[u++]=d.r,e[u++]=d.g,e[u++]=d.b,e[u]=d.a}}},2730:(e,t,n)=>{"use strict";var r=n(5043),i=n(8853);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function l(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(s[e]=t,e=0;e<t.length;e++)a.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},p={};function m(e,t,n,r,i,o,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var y=/[\-:]([a-z])/g;function v(e){return e[1].toUpperCase()}function w(e,t,n,r){var i=g.hasOwnProperty(t)?g[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!d.call(p,e)||!d.call(f,e)&&(h.test(e)?p[e]=!0:(f[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(y,v);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(y,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(y,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,x=Symbol.for("react.element"),E=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),P=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),N=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var R=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var M=Symbol.iterator;function $(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=M&&e[M]||e["@@iterator"])?e:null}var j,U=Object.assign;function L(e){if(void 0===j)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);j=t&&t[1]||""}return"\n"+j+e}var D=!1;function B(e,t){if(!e||D)return"";D=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&"string"===typeof c.stack){for(var i=c.stack.split("\n"),o=r.stack.split("\n"),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(1!==a||1!==s)do{if(a--,0>--s||i[a]!==o[s]){var l="\n"+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=a&&0<=s);break}}}finally{D=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?L(e):""}function F(e){switch(e.tag){case 5:return L(e.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return e=B(e.type,!1);case 11:return e=B(e.type.render,!1);case 1:return e=B(e.type,!0);default:return""}}function W(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case C:return"Fragment";case E:return"Portal";case _:return"Profiler";case k:return"StrictMode";case T:return"Suspense";case I:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case P:return(e.displayName||"Context")+".Consumer";case S:return(e._context.displayName||"Context")+".Provider";case A:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case O:return null!==(t=e.displayName||null)?t:W(e.type)||"Memo";case N:t=e._payload,e=e._init;try{return W(e(t))}catch(n){}}return null}function z(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return W(t);case 8:return t===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function q(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function H(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Z(e){e._valueTracker||(e._valueTracker=function(e){var t=H(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function V(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=H(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function K(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function G(e,t){var n=t.checked;return U({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Y(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=q(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function J(e,t){null!=(t=t.checked)&&w(e,"checked",t,!1)}function Q(e,t){J(e,t);var n=q(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,q(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function X(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&K(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+q(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return U({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ie(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(te(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:q(n)}}function oe(e,t){var n=q(t.value),r=q(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ae(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?se(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,ue,de=(ue=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ue(e,t)}))}:ue);function he(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pe=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||fe.hasOwnProperty(e)&&fe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(fe).forEach((function(e){pe.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fe[t]=fe[e]}))}));var ye=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ve(e,t){if(t){if(ye[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(o(62))}}function we(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function xe(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Ee=null,Ce=null,ke=null;function _e(e){if(e=wi(e)){if("function"!==typeof Ee)throw Error(o(280));var t=e.stateNode;t&&(t=xi(t),Ee(e.stateNode,e.type,t))}}function Se(e){Ce?ke?ke.push(e):ke=[e]:Ce=e}function Pe(){if(Ce){var e=Ce,t=ke;if(ke=Ce=null,_e(e),t)for(e=0;e<t.length;e++)_e(t[e])}}function Ae(e,t){return e(t)}function Te(){}var Ie=!1;function Oe(e,t,n){if(Ie)return e(t,n);Ie=!0;try{return Ae(e,t,n)}finally{Ie=!1,(null!==Ce||null!==ke)&&(Te(),Pe())}}function Ne(e,t){var n=e.stateNode;if(null===n)return null;var r=xi(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Re=!1;if(u)try{var Me={};Object.defineProperty(Me,"passive",{get:function(){Re=!0}}),window.addEventListener("test",Me,Me),window.removeEventListener("test",Me,Me)}catch(ue){Re=!1}function $e(e,t,n,r,i,o,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var je=!1,Ue=null,Le=!1,De=null,Be={onError:function(e){je=!0,Ue=e}};function Fe(e,t,n,r,i,o,a,s,l){je=!1,Ue=null,$e.apply(Be,arguments)}function We(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function ze(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function qe(e){if(We(e)!==e)throw Error(o(188))}function He(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=We(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(r=i.return)){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return qe(i),e;if(a===r)return qe(i),t;a=a.sibling}throw Error(o(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=a;break}if(l===r){s=!0,r=i,n=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===n){s=!0,n=a,r=i;break}if(l===r){s=!0,r=a,n=i;break}l=l.sibling}if(!s)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e))?Ze(e):null}function Ze(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ze(e);if(null!==t)return t;e=e.sibling}return null}var Ve=i.unstable_scheduleCallback,Ke=i.unstable_cancelCallback,Ge=i.unstable_shouldYield,Ye=i.unstable_requestPaint,Je=i.unstable_now,Qe=i.unstable_getCurrentPriorityLevel,Xe=i.unstable_ImmediatePriority,et=i.unstable_UserBlockingPriority,tt=i.unstable_NormalPriority,nt=i.unstable_LowPriority,rt=i.unstable_IdlePriority,it=null,ot=null;var at=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(st(e)/lt|0)|0},st=Math.log,lt=Math.LN2;var ct=64,ut=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ht(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=268435455&n;if(0!==a){var s=a&~i;0!==s?r=dt(s):0!==(o&=a)&&(r=dt(o))}else 0!==(a=n&~i)?r=dt(a):0!==o&&(r=dt(o));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&i)&&((i=r&-r)>=(o=t&-t)||16===i&&0!==(4194240&o)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-at(t)),r|=e[n],t&=~i;return r}function ft(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function pt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-at(t)]=n}function vt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var wt=0;function bt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var xt,Et,Ct,kt,_t,St=!1,Pt=[],At=null,Tt=null,It=null,Ot=new Map,Nt=new Map,Rt=[],Mt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $t(e,t){switch(e){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":Ot.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nt.delete(t.pointerId)}}function jt(e,t,n,r,i,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},null!==t&&(null!==(t=wi(t))&&Et(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Ut(e){var t=vi(e.target);if(null!==t){var n=We(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=ze(n)))return e.blockedOn=t,void _t(e.priority,(function(){Ct(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Lt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=wi(n))&&Et(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);be=r,n.target.dispatchEvent(r),be=null,t.shift()}return!0}function Dt(e,t,n){Lt(e)&&n.delete(t)}function Bt(){St=!1,null!==At&&Lt(At)&&(At=null),null!==Tt&&Lt(Tt)&&(Tt=null),null!==It&&Lt(It)&&(It=null),Ot.forEach(Dt),Nt.forEach(Dt)}function Ft(e,t){e.blockedOn===t&&(e.blockedOn=null,St||(St=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Bt)))}function Wt(e){function t(t){return Ft(t,e)}if(0<Pt.length){Ft(Pt[0],e);for(var n=1;n<Pt.length;n++){var r=Pt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==At&&Ft(At,e),null!==Tt&&Ft(Tt,e),null!==It&&Ft(It,e),Ot.forEach(t),Nt.forEach(t),n=0;n<Rt.length;n++)(r=Rt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&null===(n=Rt[0]).blockedOn;)Ut(n),null===n.blockedOn&&Rt.shift()}var zt=b.ReactCurrentBatchConfig,qt=!0;function Ht(e,t,n,r){var i=wt,o=zt.transition;zt.transition=null;try{wt=1,Vt(e,t,n,r)}finally{wt=i,zt.transition=o}}function Zt(e,t,n,r){var i=wt,o=zt.transition;zt.transition=null;try{wt=4,Vt(e,t,n,r)}finally{wt=i,zt.transition=o}}function Vt(e,t,n,r){if(qt){var i=Gt(e,t,n,r);if(null===i)qr(e,t,r,Kt,n),$t(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return At=jt(At,e,t,n,r,i),!0;case"dragenter":return Tt=jt(Tt,e,t,n,r,i),!0;case"mouseover":return It=jt(It,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ot.set(o,jt(Ot.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Nt.set(o,jt(Nt.get(o)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if($t(e,r),4&t&&-1<Mt.indexOf(e)){for(;null!==i;){var o=wi(i);if(null!==o&&xt(o),null===(o=Gt(e,t,n,r))&&qr(e,t,r,Kt,n),o===i)break;i=o}null!==i&&r.stopPropagation()}else qr(e,t,r,null,n)}}var Kt=null;function Gt(e,t,n,r){if(Kt=null,null!==(e=vi(e=xe(r))))if(null===(t=We(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=ze(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Kt=e,null}function Yt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qe()){case Xe:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Jt=null,Qt=null,Xt=null;function en(){if(Xt)return Xt;var e,t,n=Qt,r=n.length,i="value"in Jt?Jt.value:Jt.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[o-t];t++);return Xt=i.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function on(e){function t(t,n,r,i,o){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var an,sn,ln,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},un=on(cn),dn=U({},cn,{view:0,detail:0}),hn=on(dn),fn=U({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_n,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ln&&(ln&&"mousemove"===e.type?(an=e.screenX-ln.screenX,sn=e.screenY-ln.screenY):sn=an=0,ln=e),an)},movementY:function(e){return"movementY"in e?e.movementY:sn}}),pn=on(fn),mn=on(U({},fn,{dataTransfer:0})),gn=on(U({},dn,{relatedTarget:0})),yn=on(U({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),vn=U({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wn=on(vn),bn=on(U({},cn,{data:0})),xn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},En={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Cn[e])&&!!t[e]}function _n(){return kn}var Sn=U({},dn,{key:function(e){if(e.key){var t=xn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?En[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_n,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Pn=on(Sn),An=on(U({},fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Tn=on(U({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_n})),In=on(U({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),On=U({},fn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nn=on(On),Rn=[9,13,27,32],Mn=u&&"CompositionEvent"in window,$n=null;u&&"documentMode"in document&&($n=document.documentMode);var jn=u&&"TextEvent"in window&&!$n,Un=u&&(!Mn||$n&&8<$n&&11>=$n),Ln=String.fromCharCode(32),Dn=!1;function Bn(e,t){switch(e){case"keyup":return-1!==Rn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Wn=!1;var zn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!zn[e.type]:"textarea"===t}function Hn(e,t,n,r){Se(r),0<(t=Zr(t,"onChange")).length&&(n=new un("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Zn=null,Vn=null;function Kn(e){Lr(e,0)}function Gn(e){if(V(bi(e)))return e}function Yn(e,t){if("change"===e)return t}var Jn=!1;if(u){var Qn;if(u){var Xn="oninput"in document;if(!Xn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Xn="function"===typeof er.oninput}Qn=Xn}else Qn=!1;Jn=Qn&&(!document.documentMode||9<document.documentMode)}function tr(){Zn&&(Zn.detachEvent("onpropertychange",nr),Vn=Zn=null)}function nr(e){if("value"===e.propertyName&&Gn(Vn)){var t=[];Hn(t,Vn,e,xe(e)),Oe(Kn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Vn=n,(Zn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ir(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Gn(Vn)}function or(e,t){if("click"===e)return Gn(t)}function ar(e,t){if("input"===e||"change"===e)return Gn(t)}var sr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function lr(e,t){if(sr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!d.call(t,i)||!sr(e[i],t[i]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ur(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function hr(){for(var e=window,t=K();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=K((e=t.contentWindow).document)}return t}function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function pr(e){var t=hr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&fr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=void 0===r.end?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ur(n,o);var a=ur(n,r);i&&a&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=u&&"documentMode"in document&&11>=document.documentMode,gr=null,yr=null,vr=null,wr=!1;function br(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;wr||null==gr||gr!==K(r)||("selectionStart"in(r=gr)&&fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},vr&&lr(vr,r)||(vr=r,0<(r=Zr(yr,"onSelect")).length&&(t=new un("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function xr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Er={animationend:xr("Animation","AnimationEnd"),animationiteration:xr("Animation","AnimationIteration"),animationstart:xr("Animation","AnimationStart"),transitionend:xr("Transition","TransitionEnd")},Cr={},kr={};function _r(e){if(Cr[e])return Cr[e];if(!Er[e])return e;var t,n=Er[e];for(t in n)if(n.hasOwnProperty(t)&&t in kr)return Cr[e]=n[t];return e}u&&(kr=document.createElement("div").style,"AnimationEvent"in window||(delete Er.animationend.animation,delete Er.animationiteration.animation,delete Er.animationstart.animation),"TransitionEvent"in window||delete Er.transitionend.transition);var Sr=_r("animationend"),Pr=_r("animationiteration"),Ar=_r("animationstart"),Tr=_r("transitionend"),Ir=new Map,Or="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(e,t){Ir.set(e,t),l(t,[e])}for(var Rr=0;Rr<Or.length;Rr++){var Mr=Or[Rr];Nr(Mr.toLowerCase(),"on"+(Mr[0].toUpperCase()+Mr.slice(1)))}Nr(Sr,"onAnimationEnd"),Nr(Pr,"onAnimationIteration"),Nr(Ar,"onAnimationStart"),Nr("dblclick","onDoubleClick"),Nr("focusin","onFocus"),Nr("focusout","onBlur"),Nr(Tr,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jr=new Set("cancel close invalid load scroll toggle".split(" ").concat($r));function Ur(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,a,s,l,c){if(Fe.apply(this,arguments),je){if(!je)throw Error(o(198));var u=Ue;je=!1,Ue=null,Le||(Le=!0,De=u)}}(r,t,void 0,e),e.currentTarget=null}function Lr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Ur(i,s,c),o=l}else for(a=0;a<r.length;a++){if(l=(s=r[a]).instance,c=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Ur(i,s,c),o=l}}}if(Le)throw e=De,Le=!1,De=null,e}function Dr(e,t){var n=t[mi];void 0===n&&(n=t[mi]=new Set);var r=e+"__bubble";n.has(r)||(zr(t,e,2,!1),n.add(r))}function Br(e,t,n){var r=0;t&&(r|=4),zr(n,e,r,t)}var Fr="_reactListening"+Math.random().toString(36).slice(2);function Wr(e){if(!e[Fr]){e[Fr]=!0,a.forEach((function(t){"selectionchange"!==t&&(jr.has(t)||Br(t,!1,e),Br(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Fr]||(t[Fr]=!0,Br("selectionchange",!1,t))}}function zr(e,t,n,r){switch(Yt(t)){case 1:var i=Ht;break;case 4:i=Zt;break;default:i=Vt}n=i.bind(null,t,n,e),i=void 0,!Re||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function qr(e,t,n,r,i){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var s=r.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===a)for(a=r.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;a=a.return}for(;null!==s;){if(null===(a=vi(s)))return;if(5===(l=a.tag)||6===l){r=o=a;continue e}s=s.parentNode}}r=r.return}Oe((function(){var r=o,i=xe(n),a=[];e:{var s=Ir.get(e);if(void 0!==s){var l=un,c=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":l=Pn;break;case"focusin":c="focus",l=gn;break;case"focusout":c="blur",l=gn;break;case"beforeblur":case"afterblur":l=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=pn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Tn;break;case Sr:case Pr:case Ar:l=yn;break;case Tr:l=In;break;case"scroll":l=hn;break;case"wheel":l=Nn;break;case"copy":case"cut":case"paste":l=wn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=An}var u=0!==(4&t),d=!u&&"scroll"===e,h=u?null!==s?s+"Capture":null:s;u=[];for(var f,p=r;null!==p;){var m=(f=p).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==h&&(null!=(m=Ne(p,h))&&u.push(Hr(p,m,f)))),d)break;p=p.return}0<u.length&&(s=new l(s,c,null,n,i),a.push({event:s,listeners:u}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===be||!(c=n.relatedTarget||n.fromElement)||!vi(c)&&!c[pi])&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(c=(c=n.relatedTarget||n.toElement)?vi(c):null)&&(c!==(d=We(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=r),l!==c)){if(u=pn,m="onMouseLeave",h="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(u=An,m="onPointerLeave",h="onPointerEnter",p="pointer"),d=null==l?s:bi(l),f=null==c?s:bi(c),(s=new u(m,p+"leave",l,n,i)).target=d,s.relatedTarget=f,m=null,vi(i)===r&&((u=new u(h,p+"enter",c,n,i)).target=f,u.relatedTarget=d,m=u),d=m,l&&c)e:{for(h=c,p=0,f=u=l;f;f=Vr(f))p++;for(f=0,m=h;m;m=Vr(m))f++;for(;0<p-f;)u=Vr(u),p--;for(;0<f-p;)h=Vr(h),f--;for(;p--;){if(u===h||null!==h&&u===h.alternate)break e;u=Vr(u),h=Vr(h)}u=null}else u=null;null!==l&&Kr(a,s,l,u,!1),null!==c&&null!==d&&Kr(a,d,c,u,!0)}if("select"===(l=(s=r?bi(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=Yn;else if(qn(s))if(Jn)g=ar;else{g=ir;var y=rr}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=or);switch(g&&(g=g(e,r))?Hn(a,g,n,i):(y&&y(e,s,r),"focusout"===e&&(y=s._wrapperState)&&y.controlled&&"number"===s.type&&ee(s,"number",s.value)),y=r?bi(r):window,e){case"focusin":(qn(y)||"true"===y.contentEditable)&&(gr=y,yr=r,vr=null);break;case"focusout":vr=yr=gr=null;break;case"mousedown":wr=!0;break;case"contextmenu":case"mouseup":case"dragend":wr=!1,br(a,n,i);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":br(a,n,i)}var v;if(Mn)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Wn?Bn(e,n)&&(w="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(w="onCompositionStart");w&&(Un&&"ko"!==n.locale&&(Wn||"onCompositionStart"!==w?"onCompositionEnd"===w&&Wn&&(v=en()):(Qt="value"in(Jt=i)?Jt.value:Jt.textContent,Wn=!0)),0<(y=Zr(r,w)).length&&(w=new bn(w,e,null,n,i),a.push({event:w,listeners:y}),v?w.data=v:null!==(v=Fn(n))&&(w.data=v))),(v=jn?function(e,t){switch(e){case"compositionend":return Fn(t);case"keypress":return 32!==t.which?null:(Dn=!0,Ln);case"textInput":return(e=t.data)===Ln&&Dn?null:e;default:return null}}(e,n):function(e,t){if(Wn)return"compositionend"===e||!Mn&&Bn(e,t)?(e=en(),Xt=Qt=Jt=null,Wn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Un&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Zr(r,"onBeforeInput")).length&&(i=new bn("onBeforeInput","beforeinput",null,n,i),a.push({event:i,listeners:r}),i.data=v))}Lr(a,t)}))}function Hr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Zr(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,o=i.stateNode;5===i.tag&&null!==o&&(i=o,null!=(o=Ne(e,n))&&r.unshift(Hr(e,o,i)),null!=(o=Ne(e,t))&&r.push(Hr(e,o,i))),e=e.return}return r}function Vr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Kr(e,t,n,r,i){for(var o=t._reactName,a=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==c&&(s=c,i?null!=(l=Ne(n,o))&&a.unshift(Hr(n,l,s)):i||null!=(l=Ne(n,o))&&a.push(Hr(n,l,s))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Gr=/\r\n?/g,Yr=/\u0000|\uFFFD/g;function Jr(e){return("string"===typeof e?e:""+e).replace(Gr,"\n").replace(Yr,"")}function Qr(e,t,n){if(t=Jr(t),Jr(e)!==t&&n)throw Error(o(425))}function Xr(){}var ei=null,ti=null;function ni(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ri="function"===typeof setTimeout?setTimeout:void 0,ii="function"===typeof clearTimeout?clearTimeout:void 0,oi="function"===typeof Promise?Promise:void 0,ai="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof oi?function(e){return oi.resolve(null).then(e).catch(si)}:ri;function si(e){setTimeout((function(){throw e}))}function li(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void Wt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);Wt(t)}function ci(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ui(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var di=Math.random().toString(36).slice(2),hi="__reactFiber$"+di,fi="__reactProps$"+di,pi="__reactContainer$"+di,mi="__reactEvents$"+di,gi="__reactListeners$"+di,yi="__reactHandles$"+di;function vi(e){var t=e[hi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pi]||n[hi]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ui(e);null!==e;){if(n=e[hi])return n;e=ui(e)}return t}n=(e=n).parentNode}return null}function wi(e){return!(e=e[hi]||e[pi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function bi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function xi(e){return e[fi]||null}var Ei=[],Ci=-1;function ki(e){return{current:e}}function _i(e){0>Ci||(e.current=Ei[Ci],Ei[Ci]=null,Ci--)}function Si(e,t){Ci++,Ei[Ci]=e.current,e.current=t}var Pi={},Ai=ki(Pi),Ti=ki(!1),Ii=Pi;function Oi(e,t){var n=e.type.contextTypes;if(!n)return Pi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,o={};for(i in n)o[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ni(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Ri(){_i(Ti),_i(Ai)}function Mi(e,t,n){if(Ai.current!==Pi)throw Error(o(168));Si(Ai,t),Si(Ti,n)}function $i(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(o(108,z(e)||"Unknown",i));return U({},n,r)}function ji(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pi,Ii=Ai.current,Si(Ai,e),Si(Ti,Ti.current),!0}function Ui(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=$i(e,t,Ii),r.__reactInternalMemoizedMergedChildContext=e,_i(Ti),_i(Ai),Si(Ai,e)):_i(Ti),Si(Ti,n)}var Li=null,Di=!1,Bi=!1;function Fi(e){null===Li?Li=[e]:Li.push(e)}function Wi(){if(!Bi&&null!==Li){Bi=!0;var e=0,t=wt;try{var n=Li;for(wt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Li=null,Di=!1}catch(i){throw null!==Li&&(Li=Li.slice(e+1)),Ve(Xe,Wi),i}finally{wt=t,Bi=!1}}return null}var zi=[],qi=0,Hi=null,Zi=0,Vi=[],Ki=0,Gi=null,Yi=1,Ji="";function Qi(e,t){zi[qi++]=Zi,zi[qi++]=Hi,Hi=e,Zi=t}function Xi(e,t,n){Vi[Ki++]=Yi,Vi[Ki++]=Ji,Vi[Ki++]=Gi,Gi=e;var r=Yi;e=Ji;var i=32-at(r)-1;r&=~(1<<i),n+=1;var o=32-at(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Yi=1<<32-at(t)+i|n<<i|r,Ji=o+e}else Yi=1<<o|n<<i|r,Ji=e}function eo(e){null!==e.return&&(Qi(e,1),Xi(e,1,0))}function to(e){for(;e===Hi;)Hi=zi[--qi],zi[qi]=null,Zi=zi[--qi],zi[qi]=null;for(;e===Gi;)Gi=Vi[--Ki],Vi[Ki]=null,Ji=Vi[--Ki],Vi[Ki]=null,Yi=Vi[--Ki],Vi[Ki]=null}var no=null,ro=null,io=!1,oo=null;function ao(e,t){var n=Oc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function so(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,no=e,ro=ci(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,no=e,ro=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Gi?{id:Yi,overflow:Ji}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Oc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,no=e,ro=null,!0);default:return!1}}function lo(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function co(e){if(io){var t=ro;if(t){var n=t;if(!so(e,t)){if(lo(e))throw Error(o(418));t=ci(n.nextSibling);var r=no;t&&so(e,t)?ao(r,n):(e.flags=-4097&e.flags|2,io=!1,no=e)}}else{if(lo(e))throw Error(o(418));e.flags=-4097&e.flags|2,io=!1,no=e}}}function uo(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;no=e}function ho(e){if(e!==no)return!1;if(!io)return uo(e),io=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ni(e.type,e.memoizedProps)),t&&(t=ro)){if(lo(e))throw fo(),Error(o(418));for(;t;)ao(e,t),t=ci(t.nextSibling)}if(uo(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ro=ci(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ro=null}}else ro=no?ci(e.stateNode.nextSibling):null;return!0}function fo(){for(var e=ro;e;)e=ci(e.nextSibling)}function po(){ro=no=null,io=!1}function mo(e){null===oo?oo=[e]:oo.push(e)}var go=b.ReactCurrentBatchConfig;function yo(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var i=r,a=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===a?t.ref:(t=function(e){var t=i.refs;null===e?delete t[a]:t[a]=e},t._stringRef=a,t)}if("string"!==typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function vo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function wo(e){return(0,e._init)(e._payload)}function bo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Rc(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Uc(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function c(e,t,n,r){var o=n.type;return o===C?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===N&&wo(o)===t.type)?((r=i(t,n.props)).ref=yo(e,t,n),r.return=e,r):((r=Mc(n.type,n.key,n.props,null,e.mode,r)).ref=yo(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Lc(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=$c(n,e.mode,r,o)).return=e,t):((t=i(t,n)).return=e,t)}function h(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Uc(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case x:return(n=Mc(t.type,t.key,t.props,null,e.mode,n)).ref=yo(e,null,t),n.return=e,n;case E:return(t=Lc(t,e.mode,n)).return=e,t;case N:return h(e,(0,t._init)(t._payload),n)}if(te(t)||$(t))return(t=$c(t,e.mode,n,null)).return=e,t;vo(e,t)}return null}function f(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==i?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case x:return n.key===i?c(e,t,n,r):null;case E:return n.key===i?u(e,t,n,r):null;case N:return f(e,t,(i=n._init)(n._payload),r)}if(te(n)||$(n))return null!==i?null:d(e,t,n,r,null);vo(e,n)}return null}function p(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case x:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case E:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case N:return p(e,t,n,(0,r._init)(r._payload),i)}if(te(r)||$(r))return d(t,e=e.get(n)||null,r,i,null);vo(t,r)}return null}function m(i,o,s,l){for(var c=null,u=null,d=o,m=o=0,g=null;null!==d&&m<s.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var y=f(i,d,s[m],l);if(null===y){null===d&&(d=g);break}e&&d&&null===y.alternate&&t(i,d),o=a(y,o,m),null===u?c=y:u.sibling=y,u=y,d=g}if(m===s.length)return n(i,d),io&&Qi(i,m),c;if(null===d){for(;m<s.length;m++)null!==(d=h(i,s[m],l))&&(o=a(d,o,m),null===u?c=d:u.sibling=d,u=d);return io&&Qi(i,m),c}for(d=r(i,d);m<s.length;m++)null!==(g=p(d,i,m,s[m],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),o=a(g,o,m),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach((function(e){return t(i,e)})),io&&Qi(i,m),c}function g(i,s,l,c){var u=$(l);if("function"!==typeof u)throw Error(o(150));if(null==(l=u.call(l)))throw Error(o(151));for(var d=u=null,m=s,g=s=0,y=null,v=l.next();null!==m&&!v.done;g++,v=l.next()){m.index>g?(y=m,m=null):y=m.sibling;var w=f(i,m,v.value,c);if(null===w){null===m&&(m=y);break}e&&m&&null===w.alternate&&t(i,m),s=a(w,s,g),null===d?u=w:d.sibling=w,d=w,m=y}if(v.done)return n(i,m),io&&Qi(i,g),u;if(null===m){for(;!v.done;g++,v=l.next())null!==(v=h(i,v.value,c))&&(s=a(v,s,g),null===d?u=v:d.sibling=v,d=v);return io&&Qi(i,g),u}for(m=r(i,m);!v.done;g++,v=l.next())null!==(v=p(m,i,g,v.value,c))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),s=a(v,s,g),null===d?u=v:d.sibling=v,d=v);return e&&m.forEach((function(e){return t(i,e)})),io&&Qi(i,g),u}return function e(r,o,a,l){if("object"===typeof a&&null!==a&&a.type===C&&null===a.key&&(a=a.props.children),"object"===typeof a&&null!==a){switch(a.$$typeof){case x:e:{for(var c=a.key,u=o;null!==u;){if(u.key===c){if((c=a.type)===C){if(7===u.tag){n(r,u.sibling),(o=i(u,a.props.children)).return=r,r=o;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===N&&wo(c)===u.type){n(r,u.sibling),(o=i(u,a.props)).ref=yo(r,u,a),o.return=r,r=o;break e}n(r,u);break}t(r,u),u=u.sibling}a.type===C?((o=$c(a.props.children,r.mode,l,a.key)).return=r,r=o):((l=Mc(a.type,a.key,a.props,null,r.mode,l)).ref=yo(r,o,a),l.return=r,r=l)}return s(r);case E:e:{for(u=a.key;null!==o;){if(o.key===u){if(4===o.tag&&o.stateNode.containerInfo===a.containerInfo&&o.stateNode.implementation===a.implementation){n(r,o.sibling),(o=i(o,a.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Lc(a,r.mode,l)).return=r,r=o}return s(r);case N:return e(r,o,(u=a._init)(a._payload),l)}if(te(a))return m(r,o,a,l);if($(a))return g(r,o,a,l);vo(r,a)}return"string"===typeof a&&""!==a||"number"===typeof a?(a=""+a,null!==o&&6===o.tag?(n(r,o.sibling),(o=i(o,a)).return=r,r=o):(n(r,o),(o=Uc(a,r.mode,l)).return=r,r=o),s(r)):n(r,o)}}var xo=bo(!0),Eo=bo(!1),Co=ki(null),ko=null,_o=null,So=null;function Po(){So=_o=ko=null}function Ao(e){var t=Co.current;_i(Co),e._currentValue=t}function To(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Io(e,t){ko=e,So=_o=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(ws=!0),e.firstContext=null)}function Oo(e){var t=e._currentValue;if(So!==e)if(e={context:e,memoizedValue:t,next:null},null===_o){if(null===ko)throw Error(o(308));_o=e,ko.dependencies={lanes:0,firstContext:e}}else _o=_o.next=e;return t}var No=null;function Ro(e){null===No?No=[e]:No.push(e)}function Mo(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,Ro(t)):(n.next=i.next,i.next=n),t.interleaved=n,$o(e,r)}function $o(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var jo=!1;function Uo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Do(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Al)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,$o(e,n)}return null===(i=r.interleaved)?(t.next=t,Ro(r)):(t.next=i.next,i.next=t),r.interleaved=t,$o(e,n)}function Fo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}function Wo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?i=o=a:o=o.next=a,n=n.next}while(null!==n);null===o?i=o=t:o=o.next=t}else i=o=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function zo(e,t,n,r){var i=e.updateQueue;jo=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,c=l.next;l.next=null,null===a?o=c:a.next=c,a=l;var u=e.alternate;null!==u&&((s=(u=u.updateQueue).lastBaseUpdate)!==a&&(null===s?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(null!==o){var d=i.baseState;for(a=0,u=c=l=null,s=o;;){var h=s.lane,f=s.eventTime;if((r&h)===h){null!==u&&(u=u.next={eventTime:f,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var p=e,m=s;switch(h=t,f=n,m.tag){case 1:if("function"===typeof(p=m.payload)){d=p.call(f,d,h);break e}d=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null===(h="function"===typeof(p=m.payload)?p.call(f,d,h):p)||void 0===h)break e;d=U({},d,h);break e;case 2:jo=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(h=i.effects)?i.effects=[s]:h.push(s))}else f={eventTime:f,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(c=u=f,l=d):u=u.next=f,a|=h;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(h=s).next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}if(null===u&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,null!==(t=i.shared.interleaved)){i=t;do{a|=i.lane,i=i.next}while(i!==t)}else null===o&&(i.shared.lanes=0);jl|=a,e.lanes=a,e.memoizedState=d}}function qo(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!==typeof i)throw Error(o(191,i));i.call(r)}}}var Ho={},Zo=ki(Ho),Vo=ki(Ho),Ko=ki(Ho);function Go(e){if(e===Ho)throw Error(o(174));return e}function Yo(e,t){switch(Si(Ko,t),Si(Vo,e),Si(Zo,Ho),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:le(null,"");break;default:t=le(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}_i(Zo),Si(Zo,t)}function Jo(){_i(Zo),_i(Vo),_i(Ko)}function Qo(e){Go(Ko.current);var t=Go(Zo.current),n=le(t,e.type);t!==n&&(Si(Vo,e),Si(Zo,n))}function Xo(e){Vo.current===e&&(_i(Zo),_i(Vo))}var ea=ki(0);function ta(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var na=[];function ra(){for(var e=0;e<na.length;e++)na[e]._workInProgressVersionPrimary=null;na.length=0}var ia=b.ReactCurrentDispatcher,oa=b.ReactCurrentBatchConfig,aa=0,sa=null,la=null,ca=null,ua=!1,da=!1,ha=0,fa=0;function pa(){throw Error(o(321))}function ma(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sr(e[n],t[n]))return!1;return!0}function ga(e,t,n,r,i,a){if(aa=a,sa=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ia.current=null===e||null===e.memoizedState?Xa:es,e=n(r,i),da){a=0;do{if(da=!1,ha=0,25<=a)throw Error(o(301));a+=1,ca=la=null,t.updateQueue=null,ia.current=ts,e=n(r,i)}while(da)}if(ia.current=Qa,t=null!==la&&null!==la.next,aa=0,ca=la=sa=null,ua=!1,t)throw Error(o(300));return e}function ya(){var e=0!==ha;return ha=0,e}function va(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ca?sa.memoizedState=ca=e:ca=ca.next=e,ca}function wa(){if(null===la){var e=sa.alternate;e=null!==e?e.memoizedState:null}else e=la.next;var t=null===ca?sa.memoizedState:ca.next;if(null!==t)ca=t,la=e;else{if(null===e)throw Error(o(310));e={memoizedState:(la=e).memoizedState,baseState:la.baseState,baseQueue:la.baseQueue,queue:la.queue,next:null},null===ca?sa.memoizedState=ca=e:ca=ca.next=e}return ca}function ba(e,t){return"function"===typeof t?t(e):t}function xa(e){var t=wa(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=la,i=r.baseQueue,a=n.pending;if(null!==a){if(null!==i){var s=i.next;i.next=a.next,a.next=s}r.baseQueue=i=a,n.pending=null}if(null!==i){a=i.next,r=r.baseState;var l=s=null,c=null,u=a;do{var d=u.lane;if((aa&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(l=c=h,s=r):c=c.next=h,sa.lanes|=d,jl|=d}u=u.next}while(null!==u&&u!==a);null===c?s=r:c.next=l,sr(r,t.memoizedState)||(ws=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{a=i.lane,sa.lanes|=a,jl|=a,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ea(e){var t=wa(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{a=e(a,s.action),s=s.next}while(s!==i);sr(a,t.memoizedState)||(ws=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Ca(){}function ka(e,t){var n=sa,r=wa(),i=t(),a=!sr(r.memoizedState,i);if(a&&(r.memoizedState=i,ws=!0),r=r.queue,ja(Pa.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||null!==ca&&1&ca.memoizedState.tag){if(n.flags|=2048,Oa(9,Sa.bind(null,n,r,i,t),void 0,null),null===Tl)throw Error(o(349));0!==(30&aa)||_a(n,t,i)}return i}function _a(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=sa.updateQueue)?(t={lastEffect:null,stores:null},sa.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Sa(e,t,n,r){t.value=n,t.getSnapshot=r,Aa(t)&&Ta(e)}function Pa(e,t,n){return n((function(){Aa(t)&&Ta(e)}))}function Aa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sr(e,n)}catch(r){return!0}}function Ta(e){var t=$o(e,1);null!==t&&nc(t,e,1,-1)}function Ia(e){var t=va();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:e},t.queue=e,e=e.dispatch=Ka.bind(null,sa,e),[t.memoizedState,e]}function Oa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=sa.updateQueue)?(t={lastEffect:null,stores:null},sa.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Na(){return wa().memoizedState}function Ra(e,t,n,r){var i=va();sa.flags|=e,i.memoizedState=Oa(1|t,n,void 0,void 0===r?null:r)}function Ma(e,t,n,r){var i=wa();r=void 0===r?null:r;var o=void 0;if(null!==la){var a=la.memoizedState;if(o=a.destroy,null!==r&&ma(r,a.deps))return void(i.memoizedState=Oa(t,n,o,r))}sa.flags|=e,i.memoizedState=Oa(1|t,n,o,r)}function $a(e,t){return Ra(8390656,8,e,t)}function ja(e,t){return Ma(2048,8,e,t)}function Ua(e,t){return Ma(4,2,e,t)}function La(e,t){return Ma(4,4,e,t)}function Da(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Ba(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ma(4,4,Da.bind(null,t,e),n)}function Fa(){}function Wa(e,t){var n=wa();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function za(e,t){var n=wa();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qa(e,t,n){return 0===(21&aa)?(e.baseState&&(e.baseState=!1,ws=!0),e.memoizedState=n):(sr(n,t)||(n=mt(),sa.lanes|=n,jl|=n,e.baseState=!0),t)}function Ha(e,t){var n=wt;wt=0!==n&&4>n?n:4,e(!0);var r=oa.transition;oa.transition={};try{e(!1),t()}finally{wt=n,oa.transition=r}}function Za(){return wa().memoizedState}function Va(e,t,n){var r=tc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ga(e))Ya(t,n);else if(null!==(n=Mo(e,t,n,r))){nc(n,e,r,ec()),Ja(n,t,r)}}function Ka(e,t,n){var r=tc(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ga(e))Ya(t,i);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,sr(s,a)){var l=t.interleaved;return null===l?(i.next=i,Ro(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(c){}null!==(n=Mo(e,t,i,r))&&(nc(n,e,r,i=ec()),Ja(n,t,r))}}function Ga(e){var t=e.alternate;return e===sa||null!==t&&t===sa}function Ya(e,t){da=ua=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ja(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}var Qa={readContext:Oo,useCallback:pa,useContext:pa,useEffect:pa,useImperativeHandle:pa,useInsertionEffect:pa,useLayoutEffect:pa,useMemo:pa,useReducer:pa,useRef:pa,useState:pa,useDebugValue:pa,useDeferredValue:pa,useTransition:pa,useMutableSource:pa,useSyncExternalStore:pa,useId:pa,unstable_isNewReconciler:!1},Xa={readContext:Oo,useCallback:function(e,t){return va().memoizedState=[e,void 0===t?null:t],e},useContext:Oo,useEffect:$a,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ra(4194308,4,Da.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ra(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ra(4,2,e,t)},useMemo:function(e,t){var n=va();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=va();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Va.bind(null,sa,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},va().memoizedState=e},useState:Ia,useDebugValue:Fa,useDeferredValue:function(e){return va().memoizedState=e},useTransition:function(){var e=Ia(!1),t=e[0];return e=Ha.bind(null,e[1]),va().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=sa,i=va();if(io){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===Tl)throw Error(o(349));0!==(30&aa)||_a(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,$a(Pa.bind(null,r,a,e),[e]),r.flags|=2048,Oa(9,Sa.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=va(),t=Tl.identifierPrefix;if(io){var n=Ji;t=":"+t+"R"+(n=(Yi&~(1<<32-at(Yi)-1)).toString(32)+n),0<(n=ha++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=fa++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},es={readContext:Oo,useCallback:Wa,useContext:Oo,useEffect:ja,useImperativeHandle:Ba,useInsertionEffect:Ua,useLayoutEffect:La,useMemo:za,useReducer:xa,useRef:Na,useState:function(){return xa(ba)},useDebugValue:Fa,useDeferredValue:function(e){return qa(wa(),la.memoizedState,e)},useTransition:function(){return[xa(ba)[0],wa().memoizedState]},useMutableSource:Ca,useSyncExternalStore:ka,useId:Za,unstable_isNewReconciler:!1},ts={readContext:Oo,useCallback:Wa,useContext:Oo,useEffect:ja,useImperativeHandle:Ba,useInsertionEffect:Ua,useLayoutEffect:La,useMemo:za,useReducer:Ea,useRef:Na,useState:function(){return Ea(ba)},useDebugValue:Fa,useDeferredValue:function(e){var t=wa();return null===la?t.memoizedState=e:qa(t,la.memoizedState,e)},useTransition:function(){return[Ea(ba)[0],wa().memoizedState]},useMutableSource:Ca,useSyncExternalStore:ka,useId:Za,unstable_isNewReconciler:!1};function ns(e,t){if(e&&e.defaultProps){for(var n in t=U({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rs(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:U({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var is={isMounted:function(e){return!!(e=e._reactInternals)&&We(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ec(),i=tc(e),o=Do(r,i);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Bo(e,o,i))&&(nc(t,e,i,r),Fo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ec(),i=tc(e),o=Do(r,i);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Bo(e,o,i))&&(nc(t,e,i,r),Fo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ec(),r=tc(e),i=Do(n,r);i.tag=2,void 0!==t&&null!==t&&(i.callback=t),null!==(t=Bo(e,i,r))&&(nc(t,e,r,n),Fo(t,e,r))}};function os(e,t,n,r,i,o,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,a):!t.prototype||!t.prototype.isPureReactComponent||(!lr(n,r)||!lr(i,o))}function as(e,t,n){var r=!1,i=Pi,o=t.contextType;return"object"===typeof o&&null!==o?o=Oo(o):(i=Ni(t)?Ii:Ai.current,o=(r=null!==(r=t.contextTypes)&&void 0!==r)?Oi(e,i):Pi),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=is,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ss(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&is.enqueueReplaceState(t,t.state,null)}function ls(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Uo(e);var o=t.contextType;"object"===typeof o&&null!==o?i.context=Oo(o):(o=Ni(t)?Ii:Ai.current,i.context=Oi(e,o)),i.state=e.memoizedState,"function"===typeof(o=t.getDerivedStateFromProps)&&(rs(e,t,o,n),i.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(t=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&is.enqueueReplaceState(i,i.state,null),zo(e,n,i,r),i.state=e.memoizedState),"function"===typeof i.componentDidMount&&(e.flags|=4194308)}function cs(e,t){try{var n="",r=t;do{n+=F(r),r=r.return}while(r);var i=n}catch(o){i="\nError generating stack: "+o.message+"\n"+o.stack}return{value:e,source:t,stack:i,digest:null}}function us(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function ds(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var hs="function"===typeof WeakMap?WeakMap:Map;function fs(e,t,n){(n=Do(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ql||(ql=!0,Hl=r),ds(0,t)},n}function ps(e,t,n){(n=Do(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ds(0,t)}}var o=e.stateNode;return null!==o&&"function"===typeof o.componentDidCatch&&(n.callback=function(){ds(0,t),"function"!==typeof r&&(null===Zl?Zl=new Set([this]):Zl.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ms(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new hs;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=_c.bind(null,e,t,n),t.then(e,e))}function gs(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function ys(e,t,n,r,i){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Do(-1,1)).tag=2,Bo(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var vs=b.ReactCurrentOwner,ws=!1;function bs(e,t,n,r){t.child=null===e?Eo(t,null,n,r):xo(t,e.child,n,r)}function xs(e,t,n,r,i){n=n.render;var o=t.ref;return Io(t,i),r=ga(e,t,n,r,o,i),n=ya(),null===e||ws?(io&&n&&eo(t),t.flags|=1,bs(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qs(e,t,i))}function Es(e,t,n,r,i){if(null===e){var o=n.type;return"function"!==typeof o||Nc(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Mc(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Cs(e,t,o,r,i))}if(o=e.child,0===(e.lanes&i)){var a=o.memoizedProps;if((n=null!==(n=n.compare)?n:lr)(a,r)&&e.ref===t.ref)return qs(e,t,i)}return t.flags|=1,(e=Rc(o,r)).ref=t.ref,e.return=t,t.child=e}function Cs(e,t,n,r,i){if(null!==e){var o=e.memoizedProps;if(lr(o,r)&&e.ref===t.ref){if(ws=!1,t.pendingProps=r=o,0===(e.lanes&i))return t.lanes=e.lanes,qs(e,t,i);0!==(131072&e.flags)&&(ws=!0)}}return Ss(e,t,n,r,i)}function ks(e,t,n){var r=t.pendingProps,i=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Si(Rl,Nl),Nl|=n;else{if(0===(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Si(Rl,Nl),Nl|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,Si(Rl,Nl),Nl|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,Si(Rl,Nl),Nl|=r;return bs(e,t,i,n),t.child}function _s(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ss(e,t,n,r,i){var o=Ni(n)?Ii:Ai.current;return o=Oi(t,o),Io(t,i),n=ga(e,t,n,r,o,i),r=ya(),null===e||ws?(io&&r&&eo(t),t.flags|=1,bs(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qs(e,t,i))}function Ps(e,t,n,r,i){if(Ni(n)){var o=!0;ji(t)}else o=!1;if(Io(t,i),null===t.stateNode)zs(e,t),as(t,n,r),ls(t,n,r,i),r=!0;else if(null===e){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,c=n.contextType;"object"===typeof c&&null!==c?c=Oo(c):c=Oi(t,c=Ni(n)?Ii:Ai.current);var u=n.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof a.getSnapshotBeforeUpdate;d||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==r||l!==c)&&ss(t,a,r,c),jo=!1;var h=t.memoizedState;a.state=h,zo(t,r,a,i),l=t.memoizedState,s!==r||h!==l||Ti.current||jo?("function"===typeof u&&(rs(t,n,u,r),l=t.memoizedState),(s=jo||os(t,n,s,r,h,l,c))?(d||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=c,r=s):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Lo(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:ns(t.type,s),a.props=c,d=t.pendingProps,h=a.context,"object"===typeof(l=n.contextType)&&null!==l?l=Oo(l):l=Oi(t,l=Ni(n)?Ii:Ai.current);var f=n.getDerivedStateFromProps;(u="function"===typeof f||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==d||h!==l)&&ss(t,a,r,l),jo=!1,h=t.memoizedState,a.state=h,zo(t,r,a,i);var p=t.memoizedState;s!==d||h!==p||Ti.current||jo?("function"===typeof f&&(rs(t,n,f,r),p=t.memoizedState),(c=jo||os(t,n,c,r,h,p,l)||!1)?(u||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,p,l),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,p,l)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=l,r=c):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return As(e,t,n,r,o,i)}function As(e,t,n,r,i,o){_s(e,t);var a=0!==(128&t.flags);if(!r&&!a)return i&&Ui(t,n,!1),qs(e,t,o);r=t.stateNode,vs.current=t;var s=a&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=xo(t,e.child,null,o),t.child=xo(t,null,s,o)):bs(e,t,s,o),t.memoizedState=r.state,i&&Ui(t,n,!0),t.child}function Ts(e){var t=e.stateNode;t.pendingContext?Mi(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Mi(0,t.context,!1),Yo(e,t.containerInfo)}function Is(e,t,n,r,i){return po(),mo(i),t.flags|=256,bs(e,t,n,r),t.child}var Os,Ns,Rs,Ms,$s={dehydrated:null,treeContext:null,retryLane:0};function js(e){return{baseLanes:e,cachePool:null,transitions:null}}function Us(e,t,n){var r,i=t.pendingProps,a=ea.current,s=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&a)),r?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(a|=1),Si(ea,1&a),null===e)return co(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=i.children,e=i.fallback,s?(i=t.mode,s=t.child,l={mode:"hidden",children:l},0===(1&i)&&null!==s?(s.childLanes=0,s.pendingProps=l):s=jc(l,i,0,null),e=$c(e,i,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=js(n),t.memoizedState=$s,e):Ls(t,l));if(null!==(a=e.memoizedState)&&null!==(r=a.dehydrated))return function(e,t,n,r,i,a,s){if(n)return 256&t.flags?(t.flags&=-257,Ds(e,t,s,r=us(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=jc({mode:"visible",children:r.children},i,0,null),(a=$c(a,i,s,null)).flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,0!==(1&t.mode)&&xo(t,e.child,null,s),t.child.memoizedState=js(s),t.memoizedState=$s,a);if(0===(1&t.mode))return Ds(e,t,s,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var l=r.dgst;return r=l,Ds(e,t,s,r=us(a=Error(o(419)),r,void 0))}if(l=0!==(s&e.childLanes),ws||l){if(null!==(r=Tl)){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!==(i&(r.suspendedLanes|s))?0:i)&&i!==a.retryLane&&(a.retryLane=i,$o(e,i),nc(r,e,i,-1))}return mc(),Ds(e,t,s,r=us(Error(o(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Pc.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,ro=ci(i.nextSibling),no=t,io=!0,oo=null,null!==e&&(Vi[Ki++]=Yi,Vi[Ki++]=Ji,Vi[Ki++]=Gi,Yi=e.id,Ji=e.overflow,Gi=t),t=Ls(t,r.children),t.flags|=4096,t)}(e,t,l,i,r,a,n);if(s){s=i.fallback,l=t.mode,r=(a=e.child).sibling;var c={mode:"hidden",children:i.children};return 0===(1&l)&&t.child!==a?((i=t.child).childLanes=0,i.pendingProps=c,t.deletions=null):(i=Rc(a,c)).subtreeFlags=14680064&a.subtreeFlags,null!==r?s=Rc(r,s):(s=$c(s,l,n,null)).flags|=2,s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,l=null===(l=e.child.memoizedState)?js(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=$s,i}return e=(s=e.child).sibling,i=Rc(s,{mode:"visible",children:i.children}),0===(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Ls(e,t){return(t=jc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Ds(e,t,n,r){return null!==r&&mo(r),xo(t,e.child,null,n),(e=Ls(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Bs(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),To(e.return,t,n)}function Fs(e,t,n,r,i){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ws(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(bs(e,t,r.children,n),0!==(2&(r=ea.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Bs(e,n,t);else if(19===e.tag)Bs(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Si(ea,r),0===(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===ta(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Fs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ta(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Fs(t,!0,n,null,o);break;case"together":Fs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zs(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qs(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),jl|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Rc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Rc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Hs(e,t){if(!io)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Zs(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vs(e,t,n){var r=t.pendingProps;switch(to(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zs(t),null;case 1:case 17:return Ni(t.type)&&Ri(),Zs(t),null;case 3:return r=t.stateNode,Jo(),_i(Ti),_i(Ai),ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(ho(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==oo&&(ac(oo),oo=null))),Ns(e,t),Zs(t),null;case 5:Xo(t);var i=Go(Ko.current);if(n=t.type,null!==e&&null!=t.stateNode)Rs(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Zs(t),null}if(e=Go(Zo.current),ho(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[hi]=t,r[fi]=a,e=0!==(1&t.mode),n){case"dialog":Dr("cancel",r),Dr("close",r);break;case"iframe":case"object":case"embed":Dr("load",r);break;case"video":case"audio":for(i=0;i<$r.length;i++)Dr($r[i],r);break;case"source":Dr("error",r);break;case"img":case"image":case"link":Dr("error",r),Dr("load",r);break;case"details":Dr("toggle",r);break;case"input":Y(r,a),Dr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Dr("invalid",r);break;case"textarea":ie(r,a),Dr("invalid",r)}for(var l in ve(n,a),i=null,a)if(a.hasOwnProperty(l)){var c=a[l];"children"===l?"string"===typeof c?r.textContent!==c&&(!0!==a.suppressHydrationWarning&&Qr(r.textContent,c,e),i=["children",c]):"number"===typeof c&&r.textContent!==""+c&&(!0!==a.suppressHydrationWarning&&Qr(r.textContent,c,e),i=["children",""+c]):s.hasOwnProperty(l)&&null!=c&&"onScroll"===l&&Dr("scroll",r)}switch(n){case"input":Z(r),X(r,a,!0);break;case"textarea":Z(r),ae(r);break;case"select":case"option":break;default:"function"===typeof a.onClick&&(r.onclick=Xr)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{l=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=se(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),"select"===n&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[hi]=t,e[fi]=r,Os(e,t,!1,!1),t.stateNode=e;e:{switch(l=we(n,r),n){case"dialog":Dr("cancel",e),Dr("close",e),i=r;break;case"iframe":case"object":case"embed":Dr("load",e),i=r;break;case"video":case"audio":for(i=0;i<$r.length;i++)Dr($r[i],e);i=r;break;case"source":Dr("error",e),i=r;break;case"img":case"image":case"link":Dr("error",e),Dr("load",e),i=r;break;case"details":Dr("toggle",e),i=r;break;case"input":Y(e,r),i=G(e,r),Dr("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=U({},r,{value:void 0}),Dr("invalid",e);break;case"textarea":ie(e,r),i=re(e,r),Dr("invalid",e)}for(a in ve(n,i),c=i)if(c.hasOwnProperty(a)){var u=c[a];"style"===a?ge(e,u):"dangerouslySetInnerHTML"===a?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===a?"string"===typeof u?("textarea"!==n||""!==u)&&he(e,u):"number"===typeof u&&he(e,""+u):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(s.hasOwnProperty(a)?null!=u&&"onScroll"===a&&Dr("scroll",e):null!=u&&w(e,a,u,l))}switch(n){case"input":Z(e),X(e,r,!1);break;case"textarea":Z(e),ae(e);break;case"option":null!=r.value&&e.setAttribute("value",""+q(r.value));break;case"select":e.multiple=!!r.multiple,null!=(a=r.value)?ne(e,!!r.multiple,a,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof i.onClick&&(e.onclick=Xr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Zs(t),null;case 6:if(e&&null!=t.stateNode)Ms(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(n=Go(Ko.current),Go(Zo.current),ho(t)){if(r=t.stateNode,n=t.memoizedProps,r[hi]=t,(a=r.nodeValue!==n)&&null!==(e=no))switch(e.tag){case 3:Qr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Qr(r.nodeValue,n,0!==(1&e.mode))}a&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[hi]=t,t.stateNode=r}return Zs(t),null;case 13:if(_i(ea),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(io&&null!==ro&&0!==(1&t.mode)&&0===(128&t.flags))fo(),po(),t.flags|=98560,a=!1;else if(a=ho(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(o(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(o(317));a[hi]=t}else po(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Zs(t),a=!1}else null!==oo&&(ac(oo),oo=null),a=!0;if(!a)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ea.current)?0===Ml&&(Ml=3):mc())),null!==t.updateQueue&&(t.flags|=4),Zs(t),null);case 4:return Jo(),Ns(e,t),null===e&&Wr(t.stateNode.containerInfo),Zs(t),null;case 10:return Ao(t.type._context),Zs(t),null;case 19:if(_i(ea),null===(a=t.memoizedState))return Zs(t),null;if(r=0!==(128&t.flags),null===(l=a.rendering))if(r)Hs(a,!1);else{if(0!==Ml||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(l=ta(e))){for(t.flags|=128,Hs(a,!1),null!==(r=l.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(a=n).flags&=14680066,null===(l=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Si(ea,1&ea.current|2),t.child}e=e.sibling}null!==a.tail&&Je()>Wl&&(t.flags|=128,r=!0,Hs(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ta(l))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Hs(a,!0),null===a.tail&&"hidden"===a.tailMode&&!l.alternate&&!io)return Zs(t),null}else 2*Je()-a.renderingStartTime>Wl&&1073741824!==n&&(t.flags|=128,r=!0,Hs(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(null!==(n=a.last)?n.sibling=l:t.child=l,a.last=l)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Je(),t.sibling=null,n=ea.current,Si(ea,r?1&n|2:1&n),t):(Zs(t),null);case 22:case 23:return dc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Nl)&&(Zs(t),6&t.subtreeFlags&&(t.flags|=8192)):Zs(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function Ks(e,t){switch(to(t),t.tag){case 1:return Ni(t.type)&&Ri(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Jo(),_i(Ti),_i(Ai),ra(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Xo(t),null;case 13:if(_i(ea),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));po()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return _i(ea),null;case 4:return Jo(),null;case 10:return Ao(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}Os=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ns=function(){},Rs=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Go(Zo.current);var o,a=null;switch(n){case"input":i=G(e,i),r=G(e,r),a=[];break;case"select":i=U({},i,{value:void 0}),r=U({},r,{value:void 0}),a=[];break;case"textarea":i=re(e,i),r=re(e,r),a=[];break;default:"function"!==typeof i.onClick&&"function"===typeof r.onClick&&(e.onclick=Xr)}for(u in ve(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(s.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var c=r[u];if(l=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(null!=c||null!=l))if("style"===u)if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(a||(a=[]),a.push(u,n)),n=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,l=l?l.__html:void 0,null!=c&&l!==c&&(a=a||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(a=a||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(s.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&Dr("scroll",e),a||l===c||(a=[])):(a=a||[]).push(u,c))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}},Ms=function(e,t,n,r){n!==r&&(t.flags|=4)};var Gs=!1,Ys=!1,Js="function"===typeof WeakSet?WeakSet:Set,Qs=null;function Xs(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){kc(e,t,r)}else n.current=null}function el(e,t,n){try{n()}catch(r){kc(e,t,r)}}var tl=!1;function nl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,void 0!==o&&el(t,n,o)}i=i.next}while(i!==r)}}function rl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function il(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function ol(e){var t=e.alternate;null!==t&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[hi],delete t[fi],delete t[mi],delete t[gi],delete t[yi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function al(e){return 5===e.tag||3===e.tag||4===e.tag}function sl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||al(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ll(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Xr));else if(4!==r&&null!==(e=e.child))for(ll(e,t,n),e=e.sibling;null!==e;)ll(e,t,n),e=e.sibling}function cl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cl(e,t,n),e=e.sibling;null!==e;)cl(e,t,n),e=e.sibling}var ul=null,dl=!1;function hl(e,t,n){for(n=n.child;null!==n;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(ot&&"function"===typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(it,n)}catch(s){}switch(n.tag){case 5:Ys||Xs(n,t);case 6:var r=ul,i=dl;ul=null,hl(e,t,n),dl=i,null!==(ul=r)&&(dl?(e=ul,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):ul.removeChild(n.stateNode));break;case 18:null!==ul&&(dl?(e=ul,n=n.stateNode,8===e.nodeType?li(e.parentNode,n):1===e.nodeType&&li(e,n),Wt(e)):li(ul,n.stateNode));break;case 4:r=ul,i=dl,ul=n.stateNode.containerInfo,dl=!0,hl(e,t,n),ul=r,dl=i;break;case 0:case 11:case 14:case 15:if(!Ys&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,void 0!==a&&(0!==(2&o)||0!==(4&o))&&el(n,t,a),i=i.next}while(i!==r)}hl(e,t,n);break;case 1:if(!Ys&&(Xs(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){kc(n,t,s)}hl(e,t,n);break;case 21:hl(e,t,n);break;case 22:1&n.mode?(Ys=(r=Ys)||null!==n.memoizedState,hl(e,t,n),Ys=r):hl(e,t,n);break;default:hl(e,t,n)}}function pl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Js),t.forEach((function(t){var r=Ac.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function ml(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:ul=l.stateNode,dl=!1;break e;case 3:case 4:ul=l.stateNode.containerInfo,dl=!0;break e}l=l.return}if(null===ul)throw Error(o(160));fl(a,s,i),ul=null,dl=!1;var c=i.alternate;null!==c&&(c.return=null),i.return=null}catch(u){kc(i,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gl(t,e),t=t.sibling}function gl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ml(t,e),yl(e),4&r){try{nl(3,e,e.return),rl(3,e)}catch(g){kc(e,e.return,g)}try{nl(5,e,e.return)}catch(g){kc(e,e.return,g)}}break;case 1:ml(t,e),yl(e),512&r&&null!==n&&Xs(n,n.return);break;case 5:if(ml(t,e),yl(e),512&r&&null!==n&&Xs(n,n.return),32&e.flags){var i=e.stateNode;try{he(i,"")}catch(g){kc(e,e.return,g)}}if(4&r&&null!=(i=e.stateNode)){var a=e.memoizedProps,s=null!==n?n.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===l&&"radio"===a.type&&null!=a.name&&J(i,a),we(l,s);var u=we(l,a);for(s=0;s<c.length;s+=2){var d=c[s],h=c[s+1];"style"===d?ge(i,h):"dangerouslySetInnerHTML"===d?de(i,h):"children"===d?he(i,h):w(i,d,h,u)}switch(l){case"input":Q(i,a);break;case"textarea":oe(i,a);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var p=a.value;null!=p?ne(i,!!a.multiple,p,!1):f!==!!a.multiple&&(null!=a.defaultValue?ne(i,!!a.multiple,a.defaultValue,!0):ne(i,!!a.multiple,a.multiple?[]:"",!1))}i[fi]=a}catch(g){kc(e,e.return,g)}}break;case 6:if(ml(t,e),yl(e),4&r){if(null===e.stateNode)throw Error(o(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(g){kc(e,e.return,g)}}break;case 3:if(ml(t,e),yl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Wt(t.containerInfo)}catch(g){kc(e,e.return,g)}break;case 4:default:ml(t,e),yl(e);break;case 13:ml(t,e),yl(e),8192&(i=e.child).flags&&(a=null!==i.memoizedState,i.stateNode.isHidden=a,!a||null!==i.alternate&&null!==i.alternate.memoizedState||(Fl=Je())),4&r&&pl(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Ys=(u=Ys)||d,ml(t,e),Ys=u):ml(t,e),yl(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(Qs=e,d=e.child;null!==d;){for(h=Qs=d;null!==Qs;){switch(p=(f=Qs).child,f.tag){case 0:case 11:case 14:case 15:nl(4,f,f.return);break;case 1:Xs(f,f.return);var m=f.stateNode;if("function"===typeof m.componentWillUnmount){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){kc(r,n,g)}}break;case 5:Xs(f,f.return);break;case 22:if(null!==f.memoizedState){xl(h);continue}}null!==p?(p.return=f,Qs=p):xl(h)}d=d.sibling}e:for(d=null,h=e;;){if(5===h.tag){if(null===d){d=h;try{i=h.stateNode,u?"function"===typeof(a=i.style).setProperty?a.setProperty("display","none","important"):a.display="none":(l=h.stateNode,s=void 0!==(c=h.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,l.style.display=me("display",s))}catch(g){kc(e,e.return,g)}}}else if(6===h.tag){if(null===d)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(g){kc(e,e.return,g)}}else if((22!==h.tag&&23!==h.tag||null===h.memoizedState||h===e)&&null!==h.child){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;null===h.sibling;){if(null===h.return||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ml(t,e),yl(e),4&r&&pl(e);case 21:}}function yl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(al(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(he(i,""),r.flags&=-33),cl(e,sl(e),i);break;case 3:case 4:var a=r.stateNode.containerInfo;ll(e,sl(e),a);break;default:throw Error(o(161))}}catch(s){kc(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function vl(e,t,n){Qs=e,wl(e,t,n)}function wl(e,t,n){for(var r=0!==(1&e.mode);null!==Qs;){var i=Qs,o=i.child;if(22===i.tag&&r){var a=null!==i.memoizedState||Gs;if(!a){var s=i.alternate,l=null!==s&&null!==s.memoizedState||Ys;s=Gs;var c=Ys;if(Gs=a,(Ys=l)&&!c)for(Qs=i;null!==Qs;)l=(a=Qs).child,22===a.tag&&null!==a.memoizedState?El(i):null!==l?(l.return=a,Qs=l):El(i);for(;null!==o;)Qs=o,wl(o,t,n),o=o.sibling;Qs=i,Gs=s,Ys=c}bl(e)}else 0!==(8772&i.subtreeFlags)&&null!==o?(o.return=i,Qs=o):bl(e)}}function bl(e){for(;null!==Qs;){var t=Qs;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Ys||rl(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Ys)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ns(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;null!==a&&qo(t,a,r);break;case 3:var s=t.updateQueue;if(null!==s){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}qo(t,s,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var h=d.dehydrated;null!==h&&Wt(h)}}}break;default:throw Error(o(163))}Ys||512&t.flags&&il(t)}catch(f){kc(t,t.return,f)}}if(t===e){Qs=null;break}if(null!==(n=t.sibling)){n.return=t.return,Qs=n;break}Qs=t.return}}function xl(e){for(;null!==Qs;){var t=Qs;if(t===e){Qs=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Qs=n;break}Qs=t.return}}function El(e){for(;null!==Qs;){var t=Qs;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rl(4,t)}catch(l){kc(t,n,l)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(l){kc(t,i,l)}}var o=t.return;try{il(t)}catch(l){kc(t,o,l)}break;case 5:var a=t.return;try{il(t)}catch(l){kc(t,a,l)}}}catch(l){kc(t,t.return,l)}if(t===e){Qs=null;break}var s=t.sibling;if(null!==s){s.return=t.return,Qs=s;break}Qs=t.return}}var Cl,kl=Math.ceil,_l=b.ReactCurrentDispatcher,Sl=b.ReactCurrentOwner,Pl=b.ReactCurrentBatchConfig,Al=0,Tl=null,Il=null,Ol=0,Nl=0,Rl=ki(0),Ml=0,$l=null,jl=0,Ul=0,Ll=0,Dl=null,Bl=null,Fl=0,Wl=1/0,zl=null,ql=!1,Hl=null,Zl=null,Vl=!1,Kl=null,Gl=0,Yl=0,Jl=null,Ql=-1,Xl=0;function ec(){return 0!==(6&Al)?Je():-1!==Ql?Ql:Ql=Je()}function tc(e){return 0===(1&e.mode)?1:0!==(2&Al)&&0!==Ol?Ol&-Ol:null!==go.transition?(0===Xl&&(Xl=mt()),Xl):0!==(e=wt)?e:e=void 0===(e=window.event)?16:Yt(e.type)}function nc(e,t,n,r){if(50<Yl)throw Yl=0,Jl=null,Error(o(185));yt(e,n,r),0!==(2&Al)&&e===Tl||(e===Tl&&(0===(2&Al)&&(Ul|=n),4===Ml&&sc(e,Ol)),rc(e,r),1===n&&0===Al&&0===(1&t.mode)&&(Wl=Je()+500,Di&&Wi()))}function rc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-at(o),s=1<<a,l=i[a];-1===l?0!==(s&n)&&0===(s&r)||(i[a]=ft(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}(e,t);var r=ht(e,e===Tl?Ol:0);if(0===r)null!==n&&Ke(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ke(n),1===t)0===e.tag?function(e){Di=!0,Fi(e)}(lc.bind(null,e)):Fi(lc.bind(null,e)),ai((function(){0===(6&Al)&&Wi()})),n=null;else{switch(bt(r)){case 1:n=Xe;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Tc(n,ic.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ic(e,t){if(Ql=-1,Xl=0,0!==(6&Al))throw Error(o(327));var n=e.callbackNode;if(Ec()&&e.callbackNode!==n)return null;var r=ht(e,e===Tl?Ol:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gc(e,r);else{t=r;var i=Al;Al|=2;var a=pc();for(Tl===e&&Ol===t||(zl=null,Wl=Je()+500,hc(e,t));;)try{vc();break}catch(l){fc(e,l)}Po(),_l.current=a,Al=i,null!==Il?t=0:(Tl=null,Ol=0,t=Ml)}if(0!==t){if(2===t&&(0!==(i=pt(e))&&(r=i,t=oc(e,i))),1===t)throw n=$l,hc(e,0),sc(e,r),rc(e,Je()),n;if(6===t)sc(e,r);else{if(i=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!sr(o(),i))return!1}catch(s){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=gc(e,r))&&(0!==(a=pt(e))&&(r=a,t=oc(e,a))),1===t))throw n=$l,hc(e,0),sc(e,r),rc(e,Je()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:case 5:xc(e,Bl,zl);break;case 3:if(sc(e,r),(130023424&r)===r&&10<(t=Fl+500-Je())){if(0!==ht(e,0))break;if(((i=e.suspendedLanes)&r)!==r){ec(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ri(xc.bind(null,e,Bl,zl),t);break}xc(e,Bl,zl);break;case 4:if(sc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-at(r);a=1<<s,(s=t[s])>i&&(i=s),r&=~a}if(r=i,10<(r=(120>(r=Je()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kl(r/1960))-r)){e.timeoutHandle=ri(xc.bind(null,e,Bl,zl),r);break}xc(e,Bl,zl);break;default:throw Error(o(329))}}}return rc(e,Je()),e.callbackNode===n?ic.bind(null,e):null}function oc(e,t){var n=Dl;return e.current.memoizedState.isDehydrated&&(hc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=Bl,Bl=n,null!==t&&ac(t)),e}function ac(e){null===Bl?Bl=e:Bl.push.apply(Bl,e)}function sc(e,t){for(t&=~Ll,t&=~Ul,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function lc(e){if(0!==(6&Al))throw Error(o(327));Ec();var t=ht(e,0);if(0===(1&t))return rc(e,Je()),null;var n=gc(e,t);if(0!==e.tag&&2===n){var r=pt(e);0!==r&&(t=r,n=oc(e,r))}if(1===n)throw n=$l,hc(e,0),sc(e,t),rc(e,Je()),n;if(6===n)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xc(e,Bl,zl),rc(e,Je()),null}function cc(e,t){var n=Al;Al|=1;try{return e(t)}finally{0===(Al=n)&&(Wl=Je()+500,Di&&Wi())}}function uc(e){null!==Kl&&0===Kl.tag&&0===(6&Al)&&Ec();var t=Al;Al|=1;var n=Pl.transition,r=wt;try{if(Pl.transition=null,wt=1,e)return e()}finally{wt=r,Pl.transition=n,0===(6&(Al=t))&&Wi()}}function dc(){Nl=Rl.current,_i(Rl)}function hc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ii(n)),null!==Il)for(n=Il.return;null!==n;){var r=n;switch(to(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Ri();break;case 3:Jo(),_i(Ti),_i(Ai),ra();break;case 5:Xo(r);break;case 4:Jo();break;case 13:case 19:_i(ea);break;case 10:Ao(r.type._context);break;case 22:case 23:dc()}n=n.return}if(Tl=e,Il=e=Rc(e.current,null),Ol=Nl=t,Ml=0,$l=null,Ll=Ul=jl=0,Bl=Dl=null,null!==No){for(t=0;t<No.length;t++)if(null!==(r=(n=No[t]).interleaved)){n.interleaved=null;var i=r.next,o=n.pending;if(null!==o){var a=o.next;o.next=i,r.next=a}n.pending=r}No=null}return e}function fc(e,t){for(;;){var n=Il;try{if(Po(),ia.current=Qa,ua){for(var r=sa.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}ua=!1}if(aa=0,ca=la=sa=null,da=!1,ha=0,Sl.current=null,null===n||null===n.return){Ml=1,$l=t,Il=null;break}e:{var a=e,s=n.return,l=n,c=t;if(t=Ol,l.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=l,h=d.tag;if(0===(1&d.mode)&&(0===h||11===h||15===h)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=gs(s);if(null!==p){p.flags&=-257,ys(p,s,l,0,t),1&p.mode&&ms(a,u,t),c=u;var m=(t=p).updateQueue;if(null===m){var g=new Set;g.add(c),t.updateQueue=g}else m.add(c);break e}if(0===(1&t)){ms(a,u,t),mc();break e}c=Error(o(426))}else if(io&&1&l.mode){var y=gs(s);if(null!==y){0===(65536&y.flags)&&(y.flags|=256),ys(y,s,l,0,t),mo(cs(c,l));break e}}a=c=cs(c,l),4!==Ml&&(Ml=2),null===Dl?Dl=[a]:Dl.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t,Wo(a,fs(0,c,t));break e;case 1:l=c;var v=a.type,w=a.stateNode;if(0===(128&a.flags)&&("function"===typeof v.getDerivedStateFromError||null!==w&&"function"===typeof w.componentDidCatch&&(null===Zl||!Zl.has(w)))){a.flags|=65536,t&=-t,a.lanes|=t,Wo(a,ps(a,l,t));break e}}a=a.return}while(null!==a)}bc(n)}catch(b){t=b,Il===n&&null!==n&&(Il=n=n.return);continue}break}}function pc(){var e=_l.current;return _l.current=Qa,null===e?Qa:e}function mc(){0!==Ml&&3!==Ml&&2!==Ml||(Ml=4),null===Tl||0===(268435455&jl)&&0===(268435455&Ul)||sc(Tl,Ol)}function gc(e,t){var n=Al;Al|=2;var r=pc();for(Tl===e&&Ol===t||(zl=null,hc(e,t));;)try{yc();break}catch(i){fc(e,i)}if(Po(),Al=n,_l.current=r,null!==Il)throw Error(o(261));return Tl=null,Ol=0,Ml}function yc(){for(;null!==Il;)wc(Il)}function vc(){for(;null!==Il&&!Ge();)wc(Il)}function wc(e){var t=Cl(e.alternate,e,Nl);e.memoizedProps=e.pendingProps,null===t?bc(e):Il=t,Sl.current=null}function bc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Vs(n,t,Nl)))return void(Il=n)}else{if(null!==(n=Ks(n,t)))return n.flags&=32767,void(Il=n);if(null===e)return Ml=6,void(Il=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Il=t);Il=t=e}while(null!==t);0===Ml&&(Ml=5)}function xc(e,t,n){var r=wt,i=Pl.transition;try{Pl.transition=null,wt=1,function(e,t,n,r){do{Ec()}while(null!==Kl);if(0!==(6&Al))throw Error(o(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-at(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}(e,a),e===Tl&&(Il=Tl=null,Ol=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Vl||(Vl=!0,Tc(tt,(function(){return Ec(),null}))),a=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||a){a=Pl.transition,Pl.transition=null;var s=wt;wt=1;var l=Al;Al|=4,Sl.current=null,function(e,t){if(ei=qt,fr(e=hr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(x){n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,h=e,f=null;t:for(;;){for(var p;h!==n||0!==i&&3!==h.nodeType||(l=s+i),h!==a||0!==r&&3!==h.nodeType||(c=s+r),3===h.nodeType&&(s+=h.nodeValue.length),null!==(p=h.firstChild);)f=h,h=p;for(;;){if(h===e)break t;if(f===n&&++u===i&&(l=s),f===a&&++d===r&&(c=s),null!==(p=h.nextSibling))break;f=(h=f).parentNode}h=p}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ti={focusedElem:e,selectionRange:n},qt=!1,Qs=t;null!==Qs;)if(e=(t=Qs).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Qs=e;else for(;null!==Qs;){t=Qs;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,y=m.memoizedState,v=t.stateNode,w=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:ns(t.type,g),y);v.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(o(163))}}catch(x){kc(t,t.return,x)}if(null!==(e=t.sibling)){e.return=t.return,Qs=e;break}Qs=t.return}m=tl,tl=!1}(e,n),gl(n,e),pr(ti),qt=!!ei,ti=ei=null,e.current=n,vl(n,e,i),Ye(),Al=l,wt=s,Pl.transition=a}else e.current=n;if(Vl&&(Vl=!1,Kl=e,Gl=i),a=e.pendingLanes,0===a&&(Zl=null),function(e){if(ot&&"function"===typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(it,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),rc(e,Je()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ql)throw ql=!1,e=Hl,Hl=null,e;0!==(1&Gl)&&0!==e.tag&&Ec(),a=e.pendingLanes,0!==(1&a)?e===Jl?Yl++:(Yl=0,Jl=e):Yl=0,Wi()}(e,t,n,r)}finally{Pl.transition=i,wt=r}return null}function Ec(){if(null!==Kl){var e=bt(Gl),t=Pl.transition,n=wt;try{if(Pl.transition=null,wt=16>e?16:e,null===Kl)var r=!1;else{if(e=Kl,Kl=null,Gl=0,0!==(6&Al))throw Error(o(331));var i=Al;for(Al|=4,Qs=e.current;null!==Qs;){var a=Qs,s=a.child;if(0!==(16&Qs.flags)){var l=a.deletions;if(null!==l){for(var c=0;c<l.length;c++){var u=l[c];for(Qs=u;null!==Qs;){var d=Qs;switch(d.tag){case 0:case 11:case 15:nl(8,d,a)}var h=d.child;if(null!==h)h.return=d,Qs=h;else for(;null!==Qs;){var f=(d=Qs).sibling,p=d.return;if(ol(d),d===u){Qs=null;break}if(null!==f){f.return=p,Qs=f;break}Qs=p}}}var m=a.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var y=g.sibling;g.sibling=null,g=y}while(null!==g)}}Qs=a}}if(0!==(2064&a.subtreeFlags)&&null!==s)s.return=a,Qs=s;else e:for(;null!==Qs;){if(0!==(2048&(a=Qs).flags))switch(a.tag){case 0:case 11:case 15:nl(9,a,a.return)}var v=a.sibling;if(null!==v){v.return=a.return,Qs=v;break e}Qs=a.return}}var w=e.current;for(Qs=w;null!==Qs;){var b=(s=Qs).child;if(0!==(2064&s.subtreeFlags)&&null!==b)b.return=s,Qs=b;else e:for(s=w;null!==Qs;){if(0!==(2048&(l=Qs).flags))try{switch(l.tag){case 0:case 11:case 15:rl(9,l)}}catch(E){kc(l,l.return,E)}if(l===s){Qs=null;break e}var x=l.sibling;if(null!==x){x.return=l.return,Qs=x;break e}Qs=l.return}}if(Al=i,Wi(),ot&&"function"===typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(it,e)}catch(E){}r=!0}return r}finally{wt=n,Pl.transition=t}}return!1}function Cc(e,t,n){e=Bo(e,t=fs(0,t=cs(n,t),1),1),t=ec(),null!==e&&(yt(e,1,t),rc(e,t))}function kc(e,t,n){if(3===e.tag)Cc(e,e,n);else for(;null!==t;){if(3===t.tag){Cc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Zl||!Zl.has(r))){t=Bo(t,e=ps(t,e=cs(n,e),1),1),e=ec(),null!==t&&(yt(t,1,e),rc(t,e));break}}t=t.return}}function _c(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&n,Tl===e&&(Ol&n)===n&&(4===Ml||3===Ml&&(130023424&Ol)===Ol&&500>Je()-Fl?hc(e,0):Ll|=n),rc(e,t)}function Sc(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ut,0===(130023424&(ut<<=1))&&(ut=4194304)));var n=ec();null!==(e=$o(e,t))&&(yt(e,t,n),rc(e,n))}function Pc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Sc(e,n)}function Ac(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(t),Sc(e,n)}function Tc(e,t){return Ve(e,t)}function Ic(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oc(e,t,n,r){return new Ic(e,t,n,r)}function Nc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Rc(e,t){var n=e.alternate;return null===n?((n=Oc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Mc(e,t,n,r,i,a){var s=2;if(r=e,"function"===typeof e)Nc(e)&&(s=1);else if("string"===typeof e)s=5;else e:switch(e){case C:return $c(n.children,i,a,t);case k:s=8,i|=8;break;case _:return(e=Oc(12,n,t,2|i)).elementType=_,e.lanes=a,e;case T:return(e=Oc(13,n,t,i)).elementType=T,e.lanes=a,e;case I:return(e=Oc(19,n,t,i)).elementType=I,e.lanes=a,e;case R:return jc(n,i,a,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case S:s=10;break e;case P:s=9;break e;case A:s=11;break e;case O:s=14;break e;case N:s=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=Oc(s,n,t,i)).elementType=e,t.type=r,t.lanes=a,t}function $c(e,t,n,r){return(e=Oc(7,e,r,t)).lanes=n,e}function jc(e,t,n,r){return(e=Oc(22,e,r,t)).elementType=R,e.lanes=n,e.stateNode={isHidden:!1},e}function Uc(e,t,n){return(e=Oc(6,e,null,t)).lanes=n,e}function Lc(e,t,n){return(t=Oc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dc(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bc(e,t,n,r,i,o,a,s,l){return e=new Dc(e,t,n,s,l),1===t?(t=1,!0===o&&(t|=8)):t=0,o=Oc(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uo(o),e}function Fc(e){if(!e)return Pi;e:{if(We(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ni(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var n=e.type;if(Ni(n))return $i(e,n,t)}return t}function Wc(e,t,n,r,i,o,a,s,l){return(e=Bc(n,r,!0,e,0,o,0,s,l)).context=Fc(null),n=e.current,(o=Do(r=ec(),i=tc(n))).callback=void 0!==t&&null!==t?t:null,Bo(n,o,i),e.current.lanes=i,yt(e,i,r),rc(e,r),e}function zc(e,t,n,r){var i=t.current,o=ec(),a=tc(i);return n=Fc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Do(o,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Bo(i,t,a))&&(nc(e,i,a,o),Fo(e,i,a)),a}function qc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Hc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Zc(e,t){Hc(e,t),(e=e.alternate)&&Hc(e,t)}Cl=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Ti.current)ws=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return ws=!1,function(e,t,n){switch(t.tag){case 3:Ts(t),po();break;case 5:Qo(t);break;case 1:Ni(t.type)&&ji(t);break;case 4:Yo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Si(Co,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Si(ea,1&ea.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Us(e,t,n):(Si(ea,1&ea.current),null!==(e=qs(e,t,n))?e.sibling:null);Si(ea,1&ea.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Ws(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Si(ea,ea.current),r)break;return null;case 22:case 23:return t.lanes=0,ks(e,t,n)}return qs(e,t,n)}(e,t,n);ws=0!==(131072&e.flags)}else ws=!1,io&&0!==(1048576&t.flags)&&Xi(t,Zi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zs(e,t),e=t.pendingProps;var i=Oi(t,Ai.current);Io(t,n),i=ga(null,t,r,e,i,n);var a=ya();return t.flags|=1,"object"===typeof i&&null!==i&&"function"===typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ni(r)?(a=!0,ji(t)):a=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Uo(t),i.updater=is,t.stateNode=i,i._reactInternals=t,ls(t,r,e,n),t=As(null,t,r,!0,a,n)):(t.tag=0,io&&a&&eo(t),bs(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zs(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"===typeof e)return Nc(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===A)return 11;if(e===O)return 14}return 2}(r),e=ns(r,e),i){case 0:t=Ss(null,t,r,e,n);break e;case 1:t=Ps(null,t,r,e,n);break e;case 11:t=xs(null,t,r,e,n);break e;case 14:t=Es(null,t,r,ns(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,Ss(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 1:return r=t.type,i=t.pendingProps,Ps(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 3:e:{if(Ts(t),null===e)throw Error(o(387));r=t.pendingProps,i=(a=t.memoizedState).element,Lo(e,t),zo(t,r,null,n);var s=t.memoizedState;if(r=s.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=Is(e,t,r,n,i=cs(Error(o(423)),t));break e}if(r!==i){t=Is(e,t,r,n,i=cs(Error(o(424)),t));break e}for(ro=ci(t.stateNode.containerInfo.firstChild),no=t,io=!0,oo=null,n=Eo(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(po(),r===i){t=qs(e,t,n);break e}bs(e,t,r,n)}t=t.child}return t;case 5:return Qo(t),null===e&&co(t),r=t.type,i=t.pendingProps,a=null!==e?e.memoizedProps:null,s=i.children,ni(r,i)?s=null:null!==a&&ni(r,a)&&(t.flags|=32),_s(e,t),bs(e,t,s,n),t.child;case 6:return null===e&&co(t),null;case 13:return Us(e,t,n);case 4:return Yo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=xo(t,null,r,n):bs(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,xs(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 7:return bs(e,t,t.pendingProps,n),t.child;case 8:case 12:return bs(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,s=i.value,Si(Co,r._currentValue),r._currentValue=s,null!==a)if(sr(a.value,s)){if(a.children===i.children&&!Ti.current){t=qs(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var l=a.dependencies;if(null!==l){s=a.child;for(var c=l.firstContext;null!==c;){if(c.context===r){if(1===a.tag){(c=Do(-1,n&-n)).tag=2;var u=a.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}a.lanes|=n,null!==(c=a.alternate)&&(c.lanes|=n),To(a.return,n,t),l.lanes|=n;break}c=c.next}}else if(10===a.tag)s=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(s=a.return))throw Error(o(341));s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),To(s,n,t),s=a.sibling}else s=a.child;if(null!==s)s.return=a;else for(s=a;null!==s;){if(s===t){s=null;break}if(null!==(a=s.sibling)){a.return=s.return,s=a;break}s=s.return}a=s}bs(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Io(t,n),r=r(i=Oo(i)),t.flags|=1,bs(e,t,r,n),t.child;case 14:return i=ns(r=t.type,t.pendingProps),Es(e,t,r,i=ns(r.type,i),n);case 15:return Cs(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ns(r,i),zs(e,t),t.tag=1,Ni(r)?(e=!0,ji(t)):e=!1,Io(t,n),as(t,r,i),ls(t,r,i,n),As(null,t,r,!0,e,n);case 19:return Ws(e,t,n);case 22:return ks(e,t,n)}throw Error(o(156,t.tag))};var Vc="function"===typeof reportError?reportError:function(e){console.error(e)};function Kc(e){this._internalRoot=e}function Gc(e){this._internalRoot=e}function Yc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Jc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Qc(){}function Xc(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if("function"===typeof i){var s=i;i=function(){var e=qc(a);s.call(e)}}zc(t,a,e,i)}else a=function(e,t,n,r,i){if(i){if("function"===typeof r){var o=r;r=function(){var e=qc(a);o.call(e)}}var a=Wc(t,r,e,0,null,!1,0,"",Qc);return e._reactRootContainer=a,e[pi]=a.current,Wr(8===e.nodeType?e.parentNode:e),uc(),a}for(;i=e.lastChild;)e.removeChild(i);if("function"===typeof r){var s=r;r=function(){var e=qc(l);s.call(e)}}var l=Bc(e,0,!1,null,0,!1,0,"",Qc);return e._reactRootContainer=l,e[pi]=l.current,Wr(8===e.nodeType?e.parentNode:e),uc((function(){zc(t,l,n,r)})),l}(n,t,e,i,r);return qc(a)}Gc.prototype.render=Kc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));zc(e,t,null,null)},Gc.prototype.unmount=Kc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc((function(){zc(null,e,null,null)})),t[pi]=null}},Gc.prototype.unstable_scheduleHydration=function(e){if(e){var t=kt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&0!==t&&t<Rt[n].priority;n++);Rt.splice(n,0,e),0===n&&Ut(e)}},xt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(vt(t,1|n),rc(t,Je()),0===(6&Al)&&(Wl=Je()+500,Wi()))}break;case 13:uc((function(){var t=$o(e,1);if(null!==t){var n=ec();nc(t,e,1,n)}})),Zc(e,1)}},Et=function(e){if(13===e.tag){var t=$o(e,134217728);if(null!==t)nc(t,e,134217728,ec());Zc(e,134217728)}},Ct=function(e){if(13===e.tag){var t=tc(e),n=$o(e,t);if(null!==n)nc(n,e,t,ec());Zc(e,t)}},kt=function(){return wt},_t=function(e,t){var n=wt;try{return wt=e,t()}finally{wt=n}},Ee=function(e,t,n){switch(t){case"input":if(Q(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=xi(r);if(!i)throw Error(o(90));V(r),Q(r,i)}}}break;case"textarea":oe(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Ae=cc,Te=uc;var eu={usingClientEntryPoint:!1,Events:[wi,bi,xi,Se,Pe,cc]},tu={findFiberByHostInstance:vi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nu={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=He(e))?null:e.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{it=ru.inject(nu),ot=ru}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eu,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Yc(t))throw Error(o(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:E,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Yc(e))throw Error(o(299));var n=!1,r="",i=Vc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Bc(e,1,!1,null,0,n,0,r,i),e[pi]=t.current,Wr(8===e.nodeType?e.parentNode:e),new Kc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=He(t))?null:e.stateNode},t.flushSync=function(e){return uc(e)},t.hydrate=function(e,t,n){if(!Jc(t))throw Error(o(200));return Xc(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Yc(e))throw Error(o(405));var r=null!=n&&n.hydratedSources||null,i=!1,a="",s=Vc;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onRecoverableError&&(s=n.onRecoverableError)),t=Wc(t,null,e,1,null!=n?n:null,i,0,a,s),e[pi]=t.current,Wr(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Gc(t)},t.render=function(e,t,n){if(!Jc(t))throw Error(o(200));return Xc(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Jc(e))throw Error(o(40));return!!e._reactRootContainer&&(uc((function(){Xc(null,null,e,!1,(function(){e._reactRootContainer=null,e[pi]=null}))})),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Jc(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return Xc(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},4391:(e,t,n)=>{"use strict";var r=n(7950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},7950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(2730)},1153:(e,t,n)=>{"use strict";var r=n(5043),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!l.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:u,props:o,_owner:s.current}}t.jsx=c,t.jsxs=c},4202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),f=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}function v(){}function w(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var b=w.prototype=new v;b.constructor=w,m(b,y.prototype),b.isPureReactComponent=!0;var x=Array.isArray,E=Object.prototype.hasOwnProperty,C={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,r){var i,o={},a=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)E.call(t,i)&&!k.hasOwnProperty(i)&&(o[i]=t[i]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===o[i]&&(o[i]=l[i]);return{$$typeof:n,type:e,key:a,ref:s,props:o,_owner:C.current}}function S(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function A(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,i,o,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return a=a(l=e),e=""===o?"."+A(l,0):o,x(a)?(i="",null!=e&&(i=e.replace(P,"$&/")+"/"),T(a,t,i,"",(function(e){return e}))):null!=a&&(S(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,i+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+e)),t.push(a)),1;if(l=0,o=""===o?".":o+":",x(e))for(var c=0;c<e.length;c++){var u=o+A(s=e[c],c);l+=T(s,t,i,u,a)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)l+=T(s=s.value,t,i,u=o+A(s,c++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function I(e,t,n){if(null==e)return e;var r=[],i=0;return T(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},R={transition:null},M={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:R,ReactCurrentOwner:C};function $(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:I,forEach:function(e,t,n){I(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return I(e,(function(){t++})),t},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=i,t.Profiler=a,t.PureComponent=w,t.StrictMode=o,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,t.act=$,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=m({},e.props),o=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=C.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)E.call(t,c)&&!k.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}return{$$typeof:n,type:e.type,key:o,ref:a,props:i,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=R.transition;R.transition={};try{e()}finally{R.transition=t}},t.unstable_act=$,t.useCallback=function(e,t){return N.current.useCallback(e,t)},t.useContext=function(e){return N.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return N.current.useDeferredValue(e)},t.useEffect=function(e,t){return N.current.useEffect(e,t)},t.useId=function(){return N.current.useId()},t.useImperativeHandle=function(e,t,n){return N.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return N.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return N.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return N.current.useMemo(e,t)},t.useReducer=function(e,t,n){return N.current.useReducer(e,t,n)},t.useRef=function(e){return N.current.useRef(e)},t.useState=function(e){return N.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return N.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return N.current.useTransition()},t.version="18.3.1"},5043:(e,t,n)=>{"use strict";e.exports=n(4202)},579:(e,t,n)=>{"use strict";e.exports=n(1153)},7234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<o(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,a=i>>>1;r<a;){var s=2*(r+1)-1,l=e[s],c=s+1,u=e[c];if(0>o(l,n))c<i&&0>o(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else{if(!(c<i&&0>o(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,h=null,f=3,p=!1,m=!1,g=!1,y="function"===typeof setTimeout?setTimeout:null,v="function"===typeof clearTimeout?clearTimeout:null,w="undefined"!==typeof setImmediate?setImmediate:null;function b(e){for(var t=r(u);null!==t;){if(null===t.callback)i(u);else{if(!(t.startTime<=e))break;i(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function x(e){if(g=!1,b(e),!m)if(null!==r(c))m=!0,R(E);else{var t=r(u);null!==t&&M(x,t.startTime-e)}}function E(e,n){m=!1,g&&(g=!1,v(S),S=-1),p=!0;var o=f;try{for(b(n),h=r(c);null!==h&&(!(h.expirationTime>n)||e&&!T());){var a=h.callback;if("function"===typeof a){h.callback=null,f=h.priorityLevel;var s=a(h.expirationTime<=n);n=t.unstable_now(),"function"===typeof s?h.callback=s:h===r(c)&&i(c),b(n)}else i(c);h=r(c)}if(null!==h)var l=!0;else{var d=r(u);null!==d&&M(x,d.startTime-n),l=!1}return l}finally{h=null,f=o,p=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var C,k=!1,_=null,S=-1,P=5,A=-1;function T(){return!(t.unstable_now()-A<P)}function I(){if(null!==_){var e=t.unstable_now();A=e;var n=!0;try{n=_(!0,e)}finally{n?C():(k=!1,_=null)}}else k=!1}if("function"===typeof w)C=function(){w(I)};else if("undefined"!==typeof MessageChannel){var O=new MessageChannel,N=O.port2;O.port1.onmessage=I,C=function(){N.postMessage(null)}}else C=function(){y(I,0)};function R(e){_=e,k||(k=!0,C())}function M(e,n){S=y((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,R(E))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,i,o){var a=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?a+o:a:o=a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:o,expirationTime:s=o+s,sortIndex:-1},o>a?(e.sortIndex=o,n(u,e),null===r(c)&&e===r(u)&&(g?(v(S),S=-1):g=!0,M(x,o-a))):(e.sortIndex=s,n(c,e),m||p||(m=!0,R(E))),e},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}},8853:(e,t,n)=>{"use strict";e.exports=n(7234)},1289:e=>{"use strict";e.exports=(e,t)=>{if("string"!==typeof e||"string"!==typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const n=e.indexOf(t);return-1===n?[e]:[e.slice(0,n),e.slice(n+t.length)]}},7491:e=>{"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))},5956:(e,t,n)=>{"use strict";var r=n(5043);var i="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},o=r.useState,a=r.useEffect,s=r.useLayoutEffect,l=r.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(r){return!0}}var u="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=o({inst:{value:n,getSnapshot:t}}),i=r[0].inst,u=r[1];return s((function(){i.value=n,i.getSnapshot=t,c(i)&&u({inst:i})}),[e,n,t]),a((function(){return c(i)&&u({inst:i}),e((function(){c(i)&&u({inst:i})}))}),[e]),l(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:u},5039:(e,t,n)=>{"use strict";var r=n(5043),i=n(9461);var o="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},a=i.useSyncExternalStore,s=r.useRef,l=r.useEffect,c=r.useMemo,u=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var d=s(null);if(null===d.current){var h={hasValue:!1,value:null};d.current=h}else h=d.current;d=c((function(){function e(e){if(!l){if(l=!0,a=e,e=r(e),void 0!==i&&h.hasValue){var t=h.value;if(i(t,e))return s=t}return s=e}if(t=s,o(a,e))return t;var n=r(e);return void 0!==i&&i(t,n)?t:(a=e,s=n)}var a,s,l=!1,c=void 0===n?null:n;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]}),[t,n,r,i]);var f=a(e,d[0],d[1]);return l((function(){h.hasValue=!0,h.value=f}),[f]),u(f),f}},9461:(e,t,n)=>{"use strict";e.exports=n(5956)},8443:(e,t,n)=>{"use strict";e.exports=n(5039)},9432:()=>{},6830:(e,t,n)=>{"use strict";n.d(t,{mN:()=>S,AH:()=>c,W3:()=>C,Ec:()=>k,iz:()=>l});const r=globalThis,i=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),a=new WeakMap;class s{constructor(e,t,n){if(this._$cssResult$=!0,n!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const n=void 0!==t&&1===t.length;n&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&a.set(t,e))}return e}toString(){return this.cssText}}const l=e=>new s("string"==typeof e?e:e+"",void 0,o),c=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const i=1===e.length?e[0]:n.reduce(((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[r+1]),e[0]);return new s(i,e,o)},u=(e,t)=>{if(i)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const n of t){const t=document.createElement("style"),i=r.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=n.cssText,e.appendChild(t)}},d=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return l(t)})(e):e,{is:h,defineProperty:f,getOwnPropertyDescriptor:p,getOwnPropertyNames:m,getOwnPropertySymbols:g,getPrototypeOf:y}=Object,v=globalThis,w=v.trustedTypes,b=w?w.emptyScript:"",x=v.reactiveElementPolyfillSupport,E=(e,t)=>e,C={toAttribute(e,t){switch(t){case Boolean:e=e?b:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},k=(e,t)=>!h(e,t),_={attribute:!0,type:String,converter:C,reflect:!1,hasChanged:k};Symbol.metadata??=Symbol("metadata"),v.litPropertyMetadata??=new WeakMap;class S extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_;if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),r=this.getPropertyDescriptor(e,n,t);void 0!==r&&f(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){const{get:r,set:i}=p(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return r?.call(this)},set(t){const o=r?.call(this);i.call(this,t),this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;const e=y(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){const e=this.properties,t=[...m(e),...g(e)];for(const n of t)this.createProperty(n,e[n])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const e=this._$Eu(t,n);void 0!==e&&this._$Eh.set(e,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(d(e))}else void 0!==e&&t.push(d(e));return t}static _$Eu(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return u(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EC(e,t){const n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(void 0!==r&&!0===n.reflect){const i=(void 0!==n.converter?.toAttribute?n.converter:C).toAttribute(t,n.type);this._$Em=e,null==i?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){const n=this.constructor,r=n._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=n.getPropertyOptions(r),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:C;this._$Em=r,this[r]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,n){if(void 0!==e){if(n??=this.constructor.getPropertyOptions(e),!(n.hasChanged??k)(this[e],t))return;this.P(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,n]of e)!0!==n.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],n)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[E("elementProperties")]=new Map,S[E("finalized")]=new Map,x?.({ReactiveElement:S}),(v.reactiveElementVersions??=[]).push("2.0.4")},2945:(e,t,n)=>{"use strict";n.d(t,{r:()=>a});var r=n(446),i=n(2658),o=n(8092);r.extend(o),r.extend(i),r.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%s sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}});const a={getYear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(new Date).toISOString();return r(e).year()},getRelativeDateFromNow:e=>r(e).fromNow(!0)}},9535:(e,t,n)=>{"use strict";n.d(t,{Uj:()=>c,Np:()=>A,$m:()=>G,TP:()=>L,x4:()=>q,aK:()=>x,oU:()=>a,wE:()=>s,En:()=>N,W3:()=>j,p_:()=>_,Hd:()=>w,z3:()=>C,IN:()=>M,aS:()=>Y,jF:()=>Z,Pt:()=>B,iT:()=>m,Wn:()=>K,WC:()=>W});var r=n(8993);function i(e,t,n,i){let o=e[t];return(0,r.B1)(e,(()=>{const r=e[t];Object.is(o,r)||n(o=r)}),i)}Symbol();const o="https://secure.web3modal.com",a={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:o,SECURE_SITE_DASHBOARD:`${o}/dashboard`,SECURE_SITE_FAVICON:`${o}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet"}},s={isMobile:()=>"undefined"!==typeof window&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid(){const e=window.navigator.userAgent.toLowerCase();return s.isMobile()&&e.includes("android")},isIos(){const e=window.navigator.userAgent.toLowerCase();return s.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isClient:()=>"undefined"!==typeof window,isPairingExpired:e=>!e||e-Date.now()<=a.TEN_SEC_MS,isAllowedRetry:e=>Date.now()-e>=a.ONE_SEC_MS,copyToClopboard(e){navigator.clipboard.writeText(e)},getPairingExpiry:()=>Date.now()+a.FOUR_MINUTES_MS,getPlainAddress:e=>e.split(":")[2],wait:async e=>new Promise((t=>{setTimeout(t,e)})),debounce(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return function(){for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];t&&clearTimeout(t),t=setTimeout((function(){e(...i)}),n)}},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),formatNativeUrl(e,t){if(s.isHttpUrl(e))return this.formatUniversalUrl(e,t);let n=e;n.includes("://")||(n=e.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`);return{redirect:`${n}wc?uri=${encodeURIComponent(t)}`,href:n}},formatUniversalUrl(e,t){if(!s.isHttpUrl(e))return this.formatNativeUrl(e,t);let n=e;n.endsWith("/")||(n=`${n}/`);return{redirect:`${n}wc?uri=${encodeURIComponent(t)}`,href:n}},openHref(e,t){window.open(e,t,"noreferrer noopener")},async preloadImage(e){const t=new Promise(((t,n)=>{const r=new Image;r.onload=t,r.onerror=n,r.crossOrigin="anonymous",r.src=e}));return Promise.race([t,s.wait(2e3)])},formatBalance(e,t){let n;if("0"===e)n="0.000";else if("string"===typeof e){const t=Number(e);t&&(n=t.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return n?`${n} ${t}`:`0.000 ${t}`},isRestrictedRegion(){try{const{timeZone:e}=(new Intl.DateTimeFormat).resolvedOptions(),t=e.toUpperCase();return a.RESTRICTED_TIMEZONES.includes(t)}catch{return!1}},getApiUrl:()=>s.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com",getBlockchainApiUrl:()=>s.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com",getAnalyticsUrl:()=>s.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com",getUUID:()=>crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,(e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})),parseError:e=>"string"===typeof e?e:"string"===typeof e?.issues?.[0]?.message?e.issues[0].message:e instanceof Error?e.message:"Unknown error"},l=(0,r.BX)({isConnected:!1}),c={state:l,subscribe:e=>(0,r.B1)(l,(()=>e(l))),subscribeKey:(e,t)=>i(l,e,t),setIsConnected(e){l.isConnected=e},setCaipAddress(e){l.caipAddress=e,l.address=e?s.getPlainAddress(e):void 0},setBalance(e,t){l.balance=e,l.balanceSymbol=t},setProfileName(e){l.profileName=e},setProfileImage(e){l.profileImage=e},setAddressExplorerUrl(e){l.addressExplorerUrl=e},resetAccount(){l.isConnected=!1,l.caipAddress=void 0,l.address=void 0,l.balance=void 0,l.balanceSymbol=void 0,l.profileName=void 0,l.profileImage=void 0,l.addressExplorerUrl=void 0}};class u{constructor(e){let{baseUrl:t}=e;this.baseUrl=t}async get(e){let{headers:t,...n}=e;const r=this.createUrl(n);return(await fetch(r,{method:"GET",headers:t})).json()}async getBlob(e){let{headers:t,...n}=e;const r=this.createUrl(n);return(await fetch(r,{method:"GET",headers:t})).blob()}async post(e){let{body:t,headers:n,...r}=e;const i=this.createUrl(r);return(await fetch(i,{method:"POST",headers:n,body:t?JSON.stringify(t):void 0})).json()}async put(e){let{body:t,headers:n,...r}=e;const i=this.createUrl(r);return(await fetch(i,{method:"PUT",headers:n,body:t?JSON.stringify(t):void 0})).json()}async delete(e){let{body:t,headers:n,...r}=e;const i=this.createUrl(r);return(await fetch(i,{method:"DELETE",headers:n,body:t?JSON.stringify(t):void 0})).json()}createUrl(e){let{path:t,params:n}=e;const r=new URL(t,this.baseUrl);return n&&Object.entries(n).forEach((e=>{let[t,n]=e;n&&r.searchParams.append(t,n)})),r}}const d="WALLETCONNECT_DEEPLINK_CHOICE",h="@w3m/recent",f="@w3m/connected_wallet_image_url",p="@w3m/connected_connector",m={setWalletConnectDeepLink(e){let{href:t,name:n}=e;try{localStorage.setItem(d,JSON.stringify({href:t,name:n}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const e=localStorage.getItem(d);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(d)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(e){try{const t=m.getRecentWallets();t.find((t=>t.id===e.id))||(t.unshift(e),t.length>2&&t.pop(),localStorage.setItem(h,JSON.stringify(t)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const e=localStorage.getItem(h);return e?JSON.parse(e):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(e){try{localStorage.setItem(f,e)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(f)}catch{console.info("Unable to set Connected Wallet Image Url")}},setConnectedConnector(e){try{localStorage.setItem(p,e)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(p)}catch{console.info("Unable to get Connected Connector")}}},g=(0,r.BX)({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),y={state:g,subscribeNetworkImages:e=>(0,r.B1)(g.networkImages,(()=>e(g.networkImages))),subscribeKey:(e,t)=>i(g,e,t),setWalletImage(e,t){g.walletImages[e]=t},setNetworkImage(e,t){g.networkImages[e]=t},setConnectorImage(e,t){g.connectorImages[e]=t},setTokenImage(e,t){g.tokenImages[e]=t}},v=(0,r.BX)({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),w={state:v,subscribeKey:(e,t)=>i(v,e,t),setProjectId(e){v.projectId=e},setIncludeWalletIds(e){v.includeWalletIds=e},setExcludeWalletIds(e){v.excludeWalletIds=e},setFeaturedWalletIds(e){v.featuredWalletIds=e},setTokens(e){v.tokens=e},setTermsConditionsUrl(e){v.termsConditionsUrl=e},setPrivacyPolicyUrl(e){v.privacyPolicyUrl=e},setCustomWallets(e){v.customWallets=e},setEnableAnalytics(e){v.enableAnalytics=e},setSdkVersion(e){v.sdkVersion=e},setMetadata(e){v.metadata=e}},b=(0,r.BX)({connectors:[]}),x={state:b,subscribeKey:(e,t)=>i(b,e,t),setConnectors(e){b.connectors=e.map((e=>(0,r.KR)(e)))},addConnector(e){if(b.connectors.push((0,r.KR)(e)),"w3mEmail"===e.id){const t=e,n=(0,r.P9)(w.state);t?.provider?.syncDappData?.({metadata:n.metadata,sdkVersion:n.sdkVersion,projectId:n.projectId})}},getEmailConnector:()=>b.connectors.find((e=>"EMAIL"===e.type)),getAnnouncedConnectorRdns:()=>b.connectors.filter((e=>"ANNOUNCED"===e.type)).map((e=>e.info?.rdns)),getConnectors:()=>b.connectors},E=(0,r.BX)({open:!1,selectedNetworkId:void 0}),C={state:E,subscribe:e=>(0,r.B1)(E,(()=>e(E))),set(e){Object.assign(E,{...E,...e})}},k=(0,r.BX)({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),_={state:k,subscribeKey:(e,t)=>i(k,e,t),_getClient(){if(!k._client)throw new Error("NetworkController client not set");return k._client},setClient(e){k._client=(0,r.KR)(e)},setCaipNetwork(e){k.caipNetwork=e,C.set({selectedNetworkId:e?.id})},setDefaultCaipNetwork(e){k.caipNetwork=e,C.set({selectedNetworkId:e?.id}),k.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(e){k.requestedCaipNetworks=e},async getApprovedCaipNetworksData(){const e=await this._getClient().getApprovedCaipNetworksData();k.supportsAllNetworks=e.supportsAllNetworks,k.approvedCaipNetworkIds=e.approvedCaipNetworkIds},async switchActiveNetwork(e){await this._getClient().switchCaipNetwork(e),k.caipNetwork=e},resetNetwork(){k.isDefaultCaipNetwork||(k.caipNetwork=void 0),k.approvedCaipNetworkIds=void 0,k.supportsAllNetworks=!0}},S=new u({baseUrl:s.getApiUrl()}),P=(0,r.BX)({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),A={state:P,subscribeKey:(e,t)=>i(P,e,t),_getApiHeaders(){const{projectId:e,sdkType:t,sdkVersion:n}=w.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":n}},async _fetchWalletImage(e){const t=`${S.baseUrl}/getWalletImage/${e}`,n=await S.getBlob({path:t,headers:A._getApiHeaders()});y.setWalletImage(e,URL.createObjectURL(n))},async _fetchNetworkImage(e){const t=`${S.baseUrl}/public/getAssetImage/${e}`,n=await S.getBlob({path:t,headers:A._getApiHeaders()});y.setNetworkImage(e,URL.createObjectURL(n))},async _fetchConnectorImage(e){const t=`${S.baseUrl}/public/getAssetImage/${e}`,n=await S.getBlob({path:t,headers:A._getApiHeaders()});y.setConnectorImage(e,URL.createObjectURL(n))},async fetchNetworkImages(){const{requestedCaipNetworks:e}=_.state,t=e?.map((e=>{let{imageId:t}=e;return t})).filter(Boolean);t&&await Promise.allSettled(t.map((e=>A._fetchNetworkImage(e))))},async fetchConnectorImages(){const{connectors:e}=x.state,t=e.map((e=>{let{imageId:t}=e;return t})).filter(Boolean);await Promise.allSettled(t.map((e=>A._fetchConnectorImage(e))))},async fetchFeaturedWallets(){const{featuredWalletIds:e}=w.state;if(e?.length){const{data:t}=await S.get({path:"/getWallets",headers:A._getApiHeaders(),params:{page:"1",entries:e?.length?String(e.length):"4",include:e?.join(",")}});t.sort(((t,n)=>e.indexOf(t.id)-e.indexOf(n.id)));const n=t.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled(n.map((e=>A._fetchWalletImage(e)))),P.featured=t}},async fetchRecommendedWallets(){const{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:n}=w.state,r=[...t??[],...n??[]].filter(Boolean),{data:i,count:o}=await S.get({path:"/getWallets",headers:A._getApiHeaders(),params:{page:"1",entries:"4",include:e?.join(","),exclude:r?.join(",")}}),a=m.getRecentWallets(),s=i.map((e=>e.image_id)).filter(Boolean),l=a.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled([...s,...l].map((e=>A._fetchWalletImage(e)))),P.recommended=i,P.count=o??0},async fetchWallets(e){let{page:t}=e;const{includeWalletIds:n,excludeWalletIds:r,featuredWalletIds:i}=w.state,o=[...P.recommended.map((e=>{let{id:t}=e;return t})),...r??[],...i??[]].filter(Boolean),{data:a,count:l}=await S.get({path:"/getWallets",headers:A._getApiHeaders(),params:{page:String(t),entries:"40",include:n?.join(","),exclude:o.join(",")}}),c=a.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled([...c.map((e=>A._fetchWalletImage(e))),s.wait(300)]),P.wallets=[...P.wallets,...a],P.count=l>P.count?l:P.count,P.page=t},async searchWallet(e){let{search:t}=e;const{includeWalletIds:n,excludeWalletIds:r}=w.state;P.search=[];const{data:i}=await S.get({path:"/getWallets",headers:A._getApiHeaders(),params:{page:"1",entries:"100",search:t,include:n?.join(","),exclude:r?.join(",")}}),o=i.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled([...o.map((e=>A._fetchWalletImage(e))),s.wait(300)]),P.search=i},prefetch(){P.prefetchPromise=Promise.race([Promise.allSettled([A.fetchFeaturedWallets(),A.fetchRecommendedWallets(),A.fetchNetworkImages(),A.fetchConnectorImages()]),s.wait(3e3)])}},T=new u({baseUrl:s.getAnalyticsUrl()}),I=["MODAL_CREATED"],O=(0,r.BX)({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),N={state:O,subscribe:e=>(0,r.B1)(O,(()=>e(O))),_getApiHeaders(){const{projectId:e,sdkType:t,sdkVersion:n}=w.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":n}},async _sendAnalyticsEvent(e){try{if(I.includes(e.data.event)||"undefined"===typeof window)return;await T.post({path:"/e",headers:N._getApiHeaders(),body:{eventId:s.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:e.data}})}catch{}},sendEvent(e){O.timestamp=Date.now(),O.data=e,w.state.enableAnalytics&&N._sendAnalyticsEvent(O)}},R=(0,r.BX)({view:"Connect",history:["Connect"]}),M={state:R,subscribeKey:(e,t)=>i(R,e,t),push(e,t){e!==R.view&&(R.view=e,R.history.push(e),R.data=t)},reset(e){R.view=e,R.history=[e]},replace(e,t){R.history.length>1&&R.history.at(-1)!==e&&(R.view=e,R.history[R.history.length-1]=e,R.data=t)},goBack(){if(R.history.length>1){R.history.pop();const[e]=R.history.slice(-1);e&&(R.view=e)}},goBackToIndex(e){if(R.history.length>1){R.history=R.history.slice(0,e+1);const[t]=R.history.slice(-1);t&&(R.view=t)}}},$=(0,r.BX)({loading:!1,open:!1}),j={state:$,subscribe:e=>(0,r.B1)($,(()=>e($))),subscribeKey:(e,t)=>i($,e,t),async open(e){await A.state.prefetchPromise,e?.view?M.reset(e.view):c.state.isConnected?M.reset("Account"):M.reset("Connect"),$.open=!0,C.set({open:!0}),N.sendEvent({type:"track",event:"MODAL_OPEN"})},close(){$.open=!1,C.set({open:!1}),N.sendEvent({type:"track",event:"MODAL_CLOSE"})},setLoading(e){$.loading=e}},U=new u({baseUrl:s.getBlockchainApiUrl()}),L={fetchIdentity(e){let{caipChainId:t,address:n}=e;return U.get({path:`/v1/identity/${n}`,params:{chainId:t,projectId:w.state.projectId}})},fetchTransactions(e){let{account:t,projectId:n,cursor:r}=e;const i=r?{cursor:r}:{};return U.get({path:`/v1/account/${t}/history?projectId=${n}`,params:i})}},D=(0,r.BX)({message:"",variant:"success",open:!1}),B={state:D,subscribeKey:(e,t)=>i(D,e,t),showSuccess(e){D.message=e,D.variant="success",D.open=!0},showError(e){const t=s.parseError(e);D.message=t,D.variant="error",D.open=!0},hide(){D.open=!1}},F=(0,r.BX)({transactions:[],transactionsByYear:{},loading:!1,empty:!1,next:void 0}),W={state:F,subscribe:e=>(0,r.B1)(F,(()=>e(F))),async fetchTransactions(e){const{projectId:t}=w.state;if(!t||!e)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");F.loading=!0;try{const n=await L.fetchTransactions({account:e,projectId:t,cursor:F.next}),r=this.filterSpamTransactions(n.data),i=[...F.transactions,...r];F.loading=!1,F.transactions=i,F.transactionsByYear=this.groupTransactionsByYear(F.transactionsByYear,r),F.empty=0===i.length,F.next=n.next?n.next:void 0}catch(n){N.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:e,projectId:t,cursor:F.next}}),B.showError("Failed to fetch transactions"),F.loading=!1,F.empty=!0}},groupTransactionsByYear(){const e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((t=>{const n=new Date(t.metadata.minedAt).getFullYear();e[n]||(e[n]=[]),e[n]?.push(t)})),e},filterSpamTransactions:e=>e.filter((e=>!e.transfers.every((e=>!0===e.nft_info?.flags.is_spam)))),resetTransactions(){F.transactions=[],F.transactionsByYear={},F.loading=!1,F.empty=!1,F.next=void 0}},z=(0,r.BX)({wcError:!1,buffering:!1}),q={state:z,subscribeKey:(e,t)=>i(z,e,t),_getClient(){if(!z._client)throw new Error("ConnectionController client not set");return z._client},setClient(e){z._client=(0,r.KR)(e)},connectWalletConnect(){z.wcPromise=this._getClient().connectWalletConnect((e=>{z.wcUri=e,z.wcPairingExpiry=s.getPairingExpiry()}))},async connectExternal(e){await(this._getClient().connectExternal?.(e)),m.setConnectedConnector(e.type)},async signMessage(e){return this._getClient().signMessage(e)},checkInstalled(e){return this._getClient().checkInstalled?.(e)},resetWcConnection(){z.wcUri=void 0,z.wcPairingExpiry=void 0,z.wcPromise=void 0,z.wcLinking=void 0,z.recentWallet=void 0,W.resetTransactions(),m.deleteWalletConnectDeepLink()},setWcLinking(e){z.wcLinking=e},setWcError(e){z.wcError=e,z.buffering=!1},setRecentWallet(e){z.recentWallet=e},setBuffering(e){z.buffering=e},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},H=(0,r.BX)({status:"uninitialized",isSiweEnabled:!1}),Z={state:H,subscribeKey:(e,t)=>i(H,e,t),subscribe:e=>(0,r.B1)(H,(()=>e(H))),_getClient(){if(!H._client)throw new Error("SIWEController client not set");return H._client},async getNonce(){const e=this._getClient(),t=await e.getNonce();return this.setNonce(t),t},async getSession(){const e=this._getClient(),t=await e.getSession();return t&&(this.setSession(t),this.setStatus("success")),t},createMessage(e){const t=this._getClient().createMessage(e);return this.setMessage(t),t},async verifyMessage(e){const t=this._getClient();return await t.verifyMessage(e)},async signIn(){const e=this._getClient();return await e.signIn()},async signOut(){const e=this._getClient();await e.signOut(),this.setStatus("ready"),e.onSignOut?.()},onSignIn(e){const t=this._getClient();t.onSignIn?.(e)},onSignOut(){const e=this._getClient();e.onSignOut?.()},setSIWEClient(e){H._client=(0,r.KR)(e),H.status="ready",H.isSiweEnabled=e.options.enabled},setNonce(e){H.nonce=e},setStatus(e){H.status=e},setMessage(e){H.message=e},setSession(e){H.session=e}},V=(0,r.BX)({themeMode:"dark",themeVariables:{}}),K={state:V,subscribe:e=>(0,r.B1)(V,(()=>e(V))),setThemeMode(e){V.themeMode=e},setThemeVariables(e){V.themeVariables={...V.themeVariables,...e}},getSnapshot:()=>(0,r.P9)(V)},G={getWalletImage:e=>e?.image_url?e?.image_url:e?.image_id?y.state.walletImages[e.image_id]:void 0,getNetworkImage:e=>e?.imageUrl?e?.imageUrl:e?.imageId?y.state.networkImages[e.imageId]:void 0,getConnectorImage:e=>e?.imageUrl?e.imageUrl:e?.imageId?y.state.connectorImages[e.imageId]:void 0},Y={goBackOrCloseModal(){M.state.history.length>1?M.goBack():j.close()},navigateAfterNetworkSwitch(){const{history:e}=M.state,t=e.findIndex((e=>"Networks"===e));t>=1?M.goBackToIndex(t-1):j.close()}}},8958:(e,t,n)=>{"use strict";n.r(t),n.d(t,{W3mModal:()=>u});var r=n(9535),i=n(4408),o=n(7022),a=n(8117);const s=o.AH`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var l=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};const c="scroll-lock";let u=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=r.W3.state.open,this.caipAddress=r.Uj.state.address,this.isSiweEnabled=r.jF.state.isSiweEnabled,this.initializeTheming(),r.Np.prefetch(),this.unsubscribe.push(r.W3.subscribeKey("open",(e=>e?this.onOpen():this.onClose())),r.jF.subscribeKey("isSiweEnabled",(e=>{this.isSiweEnabled=e})),r.Uj.subscribe((e=>this.onNewAccountState(e)))),r.En.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.onRemoveKeyboardListener()}render(){return this.open?o.qy`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){this.isSiweEnabled&&"success"!==r.jF.state.status&&await r.x4.disconnect(),r.W3.close()}initializeTheming(){const{themeVariables:e,themeMode:t}=r.Wn.state,n=i.UiHelperUtil.getColorTheme(t);(0,i.initializeTheming)(e,n)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,r.Pt.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=c,e.textContent="\n      html, body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    ",document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${c}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;const e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",(t=>{if("Escape"===t.key)this.handleClose();else if("Tab"===t.key){const{tagName:n}=t.target;!n||n.includes("W3M-")||n.includes("WUI-")||e?.focus()}}),this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAccountState(e){const{isConnected:t,caipAddress:n}=e;if(this.isSiweEnabled){t&&!this.caipAddress&&(this.caipAddress=n),t&&n&&this.caipAddress!==n&&(await r.jF.signOut(),this.onSiweNavigation(),this.caipAddress=n);try{const e=await r.jF.getSession();e&&!t?await r.jF.signOut():t&&!e&&this.onSiweNavigation()}catch(i){t&&this.onSiweNavigation()}}}onSiweNavigation(){this.open?r.IN.push("ConnectingSiwe"):r.W3.open({view:"ConnectingSiwe"})}};u.styles=s,l([(0,a.wk)()],u.prototype,"open",void 0),l([(0,a.wk)()],u.prototype,"caipAddress",void 0),l([(0,a.wk)()],u.prototype,"isSiweEnabled",void 0),u=l([(0,i.customElement)("w3m-modal")],u)},4408:(e,t,n)=>{"use strict";n.r(t),n.d(t,{TransactionUtil:()=>$r,UiHelperUtil:()=>lt,WuiAccountButton:()=>bt,WuiAllWalletsImage:()=>St,WuiAvatar:()=>pt,WuiButton:()=>Tt,WuiCard:()=>y,WuiCardSelect:()=>Bt,WuiCardSelectLoader:()=>Rt,WuiChip:()=>zt,WuiConnectButton:()=>Zt,WuiCtaButton:()=>Gt,WuiEmailInput:()=>nn,WuiFlex:()=>dt,WuiGrid:()=>Ar,WuiIcon:()=>Ee,WuiIconBox:()=>yt,WuiIconLink:()=>an,WuiImage:()=>_e,WuiInputElement:()=>cn,WuiInputNumeric:()=>hn,WuiInputText:()=>Xt,WuiLink:()=>mn,WuiListAccordion:()=>wr,WuiListContent:()=>Er,WuiListItem:()=>vn,WuiListWallet:()=>Mn,WuiListWalletTransaction:()=>_r,WuiLoadingHexagon:()=>Ae,WuiLoadingSpinner:()=>Oe,WuiLoadingThumbnail:()=>Me,WuiLogo:()=>Un,WuiLogoSelect:()=>Bn,WuiNetworkButton:()=>zn,WuiNetworkImage:()=>Ut,WuiNoticeCard:()=>gr,WuiOtp:()=>Zn,WuiQrCode:()=>Qn,WuiSearchBar:()=>tr,WuiSeparator:()=>Or,WuiShimmer:()=>Ue,WuiSnackbar:()=>ir,WuiTabs:()=>sr,WuiTag:()=>On,WuiText:()=>ze,WuiTooltip:()=>ur,WuiTransactionListItem:()=>_n,WuiTransactionListItemLoader:()=>An,WuiTransactionVisual:()=>En,WuiVisual:()=>at,WuiVisualThumbnail:()=>fr,WuiWalletImage:()=>Ct,customElement:()=>p,initializeTheming:()=>s,setColorTheme:()=>l,setThemeVariables:()=>c});var r=n(7022);let i,o,a;function s(e,t){i=document.createElement("style"),o=document.createElement("style"),a=document.createElement("style"),i.textContent=u(e).core.cssText,o.textContent=u(e).dark.cssText,a.textContent=u(e).light.cssText,document.head.appendChild(i),document.head.appendChild(o),document.head.appendChild(a),l(t)}function l(e){o&&a&&("light"===e?(o.removeAttribute("media"),a.media="enabled"):(a.removeAttribute("media"),o.media="enabled"))}function c(e){i&&o&&a&&(i.textContent=u(e).core.cssText,o.textContent=u(e).dark.cssText,a.textContent=u(e).light.cssText)}function u(e){return{core:r.AH`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      :root {
        --w3m-color-mix-strength: ${(0,r.iz)(e?.["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${(0,r.iz)(e?.["--w3m-font-family"]||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${(0,r.iz)(e?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${(0,r.iz)(e?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${(0,r.iz)(e?.["--w3m-z-index"]||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:r.AH`
      :root {
        --w3m-color-mix: ${(0,r.iz)(e?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${(0,r.iz)(e?.["--w3m-accent"]||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: var(--wui-success-glass-015);
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:r.AH`
      :root {
        --w3m-color-mix: ${(0,r.iz)(e?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${(0,r.iz)(e?.["--w3m-accent"]||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}const d=r.AH`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,h=r.AH`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,f=r.AH`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function p(e){return function(t){return"function"===typeof t?function(e,t){return customElements.get(e)||customElements.define(e,t),t}(e,t):function(e,t){const{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(t){customElements.get(e)||customElements.define(e,t)}}}(e,t)}}const m=r.AH`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;var g=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let y=class extends r.WF{render(){return r.qy`<slot></slot>`}};y.styles=[d,m],y=g([p("wui-card")],y);var v=n(8117);const w=r.AH`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,b=r.JW`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,x=r.JW`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,E=r.JW`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,C=r.JW`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,k=r.JW`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,_=r.JW`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,S=r.JW`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,P=r.JW`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,A=r.JW`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,T=r.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,I=r.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,O=r.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,N=r.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,R=r.JW`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,M=r.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,$=r.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,j=r.JW`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,U=r.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,L=r.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,D=r.JW` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,B=r.JW`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,F=r.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,W=r.JW`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,z=r.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,q=r.JW`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,H=r.JW`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Z=r.JW`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,V=r.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,K=r.JW`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,G=r.JW`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Y=r.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,J=r.JW`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,Q=r.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,X=r.JW`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,ee=r.JW`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,te=r.JW`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,ne=r.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,re=r.JW` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,ie=r.JW`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,oe=r.JW`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,ae=r.JW`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,se=r.JW`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,le=r.JW`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,ce=r.JW`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,ue=r.JW`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,de=r.JW`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,he=r.JW`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,fe=r.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,pe=r.JW`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,me=r.JW`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,ge=r.JW`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,ye=r.JW`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,ve=r.JW`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,we=r.JW`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`;var be=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};const xe={allWallets:b,alpha:r.JW`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.687 0.557043C11.1462 0.671832 11.4254 1.13706 11.3106 1.59615C11.2044 2.02082 11.0975 2.51184 10.9822 3.04102C10.7176 4.25623 10.4091 5.6727 9.96482 6.94907C10.1435 7.58939 10.3065 8.16905 10.4935 8.68429C10.6447 9.10072 10.7858 9.39487 10.9179 9.58289C11.0055 9.70747 11.0597 9.74443 11.0748 9.75277C11.096 9.75724 11.1075 9.75764 11.1531 9.71916C11.2342 9.65067 11.3386 9.50891 11.4426 9.28357C11.5416 9.06892 11.614 8.8366 11.662 8.6497C11.6854 8.55831 11.7019 8.48242 11.7122 8.43111C11.7174 8.40555 11.7209 8.38638 11.723 8.37476L11.725 8.36363C11.8 7.89659 12.2395 7.57864 12.7068 7.65342C13.1742 7.72822 13.4925 8.16766 13.4177 8.63494C13.4153 8.64924 13.42 8.62063 13.4177 8.63494L13.4175 8.63596L13.4173 8.63721L13.4168 8.64037L13.4153 8.64924L13.4105 8.67692C13.4064 8.69961 13.4006 8.73069 13.3929 8.76891C13.3776 8.84516 13.3545 8.95091 13.3224 9.07586C13.2593 9.32166 13.1564 9.66085 12.9992 10.0015C12.8469 10.3315 12.6139 10.7288 12.2595 11.0282C11.8757 11.3523 11.35 11.5553 10.7293 11.4312C10.1645 11.3183 9.77597 10.939 9.51527 10.5681C9.2535 10.1957 9.05129 9.7349 8.88212 9.26898C8.87877 9.25975 8.87542 9.25049 8.87208 9.2412C8.03954 10.4941 6.83375 11.4479 5.03926 11.4479C3.48049 11.4479 2.31021 10.7159 1.56788 9.63945C0.846767 8.5938 0.544023 7.25403 0.573206 5.9702C0.60242 4.68505 0.966023 3.36073 1.69055 2.33272C2.42915 1.28475 3.5614 0.531453 5.03927 0.531453C6.44937 0.531453 7.4408 1.29593 8.1276 2.27567C8.48261 2.7821 8.77248 3.36668 9.0177 3.97383C9.1059 3.59106 9.18901 3.20908 9.27086 2.83294C9.39492 2.26277 9.51606 1.70605 9.64752 1.18046C9.76235 0.721369 10.2277 0.442254 10.687 0.557043ZM8.16354 6.87693C8.08689 6.60534 8.01003 6.33741 7.93241 6.08076C7.59522 4.96581 7.22132 3.969 6.72371 3.25914C6.24674 2.57873 5.72135 2.24516 5.03927 2.24516C4.21565 2.24516 3.56947 2.6422 3.09195 3.31975C2.60035 4.01725 2.31013 4.99361 2.28705 6.00913C2.26393 7.02599 2.51041 7.9869 2.97927 8.66676C3.42691 9.31586 4.08734 9.73417 5.03926 9.73417C6.48097 9.73417 7.4216 8.72164 8.14437 6.9249C8.15079 6.90893 8.15718 6.89294 8.16354 6.87693Z" fill="#47A1FF"/>
</svg>`,appStore:x,chromeStore:R,apple:E,arrowBottom:C,arrowLeft:k,arrowRight:_,arrowTop:S,browser:P,checkmark:A,chevronBottom:T,chevronLeft:I,chevronRight:O,chevronTop:N,clock:M,close:$,compass:U,coinPlaceholder:j,copy:L,cursor:D,desktop:B,disconnect:F,discord:W,etherscan:z,extension:q,externalLink:H,facebook:Z,filters:V,github:K,google:G,helpCircle:Y,infoCircle:J,mail:Q,mobile:X,networkPlaceholder:ee,nftPlaceholder:te,off:ne,playStore:re,qrCode:ie,refresh:oe,search:ae,swapHorizontal:se,swapHorizontalBold:le,swapVertical:ce,telegram:ue,twitch:de,twitter:he,twitterIcon:fe,verify:pe,verifyFilled:me,wallet:ye,walletConnect:ve,walletPlaceholder:ge,warningCircle:we};let Ee=class extends r.WF{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n    `,r.qy`${xe[this.name]}`}};Ee.styles=[d,f,w],be([(0,v.MZ)()],Ee.prototype,"size",void 0),be([(0,v.MZ)()],Ee.prototype,"name",void 0),be([(0,v.MZ)()],Ee.prototype,"color",void 0),Ee=be([p("wui-icon")],Ee);const Ce=r.AH`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var ke=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let _e=class extends r.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return r.qy`<img src=${this.src} alt=${this.alt} />`}};_e.styles=[d,f,Ce],ke([(0,v.MZ)()],_e.prototype,"src",void 0),ke([(0,v.MZ)()],_e.prototype,"alt",void 0),_e=ke([p("wui-image")],_e);const Se=r.AH`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Pe=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Ae=class extends r.WF{render(){return r.qy`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Ae.styles=[d,Se],Ae=Pe([p("wui-loading-hexagon")],Ae);const Te=r.AH`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var Ie=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Oe=class extends r.WF{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,r.qy`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};Oe.styles=[d,Te],Ie([(0,v.MZ)()],Oe.prototype,"color",void 0),Ie([(0,v.MZ)()],Oe.prototype,"size",void 0),Oe=Ie([p("wui-loading-spinner")],Oe);const Ne=r.AH`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Re=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Me=class extends r.WF{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,t=36-e,n=116+t,i=245+t,o=360+1.75*t;return r.qy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${n} ${i}"
          stroke-dashoffset=${o}
        />
      </svg>
    `}};Me.styles=[d,Ne],Re([(0,v.MZ)({type:Number})],Me.prototype,"radius",void 0),Me=Re([p("wui-loading-thumbnail")],Me);const $e=r.AH`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var je=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Ue=class extends r.WF{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);\n    `,r.qy`<slot></slot>`}};Ue.styles=[$e],je([(0,v.MZ)()],Ue.prototype,"width",void 0),je([(0,v.MZ)()],Ue.prototype,"height",void 0),je([(0,v.MZ)()],Ue.prototype,"borderRadius",void 0),Ue=je([p("wui-shimmer")],Ue);var Le=n(8531),De=n(533);const Be=(0,De.u$)(class extends De.WL{constructor(e){if(super(e),e.type!==De.OA.ATTRIBUTE||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,t){let[n]=t;if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in n)n[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(n)}const r=e.element.classList;for(const i of this.st)i in n||(r.remove(i),this.st.delete(i));for(const i in n){const e=!!n[i];e===this.st.has(i)||this.nt?.has(i)||(e?(r.add(i),this.st.add(i)):(r.remove(i),this.st.delete(i)))}return Le.c0}}),Fe=r.AH`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-small-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var We=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let ze=class extends r.WF{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,r.qy`<slot class=${Be(e)}></slot>`}};ze.styles=[d,Fe],We([(0,v.MZ)()],ze.prototype,"variant",void 0),We([(0,v.MZ)()],ze.prototype,"color",void 0),We([(0,v.MZ)()],ze.prototype,"align",void 0),ze=We([p("wui-text")],ze);const qe=r.JW`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,He=r.JW`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,Ze=r.JW`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,Ve=r.JW`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,Ke=r.JW`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,Ge=r.JW`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,Ye=r.JW`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,Je=r.JW`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,Qe=r.JW`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,Xe=r.JW`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,et=r.JW`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,tt=r.JW`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,nt=r.JW`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,rt=r.AH`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`;var it=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};const ot={browser:qe,dao:He,defi:Ze,defiAlt:Ve,eth:Ke,layers:Ge,lock:Ye,login:Je,network:Qe,nft:Xe,noun:et,profile:tt,system:nt};let at=class extends r.WF{constructor(){super(...arguments),this.name="browser"}render(){return r.qy`${ot[this.name]}`}};at.styles=[d,rt],it([(0,v.MZ)()],at.prototype,"name",void 0),at=it([p("wui-visual")],at);var st=n(6440);const lt={getSpacingStyles:(e,t)=>Array.isArray(e)?e[t]?`var(--wui-spacing-${e[t]})`:void 0:"string"===typeof e?`var(--wui-spacing-${e})`:void 0,getFormattedDate:e=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e),getHostName:e=>new URL(e).hostname,getTruncateString(e){let{string:t,charsStart:n,charsEnd:r,truncate:i}=e;return t.length<=n+r?t:"end"===i?`${t.substring(0,n)}...`:"start"===i?`...${t.substring(t.length-r)}`:`${t.substring(0,Math.floor(n))}...${t.substring(t.length-Math.floor(r))}`},generateAvatarColors(e){const t=e.toLowerCase().replace(/^0x/iu,"").substring(0,6),n=this.hexToRgb(t),r=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),i=100-3*Number(r?.replace("px","")),o=`${i}% ${i}% at 65% 40%`,a=[];for(let s=0;s<5;s+=1){const e=this.tintColor(n,.15*s);a.push(`rgb(${e[0]}, ${e[1]}, ${e[2]})`)}return`\n    --local-color-1: ${a[0]};\n    --local-color-2: ${a[1]};\n    --local-color-3: ${a[2]};\n    --local-color-4: ${a[3]};\n    --local-color-5: ${a[4]};\n    --local-radial-circle: ${o}\n   `},hexToRgb(e){const t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]},tintColor(e,t){const[n,r,i]=e;return[Math.round(n+(255-n)*t),Math.round(r+(255-r)*t),Math.round(i+(255-i)*t)]},isNumber:e=>/^[0-9]+$/u.test(e),getColorTheme:e=>e||("undefined"!==typeof window&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")},ct=r.AH`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var ut=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let dt=class extends r.WF{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&lt.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&lt.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&lt.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&lt.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&lt.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&lt.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&lt.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&lt.getSpacingStyles(this.margin,3)};\n    `,r.qy`<slot></slot>`}};dt.styles=[d,ct],ut([(0,v.MZ)()],dt.prototype,"flexDirection",void 0),ut([(0,v.MZ)()],dt.prototype,"flexWrap",void 0),ut([(0,v.MZ)()],dt.prototype,"flexBasis",void 0),ut([(0,v.MZ)()],dt.prototype,"flexGrow",void 0),ut([(0,v.MZ)()],dt.prototype,"flexShrink",void 0),ut([(0,v.MZ)()],dt.prototype,"alignItems",void 0),ut([(0,v.MZ)()],dt.prototype,"justifyContent",void 0),ut([(0,v.MZ)()],dt.prototype,"columnGap",void 0),ut([(0,v.MZ)()],dt.prototype,"rowGap",void 0),ut([(0,v.MZ)()],dt.prototype,"gap",void 0),ut([(0,v.MZ)()],dt.prototype,"padding",void 0),ut([(0,v.MZ)()],dt.prototype,"margin",void 0),dt=ut([p("wui-flex")],dt);const ht=r.AH`
  :host {
    display: block;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var ft=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let pt=class extends r.WF{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return r.qy`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",r.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=lt.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};pt.styles=[d,ht],ft([(0,v.MZ)()],pt.prototype,"imageSrc",void 0),ft([(0,v.MZ)()],pt.prototype,"alt",void 0),ft([(0,v.MZ)()],pt.prototype,"address",void 0),pt=ft([p("wui-avatar")],pt);const mt=r.AH`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    box-shadow: 0 0 0 1px var(--local-border);
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var gt=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let yt=class extends r.WF{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,t="lg"===this.size,n="xl"===this.size,i=t?"12%":"16%",o=t?"xxs":n?"s":"3xl",a="gray"===this.background,s="opaque"===this.background,l="accent-100"===this.backgroundColor&&s||"success-100"===this.backgroundColor&&s||"error-100"===this.backgroundColor&&s||"inverse-100"===this.backgroundColor&&s;let c=`var(--wui-color-${this.backgroundColor})`;return l?c=`var(--wui-icon-box-bg-${this.backgroundColor})`:a&&(c=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${c};\n       --local-bg-mix: ${l||a?"100%":i};\n       --local-border-radius: var(--wui-border-radius-${o});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,r.qy` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};yt.styles=[d,h,mt],gt([(0,v.MZ)()],yt.prototype,"size",void 0),gt([(0,v.MZ)()],yt.prototype,"backgroundColor",void 0),gt([(0,v.MZ)()],yt.prototype,"iconColor",void 0),gt([(0,v.MZ)()],yt.prototype,"iconSize",void 0),gt([(0,v.MZ)()],yt.prototype,"background",void 0),gt([(0,v.MZ)({type:Boolean})],yt.prototype,"border",void 0),gt([(0,v.MZ)()],yt.prototype,"borderColor",void 0),gt([(0,v.MZ)()],yt.prototype,"icon",void 0),yt=gt([p("wui-icon-box")],yt);const vt=r.AH`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var wt=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let bt=class extends r.WF{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address="",this.charsStart=4,this.charsEnd=6}render(){return r.qy`
      <button
        ?disabled=${this.disabled}
        class=${(0,st.J)(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${lt.getTruncateString({string:this.address,charsStart:this.isProfileName?18:this.charsStart,charsEnd:this.isProfileName?0:this.charsEnd,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){const e=this.networkSrc?r.qy`<wui-image src=${this.networkSrc}></wui-image>`:r.qy`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return r.qy`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};bt.styles=[d,h,vt],wt([(0,v.MZ)()],bt.prototype,"networkSrc",void 0),wt([(0,v.MZ)()],bt.prototype,"avatarSrc",void 0),wt([(0,v.MZ)()],bt.prototype,"balance",void 0),wt([(0,v.MZ)({type:Boolean})],bt.prototype,"disabled",void 0),wt([(0,v.MZ)({type:Boolean})],bt.prototype,"isProfileName",void 0),wt([(0,v.MZ)()],bt.prototype,"address",void 0),wt([(0,v.MZ)()],bt.prototype,"charsStart",void 0),wt([(0,v.MZ)()],bt.prototype,"charsEnd",void 0),bt=wt([p("wui-account-button")],bt);const xt=r.AH`
  :host {
    position: relative;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-base-150, #1e1f1f);
    padding: 1px;
  }
`;var Et=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Ct=class extends r.WF{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return e="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`\n       --local-border-radius: var(--wui-border-radius-${e});\n       --local-size: var(--wui-wallet-image-size-${this.size});\n   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),r.qy`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?r.qy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?r.qy`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:r.qy`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Ct.styles=[d,xt],Et([(0,v.MZ)()],Ct.prototype,"size",void 0),Et([(0,v.MZ)()],Ct.prototype,"name",void 0),Et([(0,v.MZ)()],Ct.prototype,"imageSrc",void 0),Et([(0,v.MZ)()],Ct.prototype,"walletIcon",void 0),Et([(0,v.MZ)({type:Boolean})],Ct.prototype,"installed",void 0),Et([(0,v.MZ)()],Ct.prototype,"badgeSize",void 0),Ct=Et([p("wui-wallet-image")],Ct);const kt=r.AH`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var _t=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let St=class extends r.WF{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<4;return r.qy`${this.walletImages.slice(0,4).map((e=>{let{src:t,walletName:n}=e;return r.qy`
            <wui-wallet-image
              size="inherit"
              imageSrc=${t}
              name=${(0,st.J)(n)}
            ></wui-wallet-image>
          `}))}
      ${e?[...Array(4-this.walletImages.length)].map((()=>r.qy` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`)):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};St.styles=[d,kt],_t([(0,v.MZ)({type:Array})],St.prototype,"walletImages",void 0),St=_t([p("wui-all-wallets-image")],St);const Pt=r.AH`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s);
  }

  button[data-size='sm'][data-icon-left='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-size='sm'][data-icon-right='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-xs) var(--wui-spacing-xxs)
      var(--wui-spacing-s);
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'][data-icon-left='true'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var At=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Tt=class extends r.WF{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill",this.hasIconLeft=!1,this.hasIconRight=!1}render(){this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n    --local-opacity-100: ${this.loading?0:1};\n    --local-opacity-000: ${this.loading?1:0};`;const e="md"===this.size?"paragraph-600":"small-600";return r.qy`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){return this.loading?r.qy`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:r.qy``}};Tt.styles=[d,h,Pt],At([(0,v.MZ)()],Tt.prototype,"size",void 0),At([(0,v.MZ)({type:Boolean})],Tt.prototype,"disabled",void 0),At([(0,v.MZ)({type:Boolean})],Tt.prototype,"fullWidth",void 0),At([(0,v.MZ)({type:Boolean})],Tt.prototype,"loading",void 0),At([(0,v.MZ)()],Tt.prototype,"variant",void 0),At([(0,v.MZ)({type:Boolean})],Tt.prototype,"hasIconLeft",void 0),At([(0,v.MZ)({type:Boolean})],Tt.prototype,"hasIconRight",void 0),Tt=At([p("wui-button")],Tt);const It=r.JW`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,Ot=r.AH`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var Nt=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Rt=class extends r.WF{constructor(){super(...arguments),this.type="wallet"}render(){return r.qy`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?r.qy` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${It}`:r.qy`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};Rt.styles=[d,h,Ot],Nt([(0,v.MZ)()],Rt.prototype,"type",void 0),Rt=Nt([p("wui-card-select-loader")],Rt);const Mt=r.JW`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,$t=r.AH`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var jt=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Ut=class extends r.WF{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const e="lg"===this.size;return this.style.cssText=`\n      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};\n      --local-path: ${e?"var(--wui-path-network-lg)":"var(--wui-path-network)"};\n      --local-width: ${e?"86px":"48px"};\n      --local-height: ${e?"96px":"54px"};\n      --local-icon-size: ${e?"42px":"24px"};\n    `,r.qy`${this.templateVisual()} ${e?Mt:It}`}templateVisual(){return this.imageSrc?r.qy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:r.qy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Ut.styles=[d,$t],jt([(0,v.MZ)()],Ut.prototype,"size",void 0),jt([(0,v.MZ)()],Ut.prototype,"name",void 0),jt([(0,v.MZ)()],Ut.prototype,"imageSrc",void 0),jt([(0,v.MZ)({type:Boolean})],Ut.prototype,"selected",void 0),Ut=jt([p("wui-network-image")],Ut);const Lt=r.AH`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var Dt=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Bt=class extends r.WF{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return r.qy`
      <button data-selected=${(0,st.J)(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return"network"===this.type?r.qy`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${(0,st.J)(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:r.qy`
      <wui-wallet-image
        size="md"
        imageSrc=${(0,st.J)(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};Bt.styles=[d,h,Lt],Dt([(0,v.MZ)()],Bt.prototype,"name",void 0),Dt([(0,v.MZ)()],Bt.prototype,"type",void 0),Dt([(0,v.MZ)()],Bt.prototype,"imageSrc",void 0),Dt([(0,v.MZ)({type:Boolean})],Bt.prototype,"disabled",void 0),Dt([(0,v.MZ)({type:Boolean})],Bt.prototype,"selected",void 0),Dt([(0,v.MZ)({type:Boolean})],Bt.prototype,"installed",void 0),Bt=Dt([p("wui-card-select")],Bt);const Ft=r.AH`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-success-glass-010);
    background-color: var(--wui-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-success-glass-015);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-success-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-success-glass-020);
  }
`;var Wt=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let zt=class extends r.WF{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){const e="success"===this.variant||"transparent"===this.variant||"shadeSmall"===this.variant?"small-600":"paragraph-600";return r.qy`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e} color="inherit">
          ${this.title?this.title:lt.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?r.qy`<wui-image src=${this.imageSrc}></wui-image>`:null}};zt.styles=[d,h,Ft],Wt([(0,v.MZ)()],zt.prototype,"variant",void 0),Wt([(0,v.MZ)()],zt.prototype,"imageSrc",void 0),Wt([(0,v.MZ)({type:Boolean})],zt.prototype,"disabled",void 0),Wt([(0,v.MZ)()],zt.prototype,"icon",void 0),Wt([(0,v.MZ)()],zt.prototype,"href",void 0),Wt([(0,v.MZ)()],zt.prototype,"text",void 0),zt=Wt([p("wui-chip")],zt);const qt=r.AH`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var Ht=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Zt=class extends r.WF{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e="md"===this.size?"paragraph-600":"small-600";return r.qy`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?r.qy`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};Zt.styles=[d,h,qt],Ht([(0,v.MZ)()],Zt.prototype,"size",void 0),Ht([(0,v.MZ)({type:Boolean})],Zt.prototype,"loading",void 0),Zt=Ht([p("wui-connect-button")],Zt);const Vt=r.AH`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Kt=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Gt=class extends r.WF{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return r.qy`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="xs" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Gt.styles=[d,h,Vt],Kt([(0,v.MZ)({type:Boolean})],Gt.prototype,"disabled",void 0),Kt([(0,v.MZ)()],Gt.prototype,"label",void 0),Kt([(0,v.MZ)()],Gt.prototype,"buttonLabel",void 0),Gt=Kt([p("wui-cta-button")],Gt);var Yt=n(4657);const Jt=r.AH`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px 40px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var Qt=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Xt=class extends r.WF{constructor(){super(...arguments),this.inputElementRef=(0,Yt._)(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text"}render(){const e=`wui-size-${this.size}`;return r.qy` ${this.templateIcon()}
      <input
        ${(0,Yt.K)(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${(0,st.J)(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        value=${(0,st.J)(this.value)}
      />
      <slot></slot>`}templateIcon(){return this.icon?r.qy`<wui-icon
        data-input=${this.size}
        size="sm"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};Xt.styles=[d,h,Jt],Qt([(0,v.MZ)()],Xt.prototype,"size",void 0),Qt([(0,v.MZ)()],Xt.prototype,"icon",void 0),Qt([(0,v.MZ)({type:Boolean})],Xt.prototype,"disabled",void 0),Qt([(0,v.MZ)()],Xt.prototype,"placeholder",void 0),Qt([(0,v.MZ)()],Xt.prototype,"type",void 0),Qt([(0,v.MZ)()],Xt.prototype,"keyHint",void 0),Qt([(0,v.MZ)()],Xt.prototype,"value",void 0),Xt=Qt([p("wui-input-text")],Xt);const en=r.AH`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var tn=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let nn=class extends r.WF{constructor(){super(...arguments),this.disabled=!1}render(){return r.qy`
      <wui-input-text
        placeholder="Email"
        icon="mail"
        size="md"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?r.qy`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};nn.styles=[d,en],tn([(0,v.MZ)()],nn.prototype,"errorMessage",void 0),tn([(0,v.MZ)({type:Boolean})],nn.prototype,"disabled",void 0),tn([(0,v.MZ)()],nn.prototype,"value",void 0),nn=tn([p("wui-email-input")],nn);const rn=r.AH`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var on=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let an=class extends r.WF{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return r.qy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};an.styles=[d,h,f,rn],on([(0,v.MZ)()],an.prototype,"size",void 0),on([(0,v.MZ)({type:Boolean})],an.prototype,"disabled",void 0),on([(0,v.MZ)()],an.prototype,"icon",void 0),on([(0,v.MZ)()],an.prototype,"iconColor",void 0),an=on([p("wui-icon-link")],an);const sn=r.AH`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var ln=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let cn=class extends r.WF{constructor(){super(...arguments),this.icon="copy"}render(){return r.qy`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};cn.styles=[d,h,sn],ln([(0,v.MZ)()],cn.prototype,"icon",void 0),cn=ln([p("wui-input-element")],cn);const un=r.AH`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-005);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }
  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }
`;var dn=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let hn=class extends r.WF{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return r.qy`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};hn.styles=[d,h,un],dn([(0,v.MZ)({type:Boolean})],hn.prototype,"disabled",void 0),dn([(0,v.MZ)({type:String})],hn.prototype,"value",void 0),hn=dn([p("wui-input-numeric")],hn);const fn=r.AH`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var pn=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let mn=class extends r.WF{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return r.qy`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};mn.styles=[d,h,fn],pn([(0,v.MZ)({type:Boolean})],mn.prototype,"disabled",void 0),pn([(0,v.MZ)()],mn.prototype,"color",void 0),mn=pn([p("wui-link")],mn);const gn=r.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var yn=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let vn=class extends r.WF{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return r.qy`
      <button
        ?disabled=${!!this.loading||Boolean(this.disabled)}
        data-loading=${this.loading}
        data-iconvariant=${(0,st.J)(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return r.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return r.qy`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t="square-blue"===this.iconVariant?"mdl":"md",n=this.iconSize?this.iconSize:t;return r.qy`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${n}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?r.qy`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:r.qy``}chevronTemplate(){return this.chevron?r.qy`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};var wn;vn.styles=[d,h,gn],yn([(0,v.MZ)()],vn.prototype,"icon",void 0),yn([(0,v.MZ)()],vn.prototype,"iconSize",void 0),yn([(0,v.MZ)()],vn.prototype,"variant",void 0),yn([(0,v.MZ)()],vn.prototype,"iconVariant",void 0),yn([(0,v.MZ)({type:Boolean})],vn.prototype,"disabled",void 0),yn([(0,v.MZ)()],vn.prototype,"imageSrc",void 0),yn([(0,v.MZ)()],vn.prototype,"alt",void 0),yn([(0,v.MZ)({type:Boolean})],vn.prototype,"chevron",void 0),yn([(0,v.MZ)({type:Boolean})],vn.prototype,"loading",void 0),vn=yn([p("wui-list-item")],vn),function(e){e.approve="approved",e.bought="bought",e.borrow="borrowed",e.burn="burnt",e.cancel="canceled",e.claim="claimed",e.deploy="deployed",e.deposit="deposited",e.execute="executed",e.mint="minted",e.receive="received",e.repay="repaid",e.send="sent",e.sell="sold",e.stake="staked",e.trade="swapped",e.unstake="unstaked",e.withdraw="withdrawn"}(wn||(wn={}));const bn=r.AH`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
    z-index: -1;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var xn=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let En=class extends r.WF{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[e,t]=this.images,n="NFT"===e?.type,i=n?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",o=(t?.url?"NFT"===t.type:n)?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`\n    --local-left-border-radius: ${i};\n    --local-right-border-radius: ${o};\n    `,r.qy`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[e,t]=this.images,n=e?.type;return 2===this.images.length&&(e?.url||t?.url)?r.qy`<div class="swap-images-container">
        ${e?.url?r.qy`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${t?.url?r.qy`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e?.url?r.qy`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:"NFT"===n?r.qy`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:r.qy`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e,t="accent-100";return e=this.getIcon(),this.status&&(t=this.getStatusColor()),e?r.qy`
      <wui-icon-box
        size="xxs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        icon=${e}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontalBold":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};En.styles=[bn],xn([(0,v.MZ)()],En.prototype,"type",void 0),xn([(0,v.MZ)()],En.prototype,"status",void 0),xn([(0,v.MZ)()],En.prototype,"direction",void 0),xn([(0,v.MZ)({type:Boolean})],En.prototype,"onlyDirectionIcon",void 0),xn([(0,v.MZ)({type:Array})],En.prototype,"images",void 0),xn([(0,v.MZ)({type:Object})],En.prototype,"secondImage",void 0),En=xn([p("wui-transaction-visual")],En);const Cn=r.AH`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var kn=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let _n=class extends r.WF{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return r.qy`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${(0,st.J)(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${(0,st.J)(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${wn[this.type]}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){const e=this.descriptions?.[0];return e?r.qy`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){const e=this.descriptions?.[1];return e?r.qy`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};_n.styles=[d,Cn],kn([(0,v.MZ)()],_n.prototype,"type",void 0),kn([(0,v.MZ)({type:Array})],_n.prototype,"descriptions",void 0),kn([(0,v.MZ)()],_n.prototype,"date",void 0),kn([(0,v.MZ)({type:Boolean})],_n.prototype,"onlyDirectionIcon",void 0),kn([(0,v.MZ)()],_n.prototype,"status",void 0),kn([(0,v.MZ)()],_n.prototype,"direction",void 0),kn([(0,v.MZ)({type:Array})],_n.prototype,"images",void 0),_n=kn([p("wui-transaction-list-item")],_n);const Sn=r.AH`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var Pn=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let An=class extends r.WF{render(){return r.qy`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};An.styles=[d,Sn],An=Pn([p("wui-transaction-list-item-loader")],An);const Tn=r.AH`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`;var In=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let On=class extends r.WF{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,r.qy`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};On.styles=[d,Tn],In([(0,v.MZ)()],On.prototype,"variant",void 0),On=In([p("wui-tag")],On);const Nn=r.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var Rn=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Mn=class extends r.WF{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return r.qy`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?r.qy` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?r.qy` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?r.qy`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:r.qy`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.tagLabel&&this.tagVariant?r.qy`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?r.qy`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};Mn.styles=[d,h,Nn],Rn([(0,v.MZ)({type:Array})],Mn.prototype,"walletImages",void 0),Rn([(0,v.MZ)()],Mn.prototype,"imageSrc",void 0),Rn([(0,v.MZ)()],Mn.prototype,"name",void 0),Rn([(0,v.MZ)()],Mn.prototype,"tagLabel",void 0),Rn([(0,v.MZ)()],Mn.prototype,"tagVariant",void 0),Rn([(0,v.MZ)()],Mn.prototype,"icon",void 0),Rn([(0,v.MZ)()],Mn.prototype,"walletIcon",void 0),Rn([(0,v.MZ)({type:Boolean})],Mn.prototype,"installed",void 0),Rn([(0,v.MZ)({type:Boolean})],Mn.prototype,"disabled",void 0),Rn([(0,v.MZ)({type:Boolean})],Mn.prototype,"showAllWallets",void 0),Mn=Rn([p("wui-list-wallet")],Mn);const $n=r.AH`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var jn=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Un=class extends r.WF{constructor(){super(...arguments),this.logo="google"}render(){return r.qy`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};Un.styles=[d,$n],jn([(0,v.MZ)()],Un.prototype,"logo",void 0),Un=jn([p("wui-logo")],Un);const Ln=r.AH`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Dn=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Bn=class extends r.WF{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return r.qy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};Bn.styles=[d,h,Ln],Dn([(0,v.MZ)()],Bn.prototype,"logo",void 0),Dn([(0,v.MZ)({type:Boolean})],Bn.prototype,"disabled",void 0),Bn=Dn([p("wui-logo-select")],Bn);const Fn=r.AH`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }
`;var Wn=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let zn=class extends r.WF{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return r.qy`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?r.qy`<wui-image src=${this.imageSrc}></wui-image>`:r.qy`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};zn.styles=[d,h,Fn],Wn([(0,v.MZ)()],zn.prototype,"imageSrc",void 0),Wn([(0,v.MZ)({type:Boolean})],zn.prototype,"disabled",void 0),zn=Wn([p("wui-network-button")],zn);const qn=r.AH`
  :host {
    position: relative;
    display: block;
  }
`;var Hn=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Zn=class extends r.WF{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map((()=>"")),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every((e=>""!==e)),this.handleKeyDown=(e,t)=>{const n=e.target,r=this.getInputElement(n);if(!r)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(e.key)&&e.preventDefault();const i=r.selectionStart;switch(e.key){case"ArrowLeft":i&&r.setSelectionRange(i+1,i+1),this.focusInputField("prev",t);break;case"ArrowRight":case"Shift":this.focusInputField("next",t);break;case"Delete":case"Backspace":""===r.value?this.focusInputField("prev",t):this.updateInput(r,t,"")}},this.focusInputField=(e,t)=>{if("next"===e){const e=t+1;if(!this.shouldInputBeEnabled(e))return;const n=this.numerics[e<this.length?e:t],r=n?this.getInputElement(n):void 0;r&&(r.disabled=!1,r.focus())}if("prev"===e){const e=t-1,n=this.numerics[e>-1?e:t],r=n?this.getInputElement(n):void 0;r&&r.focus()}}}firstUpdated(){this.otp&&(this.values=this.otp.split(""));const e=this.shadowRoot?.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),this.numerics[0]?.focus()}render(){return r.qy`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map(((e,t)=>r.qy`
            <wui-input-numeric
              @input=${e=>this.handleInput(e,t)}
              @keydown=${e=>this.handleKeyDown(e,t)}
              .disabled=${!this.shouldInputBeEnabled(t)}
              .value=${this.values[t]||""}
            >
            </wui-input-numeric>
          `))}
      </wui-flex>
    `}updateInput(e,t,n){const r=this.numerics[t],i=e||(r?this.getInputElement(r):void 0);i&&(i.value=n,this.values=this.values.map(((e,r)=>r===t?n:e)))}handleInput(e,t){const n=e.target,r=this.getInputElement(n);if(r){const n=r.value;if("insertFromPaste"===e.inputType)this.handlePaste(r,n,t);else{lt.isNumber(n)&&e.data?(this.updateInput(r,t,e.data),this.focusInputField("next",t)):this.updateInput(r,t,"")}}this.dispatchInputChangeEvent()}handlePaste(e,t,n){const r=t[0];if(r&&lt.isNumber(r)){this.updateInput(e,n,r);const i=t.substring(1);if(n+1<this.length&&i.length){const e=this.numerics[n+1],t=e?this.getInputElement(e):void 0;t&&this.handlePaste(t,i,n+1)}else this.focusInputField("next",n)}else this.updateInput(e,n,"")}getInputElement(e){return e.shadowRoot?.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};Zn.styles=[d,qn],Hn([(0,v.MZ)({type:Number})],Zn.prototype,"length",void 0),Hn([(0,v.MZ)({type:String})],Zn.prototype,"otp",void 0),Hn([(0,v.wk)()],Zn.prototype,"values",void 0),Zn=Hn([p("wui-otp")],Zn);var Vn=n(8970);function Kn(e,t,n){if(e===t)return!1;return(e-t<0?t-e:e-t)<=n+.1}const Gn={generate(e,t,n){const i="#141414",o=[],a=function(e,t){const n=Array.prototype.slice.call(Vn.create(e,{errorCorrectionLevel:t}).modules.data,0),r=Math.sqrt(n.length);return n.reduce(((e,t,n)=>(n%r===0?e.push([t]):e[e.length-1].push(t))&&e),[])}(e,"Q"),s=t/a.length,l=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];l.forEach((e=>{let{x:t,y:n}=e;const c=(a.length-7)*s*t,u=(a.length-7)*s*n,d=.45;for(let a=0;a<l.length;a+=1){const e=s*(7-2*a);o.push(r.JW`
            <rect
              fill=${2===a?i:"transparent"}
              width=${0===a?e-5:e}
              rx= ${0===a?(e-5)*d:e*d}
              ry= ${0===a?(e-5)*d:e*d}
              stroke=${i}
              stroke-width=${0===a?5:0}
              height=${0===a?e-5:e}
              x= ${0===a?u+s*a+2.5:u+s*a}
              y= ${0===a?c+s*a+2.5:c+s*a}
            />
          `)}}));const c=Math.floor((n+25)/s),u=a.length/2-c/2,d=a.length/2+c/2-1,h=[];a.forEach(((e,t)=>{e.forEach(((e,n)=>{if(a[t][n]&&!(t<7&&n<7||t>a.length-8&&n<7||t<7&&n>a.length-8)&&!(t>u&&t<d&&n>u&&n<d)){const e=t*s+s/2,r=n*s+s/2;h.push([e,r])}}))}));const f={};return h.forEach((e=>{let[t,n]=e;f[t]?f[t]?.push(n):f[t]=[n]})),Object.entries(f).map((e=>{let[t,n]=e;const r=n.filter((e=>n.every((t=>!Kn(e,t,s)))));return[Number(t),r]})).forEach((e=>{let[t,n]=e;n.forEach((e=>{o.push(r.JW`<circle cx=${t} cy=${e} fill=${i} r=${s/2.5} />`)}))})),Object.entries(f).filter((e=>{let[t,n]=e;return n.length>1})).map((e=>{let[t,n]=e;const r=n.filter((e=>n.some((t=>Kn(e,t,s)))));return[Number(t),r]})).map((e=>{let[t,n]=e;n.sort(((e,t)=>e<t?-1:1));const r=[];for(const i of n){const e=r.find((e=>e.some((e=>Kn(i,e,s)))));e?e.push(i):r.push([i])}return[t,r.map((e=>[e[0],e[e.length-1]]))]})).forEach((e=>{let[t,n]=e;n.forEach((e=>{let[n,a]=e;o.push(r.JW`
              <line
                x1=${t}
                x2=${t}
                y1=${n}
                y2=${a}
                stroke=${i}
                stroke-width=${s/1.25}
                stroke-linecap="round"
              />
            `)}))})),o}},Yn=r.AH`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var Jn=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Qn=class extends r.WF{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,r.qy`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e="light"===this.theme?this.size:this.size-32;return r.JW`
      <svg height=${e} width=${e}>
        ${Gn.generate(this.uri,e,e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?r.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:r.qy`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};Qn.styles=[d,Yn],Jn([(0,v.MZ)()],Qn.prototype,"uri",void 0),Jn([(0,v.MZ)({type:Number})],Qn.prototype,"size",void 0),Jn([(0,v.MZ)()],Qn.prototype,"theme",void 0),Jn([(0,v.MZ)()],Qn.prototype,"imageSrc",void 0),Jn([(0,v.MZ)()],Qn.prototype,"alt",void 0),Qn=Jn([p("wui-qr-code")],Qn);const Xn=r.AH`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var er=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let tr=class extends r.WF{constructor(){super(...arguments),this.inputComponentRef=(0,Yt._)()}render(){return r.qy`
      <wui-input-text
        ${(0,Yt.K)(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};tr.styles=[d,Xn],tr=er([p("wui-search-bar")],tr);const nr=r.AH`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var rr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let ir=class extends r.WF{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return r.qy`
      <wui-icon-box
        size="sm"
        iconSize="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
        background="opaque"
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};ir.styles=[d,nr],rr([(0,v.MZ)()],ir.prototype,"backgroundColor",void 0),rr([(0,v.MZ)()],ir.prototype,"iconColor",void 0),rr([(0,v.MZ)()],ir.prototype,"icon",void 0),rr([(0,v.MZ)()],ir.prototype,"message",void 0),ir=rr([p("wui-snackbar")],ir);const or=r.AH`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var ar=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let sr=class extends r.WF{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`\n      --local-tab: ${this.activeTab};\n      --local-tab-width: ${this.localTabWidth};\n    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map(((e,t)=>{const n=t===this.activeTab;return r.qy`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${n}
        >
          <wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `}))}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout((()=>{this.animateTabs(0,!0)}),0))}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){const n=this.buttons[this.activeTab],r=this.buttons[e],i=n?.querySelector("wui-text"),o=r?.querySelector("wui-text"),a=r?.getBoundingClientRect(),s=o?.getBoundingClientRect();n&&i&&!t&&e!==this.activeTab&&(i.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),n.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),r&&a&&s&&o&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(a.width+s.width)+6}px`,r.animate([{width:`${a.width+s.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),o.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};sr.styles=[d,h,or],ar([(0,v.MZ)({type:Array})],sr.prototype,"tabs",void 0),ar([(0,v.MZ)()],sr.prototype,"onTabChange",void 0),ar([(0,v.MZ)({type:Array})],sr.prototype,"buttons",void 0),ar([(0,v.MZ)({type:Boolean})],sr.prototype,"disabled",void 0),ar([(0,v.wk)()],sr.prototype,"activeTab",void 0),ar([(0,v.wk)()],sr.prototype,"localTabWidth",void 0),ar([(0,v.wk)()],sr.prototype,"isDense",void 0),sr=ar([p("wui-tabs")],sr);const lr=r.AH`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var cr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let ur=class extends r.WF{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return r.qy`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};ur.styles=[d,h,lr],cr([(0,v.MZ)()],ur.prototype,"placement",void 0),cr([(0,v.MZ)()],ur.prototype,"message",void 0),ur=cr([p("wui-tooltip")],ur);const dr=r.AH`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var hr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let fr=class extends r.WF{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,r.qy`${this.templateVisual()}`}templateVisual(){return this.imageSrc?r.qy`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:r.qy`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};fr.styles=[d,dr],hr([(0,v.MZ)()],fr.prototype,"imageSrc",void 0),hr([(0,v.MZ)()],fr.prototype,"alt",void 0),hr([(0,v.MZ)({type:Boolean})],fr.prototype,"borderRadiusFull",void 0),fr=hr([p("wui-visual-thumbnail")],fr);const pr=r.AH`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-accent-glass-015);
  }

  button:hover {
    background-color: var(--wui-accent-glass-010) !important;
  }

  button:active {
    background-color: var(--wui-accent-glass-020) !important;
  }
`;var mr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let gr=class extends r.WF{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return r.qy`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};gr.styles=[d,h,pr],mr([(0,v.MZ)()],gr.prototype,"label",void 0),mr([(0,v.MZ)()],gr.prototype,"description",void 0),mr([(0,v.MZ)()],gr.prototype,"icon",void 0),gr=mr([p("wui-notice-card")],gr);const yr=r.AH`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-200), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`;var vr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let wr=class extends r.WF{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}firstUpdated(){setTimeout((()=>{const e=this.shadowRoot?.querySelector(".heightContent");if(e){this.scrollElement=e;const t=e?.scrollHeight;t&&t>100&&(this.enableAccordion=!0,this.scrollHeightElement=t,this.requestUpdate())}}),0)}render(){return r.qy`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${!this.enableAccordion||Boolean(this.toggled)}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){const e=this.shadowRoot?.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?"100px":`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:"100px"}],{duration:300,fill:"forwards",easing:"ease"}),e&&e.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?r.qy` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};wr.styles=[d,h,yr],vr([(0,v.MZ)()],wr.prototype,"textTitle",void 0),vr([(0,v.MZ)()],wr.prototype,"overflowedContent",void 0),wr=vr([p("wui-list-accordion")],wr);const br=r.AH`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var xr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Er=class extends r.WF{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return r.qy`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?r.qy`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?r.qy` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:r.qy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Er.styles=[d,h,br],xr([(0,v.MZ)()],Er.prototype,"imageSrc",void 0),xr([(0,v.MZ)()],Er.prototype,"textTitle",void 0),xr([(0,v.MZ)()],Er.prototype,"textValue",void 0),Er=xr([p("wui-list-content")],Er);const Cr=r.AH`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var kr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let _r=class extends r.WF{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress=""}render(){return r.qy`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.receiverAddress}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?r.qy`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:r.qy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};_r.styles=[d,h,Cr],kr([(0,v.MZ)()],_r.prototype,"amount",void 0),kr([(0,v.MZ)()],_r.prototype,"networkCurreny",void 0),kr([(0,v.MZ)()],_r.prototype,"networkImageUrl",void 0),kr([(0,v.MZ)()],_r.prototype,"receiverAddress",void 0),_r=kr([p("wui-list-wallet-transaction")],_r);const Sr=r.AH`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var Pr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Ar=class extends r.WF{render(){return this.style.cssText=`\n      grid-template-rows: ${this.gridTemplateRows};\n      grid-template-columns: ${this.gridTemplateColumns};\n      justify-items: ${this.justifyItems};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      align-content: ${this.alignContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&lt.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&lt.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&lt.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&lt.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&lt.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&lt.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&lt.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&lt.getSpacingStyles(this.margin,3)};\n    `,r.qy`<slot></slot>`}};Ar.styles=[d,Sr],Pr([(0,v.MZ)()],Ar.prototype,"gridTemplateRows",void 0),Pr([(0,v.MZ)()],Ar.prototype,"gridTemplateColumns",void 0),Pr([(0,v.MZ)()],Ar.prototype,"justifyItems",void 0),Pr([(0,v.MZ)()],Ar.prototype,"alignItems",void 0),Pr([(0,v.MZ)()],Ar.prototype,"justifyContent",void 0),Pr([(0,v.MZ)()],Ar.prototype,"alignContent",void 0),Pr([(0,v.MZ)()],Ar.prototype,"columnGap",void 0),Pr([(0,v.MZ)()],Ar.prototype,"rowGap",void 0),Pr([(0,v.MZ)()],Ar.prototype,"gap",void 0),Pr([(0,v.MZ)()],Ar.prototype,"padding",void 0),Pr([(0,v.MZ)()],Ar.prototype,"margin",void 0),Ar=Pr([p("wui-grid")],Ar);const Tr=r.AH`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`;var Ir=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Or=class extends r.WF{constructor(){super(...arguments),this.text=""}render(){return r.qy`${this.template()}`}template(){return this.text?r.qy`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};Or.styles=[d,Tr],Ir([(0,v.MZ)()],Or.prototype,"text",void 0),Or=Ir([p("wui-separator")],Or);var Nr=n(2945);const Rr=["receive","deposit","borrow","claim"],Mr=["withdraw","repay","burn"],$r={getTransactionGroupTitle:e=>e===Nr.r.getYear()?"This Year":e,getTransactionImages(e){const[t,n]=e,r=Boolean(t)&&e?.every((e=>Boolean(e.nft_info))),i=e?.length>1;return 2===e?.length&&!r?[this.getTransactionImage(t),this.getTransactionImage(n)]:i?e.map((e=>this.getTransactionImage(e))):[this.getTransactionImage(t)]},getTransactionImage:e=>({type:$r.getTransactionTransferTokenType(e),url:$r.getTransactionImageURL(e)}),getTransactionImageURL(e){let t=null;const n=Boolean(e?.nft_info),r=Boolean(e?.fungible_info);return e&&n?t=e?.nft_info?.content?.preview?.url:e&&r&&(t=e?.fungible_info?.icon?.url),t},getTransactionTransferTokenType:e=>e?.fungible_info?"FUNGIBLE":e?.nft_info?"NFT":null,getTransactionDescriptions(e){const t=e.metadata?.operationType,n=e.transfers,r=e.transfers?.length>0,i=e.transfers?.length>1,o=r&&n?.every((e=>Boolean(e.fungible_info))),[a,s]=n;let l=this.getTransferDescription(a),c=this.getTransferDescription(s);if(!r){return("send"===t||"receive"===t)&&o?(l=lt.getTruncateString({string:e.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),c=lt.getTruncateString({string:e.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[l,c]):[e.metadata.status]}if(i)return n.map((e=>this.getTransferDescription(e)));let u="";return Rr.includes(t)?u="+":Mr.includes(t)&&(u="-"),l=u.concat(l),[l]},getTransferDescription(e){let t="";return e?(e?.nft_info?t=e?.nft_info?.name||"-":e?.fungible_info&&(t=this.getFungibleTransferDescription(e)||"-"),t):t},getFungibleTransferDescription(e){if(!e)return null;return[this.getQuantityFixedValue(e?.quantity.numeric),e?.fungible_info?.symbol].join(" ").trim()},getQuantityFixedValue(e){if(!e)return null;return parseFloat(e).toFixed(3)}}},533:(e,t,n)=>{"use strict";n.d(t,{OA:()=>r,WL:()=>o,u$:()=>i});const r={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i=e=>function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return{_$litDirective$:e,values:n}};class o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this.t=e,this._$AM=t,this.i=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},8531:(e,t,n)=>{"use strict";n.d(t,{JW:()=>_,XX:()=>z,c0:()=>S,ge:()=>F,qy:()=>k,s6:()=>P});const r=globalThis,i=r.trustedTypes,o=i?i.createPolicy("lit-html",{createHTML:e=>e}):void 0,a="$lit$",s=`lit$${Math.random().toFixed(9).slice(2)}$`,l="?"+s,c=`<${l}>`,u=document,d=()=>u.createComment(""),h=e=>null===e||"object"!=typeof e&&"function"!=typeof e,f=Array.isArray,p=e=>f(e)||"function"==typeof e?.[Symbol.iterator],m="[ \t\n\f\r]",g=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,y=/-->/g,v=/>/g,w=RegExp(`>|${m}(?:([^\\s"'>=/]+)(${m}*=${m}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),b=/'/g,x=/"/g,E=/^(?:script|style|textarea|title)$/i,C=e=>function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return{_$litType$:e,strings:t,values:r}},k=C(1),_=C(2),S=(C(3),Symbol.for("lit-noChange")),P=Symbol.for("lit-nothing"),A=new WeakMap,T=u.createTreeWalker(u,129);function I(e,t){if(!f(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==o?o.createHTML(t):t}const O=(e,t)=>{const n=e.length-1,r=[];let i,o=2===t?"<svg>":3===t?"<math>":"",l=g;for(let u=0;u<n;u++){const t=e[u];let n,d,h=-1,f=0;for(;f<t.length&&(l.lastIndex=f,d=l.exec(t),null!==d);)f=l.lastIndex,l===g?"!--"===d[1]?l=y:void 0!==d[1]?l=v:void 0!==d[2]?(E.test(d[2])&&(i=RegExp("</"+d[2],"g")),l=w):void 0!==d[3]&&(l=w):l===w?">"===d[0]?(l=i??g,h=-1):void 0===d[1]?h=-2:(h=l.lastIndex-d[2].length,n=d[1],l=void 0===d[3]?w:'"'===d[3]?x:b):l===x||l===b?l=w:l===y||l===v?l=g:(l=w,i=void 0);const p=l===w&&e[u+1].startsWith("/>")?" ":"";o+=l===g?t+c:h>=0?(r.push(n),t.slice(0,h)+a+t.slice(h)+s+p):t+s+(-2===h?u:p)}return[I(e,o+(e[n]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};class N{constructor(e,t){let n,{strings:r,_$litType$:o}=e;this.parts=[];let c=0,u=0;const h=r.length-1,f=this.parts,[p,m]=O(r,o);if(this.el=N.createElement(p,t),T.currentNode=this.el.content,2===o||3===o){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=T.nextNode())&&f.length<h;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(a)){const t=m[u++],r=n.getAttribute(e).split(s),i=/([.?@])?(.*)/.exec(t);f.push({type:1,index:c,name:i[2],strings:r,ctor:"."===i[1]?U:"?"===i[1]?L:"@"===i[1]?D:j}),n.removeAttribute(e)}else e.startsWith(s)&&(f.push({type:6,index:c}),n.removeAttribute(e));if(E.test(n.tagName)){const e=n.textContent.split(s),t=e.length-1;if(t>0){n.textContent=i?i.emptyScript:"";for(let r=0;r<t;r++)n.append(e[r],d()),T.nextNode(),f.push({type:2,index:++c});n.append(e[t],d())}}}else if(8===n.nodeType)if(n.data===l)f.push({type:2,index:c});else{let e=-1;for(;-1!==(e=n.data.indexOf(s,e+1));)f.push({type:7,index:c}),e+=s.length-1}c++}}static createElement(e,t){const n=u.createElement("template");return n.innerHTML=e,n}}function R(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,r=arguments.length>3?arguments[3]:void 0;if(t===S)return t;let i=void 0!==r?n.o?.[r]:n.l;const o=h(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),void 0===o?i=void 0:(i=new o(e),i._$AT(e,n,r)),void 0!==r?(n.o??=[])[r]=i:n.l=i),void 0!==i&&(t=R(e,i._$AS(e,t.values),i,r)),t}class M{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??u).importNode(t,!0);T.currentNode=r;let i=T.nextNode(),o=0,a=0,s=n[0];for(;void 0!==s;){if(o===s.index){let t;2===s.type?t=new $(i,i.nextSibling,this,e):1===s.type?t=new s.ctor(i,s.name,s.strings,this,e):6===s.type&&(t=new B(i,this,e)),this._$AV.push(t),s=n[++a]}o!==s?.index&&(i=T.nextNode(),o++)}return T.currentNode=u,r}p(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class ${get _$AU(){return this._$AM?._$AU??this.v}constructor(e,t,n,r){this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this.v=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e){e=R(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),h(e)?e===P||null==e||""===e?(this._$AH!==P&&this._$AR(),this._$AH=P):e!==this._$AH&&e!==S&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):p(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==P&&h(this._$AH)?this._$AA.nextSibling.data=e:this.T(u.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:n}=e,r="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=N.createElement(I(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{const e=new M(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=A.get(e.strings);return void 0===t&&A.set(e.strings,t=new N(e)),t}k(e){f(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const i of e)r===t.length?t.push(n=new $(this.O(d()),this.O(d()),this,this.options)):n=t[r],n._$AI(i),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,t=arguments.length>1?arguments[1]:void 0;for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this.v=e,this._$AP?.(e))}}class j{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=P,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=P}_$AI(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;const i=this.strings;let o=!1;if(void 0===i)e=R(this,e,t,0),o=!h(e)||e!==this._$AH&&e!==S,o&&(this._$AH=e);else{const r=e;let a,s;for(e=i[0],a=0;a<i.length-1;a++)s=R(this,r[n+a],t,a),s===S&&(s=this._$AH[a]),o||=!h(s)||s!==this._$AH[a],s===P?e=P:e!==P&&(e+=(s??"")+i[a+1]),this._$AH[a]=s}o&&!r&&this.j(e)}j(e){e===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class U extends j{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===P?void 0:e}}class L extends j{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==P)}}class D extends j{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e){if((e=R(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0)??P)===S)return;const t=this._$AH,n=e===P&&t!==P||e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive,r=e!==P&&(t===P||n);n&&this.element.removeEventListener(this.name,this,t),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class B{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){R(this,e)}}const F={M:a,P:s,A:l,C:1,L:O,R:M,D:p,V:R,I:$,H:j,N:L,U:D,B:U,F:B},W=r.litHtmlPolyfillSupport;W?.(N,$),(r.litHtmlVersions??=[]).push("3.2.0");const z=(e,t,n)=>{const r=n?.renderBefore??t;let i=r._$litPart$;if(void 0===i){const e=n?.renderBefore??null;r._$litPart$=i=new $(t.insertBefore(d(),e),e,void 0,n??{})}return i._$AI(e),i}},8117:(e,t,n)=>{"use strict";n.d(t,{MZ:()=>a,wk:()=>s});var r=n(6830);const i={attribute:!0,type:String,converter:r.W3,reflect:!1,hasChanged:r.Ec},o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;const{kind:r,metadata:o}=n;let a=globalThis.litPropertyMetadata.get(o);if(void 0===a&&globalThis.litPropertyMetadata.set(o,a=new Map),a.set(n.name,e),"accessor"===r){const{name:r}=n;return{set(n){const i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return void 0!==t&&this.P(r,void 0,e),t}}}if("setter"===r){const{name:r}=n;return function(n){const i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error("Unsupported decorator location: "+r)};function a(e){return(t,n)=>"object"==typeof n?o(e,t,n):((e,t,n)=>{const r=t.hasOwnProperty(n);return t.constructor.createProperty(n,r?{...e,wrapped:!0}:e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function s(e){return a({...e,state:!0,attribute:!1})}},6440:(e,t,n)=>{"use strict";n.d(t,{J:()=>i});var r=n(8531);const i=e=>e??r.s6},4657:(e,t,n)=>{"use strict";n.d(t,{_:()=>f,K:()=>g});var r=n(8531);const{I:i}=r.ge;var o=n(533);const a=(e,t)=>{const n=e._$AN;if(void 0===n)return!1;for(const r of n)r._$AO?.(t,!1),a(r,t);return!0},s=e=>{let t,n;do{if(void 0===(t=e._$AM))break;n=t._$AN,n.delete(e),e=t}while(0===n?.size)},l=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(void 0===n)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),d(t)}};function c(e){void 0!==this._$AN?(s(this),this._$AM=e,l(this)):this._$AM=e}function u(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const r=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(t)if(Array.isArray(r))for(let o=n;o<r.length;o++)a(r[o],!1),s(r[o]);else null!=r&&(a(r,!1),s(r));else a(this,e)}const d=e=>{e.type==o.OA.CHILD&&(e._$AP??=u,e._$AQ??=c)};class h extends o.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),l(this),this.isConnected=e._$AU}_$AO(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(a(this,e),s(this))}setValue(e){if(void 0===this.t.strings)this.t._$AI(e,this);else{const t=[...this.t._$AH];t[this.i]=e,this.t._$AI(t,this,0)}}disconnected(){}reconnected(){}}const f=()=>new p;class p{}const m=new WeakMap,g=(0,o.u$)(class extends h{render(e){return r.s6}update(e,t){let[n]=t;const i=n!==this.Y;return i&&void 0!==this.Y&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=n,this.ht=e.options?.host,this.rt(this.ct=e.element)),r.s6}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.Y){const t=this.ht??globalThis;let n=m.get(t);void 0===n&&(n=new WeakMap,m.set(t,n)),void 0!==n.get(this.Y)&&this.Y.call(this.ht,void 0),n.set(this.Y,e),void 0!==e&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return"function"==typeof this.Y?m.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},7022:(e,t,n)=>{"use strict";n.d(t,{WF:()=>o,AH:()=>r.AH,qy:()=>i.qy,JW:()=>i.JW,iz:()=>r.iz});var r=n(6830),i=n(8531);class o extends r.mN{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.o=(0,i.XX)(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return i.c0}}o._$litElement$=!0,o.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:o});const a=globalThis.litElementPolyfillSupport;a?.({LitElement:o});(globalThis.litElementVersions??=[]).push("4.1.0")},1857:(e,t,n)=>{"use strict";n.d(t,{K:()=>i});var r=n(5763);function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return null!=globalThis.Buffer&&null!=globalThis.Buffer.allocUnsafe?(0,r.o)(globalThis.Buffer.allocUnsafe(e)):new Uint8Array(e)}},5990:(e,t,n)=>{"use strict";n.d(t,{x:()=>o});var r=n(1857),i=n(5763);function o(e,t){t||(t=e.reduce(((e,t)=>e+t.length),0));const n=(0,r.K)(t);let o=0;for(const r of e)n.set(r,o),o+=r.length;return(0,i.o)(n)}},2570:(e,t,n)=>{"use strict";n.d(t,{s:()=>o});var r=n(3287),i=n(5763);function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"utf8";const n=r.A[t];if(!n)throw new Error(`Unsupported encoding "${t}"`);return"utf8"!==t&&"utf-8"!==t||null==globalThis.Buffer||null==globalThis.Buffer.from?n.decoder.decode(`${n.prefix}${e}`):(0,i.o)(globalThis.Buffer.from(e,"utf-8"))}},7136:(e,t,n)=>{"use strict";n.d(t,{dI:()=>o.d,sH:()=>i.s,xW:()=>r.x});var r=n(5990),i=n(2570),o=n(4273)},4273:(e,t,n)=>{"use strict";n.d(t,{d:()=>i});var r=n(3287);function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"utf8";const n=r.A[t];if(!n)throw new Error(`Unsupported encoding "${t}"`);return"utf8"!==t&&"utf-8"!==t||null==globalThis.Buffer||null==globalThis.Buffer.from?n.encoder.encode(e).substring(1):globalThis.Buffer.from(e.buffer,e.byteOffset,e.byteLength).toString("utf8")}},5763:(e,t,n)=>{"use strict";function r(e){return null!=globalThis.Buffer?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):e}n.d(t,{o:()=>r})},3287:(e,t,n)=>{"use strict";n.d(t,{A:()=>qe});var r={};n.r(r),n.d(r,{identity:()=>A});var i={};n.r(i),n.d(i,{base2:()=>T});var o={};n.r(o),n.d(o,{base8:()=>I});var a={};n.r(a),n.d(a,{base10:()=>O});var s={};n.r(s),n.d(s,{base16:()=>N,base16upper:()=>R});var l={};n.r(l),n.d(l,{base32:()=>M,base32hex:()=>L,base32hexpad:()=>B,base32hexpadupper:()=>F,base32hexupper:()=>D,base32pad:()=>j,base32padupper:()=>U,base32upper:()=>$,base32z:()=>W});var c={};n.r(c),n.d(c,{base36:()=>z,base36upper:()=>q});var u={};n.r(u),n.d(u,{base58btc:()=>H,base58flickr:()=>Z});var d={};n.r(d),n.d(d,{base64:()=>V,base64pad:()=>K,base64url:()=>G,base64urlpad:()=>Y});var h={};n.r(h),n.d(h,{base256emoji:()=>ee});var f={};n.r(f),n.d(f,{sha256:()=>_e,sha512:()=>Se});var p={};n.r(p),n.d(p,{identity:()=>Ae});var m={};n.r(m),n.d(m,{code:()=>Ie,decode:()=>Ne,encode:()=>Oe,name:()=>Te});var g={};n.r(g),n.d(g,{code:()=>je,decode:()=>Le,encode:()=>Ue,name:()=>$e});var y=function(e,t){if(e.length>=255)throw new TypeError("Alphabet too long");for(var n=new Uint8Array(256),r=0;r<n.length;r++)n[r]=255;for(var i=0;i<e.length;i++){var o=e.charAt(i),a=o.charCodeAt(0);if(255!==n[a])throw new TypeError(o+" is ambiguous");n[a]=i}var s=e.length,l=e.charAt(0),c=Math.log(s)/Math.log(256),u=Math.log(256)/Math.log(s);function d(e){if("string"!==typeof e)throw new TypeError("Expected String");if(0===e.length)return new Uint8Array;var t=0;if(" "!==e[t]){for(var r=0,i=0;e[t]===l;)r++,t++;for(var o=(e.length-t)*c+1>>>0,a=new Uint8Array(o);e[t];){var u=n[e.charCodeAt(t)];if(255===u)return;for(var d=0,h=o-1;(0!==u||d<i)&&-1!==h;h--,d++)u+=s*a[h]>>>0,a[h]=u%256>>>0,u=u/256>>>0;if(0!==u)throw new Error("Non-zero carry");i=d,t++}if(" "!==e[t]){for(var f=o-i;f!==o&&0===a[f];)f++;for(var p=new Uint8Array(r+(o-f)),m=r;f!==o;)p[m++]=a[f++];return p}}}return{encode:function(t){if(t instanceof Uint8Array||(ArrayBuffer.isView(t)?t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength):Array.isArray(t)&&(t=Uint8Array.from(t))),!(t instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(0===t.length)return"";for(var n=0,r=0,i=0,o=t.length;i!==o&&0===t[i];)i++,n++;for(var a=(o-i)*u+1>>>0,c=new Uint8Array(a);i!==o;){for(var d=t[i],h=0,f=a-1;(0!==d||h<r)&&-1!==f;f--,h++)d+=256*c[f]>>>0,c[f]=d%s>>>0,d=d/s>>>0;if(0!==d)throw new Error("Non-zero carry");r=h,i++}for(var p=a-r;p!==a&&0===c[p];)p++;for(var m=l.repeat(n);p<a;++p)m+=e.charAt(c[p]);return m},decodeUnsafe:d,decode:function(e){var n=d(e);if(n)return n;throw new Error(`Non-${t} character`)}}};const v=y,w=(new Uint8Array(0),e=>{if(e instanceof Uint8Array&&"Uint8Array"===e.constructor.name)return e;if(e instanceof ArrayBuffer)return new Uint8Array(e);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw new Error("Unknown type, must be binary type")});class b{constructor(e,t,n){this.name=e,this.prefix=t,this.baseEncode=n}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class x{constructor(e,t,n){if(this.name=e,this.prefix=t,void 0===t.codePointAt(0))throw new Error("Invalid prefix character");this.prefixCodePoint=t.codePointAt(0),this.baseDecode=n}decode(e){if("string"===typeof e){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}throw Error("Can only multibase decode strings")}or(e){return C(this,e)}}class E{constructor(e){this.decoders=e}or(e){return C(this,e)}decode(e){const t=e[0],n=this.decoders[t];if(n)return n.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const C=(e,t)=>new E({...e.decoders||{[e.prefix]:e},...t.decoders||{[t.prefix]:t}});class k{constructor(e,t,n,r){this.name=e,this.prefix=t,this.baseEncode=n,this.baseDecode=r,this.encoder=new b(e,t,n),this.decoder=new x(e,t,r)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}const _=e=>{let{name:t,prefix:n,encode:r,decode:i}=e;return new k(t,n,r,i)},S=e=>{let{prefix:t,name:n,alphabet:r}=e;const{encode:i,decode:o}=v(r,n);return _({prefix:t,name:n,encode:i,decode:e=>w(o(e))})},P=e=>{let{name:t,prefix:n,bitsPerChar:r,alphabet:i}=e;return _({prefix:n,name:t,encode:e=>((e,t,n)=>{const r="="===t[t.length-1],i=(1<<n)-1;let o="",a=0,s=0;for(let l=0;l<e.length;++l)for(s=s<<8|e[l],a+=8;a>n;)a-=n,o+=t[i&s>>a];if(a&&(o+=t[i&s<<n-a]),r)for(;o.length*n&7;)o+="=";return o})(e,i,r),decode:e=>((e,t,n,r)=>{const i={};for(let u=0;u<t.length;++u)i[t[u]]=u;let o=e.length;for(;"="===e[o-1];)--o;const a=new Uint8Array(o*n/8|0);let s=0,l=0,c=0;for(let u=0;u<o;++u){const t=i[e[u]];if(void 0===t)throw new SyntaxError(`Non-${r} character`);l=l<<n|t,s+=n,s>=8&&(s-=8,a[c++]=255&l>>s)}if(s>=n||255&l<<8-s)throw new SyntaxError("Unexpected end of data");return a})(e,i,r,t)})},A=_({prefix:"\0",name:"identity",encode:e=>{return t=e,(new TextDecoder).decode(t);var t},decode:e=>(e=>(new TextEncoder).encode(e))(e)}),T=P({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),I=P({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),O=S({prefix:"9",name:"base10",alphabet:"0123456789"}),N=P({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),R=P({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),M=P({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),$=P({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),j=P({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),U=P({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),L=P({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),D=P({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),B=P({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),F=P({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),W=P({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),z=S({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),q=S({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),H=S({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),Z=S({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),V=P({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),K=P({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),G=P({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),Y=P({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),J=Array.from("\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42"),Q=J.reduce(((e,t,n)=>(e[n]=t,e)),[]),X=J.reduce(((e,t,n)=>(e[t.codePointAt(0)]=n,e)),[]);const ee=_({prefix:"\ud83d\ude80",name:"base256emoji",encode:function(e){return e.reduce(((e,t)=>e+=Q[t]),"")},decode:function(e){const t=[];for(const n of e){const e=X[n.codePointAt(0)];if(void 0===e)throw new Error(`Non-base256emoji character: ${n}`);t.push(e)}return new Uint8Array(t)}});var te=function e(t,n,r){n=n||[];var i=r=r||0;for(;t>=ie;)n[r++]=255&t|ne,t/=128;for(;t&re;)n[r++]=255&t|ne,t>>>=7;return n[r]=0|t,e.bytes=r-i+1,n},ne=128,re=-128,ie=Math.pow(2,31);var oe=function e(t,n){var r,i=0,o=0,a=n=n||0,s=t.length;do{if(a>=s)throw e.bytes=0,new RangeError("Could not decode varint");r=t[a++],i+=o<28?(r&se)<<o:(r&se)*Math.pow(2,o),o+=7}while(r>=ae);return e.bytes=a-n,i},ae=128,se=127;var le=Math.pow(2,7),ce=Math.pow(2,14),ue=Math.pow(2,21),de=Math.pow(2,28),he=Math.pow(2,35),fe=Math.pow(2,42),pe=Math.pow(2,49),me=Math.pow(2,56),ge=Math.pow(2,63);const ye={encode:te,decode:oe,encodingLength:function(e){return e<le?1:e<ce?2:e<ue?3:e<de?4:e<he?5:e<fe?6:e<pe?7:e<me?8:e<ge?9:10}},ve=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return ye.encode(e,t,n),t},we=e=>ye.encodingLength(e),be=(e,t)=>{const n=t.byteLength,r=we(e),i=r+we(n),o=new Uint8Array(i+n);return ve(e,o,0),ve(n,o,r),o.set(t,i),new xe(e,n,t,o)};class xe{constructor(e,t,n,r){this.code=e,this.size=t,this.digest=n,this.bytes=r}}const Ee=e=>{let{name:t,code:n,encode:r}=e;return new Ce(t,n,r)};class Ce{constructor(e,t,n){this.name=e,this.code=t,this.encode=n}digest(e){if(e instanceof Uint8Array){const t=this.encode(e);return t instanceof Uint8Array?be(this.code,t):t.then((e=>be(this.code,e)))}throw Error("Unknown type, must be binary type")}}const ke=e=>async t=>new Uint8Array(await crypto.subtle.digest(e,t)),_e=Ee({name:"sha2-256",code:18,encode:ke("SHA-256")}),Se=Ee({name:"sha2-512",code:19,encode:ke("SHA-512")}),Pe=w,Ae={code:0,name:"identity",encode:Pe,digest:e=>be(0,Pe(e))},Te="raw",Ie=85,Oe=e=>w(e),Ne=e=>w(e),Re=new TextEncoder,Me=new TextDecoder,$e="json",je=512,Ue=e=>Re.encode(JSON.stringify(e)),Le=e=>JSON.parse(Me.decode(e));Symbol.toStringTag,Symbol.for("nodejs.util.inspect.custom");Symbol.for("@ipld/js-cid/CID");const De={...r,...i,...o,...a,...s,...l,...c,...u,...d,...h};var Be=n(1857);function Fe(e,t,n,r){return{name:e,prefix:t,encoder:{name:e,prefix:t,encode:n},decoder:{decode:r}}}const We=Fe("utf8","u",(e=>"u"+new TextDecoder("utf8").decode(e)),(e=>(new TextEncoder).encode(e.substring(1)))),ze=Fe("ascii","a",(e=>{let t="a";for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return t}),(e=>{e=e.substring(1);const t=(0,Be.K)(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t})),qe={utf8:We,"utf-8":We,hex:De.base16,latin1:ze,ascii:ze,binary:ze,...De}},8993:(e,t,n)=>{"use strict";n.d(t,{BX:()=>f,KR:()=>g,P9:()=>m,B1:()=>p});Symbol();const r=Symbol();const i=Object.getPrototypeOf,o=new WeakMap,a=e=>e&&(o.has(e)?o.get(e):i(e)===Object.prototype||i(e)===Array.prototype),s=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];o.set(e,t)},l=e=>"object"===typeof e&&null!==e,c=new WeakMap,u=new WeakSet,d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object.is,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e,t)=>new Proxy(e,t),n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e=>l(e)&&!u.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new WeakMap,d=arguments.length>5&&void 0!==arguments[5]?arguments[5]:function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i;const r=o.get(e);if((null==r?void 0:r[0])===t)return r[1];const a=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return s(a,!0),o.set(e,[t,a]),Reflect.ownKeys(e).forEach((t=>{if(Object.getOwnPropertyDescriptor(a,t))return;const r=Reflect.get(e,t),i={value:r,enumerable:!0,configurable:!0};if(u.has(r))s(r,!1);else if(r instanceof Promise)delete i.value,i.get=()=>n(r);else if(c.has(r)){const[e,t]=c.get(r);i.value=d(e,t(),n)}Object.defineProperty(a,t,i)})),Object.preventExtensions(a)},h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new WeakMap,f=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[1,1],p=arguments.length>8&&void 0!==arguments[8]?arguments[8]:i=>{if(!l(i))throw new Error("object required");const o=h.get(i);if(o)return o;let s=f[0];const m=new Set,g=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:++f[0];s!==t&&(s=t,m.forEach((n=>n(e,t))))};let y=f[1];const v=e=>(t,n)=>{const r=[...t];r[1]=[e,...r[1]],g(r,n)},w=new Map,b=e=>{var t;const n=w.get(e);n&&(w.delete(e),null==(t=n[1])||t.call(n))},x=Array.isArray(i)?[]:Object.create(Object.getPrototypeOf(i)),E={deleteProperty(e,t){const n=Reflect.get(e,t);b(t);const r=Reflect.deleteProperty(e,t);return r&&g(["delete",[t],n]),r},set(t,i,o,s){const d=Reflect.has(t,i),f=Reflect.get(t,i,s);if(d&&(e(f,o)||h.has(o)&&e(f,h.get(o))))return!0;b(i),l(o)&&(o=(e=>a(e)&&e[r]||null)(o)||o);let y=o;if(o instanceof Promise)o.then((e=>{o.status="fulfilled",o.value=e,g(["resolve",[i],e])})).catch((e=>{o.status="rejected",o.reason=e,g(["reject",[i],e])}));else{!c.has(o)&&n(o)&&(y=p(o));const e=!u.has(y)&&c.get(y);e&&((e,t)=>{if(w.has(e))throw new Error("prop listener already exists");if(m.size){const n=t[3](v(e));w.set(e,[t,n])}else w.set(e,[t])})(i,e)}return Reflect.set(t,i,y,s),g(["set",[i],o,f]),!0}},C=t(x,E);h.set(i,C);const k=[x,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:++f[1];return y===e||m.size||(y=e,w.forEach((t=>{let[n]=t;const r=n[1](e);r>s&&(s=r)}))),s},d,e=>{m.add(e),1===m.size&&w.forEach(((e,t)=>{let[n,r]=e;if(r)throw new Error("remove already exists");const i=n[3](v(t));w.set(t,[n,i])}));return()=>{m.delete(e),0===m.size&&w.forEach(((e,t)=>{let[n,r]=e;r&&(r(),w.set(t,[n]))}))}}];return c.set(C,k),Reflect.ownKeys(i).forEach((e=>{const t=Object.getOwnPropertyDescriptor(i,e);"value"in t&&(C[e]=i[e],delete t.value,delete t.writable),Object.defineProperty(x,e,t)})),C};return[p,c,u,e,t,n,i,o,d,h,f]},[h]=d();function f(){return h(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function p(e,t,n){const r=c.get(e);let i;r||console.warn("Please use proxy object");const o=[],a=r[3];let s=!1;const l=a((e=>{o.push(e),n?t(o.splice(0)):i||(i=Promise.resolve().then((()=>{i=void 0,s&&t(o.splice(0))})))}));return s=!0,()=>{s=!1,l()}}function m(e,t){const n=c.get(e);n||console.warn("Please use proxy object");const[r,i,o]=n;return o(r,i(),t)}function g(e){return u.add(e),e}},4034:(e,t,n)=>{"use strict";function r(e){return"string"===typeof e?{address:e,type:"json-rpc"}:e}n.d(t,{J:()=>r})},9357:(e,t,n)=>{"use strict";n.d(t,{T:()=>w});var r=n(4034),i=n(2770);const o="0x82ad56cb";var a=n(1370),s=n(6310),l=n(7942),c=n(1313),u=n(7308),d=n(1898),h=n(4117),f=n(2343),p=n(6615);var m=n(1928),g=n(6812),y=n(6510),v=n(2861);async function w(e,t){const{account:w=e.account,batch:b=Boolean(e.batch?.multicall),blockNumber:x,blockTag:E="latest",accessList:C,data:k,gas:_,gasPrice:S,maxFeePerGas:P,maxPriorityFeePerGas:A,nonce:T,to:I,value:O,...N}=t,R=w?(0,r.J)(w):void 0;try{(0,v.c)(t);const n=(x?(0,h.cK)(x):void 0)||E,r=e.chain?.formatters?.transactionRequest?.format,a=(r||g.Bv)({...(0,m.o)(N,{format:r}),from:R?.address,accessList:C,data:k,gas:_,gasPrice:S,maxFeePerGas:P,maxPriorityFeePerGas:A,nonce:T,to:I,value:O});if(b&&function(e){let{request:t}=e;const{data:n,to:r,...i}=t;return!!n&&(!n.startsWith(o)&&(!!r&&!(Object.values(i).filter((e=>"undefined"!==typeof e)).length>0)))}({request:a}))try{return await async function(e,t){const{batchSize:n=1024,wait:r=0}="object"===typeof e.batch?.multicall?e.batch.multicall:{},{blockNumber:o,blockTag:a="latest",data:f,multicallAddress:p,to:m}=t;let g=p;if(!g){if(!e.chain)throw new s.YE;g=(0,d.M)({blockNumber:o,chain:e.chain,contract:"multicall3"})}const v=o?(0,h.cK)(o):void 0,w=v||a,{schedule:b}=(0,y.u)({id:`${e.uid}.${w}`,wait:r,shouldSplitBatch(e){const t=e.reduce(((e,t)=>{let{data:n}=t;return e+(n.length-2)}),0);return t>2*n},fn:async t=>{const n=t.map((e=>({allowFailure:!0,callData:e.data,target:e.to}))),r=(0,u.p)({abi:i.v2,args:[n],functionName:"aggregate3"}),o=await e.request({method:"eth_call",params:[{data:r,to:g},w]});return(0,c.e)({abi:i.v2,args:[n],functionName:"aggregate3",data:o||"0x"})}}),[{returnData:x,success:E}]=await b({data:f,to:m});if(!E)throw new l.$S({data:x});return"0x"===x?{data:void 0}:{data:x}}(e,{...a,blockNumber:x,blockTag:E})}catch(M){if(!(M instanceof s.YE)&&!(M instanceof s.rj))throw M}const f=await e.request({method:"eth_call",params:n?[a,n]:[a]});return"0x"===f?{data:void 0}:{data:f}}catch(M){const r=function(e){if(!(e instanceof a.C))return;const t=e.walk();return"object"===typeof t.data?t.data.data:t.data}(M),{offchainLookup:i,offchainLookupSignature:o}=await n.e(507).then(n.bind(n,8507));if(r?.slice(0,10)===o&&I)return{data:await i(e,{data:r,to:I})};throw function(e,t){let{docsPath:n,...r}=t;const i=(()=>{const t=(0,p.l)(e,r);return t instanceof f.RM?e:t})();return new l.zX(i,{docsPath:n,...r})}(M,{...t,account:R,chain:e.chain})}}},2770:(e,t,n)=>{"use strict";n.d(t,{Ag:()=>o,Rm:()=>l,SJ:()=>s,_:()=>c,oX:()=>a,v2:()=>r});const r=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],i=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"}],o=[...i,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],a=[...i,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],s=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],l=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],c=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}]},9048:(e,t,n)=>{"use strict";n.d(t,{J9:()=>o,Mc:()=>i,fD:()=>r});const r={1:"An `assert` condition failed.",17:"Arithmic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},i={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},o={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"}},9611:(e,t,n)=>{"use strict";n.d(t,{eL:()=>r,pj:()=>o,sz:()=>i});const r={gwei:9,wei:18},i={ether:-9,wei:9},o={ether:-18,gwei:-9}},7965:(e,t,n)=>{"use strict";n.d(t,{BI:()=>b,Iy:()=>l,Iz:()=>y,MR:()=>v,M_:()=>g,Nc:()=>u,O:()=>c,Wq:()=>f,YE:()=>h,YF:()=>s,YW:()=>a,_z:()=>p,d_:()=>S,dm:()=>_,fo:()=>x,gH:()=>d,j:()=>k,kE:()=>m,l3:()=>E,nK:()=>C,nM:()=>w});var r=n(9052),i=n(2017),o=n(1370);class a extends o.C{constructor(e){let{docsPath:t}=e;super(["A constructor was not found on the ABI.","Make sure you are using the correct ABI and that the constructor exists on it."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}}class s extends o.C{constructor(e){let{docsPath:t}=e;super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.","Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}}o.C;class l extends o.C{constructor(e){let{data:t,params:n,size:i}=e;super([`Data size of ${i} bytes is too small for given parameters.`].join("\n"),{metaMessages:[`Params: (${(0,r.A)(n,{includeName:!0})})`,`Data:   ${t} (${i} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t,this.params=n,this.size=i}}class c extends o.C{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class u extends o.C{constructor(e){let{expectedLength:t,givenLength:n,type:r}=e;super([`ABI encoding array length mismatch for type ${r}.`,`Expected length: ${t}`,`Given length: ${n}`].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class d extends o.C{constructor(e){let{expectedSize:t,value:n}=e;super(`Size of bytes "${n}" (bytes${(0,i.E)(n)}) does not match expected size (bytes${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class h extends o.C{constructor(e){let{expectedLength:t,givenLength:n}=e;super(["ABI encoding params/values length mismatch.",`Expected length (params): ${t}`,`Given length (values): ${n}`].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}o.C;o.C;class f extends o.C{constructor(e,t){let{docsPath:n}=t;super([`Encoded error signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`].join("\n"),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}}class p extends o.C{constructor(e){let{docsPath:t}=e;super("Cannot extract event signature from empty topics.",{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}}class m extends o.C{constructor(e,t){let{docsPath:n}=t;super([`Encoded event signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it.",`You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`].join("\n"),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}}class g extends o.C{constructor(e){let{docsPath:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super([`Event ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}}class y extends o.C{constructor(e){let{docsPath:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super([`Function ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the function exists on it."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class v extends o.C{constructor(e,t){let{docsPath:n}=t;super([`Function "${e}" does not contain any \`outputs\` on ABI.`,"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join("\n"),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}o.C;class w extends o.C{constructor(e,t){super("Found ambiguous types in overloaded ABI items.",{metaMessages:[`\`${e.type}\` in \`${(0,r.B)(e.abiItem)}\`, and`,`\`${t.type}\` in \`${(0,r.B)(t.abiItem)}\``,"","These types encode differently and cannot be distinguished at runtime.","Remove one of the ambiguous items in the ABI."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiItemAmbiguityError"})}}class b extends o.C{constructor(e){let{expectedSize:t,givenSize:n}=e;super(`Expected bytes${t}, got bytes${n}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}}class x extends o.C{constructor(e){let{abiItem:t,data:n,params:i,size:o}=e;super([`Data size of ${o} bytes is too small for non-indexed event parameters.`].join("\n"),{metaMessages:[`Params: (${(0,r.A)(i,{includeName:!0})})`,`Data:   ${n} (${o} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=t,this.data=n,this.params=i,this.size=o}}class E extends o.C{constructor(e){let{abiItem:t,param:n}=e;super([`Expected a topic for indexed event parameter${n.name?` "${n.name}"`:""} on event "${(0,r.B)(t,{includeName:!0})}".`].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=t}}class C extends o.C{constructor(e,t){let{docsPath:n}=t;super([`Type "${e}" is not a valid encoding type.`,"Please provide a valid ABI type."].join("\n"),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class k extends o.C{constructor(e,t){let{docsPath:n}=t;super([`Type "${e}" is not a valid decoding type.`,"Please provide a valid ABI type."].join("\n"),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class _ extends o.C{constructor(e){super([`Value "${e}" is not a valid array.`].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class S extends o.C{constructor(e){super([`"${e}" is not a valid definition type.`,'Valid types: "function", "event", "error"'].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}o.C},3491:(e,t,n)=>{"use strict";n.d(t,{M:()=>i});var r=n(1370);class i extends r.C{constructor(e){let{address:t}=e;super(`Address "${t}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}},1370:(e,t,n)=>{"use strict";n.d(t,{C:()=>i});var r=n(4094);class i extends Error{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:(0,r.HF)()});const n=t.cause instanceof i?t.cause.details:t.cause?.message?t.cause.message:t.details,o=t.cause instanceof i&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...o?[`Docs: https://viem.sh${o}.html${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...n?[`Details: ${n}`]:[],`Version: ${this.version}`].join("\n"),t.cause&&(this.cause=t.cause),this.details=n,this.docsPath=o,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return o(this,e)}}function o(e,t){return t?.(e)?e:e&&"object"===typeof e&&"cause"in e?o(e.cause,t):t?null:e}},6310:(e,t,n)=>{"use strict";n.d(t,{EH:()=>o,YE:()=>s,jF:()=>a,rj:()=>i});var r=n(1370);class i extends r.C{constructor(e){let{blockNumber:t,chain:n,contract:r}=e;super(`Chain "${n.name}" does not support contract "${r.name}".`,{metaMessages:["This could be due to any of the following:",...t&&r.blockCreated&&r.blockCreated>t?[`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${t}).`]:[`- The chain does not have the contract "${r.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}class o extends r.C{constructor(e){let{chain:t,currentChainId:n}=e;super(`The current chain of the wallet (id: ${n}) does not match the target chain for the transaction (id: ${t.id} \u2013 ${t.name}).`,{metaMessages:[`Current Chain ID:  ${n}`,`Expected Chain ID: ${t.id} \u2013 ${t.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}}class a extends r.C{constructor(){super(["No chain was provided to the request.","Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}class s extends r.C{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}r.C},7942:(e,t,n)=>{"use strict";n.d(t,{zX:()=>g,bG:()=>y,M:()=>v,rR:()=>w,$S:()=>b});var r=n(4034),i=n(9048),o=n(4745),a=n(9052),s=n(3512);function l(e){let{abiItem:t,args:n,includeFunctionName:r=!0,includeName:i=!1}=e;if("name"in t&&"inputs"in t&&t.inputs)return`${r?t.name:""}(${t.inputs.map(((e,t)=>`${i&&e.name?`${e.name}: `:""}${"object"===typeof n[t]?(0,s.A)(n[t]):n[t]}`)).join(", ")})`}var c=n(2283),u=n(1273),d=n(4569),h=n(7965),f=n(1370),p=n(3003),m=n(4094);class g extends f.C{constructor(e,t){let{account:n,docsPath:i,chain:o,data:a,gas:s,gasPrice:l,maxFeePerGas:c,maxPriorityFeePerGas:h,nonce:f,to:m,value:g}=t;const y=n?(0,r.J)(n):void 0,v=(0,p.aO)({from:y?.address,to:m,value:"undefined"!==typeof g&&`${(0,u.c)(g)} ${o?.nativeCurrency?.symbol||"ETH"}`,data:a,gas:s,gasPrice:"undefined"!==typeof l&&`${(0,d.Q)(l)} gwei`,maxFeePerGas:"undefined"!==typeof c&&`${(0,d.Q)(c)} gwei`,maxPriorityFeePerGas:"undefined"!==typeof h&&`${(0,d.Q)(h)} gwei`,nonce:f});super(e.shortMessage,{cause:e,docsPath:i,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",v].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}}class y extends f.C{constructor(e,t){let{abi:n,args:r,contractAddress:i,docsPath:o,functionName:s,sender:u}=t;const d=(0,c.iY)({abi:n,args:r,name:s}),h=d?l({abiItem:d,args:r,includeFunctionName:!1,includeName:!1}):void 0,f=d?(0,a.B)(d,{includeName:!0}):void 0,g=(0,p.aO)({address:i&&(0,m.RZ)(i),function:f,args:h&&"()"!==h&&`${[...Array(s?.length??0).keys()].map((()=>" ")).join("")}${h}`,sender:u});super(e.shortMessage||`An unknown error occurred while executing the contract function "${s}".`,{cause:e,docsPath:o,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",g].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=n,this.args=r,this.cause=e,this.contractAddress=i,this.functionName=s,this.sender=u}}class v extends f.C{constructor(e){let t,n,r,s,c,{abi:u,data:d,functionName:f,message:p}=e;if(d&&"0x"!==d)try{n=(0,o.W)({abi:u,data:d});const{abiItem:e,errorName:t,args:c}=n;if("Error"===t)s=c[0];else if("Panic"===t){const[e]=c;s=i.fD[e]}else{const n=e?(0,a.B)(e,{includeName:!0}):void 0,i=e&&c?l({abiItem:e,args:c,includeFunctionName:!1,includeName:!1}):void 0;r=[n?`Error: ${n}`:"",i&&"()"!==i?`       ${[...Array(t?.length??0).keys()].map((()=>" ")).join("")}${i}`:""]}}catch(m){t=m}else p&&(s=p);t instanceof h.Wq&&(c=t.signature,r=[`Unable to decode signature "${c}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${c}.`]),super(s&&"execution reverted"!==s||c?[`The contract function "${f}" reverted with the following ${c?"signature":"reason"}:`,s||c].join("\n"):`The contract function "${f}" reverted.`,{cause:t,metaMessages:r}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=n,this.reason=s,this.signature=c}}class w extends f.C{constructor(e){let{functionName:t}=e;super(`The contract function "${t}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${t}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class b extends f.C{constructor(e){let{data:t,message:n}=e;super(n||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t}}},4603:(e,t,n)=>{"use strict";n.d(t,{F:()=>o,i:()=>i});var r=n(1370);class i extends r.C{constructor(e){let{offset:t,position:n,size:r}=e;super(`Slice ${"start"===n?"starting":"ending"} at offset "${t}" is out-of-bounds (size: ${r}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class o extends r.C{constructor(e){let{size:t,targetSize:n,type:r}=e;super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${t}) exceeds padding size (${n}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}},3458:(e,t,n)=>{"use strict";n.d(t,{H2:()=>o,Ty:()=>i,u:()=>a});var r=n(1370);r.C;r.C;class i extends r.C{constructor(e){let{max:t,min:n,signed:r,size:i,value:o}=e;super(`Number "${o}" is not in safe ${i?`${8*i}-bit ${r?"signed":"unsigned"} `:""}integer range ${t?`(${n} to ${t})`:`(above ${n})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}r.C;class o extends r.C{constructor(e){super(`Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidHexBooleanError"})}}r.C;r.C;class a extends r.C{constructor(e){let{givenSize:t,maxSize:n}=e;super(`Size cannot exceed ${n} bytes. Given size: ${t} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}},2343:(e,t,n)=>{"use strict";n.d(t,{A7:()=>o,BG:()=>a,Fo:()=>f,K0:()=>l,Oh:()=>c,RM:()=>g,jj:()=>s,k5:()=>d,lN:()=>m,lY:()=>h,uC:()=>p,vW:()=>u});var r=n(4569),i=n(1370);class o extends i.C{constructor(){let{cause:e,message:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n=t?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${n?`with reason: ${n}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(o,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(o,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class a extends i.C{constructor(){let{cause:e,maxFeePerGas:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,r.Q)(t)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(a,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class s extends i.C{constructor(){let{cause:e,maxFeePerGas:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,r.Q)(t)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(s,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class l extends i.C{constructor(){let{cause:e,nonce:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(l,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class c extends i.C{constructor(){let{cause:e,nonce:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super([`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join("\n"),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(c,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class u extends i.C{constructor(){let{cause:e,nonce:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(u,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class d extends i.C{constructor(){let{cause:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join("\n"),{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(d,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class h extends i.C{constructor(){let{cause:e,gas:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(h,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class f extends i.C{constructor(){let{cause:e,gas:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(f,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class p extends i.C{constructor(e){let{cause:t}=e;super("The transaction type is not supported for this chain.",{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(p,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class m extends i.C{constructor(){let{cause:e,maxPriorityFeePerGas:t,maxFeePerGas:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super([`The provided tip (\`maxPriorityFeePerGas\`${t?` = ${(0,r.Q)(t)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${n?` = ${(0,r.Q)(n)} gwei`:""}).`].join("\n"),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(m,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class g extends i.C{constructor(e){let{cause:t}=e;super(`An error occurred while executing: ${t?.shortMessage}`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}},2494:(e,t,n)=>{"use strict";n.d(t,{Ci:()=>a,J8:()=>l,MU:()=>c,Pr:()=>s});var r=n(3512),i=n(1370),o=n(4094);class a extends i.C{constructor(e){let{body:t,details:n,headers:i,status:a,url:s}=e;super("HTTP request failed.",{details:n,metaMessages:[a&&`Status: ${a}`,`URL: ${(0,o.ID)(s)}`,t&&`Request body: ${(0,r.A)(t)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=t,this.headers=i,this.status=a,this.url=s}}class s extends i.C{constructor(e){let{body:t,details:n,url:i}=e;super("WebSocket request failed.",{details:n,metaMessages:[`URL: ${(0,o.ID)(i)}`,`Request body: ${(0,r.A)(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WebSocketRequestError"})}}class l extends i.C{constructor(e){let{body:t,error:n,url:i}=e;super("RPC Request failed.",{cause:n,details:n.message,metaMessages:[`URL: ${(0,o.ID)(i)}`,`Request body: ${(0,r.A)(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=n.code}}class c extends i.C{constructor(e){let{body:t,url:n}=e;super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${(0,o.ID)(n)}`,`Request body: ${(0,r.A)(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}},3003:(e,t,n)=>{"use strict";n.d(t,{$s:()=>c,Kc:()=>d,Kz:()=>u,Vg:()=>l,WA:()=>h,aO:()=>a,n3:()=>s});var r=n(1273),i=n(4569),o=n(1370);function a(e){const t=Object.entries(e).map((e=>{let[t,n]=e;return void 0===n||!1===n?null:[t,n]})).filter(Boolean),n=t.reduce(((e,t)=>{let[n]=t;return Math.max(e,n.length)}),0);return t.map((e=>{let[t,r]=e;return`  ${`${t}:`.padEnd(n+1)}  ${r}`})).join("\n")}class s extends o.C{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}o.C;class l extends o.C{constructor(e){let{transaction:t}=e;super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",a(t),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}o.C;o.C;o.C;class c extends o.C{constructor(e,t){let{account:n,docsPath:o,chain:s,data:l,gas:c,gasPrice:u,maxFeePerGas:d,maxPriorityFeePerGas:h,nonce:f,to:p,value:m}=t;const g=a({chain:s&&`${s?.name} (id: ${s?.id})`,from:n?.address,to:p,value:"undefined"!==typeof m&&`${(0,r.c)(m)} ${s?.nativeCurrency?.symbol||"ETH"}`,data:l,gas:c,gasPrice:"undefined"!==typeof u&&`${(0,i.Q)(u)} gwei`,maxFeePerGas:"undefined"!==typeof d&&`${(0,i.Q)(d)} gwei`,maxPriorityFeePerGas:"undefined"!==typeof h&&`${(0,i.Q)(h)} gwei`,nonce:f});super(e.shortMessage,{cause:e,docsPath:o,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Request Arguments:",g].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=e}}class u extends o.C{constructor(e){let{blockHash:t,blockNumber:n,blockTag:r,hash:i,index:o}=e,a="Transaction";r&&void 0!==o&&(a=`Transaction at block time "${r}" at index "${o}"`),t&&void 0!==o&&(a=`Transaction at block hash "${t}" at index "${o}"`),n&&void 0!==o&&(a=`Transaction at block number "${n}" at index "${o}"`),i&&(a=`Transaction with hash "${i}"`),super(`${a} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}}class d extends o.C{constructor(e){let{hash:t}=e;super(`Transaction receipt with hash "${t}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}}class h extends o.C{constructor(e){let{hash:t}=e;super(`Timed out while waiting for transaction with hash "${t}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}},4094:(e,t,n)=>{"use strict";n.d(t,{RZ:()=>r,ID:()=>i,HF:()=>o});const r=e=>e,i=e=>e,o=()=>"viem@1.21.3"},6424:(e,t,n)=>{"use strict";n.d(t,{n:()=>u});var r=n(7965),i=n(3028),o=n(2017),a=n(6220),s=n(8604),l=n(7962),c=n(1376);function u(e,t){if("0x"===t&&e.length>0)throw new r.O;if((0,o.E)(t)&&(0,o.E)(t)<32)throw new r.Iy({data:t,params:e,size:(0,o.E)(t)});return function(e){let{data:t,params:n}=e;const i=[];let a=0;for(let s=0;s<n.length;s++){if(a>=(0,o.E)(t))throw new r.Iy({data:t,params:n,size:(0,o.E)(t)});const e=n[s],{consumed:l,value:c}=d({data:t,param:e,position:a});i.push(c),a+=l}return i}({data:t,params:e})}function d(e){let{data:t,param:n,position:o}=e;const u=(0,c.k)(n.type);if(u){const[e,r]=u;return function(e,t){let{param:n,length:r,position:i}=t;if(!r){const t=(0,l.ME)((0,a.di)(e,i,i+32,{strict:!0})),r=(0,l.ME)((0,a.di)(e,t,t+32,{strict:!0}));let o=0;const s=[];for(let i=0;i<r;++i){const r=d({data:(0,a.di)(e,t+32),param:n,position:o});o+=r.consumed,s.push(r.value)}return{value:s,consumed:32}}if(h(n)){const t=(0,c.k)(n.type),o=!t?.[0];let s=0;const u=[];for(let c=0;c<r;++c){const t=(0,l.ME)((0,a.di)(e,i,i+32,{strict:!0})),r=d({data:(0,a.di)(e,t),param:n,position:o?s:32*c});s+=r.consumed,u.push(r.value)}return{value:u,consumed:32}}let o=0;const s=[];for(let a=0;a<r;++a){const t=d({data:e,param:n,position:i+o});o+=t.consumed,s.push(t.value)}return{value:s,consumed:o}}(t,{length:e,param:{...n,type:r},position:o})}if("tuple"===n.type)return function(e,t){let{param:n,position:r}=t;const i=0===n.components.length||n.components.some((e=>{let{name:t}=e;return!t})),o=i?[]:{};let s=0;if(h(n)){const t=(0,l.ME)((0,a.di)(e,r,r+32,{strict:!0}));for(let r=0;r<n.components.length;++r){const l=n.components[r],c=d({data:(0,a.di)(e,t),param:l,position:s});s+=c.consumed,o[i?r:l?.name]=c.value}return{consumed:32,value:o}}for(let a=0;a<n.components.length;++a){const t=n.components[a],l=d({data:e,param:t,position:r+s});s+=l.consumed,o[i?a:t?.name]=l.value}return{consumed:s,value:o}}(t,{param:n,position:o});if("string"===n.type)return function(e,t){let{position:n}=t;const r=(0,l.ME)((0,a.di)(e,n,n+32,{strict:!0})),i=(0,l.ME)((0,a.di)(e,r,r+32,{strict:!0}));if(0===i)return{consumed:32,value:""};const o=(0,l.IQ)((0,s.B)((0,a.di)(e,r+32,r+32+i,{strict:!0})));return{consumed:32,value:o}}(t,{position:o});if(n.type.startsWith("bytes"))return function(e,t){let{param:n,position:r}=t;const[i,o]=n.type.split("bytes");if(!o){const t=(0,l.ME)((0,a.di)(e,r,r+32,{strict:!0})),n=(0,l.ME)((0,a.di)(e,t,t+32,{strict:!0}));if(0===n)return{consumed:32,value:"0x"};return{consumed:32,value:(0,a.di)(e,t+32,t+32+n,{strict:!0})}}const s=(0,a.di)(e,r,r+parseInt(o),{strict:!0});return{consumed:32,value:s}}(t,{param:n,position:o});const f=(0,a.di)(t,o,o+32,{strict:!0});if(n.type.startsWith("uint")||n.type.startsWith("int"))return function(e,t){let{param:n}=t;const r=n.type.startsWith("int"),i=parseInt(n.type.split("int")[1]||"256");return{consumed:32,value:i>48?(0,l.uU)(e,{signed:r}):(0,l.ME)(e,{signed:r})}}(f,{param:n});if("address"===n.type)return function(e){return{consumed:32,value:(0,i.o)((0,a.di)(e,-20))}}(f);if("bool"===n.type)return function(e){return{consumed:32,value:(0,l.Nx)(e)}}(f);throw new r.j(n.type,{docsPath:"/docs/contract/decodeAbiParameters"})}function h(e){const{type:t}=e;if("string"===t)return!0;if("bytes"===t)return!0;if(t.endsWith("[]"))return!0;if("tuple"===t)return e.components?.some(h);const n=(0,c.k)(e.type);return!(!n||!h({...e,type:n[1]}))}},4745:(e,t,n)=>{"use strict";n.d(t,{W:()=>c});var r=n(9048),i=n(7965),o=n(6220),a=n(6543),s=n(6424),l=n(9052);function c(e){let{abi:t,data:n}=e;const c=(0,o.di)(n,0,4);if("0x"===c)throw new i.O;const u=[...t||[],r.Mc,r.J9].find((e=>"error"===e.type&&c===(0,a._)((0,l.B)(e))));if(!u)throw new i.Wq(c,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:u,args:"inputs"in u&&u.inputs&&u.inputs.length>0?(0,s.n)(u.inputs,(0,o.di)(n,4)):void 0,errorName:u.name}}},1313:(e,t,n)=>{"use strict";n.d(t,{e:()=>s});var r=n(7965),i=n(6424),o=n(2283);const a="/docs/contract/decodeFunctionResult";function s(e){let{abi:t,args:n,functionName:s,data:l}=e,c=t[0];if(s&&(c=(0,o.iY)({abi:t,args:n,name:s}),!c))throw new r.Iz(s,{docsPath:a});if("function"!==c.type)throw new r.Iz(void 0,{docsPath:a});if(!c.outputs)throw new r.MR(c.name,{docsPath:a});const u=(0,i.n)(c.outputs,l);return u&&u.length>1?u:u&&1===u.length?u[0]:void 0}},1376:(e,t,n)=>{"use strict";n.d(t,{h:()=>d,k:()=>p});var r=n(7965),i=n(3491),o=n(4074),a=n(2620),s=n(7143),l=n(2017),c=n(6220),u=n(4117);function d(e,t){if(e.length!==t.length)throw new r.YE({expectedLength:e.length,givenLength:t.length});const n=function(e){let{params:t,values:n}=e;const r=[];for(let i=0;i<t.length;i++)r.push(h({param:t[i],value:n[i]}));return r}({params:e,values:t}),i=f(n);return 0===i.length?"0x":i}function h(e){let{param:t,value:n}=e;const d=p(t.type);if(d){const[e,i]=d;return function(e,t){let{length:n,param:i}=t;const o=null===n;if(!Array.isArray(e))throw new r.dm(e);if(!o&&e.length!==n)throw new r.Nc({expectedLength:n,givenLength:e.length,type:`${i.type}[${n}]`});let s=!1;const l=[];for(let r=0;r<e.length;r++){const t=h({param:i,value:e[r]});t.dynamic&&(s=!0),l.push(t)}if(o||s){const e=f(l);if(o){const t=(0,u.cK)(l.length,{size:32});return{dynamic:!0,encoded:l.length>0?(0,a.xW)([t,e]):t}}if(s)return{dynamic:!0,encoded:e}}return{dynamic:!1,encoded:(0,a.xW)(l.map((e=>{let{encoded:t}=e;return t})))}}(n,{length:e,param:{...t,type:i}})}if("tuple"===t.type)return function(e,t){let{param:n}=t,r=!1;const i=[];for(let o=0;o<n.components.length;o++){const t=n.components[o],a=h({param:t,value:e[Array.isArray(e)?o:t.name]});i.push(a),a.dynamic&&(r=!0)}return{dynamic:r,encoded:r?f(i):(0,a.xW)(i.map((e=>{let{encoded:t}=e;return t})))}}(n,{param:t});if("address"===t.type)return function(e){if(!(0,o.P)(e))throw new i.M({address:e});return{dynamic:!1,encoded:(0,s.db)(e.toLowerCase())}}(n);if("bool"===t.type)return function(e){return{dynamic:!1,encoded:(0,s.db)((0,u.$P)(e))}}(n);if(t.type.startsWith("uint")||t.type.startsWith("int")){return function(e,t){let{signed:n}=t;return{dynamic:!1,encoded:(0,u.cK)(e,{size:32,signed:n})}}(n,{signed:t.type.startsWith("int")})}if(t.type.startsWith("bytes"))return function(e,t){let{param:n}=t;const[,i]=n.type.split("bytes"),o=(0,l.E)(e);if(!i){let t=e;return o%32!==0&&(t=(0,s.db)(t,{dir:"right",size:32*Math.ceil((e.length-2)/2/32)})),{dynamic:!0,encoded:(0,a.xW)([(0,s.db)((0,u.cK)(o,{size:32})),t])}}if(o!==parseInt(i))throw new r.gH({expectedSize:parseInt(i),value:e});return{dynamic:!1,encoded:(0,s.db)(e,{dir:"right"})}}(n,{param:t});if("string"===t.type)return function(e){const t=(0,u.i3)(e),n=Math.ceil((0,l.E)(t)/32),r=[];for(let i=0;i<n;i++)r.push((0,s.db)((0,c.di)(t,32*i,32*(i+1)),{dir:"right"}));return{dynamic:!0,encoded:(0,a.xW)([(0,s.db)((0,u.cK)((0,l.E)(t),{size:32})),...r])}}(n);throw new r.nK(t.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function f(e){let t=0;for(let o=0;o<e.length;o++){const{dynamic:n,encoded:r}=e[o];t+=n?32:(0,l.E)(r)}const n=[],r=[];let i=0;for(let o=0;o<e.length;o++){const{dynamic:a,encoded:s}=e[o];a?(n.push((0,u.cK)(t+i,{size:32})),r.push(s),i+=(0,l.E)(s)):n.push(s)}return(0,a.xW)([...n,...r])}function p(e){const t=e.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}},7308:(e,t,n)=>{"use strict";n.d(t,{p:()=>c});var r=n(7965),i=n(2620),o=n(6543),a=n(1376),s=n(9052),l=n(2283);function c(e){let{abi:t,args:n,functionName:c}=e,u=t[0];if(c&&(u=(0,l.iY)({abi:t,args:n,name:c}),!u))throw new r.Iz(c,{docsPath:"/docs/contract/encodeFunctionData"});if("function"!==u.type)throw new r.Iz(void 0,{docsPath:"/docs/contract/encodeFunctionData"});const d=(0,s.B)(u),h=(0,o._)(d),f="inputs"in u&&u.inputs?(0,a.h)(u.inputs,n??[]):void 0;return(0,i.aP)([h,f??"0x"])}},9052:(e,t,n)=>{"use strict";n.d(t,{A:()=>o,B:()=>i});var r=n(7965);function i(e){let{includeName:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("function"!==e.type&&"event"!==e.type&&"error"!==e.type)throw new r.d_(e.type);return`${e.name}(${o(e.inputs,{includeName:t})})`}function o(e){let{includeName:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e?e.map((e=>function(e,t){let{includeName:n}=t;if(e.type.startsWith("tuple"))return`(${o(e.components,{includeName:n})})${e.type.slice(5)}`;return e.type+(n&&e.name?` ${e.name}`:"")}(e,{includeName:t}))).join(t?", ":","):""}},2283:(e,t,n)=>{"use strict";n.d(t,{iY:()=>l});var r=n(7965),i=n(1499),o=n(4191),a=n(6543),s=n(4074);function l(e){let{abi:t,args:n=[],name:s}=e;const l=(0,i.q)(s,{strict:!1}),d=t.filter((e=>l?"function"===e.type?(0,a._)(e)===s:"event"===e.type&&(0,o.c)(e)===s:"name"in e&&e.name===s));if(0===d.length)return;if(1===d.length)return d[0];let h;for(const i of d){if(!("inputs"in i))continue;if(!n||0===n.length){if(!i.inputs||0===i.inputs.length)return i;continue}if(!i.inputs)continue;if(0===i.inputs.length)continue;if(i.inputs.length!==n.length)continue;if(n.every(((e,t)=>{const n="inputs"in i&&i.inputs[t];return!!n&&c(e,n)}))){if(h&&"inputs"in h&&h.inputs){const e=u(i.inputs,h.inputs,n);if(e)throw new r.nM({abiItem:i,type:e[0]},{abiItem:h,type:e[1]})}h=i}}return h||d[0]}function c(e,t){const n=typeof e,r=t.type;switch(r){case"address":return(0,s.P)(e);case"bool":return"boolean"===n;case"function":case"string":return"string"===n;default:return"tuple"===r&&"components"in t?Object.values(t.components).every(((t,n)=>c(Object.values(e)[n],t))):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r)?"number"===n||"bigint"===n:/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r)?"string"===n||e instanceof Uint8Array:!!/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r)&&(Array.isArray(e)&&e.every((e=>c(e,{...t,type:r.replace(/(\[[0-9]{0,}\])$/,"")}))))}}function u(e,t,n){for(const r in e){const i=e[r],o=t[r];if("tuple"===i.type&&"tuple"===o.type&&"components"in i&&"components"in o)return u(i.components,o.components,n[r]);const a=[i.type,o.type];if(!(!a.includes("address")||!a.includes("bytes20"))||(a.includes("address")&&a.includes("string")||!(!a.includes("address")||!a.includes("bytes")))&&(0,s.P)(n[r]))return a}}},3028:(e,t,n)=>{"use strict";n.d(t,{b:()=>l,o:()=>s});var r=n(3491),i=n(7131),o=n(3232),a=n(4074);function s(e,t){const n=t?`${t}${e.toLowerCase()}`:e.substring(2).toLowerCase(),r=(0,o.S)((0,i.Af)(n),"bytes"),a=(t?n.substring(`${t}0x`.length):n).split("");for(let i=0;i<40;i+=2)r[i>>1]>>4>=8&&a[i]&&(a[i]=a[i].toUpperCase()),(15&r[i>>1])>=8&&a[i+1]&&(a[i+1]=a[i+1].toUpperCase());return`0x${a.join("")}`}function l(e,t){if(!(0,a.P)(e))throw new r.M({address:e});return s(e,t)}},4074:(e,t,n)=>{"use strict";n.d(t,{P:()=>i});const r=/^0x[a-fA-F0-9]{40}$/;function i(e){return r.test(e)}},1898:(e,t,n)=>{"use strict";n.d(t,{M:()=>i});var r=n(6310);function i(e){let{blockNumber:t,chain:n,contract:i}=e;const o=n?.contracts?.[i];if(!o)throw new r.rj({chain:n,contract:{name:i}});if(t&&o.blockCreated&&o.blockCreated>t)throw new r.rj({blockNumber:t,chain:n,contract:{name:i,blockCreated:o.blockCreated}});return o.address}},2620:(e,t,n)=>{"use strict";function r(e){return"string"===typeof e[0]?i(e):function(e){let t=0;for(const i of e)t+=i.length;const n=new Uint8Array(t);let r=0;for(const i of e)n.set(i,r),r+=i.length;return n}(e)}function i(e){return`0x${e.reduce(((e,t)=>e+t.replace("0x","")),"")}`}n.d(t,{aP:()=>i,xW:()=>r})},1499:(e,t,n)=>{"use strict";function r(e){let{strict:t=!0}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return!!e&&("string"===typeof e&&(t?/^0x[0-9a-fA-F]*$/.test(e):e.startsWith("0x")))}n.d(t,{q:()=>r})},7143:(e,t,n)=>{"use strict";n.d(t,{db:()=>o,eV:()=>i});var r=n(4603);function i(e){let{dir:t,size:n=32}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"===typeof e?o(e,{dir:t,size:n}):function(e){let{dir:t,size:n=32}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null===n)return e;if(e.length>n)throw new r.F({size:e.length,targetSize:n,type:"bytes"});const i=new Uint8Array(n);for(let r=0;r<n;r++){const o="right"===t;i[o?r:n-r-1]=e[o?r:e.length-r-1]}return i}(e,{dir:t,size:n})}function o(e){let{dir:t,size:n=32}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null===n)return e;const i=e.replace("0x","");if(i.length>2*n)throw new r.F({size:Math.ceil(i.length/2),targetSize:n,type:"hex"});return`0x${i["right"===t?"padEnd":"padStart"](2*n,"0")}`}},2017:(e,t,n)=>{"use strict";n.d(t,{E:()=>i});var r=n(1499);function i(e){return(0,r.q)(e,{strict:!1})?Math.ceil((e.length-2)/2):e.length}},6220:(e,t,n)=>{"use strict";n.d(t,{di:()=>a});var r=n(4603),i=n(1499),o=n(2017);function a(e,t,n){let{strict:r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return(0,i.q)(e,{strict:!1})?function(e,t,n){let{strict:r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};s(e,t);const i=`0x${e.replace("0x","").slice(2*(t??0),2*(n??e.length))}`;r&&l(i,t,n);return i}(e,t,n,{strict:r}):function(e,t,n){let{strict:r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};s(e,t);const i=e.slice(t,n);r&&l(i,t,n);return i}(e,t,n,{strict:r})}function s(e,t){if("number"===typeof t&&t>0&&t>(0,o.E)(e)-1)throw new r.i({offset:t,position:"start",size:(0,o.E)(e)})}function l(e,t,n){if("number"===typeof t&&"number"===typeof n&&(0,o.E)(e)!==n-t)throw new r.i({offset:n,position:"end",size:(0,o.E)(e)})}},8604:(e,t,n)=>{"use strict";function r(e){let{dir:t="left"}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="string"===typeof e?e.replace("0x",""):e,r=0;for(let i=0;i<n.length-1&&"0"===n["left"===t?i:n.length-i-1].toString();i++)r++;return n="left"===t?n.slice(r):n.slice(0,n.length-r),"string"===typeof e?(1===n.length&&"right"===t&&(n=`${n}0`),`0x${n.length%2===1?`0${n}`:n}`):n}n.d(t,{B:()=>r})},7962:(e,t,n)=>{"use strict";n.d(t,{IQ:()=>d,ME:()=>u,Nx:()=>c,Sl:()=>s,uU:()=>l});var r=n(3458),i=n(2017),o=n(8604),a=n(7131);function s(e,t){let{size:n}=t;if((0,i.E)(e)>n)throw new r.u({givenSize:(0,i.E)(e),maxSize:n})}function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{signed:n}=t;t.size&&s(e,{size:t.size});const r=BigInt(e);if(!n)return r;const i=(e.length-2)/2;return r<=(1n<<8n*BigInt(i)-1n)-1n?r:r-BigInt(`0x${"f".padStart(2*i,"f")}`)-1n}function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if(t.size&&(s(n,{size:t.size}),n=(0,o.B)(n)),"0x00"===(0,o.B)(n))return!1;if("0x01"===(0,o.B)(n))return!0;throw new r.H2(n)}function u(e){return Number(l(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}))}function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,a.aT)(e);return t.size&&(s(n,{size:t.size}),n=(0,o.B)(n,{dir:"right"})),(new TextDecoder).decode(n)}},7131:(e,t,n)=>{"use strict";n.d(t,{Af:()=>f,ZJ:()=>c,aT:()=>h});var r=n(1370),i=n(1499),o=n(7143),a=n(7962),s=n(4117);const l=new TextEncoder;function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"number"===typeof e||"bigint"===typeof e?function(e,t){const n=(0,s.cK)(e,t);return h(n)}(e,t):"boolean"===typeof e?function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=new Uint8Array(1);if(n[0]=Number(e),"number"===typeof t.size)return(0,a.Sl)(n,{size:t.size}),(0,o.eV)(n,{size:t.size});return n}(e,t):(0,i.q)(e)?h(e,t):f(e,t)}const u={zero:48,nine:57,A:65,F:70,a:97,f:102};function d(e){return e>=u.zero&&e<=u.nine?e-u.zero:e>=u.A&&e<=u.F?e-(u.A-10):e>=u.a&&e<=u.f?e-(u.a-10):void 0}function h(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;t.size&&((0,a.Sl)(n,{size:t.size}),n=(0,o.eV)(n,{dir:"right",size:t.size}));let i=n.slice(2);i.length%2&&(i=`0${i}`);const s=i.length/2,l=new Uint8Array(s);for(let o=0,a=0;o<s;o++){const e=d(i.charCodeAt(a++)),t=d(i.charCodeAt(a++));if(void 0===e||void 0===t)throw new r.C(`Invalid byte sequence ("${i[a-2]}${i[a-1]}" in "${i}").`);l[o]=16*e+t}return l}function f(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=l.encode(e);return"number"===typeof t.size?((0,a.Sl)(n,{size:t.size}),(0,o.eV)(n,{dir:"right",size:t.size})):n}},4117:(e,t,n)=>{"use strict";n.d(t,{$P:()=>l,My:()=>c,cK:()=>u,i3:()=>h,nj:()=>s});var r=n(3458),i=n(7143),o=n(7962);const a=Array.from({length:256},((e,t)=>t.toString(16).padStart(2,"0")));function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"number"===typeof e||"bigint"===typeof e?u(e,t):"string"===typeof e?h(e,t):"boolean"===typeof e?l(e,t):c(e,t)}function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=`0x${Number(e)}`;return"number"===typeof t.size?((0,o.Sl)(n,{size:t.size}),(0,i.eV)(n,{size:t.size})):n}function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="";for(let i=0;i<e.length;i++)n+=a[e[i]];const r=`0x${n}`;return"number"===typeof t.size?((0,o.Sl)(r,{size:t.size}),(0,i.eV)(r,{dir:"right",size:t.size})):r}function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{signed:n,size:o}=t,a=BigInt(e);let s;o?s=n?(1n<<8n*BigInt(o)-1n)-1n:2n**(8n*BigInt(o))-1n:"number"===typeof e&&(s=BigInt(Number.MAX_SAFE_INTEGER));const l="bigint"===typeof s&&n?-s-1n:0;if(s&&a>s||a<l){const t="bigint"===typeof e?"n":"";throw new r.Ty({max:s?`${s}${t}`:void 0,min:`${l}${t}`,signed:n,size:o,value:`${e}${t}`})}const c=`0x${(n&&a<0?(1n<<BigInt(8*o))+BigInt(a):a).toString(16)}`;return o?(0,i.eV)(c,{size:o}):c}const d=new TextEncoder;function h(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return c(d.encode(e),t)}},6615:(e,t,n)=>{"use strict";n.d(t,{l:()=>o});var r=n(1370),i=n(2343);function o(e,t){const n=(e.details||"").toLowerCase(),o=e.walk((e=>e.code===i.A7.code));return o instanceof r.C?new i.A7({cause:e,message:o.details}):i.A7.nodeMessage.test(n)?new i.A7({cause:e,message:e.details}):i.BG.nodeMessage.test(n)?new i.BG({cause:e,maxFeePerGas:t?.maxFeePerGas}):i.jj.nodeMessage.test(n)?new i.jj({cause:e,maxFeePerGas:t?.maxFeePerGas}):i.K0.nodeMessage.test(n)?new i.K0({cause:e,nonce:t?.nonce}):i.Oh.nodeMessage.test(n)?new i.Oh({cause:e,nonce:t?.nonce}):i.vW.nodeMessage.test(n)?new i.vW({cause:e,nonce:t?.nonce}):i.k5.nodeMessage.test(n)?new i.k5({cause:e}):i.lY.nodeMessage.test(n)?new i.lY({cause:e,gas:t?.gas}):i.Fo.nodeMessage.test(n)?new i.Fo({cause:e,gas:t?.gas}):i.uC.nodeMessage.test(n)?new i.uC({cause:e}):i.lN.nodeMessage.test(n)?new i.lN({cause:e,maxFeePerGas:t?.maxFeePerGas,maxPriorityFeePerGas:t?.maxPriorityFeePerGas}):new i.RM({cause:e})}},1928:(e,t,n)=>{"use strict";function r(e,t){let{format:n}=t;if(!n)return{};const r={};return function t(n){const i=Object.keys(n);for(const o of i)o in e&&(r[o]=e[o]),n[o]&&"object"===typeof n[o]&&!Array.isArray(n[o])&&t(n[o])}(n(e||{})),r}n.d(t,{o:()=>r})},6812:(e,t,n)=>{"use strict";n.d(t,{Bv:()=>o});var r=n(4117);const i={legacy:"0x0",eip2930:"0x1",eip1559:"0x2"};function o(e){return{...e,gas:"undefined"!==typeof e.gas?(0,r.cK)(e.gas):void 0,gasPrice:"undefined"!==typeof e.gasPrice?(0,r.cK)(e.gasPrice):void 0,maxFeePerGas:"undefined"!==typeof e.maxFeePerGas?(0,r.cK)(e.maxFeePerGas):void 0,maxPriorityFeePerGas:"undefined"!==typeof e.maxPriorityFeePerGas?(0,r.cK)(e.maxPriorityFeePerGas):void 0,nonce:"undefined"!==typeof e.nonce?(0,r.cK)(e.nonce):void 0,type:"undefined"!==typeof e.type?i[e.type]:void 0,value:"undefined"!==typeof e.value?(0,r.cK)(e.value):void 0}}},4191:(e,t,n)=>{"use strict";n.d(t,{c:()=>a});var r=n(7131),i=n(6726);var o=n(3232);const a=e=>{return t=(e=>(0,i.d)(e))(e),(0,o.S)((0,r.ZJ)(t));var t}},6543:(e,t,n)=>{"use strict";n.d(t,{_:()=>s});var r=n(6220),i=n(7131),o=n(6726),a=n(3232);const s=e=>{return(0,r.di)((t=(0,o.d)(e),(0,a.S)((0,i.ZJ)(t))),0,4);var t}},6726:(e,t,n)=>{"use strict";n.d(t,{d:()=>s});const r=/^tuple(?<array>(\[(\d*)\])*)$/;function i(e){let t=e.type;if(r.test(e.type)&&"components"in e){t="(";const n=e.components.length;for(let r=0;r<n;r++){t+=i(e.components[r]),r<n-1&&(t+=", ")}const o=function(e,t){const n=e.exec(t);return n?.groups}(r,e.type);return t+=`)${o?.array??""}`,i({...e,type:t})}return"indexed"in e&&e.indexed&&(t=`${t} indexed`),e.name?`${t} ${e.name}`:t}function o(e){let t="";const n=e.length;for(let r=0;r<n;r++){t+=i(e[r]),r!==n-1&&(t+=", ")}return t}var a=n(1370);const s=e=>function(e){let t=!0,n="",r=0,i="",o=!1;for(let a=0;a<e.length;a++){const s=e[a];if(["(",")",","].includes(s)&&(t=!0),"("===s&&r++,")"===s&&r--,t)if(0!==r)" "!==s?(i+=s,n+=s):","!==e[a-1]&&","!==n&&",("!==n&&(n="",t=!1);else if(" "===s&&["event","function",""].includes(i))i="";else if(i+=s,")"===s){o=!0;break}}if(!o)throw new a.C("Unable to normalize signature.");return i}((()=>{return"string"===typeof e?e:"function"===(t=e).type?`function ${t.name}(${o(t.inputs)})${t.stateMutability&&"nonpayable"!==t.stateMutability?` ${t.stateMutability}`:""}${t.outputs.length?` returns (${o(t.outputs)})`:""}`:"event"===t.type?`event ${t.name}(${o(t.inputs)})`:"error"===t.type?`error ${t.name}(${o(t.inputs)})`:"constructor"===t.type?`constructor(${o(t.inputs)})${"payable"===t.stateMutability?" payable":""}`:"fallback"===t.type?"fallback()":"receive() external payable";var t})())},3232:(e,t,n)=>{"use strict";function r(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function i(e){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(n.length>0&&!n.includes(e.length))throw new Error(`Expected Uint8Array of length ${n}, not of length=${e.length}`)}function o(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function a(e,t){i(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}n.d(t,{S:()=>U});const s=BigInt(2**32-1),l=BigInt(32);function c(e){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?{h:Number(e&s),l:Number(e>>l&s)}:{h:0|Number(e>>l&s),l:0|Number(e&s)}}function u(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=new Uint32Array(e.length),r=new Uint32Array(e.length);for(let i=0;i<e.length;i++){const{h:o,l:a}=c(e[i],t);[n[i],r[i]]=[o,a]}return[n,r]}const d=(e,t,n)=>e<<n|t>>>32-n,h=(e,t,n)=>t<<n|e>>>32-n,f=(e,t,n)=>t<<n-32|e>>>64-n,p=(e,t,n)=>e<<n-32|t>>>64-n;const m=e=>e instanceof Uint8Array;if(!(68===new Uint8Array(new Uint32Array([287454020]).buffer)[0]))throw new Error("Non little-endian hardware is not supported");function g(e){if("string"===typeof e&&(e=function(e){if("string"!==typeof e)throw new Error("utf8ToBytes expected string, got "+typeof e);return new Uint8Array((new TextEncoder).encode(e))}(e)),!m(e))throw new Error("expected Uint8Array, got "+typeof e);return e}class y{clone(){return this._cloneInto()}}const[v,w,b]=[[],[],[]],x=BigInt(0),E=BigInt(1),C=BigInt(2),k=BigInt(7),_=BigInt(256),S=BigInt(113);for(let L=0,D=E,B=1,F=0;L<24;L++){[B,F]=[F,(2*B+3*F)%5],v.push(2*(5*F+B)),w.push((L+1)*(L+2)/2%64);let e=x;for(let t=0;t<7;t++)D=(D<<E^(D>>k)*S)%_,D&C&&(e^=E<<(E<<BigInt(t))-E);b.push(e)}const[P,A]=u(b,!0),T=(e,t,n)=>n>32?f(e,t,n):d(e,t,n),I=(e,t,n)=>n>32?p(e,t,n):h(e,t,n);class O extends y{constructor(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:24;if(super(),this.blockLen=e,this.suffix=t,this.outputLen=n,this.enableXOF=i,this.rounds=o,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,r(n),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");var a;this.state=new Uint8Array(200),this.state32=(a=this.state,new Uint32Array(a.buffer,a.byteOffset,Math.floor(a.byteLength/4)))}keccak(){!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:24;const n=new Uint32Array(10);for(let r=24-t;r<24;r++){for(let r=0;r<10;r++)n[r]=e[r]^e[r+10]^e[r+20]^e[r+30]^e[r+40];for(let r=0;r<10;r+=2){const t=(r+8)%10,i=(r+2)%10,o=n[i],a=n[i+1],s=T(o,a,1)^n[t],l=I(o,a,1)^n[t+1];for(let n=0;n<50;n+=10)e[r+n]^=s,e[r+n+1]^=l}let t=e[2],i=e[3];for(let n=0;n<24;n++){const r=w[n],o=T(t,i,r),a=I(t,i,r),s=v[n];t=e[s],i=e[s+1],e[s]=o,e[s+1]=a}for(let r=0;r<50;r+=10){for(let t=0;t<10;t++)n[t]=e[r+t];for(let t=0;t<10;t++)e[r+t]^=~n[(t+2)%10]&n[(t+4)%10]}e[0]^=P[r],e[1]^=A[r]}n.fill(0)}(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){o(this);const{blockLen:t,state:n}=this,r=(e=g(e)).length;for(let i=0;i<r;){const o=Math.min(t-this.pos,r-i);for(let t=0;t<o;t++)n[this.pos++]^=e[i++];this.pos===t&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:t,pos:n,blockLen:r}=this;e[n]^=t,0!==(128&t)&&n===r-1&&this.keccak(),e[r-1]^=128,this.keccak()}writeInto(e){o(this,!1),i(e),this.finish();const t=this.state,{blockLen:n}=this;for(let r=0,i=e.length;r<i;){this.posOut>=n&&this.keccak();const o=Math.min(n-this.posOut,i-r);e.set(t.subarray(this.posOut,this.posOut+o),r),this.posOut+=o,r+=o}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return r(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(a(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:t,suffix:n,outputLen:r,rounds:i,enableXOF:o}=this;return e||(e=new O(t,n,r,o,i)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=i,e.suffix=n,e.outputLen=r,e.enableXOF=o,e.destroyed=this.destroyed,e}}const N=(e,t,n)=>function(e){const t=t=>e().update(g(t)).digest(),n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=()=>e(),t}((()=>new O(t,e,n))),R=N(1,136,32);var M=n(1499),$=n(7131),j=n(4117);function U(e,t){const n=t||"hex",r=R((0,M.q)(e,{strict:!1})?(0,$.ZJ)(e):e);return"bytes"===n?r:(0,j.nj)(r)}},6510:(e,t,n)=>{"use strict";n.d(t,{u:()=>i});const r=new Map;function i(e){let{fn:t,id:n,shouldSplitBatch:i,wait:o=0,sort:a}=e;const s=async()=>{const e=c();l();const n=e.map((e=>{let{args:t}=e;return t}));0!==n.length&&t(n).then((t=>{a&&Array.isArray(t)&&t.sort(a);for(let n=0;n<e.length;n++){const{pendingPromise:r}=e[n];r.resolve?.([t[n],t])}})).catch((t=>{for(let n=0;n<e.length;n++){const{pendingPromise:r}=e[n];r.reject?.(t)}}))},l=()=>r.delete(n),c=()=>r.get(n)||[],u=e=>r.set(n,[...c(),e]);return{flush:l,async schedule(e){const t={},n=new Promise(((e,n)=>{t.resolve=e,t.reject=n})),r=i?.([...c().map((e=>{let{args:t}=e;return t})),e]);r&&s();return c().length>0?(u({args:e,pendingPromise:t}),n):(u({args:e,pendingPromise:t}),setTimeout(s,o),n)}}}},3512:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=(e,t,n)=>JSON.stringify(e,((e,n)=>{const r="bigint"===typeof n?n.toString():n;return"function"===typeof t?t(e,r):r}),n)},2861:(e,t,n)=>{"use strict";n.d(t,{c:()=>l});var r=n(4034),i=n(3491),o=n(2343),a=n(3003),s=n(4074);function l(e){const{account:t,gasPrice:n,maxFeePerGas:l,maxPriorityFeePerGas:c,to:u}=e,d=t?(0,r.J)(t):void 0;if(d&&!(0,s.P)(d.address))throw new i.M({address:d.address});if(u&&!(0,s.P)(u))throw new i.M({address:u});if("undefined"!==typeof n&&("undefined"!==typeof l||"undefined"!==typeof c))throw new a.n3;if(l&&l>2n**256n-1n)throw new o.BG({maxFeePerGas:l});if(c&&l&&c>l)throw new o.lN({maxFeePerGas:l,maxPriorityFeePerGas:c})}},1273:(e,t,n)=>{"use strict";n.d(t,{c:()=>o});var r=n(9611),i=n(306);function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"wei";return(0,i.J)(e,r.eL[t])}},4569:(e,t,n)=>{"use strict";n.d(t,{Q:()=>o});var r=n(9611),i=n(306);function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"wei";return(0,i.J)(e,r.sz[t])}},306:(e,t,n)=>{"use strict";function r(e,t){let n=e.toString();const r=n.startsWith("-");r&&(n=n.slice(1)),n=n.padStart(t,"0");let[i,o]=[n.slice(0,n.length-t),n.slice(n.length-t)];return o=o.replace(/(0+)$/,""),`${r?"-":""}${i||"0"}${o?`.${o}`:""}`}n.d(t,{J:()=>r})}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&i&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,n.d(o,a),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+"."+{171:"54824c5a",374:"e838de2b",466:"8cd85a46",507:"e1c8043d",801:"866d7979",889:"923c8ce9",903:"35447f50"}[e]+".chunk.js",n.miniCssF=e=>{},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="my-walletconnect-dapp:";n.l=(r,i,o,a)=>{if(e[r])e[r].push(i);else{var s,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){s=d;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+o),s.src=r),e[r]=[i];var h=(t,n)=>{s.onerror=s.onload=null,clearTimeout(f);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(n))),t)return t(n)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.p="/tgwalbotintentis11/build/",(()=>{var e={792:0};n.f.j=(t,r)=>{var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise(((n,r)=>i=e[t]=[n,r]));r.push(i[2]=o);var a=n.p+n.u(t),s=new Error;n.l(a,(r=>{if(n.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,i[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var i,o,a=r[0],s=r[1],l=r[2],c=0;if(a.some((t=>0!==e[t]))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)l(n)}for(t&&t(r);c<a.length;c++)o=a[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkmy_walletconnect_dapp=self.webpackChunkmy_walletconnect_dapp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{"use strict";var e=n(5043),t=n(4391);let r;var i=class extends Error{constructor(e){let{chainId:t,connectorId:n}=e;super(`Chain "${t}" not configured for connector "${n}".`),this.name="ChainNotConfiguredForConnectorError"}},o=class extends Error{constructor(){super(...arguments),this.name="ConnectorNotFoundError",this.message="Connector not found"}};function a(e){return"string"===typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"===typeof e?Number(e):e}var s=n(7283);function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{fees:n=e.fees,formatters:r=e.formatters,serializers:i=e.serializers}=t;return{...e,fees:n,formatters:r,serializers:i}}const c=l({id:1,network:"homestead",name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]},default:{http:["https://cloudflare-eth.com"]},public:{http:["https://cloudflare-eth.com"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://etherscan.io"},default:{name:"Etherscan",url:"https://etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",blockCreated:16966585},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}}),u=l({id:5,network:"goerli",name:"Goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-goerli.g.alchemy.com/v2"],webSocket:["wss://eth-goerli.g.alchemy.com/v2"]},infura:{http:["https://goerli.infura.io/v3"],webSocket:["wss://goerli.infura.io/ws/v3"]},default:{http:["https://rpc.ankr.com/eth_goerli"]},public:{http:["https://rpc.ankr.com/eth_goerli"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://goerli.etherscan.io"},default:{name:"Etherscan",url:"https://goerli.etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x56522D00C410a43BFfDF00a9A569489297385790",blockCreated:8765204},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:6507670}},testnet:!0});var d=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},h=(e,t,n)=>(d(e,t,"read from private field"),n?n.call(e):t.get(e)),f=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},p=(e,t,n,r)=>(d(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),m=(e,t,n)=>(d(e,t,"access private method"),n),g=class extends s{constructor(e){let{chains:t=[c,u],options:n}=e;super(),this.chains=t,this.options=n}getBlockExplorerUrls(e){const{default:t,...n}=e.blockExplorers??{};if(t)return[t.url,...Object.values(n).map((e=>e.url))]}isChainUnsupported(e){return!this.chains.some((t=>t.id===e))}setStorage(e){this.storage=e}},y=n(3028),v=n(1370),w=n(2494);class b extends v.C{constructor(e,t){let{code:n,docsPath:r,metaMessages:i,shortMessage:o}=t;super(o,{cause:e,docsPath:r,metaMessages:i||e?.metaMessages}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof w.J8?e.code:n??-1}}class x extends b{constructor(e,t){super(e,t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t.data}}class E extends b{constructor(e){super(e,{code:E.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(E,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class C extends b{constructor(e){super(e,{code:C.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(C,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class k extends b{constructor(e){super(e,{code:k.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(k,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class _ extends b{constructor(e){super(e,{code:_.code,shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join("\n")}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(_,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class S extends b{constructor(e){super(e,{code:S.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(S,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class P extends b{constructor(e){super(e,{code:P.code,shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join("\n")}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(P,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class A extends b{constructor(e){super(e,{code:A.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(A,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class T extends b{constructor(e){super(e,{code:T.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(T,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class I extends b{constructor(e){super(e,{code:I.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(I,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class O extends b{constructor(e){super(e,{code:O.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(O,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class N extends b{constructor(e){super(e,{code:N.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(N,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class R extends b{constructor(e){super(e,{code:R.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(R,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class M extends x{constructor(e){super(e,{code:M.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(M,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class $ extends x{constructor(e){super(e,{code:$.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty($,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class j extends x{constructor(e){super(e,{code:j.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(j,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class U extends x{constructor(e){super(e,{code:U.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(U,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class L extends x{constructor(e){super(e,{code:L.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(L,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class D extends x{constructor(e){super(e,{code:D.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(D,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class B extends b{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}var F=n(4034);let W,z=256;function q(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:11;if(!W||z+e>512){W="",z=0;for(let e=0;e<256;e++)W+=(256+256*Math.random()|0).toString(16).substring(1)}return W.substring(z,z+++e)}function H(e){const{batch:t,cacheTime:n=e.pollingInterval??4e3,key:r="base",name:i="Base Client",pollingInterval:o=4e3,type:a="base"}=e,s=e.chain,l=e.account?(0,F.J)(e.account):void 0,{config:c,request:u,value:d}=e.transport({chain:s,pollingInterval:o}),h={account:l,batch:t,cacheTime:n,chain:s,key:r,name:i,pollingInterval:o,request:u,transport:{...c,...d},type:a,uid:q()};return Object.assign(h,{extend:function e(t){return n=>{const r=n(t);for(const e in h)delete r[e];const i={...t,...r};return Object.assign(i,{extend:e(i)})}}(h)})}var Z=n(7962);async function V(e){const t=await e.request({method:"eth_chainId"});return(0,Z.ME)(t)}var K=n(4117);var G=n(7965),Y=n(2620),J=n(1376);const Q="/docs/contract/encodeDeployData";function X(e){let{abi:t,args:n,bytecode:r}=e;if(!n||0===n.length)return r;const i=t.find((e=>"type"in e&&"constructor"===e.type));if(!i)throw new G.YW({docsPath:Q});if(!("inputs"in i))throw new G.YF({docsPath:Q});if(!i.inputs||0===i.inputs.length)throw new G.YF({docsPath:Q});const o=(0,J.h)(i.inputs,n);return(0,Y.aP)([r,o])}class ee extends v.C{constructor(){let{docsPath:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(["Could not find an Account to execute with this Action.","Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join("\n"),{docsPath:e,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}var te=n(6310);function ne(e){let{chain:t,currentChainId:n}=e;if(!t)throw new te.jF;if(n!==t.id)throw new te.EH({chain:t,currentChainId:n})}var re=n(2343),ie=n(3003),oe=n(6615);var ae=n(1928),se=n(6812);function le(e,t,n){return r=>e[t.name||n]?.(r)??t(e,r)}var ce=n(2861),ue=n(4569);class de extends v.C{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}}class he extends v.C{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}}class fe extends v.C{constructor(e){let{maxPriorityFeePerGas:t}=e;super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,ue.Q)(t)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}class pe extends v.C{constructor(e){let{blockHash:t,blockNumber:n}=e,r="Block";t&&(r=`Block at hash "${t}"`),n&&(r=`Block at number "${n}"`),super(`${r} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}}const me={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559"};function ge(e){const t={...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,chainId:e.chainId?(0,Z.ME)(e.chainId):void 0,gas:e.gas?BigInt(e.gas):void 0,gasPrice:e.gasPrice?BigInt(e.gasPrice):void 0,maxFeePerGas:e.maxFeePerGas?BigInt(e.maxFeePerGas):void 0,maxPriorityFeePerGas:e.maxPriorityFeePerGas?BigInt(e.maxPriorityFeePerGas):void 0,nonce:e.nonce?(0,Z.ME)(e.nonce):void 0,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,type:e.type?me[e.type]:void 0,typeHex:e.type?e.type:void 0,value:e.value?BigInt(e.value):void 0,v:e.v?BigInt(e.v):void 0};return t.yParity=(()=>{if(e.yParity)return Number(e.yParity);if("bigint"===typeof t.v){if(0n===t.v||27n===t.v)return 0;if(1n===t.v||28n===t.v)return 1;if(t.v>=35n)return t.v%2n===0n?1:0}})(),"legacy"===t.type&&(delete t.accessList,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas,delete t.yParity),"eip2930"===t.type&&(delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),t}function ye(e){const t=e.transactions?.map((e=>"string"===typeof e?e:ge(e)));return{...e,baseFeePerGas:e.baseFeePerGas?BigInt(e.baseFeePerGas):null,difficulty:e.difficulty?BigInt(e.difficulty):void 0,gasLimit:e.gasLimit?BigInt(e.gasLimit):void 0,gasUsed:e.gasUsed?BigInt(e.gasUsed):void 0,hash:e.hash?e.hash:null,logsBloom:e.logsBloom?e.logsBloom:null,nonce:e.nonce?e.nonce:null,number:e.number?BigInt(e.number):null,size:e.size?BigInt(e.size):void 0,timestamp:e.timestamp?BigInt(e.timestamp):void 0,transactions:t,totalDifficulty:e.totalDifficulty?BigInt(e.totalDifficulty):null}}async function ve(e){let{blockHash:t,blockNumber:n,blockTag:r,includeTransactions:i}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const o=r??"latest",a=i??!1,s=void 0!==n?(0,K.cK)(n):void 0;let l=null;if(l=t?await e.request({method:"eth_getBlockByHash",params:[t,a]}):await e.request({method:"eth_getBlockByNumber",params:[s||o,a]}),!l)throw new pe({blockHash:t,blockNumber:n});return(e.chain?.formatters?.block?.format||ye)(l)}async function we(e){const t=await e.request({method:"eth_gasPrice"});return BigInt(t)}async function be(e,t){const{block:n,chain:r=e.chain,request:i}=t||{};if("function"===typeof r?.fees?.defaultPriorityFee){const t=n||await le(e,ve,"getBlock")({});return r.fees.defaultPriorityFee({block:t,client:e,request:i})}if("undefined"!==typeof r?.fees?.defaultPriorityFee)return r?.fees?.defaultPriorityFee;try{const t=await e.request({method:"eth_maxPriorityFeePerGas"});return(0,Z.uU)(t)}catch{const[t,r]=await Promise.all([n?Promise.resolve(n):le(e,ve,"getBlock")({}),le(e,we,"getGasPrice")({})]);if("bigint"!==typeof t.baseFeePerGas)throw new he;const i=r-t.baseFeePerGas;return i<0n?0n:i}}async function xe(e,t){const{block:n,chain:r=e.chain,request:i,type:o="eip1559"}=t||{},a=await(async()=>"function"===typeof r?.fees?.baseFeeMultiplier?r.fees.baseFeeMultiplier({block:n,client:e,request:i}):r?.fees?.baseFeeMultiplier??1.2)();if(a<1)throw new de;const s=10**(a.toString().split(".")[1]?.length??0),l=e=>e*BigInt(Math.ceil(a*s))/BigInt(s),c=n||await le(e,ve,"getBlock")({});if("function"===typeof r?.fees?.estimateFeesPerGas)return r.fees.estimateFeesPerGas({block:n,client:e,multiply:l,request:i,type:o});if("eip1559"===o){if("bigint"!==typeof c.baseFeePerGas)throw new he;const t=i?.maxPriorityFeePerGas?i.maxPriorityFeePerGas:await be(e,{block:c,chain:r,request:i}),n=l(c.baseFeePerGas);return{maxFeePerGas:i?.maxFeePerGas??n+t,maxPriorityFeePerGas:t}}return{gasPrice:i?.gasPrice??l(await le(e,we,"getGasPrice")({}))}}var Ee=n(1273);class Ce extends v.C{constructor(e,t){let{account:n,docsPath:r,chain:i,data:o,gas:a,gasPrice:s,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:h}=t;const f=(0,ie.aO)({from:n?.address,to:d,value:"undefined"!==typeof h&&`${(0,Ee.c)(h)} ${i?.nativeCurrency?.symbol||"ETH"}`,data:o,gas:a,gasPrice:"undefined"!==typeof s&&`${(0,ue.Q)(s)} gwei`,maxFeePerGas:"undefined"!==typeof l&&`${(0,ue.Q)(l)} gwei`,maxPriorityFeePerGas:"undefined"!==typeof c&&`${(0,ue.Q)(c)} gwei`,nonce:u});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Estimate Gas Arguments:",f].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=e}}async function ke(e,t){const n=t.account??e.account;if(!n)throw new ee({docsPath:"/docs/actions/public/estimateGas"});const r=(0,F.J)(n);try{const{accessList:n,blockNumber:i,blockTag:o,data:a,gas:s,gasPrice:l,maxFeePerGas:c,maxPriorityFeePerGas:u,nonce:d,to:h,value:f,...p}="local"===r.type?await Se(e,t):t,m=(i?(0,K.cK)(i):void 0)||o;(0,ce.c)(t);const g=e.chain?.formatters?.transactionRequest?.format,y=(g||se.Bv)({...(0,ae.o)(p,{format:g}),from:r.address,accessList:n,data:a,gas:s,gasPrice:l,maxFeePerGas:c,maxPriorityFeePerGas:u,nonce:d,to:h,value:f}),v=await e.request({method:"eth_estimateGas",params:m?[y,m]:[y]});return BigInt(v)}catch(i){throw function(e,t){let{docsPath:n,...r}=t;const i=(()=>{const t=(0,oe.l)(e,r);return t instanceof re.RM?e:t})();return new Ce(i,{docsPath:n,...r})}(i,{...t,account:r,chain:e.chain})}}async function _e(e,t){let{address:n,blockTag:r="latest",blockNumber:i}=t;const o=await e.request({method:"eth_getTransactionCount",params:[n,i?(0,K.cK)(i):r]});return(0,Z.ME)(o)}async function Se(e,t){const{account:n=e.account,chain:r,gas:i,nonce:o,type:a}=t;if(!n)throw new ee;const s=(0,F.J)(n),l=await le(e,ve,"getBlock")({blockTag:"latest"}),c={...t,from:s.address};if("undefined"===typeof o&&(c.nonce=await le(e,_e,"getTransactionCount")({address:s.address,blockTag:"pending"})),"undefined"===typeof a)try{c.type=function(e){if(e.type)return e.type;if("undefined"!==typeof e.maxFeePerGas||"undefined"!==typeof e.maxPriorityFeePerGas)return"eip1559";if("undefined"!==typeof e.gasPrice)return"undefined"!==typeof e.accessList?"eip2930":"legacy";throw new ie.Vg({transaction:e})}(c)}catch{c.type="bigint"===typeof l.baseFeePerGas?"eip1559":"legacy"}if("eip1559"===c.type){const{maxFeePerGas:n,maxPriorityFeePerGas:i}=await xe(e,{block:l,chain:r,request:c});if("undefined"===typeof t.maxPriorityFeePerGas&&t.maxFeePerGas&&t.maxFeePerGas<i)throw new fe({maxPriorityFeePerGas:i});c.maxPriorityFeePerGas=i,c.maxFeePerGas=n}else{if("undefined"!==typeof t.maxFeePerGas||"undefined"!==typeof t.maxPriorityFeePerGas)throw new he;const{gasPrice:n}=await xe(e,{block:l,chain:r,request:c,type:"legacy"});c.gasPrice=n}return"undefined"===typeof i&&(c.gas=await le(e,ke,"estimateGas")({...c,account:{address:s.address,type:"json-rpc"}})),(0,ce.c)(c),c}async function Pe(e,t){let{serializedTransaction:n}=t;return e.request({method:"eth_sendRawTransaction",params:[n]})}async function Ae(e,t){const{account:n=e.account,chain:r=e.chain,accessList:i,data:o,gas:a,gasPrice:s,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:h,...f}=t;if(!n)throw new ee({docsPath:"/docs/actions/wallet/sendTransaction"});const p=(0,F.J)(n);try{let n;if((0,ce.c)(t),null!==r&&(n=await le(e,V,"getChainId")({}),ne({currentChainId:n,chain:r})),"local"===p.type){const t=await le(e,Se,"prepareTransactionRequest")({account:p,accessList:i,chain:r,data:o,gas:a,gasPrice:s,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:h,...f});n||(n=await le(e,V,"getChainId")({}));const m=r?.serializers?.transaction,g=await p.signTransaction({...t,chainId:n},{serializer:m});return await le(e,Pe,"sendRawTransaction")({serializedTransaction:g})}const m=e.chain?.formatters?.transactionRequest?.format,g=(m||se.Bv)({...(0,ae.o)(f,{format:m}),accessList:i,data:o,from:p.address,gas:a,gasPrice:s,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:h});return await e.request({method:"eth_sendTransaction",params:[g]})}catch(m){throw function(e,t){let{docsPath:n,...r}=t;const i=(()=>{const t=(0,oe.l)(e,r);return t instanceof re.RM?e:t})();return new ie.$s(i,{docsPath:n,...r})}(m,{...t,account:p,chain:t.chain||void 0})}}var Te=n(1499),Ie=n(3512),Oe=n(3491),Ne=n(4074),Re=n(2017);const Me=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,$e=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function je(e){let{domain:t,message:n,primaryType:r,types:i}=e;const o=i,a=(e,t)=>{for(const n of e){const{name:e,type:r}=n,i=r,s=t[e],l=i.match($e);if(l&&("number"===typeof s||"bigint"===typeof s)){const[e,t,n]=l;(0,K.cK)(s,{signed:"int"===t,size:parseInt(n)/8})}if("address"===i&&"string"===typeof s&&!(0,Ne.P)(s))throw new Oe.M({address:s});const c=i.match(Me);if(c){const[e,t]=c;if(t&&(0,Re.E)(s)!==parseInt(t))throw new G.BI({expectedSize:parseInt(t),givenSize:(0,Re.E)(s)})}const u=o[i];u&&a(u,s)}};if(o.EIP712Domain&&t&&a(o.EIP712Domain,t),"EIP712Domain"!==r){const e=o[r];a(e,n)}}function Ue(e){let{domain:t}=e;return["string"===typeof t?.name&&{name:"name",type:"string"},t?.version&&{name:"version",type:"string"},"number"===typeof t?.chainId&&{name:"chainId",type:"uint256"},t?.verifyingContract&&{name:"verifyingContract",type:"address"},t?.salt&&{name:"salt",type:"bytes32"}].filter(Boolean)}var Le=n(7308);function De(e){return{addChain:t=>async function(e,t){let{chain:n}=t;const{id:r,name:i,nativeCurrency:o,rpcUrls:a,blockExplorers:s}=n;await e.request({method:"wallet_addEthereumChain",params:[{chainId:(0,K.cK)(r),chainName:i,nativeCurrency:o,rpcUrls:a.default.http,blockExplorerUrls:s?Object.values(s).map((e=>{let{url:t}=e;return t})):void 0}]})}(e,t),deployContract:t=>function(e,t){let{abi:n,args:r,bytecode:i,...o}=t;return Ae(e,{...o,data:X({abi:n,args:r,bytecode:i})})}(e,t),getAddresses:()=>async function(e){return"local"===e.account?.type?[e.account.address]:(await e.request({method:"eth_accounts"})).map((e=>(0,y.o)(e)))}(e),getChainId:()=>V(e),getPermissions:()=>async function(e){return await e.request({method:"wallet_getPermissions"})}(e),prepareTransactionRequest:t=>Se(e,t),requestAddresses:()=>async function(e){return(await e.request({method:"eth_requestAccounts"})).map((e=>(0,y.b)(e)))}(e),requestPermissions:t=>async function(e,t){return e.request({method:"wallet_requestPermissions",params:[t]})}(e,t),sendRawTransaction:t=>Pe(e,t),sendTransaction:t=>Ae(e,t),signMessage:t=>async function(e,t){let{account:n=e.account,message:r}=t;if(!n)throw new ee({docsPath:"/docs/actions/wallet/signMessage"});const i=(0,F.J)(n);if("local"===i.type)return i.signMessage({message:r});const o="string"===typeof r?(0,K.i3)(r):r.raw instanceof Uint8Array?(0,K.nj)(r.raw):r.raw;return e.request({method:"personal_sign",params:[o,i.address]})}(e,t),signTransaction:t=>async function(e,t){const{account:n=e.account,chain:r=e.chain,...i}=t;if(!n)throw new ee({docsPath:"/docs/actions/wallet/signTransaction"});const o=(0,F.J)(n);(0,ce.c)({account:o,...t});const a=await le(e,V,"getChainId")({});null!==r&&ne({currentChainId:a,chain:r});const s=r?.formatters||e.chain?.formatters,l=s?.transactionRequest?.format||se.Bv;return"local"===o.type?o.signTransaction({...i,chainId:a},{serializer:e.chain?.serializers?.transaction}):await e.request({method:"eth_signTransaction",params:[{...l(i),chainId:(0,K.cK)(a),from:o.address}]})}(e,t),signTypedData:t=>async function(e,t){let{account:n=e.account,domain:r,message:i,primaryType:o,types:a}=t;if(!n)throw new ee({docsPath:"/docs/actions/wallet/signTypedData"});const s=(0,F.J)(n),l={EIP712Domain:Ue({domain:r}),...a};if(je({domain:r,message:i,primaryType:o,types:l}),"local"===s.type)return s.signTypedData({domain:r,primaryType:o,types:l,message:i});const c=(0,Ie.A)({domain:r??{},primaryType:o,types:l,message:i},((e,t)=>(0,Te.q)(t)?t.toLowerCase():t));return e.request({method:"eth_signTypedData_v4",params:[s.address,c]})}(e,t),switchChain:t=>async function(e,t){let{id:n}=t;await e.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,K.cK)(n)}]})}(e,t),watchAsset:t=>async function(e,t){return await e.request({method:"wallet_watchAsset",params:t})}(e,t),writeContract:t=>async function(e,t){let{abi:n,address:r,args:i,dataSuffix:o,functionName:a,...s}=t;const l=(0,Le.p)({abi:n,args:i,functionName:a});return await le(e,Ae,"sendTransaction")({data:`${l}${o?o.replace("0x",""):""}`,to:r,...s})}(e,t)}}function Be(e){const{key:t="wallet",name:n="Wallet Client",transport:r}=e;return H({...e,key:t,name:n,transport:e=>r({...e,retryCount:0}),type:"walletClient"}).extend(De)}async function Fe(e){return new Promise((t=>setTimeout(t,e)))}function We(e){let{delay:t=100,retryCount:n=2,shouldRetry:r=()=>!0}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((i,o)=>{const a=async function(){let{count:s=0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{const t=await e();i(t)}catch(l){if(s<n&&await r({count:s,error:l}))return(async e=>{let{error:n}=e;const r="function"===typeof t?t({count:s,error:n}):t;r&&await Fe(r),a({count:s+1})})({error:l});o(l)}};a()}))}const ze=e=>"code"in e?-1!==e.code&&-32004!==e.code&&-32005!==e.code&&-32042!==e.code&&-32603!==e.code:!!(e instanceof w.Ci&&e.status)&&(403!==e.status&&408!==e.status&&413!==e.status&&429!==e.status&&500!==e.status&&502!==e.status&&503!==e.status&&504!==e.status);function qe(e){let{retryDelay:t=150,retryCount:n=3}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return async r=>We((async()=>{try{return await e(r)}catch(t){const e=t;switch(e.code){case E.code:throw new E(e);case C.code:throw new C(e);case k.code:throw new k(e);case _.code:throw new _(e);case S.code:throw new S(e);case P.code:throw new P(e);case A.code:throw new A(e);case T.code:throw new T(e);case I.code:throw new I(e);case O.code:throw new O(e);case N.code:throw new N(e);case R.code:throw new R(e);case M.code:throw new M(e);case $.code:throw new $(e);case j.code:throw new j(e);case U.code:throw new U(e);case L.code:throw new L(e);case D.code:throw new D(e);case 5e3:throw new M(e);default:if(t instanceof v.C)throw t;throw new B(e)}}}),{delay:e=>{let{count:n,error:r}=e;if(r&&r instanceof w.Ci){const e=r?.headers?.get("Retry-After");if(e?.match(/\d/))return 1e3*parseInt(e)}return(1<<n)*t},retryCount:n,shouldRetry:e=>{let{error:t}=e;return!ze(t)}})}function He(e,t){let{key:n,name:r,request:i,retryCount:o=3,retryDelay:a=150,timeout:s,type:l}=e;return{config:{key:n,name:r,request:i,retryCount:o,retryDelay:a,timeout:s,type:l},request:qe(i,{retryCount:o,retryDelay:a}),value:t}}function Ze(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{key:n="custom",name:r="Custom Provider",retryDelay:i}=t;return o=>{let{retryCount:a}=o;return He({key:n,name:r,request:e.request.bind(e),retryCount:t.retryCount??a,retryDelay:i,type:"custom"})}}var Ve,Ke=class extends g{constructor(){let{chains:e,options:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n={shimDisconnect:!0,getProvider(){if("undefined"===typeof window)return;const e=window.ethereum;return e?.providers&&e.providers.length>0?e.providers[0]:e},...t};super({chains:e,options:n}),this.id="injected",f(this,Ve,void 0),this.shimDisconnectKey=`${this.id}.shimDisconnect`,this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,y.b)(e[0])})},this.onChainChanged=e=>{const t=a(e),n=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:n}})},this.onDisconnect=async e=>{if(1013===e.code){if(await this.getProvider()){if(await this.getAccount())return}}this.emit("disconnect"),this.options.shimDisconnect&&this.storage?.removeItem(this.shimDisconnectKey)};const r=n.getProvider();if("string"===typeof n.name)this.name=n.name;else if(r){const e=function(e){if(!e)return"Injected";const t=e=>e.isApexWallet?"Apex Wallet":e.isAvalanche?"Core Wallet":e.isBackpack?"Backpack":e.isBifrost?"Bifrost Wallet":e.isBitKeep?"BitKeep":e.isBitski?"Bitski":e.isBlockWallet?"BlockWallet":e.isBraveWallet?"Brave Wallet":e.isCoin98?"Coin98 Wallet":e.isCoinbaseWallet?"Coinbase Wallet":e.isDawn?"Dawn Wallet":e.isDefiant?"Defiant":e.isDesig?"Desig Wallet":e.isEnkrypt?"Enkrypt":e.isExodus?"Exodus":e.isFordefi?"Fordefi":e.isFrame?"Frame":e.isFrontier?"Frontier Wallet":e.isGamestop?"GameStop Wallet":e.isHaqqWallet?"HAQQ Wallet":e.isHyperPay?"HyperPay Wallet":e.isImToken?"ImToken":e.isHaloWallet?"Halo Wallet":e.isKuCoinWallet?"KuCoin Wallet":e.isMathWallet?"MathWallet":e.isNovaWallet?"Nova Wallet":e.isOkxWallet||e.isOKExWallet?"OKX Wallet":e.isOktoWallet?"Okto Wallet":e.isOneInchIOSWallet||e.isOneInchAndroidWallet?"1inch Wallet":e.isOneKey?"OneKey Wallet":e.isOpera?"Opera":e.isPhantom?"Phantom":e.isPortal?"Ripio Portal":e.isRabby?"Rabby Wallet":e.isRainbow?"Rainbow":e.isSafePal?"SafePal Wallet":e.isStatus?"Status":e.isSubWallet?"SubWallet":e.isTalisman?"Talisman":e.isTally?"Taho":e.isTokenPocket?"TokenPocket":e.isTokenary?"Tokenary":e.isTrust||e.isTrustWallet?"Trust Wallet":e.isTTWallet?"TTWallet":e.isXDEFI?"XDEFI Wallet":e.isZeal?"Zeal":e.isZerion?"Zerion":e.isMetaMask?"MetaMask":void 0;if(e.providers?.length){const n=new Set;let r=1;for(const o of e.providers){let e=t(o);e||(e=`Unknown Wallet #${r}`,r+=1),n.add(e)}const i=[...n];return i.length?i:i[0]??"Injected"}return t(e)??"Injected"}(r);n.name?this.name=n.name(e):this.name="string"===typeof e?e:e[0]}else this.name="Injected";this.ready=!!r}async connect(){let{chainId:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{const t=await this.getProvider();if(!t)throw new o;t.on&&(t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect)),this.emit("message",{type:"connecting"});const n=await t.request({method:"eth_requestAccounts"}),r=(0,y.b)(n[0]);let i=await this.getChainId(),a=this.isChainUnsupported(i);if(e&&i!==e){i=(await this.switchChain(e)).id,a=this.isChainUnsupported(i)}return this.options.shimDisconnect&&this.storage?.setItem(this.shimDisconnectKey,!0),{account:r,chain:{id:i,unsupported:a}}}catch(t){if(this.isUserRejectedRequestError(t))throw new M(t);if(-32002===t.code)throw new T(t);throw t}}async disconnect(){const e=await this.getProvider();e?.removeListener&&(e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&this.storage?.removeItem(this.shimDisconnectKey))}async getAccount(){const e=await this.getProvider();if(!e)throw new o;const t=await e.request({method:"eth_accounts"});return(0,y.b)(t[0])}async getChainId(){const e=await this.getProvider();if(!e)throw new o;return e.request({method:"eth_chainId"}).then(a)}async getProvider(){const e=this.options.getProvider();return e&&p(this,Ve,e),h(this,Ve)}async getWalletClient(){let{chainId:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const[t,n]=await Promise.all([this.getProvider(),this.getAccount()]),r=this.chains.find((t=>t.id===e));if(!t)throw new Error("provider is required.");return Be({account:n,chain:r,transport:Ze(t)})}async isAuthorized(){try{if(this.options.shimDisconnect&&!this.storage?.getItem(this.shimDisconnectKey))return!1;if(!await this.getProvider())throw new o;return!!await this.getAccount()}catch{return!1}}async switchChain(e){const t=await this.getProvider();if(!t)throw new o;const n=(0,K.cK)(e);try{return await Promise.all([t.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]}),new Promise((t=>this.on("change",(n=>{let{chain:r}=n;r?.id===e&&t()}))))]),this.chains.find((t=>t.id===e))??{id:e,name:`Chain ${n}`,network:`${n}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(r){const o=this.chains.find((t=>t.id===e));if(!o)throw new i({chainId:e,connectorId:this.id});if(4902===r.code||4902===r?.data?.originalError?.code)try{await t.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:o.name,nativeCurrency:o.nativeCurrency,rpcUrls:[o.rpcUrls.public?.http[0]??""],blockExplorerUrls:this.getBlockExplorerUrls(o)}]});if(await this.getChainId()!==e)throw new M(new Error("User rejected switch after adding network."));return o}catch(a){throw new M(a)}if(this.isUserRejectedRequestError(r))throw new M(r);throw new D(r)}}async watchAsset(e){let{address:t,decimals:n=18,image:r,symbol:i}=e;const a=await this.getProvider();if(!a)throw new o;return a.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,decimals:n,image:r,symbol:i}}})}isUserRejectedRequestError(e){return 4001===e.code}};Ve=new WeakMap;var Ge=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},Ye=(e,t,n)=>(Ge(e,t,"read from private field"),n?n.call(e):t.get(e)),Je=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},Qe=(e,t,n,r)=>(Ge(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),Xe=n(2770),et=n(1313),tt=n(1898),nt=n(8604),rt=n(9048),it=n(7942);function ot(e,t){if(!(e instanceof v.C))return!1;const n=e.walk((e=>e instanceof it.M));return n instanceof it.M&&("ResolverNotFound"===n.data?.errorName||("ResolverWildcardNotSupported"===n.data?.errorName||(!!n.reason?.includes("Wildcard on non-extended resolvers is not supported")||"reverse"===t&&n.reason===rt.fD[50])))}var at=n(7131),st=n(3232);function lt(e){if(66!==e.length)return null;if(0!==e.indexOf("["))return null;if(65!==e.indexOf("]"))return null;const t=`0x${e.slice(1,65)}`;return(0,Te.q)(t)?t:null}function ct(e){let t=new Uint8Array(32).fill(0);if(!e)return(0,K.My)(t);const n=e.split(".");for(let r=n.length-1;r>=0;r-=1){const e=lt(n[r]),i=e?(0,at.ZJ)(e):(0,st.S)((0,at.Af)(n[r]),"bytes");t=(0,st.S)((0,Y.xW)([t,i]),"bytes")}return(0,K.My)(t)}function ut(e){const t=new Uint8Array(32).fill(0);return e?lt(e)||(0,st.S)((0,at.Af)(e)):(0,K.My)(t)}function dt(e){const t=e.replace(/^\.|\.$/gm,"");if(0===t.length)return new Uint8Array(1);const n=new Uint8Array((0,at.Af)(t).byteLength+2);let r=0;const i=t.split(".");for(let o=0;o<i.length;o++){let e=(0,at.Af)(i[o]);e.byteLength>255&&(e=(0,at.Af)(`[${ut(i[o]).slice(2)}]`)),n[r]=e.length,n.set(e,r+1),r+=e.length+1}return n.byteLength!==r+1?n.slice(0,r+1):n}const ht=3;function ft(e,t){let{abi:n,address:r,args:i,docsPath:o,functionName:a,sender:s}=t;const{code:l,data:c,message:u,shortMessage:d}=e instanceof it.$S?e:e instanceof v.C?e.walk((e=>"data"in e))||e.walk():{},h=e instanceof G.O?new it.rR({functionName:a}):[ht,S.code].includes(l)&&(c||u||d)?new it.M({abi:n,data:"object"===typeof c?c.data:c,functionName:a,message:d??u}):e;return new it.bG(h,{abi:n,args:i,contractAddress:r,docsPath:o,functionName:a,sender:s})}var pt=n(9357);async function mt(e,t){let{abi:n,address:r,args:i,functionName:o,...a}=t;const s=(0,Le.p)({abi:n,args:i,functionName:o});try{const{data:t}=await le(e,pt.T,"call")({data:s,to:r,...a});return(0,et.e)({abi:n,args:i,functionName:o,data:t||"0x"})}catch(l){throw ft(l,{abi:n,address:r,args:i,docsPath:"/docs/contract/readContract",functionName:o})}}class gt extends v.C{constructor(e){let{data:t}=e;super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class yt extends v.C{constructor(e){let{reason:t}=e;super(`ENS NFT avatar URI is invalid. ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class vt extends v.C{constructor(e){let{uri:t}=e;super(`Unable to resolve ENS avatar URI "${t}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class wt extends v.C{constructor(e){let{namespace:t}=e;super(`ENS NFT avatar namespace "${t}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}const bt=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,xt=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,Et=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,Ct=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;function kt(e,t){return e?e.endsWith("/")?e.slice(0,-1):e:t}function _t(e){let{uri:t,gatewayUrls:n}=e;const r=Et.test(t);if(r)return{uri:t,isOnChain:!0,isEncoded:r};const i=kt(n?.ipfs,"https://ipfs.io"),o=kt(n?.arweave,"https://arweave.net"),a=t.match(bt),{protocol:s,subpath:l,target:c,subtarget:u=""}=a?.groups||{},d="ipns:/"===s||"ipns/"===l,h="ipfs:/"===s||"ipfs/"===l||xt.test(t);if(t.startsWith("http")&&!d&&!h){let e=t;return n?.arweave&&(e=t.replace(/https:\/\/arweave.net/g,n?.arweave)),{uri:e,isOnChain:!1,isEncoded:!1}}if((d||h)&&c)return{uri:`${i}/${d?"ipns":"ipfs"}/${c}${u}`,isOnChain:!1,isEncoded:!1};if("ar:/"===s&&c)return{uri:`${o}/${c}${u||""}`,isOnChain:!1,isEncoded:!1};let f=t.replace(Ct,"");if(f.startsWith("<svg")&&(f=`data:image/svg+xml;base64,${btoa(f)}`),f.startsWith("data:")||f.startsWith("{"))return{uri:f,isOnChain:!0,isEncoded:!1};throw new vt({uri:t})}function St(e){if("object"!==typeof e||!("image"in e)&&!("image_url"in e)&&!("image_data"in e))throw new gt({data:e});return e.image||e.image_url||e.image_data}async function Pt(e){let{gatewayUrls:t,uri:n}=e;const{uri:r,isOnChain:i}=_t({uri:n,gatewayUrls:t});if(i)return r;const o=await async function(e){try{const t=await fetch(e,{method:"HEAD"});if(200===t.status){const e=t.headers.get("content-type");return e?.startsWith("image/")}return!1}catch(t){return("object"!==typeof t||"undefined"===typeof t.response)&&!!globalThis.hasOwnProperty("Image")&&new Promise((t=>{const n=new Image;n.onload=()=>{t(!0)},n.onerror=()=>{t(!1)},n.src=e}))}}(r);if(o)return r;throw new vt({uri:n})}async function At(e,t){let{gatewayUrls:n,record:r}=t;return/eip155:/i.test(r)?async function(e,t){let{gatewayUrls:n,record:r}=t;const i=function(e){let t=e;t.startsWith("did:nft:")&&(t=t.replace("did:nft:","").replace(/_/g,"/"));const[n,r,i]=t.split("/"),[o,a]=n.split(":"),[s,l]=r.split(":");if(!o||"eip155"!==o.toLowerCase())throw new yt({reason:"Only EIP-155 supported"});if(!a)throw new yt({reason:"Chain ID not found"});if(!l)throw new yt({reason:"Contract address not found"});if(!i)throw new yt({reason:"Token ID not found"});if(!s)throw new yt({reason:"ERC namespace not found"});return{chainID:parseInt(a),namespace:s.toLowerCase(),contractAddress:l,tokenID:i}}(r),o=await async function(e,t){let{nft:n}=t;if("erc721"===n.namespace)return mt(e,{address:n.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(n.tokenID)]});if("erc1155"===n.namespace)return mt(e,{address:n.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(n.tokenID)]});throw new wt({namespace:n.namespace})}(e,{nft:i}),{uri:a,isOnChain:s,isEncoded:l}=_t({uri:o,gatewayUrls:n});if(s&&(a.includes("data:application/json;base64,")||a.startsWith("{"))){const e=l?atob(a.replace("data:application/json;base64,","")):a;return Pt({uri:St(JSON.parse(e)),gatewayUrls:n})}let c=i.tokenID;"erc1155"===i.namespace&&(c=c.replace("0x","").padStart(64,"0"));return async function(e){let{gatewayUrls:t,uri:n}=e;try{const e=await fetch(n).then((e=>e.json()));return await Pt({gatewayUrls:t,uri:St(e)})}catch{throw new vt({uri:n})}}({gatewayUrls:n,uri:a.replace(/(?:0x)?{id}/,c)})}(e,{gatewayUrls:n,record:r}):Pt({uri:r,gatewayUrls:n})}async function Tt(e,t){let{blockNumber:n,blockTag:r,name:i,key:o,universalResolverAddress:a}=t,s=a;if(!s){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=(0,tt.M)({blockNumber:n,chain:e.chain,contract:"ensUniversalResolver"})}try{const t=await le(e,mt,"readContract")({address:s,abi:Xe.Ag,functionName:"resolve",args:[(0,K.nj)(dt(i)),(0,Le.p)({abi:Xe.SJ,functionName:"text",args:[ct(i),o]})],blockNumber:n,blockTag:r});if("0x"===t[0])return null;const a=(0,et.e)({abi:Xe.SJ,functionName:"text",data:t[0]});return""===a?null:a}catch(l){if(ot(l,"resolve"))return null;throw l}}function It(e,t){let{method:n}=t;const r={};return"fallback"===e.transport.type&&e.transport.onResponse?.((e=>{let{method:t,response:i,status:o,transport:a}=e;"success"===o&&n===t&&(r[i]=a.request)})),t=>r[t]||e.request}class Ot extends v.C{constructor(e){super(`Filter type "${e}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}}var Nt=n(4191),Rt=n(9052),Mt=n(2283);function $t(e){let{abi:t,eventName:n,args:r}=e,i=t[0];if(n&&(i=(0,Mt.iY)({abi:t,args:r,name:n}),!i))throw new G.M_(n,{docsPath:"/docs/contract/encodeEventTopics"});if("event"!==i.type)throw new G.M_(void 0,{docsPath:"/docs/contract/encodeEventTopics"});const o=(0,Rt.B)(i),a=(0,Nt.c)(o);let s=[];if(r&&"inputs"in i){const e=i.inputs?.filter((e=>"indexed"in e&&e.indexed)),t=Array.isArray(r)?r:Object.values(r).length>0?e?.map((e=>r[e.name]))??[]:[];t.length>0&&(s=e?.map(((e,n)=>Array.isArray(t[n])?t[n].map(((r,i)=>jt({param:e,value:t[n][i]}))):t[n]?jt({param:e,value:t[n]}):null))??[])}return[a,...s]}function jt(e){let{param:t,value:n}=e;if("string"===t.type||"bytes"===t.type)return(0,st.S)((0,at.ZJ)(n));if("tuple"===t.type||t.type.match(/^(.*)\[(\d+)?\]$/))throw new Ot(t.type);return(0,J.h)([t],[n])}async function Ut(e,t){let{address:n,abi:r,args:i,eventName:o,fromBlock:a,strict:s,toBlock:l}=t;const c=It(e,{method:"eth_newFilter"}),u=o?$t({abi:r,args:i,eventName:o}):void 0,d=await e.request({method:"eth_newFilter",params:[{address:n,fromBlock:"bigint"===typeof a?(0,K.cK)(a):a,toBlock:"bigint"===typeof l?(0,K.cK)(l):l,topics:u}]});return{abi:r,args:i,eventName:o,id:d,request:c(d),strict:s,type:"event"}}async function Lt(e){let{address:t,args:n,event:r,events:i,fromBlock:o,strict:a,toBlock:s}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const l=i??(r?[r]:void 0),c=It(e,{method:"eth_newFilter"});let u=[];l&&(u=[l.flatMap((e=>$t({abi:[e],eventName:e.name,args:n})))],r&&(u=u[0]));const d=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:"bigint"===typeof o?(0,K.cK)(o):o,toBlock:"bigint"===typeof s?(0,K.cK)(s):s,...u.length?{topics:u}:{}}]});return{abi:l,args:n,eventName:r?r.name:void 0,fromBlock:o,id:d,request:c(d),strict:a,toBlock:s,type:"event"}}async function Dt(e){const t=It(e,{method:"eth_newPendingTransactionFilter"}),n=await e.request({method:"eth_newPendingTransactionFilter"});return{id:n,request:t(n),type:"transaction"}}const Bt=new Map,Ft=new Map;async function Wt(e,t){let{cacheKey:n,cacheTime:r=1/0}=t;const i=function(e){const t=(e,t)=>({clear:()=>t.delete(e),get:()=>t.get(e),set:n=>t.set(e,n)}),n=t(e,Bt),r=t(e,Ft);return{clear:()=>{n.clear(),r.clear()},promise:n,response:r}}(n),o=i.response.get();if(o&&r>0){if((new Date).getTime()-o.created.getTime()<r)return o.data}let a=i.promise.get();a||(a=e(),i.promise.set(a));try{const e=await a;return i.response.set({created:new Date,data:e}),e}finally{i.promise.clear()}}const zt=e=>`blockNumber.${e}`;async function qt(e){let{cacheTime:t=e.cacheTime,maxAge:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=await Wt((()=>e.request({method:"eth_blockNumber"})),{cacheKey:zt(e.uid),cacheTime:n??t});return BigInt(r)}var Ht=n(6424);const Zt="/docs/contract/decodeEventLog";function Vt(e){let{abi:t,data:n,strict:r,topics:i}=e;const o=r??!0,[a,...s]=i;if(!a)throw new G._z({docsPath:Zt});const l=t.find((e=>"event"===e.type&&a===(0,Nt.c)((0,Rt.B)(e))));if(!l||!("name"in l)||"event"!==l.type)throw new G.kE(a,{docsPath:Zt});const{name:c,inputs:u}=l,d=u?.some((e=>!("name"in e&&e.name)));let h=d?[]:{};const f=u.filter((e=>"indexed"in e&&e.indexed));for(let g=0;g<f.length;g++){const e=f[g],t=s[g];if(!t)throw new G.l3({abiItem:l,param:e});h[e.name||g]=Kt({param:e,value:t})}const p=u.filter((e=>!("indexed"in e&&e.indexed)));if(p.length>0)if(n&&"0x"!==n)try{const e=(0,Ht.n)(p,n);if(e)if(d)h=[...h,...e];else for(let t=0;t<p.length;t++)h[p[t].name]=e[t]}catch(m){if(o){if(m instanceof G.Iy)throw new G.fo({abiItem:l,data:m.data,params:m.params,size:m.size});throw m}}else if(o)throw new G.fo({abiItem:l,data:"0x",params:p,size:0});return{eventName:c,args:Object.values(h).length>0?h:void 0}}function Kt(e){let{param:t,value:n}=e;if("string"===t.type||"bytes"===t.type||"tuple"===t.type||t.type.match(/^(.*)\[(\d+)?\]$/))return n;return((0,Ht.n)([t],n)||[])[0]}function Gt(e){let{args:t,eventName:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,logIndex:e.logIndex?Number(e.logIndex):null,transactionHash:e.transactionHash?e.transactionHash:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,...n?{args:t,eventName:n}:{}}}async function Yt(e){let{address:t,blockHash:n,fromBlock:r,toBlock:i,event:o,events:a,args:s,strict:l}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const c=l??!1,u=a??(o?[o]:void 0);let d,h=[];return u&&(h=[u.flatMap((e=>$t({abi:[e],eventName:e.name,args:s})))],o&&(h=h[0])),d=n?await e.request({method:"eth_getLogs",params:[{address:t,topics:h,blockHash:n}]}):await e.request({method:"eth_getLogs",params:[{address:t,topics:h,fromBlock:"bigint"===typeof r?(0,K.cK)(r):r,toBlock:"bigint"===typeof i?(0,K.cK)(i):i}]}),d.map((e=>{try{const{eventName:t,args:n}=u?Vt({abi:u,data:e.data,topics:e.topics,strict:c}):{eventName:void 0,args:void 0};return Gt(e,{args:n,eventName:t})}catch(t){let n,r;if(t instanceof G.fo||t instanceof G.l3){if(c)return;n=t.abiItem.name,r=t.abiItem.inputs?.some((e=>!("name"in e&&e.name)))}return Gt(e,{args:r?[]:{},eventName:n})}})).filter(Boolean)}async function Jt(e,t){let{abi:n,address:r,args:i,blockHash:o,eventName:a,fromBlock:s,toBlock:l,strict:c}=t;const u=a?(0,Mt.iY)({abi:n,name:a}):void 0,d=u?void 0:n.filter((e=>"event"===e.type));return le(e,Yt,"getLogs")({address:r,args:i,blockHash:o,event:u,events:d,fromBlock:s,toBlock:l,strict:c})}async function Qt(e,t){let{blockCount:n,blockNumber:r,blockTag:i="latest",rewardPercentiles:o}=t;const a=r?(0,K.cK)(r):void 0;return function(e){return{baseFeePerGas:e.baseFeePerGas.map((e=>BigInt(e))),gasUsedRatio:e.gasUsedRatio,oldestBlock:BigInt(e.oldestBlock),reward:e.reward?.map((e=>e.map((e=>BigInt(e)))))}}(await e.request({method:"eth_feeHistory",params:[(0,K.cK)(n),a||i,o]}))}async function Xt(e,t){let{filter:n}=t;const r="strict"in n&&n.strict;return(await n.request({method:"eth_getFilterChanges",params:[n.id]})).map((e=>{if("string"===typeof e)return e;try{const{eventName:t,args:i}="abi"in n&&n.abi?Vt({abi:n.abi,data:e.data,topics:e.topics,strict:r}):{eventName:void 0,args:void 0};return Gt(e,{args:i,eventName:t})}catch(t){let r,i;if(t instanceof G.fo||t instanceof G.l3){if("strict"in n&&n.strict)return;r=t.abiItem.name,i=t.abiItem.inputs?.some((e=>!("name"in e&&e.name)))}return Gt(e,{args:i?[]:{},eventName:r})}})).filter(Boolean)}async function en(e,t){let{address:n,blockNumber:r,blockTag:i,storageKeys:o}=t;const a=i??"latest",s=void 0!==r?(0,K.cK)(r):void 0;return function(e){return{...e,balance:e.balance?BigInt(e.balance):void 0,nonce:e.nonce?(0,Z.ME)(e.nonce):void 0,storageProof:e.storageProof?(t=e.storageProof,t.map((e=>({...e,value:BigInt(e.value)})))):void 0};var t}(await e.request({method:"eth_getProof",params:[n,o,s||a]}))}async function tn(e,t){let{blockHash:n,blockNumber:r,blockTag:i,hash:o,index:a}=t;const s=i||"latest",l=void 0!==r?(0,K.cK)(r):void 0;let c=null;if(o?c=await e.request({method:"eth_getTransactionByHash",params:[o]}):n?c=await e.request({method:"eth_getTransactionByBlockHashAndIndex",params:[n,(0,K.cK)(a)]}):(l||s)&&(c=await e.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[l||s,(0,K.cK)(a)]})),!c)throw new ie.Kz({blockHash:n,blockNumber:r,blockTag:s,hash:o,index:a});return(e.chain?.formatters?.transaction?.format||ge)(c)}const nn={"0x0":"reverted","0x1":"success"};function rn(e){return{...e,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,contractAddress:e.contractAddress?e.contractAddress:null,cumulativeGasUsed:e.cumulativeGasUsed?BigInt(e.cumulativeGasUsed):null,effectiveGasPrice:e.effectiveGasPrice?BigInt(e.effectiveGasPrice):null,gasUsed:e.gasUsed?BigInt(e.gasUsed):null,logs:e.logs?e.logs.map((e=>Gt(e))):null,to:e.to?e.to:null,transactionIndex:e.transactionIndex?(0,Z.ME)(e.transactionIndex):null,status:e.status?nn[e.status]:null,type:e.type?me[e.type]||e.type:null}}async function on(e,t){let{hash:n}=t;const r=await e.request({method:"eth_getTransactionReceipt",params:[n]});if(!r)throw new ie.Kc({hash:n});return(e.chain?.formatters?.transactionReceipt?.format||rn)(r)}async function an(e,t){let{filter:n}=t;return n.request({method:"eth_uninstallFilter",params:[n.id]})}BigInt(0),BigInt(1),BigInt(2);async function sn(e,t){let{address:n,hash:r,signature:i,...o}=t;const a=(0,Te.q)(i)?i:(0,K.nj)(i);try{const{data:t}=await le(e,pt.T,"call")({data:X({abi:Xe._,args:[n,r,a],bytecode:"0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572"}),...o});return s=t??"0x0",l="0x1",function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}((0,Te.q)(s)?(0,at.ZJ)(s):s,(0,Te.q)(l)?(0,at.ZJ)(l):l)}catch(c){if(c instanceof it.zX)return!1;throw c}var s,l}async function ln(e,t){let{address:n,message:r,signature:i,...o}=t;const a=function(e,t){const n="string"===typeof e?(0,at.Af)(e):e.raw instanceof Uint8Array?e.raw:(0,at.ZJ)(e.raw),r=(0,at.Af)(`\x19Ethereum Signed Message:\n${n.length}`);return(0,st.S)((0,Y.xW)([r,n]),t)}(r);return sn(e,{address:n,hash:a,signature:i,...o})}function cn(e){let{domain:t,message:n,primaryType:r,types:i}=e;const o="undefined"===typeof t?{}:t,a={EIP712Domain:Ue({domain:o}),...i};je({domain:o,message:n,primaryType:r,types:a});const s=["0x1901"];return o&&s.push(function(e){let{domain:t,types:n}=e;return un({data:t,primaryType:"EIP712Domain",types:n})}({domain:o,types:a})),"EIP712Domain"!==r&&s.push(un({data:n,primaryType:r,types:a})),(0,st.S)((0,Y.xW)(s))}function un(e){let{data:t,primaryType:n,types:r}=e;const i=dn({data:t,primaryType:n,types:r});return(0,st.S)(i)}function dn(e){let{data:t,primaryType:n,types:r}=e;const i=[{type:"bytes32"}],o=[hn({primaryType:n,types:r})];for(const a of r[n]){const[e,n]=pn({types:r,name:a.name,type:a.type,value:t[a.name]});i.push(e),o.push(n)}return(0,J.h)(i,o)}function hn(e){let{primaryType:t,types:n}=e;const r=(0,K.nj)(function(e){let{primaryType:t,types:n}=e,r="";const i=fn({primaryType:t,types:n});i.delete(t);const o=[t,...Array.from(i).sort()];for(const a of o)r+=`${a}(${n[a].map((e=>{let{name:t,type:n}=e;return`${n} ${t}`})).join(",")})`;return r}({primaryType:t,types:n}));return(0,st.S)(r)}function fn(e){let{primaryType:t,types:n}=e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Set;const i=t.match(/^\w*/u),o=i?.[0];if(r.has(o)||void 0===n[o])return r;r.add(o);for(const a of n[o])fn({primaryType:a.type,types:n},r);return r}function pn(e){let{types:t,name:n,type:r,value:i}=e;if(void 0!==t[r])return[{type:"bytes32"},(0,st.S)(dn({data:i,primaryType:r,types:t}))];if("bytes"===r){return i=`0x${(i.length%2?"0":"")+i.slice(2)}`,[{type:"bytes32"},(0,st.S)(i)]}if("string"===r)return[{type:"bytes32"},(0,st.S)((0,K.nj)(i))];if(r.lastIndexOf("]")===r.length-1){const e=r.slice(0,r.lastIndexOf("[")),o=i.map((r=>pn({name:n,type:e,types:t,value:r})));return[{type:"bytes32"},(0,st.S)((0,J.h)(o.map((e=>{let[t]=e;return t})),o.map((e=>{let[,t]=e;return t}))))]}return[{type:r},i]}const mn=new Map,gn=new Map;let yn=0;function vn(e,t,n){const r=++yn,i=()=>mn.get(e)||[],o=()=>{const t=gn.get(e);1===i().length&&t&&t(),(()=>{const t=i();mn.set(e,t.filter((e=>e.id!==r)))})()},a=i();if(mn.set(e,[...a,{id:r,fns:t}]),a&&a.length>0)return o;const s={};for(const c in t)s[c]=function(){const e=i();if(0!==e.length){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];for(const t of e)t.fns[c]?.(...n)}};const l=n(s);return"function"===typeof l&&gn.set(e,l),o}function wn(e,t){let{emitOnBegin:n,initialWaitTime:r,interval:i}=t,o=!0;const a=()=>o=!1;return(async()=>{let t;n&&(t=await e({unpoll:a}));const s=await(r?.(t))??i;await Fe(s);const l=async()=>{o&&(await e({unpoll:a}),await Fe(i),l())};l()})(),a}function bn(e,t){let{emitOnBegin:n=!1,emitMissed:r=!1,onBlockNumber:i,onError:o,poll:a,pollingInterval:s=e.pollingInterval}=t;let l;return("undefined"!==typeof a?a:"webSocket"!==e.transport.type)?vn((0,Ie.A)(["watchBlockNumber",e.uid,n,r,s]),{onBlockNumber:i,onError:o},(t=>wn((async()=>{try{const n=await le(e,qt,"getBlockNumber")({cacheTime:0});if(l){if(n===l)return;if(n-l>1&&r)for(let e=l+1n;e<n;e++)t.onBlockNumber(e,l),l=e}(!l||n>l)&&(t.onBlockNumber(n,l),l=n)}catch(n){t.onError?.(n)}}),{emitOnBegin:n,interval:s}))):(()=>{let t=!0,n=()=>t=!1;return(async()=>{try{const{unsubscribe:r}=await e.transport.subscribe({params:["newHeads"],onData(e){if(!t)return;const n=(0,Z.uU)(e.result?.number);i(n,l),l=n},onError(e){o?.(e)}});n=r,t||n()}catch(r){o?.(r)}})(),n})()}function xn(e){return{call:t=>(0,pt.T)(e,t),createBlockFilter:()=>async function(e){const t=It(e,{method:"eth_newBlockFilter"}),n=await e.request({method:"eth_newBlockFilter"});return{id:n,request:t(n),type:"block"}}(e),createContractEventFilter:t=>Ut(e,t),createEventFilter:t=>Lt(e,t),createPendingTransactionFilter:()=>Dt(e),estimateContractGas:t=>async function(e,t){let{abi:n,address:r,args:i,functionName:o,...a}=t;const s=(0,Le.p)({abi:n,args:i,functionName:o});try{return await le(e,ke,"estimateGas")({data:s,to:r,...a})}catch(l){const e=a.account?(0,F.J)(a.account):void 0;throw ft(l,{abi:n,address:r,args:i,docsPath:"/docs/contract/estimateContractGas",functionName:o,sender:e?.address})}}(e,t),estimateGas:t=>ke(e,t),getBalance:t=>async function(e,t){let{address:n,blockNumber:r,blockTag:i="latest"}=t;const o=r?(0,K.cK)(r):void 0,a=await e.request({method:"eth_getBalance",params:[n,o||i]});return BigInt(a)}(e,t),getBlock:t=>ve(e,t),getBlockNumber:t=>qt(e,t),getBlockTransactionCount:t=>async function(e){let{blockHash:t,blockNumber:n,blockTag:r="latest"}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=void 0!==n?(0,K.cK)(n):void 0;let o;return o=t?await e.request({method:"eth_getBlockTransactionCountByHash",params:[t]}):await e.request({method:"eth_getBlockTransactionCountByNumber",params:[i||r]}),(0,Z.ME)(o)}(e,t),getBytecode:t=>async function(e,t){let{address:n,blockNumber:r,blockTag:i="latest"}=t;const o=void 0!==r?(0,K.cK)(r):void 0,a=await e.request({method:"eth_getCode",params:[n,o||i]});if("0x"!==a)return a}(e,t),getChainId:()=>V(e),getContractEvents:t=>Jt(e,t),getEnsAddress:t=>async function(e,t){let{blockNumber:n,blockTag:r,coinType:i,name:o,universalResolverAddress:a}=t,s=a;if(!s){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=(0,tt.M)({blockNumber:n,chain:e.chain,contract:"ensUniversalResolver"})}try{const t=(0,Le.p)({abi:Xe.Rm,functionName:"addr",...null!=i?{args:[ct(o),BigInt(i)]}:{args:[ct(o)]}}),a=await le(e,mt,"readContract")({address:s,abi:Xe.Ag,functionName:"resolve",args:[(0,K.nj)(dt(o)),t],blockNumber:n,blockTag:r});if("0x"===a[0])return null;const l=(0,et.e)({abi:Xe.Rm,args:null!=i?[ct(o),BigInt(i)]:void 0,functionName:"addr",data:a[0]});return"0x"===l||"0x00"===(0,nt.B)(l)?null:l}catch(l){if(ot(l,"resolve"))return null;throw l}}(e,t),getEnsAvatar:t=>async function(e,t){let{blockNumber:n,blockTag:r,gatewayUrls:i,name:o,universalResolverAddress:a}=t;const s=await le(e,Tt,"getEnsText")({blockNumber:n,blockTag:r,key:"avatar",name:o,universalResolverAddress:a});if(!s)return null;try{return await At(e,{record:s,gatewayUrls:i})}catch{return null}}(e,t),getEnsName:t=>async function(e,t){let{address:n,blockNumber:r,blockTag:i,universalResolverAddress:o}=t,a=o;if(!a){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");a=(0,tt.M)({blockNumber:r,chain:e.chain,contract:"ensUniversalResolver"})}const s=`${n.toLowerCase().substring(2)}.addr.reverse`;try{const[t,o]=await le(e,mt,"readContract")({address:a,abi:Xe.oX,functionName:"reverse",args:[(0,K.nj)(dt(s))],blockNumber:r,blockTag:i});return n.toLowerCase()!==o.toLowerCase()?null:t}catch(l){if(ot(l,"reverse"))return null;throw l}}(e,t),getEnsResolver:t=>async function(e,t){let{blockNumber:n,blockTag:r,name:i,universalResolverAddress:o}=t,a=o;if(!a){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");a=(0,tt.M)({blockNumber:n,chain:e.chain,contract:"ensUniversalResolver"})}const[s]=await le(e,mt,"readContract")({address:a,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[(0,K.nj)(dt(i))],blockNumber:n,blockTag:r});return s}(e,t),getEnsText:t=>Tt(e,t),getFeeHistory:t=>Qt(e,t),estimateFeesPerGas:t=>async function(e,t){return xe(e,t)}(e,t),getFilterChanges:e=>Xt(0,e),getFilterLogs:e=>async function(e,t){let{filter:n}=t;const r=n.strict??!1;return(await n.request({method:"eth_getFilterLogs",params:[n.id]})).map((e=>{try{const{eventName:t,args:i}="abi"in n&&n.abi?Vt({abi:n.abi,data:e.data,topics:e.topics,strict:r}):{eventName:void 0,args:void 0};return Gt(e,{args:i,eventName:t})}catch(t){let r,i;if(t instanceof G.fo||t instanceof G.l3){if("strict"in n&&n.strict)return;r=t.abiItem.name,i=t.abiItem.inputs?.some((e=>!("name"in e&&e.name)))}return Gt(e,{args:i?[]:{},eventName:r})}})).filter(Boolean)}(0,e),getGasPrice:()=>we(e),getLogs:t=>Yt(e,t),getProof:t=>en(e,t),estimateMaxPriorityFeePerGas:t=>async function(e,t){return be(e,t)}(e,t),getStorageAt:t=>async function(e,t){let{address:n,blockNumber:r,blockTag:i="latest",slot:o}=t;const a=void 0!==r?(0,K.cK)(r):void 0;return await e.request({method:"eth_getStorageAt",params:[n,o,a||i]})}(e,t),getTransaction:t=>tn(e,t),getTransactionConfirmations:t=>async function(e,t){let{hash:n,transactionReceipt:r}=t;const[i,o]=await Promise.all([le(e,qt,"getBlockNumber")({}),n?le(e,tn,"getBlockNumber")({hash:n}):void 0]),a=r?.blockNumber||o?.blockNumber;return a?i-a+1n:0n}(e,t),getTransactionCount:t=>_e(e,t),getTransactionReceipt:t=>on(e,t),multicall:t=>async function(e,t){const{allowFailure:n=!0,batchSize:r,blockNumber:i,blockTag:o,contracts:a,multicallAddress:s}=t,l=r??("object"===typeof e.batch?.multicall&&e.batch.multicall.batchSize||1024);let c=s;if(!c){if(!e.chain)throw new Error("client chain not configured. multicallAddress is required.");c=(0,tt.M)({blockNumber:i,chain:e.chain,contract:"multicall3"})}const u=[[]];let d=0,h=0;for(let g=0;g<a.length;g++){const{abi:e,address:t,args:r,functionName:i}=a[g];try{const n=(0,Le.p)({abi:e,args:r,functionName:i});h+=(n.length-2)/2,l>0&&h>l&&u[d].length>0&&(d++,h=(n.length-2)/2,u[d]=[]),u[d]=[...u[d],{allowFailure:!0,callData:n,target:t}]}catch(m){const o=ft(m,{abi:e,address:t,args:r,docsPath:"/docs/contract/multicall",functionName:i});if(!n)throw o;u[d]=[...u[d],{allowFailure:!0,callData:"0x",target:t}]}}const f=await Promise.allSettled(u.map((t=>le(e,mt,"readContract")({abi:Xe.v2,address:c,args:[t],blockNumber:i,blockTag:o,functionName:"aggregate3"})))),p=[];for(let g=0;g<f.length;g++){const e=f[g];if("rejected"===e.status){if(!n)throw e.reason;for(let t=0;t<u[g].length;t++)p.push({status:"failure",error:e.reason,result:void 0});continue}const t=e.value;for(let r=0;r<t.length;r++){const{returnData:e,success:i}=t[r],{callData:o}=u[g][r],{abi:s,address:l,functionName:c,args:d}=a[p.length];try{if("0x"===o)throw new G.O;if(!i)throw new it.$S({data:e});const t=(0,et.e)({abi:s,args:d,data:e,functionName:c});p.push(n?{result:t,status:"success"}:t)}catch(m){const e=ft(m,{abi:s,address:l,args:d,docsPath:"/docs/contract/multicall",functionName:c});if(!n)throw e;p.push({error:e,result:void 0,status:"failure"})}}}if(p.length!==a.length)throw new v.C("multicall results mismatch");return p}(e,t),prepareTransactionRequest:t=>Se(e,t),readContract:t=>mt(e,t),sendRawTransaction:t=>Pe(e,t),simulateContract:t=>async function(e,t){let{abi:n,address:r,args:i,dataSuffix:o,functionName:a,...s}=t;const l=s.account?(0,F.J)(s.account):void 0,c=(0,Le.p)({abi:n,args:i,functionName:a});try{const{data:t}=await le(e,pt.T,"call")({batch:!1,data:`${c}${o?o.replace("0x",""):""}`,to:r,...s});return{result:(0,et.e)({abi:n,args:i,functionName:a,data:t||"0x"}),request:{abi:n,address:r,args:i,dataSuffix:o,functionName:a,...s}}}catch(u){throw ft(u,{abi:n,address:r,args:i,docsPath:"/docs/contract/simulateContract",functionName:a,sender:l?.address})}}(e,t),verifyMessage:t=>ln(e,t),verifyTypedData:t=>async function(e,t){let{address:n,signature:r,message:i,primaryType:o,types:a,domain:s,...l}=t;return sn(e,{address:n,hash:cn({message:i,primaryType:o,types:a,domain:s}),signature:r,...l})}(e,t),uninstallFilter:e=>an(0,e),waitForTransactionReceipt:t=>async function(e,t){let{confirmations:n=1,hash:r,onReplaced:i,pollingInterval:o=e.pollingInterval,timeout:a}=t;const s=(0,Ie.A)(["waitForTransactionReceipt",e.uid,r]);let l,c,u,d=!1;return new Promise(((t,h)=>{a&&setTimeout((()=>h(new ie.WA({hash:r}))),a);const f=vn(s,{onReplaced:i,resolve:t,reject:h},(t=>{const i=le(e,bn,"watchBlockNumber")({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:o,async onBlockNumber(o){if(d)return;let a=o;const s=e=>{i(),e(),f()};try{if(u){if(n>1&&(!u.blockNumber||a-u.blockNumber+1n<n))return;return void s((()=>t.resolve(u)))}if(l||(d=!0,await We((async()=>{l=await le(e,tn,"getTransaction")({hash:r}),l.blockNumber&&(a=l.blockNumber)}),{delay:e=>{let{count:t}=e;return 200*(1<<t)},retryCount:6}),d=!1),u=await le(e,on,"getTransactionReceipt")({hash:r}),n>1&&(!u.blockNumber||a-u.blockNumber+1n<n))return;s((()=>t.resolve(u)))}catch(h){if(l&&(h instanceof ie.Kz||h instanceof ie.Kc))try{c=l,d=!0;const r=await We((()=>le(e,ve,"getBlock")({blockNumber:a,includeTransactions:!0})),{delay:e=>{let{count:t}=e;return 200*(1<<t)},retryCount:6,shouldRetry:e=>{let{error:t}=e;return t instanceof pe}});d=!1;const i=r.transactions.find((e=>{let{from:t,nonce:n}=e;return t===c.from&&n===c.nonce}));if(!i)return;if(u=await le(e,on,"getTransactionReceipt")({hash:i.hash}),n>1&&(!u.blockNumber||a-u.blockNumber+1n<n))return;let o="replaced";i.to===c.to&&i.value===c.value?o="repriced":i.from===i.to&&0n===i.value&&(o="cancelled"),s((()=>{t.onReplaced?.({reason:o,replacedTransaction:c,transaction:i,transactionReceipt:u}),t.resolve(u)}))}catch(p){s((()=>t.reject(p)))}else s((()=>t.reject(h)))}}})}))}))}(e,t),watchBlocks:t=>function(e,t){let{blockTag:n="latest",emitMissed:r=!1,emitOnBegin:i=!1,onBlock:o,onError:a,includeTransactions:s,poll:l,pollingInterval:c=e.pollingInterval}=t;const u="undefined"!==typeof l?l:"webSocket"!==e.transport.type,d=s??!1;let h;return u?vn((0,Ie.A)(["watchBlocks",e.uid,r,i,d,c]),{onBlock:o,onError:a},(t=>wn((async()=>{try{const i=await le(e,ve,"getBlock")({blockTag:n,includeTransactions:d});if(i.number&&h?.number){if(i.number===h.number)return;if(i.number-h.number>1&&r)for(let n=h?.number+1n;n<i.number;n++){const r=await le(e,ve,"getBlock")({blockNumber:n,includeTransactions:d});t.onBlock(r,h),h=r}}(!h?.number||"pending"===n&&!i?.number||i.number&&i.number>h.number)&&(t.onBlock(i,h),h=i)}catch(i){t.onError?.(i)}}),{emitOnBegin:i,interval:c}))):(()=>{let t=!0,n=()=>t=!1;return(async()=>{try{const{unsubscribe:r}=await e.transport.subscribe({params:["newHeads"],onData(n){if(!t)return;const r=(e.chain?.formatters?.block?.format||ye)(n.result);o(r,h),h=r},onError(e){a?.(e)}});n=r,t||n()}catch(r){a?.(r)}})(),n})()}(e,t),watchBlockNumber:t=>bn(e,t),watchContractEvent:t=>function(e,t){let{abi:n,address:r,args:i,batch:o=!0,eventName:a,onError:s,onLogs:l,poll:c,pollingInterval:u=e.pollingInterval,strict:d}=t;return("undefined"!==typeof c?c:"webSocket"!==e.transport.type)?(()=>{const t=(0,Ie.A)(["watchContractEvent",r,i,o,e.uid,a,u]),c=d??!1;return vn(t,{onLogs:l,onError:s},(t=>{let s,l,d=!1;const h=wn((async()=>{if(d)try{let u;if(l)u=await le(e,Xt,"getFilterChanges")({filter:l});else{const t=await le(e,qt,"getBlockNumber")({});u=s&&s!==t?await le(e,Jt,"getContractEvents")({abi:n,address:r,args:i,eventName:a,fromBlock:s+1n,toBlock:t,strict:c}):[],s=t}if(0===u.length)return;if(o)t.onLogs(u);else for(const e of u)t.onLogs([e])}catch(u){l&&u instanceof P&&(d=!1),t.onError?.(u)}else{try{l=await le(e,Ut,"createContractEventFilter")({abi:n,address:r,args:i,eventName:a,strict:c})}catch{}d=!0}}),{emitOnBegin:!0,interval:u});return async()=>{l&&await le(e,an,"uninstallFilter")({filter:l}),h()}}))})():(()=>{let t=!0,o=()=>t=!1;return(async()=>{try{const c=a?$t({abi:n,eventName:a,args:i}):[],{unsubscribe:u}=await e.transport.subscribe({params:["logs",{address:r,topics:c}],onData(e){if(!t)return;const r=e.result;try{const{eventName:e,args:t}=Vt({abi:n,data:r.data,topics:r.topics,strict:d}),i=Gt(r,{args:t,eventName:e});l([i])}catch(i){let e,t;if(i instanceof G.fo||i instanceof G.l3){if(d)return;e=i.abiItem.name,t=i.abiItem.inputs?.some((e=>!("name"in e&&e.name)))}const n=Gt(r,{args:t?[]:{},eventName:e});l([n])}},onError(e){s?.(e)}});o=u,t||o()}catch(c){s?.(c)}})(),o})()}(e,t),watchEvent:t=>function(e,t){let{address:n,args:r,batch:i=!0,event:o,events:a,onError:s,onLogs:l,poll:c,pollingInterval:u=e.pollingInterval,strict:d}=t;const h="undefined"!==typeof c?c:"webSocket"!==e.transport.type,f=d??!1;return h?vn((0,Ie.A)(["watchEvent",n,r,i,e.uid,o,u]),{onLogs:l,onError:s},(t=>{let s,l,c=!1;const d=wn((async()=>{if(c)try{let c;if(l)c=await le(e,Xt,"getFilterChanges")({filter:l});else{const t=await le(e,qt,"getBlockNumber")({});c=s&&s!==t?await le(e,Yt,"getLogs")({address:n,args:r,event:o,events:a,fromBlock:s+1n,toBlock:t}):[],s=t}if(0===c.length)return;if(i)t.onLogs(c);else for(const e of c)t.onLogs([e])}catch(u){l&&u instanceof P&&(c=!1),t.onError?.(u)}else{try{l=await le(e,Lt,"createEventFilter")({address:n,args:r,event:o,events:a,strict:f})}catch{}c=!0}}),{emitOnBegin:!0,interval:u});return async()=>{l&&await le(e,an,"uninstallFilter")({filter:l}),d()}})):(()=>{let t=!0,i=()=>t=!1;return(async()=>{try{const c=a??(o?[o]:void 0);let u=[];c&&(u=[c.flatMap((e=>$t({abi:[e],eventName:e.name,args:r})))],o&&(u=u[0]));const{unsubscribe:h}=await e.transport.subscribe({params:["logs",{address:n,topics:u}],onData(e){if(!t)return;const n=e.result;try{const{eventName:e,args:t}=Vt({abi:c,data:n.data,topics:n.topics,strict:f}),r=Gt(n,{args:t,eventName:e});l([r])}catch(r){let e,t;if(r instanceof G.fo||r instanceof G.l3){if(d)return;e=r.abiItem.name,t=r.abiItem.inputs?.some((e=>!("name"in e&&e.name)))}const i=Gt(n,{args:t?[]:{},eventName:e});l([i])}},onError(e){s?.(e)}});i=h,t||i()}catch(c){s?.(c)}})(),i})()}(e,t),watchPendingTransactions:t=>function(e,t){let{batch:n=!0,onError:r,onTransactions:i,poll:o,pollingInterval:a=e.pollingInterval}=t;return("undefined"!==typeof o?o:"webSocket"!==e.transport.type)?vn((0,Ie.A)(["watchPendingTransactions",e.uid,n,a]),{onTransactions:i,onError:r},(t=>{let r;const i=wn((async()=>{try{if(!r)try{return void(r=await le(e,Dt,"createPendingTransactionFilter")({}))}catch(o){throw i(),o}const a=await le(e,Xt,"getFilterChanges")({filter:r});if(0===a.length)return;if(n)t.onTransactions(a);else for(const e of a)t.onTransactions([e])}catch(o){t.onError?.(o)}}),{emitOnBegin:!0,interval:a});return async()=>{r&&await le(e,an,"uninstallFilter")({filter:r}),i()}})):(()=>{let t=!0,n=()=>t=!1;return(async()=>{try{const{unsubscribe:o}=await e.transport.subscribe({params:["newPendingTransactions"],onData(e){if(!t)return;const n=e.result;i([n])},onError(e){r?.(e)}});n=o,t||n()}catch(o){r?.(o)}})(),n})()}(e,t)}}function En(e){const{key:t="public",name:n="Public Client"}=e;return H({...e,key:t,name:n,type:"publicClient"}).extend(xn)}function Cn(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{key:n="fallback",name:r="Fallback",rank:i=!1,retryCount:o,retryDelay:a}=t;return t=>{let{chain:s,pollingInterval:l=4e3,timeout:c}=t,u=e,d=()=>{};const h=He({key:n,name:r,async request(e){let{method:t,params:n}=e;const r=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const i=u[e]({chain:s,retryCount:0,timeout:c});try{const e=await i.request({method:t,params:n});return d({method:t,params:n,response:e,transport:i,status:"success"}),e}catch(o){if(d({error:o,method:t,params:n,transport:i,status:"error"}),ze(o))throw o;if(e===u.length-1)throw o;return r(e+1)}};return r()},retryCount:o,retryDelay:a,type:"fallback"},{onResponse:e=>d=e,transports:u.map((e=>e({chain:s,retryCount:0})))});if(i){const e="object"===typeof i?i:{};!function(e){let{chain:t,interval:n=4e3,onTransports:r,sampleCount:i=10,timeout:o=1e3,transports:a,weights:s={}}=e;const{stability:l=.7,latency:c=.3}=s,u=[],d=async()=>{const e=await Promise.all(a.map((async e=>{const n=e({chain:t,retryCount:0,timeout:o}),r=Date.now();let i,a;try{await n.request({method:"net_listening"}),a=1}catch{a=0}finally{i=Date.now()}return{latency:i-r,success:a}})));u.push(e),u.length>i&&u.shift();const s=Math.max(...u.map((e=>Math.max(...e.map((e=>{let{latency:t}=e;return t})))))),h=a.map(((e,t)=>{const n=u.map((e=>e[t].latency)),r=1-n.reduce(((e,t)=>e+t),0)/n.length/s,i=u.map((e=>e[t].success)),o=i.reduce(((e,t)=>e+t),0)/i.length;return 0===o?[0,t]:[c*r+l*o,t]})).sort(((e,t)=>t[0]-e[0]));r(h.map((e=>{let[,t]=e;return a[t]}))),await Fe(n),d()};d()}({chain:s,interval:e.interval??l,onTransports:e=>u=e,sampleCount:e.sampleCount,timeout:e.timeout,transports:u,weights:e.weights})}return h}}class kn extends v.C{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}var _n=n(6510);const Sn=function(){if("undefined"!==typeof WebSocket)return WebSocket;if("undefined"!==typeof global.WebSocket)return global.WebSocket;if("undefined"!==typeof window.WebSocket)return window.WebSocket;if("undefined"!==typeof self.WebSocket)return self.WebSocket;throw new Error("`WebSocket` is not supported in this environment")}();function Pn(e,t){let{errorInstance:n=new Error("timed out"),timeout:r,signal:i}=t;return new Promise(((t,o)=>{(async()=>{let a;try{const s=new AbortController;r>0&&(a=setTimeout((()=>{i?s.abort():o(n)}),r)),t(await e({signal:s?.signal}))}catch(s){"AbortError"===s.name&&o(n),o(s)}finally{clearTimeout(a)}})()}))}let An=0;const Tn=new Map;async function In(e){let t=Tn.get(e);if(t)return t;const{schedule:n}=(0,_n.u)({id:e,fn:async()=>{const n=new Sn(e),r=new Map,i=new Map,o=e=>{let{data:t}=e;const n=JSON.parse(t),o="eth_subscription"===n.method,a=o?n.params.subscription:n.id,s=o?i:r,l=s.get(a);l&&l({data:t}),o||s.delete(a)},a=()=>{Tn.delete(e),n.removeEventListener("close",a),n.removeEventListener("message",o)};return n.addEventListener("close",a),n.addEventListener("message",o),n.readyState===Sn.CONNECTING&&await new Promise(((e,t)=>{n&&(n.onopen=e,n.onerror=t)})),t=Object.assign(n,{requests:r,subscriptions:i}),Tn.set(e,t),[t]}}),[r,[i]]=await n();return i}const On={http:async function(e,t){let{body:n,fetchOptions:r={},timeout:i=1e4}=t;const{headers:o,method:a,signal:s}=r;try{const t=await Pn((async t=>{let{signal:l}=t;return await fetch(e,{...r,body:Array.isArray(n)?(0,Ie.A)(n.map((e=>({jsonrpc:"2.0",id:e.id??An++,...e})))):(0,Ie.A)({jsonrpc:"2.0",id:n.id??An++,...n}),headers:{...o,"Content-Type":"application/json"},method:a||"POST",signal:s||(i>0?l:void 0)})}),{errorInstance:new w.MU({body:n,url:e}),timeout:i,signal:!0});let l;if(l=t.headers.get("Content-Type")?.startsWith("application/json")?await t.json():await t.text(),!t.ok)throw new w.Ci({body:n,details:(0,Ie.A)(l.error)||t.statusText,headers:t.headers,status:t.status,url:e});return l}catch(l){if(l instanceof w.Ci)throw l;if(l instanceof w.MU)throw l;throw new w.Ci({body:n,details:l.message,url:e})}},webSocket:function(e,t){let{body:n,onResponse:r}=t;if(e.readyState===e.CLOSED||e.readyState===e.CLOSING)throw new w.Pr({body:n,url:e.url,details:"Socket is closed."});const i=An++,o=t=>{let{data:a}=t;const s=JSON.parse(a);"number"===typeof s.id&&i!==s.id||(r?.(s),"eth_subscribe"===n.method&&"string"===typeof s.result&&e.subscriptions.set(s.result,o),"eth_unsubscribe"===n.method&&e.subscriptions.delete(n.params?.[0]))};return e.requests.set(i,o),e.send(JSON.stringify({jsonrpc:"2.0",...n,id:i})),e},webSocketAsync:async function(e,t){let{body:n,timeout:r=1e4}=t;return Pn((()=>new Promise((t=>On.webSocket(e,{body:n,onResponse:t})))),{errorInstance:new w.MU({body:n,url:e.url}),timeout:r})}};var Nn=n(9611);const Rn=e=>(t,n,r)=>{const i=r.subscribe;r.subscribe=(e,t,n)=>{let o=e;if(t){const i=(null==n?void 0:n.equalityFn)||Object.is;let a=e(r.getState());o=n=>{const r=e(n);if(!i(a,r)){const e=a;t(a=r,e)}},(null==n?void 0:n.fireImmediately)&&t(a,a)}return i(o)};return e(t,n,r)};function Mn(e,t){let n;try{n=e()}catch(r){return}return{getItem:e=>{var r;const i=e=>null===e?null:JSON.parse(e,null==t?void 0:t.reviver),o=null!=(r=n.getItem(e))?r:null;return o instanceof Promise?o.then(i):i(o)},setItem:(e,r)=>n.setItem(e,JSON.stringify(r,null==t?void 0:t.replacer)),removeItem:e=>n.removeItem(e)}}const $n=e=>t=>{try{const n=e(t);return n instanceof Promise?n:{then:e=>$n(e)(n),catch(e){return this}}}catch(n){return{then(e){return this},catch:e=>$n(e)(n)}}},jn=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),((e,t)=>(n,r,i)=>{let o={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},a=!1;const s=new Set,l=new Set;let c;try{c=o.getStorage()}catch(g){}if(!c)return e((function(){console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(...arguments)}),r,i);const u=$n(o.serialize),d=()=>{const e=o.partialize({...r()});let t;const n=u({state:e,version:o.version}).then((e=>c.setItem(o.name,e))).catch((e=>{t=e}));if(t)throw t;return n},h=i.setState;i.setState=(e,t)=>{h(e,t),d()};const f=e((function(){n(...arguments),d()}),r,i);let p;const m=()=>{var e;if(!c)return;a=!1,s.forEach((e=>e(r())));const t=(null==(e=o.onRehydrateStorage)?void 0:e.call(o,r()))||void 0;return $n(c.getItem.bind(c))(o.name).then((e=>{if(e)return o.deserialize(e)})).then((e=>{if(e){if("number"!==typeof e.version||e.version===o.version)return e.state;if(o.migrate)return o.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}})).then((e=>{var t;return p=o.merge(e,null!=(t=r())?t:f),n(p,!0),d()})).then((()=>{null==t||t(p,void 0),a=!0,l.forEach((e=>e(p)))})).catch((e=>{null==t||t(void 0,e)}))};return i.persist={setOptions:e=>{o={...o,...e},e.getStorage&&(c=e.getStorage())},clearStorage:()=>{null==c||c.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>m(),hasHydrated:()=>a,onHydrate:e=>(s.add(e),()=>{s.delete(e)}),onFinishHydration:e=>(l.add(e),()=>{l.delete(e)})},m(),p||f})(e,t)):((e,t)=>(n,r,i)=>{let o={storage:Mn((()=>localStorage)),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},a=!1;const s=new Set,l=new Set;let c=o.storage;if(!c)return e((function(){console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(...arguments)}),r,i);const u=()=>{const e=o.partialize({...r()});return c.setItem(o.name,{state:e,version:o.version})},d=i.setState;i.setState=(e,t)=>{d(e,t),u()};const h=e((function(){n(...arguments),u()}),r,i);let f;i.getInitialState=()=>h;const p=()=>{var e,t;if(!c)return;a=!1,s.forEach((e=>{var t;return e(null!=(t=r())?t:h)}));const i=(null==(t=o.onRehydrateStorage)?void 0:t.call(o,null!=(e=r())?e:h))||void 0;return $n(c.getItem.bind(c))(o.name).then((e=>{if(e){if("number"!==typeof e.version||e.version===o.version)return[!1,e.state];if(o.migrate)return[!0,o.migrate(e.state,e.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}return[!1,void 0]})).then((e=>{var t;const[i,a]=e;if(f=o.merge(a,null!=(t=r())?t:h),n(f,!0),i)return u()})).then((()=>{null==i||i(f,void 0),f=r(),a=!0,l.forEach((e=>e(f)))})).catch((e=>{null==i||i(void 0,e)}))};return i.persist={setOptions:e=>{o={...o,...e},e.storage&&(c=e.storage)},clearStorage:()=>{null==c||c.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>p(),hasHydrated:()=>a,onHydrate:e=>(s.add(e),()=>{s.delete(e)}),onFinishHydration:e=>(l.add(e),()=>{l.delete(e)})},o.skipHydration||p(),f||h})(e,t),Un=e=>{let t;const n=new Set,r=(e,r)=>{const i="function"===typeof e?e(t):e;if(!Object.is(i,t)){const e=t;t=(null!=r?r:"object"!==typeof i||null===i)?i:Object.assign({},t,i),n.forEach((n=>n(t,e)))}},i=()=>t,o={setState:r,getState:i,getInitialState:()=>a,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},a=t=e(r,i,o);return o},Ln=e=>e?Un(e):Un;var Dn=n(306);function Bn(e,t){if(Object.is(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(const[n,r]of e)if(!Object.is(r,t.get(n)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0}const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(const r of n)if(!Object.prototype.hasOwnProperty.call(t,r)||!Object.is(e[r],t[r]))return!1;return!0}function Fn(e,t){let{batch:n={multicall:{wait:32}},pollingInterval:r=4e3,rank:i,retryCount:o,retryDelay:a,stallTimeout:s}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e.length)throw new Error("must have at least one chain");let l=[];const c={},u={};for(const d of e){let e=!1;for(const n of t){const t=n(d);t&&(e=!0,l.some((e=>{let{id:t}=e;return t===d.id}))||(l=[...l,t.chain]),c[d.id]=[...c[d.id]||[],...t.rpcUrls.http],t.rpcUrls.webSocket&&(u[d.id]=[...u[d.id]||[],...t.rpcUrls.webSocket]))}if(!e)throw new Error([`Could not find valid provider configuration for chain "${d.name}".\n`,"You may need to add `jsonRpcProvider` to `configureChains` with the chain's RPC URLs.","Read more: https://wagmi.sh/core/providers/jsonRpc"].join("\n"))}return{chains:l,publicClient:t=>{let{chainId:u}=t;const d=l.find((e=>e.id===u))??e[0],h=c[d.id];if(!h||!h[0])throw new Error(`No providers configured for chain "${d.id}"`);const f=En({batch:n,chain:d,transport:Cn(h.map((e=>function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{batch:n,fetchOptions:r,key:i="http",name:o="HTTP JSON-RPC",retryDelay:a}=t;return s=>{let{chain:l,retryCount:c,timeout:u}=s;const{batchSize:d=1e3,wait:h=0}="object"===typeof n?n:{},f=t.retryCount??c,p=u??t.timeout??1e4,m=e||l?.rpcUrls.default.http[0];if(!m)throw new kn;return He({key:i,name:o,async request(t){let{method:i,params:o}=t;const a={method:i,params:o},{schedule:s}=(0,_n.u)({id:`${e}`,wait:h,shouldSplitBatch:e=>e.length>d,fn:e=>On.http(m,{body:e,fetchOptions:r,timeout:p}),sort:(e,t)=>e.id-t.id}),[{error:l,result:c}]=await(async e=>n?s(e):[await On.http(m,{body:e,fetchOptions:r,timeout:p})])(a);if(l)throw new w.J8({body:a,error:l,url:m});return c},retryCount:f,retryDelay:a,timeout:p,type:"http"},{fetchOptions:r,url:e})}}(e,{timeout:s}))),{rank:i,retryCount:o,retryDelay:a}),pollingInterval:r});return Object.assign(f,{chains:l})},webSocketPublicClient:t=>{let{chainId:c}=t;const d=l.find((e=>e.id===c))??e[0],h=u[d.id];if(!h||!h[0])return;const f=En({batch:n,chain:d,transport:Cn(h.map((e=>function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{key:n="webSocket",name:r="WebSocket JSON-RPC",retryDelay:i}=t;return o=>{let{chain:a,retryCount:s,timeout:l}=o;const c=t.retryCount??s,u=l??t.timeout??1e4,d=e||a?.rpcUrls.default.webSocket?.[0];if(!d)throw new kn;return He({key:n,name:r,async request(e){let{method:t,params:n}=e;const r={method:t,params:n},i=await In(d),{error:o,result:a}=await On.webSocketAsync(i,{body:r,timeout:u});if(o)throw new w.J8({body:r,error:o,url:d});return a},retryCount:c,retryDelay:i,timeout:u,type:"webSocket"},{getSocket:()=>In(d),async subscribe(e){let{params:t,onData:n,onError:r}=e;const i=await In(d),{result:o}=await new Promise(((e,o)=>On.webSocket(i,{body:{method:"eth_subscribe",params:t},onResponse(t){if(t.error)return o(t.error),void r?.(t.error);"number"!==typeof t.id?"eth_subscription"===t.method&&n(t.params):e(t)}})));return{subscriptionId:o,unsubscribe:async()=>new Promise((e=>On.webSocket(i,{body:{method:"eth_unsubscribe",params:[o]},onResponse:e})))}}})}}(e,{timeout:s}))),{rank:i,retryCount:o,retryDelay:a}),pollingInterval:r});return Object.assign(f,{chains:l})}}}Error;var Wn=class extends Error{constructor(e){let{chainId:t,connectorId:n}=e;super(`Chain "${t}" not configured${n?` for connector "${n}"`:""}.`),this.name="ChainNotConfigured"}},zn=class extends Error{constructor(){super(...arguments),this.name="ConnectorAlreadyConnectedError",this.message="Connector already connected"}},qn=class extends Error{constructor(){super(...arguments),this.name="ConfigChainsNotFound",this.message="No chains were found on the wagmi config. Some functions that require a chain may not work."}},Hn=class extends Error{constructor(e){let{connector:t}=e;super(`"${t.name}" does not support programmatic chain switching.`),this.name="SwitchChainNotSupportedError"}};function Zn(e,t){if(e===t)return!0;if(e&&t&&"object"===typeof e&&"object"===typeof t){if(e.constructor!==t.constructor)return!1;let n,r;if(Array.isArray(e)&&Array.isArray(t)){if(n=e.length,n!=t.length)return!1;for(r=n;0!==r--;)if(!Zn(e[r],t[r]))return!1;return!0}if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();const i=Object.keys(e);if(n=i.length,n!==Object.keys(t).length)return!1;for(r=n;0!==r--;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;for(r=n;0!==r--;){const n=i[r];if(n&&!Zn(e[n],t[n]))return!1}return!0}return e!==e&&t!==t}var Vn=(e,t)=>{let{find:n,replace:r}=t;return e&&n(e)?r(e):"object"!==typeof e?e:Array.isArray(e)?e.map((e=>Vn(e,{find:n,replace:r}))):e instanceof Object?Object.entries(e).reduce(((e,t)=>{let[i,o]=t;return{...e,[i]:Vn(o,{find:n,replace:r})}}),{}):e};function Kn(e){const t=JSON.parse(e),n=Vn(t,{find:e=>"string"===typeof e&&e.startsWith("#bigint."),replace:e=>BigInt(e.replace("#bigint.",""))});return n}function Gn(e){return"number"===typeof e?e:"wei"===e?0:Math.abs(Nn.pj[e])}function Yn(e,t){return e.slice(0,t).join(".")||"."}function Jn(e,t){const{length:n}=e;for(let r=0;r<n;++r)if(e[r]===t)return r+1;return 0}function Qn(e,t,n,r){return JSON.stringify(e,function(e,t){const n="function"===typeof e,r="function"===typeof t,i=[],o=[];return function(a,s){if("object"===typeof s)if(i.length){const e=Jn(i,this);0===e?i[i.length]=this:(i.splice(e),o.splice(e)),o[o.length]=a;const n=Jn(i,s);if(0!==n)return r?t.call(this,a,s,Yn(o,n)):`[ref=${Yn(o,n)}]`}else i[0]=s,o[0]=a;return n?e.call(this,a,s):s}}(((e,n)=>{const r="bigint"===typeof n?`#bigint.${n.toString()}`:n;return t?.(e,r)||r}),r),n??void 0)}var Xn={getItem:e=>"",setItem:(e,t)=>null,removeItem:e=>null};function er(e){let{deserialize:t=Kn,key:n="wagmi",serialize:r=Qn,storage:i}=e;return{...i,getItem:function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const o=i.getItem(`${n}.${e}`);try{return o?t(o):r}catch(a){return console.warn(a),r}},setItem:(e,t)=>{if(null===t)i.removeItem(`${n}.${e}`);else try{i.setItem(`${n}.${e}`,r(t))}catch(o){console.error(o)}},removeItem:e=>i.removeItem(`${n}.${e}`)}}var tr,nr,rr,ir,or,ar="store",sr=class{constructor(e){let{autoConnect:t=!1,connectors:n=[new Ke],publicClient:r,storage:i=er({storage:"undefined"!==typeof window?window.localStorage:Xn}),logger:o={warn:console.warn},webSocketPublicClient:a}=e;Je(this,rr),this.publicClients=new Map,this.webSocketPublicClients=new Map,Je(this,tr,void 0),Je(this,nr,void 0),this.args={autoConnect:t,connectors:n,logger:o,publicClient:r,storage:i,webSocketPublicClient:a};let s,l="disconnected";if(t)try{const e=i.getItem(ar),t=e?.state?.data;l=t?.account?"reconnecting":"connecting",s=t?.chain?.id}catch(f){}const c="function"===typeof n?n():n;var u,d,h;c.forEach((e=>e.setStorage(i))),this.store=Ln(Rn(jn((()=>({connectors:c,publicClient:this.getPublicClient({chainId:s}),status:l,webSocketPublicClient:this.getWebSocketPublicClient({chainId:s})})),{name:ar,storage:i,partialize:e=>({...t&&{data:{account:e?.data?.account,chain:e?.data?.chain}},chains:e?.chains}),version:2}))),this.storage=i,Qe(this,nr,i?.getItem("wallet")),(u=this,d=rr,h=ir,Ge(u,d,"access private method"),h).call(this),t&&"undefined"!==typeof window&&setTimeout((async()=>await this.autoConnect()),0)}get chains(){return this.store.getState().chains}get connectors(){return this.store.getState().connectors}get connector(){return this.store.getState().connector}get data(){return this.store.getState().data}get error(){return this.store.getState().error}get lastUsedChainId(){return this.data?.chain?.id}get publicClient(){return this.store.getState().publicClient}get status(){return this.store.getState().status}get subscribe(){return this.store.subscribe}get webSocketPublicClient(){return this.store.getState().webSocketPublicClient}setState(e){const t="function"===typeof e?e(this.store.getState()):e;this.store.setState(t,!0)}clearState(){this.setState((e=>({...e,chains:void 0,connector:void 0,data:void 0,error:void 0,status:"disconnected"})))}async destroy(){this.connector&&await(this.connector.disconnect?.()),Qe(this,tr,!1),this.clearState(),this.store.destroy()}async autoConnect(){if(Ye(this,tr))return;Qe(this,tr,!0),this.setState((e=>({...e,status:e.data?.account?"reconnecting":"connecting"})));const e=Ye(this,nr)?[...this.connectors].sort((e=>e.id===Ye(this,nr)?-1:1)):this.connectors;let t=!1;for(const n of e){if(!n.ready||!n.isAuthorized)continue;if(!await n.isAuthorized())continue;const e=await n.connect();this.setState((t=>({...t,connector:n,chains:n?.chains,data:e,status:"connected"}))),t=!0;break}return t||this.setState((e=>({...e,data:void 0,status:"disconnected"}))),Qe(this,tr,!1),this.data}setConnectors(e){this.args={...this.args,connectors:e};const t="function"===typeof e?e():e;t.forEach((e=>e.setStorage(this.args.storage))),this.setState((e=>({...e,connectors:t})))}getPublicClient(){let{chainId:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.publicClients.get(-1);if(t&&t?.chain.id===e)return t;if(t=this.publicClients.get(e??-1),t)return t;const{publicClient:n}=this.args;return t="function"===typeof n?n({chainId:e}):n,this.publicClients.set(e??-1,t),t}setPublicClient(e){const t=this.data?.chain?.id;this.args={...this.args,publicClient:e},this.publicClients.clear(),this.setState((e=>({...e,publicClient:this.getPublicClient({chainId:t})})))}getWebSocketPublicClient(){let{chainId:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.webSocketPublicClients.get(-1);if(t&&t?.chain.id===e)return t;if(t=this.webSocketPublicClients.get(e??-1),t)return t;const{webSocketPublicClient:n}=this.args;return t="function"===typeof n?n({chainId:e}):n,t&&this.webSocketPublicClients.set(e??-1,t),t}setWebSocketPublicClient(e){const t=this.data?.chain?.id;this.args={...this.args,webSocketPublicClient:e},this.webSocketPublicClients.clear(),this.setState((e=>({...e,webSocketPublicClient:this.getWebSocketPublicClient({chainId:t})})))}setLastUsedConnector(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.storage?.setItem("wallet",e)}};function lr(e){const t=new sr(e);return or=t,t}function cr(){if(!or)throw new Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config");return or}async function ur(e){let{chainId:t,connector:n}=e;const r=cr(),i=r.connector;if(i&&n.id===i.id)throw new zn;try{r.setState((e=>({...e,status:"connecting"})));const e=await n.connect({chainId:t});return r.setLastUsedConnector(n.id),r.setState((t=>({...t,connector:n,chains:n?.chains,data:e,status:"connected"}))),r.storage.setItem("connected",!0),{...e,connector:n}}catch(o){throw r.setState((e=>({...e,status:e.connector?"connected":"disconnected"}))),o}}tr=new WeakMap,nr=new WeakMap,rr=new WeakSet,ir=function(){const e=e=>{this.setState((t=>({...t,data:{...t.data,...e}})))},t=()=>{this.clearState()},n=e=>{this.setState((t=>({...t,error:e})))};this.store.subscribe((e=>{let{connector:t}=e;return t}),((r,i)=>{i?.off?.("change",e),i?.off?.("disconnect",t),i?.off?.("error",n),r&&(r.on?.("change",e),r.on?.("disconnect",t),r.on?.("error",n))}));const{publicClient:r,webSocketPublicClient:i}=this.args;("function"===typeof r||"function"===typeof i)&&this.store.subscribe((e=>{let{data:t}=e;return t?.chain?.id}),(e=>{this.setState((t=>({...t,publicClient:this.getPublicClient({chainId:e}),webSocketPublicClient:this.getWebSocketPublicClient({chainId:e})})))}))};var dr=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],hr=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];function fr(){let{chainId:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=cr();return e&&t.getPublicClient({chainId:e})||t.publicClient}async function pr(){let{chainId:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=cr();return await(t.connector?.getWalletClient?.({chainId:e}))||null}async function mr(e){let{chainId:t,contracts:n,blockNumber:r,blockTag:i,...o}=e;const a=fr({chainId:t});if(!a.chains)throw new qn;if(t&&a.chain.id!==t)throw new Wn({chainId:t});return a.multicall({allowFailure:o.allowFailure??!0,blockNumber:r,blockTag:i,contracts:n})}async function gr(e){let{address:t,account:n,chainId:r,abi:i,args:o,functionName:a,blockNumber:s,blockTag:l}=e;return fr({chainId:r}).readContract({abi:i,address:t,account:n,functionName:a,args:o,blockNumber:s,blockTag:l})}async function yr(e){let{contracts:t,blockNumber:n,blockTag:r,...i}=e;const{allowFailure:o=!0}=i;try{const e=fr(),i=t.reduce(((t,n,r)=>{const i=n.chainId??e.chain.id;return{...t,[i]:[...t[i]||[],{contract:n,index:r}]}}),{}),a=()=>Object.entries(i).map((e=>{let[t,i]=e;return mr({allowFailure:o,chainId:parseInt(t),contracts:i.map((e=>{let{contract:t}=e;return t})),blockNumber:n,blockTag:r})})),s=(await Promise.all(a())).flat(),l=Object.values(i).flatMap((e=>e.map((e=>{let{index:t}=e;return t}))));return s.reduce(((e,t,n)=>(e&&(e[l[n]]=t),e)),[])}catch(a){if(a instanceof it.bG)throw a;const e=()=>t.map((e=>gr({...e,blockNumber:n,blockTag:r})));return o?(await Promise.allSettled(e())).map((e=>"fulfilled"===e.status?{result:e.value,status:"success"}:{error:e.reason,result:void 0,status:"failure"})):await Promise.all(e())}}function vr(){const{data:e,connector:t,status:n}=cr();switch(n){case"connected":return{address:e?.account,connector:t,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:n};case"reconnecting":return{address:e?.account,connector:t,isConnected:!!e?.account,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:n};case"connecting":return{address:e?.account,connector:t,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:n};case"disconnected":return{address:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:n}}}function wr(){const e=cr(),t=e.data?.chain?.id,n=e.chains??[],r=[...e.publicClient?.chains||[],...n].find((e=>e.id===t))??{id:t,name:`Chain ${t}`,network:`${t}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}};return{chain:t?{...r,...e.data?.chain,id:t}:void 0,chains:n}}function br(e){let{selector:t=e=>e}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=cr().subscribe((e=>{let{data:n,connector:r,status:i}=e;return t({address:n?.account,connector:r,status:i})}),(()=>e(vr())),{equalityFn:Bn});return n}var xr=n(9535),Er=n(4408),Cr=n(7022),kr=n(8117),_r=n(6440),Sr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Pr=class extends Cr.WF{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.address=xr.Uj.state.address,this.balanceVal=xr.Uj.state.balance,this.balanceSymbol=xr.Uj.state.balanceSymbol,this.profileName=xr.Uj.state.profileName,this.profileImage=xr.Uj.state.profileImage,this.network=xr.p_.state.caipNetwork,this.unsubscribe.push(xr.Uj.subscribe((e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")})),xr.p_.subscribeKey("caipNetwork",(e=>this.network=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=xr.$m.getNetworkImage(this.network),t="show"===this.balance;return Cr.qy`
      <wui-account-button
        .disabled=${Boolean(this.disabled)}
        address=${(0,_r.J)(this.profileName??this.address)}
        ?isProfileName=${Boolean(this.profileName)}
        networkSrc=${(0,_r.J)(e)}
        avatarSrc=${(0,_r.J)(this.profileImage)}
        balance=${t?xr.wE.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){xr.W3.open()}};Sr([(0,kr.MZ)({type:Boolean})],Pr.prototype,"disabled",void 0),Sr([(0,kr.MZ)()],Pr.prototype,"balance",void 0),Sr([(0,kr.MZ)()],Pr.prototype,"charsStart",void 0),Sr([(0,kr.MZ)()],Pr.prototype,"charsEnd",void 0),Sr([(0,kr.wk)()],Pr.prototype,"address",void 0),Sr([(0,kr.wk)()],Pr.prototype,"balanceVal",void 0),Sr([(0,kr.wk)()],Pr.prototype,"balanceSymbol",void 0),Sr([(0,kr.wk)()],Pr.prototype,"profileName",void 0),Sr([(0,kr.wk)()],Pr.prototype,"profileImage",void 0),Sr([(0,kr.wk)()],Pr.prototype,"network",void 0),Pr=Sr([(0,Er.customElement)("w3m-account-button")],Pr);const Ar=Cr.AH`
  :host {
    display: block;
    width: max-content;
  }
`;var Tr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Ir=class extends Cr.WF{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.isAccount=xr.Uj.state.isConnected,this.unsubscribe.push(xr.Uj.subscribeKey("isConnected",(e=>{this.isAccount=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return this.isAccount?Cr.qy`
          <w3m-account-button
            .disabled=${Boolean(this.disabled)}
            balance=${(0,_r.J)(this.balance)}
            .charsStart=${(0,_r.J)(this.charsStart)}
            .charsEnd=${(0,_r.J)(this.charsEnd)}
          >
          </w3m-account-button>
        `:Cr.qy`
          <w3m-connect-button
            size=${(0,_r.J)(this.size)}
            label=${(0,_r.J)(this.label)}
            loadingLabel=${(0,_r.J)(this.loadingLabel)}
          ></w3m-connect-button>
        `}};Ir.styles=Ar,Tr([(0,kr.MZ)({type:Boolean})],Ir.prototype,"disabled",void 0),Tr([(0,kr.MZ)()],Ir.prototype,"balance",void 0),Tr([(0,kr.MZ)()],Ir.prototype,"size",void 0),Tr([(0,kr.MZ)()],Ir.prototype,"label",void 0),Tr([(0,kr.MZ)()],Ir.prototype,"loadingLabel",void 0),Tr([(0,kr.MZ)()],Ir.prototype,"charsStart",void 0),Tr([(0,kr.MZ)()],Ir.prototype,"charsEnd",void 0),Tr([(0,kr.wk)()],Ir.prototype,"isAccount",void 0),Ir=Tr([(0,Er.customElement)("w3m-button")],Ir);var Or=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Nr=class extends Cr.WF{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=xr.W3.state.open,this.loading=xr.W3.state.loading,this.unsubscribe.push(xr.W3.subscribe((e=>{this.open=e.open,this.loading=e.loading})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.loading||this.open;return Cr.qy`
      <wui-connect-button
        size=${(0,_r.J)(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?xr.W3.close():this.loading||xr.W3.open()}};Or([(0,kr.MZ)()],Nr.prototype,"size",void 0),Or([(0,kr.MZ)()],Nr.prototype,"label",void 0),Or([(0,kr.MZ)()],Nr.prototype,"loadingLabel",void 0),Or([(0,kr.wk)()],Nr.prototype,"open",void 0),Or([(0,kr.wk)()],Nr.prototype,"loading",void 0),Nr=Or([(0,Er.customElement)("w3m-connect-button")],Nr);n(8958);const Rr=Cr.AH`
  :host {
    display: block;
    width: max-content;
  }
`;var Mr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let $r=class extends Cr.WF{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=xr.p_.state.caipNetwork,this.connected=xr.Uj.state.isConnected,this.loading=xr.W3.state.loading,this.unsubscribe.push(xr.p_.subscribeKey("caipNetwork",(e=>this.network=e)),xr.Uj.subscribeKey("isConnected",(e=>this.connected=e)),xr.W3.subscribeKey("loading",(e=>this.loading=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return Cr.qy`
      <wui-network-button
        .disabled=${Boolean(this.disabled||this.loading)}
        imageSrc=${(0,_r.J)(xr.$m.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.network?.name??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){this.loading||xr.W3.open({view:"Networks"})}};$r.styles=Rr,Mr([(0,kr.MZ)({type:Boolean})],$r.prototype,"disabled",void 0),Mr([(0,kr.wk)()],$r.prototype,"network",void 0),Mr([(0,kr.wk)()],$r.prototype,"connected",void 0),Mr([(0,kr.wk)()],$r.prototype,"loading",void 0),$r=Mr([(0,Er.customElement)("w3m-network-button")],$r);const jr=Cr.AH`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var Ur=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Lr=class extends Cr.WF{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=xr.IN.state.view,this.unsubscribe.push(xr.IN.subscribeKey("view",(e=>this.onViewChange(e))))}firstUpdated(){this.resizeObserver=new ResizeObserver((async e=>{let[t]=e;const n=`${t?.contentRect.height}px`;"0px"!==this.prevHeight&&(await this.animate([{height:this.prevHeight},{height:n}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=n})),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach((e=>e()))}render(){return Cr.qy`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":default:return Cr.qy`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return Cr.qy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return Cr.qy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return Cr.qy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return Cr.qy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return Cr.qy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return Cr.qy`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return Cr.qy`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return Cr.qy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return Cr.qy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return Cr.qy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return Cr.qy`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return Cr.qy`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return Cr.qy`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"ApproveTransaction":return Cr.qy`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"Transactions":return Cr.qy`<w3m-transactions-view></w3m-transactions-view>`;case"UpgradeEmailWallet":return Cr.qy`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return Cr.qy`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailWalletWaiting":return Cr.qy`<w3m-update-email-wallet-waiting-view></w3m-update-email-wallet-waiting-view>`}}async onViewChange(e){const{history:t}=xr.IN.state;let n=-10,r=10;t.length<this.prevHistoryLength&&(n=10,r=-10),this.prevHistoryLength=t.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${n}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${r}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){return this.shadowRoot?.querySelector("div")}};Lr.styles=jr,Ur([(0,kr.wk)()],Lr.prototype,"view",void 0),Lr=Ur([(0,Er.customElement)("w3m-router")],Lr);const Dr=Cr.AH`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }
`;var Br=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Fr=class extends Cr.WF{constructor(){super(),this.usubscribe=[],this.address=xr.Uj.state.address,this.profileImage=xr.Uj.state.profileImage,this.profileName=xr.Uj.state.profileName,this.balance=xr.Uj.state.balance,this.balanceSymbol=xr.Uj.state.balanceSymbol,this.network=xr.p_.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(xr.Uj.subscribe((e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):xr.W3.close()})),xr.p_.subscribeKey("caipNetwork",(e=>{e?.id&&(this.network=e)})))}disconnectedCallback(){this.usubscribe.forEach((e=>e()))}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");const e=xr.$m.getNetworkImage(this.network);return Cr.qy`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0,_r.J)(null===this.profileImage?void 0:this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?Er.UiHelperUtil.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):Er.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${xr.wE.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.emailCardTemplate()} ${this.emailBtnTemplate()}

        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${(0,_r.J)(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
          data-testid="w3m-account-select-network"
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${this.network?.name??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalBold"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}emailCardTemplate(){const e=xr.iT.getConnectedConnector(),t=xr.aK.getEmailConnector(),{origin:n}=location;return!t||"EMAIL"!==e||n.includes(xr.oU.SECURE_SITE)?null:Cr.qy`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a non-custodial wallet"
        icon="wallet"
      ></wui-notice-card>
    `}emailBtnTemplate(){const e=xr.iT.getConnectedConnector(),t=xr.aK.getEmailConnector();if(!t||"EMAIL"!==e)return null;const n=t.provider.getEmail()??"";return Cr.qy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(n)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${n}</wui-text>
      </wui-list-item>
    `}explorerBtnTemplate(){const{addressExplorerUrl:e}=xr.Uj.state;return e?Cr.qy`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=xr.p_.state,t=!!e&&e.length>1,n=e?.find((e=>{let{id:t}=e;return t===this.network?.id}));return t||!n}onCopyAddress(){try{this.address&&(xr.wE.copyToClopboard(this.address),xr.Pt.showSuccess("Address copied"))}catch{xr.Pt.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&xr.IN.push("Networks")}onTransactions(){xr.En.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),xr.IN.push("Transactions")}async onDisconnect(){try{this.disconecting=!0,await xr.x4.disconnect(),xr.En.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),xr.W3.close()}catch{xr.En.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),xr.Pt.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){const{addressExplorerUrl:e}=xr.Uj.state;e&&xr.wE.openHref(e,"_blank")}onGoToUpgradeView(){xr.En.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),xr.IN.push("UpgradeEmailWallet")}onGoToUpdateEmail(e){xr.IN.push("UpdateEmailWallet",{email:e})}};Fr.styles=Dr,Br([(0,kr.wk)()],Fr.prototype,"address",void 0),Br([(0,kr.wk)()],Fr.prototype,"profileImage",void 0),Br([(0,kr.wk)()],Fr.prototype,"profileName",void 0),Br([(0,kr.wk)()],Fr.prototype,"balance",void 0),Br([(0,kr.wk)()],Fr.prototype,"balanceSymbol",void 0),Br([(0,kr.wk)()],Fr.prototype,"network",void 0),Br([(0,kr.wk)()],Fr.prototype,"disconecting",void 0),Fr=Br([(0,Er.customElement)("w3m-account-view")],Fr);var Wr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let zr=class extends Cr.WF{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=xr.wE.debounce((e=>{this.search=e}))}render(){const e=this.search.length>=2;return Cr.qy`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?Cr.qy`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:Cr.qy`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return xr.wE.isMobile()?Cr.qy`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){xr.IN.push("ConnectingWalletConnect")}};Wr([(0,kr.wk)()],zr.prototype,"search",void 0),zr=Wr([(0,Er.customElement)("w3m-all-wallets-view")],zr);const qr=Cr.AH`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Hr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Zr=class extends Cr.WF{constructor(){super(),this.unsubscribe=[],this.connectors=xr.aK.state.connectors,this.unsubscribe.push(xr.aK.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return Cr.qy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-email-login-widget></w3m-email-login-widget>

        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(xr.wE.isMobile())return null;const e=this.connectors.find((e=>"WALLET_CONNECT"===e.type));return e?Cr.qy`
      <wui-list-wallet
        imageSrc=${(0,_r.J)(xr.$m.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:e}=xr.Hd.state;if(!e?.length)return null;return this.filterOutDuplicateWallets(e).map((e=>Cr.qy`
        <wui-list-wallet
          imageSrc=${(0,_r.J)(xr.$m.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `))}featuredTemplate(){if(!this.connectors.find((e=>"WALLET_CONNECT"===e.type)))return null;const{featured:e}=xr.Np.state;if(!e.length)return null;return this.filterOutDuplicateWallets(e).map((e=>Cr.qy`
        <wui-list-wallet
          imageSrc=${(0,_r.J)(xr.$m.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `))}recentTemplate(){return xr.iT.getRecentWallets().map((e=>Cr.qy`
        <wui-list-wallet
          imageSrc=${(0,_r.J)(xr.$m.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `))}announcedTemplate(){return this.connectors.map((e=>"ANNOUNCED"!==e.type?null:Cr.qy`
        <wui-list-wallet
          imageSrc=${(0,_r.J)(xr.$m.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagVariant="success"
          .installed=${!0}
        >
        </wui-list-wallet>
      `))}injectedTemplate(){const e=this.connectors.find((e=>"ANNOUNCED"===e.type));return this.connectors.map((t=>"INJECTED"!==t.type?null:xr.x4.checkInstalled()?Cr.qy`
        <wui-list-wallet
          imageSrc=${(0,_r.J)(xr.$m.getConnectorImage(t))}
          .installed=${Boolean(e)}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
        >
        </wui-list-wallet>
      `:null))}connectorsTemplate(){const e=xr.aK.getAnnouncedConnectorRdns();return this.connectors.map((t=>["WALLET_CONNECT","INJECTED","ANNOUNCED","EMAIL"].includes(t.type)||e.includes(xr.oU.CONNECTOR_RDNS_MAP[t.id])?null:Cr.qy`
        <wui-list-wallet
          imageSrc=${(0,_r.J)(xr.$m.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
        >
        </wui-list-wallet>
      `))}allWalletsTemplate(){if(!this.connectors.find((e=>"WALLET_CONNECT"===e.type)))return null;const e=xr.Np.state.count+xr.Np.state.featured.length,t=e<10?e:10*Math.floor(e/10),n=t<e?`${t}+`:`${t}`;return Cr.qy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${n}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `}recommendedTemplate(){if(!this.connectors.find((e=>"WALLET_CONNECT"===e.type)))return null;const{recommended:e}=xr.Np.state,{customWallets:t,featuredWalletIds:n}=xr.Hd.state,{connectors:r}=xr.aK.state,i=xr.iT.getRecentWallets(),o=r.filter((e=>"ANNOUNCED"===e.type));if(n||t||!e.length)return null;const a=o.length+i.length,s=Math.max(0,2-a);return this.filterOutDuplicateWallets(e).slice(0,s).map((e=>Cr.qy`
        <wui-list-wallet
          imageSrc=${(0,_r.J)(xr.$m.getWalletImage(e))}
          name=${e?.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `))}onConnector(e){"WALLET_CONNECT"===e.type?xr.wE.isMobile()?xr.IN.push("AllWallets"):xr.IN.push("ConnectingWalletConnect"):xr.IN.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){const{connectors:t}=xr.aK.state,n=xr.iT.getRecentWallets().map((e=>e.id)),r=t.map((e=>e.info?.rdns)).filter(Boolean);return e.filter((e=>!n.includes(e.id)&&!r.includes(e.rdns??void 0)))}onAllWallets(){xr.En.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),xr.IN.push("AllWallets")}onConnectWallet(e){xr.IN.push("ConnectingWalletConnect",{wallet:e})}};Zr.styles=qr,Hr([(0,kr.wk)()],Zr.prototype,"connectors",void 0),Zr=Hr([(0,Er.customElement)("w3m-connect-view")],Zr);const Vr=Cr.AH`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var Kr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};class Gr extends Cr.WF{constructor(){super(),this.wallet=xr.IN.state.data?.wallet,this.connector=xr.IN.state.data?.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=xr.$m.getWalletImage(this.wallet)??xr.$m.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=xr.x4.state.wcUri,this.error=xr.x4.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(xr.x4.subscribeKey("wcUri",(e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())})),xr.x4.subscribeKey("wcError",(e=>this.error=e)),xr.x4.subscribeKey("buffering",(e=>this.buffering=e)))}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),Cr.qy`
      <wui-flex
        data-error=${(0,_r.J)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,_r.J)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?Cr.qy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){this.buffering||(xr.x4.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){const e=xr.Wn.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return Cr.qy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(xr.wE.copyToClopboard(this.uri),xr.Pt.showSuccess("Link copied"))}catch{xr.Pt.showError("Failed to copy")}}}Gr.styles=Vr,Kr([(0,kr.wk)()],Gr.prototype,"uri",void 0),Kr([(0,kr.wk)()],Gr.prototype,"error",void 0),Kr([(0,kr.wk)()],Gr.prototype,"ready",void 0),Kr([(0,kr.wk)()],Gr.prototype,"showRetry",void 0),Kr([(0,kr.wk)()],Gr.prototype,"buffering",void 0),Kr([(0,kr.MZ)({type:Boolean})],Gr.prototype,"isMobile",void 0),Kr([(0,kr.MZ)()],Gr.prototype,"onRetry",void 0);var Yr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};const Jr={INJECTED:"browser",ANNOUNCED:"browser"};let Qr=class extends Gr{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");xr.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:Jr[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&xr.iT.setConnectedWalletImageUrl(this.connector.imageUrl),await xr.x4.connectExternal(this.connector),xr.jF.state.isSiweEnabled?xr.IN.push("ConnectingSiwe"):xr.W3.close(),xr.En.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(e){xr.En.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};Qr=Yr([(0,Er.customElement)("w3m-connecting-external-view")],Qr);var Xr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let ei=class extends Cr.WF{constructor(){super(...arguments),this.dappName=xr.Hd.state.metadata?.name,this.isSigning=!1}render(){return Cr.qy`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="shade"
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="fill"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,xr.En.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track"});try{xr.jF.setStatus("loading");const e=await xr.jF.signIn();return xr.jF.setStatus("success"),xr.En.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track"}),e}catch(e){return xr.Pt.showError("Signature declined"),xr.jF.setStatus("error"),xr.En.sendEvent({event:"SIWE_AUTH_ERROR",type:"track"})}finally{this.isSigning=!1}}async onCancel(){const{isConnected:e}=xr.Uj.state;e?(await xr.x4.disconnect(),xr.W3.close()):xr.IN.push("Connect"),xr.En.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track"})}};Xr([(0,kr.wk)()],ei.prototype,"isSigning",void 0),ei=Xr([(0,Er.customElement)("w3m-connecting-siwe-view")],ei);var ti=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let ni=class extends Cr.WF{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=xr.IN.state.data?.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),xr.oU.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),Cr.qy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):Cr.qy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];try{const{wcPairingExpiry:t}=xr.x4.state;if(e||xr.wE.isPairingExpired(t)){if(xr.x4.connectWalletConnect(),this.wallet){const e=xr.$m.getWalletImage(this.wallet);e&&xr.iT.setConnectedWalletImageUrl(e)}else{const e=xr.aK.state.connectors.find((e=>"WALLET_CONNECT"===e.type)),t=xr.$m.getConnectorImage(e);t&&xr.iT.setConnectedWalletImageUrl(t)}await xr.x4.state.wcPromise,this.finalizeConnection(),xr.jF.state.isSiweEnabled?xr.IN.push("ConnectingSiwe"):xr.W3.close()}}catch(t){xr.En.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),xr.x4.setWcError(!0),xr.wE.isAllowedRetry(this.lastRetry)&&(xr.Pt.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){const{wcLinking:e,recentWallet:t}=xr.x4.state;e&&xr.iT.setWalletConnectDeepLink(e),t&&xr.iT.setWeb3ModalRecent(t),xr.En.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:n,injected:r,rdns:i}=this.wallet,o=r?.map((e=>{let{injected_id:t}=e;return t})).filter(Boolean),a=i?[i]:o??[],s=a.length,l=e,c=n,u=xr.x4.checkInstalled(a),d=s&&u,h=t&&!xr.wE.isMobile();d&&this.platforms.push("browser"),l&&this.platforms.push(xr.wE.isMobile()?"mobile":"qrcode"),c&&this.platforms.push("web"),h&&this.platforms.push("desktop"),!d&&s&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return Cr.qy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return Cr.qy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return Cr.qy`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return Cr.qy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return Cr.qy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return Cr.qy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?Cr.qy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){const t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};ti([(0,kr.wk)()],ni.prototype,"platform",void 0),ti([(0,kr.wk)()],ni.prototype,"platforms",void 0),ni=ti([(0,Er.customElement)("w3m-connecting-wc-view")],ni);var ri=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let ii=class extends Cr.WF{constructor(){super(...arguments),this.wallet=xr.IN.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return Cr.qy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?Cr.qy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?Cr.qy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?Cr.qy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?Cr.qy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&xr.wE.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&xr.wE.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&xr.wE.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&xr.wE.openHref(this.wallet.homepage,"_blank")}};ii=ri([(0,Er.customElement)("w3m-downloads-view")],ii);var oi=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let ai=class extends Cr.WF{render(){return Cr.qy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{xr.wE.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:t}=xr.Np.state,{customWallets:n}=xr.Hd.state;return[...t,...n??[],...e].slice(0,4).map((e=>Cr.qy`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${(0,_r.J)(xr.$m.getWalletImage(e))}
          @click=${()=>{xr.wE.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `))}};ai=oi([(0,Er.customElement)("w3m-get-wallet-view")],ai);const si=Cr.AH`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var li=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let ci=class extends Cr.WF{constructor(){super(),this.network=xr.IN.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.error?"Switch declined":"Approve in wallet",t=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return Cr.qy`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${(0,_r.J)(xr.$m.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:Cr.qy`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await xr.p_.switchActiveNetwork(this.network),xr.jF.state.isSiweEnabled||xr.aS.navigateAfterNetworkSwitch())}catch{this.error=!0}}};ci.styles=si,li([(0,kr.wk)()],ci.prototype,"showRetry",void 0),li([(0,kr.wk)()],ci.prototype,"error",void 0),ci=li([(0,Er.customElement)("w3m-network-switch-view")],ci);const ui=Cr.AH`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var di=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let hi=class extends Cr.WF{constructor(){super(),this.unsubscribe=[],this.caipNetwork=xr.p_.state.caipNetwork,this.unsubscribe.push(xr.p_.subscribeKey("caipNetwork",(e=>this.caipNetwork=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return Cr.qy`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){xr.En.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),xr.IN.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:t,supportsAllNetworks:n}=xr.p_.state,r=e,i=t,o={};return i&&r&&(r.forEach(((e,t)=>{o[e]=t})),i.sort(((e,t)=>{const n=o[e.id],r=o[t.id];return void 0!==n&&void 0!==r?n-r:void 0!==n?-1:void 0!==r?1:0}))),i?.map((e=>Cr.qy`
        <wui-card-select
          .selected=${this.caipNetwork?.id===e.id}
          imageSrc=${(0,_r.J)(xr.$m.getNetworkImage(e))}
          type="network"
          name=${e.name??e.id}
          @click=${()=>this.onSwitchNetwork(e)}
          .disabled=${!n&&!r?.includes(e.id)}
          data-testid=${`w3m-network-switch-${e.name??e.id}`}
        ></wui-card-select>
      `))}async onSwitchNetwork(e){const{isConnected:t}=xr.Uj.state,{approvedCaipNetworkIds:n,supportsAllNetworks:r,caipNetwork:i}=xr.p_.state,{data:o}=xr.IN.state;t&&i?.id!==e.id?n?.includes(e.id)?(await xr.p_.switchActiveNetwork(e),xr.aS.navigateAfterNetworkSwitch()):r&&xr.IN.push("SwitchNetwork",{...o,network:e}):t||(xr.p_.setCaipNetwork(e),xr.IN.push("Connect"))}};hi.styles=ui,di([(0,kr.wk)()],hi.prototype,"caipNetwork",void 0),hi=di([(0,Er.customElement)("w3m-networks-view")],hi);var fi=n(2945);const pi=Cr.AH`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }
`;var mi=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};const gi="last-transaction";let yi=class extends Cr.WF{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.address=xr.Uj.state.address,this.transactions=xr.WC.state.transactions,this.transactionsByYear=xr.WC.state.transactionsByYear,this.loading=xr.WC.state.loading,this.empty=xr.WC.state.empty,this.next=xr.WC.state.next,this.unsubscribe.push(xr.Uj.subscribe((e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,xr.WC.resetTransactions(),xr.WC.fetchTransactions(e.address))})),xr.WC.subscribe((e=>{this.transactions=e.transactions,this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next})))}firstUpdated(){0===this.transactions.length&&xr.WC.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return Cr.qy`
      <wui-flex flexDirection="column" padding="s" gap="s">
        ${this.empty?null:this.templateTransactionsByYear()}
        ${this.loading?this.templateLoading():null}
        ${!this.loading&&this.empty?this.templateEmpty():null}
      </wui-flex>
    `}templateTransactionsByYear(){const e=Object.keys(this.transactionsByYear).sort().reverse();return e.map(((t,n)=>{const r=n===e.length-1,i=parseInt(t,10),o=Er.TransactionUtil.getTransactionGroupTitle(i),a=this.transactionsByYear[i];return a?Cr.qy`
        <wui-flex flexDirection="column" gap="s">
          <wui-flex
            alignItems="center"
            flexDirection="row"
            .padding=${["xs","s","s","s"]}
          >
            <wui-text variant="paragraph-500" color="fg-200">${o}</wui-text>
          </wui-flex>
          <wui-flex flexDirection="column" gap="xs">
            ${this.templateTransactions(a,r)}
          </wui-flex>
        </wui-flex>
      `:null}))}templateRenderTransaction(e,t){const{date:n,descriptions:r,direction:i,isAllNFT:o,images:a,status:s,transfers:l,type:c}=this.getTransactionListItemProps(e),u=l?.length>1;return 2===l?.length&&!o?Cr.qy`
        <wui-transaction-list-item
          date=${n}
          .direction=${i}
          id=${t&&this.next?gi:""}
          status=${s}
          type=${c}
          .images=${a}
          .descriptions=${r}
        ></wui-transaction-list-item>
      `:u?l.map(((e,r)=>{const i=Er.TransactionUtil.getTransferDescription(e),o=t&&r===l.length-1;return Cr.qy` <wui-transaction-list-item
          date=${n}
          direction=${e.direction}
          id=${o&&this.next?gi:""}
          status=${s}
          type=${c}
          .onlyDirectionIcon=${!0}
          .images=${[a?.[r]]}
          .descriptions=${[i]}
        ></wui-transaction-list-item>`})):Cr.qy`
      <wui-transaction-list-item
        date=${n}
        .direction=${i}
        id=${t&&this.next?gi:""}
        status=${s}
        type=${c}
        .images=${a}
        .descriptions=${r}
      ></wui-transaction-list-item>
    `}templateTransactions(e,t){return e.map(((n,r)=>{const i=t&&r===e.length-1;return Cr.qy`${this.templateRenderTransaction(n,i)}`}))}templateEmpty(){return Cr.qy`
      <wui-flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-icon-box
          backgroundColor="glass-005"
          background="gray"
          iconColor="fg-200"
          icon="wallet"
          size="lg"
          ?border=${!0}
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >No Transactions yet</wui-text
          >
          <wui-text align="center" variant="small-500" color="fg-200"
            >Start trading on dApps <br />
            to grow your wallet!</wui-text
          >
        </wui-flex>
      </wui-flex>
    `}templateLoading(){return Array(7).fill(Cr.qy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map((e=>e))}createPaginationObserver(){const{projectId:e}=xr.Hd.state;this.paginationObserver=new IntersectionObserver((t=>{let[n]=t;n?.isIntersecting&&!this.loading&&(xr.WC.fetchTransactions(this.address),xr.En.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next}}))}),{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();const e=this.shadowRoot?.querySelector(`#${gi}`);e&&this.paginationObserver?.observe(e)}getTransactionListItemProps(e){const t=fi.r.getRelativeDateFromNow(e?.metadata?.minedAt),n=Er.TransactionUtil.getTransactionDescriptions(e),r=e?.transfers,i=e?.transfers?.[0],o=Boolean(i)&&e?.transfers?.every((e=>Boolean(e.nft_info))),a=Er.TransactionUtil.getTransactionImages(r);return{date:t,direction:i?.direction,descriptions:n,isAllNFT:o,images:a,status:e.metadata?.status,transfers:r,type:e.metadata?.operationType}}};yi.styles=pi,mi([(0,kr.wk)()],yi.prototype,"address",void 0),mi([(0,kr.wk)()],yi.prototype,"transactions",void 0),mi([(0,kr.wk)()],yi.prototype,"transactionsByYear",void 0),mi([(0,kr.wk)()],yi.prototype,"loading",void 0),mi([(0,kr.wk)()],yi.prototype,"empty",void 0),mi([(0,kr.wk)()],yi.prototype,"next",void 0),yi=mi([(0,Er.customElement)("w3m-transactions-view")],yi);var vi=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};const wi=[{images:["network","layers","system"],title:"The system\u2019s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let bi=class extends Cr.WF{render(){return Cr.qy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${wi}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{xr.wE.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};bi=vi([(0,Er.customElement)("w3m-what-is-a-network-view")],bi);var xi=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};const Ei=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let Ci=class extends Cr.WF{render(){return Cr.qy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${Ei}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){xr.En.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),xr.IN.push("GetWallet")}};Ci=xi([(0,Er.customElement)("w3m-what-is-a-wallet-view")],Ci);const ki=Cr.AH`
  wui-loading-spinner {
    margin: 9px auto;
  }
`,_i={SECURE_SITE_SDK:"https://secure.web3modal.com/sdk",APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_AWAIT_UPDATE_EMAIL_SUCCESS:"@w3m-frame/AWAIT_UPDATE_EMAIL_SUCCESS",FRAME_AWAIT_UPDATE_EMAIL_ERROR:"@w3m-frame/AWAIT_UPDATE_EMAIL_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR"},Si="eth_chainId";var Pi,Ai;!function(e){e.assertEqual=e=>e,e.assertIs=function(e){},e.assertNever=function(e){throw new Error},e.arrayToEnum=e=>{const t={};for(const n of e)t[n]=n;return t},e.getValidEnumValues=t=>{const n=e.objectKeys(t).filter((e=>"number"!==typeof t[t[e]])),r={};for(const e of n)r[e]=t[e];return e.objectValues(r)},e.objectValues=t=>e.objectKeys(t).map((function(e){return t[e]})),e.objectKeys="function"===typeof Object.keys?e=>Object.keys(e):e=>{const t=[];for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t},e.find=(e,t)=>{for(const n of e)if(t(n))return n},e.isInteger="function"===typeof Number.isInteger?e=>Number.isInteger(e):e=>"number"===typeof e&&isFinite(e)&&Math.floor(e)===e,e.joinValues=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" | ";return e.map((e=>"string"===typeof e?`'${e}'`:e)).join(t)},e.jsonStringifyReplacer=(e,t)=>"bigint"===typeof t?t.toString():t}(Pi||(Pi={})),function(e){e.mergeShapes=(e,t)=>({...e,...t})}(Ai||(Ai={}));const Ti=Pi.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Ii=e=>{switch(typeof e){case"undefined":return Ti.undefined;case"string":return Ti.string;case"number":return isNaN(e)?Ti.nan:Ti.number;case"boolean":return Ti.boolean;case"function":return Ti.function;case"bigint":return Ti.bigint;case"symbol":return Ti.symbol;case"object":return Array.isArray(e)?Ti.array:null===e?Ti.null:e.then&&"function"===typeof e.then&&e.catch&&"function"===typeof e.catch?Ti.promise:"undefined"!==typeof Map&&e instanceof Map?Ti.map:"undefined"!==typeof Set&&e instanceof Set?Ti.set:"undefined"!==typeof Date&&e instanceof Date?Ti.date:Ti.object;default:return Ti.unknown}},Oi=Pi.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class Ni extends Error{constructor(e){var t;super(),t=this,this.issues=[],this.addIssue=e=>{this.issues=[...this.issues,e]},this.addIssues=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];t.issues=[...t.issues,...e]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const t=e||function(e){return e.message},n={_errors:[]},r=e=>{for(const i of e.issues)if("invalid_union"===i.code)i.unionErrors.map(r);else if("invalid_return_type"===i.code)r(i.returnTypeError);else if("invalid_arguments"===i.code)r(i.argumentsError);else if(0===i.path.length)n._errors.push(t(i));else{let e=n,r=0;for(;r<i.path.length;){const n=i.path[r];r===i.path.length-1?(e[n]=e[n]||{_errors:[]},e[n]._errors.push(t(i))):e[n]=e[n]||{_errors:[]},e=e[n],r++}}};return r(this),n}toString(){return this.message}get message(){return JSON.stringify(this.issues,Pi.jsonStringifyReplacer,2)}get isEmpty(){return 0===this.issues.length}flatten(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e=>e.message;const t={},n=[];for(const r of this.issues)r.path.length>0?(t[r.path[0]]=t[r.path[0]]||[],t[r.path[0]].push(e(r))):n.push(e(r));return{formErrors:n,fieldErrors:t}}get formErrors(){return this.flatten()}}Ni.create=e=>new Ni(e);const Ri=(e,t)=>{let n;switch(e.code){case Oi.invalid_type:n=e.received===Ti.undefined?"Required":`Expected ${e.expected}, received ${e.received}`;break;case Oi.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,Pi.jsonStringifyReplacer)}`;break;case Oi.unrecognized_keys:n=`Unrecognized key(s) in object: ${Pi.joinValues(e.keys,", ")}`;break;case Oi.invalid_union:n="Invalid input";break;case Oi.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${Pi.joinValues(e.options)}`;break;case Oi.invalid_enum_value:n=`Invalid enum value. Expected ${Pi.joinValues(e.options)}, received '${e.received}'`;break;case Oi.invalid_arguments:n="Invalid function arguments";break;case Oi.invalid_return_type:n="Invalid function return type";break;case Oi.invalid_date:n="Invalid date";break;case Oi.invalid_string:"object"===typeof e.validation?"includes"in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,"number"===typeof e.validation.position&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:Pi.assertNever(e.validation):n="regex"!==e.validation?`Invalid ${e.validation}`:"Invalid";break;case Oi.too_small:n="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:"date"===e.type?`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:"Invalid input";break;case Oi.too_big:n="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"bigint"===e.type?`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"date"===e.type?`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:"Invalid input";break;case Oi.custom:n="Invalid input";break;case Oi.invalid_intersection_types:n="Intersection results could not be merged";break;case Oi.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case Oi.not_finite:n="Number must be finite";break;default:n=t.defaultError,Pi.assertNever(e)}return{message:n}};let Mi=Ri;function $i(){return Mi}const ji=e=>{const{data:t,path:n,errorMaps:r,issueData:i}=e,o=[...n,...i.path||[]],a={...i,path:o};let s="";const l=r.filter((e=>!!e)).slice().reverse();for(const c of l)s=c(a,{data:t,defaultError:s}).message;return{...i,path:o,message:i.message||s}};function Ui(e,t){const n=ji({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,$i(),Ri].filter((e=>!!e))});e.common.issues.push(n)}class Li{constructor(){this.value="valid"}dirty(){"valid"===this.value&&(this.value="dirty")}abort(){"aborted"!==this.value&&(this.value="aborted")}static mergeArray(e,t){const n=[];for(const r of t){if("aborted"===r.status)return Di;"dirty"===r.status&&e.dirty(),n.push(r.value)}return{status:e.value,value:n}}static async mergeObjectAsync(e,t){const n=[];for(const r of t)n.push({key:await r.key,value:await r.value});return Li.mergeObjectSync(e,n)}static mergeObjectSync(e,t){const n={};for(const r of t){const{key:t,value:i}=r;if("aborted"===t.status)return Di;if("aborted"===i.status)return Di;"dirty"===t.status&&e.dirty(),"dirty"===i.status&&e.dirty(),"__proto__"===t.value||"undefined"===typeof i.value&&!r.alwaysSet||(n[t.value]=i.value)}return{status:e.value,value:n}}}const Di=Object.freeze({status:"aborted"}),Bi=e=>({status:"dirty",value:e}),Fi=e=>({status:"valid",value:e}),Wi=e=>"aborted"===e.status,zi=e=>"dirty"===e.status,qi=e=>"valid"===e.status,Hi=e=>"undefined"!==typeof Promise&&e instanceof Promise;var Zi;!function(e){e.errToObj=e=>"string"===typeof e?{message:e}:e||{},e.toString=e=>"string"===typeof e?e:null===e||void 0===e?void 0:e.message}(Zi||(Zi={}));class Vi{constructor(e,t,n,r){this._cachedPath=[],this.parent=e,this.data=t,this._path=n,this._key=r}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Ki=(e,t)=>{if(qi(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new Ni(e.common.issues);return this._error=t,this._error}}};function Gi(e){if(!e)return{};const{errorMap:t,invalid_type_error:n,required_error:r,description:i}=e;if(t&&(n||r))throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');if(t)return{errorMap:t,description:i};return{errorMap:(e,t)=>"invalid_type"!==e.code?{message:t.defaultError}:"undefined"===typeof t.data?{message:null!==r&&void 0!==r?r:t.defaultError}:{message:null!==n&&void 0!==n?n:t.defaultError},description:i}}class Yi{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return Ii(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:Ii(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new Li,ctx:{common:e.parent.common,data:e.data,parsedType:Ii(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(Hi(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const n=this.safeParse(e,t);if(n.success)return n.data;throw n.error}safeParse(e,t){var n;const r={common:{issues:[],async:null!==(n=null===t||void 0===t?void 0:t.async)&&void 0!==n&&n,contextualErrorMap:null===t||void 0===t?void 0:t.errorMap},path:(null===t||void 0===t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Ii(e)},i=this._parseSync({data:e,path:r.path,parent:r});return Ki(r,i)}async parseAsync(e,t){const n=await this.safeParseAsync(e,t);if(n.success)return n.data;throw n.error}async safeParseAsync(e,t){const n={common:{issues:[],contextualErrorMap:null===t||void 0===t?void 0:t.errorMap,async:!0},path:(null===t||void 0===t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Ii(e)},r=this._parse({data:e,path:n.path,parent:n}),i=await(Hi(r)?r:Promise.resolve(r));return Ki(n,i)}refine(e,t){const n=e=>"string"===typeof t||"undefined"===typeof t?{message:t}:"function"===typeof t?t(e):t;return this._refinement(((t,r)=>{const i=e(t),o=()=>r.addIssue({code:Oi.custom,...n(t)});return"undefined"!==typeof Promise&&i instanceof Promise?i.then((e=>!!e||(o(),!1))):!!i||(o(),!1)}))}refinement(e,t){return this._refinement(((n,r)=>!!e(n)||(r.addIssue("function"===typeof t?t(n,r):t),!1)))}_refinement(e){return new Lo({schema:this,typeName:Yo.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return Do.create(this,this._def)}nullable(){return Bo.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return wo.create(this,this._def)}promise(){return Uo.create(this,this._def)}or(e){return Eo.create([this,e],this._def)}and(e){return So.create(this,e,this._def)}transform(e){return new Lo({...Gi(this._def),schema:this,typeName:Yo.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t="function"===typeof e?e:()=>e;return new Fo({...Gi(this._def),innerType:this,defaultValue:t,typeName:Yo.ZodDefault})}brand(){return new Ho({typeName:Yo.ZodBranded,type:this,...Gi(this._def)})}catch(e){const t="function"===typeof e?e:()=>e;return new Wo({...Gi(this._def),innerType:this,catchValue:t,typeName:Yo.ZodCatch})}describe(e){return new(0,this.constructor)({...this._def,description:e})}pipe(e){return Zo.create(this,e)}readonly(){return Vo.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const Ji=/^c[^\s-]{8,}$/i,Qi=/^[a-z][a-z0-9]*$/,Xi=/^[0-9A-HJKMNP-TV-Z]{26}$/,eo=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,to=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;let no;const ro=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,io=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;class oo extends Yi{_parse(e){this._def.coerce&&(e.data=String(e.data));if(this._getType(e)!==Ti.string){const t=this._getOrReturnCtx(e);return Ui(t,{code:Oi.invalid_type,expected:Ti.string,received:t.parsedType}),Di}const t=new Li;let n;for(const s of this._def.checks)if("min"===s.kind)e.data.length<s.value&&(n=this._getOrReturnCtx(e,n),Ui(n,{code:Oi.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),t.dirty());else if("max"===s.kind)e.data.length>s.value&&(n=this._getOrReturnCtx(e,n),Ui(n,{code:Oi.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),t.dirty());else if("length"===s.kind){const r=e.data.length>s.value,i=e.data.length<s.value;(r||i)&&(n=this._getOrReturnCtx(e,n),r?Ui(n,{code:Oi.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}):i&&Ui(n,{code:Oi.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}),t.dirty())}else if("email"===s.kind)to.test(e.data)||(n=this._getOrReturnCtx(e,n),Ui(n,{validation:"email",code:Oi.invalid_string,message:s.message}),t.dirty());else if("emoji"===s.kind)no||(no=new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$","u")),no.test(e.data)||(n=this._getOrReturnCtx(e,n),Ui(n,{validation:"emoji",code:Oi.invalid_string,message:s.message}),t.dirty());else if("uuid"===s.kind)eo.test(e.data)||(n=this._getOrReturnCtx(e,n),Ui(n,{validation:"uuid",code:Oi.invalid_string,message:s.message}),t.dirty());else if("cuid"===s.kind)Ji.test(e.data)||(n=this._getOrReturnCtx(e,n),Ui(n,{validation:"cuid",code:Oi.invalid_string,message:s.message}),t.dirty());else if("cuid2"===s.kind)Qi.test(e.data)||(n=this._getOrReturnCtx(e,n),Ui(n,{validation:"cuid2",code:Oi.invalid_string,message:s.message}),t.dirty());else if("ulid"===s.kind)Xi.test(e.data)||(n=this._getOrReturnCtx(e,n),Ui(n,{validation:"ulid",code:Oi.invalid_string,message:s.message}),t.dirty());else if("url"===s.kind)try{new URL(e.data)}catch(a){n=this._getOrReturnCtx(e,n),Ui(n,{validation:"url",code:Oi.invalid_string,message:s.message}),t.dirty()}else if("regex"===s.kind){s.regex.lastIndex=0;s.regex.test(e.data)||(n=this._getOrReturnCtx(e,n),Ui(n,{validation:"regex",code:Oi.invalid_string,message:s.message}),t.dirty())}else if("trim"===s.kind)e.data=e.data.trim();else if("includes"===s.kind)e.data.includes(s.value,s.position)||(n=this._getOrReturnCtx(e,n),Ui(n,{code:Oi.invalid_string,validation:{includes:s.value,position:s.position},message:s.message}),t.dirty());else if("toLowerCase"===s.kind)e.data=e.data.toLowerCase();else if("toUpperCase"===s.kind)e.data=e.data.toUpperCase();else if("startsWith"===s.kind)e.data.startsWith(s.value)||(n=this._getOrReturnCtx(e,n),Ui(n,{code:Oi.invalid_string,validation:{startsWith:s.value},message:s.message}),t.dirty());else if("endsWith"===s.kind)e.data.endsWith(s.value)||(n=this._getOrReturnCtx(e,n),Ui(n,{code:Oi.invalid_string,validation:{endsWith:s.value},message:s.message}),t.dirty());else if("datetime"===s.kind){((o=s).precision?o.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${o.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${o.precision}}Z$`):0===o.precision?o.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):o.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(e.data)||(n=this._getOrReturnCtx(e,n),Ui(n,{code:Oi.invalid_string,validation:"datetime",message:s.message}),t.dirty())}else"ip"===s.kind?(r=e.data,("v4"!==(i=s.version)&&i||!ro.test(r))&&("v6"!==i&&i||!io.test(r))&&(n=this._getOrReturnCtx(e,n),Ui(n,{validation:"ip",code:Oi.invalid_string,message:s.message}),t.dirty())):Pi.assertNever(s);var r,i,o;return{status:t.value,value:e.data}}_regex(e,t,n){return this.refinement((t=>e.test(t)),{validation:t,code:Oi.invalid_string,...Zi.errToObj(n)})}_addCheck(e){return new oo({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...Zi.errToObj(e)})}url(e){return this._addCheck({kind:"url",...Zi.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...Zi.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...Zi.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...Zi.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...Zi.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...Zi.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...Zi.errToObj(e)})}datetime(e){var t;return"string"===typeof e?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:"undefined"===typeof(null===e||void 0===e?void 0:e.precision)?null:null===e||void 0===e?void 0:e.precision,offset:null!==(t=null===e||void 0===e?void 0:e.offset)&&void 0!==t&&t,...Zi.errToObj(null===e||void 0===e?void 0:e.message)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...Zi.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:null===t||void 0===t?void 0:t.position,...Zi.errToObj(null===t||void 0===t?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...Zi.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...Zi.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...Zi.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...Zi.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...Zi.errToObj(t)})}nonempty(e){return this.min(1,Zi.errToObj(e))}trim(){return new oo({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new oo({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new oo({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find((e=>"datetime"===e.kind))}get isEmail(){return!!this._def.checks.find((e=>"email"===e.kind))}get isURL(){return!!this._def.checks.find((e=>"url"===e.kind))}get isEmoji(){return!!this._def.checks.find((e=>"emoji"===e.kind))}get isUUID(){return!!this._def.checks.find((e=>"uuid"===e.kind))}get isCUID(){return!!this._def.checks.find((e=>"cuid"===e.kind))}get isCUID2(){return!!this._def.checks.find((e=>"cuid2"===e.kind))}get isULID(){return!!this._def.checks.find((e=>"ulid"===e.kind))}get isIP(){return!!this._def.checks.find((e=>"ip"===e.kind))}get minLength(){let e=null;for(const t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}function ao(e,t){const n=(e.toString().split(".")[1]||"").length,r=(t.toString().split(".")[1]||"").length,i=n>r?n:r;return parseInt(e.toFixed(i).replace(".",""))%parseInt(t.toFixed(i).replace(".",""))/Math.pow(10,i)}oo.create=e=>{var t;return new oo({checks:[],typeName:Yo.ZodString,coerce:null!==(t=null===e||void 0===e?void 0:e.coerce)&&void 0!==t&&t,...Gi(e)})};class so extends Yi{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){this._def.coerce&&(e.data=Number(e.data));if(this._getType(e)!==Ti.number){const t=this._getOrReturnCtx(e);return Ui(t,{code:Oi.invalid_type,expected:Ti.number,received:t.parsedType}),Di}let t;const n=new Li;for(const r of this._def.checks)if("int"===r.kind)Pi.isInteger(e.data)||(t=this._getOrReturnCtx(e,t),Ui(t,{code:Oi.invalid_type,expected:"integer",received:"float",message:r.message}),n.dirty());else if("min"===r.kind){(r.inclusive?e.data<r.value:e.data<=r.value)&&(t=this._getOrReturnCtx(e,t),Ui(t,{code:Oi.too_small,minimum:r.value,type:"number",inclusive:r.inclusive,exact:!1,message:r.message}),n.dirty())}else if("max"===r.kind){(r.inclusive?e.data>r.value:e.data>=r.value)&&(t=this._getOrReturnCtx(e,t),Ui(t,{code:Oi.too_big,maximum:r.value,type:"number",inclusive:r.inclusive,exact:!1,message:r.message}),n.dirty())}else"multipleOf"===r.kind?0!==ao(e.data,r.value)&&(t=this._getOrReturnCtx(e,t),Ui(t,{code:Oi.not_multiple_of,multipleOf:r.value,message:r.message}),n.dirty()):"finite"===r.kind?Number.isFinite(e.data)||(t=this._getOrReturnCtx(e,t),Ui(t,{code:Oi.not_finite,message:r.message}),n.dirty()):Pi.assertNever(r);return{status:n.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,Zi.toString(t))}gt(e,t){return this.setLimit("min",e,!1,Zi.toString(t))}lte(e,t){return this.setLimit("max",e,!0,Zi.toString(t))}lt(e,t){return this.setLimit("max",e,!1,Zi.toString(t))}setLimit(e,t,n,r){return new so({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:n,message:Zi.toString(r)}]})}_addCheck(e){return new so({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:Zi.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:Zi.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:Zi.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:Zi.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:Zi.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:Zi.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:Zi.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:Zi.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:Zi.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find((e=>"int"===e.kind||"multipleOf"===e.kind&&Pi.isInteger(e.value)))}get isFinite(){let e=null,t=null;for(const n of this._def.checks){if("finite"===n.kind||"int"===n.kind||"multipleOf"===n.kind)return!0;"min"===n.kind?(null===t||n.value>t)&&(t=n.value):"max"===n.kind&&(null===e||n.value<e)&&(e=n.value)}return Number.isFinite(t)&&Number.isFinite(e)}}so.create=e=>new so({checks:[],typeName:Yo.ZodNumber,coerce:(null===e||void 0===e?void 0:e.coerce)||!1,...Gi(e)});class lo extends Yi{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){this._def.coerce&&(e.data=BigInt(e.data));if(this._getType(e)!==Ti.bigint){const t=this._getOrReturnCtx(e);return Ui(t,{code:Oi.invalid_type,expected:Ti.bigint,received:t.parsedType}),Di}let t;const n=new Li;for(const r of this._def.checks)if("min"===r.kind){(r.inclusive?e.data<r.value:e.data<=r.value)&&(t=this._getOrReturnCtx(e,t),Ui(t,{code:Oi.too_small,type:"bigint",minimum:r.value,inclusive:r.inclusive,message:r.message}),n.dirty())}else if("max"===r.kind){(r.inclusive?e.data>r.value:e.data>=r.value)&&(t=this._getOrReturnCtx(e,t),Ui(t,{code:Oi.too_big,type:"bigint",maximum:r.value,inclusive:r.inclusive,message:r.message}),n.dirty())}else"multipleOf"===r.kind?e.data%r.value!==BigInt(0)&&(t=this._getOrReturnCtx(e,t),Ui(t,{code:Oi.not_multiple_of,multipleOf:r.value,message:r.message}),n.dirty()):Pi.assertNever(r);return{status:n.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,Zi.toString(t))}gt(e,t){return this.setLimit("min",e,!1,Zi.toString(t))}lte(e,t){return this.setLimit("max",e,!0,Zi.toString(t))}lt(e,t){return this.setLimit("max",e,!1,Zi.toString(t))}setLimit(e,t,n,r){return new lo({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:n,message:Zi.toString(r)}]})}_addCheck(e){return new lo({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:Zi.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:Zi.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:Zi.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:Zi.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:Zi.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}lo.create=e=>{var t;return new lo({checks:[],typeName:Yo.ZodBigInt,coerce:null!==(t=null===e||void 0===e?void 0:e.coerce)&&void 0!==t&&t,...Gi(e)})};class co extends Yi{_parse(e){this._def.coerce&&(e.data=Boolean(e.data));if(this._getType(e)!==Ti.boolean){const t=this._getOrReturnCtx(e);return Ui(t,{code:Oi.invalid_type,expected:Ti.boolean,received:t.parsedType}),Di}return Fi(e.data)}}co.create=e=>new co({typeName:Yo.ZodBoolean,coerce:(null===e||void 0===e?void 0:e.coerce)||!1,...Gi(e)});class uo extends Yi{_parse(e){this._def.coerce&&(e.data=new Date(e.data));if(this._getType(e)!==Ti.date){const t=this._getOrReturnCtx(e);return Ui(t,{code:Oi.invalid_type,expected:Ti.date,received:t.parsedType}),Di}if(isNaN(e.data.getTime())){return Ui(this._getOrReturnCtx(e),{code:Oi.invalid_date}),Di}const t=new Li;let n;for(const r of this._def.checks)"min"===r.kind?e.data.getTime()<r.value&&(n=this._getOrReturnCtx(e,n),Ui(n,{code:Oi.too_small,message:r.message,inclusive:!0,exact:!1,minimum:r.value,type:"date"}),t.dirty()):"max"===r.kind?e.data.getTime()>r.value&&(n=this._getOrReturnCtx(e,n),Ui(n,{code:Oi.too_big,message:r.message,inclusive:!0,exact:!1,maximum:r.value,type:"date"}),t.dirty()):Pi.assertNever(r);return{status:t.value,value:new Date(e.data.getTime())}}_addCheck(e){return new uo({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:Zi.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:Zi.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return null!=e?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return null!=e?new Date(e):null}}uo.create=e=>new uo({checks:[],coerce:(null===e||void 0===e?void 0:e.coerce)||!1,typeName:Yo.ZodDate,...Gi(e)});class ho extends Yi{_parse(e){if(this._getType(e)!==Ti.symbol){const t=this._getOrReturnCtx(e);return Ui(t,{code:Oi.invalid_type,expected:Ti.symbol,received:t.parsedType}),Di}return Fi(e.data)}}ho.create=e=>new ho({typeName:Yo.ZodSymbol,...Gi(e)});class fo extends Yi{_parse(e){if(this._getType(e)!==Ti.undefined){const t=this._getOrReturnCtx(e);return Ui(t,{code:Oi.invalid_type,expected:Ti.undefined,received:t.parsedType}),Di}return Fi(e.data)}}fo.create=e=>new fo({typeName:Yo.ZodUndefined,...Gi(e)});class po extends Yi{_parse(e){if(this._getType(e)!==Ti.null){const t=this._getOrReturnCtx(e);return Ui(t,{code:Oi.invalid_type,expected:Ti.null,received:t.parsedType}),Di}return Fi(e.data)}}po.create=e=>new po({typeName:Yo.ZodNull,...Gi(e)});class mo extends Yi{constructor(){super(...arguments),this._any=!0}_parse(e){return Fi(e.data)}}mo.create=e=>new mo({typeName:Yo.ZodAny,...Gi(e)});class go extends Yi{constructor(){super(...arguments),this._unknown=!0}_parse(e){return Fi(e.data)}}go.create=e=>new go({typeName:Yo.ZodUnknown,...Gi(e)});class yo extends Yi{_parse(e){const t=this._getOrReturnCtx(e);return Ui(t,{code:Oi.invalid_type,expected:Ti.never,received:t.parsedType}),Di}}yo.create=e=>new yo({typeName:Yo.ZodNever,...Gi(e)});class vo extends Yi{_parse(e){if(this._getType(e)!==Ti.undefined){const t=this._getOrReturnCtx(e);return Ui(t,{code:Oi.invalid_type,expected:Ti.void,received:t.parsedType}),Di}return Fi(e.data)}}vo.create=e=>new vo({typeName:Yo.ZodVoid,...Gi(e)});class wo extends Yi{_parse(e){const{ctx:t,status:n}=this._processInputParams(e),r=this._def;if(t.parsedType!==Ti.array)return Ui(t,{code:Oi.invalid_type,expected:Ti.array,received:t.parsedType}),Di;if(null!==r.exactLength){const e=t.data.length>r.exactLength.value,i=t.data.length<r.exactLength.value;(e||i)&&(Ui(t,{code:e?Oi.too_big:Oi.too_small,minimum:i?r.exactLength.value:void 0,maximum:e?r.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:r.exactLength.message}),n.dirty())}if(null!==r.minLength&&t.data.length<r.minLength.value&&(Ui(t,{code:Oi.too_small,minimum:r.minLength.value,type:"array",inclusive:!0,exact:!1,message:r.minLength.message}),n.dirty()),null!==r.maxLength&&t.data.length>r.maxLength.value&&(Ui(t,{code:Oi.too_big,maximum:r.maxLength.value,type:"array",inclusive:!0,exact:!1,message:r.maxLength.message}),n.dirty()),t.common.async)return Promise.all([...t.data].map(((e,n)=>r.type._parseAsync(new Vi(t,e,t.path,n))))).then((e=>Li.mergeArray(n,e)));const i=[...t.data].map(((e,n)=>r.type._parseSync(new Vi(t,e,t.path,n))));return Li.mergeArray(n,i)}get element(){return this._def.type}min(e,t){return new wo({...this._def,minLength:{value:e,message:Zi.toString(t)}})}max(e,t){return new wo({...this._def,maxLength:{value:e,message:Zi.toString(t)}})}length(e,t){return new wo({...this._def,exactLength:{value:e,message:Zi.toString(t)}})}nonempty(e){return this.min(1,e)}}function bo(e){if(e instanceof xo){const t={};for(const n in e.shape){const r=e.shape[n];t[n]=Do.create(bo(r))}return new xo({...e._def,shape:()=>t})}return e instanceof wo?new wo({...e._def,type:bo(e.element)}):e instanceof Do?Do.create(bo(e.unwrap())):e instanceof Bo?Bo.create(bo(e.unwrap())):e instanceof Po?Po.create(e.items.map((e=>bo(e)))):e}wo.create=(e,t)=>new wo({type:e,minLength:null,maxLength:null,exactLength:null,typeName:Yo.ZodArray,...Gi(t)});class xo extends Yi{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(null!==this._cached)return this._cached;const e=this._def.shape(),t=Pi.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==Ti.object){const t=this._getOrReturnCtx(e);return Ui(t,{code:Oi.invalid_type,expected:Ti.object,received:t.parsedType}),Di}const{status:t,ctx:n}=this._processInputParams(e),{shape:r,keys:i}=this._getCached(),o=[];if(!(this._def.catchall instanceof yo&&"strip"===this._def.unknownKeys))for(const s in n.data)i.includes(s)||o.push(s);const a=[];for(const s of i){const e=r[s],t=n.data[s];a.push({key:{status:"valid",value:s},value:e._parse(new Vi(n,t,n.path,s)),alwaysSet:s in n.data})}if(this._def.catchall instanceof yo){const e=this._def.unknownKeys;if("passthrough"===e)for(const t of o)a.push({key:{status:"valid",value:t},value:{status:"valid",value:n.data[t]}});else if("strict"===e)o.length>0&&(Ui(n,{code:Oi.unrecognized_keys,keys:o}),t.dirty());else if("strip"!==e)throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const e=this._def.catchall;for(const t of o){const r=n.data[t];a.push({key:{status:"valid",value:t},value:e._parse(new Vi(n,r,n.path,t)),alwaysSet:t in n.data})}}return n.common.async?Promise.resolve().then((async()=>{const e=[];for(const t of a){const n=await t.key;e.push({key:n,value:await t.value,alwaysSet:t.alwaysSet})}return e})).then((e=>Li.mergeObjectSync(t,e))):Li.mergeObjectSync(t,a)}get shape(){return this._def.shape()}strict(e){return Zi.errToObj,new xo({...this._def,unknownKeys:"strict",...void 0!==e?{errorMap:(t,n)=>{var r,i,o,a;const s=null!==(o=null===(i=(r=this._def).errorMap)||void 0===i?void 0:i.call(r,t,n).message)&&void 0!==o?o:n.defaultError;return"unrecognized_keys"===t.code?{message:null!==(a=Zi.errToObj(e).message)&&void 0!==a?a:s}:{message:s}}}:{}})}strip(){return new xo({...this._def,unknownKeys:"strip"})}passthrough(){return new xo({...this._def,unknownKeys:"passthrough"})}extend(e){return new xo({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new xo({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:Yo.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new xo({...this._def,catchall:e})}pick(e){const t={};return Pi.objectKeys(e).forEach((n=>{e[n]&&this.shape[n]&&(t[n]=this.shape[n])})),new xo({...this._def,shape:()=>t})}omit(e){const t={};return Pi.objectKeys(this.shape).forEach((n=>{e[n]||(t[n]=this.shape[n])})),new xo({...this._def,shape:()=>t})}deepPartial(){return bo(this)}partial(e){const t={};return Pi.objectKeys(this.shape).forEach((n=>{const r=this.shape[n];e&&!e[n]?t[n]=r:t[n]=r.optional()})),new xo({...this._def,shape:()=>t})}required(e){const t={};return Pi.objectKeys(this.shape).forEach((n=>{if(e&&!e[n])t[n]=this.shape[n];else{let e=this.shape[n];for(;e instanceof Do;)e=e._def.innerType;t[n]=e}})),new xo({...this._def,shape:()=>t})}keyof(){return Mo(Pi.objectKeys(this.shape))}}xo.create=(e,t)=>new xo({shape:()=>e,unknownKeys:"strip",catchall:yo.create(),typeName:Yo.ZodObject,...Gi(t)}),xo.strictCreate=(e,t)=>new xo({shape:()=>e,unknownKeys:"strict",catchall:yo.create(),typeName:Yo.ZodObject,...Gi(t)}),xo.lazycreate=(e,t)=>new xo({shape:e,unknownKeys:"strip",catchall:yo.create(),typeName:Yo.ZodObject,...Gi(t)});class Eo extends Yi{_parse(e){const{ctx:t}=this._processInputParams(e),n=this._def.options;if(t.common.async)return Promise.all(n.map((async e=>{const n={...t,common:{...t.common,issues:[]},parent:null};return{result:await e._parseAsync({data:t.data,path:t.path,parent:n}),ctx:n}}))).then((function(e){for(const t of e)if("valid"===t.result.status)return t.result;for(const r of e)if("dirty"===r.result.status)return t.common.issues.push(...r.ctx.common.issues),r.result;const n=e.map((e=>new Ni(e.ctx.common.issues)));return Ui(t,{code:Oi.invalid_union,unionErrors:n}),Di}));{let e;const r=[];for(const o of n){const n={...t,common:{...t.common,issues:[]},parent:null},i=o._parseSync({data:t.data,path:t.path,parent:n});if("valid"===i.status)return i;"dirty"!==i.status||e||(e={result:i,ctx:n}),n.common.issues.length&&r.push(n.common.issues)}if(e)return t.common.issues.push(...e.ctx.common.issues),e.result;const i=r.map((e=>new Ni(e)));return Ui(t,{code:Oi.invalid_union,unionErrors:i}),Di}}get options(){return this._def.options}}Eo.create=(e,t)=>new Eo({options:e,typeName:Yo.ZodUnion,...Gi(t)});const Co=e=>e instanceof No?Co(e.schema):e instanceof Lo?Co(e.innerType()):e instanceof Ro?[e.value]:e instanceof $o?e.options:e instanceof jo?Object.keys(e.enum):e instanceof Fo?Co(e._def.innerType):e instanceof fo?[void 0]:e instanceof po?[null]:null;class ko extends Yi{_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==Ti.object)return Ui(t,{code:Oi.invalid_type,expected:Ti.object,received:t.parsedType}),Di;const n=this.discriminator,r=t.data[n],i=this.optionsMap.get(r);return i?t.common.async?i._parseAsync({data:t.data,path:t.path,parent:t}):i._parseSync({data:t.data,path:t.path,parent:t}):(Ui(t,{code:Oi.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[n]}),Di)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,n){const r=new Map;for(const i of t){const t=Co(i.shape[e]);if(!t)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const n of t){if(r.has(n))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(n)}`);r.set(n,i)}}return new ko({typeName:Yo.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:r,...Gi(n)})}}function _o(e,t){const n=Ii(e),r=Ii(t);if(e===t)return{valid:!0,data:e};if(n===Ti.object&&r===Ti.object){const n=Pi.objectKeys(t),r=Pi.objectKeys(e).filter((e=>-1!==n.indexOf(e))),i={...e,...t};for(const o of r){const n=_o(e[o],t[o]);if(!n.valid)return{valid:!1};i[o]=n.data}return{valid:!0,data:i}}if(n===Ti.array&&r===Ti.array){if(e.length!==t.length)return{valid:!1};const n=[];for(let r=0;r<e.length;r++){const i=_o(e[r],t[r]);if(!i.valid)return{valid:!1};n.push(i.data)}return{valid:!0,data:n}}return n===Ti.date&&r===Ti.date&&+e===+t?{valid:!0,data:e}:{valid:!1}}class So extends Yi{_parse(e){const{status:t,ctx:n}=this._processInputParams(e),r=(e,r)=>{if(Wi(e)||Wi(r))return Di;const i=_o(e.value,r.value);return i.valid?((zi(e)||zi(r))&&t.dirty(),{status:t.value,value:i.data}):(Ui(n,{code:Oi.invalid_intersection_types}),Di)};return n.common.async?Promise.all([this._def.left._parseAsync({data:n.data,path:n.path,parent:n}),this._def.right._parseAsync({data:n.data,path:n.path,parent:n})]).then((e=>{let[t,n]=e;return r(t,n)})):r(this._def.left._parseSync({data:n.data,path:n.path,parent:n}),this._def.right._parseSync({data:n.data,path:n.path,parent:n}))}}So.create=(e,t,n)=>new So({left:e,right:t,typeName:Yo.ZodIntersection,...Gi(n)});class Po extends Yi{_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==Ti.array)return Ui(n,{code:Oi.invalid_type,expected:Ti.array,received:n.parsedType}),Di;if(n.data.length<this._def.items.length)return Ui(n,{code:Oi.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Di;!this._def.rest&&n.data.length>this._def.items.length&&(Ui(n,{code:Oi.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const r=[...n.data].map(((e,t)=>{const r=this._def.items[t]||this._def.rest;return r?r._parse(new Vi(n,e,n.path,t)):null})).filter((e=>!!e));return n.common.async?Promise.all(r).then((e=>Li.mergeArray(t,e))):Li.mergeArray(t,r)}get items(){return this._def.items}rest(e){return new Po({...this._def,rest:e})}}Po.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Po({items:e,typeName:Yo.ZodTuple,rest:null,...Gi(t)})};class Ao extends Yi{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==Ti.object)return Ui(n,{code:Oi.invalid_type,expected:Ti.object,received:n.parsedType}),Di;const r=[],i=this._def.keyType,o=this._def.valueType;for(const a in n.data)r.push({key:i._parse(new Vi(n,a,n.path,a)),value:o._parse(new Vi(n,n.data[a],n.path,a))});return n.common.async?Li.mergeObjectAsync(t,r):Li.mergeObjectSync(t,r)}get element(){return this._def.valueType}static create(e,t,n){return new Ao(t instanceof Yi?{keyType:e,valueType:t,typeName:Yo.ZodRecord,...Gi(n)}:{keyType:oo.create(),valueType:e,typeName:Yo.ZodRecord,...Gi(t)})}}class To extends Yi{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==Ti.map)return Ui(n,{code:Oi.invalid_type,expected:Ti.map,received:n.parsedType}),Di;const r=this._def.keyType,i=this._def.valueType,o=[...n.data.entries()].map(((e,t)=>{let[o,a]=e;return{key:r._parse(new Vi(n,o,n.path,[t,"key"])),value:i._parse(new Vi(n,a,n.path,[t,"value"]))}}));if(n.common.async){const e=new Map;return Promise.resolve().then((async()=>{for(const n of o){const r=await n.key,i=await n.value;if("aborted"===r.status||"aborted"===i.status)return Di;"dirty"!==r.status&&"dirty"!==i.status||t.dirty(),e.set(r.value,i.value)}return{status:t.value,value:e}}))}{const e=new Map;for(const n of o){const r=n.key,i=n.value;if("aborted"===r.status||"aborted"===i.status)return Di;"dirty"!==r.status&&"dirty"!==i.status||t.dirty(),e.set(r.value,i.value)}return{status:t.value,value:e}}}}To.create=(e,t,n)=>new To({valueType:t,keyType:e,typeName:Yo.ZodMap,...Gi(n)});class Io extends Yi{_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==Ti.set)return Ui(n,{code:Oi.invalid_type,expected:Ti.set,received:n.parsedType}),Di;const r=this._def;null!==r.minSize&&n.data.size<r.minSize.value&&(Ui(n,{code:Oi.too_small,minimum:r.minSize.value,type:"set",inclusive:!0,exact:!1,message:r.minSize.message}),t.dirty()),null!==r.maxSize&&n.data.size>r.maxSize.value&&(Ui(n,{code:Oi.too_big,maximum:r.maxSize.value,type:"set",inclusive:!0,exact:!1,message:r.maxSize.message}),t.dirty());const i=this._def.valueType;function o(e){const n=new Set;for(const r of e){if("aborted"===r.status)return Di;"dirty"===r.status&&t.dirty(),n.add(r.value)}return{status:t.value,value:n}}const a=[...n.data.values()].map(((e,t)=>i._parse(new Vi(n,e,n.path,t))));return n.common.async?Promise.all(a).then((e=>o(e))):o(a)}min(e,t){return new Io({...this._def,minSize:{value:e,message:Zi.toString(t)}})}max(e,t){return new Io({...this._def,maxSize:{value:e,message:Zi.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}Io.create=(e,t)=>new Io({valueType:e,minSize:null,maxSize:null,typeName:Yo.ZodSet,...Gi(t)});class Oo extends Yi{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==Ti.function)return Ui(t,{code:Oi.invalid_type,expected:Ti.function,received:t.parsedType}),Di;function n(e,n){return ji({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,$i(),Ri].filter((e=>!!e)),issueData:{code:Oi.invalid_arguments,argumentsError:n}})}function r(e,n){return ji({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,$i(),Ri].filter((e=>!!e)),issueData:{code:Oi.invalid_return_type,returnTypeError:n}})}const i={errorMap:t.common.contextualErrorMap},o=t.data;if(this._def.returns instanceof Uo){const e=this;return Fi((async function(){for(var t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];const l=new Ni([]),c=await e._def.args.parseAsync(a,i).catch((e=>{throw l.addIssue(n(a,e)),l})),u=await Reflect.apply(o,this,c);return await e._def.returns._def.type.parseAsync(u,i).catch((e=>{throw l.addIssue(r(u,e)),l}))}))}{const e=this;return Fi((function(){for(var t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];const l=e._def.args.safeParse(a,i);if(!l.success)throw new Ni([n(a,l.error)]);const c=Reflect.apply(o,this,l.data),u=e._def.returns.safeParse(c,i);if(!u.success)throw new Ni([r(c,u.error)]);return u.data}))}}parameters(){return this._def.args}returnType(){return this._def.returns}args(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new Oo({...this._def,args:Po.create(t).rest(go.create())})}returns(e){return new Oo({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,n){return new Oo({args:e||Po.create([]).rest(go.create()),returns:t||go.create(),typeName:Yo.ZodFunction,...Gi(n)})}}class No extends Yi{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}No.create=(e,t)=>new No({getter:e,typeName:Yo.ZodLazy,...Gi(t)});class Ro extends Yi{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return Ui(t,{received:t.data,code:Oi.invalid_literal,expected:this._def.value}),Di}return{status:"valid",value:e.data}}get value(){return this._def.value}}function Mo(e,t){return new $o({values:e,typeName:Yo.ZodEnum,...Gi(t)})}Ro.create=(e,t)=>new Ro({value:e,typeName:Yo.ZodLiteral,...Gi(t)});class $o extends Yi{_parse(e){if("string"!==typeof e.data){const t=this._getOrReturnCtx(e),n=this._def.values;return Ui(t,{expected:Pi.joinValues(n),received:t.parsedType,code:Oi.invalid_type}),Di}if(-1===this._def.values.indexOf(e.data)){const t=this._getOrReturnCtx(e),n=this._def.values;return Ui(t,{received:t.data,code:Oi.invalid_enum_value,options:n}),Di}return Fi(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e){return $o.create(e)}exclude(e){return $o.create(this.options.filter((t=>!e.includes(t))))}}$o.create=Mo;class jo extends Yi{_parse(e){const t=Pi.getValidEnumValues(this._def.values),n=this._getOrReturnCtx(e);if(n.parsedType!==Ti.string&&n.parsedType!==Ti.number){const e=Pi.objectValues(t);return Ui(n,{expected:Pi.joinValues(e),received:n.parsedType,code:Oi.invalid_type}),Di}if(-1===t.indexOf(e.data)){const e=Pi.objectValues(t);return Ui(n,{received:n.data,code:Oi.invalid_enum_value,options:e}),Di}return Fi(e.data)}get enum(){return this._def.values}}jo.create=(e,t)=>new jo({values:e,typeName:Yo.ZodNativeEnum,...Gi(t)});class Uo extends Yi{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==Ti.promise&&!1===t.common.async)return Ui(t,{code:Oi.invalid_type,expected:Ti.promise,received:t.parsedType}),Di;const n=t.parsedType===Ti.promise?t.data:Promise.resolve(t.data);return Fi(n.then((e=>this._def.type.parseAsync(e,{path:t.path,errorMap:t.common.contextualErrorMap}))))}}Uo.create=(e,t)=>new Uo({type:e,typeName:Yo.ZodPromise,...Gi(t)});class Lo extends Yi{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Yo.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:n}=this._processInputParams(e),r=this._def.effect||null,i={addIssue:e=>{Ui(n,e),e.fatal?t.abort():t.dirty()},get path(){return n.path}};if(i.addIssue=i.addIssue.bind(i),"preprocess"===r.type){const e=r.transform(n.data,i);return n.common.issues.length?{status:"dirty",value:n.data}:n.common.async?Promise.resolve(e).then((e=>this._def.schema._parseAsync({data:e,path:n.path,parent:n}))):this._def.schema._parseSync({data:e,path:n.path,parent:n})}if("refinement"===r.type){const e=e=>{const t=r.refinement(e,i);if(n.common.async)return Promise.resolve(t);if(t instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return e};if(!1===n.common.async){const r=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});return"aborted"===r.status?Di:("dirty"===r.status&&t.dirty(),e(r.value),{status:t.value,value:r.value})}return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then((n=>"aborted"===n.status?Di:("dirty"===n.status&&t.dirty(),e(n.value).then((()=>({status:t.value,value:n.value}))))))}if("transform"===r.type){if(!1===n.common.async){const e=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(!qi(e))return e;const o=r.transform(e.value,i);if(o instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:o}}return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then((e=>qi(e)?Promise.resolve(r.transform(e.value,i)).then((e=>({status:t.value,value:e}))):e))}Pi.assertNever(r)}}Lo.create=(e,t,n)=>new Lo({schema:e,typeName:Yo.ZodEffects,effect:t,...Gi(n)}),Lo.createWithPreprocess=(e,t,n)=>new Lo({schema:t,effect:{type:"preprocess",transform:e},typeName:Yo.ZodEffects,...Gi(n)});class Do extends Yi{_parse(e){return this._getType(e)===Ti.undefined?Fi(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Do.create=(e,t)=>new Do({innerType:e,typeName:Yo.ZodOptional,...Gi(t)});class Bo extends Yi{_parse(e){return this._getType(e)===Ti.null?Fi(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Bo.create=(e,t)=>new Bo({innerType:e,typeName:Yo.ZodNullable,...Gi(t)});class Fo extends Yi{_parse(e){const{ctx:t}=this._processInputParams(e);let n=t.data;return t.parsedType===Ti.undefined&&(n=this._def.defaultValue()),this._def.innerType._parse({data:n,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}Fo.create=(e,t)=>new Fo({innerType:e,typeName:Yo.ZodDefault,defaultValue:"function"===typeof t.default?t.default:()=>t.default,...Gi(t)});class Wo extends Yi{_parse(e){const{ctx:t}=this._processInputParams(e),n={...t,common:{...t.common,issues:[]}},r=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n}});return Hi(r)?r.then((e=>({status:"valid",value:"valid"===e.status?e.value:this._def.catchValue({get error(){return new Ni(n.common.issues)},input:n.data})}))):{status:"valid",value:"valid"===r.status?r.value:this._def.catchValue({get error(){return new Ni(n.common.issues)},input:n.data})}}removeCatch(){return this._def.innerType}}Wo.create=(e,t)=>new Wo({innerType:e,typeName:Yo.ZodCatch,catchValue:"function"===typeof t.catch?t.catch:()=>t.catch,...Gi(t)});class zo extends Yi{_parse(e){if(this._getType(e)!==Ti.nan){const t=this._getOrReturnCtx(e);return Ui(t,{code:Oi.invalid_type,expected:Ti.nan,received:t.parsedType}),Di}return{status:"valid",value:e.data}}}zo.create=e=>new zo({typeName:Yo.ZodNaN,...Gi(e)});const qo=Symbol("zod_brand");class Ho extends Yi{_parse(e){const{ctx:t}=this._processInputParams(e),n=t.data;return this._def.type._parse({data:n,path:t.path,parent:t})}unwrap(){return this._def.type}}class Zo extends Yi{_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.common.async){return(async()=>{const e=await this._def.in._parseAsync({data:n.data,path:n.path,parent:n});return"aborted"===e.status?Di:"dirty"===e.status?(t.dirty(),Bi(e.value)):this._def.out._parseAsync({data:e.value,path:n.path,parent:n})})()}{const e=this._def.in._parseSync({data:n.data,path:n.path,parent:n});return"aborted"===e.status?Di:"dirty"===e.status?(t.dirty(),{status:"dirty",value:e.value}):this._def.out._parseSync({data:e.value,path:n.path,parent:n})}}static create(e,t){return new Zo({in:e,out:t,typeName:Yo.ZodPipeline})}}class Vo extends Yi{_parse(e){const t=this._def.innerType._parse(e);return qi(t)&&(t.value=Object.freeze(t.value)),t}}Vo.create=(e,t)=>new Vo({innerType:e,typeName:Yo.ZodReadonly,...Gi(t)});const Ko=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return e?mo.create().superRefine(((r,i)=>{var o,a;if(!e(r)){const e="function"===typeof t?t(r):"string"===typeof t?{message:t}:t,s=null===(a=null!==(o=e.fatal)&&void 0!==o?o:n)||void 0===a||a,l="string"===typeof e?{message:e}:e;i.addIssue({code:"custom",...l,fatal:s})}})):mo.create()},Go={object:xo.lazycreate};var Yo;!function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline",e.ZodReadonly="ZodReadonly"}(Yo||(Yo={}));const Jo=oo.create,Qo=so.create,Xo=zo.create,ea=lo.create,ta=co.create,na=uo.create,ra=ho.create,ia=fo.create,oa=po.create,aa=mo.create,sa=go.create,la=yo.create,ca=vo.create,ua=wo.create,da=xo.create,ha=xo.strictCreate,fa=Eo.create,pa=ko.create,ma=So.create,ga=Po.create,ya=Ao.create,va=To.create,wa=Io.create,ba=Oo.create,xa=No.create,Ea=Ro.create,Ca=$o.create,ka=jo.create,_a=Uo.create,Sa=Lo.create,Pa=Do.create,Aa=Bo.create,Ta=Lo.createWithPreprocess,Ia=Zo.create,Oa={string:e=>oo.create({...e,coerce:!0}),number:e=>so.create({...e,coerce:!0}),boolean:e=>co.create({...e,coerce:!0}),bigint:e=>lo.create({...e,coerce:!0}),date:e=>uo.create({...e,coerce:!0})},Na=Di;var Ra=Object.freeze({__proto__:null,defaultErrorMap:Ri,setErrorMap:function(e){Mi=e},getErrorMap:$i,makeIssue:ji,EMPTY_PATH:[],addIssueToContext:Ui,ParseStatus:Li,INVALID:Di,DIRTY:Bi,OK:Fi,isAborted:Wi,isDirty:zi,isValid:qi,isAsync:Hi,get util(){return Pi},get objectUtil(){return Ai},ZodParsedType:Ti,getParsedType:Ii,ZodType:Yi,ZodString:oo,ZodNumber:so,ZodBigInt:lo,ZodBoolean:co,ZodDate:uo,ZodSymbol:ho,ZodUndefined:fo,ZodNull:po,ZodAny:mo,ZodUnknown:go,ZodNever:yo,ZodVoid:vo,ZodArray:wo,ZodObject:xo,ZodUnion:Eo,ZodDiscriminatedUnion:ko,ZodIntersection:So,ZodTuple:Po,ZodRecord:Ao,ZodMap:To,ZodSet:Io,ZodFunction:Oo,ZodLazy:No,ZodLiteral:Ro,ZodEnum:$o,ZodNativeEnum:jo,ZodPromise:Uo,ZodEffects:Lo,ZodTransformer:Lo,ZodOptional:Do,ZodNullable:Bo,ZodDefault:Fo,ZodCatch:Wo,ZodNaN:zo,BRAND:qo,ZodBranded:Ho,ZodPipeline:Zo,ZodReadonly:Vo,custom:Ko,Schema:Yi,ZodSchema:Yi,late:Go,get ZodFirstPartyTypeKind(){return Yo},coerce:Oa,any:aa,array:ua,bigint:ea,boolean:ta,date:na,discriminatedUnion:pa,effect:Sa,enum:Ca,function:ba,instanceof:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{message:`Input not instance of ${e.name}`};return Ko((t=>t instanceof e),t)},intersection:ma,lazy:xa,literal:Ea,map:va,nan:Xo,nativeEnum:ka,never:la,null:oa,nullable:Aa,number:Qo,object:da,oboolean:()=>ta().optional(),onumber:()=>Qo().optional(),optional:Pa,ostring:()=>Jo().optional(),pipeline:Ia,preprocess:Ta,promise:_a,record:ya,set:wa,strictObject:ha,string:Jo,symbol:ra,transformer:Sa,tuple:ga,undefined:ia,union:fa,unknown:sa,void:ca,NEVER:Na,ZodIssueCode:Oi,quotelessJson:e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:"),ZodError:Ni});const Ma=Ra.object({message:Ra.string()});function $a(e){return Ra.literal(_i[e])}Ra.object({accessList:Ra.array(Ra.string()),blockHash:Ra.string().nullable(),blockNumber:Ra.string().nullable(),chainId:Ra.string(),from:Ra.string(),gas:Ra.string(),hash:Ra.string(),input:Ra.string().nullable(),maxFeePerGas:Ra.string(),maxPriorityFeePerGas:Ra.string(),nonce:Ra.string(),r:Ra.string(),s:Ra.string(),to:Ra.string(),transactionIndex:Ra.string().nullable(),type:Ra.string(),v:Ra.string(),value:Ra.string()});const ja=Ra.object({chainId:Ra.number()}),Ua=Ra.object({email:Ra.string().email()}),La=Ra.object({otp:Ra.string()}),Da=Ra.object({chainId:Ra.optional(Ra.number())}),Ba=Ra.object({email:Ra.string().email()}),Fa=Ra.object({themeMode:Ra.optional(Ra.enum(["light","dark"])),themeVariables:Ra.optional(Ra.record(Ra.string(),Ra.string().or(Ra.number())))}),Wa=Ra.object({metadata:Ra.object({name:Ra.string(),description:Ra.string(),url:Ra.string(),icons:Ra.array(Ra.string())}).optional(),sdkVersion:Ra.string(),projectId:Ra.string()}),za=Ra.object({action:Ra.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),qa=Ra.object({email:Ra.string().email(),address:Ra.string(),chainId:Ra.number()}),Ha=Ra.object({isConnected:Ra.boolean()}),Za=Ra.object({chainId:Ra.number()}),Va=Ra.object({chainId:Ra.number()}),Ka=Ra.object({email:Ra.string().email()}),Ga=Ra.any(),Ya=Ra.object({method:Ra.literal("personal_sign"),params:Ra.array(Ra.any())}),Ja=Ra.object({method:Ra.literal("eth_sendTransaction"),params:Ra.array(Ra.any())}),Qa=Ra.object({method:Ra.literal("eth_accounts")}),Xa=Ra.object({method:Ra.literal("eth_getBalance"),params:Ra.array(Ra.any())}),es=Ra.object({method:Ra.literal("eth_estimateGas"),params:Ra.array(Ra.any())}),ts=Ra.object({method:Ra.literal("eth_gasPrice")}),ns=Ra.object({method:Ra.literal("eth_signTypedData_v4"),params:Ra.array(Ra.any())}),rs=Ra.object({method:Ra.literal("eth_getTransactionByHash"),params:Ra.array(Ra.any())}),is=Ra.object({method:Ra.literal("eth_blockNumber")}),os=Ra.object({method:Ra.literal("eth_chainId")}),as=Ra.object({token:Ra.string()}),ss={appEvent:Ra.object({type:$a("APP_SWITCH_NETWORK"),payload:ja}).or(Ra.object({type:$a("APP_CONNECT_EMAIL"),payload:Ua})).or(Ra.object({type:$a("APP_CONNECT_DEVICE")})).or(Ra.object({type:$a("APP_CONNECT_OTP"),payload:La})).or(Ra.object({type:$a("APP_GET_USER"),payload:Ra.optional(Da)})).or(Ra.object({type:$a("APP_SIGN_OUT")})).or(Ra.object({type:$a("APP_IS_CONNECTED"),payload:Ra.optional(as)})).or(Ra.object({type:$a("APP_GET_CHAIN_ID")})).or(Ra.object({type:$a("APP_RPC_REQUEST"),payload:Ya.or(Ja).or(Qa).or(Xa).or(es).or(ts).or(ns).or(is).or(os).or(rs)})).or(Ra.object({type:$a("APP_UPDATE_EMAIL"),payload:Ba})).or(Ra.object({type:$a("APP_AWAIT_UPDATE_EMAIL")})).or(Ra.object({type:$a("APP_SYNC_THEME"),payload:Fa})).or(Ra.object({type:$a("APP_SYNC_DAPP_DATA"),payload:Wa})),frameEvent:Ra.object({type:$a("FRAME_SWITCH_NETWORK_ERROR"),payload:Ma}).or(Ra.object({type:$a("FRAME_SWITCH_NETWORK_SUCCESS"),payload:Va})).or(Ra.object({type:$a("FRAME_CONNECT_EMAIL_ERROR"),payload:Ma})).or(Ra.object({type:$a("FRAME_CONNECT_EMAIL_SUCCESS"),payload:za})).or(Ra.object({type:$a("FRAME_CONNECT_OTP_ERROR"),payload:Ma})).or(Ra.object({type:$a("FRAME_CONNECT_OTP_SUCCESS")})).or(Ra.object({type:$a("FRAME_CONNECT_DEVICE_ERROR"),payload:Ma})).or(Ra.object({type:$a("FRAME_CONNECT_DEVICE_SUCCESS")})).or(Ra.object({type:$a("FRAME_GET_USER_ERROR"),payload:Ma})).or(Ra.object({type:$a("FRAME_GET_USER_SUCCESS"),payload:qa})).or(Ra.object({type:$a("FRAME_SIGN_OUT_ERROR"),payload:Ma})).or(Ra.object({type:$a("FRAME_SIGN_OUT_SUCCESS")})).or(Ra.object({type:$a("FRAME_IS_CONNECTED_ERROR"),payload:Ma})).or(Ra.object({type:$a("FRAME_IS_CONNECTED_SUCCESS"),payload:Ha})).or(Ra.object({type:$a("FRAME_GET_CHAIN_ID_ERROR"),payload:Ma})).or(Ra.object({type:$a("FRAME_GET_CHAIN_ID_SUCCESS"),payload:Za})).or(Ra.object({type:$a("FRAME_RPC_REQUEST_ERROR"),payload:Ma})).or(Ra.object({type:$a("FRAME_RPC_REQUEST_SUCCESS"),payload:Ga})).or(Ra.object({type:$a("FRAME_SESSION_UPDATE"),payload:as})).or(Ra.object({type:$a("FRAME_UPDATE_EMAIL_ERROR"),payload:Ma})).or(Ra.object({type:$a("FRAME_UPDATE_EMAIL_SUCCESS")})).or(Ra.object({type:$a("FRAME_AWAIT_UPDATE_EMAIL_ERROR"),payload:Ma})).or(Ra.object({type:$a("FRAME_AWAIT_UPDATE_EMAIL_SUCCESS"),payload:Ka})).or(Ra.object({type:$a("FRAME_SYNC_THEME_ERROR"),payload:Ma})).or(Ra.object({type:$a("FRAME_SYNC_THEME_SUCCESS")})).or(Ra.object({type:$a("FRAME_SYNC_DAPP_DATA_ERROR"),payload:Ma})).or(Ra.object({type:$a("FRAME_SYNC_DAPP_DATA_SUCCESS")}))},ls={set(e,t){localStorage.setItem(`${_i.STORAGE_KEY}${e}`,t)},get:e=>localStorage.getItem(`${_i.STORAGE_KEY}${e}`),delete(e){localStorage.removeItem(`${_i.STORAGE_KEY}${e}`)}},cs=["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],us=3e4,ds={getBlockchainApiUrl(){try{const{timeZone:e}=(new Intl.DateTimeFormat).resolvedOptions(),t=e.toUpperCase();return cs.includes(t)?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"}catch{return!1}},checkIfAllowedToTriggerEmail(){const e=ls.get(_i.LAST_EMAIL_LOGIN_TIME);if(e){const t=Date.now()-Number(e);if(t<us){const e=Math.ceil((us-t)/1e3);throw new Error(`Please try again after ${e} seconds`)}}},getTimeToNextEmailLogin(){const e=ls.get(_i.LAST_EMAIL_LOGIN_TIME);if(e){const t=Date.now()-Number(e);if(t<us)return Math.ceil((us-t)/1e3)}return 0}};class hs{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.iframe=null,this.rpcUrl=ds.getBlockchainApiUrl(),this.events={onFrameEvent:e=>{window.addEventListener("message",(t=>{let{data:n}=t;if(!n.type?.includes(_i.FRAME_EVENT_KEY))return;const r=ss.frameEvent.parse(n);e(r)}))},onAppEvent:e=>{window.addEventListener("message",(t=>{let{data:n}=t;if(!n.type?.includes(_i.APP_EVENT_KEY))return;const r=ss.appEvent.parse(n);e(r)}))},postAppEvent:e=>{if(!this.iframe?.contentWindow)throw new Error("W3mFrame: iframe is not set");ss.appEvent.parse(e),window.postMessage(e),this.iframe.contentWindow.postMessage(e,"*")},postFrameEvent:e=>{if(!parent)throw new Error("W3mFrame: parent is not set");ss.frameEvent.parse(e),parent.postMessage(e,"*")}},this.projectId=e,this.frameLoadPromise=new Promise(((e,t)=>{this.frameLoadPromiseResolver={resolve:e,reject:t}})),t){this.frameLoadPromise=new Promise(((e,t)=>{this.frameLoadPromiseResolver={resolve:e,reject:t}}));const t=document.createElement("iframe");t.id="w3m-iframe",t.src=`${_i.SECURE_SITE_SDK}?projectId=${e}`,t.style.position="fixed",t.style.zIndex="999999",t.style.display="none",t.style.opacity="0",t.style.borderRadius="clamp(0px, var(--wui-border-radius-l), 44px)",document.body.appendChild(t),this.iframe=t,this.iframe.onload=()=>{this.frameLoadPromiseResolver?.resolve(void 0)},this.iframe.onerror=()=>{this.frameLoadPromiseResolver?.reject("Unable to load email login dependency")}}}get networks(){const e=[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,324,280,100,8453,84531,7777777,999].map((e=>({[e]:{rpcUrl:`${this.rpcUrl}/v1/?chainId=eip155:${e}&projectId=${this.projectId}`,chainId:e}})));return Object.assign({},...e)}}class fs{constructor(e){this.connectEmailResolver=void 0,this.connectDeviceResolver=void 0,this.connectOtpResolver=void 0,this.connectResolver=void 0,this.disconnectResolver=void 0,this.isConnectedResolver=void 0,this.getChainIdResolver=void 0,this.switchChainResolver=void 0,this.rpcRequestResolver=void 0,this.updateEmailResolver=void 0,this.awaitUpdateEmailResolver=void 0,this.syncThemeResolver=void 0,this.syncDappDataResolver=void 0,this.w3mFrame=new hs(e,!0),this.w3mFrame.events.onFrameEvent((e=>{switch(console.log("\ud83d\udcbb received",e),e.type){case _i.FRAME_CONNECT_EMAIL_SUCCESS:return this.onConnectEmailSuccess(e);case _i.FRAME_CONNECT_EMAIL_ERROR:return this.onConnectEmailError(e);case _i.FRAME_CONNECT_DEVICE_SUCCESS:return this.onConnectDeviceSuccess();case _i.FRAME_CONNECT_DEVICE_ERROR:return this.onConnectDeviceError(e);case _i.FRAME_CONNECT_OTP_SUCCESS:return this.onConnectOtpSuccess();case _i.FRAME_CONNECT_OTP_ERROR:return this.onConnectOtpError(e);case _i.FRAME_GET_USER_SUCCESS:return this.onConnectSuccess(e);case _i.FRAME_GET_USER_ERROR:return this.onConnectError(e);case _i.FRAME_IS_CONNECTED_SUCCESS:return this.onIsConnectedSuccess(e);case _i.FRAME_IS_CONNECTED_ERROR:return this.onIsConnectedError(e);case _i.FRAME_GET_CHAIN_ID_SUCCESS:return this.onGetChainIdSuccess(e);case _i.FRAME_GET_CHAIN_ID_ERROR:return this.onGetChainIdError(e);case _i.FRAME_SIGN_OUT_SUCCESS:return this.onSignOutSuccess();case _i.FRAME_SIGN_OUT_ERROR:return this.onSignOutError(e);case _i.FRAME_SWITCH_NETWORK_SUCCESS:return this.onSwitchChainSuccess(e);case _i.FRAME_SWITCH_NETWORK_ERROR:return this.onSwitchChainError(e);case _i.FRAME_RPC_REQUEST_SUCCESS:return this.onRpcRequestSuccess(e);case _i.FRAME_RPC_REQUEST_ERROR:return this.onRpcRequestError(e);case _i.FRAME_SESSION_UPDATE:return this.onSessionUpdate(e);case _i.FRAME_UPDATE_EMAIL_SUCCESS:return this.onUpdateEmailSuccess();case _i.FRAME_UPDATE_EMAIL_ERROR:return this.onUpdateEmailError(e);case _i.FRAME_AWAIT_UPDATE_EMAIL_SUCCESS:return this.onAwaitUpdateEmailSuccess(e);case _i.FRAME_AWAIT_UPDATE_EMAIL_ERROR:return this.onAwaitUpdateEmailError(e);case _i.FRAME_SYNC_THEME_SUCCESS:return this.onSyncThemeSuccess();case _i.FRAME_SYNC_THEME_ERROR:return this.onSyncThemeError(e);case _i.FRAME_SYNC_DAPP_DATA_SUCCESS:return this.onSyncDappDataSuccess();case _i.FRAME_SYNC_DAPP_DATA_ERROR:return this.onSyncDappDataError(e);default:return null}}))}getLoginEmailUsed(){return Boolean(ls.get(_i.EMAIL_LOGIN_USED_KEY))}getEmail(){return ls.get(_i.EMAIL)}async connectEmail(e){return await this.w3mFrame.frameLoadPromise,ds.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:_i.APP_CONNECT_EMAIL,payload:e}),new Promise(((e,t)=>{this.connectEmailResolver={resolve:e,reject:t}}))}async connectDevice(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:_i.APP_CONNECT_DEVICE}),new Promise(((e,t)=>{this.connectDeviceResolver={resolve:e,reject:t}}))}async connectOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:_i.APP_CONNECT_OTP,payload:e}),new Promise(((e,t)=>{this.connectOtpResolver={resolve:e,reject:t}}))}async isConnected(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:_i.APP_IS_CONNECTED,payload:void 0}),new Promise(((e,t)=>{this.isConnectedResolver={resolve:e,reject:t}}))}async getChainId(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:_i.APP_GET_CHAIN_ID}),new Promise(((e,t)=>{this.getChainIdResolver={resolve:e,reject:t}}))}async updateEmail(e){return await this.w3mFrame.frameLoadPromise,ds.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:_i.APP_UPDATE_EMAIL,payload:e}),new Promise(((e,t)=>{this.updateEmailResolver={resolve:e,reject:t}}))}async awaitUpdateEmail(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:_i.APP_AWAIT_UPDATE_EMAIL}),new Promise(((e,t)=>{this.awaitUpdateEmailResolver={resolve:e,reject:t}}))}async syncTheme(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:_i.APP_SYNC_THEME,payload:e}),new Promise(((e,t)=>{this.syncThemeResolver={resolve:e,reject:t}}))}async syncDappData(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:_i.APP_SYNC_DAPP_DATA,payload:e}),new Promise(((e,t)=>{this.syncDappDataResolver={resolve:e,reject:t}}))}async connect(e){const t=e?.chainId??this.getLastUsedChainId()??1;return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:_i.APP_GET_USER,payload:{chainId:t}}),new Promise(((e,t)=>{this.connectResolver={resolve:e,reject:t}}))}async switchNetwork(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:_i.APP_SWITCH_NETWORK,payload:{chainId:e}}),new Promise(((e,t)=>{this.switchChainResolver={resolve:e,reject:t}}))}async disconnect(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:_i.APP_SIGN_OUT}),new Promise(((e,t)=>{this.disconnectResolver={resolve:e,reject:t}}))}async request(e){return await this.w3mFrame.frameLoadPromise,Si===e.method?this.getLastUsedChainId():(this.w3mFrame.events.postAppEvent({type:_i.APP_RPC_REQUEST,payload:e}),new Promise(((e,t)=>{this.rpcRequestResolver={resolve:e,reject:t}})))}onRpcRequest(e){this.w3mFrame.events.onAppEvent((t=>{t.type.includes(_i.RPC_METHOD_KEY)&&e(t)}))}onRpcResponse(e){this.w3mFrame.events.onFrameEvent((t=>{t.type.includes(_i.RPC_METHOD_KEY)&&e(t)}))}onIsConnected(e){this.w3mFrame.events.onFrameEvent((t=>{t.type===_i.FRAME_GET_USER_SUCCESS&&e()}))}onConnectEmailSuccess(e){this.connectEmailResolver?.resolve(e.payload),this.setNewLastEmailLoginTime()}onConnectEmailError(e){this.connectEmailResolver?.reject(e.payload.message)}onConnectDeviceSuccess(){this.connectDeviceResolver?.resolve(void 0)}onConnectDeviceError(e){this.connectDeviceResolver?.reject(e.payload.message)}onConnectOtpSuccess(){this.connectOtpResolver?.resolve(void 0)}onConnectOtpError(e){this.connectOtpResolver?.reject(e.payload.message)}onConnectSuccess(e){this.setEmailLoginSuccess(e.payload.email),this.setLastUsedChainId(e.payload.chainId),this.connectResolver?.resolve(e.payload)}onConnectError(e){this.connectResolver?.reject(e.payload.message)}onIsConnectedSuccess(e){e.payload.isConnected||this.deleteEmailLoginCache(),this.isConnectedResolver?.resolve(e.payload)}onIsConnectedError(e){this.isConnectedResolver?.reject(e.payload.message)}onGetChainIdSuccess(e){this.setLastUsedChainId(e.payload.chainId),this.getChainIdResolver?.resolve(e.payload)}onGetChainIdError(e){this.getChainIdResolver?.reject(e.payload.message)}onSignOutSuccess(){this.disconnectResolver?.resolve(void 0),this.deleteEmailLoginCache()}onSignOutError(e){this.disconnectResolver?.reject(e.payload.message)}onSwitchChainSuccess(e){this.setLastUsedChainId(e.payload.chainId),this.switchChainResolver?.resolve(e.payload)}onSwitchChainError(e){this.switchChainResolver?.reject(e.payload.message)}onRpcRequestSuccess(e){this.rpcRequestResolver?.resolve(e.payload)}onRpcRequestError(e){this.rpcRequestResolver?.reject(e.payload.message)}onSessionUpdate(e){const{payload:t}=e}onUpdateEmailSuccess(){this.updateEmailResolver?.resolve(void 0),this.setNewLastEmailLoginTime()}onUpdateEmailError(e){this.updateEmailResolver?.reject(e.payload.message)}onAwaitUpdateEmailSuccess(e){this.setEmailLoginSuccess(e.payload.email),this.awaitUpdateEmailResolver?.resolve(e.payload)}onAwaitUpdateEmailError(e){this.awaitUpdateEmailResolver?.reject(e.payload.message)}onSyncThemeSuccess(){this.syncThemeResolver?.resolve(void 0)}onSyncThemeError(e){this.syncThemeResolver?.reject(e.payload.message)}onSyncDappDataSuccess(){this.syncDappDataResolver?.resolve(void 0)}onSyncDappDataError(e){this.syncDappDataResolver?.reject(e.payload.message)}setNewLastEmailLoginTime(){ls.set(_i.LAST_EMAIL_LOGIN_TIME,Date.now().toString())}setEmailLoginSuccess(e){ls.set(_i.EMAIL,e),ls.set(_i.EMAIL_LOGIN_USED_KEY,"true"),ls.delete(_i.LAST_EMAIL_LOGIN_TIME)}deleteEmailLoginCache(){ls.delete(_i.EMAIL_LOGIN_USED_KEY),ls.delete(_i.EMAIL),ls.delete(_i.LAST_USED_CHAIN_KEY)}setLastUsedChainId(e){ls.set(_i.LAST_USED_CHAIN_KEY,`${e}`)}getLastUsedChainId(){return Number(ls.get(_i.LAST_USED_CHAIN_KEY))}}var ps=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let ms=class extends Cr.WF{constructor(){super(...arguments),this.email=xr.IN.state.data?.email,this.emailConnector=xr.aK.getEmailConnector(),this.loading=!1,this.timeoutTimeLeft=ds.getTimeToNextEmailLogin(),this.error="",this.otp=""}firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}render(){if(!this.email)throw new Error("w3m-email-verify-otp-view: No email provided");const e=Boolean(this.timeoutTimeLeft);return Cr.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100"> Enter the code we sent to </wui-text>
          <wui-text variant="paragraph-500" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?Cr.qy`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:Cr.qy` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?Cr.qy`<wui-text variant="small-400" color="error-100"
                    >${this.error}. Try Again</wui-text
                  >`:null}
            </wui-flex>`}

        <wui-flex alignItems="center">
          <wui-text variant="small-400" color="fg-200">Didn't receive it?</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            Resend ${e?`in ${this.timeoutTimeLeft}s`:"Code"}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=ds.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval((()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=ds.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)}),1e3)}async onOtpInputChange(e){try{this.loading||(this.otp=e.detail,this.emailConnector&&6===this.otp.length&&(this.loading=!0,await this.emailConnector.provider.connectOtp({otp:this.otp}),xr.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),await xr.x4.connectExternal(this.emailConnector),xr.W3.close(),xr.En.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email"}})))}catch(t){xr.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),this.error=xr.wE.parseError(t),this.loading=!1}}async onResendCode(){try{if(!this.loading&&!this.timeoutTimeLeft){this.error="",this.otp="";const e=xr.aK.getEmailConnector();if(!e||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await e.provider.connectEmail({email:this.email}),xr.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),this.startOTPTimeout(),xr.Pt.showSuccess("Code email resent")}}catch(e){xr.Pt.showError(e)}finally{this.loading=!1}}};ms.styles=ki,ps([(0,kr.wk)()],ms.prototype,"loading",void 0),ps([(0,kr.wk)()],ms.prototype,"timeoutTimeLeft",void 0),ps([(0,kr.wk)()],ms.prototype,"error",void 0),ms=ps([(0,Er.customElement)("w3m-email-verify-otp-view")],ms);const gs=Cr.AH`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var ys=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let vs=class extends Cr.WF{constructor(){super(),this.email=xr.IN.state.data?.email,this.emailConnector=xr.aK.getEmailConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.emailConnector)throw new Error("w3m-email-verify-device-view: No email connector provided");return Cr.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){this.emailConnector&&(await this.emailConnector.provider.connectDevice(),xr.En.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),xr.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),xr.IN.replace("EmailVerifyOtp",{email:this.email}))}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.emailConnector.provider.connectEmail({email:this.email}),xr.Pt.showSuccess("Code email resent")}}catch(e){xr.Pt.showError(e)}finally{this.loading=!1}}};vs.styles=gs,ys([(0,kr.wk)()],vs.prototype,"loading",void 0),vs=ys([(0,Er.customElement)("w3m-email-verify-device-view")],vs);const ws=Cr.AH`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var bs=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let xs=class extends Cr.WF{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(xr.W3.subscribeKey("open",(e=>{e||this.onHideIframe()})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.bodyObserver?.unobserve(window.document.body)}firstUpdated(){this.iframe.style.display="block";const e=this.renderRoot.querySelector("div");this.bodyObserver=new ResizeObserver((()=>{const t=e?.getBoundingClientRect(),n=t??{left:0,top:0,width:0,height:0};this.iframe.style.width=`${n.width}px`,this.iframe.style.height=n.height-10+"px",this.iframe.style.left=`${n.left}px`,this.iframe.style.top=`${n.top+5}px`,this.ready=!0})),this.bodyObserver.observe(window.document.body)}render(){return this.ready&&this.onShowIframe(),Cr.qy`<div data-ready=${this.ready}></div>`}onShowIframe(){const e=window.innerWidth<=430;this.iframe.animate([{opacity:0,transform:e?"translateY(50px)":"scale(.95)"},{opacity:1,transform:e?"translateY(0)":"scale(1)"}],{duration:200,easing:"ease",fill:"forwards",delay:300})}async onHideIframe(){await this.iframe.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,this.iframe.style.display="none"}};xs.styles=ws,bs([(0,kr.wk)()],xs.prototype,"ready",void 0),xs=bs([(0,Er.customElement)("w3m-approve-transaction-view")],xs);var Es=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Cs=class extends Cr.WF{render(){return Cr.qy`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${xr.oU.SECURE_SITE_DASHBOARD}
          imageSrc=${xr.oU.SECURE_SITE_FAVICON}
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};Cs=Es([(0,Er.customElement)("w3m-upgrade-wallet-view")],Cs);var ks=n(4657);const _s=Cr.AH`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var Ss=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Ps=class extends Cr.WF{constructor(){super(...arguments),this.formRef=(0,ks._)(),this.initialValue=xr.IN.state.data?.email??"",this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",(e=>{"Enter"===e.key&&this.onSubmitEmail(e)}))}render(){const e=!this.loading&&this.email.length>3&&this.email!==this.initialValue;return Cr.qy`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${(0,ks.K)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialValue}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="shade" fullWidth @click=${xr.IN.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="fill"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=xr.aK.getEmailConnector();if(!t)throw new Error("w3m-update-email-wallet: Email connector not found");await t.provider.updateEmail({email:this.email}),xr.En.sendEvent({type:"track",event:"EMAIL_EDIT"}),xr.IN.replace("UpdateEmailWalletWaiting",{email:this.email})}catch(t){xr.Pt.showError(t),this.loading=!1}}};Ps.styles=_s,Ss([(0,kr.wk)()],Ps.prototype,"email",void 0),Ss([(0,kr.wk)()],Ps.prototype,"loading",void 0),Ps=Ss([(0,Er.customElement)("w3m-update-email-wallet-view")],Ps);const As=Cr.AH`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var Ts=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Is=class extends Cr.WF{constructor(){super(),this.email=xr.IN.state.data?.email,this.emailConnector=xr.aK.getEmailConnector(),this.loading=!1,this.listenForEmailUpdateApproval()}render(){if(!this.email)throw new Error("w3m-update-email-wallet-waiting-view: No email provided");if(!this.emailConnector)throw new Error("w3m-update-email-wallet-waiting-view: No email connector provided");return Cr.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="mail"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve verification link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100">${this.email}</wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            You will receive an approval request on your former mail to confirm the new one
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForEmailUpdateApproval(){this.emailConnector&&(await this.emailConnector.provider.awaitUpdateEmail(),xr.IN.replace("Account"),xr.Pt.showSuccess("Email updated"))}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email)throw new Error("w3m-update-email-wallet-waiting-view: Unable to resend email");this.loading=!0,await this.emailConnector.provider.updateEmail({email:this.email}),this.listenForEmailUpdateApproval(),xr.Pt.showSuccess("Code email resent")}}catch(e){xr.Pt.showError(e)}finally{this.loading=!1}}};Is.styles=As,Ts([(0,kr.wk)()],Is.prototype,"loading",void 0),Is=Ts([(0,Er.customElement)("w3m-update-email-wallet-waiting-view")],Is);const Os=Cr.AH`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function Ns(e){const{connectors:t}=xr.aK.state,n=t.filter((e=>"ANNOUNCED"===e.type)).reduce(((e,t)=>t.info?.rdns?(e[t.info.rdns]=!0,e):e),{});return e.map((e=>({...e,installed:Boolean(e.rdns)&&Boolean(n[e.rdns??""])}))).sort(((e,t)=>Number(t.installed)-Number(e.installed)))}var Rs=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};const Ms="local-paginator";let $s=class extends Cr.WF{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!xr.Np.state.wallets.length,this.wallets=xr.Np.state.wallets,this.recommended=xr.Np.state.recommended,this.featured=xr.Np.state.featured,this.unsubscribe.push(xr.Np.subscribeKey("wallets",(e=>this.wallets=e)),xr.Np.subscribeKey("recommended",(e=>this.recommended=e)),xr.Np.subscribeKey("featured",(e=>this.featured=e)))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.paginationObserver?.disconnect()}render(){return Cr.qy`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){const e=this.shadowRoot?.querySelector("wui-grid");this.initial&&e&&(await xr.Np.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map((()=>Cr.qy`
        <wui-card-select-loader type="wallet" id=${(0,_r.J)(t)}></wui-card-select-loader>
      `))}walletsTemplate(){return Ns([...this.featured,...this.recommended,...this.wallets]).map((e=>Cr.qy`
        <wui-card-select
          imageSrc=${(0,_r.J)(xr.$m.getWalletImage(e))}
          type="wallet"
          name=${e.name}
          @click=${()=>this.onConnectWallet(e)}
          .installed=${e.installed}
        ></wui-card-select>
      `))}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:n,count:r}=xr.Np.state,i=window.innerWidth<352?3:4,o=e.length+t.length;let a=Math.ceil(o/i)*i-o+i;return a-=e.length?n.length%i:0,0===r&&n.length>0?null:0===r||[...n,...e,...t].length<r?this.shimmerTemplate(a,Ms):null}createPaginationObserver(){const e=this.shadowRoot?.querySelector(`#${Ms}`);e&&(this.paginationObserver=new IntersectionObserver((e=>{let[t]=e;if(t?.isIntersecting&&!this.initial){const{page:e,count:t,wallets:n}=xr.Np.state;n.length<t&&xr.Np.fetchWallets({page:e+1})}})),this.paginationObserver.observe(e))}onConnectWallet(e){const{connectors:t}=xr.aK.state,n=t.find((t=>{let{explorerId:n}=t;return n===e.id}));n?xr.IN.push("ConnectingExternal",{connector:n}):xr.IN.push("ConnectingWalletConnect",{wallet:e})}};$s.styles=Os,Rs([(0,kr.wk)()],$s.prototype,"initial",void 0),Rs([(0,kr.wk)()],$s.prototype,"wallets",void 0),Rs([(0,kr.wk)()],$s.prototype,"recommended",void 0),Rs([(0,kr.wk)()],$s.prototype,"featured",void 0),$s=Rs([(0,Er.customElement)("w3m-all-wallets-list")],$s);const js=Cr.AH`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var Us=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Ls=class extends Cr.WF{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?Cr.qy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await xr.Np.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:e}=xr.Np.state,t=Ns(e);return e.length?Cr.qy`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map((e=>Cr.qy`
            <wui-card-select
              imageSrc=${(0,_r.J)(xr.$m.getWalletImage(e))}
              type="wallet"
              name=${e.name}
              @click=${()=>this.onConnectWallet(e)}
              .installed=${e.installed}
            ></wui-card-select>
          `))}
      </wui-grid>
    `:Cr.qy`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){const{connectors:t}=xr.aK.state,n=t.find((t=>{let{explorerId:n}=t;return n===e.id}));n?xr.IN.push("ConnectingExternal",{connector:n}):xr.IN.push("ConnectingWalletConnect",{wallet:e})}};Ls.styles=js,Us([(0,kr.wk)()],Ls.prototype,"loading",void 0),Us([(0,kr.MZ)()],Ls.prototype,"query",void 0),Ls=Us([(0,Er.customElement)("w3m-all-wallets-search")],Ls);var Ds=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Bs=class extends Cr.WF{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(xr.x4.subscribeKey("buffering",(e=>this.buffering=e)))}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.generateTabs();return Cr.qy`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map((e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"}));return this.platformTabs=e.map((e=>{let{platform:t}=e;return t})),e}onTabChange(e){const t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};Ds([(0,kr.MZ)({type:Array})],Bs.prototype,"platforms",void 0),Ds([(0,kr.MZ)()],Bs.prototype,"onSelectPlatfrom",void 0),Ds([(0,kr.wk)()],Bs.prototype,"buffering",void 0),Bs=Ds([(0,Er.customElement)("w3m-connecting-header")],Bs);var Fs=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Ws=class extends Gr{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),xr.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=xr.aK.state,t=e.find((e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns)),n=e.find((e=>"INJECTED"===e.type));t?await xr.x4.connectExternal(t):n&&await xr.x4.connectExternal(n),xr.W3.close(),xr.En.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(e){xr.En.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};Ws=Fs([(0,Er.customElement)("w3m-connecting-wc-browser")],Ws);var zs=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let qs=class extends Gr{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),xr.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout((()=>{this.onConnect?.()}),200))}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:e,name:t}=this.wallet,{redirect:n,href:r}=xr.wE.formatNativeUrl(e,this.uri);xr.x4.setWcLinking({name:t,href:r}),xr.x4.setRecentWallet(this.wallet),xr.wE.openHref(n,"_blank")}catch{this.error=!0}}};qs=zs([(0,Er.customElement)("w3m-connecting-wc-desktop")],qs);var Hs=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Zs=class extends Gr{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),xr.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:e,name:t}=this.wallet,{redirect:n,href:r}=xr.wE.formatNativeUrl(e,this.uri);xr.x4.setWcLinking({name:t,href:r}),xr.x4.setRecentWallet(this.wallet),xr.wE.openHref(n,"_self")}catch{this.error=!0}}onBuffering(){const e=xr.wE.isIos();"visible"===document?.visibilityState&&!this.error&&e&&(xr.x4.setBuffering(!0),setTimeout((()=>{xr.x4.setBuffering(!1)}),5e3))}};Zs=Hs([(0,Er.customElement)("w3m-connecting-wc-mobile")],Zs);const Vs=Cr.AH`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var Ks=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Gs=class extends Gr{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),xr.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),Cr.qy`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout((()=>{this.ready=!0}),200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return xr.x4.setWcLinking(void 0),xr.x4.setRecentWallet(this.wallet),Cr.qy` <wui-qr-code
      size=${e}
      theme=${xr.Wn.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,_r.J)(xr.$m.getWalletImage(this.wallet))}
      alt=${(0,_r.J)(t)}
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return Cr.qy`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};Gs.styles=Vs,Gs=Ks([(0,Er.customElement)("w3m-connecting-wc-qrcode")],Gs);const Ys=Cr.AH`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var Js=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Qs=class extends Cr.WF{constructor(){super(...arguments),this.dappImageUrl=xr.Hd.state.metadata?.icons,this.walletImageUrl=xr.iT.getConnectedWalletImageUrl()}firstUpdated(){const e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return Cr.qy`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};Qs.styles=Ys,Qs=Js([(0,Er.customElement)("w3m-connecting-siwe")],Qs);var Xs=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let el=class extends Cr.WF{constructor(){if(super(),this.wallet=xr.IN.state.data?.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");xr.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return Cr.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,_r.J)(xr.$m.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};el=Xs([(0,Er.customElement)("w3m-connecting-wc-unsupported")],el);var tl=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let nl=class extends Gr{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",xr.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:e,name:t}=this.wallet,{redirect:n,href:r}=xr.wE.formatUniversalUrl(e,this.uri);xr.x4.setWcLinking({name:t,href:r}),xr.x4.setRecentWallet(this.wallet),xr.wE.openHref(n,"_blank")}catch{this.error=!0}}};nl=tl([(0,Er.customElement)("w3m-connecting-wc-web")],nl);const rl=Cr.AH`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var il=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};function ol(){const e=xr.IN.state.data?.connector?.name,t=xr.IN.state.data?.wallet?.name,n=xr.IN.state.data?.network?.name,r=t??e,i=xr.aK.getConnectors();return{Connect:`Connect ${1===i.length&&"w3m-email"===i[0]?.id?"Email":""} Wallet`,Account:void 0,ConnectingExternal:r??"Connect Wallet",ConnectingWalletConnect:r??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:n??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a wallet",Downloads:r?`Get ${r}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",ApproveTransaction:"Approve Transaction",Transactions:"Activity",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailWalletWaiting:"Approve Email"}}let al=class extends Cr.WF{constructor(){super(),this.unsubscribe=[],this.heading=ol()[xr.IN.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(xr.IN.subscribeKey("view",(e=>{this.onViewChange(e),this.onHistoryChange()})),xr.x4.subscribeKey("buffering",(e=>this.buffering=e)))}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){return Cr.qy`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
          data-testid="w3m-header-close"
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){xr.En.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),xr.IN.push("WhatIsAWallet")}async onClose(){xr.jF.state.isSiweEnabled&&"success"!==xr.jF.state.status&&await xr.x4.disconnect(),xr.W3.close()}titleTemplate(){return Cr.qy`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:e}=xr.IN.state,t="Connect"===e,n="ApproveTransaction"===e;return this.showBack&&!n?Cr.qy`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:Cr.qy`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?Cr.qy`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){const t=this.shadowRoot?.querySelector("wui-text");if(t){const n=ol()[e];await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=n,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){const{history:e}=xr.IN.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){"ConnectingSiwe"===xr.IN.state.view?xr.IN.push("Connect"):xr.IN.goBack()}};al.styles=[rl],il([(0,kr.wk)()],al.prototype,"heading",void 0),il([(0,kr.wk)()],al.prototype,"buffering",void 0),il([(0,kr.wk)()],al.prototype,"showBack",void 0),al=il([(0,Er.customElement)("w3m-header")],al);var sl=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let ll=class extends Cr.WF{constructor(){super(...arguments),this.data=[]}render(){return Cr.qy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map((e=>Cr.qy`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map((e=>Cr.qy`<wui-visual name=${e}></wui-visual>`))}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `))}
      </wui-flex>
    `}};sl([(0,kr.MZ)({type:Array})],ll.prototype,"data",void 0),ll=sl([(0,Er.customElement)("w3m-help-widget")],ll);const cl=Cr.AH`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;var ul=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let dl=class extends Cr.WF{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=xr.Hd.state;return e||t?Cr.qy`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `:null}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=xr.Hd.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=xr.Hd.state;return e?Cr.qy`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=xr.Hd.state;return e?Cr.qy`<a href=${e}>Privacy Policy</a>`:null}};dl.styles=[cl],dl=ul([(0,Er.customElement)("w3m-legal-footer")],dl);const hl=Cr.AH`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var fl=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let pl=class extends Cr.WF{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:t,play_store:n,chrome_store:r,homepage:i}=this.wallet,o=xr.wE.isMobile(),a=xr.wE.isIos(),s=xr.wE.isAndroid(),l=[t,n,i,r].filter(Boolean).length>1,c=Er.UiHelperUtil.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return l&&!o?Cr.qy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${()=>xr.IN.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!l&&i?Cr.qy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&a?Cr.qy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:n&&s?Cr.qy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&xr.wE.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&xr.wE.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&xr.wE.openHref(this.wallet.homepage,"_blank")}};pl.styles=[hl],fl([(0,kr.MZ)({type:Object})],pl.prototype,"wallet",void 0),pl=fl([(0,Er.customElement)("w3m-mobile-download-links")],pl);const ml=Cr.AH`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var gl=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};const yl={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let vl=class extends Cr.WF{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=xr.Pt.state.open,this.unsubscribe.push(xr.Pt.subscribeKey("open",(e=>{this.open=e,this.onOpen()})))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach((e=>e()))}render(){const{message:e,variant:t}=xr.Pt.state,n=yl[t];return Cr.qy`
      <wui-snackbar
        message=${e}
        backgroundColor=${n.backgroundColor}
        iconColor=${n.iconColor}
        icon=${n.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout((()=>xr.Pt.hide()),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};vl.styles=ml,gl([(0,kr.wk)()],vl.prototype,"open",void 0),vl=gl([(0,Er.customElement)("w3m-snackbar")],vl);const wl=Cr.AH`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 21px;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }

  .alphaBanner {
    padding: 10px 12px 10px 10px;
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-accent-glass-010);
    margin-bottom: var(--wui-spacing-s);
  }
`;var bl=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let xl=class extends Cr.WF{constructor(){super(),this.unsubscribe=[],this.formRef=(0,ks._)(),this.connectors=xr.aK.state.connectors,this.email="",this.loading=!1,this.error="",this.unsubscribe.push(xr.aK.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}firstUpdated(){this.formRef.value?.addEventListener("keydown",(e=>{"Enter"===e.key&&this.onSubmitEmail(e)}))}render(){const e=this.connectors.length>1;return this.connectors.find((e=>"EMAIL"===e.type))?Cr.qy`
      ${this.alphaWarningTemplate()}
      <form ${(0,ks.K)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>

      ${e?Cr.qy`<wui-separator text="or"></wui-separator>`:null}
    `:null}alphaWarningTemplate(){return Cr.qy`
          <wui-flex class="alphaBanner" gap="xs" alignItems="center" justifyContent="center">
            <wui-icon-box
              size="sm"
              icon="alpha"
              iconColor="accent-100"
              background="opaque"
              backgroundColor="accent-100"
            ></wui-icon-box>
            <wui-text variant="small-400" color="accent-100">
              This is an alpha version to test before launch
            </wui-text>
          </wui-flex>
        `}submitButtonTemplate(){return!this.loading&&this.email.length>3?Cr.qy`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
//# sourceMappingURL=main.e1abd2d0.js.map