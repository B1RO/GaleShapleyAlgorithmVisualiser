(this.webpackJsonpgale_shapey=this.webpackJsonpgale_shapey||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n(2),r=n.n(c),s=n(9),l=n.n(s),a=(n(15),n(8)),u=n(4),o=n(3),j=n(1);n(16);function b(e){return e.toLowerCase()!=e.toUpperCase()}var f=function(){var e=Object(c.useState)({}),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(null),l=Object(j.a)(s,2),f=l[0],d=l[1],O=Object(c.useState)(null),h=Object(j.a)(O,2),x=h[0],v=h[1],y=Object(c.useState)(null),g=Object(j.a)(y,2),p=g[0],m=g[1],C=Object(c.useState)(null),w=Object(j.a)(C,2),S=w[0],k=w[1],E=Object(c.useState)(0),F=Object(j.a)(E,2),D=F[0],I=F[1];Object(c.useEffect)((function(){null!=x&&null!=f&&(m(x),k(f))}),[x,f]);var B=Object(c.useState)("a1 : b4 \x1f b3 \x1f b1 \x1f b2\na2 : b2 \x1f b4 \x1f b1 \x1f b3\na3 : b4 \x1f b1 \x1f b2 \x1f b3\na4 : b3 \x1f b2 \x1f b1 \x1f b4"),N=Object(j.a)(B,2),z=N[0],G=N[1],A=Object(c.useState)("b1 : a1 \x1f a3 \x1f a4 \x1f a2\nb2 : a1 \x1f a3 \x1f a2 \x1f a4\nb3 : a2 \x1f a1 \x1f a3 \x1f a4\nb4 : a2 \x1f a4 \x1f a1 \x1f a3"),T=Object(j.a)(A,2),L=T[0],P=T[1],J=Object(c.useState)(!1),M=Object(j.a)(J,2),R=M[0],W=M[1];!function(e,t){var n=Object(c.useRef)();Object(c.useEffect)((function(){n.current=e}),[e]),Object(c.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){R&&_(!1)}),1e3);var _=function(e){if(Object.keys(n).length!==Object.keys(S).length){var t=Object.keys(S)[D];if(-1===Object.values(n).findIndex((function(e){return e===t}))){var i=S[t][0];k(Object(o.a)(Object(o.a)({},S),{},Object(u.a)({},t,S[t].slice(1)))),(-1===Object.keys(n).findIndex((function(e){return e===i}))||p[i].indexOf(t)<p[i].indexOf(n[i]))&&r(Object(o.a)(Object(o.a)({},n),{},Object(u.a)({},i,t)))}D+1===Object.keys(p).length?I(0):I(D+1)}};return null==p||null==S?Object(i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[Object(i.jsx)("div",{children:"Please fill in the inputs:"}),Object(i.jsx)("div",{style:{fontSize:16},children:"Note that we try to guess the separator, so you shoulnd't have to worry about that :)"}),Object(i.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"space-around",justifyContent:"space-around",height:"70vh",width:"100vw",padding:128},children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:"As:"}),Object(i.jsx)("div",{style:{fontSize:14},children:"(e.g. : a1 : b1,b2,b3)"}),Object(i.jsx)("textarea",{value:z,onChange:function(e){G(e.currentTarget.value)},rows:20,cols:64})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:"Bs:"}),Object(i.jsx)("div",{style:{fontSize:14},children:"(e.g. : b1 : a2,a1,a3)"}),Object(i.jsx)("textarea",{onChange:function(e){P(e.currentTarget.value)},value:L,rows:20,cols:64})]})]}),Object(i.jsx)("div",{className:"multi-button",children:Object(i.jsx)("button",{style:{width:""},onClick:function(e){var t=Object.fromEntries(Object.entries(Object(a.a)(z).reduce((function(e,t){return e[t]=e[t]?e[t]+1:1,e}),{})).filter((function(e){var t=Object(j.a)(e,2),n=t[0];t[1];return!b(n)&&isNaN(n)}))),n=z.split("\n").length,i=Object.entries(t).filter((function(e){var t=Object(j.a)(e,2);t[0];return t[1]==n}))[0][0],c=Object.entries(t).filter((function(e){var t=Object(j.a)(e,2);t[0];return t[1]!=n}))[0][0],r=Object.fromEntries(z.split("\n").map((function(e){var t=e.split(i),n=Object(j.a)(t,2),r=n[0],s=n[1];return[r.trim(),s.split(c).map((function(e){return e.trim()}))]}))),s=Object.fromEntries(Object.entries(Object(a.a)(L).reduce((function(e,t){return e[t]=e[t]?e[t]+1:1,e}),{})).filter((function(e){var t=Object(j.a)(e,2),n=t[0];t[1];return!b(n)&&isNaN(n)}))),l=L.split("\n").length,u=(Object.entries(s).filter((function(e){var t=Object(j.a)(e,2);t[0];return t[1]==l}))[0][0],Object.entries(s).filter((function(e){var t=Object(j.a)(e,2);t[0];return t[1]!=l}))[0][0],Object.fromEntries(L.split("\n").map((function(e){var t=e.split(i),n=Object(j.a)(t,2),r=n[0],s=n[1];return[r.trim(),s.split(c).map((function(e){return e.trim()}))]}))));v(r),d(u)},children:"Continue"})})]}):Object(i.jsxs)("div",{style:{backgroundColor:"#ECEFF1",width:"100vw",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(i.jsxs)("div",{style:{height:"30vh",paddingTop:28},children:["Matches :",Object.entries(n).map((function(e){var t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(i.jsxs)("div",{style:{fontSize:16},children:[n," - ",c]})}))]}),Object(i.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",width:"90vw",height:"50vh"},children:[Object(i.jsx)("div",{style:{margin:48,display:"flex",flexDirection:"column",justifyContent:"space-around",flexGrow:1,height:"80%"},children:Object.entries(f).map((function(e){var t=Object(j.a)(e,2),c=t[0],r=t[1],s=f[c].findIndex((function(e){return n[e]===c})),l=f[c].length-S[c].length;return Object(i.jsxs)("div",{style:{display:"flex",alignContent:"center",flexGrow:1,flexDirection:"row",height:"100%",justifyContent:"center"},children:[Object(i.jsx)("div",{style:{backgroundColor:c==Object.keys(S)[D]?"#FDD835":"#FFEB3B",width:64},children:c}),r.map((function(e,t){return Object(i.jsxs)("div",{style:{display:"flex",flexGrow:1,justifyContent:"center",alignItems:"center",fontSize:16,fontWeight:1e3,textAlign:"center",backgroundColor:s==t?"#2E7D32":t>=l?"#66BB6A":"#C8E6C9"},children:[e,", "]})}))]})}))}),Object(i.jsx)("div",{style:{margin:48,display:"flex",flexDirection:"column",justifyContent:"space-around",flexGrow:1,height:"80%"},children:Object.entries(x).map((function(e){var t=Object(j.a)(e,2),c=t[0],r=t[1],s=x[c].findIndex((function(e){return e===n[c]})),l=x[c].length-p[c].length;return Object(i.jsxs)("div",{style:{display:"flex",alignContent:"center",flexGrow:1,flexDirection:"row",height:"100%",justifyContent:"center"},children:[Object(i.jsx)("div",{style:{backgroundColor:c==Object.keys(S)[D]?"#2E7D32":"#66BB6A",width:64},children:c}),r.map((function(e,t){return Object(i.jsxs)("div",{style:{display:"flex",flexGrow:1,justifyContent:"center",alignItems:"center",fontSize:16,fontWeight:1e3,textAlign:"center",backgroundColor:s==t?"#FDD835":t>=l?"#FFEB3B":"#FFF9C4"},children:[e,", "]})}))]})}))})]}),Object(i.jsx)("div",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(i.jsxs)("div",{className:"multi-button",children:[Object(i.jsx)("button",{style:{width:""},onClick:function(){_(!1)},children:"Step by step"}),Object(i.jsx)("button",{style:{width:""},onClick:function(){W(!0)},children:"Run"})]})})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),r(e),s(e)}))};l.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root")),d()}},[[17,1,2]]]);
//# sourceMappingURL=main.948683f9.chunk.js.map