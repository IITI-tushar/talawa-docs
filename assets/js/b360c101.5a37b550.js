"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[907110],{615259:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>h,Bullet:()=>i,Details:()=>p,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>n,metadata:()=>c,toc:()=>m});var t=s(785893),d=s(511151),o=s(667294);const n={id:"add-user-to-group-chat",title:"addUserToGroupChat",hide_table_of_contents:!1},r=void 0,c={id:"schema/mutations/add-user-to-group-chat",title:"addUserToGroupChat",description:"No description",source:"@site/docs/schema/mutations/add-user-to-group-chat.mdx",sourceDirName:"schema/mutations",slug:"/schema/mutations/add-user-to-group-chat",permalink:"/docs/schema/mutations/add-user-to-group-chat",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/mutations/add-user-to-group-chat.mdx",tags:[],version:"current",frontMatter:{id:"add-user-to-group-chat",title:"addUserToGroupChat",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"addUserImage",permalink:"/docs/schema/mutations/add-user-image"},next:{title:"adminRemoveEvent",permalink:"/docs/schema/mutations/admin-remove-event"}},l={},i=()=>{const e={span:"span",...(0,d.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const a={a:"a",...(0,d.a)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const a={span:"span",...(0,d.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.span,{className:"badge badge--"+e.class,children:e.text})})},p=({dataOpen:e,dataClose:a,children:s,startOpen:n=!1})=>{const r={details:"details",summary:"summary",...(0,d.a)()},[c,l]=(0,o.useState)(n);return(0,t.jsxs)(r.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(r.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:a}),c&&s]})},m=[{value:"Arguments",id:"arguments",level:3},{value:'<code>addUserToGroupChat.<b>userId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"addusertogroupchatuseridid--",level:4},{value:'<code>addUserToGroupChat.<b>chatId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"addusertogroupchatchatidid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>GroupChat</code> <Badge class="secondary"></Badge>',id:"groupchat-",level:4}];function x(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"No description"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-graphql",children:"addUserToGroupChat(\n  userId: ID!\n  chatId: ID!\n): GroupChat!\n"})}),"\n",(0,t.jsx)(a.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(a.h4,{id:"addusertogroupchatuseridid--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["addUserToGroupChat.",(0,t.jsx)("b",{children:"userId"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"../../../docs/schema/scalars/id",children:(0,t.jsx)(a.code,{children:"ID!"})})," ",(0,t.jsx)(h,{class:"secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(a.h4,{id:"addusertogroupchatchatidid--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["addUserToGroupChat.",(0,t.jsx)("b",{children:"chatId"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"../../../docs/schema/scalars/id",children:(0,t.jsx)(a.code,{children:"ID!"})})," ",(0,t.jsx)(h,{class:"secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.blockquote,{children:"\n"}),"\n",(0,t.jsx)(a.h3,{id:"type",children:"Type"}),"\n",(0,t.jsxs)(a.h4,{id:"groupchat-",children:[(0,t.jsx)(a.a,{href:"../../../docs/schema/objects/group-chat",children:(0,t.jsx)(a.code,{children:"GroupChat"})})," ",(0,t.jsx)(h,{class:"secondary",text:"object"})]}),"\n",(0,t.jsx)(a.blockquote,{children:"\n"})]})}function g(e={}){const{wrapper:a}={...(0,d.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},511151:(e,a,s)=>{s.d(a,{Z:()=>r,a:()=>n});var t=s(667294);const d={},o=t.createContext(d);function n(e){const a=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),t.createElement(o.Provider,{value:a},e.children)}}}]);