import{F as S,D as n,j as w,x as j,y as D,z as F,r as A,E as I,G as N,H as M}from"./index-zoCVIjJL.js";import{r as _,m as z,f as E,c as O}from"./Modal-D8Ubx5EF.js";import{a as T}from"./ButtonBase-Cn_JI8Ky.js";const L=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],U=["component","slots","slotProps"],q=["component"];function H(e,o){const{className:t,elementType:r,ownerState:l,externalForwardedProps:a,getSlotOwnerState:i,internalForwardedProps:s}=o,b=S(o,L),{component:R,slots:m={[e]:void 0},slotProps:h={[e]:void 0}}=a;S(a,U);const p=m[e]||r,c=_(h[e],l),g=z(n({className:t},b,{externalForwardedProps:void 0,externalSlotProps:c})),{props:{component:C},internalRef:d}=g,P=S(g.props,q),x=T(d,c==null?void 0:c.ref,o.ref),v=i?i(P):{},u=n({},l,v),f=C,y=E(p,n({},e==="root",!m[e]&&s,P,f&&{as:f},{ref:x}),u);return Object.keys(v).forEach(k=>{delete y[k]}),[p,y]}const $=O(w.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function B(e){return j("MuiAvatar",e)}const G=D("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]),oe=G,W=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],J=e=>{const{classes:o,variant:t,colorDefault:r}=e;return M({root:["root",t,r&&"colorDefault"],img:["img"],fallback:["fallback"]},B,o)},K=F("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[t.variant],t.colorDefault&&o.colorDefault]}})(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:n({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:n({backgroundColor:e.palette.grey[400]},e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})))}]})),Q=F("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,o)=>o.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),V=F($,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,o)=>o.fallback})({width:"75%",height:"75%"});function X({crossOrigin:e,referrerPolicy:o,src:t,srcSet:r}){const[l,a]=A.useState(!1);return A.useEffect(()=>{if(!t&&!r)return;a(!1);let i=!0;const s=new Image;return s.onload=()=>{i&&a("loaded")},s.onerror=()=>{i&&a("error")},s.crossOrigin=e,s.referrerPolicy=o,s.src=t,r&&(s.srcset=r),()=>{i=!1}},[e,o,t,r]),l}const te=A.forwardRef(function(o,t){const r=I({props:o,name:"MuiAvatar"}),{alt:l,children:a,className:i,component:s="div",slots:b={},slotProps:R={},imgProps:m,sizes:h,src:p,srcSet:c,variant:g="circular"}=r,C=S(r,W);let d=null;const P=X(n({},m,{src:p,srcSet:c})),x=p||c,v=x&&P!=="error",u=n({},r,{colorDefault:!v,component:s,variant:g}),f=J(u),[y,k]=H("img",{className:f.img,elementType:Q,externalForwardedProps:{slots:b,slotProps:{img:n({},m,R.img)}},additionalProps:{alt:l,src:p,srcSet:c,sizes:h},ownerState:u});return v?d=w.jsx(y,n({},k)):a||a===0?d=a:x&&l?d=l[0]:d=w.jsx(V,{ownerState:u,className:f.fallback}),w.jsx(K,n({as:s,ownerState:u,className:N(f.root,i),ref:t},C,{children:d}))});export{te as A,oe as a};