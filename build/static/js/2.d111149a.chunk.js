"use strict";(self.webpackChunkcoladefi_frontend=self.webpackChunkcoladefi_frontend||[]).push([[2],{33866:function(n,t,r){r.d(t,{AH:function(){return p},Ny:function(){return o},X_:function(){return a},ZX:function(){return s},_l:function(){return f},y8:function(){return c}});var e=r(47313),u=r(27163),i=r(48574),o=function(n){var t=(0,u.Z)();return(0,e.useMemo)((function(){return(0,i.I9)(n,t)}),[n,t])},a=function(n){var t=(0,u.Z)();return(0,e.useMemo)((function(){return(0,i.jS)(n,t)}),[n,t])},c=function(){var n=(0,u.Z)();return(0,e.useMemo)((function(){return(0,i.aE)(n)}),[n])},s=function(){var n=(0,u.Z)();return(0,e.useMemo)((function(){return(0,i.PN)(n)}),[n])},f=function(){var n=(0,u.Z)();return(0,e.useMemo)((function(){return(0,i.R)(n)}),[n])},p=function(){var n=(0,u.Z)();return(0,e.useMemo)((function(){return(0,i.V9)(n)}),[n])}},98059:function(n,t,r){r.d(t,{us:function(){return m},vj:function(){return d}});var e=r(42982),u=r(74165),i=r(15861),o=r(47313),a=r(82229),c=r(20438),s=r(63199),f=r(66285),p=r(33866),d=function(n,t){var r=(0,c.T)(),e=(0,a.Ge)().account,d=(0,p.y8)(),m=(0,p._l)();return{onReward:(0,o.useCallback)((0,i.Z)((0,u.Z)().mark((function i(){var o;return(0,u.Z)().wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,f.gL)(t?m:d,n,e,t);case 2:return o=u.sent,r((0,s.IV)(e)),u.abrupt("return",o);case 5:case"end":return u.stop()}}),i)}))),[e,r,n,d,m,t])}},m=function(n){var t=(0,a.Ge)().account,r=(0,p.y8)(),c=(0,p._l)();return{onReward:(0,o.useCallback)((0,i.Z)((0,u.Z)().mark((function i(){var o;return(0,u.Z)().wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return o=n.reduce((function(n,u){return u.isKingdom?[].concat((0,e.Z)(n),[(0,f.gL)(c,u.pid,t,u.isKingdom)]):[].concat((0,e.Z)(n),[(0,f.gL)(r,u.pid,t,u.isKingdom)])}),[]),u.abrupt("return",Promise.all(o));case 2:case"end":return u.stop()}}),i)}))),[t,n,r,c])}}},1760:function(n,t,r){var e=r(47313),u=r(16031),i=r(81470);t.Z=function(){var n=(0,e.useContext)(i.y).translations;return function(t,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(0===n.length)return r;var i=n.find((function(n){return n.data.stringId===t}));if(i){var o=i.data.text,a=o.includes("%");if(a){var c=o;return(0,u.isEmpty)(e)?r:(Object.keys(e).forEach((function(n){var t=new RegExp("%".concat(n,"%"),"g");c=c.replace(t,e[n])})),c)}return o}return r}}},27163:function(n,t,r){var e=r(70885),u=r(47313),i=r(11107),o=r.n(i),a=r(82229),c=r(7964);t.Z=function(){var n=(0,a.Ge)().library,t=(0,u.useRef)(n),r=(0,u.useState)(n?new(o())(n):(0,c.l)()),i=(0,e.Z)(r,2),s=i[0],f=i[1];return(0,u.useEffect)((function(){n!==t.current&&(f(n?new(o())(n):(0,c.l)()),t.current=n)}),[n]),s}},44383:function(n,t,r){r.d(t,{E:function(){return o},yW:function(){return a}});var e=r(58704),u=r.n(e),i=r(18941),o=function(n,t,r,e){var o=new(u())(t).times(e).times(i.Bi),a=new(u())(n).times(r),c=o.div(a).times(100);return c.isNaN()||!c.isFinite()?null:c.toNumber()},a=function(n,t,r,e,o){if(e){var a=i.DR.times(n);"Bakery"===o?a=i.BG.times(n):"Belt"===o&&(a=i.f7.times(n));var c=a.times(t).div(r).times(100);return c.isNaN()||!c.isFinite()?null:c.toNumber()}var s=i.IO.times(i.Bi).times(n),f=r.toNumber()?r:new(u())(0),p=s.times(t).div(f).times(100);return p.isNaN()||!p.isFinite()?null:p.toNumber()}},66285:function(n,t,r){r.d(t,{Ge:function(){return h},HV:function(){return d},I4:function(){return v},LK:function(){return f},QS:function(){return Z},YR:function(){return p},dE:function(){return s},gL:function(){return l},uG:function(){return m}});var e=r(74165),u=r(15861),i=r(58704),o=r.n(i),a=r(18941),c=r(12304),s=(r(38301),function(){var n=(0,u.Z)((0,e.Z)().mark((function n(t,r,u){return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.methods.approve(r.options.address,c.Bz).send({from:u}));case 1:case"end":return n.stop()}}),n)})));return function(t,r,e){return n.apply(this,arguments)}}()),f=function(){var n=(0,u.Z)((0,e.Z)().mark((function n(t,r,u,i){return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.methods.deposit(r,new(o())(u).times(a.o3).toString()).send({from:i}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(t,r,e,u){return n.apply(this,arguments)}}(),p=function(){var n=(0,u.Z)((0,e.Z)().mark((function n(t,r,u){var i,c=arguments;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=c.length>3&&void 0!==c[3]?c[3]:0,n.abrupt("return",t.methods.deposit(new(o())(r).times(a.o3).toString(),i).send({from:u}).on("transactionHash",(function(n){return n.transactionHash})));case 2:case"end":return n.stop()}}),n)})));return function(t,r,e){return n.apply(this,arguments)}}(),d=function(){var n=(0,u.Z)((0,e.Z)().mark((function n(t,r,u,i){return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.methods.withdraw(r,new(o())(u).times(a.o3).toString()).send({from:i}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(t,r,e,u){return n.apply(this,arguments)}}(),m=function(){var n=(0,u.Z)((0,e.Z)().mark((function n(t,r,u){return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.methods.withdraw(r).send({from:u}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(t,r,e){return n.apply(this,arguments)}}(),v=function(){var n=(0,u.Z)((0,e.Z)().mark((function n(t,r){return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.methods.withdrawAll().send({from:r}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),h=function(){var n=(0,u.Z)((0,e.Z)().mark((function n(t,r){return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.methods.unlock(r).send({from:r}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),l=function(){var n=(0,u.Z)((0,e.Z)().mark((function n(t,r,u,i){return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!i){n.next=2;break}return n.abrupt("return",t.methods.withdraw(r,"0").send({from:u}).on("transactionHash",(function(n){return n.transactionHash})));case 2:return n.abrupt("return",t.methods.deposit(r,"0").send({from:u}).on("transactionHash",(function(n){return n.transactionHash})));case 3:case"end":return n.stop()}}),n)})));return function(t,r,e,u){return n.apply(this,arguments)}}(),Z=function(){var n=(0,u.Z)((0,e.Z)().mark((function n(t,r,u,i,o,a){return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.methods.claim(u,i,o,a).send({from:r}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(t,r,e,u,i,o){return n.apply(this,arguments)}}()},54545:function(n,t,r){var e=r(1413),u=(r(47313),r(17910)),i=r(46417);t.Z=function(n){return(0,i.jsx)(u.Z,(0,e.Z)({fontSize:"16px",lineHeight:"1.5",color:"textSubtle",prefix:"~$",bold:!1,decimals:2},n))}},17910:function(n,t,r){var e=r(47313),u=r(87977),i=r(90240),o=r(46417);t.Z=function(n){var t=n.value,r=n.decimals,a=n.fontSize,c=void 0===a?"40px":a,s=n.lineHeight,f=void 0===s?"1":s,p=n.prefix,d=void 0===p?"":p,m=n.bold,v=void 0===m||m,h=n.color,l=void 0===h?"text":h,Z=(0,u.$i)({start:0,end:t,duration:1,separator:",",decimals:void 0!==r?r:t<0?4:t>1e5?0:3}),w=Z.countUp,b=Z.update,x=(0,e.useRef)(b);return(0,e.useEffect)((function(){x.current(t)}),[t,x]),(0,o.jsxs)(i.xv,{bold:v,fontSize:c,style:{lineHeight:f},color:l,children:[d,w]})}}}]);