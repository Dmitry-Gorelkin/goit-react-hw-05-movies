"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{1687:function(n,e,r){r.d(e,{OJ:function(){return i},hL:function(){return s},sE:function(){return f},xs:function(){return d},y7:function(){return p}});var t=r(5861),a=r(7757),u=r.n(a),c=r(3263),o="a3bd63f16fb7aecb4bc4aafac25ce962";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var n=(0,t.Z)(u().mark((function n(){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={url:"/trending/movie/day",params:{api_key:o}},n.next=3,(0,c.Z)(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t,a,i=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:1,t={url:"/search/movie",params:{api_key:o,query:e,page:r}},n.next=4,(0,c.Z)(t);case 4:return a=n.sent,n.abrupt("return",a.data);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={url:"/movie/".concat(e),params:{api_key:o}},n.next=3,(0,c.Z)(r);case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={url:"/movie/".concat(e,"/credits"),params:{api_key:o}},n.next=3,(0,c.Z)(r);case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t,a,i=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:1,t={url:"/movie/".concat(e,"/reviews"),params:{api_key:o,page:r}},n.next=4,(0,c.Z)(t);case 4:return a=n.sent,n.abrupt("return",a.data);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},4387:function(n,e,r){r.r(e),r.d(e,{default:function(){return P}});var t,a,u,c,o,i=r(3433),s=r(5861),p=r(9439),f=r(7757),d=r.n(f),l=r(2791),h=r(7689),x=r(5218),v=r(1687),m=r(966),b=r(168),Z=r(6444),g=Z.ZP.ul(t||(t=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: ","px;\n"])),(function(n){return n.theme.space[3]})),k=Z.ZP.li(a||(a=(0,b.Z)(["\n  display: block;\n\n  padding-top: ","px;\n  padding-bottom: ","px;\n\n  border-bottom: 1px solid rgba(0, 194, 224, 0.5);\n\n  p:not(:last-child) {\n    margin-bottom: ","px;\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[2]})),w=Z.ZP.span(u||(u=(0,b.Z)(["\n  font-weight: bold;\n"]))),y=Z.ZP.div(c||(c=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n\n  padding: ","px;\n"])),(function(n){return n.theme.space[3]})),j=Z.ZP.div(o||(o=(0,b.Z)(["\n  width: ","px;\n\n  display: flex;\n  justify-content: center;\n\n  padding-top: ","px;\n  padding-bottom: ","px;\n\n  border-radius: ","px;\n\n  cursor: pointer;\n\n  :hover,\n  :focus-visible {\n    color: ",";\n    box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.2);\n  }\n"])),(function(n){return n.theme.space[7]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.accent})),_=r(184),P=function(){var n=(0,h.UO)().id,e=(0,l.useState)([]),r=(0,p.Z)(e,2),t=r[0],a=r[1],u=(0,l.useState)(1),c=(0,p.Z)(u,2),o=c[0],f=c[1],b=(0,l.useState)("ideal"),Z=(0,p.Z)(b,2),P=Z[0],C=Z[1];return(0,l.useEffect)((function(){var e=function(){var n=(0,s.Z)(d().mark((function n(e,r){var t,u;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,v.xs)(e,r);case 3:if(t=n.sent,C("laoding"),0!==t.total_results){n.next=8;break}return C("noIdeal"),n.abrupt("return");case 8:u=t.results.map((function(n){return{id:n.id,author:n.author,content:n.content}})),a((function(n){return[].concat((0,i.Z)(n),(0,i.Z)(u))})),r<t.total_pages?C("loadMore"):C("ideal"),n.next=17;break;case 13:n.prev=13,n.t0=n.catch(0),x.ZP.error("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u043f\u043e\u043f\u043e\u0437\u0436\u0435."),C("error");case 17:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(e,r){return n.apply(this,arguments)}}();e(n,o)}),[n,o]),"laoding"===P?(0,_.jsx)(m.a,{}):"error"!==P?(0,_.jsxs)(_.Fragment,{children:[0!==t.length&&(0,_.jsx)(g,{children:t.map((function(n){var e=n.id,r=n.author,t=n.content;return(0,_.jsxs)(k,{children:[(0,_.jsxs)("p",{children:["Author: ",(0,_.jsx)(w,{children:r})]}),(0,_.jsx)("p",{children:t})]},e)}))}),"noIdeal"===P&&(0,_.jsx)("p",{children:"We don't have any reviews for this movie."}),"loadMore"===P&&(0,_.jsx)(y,{children:(0,_.jsx)(j,{onClick:function(){return f((function(n){return n+1}))},children:"Load More"})})]}):void 0}}}]);
//# sourceMappingURL=387.b995e287.chunk.js.map