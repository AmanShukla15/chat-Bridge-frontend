const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ConfirmDeleteDialog-D4Kubhai.js","assets/index-zoCVIjJL.js","assets/DialogTitle-BogMBega.js","assets/Modal-D8Ubx5EF.js","assets/ButtonBase-Cn_JI8Ky.js","assets/Menu-BjFoS8hj.js","assets/Button-DiAwvBb8.js","assets/AddMemberDialog-B6HWxZwe.js","assets/UserItem-CRkH8SJt.js","assets/ListItem-Dt54R3ud.js","assets/isMuiElement-BG5RyRtW.js","assets/Avatar-CEZlIwUk.js","assets/IconButton-DbI5Ym2I.js","assets/Delete-BOD66oR7.js","assets/hook-Bpn_aVtV.js"])))=>i.map(i=>d[i]);
import{j as e,r as o,J as A,ac as q,l as X,u as ee,c as re,ad as se,n as oe,ae as te,a6 as h,S as d,W as ae,m as j,af as ne,ag as ie,Z as ce,ah as le}from"./index-zoCVIjJL.js";import{A as de}from"./AvatarCard-CYXcyeTD.js";import{U as me}from"./UserItem-CRkH8SJt.js";import{b as g,a as pe,D as ue,B as xe,M as he}from"./hook-Bpn_aVtV.js";import{c as b,T as x,B as S}from"./Modal-D8Ubx5EF.js";import{C as ge}from"./CircularProgress-KkMh8HLI.js";import{I as u}from"./IconButton-DbI5Ym2I.js";import{T as je}from"./Tooltip-EEba8WSd.js";import{T as be}from"./TextField-qgC9iujP.js";import{B as L}from"./Button-DiAwvBb8.js";import{D as fe,A as ve}from"./Delete-BOD66oR7.js";import"./Avatar-CEZlIwUk.js";import"./ButtonBase-Cn_JI8Ky.js";import"./ListItem-Dt54R3ud.js";import"./Menu-BjFoS8hj.js";import"./isMuiElement-BG5RyRtW.js";const Me=b(e.jsx("path",{d:"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"}),"Done"),De=b(e.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit"),ke=b(e.jsx("path",{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}),"KeyboardBackspace"),Ce=o.lazy(()=>A(()=>import("./ConfirmDeleteDialog-D4Kubhai.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),Ie=o.lazy(()=>A(()=>import("./AddMemberDialog-B6HWxZwe.js"),__vite__mapDeps([7,1,8,9,5,3,4,10,11,12,13,14,2,6]))),Oe=()=>{var E,y;const r=q()[0].get("group"),a=X(),c=ee(),{isAddMember:n}=re(s=>s.misc),t=se(""),i=oe({chatId:r,populate:!0},{skip:!r}),[B,f]=g(ne),[w,N]=g(ie),[z,Ee]=g(ce),[R,v]=o.useState(!1),[T,m]=o.useState(!1),[M,D]=o.useState(!1),[k,p]=o.useState(""),[C,l]=o.useState(""),[H,I]=o.useState([]),F=[{isError:t.isError,error:t.error},{isError:i.isError,error:i.error}];pe(F),o.useEffect(()=>{const s=i.data;return s&&(p(s.chat.name),l(s.chat.name),I(s.chat.members)),()=>{p(""),l(""),I([]),m(!1)}},[i.data]);const P=()=>{a("/")},U=()=>{v(s=>!s)},V=()=>v(!1),O=()=>{m(!1),B("Updating Group Name...",{chatId:r,name:C})},$=()=>{D(!0)},G=()=>{D(!1)},K=()=>{c(le(!0))},Q=()=>{z("Deleting Group...",r),G(),a("/groups")},W=s=>{w("Removing Member...",{chatId:r,userId:s})};o.useEffect(()=>(r&&(p(`Group Name ${r}`),l(`Group Name ${r}`)),()=>{p(""),l(""),m(!1)}),[r]);const J=e.jsxs(e.Fragment,{children:[e.jsx(xe,{sx:{display:{xs:"block",sm:"none",position:"fixed",right:"1rem",top:"1rem"}},children:e.jsx(u,{onClick:U,children:e.jsx(he,{})})}),e.jsx(je,{title:"back",children:e.jsx(u,{sx:{position:"absolute",top:"2rem",left:"2rem",border:"3px solid black",borderRadius:"50%",color:j,transition:"background-color 0.3s, color 0.3s",":hover":{backgroundColor:j,color:"white"}},onClick:P,children:e.jsx(ke,{})})})]}),Y=e.jsx(d,{direction:"row",alignItems:"center",justifyContent:"center",spacing:"1rem",padding:"3rem",children:T?e.jsxs(e.Fragment,{children:[e.jsx(be,{value:C,onChange:s=>l(s.target.value)}),e.jsx(u,{onClick:O,disabled:f,children:e.jsx(Me,{})})]}):e.jsxs(e.Fragment,{children:[e.jsx(x,{variant:"h4",children:k}),e.jsx(u,{onClick:()=>m(!0),disabled:f,children:e.jsx(De,{})})]})}),Z=e.jsxs(d,{direction:{xs:"column-reverse",sm:"row"},spacing:"1rem",p:{xs:"0",sm:"1rem",md:"1rem 4rem"},children:[e.jsx(L,{size:"large",color:"error",startIcon:e.jsx(fe,{}),onClick:$,children:"Delete Group"}),e.jsx(L,{size:"large",variant:"contained",startIcon:e.jsx(ve,{}),onClick:K,children:"Add Member"})]});return t.isLoading?e.jsx(te,{}):e.jsxs(h,{container:!0,height:"100vh",children:[e.jsx(h,{item:!0,sx:{display:{xs:"none",sm:"block"}},sm:4,children:e.jsx(_,{myGroups:(E=t==null?void 0:t.data)==null?void 0:E.groups,chatId:r})}),e.jsxs(h,{item:!0,xs:12,sm:8,sx:{display:"flex",flexDirection:"column",alignItems:"center",position:"relative",padding:"1rem 3rem"},children:[J,k&&e.jsxs(e.Fragment,{children:[Y,e.jsx(x,{margin:"2rem",alignSelf:"flex-start",variant:"body1",children:"Members"}),e.jsx(d,{maxWidth:"45rem",width:"100%",boxSizing:"border-box",padding:{sm:"1rem",xs:"0",md:"1rem 4rem"},spacing:"2rem",height:"50vh",overflow:"auto",children:N?e.jsx(ge,{}):H.map(s=>e.jsx(me,{user:s,isAdded:!0,styling:{boxShadow:"0 0 0.5rem  rgba(0,0,0,0.2)",padding:"1rem 2rem",borderRadius:"1rem"},handler:W},s._id))}),Z]})]}),n&&e.jsx(o.Suspense,{fallback:e.jsx(S,{open:!0}),children:e.jsx(Ie,{chatId:r})}),M&&e.jsx(o.Suspense,{fallback:e.jsx(S,{open:!0}),children:e.jsx(Ce,{open:M,handleClose:G,deleteHandler:Q})}),e.jsx(ue,{sx:{display:{xs:"block",sm:"none"}},open:R,onClose:V,children:e.jsx(_,{w:"50vw",myGroups:(y=t==null?void 0:t.data)==null?void 0:y.groups,chatId:r})})]})},_=({w:r="100%",myGroups:a=[],chatId:c})=>e.jsx(d,{width:r,sx:{height:"100vh",overflowY:"auto"},children:a.length>0?a.map(n=>e.jsx(Ge,{group:n,chatId:c},n._id)):e.jsx(x,{textAlign:"center",padding:"1rem",children:"No groups"})}),Ge=o.memo(({group:r,chatId:a})=>{const{name:c,avatar:n,_id:t}=r;return e.jsx(ae,{to:`?group=${t}`,onClick:i=>{a===t&&i.preventDefault()},children:e.jsxs(d,{direction:"row",spacing:"1rem",alignItems:"center",padding:"1rem",borderBottom:"1px solid rgba(128, 128, 128, 0.5)",sx:{"&:hover":{backgroundColor:j,color:"white",transition:"background-color 0.5s"}},children:[e.jsx(de,{avatar:n}),e.jsx(x,{children:c})]})})});export{Oe as default};