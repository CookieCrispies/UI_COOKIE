(this["webpackJsonpcubdefi-frontend"]=this["webpackJsonpcubdefi-frontend"]||[]).push([[7],{1054:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Me}));var c=n(7),a=n(47),s=n(0),i=n(36),r=n(30),l=n(54),j=n(4),d=n.n(j),o=n(62),b=n(3),x=n(218),u=n(875),O=n(75),p=n(134),h=n(113),m=n(802),f=n(11),g=n(227),w=n(38),v=n(876),k=n(213),y=n(110),C=function(e,t,n,c,a,s,i,r,l){var j,o=Object(O.f)("0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"),b=null;if(e){if(t)j=Object(m.b)(n,n,Object(k.a)(new d.a(i).times(y.d),18),parseFloat("10"));else{var x=new d.a(r).times(l);j=Object(m.a)(c,new d.a(o),x,e)}var u=new d.a(j).div(new d.a(365)).toNumber(),p=100*(Math.pow(j/100/a+1,a)-1),h=s?s+p:p,f=h&&h.toLocaleString("en-US",{maximumFractionDigits:2});b={pcsApr:j,dailyAPR:u,farmAPY:p,totalAPY:h,totalAPYString:f}}return b},M=n(800),A=n.n(M),P=n(13),S=function(e){var t=e.value,n=e.fontSize,c=e.color,a=e.decimals,i=e.isDisabled,l=e.unit,j=e.bold,d=Object(s.useRef)(0);return Object(s.useEffect)((function(){d.current=t}),[t]),Object(P.jsxs)(r.M,{bold:j,color:i?"textDisabled":c,fontSize:n,children:[Object(P.jsx)(A.a,{start:d.current,end:t,decimals:a,duration:1,separator:","}),t&&l&&Object(P.jsx)("span",{children:l})]})};S.defaultProps={fontSize:"32px",isDisabled:!1,color:"text",decimals:3};var B,T,N,F,U,L,z,K,R,V,D,Q,q,I,Y,W=S,E=n(783),J=n(834),$=function(e){var t=e.aprApy,n=e.lpLabel,c=e.addLiquidityUrl,a=e.isDetails,s=Object(E.a)(),i=t.farmAPR,l=t.apr,j=t.pcsCompounding,o=t.pcsApr,b=t.dailyAPR,x=t.farmAPY,u=t.totalAPYString,O=t.cakePrice;return a?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(r.s,{justifyContent:"space-between",children:[Object(P.jsxs)(r.M,{color:"warning",children:[s(354,"Total APY"),":"]}),Object(P.jsxs)(r.M,{bold:!0,color:"warning",children:[u,"%"]})]}),Object(P.jsxs)(r.s,{justifyContent:"space-between",children:[Object(P.jsxs)(r.M,{children:[s(354,"Farm APR"),":"]}),Object(P.jsx)(r.M,{children:"".concat(new d.a(o).toFixed(2),"% (").concat(new d.a(b).toFixed(3),"%)")})]}),Object(P.jsxs)(r.s,{justifyContent:"space-between",children:[Object(P.jsxs)(r.M,{children:[s(354,"Compounds / year"),":"]}),Object(P.jsxs)(r.M,{children:["~",j]})]}),Object(P.jsxs)(r.s,{justifyContent:"space-between",children:[Object(P.jsxs)(r.M,{children:[s(354,"Farm APY"),":"]}),Object(P.jsx)(W,{fontSize:"16px",value:x,decimals:2,unit:"%"})]}),Object(P.jsxs)(r.s,{justifyContent:"space-between",alignItems:"center",children:[Object(P.jsxs)(r.M,{children:[s(736,"CUB APR"),":"]}),Object(P.jsx)(r.M,{bold:!0,style:{display:"flex",alignItems:"center"},children:l?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(J.a,{lpLabel:n,addLiquidityUrl:c,cakePrice:O,apr:l}),i,"%"]}):Object(P.jsx)(r.J,{height:24,width:80})})]})]}):Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(r.s,{justifyContent:"space-between",children:[Object(P.jsxs)(r.M,{color:"warning",children:[s(354,"Total APY"),":"]}),Object(P.jsxs)(r.M,{bold:!0,color:"warning",children:[u,"%"]})]}),Object(P.jsxs)(r.s,{justifyContent:"space-between",children:[Object(P.jsxs)(r.M,{children:[s(354,"Farm APY"),":"]}),Object(P.jsx)(W,{fontSize:"16px",value:x,decimals:2,unit:"%"})]}),Object(P.jsxs)(r.s,{justifyContent:"space-between",alignItems:"center",children:[Object(P.jsxs)(r.M,{children:[s(736,"CUB APR"),":"]}),Object(P.jsx)(r.M,{bold:!0,style:{display:"flex",alignItems:"center"},children:l?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(J.a,{lpLabel:n,addLiquidityUrl:c,cakePrice:O,apr:l}),i,"%"]}):Object(P.jsx)(r.J,{height:24,width:80})})]})]})},G=n(803),H=n(2),X=n.n(H),_=n(6),Z=n(801),ee=n(815),te=n(816),ne=n(808),ce=n(814),ae=n(798),se=n(813),ie=n(58),re=n(788),le=(n(895),b.e.div(B||(B=Object(a.a)(["\n  align-self: baseline;\n  /*background: ",";\n  border-radius: 8px;\n  box-shadow: 0 3px 4px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);*/\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  /*padding: 6px 12px;*/\n  position: relative;\n  margin-top: 0.5rem;\n  margin-bottom: 1rem;\n"])),(function(e){return e.theme.card.background}))),je=Object(b.e)(r.h)(T||(T=Object(a.a)(["\n  height: 40px;\n  margin-top: 0;\n  display: block;\n  &:last-child {\n    align-self: right;\n  }\n"]))),de=b.e.div(N||(N=Object(a.a)(["\n  display: inline-flex\n"]))),oe=b.e.span(F||(F=Object(a.a)(["\n  color: ",";\n"])),(function(e){return e.theme.colors.text})),be=function(e){var t=e.farm,n=e.walletBalance,c=e.depositBalance,a=e.rewardBalance,l=e.walletBalanceQuoteValue,j=e.depositBalanceQuoteValue,o=e.addLiquidityUrl,b=e.account,x=Object(i.f)(),u=Object(s.useState)(!1),p=Object(w.a)(u,2),h=p[0],m=p[1],g=Object(s.useState)(!1),v=Object(w.a)(g,2),k=v[0],y=v[1],C=t.pid,M=t.isTokenOnly,A=t.isKingdom,S=t.isKingdomToken,B=t.lpSymbol,T=t.lpAddresses,N=t.token.address,F=B.toUpperCase(),U=t.userData||{},L=U.allowance,z=void 0===L?0:L,K=U.tokenBalance,R=void 0===K?0:K,V=U.stakedBalance,D=void 0===V?0:V,Q=new d.a(z),q=new d.a(R),I=new d.a(D),Y=Object(O.h)(),E=a?new d.a(a).multipliedBy(Y).toNumber():0,J=Object(re.a)(),$=Object(ne.a)(C,A).onStake,G=Object(ce.a)(C,A).onUnstake,H=Object(ae.b)(C,A).onReward,be=b&&Q&&Q.isGreaterThan(0),xe=Object(r.U)(Object(P.jsx)(ee.a,{max:q,onConfirm:$,tokenName:F,addLiquidityUrl:o,isTokenOnly:M,isKingdomToken:S})),ue=Object(w.a)(xe,1)[0],Oe=Object(r.U)(Object(P.jsx)(te.a,{max:I,onConfirm:G,tokenName:F,isTokenOnly:M,isKingdomToken:S})),pe=Object(w.a)(Oe,1)[0],he=Object(f.a)(T),me=Object(f.a)(N),fe=Object(s.useMemo)((function(){return M||S?Object(ie.a)(me,J):Object(ie.a)(he,J)}),[he,M,J,me,S]),ge=Object(se.a)(fe,A).onApprove,we=Object(s.useCallback)(Object(_.a)(X.a.mark((function e(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,ge();case 4:m(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[ge]),ve=Object(P.jsx)(je,{mt:"8px",disabled:h||x.pathname.includes("archived"),onClick:we,children:"Approve Contract"});return Object(P.jsx)(le,{children:Object(P.jsx)("div",{className:"k-card",children:Object(P.jsxs)("div",{className:"flex-grid",children:[Object(P.jsxs)("div",{className:"col",children:[Object(P.jsx)(r.s,{justifyContent:"space-between",children:Object(P.jsx)(r.M,{children:"Balance (Wallet)"})}),Object(P.jsxs)(de,{children:[Object(P.jsx)(W,{fontSize:"16px",value:n,decimals:n?3:2,unit:""}),"\xa0",Object(P.jsx)(oe,{children:"("}),Object(P.jsx)(Z.a,{value:l}),Object(P.jsx)(oe,{children:")"})]}),be?Object(P.jsx)(je,{mt:"8px",fullWidth:!0,onClick:ue,children:"Deposit"}):ve]}),Object(P.jsxs)("div",{className:"col",children:[Object(P.jsx)(r.s,{justifyContent:"space-between",children:Object(P.jsx)(r.M,{children:"Deposit (Staked)"})}),Object(P.jsxs)(de,{children:[Object(P.jsx)(W,{fontSize:"16px",value:c,decimals:c?3:2,unit:""}),"\xa0",Object(P.jsx)(oe,{children:"("}),Object(P.jsx)(Z.a,{value:j}),Object(P.jsx)(oe,{children:")"})]}),be?Object(P.jsx)(je,{mt:"8px",fullWidth:!0,onClick:pe,children:"Withdraw"}):ve]}),Object(P.jsxs)("div",{className:"col",children:[Object(P.jsx)(r.M,{children:"CUB Rewards"}),Object(P.jsxs)(de,{children:[Object(P.jsx)(W,{fontSize:"16px",value:a,decimals:a?3:2,unit:""}),"\xa0",Object(P.jsx)(oe,{children:"("}),Object(P.jsx)(Z.a,{value:E}),Object(P.jsx)(oe,{children:")"})]}),Object(P.jsx)(je,{disabled:0===a||k||!be,onClick:Object(_.a)(X.a.mark((function e(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.next=3,H();case 3:y(!1);case 4:case"end":return e.stop()}}),e)}))),children:"Harvest"})]})]})})})},xe=(Object(b.e)(r.h)(U||(U=Object(a.a)(["\n  height: 36px;\n  font-size: 1rem;\n  padding: 0 12px;\n"]))),b.e.div(L||(L=Object(a.a)(["\n  margin-top: 1rem;\n  display: flex;\n  justify-content: space-between;\n  /*padding-left: 0.8rem;\n  padding-right: 0.8rem;*/\n  /*font-size: 0.95rem*/\n"])))),ue=b.e.div(z||(z=Object(a.a)(["\n  /*display: inline;\n  margin-right: 1rem;*/\n  /*& div {\n    font-family: Arial;\n    font-size: 0.8rem;\n    padding: 2px;\n  }*/\n  &:nth-child(1) {\n    width: 25%\n  }\n  &:nth-child(2) {\n    width: 33%\n  }\n"]))),Oe=b.e.div(K||(K=Object(a.a)(["\n  /*background: ",";\n  border-radius: 8px;\n  box-shadow: 0 3px 4px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);*/\n"])),(function(e){return e.theme.card.background})),pe=Object(b.e)(r.y)(R||(R=Object(a.a)(["\n  font-weight: 400;\n"]))),he=function(e){var t=e.farm,n=e.walletBalance,c=e.depositBalance,a=e.rewardBalance,s=e.walletBalanceQuoteValue,i=e.depositBalanceQuoteValue,l=e.farmName,j=e.oneTokenQuoteValue,d=e.removed,o=e.aprApy,b=e.account,x=j?"~$".concat(j.times(y.d).toFixed(2)):"-",u=t.lpSymbol,O=t.multiplier,p=t.quoteToken,h=t.token,m=t.isKingdom,f=t.lpAddresses,g=t.isTokenOnly,w=t.isKingdomToken,v=t.kingdomContract,k=u&&u.toUpperCase().replace("PANCAKE",""),C=Object(G.a)({quoteTokenAddress:p.address,tokenAddress:h.address}),M=m?y.f:y.a,A="".concat(M,"/").concat(C),S=f[56],B=h.address[56],T="https://bscscan.com/token/".concat(g||w?B:S),N="https://bscscan.com/token/".concat(v),F="https://pancakeswap.info/pair/".concat(g?B:S);return Object(P.jsxs)(Oe,{children:[Object(P.jsx)(be,{farm:t,walletBalance:n,depositBalance:c,rewardBalance:a,walletBalanceQuoteValue:s,depositBalanceQuoteValue:i,addLiquidityUrl:A,account:b}),Object(P.jsxs)(xe,{className:"k-details",children:[Object(P.jsxs)(ue,{children:[Object(P.jsxs)(r.s,{justifyContent:"space-between",children:[Object(P.jsxs)(r.M,{children:[u,":"]}),Object(P.jsxs)(r.M,{children:["(",x,")"]})]}),Object(P.jsxs)(r.s,{justifyContent:"space-between",children:[Object(P.jsx)(r.M,{children:"Multiplier:"}),Object(P.jsx)(r.M,{children:O})]}),Object(P.jsxs)(r.s,{justifyContent:"space-between",children:[Object(P.jsx)(r.M,{children:"Type:"}),Object(P.jsx)(r.M,{children:"Auto-compound"})]}),Object(P.jsxs)(r.s,{justifyContent:"space-between",children:[Object(P.jsx)(r.M,{children:"Farm:"}),Object(P.jsx)(r.M,{children:l})]})]}),Object(P.jsx)(ue,{children:Object(P.jsx)($,{aprApy:o,lpLabel:k,addLiquidityUrl:A,isDetails:!0})}),Object(P.jsxs)(ue,{children:[Object(P.jsx)(pe,{external:!0,href:T,children:"Farm Contract"}),Object(P.jsx)(pe,{external:!0,href:N,children:"Kingdom Contract"}),!d&&Object(P.jsx)(pe,{external:!0,href:A,children:"Get ".concat(k)}),Object(P.jsx)(pe,{external:!0,href:F,children:"See Token Info"})]})]})]})},me=b.e.div(V||(V=Object(a.a)(["\n  /background-color: ",";\n  opacity: 0.2;*/\n  height: 1px;\n  margin: 12px auto;\n  width: 100%;\n"])),(function(e){return e.theme.colors.primary})),fe=b.e.div(D||(D=Object(a.a)(["\n  height: ",";\n  overflow: hidden;\n"])),(function(e){return e.expanded?"100%":"0px"})),ge=b.e.div(Q||(Q=Object(a.a)(["\n  background: ",";\n  border-radius: 8px;\n  box-shadow: 0 3px 4px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);\n  padding: 0.4rem 0.8rem;\n"])),(function(e){return e.theme.card.background})),we=Object(b.e)(r.w)(q||(q=Object(a.a)(["\n  width: 64px;\n"]))),ve=function(e){var t=e.farm,n=e.removed,a=e.cakePrice,i=(e.bnbPrice,e.ethereum,e.account),l=Object(s.useState)(!1),j=Object(w.a)(l,2),o=j[0],b=j[1],x=t.apr,u=t.lpTotalInQuoteToken,p=t.kingdomSupply,h=t.lpSymbol,m=t.pcsPid,g=t.multiplier,y=t.isKingdom,M=t.isKingdomToken,A=t.tokenPriceVsQuote,S=t.poolWeightPCS,B=t.pcsCompounding,T=t.lpTokenBalancePCSv2,N=void 0===T?0:T,F=t.lpTotalInQuoteTokenPCS,U=void 0===F?0:F,L=h.split(" ")[0].toLocaleLowerCase(),z=Object(O.g)()[Object(f.a)(t.quoteToken.address).toLowerCase()],K=C(y,M,Number(A),S,B,x,N,U,z),R=K,V=R.dailyAPR,D=R.totalAPY,Q=t.userData,q=Q.tokenBalance,I=Q.stakedBalance,Y=Q.earnings,E=q?Object(k.a)(new d.a(q)):0,J=I?Object(k.a)(new d.a(I)):0,$=Y?Object(k.a)(new d.a(Y)):0,G=u&&p?new d.a(1).times(u).div(new d.a(p)):new d.a(0),H=q?new d.a(q).times(G).toNumber():0,X=I?new d.a(I).times(G).toNumber():0,_=u?"$".concat(Number(u).toLocaleString(void 0,{maximumFractionDigits:0})):"-",Z=x&&x.toLocaleString("en-US",{maximumFractionDigits:2}),ee=m||0===m?"Pancake v2":"";return K=Object(c.a)(Object(c.a)({},K),{},{pcsCompounding:t.pcsCompounding,farmAPR:Z,apr:t.apr,cakePrice:a,quoteTokenPriceUsd:z}),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(me,{}),Object(P.jsxs)(ge,{children:[Object(P.jsxs)("div",{className:"flex-grid k-grid",children:[Object(P.jsx)("div",{className:"col",children:Object(P.jsx)(we,{src:"/images/farms/".concat(L,".png"),alt:h,width:64,height:64})}),Object(P.jsxs)("div",{className:"col",children:[Object(P.jsx)(r.s,{justifyContent:"flex-start",alignItems:"center",children:Object(P.jsx)(r.M,{className:"token",children:h})}),Object(P.jsx)(r.M,{children:ee}),Object(P.jsxs)(r.M,{children:[" TVL ",_]})]}),Object(P.jsxs)("div",{className:"col",children:[Object(P.jsx)(W,{fontSize:"16px",value:D,decimals:2,unit:"%"}),Object(P.jsx)(W,{fontSize:"16px",value:V,decimals:2,unit:"%"}),Object(P.jsx)(r.M,{children:g})]}),Object(P.jsxs)("div",{className:"col",children:[Object(P.jsx)(W,{fontSize:"16px",value:E,decimals:E?2:1,unit:""}),Object(P.jsx)(W,{fontSize:"16px",value:J,decimals:J?2:1,unit:""}),Object(P.jsx)(W,{fontSize:"16px",value:$,decimals:$?2:1,unit:""})]}),Object(P.jsx)("div",{className:"col",children:Object(P.jsx)(v.a,{onClick:function(){return b(!o)},expanded:o,onlyArrow:!0})})]}),Object(P.jsx)(fe,{expanded:o,children:Object(P.jsx)(he,{farm:t,walletBalance:E,depositBalance:J,rewardBalance:$,walletBalanceQuoteValue:H,depositBalanceQuoteValue:X,farmName:ee,oneTokenQuoteValue:G,removed:n,aprApy:K,account:i})})]})]})},ke=Object(b.e)(r.M)(I||(I=Object(a.a)(["\n  line-height: 1.5;\n\n"]))),ye=function(e){var t=e.value,n=e.decimals,c=e.prefix,a=e.fontSize,i=void 0===a?"16px":a,r=Object(M.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),l=r.countUp,j=r.update,d=Object(s.useRef)(j);return Object(s.useEffect)((function(){d.current(t)}),[t,d]),Object(P.jsxs)(ke,{fontSize:i,children:[c,l]})},Ce=(n(896),b.e.div(Y||(Y=Object(a.a)(["\n  max-width: 400px;\n"])))),Me=function(){var e=Object(O.k)(),t=Object(i.f)().pathname,n=Object(O.b)(),a=n.data,j=(n.userDataLoaded,Object(O.h)()),b=Object(o.c)().account,w=Object(O.g)(),v=Object(l.b)(),k=Object(p.a)().fastRefresh;Object(s.useEffect)((function(){b&&v(Object(h.a)(b))}),[b,v,k]);var y=t.includes("archived"),C=!t.includes("history")&&!y,M=a.filter((function(e){return e.isKingdom&&"0X"!==e.multiplier&&!Object(g.a)(e.pid)})),A=Object(s.useCallback)((function(e){return e.map((function(e){if(!e.lpTotalInQuoteToken||!w)return e;var t=w[Object(f.a)(e.quoteToken.address).toLowerCase()],n=new d.a(e.lpTotalInQuoteToken).times(t),a=C?Object(m.a)(e.poolWeight,j,n):0;return Object(c.a)(Object(c.a)({},e),{},{apr:a,liquidity:n})}))}),[j,w,C]),S=Object(s.useMemo)((function(){var e=[];return C&&(e=A(M)),e}),[M,A,C]);return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(u.a,{children:[Object(P.jsxs)("div",{className:"k-header",children:[Object(P.jsx)(r.t,{as:"h1",size:"xxl",color:"secondary",mb:"10px",children:"Kingdoms"}),Object(P.jsxs)(r.s,{children:[Object(P.jsx)(r.M,{bold:!0,fontSize:"24px",children:"TVL\xa0"}),Object(P.jsx)(ye,{fontSize:"24px",value:e.toNumber(),prefix:"$",decimals:2})]})]}),Object(P.jsx)(r.t,{as:"h1",size:"lg",color:"primary",mb:"10px",style:{textAlign:"left"},children:"Composable Auto-Compounding"}),Object(P.jsx)(r.t,{as:"h2",color:"secondary",mb:"10px",style:{textAlign:"left"},children:"Stake tokens for cross-platform farming plus CUB rewards"}),Object(P.jsxs)(r.t,{as:"h2",color:"warning",mb:"10px",style:{textAlign:"left"},children:["IMPORTANT: Must use ",Object(P.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://exchange.pancakeswap.finance/#/pool",children:"Pancakeswap V2 Exchange"})," for V2 Kingdom LP tokens until we add a V2 exchange for Cub Finance"]}),Object(P.jsx)(r.t,{as:"h2",color:"warning",mb:"10px",style:{textAlign:"left"},children:"CertiK Audit is Pending: Our other contracts have been audited by CertiK and Kingdoms are currently under review. Please use at your own discretion until the audit has been published"}),Object(P.jsxs)(Ce,{children:[Object(P.jsx)(r.t,{as:"h2",color:"secondary",mb:"5px",style:{textAlign:"left"},children:"Fees"}),Object(P.jsxs)(r.s,{justifyContent:"space-between",children:[Object(P.jsx)(r.M,{children:"Management Fee:"}),Object(P.jsx)(r.M,{children:"0.9%"})]}),Object(P.jsxs)(r.s,{justifyContent:"space-between",children:[Object(P.jsx)(r.M,{children:"Withdrawal Fee:"}),Object(P.jsx)(r.M,{children:"None"})]}),Object(P.jsxs)(r.s,{justifyContent:"space-between",children:[Object(P.jsx)(r.M,{children:"Fee to CUB Staking Kingdom:"}),Object(P.jsx)(r.M,{children:"1%"})]}),Object(P.jsxs)(r.s,{justifyContent:"space-between",children:[Object(P.jsx)(r.M,{children:"CUB Burn Rate:"}),Object(P.jsx)(r.M,{children:"100% of Fees Buyback and Burn CUB"})]})]})]}),Object(P.jsx)(x.a,{className:"k-container",children:Object(P.jsxs)("div",{id:"kingdoms",children:[Object(P.jsx)("div",{id:"content-header",className:"k-content",children:Object(P.jsxs)("div",{className:"flex-grid k-grid",children:[Object(P.jsx)("div",{className:"col"}),Object(P.jsxs)("div",{className:"col",children:[Object(P.jsx)(r.M,{children:"Token"}),Object(P.jsx)(r.M,{children:"Farm"}),Object(P.jsx)(r.M,{children:"TVL"})]}),Object(P.jsxs)("div",{className:"col",children:[Object(P.jsx)(r.M,{children:"Total APY"}),Object(P.jsx)(r.M,{children:"Daily APR"}),Object(P.jsx)(r.M,{children:"Multiplier"})]}),Object(P.jsxs)("div",{className:"col",children:[Object(P.jsx)(r.M,{children:"Balance"}),Object(P.jsx)(r.M,{children:"Deposit"}),Object(P.jsx)(r.M,{children:"Rewards"})]}),Object(P.jsx)("div",{className:"col"})]})}),S.map((function(e){return Object(P.jsx)(ve,{farm:e,cakePrice:j,account:b,removed:!1},e.pid)}))]})})]})}},895:function(e,t,n){},896:function(e,t,n){}}]);
//# sourceMappingURL=7.8779dd12.chunk.js.map