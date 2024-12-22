"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[166408],{853683:(e,s,t)=>{t.r(s),t.d(s,{Badge:()=>u,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>h,assets:()=>l,contentTitle:()=>r,default:()=>x,frontMatter:()=>d,metadata:()=>a,toc:()=>m});const a=JSON.parse('{"id":"schema/mutations/send-message-to-group-chat","title":"sendMessageToGroupChat","description":"No description","source":"@site/docs/schema/mutations/send-message-to-group-chat.mdx","sourceDirName":"schema/mutations","slug":"/schema/mutations/send-message-to-group-chat","permalink":"/docs/schema/mutations/send-message-to-group-chat","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/mutations/send-message-to-group-chat.mdx","tags":[],"version":"current","frontMatter":{"id":"send-message-to-group-chat","title":"sendMessageToGroupChat","hide_table_of_contents":false},"sidebar":"schemaSidebar","previous":{"title":"sendMessageToDirectChat","permalink":"/docs/schema/mutations/send-message-to-direct-chat"},"next":{"title":"setTaskVolunteers","permalink":"/docs/schema/mutations/set-task-volunteers"}}');var n=t(474848),o=t(28453),c=t(296540);const d={id:"send-message-to-group-chat",title:"sendMessageToGroupChat",hide_table_of_contents:!1},r=void 0,l={},i=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),h=e=>(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{className:"badge badge--"+e.class,children:e.text})}),g=({dataOpen:e,dataClose:s,children:t,startOpen:a=!1})=>{const[o,d]=(0,c.useState)(a);return(0,n.jsxs)("details",{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:o?e:s}),o&&t]})},m=[{value:"Arguments",id:"arguments",level:3},{value:'<code>sendMessageToGroupChat.<b>chatId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"sendmessagetogroupchatchatidid--",level:4},{value:'<code>sendMessageToGroupChat.<b>messageContent</b></code><Bullet></Bullet><code>String!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"sendmessagetogroupchatmessagecontentstring--",level:4},{value:"Type",id:"type",level:3},{value:'<code>GroupChatMessage</code> <Badge class="secondary"></Badge>',id:"groupchatmessage-",level:4}];function p(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"No description"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"sendMessageToGroupChat(\n  chatId: ID!\n  messageContent: String!\n): GroupChatMessage!\n"})}),"\n",(0,n.jsx)(s.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(s.h4,{id:"sendmessagetogroupchatchatidid--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["sendMessageToGroupChat.",(0,n.jsx)("b",{children:"chatId"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/scalars/id",children:(0,n.jsx)(s.code,{children:"ID!"})})," ",(0,n.jsx)(u,{class:"secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"sendmessagetogroupchatmessagecontentstring--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["sendMessageToGroupChat.",(0,n.jsx)("b",{children:"messageContent"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/scalars/string",children:(0,n.jsx)(s.code,{children:"String!"})})," ",(0,n.jsx)(u,{class:"secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsx)(s.h3,{id:"type",children:"Type"}),"\n",(0,n.jsxs)(s.h4,{id:"groupchatmessage-",children:[(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/group-chat-message",children:(0,n.jsx)(s.code,{children:"GroupChatMessage"})})," ",(0,n.jsx)(u,{class:"secondary",text:"object"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"})]})}function x(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>c,x:()=>d});var a=t(296540);const n={},o=a.createContext(n);function c(e){const s=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),a.createElement(o.Provider,{value:s},e.children)}}}]);