"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[107079],{437422:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>u,Bullet:()=>i,Details:()=>x,SpecifiedBy:()=>h,assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>j});const o=JSON.parse('{"id":"schema/objects/group-chat","title":"GroupChat","description":"No description","source":"@site/docs/schema/objects/group-chat.mdx","sourceDirName":"schema/objects","slug":"/schema/objects/group-chat","permalink":"/docs/schema/objects/group-chat","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/objects/group-chat.mdx","tags":[],"version":"current","frontMatter":{"id":"group-chat","title":"GroupChat","hide_table_of_contents":false},"sidebar":"schemaSidebar","previous":{"title":"GroupChatMessage","permalink":"/docs/schema/objects/group-chat-message"},"next":{"title":"Group","permalink":"/docs/schema/objects/group"}}');var c=a(474848),r=a(28453),t=a(296540);const n={id:"group-chat",title:"GroupChat",hide_table_of_contents:!1},d=void 0,l={},i=()=>(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),h=e=>(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("span",{className:"badge badge--"+e.class,children:e.text})}),x=({dataOpen:e,dataClose:s,children:a,startOpen:o=!1})=>{const[r,n]=(0,t.useState)(o);return(0,c.jsxs)("details",{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)("summary",{onClick:e=>{e.preventDefault(),n((e=>!e))},style:{listStyle:"none"},children:r?e:s}),r&&a]})},j=[{value:"Fields",id:"fields",level:3},{value:'<code>GroupChat.<b>_id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"groupchat_idid--",level:4},{value:'<code>GroupChat.<b>users</b></code><Bullet></Bullet><code>[User!]!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"groupchatusersuser--",level:4},{value:'<code>GroupChat.<b>messages</b></code><Bullet></Bullet><code>[GroupChatMessage]</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"groupchatmessagesgroupchatmessage--",level:4},{value:'<code>GroupChat.<b>creator</b></code><Bullet></Bullet><code>User!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"groupchatcreatoruser--",level:4},{value:'<code>GroupChat.<b>organization</b></code><Bullet></Bullet><code>Organization!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"groupchatorganizationorganization--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}];function g(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.p,{children:"No description"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-graphql",children:"type GroupChat {\n  _id: ID!\n  users: [User!]!\n  messages: [GroupChatMessage]\n  creator: User!\n  organization: Organization!\n}\n"})}),"\n",(0,c.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,c.jsxs)(s.h4,{id:"groupchat_idid--",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["GroupChat.",(0,c.jsx)("b",{children:"_id"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"../../../docs/schema/scalars/id",children:(0,c.jsx)(s.code,{children:"ID!"})})," ",(0,c.jsx)(u,{class:"secondary",text:"non-null"})," ",(0,c.jsx)(u,{class:"secondary",text:"scalar"})]}),"\n",(0,c.jsx)(s.blockquote,{children:"\n"}),"\n",(0,c.jsxs)(s.h4,{id:"groupchatusersuser--",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["GroupChat.",(0,c.jsx)("b",{children:"users"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"../../../docs/schema/objects/user",children:(0,c.jsx)(s.code,{children:"[User!]!"})})," ",(0,c.jsx)(u,{class:"secondary",text:"non-null"})," ",(0,c.jsx)(u,{class:"secondary",text:"object"})]}),"\n",(0,c.jsx)(s.blockquote,{children:"\n"}),"\n",(0,c.jsxs)(s.h4,{id:"groupchatmessagesgroupchatmessage--",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["GroupChat.",(0,c.jsx)("b",{children:"messages"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"../../../docs/schema/objects/group-chat-message",children:(0,c.jsx)(s.code,{children:"[GroupChatMessage]"})})," ",(0,c.jsx)(u,{class:"secondary",text:"list"})," ",(0,c.jsx)(u,{class:"secondary",text:"object"})]}),"\n",(0,c.jsx)(s.blockquote,{children:"\n"}),"\n",(0,c.jsxs)(s.h4,{id:"groupchatcreatoruser--",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["GroupChat.",(0,c.jsx)("b",{children:"creator"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"../../../docs/schema/objects/user",children:(0,c.jsx)(s.code,{children:"User!"})})," ",(0,c.jsx)(u,{class:"secondary",text:"non-null"})," ",(0,c.jsx)(u,{class:"secondary",text:"object"})]}),"\n",(0,c.jsx)(s.blockquote,{children:"\n"}),"\n",(0,c.jsxs)(s.h4,{id:"groupchatorganizationorganization--",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["GroupChat.",(0,c.jsx)("b",{children:"organization"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"../../../docs/schema/objects/organization",children:(0,c.jsx)(s.code,{children:"Organization!"})})," ",(0,c.jsx)(u,{class:"secondary",text:"non-null"})," ",(0,c.jsx)(u,{class:"secondary",text:"object"})]}),"\n",(0,c.jsx)(s.blockquote,{children:"\n"}),"\n",(0,c.jsx)(s.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.a,{href:"../../../docs/schema/mutations/add-user-to-group-chat",children:(0,c.jsx)(s.code,{children:"addUserToGroupChat"})})," ",(0,c.jsx)(u,{class:"secondary",text:"mutation"}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"../../../docs/schema/mutations/admin-remove-group",children:(0,c.jsx)(s.code,{children:"adminRemoveGroup"})})," ",(0,c.jsx)(u,{class:"secondary",text:"mutation"}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"../../../docs/schema/mutations/create-group-chat",children:(0,c.jsx)(s.code,{children:"createGroupChat"})})," ",(0,c.jsx)(u,{class:"secondary",text:"mutation"}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"../../../docs/schema/mutations/remove-group-chat",children:(0,c.jsx)(s.code,{children:"removeGroupChat"})})," ",(0,c.jsx)(u,{class:"secondary",text:"mutation"}),(0,c.jsx)(i,{}),(0,c.jsx)(s.a,{href:"../../../docs/schema/mutations/remove-user-from-group-chat",children:(0,c.jsx)(s.code,{children:"removeUserFromGroupChat"})})," ",(0,c.jsx)(u,{class:"secondary",text:"mutation"})]}),"\n",(0,c.jsx)(s.h3,{id:"member-of",children:"Member of"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.a,{href:"../../../docs/schema/objects/group-chat-message",children:(0,c.jsx)(s.code,{children:"GroupChatMessage"})})," ",(0,c.jsx)(u,{class:"secondary",text:"object"})]})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(g,{...e})}):g(e)}},28453:(e,s,a)=>{a.d(s,{R:()=>t,x:()=>n});var o=a(296540);const c={},r=o.createContext(c);function t(e){const s=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function n(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),o.createElement(r.Provider,{value:s},e.children)}}}]);