"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[52344],{413438:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>x,Bullet:()=>i,Details:()=>u,SpecifiedBy:()=>h,assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>d,metadata:()=>s,toc:()=>j});const s=JSON.parse('{"id":"schema/mutations/create-donation","title":"createDonation","description":"No description","source":"@site/docs/schema/mutations/create-donation.mdx","sourceDirName":"schema/mutations","slug":"/schema/mutations/create-donation","permalink":"/docs/schema/mutations/create-donation","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/mutations/create-donation.mdx","tags":[],"version":"current","frontMatter":{"id":"create-donation","title":"createDonation","hide_table_of_contents":false},"sidebar":"schemaSidebar","previous":{"title":"createDirectChat","permalink":"/docs/schema/mutations/create-direct-chat"},"next":{"title":"createEventProject","permalink":"/docs/schema/mutations/create-event-project"}}');var t=a(474848),o=a(28453),c=a(296540);const d={id:"create-donation",title:"createDonation",hide_table_of_contents:!1},r=void 0,l={},i=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),h=e=>(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),x=e=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{className:"badge badge--"+e.class,children:e.text})}),u=({dataOpen:e,dataClose:n,children:a,startOpen:s=!1})=>{const[o,d]=(0,c.useState)(s);return(0,t.jsxs)("details",{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:o?e:n}),o&&a]})},j=[{value:"Arguments",id:"arguments",level:3},{value:'<code>createDonation.<b>userId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"createdonationuseridid--",level:4},{value:'<code>createDonation.<b>orgId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"createdonationorgidid--",level:4},{value:'<code>createDonation.<b>payPalId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"createdonationpaypalidid--",level:4},{value:'<code>createDonation.<b>nameOfUser</b></code><Bullet></Bullet><code>String!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"createdonationnameofuserstring--",level:4},{value:'<code>createDonation.<b>amount</b></code><Bullet></Bullet><code>Float!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"createdonationamountfloat--",level:4},{value:'<code>createDonation.<b>nameOfOrg</b></code><Bullet></Bullet><code>String!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"createdonationnameoforgstring--",level:4},{value:"Type",id:"type",level:3},{value:'<code>Donation</code> <Badge class="secondary"></Badge>',id:"donation-",level:4}];function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"No description"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"createDonation(\n  userId: ID!\n  orgId: ID!\n  payPalId: ID!\n  nameOfUser: String!\n  amount: Float!\n  nameOfOrg: String!\n): Donation!\n"})}),"\n",(0,t.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(n.h4,{id:"createdonationuseridid--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["createDonation.",(0,t.jsx)("b",{children:"userId"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(n.a,{href:"../../../docs/schema/scalars/id",children:(0,t.jsx)(n.code,{children:"ID!"})})," ",(0,t.jsx)(x,{class:"secondary",text:"non-null"})," ",(0,t.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(n.h4,{id:"createdonationorgidid--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["createDonation.",(0,t.jsx)("b",{children:"orgId"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(n.a,{href:"../../../docs/schema/scalars/id",children:(0,t.jsx)(n.code,{children:"ID!"})})," ",(0,t.jsx)(x,{class:"secondary",text:"non-null"})," ",(0,t.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(n.h4,{id:"createdonationpaypalidid--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["createDonation.",(0,t.jsx)("b",{children:"payPalId"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(n.a,{href:"../../../docs/schema/scalars/id",children:(0,t.jsx)(n.code,{children:"ID!"})})," ",(0,t.jsx)(x,{class:"secondary",text:"non-null"})," ",(0,t.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(n.h4,{id:"createdonationnameofuserstring--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["createDonation.",(0,t.jsx)("b",{children:"nameOfUser"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(n.a,{href:"../../../docs/schema/scalars/string",children:(0,t.jsx)(n.code,{children:"String!"})})," ",(0,t.jsx)(x,{class:"secondary",text:"non-null"})," ",(0,t.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(n.h4,{id:"createdonationamountfloat--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["createDonation.",(0,t.jsx)("b",{children:"amount"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(n.a,{href:"../../../docs/schema/scalars/float",children:(0,t.jsx)(n.code,{children:"Float!"})})," ",(0,t.jsx)(x,{class:"secondary",text:"non-null"})," ",(0,t.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(n.h4,{id:"createdonationnameoforgstring--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["createDonation.",(0,t.jsx)("b",{children:"nameOfOrg"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(n.a,{href:"../../../docs/schema/scalars/string",children:(0,t.jsx)(n.code,{children:"String!"})})," ",(0,t.jsx)(x,{class:"secondary",text:"non-null"})," ",(0,t.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,t.jsxs)(n.h4,{id:"donation-",children:[(0,t.jsx)(n.a,{href:"../../../docs/schema/objects/donation",children:(0,t.jsx)(n.code,{children:"Donation"})})," ",(0,t.jsx)(x,{class:"secondary",text:"object"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>c,x:()=>d});var s=a(296540);const t={},o=s.createContext(t);function c(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);