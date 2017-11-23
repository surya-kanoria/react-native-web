Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _applyLayout=require('../../modules/applyLayout');var _applyLayout2=_interopRequireDefault(_applyLayout);var _applyNativeMethods=require('../../modules/applyNativeMethods');var _applyNativeMethods2=_interopRequireDefault(_applyNativeMethods);var _propTypes=require('prop-types');var _createElement=require('../../modules/createElement');var _createElement2=_interopRequireDefault(_createElement);var _invariant=require('fbjs/lib/invariant');var _invariant2=_interopRequireDefault(_invariant);var _StyleSheet=require('../../apis/StyleSheet');var _StyleSheet2=_interopRequireDefault(_StyleSheet);var _ViewPropTypes=require('./ViewPropTypes');var _ViewPropTypes2=_interopRequireDefault(_ViewPropTypes);var _react=require('react');var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var calculateHitSlopStyle=function calculateHitSlopStyle(hitSlop){var hitStyle={};for(var prop in hitSlop){if(hitSlop.hasOwnProperty(prop)){var value=hitSlop[prop];hitStyle[prop]=value>0?-1*value:0;}}return hitStyle;};var View=function(_Component){_inherits(View,_Component);function View(){_classCallCheck(this,View);return _possibleConstructorReturn(this,(View.__proto__||Object.getPrototypeOf(View)).apply(this,arguments));}_createClass(View,[{key:'render',value:function render(){var _props=this.props,hitSlop=_props.hitSlop,style=_props.style,showsHorizontalScrollIndicator=_props.showsHorizontalScrollIndicator,collapsable=_props.collapsable,onAccessibilityTap=_props.onAccessibilityTap,onLayout=_props.onLayout,onMagicTap=_props.onMagicTap,removeClippedSubviews=_props.removeClippedSubviews,otherProps=_objectWithoutProperties(_props,['hitSlop','style','showsHorizontalScrollIndicator','collapsable','onAccessibilityTap','onLayout','onMagicTap','removeClippedSubviews']);if(process.env.NODE_ENV!=='production'){_react2.default.Children.toArray(this.props.children).forEach(function(item){(0,_invariant2.default)(typeof item!=='string','Unexpected text node: '+item+'. A text node cannot be a child of a <View>.');});}var isInAParentText=this.context.isInAParentText;otherProps.style=[styles.initial,isInAParentText&&styles.inline,style,!showsHorizontalScrollIndicator&&{overflowX:'hidden'}];if(hitSlop){var hitSlopStyle=calculateHitSlopStyle(hitSlop);var hitSlopChild=(0,_createElement2.default)('span',{style:[styles.hitSlop,hitSlopStyle]});otherProps.children=_react2.default.Children.toArray(otherProps.children);otherProps.children.unshift(hitSlopChild);}return(0,_createElement2.default)('div',otherProps);}}]);return View;}(_react.Component);View.displayName='View';View.contextTypes={isInAParentText:_propTypes.bool};View.propTypes=process.env.NODE_ENV!=="production"?_ViewPropTypes2.default:{};var styles=_StyleSheet2.default.create({initial:{alignItems:'stretch',borderWidth:0,borderStyle:'solid',boxSizing:'border-box',display:'flex',flexDirection:'column',margin:0,padding:0,position:'relative',zIndex:0,minHeight:0,minWidth:0},inline:{display:'inline-flex'},hitSlop:_extends({},_StyleSheet2.default.absoluteFillObject,{zIndex:-1})});exports.default=(0,_applyLayout2.default)((0,_applyNativeMethods2.default)(View));