"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{1687:function(r,n,e){e.d(n,{OJ:function(){return s},hL:function(){return o},sE:function(){return f},xs:function(){return d},y7:function(){return p}});var t=e(5861),a=e(7757),c=e.n(a),u=e(3263),i="a3bd63f16fb7aecb4bc4aafac25ce962";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var r=(0,t.Z)(c().mark((function r(){var n,e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n={url:"/trending/movie/day",params:{api_key:i}},r.next=3,(0,u.Z)(n);case 3:return e=r.sent,r.abrupt("return",e.data);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,t.Z)(c().mark((function r(n){var e,t,a,s=arguments;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=s.length>1&&void 0!==s[1]?s[1]:1,t={url:"/search/movie",params:{api_key:i,query:n,page:e}},r.next=4,(0,u.Z)(t);case 4:return a=r.sent,r.abrupt("return",a.data);case 6:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),p=function(){var r=(0,t.Z)(c().mark((function r(n){var e,t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e={url:"/movie/".concat(n),params:{api_key:i}},r.next=3,(0,u.Z)(e);case 3:return t=r.sent,r.abrupt("return",t.data);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),f=function(){var r=(0,t.Z)(c().mark((function r(n){var e,t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e={url:"/movie/".concat(n,"/credits"),params:{api_key:i}},r.next=3,(0,u.Z)(e);case 3:return t=r.sent,r.abrupt("return",t.data);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),d=function(){var r=(0,t.Z)(c().mark((function r(n){var e,t,a,s=arguments;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=s.length>1&&void 0!==s[1]?s[1]:1,t={url:"/movie/".concat(n,"/reviews"),params:{api_key:i,page:e}},r.next=4,(0,u.Z)(t);case 4:return a=r.sent,r.abrupt("return",a.data);case 6:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}()},9736:function(r,n,e){e.r(n),e.d(n,{default:function(){return j}});var t,a,c,u,i=e(3433),s=e(5861),o=e(9439),p=e(7757),f=e.n(p),d=e(2791),l=e(7689),h=e(5218),v=e(1687),m=e(7768),x=e(966),Z=e(168),w=e(6444),k=w.ZP.ul(t||(t=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: ","px;\n"])),(function(r){return r.theme.space[3]})),b=w.ZP.li(a||(a=(0,Z.Z)(["\n  display: block;\n  padding: ","px;\n"])),(function(r){return r.theme.space[3]})),y=w.ZP.img(c||(c=(0,Z.Z)(["\n  width: 100px;\n"]))),g=w.ZP.p(u||(u=(0,Z.Z)(["\n  font-weight: bold;\n"]))),_=e(184),j=function(){var r=(0,l.UO)().id,n=(0,d.useState)([]),e=(0,o.Z)(n,2),t=e[0],a=e[1],c=(0,d.useState)("ideal"),u=(0,o.Z)(c,2),p=u[0],Z=u[1];return(0,d.useEffect)((function(){var n=function(){var n=(0,s.Z)(f().mark((function n(){var e,t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return Z("laoding"),n.prev=1,n.next=4,(0,v.sE)(r);case 4:e=n.sent,t=e.cast.map((function(r){var n=r.id,e=r.name,t=r.character,a=r.profile_path;return{id:n,name:e,character:t,profilePath:a?"https://image.tmdb.org/t/p/w500/".concat(a):m}})),a((0,i.Z)(t)),Z("ideal"),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(1),h.ZP.error("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u043f\u043e\u043f\u043e\u0437\u0436\u0435."),Z("error");case 14:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(){return n.apply(this,arguments)}}();n()}),[r]),"laoding"===p?(0,_.jsx)(x.a,{}):"error"!==p&&"ideal"===p?(0,_.jsx)(k,{children:t.map((function(r){var n=r.id,e=r.name,t=r.character,a=r.profilePath;return(0,_.jsxs)(b,{children:[(0,_.jsx)(y,{src:a,alt:"name"}),(0,_.jsx)(g,{children:e}),(0,_.jsxs)("p",{children:["Character: ",t]})]},n)}))}):void 0}},7768:function(r,n,e){r.exports=e.p+"static/media/film-card.0e9b7020280c3fcd24fd.jpg"}}]);
//# sourceMappingURL=736.63566a41.chunk.js.map