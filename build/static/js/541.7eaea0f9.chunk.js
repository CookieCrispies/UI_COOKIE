"use strict";(self.webpackChunkCookiedefi_frontend=self.webpackChunkCookiedefi_frontend||[]).push([[541],{70668:function(n,e,t){var r=t(74165),i=t(15861),a=t(70885),s=t(47313),c=t(82229),o=t(31881),u=t.n(o),l=t(1689);e.Z=function(){var n=(0,s.useState)(),e=(0,a.Z)(n,2),t=e[0],o=e[1],d=(0,c.Ge)().account,f=(0,l.Z)().fastRefresh;return(0,s.useEffect)((function(){var n=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("https://bnb.fbslo.net/?address=".concat(d),{timeout:7e3}).then((function(n){return n.data})).catch((function(){return{error:!0}}));case 2:e=n.sent,o(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();d&&n()}),[d,f]),t}},7374:function(n,e,t){t.d(e,{z:function(){return d}});var r=t(74165),i=t(15861),a=t(47313),s=t(82229),c=t(20438),o=t(63199),u=t(66285),l=t(33866),d=function(n){var e=(0,c.T)(),t=(0,s.Ge)().account,d=(0,l.AH)(),f=n.user,x=void 0===f?"":f,p=n.amount,m=void 0===p?"":p,h=n.nonce,g=void 0===h?"":h,Z=n.signature,j=void 0===Z?"":Z;return{onClaim:(0,a.useCallback)((0,i.Z)((0,r.Z)().mark((function n(){var i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.QS)(d,t,x,m,g,j);case 2:return i=n.sent,e((0,o.IV)(t)),n.abrupt("return",i);case 5:case"end":return n.stop()}}),n)}))),[e,t,x,m,g,j,d])}}},74451:function(n,e,t){t.d(e,{ZP:function(){return h},rQ:function(){return m},A5:function(){return p}});var r=t(74165),i=t(15861),a=t(70885),s=t(47313),c=t(58704),o=t.n(c),u=t(82229),l=t(48574),d=t(38301),f=t(27163),x=t(1689),p=function(){var n=(0,x.Z)().slowRefresh,e=(0,s.useState)(),t=(0,a.Z)(e,2),c=t[0],u=t[1];return(0,s.useEffect)((function(){function n(){return(n=(0,i.Z)((0,r.Z)().mark((function n(){var e,t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=(0,l.XT)(),n.next=3,e.methods.totalSupply().call();case 3:t=n.sent,u(new(o())(t));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[n]),c},m=function(n){var e=(0,s.useState)(d.H),t=(0,a.Z)(e,2),c=t[0],u=t[1],p=(0,x.Z)().slowRefresh,m=(0,f.Z)();return(0,s.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,l.jS)(n,m),e.next=3,t.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:i=e.sent,u(new(o())(i));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[m,n,p]),c},h=function(n){var e=(0,s.useState)(d.H),t=(0,a.Z)(e,2),c=t[0],p=t[1],m=(0,u.Ge)().account,h=(0,f.Z)(),g=(0,x.Z)().fastRefresh;return(0,s.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,l.jS)(n,h),e.next=3,t.methods.balanceOf(m).call();case 3:i=e.sent,p(new(o())(i));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();m&&e()}),[m,n,h,g]),c}},13541:function(n,e,t){t.r(e),t.d(e,{default:function(){return Cn}});var r,i,a,s,c,o,u,l,d,f,x,p,m,h,g,Z,j=t(30168),v=t(47313),b=t(49184),w=t(90240),k=t(1760),C=t(84485),y=t(74165),S=t(15861),z=t(70885),P=t(82229),L=t(98059),D=t(42982),A=t(1413),E=t(58704),O=t.n(E),B=t(23935),K=t(30652),W=t(84951),G=t(6440),H=t(72731),Q=t(1689),X=function(){var n=(0,v.useState)([]),e=(0,z.Z)(n,2),t=e[0],r=e[1],i=(0,P.Ge)().account,a=(0,Q.Z)().fastRefresh;return(0,v.useEffect)((function(){var n=H.jt.filter((function(n){return!n.isKingdom})),e=H.jt.filter((function(n){return n.isKingdom&&!n.isKingdomLocked})),t=function(){var t=(0,S.Z)((0,y.Z)().mark((function t(){var a,s,c,o,u,l,d;return(0,y.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.map((function(n){return{address:(0,K.Oc)(),name:"pendingCookie",params:[n.pid,i]}})),t.next=3,(0,B.Z)(W,a);case 3:return s=t.sent,c=n.map((function(n,e){return(0,A.Z)((0,A.Z)({},n),{},{balance:new(O())(s[e])})})),o=e.filter((function(n){return 100===n.pid})).map((function(n){return{address:(0,K.LB)(),name:"pendingCookie",params:[n.pid,i]}})),t.next=8,(0,B.Z)(G,o);case 8:u=t.sent,l=e.map((function(n,e){return(0,A.Z)((0,A.Z)({},n),{},{balance:new(O())(u[e])})})),d=H.jt.filter((function(n){return n.isKingdomLocked})).map((function(n){return(0,A.Z)((0,A.Z)({},n),{},{balance:new(O())(0)})})),r([].concat((0,D.Z)(c),(0,D.Z)(d),(0,D.Z)(l)));case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();i&&t()}),[i,a]),t},N=t(70668),R=t(7374),F=t(23282),I=t(19560),T=function(){var n=(0,v.useState)([]),e=(0,z.Z)(n,2),t=e[0],r=e[1],i=(0,P.Ge)().account,a=(0,Q.Z)().fastRefresh;return(0,v.useEffect)((function(){var n=function(){var n=(0,S.Z)((0,y.Z)().mark((function n(){var e,t,a,s,c,o,u;return(0,y.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=H.jt.filter((function(n){return!n.isKingdom})),t=H.jt.filter((function(n){return n.isKingdom&&!n.isKingdomLocked})),a=e.map((function(n){return{address:(0,K.Oc)(),name:"pendingCookie",params:[n.pid,i]}})),n.next=5,(0,B.Z)(W,a);case 5:return s=n.sent,c=t.filter((function(n){return 100===n.pid})).map((function(n){return{address:(0,K.LB)(),name:"pendingCookie",params:[n.pid,i]}})),n.next=9,(0,B.Z)(G,c);case 9:o=n.sent,u=H.jt.filter((function(n){return n.isKingdomLocked})).map((function(){return[I.O$.from(0)]})),r([].concat((0,D.Z)(s),(0,D.Z)(u),(0,D.Z)(o)));case 12:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();i&&n()}),[i,a]),t},q=t(91903),M=t(18941),V=t(17910),$=t(54545),_=t(46417),U=b.ZP.div(r||(r=(0,j.Z)(["\n  margin-bottom: 24px;\n"]))),J=function(){var n=(0,k.Z)(),e=(0,P.Ge)().account,t=T().reduce((function(n,e){var t=new(O())(e);return t.eq(0)?n:n+t.div(M.o3).toNumber()}),0),r=(0,q.Iu)(),i=new(O())(t).multipliedBy(r).toNumber();return e?(0,_.jsxs)(U,{children:[(0,_.jsx)(V.Z,{value:t,lineHeight:"1.5"}),!r.eq(0)&&(0,_.jsx)($.Z,{value:i})]}):(0,_.jsx)(w.xv,{color:"textDisabled",style:{lineHeight:"76px"},children:n(298,"Locked")})},Y=t(74451),nn=t(64446),en=function(){var n=(0,k.Z)(),e=(0,Y.ZP)((0,K.xn)()),t=(0,q.Iu)(),r=new E.BigNumber((0,nn.mW)(e)).multipliedBy(t).toNumber();return(0,P.Ge)().account?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(V.Z,{value:(0,nn.mW)(e),decimals:4,fontSize:"24px",lineHeight:"36px"}),t.eq(0)?(0,_.jsx)("br",{}):(0,_.jsx)($.Z,{value:r})]}):(0,_.jsx)(w.xv,{color:"textDisabled",style:{lineHeight:"54px"},children:n(298,"Locked")})},tn=(0,b.ZP)(w.Zb)(i||(i=(0,j.Z)(["\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]))),rn=b.ZP.div(a||(a=(0,j.Z)(["\n  margin-bottom: 16px;\n"]))),an=b.ZP.img(s||(s=(0,j.Z)(["\n  margin-bottom: 16px;\n"]))),sn=b.ZP.div(c||(c=(0,j.Z)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(n){return n.theme.colors.textSubtle})),cn=b.ZP.div(o||(o=(0,j.Z)(["\n  margin-top: 24px;\n"]))),on=b.ZP.div(u||(u=(0,j.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 16px;\n"]))),un=b.ZP.div(l||(l=(0,j.Z)(["\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),ln=function(){var n=(0,v.useState)(!1),e=(0,z.Z)(n,2),t=e[0],r=e[1],i=(0,v.useState)(!1),a=(0,z.Z)(i,2),s=(a[0],a[1],(0,P.Ge)().account),c=(0,k.Z)(),o=X().filter((function(n){return n.balance.toNumber()>1e4})),u=(0,N.Z)(),l=((0,R.z)(u||{}).onClaim,u&&u.amount&&u.amount,(0,L.us)(o.map((function(n){return{pid:n.pid,isKingdom:n.isKingdom}}))).onReward),d=(0,v.useCallback)((0,S.Z)((0,y.Z)().mark((function n(){return(0,y.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(!0),n.prev=1,n.next=4,l();case 4:n.next=8;break;case 6:n.prev=6,n.t0=n.catch(1);case 8:return n.prev=8,r(!1),n.finish(8);case 11:case"end":return n.stop()}}),n,null,[[1,6,8,11]])}))),[l]),f=(0,v.useCallback)((0,S.Z)((0,y.Z)().mark((function n(){var e;return(0,y.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(e=window.ethereum)){n.next=11;break}return n.prev=2,n.next=5,e.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:"0x02Dff78fDeDaF86D9dfbe9B3132aA3Ea72Ed1680",symbol:"Cookie",decimals:"18",image:"https://raw.githubusercontent.com/Cookie-Factory/images/master/logo.png"}}});case 5:n.sent&&console.log("Token was added"),n.next=11;break;case 9:n.prev=9,n.t0=n.catch(2);case 11:case"end":return n.stop()}}),n,null,[[2,9]])}))),[]);return(0,_.jsx)(tn,{children:(0,_.jsxs)(w.eW,{children:[(0,_.jsx)(w.X6,{size:"xl",mb:"24px",children:(0,_.jsxs)(un,{children:[" ",c(542,"Farms & Staking"),(0,_.jsxs)(w.zx,{onClick:f,scale:"sm",children:["+"," ",(0,_.jsx)("img",{style:{marginLeft:8},width:16,src:"https://raw.githubusercontent.com/blzd-dev/blzd-frontend/master/public/images/wallet/metamask.png",alt:"metamask logo"})]})," "]})}),(0,_.jsx)(on,{children:(0,_.jsx)(an,{src:"/images/Cookie/Cookie-card-image.png",alt:"Cookie logo",width:64,height:64})}),(0,_.jsxs)(rn,{children:[(0,_.jsxs)(sn,{children:[c(544,"Cookie to Harvest"),":"]}),(0,_.jsx)(J,{})]}),(0,_.jsxs)(rn,{children:[(0,_.jsxs)(sn,{children:[c(546,"Cookie in Wallet"),":"]}),(0,_.jsx)(en,{})]}),(0,_.jsx)(cn,{children:s?(0,_.jsx)(w.zx,{id:"harvest-all",disabled:o.length<=0||t,onClick:d,width:"100%",children:t?c(548,"Collecting Cookie"):c(532,"Harvest all (".concat(o.length,")"),{count:o.length})}):(0,_.jsx)(F.Z,{width:"100%"})})]})})},dn=t(52422),fn=t(38584),xn=(0,b.ZP)(w.Zb)(d||(d=(0,j.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),pn=b.ZP.div(f||(f=(0,j.Z)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),mn=function(){var n=(0,k.Z)(),e=(0,Y.A5)(),t=(0,Y.rQ)((0,K.xn)()),r=(0,q.Iu)(),i=e?e.minus(t):new dn.Z(0),a=(0,nn.mW)(i),s=r.times(i),c=0;return fn.default&&fn.default[0]&&fn.default[0].CookiePerBlock&&(c=new dn.Z(fn.default[0].CookiePerBlock).div(new dn.Z(10).pow(18)).toNumber()),(0,_.jsx)(xn,{children:(0,_.jsxs)(w.eW,{children:[(0,_.jsx)(w.X6,{size:"xl",mb:"24px",children:n(534,"Cookie Stats")}),(0,_.jsxs)(pn,{children:[(0,_.jsx)(w.xv,{fontSize:"14px",children:"\ud83d\udcc8 Market Cap"}),(0,_.jsx)(V.Z,{fontSize:"14px",value:(0,nn.mW)(s),decimals:0,prefix:"$"})]}),(0,_.jsxs)(pn,{children:[(0,_.jsx)(w.xv,{fontSize:"14px",children:"\ud83d\udfe5 Total Minted"}),e&&(0,_.jsx)(V.Z,{fontSize:"14px",value:(0,nn.mW)(e),decimals:0})]}),(0,_.jsxs)(pn,{children:[(0,_.jsx)(w.xv,{fontSize:"14px",children:"\ud83d\udd25 Total Burned"}),(0,_.jsx)(V.Z,{fontSize:"14px",value:0,decimals:0})]}),(0,_.jsxs)(pn,{children:[(0,_.jsx)(w.xv,{fontSize:"14px",children:"\u2708\ufe0f Circulating Supply"}),a&&(0,_.jsx)(V.Z,{fontSize:"14px",value:a,decimals:0})]}),(0,_.jsxs)(pn,{children:[(0,_.jsx)(w.xv,{fontSize:"14px",children:"\ud83e\udd64 New Cookie/block"}),(0,_.jsx)(w.xv,{bold:!0,fontSize:"14px",children:c})]}),(0,_.jsx)("br",{}),(0,_.jsx)("br",{}),(0,_.jsxs)(pn,{children:[(0,_.jsx)("a",{href:"https://www.coingecko.com/en/coins/Cookie-token-2",children:(0,_.jsx)("img",{src:"/images/Cookie/CG.png",width:"80px",alt:"Cookie Defi"})}),(0,_.jsx)("a",{href:"https://coinmarketcap.com/",children:(0,_.jsx)("img",{src:"/images/Cookie/CMC.png",width:"80px",alt:"Cookie Defi"})}),(0,_.jsx)("a",{href:"https://www.geckoterminal.com",children:(0,_.jsx)("img",{src:"/images/Cookie/gecko.png",width:"80px",alt:"Cookie Defi"})}),(0,_.jsx)("a",{href:"https://basescan.org//address/0x02Dff78fDeDaF86D9dfbe9B3132aA3Ea72Ed1680/contracts#address-tabs",children:(0,_.jsx)("img",{src:"/images/Cookie/scan.png",width:"80px",alt:"Cookie Defi"})}),(0,_.jsx)("a",{href:"https://www.dextools.io/app/en/pulse",children:(0,_.jsx)("img",{src:"/images/Cookie/dextools.png",width:"80px",alt:"Cookie Defi"})})]})]})})},hn=(0,b.ZP)(w.Zb)(x||(x=(0,j.Z)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]))),gn=function(){var n=(0,k.Z)(),e=(0,q.Uv)();return(0,_.jsx)(hn,{children:(0,_.jsxs)(w.eW,{children:[(0,_.jsx)(w.X6,{size:"lg",mb:"24px",children:n(762,"Total Value Locked (TVL)")}),e?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(w.X6,{size:"xl",children:(0,_.jsx)(V.Z,{value:e.toNumber(),prefix:"$",decimals:2})}),(0,_.jsx)(w.xv,{color:"textSubtle",children:n(764,"Across all Farms and Pools")})]}):(0,_.jsx)(w.Od,{height:66})]})})},Zn=(0,b.ZP)(w.Zb)(p||(p=(0,j.Z)(["\n  background: linear-gradient(#ff2d49, #4576d9);\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n"])),(function(n){return n.theme.mediaQueries.lg})),jn=(0,b.ZP)(w.X6).attrs({size:"xl"})(m||(m=(0,j.Z)(["\n  line-height: 44px;\n"]))),vn=function(){return(0,_.jsx)(Zn,{children:(0,_.jsxs)(w.eW,{children:[(0,_.jsx)(w.X6,{color:"contrast",size:"lg",children:"VIP & Public presale"}),(0,_.jsx)(jn,{color:"invertedContrast",children:"2 000 000 Cookie token"}),(0,_.jsxs)(w.kC,{justifyContent:"space-between",children:[(0,_.jsx)(w.X6,{color:"contrast",size:"lg",children:"Coming soon !"}),(0,_.jsx)(w.rU,{href:"https://cookiebase.finance/",children:(0,_.jsx)(w.mr,{mt:30,color:"contrast"})})]})]})})},bn=b.ZP.div(h||(h=(0,j.Z)(["\n  align-items: center;\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 0px;\n  text-align: center;\n  img {\n    max-width: 150px;\n  }\n\n  "," {\n    // background-image: url('/images/egg/3.png'), url('/images/egg/3b.png');\n    // background-position: left center, right center;\n    // height: 165px;\n    height: auto;\n    padding-top: 0;\n    img {\n      max-width: 300px;\n    }\n  }\n"])),(function(n){return n.theme.mediaQueries.lg})),wn=(0,b.ZP)(w.IE)(g||(g=(0,j.Z)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(n){return n.theme.mediaQueries.sm}),(function(n){return n.theme.mediaQueries.lg})),kn=(0,b.ZP)(w.IE)(Z||(Z=(0,j.Z)(["\n  align-items: start;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 4;\n    }\n  }\n"])),(function(n){return n.theme.mediaQueries.sm}),(function(n){return n.theme.mediaQueries.lg})),Cn=function(){(0,k.Z)();return(0,_.jsxs)(C.Z,{children:[(0,_.jsx)(bn,{children:(0,_.jsx)(w.X6,{as:"h1",size:"xl",mb:"24px",color:"white",children:(0,_.jsx)("img",{src:"/images/Cookie/CookieLogoM2.png",alt:"Cookie Defi"})})}),(0,_.jsxs)("div",{children:[(0,_.jsxs)(wn,{children:[(0,_.jsx)(ln,{}),(0,_.jsx)(mn,{})]}),(0,_.jsx)(kn,{}),(0,_.jsxs)(wn,{children:[(0,_.jsx)(vn,{}),(0,_.jsx)(gn,{})]})]})]})}}}]);