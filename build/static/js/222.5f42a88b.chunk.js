"use strict";(self.webpackChunkcubdefi_frontend=self.webpackChunkcubdefi_frontend||[]).push([[222],{60523:function(n,e,r){r.d(e,{Z:function(){return f}});var t,i,o,a=r(30168),s=r(47313),c=r(49184),u=r(46417),d=c.ZP.div(t||(t=(0,a.Z)(["\n  height: ","px;\n  width: ","px;\n"])),(function(n){return n.size}),(function(n){return n.size})),l=function(n){var e,r=n.size,t=void 0===r?"md":r,i=(0,s.useContext)(c.Ni).spacing;switch(t){case"lg":e=i[6];break;case"sm":e=i[2];break;default:e=i[4]}return(0,u.jsx)(d,{size:e})},x=c.ZP.div(i||(i=(0,a.Z)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  margin: 0;\n  padding: ","px 0;\n"])),(function(n){return n.theme.colors.primaryDark}),(function(n){return n.theme.spacing[4]})),p=c.ZP.div(o||(o=(0,a.Z)(["\n  flex: 1;\n"]))),f=function(n){var e=n.children,r=s.Children.toArray(e).length;return(0,u.jsx)(x,{children:s.Children.map(e,(function(n,e){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(p,{children:n}),e<r-1&&(0,u.jsx)(l,{})]})}))})}},11977:function(n,e,r){r.d(e,{Z:function(){return f}});var t,i,o,a=r(30168),s=(r(47313),r(49184)),c=r(34312),u=r(1760),d=r(46417),l=s.ZP.div(t||(t=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  background-color: ",";\n  border-radius: 16px;\n  box-shadow: ",";\n  color: ",";\n  padding: 8px 16px 8px 0;\n  width: 100%;\n"])),(function(n){return n.theme.colors.input}),(function(n){var e=n.isWarning,r=void 0!==e&&e,t=n.theme;return r?t.shadows.warning:t.shadows.inset}),(function(n){return n.theme.colors.text})),x=(0,s.ZP)(c.II)(i||(i=(0,a.Z)(["\n  box-shadow: none;\n  width: 60px;\n  margin: 0 8px;\n  padding: 0 8px;\n\n  "," {\n    width: 80px;\n  }\n\n  "," {\n    width: auto;\n  }\n"])),(function(n){return n.theme.mediaQueries.xs}),(function(n){return n.theme.mediaQueries.sm})),p=(0,s.ZP)(c.xv)(o||(o=(0,a.Z)(["\n  position: absolute;\n  bottom: -22px;\n  a {\n    display: inline;\n  }\n"]))),f=function(n){var e=n.max,r=n.symbol,t=n.onChange,i=n.onSelectMax,o=n.value,a=n.addLiquidityUrl,s=n.inputTitle,f=(0,u.Z)(),h="0"===e||!e;return(0,d.jsxs)("div",{style:{position:"relative"},children:[(0,d.jsxs)(l,{isWarning:h,children:[(0,d.jsxs)(c.kC,{justifyContent:"space-between",pl:"16px",children:[(0,d.jsx)(c.xv,{fontSize:"14px",children:s}),(0,d.jsxs)(c.xv,{fontSize:"14px",children:[f(1120,"Balance"),": ",function(n){if(h)return"0";var e=Number(n);return e>0&&e<1e-4?e.toLocaleString(void 0,{maximumFractionDigits:20}):e.toLocaleString()}(e)]})]}),(0,d.jsxs)(c.kC,{alignItems:"flex-end",justifyContent:"space-around",children:[(0,d.jsx)(x,{pattern:"^[0-9]*[.,]?[0-9]*$",inputMode:"decimal",step:"any",min:"0",onChange:t,placeholder:"0",value:o}),(0,d.jsx)(c.zx,{scale:"sm",onClick:i,mr:"8px",children:f(452,"Max")}),(0,d.jsx)(c.xv,{fontSize:"16px",children:r})]})]}),h&&(0,d.jsxs)(p,{fontSize:"14px",color:"failure",children:["No tokens to stake:"," ",(0,d.jsxs)(c.rU,{fontSize:"14px",bold:!1,href:a,external:!0,color:"failure",children:[f(999,"get")," ",r]})]})]})}},76382:function(n,e,r){r.d(e,{Z:function(){return h}});var t,i,o=r(1413),a=r(45987),s=r(30168),c=(r(47313),r(49184)),u=r(34312),d=r(54808),l=r(46417),x=["background","children"],p=(0,c.ZP)(u.xu)(t||(t=(0,s.Z)(["\n  background: ",";\n"])),(function(n){var e=n.theme;return n.background||e.colors.gradients.bubblegum})),f=(0,c.ZP)(d.Z)(i||(i=(0,s.Z)(["\n  padding-top: 16px;\n  padding-bottom: 32px;\n"]))),h=function(n){var e=n.background,r=n.children,t=(0,a.Z)(n,x);return(0,l.jsx)(p,(0,o.Z)((0,o.Z)({background:e},t),{},{children:(0,l.jsx)(f,{children:r})}))}},4301:function(n,e,r){var t,i,o,a,s,c,u=r(1413),d=r(70885),l=r(30168),x=r(47313),p=r(49184),f=r(34312),h=r(46417),m=p.ZP.div(t||(t=(0,l.Z)(["\n  width: 100%;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0px 16px;\n  box-shadow: ",";\n  border: 1px solid ",";\n  border-radius: 16px;\n  background: ",";\n  transition: border-radius 0.15s;\n"])),(function(n){return n.theme.shadows.inset}),(function(n){return n.theme.colors.inputSecondary}),(function(n){return n.theme.colors.input})),v=p.ZP.div(i||(i=(0,l.Z)(["\n  min-width: 136px;\n  height: 0;\n  position: absolute;\n  overflow: hidden;\n  background: ",";\n  z-index: ",";\n  transition: transform 0.15s, opacity 0.15s;\n  transform: scaleY(0);\n  transform-origin: top;\n  opacity: 0;\n\n  "," {\n    min-width: 168px;\n  }\n"])),(function(n){return n.theme.colors.input}),(function(n){return n.theme.zIndices.dropdown}),(function(n){return n.theme.mediaQueries.sm})),b=p.ZP.div(o||(o=(0,l.Z)(["\n  cursor: pointer;\n  width: ","px;\n  position: relative;\n  background: ",";\n  border-radius: 16px;\n  height: 40px;\n  min-width: 136px;\n\n  "," {\n    min-width: 168px;\n  }\n\n  ","\n\n  svg {\n    position: absolute;\n    right: 16px;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n"])),(function(n){return n.width}),(function(n){return n.theme.colors.input}),(function(n){return n.theme.mediaQueries.sm}),(function(n){return n.isOpen&&(0,p.iv)(a||(a=(0,l.Z)(["\n      "," {\n        border-bottom: 1px solid ",";\n        box-shadow: ",";\n        border-radius: 16px 16px 0 0;\n      }\n\n      "," {\n        height: auto;\n        transform: scaleY(1);\n        opacity: 1;\n        border: 1px solid ",";\n        border-top-width: 0;\n        border-radius: 0 0 16px 16px;\n        box-shadow: ",";\n      }\n    "])),m,(function(n){return n.theme.colors.inputSecondary}),(function(n){return n.theme.tooltip.boxShadow}),v,(function(n){return n.theme.colors.inputSecondary}),(function(n){return n.theme.tooltip.boxShadow}))})),Z=p.ZP.ul(s||(s=(0,l.Z)(["\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  z-index: ",";\n"])),(function(n){return n.theme.zIndices.dropdown})),g=p.ZP.li(c||(c=(0,l.Z)(["\n  list-style: none;\n  padding: 8px 16px;\n  &:hover {\n    background: ",";\n  }\n"])),(function(n){return n.theme.colors.inputSecondary}));e.Z=function(n){var e=n.options,r=n.onChange,t=(0,x.useRef)(null),i=(0,x.useRef)(null),o=(0,x.useState)(!1),a=(0,d.Z)(o,2),s=a[0],c=a[1],l=(0,x.useState)(e[0]),p=(0,d.Z)(l,2),j=p[0],k=p[1],w=(0,x.useState)({width:0,height:0}),y=(0,d.Z)(w,2),C=y[0],S=y[1],P=function(){return c(!s)},z=function(n){return function(){k(n),c(!1),r&&r(n)}};return(0,x.useEffect)((function(){S({width:i.current.offsetWidth,height:i.current.offsetHeight})}),[]),(0,h.jsxs)(b,(0,u.Z)((0,u.Z)({isOpen:s,ref:t},C),{},{children:[0!==C.width&&(0,h.jsx)(m,{onClick:P,children:(0,h.jsx)(f.xv,{children:j.label})}),(0,h.jsx)(f.ch,{color:"text",onClick:P}),(0,h.jsx)(v,{children:(0,h.jsx)(Z,{ref:i,children:e.map((function(n){return n.label!==j.label?(0,h.jsx)(g,{onClick:z(n),children:(0,h.jsx)(f.xv,{children:n.label})},n.label):null}))})})]}))}},89680:function(n,e,r){r.d(e,{D8:function(){return p},yA:function(){return x}});var t=r(74165),i=r(15861),o=r(47313),a=r(82229),s=r(6321),c=r(20438),u=r(63199),d=r(66285),l=r(33866),x=function(n,e){var r=(0,c.T)(),s=(0,a.Ge)().account,x=(0,l.y8)(),p=(0,l._l)();return{onApprove:(0,o.useCallback)((0,i.Z)((0,t.Z)().mark((function i(){var o;return(0,t.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,d.dE)(n,e?p:x,s);case 3:return o=t.sent,r((0,u.IV)(s)),t.abrupt("return",o);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",!1);case 11:case"end":return t.stop()}}),i,null,[[0,8]])}))),[s,r,n,x,p,e])}},p=function(n,e){var r=(0,a.Ge)().account;return(0,o.useCallback)((0,i.Z)((0,t.Z)().mark((function i(){var o;return(0,t.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.methods.approve(e,s.Bz).send({from:r});case 2:return o=t.sent,t.abrupt("return",o);case 4:case"end":return t.stop()}}),i)}))),[r,e,n])}},89498:function(n,e,r){var t=r(74165),i=r(15861),o=r(47313),a=r(82229),s=r(20438),c=r(63199),u=r(66285),d=r(33866);e.Z=function(n,e){var r=(0,s.T)(),l=(0,a.Ge)().account,x=(0,d.y8)(),p=(0,d._l)(),f=(0,o.useCallback)(function(){var o=(0,i.Z)((0,t.Z)().mark((function i(o){return(0,t.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.LK)(e?p:x,n,o,l);case 2:r((0,c.IV)(l));case 3:case"end":return t.stop()}}),i)})));return function(n){return o.apply(this,arguments)}}(),[l,r,x,n,p,e]);return{onStake:f}}},29608:function(n,e,r){var t=r(74165),i=r(15861),o=r(47313),a=r(82229),s=r(20438),c=r(63199),u=r(66285),d=r(33866);e.Z=function(n,e){var r=(0,s.T)(),l=(0,a.Ge)().account,x=(0,d.y8)(),p=(0,d._l)(),f=(0,o.useCallback)(function(){var o=(0,i.Z)((0,t.Z)().mark((function i(o){var a;return(0,t.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.HV)(e?p:x,n,o,l);case 2:a=t.sent,r((0,c.IV)(l)),console.info(a);case 5:case"end":return t.stop()}}),i)})));return function(n){return o.apply(this,arguments)}}(),[l,r,x,n,p,e]);return{onUnstake:f}}},22411:function(n,e,r){r.d(e,{L:function(){return i},R:function(){return t}});var t=function(n){var e=n.numberOfDays,r=n.farmApr,t=n.tokenPrice,i=n.roundingDecimals,o=void 0===i?2:i,a=n.compoundFrequency,s=365*(void 0===a?1:a),c=r/100,u=e/365,d=1e3/t,l=d*Math.pow(1+c/s,s*u);return parseFloat((l-d).toFixed(o))},i=function(n){return n.amountEarned/n.amountInvested*100}},19439:function(n,e,r){var t=r(30652);e.Z=function(n){var e=n.quoteTokenAddress,r=n.tokenAddress,i=(0,t.tn)(),o=e?e[56]:null,a=r?r[56]:null,s=a&&a!==i?a:"BNB";return"".concat(o&&o!==i?o:"BNB","/").concat(s)}},68869:function(n,e,r){var t=r(74165),i=r(15861),o=r(70885),a=r(58704),s=r.n(a),c=r(47313),u=r(34312),d=r(60523),l=r(11977),x=r(1760),p=r(64446),f=r(46417);e.Z=function(n){var e=n.max,r=n.onConfirm,a=n.onDismiss,h=n.tokenName,m=void 0===h?"":h,v=n.addLiquidityUrl,b=n.isTokenOnly,Z=n.isKingdomToken,g=(0,c.useState)(""),j=(0,o.Z)(g,2),k=j[0],w=j[1],y=(0,c.useState)(!1),C=(0,o.Z)(y,2),S=C[0],P=C[1],z=(0,x.Z)(),D=(0,c.useMemo)((function(){return(0,p.NJ)(e)}),[e]),T=new(s())(k),I=new(s())(D),L=(0,c.useCallback)((function(n){n.currentTarget.validity.valid&&w(n.currentTarget.value.replace(/,/g,"."))}),[w]),F=(0,c.useCallback)((function(){w(D)}),[D,w]);return(0,f.jsxs)(u.u_,{title:z(1068,b||Z?"Stake tokens":"Stake LP tokens"),onDismiss:a,children:[(0,f.jsx)(l.Z,{value:k,onSelectMax:F,onChange:L,max:D,symbol:m,addLiquidityUrl:v,inputTitle:z(1070,"Stake")}),(0,f.jsxs)(d.Z,{children:[(0,f.jsx)(u.zx,{variant:"secondary",onClick:a,width:"100%",disabled:S,children:z(462,"Cancel")}),(0,f.jsx)(u.zx,{width:"100%",disabled:S||!T.isFinite()||T.eq(0)||T.gt(I),onClick:(0,i.Z)((0,t.Z)().mark((function n(){return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return P(!0),n.next=3,r(k);case 3:P(!1),a();case 5:case"end":return n.stop()}}),n)}))),children:S?z(488,"Pending Confirmation"):z(464,"Confirm")})]}),(0,f.jsxs)(u.NR,{href:v,style:{alignSelf:"center"},children:[z(999,"Get")," ",m]})]})}},22096:function(n,e,r){r.d(e,{Z:function(){return v}});var t,i,o,a=r(70885),s=(r(47313),r(34312)),c=r(30168),u=r(49184),d=r(1760),l=r(22411),x=r(46417),p=u.ZP.div(t||(t=(0,c.Z)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]))),f=u.ZP.div(i||(i=(0,c.Z)(["\n  margin-bottom: '10px';\n"]))),h=(0,u.ZP)(s.xv)(o||(o=(0,c.Z)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]))),m=function(n){var e=n.onDismiss,r=n.tokenPrice,t=n.apr,i=n.linkLabel,o=n.linkHref,a=n.earningTokenSymbol,c=void 0===a?"CUB":a,u=n.roundingDecimals,m=void 0===u?2:u,v=n.compoundFrequency,b=void 0===v?1:v,Z=(0,d.Z)(),g=1e3/r,j=(0,l.R)({numberOfDays:1,farmApr:t,tokenPrice:r,roundingDecimals:m,compoundFrequency:b}),k=(0,l.R)({numberOfDays:7,farmApr:t,tokenPrice:r,roundingDecimals:m,compoundFrequency:b}),w=(0,l.R)({numberOfDays:30,farmApr:t,tokenPrice:r,roundingDecimals:m,compoundFrequency:b}),y=(0,l.R)({numberOfDays:365,farmApr:t,tokenPrice:r,roundingDecimals:m,compoundFrequency:b});return(0,x.jsxs)(s.u_,{title:"ROI",onDismiss:e,children:[(0,x.jsxs)(p,{children:[(0,x.jsx)(f,{children:(0,x.jsx)(s.xv,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:Z(860,"Timeframe")})}),(0,x.jsx)(f,{children:(0,x.jsx)(s.xv,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:Z(858,"ROI")})}),(0,x.jsx)(f,{children:(0,x.jsxs)(s.xv,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:[c," ",Z(999,"per")," $1000"]})}),(0,x.jsx)(f,{children:(0,x.jsx)(s.xv,{children:"1d"})}),(0,x.jsx)(f,{children:(0,x.jsxs)(s.xv,{children:[(0,l.L)({amountEarned:j,amountInvested:g}).toFixed(m),"%"]})}),(0,x.jsx)(f,{children:(0,x.jsx)(s.xv,{children:j})}),(0,x.jsx)(f,{children:(0,x.jsx)(s.xv,{children:"7d"})}),(0,x.jsx)(f,{children:(0,x.jsxs)(s.xv,{children:[(0,l.L)({amountEarned:k,amountInvested:g}).toFixed(m),"%"]})}),(0,x.jsx)(f,{children:(0,x.jsx)(s.xv,{children:k})}),(0,x.jsx)(f,{children:(0,x.jsx)(s.xv,{children:"30d"})}),(0,x.jsx)(f,{children:(0,x.jsxs)(s.xv,{children:[(0,l.L)({amountEarned:w,amountInvested:g}).toFixed(m),"%"]})}),(0,x.jsx)(f,{children:(0,x.jsx)(s.xv,{children:w})}),(0,x.jsx)(f,{children:(0,x.jsx)(s.xv,{children:"365d(APY)"})}),(0,x.jsx)(f,{children:(0,x.jsxs)(s.xv,{children:[(0,l.L)({amountEarned:y,amountInvested:g}).toFixed(m),"%"]})}),(0,x.jsx)(f,{children:(0,x.jsx)(s.xv,{children:y})})]}),(0,x.jsx)(h,{fontSize:"12px",color:"textSubtle",children:Z(999,"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")}),(0,x.jsx)(s.kC,{justifyContent:"center",children:(0,x.jsx)(s.NR,{href:o,children:i})})]})},v=function(n){var e=n.lpLabel,r=n.cakePrice,t=n.apr,i=n.addLiquidityUrl,o=(0,d.Z)(),c=(0,s.dd)((0,x.jsx)(m,{linkLabel:"".concat(o(999,"Get")," ").concat(e),tokenPrice:r.toNumber(),apr:t,linkHref:i})),u=(0,a.Z)(c,1)[0];return(0,x.jsx)(s.hU,{onClick:function(n){n.stopPropagation(),u()},variant:"text",scale:"sm",ml:"4px",children:(0,x.jsx)(s.qO,{width:"18px"})})}},77431:function(n,e,r){var t,i,o,a=r(70885),s=r(30168),c=r(47313),u=r(34312),d=r(49184),l=r(12279),x=r.n(l),p=r(46417),f=(0,d.ZP)(u.II)(t||(t=(0,s.Z)(["\n  border-radius: 16px;\n  margin-left: auto;\n"]))),h=d.ZP.div(i||(i=(0,s.Z)(["\n  position: relative;\n  "," {\n    width: 234px;\n    display: block;\n  }\n"])),(function(n){return n.theme.mediaQueries.sm})),m=d.ZP.div(o||(o=(0,s.Z)([""])));e.Z=function(n){var e=n.onChange,r=(0,c.useState)(!1),t=(0,a.Z)(r,2),i=t[0],o=t[1],s=(0,c.useState)(""),u=(0,a.Z)(s,2),d=u[0],l=u[1],v=(0,c.useMemo)((function(){return x()((function(n){return e(n)}),500)}),[e]);return(0,p.jsx)(m,{toggled:i,children:(0,p.jsx)(h,{children:(0,p.jsx)(f,{value:d,onChange:function(n){l(n.target.value),v(n)},placeholder:"Search",onBlur:function(){return o(!1)}})})})}},49908:function(n,e,r){var t=r(74165),i=r(15861),o=r(70885),a=r(58704),s=r.n(a),c=r(47313),u=r(34312),d=r(60523),l=r(11977),x=r(1760),p=r(64446),f=r(46417);e.Z=function(n){var e=n.onConfirm,r=n.onDismiss,a=n.max,h=n.tokenName,m=void 0===h?"":h,v=n.isTokenOnly,b=n.isKingdomToken,Z=(0,c.useState)(""),g=(0,o.Z)(Z,2),j=g[0],k=g[1],w=(0,c.useState)(!1),y=(0,o.Z)(w,2),C=y[0],S=y[1],P=(0,x.Z)(),z=(0,c.useMemo)((function(){return(0,p.NJ)(a)}),[a]),D=new(s())(j),T=new(s())(z),I=(0,c.useCallback)((function(n){n.currentTarget.validity.valid&&k(n.currentTarget.value.replace(/,/g,"."))}),[k]),L=(0,c.useCallback)((function(){k(z)}),[z,k]);return(0,f.jsxs)(u.u_,{title:P(1126,v||b?"Unstake tokens":"Unstake LP tokens"),onDismiss:r,children:[(0,f.jsx)(l.Z,{onSelectMax:L,onChange:I,value:j,max:z,symbol:m,inputTitle:P(588,"Unstake")}),(0,f.jsxs)(d.Z,{children:[(0,f.jsx)(u.zx,{variant:"secondary",onClick:r,width:"100%",disabled:C,children:P(462,"Cancel")}),(0,f.jsx)(u.zx,{disabled:C||!D.isFinite()||D.eq(0)||D.gt(T),onClick:(0,i.Z)((0,t.Z)().mark((function n(){return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return S(!0),n.next=3,e(j);case 3:S(!1),r();case 5:case"end":return n.stop()}}),n)}))),width:"100%",children:C?P(488,"Pending Confirmation"):P(464,"Confirm")})]})]})}}}]);