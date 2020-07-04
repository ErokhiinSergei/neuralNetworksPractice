parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QVwt":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.random=void 0,exports.random=function(e,r){return Math.random()*(r-e)+e};
},{}],"c2V7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Perceptron=void 0;var t=require("./utils/random"),e=function(){function e(e,r){this.learningRate=r,this.weights=new Array(e);for(var i=0;i<this.weights.length;i++)this.weights[i]=t.random(-1,1)}return e.prototype.sign=function(t){return t<0?-1:1},e.prototype.guess=function(t){for(var e=0,r=0;r<this.weights.length;r++)e+=t[r]*this.weights[r];return this.sign(e)},e.prototype.guessY=function(t){var e=this.weights;return-e[2]/e[1]-e[0]/e[1]*t},e.prototype.train=function(t,e){for(var r=e-this.guess(t),i=0;i<this.weights.length;i++)this.weights[i]+=r*t[i]*this.learningRate},e}();exports.Perceptron=e;
},{"./utils/random":"QVwt"}],"veHl":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Canvas=void 0;var t=function(){function t(t,i){this.width=t,this.height=i,this.canvas=document.querySelector("canvas"),this.canvas.width=t,this.canvas.height=i,this.ctx=this.canvas.getContext("2d")}return t.prototype.drawPoint=function(t,i,e,s){void 0===e&&(e=6),this.ctx.fillStyle=i,this.ctx.beginPath(),this.ctx.arc(t.x,t.y,e,0,2*Math.PI,!0),this.ctx.fill(),s&&this.ctx.stroke()},t.prototype.drawLine=function(t,i){this.ctx.beginPath(),this.ctx.moveTo(t.x,t.y),this.ctx.lineTo(i.x,i.y),this.ctx.stroke()},t.prototype.clear=function(){this.ctx.clearRect(0,0,this.width,this.height)},t}();exports.Canvas=t;
},{}],"Cyzn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.loop=void 0,exports.loop=function(o){window.requestAnimationFrame(function(){return exports.loop(o)}),o()};
},{}],"NNf1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.map=exports.constrain=void 0,exports.constrain=function(t,r,e){return Math.max(Math.min(t,e),r)},exports.map=function(t,r,e,n,o,s){var a=(t-r)/(e-r)*(o-n)+n;return s?n<o?exports.constrain(a,n,o):exports.constrain(a,o,n):a};
},{}],"hkGq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Point=void 0;var t=require("./utils/random"),i=require("."),e=require("./utils/map"),r="white",o="black",n=function(){function n(e,r){void 0===e&&(e=t.random(-1,1)),void 0===r&&(r=t.random(-1,1)),this.x=e,this.y=r,this.y<i.f(this.x)?this.label=-1:this.label=1}return n.prototype.pixelX=function(){return e.map(this.x,-1,1,0,i.canvas.width)},n.prototype.pixelY=function(){return e.map(this.y,-1,1,i.canvas.height,0)},n.prototype.show=function(){var t;t=1===this.label?r:o,i.canvas.drawPoint({x:this.pixelX(),y:this.pixelY()},t,6,!0)},n}();exports.Point=n;
},{"./utils/random":"QVwt",".":"QCba","./utils/map":"NNf1"}],"QCba":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.canvas=exports.f=void 0;var e=require("./Perceptron"),r=require("./Canvas"),n=require("./utils/loop"),a=require("./Point"),o=500,t=500,i="#cf3030",s="#2ad55a";exports.f=function(e){return.89*e+.2};var x=1;exports.canvas=new r.Canvas(o,t);for(var p=new Array(200),l=new e.Perceptron(3,.005),v=0,c=new a.Point(-1,exports.f(-1)),u=new a.Point(1,exports.f(1)),w=0;w<p.length;w++)p[w]=new a.Point;n.loop(function(){exports.canvas.clear(),exports.canvas.drawLine({x:c.pixelX(),y:c.pixelY()},{x:u.pixelX(),y:u.pixelY()});for(var e=0,r=p;e<r.length;e++){(t=r[e]).show()}for(var n=0,o=p;n<o.length;n++){var t,w=[(t=o[n]).x,t.y,x],f=t.label,P=void 0;P=l.guess(w)===f?s:i,exports.canvas.drawPoint({x:t.pixelX(),y:t.pixelY()},P,3)}var y=p[v],d=[y.x,y.y,x],g=y.label;l.train(d,g);var Y=new a.Point(-1,l.guessY(-1)),h=new a.Point(1,l.guessY(1));exports.canvas.drawLine({x:Y.pixelX(),y:Y.pixelY()},{x:h.pixelX(),y:h.pixelY()}),++v===p.length&&(v=0)});
},{"./Perceptron":"c2V7","./Canvas":"veHl","./utils/loop":"Cyzn","./Point":"hkGq"}]},{},["QCba"], null)
//# sourceMappingURL=/src.e93d5c39.js.map