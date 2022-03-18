(this["webpackJsonpcubdefi-frontend"]=this["webpackJsonpcubdefi-frontend"]||[]).push([[11],{1082:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Zn}));var c,i,r=n(5),a=n(31),s=n(49),l=n(0),o=n.n(l),d=n(38),j=n(59),b=n(4),u=n.n(b),O=n(64),x=n(32),p=n(3),h=p.e.div(c||(c=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"]))),m=n(236),f=n(82),g=n(181),v=n(141),y=function(e,t){var n=Object(l.useState)((function(){try{var n=localStorage.getItem(t);return n?JSON.parse(n):e}catch(c){return e}})),c=Object(a.a)(n,2),i=c[0],r=c[1];return Object(l.useEffect)((function(){localStorage.setItem(t,JSON.stringify(i))}),[i,t]),[i,r]},k=n(849),w=n(232),S=n(866),C=n(92),T=n(247),A=n(906),L=n(123),B=n(911),D=n(12),q=p.e.div(i||(i=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.primary})),R=function(e){var t=e.onClick,n=e.expanded,c=null;return e.onlyArrow||(c=Object(D.jsx)(x.O,{color:"primary",bold:!0,children:n?"Hide":"Details"})),Object(D.jsxs)(q,{"aria-label":"Hide or show expandable content",role:"button",onClick:function(){return t()},children:[c,n?Object(D.jsx)(x.q,{}):Object(D.jsx)(x.p,{})]})};R.defaultProps={expanded:!1};var I,E,F,P,U,N,z,Q,K,M,V,G,X,H,W,J,Y,Z,$,_,ee,te,ne,ce,ie,re,ae,se,le,oe,de,je,be,ue,Oe,xe,pe,he,me,fe,ge,ve,ye,ke,we,Se,Ce,Te,Ae,Le,Be,De,qe,Re=R,Ie=n(46),Ee=n(867),Fe=p.e.div(I||(I=Object(s.a)(["\n  margin-top: 24px;\n"]))),Pe=Object(p.e)(x.A)(E||(E=Object(s.a)(["\n  font-weight: 400;\n"]))),Ue=function(e){var t=e.bscScanAddress,n=e.infoAddress,c=e.removed,i=e.totalValueFormatted,r=e.lpLabel,a=e.addLiquidityUrl,s=Object(k.a)();return Object(D.jsxs)(Fe,{children:[Object(D.jsxs)(x.t,{justifyContent:"space-between",children:[Object(D.jsxs)(x.O,{children:[s(354,"Total Liquidity"),":"]}),Object(D.jsx)(x.O,{children:i})]}),!c&&Object(D.jsx)(Pe,{href:a,children:s(999,"Get ".concat(r),{name:r})}),Object(D.jsx)(Pe,{href:t,children:s(999,"View Contract")}),Object(D.jsx)(Pe,{href:n,children:s(999,"See Pair Info")})]})},Ne=function(e){return Object(D.jsx)(x.N,Object(r.a)(Object(r.a)({variant:"textSubtle",outline:!0},e),{},{children:"Dual"}))},ze=function(){return Object(D.jsx)(x.N,{variant:"success",outline:!0,startIcon:Object(D.jsx)(x.Q,{}),children:"No Fees"})},Qe=Object(p.e)(x.t)(F||(F=Object(s.a)(["\n  svg {\n    margin-right: 4px;\n  }\n"]))),Ke=Object(p.e)(x.N)(P||(P=Object(s.a)(["\n  margin-left: 4px;\n"]))),Me=function(e){var t=e.lpLabel,n=e.multiplier,c=e.farmImage,i=e.tokenSymbol,r=e.depositFee;return Object(D.jsxs)(Qe,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:[Object(D.jsx)(x.x,{src:"/images/farms/".concat(c,".png"),alt:i,width:64,height:64}),Object(D.jsxs)(x.t,{flexDirection:"column",alignItems:"flex-end",children:[Object(D.jsx)(x.u,{mb:"4px",children:t.split(" ")[0]}),Object(D.jsxs)(x.t,{justifyContent:"center",children:[0===r?Object(D.jsx)(ze,{}):null,Object(D.jsx)(Ke,{variant:"secondary",children:n})]})]})]})},Ve=n(1),Ge=n.n(Ve),Xe=n(6),He=n(13),We=n(69),Je=n(851),Ye=n(868),Ze=n(860),$e=n(874),_e=n(883),et=n(884),tt=n(885),nt=p.e.div(U||(U=Object(s.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]))),ct=function(e){var t=e.stakedBalance,n=e.tokenBalance,c=e.tokenName,i=e.pid,r=e.addLiquidityUrl,s=e.isKingdom,o=e.isTokenOnly,j=e.isKingdomToken,b=Object(k.a)(),u=Object($e.a)(i,s).onStake,O=Object(_e.a)(i,s).onUnstake,p=Object(d.f)(),h=Object(l.useCallback)((function(){var e=Object(w.b)(t);return e>0&&e<1e-4?Object(w.c)(t).toLocaleString():e.toLocaleString()}),[t]),m=Object(x.W)(Object(D.jsx)(et.a,{max:n,onConfirm:u,tokenName:c,addLiquidityUrl:r,isTokenOnly:o,isKingdomToken:j})),f=Object(a.a)(m,1)[0],g=Object(x.W)(Object(D.jsx)(tt.a,{max:t,onConfirm:O,tokenName:c,isTokenOnly:o,isKingdomToken:j})),v=Object(a.a)(g,1)[0];return Object(D.jsxs)(x.t,{justifyContent:"space-between",alignItems:"center",children:[Object(D.jsx)(x.u,{color:t.eq(0)?"textDisabled":"text",children:h()}),t.eq(0)?Object(D.jsx)(x.h,{onClick:f,disabled:p.pathname.includes("archived"),children:b(999,o||j?"Stake Token":"Stake LP")}):Object(D.jsxs)(nt,{children:[Object(D.jsx)(x.w,{variant:"tertiary",onClick:v,mr:"6px",children:Object(D.jsx)(x.E,{color:"primary",width:"14px"})}),Object(D.jsx)(x.w,{variant:"tertiary",onClick:f,children:Object(D.jsx)(x.a,{color:"primary",width:"14px"})})]})]})},it=n(865),rt=n(854),at=p.e.div(N||(N=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n"]))),st=function(e){var t=e.earnings,n=e.pid,c=e.isKingdom,i=Object(O.c)().account,r=Object(k.a)(),s=Object(l.useState)(!1),o=Object(a.a)(s,2),d=o[0],j=o[1],b=Object(it.b)(n,c).onReward,p=Object(f.g)(),h=Object($e.a)(n,c).onStake,m=i?Object(w.b)(t):0,g=m.toLocaleString(),v=m?new u.a(m).multipliedBy(p).toNumber():0;return Object(D.jsxs)(x.t,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(D.jsxs)(x.u,{color:0===m?"textDisabled":"text",children:[g,v>0&&Object(D.jsx)(rt.a,{value:v})]}),Object(D.jsxs)(at,{children:[12===n?Object(D.jsx)(x.h,{disabled:0===m||d,size:"sm",variant:"secondary",marginBottom:"15px",onClick:Object(Xe.a)(Ge.a.mark((function e(){return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,h(m.toString());case 3:j(!1);case 4:case"end":return e.stop()}}),e)}))),children:r(999,"Compound")}):null,Object(D.jsx)(x.h,{disabled:0===m||d,onClick:Object(Xe.a)(Ge.a.mark((function e(){return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,b();case 3:j(!1);case 4:case"end":return e.stop()}}),e)}))),children:r(562,"Harvest")})]})]})},lt=p.e.div(z||(z=Object(s.a)(["\n  padding-top: 16px;\n"]))),ot=function(e){var t=e.farm,n=e.account,c=e.addLiquidityUrl,i=Object(k.a)(),r=Object(l.useState)(!1),s=Object(a.a)(r,2),o=s[0],j=s[1],b=t.pid,O=t.lpAddresses,p=t.isTokenOnly,h=t.isKingdomToken,m=t.isKingdom,f=t.token.address,g=t.userData||{},v=g.allowance,y=void 0===v?0:v,w=g.tokenBalance,S=void 0===w?0:w,C=g.stakedBalance,T=void 0===C?0:C,A=g.earnings,L=void 0===A?0:A,B=new u.a(y),q=new u.a(S),R=new u.a(T),I=new u.a(L),E=Object(He.a)(O),F=Object(He.a)(f),P=t.lpSymbol.toUpperCase(),U=n&&B&&B.isGreaterThan(0),N=Object(Je.a)(),z=Object(d.f)(),Q=Object(l.useMemo)((function(){return p||h?Object(We.a)(F,N):Object(We.a)(E,N)}),[E,p,N,F,h]),K=Object(Ye.a)(Q,m).onApprove,M=Object(l.useCallback)(Object(Xe.a)(Ge.a.mark((function e(){return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,K();case 4:j(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[K]);return Object(D.jsxs)(lt,{children:[Object(D.jsxs)(x.t,{children:[Object(D.jsx)(x.O,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:"CUB"}),Object(D.jsx)(x.O,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:i(1072,"Earned")})]}),Object(D.jsx)(st,{earnings:I,pid:b,isKingdom:m}),Object(D.jsxs)(x.t,{children:[Object(D.jsx)(x.O,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:P}),Object(D.jsx)(x.O,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:i(1074,"Staked")})]}),n?U?Object(D.jsx)(ct,{stakedBalance:R,tokenBalance:q,tokenName:P,pid:b,addLiquidityUrl:c,isKingdom:m,isTokenOnly:t.isTokenOnly,isKingdomToken:t.isKingdomToken}):Object(D.jsx)(x.h,{mt:"8px",width:"100%",disabled:o||z.pathname.includes("archived"),onClick:M,children:i(758,"Approve Contract")}):Object(D.jsx)(Ze.a,{mt:"8px",width:"100%"})]})},dt=n(905),jt=Object(p.f)(Q||(Q=Object(s.a)(["\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n"]))),bt=p.e.div(K||(K=Object(s.a)(["\n  background: linear-gradient(\n    45deg,\n    rgba(255, 0, 0, 1) 0%,\n    rgba(255, 154, 0, 1) 10%,\n    rgba(208, 222, 33, 1) 20%,\n    rgba(79, 220, 74, 1) 30%,\n    rgba(63, 218, 216, 1) 40%,\n    rgba(47, 201, 226, 1) 50%,\n    rgba(28, 127, 238, 1) 60%,\n    rgba(95, 21, 242, 1) 70%,\n    rgba(186, 12, 248, 1) 80%,\n    rgba(251, 7, 217, 1) 90%,\n    rgba(255, 0, 0, 1) 100%\n  );\n  background-size: 300% 300%;\n  animation: "," 2s linear infinite;\n  border-radius: 32px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"])),jt),ut=p.e.div(M||(M=Object(s.a)(["\n  align-self: baseline;\n  background: ",";\n  border-radius: 32px;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"])),(function(e){return e.theme.card.background})),Ot=p.e.div(V||(V=Object(s.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"])),(function(e){return e.theme.colors.borderColor})),xt=p.e.div(G||(G=Object(s.a)(["\n  height: ",";\n  overflow: hidden;\n"])),(function(e){return e.expanded?"100%":"0px"})),pt=function(e){var t=e.farm,n=e.removed,c=e.cakePrice,i=e.account,r=Object(k.a)(),s=Object(l.useState)(!1),o=Object(a.a)(s,2),d=o[0],j=o[1],b=t.lpSymbol.split(" ")[0].toLocaleLowerCase(),u=t.liquidity&&t.liquidity.toNumber()?"$".concat(t.liquidity.toNumber().toLocaleString(void 0,{maximumFractionDigits:0})):"-",O=t.lpSymbol&&t.lpSymbol.toUpperCase().replace("PANCAKE",""),p=t.dual?t.dual.earnLabel:"CUB",h=t.apr&&t.apr.toLocaleString("en-US",{maximumFractionDigits:2}),m=Object(Ee.a)({quoteTokenAddress:t.quoteToken.address,tokenAddress:t.token.address}),f=t.pcsVersion&&t.pcsVersion>1?Ie.k:Ie.c,g="".concat(f,"/").concat(m),v=t.lpAddresses[56];return Object(D.jsxs)(ut,{children:["CUB"===t.token.symbol&&Object(D.jsx)(bt,{}),Object(D.jsx)(Me,{lpLabel:O,multiplier:t.multiplier,isCommunityFarm:t.isCommunity,farmImage:b,tokenSymbol:t.token.symbol,depositFee:t.depositFeeBP}),!n&&Object(D.jsxs)(x.t,{justifyContent:"space-between",alignItems:"center",children:[Object(D.jsxs)(x.O,{children:[r(736,"APR"),":"]}),Object(D.jsx)(x.O,{bold:!0,style:{display:"flex",alignItems:"center"},children:t.apr?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(dt.a,{lpLabel:O,addLiquidityUrl:g,cakePrice:c,apr:t.apr}),h,"%"]}):Object(D.jsx)(x.L,{height:24,width:80})})]}),Object(D.jsxs)(x.t,{justifyContent:"space-between",children:[Object(D.jsxs)(x.O,{children:[r(318,"Earn"),":"]}),Object(D.jsx)(x.O,{bold:!0,children:p})]}),Object(D.jsxs)(x.t,{justifyContent:"space-between",children:[Object(D.jsxs)(x.O,{style:{fontSize:"16px"},children:[r(10001,"Deposit Fee"),":"]}),t.depositFeeBP?Object(D.jsxs)(x.O,{bold:!0,style:{fontSize:"16px"},children:[t.depositFeeBP/100,"%"]}):"0%"]}),Object(D.jsx)(ot,{farm:t,account:i,addLiquidityUrl:g}),Object(D.jsx)(Ot,{}),Object(D.jsx)(Re,{onClick:function(){return j(!d)},expanded:d}),Object(D.jsx)(xt,{expanded:d,children:Object(D.jsx)(Ue,{removed:n,bscScanAddress:t.isTokenOnly?"https://bscscan.com/token/".concat(t.token.address[56]):"https://bscscan.com/token/".concat(t.lpAddresses[56]),infoAddress:"https://pancakeswap.info/pair/".concat(v),totalValueFormatted:u,lpLabel:O,addLiquidityUrl:g})})]})},ht=function(e,t){var n=Object(l.useState)(!1),c=Object(a.a)(n,2),i=c[0],r=c[1];return Object(l.useEffect)((function(){var n;return e&&!i?r(!0):!e&&i&&(n=setTimeout((function(){return r(!1)}),t)),function(){return clearTimeout(n)}}),[e,t,i]),i},mt=p.e.div(X||(X=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  color: ",";\n\n  button {\n    width: 20px;\n    height: 20px;\n\n    svg {\n      path {\n        fill: ",";\n      }\n    }\n  }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.textSubtle})),ft=p.e.div(H||(H=Object(s.a)(["\n  min-width: 60px;\n  text-align: left;\n"]))),gt=function(e){var t=e.value,n=e.lpLabel,c=e.tokenAddress,i=e.quoteTokenAddress,r=e.cakePrice,a=e.originalValue,s=e.hideButton,l=void 0!==s&&s,o=Object(Ee.a)({quoteTokenAddress:i,tokenAddress:c}),d="".concat(Ie.c,"/").concat(o);return 0!==a?Object(D.jsx)(mt,{children:a?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)(ft,{children:[t,"%"]}),!l&&Object(D.jsx)(dt.a,{lpLabel:n,cakePrice:r,apr:a,addLiquidityUrl:d})]}):Object(D.jsx)(ft,{children:Object(D.jsx)(x.L,{width:60})})}):Object(D.jsx)(mt,{children:Object(D.jsxs)(ft,{children:[a,"%"]})})},vt=Object(p.e)(x.x)(W||(W=Object(s.a)(["\n  width: 24px;\n  height: 24px;\n\n  "," {\n    width: 40px;\n    height: 40px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),yt=p.e.div(J||(J=Object(s.a)(["\n  padding-left: 16px;\n  display: flex;\n  align-items: center;\n\n  "," {\n    padding-left: 32px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),kt=function(e){var t=e.image,n=e.label,c=e.pid,i=Object(f.c)(c).stakedBalance,r=Object(k.a)(),a=Object(w.b)(i);return Object(D.jsxs)(yt,{children:[Object(D.jsx)(vt,{src:"/images/farms/".concat(t,".png"),alt:"icon",width:40,height:40,mr:"8px"}),Object(D.jsxs)("div",{children:[a?Object(D.jsx)(x.O,{color:"secondary",fontSize:"12px",bold:!0,children:r(999,"FARMING")}):null,Object(D.jsx)(x.O,{bold:!0,children:n})]})]})},wt=p.e.span(Y||(Y=Object(s.a)(["\n  color: ",";\n  display: flex;\n  align-items: center;\n"])),(function(e){var t=e.earned,n=e.theme;return t?n.colors.text:n.colors.textDisabled})),St=function(e){var t=e.earnings;return e.userDataReady?Object(D.jsx)(wt,{earned:t,children:t.toLocaleString()}):Object(D.jsx)(wt,{earned:0,children:Object(D.jsx)(x.L,{width:60})})},Ct=p.e.div(Z||(Z=Object(s.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: flex-end;\n  padding-right: 8px;\n  color: ",";\n\n  "," {\n    padding-right: 0px;\n  }\n"])),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.mediaQueries.sm})),Tt=Object(p.e)(x.p)($||($=Object(s.a)(["\n  transform: ",";\n  height: 20px;\n"])),(function(e){return e.toggled?"rotate(180deg)":"rotate(0)"})),At=function(e){var t=e.actionPanelToggled,n=Object(k.a)(),c=!Object(x.V)().isXl;return Object(D.jsxs)(Ct,{children:[!c&&n(658,"Details"),Object(D.jsx)(Tt,{color:"primary",toggled:t})]})},Lt=p.e.div(_||(_=Object(s.a)(["\n  display: inline-block;\n"]))),Bt=p.e.div(ee||(ee=Object(s.a)(["\n  color: ",";\n  width: 36px;\n  text-align: right;\n  margin-right: 14px;\n\n  "," {\n    text-align: left;\n    margin-right: 0;\n  }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.mediaQueries.lg})),Dt=p.e.div(te||(te=Object(s.a)(["\n  display: flex;\n  align-items: center;\n"]))),qt=function(e){var t=e.multiplier,n=t?t.toLowerCase():Object(D.jsx)(x.L,{width:30}),c=Object(k.a)(),i=Object(D.jsxs)("div",{children:[c(999,"The multiplier represents the amount of CUB rewards each farm gets."),Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),c(999,"For example, if a 1x farm was getting 1 CUB per block, a 40x farm would be getting 40 CUB per block.")]}),r=Object(x.Y)(i,"top-end","hover",void 0,void 0,[20,10]),a=r.targetRef,s=r.tooltip,l=r.tooltipVisible;return Object(D.jsxs)(Dt,{children:[Object(D.jsx)(Bt,{children:n}),Object(D.jsx)(Lt,{ref:a,children:Object(D.jsx)(x.v,{color:"textSubtle"})}),l&&s]})},Rt=p.e.div(ne||(ne=Object(s.a)(["\n  display: inline-block;\n"]))),It=p.e.div(ce||(ce=Object(s.a)(["\n  min-width: 110px;\n  font-weight: 600;\n  text-align: right;\n  margin-right: 14px;\n\n  "," {\n    text-align: left;\n    margin-right: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Et=p.e.div(ie||(ie=Object(s.a)(["\n  display: flex;\n  align-items: center;\n"]))),Ft=function(e){var t=e.liquidity,n=t&&t.gt(0)?"$".concat(Number(t).toLocaleString(void 0,{maximumFractionDigits:0})):Object(D.jsx)(x.L,{width:60}),c=Object(k.a)(),i=Object(x.Y)(c(999,"The total value of the funds in this farm\u2019s liquidity pool"),"top-end","hover",void 0,void 0,[20,10]),r=i.targetRef,a=i.tooltip,s=i.tooltipVisible;return Object(D.jsxs)(Et,{children:[Object(D.jsx)(It,{children:Object(D.jsx)(x.O,{children:n})}),Object(D.jsx)(Rt,{ref:r,children:Object(D.jsx)(x.v,{color:"textSubtle"})}),s&&a]})},Pt=n(861),Ut=p.e.div(re||(re=Object(s.a)(["\n  padding: 16px;\n  border: 2px solid ",";\n  border-radius: 16px;\n  flex-grow: 1;\n  flex-basis: 0;\n  margin-bottom: 16px;\n\n  "," {\n    margin-left: 12px;\n    margin-right: 12px;\n    margin-bottom: 0;\n    max-height: 100px;\n  }\n\n  "," {\n    margin-left: 48px;\n    margin-right: 0;\n    margin-bottom: 0;\n    max-height: 100px;\n  }\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.xl})),Nt=p.e.div(ae||(ae=Object(s.a)(["\n  font-weight: 600;\n  font-size: 12px;\n  margin-bottom: 8px;\n"]))),zt=p.e.span(se||(se=Object(s.a)(["\n  color: ",";\n"])),(function(e){return e.theme.colors.secondary})),Qt=p.e.span(le||(le=Object(s.a)(["\n  color: ",";\n"])),(function(e){return e.theme.colors.textSubtle})),Kt=p.e.div(oe||(oe=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),Mt=p.e.div(de||(de=Object(s.a)(["\n  font-weight: 600;\n  font-size: 20px;\n  color: ",";\n"])),(function(e){return e.theme.colors.text})),Vt=p.e.div(je||(je=Object(s.a)(["\n  font-size: 12px;\n  color: ",";\n"])),(function(e){return e.theme.colors.textSubtle})),Gt=function(e){var t=e.pid,n=e.userData,c=e.userDataReady,i=new u.a(n.earnings),r=Object(f.g)(),s=0,o=0,d=c?s.toLocaleString():Object(D.jsx)(x.L,{width:60});i.isZero()||(s=Object(w.b)(i),o=new u.a(s).multipliedBy(r).toNumber(),d=s.toLocaleString());var j=Object(l.useState)(!1),b=Object(a.a)(j,2),O=b[0],p=b[1],h=Object(it.b)(t).onReward,m=Object(k.a)(),g=Object(Pt.useCountUp)({start:0,end:o,duration:1,separator:",",decimals:3}),v=g.countUp,y=g.update,S=Object(l.useRef)(y);return Object(l.useEffect)((function(){S.current(o)}),[o,S]),Object(D.jsxs)(Ut,{children:[Object(D.jsxs)(Nt,{children:[Object(D.jsx)(zt,{children:"CUB "}),Object(D.jsx)(Qt,{children:m(1072,"EARNED")})]}),Object(D.jsxs)(Kt,{children:[Object(D.jsxs)("div",{children:[Object(D.jsx)(Mt,{children:d}),v>0&&Object(D.jsxs)(Vt,{children:["~",v,"USD"]})]}),Object(D.jsx)(x.h,{disabled:!s||O||!c,onClick:Object(Xe.a)(Ge.a.mark((function e(){return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,h();case 3:p(!1);case 4:case"end":return e.stop()}}),e)}))),ml:"4px",children:m(562,"Harvest")})]})]})},Xt=p.e.div(be||(be=Object(s.a)(["\n  display: flex;\n"]))),Ht=function(e){var t=e.pid,n=e.lpSymbol,c=e.lpAddresses,i=e.quoteToken,r=e.token,s=e.userDataReady,o=e.isTokenOnly,j=Object(k.a)(),b=Object(O.c)().account,u=Object(l.useState)(!1),p=Object(a.a)(u,2),h=p[0],m=p[1],g=Object(f.c)(t),v=g.allowance,y=g.tokenBalance,S=g.stakedBalance,C=Object($e.a)(t).onStake,T=Object(_e.a)(t).onUnstake,A=Object(Je.a)(),L=Object(d.f)(),B=Object(He.a)(r.address),q=b&&v&&v.isGreaterThan(0),R=c[56],I=Object(Ee.a)({quoteTokenAddress:i.address,tokenAddress:r.address}),E="".concat(Ie.c,"/").concat(I),F=Object(l.useCallback)((function(){var e=Object(w.b)(S);return e>0&&e<1e-4?Object(w.c)(S).toLocaleString():e.toLocaleString()}),[S]),P=Object(x.W)(Object(D.jsx)(et.a,{max:y,onConfirm:C,tokenName:n,addLiquidityUrl:E})),U=Object(a.a)(P,1)[0],N=Object(x.W)(Object(D.jsx)(tt.a,{max:S,onConfirm:T,tokenName:n})),z=Object(a.a)(N,1)[0],Q=Object(l.useMemo)((function(){return o?Object(We.a)(B,A):Object(We.a)(R,A)}),[R,o,A,B]),K=Object(Ye.a)(Q).onApprove,M=Object(l.useCallback)(Object(Xe.a)(Ge.a.mark((function e(){return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,K();case 4:m(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[K]);return b?q?S.gt(0)?Object(D.jsxs)(Ut,{children:[Object(D.jsxs)(Nt,{children:[Object(D.jsxs)(zt,{children:[n," "]}),Object(D.jsx)(Qt,{children:j(999,"STAKED")})]}),Object(D.jsxs)(Kt,{children:[Object(D.jsx)("div",{children:Object(D.jsx)(Mt,{children:F()})}),Object(D.jsxs)(Xt,{children:[Object(D.jsx)(x.w,{variant:"secondary",onClick:z,mr:"6px",children:Object(D.jsx)(x.E,{color:"primary",width:"14px"})}),Object(D.jsx)(x.w,{variant:"secondary",onClick:U,children:Object(D.jsx)(x.a,{color:"primary",width:"14px"})})]})]})]}):Object(D.jsxs)(Ut,{children:[Object(D.jsxs)(Nt,{children:[Object(D.jsxs)(Qt,{children:[j(999,"STAKE")," "]}),Object(D.jsx)(zt,{children:n})]}),Object(D.jsx)(Kt,{children:Object(D.jsx)(x.h,{width:"100%",onClick:U,variant:"secondary",disabled:L.pathname.includes("archived"),children:j(999,o?"Stake Token":"Stake LP")})})]}):s?Object(D.jsxs)(Ut,{children:[Object(D.jsx)(Nt,{children:Object(D.jsx)(Qt,{children:j(999,"ENABLE FARM")})}),Object(D.jsx)(Kt,{children:Object(D.jsx)(x.h,{width:"100%",disabled:h||L.pathname.includes("archived"),onClick:M,variant:"secondary",children:j(999,"Enable")})})]}):Object(D.jsxs)(Ut,{children:[Object(D.jsx)(Nt,{children:Object(D.jsx)(Qt,{children:j(999,"START FARMING")})}),Object(D.jsx)(Kt,{children:Object(D.jsx)(x.L,{width:180,marginBottom:28,marginTop:14})})]}):Object(D.jsxs)(Ut,{children:[Object(D.jsx)(Nt,{children:Object(D.jsx)(Qt,{children:j(999,"START FARMING")})}),Object(D.jsx)(Kt,{children:Object(D.jsx)(Ze.a,{width:"100%"})})]})},Wt=Object(p.f)(ue||(ue=Object(s.a)(["\n  from {\n    max-height: 0px;\n  }\n  to {\n    max-height: 500px;\n  }\n"]))),Jt=Object(p.f)(Oe||(Oe=Object(s.a)(["\n  from {\n    max-height: 500px;\n  }\n  to {\n    max-height: 0px;\n  }\n"]))),Yt=p.e.div(xe||(xe=Object(s.a)(["\n  animation: ",";\n  overflow: hidden;\n  background: ",";\n  display: flex;\n  width: 100%;\n  flex-direction: column-reverse;\n  padding: 24px;\n\n  "," {\n    flex-direction: row;\n    padding: 16px 32px;\n  }\n"])),(function(e){return e.expanded?Object(p.d)(pe||(pe=Object(s.a)(["\n          "," 300ms linear forwards\n        "])),Wt):Object(p.d)(he||(he=Object(s.a)(["\n          "," 300ms linear forwards\n        "])),Jt)}),(function(e){return e.theme.colors.background}),(function(e){return e.theme.mediaQueries.lg})),Zt=Object(p.e)(x.A)(me||(me=Object(s.a)(["\n  font-weight: 400;\n"]))),$t=p.e.div(fe||(fe=Object(s.a)(["\n  color: ",";\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n\n  "," {\n    justify-content: flex-start;\n  }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.mediaQueries.sm})),_t=p.e.div(ge||(ge=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  margin-top: 25px;\n\n  "," {\n    margin-top: 16px;\n  }\n\n  > div {\n    height: 24px;\n    padding: 0 6px;\n    font-size: 14px;\n    margin-right: 4px;\n\n    svg {\n      width: 14px;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),en=p.e.div(ve||(ve=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n\n  "," {\n    flex-direction: row;\n    align-items: center;\n    flex-grow: 1;\n    flex-basis: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),tn=p.e.div(ye||(ye=Object(s.a)(["\n  min-width: 200px;\n"]))),nn=p.e.div(ke||(ke=Object(s.a)(["\n  display: block;\n\n  "," {\n    display: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),cn=p.e.div(we||(we=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 4px 0px;\n"]))),rn=function(e){var t=e.details,n=e.apr,c=e.multiplier,i=e.liquidity,a=e.userDataReady,s=e.expanded,l=t,o=Object(k.a)(),d="0X"!==l.multiplier,j=l.quoteToken,b=l.token,u=l.dual,O=l.lpSymbol&&l.lpSymbol.toUpperCase().replace("PANCAKE",""),p=Object(Ee.a)({quoteTokenAddress:j.address,tokenAddress:b.address}),h=l.lpAddresses[56],m="https://bscscan.com/address/".concat(h),f="https://pancakeswap.info/pair/".concat(h),g=l.pcsVersion&&l.pcsVersion>1?Ie.k:Ie.c,v="".concat(g,"/").concat(p);return Object(D.jsxs)(Yt,{expanded:s,children:[Object(D.jsxs)(tn,{children:[d&&Object(D.jsx)($t,{children:Object(D.jsx)(Zt,{href:v,children:o(999,"Get ".concat(O),{name:O})})}),Object(D.jsx)(Zt,{href:m,children:o(999,"View Contract")}),Object(D.jsx)(Zt,{href:f,children:o(999,"See Pair Info")}),Object(D.jsxs)(_t,{children:[0===l.depositFeeBP?Object(D.jsx)(ze,{}):null,u?Object(D.jsx)(Ne,{}):null]}),0!==l.depositFeeBP&&Object(D.jsxs)(x.t,{justifyContent:"flex-start",children:[Object(D.jsxs)(x.O,{style:{fontSize:"16px"},children:[o(10001,"Deposit Fee"),":\xa0"]}),Object(D.jsxs)(x.O,{bold:!0,style:{fontSize:"16px"},children:[l.depositFeeBP/100,"%"]})]})]}),Object(D.jsxs)(nn,{children:[Object(D.jsxs)(cn,{children:[Object(D.jsx)(x.O,{children:o(736,"APR")}),Object(D.jsx)(gt,Object(r.a)({},n))]}),Object(D.jsxs)(cn,{children:[Object(D.jsx)(x.O,{children:o(999,"Multiplier")}),Object(D.jsx)(qt,Object(r.a)({},c))]}),Object(D.jsxs)(cn,{children:[Object(D.jsx)(x.O,{children:o(999,"Liquidity")}),Object(D.jsx)(Ft,Object(r.a)({},i))]})]}),Object(D.jsxs)(en,{children:[Object(D.jsx)(Gt,Object(r.a)(Object(r.a)({},l),{},{userDataReady:a})),Object(D.jsx)(Ht,Object(r.a)(Object(r.a)({},l),{},{userDataReady:a}))]})]})},an=p.e.div(Se||(Se=Object(s.a)(["\n  font-size: 12px;\n  color: ",";\n  text-align: left;\n"])),(function(e){return e.theme.colors.textSubtle})),sn=p.e.div(Ce||(Ce=Object(s.a)(["\n  min-height: 24px;\n  display: flex;\n  align-items: center;\n"]))),ln=function(e){var t=e.label,n=void 0===t?"":t,c=e.children;return Object(D.jsxs)("div",{children:[n&&Object(D.jsx)(an,{children:n}),Object(D.jsx)(sn,{children:c})]})},on=[{id:1,name:"farm",translationId:999,sortable:!0,label:""},{id:2,name:"earned",translationId:1072,sortable:!0,label:"Earned"},{id:3,name:"apr",translationId:736,sortable:!0,label:"APR"},{id:6,name:"details",translationId:999,sortable:!0,label:""}],dn=[{id:1,name:"farm",translationId:999,sortable:!0,label:""},{id:2,name:"earned",translationId:1072,sortable:!0,label:"Earned"},{id:3,name:"apr",translationId:736,sortable:!0,label:"APR"},{id:4,name:"liquidity",translationId:999,sortable:!0,label:"Liquidity"},{id:5,name:"multiplier",translationId:999,sortable:!0,label:"Multiplier"},{id:6,name:"details",translationId:999,sortable:!0,label:""}];!function(e){e.TABLE="TABLE",e.CARD="CARD"}(Te||(Te={}));var jn,bn,un,On,xn,pn,hn,mn,fn,gn,vn,yn,kn,wn,Sn={apr:gt,farm:kt,earned:St,details:At,multiplier:qt,liquidity:Ft},Cn=p.e.div(Ae||(Ae=Object(s.a)(["\n  padding: 24px 0px;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  padding-right: 8px;\n\n  "," {\n    padding-right: 32px;\n  }\n"])),(function(e){return e.theme.mediaQueries.xl})),Tn=p.e.tr(Le||(Le=Object(s.a)(["\n  cursor: pointer;\n  border-bottom: 2px solid ",";\n"])),(function(e){return e.theme.colors.borderColor})),An=p.e.td(Be||(Be=Object(s.a)(["\n  padding: 16px 0 24px 16px;\n"]))),Ln=p.e.td(De||(De=Object(s.a)(["\n  padding-top: 16px;\n  padding-bottom: 24px;\n"]))),Bn=p.e.td(qe||(qe=Object(s.a)(["\n  padding-top: 24px;\n"]))),Dn=function(e){var t=e.details,n=e.userDataReady,c=!!Object(f.c)(t.pid).stakedBalance.toNumber(),i=Object(l.useState)(c),s=Object(a.a)(i,2),d=s[0],j=s[1],b=ht(d,300),u=Object(k.a)(),O=function(){j(!d)};Object(l.useEffect)((function(){j(c)}),[c]);var p=Object(x.V)(),h=p.isXl,m=p.isXs,g=!h,v=g?on:dn,y=v.map((function(e){return e.name}));return Object(D.jsxs)(D.Fragment,{children:[m?Object(D.jsxs)(Tn,{onClick:O,children:[Object(D.jsxs)("td",{children:[Object(D.jsx)("tr",{children:Object(D.jsx)(Bn,{children:Object(D.jsx)(ln,{children:Object(D.jsx)(kt,Object(r.a)({},e.farm))})})}),Object(D.jsxs)("tr",{children:[Object(D.jsx)(An,{children:Object(D.jsx)(ln,{label:u(1072,"Earned"),children:Object(D.jsx)(St,Object(r.a)(Object(r.a)({},e.earned),{},{userDataReady:n}))})}),Object(D.jsx)(Ln,{children:Object(D.jsx)(ln,{label:u(736,"APR"),children:Object(D.jsx)(gt,Object(r.a)(Object(r.a)({},e.apr),{},{hideButton:!0}))})})]})]}),Object(D.jsx)("td",{children:Object(D.jsx)(Cn,{children:Object(D.jsx)(ln,{children:Object(D.jsx)(At,{actionPanelToggled:d})})})})]}):Object(D.jsx)(Tn,{onClick:O,children:Object.keys(e).map((function(t){var c=y.indexOf(t);if(-1===c)return null;switch(t){case"details":return Object(D.jsx)("td",{children:Object(D.jsx)(Cn,{children:Object(D.jsx)(ln,{children:Object(D.jsx)(At,{actionPanelToggled:d})})})},t);case"apr":return Object(D.jsx)("td",{children:Object(D.jsx)(Cn,{children:Object(D.jsx)(ln,{label:u(736,"APR"),children:Object(D.jsx)(gt,Object(r.a)(Object(r.a)({},e.apr),{},{hideButton:g}))})})},t);default:return Object(D.jsx)("td",{children:Object(D.jsx)(Cn,{children:Object(D.jsx)(ln,{label:u(v[c].translationId,v[c].label),children:o.a.createElement(Sn[t],Object(r.a)(Object(r.a)({},e[t]),{},{userDataReady:n}))})})},t)}}))}),b&&Object(D.jsx)("tr",{children:Object(D.jsx)("td",{colSpan:6,children:Object(D.jsx)(rn,Object(r.a)(Object(r.a)({},e),{},{expanded:d}))})})]})},qn=p.e.div(jn||(jn=Object(s.a)(["\n  filter: ",";\n  width: 100%;\n  background: ",";\n  border-radius: 16px;\n  margin: 16px 0px;\n"])),(function(e){return e.theme.card.dropShadow}),(function(e){return e.theme.card.background})),Rn=p.e.div(bn||(bn=Object(s.a)(["\n  overflow: visible;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"]))),In=p.e.table(un||(un=Object(s.a)(["\n  border-collapse: collapse;\n  font-size: 14px;\n  border-radius: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n"]))),En=p.e.tbody(On||(On=Object(s.a)(["\n  & tr {\n    td {\n      font-size: 16px;\n      vertical-align: middle;\n    }\n  }\n"]))),Fn=p.e.div(xn||(xn=Object(s.a)(["\n  position: relative;\n"]))),Pn=p.e.div(pn||(pn=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  padding-top: 5px;\n  padding-bottom: 5px;\n"]))),Un=function(e){var t=Object(l.useRef)(null),n=Object(k.a)(),c=e.data,i=e.columns,a=e.userDataReady,s=Object(x.X)(i,c,{sortable:!0,sortColumn:"farm"}).rows;return Object(D.jsx)(qn,{children:Object(D.jsxs)(Fn,{children:[Object(D.jsx)(Rn,{ref:t,children:Object(D.jsx)(In,{children:Object(D.jsx)(En,{children:s.map((function(e){return Object(l.createElement)(Dn,Object(r.a)(Object(r.a)({},e.original),{},{userDataReady:a,key:"table-row-".concat(e.id)}))}))})})}),Object(D.jsx)(Pn,{children:Object(D.jsxs)(x.h,{variant:"text",onClick:function(){t.current.scrollIntoView({behavior:"smooth"})},children:[n(999,"To Top"),Object(D.jsx)(x.q,{color:"primary"})]})})]})})},Nn=n(140),zn=function(e){var t,n=e.hasStakeInFinishedFarms,c=e.hasStakeInArchivedFarms,i=Object(d.g)().url,r=Object(d.f)(),a=Object(k.a)();switch(r.pathname){case"/farms":t=0;break;case"/farms/history":t=1;break;case"/farms/archived":t=2;break;default:t=0}return Object(D.jsx)(Qn,{children:Object(D.jsxs)(x.i,{activeIndex:t,scale:"sm",variant:"subtle",children:[Object(D.jsx)(x.j,{as:Nn.a,to:"".concat(i),children:a(1198,"Live")}),Object(D.jsx)(x.H,{show:n,children:Object(D.jsx)(x.j,{as:Nn.a,to:"".concat(i,"/history"),children:a(388,"Finished")})}),Object(D.jsx)(x.H,{show:c,children:Object(D.jsx)(x.j,{as:Nn.a,to:"".concat(i,"/archived"),children:a(999,"Discontinued")})})]})})},Qn=p.e.div(hn||(hn=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  a {\n    padding-left: 12px;\n    padding-right: 12px;\n  }\n\n  "," {\n    margin-left: 16px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),Kn=n(912),Mn=p.e.div(mn||(mn=Object(s.a)(["\n  margin-left: -8px;\n\n  "," {\n    margin-left: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),Vn=function(e){var t=e.viewMode,n=e.onToggle,c=function(e){t!==e&&n(e)};return Object(D.jsxs)(Mn,{children:[Object(D.jsx)(x.w,{variant:"text",scale:"sm",onClick:function(){return c(Te.CARD)},children:Object(D.jsx)(x.o,{color:t===Te.CARD?"primary":"textDisabled"})}),Object(D.jsx)(x.w,{variant:"text",scale:"sm",onClick:function(){return c(Te.TABLE)},children:Object(D.jsx)(x.B,{color:t===Te.TABLE?"primary":"textDisabled"})})]})},Gn=p.e.div(fn||(fn=Object(s.a)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  position: relative;\n\n  justify-content: space-between;\n  flex-direction: column;\n  margin-bottom: 32px;\n\n  "," {\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 16px 32px;\n    margin-bottom: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),Xn=p.e.div(gn||(gn=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n\n  "," {\n    margin-left: 8px;\n  }\n"])),x.O),Hn=p.e.div(vn||(vn=Object(s.a)(["\n  > "," {\n    font-size: 12px;\n  }\n"])),x.O),Wn=p.e.div(yn||(yn=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 8px 0px;\n\n  "," {\n    width: auto;\n    padding: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),Jn=p.e.div(kn||(kn=Object(s.a)(["\n  flex-wrap: wrap;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n  width: 100%;\n\n  > div {\n    padding: 8px 0px;\n  }\n\n  "," {\n    justify-content: flex-start;\n    width: auto;\n\n    > div {\n      padding: 0;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),Yn=p.e.div(wn||(wn=Object(s.a)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n"]))),Zn=function(e){var t=e.tokenMode,n=e.kingdomMode,c=Object(d.g)().path,i=Object(d.f)().pathname,s=Object(k.a)(),o=Object(f.d)(),b=o.data,p=o.userDataLoaded,q=Object(f.g)(),R=Object(l.useState)(""),I=Object(a.a)(R,2),E=I[0],F=I[1],P=y(Te.TABLE,"pancake_farm_view"),U=Object(a.a)(P,2),N=U[0],z=U[1],Q=Object(O.c)().account,K=Object(l.useState)("hot"),M=Object(a.a)(K,2),V=M[0],G=M[1],X=Object(j.b)(),H=Object(g.a)().fastRefresh;Object(l.useEffect)((function(){Q&&X(Object(v.a)(Q))}),[Q,X,H]);var W=i.includes("archived"),J=i.includes("history"),Y=!J&&!W,Z=!Q||!!Q&&p,$=Object(l.useState)(!Y),_=Object(a.a)($,2),ee=_[0],te=_[1];Object(l.useEffect)((function(){te(!Y)}),[Y]),Object(l.useEffect)((function(){X(Object(L.d)(W)),W&&(X(Object(L.c)()),Q&&X(Object(v.a)(Q)))}),[W,X,Q]);var ne=b.filter((function(e){return n?!!e.isKingdom===!!n&&"0X"!==e.multiplier&&!Object(T.a)(e.pid):!!e.isTokenOnly===!!t&&!!e.isKingdom===!!n&&"0X"!==e.multiplier&&!Object(T.a)(e.pid)})),ce=b.filter((function(e){return n?!!e.isKingdom===!!n&&"0X"===e.multiplier&&!Object(T.a)(e.pid):!!e.isTokenOnly===!!t&&!!e.isKingdom===!!n&&"0X"===e.multiplier&&!Object(T.a)(e.pid)})),ie=b.filter((function(e){return Object(T.a)(e.pid)})),re=ne.filter((function(e){return e.userData&&new u.a(e.userData.stakedBalance).isGreaterThan(0)})),ae=ce.filter((function(e){return e.userData&&new u.a(e.userData.stakedBalance).isGreaterThan(0)})),se=ie.filter((function(e){return e.userData&&new u.a(e.userData.stakedBalance).isGreaterThan(0)})),le=Object(l.useCallback)((function(e){var t=e.map((function(e){if(!e.lpTotalInQuoteToken)return e;var t=e.quoteToken.busdPrice,n=new u.a(e.lpTotalInQuoteToken).times(t),c=Y?Object(S.a)(e.poolWeight,q,n):0;return Object(r.a)(Object(r.a)({},e),{},{apr:c,liquidity:n})}));if(E){var n=E.toLowerCase();t=t.filter((function(e){return e.lpSymbol.toLowerCase().includes(n)}))}return t}),[q,E,Y]),oe=Object(l.useRef)(null),de=Object(l.useState)(12),je=Object(a.a)(de,2),be=je[0],ue=je[1],Oe=Object(l.useState)(!1),xe=Object(a.a)(Oe,2),pe=xe[0],he=xe[1],me=Object(l.useMemo)((function(){var e=[];return Y&&(e=le(ee?re:ne)),J&&(e=le(ee?ae:ce)),W&&(e=le(ee?se:ie)),function(e){switch(V){case"apr":return Object(C.orderBy)(e,(function(e){return e.apr}),"desc");case"multiplier":return Object(C.orderBy)(e,(function(e){return e.multiplier?Number(e.multiplier.slice(0,-1)):0}),"desc");case"earned":return Object(C.orderBy)(e,(function(e){return e.userData?e.userData.earnings:0}),"desc");case"liquidity":return Object(C.orderBy)(e,(function(e){return Number(e.liquidity)}),"desc");default:return e}}(e).slice(0,be)}),[V,ne,le,ce,ie,Y,J,W,se,ae,ee,re,be]);Object(l.useEffect)((function(){pe||(new IntersectionObserver((function(e){Object(a.a)(e,1)[0].isIntersecting&&ue((function(e){return e+12}))}),{rootMargin:"0px",threshold:1}).observe(oe.current),he(!0))}),[me,pe]);var fe=me.map((function(e){var t=e.token,n=e.quoteToken,c=t.address,i=n.address,r=e.lpSymbol&&e.lpSymbol.split(" ")[0].toUpperCase().replace("PANCAKE","");return{apr:{value:e.apr&&e.apr.toLocaleString("en-US",{maximumFractionDigits:2}),multiplier:e.multiplier,lpLabel:r,tokenAddress:c,quoteTokenAddress:i,cakePrice:q,originalValue:e.apr},farm:{image:e.lpSymbol.split(" ")[0].toLocaleLowerCase(),label:r,pid:e.pid},earned:{earnings:Object(w.b)(new u.a(e.userData.earnings)),pid:e.pid},liquidity:{liquidity:e.liquidity},multiplier:{multiplier:e.multiplier},details:e}})),ge=s(674,"Farms"),ve=s(320,"Stake LP tokens to earn CUB"),ye=s(1e4,"Deposit Fee will be used to buyback CUB and bLEO");t&&(ge=s(674,"Dens"),ve=s(10002,"Stake tokens to earn CUB"));return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)(A.a,{children:[Object(D.jsx)(x.u,{as:"h1",size:"xxl",color:"secondary",mb:"15px",children:ge}),Object(D.jsx)(x.u,{as:"h1",size:"lg",color:"primary",mb:"20px",style:{textAlign:"left"},children:ve}),Object(D.jsx)(x.u,{as:"h2",color:"secondary",mb:"20px",style:{textAlign:"left"},children:ye}),Object(D.jsx)("br",{}),Object(D.jsx)(Yn,{children:Object(D.jsx)(x.h,{size:"sm",children:Object(D.jsx)("a",{href:"https://docs.cubdefi.com",children:"Learn More"})})})]}),Object(D.jsxs)(m.a,{children:[Object(D.jsxs)(Gn,{children:[Object(D.jsxs)(Jn,{children:[Object(D.jsx)(Vn,{viewMode:N,onToggle:function(e){return z(e)}}),Object(D.jsxs)(Xn,{children:[Object(D.jsx)(x.P,{checked:ee,onChange:function(){return te(!ee)},scale:"sm"}),Object(D.jsxs)(x.O,{children:[" ",s(1116,"Staked only")]})]}),Object(D.jsx)(zn,{hasStakeInFinishedFarms:ae.length>0,hasStakeInArchivedFarms:se.length>0})]}),Object(D.jsxs)(Wn,{children:[Object(D.jsxs)(Hn,{children:[Object(D.jsx)(x.O,{children:"SORT BY"}),Object(D.jsx)(B.a,{options:[{label:"Hot",value:"hot"},{label:"APR",value:"apr"},{label:"Multiplier",value:"multiplier"},{label:"Earned",value:"earned"},{label:"Liquidity",value:"liquidity"}],onChange:function(e){G(e.value)}})]}),Object(D.jsxs)(Hn,{style:{marginLeft:16},children:[Object(D.jsx)(x.O,{children:"SEARCH"}),Object(D.jsx)(Kn.a,{onChange:function(e){F(e.target.value)}})]})]})]}),function(){if(N===Te.TABLE&&fe.length){var e=dn.map((function(e){return{id:e.id,name:e.name,label:e.label,sort:function(t,n){switch(e.name){case"farm":return n.id-t.id;case"apr":return t.original.apr.value&&n.original.apr.value?Number(t.original.apr.value)-Number(n.original.apr.value):0;case"earned":return t.original.earned.earnings-n.original.earned.earnings;default:return 1}},sortable:e.sortable}}));return Object(D.jsx)(Un,{data:fe,columns:e,userDataReady:Z})}return Object(D.jsx)("div",{children:Object(D.jsxs)(h,{children:[Object(D.jsx)(d.a,{exact:!0,path:"".concat(c),children:me.map((function(e){return Object(D.jsx)(pt,{farm:e,cakePrice:q,account:Q,removed:!1},e.pid)}))}),Object(D.jsx)(d.a,{exact:!0,path:"".concat(c,"/history"),children:me.map((function(e){return Object(D.jsx)(pt,{farm:e,cakePrice:q,account:Q,removed:!0},e.pid)}))}),Object(D.jsx)(d.a,{exact:!0,path:"".concat(c,"/archived"),children:me.map((function(e){return Object(D.jsx)(pt,{farm:e,cakePrice:q,account:Q,removed:!0},e.pid)}))})]})})}(),Object(D.jsx)("div",{ref:oe}),Object(D.jsx)(x.x,{src:"/images/cub/wide.svg",alt:"illustration",width:1352,height:587,responsive:!0})]})]})}},860:function(e,t,n){"use strict";var c=n(5),i=(n(0),n(32)),r=n(145),a=n(849),s=n(12);t.a=function(e){var t=Object(a.a)(),n=Object(r.a)(),l=n.login,o=n.logout,d=Object(i.Z)(l,o).onPresentConnectModal;return Object(s.jsx)(i.h,Object(c.a)(Object(c.a)({onClick:d},e),{},{children:t(292,"Unlock Wallet")}))}}}]);
//# sourceMappingURL=11.eceaab61.chunk.js.map