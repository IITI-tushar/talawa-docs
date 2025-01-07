"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[771901],{889100:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>x,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>h,assets:()=>o,contentTitle:()=>n,default:()=>j,frontMatter:()=>r,metadata:()=>c,toc:()=>m});const c=JSON.parse('{"id":"schema/objects/message","title":"Message","description":"No description","source":"@site/docs/schema/objects/message.mdx","sourceDirName":"schema/objects","slug":"/schema/objects/message","permalink":"/docs/schema/objects/message","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/objects/message.mdx","tags":[],"version":"current","frontMatter":{"id":"message","title":"Message","hide_table_of_contents":false},"sidebar":"schemaSidebar","previous":{"title":"MessageChat","permalink":"/docs/schema/objects/message-chat"},"next":{"title":"MinimumLengthError","permalink":"/docs/schema/objects/minimum-length-error"}}');var t=a(474848),l=a(28453),d=a(296540);const r={id:"message",title:"Message",hide_table_of_contents:!1},n=void 0,o={},i=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),h=e=>(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),x=e=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{className:"badge badge--"+e.class,children:e.text})}),g=({dataOpen:e,dataClose:s,children:a,startOpen:c=!1})=>{const[l,r]=(0,d.useState)(c);return(0,t.jsxs)("details",{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:l?e:s}),l&&a]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>Message.<b>_id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"message_idid--",level:4},{value:'<code>Message.<b>text</b></code><Bullet></Bullet><code>String</code> <Badge class="secondary"></Badge>',id:"messagetextstring-",level:4},{value:'<code>Message.<b>createdAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="secondary"></Badge>',id:"messagecreatedatdatetime-",level:4},{value:'<code>Message.<b>imageUrl</b></code><Bullet></Bullet><code>URL</code> <Badge class="secondary"></Badge>',id:"messageimageurlurl-",level:4},{value:'<code>Message.<b>videoUrl</b></code><Bullet></Bullet><code>URL</code> <Badge class="secondary"></Badge>',id:"messagevideourlurl-",level:4},{value:'<code>Message.<b>creator</b></code><Bullet></Bullet><code>User</code> <Badge class="secondary"></Badge>',id:"messagecreatoruser-",level:4}];function u(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"No description"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:"type Message {\n  _id: ID!\n  text: String\n  createdAt: DateTime\n  imageUrl: URL\n  videoUrl: URL\n  creator: User\n}\n"})}),"\n",(0,t.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(s.h4,{id:"message_idid--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Message.",(0,t.jsx)("b",{children:"_id"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/scalars/id",children:(0,t.jsx)(s.code,{children:"ID!"})})," ",(0,t.jsx)(x,{class:"secondary",text:"non-null"})," ",(0,t.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(s.h4,{id:"messagetextstring-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Message.",(0,t.jsx)("b",{children:"text"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/scalars/string",children:(0,t.jsx)(s.code,{children:"String"})})," ",(0,t.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(s.h4,{id:"messagecreatedatdatetime-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Message.",(0,t.jsx)("b",{children:"createdAt"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/scalars/date-time",children:(0,t.jsx)(s.code,{children:"DateTime"})})," ",(0,t.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(s.h4,{id:"messageimageurlurl-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Message.",(0,t.jsx)("b",{children:"imageUrl"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/scalars/url",children:(0,t.jsx)(s.code,{children:"URL"})})," ",(0,t.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(s.h4,{id:"messagevideourlurl-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Message.",(0,t.jsx)("b",{children:"videoUrl"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/scalars/url",children:(0,t.jsx)(s.code,{children:"URL"})})," ",(0,t.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(s.h4,{id:"messagecreatoruser-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Message.",(0,t.jsx)("b",{children:"creator"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/objects/user",children:(0,t.jsx)(s.code,{children:"User"})})," ",(0,t.jsx)(x,{class:"secondary",text:"object"})]}),"\n",(0,t.jsx)(s.blockquote,{children:"\n"})]})}function j(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,s,a)=>{a.d(s,{R:()=>d,x:()=>r});var c=a(296540);const t={},l=c.createContext(t);function d(e){const s=c.useContext(l);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),c.createElement(l.Provider,{value:s},e.children)}}}]);