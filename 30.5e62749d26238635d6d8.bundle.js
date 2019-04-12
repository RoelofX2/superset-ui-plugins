(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1078:function(module,exports,__webpack_require__){var content=__webpack_require__(1079);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(137)(content,options);content.locals&&(module.exports=content.locals)},1079:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(136)(!1)).push([module.i,"/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n.superset-legacy-chart-paired_ttest .scrollbar-container {\n  overflow: auto;\n}\n\n.paired-ttest-table .scrollbar-content {\n  padding-left: 5px;\n  padding-right: 5px;\n  margin-bottom: 0;\n}\n\n.paired-ttest-table table {\n  margin-bottom: 0;\n}\n\n.paired-ttest-table h1 {\n  margin-left: 5px;\n}\n\n.reactable-data tr,\n.reactable-header-sortable {\n  transition: ease-in-out 0.1s;\n}\n\n.reactable-data tr:hover {\n  background-color: #e0e0e0;\n}\n\n.reactable-data tr .false {\n  color: #f44336;\n}\n\n.reactable-data tr .true {\n  color: #4caf50;\n}\n\n.reactable-data tr .control {\n  color: #2196f3;\n}\n\n.reactable-data tr .invalid {\n  color: #ff9800;\n}\n\n.reactable-data .control td {\n  background-color: #eeeeee;\n}\n\n.reactable-header-sortable:hover,\n.reactable-header-sortable:focus,\n.reactable-header-sort-asc,\n.reactable-header-sort-desc {\n  background-color: #e0e0e0;\n  position: relative;\n}\n\n.reactable-header-sort-asc:after {\n  content: '\\25bc';\n  position: absolute;\n  right: 10px;\n}\n\n.reactable-header-sort-desc:after {\n  content: '\\25b2';\n  position: absolute;\n  right: 10px;\n}\n",""])},1583:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var prop_types=__webpack_require__(0),prop_types_default=__webpack_require__.n(prop_types),react=__webpack_require__(1),react_default=__webpack_require__.n(react),distributions=__webpack_require__(1080),distributions_default=__webpack_require__.n(distributions),reactable=__webpack_require__(1087);var dataPropType=prop_types_default.a.arrayOf(prop_types_default.a.shape({group:prop_types_default.a.arrayOf(prop_types_default.a.string),values:prop_types_default.a.arrayOf(prop_types_default.a.shape({x:prop_types_default.a.number,y:prop_types_default.a.number}))})),propTypes={alpha:prop_types_default.a.number,data:dataPropType.isRequired,groups:prop_types_default.a.arrayOf(prop_types_default.a.string).isRequired,liftValPrec:prop_types_default.a.number,metric:prop_types_default.a.string.isRequired,pValPrec:prop_types_default.a.number},TTestTable=function(a){function b(b){var c;return(c=a.call(this,b)||this).state={control:0,liftValues:[],pValues:[]},c}!function _inheritsLoose(a,b){a.prototype=Object.create(b.prototype),a.prototype.constructor=a,a.__proto__=b}(b,a);var c=b.prototype;return c.componentWillMount=function componentWillMount(){var a=this.state.control;this.computeTTest(a)},c.getLiftStatus=function getLiftStatus(a){var b=this.state,c=b.control,d=b.liftValues;if(a===c)return"control";var e=d[a];return Number.isNaN(e)||!Number.isFinite(e)?"invalid":0<=e?"true":"false"},c.getPValueStatus=function getPValueStatus(a){var b=this.state,c=b.control,d=b.pValues;if(a===c)return"control";var e=d[a];return Number.isNaN(e)||!Number.isFinite(e)?"invalid":""},c.getSignificance=function getSignificance(a){var b=this.state,c=b.control,d=b.pValues,e=this.props.alpha;return a===c?"control":d[a]<=e},c.computeLift=function computeLift(a,b){for(var c=this.props.liftValPrec,d=0,e=0,f=0;f<a.length;f++)d+=a[f].y,e+=b[f].y;return((d-e)/e*100).toFixed(c)},c.computePValue=function computePValue(a,b){for(var c,d=this.props.pValPrec,e=0,f=0,g=0,h=0;h<a.length;h++)c=b[h].y-a[h].y,isFinite(c)&&(g++,e+=c,f+=c*c);var j=-Math.abs(e*Math.sqrt((g-1)/(g*f-e*e)));try{return(2*new distributions_default.a.Studentt(g-1).cdf(j)).toFixed(d)}catch(a){return NaN}},c.computeTTest=function computeTTest(a){var b=this.props.data,c=[],d=[];if(b){for(var e=0;e<b.length;e++)e===a?(c.push("control"),d.push("control")):(c.push(this.computePValue(b[e].values,b[a].values)),d.push(this.computeLift(b[e].values,b[a].values)));this.setState({control:a,liftValues:d,pValues:c})}},c.render=function render(){var a=this,b=this.props,c=b.data,d=b.metric,e=b.groups,f=this.state,g=f.control,h=f.liftValues,j=f.pValues,k=e.map(function(a,b){return react_default.a.createElement(reactable.Th,{key:b,column:a},a)}),l=e.length;k.push(react_default.a.createElement(reactable.Th,{key:l+1,column:"pValue"},"p-value")),k.push(react_default.a.createElement(reactable.Th,{key:l+2,column:"liftValue"},"Lift %")),k.push(react_default.a.createElement(reactable.Th,{key:l+3,column:"significant"},"Significant"));var m=c.map(function(b,c){var d=e.map(function(a,c){return react_default.a.createElement(reactable.Td,{key:c,column:a,data:b.group[c]})});return d.push(react_default.a.createElement(reactable.Td,{key:l+1,className:a.getPValueStatus(c),column:"pValue",data:j[c]})),d.push(react_default.a.createElement(reactable.Td,{key:l+2,className:a.getLiftStatus(c),column:"liftValue",data:h[c]})),d.push(react_default.a.createElement(reactable.Td,{key:l+3,className:a.getSignificance(c),column:"significant",data:a.getSignificance(c)})),react_default.a.createElement(reactable.Tr,{key:c,onClick:a.computeTTest.bind(a,c),className:c===g?"control":""},d)}),n=e.concat([{column:"pValue",sortFunction:function sortFunction(c,a){return"control"===c?-1:"control"===a?1:c>a?1:-1}},{column:"liftValue",sortFunction:function sortFunction(c,a){return"control"===c?-1:"control"===a?1:parseFloat(c)>parseFloat(a)?-1:1}},{column:"significant",sortFunction:function sortFunction(c,a){return"control"===c?-1:"control"===a?1:c>a?-1:1}}]);return react_default.a.createElement("div",null,react_default.a.createElement("h3",null,d),react_default.a.createElement(reactable.Table,{className:"table",id:"table_"+d,sortable:n},react_default.a.createElement(reactable.Thead,null,k),m))},b}(react_default.a.Component);TTestTable.propTypes=propTypes,TTestTable.defaultProps={alpha:.05,liftValPrec:4,pValPrec:6};var esm_TTestTable=TTestTable;__webpack_require__(1078);var PairedTTest_propTypes={alpha:prop_types_default.a.number,className:prop_types_default.a.string,data:prop_types_default.a.objectOf(dataPropType).isRequired,groups:prop_types_default.a.arrayOf(prop_types_default.a.string).isRequired,liftValPrec:prop_types_default.a.number,metrics:prop_types_default.a.arrayOf(prop_types_default.a.string).isRequired,pValPrec:prop_types_default.a.number},PairedTTest_PairedTTest=function(a){function b(){return a.apply(this,arguments)||this}return function PairedTTest_inheritsLoose(a,b){a.prototype=Object.create(b.prototype),a.prototype.constructor=a,a.__proto__=b}(b,a),b.prototype.render=function render(){var a=this.props,b=a.className,c=a.metrics,d=a.groups,e=a.data,f=a.alpha,g=a.pValPrec,h=a.liftValPrec;return react_default.a.createElement("div",{className:"superset-legacy-chart-paired-t-test "+b},react_default.a.createElement("div",{className:"paired-ttest-table scrollbar-container"},react_default.a.createElement("div",{className:"scrollbar-content"},c.map(function(a,b){return react_default.a.createElement(esm_TTestTable,{key:b,metric:a,groups:d,data:e[a],alpha:f,pValPrec:Math.min(g,32),liftValPrec:Math.min(h,32)})}))))},b}(react_default.a.PureComponent);PairedTTest_PairedTTest.propTypes=PairedTTest_propTypes,PairedTTest_PairedTTest.defaultProps={alpha:.05,className:"",liftValPrec:4,pValPrec:6};__webpack_exports__.default=PairedTTest_PairedTTest}}]);
//# sourceMappingURL=30.5e62749d26238635d6d8.bundle.js.map