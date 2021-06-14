(this["webpackJsonpcubdefi-frontend"]=this["webpackJsonpcubdefi-frontend"]||[]).push([[7],{1055:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Ce}));var c=n(5),a=n(47),i=n(0),s=n(37),r=n(31),l=n(54),o=n(4),d=n.n(o),j=n(62),b=n(3),u=n(219),x=n(876),O=n(75),p=n(134),h=n(113),m=n(803),f=n(228),g=n(39),v=n(877),w=n(214),k=n(110),y=function(e,t,n,c,a,i,s,r,l,o){var j,b=Object(O.a)(0),u=Object(O.b)(o);if(12===o){var x=new d.a(u.lpTotalInQuoteToken).times(u.quoteToken.busdPrice);j=Object(m.a)(u.poolWeight,u.tokenPriceVsQuote,x);var p=new d.a(j).div(new d.a(365)).toNumber(),h=100*(Math.pow(j/100/a+1,a)-1),f=h,g=f&&f.toLocaleString("en-US",{maximumFractionDigits:2});return{pcsApr:j,dailyAPR:p,farmAPY:h,totalAPY:f,totalAPYString:g,newMultiplier:u.multiplier}}if(t)j=Object(m.b)(n,n,Object(w.a)(new d.a(s).times(k.d),18),parseFloat("10"));else{var v=new d.a(r).times(l);j=Object(m.a)(c,b,v,e)}var y=new d.a(j).div(new d.a(365)).toNumber(),M=100*(Math.pow(j/100/a+1,a)-1),C=i?i+M:M,A=C&&C.toLocaleString("en-US",{maximumFractionDigits:2});return{pcsApr:j,dailyAPR:y,farmAPY:M,totalAPY:C,totalAPYString:A}},M=n(801),C=n.n(M),A=n(13),P=function(e){var t=e.value,n=e.fontSize,c=e.color,a=e.decimals,s=e.isDisabled,l=e.unit,o=e.bold,d=Object(i.useRef)(0);return Object(i.useEffect)((function(){d.current=t}),[t]),Object(A.jsxs)(r.M,{bold:o,color:s?"textDisabled":c,fontSize:n,children:[Object(A.jsx)(C.a,{start:d.current,end:t,decimals:a,duration:1,separator:","}),t&&l&&Object(A.jsx)("span",{children:l})]})};P.defaultProps={fontSize:"32px",isDisabled:!1,color:"text",decimals:3};var S,N,T,B,F,U,z,L,K,V,Q,R,D,q,Y,I=P,W=n(784),E=n(835),J=function(e){var t=e.aprApy,n=e.lpLabel,c=e.addLiquidityUrl,a=Object(W.a)(),i=t.farmAPR,s=t.apr,l=t.pcsCompounding,o=t.pcsApr,j=t.dailyAPR,b=t.farmAPY,u=t.totalAPYString,x=t.cakePrice;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(r.s,{justifyContent:"space-between",children:[Object(A.jsxs)(r.M,{color:"warning",children:[a(354,"Total APY"),":"]}),Object(A.jsxs)(r.M,{bold:!0,color:"warning",children:[u,"%"]})]}),Object(A.jsxs)(r.s,{justifyContent:"space-between",children:[Object(A.jsxs)(r.M,{children:[a(354,"Farm APR"),":"]}),Object(A.jsx)(r.M,{children:"".concat(new d.a(o).toFixed(2),"% (").concat(new d.a(j).toFixed(3),"%)")})]}),Object(A.jsxs)(r.s,{justifyContent:"space-between",children:[Object(A.jsxs)(r.M,{children:[a(354,"Compounds / year"),":"]}),Object(A.jsxs)(r.M,{children:["~",l]})]}),Object(A.jsxs)(r.s,{justifyContent:"space-between",children:[Object(A.jsxs)(r.M,{children:[a(354,"Farm APY"),":"]}),Object(A.jsx)(I,{fontSize:"16px",value:b,decimals:2,unit:"%"})]}),Object(A.jsxs)(r.s,{justifyContent:"space-between",alignItems:"center",children:[Object(A.jsxs)(r.M,{children:[a(736,"CUB APR"),":"]}),Object(A.jsx)(r.M,{bold:!0,style:{display:"flex",alignItems:"center"},children:s?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(E.a,{lpLabel:n,addLiquidityUrl:c,cakePrice:x,apr:s}),i||s.toLocaleString("en-US",{maximumFractionDigits:2}),"%"]}):Object(A.jsx)(r.J,{height:24,width:80})})]})]})},$=n(804),G=n(2),H=n.n(G),_=n(7),X=n(802),Z=n(816),ee=n(817),te=n(809),ne=n(815),ce=n(799),ae=n(814),ie=n(58),se=n(11),re=n(789),le=(n(896),b.e.div(S||(S=Object(a.a)(["\n  align-self: baseline;\n  /*background: ",";\n  border-radius: 8px;\n  box-shadow: 0 3px 4px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);*/\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  /*padding: 6px 12px;*/\n  position: relative;\n  margin-top: 0.5rem;\n  margin-bottom: 1rem;\n"])),(function(e){return e.theme.card.background}))),oe=Object(b.e)(r.h)(N||(N=Object(a.a)(["\n  height: 40px;\n  margin-top: 0.3rem;\n  display: block;\n"]))),de=b.e.div(T||(T=Object(a.a)(["\n  display: flex;\n"]))),je=b.e.span(B||(B=Object(a.a)(["\n  color: ",";\n"])),(function(e){return e.theme.colors.text})),be=function(e){var t=e.farm,n=e.walletBalance,c=e.depositBalance,a=e.rewardBalance,l=e.walletBalanceQuoteValue,o=e.depositBalanceQuoteValue,j=e.addLiquidityUrl,b=e.account,u=Object(s.f)(),x=Object(i.useState)(!1),p=Object(g.a)(x,2),h=p[0],m=p[1],f=Object(i.useState)(!1),v=Object(g.a)(f,2),w=v[0],k=v[1],y=t.pid,M=t.isTokenOnly,C=t.isKingdom,P=t.isKingdomToken,S=t.lpSymbol,N=t.lpAddresses,T=t.token.address,B=S.toUpperCase(),F=t.userData||{},U=F.allowance,z=void 0===U?0:U,L=F.tokenBalance,K=void 0===L?0:L,V=F.stakedBalance,Q=void 0===V?0:V,R=new d.a(z),D=new d.a(K),q=new d.a(Q),Y=Object(O.i)(),W=a?new d.a(a).multipliedBy(Y).toNumber():0,E=Object(re.a)(),J=Object(te.a)(y,C).onStake,$=Object(ne.a)(y,C).onUnstake,G=Object(ce.b)(y,C).onReward,be=b&&R&&R.isGreaterThan(0),ue=Object(r.U)(Object(A.jsx)(Z.a,{max:D,onConfirm:J,tokenName:B,addLiquidityUrl:j,isTokenOnly:M,isKingdomToken:P})),xe=Object(g.a)(ue,1)[0],Oe=Object(r.U)(Object(A.jsx)(ee.a,{max:q,onConfirm:$,tokenName:B,isTokenOnly:M,isKingdomToken:P})),pe=Object(g.a)(Oe,1)[0],he=Object(se.a)(N),me=Object(se.a)(T),fe=Object(i.useMemo)((function(){return M||P?Object(ie.a)(me,E):Object(ie.a)(he,E)}),[he,M,E,me,P]),ge=Object(ae.a)(fe,C).onApprove,ve=Object(i.useCallback)(Object(_.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,ge();case 4:m(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[ge]),we=Object(A.jsx)(oe,{mt:"8px",disabled:h||u.pathname.includes("archived"),onClick:ve,children:"Approve Contract"});return Object(A.jsx)(le,{children:Object(A.jsx)("div",{className:"k-card",children:Object(A.jsxs)("div",{className:"flex-grid",children:[Object(A.jsxs)("div",{className:"col",children:[Object(A.jsx)(r.s,{justifyContent:"space-between",children:Object(A.jsx)(r.M,{children:"Balance (Wallet)"})}),Object(A.jsxs)(de,{children:[Object(A.jsx)(I,{fontSize:"16px",value:n,decimals:n?3:2,unit:""}),"\xa0",Object(A.jsx)(je,{children:"("}),Object(A.jsx)(X.a,{value:l}),Object(A.jsx)(je,{children:")"})]}),be?Object(A.jsx)(oe,{mt:"8px",fullWidth:!0,onClick:xe,children:"Deposit"}):we]}),Object(A.jsxs)("div",{className:"col",children:[Object(A.jsx)(r.s,{justifyContent:"space-between",children:Object(A.jsx)(r.M,{children:"Deposit (Staked)"})}),Object(A.jsxs)(de,{children:[Object(A.jsx)(I,{fontSize:"16px",value:c,decimals:c?3:2,unit:""}),"\xa0",Object(A.jsx)(je,{children:"("}),Object(A.jsx)(X.a,{value:o}),Object(A.jsx)(je,{children:")"})]}),be?Object(A.jsx)(oe,{mt:"8px",fullWidth:!0,onClick:pe,children:"Withdraw"}):we]}),Object(A.jsxs)("div",{className:"col",children:[Object(A.jsx)(r.M,{children:"CUB Rewards"}),Object(A.jsxs)(de,{children:[Object(A.jsx)(I,{fontSize:"16px",value:a,decimals:a?3:2,unit:""}),"\xa0",Object(A.jsx)(je,{children:"("}),Object(A.jsx)(X.a,{value:W}),Object(A.jsx)(je,{children:")"})]}),Object(A.jsx)(oe,{disabled:0===a||w||!be,onClick:Object(_.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.next=3,G();case 3:k(!1);case 4:case"end":return e.stop()}}),e)}))),children:"Harvest"})]})]})})})},ue=(Object(b.e)(r.h)(F||(F=Object(a.a)(["\n  height: 36px;\n  font-size: 1rem;\n  padding: 0 12px;\n"]))),b.e.div(U||(U=Object(a.a)(["\n  margin-top: 1rem;\n  display: flex;\n  justify-content: space-between;\n  /*padding-left: 0.8rem;\n  padding-right: 0.8rem;*/\n  /*font-size: 0.95rem*/\n"])))),xe=b.e.div(z||(z=Object(a.a)(["\n  /*display: inline;\n  margin-right: 1rem;*/\n  /*& div {\n    font-family: Arial;\n    font-size: 0.8rem;\n    padding: 2px;\n  }*/\n  &:nth-child(1) {\n    width: 25%\n  }\n  &:nth-child(2) {\n    width: 33%\n  }\n"]))),Oe=b.e.div(L||(L=Object(a.a)(["\n  /*background: ",";\n  border-radius: 8px;\n  box-shadow: 0 3px 4px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);*/\n"])),(function(e){return e.theme.card.background})),pe=Object(b.e)(r.y)(K||(K=Object(a.a)(["\n  font-weight: 400;\n"]))),he=function(e){var t=e.farm,n=e.walletBalance,c=e.depositBalance,a=e.rewardBalance,i=e.walletBalanceQuoteValue,s=e.depositBalanceQuoteValue,l=e.farmName,o=e.oneTokenQuoteValue,d=e.removed,j=e.aprApy,b=e.account,u=o&&"NaN"!==o.toString()?"~$".concat(o.times(k.d).toFixed(2)):"-",x=t.lpSymbol,O=t.multiplier,p=t.quoteToken,h=t.token,m=t.isKingdom,f=t.lpAddresses,g=t.isTokenOnly,v=t.isKingdomToken,w=t.kingdomContract,y=x&&x.toUpperCase().replace("PANCAKE",""),M=Object($.a)({quoteTokenAddress:p.address,tokenAddress:h.address}),C=m?k.f:k.a,P="".concat(C,"/").concat(M),S=f[56],N=h.address[56],T="https://bscscan.com/token/".concat(g||v?N:S),B="https://bscscan.com/token/".concat(w),F="https://pancakeswap.info/pair/".concat(g?N:S);return Object(A.jsxs)(Oe,{children:[Object(A.jsx)(be,{farm:t,walletBalance:n,depositBalance:c,rewardBalance:a,walletBalanceQuoteValue:i,depositBalanceQuoteValue:s,addLiquidityUrl:P,account:b}),Object(A.jsxs)(ue,{className:"k-details",children:[Object(A.jsxs)(xe,{children:[Object(A.jsxs)(r.s,{justifyContent:"space-between",children:[Object(A.jsxs)(r.M,{children:[x,":"]}),Object(A.jsxs)(r.M,{children:["(",u,")"]})]}),Object(A.jsxs)(r.s,{justifyContent:"space-between",children:[Object(A.jsx)(r.M,{children:"Multiplier:"}),Object(A.jsx)(r.M,{children:O})]}),Object(A.jsxs)(r.s,{justifyContent:"space-between",children:[Object(A.jsx)(r.M,{children:"Type:"}),Object(A.jsx)(r.M,{children:"Auto-compound"})]}),Object(A.jsxs)(r.s,{justifyContent:"space-between",children:[Object(A.jsx)(r.M,{children:"Farm:"}),Object(A.jsx)(r.M,{children:l})]})]}),Object(A.jsx)(xe,{children:Object(A.jsx)(J,{aprApy:j,lpLabel:y,addLiquidityUrl:P})}),Object(A.jsxs)(xe,{children:[Object(A.jsx)(pe,{external:!0,href:T,children:"Farm Contract"}),Object(A.jsx)(pe,{external:!0,href:B,children:"Kingdom Contract"}),!d&&Object(A.jsx)(pe,{external:!0,href:P,children:"Get ".concat(y)}),Object(A.jsx)(pe,{external:!0,href:F,children:"See Token Info"})]})]})]})},me=b.e.div(V||(V=Object(a.a)(["\n  /background-color: ",";\n  opacity: 0.2;*/\n  height: 1px;\n  margin: 12px auto;\n  width: 100%;\n"])),(function(e){return e.theme.colors.primary})),fe=b.e.div(Q||(Q=Object(a.a)(["\n  height: ",";\n  overflow: hidden;\n"])),(function(e){return e.expanded?"100%":"0px"})),ge=b.e.div(R||(R=Object(a.a)(["\n  background: ",";\n  border-radius: 8px;\n  box-shadow: 0 3px 4px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);\n  padding: 0.4rem 0.8rem;\n"])),(function(e){return e.theme.card.background})),ve=Object(b.e)(r.w)(D||(D=Object(a.a)(["\n  width: 64px;\n"]))),we=function(e){var t=e.farm,n=e.removed,a=e.cakePrice,s=e.account,l=Object(i.useState)(!1),o=Object(g.a)(l,2),j=o[0],b=o[1],u=t.apr,x=t.lpTotalInQuoteToken,p=t.lpSymbol,h=t.pcsPid,m=t.multiplier,f=t.isKingdom,M=t.isKingdomToken,C=t.tokenPriceVsQuote,P=t.poolWeightPCS,S=t.pcsCompounding,N=t.lpTokenBalancePCS,T=void 0===N?0:N,B=t.lpTotalInQuoteTokenPCS,F=void 0===B?0:B,U=t.quoteToken.busdPrice,z=t.altPid,L=p.split(" ")[0].toLocaleLowerCase(),K=y(f,M,Number(C),P,S,u,T,F,Number(U),z),V=K,Q=V.dailyAPR,R=V.totalAPY,D=V.newMultiplier,q=V.pcsApr,Y=t.userData,W=Y.tokenBalance,E=Y.stakedBalance,J=Y.earnings,$=W?Object(w.a)(new d.a(W)):0,G=E?Object(w.a)(new d.a(E)):0,H=J?Object(w.a)(new d.a(J)):0,_=Object(O.a)(t.pid),X=new d.a(0);X=t.isKingdomToken?_.div(k.d):F?new d.a(F).div(new d.a(T)).times(U).div(k.d):new d.a(0);var Z=W?new d.a(W).times(X).toNumber():0,ee=E?new d.a(E).times(X).toNumber():0,te=x?"$".concat(Number(new d.a(x).times(U)).toLocaleString(void 0,{maximumFractionDigits:0})):"-",ne=u&&u.toLocaleString("en-US",{maximumFractionDigits:2}),ce=h||0===h?"Pancake v2":"";return K=Object(c.a)(Object(c.a)({},K),{},{pcsCompounding:t.pcsCompounding,farmAPR:ne,apr:12===z?q:t.apr,cakePrice:a,quoteTokenPriceUsd:Number(U)}),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(me,{}),Object(A.jsxs)(ge,{children:[Object(A.jsxs)("div",{className:"flex-grid k-grid",children:[Object(A.jsx)("div",{className:"col",children:Object(A.jsx)(ve,{src:"/images/farms/".concat(L,".png"),alt:p,width:64,height:64})}),Object(A.jsxs)("div",{className:"col",children:[Object(A.jsx)(r.s,{justifyContent:"flex-start",alignItems:"center",children:Object(A.jsx)(r.M,{className:"token",children:p})}),Object(A.jsx)(r.M,{children:ce}),Object(A.jsxs)(r.M,{children:[" TVL ",te]})]}),Object(A.jsxs)("div",{className:"col",children:[Object(A.jsx)(I,{fontSize:"16px",value:R,decimals:2,unit:"%"}),Object(A.jsx)(I,{fontSize:"16px",value:Q,decimals:2,unit:"%"}),Object(A.jsx)(r.M,{children:D||m})]}),Object(A.jsxs)("div",{className:"col",children:[Object(A.jsx)(I,{fontSize:"16px",value:$,decimals:$?2:1,unit:""}),Object(A.jsx)(I,{fontSize:"16px",value:G,decimals:G?2:1,unit:""}),Object(A.jsx)(I,{fontSize:"16px",value:H,decimals:H?2:1,unit:""})]}),Object(A.jsx)("div",{className:"col",children:Object(A.jsx)(v.a,{onClick:function(){return b(!j)},expanded:j,onlyArrow:!0})})]}),Object(A.jsx)(fe,{expanded:j,children:Object(A.jsx)(he,{farm:t,walletBalance:$,depositBalance:G,rewardBalance:H,walletBalanceQuoteValue:Z,depositBalanceQuoteValue:ee,farmName:ce,oneTokenQuoteValue:X,removed:n,aprApy:K,account:s})})]})]})},ke=Object(b.e)(r.M)(q||(q=Object(a.a)(["\n  line-height: 1.5;\n\n"]))),ye=function(e){var t=e.value,n=e.decimals,c=e.prefix,a=e.fontSize,s=void 0===a?"16px":a,r=Object(M.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),l=r.countUp,o=r.update,d=Object(i.useRef)(o);return Object(i.useEffect)((function(){d.current(t)}),[t,d]),Object(A.jsxs)(ke,{fontSize:s,children:[c,l]})},Me=(n(897),b.e.div(Y||(Y=Object(a.a)(["\n  max-width: 400px;\n"])))),Ce=function(){var e=Object(O.l)(),t=Object(s.f)().pathname,n=Object(O.d)(),a=n.data,o=(n.userDataLoaded,Object(O.i)()),b=Object(j.c)().account,g=Object(l.b)(),v=Object(p.a)().fastRefresh;Object(i.useEffect)((function(){b&&g(Object(h.a)(b))}),[b,g,v]);var w=t.includes("archived"),k=!t.includes("history")&&!w,y=a.filter((function(e){return e.isKingdom&&!Object(f.a)(e.pid)})),M=Object(i.useCallback)((function(e){return e.map((function(e){if(!e.lpTotalInQuoteToken)return e;var t=new d.a(e.lpTotalInQuoteToken).times(e.quoteToken.busdPrice),n=k?Object(m.a)(e.poolWeight,o,t):0;return Object(c.a)(Object(c.a)({},e),{},{apr:n,liquidity:t})}))}),[o,k]),C=Object(i.useMemo)((function(){var e=[];return k&&(e=M(y)),e}),[y,M,k]);return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(x.a,{children:[Object(A.jsxs)("div",{className:"k-header",children:[Object(A.jsx)(r.t,{as:"h1",size:"xxl",color:"secondary",mb:"10px",children:"Kingdoms"}),Object(A.jsxs)(r.s,{children:[Object(A.jsx)(r.M,{bold:!0,fontSize:"24px",children:"TVL\xa0"}),Object(A.jsx)(ye,{fontSize:"24px",value:e.toNumber(),prefix:"$",decimals:2})]})]}),Object(A.jsx)(r.t,{as:"h1",size:"lg",color:"primary",mb:"10px",style:{textAlign:"left"},children:"Composable Auto-Compounding"}),Object(A.jsx)(r.t,{as:"h2",color:"secondary",mb:"10px",style:{textAlign:"left"},children:"Stake tokens for cross-platform farming plus CUB rewards"}),Object(A.jsxs)(r.t,{as:"h2",color:"warning",mb:"10px",style:{textAlign:"left"},children:["IMPORTANT: Must use ",Object(A.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://exchange.pancakeswap.finance/#/pool",children:"Pancakeswap V2 Exchange"})," for V2 Kingdom LP tokens until we add a V2 exchange for Cub Finance"]}),Object(A.jsx)(r.t,{as:"h2",color:"warning",mb:"10px",style:{textAlign:"left"},children:"CertiK Audit is Pending: Our other contracts have been audited by CertiK and Kingdoms are currently under review. Please use at your own discretion until the audit has been published"}),Object(A.jsxs)(Me,{children:[Object(A.jsx)(r.t,{as:"h2",color:"secondary",mb:"5px",style:{textAlign:"left"},children:"Fees"}),Object(A.jsxs)(r.s,{justifyContent:"space-between",children:[Object(A.jsx)(r.M,{children:"Management Fee:"}),Object(A.jsx)(r.M,{children:"0.9%"})]}),Object(A.jsxs)(r.s,{justifyContent:"space-between",children:[Object(A.jsx)(r.M,{children:"Withdrawal Fee:"}),Object(A.jsx)(r.M,{children:"None"})]}),Object(A.jsxs)(r.s,{justifyContent:"space-between",children:[Object(A.jsx)(r.M,{children:"Fee to CUB Staking Kingdom:"}),Object(A.jsx)(r.M,{children:"1%"})]}),Object(A.jsxs)(r.s,{justifyContent:"space-between",children:[Object(A.jsx)(r.M,{children:"CUB Burn Rate:"}),Object(A.jsx)(r.M,{children:"100% of Fees Buyback and Burn CUB"})]})]})]}),Object(A.jsx)(u.a,{className:"k-container",children:Object(A.jsxs)("div",{id:"kingdoms",children:[Object(A.jsx)("div",{id:"content-header",className:"k-content",children:Object(A.jsxs)("div",{className:"flex-grid k-grid",children:[Object(A.jsx)("div",{className:"col"}),Object(A.jsxs)("div",{className:"col",children:[Object(A.jsx)(r.M,{children:"Token"}),Object(A.jsx)(r.M,{children:"Farm"}),Object(A.jsx)(r.M,{children:"TVL"})]}),Object(A.jsxs)("div",{className:"col",children:[Object(A.jsx)(r.M,{children:"Total APY"}),Object(A.jsx)(r.M,{children:"Daily APR"}),Object(A.jsx)(r.M,{children:"Multiplier"})]}),Object(A.jsxs)("div",{className:"col",children:[Object(A.jsx)(r.M,{children:"Balance"}),Object(A.jsx)(r.M,{children:"Deposit"}),Object(A.jsx)(r.M,{children:"Rewards"})]}),Object(A.jsx)("div",{className:"col"})]})}),C.map((function(e){return Object(A.jsx)(we,{farm:e,cakePrice:o,account:b,removed:!1},e.pid)}))]})})]})}},896:function(e,t,n){},897:function(e,t,n){}}]);
//# sourceMappingURL=7.b1fa3993.chunk.js.map