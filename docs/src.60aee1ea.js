parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QVwt":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getRandomInt=exports.random=void 0,exports.random=function(t,e){return t-.5+Math.random()*(e-t+1)},exports.getRandomInt=function(t,e){return Math.round(exports.random(t,e))};
},{}],"HCSe":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Perceptron=void 0;var t=require("../utils/random"),e=function(){function e(e,r){this.learningRate=r,this.weights=new Array(e);for(var i=0;i<this.weights.length;i++)this.weights[i]=t.random(-1,1)}return e.prototype.sign=function(t){return t<0?-1:1},e.prototype.guess=function(t){for(var e=0,r=0;r<this.weights.length;r++)e+=t[r]*this.weights[r];return this.sign(e)},e.prototype.guessY=function(t){var e=this.weights;return-e[2]/e[1]-e[0]/e[1]*t},e.prototype.train=function(t,e){for(var r=e-this.guess(t),i=0;i<this.weights.length;i++)this.weights[i]+=r*t[i]*this.learningRate},e}();exports.Perceptron=e;
},{"../utils/random":"QVwt"}],"vG4u":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Canvas=void 0;var t=function(){function t(t,i,s){this.width=i,this.height=s,this.canvas=t,this.canvas.width=i,this.canvas.height=s,this.ctx=this.canvas.getContext("2d")}return t.prototype.drawPoint=function(t,i,s,e){void 0===s&&(s=6),this.ctx.fillStyle=i,this.ctx.beginPath(),this.ctx.arc(t.x,t.y,s,0,2*Math.PI,!0),this.ctx.fill(),e&&this.ctx.stroke()},t.prototype.drawLine=function(t,i){this.ctx.beginPath(),this.ctx.moveTo(t.x,t.y),this.ctx.lineTo(i.x,i.y),this.ctx.stroke()},t.prototype.clear=function(){this.ctx.clearRect(0,0,this.width,this.height)},t}();exports.Canvas=t;
},{}],"Cyzn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.loop=void 0,exports.loop=function(o){window.requestAnimationFrame(function(){return exports.loop(o)}),o()};
},{}],"NNf1":[function(require,module,exports) {
"use strict";function t(t,r){var o;return(o=Array.prototype).concat.apply(o,t.map(r))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.flatMap=exports.map=exports.constrain=void 0,exports.constrain=function(t,r,o){return Math.max(Math.min(t,o),r)},exports.map=function(t,r,o,e,a,n){var p=(t-r)/(o-r)*(a-e)+e;return n?e<a?exports.constrain(p,e,a):exports.constrain(p,a,e):p},exports.flatMap=t;
},{}],"CXAu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Point=void 0;var t=require("../utils/random"),i=require("./perceptronModule"),e=require("../utils/map"),r="white",o="black",n=function(){function n(e,r){void 0===e&&(e=t.random(-1,1)),void 0===r&&(r=t.random(-1,1)),this.x=e,this.y=r,this.y<i.f(this.x)?this.label=-1:this.label=1}return n.prototype.pixelX=function(){return e.map(this.x,-1,1,0,i.canvas.width)},n.prototype.pixelY=function(){return e.map(this.y,-1,1,i.canvas.height,0)},n.prototype.show=function(){var t;t=1===this.label?r:o,i.canvas.drawPoint({x:this.pixelX(),y:this.pixelY()},t,6,!0)},n}();exports.Point=n;
},{"../utils/random":"QVwt","./perceptronModule":"tF7i","../utils/map":"NNf1"}],"tF7i":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.perceptronModule=exports.f=exports.canvas=void 0;var e=require("./Perceptron"),r=require("../utils/Canvas"),n=require("../utils/loop"),o=require("./Point"),t=500,a=500,p=1,i="#cf3030",s="#2ad55a";exports.canvas=new r.Canvas(document.querySelector("#perceptron"),t,a),exports.f=function(e){return.89*e+.2};for(var x=new Array(200),l=0;l<x.length;l++)x[l]=new o.Point;var c=new e.Perceptron(3,.005),u=new o.Point(-1,exports.f(-1)),v=new o.Point(1,exports.f(1)),f=0;exports.perceptronModule=function(){n.loop(function(){exports.canvas.clear(),exports.canvas.drawLine({x:u.pixelX(),y:u.pixelY()},{x:v.pixelX(),y:v.pixelY()});for(var e=0,r=x;e<r.length;e++){(a=r[e]).show()}for(var n=0,t=x;n<t.length;n++){var a,l=[(a=t[n]).x,a.y,p],w=a.label,d=void 0;d=c.guess(l)===w?s:i,exports.canvas.drawPoint({x:a.pixelX(),y:a.pixelY()},d,3)}var y=x[f],P=[y.x,y.y,p],g=y.label;c.train(P,g);var Y=new o.Point(-1,c.guessY(-1)),h=new o.Point(1,c.guessY(1));exports.canvas.drawLine({x:Y.pixelX(),y:Y.pixelY()},{x:h.pixelX(),y:h.pixelY()}),++f===x.length&&(f=0)})};
},{"./Perceptron":"HCSe","../utils/Canvas":"vG4u","../utils/loop":"Cyzn","./Point":"CXAu"}],"K7fV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Matrix=void 0;var t=require("../utils/random"),n=require("../utils/map"),r=function(){function r(t,n){this.rows=t,this.columns=n,this.data=Array(t).fill(Array(n).fill(0))}return r.prototype.copy=function(){return r.add(new r(this.rows,this.columns),this)},r.map=function(t,n){return t.copy().forEach(n)},r.prototype.map=function(t){return this.data.map(function(n,r){return n.map(function(n,o){return t(n,r,o)})})},r.prototype.forEach=function(t){return this.data=this.map(t),this},r.add=function(t,n){return new r(t.rows,t.columns).forEach(function(t,r,o){return t+n.data[r][o]})},r.prototype.add=function(t){return this.data=t instanceof r?this.map(function(n,r,o){return n+t.data[r][o]}):this.map(function(n){return n+t}),this},r.subtract=function(t,n){return new r(t.rows,t.columns).forEach(function(r,o,u){return t.data[o][u]-n.data[o][u]})},r.prototype.subtract=function(t){return this.add(-1*t),this},r.multiply=function(t,n){return new r(t.rows,n.columns).forEach(function(r,o,u){return t.data[o].reduce(function(t,r,o){return r*n.data[o][u]+t},0)})},r.prototype.multiply=function(t){return t instanceof r?this.rows!==t.rows||this.columns!==t.columns?void console.log("Columns and Rows of A must match Columns and Rows of B."):this.forEach(function(n,r,o){return n*t.data[r][o]}):(this.data=this.map(function(n){return n*t}),this)},r.transpose=function(t){return new r(t.columns,t.rows).forEach(function(n,r,o){return t.data[o][r]})},r.prototype.randomize=function(){return this.data=this.map(function(){return t.random(-1,1)}),this},r.prototype.print=function(){return console.table(this.data),this},r.fromRaw=function(t){var n=new r(t.length,t[0].length);return n.data=n.map(function(n,r,o){return t[r][o]}),n},r.prototype.toArray=function(){return n.flatMap(this.data,function(t){return t})},r}();exports.Matrix=r;
},{"../utils/random":"QVwt","../utils/map":"NNf1"}],"DZn0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.NeuralNetwork=void 0;var t=require("./Matrix"),i=function(t){return 1/(1+Math.exp(-t))},e=function(t){return t*(1-t)},s=function(){function s(i,e,s){this.inputNodes=i,this.hiddenNodes=e,this.outputNodes=s,this.learningRate=.1,this.hiddenWeights=new t.Matrix(this.hiddenNodes,this.inputNodes).randomize(),this.outputWeights=new t.Matrix(this.outputNodes,this.hiddenNodes).randomize(),this.hiddenBias=new t.Matrix(this.hiddenNodes,1).randomize(),this.outputBias=new t.Matrix(this.outputNodes,1).randomize()}return s.prototype.feedforward=function(e){var s=t.Matrix.multiply(this.hiddenWeights,e).add(this.hiddenBias).forEach(i);return t.Matrix.multiply(this.outputWeights,s).add(this.outputBias).forEach(i)},s.prototype.train=function(s,a){var r=t.Matrix.multiply(this.hiddenWeights,s).add(this.hiddenBias).forEach(i),d=t.Matrix.multiply(this.outputWeights,r).add(this.outputBias).forEach(i),h=t.Matrix.subtract(a,d),u=t.Matrix.map(d,e);u.multiply(h),u.multiply(this.learningRate);var o=t.Matrix.multiply(u,t.Matrix.transpose(r));this.outputWeights.add(o),this.outputBias.add(u);var n=t.Matrix.multiply(t.Matrix.transpose(this.outputWeights),h),p=t.Matrix.map(r,e);p.multiply(n),p.multiply(this.learningRate);var l=t.Matrix.multiply(p,t.Matrix.transpose(s));this.hiddenWeights.add(l),this.hiddenBias.add(p)},s}();exports.NeuralNetwork=s;
},{"./Matrix":"K7fV"}],"aH6J":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.neuralNetworkModule=void 0;var r=require("./NeuralNetwork"),t=require("./Matrix"),e=require("../utils/random"),a=require("../utils/loop"),o=require("../perceptronStuff/perceptronModule");exports.neuralNetworkModule=function(){var i=new r.NeuralNetwork(2,2,1);window.nn=i,window.Matrix=t.Matrix;var u=[{inputs:t.Matrix.fromRaw([[0],[0]]),targets:t.Matrix.fromRaw([[0]])},{inputs:t.Matrix.fromRaw([[0],[1]]),targets:t.Matrix.fromRaw([[1]])},{inputs:t.Matrix.fromRaw([[1],[0]]),targets:t.Matrix.fromRaw([[1]])},{inputs:t.Matrix.fromRaw([[1],[1]]),targets:t.Matrix.fromRaw([[0]])}];a.loop(function(){o.canvas.clear();var r=u[e.getRandomInt(0,3)];i.train(r.inputs,r.targets)})};
},{"./NeuralNetwork":"DZn0","./Matrix":"K7fV","../utils/random":"QVwt","../utils/loop":"Cyzn","../perceptronStuff/perceptronModule":"tF7i"}],"QCba":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./perceptronStuff/perceptronModule"),r=require("./neuralNetworkStuff/neuralNetworkModule");e.perceptronModule(),r.neuralNetworkModule();
},{"./perceptronStuff/perceptronModule":"tF7i","./neuralNetworkStuff/neuralNetworkModule":"aH6J"}]},{},["QCba"], null)
//# sourceMappingURL=src.60aee1ea.js.map