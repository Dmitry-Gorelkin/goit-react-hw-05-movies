"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[206],{1687:function(n,e,r){r.d(e,{OJ:function(){return u},hL:function(){return s},sE:function(){return f},xs:function(){return l},y7:function(){return p}});var t=r(5861),a=r(7757),c=r.n(a),o=r(3263),i="a3bd63f16fb7aecb4bc4aafac25ce962";o.Z.defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var n=(0,t.Z)(c().mark((function n(){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={url:"/trending/movie/day",params:{api_key:i}},n.next=3,(0,o.Z)(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t,a,u=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:1,t={url:"/search/movie",params:{api_key:i,query:e,page:r}},n.next=4,(0,o.Z)(t);case 4:return a=n.sent,n.abrupt("return",a.data);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={url:"/movie/".concat(e),params:{api_key:i}},n.next=3,(0,o.Z)(r);case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={url:"/movie/".concat(e,"/credits"),params:{api_key:i}},n.next=3,(0,o.Z)(r);case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={url:"/movie/".concat(e,"/reviews"),params:{api_key:i}},n.next=3,(0,o.Z)(r);case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},7206:function(n,e,r){r.r(e),r.d(e,{default:function(){return j}});var t,a,c=r(5861),o=r(9439),i=r(7757),u=r.n(i),s=r(2791),p=r(7689),f=r(5218),l=r(1687),d=r(7768),h=r(168),v=r(1087),x=r(6444),m=(0,x.ZP)(v.OL)(t||(t=(0,h.Z)(["\n  display: block;\n  padding: ","px;\n  text-decoration: none;\n  color: ",";\n\n  :hover,\n  :focus-visible {\n    color: ",";\n    box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.2);\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.colors.accent})),b=(0,x.ZP)(v.OL)(a||(a=(0,h.Z)(["\n  display: block;\n  padding: ","px;\n  text-decoration: none;\n  color: ",";\n\n  &.active {\n    color: ",";\n    background-color: ",";\n    border-radius: ","px;\n  }\n\n  &:not(:last-child) {\n    margin-right: ","px;\n  }\n\n  :hover:not(.active),\n  :focus-visible:not(.active) {\n    color: ",";\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.accent})),w=r(966),k=r(184),j=function(){var n,e,r=(0,p.UO)().id,t=(0,p.TH)(),a=(0,s.useRef)(null!==(n=null===(e=t.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/"),i=(0,s.useState)({}),h=(0,o.Z)(i,2),v=h[0],x=h[1];(0,s.useEffect)((function(){var n=function(){var n=(0,c.Z)(u().mark((function n(){var e,t,a,c,o,i,s;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,l.y7)(r);case 3:e=n.sent,t=e.title,a=e.overview,c=e.genres,o=e.poster_path,i=o?"https://image.tmdb.org/t/p/w500/".concat(o):d,s=c.map((function(n){return n.name})).join(" "),x({title:t,overview:a,genresString:s,posterPath:i}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),f.ZP.error("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u043f\u043e\u043f\u043e\u0437\u0436\u0435.");case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}();n()}),[r]);var j=v.title,g=v.overview,Z=v.genresString,y=v.posterPath;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("div",{children:(0,k.jsx)(m,{to:a.current,children:"Go back"})}),(0,k.jsxs)("div",{children:[(0,k.jsx)("img",{src:y,alt:j}),(0,k.jsx)("h2",{children:j}),(0,k.jsx)("p",{children:"User Score: ???"}),(0,k.jsx)("h3",{children:"Overview"}),(0,k.jsx)("p",{children:g}),(0,k.jsx)("h3",{children:"Genres"}),(0,k.jsx)("p",{children:Z})]}),(0,k.jsxs)("div",{children:[(0,k.jsx)("p",{children:"Additional information"}),(0,k.jsx)(b,{to:"cast",children:"Cast"}),(0,k.jsx)(b,{to:"reviews",children:"Reviews"})]}),(0,k.jsx)("div",{children:(0,k.jsx)(s.Suspense,{fallback:(0,k.jsx)(w.a,{}),children:(0,k.jsx)(p.j3,{})})})]})}},7768:function(n,e,r){n.exports=r.p+"static/media/film-card.0e9b7020280c3fcd24fd.jpg"}}]);
//# sourceMappingURL=206.567667bd.chunk.js.map