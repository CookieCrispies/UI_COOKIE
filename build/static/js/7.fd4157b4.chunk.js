(this["webpackJsonpcubdefi-frontend"]=this["webpackJsonpcubdefi-frontend"]||[]).push([[7],{1055:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Me}));var c=n(5),a=n(47),s=n(0),i=n(37),r=n(31),l=n(54),j=n(4),d=n.n(j),o=n(62),b=n(3),x=n(219),u=n(876),O=n(75),p=n(134),h=n(113),m=n(803),f=n(228),g=n(39),w=n(877),v=n(214),k=n(110),y=function(e,t,n,c,a,s,i,r,l){var j,o=Object(O.a)(0),b=null;if(e){if(t)j=Object(m.b)(n,n,Object(v.a)(new d.a(i).times(k.d),18),parseFloat("10"));else{var x=new d.a(r).times(l);j=Object(m.a)(c,o,x,e)}var u=new d.a(j).div(new d.a(365)).toNumber(),p=100*(Math.pow(j/100/a+1,a)-1),h=s?s+p:p,f=h&&h.toLocaleString("en-US",{maximumFractionDigits:2});b={pcsApr:j,dailyAPR:u,farmAPY:p,totalAPY:h,totalAPYString:f}}return b},C=n(801),M=n.n(C),A=n(13),P=function(e){var t=e.value,n=e.fontSize,c=e.color,a=e.decimals,i=e.isDisabled,l=e.unit,j=e.bold,d=Object(s.useRef)(0);return Object(s.useEffect)((function(){d.current=t}),[t]),Object(A.jsxs)(r.M,{bold:j,color:i?"textDisabled":c,fontSize:n,children:[Object(A.jsx)(M.a,{start:d.current,end:t,decimals:a,duration:1,separator:","}),t&&l&&Object(A.jsx)("span",{children:l})]})};P.defaultProps={fontSize:"32px",isDisabled:!1,color:"text",decimals:3};var N,S,B,T,F,U,z,L,K,R,V,D,Q,q,I,Y=P,W=n(784),E=n(835),J=function(e){var t=e.aprApy,n=e.lpLabel,c=e.addLiquidityUrl,a=e.isDetails,s=Object(W.a)(),i=t.farmAPR,l=t.apr,j=t.pcsCompounding,o=t.pcsApr,b=t.dailyAPR,x=t.farmAPY,u=t.totalAPYString,O=t.cakePrice;return a?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(r.s,{justifyContent:"space-between",children:[Object(A.jsxs)(r.M,{color:"warning",children:[s(354,"Total APY"),":"]}),Object(A.jsxs)(r.M,{bold:!0,color:"warning",children:[u,"%"]})]}),Object(A.jsxs)(r.s,{justifyContent:"space-between",children:[Object(A.jsxs)(r.M,{children:[s(354,"Farm APR"),":"]}),Object(A.jsx)(r.M,{children:"".concat(new d.a(o).toFixed(2),"% (").concat(new d.a(b).toFixed(3),"%)")})]}),Object(A.jsxs)(r.s,{justifyContent:"space-between",children:[Object(A.jsxs)(r.M,{children:[s(354,"Compounds / year"),":"]}),Object(A.jsxs)(r.M,{children:["~",j]})]}),Object(A.jsxs)(r.s,{justifyContent:"space-between",children:[Object(A.jsxs)(r.M,{children:[s(354,"Farm APY"),":"]}),Object(A.jsx)(Y,{fontSize:"16px",value:x,decimals:2,unit:"%"})]}),Object(A.jsxs)(r.s,{justifyContent:"space-between",alignItems:"center",children:[Object(A.jsxs)(r.M,{children:[s(736,"CUB APR"),":"]}),Object(A.jsx)(r.M,{bold:!0,style:{display:"flex",alignItems:"center"},children:l?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(E.a,{lpLabel:n,addLiquidityUrl:c,cakePrice:O,apr:l}),i,"%"]}):Object(A.jsx)(r.J,{height:24,width:80})})]})]}):Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(r.s,{justifyContent:"space-between",children:[Object(A.jsxs)(r.M,{color:"warning",children:[s(354,"Total APY"),":"]}),Object(A.jsxs)(r.M,{bold:!0,color:"warning",children:[u,"%"]})]}),Object(A.jsxs)(r.s,{justifyContent:"space-between",children:[Object(A.jsxs)(r.M,{children:[s(354,"Farm APY"),":"]}),Object(A.jsx)(Y,{fontSize:"16px",value:x,decimals:2,unit:"%"})]}),Object(A.jsxs)(r.s,{justifyContent:"space-between",alignItems:"center",children:[Object(A.jsxs)(r.M,{children:[s(736,"CUB APR"),":"]}),Object(A.jsx)(r.M,{bold:!0,style:{display:"flex",alignItems:"center"},children:l?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(E.a,{lpLabel:n,addLiquidityUrl:c,cakePrice:O,apr:l}),i,"%"]}):Object(A.jsx)(r.J,{height:24,width:80})})]})]})},$=n(804),G=n(2),H=n.n(G),X=n(7),_=n(802),Z=n(816),ee=n(817),te=n(809),ne=n(815),ce=n(799),ae=n(814),se=n(58),ie=n(11),re=n(789),le=(n(896),b.e.div(N||(N=Object(a.a)(["\n  align-self: baseline;\n  /*background: ",";\n  border-radius: 8px;\n  box-shadow: 0 3px 4px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);*/\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  /*padding: 6px 12px;*/\n  position: relative;\n  margin-top: 0.5rem;\n  margin-bottom: 1rem;\n"])),(function(e){return e.theme.card.background}))),je=Object(b.e)(r.h)(S||(S=Object(a.a)(["\n  height: 40px;\n  margin-top: 0.3rem;\n  display: block;\n"]))),de=b.e.div(B||(B=Object(a.a)(["\n  display: flex;\n"]))),oe=b.e.span(T||(T=Object(a.a)(["\n  color: ",";\n"])),(function(e){return e.theme.colors.text})),be=function(e){var t=e.farm,n=e.walletBalance,c=e.depositBalance,a=e.rewardBalance,l=e.walletBalanceQuoteValue,j=e.depositBalanceQuoteValue,o=e.addLiquidityUrl,b=e.account,x=Object(i.f)(),u=Object(s.useState)(!1),p=Object(g.a)(u,2),h=p[0],m=p[1],f=Object(s.useState)(!1),w=Object(g.a)(f,2),v=w[0],k=w[1],y=t.pid,C=t.isTokenOnly,M=t.isKingdom,P=t.isKingdomToken,N=t.lpSymbol,S=t.lpAddresses,B=t.token.address,T=N.toUpperCase(),F=t.userData||{},U=F.allowance,z=void 0===U?0:U,L=F.tokenBalance,K=void 0===L?0:L,R=F.stakedBalance,V=void 0===R?0:R,D=new d.a(z),Q=new d.a(K),q=new d.a(V),I=Object(O.h)(),W=a?new d.a(a).multipliedBy(I).toNumber():0,E=Object(re.a)(),J=Object(te.a)(y,M).onStake,$=Object(ne.a)(y,M).onUnstake,G=Object(ce.b)(y,M).onReward,be=b&&D&&D.isGreaterThan(0),xe=Object(r.U)(Object(A.jsx)(Z.a,{max:Q,onConfirm:J,tokenName:T,addLiquidityUrl:o,isTokenOnly:C,isKingdomToken:P})),ue=Object(g.a)(xe,1)[0],Oe=Object(r.U)(Object(A.jsx)(ee.a,{max:q,onConfirm:$,tokenName:T,isTokenOnly:C,isKingdomToken:P})),pe=Object(g.a)(Oe,1)[0],he=Object(ie.a)(S),me=Object(ie.a)(B),fe=Object(s.useMemo)((function(){return C||P?Object(se.a)(me,E):Object(se.a)(he,E)}),[he,C,E,me,P]),ge=Object(ae.a)(fe,M).onApprove,we=Object(s.useCallback)(Object(X.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,ge();case 4:m(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[ge]),ve=Object(A.jsx)(je,{mt:"8px",disabled:h||x.pathname.includes("archived"),onClick:we,children:"Approve Contract"});return Object(A.jsx)(le,{children:Object(A.jsx)("div",{className:"k-card",children:Object(A.jsxs)("div",{className:"flex-grid",children:[Object(A.jsxs)("div",{className:"col",children:[Object(A.jsx)(r.s,{justifyContent:"space-between",children:Object(A.jsx)(r.M,{children:"Balance (Wallet)"})}),Object(A.jsxs)(de,{children:[Object(A.jsx)(Y,{fontSize:"16px",value:n,decimals:n?3:2,unit:""}),"\xa0",Object(A.jsx)(oe,{children:"("}),Object(A.jsx)(_.a,{value:l}),Object(A.jsx)(oe,{children:")"})]}),be?Object(A.jsx)(je,{mt:"8px",fullWidth:!0,onClick:ue,children:"Deposit"}):ve]}),Object(A.jsxs)("div",{className:"col",children:[Object(A.jsx)(r.s,{justifyContent:"space-between",children:Object(A.jsx)(r.M,{children:"Deposit (Staked)"})}),Object(A.jsxs)(de,{children:[Object(A.jsx)(Y,{fontSize:"16px",value:c,decimals:c?3:2,unit:""}),"\xa0",Object(A.jsx)(oe,{children:"("}),Object(A.jsx)(_.a,{value:j}),Object(A.jsx)(oe,{children:")"})]}),be?Object(A.jsx)(je,{mt:"8px",fullWidth:!0,onClick:pe,children:"Withdraw"}):ve]}),Object(A.jsxs)("div",{className:"col",children:[Object(A.jsx)(r.M,{children:"CUB Rewards"}),Object(A.jsxs)(de,{children:[Object(A.jsx)(Y,{fontSize:"16px",value:a,decimals:a?3:2,unit:""}),"\xa0",Object(A.jsx)(oe,{children:"("}),Object(A.jsx)(_.a,{value:W}),Object(A.jsx)(oe,{children:")"})]}),Object(A.jsx)(je,{disabled:0===a||v||!be,onClick:Object(X.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.next=3,G();case 3:k(!1);case 4:case"end":return e.stop()}}),e)}))),children:"Harvest"})]})]})})})},xe=(Object(b.e)(r.h)(F||(F=Object(a.a)(["\n  height: 36px;\n  font-size: 1rem;\n  padding: 0 12px;\n"]))),b.e.div(U||(U=Object(a.a)(["\n  margin-top: 1rem;\n  display: flex;\n  justify-content: space-between;\n  /*padding-left: 0.8rem;\n  padding-right: 0.8rem;*/\n  /*font-size: 0.95rem*/\n"])))),ue=b.e.div(z||(z=Object(a.a)(["\n  /*display: inline;\n  margin-right: 1rem;*/\n  /*& div {\n    font-family: Arial;\n    font-size: 0.8rem;\n    padding: 2px;\n  }*/\n  &:nth-child(1) {\n    width: 25%\n  }\n  &:nth-child(2) {\n    width: 33%\n  }\n"]))),Oe=b.e.div(L||(L=Object(a.a)(["\n  /*background: ",";\n  border-radius: 8px;\n  box-shadow: 0 3px 4px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);*/\n"])),(function(e){return e.theme.card.background})),pe=Object(b.e)(r.y)(K||(K=Object(a.a)(["\n  font-weight: 400;\n"]))),he=function(e){var t=e.farm,n=e.walletBalance,c=e.depositBalance,a=e.rewardBalance,s=e.walletBalanceQuoteValue,i=e.depositBalanceQuoteValue,l=e.farmName,j=e.oneTokenQuoteValue,d=e.removed,o=e.aprApy,b=e.account,x=j&&"NaN"!==j.toString()?"~$".concat(j.times(k.d).toFixed(2)):"-",u=t.lpSymbol,O=t.multiplier,p=t.quoteToken,h=t.token,m=t.isKingdom,f=t.lpAddresses,g=t.isTokenOnly,w=t.isKingdomToken,v=t.kingdomContract,y=u&&u.toUpperCase().replace("PANCAKE",""),C=Object($.a)({quoteTokenAddress:p.address,tokenAddress:h.address}),M=m?k.f:k.a,P="".concat(M,"/").concat(C),N=f[56],S=h.address[56],B="https://bscscan.com/token/".concat(g||w?S:N),T="https://bscscan.com/token/".concat(v),F="https://pancakeswap.info/pair/".concat(g?S:N);return Object(A.jsxs)(Oe,{children:[Object(A.jsx)(be,{farm:t,walletBalance:n,depositBalance:c,rewardBalance:a,walletBalanceQuoteValue:s,depositBalanceQuoteValue:i,addLiquidityUrl:P,account:b}),Object(A.jsxs)(xe,{className:"k-details",children:[Object(A.jsxs)(ue,{children:[Object(A.jsxs)(r.s,{justifyContent:"space-between",children:[Object(A.jsxs)(r.M,{children:[u,":"]}),Object(A.jsxs)(r.M,{children:["(",x,")"]})]}),Object(A.jsxs)(r.s,{justifyContent:"space-between",children:[Object(A.jsx)(r.M,{children:"Multiplier:"}),Object(A.jsx)(r.M,{children:O})]}),Object(A.jsxs)(r.s,{justifyContent:"space-between",children:[Object(A.jsx)(r.M,{children:"Type:"}),Object(A.jsx)(r.M,{children:"Auto-compound"})]}),Object(A.jsxs)(r.s,{justifyContent:"space-between",children:[Object(A.jsx)(r.M,{children:"Farm:"}),Object(A.jsx)(r.M,{children:l})]})]}),Object(A.jsx)(ue,{children:Object(A.jsx)(J,{aprApy:o,lpLabel:y,addLiquidityUrl:P,isDetails:!0})}),Object(A.jsxs)(ue,{children:[Object(A.jsx)(pe,{external:!0,href:B,children:"Farm Contract"}),Object(A.jsx)(pe,{external:!0,href:T,children:"Kingdom Contract"}),!d&&Object(A.jsx)(pe,{external:!0,href:P,children:"Get ".concat(y)}),Object(A.jsx)(pe,{external:!0,href:F,children:"See Token Info"})]})]})]})},me=b.e.div(R||(R=Object(a.a)(["\n  /background-color: ",";\n  opacity: 0.2;*/\n  height: 1px;\n  margin: 12px auto;\n  width: 100%;\n"])),(function(e){return e.theme.colors.primary})),fe=b.e.div(V||(V=Object(a.a)(["\n  height: ",";\n  overflow: hidden;\n"])),(function(e){return e.expanded?"100%":"0px"})),ge=b.e.div(D||(D=Object(a.a)(["\n  background: ",";\n  border-radius: 8px;\n  box-shadow: 0 3px 4px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);\n  padding: 0.4rem 0.8rem;\n"])),(function(e){return e.theme.card.background})),we=Object(b.e)(r.w)(Q||(Q=Object(a.a)(["\n  width: 64px;\n"]))),ve=function(e){var t=e.farm,n=e.removed,a=e.cakePrice,i=(e.bnbPrice,e.ethereum,e.account),l=Object(s.useState)(!1),j=Object(g.a)(l,2),o=j[0],b=j[1],x=t.apr,u=t.lpTotalInQuoteToken,O=t.kingdomSupply,p=t.lpSymbol,h=t.pcsPid,m=t.multiplier,f=t.isKingdom,k=t.isKingdomToken,C=t.tokenPriceVsQuote,M=t.poolWeightPCS,P=t.pcsCompounding,N=t.lpTokenBalancePCSv2,S=void 0===N?0:N,B=t.lpTotalInQuoteTokenPCS,T=void 0===B?0:B,F=t.quoteToken.busdPrice,U=p.split(" ")[0].toLocaleLowerCase(),z=y(f,k,Number(C),M,P,x,S,T,Number(F)),L=z,K=L.dailyAPR,R=L.totalAPY,V=t.userData,D=V.tokenBalance,Q=V.stakedBalance,q=V.earnings,I=D?Object(v.a)(new d.a(D)):0,W=Q?Object(v.a)(new d.a(Q)):0,E=q?Object(v.a)(new d.a(q)):0,J=u&&O?new d.a(1).times(u).div(new d.a(O)):new d.a(0),$=D?new d.a(D).times(J).toNumber():0,G=Q?new d.a(Q).times(J).toNumber():0,H=u?"$".concat(Number(u).toLocaleString(void 0,{maximumFractionDigits:0})):"-",X=x&&x.toLocaleString("en-US",{maximumFractionDigits:2}),_=h||0===h?"Pancake v2":"";return z=Object(c.a)(Object(c.a)({},z),{},{pcsCompounding:t.pcsCompounding,farmAPR:X,apr:t.apr,cakePrice:a,quoteTokenPriceUsd:Number(F)}),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(me,{}),Object(A.jsxs)(ge,{children:[Object(A.jsxs)("div",{className:"flex-grid k-grid",children:[Object(A.jsx)("div",{className:"col",children:Object(A.jsx)(we,{src:"/images/farms/".concat(U,".png"),alt:p,width:64,height:64})}),Object(A.jsxs)("div",{className:"col",children:[Object(A.jsx)(r.s,{justifyContent:"flex-start",alignItems:"center",children:Object(A.jsx)(r.M,{className:"token",children:p})}),Object(A.jsx)(r.M,{children:_}),Object(A.jsxs)(r.M,{children:[" TVL ",H]})]}),Object(A.jsxs)("div",{className:"col",children:[Object(A.jsx)(Y,{fontSize:"16px",value:R,decimals:2,unit:"%"}),Object(A.jsx)(Y,{fontSize:"16px",value:K,decimals:2,unit:"%"}),Object(A.jsx)(r.M,{children:m})]}),Object(A.jsxs)("div",{className:"col",children:[Object(A.jsx)(Y,{fontSize:"16px",value:I,decimals:I?2:1,unit:""}),Object(A.jsx)(Y,{fontSize:"16px",value:W,decimals:W?2:1,unit:""}),Object(A.jsx)(Y,{fontSize:"16px",value:E,decimals:E?2:1,unit:""})]}),Object(A.jsx)("div",{className:"col",children:Object(A.jsx)(w.a,{onClick:function(){return b(!o)},expanded:o,onlyArrow:!0})})]}),Object(A.jsx)(fe,{expanded:o,children:Object(A.jsx)(he,{farm:t,walletBalance:I,depositBalance:W,rewardBalance:E,walletBalanceQuoteValue:$,depositBalanceQuoteValue:G,farmName:_,oneTokenQuoteValue:J,removed:n,aprApy:z,account:i})})]})]})},ke=Object(b.e)(r.M)(q||(q=Object(a.a)(["\n  line-height: 1.5;\n\n"]))),ye=function(e){var t=e.value,n=e.decimals,c=e.prefix,a=e.fontSize,i=void 0===a?"16px":a,r=Object(C.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),l=r.countUp,j=r.update,d=Object(s.useRef)(j);return Object(s.useEffect)((function(){d.current(t)}),[t,d]),Object(A.jsxs)(ke,{fontSize:i,children:[c,l]})},Ce=(n(897),b.e.div(I||(I=Object(a.a)(["\n  max-width: 400px;\n"])))),Me=function(){var e=Object(O.k)(),t=Object(i.f)().pathname,n=Object(O.c)(),a=n.data,j=(n.userDataLoaded,Object(O.h)()),b=Object(o.c)().account,g=Object(l.b)(),w=Object(p.a)().fastRefresh;Object(s.useEffect)((function(){b&&g(Object(h.a)(b))}),[b,g,w]);var v=t.includes("archived"),k=!t.includes("history")&&!v,y=a.filter((function(e){return e.isKingdom&&"0X"!==e.multiplier&&!Object(f.a)(e.pid)})),C=Object(s.useCallback)((function(e){return e.map((function(e){if(!e.lpTotalInQuoteToken)return e;var t=new d.a(e.lpTotalInQuoteToken).times(e.quoteToken.busdPrice),n=k?Object(m.a)(e.poolWeight,j,t):0;return Object(c.a)(Object(c.a)({},e),{},{apr:n,liquidity:t})}))}),[j,k]),M=Object(s.useMemo)((function(){var e=[];return k&&(e=C(y)),e}),[y,C,k]);return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(u.a,{children:[Object(A.jsxs)("div",{className:"k-header",children:[Object(A.jsx)(r.t,{as:"h1",size:"xxl",color:"secondary",mb:"10px",children:"Kingdoms"}),Object(A.jsxs)(r.s,{children:[Object(A.jsx)(r.M,{bold:!0,fontSize:"24px",children:"TVL\xa0"}),Object(A.jsx)(ye,{fontSize:"24px",value:e.toNumber(),prefix:"$",decimals:2})]})]}),Object(A.jsx)(r.t,{as:"h1",size:"lg",color:"primary",mb:"10px",style:{textAlign:"left"},children:"Composable Auto-Compounding"}),Object(A.jsx)(r.t,{as:"h2",color:"secondary",mb:"10px",style:{textAlign:"left"},children:"Stake tokens for cross-platform farming plus CUB rewards"}),Object(A.jsxs)(r.t,{as:"h2",color:"warning",mb:"10px",style:{textAlign:"left"},children:["IMPORTANT: Must use ",Object(A.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://exchange.pancakeswap.finance/#/pool",children:"Pancakeswap V2 Exchange"})," for V2 Kingdom LP tokens until we add a V2 exchange for Cub Finance"]}),Object(A.jsx)(r.t,{as:"h2",color:"warning",mb:"10px",style:{textAlign:"left"},children:"CertiK Audit is Pending: Our other contracts have been audited by CertiK and Kingdoms are currently under review. Please use at your own discretion until the audit has been published"}),Object(A.jsxs)(Ce,{children:[Object(A.jsx)(r.t,{as:"h2",color:"secondary",mb:"5px",style:{textAlign:"left"},children:"Fees"}),Object(A.jsxs)(r.s,{justifyContent:"space-between",children:[Object(A.jsx)(r.M,{children:"Management Fee:"}),Object(A.jsx)(r.M,{children:"0.9%"})]}),Object(A.jsxs)(r.s,{justifyContent:"space-between",children:[Object(A.jsx)(r.M,{children:"Withdrawal Fee:"}),Object(A.jsx)(r.M,{children:"None"})]}),Object(A.jsxs)(r.s,{justifyContent:"space-between",children:[Object(A.jsx)(r.M,{children:"Fee to CUB Staking Kingdom:"}),Object(A.jsx)(r.M,{children:"1%"})]}),Object(A.jsxs)(r.s,{justifyContent:"space-between",children:[Object(A.jsx)(r.M,{children:"CUB Burn Rate:"}),Object(A.jsx)(r.M,{children:"100% of Fees Buyback and Burn CUB"})]})]})]}),Object(A.jsx)(x.a,{className:"k-container",children:Object(A.jsxs)("div",{id:"kingdoms",children:[Object(A.jsx)("div",{id:"content-header",className:"k-content",children:Object(A.jsxs)("div",{className:"flex-grid k-grid",children:[Object(A.jsx)("div",{className:"col"}),Object(A.jsxs)("div",{className:"col",children:[Object(A.jsx)(r.M,{children:"Token"}),Object(A.jsx)(r.M,{children:"Farm"}),Object(A.jsx)(r.M,{children:"TVL"})]}),Object(A.jsxs)("div",{className:"col",children:[Object(A.jsx)(r.M,{children:"Total APY"}),Object(A.jsx)(r.M,{children:"Daily APR"}),Object(A.jsx)(r.M,{children:"Multiplier"})]}),Object(A.jsxs)("div",{className:"col",children:[Object(A.jsx)(r.M,{children:"Balance"}),Object(A.jsx)(r.M,{children:"Deposit"}),Object(A.jsx)(r.M,{children:"Rewards"})]}),Object(A.jsx)("div",{className:"col"})]})}),M.map((function(e){return Object(A.jsx)(ve,{farm:e,cakePrice:j,account:b,removed:!1},e.pid)}))]})})]})}},896:function(e,t,n){},897:function(e,t,n){}}]);
//# sourceMappingURL=7.fd4157b4.chunk.js.map