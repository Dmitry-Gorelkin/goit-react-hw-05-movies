/*! For license information please see 893.332fcbe9.chunk.js.LICENSE.txt */
(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[893],{1687:function(e,t,n){"use strict";n.d(t,{OJ:function(){return s},hL:function(){return c},sE:function(){return p},xs:function(){return h},y7:function(){return l}});var r=n(5861),a=n(7757),i=n.n(a),o=n(3263),u="a3bd63f16fb7aecb4bc4aafac25ce962";o.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={url:"/trending/movie/day",params:{api_key:u}},e.next=3,(0,o.Z)(t);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,a,s=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:1,r={url:"/search/movie",params:{api_key:u,query:t,page:n}},e.next=4,(0,o.Z)(r);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={url:"/movie/".concat(t),params:{api_key:u}},e.next=3,(0,o.Z)(n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={url:"/movie/".concat(t,"/credits"),params:{api_key:u}},e.next=3,(0,o.Z)(n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,a,s=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:1,r={url:"/movie/".concat(t,"/reviews"),params:{api_key:u,page:n}},e.next=4,(0,o.Z)(r);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},4146:function(e,t,n){"use strict";n.d(t,{e:function(){return f}});var r,a,i,o=n(7689),u=n(168),s=n(1087),c=n(6444),l=c.ZP.ul(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  margin-bottom: ","px;\n  padding: ","px;\n"])),(function(e){return e.theme.space[3]}),(function(e){return e.theme.space[3]})),p=c.ZP.li(a||(a=(0,u.Z)(["\n  padding-top: ","px;\n  padding-bottom: ","px;\n"])),(function(e){return e.theme.space[2]}),(function(e){return e.theme.space[2]})),h=(0,c.ZP)(s.OL)(i||(i=(0,u.Z)(["\n  color: ",";\n  text-decoration: none;\n\n  :hover,\n  :focus-visible {\n    color: ",";\n  }\n"])),(function(e){return e.theme.colors.dark}),(function(e){return e.theme.colors.accent})),d=n(184),f=function(e){var t=e.movies,n=(0,o.TH)();return(0,d.jsx)(l,{children:t.map((function(e){var t=e.id,r=e.title;return(0,d.jsx)(p,{children:(0,d.jsx)(h,{to:"/movies/".concat(t),state:{from:n},children:r})},t)}))})}},3893:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var r=n(5861),a=n(9439),i=n(7757),o=n.n(i),u=n(2791),s=n(1087),c=n(5218);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var p=n(4942),h=n(1413),d=n(5671),f=n(3144),m=n(136),g=n(4104),v=n(1694),x=n.n(v),y=function(e){var t,n="".concat(e.rootPrefixCls,"-item"),r=x()(n,"".concat(n,"-").concat(e.page),(t={},(0,p.Z)(t,"".concat(n,"-active"),e.active),(0,p.Z)(t,"".concat(n,"-disabled"),!e.page),(0,p.Z)(t,e.className,!!e.className),t));return u.createElement("li",{title:e.showTitle?e.page:null,className:r,onClick:function(){e.onClick(e.page)},onKeyPress:function(t){e.onKeyPress(t,e.onClick,e.page)},tabIndex:"0"},e.itemRender(e.page,"page",u.createElement("a",{rel:"nofollow"},e.page)))},b=13,P=38,C=40,S=function(e){(0,m.Z)(n,e);var t=(0,g.Z)(n);function n(){var e;(0,d.Z)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={goInputText:""},e.buildOptionText=function(t){return"".concat(t," ").concat(e.props.locale.items_per_page)},e.changeSize=function(t){e.props.changeSize(Number(t))},e.handleChange=function(t){e.setState({goInputText:t.target.value})},e.handleBlur=function(t){var n=e.props,r=n.goButton,a=n.quickGo,i=n.rootPrefixCls,o=e.state.goInputText;r||""===o||(e.setState({goInputText:""}),t.relatedTarget&&(t.relatedTarget.className.indexOf("".concat(i,"-item-link"))>=0||t.relatedTarget.className.indexOf("".concat(i,"-item"))>=0)||a(e.getValidValue()))},e.go=function(t){""!==e.state.goInputText&&(t.keyCode!==b&&"click"!==t.type||(e.setState({goInputText:""}),e.props.quickGo(e.getValidValue())))},e}return(0,f.Z)(n,[{key:"getValidValue",value:function(){var e=this.state.goInputText;return!e||isNaN(e)?void 0:Number(e)}},{key:"getPageSizeOptions",value:function(){var e=this.props,t=e.pageSize,n=e.pageSizeOptions;return n.some((function(e){return e.toString()===t.toString()}))?n:n.concat([t.toString()]).sort((function(e,t){return(isNaN(Number(e))?0:Number(e))-(isNaN(Number(t))?0:Number(t))}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.pageSize,r=t.locale,a=t.rootPrefixCls,i=t.changeSize,o=t.quickGo,s=t.goButton,c=t.selectComponentClass,l=t.buildOptionText,p=t.selectPrefixCls,h=t.disabled,d=this.state.goInputText,f="".concat(a,"-options"),m=c,g=null,v=null,x=null;if(!i&&!o)return null;var y=this.getPageSizeOptions();if(i&&m){var b=y.map((function(t,n){return u.createElement(m.Option,{key:n,value:t.toString()},(l||e.buildOptionText)(t))}));g=u.createElement(m,{disabled:h,prefixCls:p,showSearch:!1,className:"".concat(f,"-size-changer"),optionLabelProp:"children",dropdownMatchSelectWidth:!1,value:(n||y[0]).toString(),onChange:this.changeSize,getPopupContainer:function(e){return e.parentNode},"aria-label":r.page_size,defaultOpen:!1},b)}return o&&(s&&(x="boolean"===typeof s?u.createElement("button",{type:"button",onClick:this.go,onKeyUp:this.go,disabled:h,className:"".concat(f,"-quick-jumper-button")},r.jump_to_confirm):u.createElement("span",{onClick:this.go,onKeyUp:this.go},s)),v=u.createElement("div",{className:"".concat(f,"-quick-jumper")},r.jump_to,u.createElement("input",{disabled:h,type:"text",value:d,onChange:this.handleChange,onKeyUp:this.go,onBlur:this.handleBlur,"aria-label":r.page}),r.page,x)),u.createElement("li",{className:"".concat(f)},g,v)}}]),n}(u.Component);S.defaultProps={pageSizeOptions:["10","20","50","100"]};var k=S;function N(){}function I(e){var t=Number(e);return"number"===typeof t&&!isNaN(t)&&isFinite(t)&&Math.floor(t)===t}function E(e,t,n){var r="undefined"===typeof e?t.pageSize:e;return Math.floor((n.total-1)/r)+1}var w=function(e){(0,m.Z)(n,e);var t=(0,g.Z)(n);function n(e){var r;(0,d.Z)(this,n),(r=t.call(this,e)).getJumpPrevPage=function(){return Math.max(1,r.state.current-(r.props.showLessItems?3:5))},r.getJumpNextPage=function(){return Math.min(E(void 0,r.state,r.props),r.state.current+(r.props.showLessItems?3:5))},r.getItemIcon=function(e,t){var n=r.props.prefixCls,a=e||u.createElement("button",{type:"button","aria-label":t,className:"".concat(n,"-item-link")});return"function"===typeof e&&(a=u.createElement(e,(0,h.Z)({},r.props))),a},r.savePaginationNode=function(e){r.paginationNode=e},r.isValid=function(e){var t=r.props.total;return I(e)&&e!==r.state.current&&I(t)&&t>0},r.shouldDisplayQuickJumper=function(){var e=r.props,t=e.showQuickJumper;return!(e.total<=r.state.pageSize)&&t},r.handleKeyDown=function(e){e.keyCode!==P&&e.keyCode!==C||e.preventDefault()},r.handleKeyUp=function(e){var t=r.getValidValue(e);t!==r.state.currentInputValue&&r.setState({currentInputValue:t}),e.keyCode===b?r.handleChange(t):e.keyCode===P?r.handleChange(t-1):e.keyCode===C&&r.handleChange(t+1)},r.handleBlur=function(e){var t=r.getValidValue(e);r.handleChange(t)},r.changePageSize=function(e){var t=r.state.current,n=E(e,r.state,r.props);t=t>n?n:t,0===n&&(t=r.state.current),"number"===typeof e&&("pageSize"in r.props||r.setState({pageSize:e}),"current"in r.props||r.setState({current:t,currentInputValue:t})),r.props.onShowSizeChange(t,e),"onChange"in r.props&&r.props.onChange&&r.props.onChange(t,e)},r.handleChange=function(e){var t=r.props,n=t.disabled,a=t.onChange,i=r.state,o=i.pageSize,u=i.current,s=i.currentInputValue;if(r.isValid(e)&&!n){var c=E(void 0,r.state,r.props),l=e;return e>c?l=c:e<1&&(l=1),"current"in r.props||r.setState({current:l}),l!==s&&r.setState({currentInputValue:l}),a(l,o),l}return u},r.prev=function(){r.hasPrev()&&r.handleChange(r.state.current-1)},r.next=function(){r.hasNext()&&r.handleChange(r.state.current+1)},r.jumpPrev=function(){r.handleChange(r.getJumpPrevPage())},r.jumpNext=function(){r.handleChange(r.getJumpNextPage())},r.hasPrev=function(){return r.state.current>1},r.hasNext=function(){return r.state.current<E(void 0,r.state,r.props)},r.runIfEnter=function(e,t){if("Enter"===e.key||13===e.charCode){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];t.apply(void 0,r)}},r.runIfEnterPrev=function(e){r.runIfEnter(e,r.prev)},r.runIfEnterNext=function(e){r.runIfEnter(e,r.next)},r.runIfEnterJumpPrev=function(e){r.runIfEnter(e,r.jumpPrev)},r.runIfEnterJumpNext=function(e){r.runIfEnter(e,r.jumpNext)},r.handleGoTO=function(e){e.keyCode!==b&&"click"!==e.type||r.handleChange(r.state.currentInputValue)};var a=e.onChange!==N;"current"in e&&!a&&console.warn("Warning: You provided a `current` prop to a Pagination component without an `onChange` handler. This will render a read-only component.");var i=e.defaultCurrent;"current"in e&&(i=e.current);var o=e.defaultPageSize;return"pageSize"in e&&(o=e.pageSize),i=Math.min(i,E(o,void 0,e)),r.state={current:i,currentInputValue:i,pageSize:o},r}return(0,f.Z)(n,[{key:"componentDidUpdate",value:function(e,t){var n=this.props.prefixCls;if(t.current!==this.state.current&&this.paginationNode){var r=this.paginationNode.querySelector(".".concat(n,"-item-").concat(t.current));r&&document.activeElement===r&&r.blur()}}},{key:"getValidValue",value:function(e){var t=e.target.value,n=E(void 0,this.state,this.props),r=this.state.currentInputValue;return""===t?t:isNaN(Number(t))?r:t>=n?n:Number(t)}},{key:"getShowSizeChanger",value:function(){var e=this.props,t=e.showSizeChanger,n=e.total,r=e.totalBoundaryShowSizeChanger;return"undefined"!==typeof t?t:n>r}},{key:"renderPrev",value:function(e){var t=this.props,n=t.prevIcon,r=(0,t.itemRender)(e,"prev",this.getItemIcon(n,"prev page")),a=!this.hasPrev();return(0,u.isValidElement)(r)?(0,u.cloneElement)(r,{disabled:a}):r}},{key:"renderNext",value:function(e){var t=this.props,n=t.nextIcon,r=(0,t.itemRender)(e,"next",this.getItemIcon(n,"next page")),a=!this.hasNext();return(0,u.isValidElement)(r)?(0,u.cloneElement)(r,{disabled:a}):r}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,r=t.className,a=t.style,i=t.disabled,o=t.hideOnSinglePage,s=t.total,c=t.locale,h=t.showQuickJumper,d=t.showLessItems,f=t.showTitle,m=t.showTotal,g=t.simple,v=t.itemRender,b=t.showPrevNextJumpers,P=t.jumpPrevIcon,C=t.jumpNextIcon,S=t.selectComponentClass,N=t.selectPrefixCls,I=t.pageSizeOptions,w=this.state,Z=w.current,_=w.pageSize,z=w.currentInputValue;if(!0===o&&s<=_)return null;var j=E(void 0,this.state,this.props),T=[],O=null,V=null,K=null,J=null,q=null,B=h&&h.goButton,L=d?1:2,U=Z-1>0?Z-1:0,G=Z+1<j?Z+1:j,R=Object.keys(this.props).reduce((function(t,n){return"data-"!==n.substr(0,5)&&"aria-"!==n.substr(0,5)&&"role"!==n||(t[n]=e.props[n]),t}),{}),D=m&&u.createElement("li",{className:"".concat(n,"-total-text")},m(s,[0===s?0:(Z-1)*_+1,Z*_>s?s:Z*_]));if(g)return B&&(q="boolean"===typeof B?u.createElement("button",{type:"button",onClick:this.handleGoTO,onKeyUp:this.handleGoTO},c.jump_to_confirm):u.createElement("span",{onClick:this.handleGoTO,onKeyUp:this.handleGoTO},B),q=u.createElement("li",{title:f?"".concat(c.jump_to).concat(Z,"/").concat(j):null,className:"".concat(n,"-simple-pager")},q)),u.createElement("ul",l({className:x()(n,"".concat(n,"-simple"),(0,p.Z)({},"".concat(n,"-disabled"),i),r),style:a,ref:this.savePaginationNode},R),D,u.createElement("li",{title:f?c.prev_page:null,onClick:this.prev,tabIndex:this.hasPrev()?0:null,onKeyPress:this.runIfEnterPrev,className:x()("".concat(n,"-prev"),(0,p.Z)({},"".concat(n,"-disabled"),!this.hasPrev())),"aria-disabled":!this.hasPrev()},this.renderPrev(U)),u.createElement("li",{title:f?"".concat(Z,"/").concat(j):null,className:"".concat(n,"-simple-pager")},u.createElement("input",{type:"text",value:z,disabled:i,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onChange:this.handleKeyUp,onBlur:this.handleBlur,size:"3"}),u.createElement("span",{className:"".concat(n,"-slash")},"/"),j),u.createElement("li",{title:f?c.next_page:null,onClick:this.next,tabIndex:this.hasPrev()?0:null,onKeyPress:this.runIfEnterNext,className:x()("".concat(n,"-next"),(0,p.Z)({},"".concat(n,"-disabled"),!this.hasNext())),"aria-disabled":!this.hasNext()},this.renderNext(G)),q);if(j<=3+2*L){var M={locale:c,rootPrefixCls:n,onClick:this.handleChange,onKeyPress:this.runIfEnter,showTitle:f,itemRender:v};j||T.push(u.createElement(y,l({},M,{key:"noPager",page:1,className:"".concat(n,"-item-disabled")})));for(var Q=1;Q<=j;Q+=1){var A=Z===Q;T.push(u.createElement(y,l({},M,{key:Q,page:Q,active:A})))}}else{var F=d?c.prev_3:c.prev_5,W=d?c.next_3:c.next_5;b&&(O=u.createElement("li",{title:f?F:null,key:"prev",onClick:this.jumpPrev,tabIndex:"0",onKeyPress:this.runIfEnterJumpPrev,className:x()("".concat(n,"-jump-prev"),(0,p.Z)({},"".concat(n,"-jump-prev-custom-icon"),!!P))},v(this.getJumpPrevPage(),"jump-prev",this.getItemIcon(P,"prev page"))),V=u.createElement("li",{title:f?W:null,key:"next",tabIndex:"0",onClick:this.jumpNext,onKeyPress:this.runIfEnterJumpNext,className:x()("".concat(n,"-jump-next"),(0,p.Z)({},"".concat(n,"-jump-next-custom-icon"),!!C))},v(this.getJumpNextPage(),"jump-next",this.getItemIcon(C,"next page")))),J=u.createElement(y,{locale:c,last:!0,rootPrefixCls:n,onClick:this.handleChange,onKeyPress:this.runIfEnter,key:j,page:j,active:!1,showTitle:f,itemRender:v}),K=u.createElement(y,{locale:c,rootPrefixCls:n,onClick:this.handleChange,onKeyPress:this.runIfEnter,key:1,page:1,active:!1,showTitle:f,itemRender:v});var H=Math.max(1,Z-L),Y=Math.min(Z+L,j);Z-1<=L&&(Y=1+2*L),j-Z<=L&&(H=j-2*L);for(var X=H;X<=Y;X+=1){var $=Z===X;T.push(u.createElement(y,{locale:c,rootPrefixCls:n,onClick:this.handleChange,onKeyPress:this.runIfEnter,key:X,page:X,active:$,showTitle:f,itemRender:v}))}Z-1>=2*L&&3!==Z&&(T[0]=(0,u.cloneElement)(T[0],{className:"".concat(n,"-item-after-jump-prev")}),T.unshift(O)),j-Z>=2*L&&Z!==j-2&&(T[T.length-1]=(0,u.cloneElement)(T[T.length-1],{className:"".concat(n,"-item-before-jump-next")}),T.push(V)),1!==H&&T.unshift(K),Y!==j&&T.push(J)}var ee=!this.hasPrev()||!j,te=!this.hasNext()||!j;return u.createElement("ul",l({className:x()(n,r,(0,p.Z)({},"".concat(n,"-disabled"),i)),style:a,ref:this.savePaginationNode},R),D,u.createElement("li",{title:f?c.prev_page:null,onClick:this.prev,tabIndex:ee?null:0,onKeyPress:this.runIfEnterPrev,className:x()("".concat(n,"-prev"),(0,p.Z)({},"".concat(n,"-disabled"),ee)),"aria-disabled":ee},this.renderPrev(U)),T,u.createElement("li",{title:f?c.next_page:null,onClick:this.next,tabIndex:te?null:0,onKeyPress:this.runIfEnterNext,className:x()("".concat(n,"-next"),(0,p.Z)({},"".concat(n,"-disabled"),te)),"aria-disabled":te},this.renderNext(G)),u.createElement(k,{disabled:i,locale:c,rootPrefixCls:n,selectComponentClass:S,selectPrefixCls:N,changeSize:this.getShowSizeChanger()?this.changePageSize:null,current:Z,pageSize:_,pageSizeOptions:I,quickGo:this.shouldDisplayQuickJumper()?this.handleChange:null,goButton:B}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n={};if("current"in e&&(n.current=e.current,e.current!==t.current&&(n.currentInputValue=n.current)),"pageSize"in e&&e.pageSize!==t.pageSize){var r=t.current,a=E(e.pageSize,t,e);r=r>a?a:r,"current"in e||(n.current=r,n.currentInputValue=r),n.pageSize=e.pageSize}return n}}]),n}(u.Component);w.defaultProps={defaultCurrent:1,total:0,defaultPageSize:10,onChange:N,className:"",selectPrefixCls:"rc-select",prefixCls:"rc-pagination",selectComponentClass:null,hideOnSinglePage:!1,showPrevNextJumpers:!0,showQuickJumper:!1,showLessItems:!1,showTitle:!0,onShowSizeChange:N,locale:{items_per_page:"\u6761/\u9875",jump_to:"\u8df3\u81f3",jump_to_confirm:"\u786e\u5b9a",page:"\u9875",prev_page:"\u4e0a\u4e00\u9875",next_page:"\u4e0b\u4e00\u9875",prev_5:"\u5411\u524d 5 \u9875",next_5:"\u5411\u540e 5 \u9875",prev_3:"\u5411\u524d 3 \u9875",next_3:"\u5411\u540e 3 \u9875",page_size:"\u9875\u7801"},style:{},itemRender:function(e,t,n){return n},totalBoundaryShowSizeChanger:50};var Z,_,z,j=w,T=n(1687),O=n(168),V=n(6444),K=V.ZP.div(Z||(Z=(0,O.Z)(["\n  padding: ","px;\n  margin-bottom: ","px; ;\n"])),(function(e){return e.theme.space[3]}),(function(e){return e.theme.space[3]})),J=V.ZP.input(_||(_=(0,O.Z)(["\n  margin-right: ","px;\n"])),(function(e){return e.theme.space[4]})),q=V.ZP.button(z||(z=(0,O.Z)(["\n  width: 100px;\n\n  color: ",";\n  background-color: ",";\n\n  padding-top: ","px;\n  padding-bottom: ","px;\n\n  border: none;\n  border-radius: ","px;\n\n  cursor: pointer;\n\n  :hover,\n  :focus-visible {\n    box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.2);\n  }\n"])),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.accent}),(function(e){return e.theme.space[1]}),(function(e){return e.theme.space[1]}),(function(e){return e.theme.space[3]})),B=n(184),L=function(e){var t=e.query,n=e.onSubmit,r=(0,u.useState)((function(){return t})),i=(0,a.Z)(r,2),o=i[0],s=i[1];return(0,B.jsx)(K,{children:(0,B.jsxs)("form",{onSubmit:n,children:[(0,B.jsx)(J,{type:"text",placeholder:"Search name movie",value:o,onChange:function(e){return s(e.target.value)}}),(0,B.jsx)(q,{type:"submit",children:"Search"})]})})},U=n(4146),G=n(966),R=function(){var e=(0,s.lr)(),t=(0,a.Z)(e,2),n=t[0],i=t[1],l=(0,u.useState)([]),p=(0,a.Z)(l,2),h=p[0],d=p[1],f=(0,u.useState)((function(){var e;return null!==(e=n.get("query"))&&void 0!==e?e:""})),m=(0,a.Z)(f,2),g=m[0],v=m[1],x=(0,u.useState)((function(){var e;return null!==(e=n.get("page"))&&void 0!==e?e:1})),y=(0,a.Z)(x,2),b=y[0],P=y[1],C=(0,u.useState)(0),S=(0,a.Z)(C,2),k=S[0],N=S[1],I=(0,u.useState)("ideal"),E=(0,a.Z)(I,2),w=E[0],Z=E[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(o().mark((function e(t,n){var r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z("laoding"),d([]),N(0),e.prev=3,e.next=6,(0,T.hL)(t,n);case 6:if(0!==(r=e.sent).total_results){e.next=12;break}return(0,c.ZP)("\u041f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443: ".concat(t,", \u043c\u044b \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0448\u043b\u0438.")),i({}),Z("ideal"),e.abrupt("return");case 12:a=r.results.map((function(e){return{id:e.id,title:e.title}})),i({page:n,query:t}),N(r.total_results),d(a),Z("ideal"),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(3),c.ZP.error("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u043f\u043e\u043f\u043e\u0437\u0436\u0435."),Z("ideal");case 23:case"end":return e.stop()}}),e,null,[[3,19]])})));return function(t,n){return e.apply(this,arguments)}}();g&&e(g,b)}),[g,b,i]),(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(L,{onSubmit:function(e){e.preventDefault();var t=e.target[0].value.trim().toLocaleLowerCase();""!==t?(P(1),v(t)):(0,c.ZP)("\u0412\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442")},query:g}),0!==h.length&&(0,B.jsx)(U.e,{movies:h}),"laoding"===w&&(0,B.jsx)(G.a,{}),k>20&&(0,B.jsx)(j,{onChange:function(e){P(e)},current:b,total:k,pageSize:20,locale:{items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"}})]})}},1694:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var o=a.apply(null,n);o&&e.push(o)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var u in n)r.call(n,u)&&n[u]&&e.push(u)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()}}]);
//# sourceMappingURL=893.332fcbe9.chunk.js.map