"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[302929],{764981:(e,s,n)=>{n.r(s),n.d(s,{Badge:()=>h,Bullet:()=>a,Details:()=>x,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"schema/queries/users-connection","title":"usersConnection","description":"No description","source":"@site/docs/schema/queries/users-connection.mdx","sourceDirName":"schema/queries","slug":"/schema/queries/users-connection","permalink":"/docs/schema/queries/users-connection","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/queries/users-connection.mdx","tags":[],"version":"current","frontMatter":{"id":"users-connection","title":"usersConnection","hide_table_of_contents":false},"sidebar":"schemaSidebar","previous":{"title":"user","permalink":"/docs/schema/queries/user"},"next":{"title":"users","permalink":"/docs/schema/queries/users"}}');var c=n(474848),t=n(28453),o=n(296540);const i={id:"users-connection",title:"usersConnection",hide_table_of_contents:!1},d=void 0,l={},a=()=>(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),u=e=>(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),h=e=>(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("span",{className:"badge badge--"+e.class,children:e.text})}),x=({dataOpen:e,dataClose:s,children:n,startOpen:r=!1})=>{const[t,i]=(0,o.useState)(r);return(0,c.jsxs)("details",{...t?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:t?e:s}),t&&n]})},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code>usersConnection.<b>where</b></code><Bullet></Bullet><code>UserWhereInput</code> <Badge class="secondary"></Badge>',id:"usersconnectionwhereuserwhereinput-",level:4},{value:'<code>usersConnection.<b>first</b></code><Bullet></Bullet><code>Int</code> <Badge class="secondary"></Badge>',id:"usersconnectionfirstint-",level:4},{value:'<code>usersConnection.<b>skip</b></code><Bullet></Bullet><code>Int</code> <Badge class="secondary"></Badge>',id:"usersconnectionskipint-",level:4},{value:'<code>usersConnection.<b>orderBy</b></code><Bullet></Bullet><code>UserOrderByInput</code> <Badge class="secondary"></Badge>',id:"usersconnectionorderbyuserorderbyinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>User</code> <Badge class="secondary"></Badge>',id:"user-",level:4}];function j(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.p,{children:"No description"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-graphql",children:"usersConnection(\n  where: UserWhereInput\n  first: Int\n  skip: Int\n  orderBy: UserOrderByInput\n): [User]!\n"})}),"\n",(0,c.jsx)(s.h3,{id:"arguments",children:"Arguments"}),"\n",(0,c.jsxs)(s.h4,{id:"usersconnectionwhereuserwhereinput-",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["usersConnection.",(0,c.jsx)("b",{children:"where"})]})}),(0,c.jsx)(a,{}),(0,c.jsx)(s.a,{href:"../../../docs/schema/inputs/user-where-input",children:(0,c.jsx)(s.code,{children:"UserWhereInput"})})," ",(0,c.jsx)(h,{class:"secondary",text:"input"})]}),"\n",(0,c.jsx)(s.blockquote,{children:"\n"}),"\n",(0,c.jsxs)(s.h4,{id:"usersconnectionfirstint-",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["usersConnection.",(0,c.jsx)("b",{children:"first"})]})}),(0,c.jsx)(a,{}),(0,c.jsx)(s.a,{href:"../../../docs/schema/scalars/int",children:(0,c.jsx)(s.code,{children:"Int"})})," ",(0,c.jsx)(h,{class:"secondary",text:"scalar"})]}),"\n",(0,c.jsx)(s.blockquote,{children:"\n"}),"\n",(0,c.jsxs)(s.h4,{id:"usersconnectionskipint-",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["usersConnection.",(0,c.jsx)("b",{children:"skip"})]})}),(0,c.jsx)(a,{}),(0,c.jsx)(s.a,{href:"../../../docs/schema/scalars/int",children:(0,c.jsx)(s.code,{children:"Int"})})," ",(0,c.jsx)(h,{class:"secondary",text:"scalar"})]}),"\n",(0,c.jsx)(s.blockquote,{children:"\n"}),"\n",(0,c.jsxs)(s.h4,{id:"usersconnectionorderbyuserorderbyinput-",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["usersConnection.",(0,c.jsx)("b",{children:"orderBy"})]})}),(0,c.jsx)(a,{}),(0,c.jsx)(s.a,{href:"../../../docs/schema/enums/user-order-by-input",children:(0,c.jsx)(s.code,{children:"UserOrderByInput"})})," ",(0,c.jsx)(h,{class:"secondary",text:"enum"})]}),"\n",(0,c.jsx)(s.blockquote,{children:"\n"}),"\n",(0,c.jsx)(s.h3,{id:"type",children:"Type"}),"\n",(0,c.jsxs)(s.h4,{id:"user-",children:[(0,c.jsx)(s.a,{href:"../../../docs/schema/objects/user",children:(0,c.jsx)(s.code,{children:"User"})})," ",(0,c.jsx)(h,{class:"secondary",text:"object"})]}),"\n",(0,c.jsx)(s.blockquote,{children:"\n"})]})}function m(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(j,{...e})}):j(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>i});var r=n(296540);const c={},t=r.createContext(c);function o(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);