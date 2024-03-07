"use strict";(self.webpackChunkdellace=self.webpackChunkdellace||[]).push([[2559],{2559:function(e,n,r){r.r(n),r.d(n,{default:function(){return T}});var o=r(72791),t=r(4942),a=r(29439),c=r(81694),l=r.n(c),i=r(85501),s=r(54170),u=r(71929),d=r(61113),m=r(10430),p=r(87139),b=function(e){var n=e.children,r=(0,o.useContext(u.E_).getPrefixCls)("breadcrumb");return o.createElement("li",{className:"".concat(r,"-separator"),"aria-hidden":"true"},""===n?n:n||"/")};b.__ANT_BREADCRUMB_SEPARATOR=!0;var f=b,g=function(e,n){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(o=Object.getOwnPropertySymbols(e);t<o.length;t++)n.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(e,o[t])&&(r[o[t]]=e[o[t]])}return r},h=function(e){var n=e.prefixCls,r=e.separator,t=void 0===r?"/":r,a=e.children,c=e.menu,l=e.overlay,i=e.dropdownProps,s=e.href,d=g(e,["prefixCls","separator","children","menu","overlay","dropdownProps","href"]),b=(0,o.useContext(u.E_).getPrefixCls)("breadcrumb",n);var h;return h=function(e){if(c||l){var n=Object.assign({},i);if(c){var r=c||{},t=r.items,a=g(r,["items"]);n.menu=Object.assign(Object.assign({},a),{items:null===t||void 0===t?void 0:t.map((function(e,n){var r=e.key,t=e.title,a=e.label,c=e.path,l=g(e,["key","title","label","path"]),i=null!==a&&void 0!==a?a:t;return c&&(i=o.createElement("a",{href:"".concat(s).concat(c)},i)),Object.assign(Object.assign({},l),{key:null!==r&&void 0!==r?r:n,label:i})}))})}else l&&(n.overlay=l);return o.createElement(p.Z,Object.assign({placement:"bottom"},n),o.createElement("span",{className:"".concat(b,"-overlay-link")},e,o.createElement(m.Z,null)))}return e}(h=void 0!==s?o.createElement("a",Object.assign({className:"".concat(b,"-link"),href:s},d),a):o.createElement("span",Object.assign({className:"".concat(b,"-link")},d),a)),void 0!==a&&null!==a?o.createElement(o.Fragment,null,o.createElement("li",null,h),t&&o.createElement(f,null,t)):null};h.__ANT_BREADCRUMB_ITEM=!0;var v=h,y=r(55564),S=r(89922),C=r(67521),O=function(e){var n,r,o=e.componentCls,a=e.iconCls;return(0,t.Z)({},o,Object.assign(Object.assign({},(0,C.Wf)(e)),(r={color:e.breadcrumbBaseColor,fontSize:e.breadcrumbFontSize},(0,t.Z)(r,a,{fontSize:e.breadcrumbIconFontSize}),(0,t.Z)(r,"ol",{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"}),(0,t.Z)(r,"a",Object.assign({color:e.breadcrumbLinkColor,transition:"color ".concat(e.motionDurationMid),padding:"0 ".concat(e.paddingXXS,"px"),borderRadius:e.borderRadiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",marginInline:-e.marginXXS,"&:hover":{color:e.breadcrumbLinkColorHover,backgroundColor:e.colorBgTextHover}},(0,C.Qy)(e))),(0,t.Z)(r,"li:last-child",{color:e.breadcrumbLastItemColor}),(0,t.Z)(r,"".concat(o,"-separator"),{marginInline:e.breadcrumbSeparatorMargin,color:e.breadcrumbSeparatorColor}),(0,t.Z)(r,"".concat(o,"-link"),(0,t.Z)({},"\n          > ".concat(a," + span,\n          > ").concat(a," + a\n        "),{marginInlineStart:e.marginXXS})),(0,t.Z)(r,"".concat(o,"-overlay-link"),(n={borderRadius:e.borderRadiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",padding:"0 ".concat(e.paddingXXS,"px"),marginInline:-e.marginXXS},(0,t.Z)(n,"> ".concat(a),{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon}),(0,t.Z)(n,"&:hover",{color:e.breadcrumbLinkColorHover,backgroundColor:e.colorBgTextHover,a:{color:e.breadcrumbLinkColorHover}}),(0,t.Z)(n,"a",{"&:hover":{backgroundColor:"transparent"}}),n)),(0,t.Z)(r,"&".concat(e.componentCls,"-rtl"),{direction:"rtl"}),r)))},E=(0,y.Z)("Breadcrumb",(function(e){var n=(0,S.TS)(e,{breadcrumbBaseColor:e.colorTextDescription,breadcrumbFontSize:e.fontSize,breadcrumbIconFontSize:e.fontSize,breadcrumbLinkColor:e.colorTextDescription,breadcrumbLinkColorHover:e.colorText,breadcrumbLastItemColor:e.colorText,breadcrumbSeparatorMargin:e.marginXS,breadcrumbSeparatorColor:e.colorTextDescription});return[O(n)]})),k=function(e,n){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(o=Object.getOwnPropertySymbols(e);t<o.length;t++)n.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(e,o[t])&&(r[o[t]]=e[o[t]])}return r};function x(e){var n=e.breadcrumbName,r=e.children,o=k(e,["breadcrumbName","children"]),t=Object.assign({title:n},o);return r&&(t.menu={items:r.map((function(e){var n=e.breadcrumbName,r=k(e,["breadcrumbName"]);return Object.assign(Object.assign({},r),{title:n})}))}),t}var j=function(e,n){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(o=Object.getOwnPropertySymbols(e);t<o.length;t++)n.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(e,o[t])&&(r[o[t]]=e[o[t]])}return r};var w=function(e){var n,r=e,c=r.prefixCls,m=r.separator,p=void 0===m?"/":m,b=r.style,g=r.className,h=r.rootClassName,y=r.routes,S=r.items,C=r.children,O=r.itemRender,k=r.params,w=void 0===k?{}:k,Z=j(r,["prefixCls","separator","style","className","rootClassName","routes","items","children","itemRender","params"]),P=o.useContext(u.E_),M=P.getPrefixCls,T=P.direction,D=M("breadcrumb",c),N=E(D),I=(0,a.Z)(N,2),L=I[0],z=I[1],R=function(e,n){return(0,o.useMemo)((function(){return e||(n?n.map(x):null)}),[e,n])}(S,y);var X=O||function(e){var n=function(e,n){if(void 0===e.title)return null;var r=Object.keys(n).join("|");return"object"===typeof e.title?e.title:String(e.title).replace(new RegExp(":(".concat(r,")"),"g"),(function(e,r){return n[r]||e}))}(e,w);return n};if(R&&R.length>0){var B=[],_=S||y;n=R.map((function(e,n){var r=e.path,t=e.key,a=e.type,c=e.menu,l=e.overlay,i=e.onClick,u=e.className,d=e.separator,m=function(e,n){if(void 0===n)return n;var r=(n||"").replace(/^\//,"");return Object.keys(e).forEach((function(n){r=r.replace(":".concat(n),e[n])})),r}(w,r);void 0!==m&&B.push(m);var b=null!==t&&void 0!==t?t:n;if("separator"===a)return o.createElement(f,{key:b},d);var g={},h=n===R.length-1;c?g.menu=c:l&&(g.overlay=l),u&&(g.className=u);var y=e.href;return B.length&&void 0!==m&&(y="#/".concat(B.join("/"))),o.createElement(v,Object.assign({key:b},g,(0,s.Z)(e,{data:!0,aria:!0}),{href:y,separator:h?"":p,onClick:i}),X(e,w,_,B))}))}else if(C){var F=(0,i.Z)(C).length;n=(0,i.Z)(C).map((function(e,n){if(!e)return e;var r=n===F-1;return(0,d.Tm)(e,{separator:r?"":p,key:n})}))}var H=l()(D,(0,t.Z)({},"".concat(D,"-rtl"),"rtl"===T),g,h,z);return L(o.createElement("nav",Object.assign({className:H,style:b},Z),o.createElement("ol",null,n)))};w.Item=v,w.Separator=f;var Z=w,P=r(11087),M=r(80184);var T=function(e){var n=e.breadcrmb;return(0,M.jsx)(Z,{children:n.map((function(e,n){return(0,M.jsx)(Z.Item,{children:(0,M.jsx)(P.rU,{to:e.path,children:e.name})},n)}))})}},10430:function(e,n,r){r.d(n,{Z:function(){return i}});var o=r(1413),t=r(72791),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},c=r(54291),l=function(e,n){return t.createElement(c.Z,(0,o.Z)((0,o.Z)({},e),{},{ref:n,icon:a}))};l.displayName="DownOutlined";var i=t.forwardRef(l)},54170:function(e,n,r){r.d(n,{Z:function(){return i}});var o=r(1413),t="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/),a="aria-",c="data-";function l(e,n){return 0===e.indexOf(n)}function i(e){var n,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n=!1===r?{aria:!0,data:!0,attr:!0}:!0===r?{aria:!0}:(0,o.Z)({},r);var i={};return Object.keys(e).forEach((function(r){(n.aria&&("role"===r||l(r,a))||n.data&&l(r,c)||n.attr&&t.includes(r))&&(i[r]=e[r])})),i}}}]);
//# sourceMappingURL=2559.90a526cd.chunk.js.map