"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[95745],{424174:(e,n,o)=>{o.r(n),o.d(n,{Badge:()=>g,Bullet:()=>l,Details:()=>u,SpecifiedBy:()=>h,assets:()=>r,contentTitle:()=>a,default:()=>j,frontMatter:()=>d,metadata:()=>t,toc:()=>x});const t=JSON.parse('{"id":"schema/queries/get-donation-by-org-id-connection","title":"getDonationByOrgIdConnection","description":"No description","source":"@site/docs/schema/queries/get-donation-by-org-id-connection.mdx","sourceDirName":"schema/queries","slug":"/schema/queries/get-donation-by-org-id-connection","permalink":"/docs/schema/queries/get-donation-by-org-id-connection","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/queries/get-donation-by-org-id-connection.mdx","tags":[],"version":"current","frontMatter":{"id":"get-donation-by-org-id-connection","title":"getDonationByOrgIdConnection","hide_table_of_contents":false},"sidebar":"schemaSidebar","previous":{"title":"getDonationById","permalink":"/docs/schema/queries/get-donation-by-id"},"next":{"title":"getDonationByOrgId","permalink":"/docs/schema/queries/get-donation-by-org-id"}}');var i=o(474848),s=o(28453),c=o(296540);const d={id:"get-donation-by-org-id-connection",title:"getDonationByOrgIdConnection",hide_table_of_contents:!1},a=void 0,r={},l=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),h=e=>(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),g=e=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{className:"badge badge--"+e.class,children:e.text})}),u=({dataOpen:e,dataClose:n,children:o,startOpen:t=!1})=>{const[s,d]=(0,c.useState)(t);return(0,i.jsxs)("details",{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:s?e:n}),s&&o]})},x=[{value:"Arguments",id:"arguments",level:3},{value:'<code>getDonationByOrgIdConnection.<b>orgId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"getdonationbyorgidconnectionorgidid--",level:4},{value:'<code>getDonationByOrgIdConnection.<b>where</b></code><Bullet></Bullet><code>DonationWhereInput</code> <Badge class="secondary"></Badge>',id:"getdonationbyorgidconnectionwheredonationwhereinput-",level:4},{value:'<code>getDonationByOrgIdConnection.<b>first</b></code><Bullet></Bullet><code>Int</code> <Badge class="secondary"></Badge>',id:"getdonationbyorgidconnectionfirstint-",level:4},{value:'<code>getDonationByOrgIdConnection.<b>skip</b></code><Bullet></Bullet><code>Int</code> <Badge class="secondary"></Badge>',id:"getdonationbyorgidconnectionskipint-",level:4},{value:"Type",id:"type",level:3},{value:'<code>Donation</code> <Badge class="secondary"></Badge>',id:"donation-",level:4}];function y(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"No description"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"getDonationByOrgIdConnection(\n  orgId: ID!\n  where: DonationWhereInput\n  first: Int\n  skip: Int\n): [Donation!]!\n"})}),"\n",(0,i.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,i.jsxs)(n.h4,{id:"getdonationbyorgidconnectionorgidid--",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["getDonationByOrgIdConnection.",(0,i.jsx)("b",{children:"orgId"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(n.a,{href:"../../../docs/schema/scalars/id",children:(0,i.jsx)(n.code,{children:"ID!"})})," ",(0,i.jsx)(g,{class:"secondary",text:"non-null"})," ",(0,i.jsx)(g,{class:"secondary",text:"scalar"})]}),"\n",(0,i.jsx)(n.blockquote,{children:"\n"}),"\n",(0,i.jsxs)(n.h4,{id:"getdonationbyorgidconnectionwheredonationwhereinput-",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["getDonationByOrgIdConnection.",(0,i.jsx)("b",{children:"where"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(n.a,{href:"../../../docs/schema/inputs/donation-where-input",children:(0,i.jsx)(n.code,{children:"DonationWhereInput"})})," ",(0,i.jsx)(g,{class:"secondary",text:"input"})]}),"\n",(0,i.jsx)(n.blockquote,{children:"\n"}),"\n",(0,i.jsxs)(n.h4,{id:"getdonationbyorgidconnectionfirstint-",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["getDonationByOrgIdConnection.",(0,i.jsx)("b",{children:"first"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(n.a,{href:"../../../docs/schema/scalars/int",children:(0,i.jsx)(n.code,{children:"Int"})})," ",(0,i.jsx)(g,{class:"secondary",text:"scalar"})]}),"\n",(0,i.jsx)(n.blockquote,{children:"\n"}),"\n",(0,i.jsxs)(n.h4,{id:"getdonationbyorgidconnectionskipint-",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["getDonationByOrgIdConnection.",(0,i.jsx)("b",{children:"skip"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(n.a,{href:"../../../docs/schema/scalars/int",children:(0,i.jsx)(n.code,{children:"Int"})})," ",(0,i.jsx)(g,{class:"secondary",text:"scalar"})]}),"\n",(0,i.jsx)(n.blockquote,{children:"\n"}),"\n",(0,i.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,i.jsxs)(n.h4,{id:"donation-",children:[(0,i.jsx)(n.a,{href:"../../../docs/schema/objects/donation",children:(0,i.jsx)(n.code,{children:"Donation"})})," ",(0,i.jsx)(g,{class:"secondary",text:"object"})]}),"\n",(0,i.jsx)(n.blockquote,{children:"\n"})]})}function j(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(y,{...e})}):y(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>d});var t=o(296540);const i={},s=t.createContext(i);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);