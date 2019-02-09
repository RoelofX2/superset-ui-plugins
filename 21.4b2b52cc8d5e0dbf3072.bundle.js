(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1536:function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.default=exports.DEFAULT_COLORS=void 0;var _react=_interopRequireDefault(__webpack_require__(0)),_propTypes=_interopRequireDefault(__webpack_require__(2)),_d3Array=__webpack_require__(1106),_d3Scale=__webpack_require__(1537);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _extends(){return(_extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c])Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a}).apply(this,arguments)}var DEFAULT_COLORS=["#313695","#4575b4","#74add1","#abd9e9","#fee090","#fdae61","#f46d43","#d73027"];exports.DEFAULT_COLORS=DEFAULT_COLORS;var propTypes={className:_propTypes.default.string,width:_propTypes.default.number,height:_propTypes.default.number,data:_propTypes.default.arrayOf(_propTypes.default.shape({y:_propTypes.default.number})).isRequired,bands:_propTypes.default.number,colors:_propTypes.default.arrayOf(_propTypes.default.string),colorScale:_propTypes.default.string,mode:_propTypes.default.string,offsetX:_propTypes.default.number,title:_propTypes.default.string,yDomain:_propTypes.default.arrayOf(_propTypes.default.number)},defaultProps={className:"",width:800,height:20,bands:DEFAULT_COLORS.length>>1,colors:DEFAULT_COLORS,colorScale:"series",mode:"offset",offsetX:0,title:"",yDomain:void 0},HorizonRow=function(a){function b(){return a.apply(this,arguments)||this}!function(a,b){a.prototype=Object.create(b.prototype),a.prototype.constructor=a,a.__proto__=b}(b,a);var c=b.prototype;return c.componentDidMount=function(){this.drawChart()},c.componentDidUpdate=function(){this.drawChart()},c.componentWillUnmount=function(){this.canvas=null},c.drawChart=function(){if(this.canvas){var a=this.props,c=a.data,d=a.yDomain,e=a.width,f=a.height,g=a.bands,h=a.colors,j=a.colorScale,k=a.offsetX,l=a.mode,m="change"===j?c.map(function(a){return _extends({},a,{y:a.y-c[0].y})}):c,n=this.canvas.getContext("2d");n.imageSmoothingEnabled=!1,n.clearRect(0,0,e,f),n.setTransform(1,0,0,1,0,0),n.translate(.5,.5);var o=e/m.length,p=Math.floor(Math.max(0,-k/o)),q=Math.floor(Math.min(m.length,p+e/o));if(p>m.length)return;for(var r,s,t=d||(0,_d3Array.extent)(m,function(a){return a.y}),u=t[0],v=t[1],w=(0,_d3Scale.scaleLinear)().domain([0,Math.max(-u,v)]).range([0,f]),x=!1,y=0;y<g;y+=1){n.fillStyle=h[g+y],s=(y+1-g)*f,w.range([g*f+s,s]);for(var A=p;A<q;A++)0>=(r=m[A].y)?x=!0:void 0!==r&&n.fillRect(k+A*o,w(r),o+1,w(0)-w(r))}if(x){"offset"===l&&(n.translate(0,f),n.scale(1,-1));for(var i=0;i<g;i++){n.fillStyle=h[g-i-1],s=(i+1-g)*f,w.range([g*f+s,s]);for(var B=p;B<q;B++)!(0<=(r=m[B].y))&&n.fillRect(k+B*o,w(-r),o+1,w(0)-w(-r))}}}},c.render=function(){var a=this,b=this.props,c=b.className,d=b.title,e=b.width,f=b.height;return _react.default.createElement("div",{className:"horizon-row "+c},_react.default.createElement("span",{className:"title"},d),_react.default.createElement("canvas",{width:e,height:f,ref:function(b){a.canvas=b}}))},b}(_react.default.PureComponent);HorizonRow.propTypes=propTypes,HorizonRow.defaultProps=defaultProps;var _default=HorizonRow;exports.default=_default},1539:function(module,exports,__webpack_require__){var content=__webpack_require__(1540);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(119)(content,options);content.locals&&(module.exports=content.locals)},1540:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(118)(!1)).push([module.i,'/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n.superset-legacy-chart-horizon {\n  overflow: auto;\n}\n\n.superset-legacy-chart-horizon .horizon-row  {\n  border-bottom: solid 1px #ddd;\n  border-top: 0px;\n  padding: 0px;\n  margin: 0px;\n}\n\n.superset-legacy-chart-horizon .horizon-row span.title {\n  position: absolute;\n  color: #333;\n  font-size: 0.8em;\n  margin: 0;\n  text-shadow: 1px 1px rgba(255, 255, 255, 0.75);\n}\n',""])},899:function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0)),_propTypes=_interopRequireDefault(__webpack_require__(2)),_d3Array=__webpack_require__(1106),_HorizonRow=function(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}return b.default=a,b}(__webpack_require__(1536));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}__webpack_require__(1539);var propTypes={className:_propTypes.default.string,width:_propTypes.default.number,seriesHeight:_propTypes.default.number,data:_propTypes.default.arrayOf(_propTypes.default.shape({key:_propTypes.default.arrayOf(_propTypes.default.string),values:_propTypes.default.arrayOf(_propTypes.default.shape({y:_propTypes.default.number}))})).isRequired,bands:_propTypes.default.number,colors:_propTypes.default.arrayOf(_propTypes.default.string),colorScale:_propTypes.default.string,mode:_propTypes.default.string,offsetX:_propTypes.default.number},defaultProps={className:"",width:800,seriesHeight:20,bands:Math.floor(_HorizonRow.DEFAULT_COLORS.length/2),colors:_HorizonRow.DEFAULT_COLORS,colorScale:"series",mode:"offset",offsetX:0},HorizonChart=function(a){function b(){return a.apply(this,arguments)||this}return function(a,b){a.prototype=Object.create(b.prototype),a.prototype.constructor=a,a.__proto__=b}(b,a),b.prototype.render=function(){var a,b=this.props,c=b.className,d=b.width,e=b.data,f=b.seriesHeight,g=b.bands,h=b.colors,i=b.colorScale,j=b.mode,k=b.offsetX;if("overall"===i){var m=e.reduce(function(a,b){return a.concat(b.values)},[]);a=(0,_d3Array.extent)(m,function(a){return a.y})}return _react.default.createElement("div",{className:"superset-legacy-chart-horizon "+c},e.map(function(b){return _react.default.createElement(_HorizonRow.default,{key:b.key,width:d,height:f,title:b.key.join(", "),data:b.values,bands:g,colors:h,colorScale:i,mode:j,offsetX:k,yDomain:a})}))},b}(_react.default.PureComponent);HorizonChart.propTypes=propTypes,HorizonChart.defaultProps=defaultProps;var _default=HorizonChart;exports.default=_default}}]);
//# sourceMappingURL=21.4b2b52cc8d5e0dbf3072.bundle.js.map