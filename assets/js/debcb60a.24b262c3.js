"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[202974],{810497:(e,s,n)=>{n.r(s),n.d(s,{Badge:()=>h,Bullet:()=>o,Details:()=>p,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>d,metadata:()=>a,toc:()=>x});const a=JSON.parse('{"id":"schema/inputs/user-input","title":"UserInput","description":"No description","source":"@site/docs/schema/inputs/user-input.mdx","sourceDirName":"schema/inputs","slug":"/schema/inputs/user-input","permalink":"/docs/schema/inputs/user-input","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/inputs/user-input.mdx","tags":[],"version":"current","frontMatter":{"id":"user-input","title":"UserInput","hide_table_of_contents":false},"sidebar":"schemaSidebar","previous":{"title":"UserAndOrganizationInput","permalink":"/docs/schema/inputs/user-and-organization-input"},"next":{"title":"UserTagsConnectionInput","permalink":"/docs/schema/inputs/user-tags-connection-input"}}');var t=n(474848),r=n(28453),l=n(296540);const d={id:"user-input",title:"UserInput",hide_table_of_contents:!1},c=void 0,i={},o=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),u=e=>(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),h=e=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{className:"badge badge--"+e.class,children:e.text})}),p=({dataOpen:e,dataClose:s,children:n,startOpen:a=!1})=>{const[r,d]=(0,l.useState)(a);return(0,t.jsxs)("details",{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:r?e:s}),r&&n]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>UserInput.<b>firstName</b></code><Bullet></Bullet><code>String!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"userinputfirstnamestring--",level:4},{value:'<code>UserInput.<b>lastName</b></code><Bullet></Bullet><code>String!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"userinputlastnamestring--",level:4},{value:'<code>UserInput.<b>email</b></code><Bullet></Bullet><code>EmailAddress!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"userinputemailemailaddress--",level:4},{value:'<code>UserInput.<b>password</b></code><Bullet></Bullet><code>String!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"userinputpasswordstring--",level:4},{value:'<code>UserInput.<b>appLanguageCode</b></code><Bullet></Bullet><code>String</code> <Badge class="secondary"></Badge>',id:"userinputapplanguagecodestring-",level:4},{value:'<code>UserInput.<b>organizationUserBelongsToId</b></code><Bullet></Bullet><code>ID</code> <Badge class="secondary"></Badge>',id:"userinputorganizationuserbelongstoidid-",level:4},{value:"Member of",id:"member-of",level:3}];function g(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"No description"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:"input UserInput {\n  firstName: String!\n  lastName: String!\n  email: EmailAddress!\n  password: String!\n  appLanguageCode: String\n  organizationUserBelongsToId: ID\n}\n"})}),"\n",(0,t.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(s.h4,{id:"userinputfirstnamestring--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["UserInput.",(0,t.jsx)("b",{children:"firstName"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/scalars/string",children:(0,t.jsx)(s.code,{children:"String!"})})," ",(0,t.jsx)(h,{class:"secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(s.h4,{id:"userinputlastnamestring--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["UserInput.",(0,t.jsx)("b",{children:"lastName"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/scalars/string",children:(0,t.jsx)(s.code,{children:"String!"})})," ",(0,t.jsx)(h,{class:"secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(s.h4,{id:"userinputemailemailaddress--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["UserInput.",(0,t.jsx)("b",{children:"email"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/scalars/email-address",children:(0,t.jsx)(s.code,{children:"EmailAddress!"})})," ",(0,t.jsx)(h,{class:"secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(s.h4,{id:"userinputpasswordstring--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["UserInput.",(0,t.jsx)("b",{children:"password"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/scalars/string",children:(0,t.jsx)(s.code,{children:"String!"})})," ",(0,t.jsx)(h,{class:"secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(s.h4,{id:"userinputapplanguagecodestring-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["UserInput.",(0,t.jsx)("b",{children:"appLanguageCode"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/scalars/string",children:(0,t.jsx)(s.code,{children:"String"})})," ",(0,t.jsx)(h,{class:"secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(s.h4,{id:"userinputorganizationuserbelongstoidid-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["UserInput.",(0,t.jsx)("b",{children:"organizationUserBelongsToId"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/scalars/id",children:(0,t.jsx)(s.code,{children:"ID"})})," ",(0,t.jsx)(h,{class:"secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.blockquote,{children:"\n"}),"\n",(0,t.jsx)(s.h3,{id:"member-of",children:"Member of"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"../../../docs/schema/mutations/sign-up",children:(0,t.jsx)(s.code,{children:"signUp"})})," ",(0,t.jsx)(h,{class:"secondary",text:"mutation"})]})]})}function m(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>d});var a=n(296540);const t={},r=a.createContext(t);function l(e){const s=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);