"use strict";(self.webpackChunkcubdefi_frontend=self.webpackChunkcubdefi_frontend||[]).push([[342],{23282:function(n,e,t){var i=t(1413),r=(t(47313),t(34312)),a=t(11828),s=t(1760),l=t(46417);e.Z=function(n){var e=(0,s.Z)(),t=(0,a.Z)(),o=t.login,d=t.logout,c=(0,r.hB)(o,d).onPresentConnectModal;return(0,l.jsx)(r.zx,(0,i.Z)((0,i.Z)({onClick:c},n),{},{children:e(292,"Unlock Wallet")}))}},2342:function(n,e,t){t.r(e),t.d(e,{default:function(){return Ht}});var i,r,a=t(1413),s=t(70885),l=t(30168),o=t(47313),d=t(63830),c=t(20438),u=t(58704),x=t.n(u),p=t(82229),h=t(34312),m=t(49184),f=m.ZP.div(i||(i=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"]))),j=t(84485),g=t(91903),Z=t(1689),v=t(63199),b=function(n,e){var t=(0,o.useState)((function(){try{var t=localStorage.getItem(e);return t?JSON.parse(t):n}catch(i){return n}})),i=(0,s.Z)(t,2),r=i[0],a=i[1];return(0,o.useEffect)((function(){localStorage.setItem(e,JSON.stringify(r))}),[r,e]),[r,a]},y=t(1760),k=t(64446),w=t(44383),P=t(16031),S=t(79581),C=t(76382),T=t(64647),A=t(4301),L=t(46417),B=m.ZP.div(r||(r=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"])),(function(n){return n.theme.colors.primary})),D=function(n){var e=n.onClick,t=n.expanded,i=null;return n.onlyArrow||(i=(0,L.jsx)(h.xv,{color:"primary",bold:!0,children:t?"Hide":"Details"})),(0,L.jsxs)(B,{"aria-label":"Hide or show expandable content",role:"button",onClick:function(){return e()},children:[i,t?(0,L.jsx)(h.g8,{}):(0,L.jsx)(h.v4,{})]})};D.defaultProps={expanded:!1};var I,q,R,U,F,E,z,N,O,K,Q,V,M,G,X,W,H,J,$,_,Y,nn,en,tn,rn,an,sn,ln,on,dn,cn,un,xn,pn,hn,mn,fn,jn,gn,Zn,vn,bn,yn,kn,wn,Pn,Sn,Cn,Tn,An,Ln,Bn,Dn,In=D,qn=t(18941),Rn=t(19439),Un=m.ZP.div(I||(I=(0,l.Z)(["\n  margin-top: 24px;\n"]))),Fn=(0,m.ZP)(h.NR)(q||(q=(0,l.Z)(["\n  font-weight: 400;\n"]))),En=function(n){var e=n.bscScanAddress,t=n.infoAddress,i=n.removed,r=n.totalValueFormatted,a=n.lpLabel,s=n.addLiquidityUrl,l=(0,y.Z)();return(0,L.jsxs)(Un,{children:[(0,L.jsxs)(h.kC,{justifyContent:"space-between",children:[(0,L.jsxs)(h.xv,{children:[l(354,"Total Liquidity"),":"]}),(0,L.jsx)(h.xv,{children:r})]}),!i&&(0,L.jsx)(Fn,{href:s,children:l(999,"Get ".concat(a),{name:a})}),(0,L.jsx)(Fn,{href:e,children:l(999,"View Contract")}),(0,L.jsx)(Fn,{href:t,children:l(999,"See Pair Info")})]})},zn=function(n){return(0,L.jsx)(h.Vp,(0,a.Z)((0,a.Z)({variant:"textSubtle",outline:!0},n),{},{children:"Dual"}))},Nn=function(){return(0,L.jsx)(h.Vp,{variant:"success",outline:!0,startIcon:(0,L.jsx)(h.SA,{}),children:"No Fees"})},On=(0,m.ZP)(h.kC)(R||(R=(0,l.Z)(["\n  svg {\n    margin-right: 4px;\n  }\n"]))),Kn=(0,m.ZP)(h.Vp)(U||(U=(0,l.Z)(["\n  margin-left: 4px;\n"]))),Qn=function(n){var e=n.lpLabel,t=n.multiplier,i=n.farmImage,r=n.tokenSymbol,a=n.depositFee;return(0,L.jsxs)(On,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:[(0,L.jsx)(h.Ee,{src:"/images/farms/".concat(i,".png"),alt:r,width:64,height:64}),(0,L.jsxs)(h.kC,{flexDirection:"column",alignItems:"flex-end",children:[(0,L.jsx)(h.X6,{mb:"4px",children:e.split(" ")[0]}),(0,L.jsxs)(h.kC,{justifyContent:"center",children:[0===a?(0,L.jsx)(Nn,{}):null,(0,L.jsx)(Kn,{variant:"secondary",children:t})]})]})]})},Vn=t(74165),Mn=t(15861),Gn=t(30652),Xn=t(48574),Wn=t(27163),Hn=t(89680),Jn=t(23282),$n=t(89498),_n=t(29608),Yn=t(68869),ne=t(49908),ee=m.ZP.div(F||(F=(0,l.Z)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]))),te=function(n){var e=n.stakedBalance,t=n.tokenBalance,i=n.tokenName,r=n.pid,a=n.addLiquidityUrl,l=n.isKingdom,c=n.isTokenOnly,u=n.isKingdomToken,x=(0,y.Z)(),p=(0,$n.Z)(r,l).onStake,m=(0,_n.Z)(r,l).onUnstake,f=(0,d.TH)(),j=(0,o.useCallback)((function(){var n=(0,k.mW)(e);return n>0&&n<1e-4?(0,k.NJ)(e).toLocaleString():n.toLocaleString()}),[e]),g=(0,h.dd)((0,L.jsx)(Yn.Z,{max:t,onConfirm:p,tokenName:i,addLiquidityUrl:a,isTokenOnly:c,isKingdomToken:u})),Z=(0,s.Z)(g,1)[0],v=(0,h.dd)((0,L.jsx)(ne.Z,{max:e,onConfirm:m,tokenName:i,isTokenOnly:c,isKingdomToken:u})),b=(0,s.Z)(v,1)[0];return(0,L.jsxs)(h.kC,{justifyContent:"space-between",alignItems:"center",children:[(0,L.jsx)(h.X6,{color:e.eq(0)?"textDisabled":"text",children:j()}),e.eq(0)?(0,L.jsx)(h.zx,{onClick:Z,disabled:f.pathname.includes("archived"),children:x(999,c||u?"Stake Token":"Stake LP")}):(0,L.jsxs)(ee,{children:[(0,L.jsx)(h.hU,{variant:"tertiary",onClick:b,mr:"6px",children:(0,L.jsx)(h.J9,{color:"primary",width:"14px"})}),(0,L.jsx)(h.hU,{variant:"tertiary",onClick:Z,children:(0,L.jsx)(h.dt,{color:"primary",width:"14px"})})]})]})},ie=t(98059),re=t(54545),ae=m.ZP.div(E||(E=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n"]))),se=function(n){var e=n.earnings,t=n.pid,i=n.isKingdom,r=(0,p.Ge)().account,a=(0,y.Z)(),l=(0,o.useState)(!1),d=(0,s.Z)(l,2),c=d[0],u=d[1],m=(0,ie.vj)(t,i).onReward,f=(0,g.Iu)(),j=(0,$n.Z)(t,i).onStake,Z=r?(0,k.mW)(e):0,v=Z.toLocaleString(),b=Z?new(x())(Z).multipliedBy(f).toNumber():0;return(0,L.jsxs)(h.kC,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[(0,L.jsxs)(h.X6,{color:0===Z?"textDisabled":"text",children:[v,b>0&&(0,L.jsx)(re.Z,{value:b})]}),(0,L.jsxs)(ae,{children:[12===t?(0,L.jsx)(h.zx,{disabled:0===Z||c,size:"sm",variant:"secondary",marginBottom:"15px",onClick:(0,Mn.Z)((0,Vn.Z)().mark((function n(){return(0,Vn.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u(!0),n.next=3,j(Z.toString());case 3:u(!1);case 4:case"end":return n.stop()}}),n)}))),children:a(999,"Compound")}):null,(0,L.jsx)(h.zx,{disabled:0===Z||c,onClick:(0,Mn.Z)((0,Vn.Z)().mark((function n(){return(0,Vn.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u(!0),n.next=3,m();case 3:u(!1);case 4:case"end":return n.stop()}}),n)}))),children:a(562,"Harvest")})]})]})},le=m.ZP.div(z||(z=(0,l.Z)(["\n  padding-top: 16px;\n"]))),oe=function(n){var e=n.farm,t=n.account,i=n.addLiquidityUrl,r=(0,y.Z)(),a=(0,o.useState)(!1),l=(0,s.Z)(a,2),c=l[0],u=l[1],p=e.pid,m=e.lpAddresses,f=e.isTokenOnly,j=e.isKingdomToken,g=e.isKingdom,Z=e.token.address,v=e.userData||{},b=v.allowance,k=void 0===b?0:b,w=v.tokenBalance,P=void 0===w?0:w,S=v.stakedBalance,C=void 0===S?0:S,T=v.earnings,A=void 0===T?0:T,B=new(x())(k),D=new(x())(P),I=new(x())(C),q=new(x())(A),R=(0,Gn.Kn)(m),U=(0,Gn.Kn)(Z),F=e.lpSymbol.toUpperCase(),E=t&&B&&B.isGreaterThan(0),z=(0,Wn.Z)(),N=(0,d.TH)(),O=(0,o.useMemo)((function(){return f||j?(0,Xn.jS)(U,z):(0,Xn.jS)(R,z)}),[R,f,z,U,j]),K=(0,Hn.yA)(O,g).onApprove,Q=(0,o.useCallback)((0,Mn.Z)((0,Vn.Z)().mark((function n(){return(0,Vn.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,u(!0),n.next=4,K();case 4:u(!1),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])}))),[K]);return(0,L.jsxs)(le,{children:[(0,L.jsxs)(h.kC,{children:[(0,L.jsx)(h.xv,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:"CUB"}),(0,L.jsx)(h.xv,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:r(1072,"Earned")})]}),(0,L.jsx)(se,{earnings:q,pid:p,isKingdom:g}),(0,L.jsxs)(h.kC,{children:[(0,L.jsx)(h.xv,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:F}),(0,L.jsx)(h.xv,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:r(1074,"Staked")})]}),t?E?(0,L.jsx)(te,{stakedBalance:I,tokenBalance:D,tokenName:F,pid:p,addLiquidityUrl:i,isKingdom:g,isTokenOnly:e.isTokenOnly,isKingdomToken:e.isKingdomToken}):(0,L.jsx)(h.zx,{mt:"8px",width:"100%",disabled:c||N.pathname.includes("archived"),onClick:Q,children:r(758,"Approve Contract")}):(0,L.jsx)(Jn.Z,{mt:"8px",width:"100%"})]})},de=t(52843),ce=(0,m.F4)(N||(N=(0,l.Z)(["\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n"]))),ue=m.ZP.div(O||(O=(0,l.Z)(["\n  background: linear-gradient(\n    45deg,\n    rgba(255, 0, 0, 1) 0%,\n    rgba(255, 154, 0, 1) 10%,\n    rgba(208, 222, 33, 1) 20%,\n    rgba(79, 220, 74, 1) 30%,\n    rgba(63, 218, 216, 1) 40%,\n    rgba(47, 201, 226, 1) 50%,\n    rgba(28, 127, 238, 1) 60%,\n    rgba(95, 21, 242, 1) 70%,\n    rgba(186, 12, 248, 1) 80%,\n    rgba(251, 7, 217, 1) 90%,\n    rgba(255, 0, 0, 1) 100%\n  );\n  background-size: 300% 300%;\n  animation: "," 2s linear infinite;\n  border-radius: 32px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"])),ce),xe=m.ZP.div(K||(K=(0,l.Z)(["\n  align-self: baseline;\n  background: ",";\n  border-radius: 32px;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"])),(function(n){return n.theme.card.background})),pe=m.ZP.div(Q||(Q=(0,l.Z)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"])),(function(n){return n.theme.colors.borderColor})),he=m.ZP.div(V||(V=(0,l.Z)(["\n  height: ",";\n  overflow: hidden;\n"])),(function(n){return n.expanded?"100%":"0px"})),me=function(n){var e=n.farm,t=n.removed,i=n.cakePrice,r=n.account,a=(0,y.Z)(),l=(0,o.useState)(!1),d=(0,s.Z)(l,2),c=d[0],u=d[1],x=e.lpSymbol.split(" ")[0].toLocaleLowerCase(),p=e.liquidity&&e.liquidity.toNumber()?"$".concat(e.liquidity.toNumber().toLocaleString(void 0,{maximumFractionDigits:0})):"-",m=e.lpSymbol&&e.lpSymbol.toUpperCase().replace("PANCAKE",""),f=e.dual?e.dual.earnLabel:"CUB",j=e.apr&&e.apr.toLocaleString("en-US",{maximumFractionDigits:2}),g=(0,Rn.Z)({quoteTokenAddress:e.quoteToken.address,tokenAddress:e.token.address}),Z=e.pcsVersion&&e.pcsVersion>1?qn.LJ:qn.wI,v="".concat(Z,"/").concat(g),b=e.lpAddresses[56];return(0,L.jsxs)(xe,{children:["CUB"===e.token.symbol&&(0,L.jsx)(ue,{}),(0,L.jsx)(Qn,{lpLabel:m,multiplier:e.multiplier,isCommunityFarm:e.isCommunity,farmImage:x,tokenSymbol:e.token.symbol,depositFee:e.depositFeeBP}),!t&&(0,L.jsxs)(h.kC,{justifyContent:"space-between",alignItems:"center",children:[(0,L.jsxs)(h.xv,{children:[a(736,"APR"),":"]}),(0,L.jsx)(h.xv,{bold:!0,style:{display:"flex",alignItems:"center"},children:e.apr?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(de.Z,{lpLabel:m,addLiquidityUrl:v,cakePrice:i,apr:e.apr}),j,"%"]}):(0,L.jsx)(h.Od,{height:24,width:80})})]}),(0,L.jsxs)(h.kC,{justifyContent:"space-between",children:[(0,L.jsxs)(h.xv,{children:[a(318,"Earn"),":"]}),(0,L.jsx)(h.xv,{bold:!0,children:f})]}),(0,L.jsxs)(h.kC,{justifyContent:"space-between",children:[(0,L.jsxs)(h.xv,{style:{fontSize:"16px"},children:[a(10001,"Deposit Fee"),":"]}),e.depositFeeBP?(0,L.jsxs)(h.xv,{bold:!0,style:{fontSize:"16px"},children:[e.depositFeeBP/100,"%"]}):"0%"]}),(0,L.jsx)(oe,{farm:e,account:r,addLiquidityUrl:v}),(0,L.jsx)(pe,{}),(0,L.jsx)(In,{onClick:function(){return u(!c)},expanded:c}),(0,L.jsx)(he,{expanded:c,children:(0,L.jsx)(En,{removed:t,bscScanAddress:e.isTokenOnly?"https://bscscan.com/token/".concat(e.token.address[56]):"https://bscscan.com/token/".concat(e.lpAddresses[56]),infoAddress:"https://pancakeswap.info/pair/".concat(b),totalValueFormatted:p,lpLabel:m,addLiquidityUrl:v})})]})},fe=function(n,e){var t=(0,o.useState)(!1),i=(0,s.Z)(t,2),r=i[0],a=i[1];return(0,o.useEffect)((function(){var t;return n&&!r?a(!0):!n&&r&&(t=setTimeout((function(){return a(!1)}),e)),function(){return clearTimeout(t)}}),[n,e,r]),r},je=m.ZP.div(M||(M=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  color: ",";\n\n  button {\n    width: 20px;\n    height: 20px;\n\n    svg {\n      path {\n        fill: ",";\n      }\n    }\n  }\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.textSubtle})),ge=m.ZP.div(G||(G=(0,l.Z)(["\n  min-width: 60px;\n  text-align: left;\n"]))),Ze=function(n){var e=n.value,t=n.lpLabel,i=n.tokenAddress,r=n.quoteTokenAddress,a=n.cakePrice,s=n.originalValue,l=n.hideButton,o=void 0!==l&&l,d=(0,Rn.Z)({quoteTokenAddress:r,tokenAddress:i}),c="".concat(qn.wI,"/").concat(d);return 0!==s?(0,L.jsx)(je,{children:s?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(ge,{children:[e,"%"]}),!o&&(0,L.jsx)(de.Z,{lpLabel:t,cakePrice:a,apr:s,addLiquidityUrl:c})]}):(0,L.jsx)(ge,{children:(0,L.jsx)(h.Od,{width:60})})}):(0,L.jsx)(je,{children:(0,L.jsxs)(ge,{children:[s,"%"]})})},ve=(0,m.ZP)(h.Ee)(X||(X=(0,l.Z)(["\n  width: 24px;\n  height: 24px;\n\n  "," {\n    width: 40px;\n    height: 40px;\n  }\n"])),(function(n){return n.theme.mediaQueries.sm})),be=m.ZP.div(W||(W=(0,l.Z)(["\n  padding-left: 16px;\n  display: flex;\n  align-items: center;\n\n  "," {\n    padding-left: 32px;\n  }\n"])),(function(n){return n.theme.mediaQueries.sm})),ye=function(n){var e=n.image,t=n.label,i=n.pid,r=(0,g.Dx)(i).stakedBalance,a=(0,y.Z)(),s=(0,k.mW)(r);return(0,L.jsxs)(be,{children:[(0,L.jsx)(ve,{src:"/images/farms/".concat(e,".png"),alt:"icon",width:40,height:40,mr:"8px"}),(0,L.jsxs)("div",{children:[s?(0,L.jsx)(h.xv,{color:"secondary",fontSize:"12px",bold:!0,children:a(999,"FARMING")}):null,(0,L.jsx)(h.xv,{bold:!0,children:t})]})]})},ke=m.ZP.span(H||(H=(0,l.Z)(["\n  color: ",";\n  display: flex;\n  align-items: center;\n"])),(function(n){var e=n.earned,t=n.theme;return e?t.colors.text:t.colors.textDisabled})),we=function(n){var e=n.earnings;return n.userDataReady?(0,L.jsx)(ke,{earned:e,children:e.toLocaleString()}):(0,L.jsx)(ke,{earned:0,children:(0,L.jsx)(h.Od,{width:60})})},Pe=m.ZP.div(J||(J=(0,l.Z)(["\n  display: flex;\n  width: 100%;\n  justify-content: flex-end;\n  padding-right: 8px;\n  color: ",";\n\n  "," {\n    padding-right: 0px;\n  }\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.mediaQueries.sm})),Se=(0,m.ZP)(h.v4)($||($=(0,l.Z)(["\n  transform: ",";\n  height: 20px;\n"])),(function(n){return n.toggled?"rotate(180deg)":"rotate(0)"})),Ce=function(n){var e=n.actionPanelToggled,t=(0,y.Z)(),i=!(0,h.SL)().isXl;return(0,L.jsxs)(Pe,{children:[!i&&t(658,"Details"),(0,L.jsx)(Se,{color:"primary",toggled:e})]})},Te=m.ZP.div(_||(_=(0,l.Z)(["\n  display: inline-block;\n"]))),Ae=m.ZP.div(Y||(Y=(0,l.Z)(["\n  color: ",";\n  width: 36px;\n  text-align: right;\n  margin-right: 14px;\n\n  "," {\n    text-align: left;\n    margin-right: 0;\n  }\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.mediaQueries.lg})),Le=m.ZP.div(nn||(nn=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n"]))),Be=function(n){var e=n.multiplier,t=e?e.toLowerCase():(0,L.jsx)(h.Od,{width:30}),i=(0,y.Z)(),r=(0,L.jsxs)("div",{children:[i(999,"The multiplier represents the amount of CUB rewards each farm gets."),(0,L.jsx)("br",{}),(0,L.jsx)("br",{}),i(999,"For example, if a 1x farm was getting 1 CUB per block, a 40x farm would be getting 40 CUB per block.")]}),a=(0,h.lL)(r,"top-end","hover",void 0,void 0,[20,10]),s=a.targetRef,l=a.tooltip,o=a.tooltipVisible;return(0,L.jsxs)(Le,{children:[(0,L.jsx)(Ae,{children:t}),(0,L.jsx)(Te,{ref:s,children:(0,L.jsx)(h.by,{color:"textSubtle"})}),o&&l]})},De=m.ZP.div(en||(en=(0,l.Z)(["\n  display: inline-block;\n"]))),Ie=m.ZP.div(tn||(tn=(0,l.Z)(["\n  min-width: 110px;\n  font-weight: 600;\n  text-align: right;\n  margin-right: 14px;\n\n  "," {\n    text-align: left;\n    margin-right: 0;\n  }\n"])),(function(n){return n.theme.mediaQueries.lg})),qe=m.ZP.div(rn||(rn=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n"]))),Re=function(n){var e=n.liquidity,t=e&&e.gt(0)?"$".concat(Number(e).toLocaleString(void 0,{maximumFractionDigits:0})):(0,L.jsx)(h.Od,{width:60}),i=(0,y.Z)(),r=(0,h.lL)(i(999,"The total value of the funds in this farm\u2019s liquidity pool"),"top-end","hover",void 0,void 0,[20,10]),a=r.targetRef,s=r.tooltip,l=r.tooltipVisible;return(0,L.jsxs)(qe,{children:[(0,L.jsx)(Ie,{children:(0,L.jsx)(h.xv,{children:t})}),(0,L.jsx)(De,{ref:a,children:(0,L.jsx)(h.by,{color:"textSubtle"})}),l&&s]})},Ue=t(87977),Fe=m.ZP.div(an||(an=(0,l.Z)(["\n  padding: 16px;\n  border: 2px solid ",";\n  border-radius: 16px;\n  flex-grow: 1;\n  flex-basis: 0;\n  margin-bottom: 16px;\n\n  "," {\n    margin-left: 12px;\n    margin-right: 12px;\n    margin-bottom: 0;\n    max-height: 100px;\n  }\n\n  "," {\n    margin-left: 48px;\n    margin-right: 0;\n    margin-bottom: 0;\n    max-height: 100px;\n  }\n"])),(function(n){return n.theme.colors.input}),(function(n){return n.theme.mediaQueries.sm}),(function(n){return n.theme.mediaQueries.xl})),Ee=m.ZP.div(sn||(sn=(0,l.Z)(["\n  font-weight: 600;\n  font-size: 12px;\n  margin-bottom: 8px;\n"]))),ze=m.ZP.span(ln||(ln=(0,l.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.secondary})),Ne=m.ZP.span(on||(on=(0,l.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.textSubtle})),Oe=m.ZP.div(dn||(dn=(0,l.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),Ke=m.ZP.div(cn||(cn=(0,l.Z)(["\n  font-weight: 600;\n  font-size: 20px;\n  color: ",";\n"])),(function(n){return n.theme.colors.text})),Qe=m.ZP.div(un||(un=(0,l.Z)(["\n  font-size: 12px;\n  color: ",";\n"])),(function(n){return n.theme.colors.textSubtle})),Ve=function(n){var e=n.pid,t=n.userData,i=n.userDataReady,r=new(x())(t.earnings),a=(0,g.Iu)(),l=0,d=0,c=i?l.toLocaleString():(0,L.jsx)(h.Od,{width:60});r.isZero()||(l=(0,k.mW)(r),d=new(x())(l).multipliedBy(a).toNumber(),c=l.toLocaleString());var u=(0,o.useState)(!1),p=(0,s.Z)(u,2),m=p[0],f=p[1],j=(0,ie.vj)(e).onReward,Z=(0,y.Z)(),v=(0,Ue.$i)({start:0,end:d,duration:1,separator:",",decimals:3}),b=v.countUp,w=v.update,P=(0,o.useRef)(w);return(0,o.useEffect)((function(){P.current(d)}),[d,P]),(0,L.jsxs)(Fe,{children:[(0,L.jsxs)(Ee,{children:[(0,L.jsx)(ze,{children:"CUB "}),(0,L.jsx)(Ne,{children:Z(1072,"EARNED")})]}),(0,L.jsxs)(Oe,{children:[(0,L.jsxs)("div",{children:[(0,L.jsx)(Ke,{children:c}),b>0&&(0,L.jsxs)(Qe,{children:["~",b,"USD"]})]}),(0,L.jsx)(h.zx,{disabled:!l||m||!i,onClick:(0,Mn.Z)((0,Vn.Z)().mark((function n(){return(0,Vn.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return f(!0),n.next=3,j();case 3:f(!1);case 4:case"end":return n.stop()}}),n)}))),ml:"4px",children:Z(562,"Harvest")})]})]})},Me=m.ZP.div(xn||(xn=(0,l.Z)(["\n  display: flex;\n"]))),Ge=function(n){var e=n.pid,t=n.lpSymbol,i=n.lpAddresses,r=n.quoteToken,a=n.token,l=n.userDataReady,c=n.isTokenOnly,u=(0,y.Z)(),x=(0,p.Ge)().account,m=(0,o.useState)(!1),f=(0,s.Z)(m,2),j=f[0],Z=f[1],v=(0,g.Dx)(e),b=v.allowance,w=v.tokenBalance,P=v.stakedBalance,S=(0,$n.Z)(e).onStake,C=(0,_n.Z)(e).onUnstake,T=(0,Wn.Z)(),A=(0,d.TH)(),B=(0,Gn.Kn)(a.address),D=x&&b&&b.isGreaterThan(0),I=i[56],q=(0,Rn.Z)({quoteTokenAddress:r.address,tokenAddress:a.address}),R="".concat(qn.wI,"/").concat(q),U=(0,o.useCallback)((function(){var n=(0,k.mW)(P);return n>0&&n<1e-4?(0,k.NJ)(P).toLocaleString():n.toLocaleString()}),[P]),F=(0,h.dd)((0,L.jsx)(Yn.Z,{max:w,onConfirm:S,tokenName:t,addLiquidityUrl:R})),E=(0,s.Z)(F,1)[0],z=(0,h.dd)((0,L.jsx)(ne.Z,{max:P,onConfirm:C,tokenName:t})),N=(0,s.Z)(z,1)[0],O=(0,o.useMemo)((function(){return c?(0,Xn.jS)(B,T):(0,Xn.jS)(I,T)}),[I,c,T,B]),K=(0,Hn.yA)(O).onApprove,Q=(0,o.useCallback)((0,Mn.Z)((0,Vn.Z)().mark((function n(){return(0,Vn.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,Z(!0),n.next=4,K();case 4:Z(!1),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])}))),[K]);return x?D?P.gt(0)?(0,L.jsxs)(Fe,{children:[(0,L.jsxs)(Ee,{children:[(0,L.jsxs)(ze,{children:[t," "]}),(0,L.jsx)(Ne,{children:u(999,"STAKED")})]}),(0,L.jsxs)(Oe,{children:[(0,L.jsx)("div",{children:(0,L.jsx)(Ke,{children:U()})}),(0,L.jsxs)(Me,{children:[(0,L.jsx)(h.hU,{variant:"secondary",onClick:N,mr:"6px",children:(0,L.jsx)(h.J9,{color:"primary",width:"14px"})}),(0,L.jsx)(h.hU,{variant:"secondary",onClick:E,children:(0,L.jsx)(h.dt,{color:"primary",width:"14px"})})]})]})]}):(0,L.jsxs)(Fe,{children:[(0,L.jsxs)(Ee,{children:[(0,L.jsxs)(Ne,{children:[u(999,"STAKE")," "]}),(0,L.jsx)(ze,{children:t})]}),(0,L.jsx)(Oe,{children:(0,L.jsx)(h.zx,{width:"100%",onClick:E,variant:"secondary",disabled:A.pathname.includes("archived"),children:u(999,c?"Stake Token":"Stake LP")})})]}):l?(0,L.jsxs)(Fe,{children:[(0,L.jsx)(Ee,{children:(0,L.jsx)(Ne,{children:u(999,"ENABLE FARM")})}),(0,L.jsx)(Oe,{children:(0,L.jsx)(h.zx,{width:"100%",disabled:j||A.pathname.includes("archived"),onClick:Q,variant:"secondary",children:u(999,"Enable")})})]}):(0,L.jsxs)(Fe,{children:[(0,L.jsx)(Ee,{children:(0,L.jsx)(Ne,{children:u(999,"START FARMING")})}),(0,L.jsx)(Oe,{children:(0,L.jsx)(h.Od,{width:180,marginBottom:28,marginTop:14})})]}):(0,L.jsxs)(Fe,{children:[(0,L.jsx)(Ee,{children:(0,L.jsx)(Ne,{children:u(999,"START FARMING")})}),(0,L.jsx)(Oe,{children:(0,L.jsx)(Jn.Z,{width:"100%"})})]})},Xe=(0,m.F4)(pn||(pn=(0,l.Z)(["\n  from {\n    max-height: 0px;\n  }\n  to {\n    max-height: 500px;\n  }\n"]))),We=(0,m.F4)(hn||(hn=(0,l.Z)(["\n  from {\n    max-height: 500px;\n  }\n  to {\n    max-height: 0px;\n  }\n"]))),He=m.ZP.div(mn||(mn=(0,l.Z)(["\n  animation: ",";\n  overflow: hidden;\n  background: ",";\n  display: flex;\n  width: 100%;\n  flex-direction: column-reverse;\n  padding: 24px;\n\n  "," {\n    flex-direction: row;\n    padding: 16px 32px;\n  }\n"])),(function(n){return n.expanded?(0,m.iv)(fn||(fn=(0,l.Z)(["\n          "," 300ms linear forwards\n        "])),Xe):(0,m.iv)(jn||(jn=(0,l.Z)(["\n          "," 300ms linear forwards\n        "])),We)}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.mediaQueries.lg})),Je=(0,m.ZP)(h.NR)(gn||(gn=(0,l.Z)(["\n  font-weight: 400;\n"]))),$e=m.ZP.div(Zn||(Zn=(0,l.Z)(["\n  color: ",";\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n\n  "," {\n    justify-content: flex-start;\n  }\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.mediaQueries.sm})),_e=m.ZP.div(vn||(vn=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  margin-top: 25px;\n\n  "," {\n    margin-top: 16px;\n  }\n\n  > div {\n    height: 24px;\n    padding: 0 6px;\n    font-size: 14px;\n    margin-right: 4px;\n\n    svg {\n      width: 14px;\n    }\n  }\n"])),(function(n){return n.theme.mediaQueries.sm})),Ye=m.ZP.div(bn||(bn=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  "," {\n    flex-direction: row;\n    align-items: center;\n    flex-grow: 1;\n    flex-basis: 0;\n  }\n"])),(function(n){return n.theme.mediaQueries.sm})),nt=m.ZP.div(yn||(yn=(0,l.Z)(["\n  min-width: 200px;\n"]))),et=m.ZP.div(kn||(kn=(0,l.Z)(["\n  display: block;\n\n  "," {\n    display: none;\n  }\n"])),(function(n){return n.theme.mediaQueries.lg})),tt=m.ZP.div(wn||(wn=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 4px 0px;\n"]))),it=function(n){var e=n.details,t=n.apr,i=n.multiplier,r=n.liquidity,s=n.userDataReady,l=n.expanded,o=e,d=(0,y.Z)(),c="0X"!==o.multiplier,u=o.quoteToken,x=o.token,p=o.dual,m=o.lpSymbol&&o.lpSymbol.toUpperCase().replace("PANCAKE",""),f=(0,Rn.Z)({quoteTokenAddress:u.address,tokenAddress:x.address}),j=o.lpAddresses[56],g="https://bscscan.com/address/".concat(j),Z="https://pancakeswap.info/pair/".concat(j),v=o.pcsVersion&&o.pcsVersion>1?qn.LJ:qn.wI,b="".concat(v,"/").concat(f);return(0,L.jsxs)(He,{expanded:l,children:[(0,L.jsxs)(nt,{children:[c&&(0,L.jsx)($e,{children:(0,L.jsx)(Je,{href:b,children:d(999,"Get ".concat(m),{name:m})})}),(0,L.jsx)(Je,{href:g,children:d(999,"View Contract")}),(0,L.jsx)(Je,{href:Z,children:d(999,"See Pair Info")}),(0,L.jsxs)(_e,{children:[0===o.depositFeeBP?(0,L.jsx)(Nn,{}):null,p?(0,L.jsx)(zn,{}):null]}),0!==o.depositFeeBP&&(0,L.jsxs)(h.kC,{justifyContent:"flex-start",children:[(0,L.jsxs)(h.xv,{style:{fontSize:"16px"},children:[d(10001,"Deposit Fee"),":\xa0"]}),(0,L.jsxs)(h.xv,{bold:!0,style:{fontSize:"16px"},children:[o.depositFeeBP/100,"%"]})]})]}),(0,L.jsxs)(et,{children:[(0,L.jsxs)(tt,{children:[(0,L.jsx)(h.xv,{children:d(736,"APR")}),(0,L.jsx)(Ze,(0,a.Z)({},t))]}),(0,L.jsxs)(tt,{children:[(0,L.jsx)(h.xv,{children:d(999,"Multiplier")}),(0,L.jsx)(Be,(0,a.Z)({},i))]}),(0,L.jsxs)(tt,{children:[(0,L.jsx)(h.xv,{children:d(999,"Liquidity")}),(0,L.jsx)(Re,(0,a.Z)({},r))]})]}),(0,L.jsxs)(Ye,{children:[(0,L.jsx)(Ve,(0,a.Z)((0,a.Z)({},o),{},{userDataReady:s})),(0,L.jsx)(Ge,(0,a.Z)((0,a.Z)({},o),{},{userDataReady:s}))]})]})},rt=m.ZP.div(Pn||(Pn=(0,l.Z)(["\n  font-size: 12px;\n  color: ",";\n  text-align: left;\n"])),(function(n){return n.theme.colors.textSubtle})),at=m.ZP.div(Sn||(Sn=(0,l.Z)(["\n  min-height: 24px;\n  display: flex;\n  align-items: center;\n"]))),st=function(n){var e=n.label,t=void 0===e?"":e,i=n.children;return(0,L.jsxs)("div",{children:[t&&(0,L.jsx)(rt,{children:t}),(0,L.jsx)(at,{children:i})]})},lt=[{id:1,name:"farm",translationId:999,sortable:!0,label:""},{id:2,name:"earned",translationId:1072,sortable:!0,label:"Earned"},{id:3,name:"apr",translationId:736,sortable:!0,label:"APR"},{id:6,name:"details",translationId:999,sortable:!0,label:""}],ot=[{id:1,name:"farm",translationId:999,sortable:!0,label:""},{id:2,name:"earned",translationId:1072,sortable:!0,label:"Earned"},{id:3,name:"apr",translationId:736,sortable:!0,label:"APR"},{id:4,name:"liquidity",translationId:999,sortable:!0,label:"Liquidity"},{id:5,name:"multiplier",translationId:999,sortable:!0,label:"Multiplier"},{id:6,name:"details",translationId:999,sortable:!0,label:""}];!function(n){n.TABLE="TABLE",n.CARD="CARD"}(Cn||(Cn={}));var dt,ct,ut,xt,pt,ht,mt,ft,jt,gt,Zt,vt,bt,yt,kt={apr:Ze,farm:ye,earned:we,details:Ce,multiplier:Be,liquidity:Re},wt=m.ZP.div(Tn||(Tn=(0,l.Z)(["\n  padding: 24px 0px;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  padding-right: 8px;\n\n  "," {\n    padding-right: 32px;\n  }\n"])),(function(n){return n.theme.mediaQueries.xl})),Pt=m.ZP.tr(An||(An=(0,l.Z)(["\n  cursor: pointer;\n  border-bottom: 2px solid ",";\n"])),(function(n){return n.theme.colors.borderColor})),St=m.ZP.td(Ln||(Ln=(0,l.Z)(["\n  padding: 16px 0 24px 16px;\n"]))),Ct=m.ZP.td(Bn||(Bn=(0,l.Z)(["\n  padding-top: 16px;\n  padding-bottom: 24px;\n"]))),Tt=m.ZP.td(Dn||(Dn=(0,l.Z)(["\n  padding-top: 24px;\n"]))),At=function(n){var e=n.details,t=n.userDataReady,i=!!(0,g.Dx)(e.pid).stakedBalance.toNumber(),r=(0,o.useState)(i),l=(0,s.Z)(r,2),d=l[0],c=l[1],u=fe(d,300),x=(0,y.Z)(),p=function(){c(!d)};(0,o.useEffect)((function(){c(i)}),[i]);var m=(0,h.SL)(),f=m.isXl,j=m.isXs,Z=!f,v=Z?lt:ot,b=v.map((function(n){return n.name}));return(0,L.jsxs)(L.Fragment,{children:[j?(0,L.jsxs)(Pt,{onClick:p,children:[(0,L.jsxs)("td",{children:[(0,L.jsx)("tr",{children:(0,L.jsx)(Tt,{children:(0,L.jsx)(st,{children:(0,L.jsx)(ye,(0,a.Z)({},n.farm))})})}),(0,L.jsxs)("tr",{children:[(0,L.jsx)(St,{children:(0,L.jsx)(st,{label:x(1072,"Earned"),children:(0,L.jsx)(we,(0,a.Z)((0,a.Z)({},n.earned),{},{userDataReady:t}))})}),(0,L.jsx)(Ct,{children:(0,L.jsx)(st,{label:x(736,"APR"),children:(0,L.jsx)(Ze,(0,a.Z)((0,a.Z)({},n.apr),{},{hideButton:!0}))})})]})]}),(0,L.jsx)("td",{children:(0,L.jsx)(wt,{children:(0,L.jsx)(st,{children:(0,L.jsx)(Ce,{actionPanelToggled:d})})})})]}):(0,L.jsx)(Pt,{onClick:p,children:Object.keys(n).map((function(e){var i=b.indexOf(e);if(-1===i)return null;switch(e){case"details":return(0,L.jsx)("td",{children:(0,L.jsx)(wt,{children:(0,L.jsx)(st,{children:(0,L.jsx)(Ce,{actionPanelToggled:d})})})},e);case"apr":return(0,L.jsx)("td",{children:(0,L.jsx)(wt,{children:(0,L.jsx)(st,{label:x(736,"APR"),children:(0,L.jsx)(Ze,(0,a.Z)((0,a.Z)({},n.apr),{},{hideButton:Z}))})})},e);default:return(0,L.jsx)("td",{children:(0,L.jsx)(wt,{children:(0,L.jsx)(st,{label:x(v[i].translationId,v[i].label),children:o.createElement(kt[e],(0,a.Z)((0,a.Z)({},n[e]),{},{userDataReady:t}))})})},e)}}))}),u&&(0,L.jsx)("tr",{children:(0,L.jsx)("td",{colSpan:6,children:(0,L.jsx)(it,(0,a.Z)((0,a.Z)({},n),{},{expanded:d}))})})]})},Lt=m.ZP.div(dt||(dt=(0,l.Z)(["\n  filter: ",";\n  width: 100%;\n  background: ",";\n  border-radius: 16px;\n  margin: 16px 0px;\n"])),(function(n){return n.theme.card.dropShadow}),(function(n){return n.theme.card.background})),Bt=m.ZP.div(ct||(ct=(0,l.Z)(["\n  overflow: visible;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"]))),Dt=m.ZP.table(ut||(ut=(0,l.Z)(["\n  border-collapse: collapse;\n  font-size: 14px;\n  border-radius: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n"]))),It=m.ZP.tbody(xt||(xt=(0,l.Z)(["\n  & tr {\n    td {\n      font-size: 16px;\n      vertical-align: middle;\n    }\n  }\n"]))),qt=m.ZP.div(pt||(pt=(0,l.Z)(["\n  position: relative;\n"]))),Rt=m.ZP.div(ht||(ht=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  padding-top: 5px;\n  padding-bottom: 5px;\n"]))),Ut=function(n){var e=(0,o.useRef)(null),t=(0,y.Z)(),i=n.data,r=n.columns,s=n.userDataReady,l=(0,h.x6)(r,i,{sortable:!0,sortColumn:"farm"}).rows;return(0,L.jsx)(Lt,{children:(0,L.jsxs)(qt,{children:[(0,L.jsx)(Bt,{ref:e,children:(0,L.jsx)(Dt,{children:(0,L.jsx)(It,{children:l.map((function(n){return(0,o.createElement)(At,(0,a.Z)((0,a.Z)({},n.original),{},{userDataReady:s,key:"table-row-".concat(n.id)}))}))})})}),(0,L.jsx)(Rt,{children:(0,L.jsxs)(h.zx,{variant:"text",onClick:function(){e.current.scrollIntoView({behavior:"smooth"})},children:[t(999,"To Top"),(0,L.jsx)(h.g8,{color:"primary"})]})})]})})},Ft=t(28303),Et=function(n){var e,t=n.hasStakeInFinishedFarms,i=n.hasStakeInArchivedFarms,r=(0,d.$B)().url,a=(0,d.TH)(),s=(0,y.Z)();switch(a.pathname){case"/farms":default:e=0;break;case"/farms/history":e=1;break;case"/farms/archived":e=2}return(0,L.jsx)(zt,{children:(0,L.jsxs)(h.xz,{activeIndex:e,scale:"sm",variant:"subtle",children:[(0,L.jsx)(h.kg,{as:Ft.rU,to:"".concat(r),children:s(1198,"Live")}),(0,L.jsx)(h.Bw,{show:t,children:(0,L.jsx)(h.kg,{as:Ft.rU,to:"".concat(r,"/history"),children:s(388,"Finished")})}),(0,L.jsx)(h.Bw,{show:i,children:(0,L.jsx)(h.kg,{as:Ft.rU,to:"".concat(r,"/archived"),children:s(999,"Discontinued")})})]})})},zt=m.ZP.div(mt||(mt=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  a {\n    padding-left: 12px;\n    padding-right: 12px;\n  }\n\n  "," {\n    margin-left: 16px;\n  }\n"])),(function(n){return n.theme.mediaQueries.sm})),Nt=t(77431),Ot=m.ZP.div(ft||(ft=(0,l.Z)(["\n  margin-left: -8px;\n\n  "," {\n    margin-left: 0;\n  }\n"])),(function(n){return n.theme.mediaQueries.sm})),Kt=function(n){var e=n.viewMode,t=n.onToggle,i=function(n){e!==n&&t(n)};return(0,L.jsxs)(Ot,{children:[(0,L.jsx)(h.hU,{variant:"text",scale:"sm",onClick:function(){return i(Cn.CARD)},children:(0,L.jsx)(h.UC,{color:e===Cn.CARD?"primary":"textDisabled"})}),(0,L.jsx)(h.hU,{variant:"text",scale:"sm",onClick:function(){return i(Cn.TABLE)},children:(0,L.jsx)(h.Gz,{color:e===Cn.TABLE?"primary":"textDisabled"})})]})},Qt=m.ZP.div(jt||(jt=(0,l.Z)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  position: relative;\n\n  justify-content: space-between;\n  flex-direction: column;\n  margin-bottom: 32px;\n\n  "," {\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 16px 32px;\n    margin-bottom: 0;\n  }\n"])),(function(n){return n.theme.mediaQueries.sm})),Vt=m.ZP.div(gt||(gt=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n\n  "," {\n    margin-left: 8px;\n  }\n"])),h.xv),Mt=m.ZP.div(Zt||(Zt=(0,l.Z)(["\n  > "," {\n    font-size: 12px;\n  }\n"])),h.xv),Gt=m.ZP.div(vt||(vt=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 8px 0px;\n\n  "," {\n    width: auto;\n    padding: 0;\n  }\n"])),(function(n){return n.theme.mediaQueries.sm})),Xt=m.ZP.div(bt||(bt=(0,l.Z)(["\n  flex-wrap: wrap;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n  width: 100%;\n\n  > div {\n    padding: 8px 0px;\n  }\n\n  "," {\n    justify-content: flex-start;\n    width: auto;\n\n    > div {\n      padding: 0;\n    }\n  }\n"])),(function(n){return n.theme.mediaQueries.sm})),Wt=m.ZP.div(yt||(yt=(0,l.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n"]))),Ht=function(n){var e=n.tokenMode,t=n.kingdomMode,i=(0,d.$B)().path,r=(0,d.TH)().pathname,l=(0,y.Z)(),u=(0,g.E2)(),m=u.data,B=u.userDataLoaded,D=(0,g.Iu)(),I=(0,o.useState)(""),q=(0,s.Z)(I,2),R=q[0],U=q[1],F=b(Cn.TABLE,"pancake_farm_view"),E=(0,s.Z)(F,2),z=E[0],N=E[1],O=(0,p.Ge)().account,K=(0,o.useState)("hot"),Q=(0,s.Z)(K,2),V=Q[0],M=Q[1],G=(0,c.T)(),X=(0,Z.Z)().fastRefresh;(0,o.useEffect)((function(){O&&G((0,v.IV)(O))}),[O,G,X]);var W=r.includes("archived"),H=r.includes("history"),J=!H&&!W,$=!O||!!O&&B,_=(0,o.useState)(!J),Y=(0,s.Z)(_,2),nn=Y[0],en=Y[1];(0,o.useEffect)((function(){en(!J)}),[J]),(0,o.useEffect)((function(){G((0,T.I2)(W)),W&&(G((0,T.eG)()),O&&G((0,v.IV)(O)))}),[W,G,O]);var tn=m.filter((function(n){return t?!!n.isKingdom===!!t&&"0X"!==n.multiplier&&!(0,S.Z)(n.pid):!!n.isTokenOnly===!!e&&!!n.isKingdom===!!t&&"0X"!==n.multiplier&&!(0,S.Z)(n.pid)})),rn=m.filter((function(n){return t?!!n.isKingdom===!!t&&"0X"===n.multiplier&&!(0,S.Z)(n.pid):!!n.isTokenOnly===!!e&&!!n.isKingdom===!!t&&"0X"===n.multiplier&&!(0,S.Z)(n.pid)})),an=m.filter((function(n){return(0,S.Z)(n.pid)})),sn=tn.filter((function(n){return n.userData&&new(x())(n.userData.stakedBalance).isGreaterThan(0)})),ln=rn.filter((function(n){return n.userData&&new(x())(n.userData.stakedBalance).isGreaterThan(0)})),on=an.filter((function(n){return n.userData&&new(x())(n.userData.stakedBalance).isGreaterThan(0)})),dn=(0,o.useCallback)((function(n){var e=n.map((function(n){if(!n.lpTotalInQuoteToken)return n;var e=n.quoteToken.busdPrice,t=new(x())(n.lpTotalInQuoteToken).times(e),i=J?(0,w.yW)(n.poolWeight,D,t):0;return(0,a.Z)((0,a.Z)({},n),{},{apr:i,liquidity:t})}));if(R){var t=R.toLowerCase();e=e.filter((function(n){return n.lpSymbol.toLowerCase().includes(t)}))}return e}),[D,R,J]),cn=(0,o.useRef)(null),un=(0,o.useState)(12),xn=(0,s.Z)(un,2),pn=xn[0],hn=xn[1],mn=(0,o.useState)(!1),fn=(0,s.Z)(mn,2),jn=fn[0],gn=fn[1],Zn=(0,o.useMemo)((function(){var n=[];return J&&(n=dn(nn?sn:tn)),H&&(n=dn(nn?ln:rn)),W&&(n=dn(nn?on:an)),function(n){switch(V){case"apr":return(0,P.orderBy)(n,(function(n){return n.apr}),"desc");case"multiplier":return(0,P.orderBy)(n,(function(n){return n.multiplier?Number(n.multiplier.slice(0,-1)):0}),"desc");case"earned":return(0,P.orderBy)(n,(function(n){return n.userData?n.userData.earnings:0}),"desc");case"liquidity":return(0,P.orderBy)(n,(function(n){return Number(n.liquidity)}),"desc");default:return n}}(n).slice(0,pn)}),[V,tn,dn,rn,an,J,H,W,on,ln,nn,sn,pn]);(0,o.useEffect)((function(){jn||(new IntersectionObserver((function(n){(0,s.Z)(n,1)[0].isIntersecting&&hn((function(n){return n+12}))}),{rootMargin:"0px",threshold:1}).observe(cn.current),gn(!0))}),[Zn,jn]);var vn=Zn.map((function(n){var e=n.token,t=n.quoteToken,i=e.address,r=t.address,a=n.lpSymbol&&n.lpSymbol.split(" ")[0].toUpperCase().replace("PANCAKE","");return{apr:{value:n.apr&&n.apr.toLocaleString("en-US",{maximumFractionDigits:2}),multiplier:n.multiplier,lpLabel:a,tokenAddress:i,quoteTokenAddress:r,cakePrice:D,originalValue:n.apr},farm:{image:n.lpSymbol.split(" ")[0].toLocaleLowerCase(),label:a,pid:n.pid},earned:{earnings:(0,k.mW)(new(x())(n.userData.earnings)),pid:n.pid},liquidity:{liquidity:n.liquidity},multiplier:{multiplier:n.multiplier},details:n}})),bn=l(674,"Farms"),yn=l(320,"Stake LP tokens to earn CUB"),kn=l(1e4,"Deposit Fee will be used to buyback CUB and bLEO");e&&(bn=l(674,"Dens"),yn=l(10002,"Stake tokens to earn CUB"));return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(C.Z,{children:[(0,L.jsx)(h.X6,{as:"h1",size:"xxl",color:"secondary",mb:"15px",children:bn}),(0,L.jsx)(h.X6,{as:"h1",size:"lg",color:"primary",mb:"20px",style:{textAlign:"left"},children:yn}),(0,L.jsx)(h.X6,{as:"h2",color:"secondary",mb:"20px",style:{textAlign:"left"},children:kn}),(0,L.jsx)("br",{}),(0,L.jsx)(Wt,{children:(0,L.jsx)(h.zx,{size:"sm",children:(0,L.jsx)("a",{href:"https://docs.cubdefi.com",children:"Learn More"})})})]}),(0,L.jsxs)(j.Z,{children:[(0,L.jsxs)(Qt,{children:[(0,L.jsxs)(Xt,{children:[(0,L.jsx)(Kt,{viewMode:z,onToggle:function(n){return N(n)}}),(0,L.jsxs)(Vt,{children:[(0,L.jsx)(h.ZD,{checked:nn,onChange:function(){return en(!nn)},scale:"sm"}),(0,L.jsxs)(h.xv,{children:[" ",l(1116,"Staked only")]})]}),(0,L.jsx)(Et,{hasStakeInFinishedFarms:ln.length>0,hasStakeInArchivedFarms:on.length>0})]}),(0,L.jsxs)(Gt,{children:[(0,L.jsxs)(Mt,{children:[(0,L.jsx)(h.xv,{children:"SORT BY"}),(0,L.jsx)(A.Z,{options:[{label:"Hot",value:"hot"},{label:"APR",value:"apr"},{label:"Multiplier",value:"multiplier"},{label:"Earned",value:"earned"},{label:"Liquidity",value:"liquidity"}],onChange:function(n){M(n.value)}})]}),(0,L.jsxs)(Mt,{style:{marginLeft:16},children:[(0,L.jsx)(h.xv,{children:"SEARCH"}),(0,L.jsx)(Nt.Z,{onChange:function(n){U(n.target.value)}})]})]})]}),function(){if(z===Cn.TABLE&&vn.length){var n=ot.map((function(n){return{id:n.id,name:n.name,label:n.label,sort:function(e,t){switch(n.name){case"farm":return t.id-e.id;case"apr":return e.original.apr.value&&t.original.apr.value?Number(e.original.apr.value)-Number(t.original.apr.value):0;case"earned":return e.original.earned.earnings-t.original.earned.earnings;default:return 1}},sortable:n.sortable}}));return(0,L.jsx)(Ut,{data:vn,columns:n,userDataReady:$})}return(0,L.jsx)("div",{children:(0,L.jsxs)(f,{children:[(0,L.jsx)(d.AW,{exact:!0,path:"".concat(i),children:Zn.map((function(n){return(0,L.jsx)(me,{farm:n,cakePrice:D,account:O,removed:!1},n.pid)}))}),(0,L.jsx)(d.AW,{exact:!0,path:"".concat(i,"/history"),children:Zn.map((function(n){return(0,L.jsx)(me,{farm:n,cakePrice:D,account:O,removed:!0},n.pid)}))}),(0,L.jsx)(d.AW,{exact:!0,path:"".concat(i,"/archived"),children:Zn.map((function(n){return(0,L.jsx)(me,{farm:n,cakePrice:D,account:O,removed:!0},n.pid)}))})]})})}(),(0,L.jsx)("div",{ref:cn}),(0,L.jsx)(h.Ee,{src:"/images/cub/wide.svg",alt:"illustration",width:1352,height:587,responsive:!0})]})]})}}}]);