"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[912442],{783216:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>g,Bullet:()=>i,Details:()=>h,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>t,toc:()=>x});const t=JSON.parse('{"id":"schema/objects/user-connection","title":"UserConnection","description":"No description","source":"@site/docs/schema/objects/user-connection.mdx","sourceDirName":"schema/objects","slug":"/schema/objects/user-connection","permalink":"/docs/schema/objects/user-connection","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/objects/user-connection.mdx","tags":[],"version":"current","frontMatter":{"id":"user-connection","title":"UserConnection","hide_table_of_contents":false},"sidebar":"schemaSidebar","previous":{"title":"UserAttende","permalink":"/docs/schema/objects/user-attende"},"next":{"title":"UserCustomData","permalink":"/docs/schema/objects/user-custom-data"}}');var o=s(474848),c=s(28453),r=s(296540);const a={id:"user-connection",title:"UserConnection",hide_table_of_contents:!1},d=void 0,l={},i=()=>{const e={span:"span",...(0,c.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,c.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const n={span:"span",...(0,c.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.span,{className:"badge badge--"+e.class,children:e.text})})},h=({dataOpen:e,dataClose:n,children:s,startOpen:t=!1})=>{const a={details:"details",summary:"summary",...(0,c.R)()},[d,l]=(0,r.useState)(t);return(0,o.jsxs)(a.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(a.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&s]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>UserConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"userconnectionpageinfopageinfo--",level:4},{value:'<code>UserConnection.<b>edges</b></code><Bullet></Bullet><code>[User]!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"userconnectionedgesuser--",level:4},{value:'<code>UserConnection.<b>aggregate</b></code><Bullet></Bullet><code>AggregateUser!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"userconnectionaggregateaggregateuser--",level:4},{value:"Returned by",id:"returned-by",level:3}];function j(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"No description"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"type UserConnection {\n  pageInfo: PageInfo!\n  edges: [User]!\n  aggregate: AggregateUser!\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(n.h4,{id:"userconnectionpageinfopageinfo--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["UserConnection.",(0,o.jsx)("b",{children:"pageInfo"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(n.a,{href:"../../../docs/schema/objects/page-info",children:(0,o.jsx)(n.code,{children:"PageInfo!"})})," ",(0,o.jsx)(g,{class:"secondary",text:"non-null"})," ",(0,o.jsx)(g,{class:"secondary",text:"object"})]}),"\n",(0,o.jsx)(n.blockquote,{children:"\n"}),"\n",(0,o.jsxs)(n.h4,{id:"userconnectionedgesuser--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["UserConnection.",(0,o.jsx)("b",{children:"edges"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(n.a,{href:"../../../docs/schema/objects/user",children:(0,o.jsx)(n.code,{children:"[User]!"})})," ",(0,o.jsx)(g,{class:"secondary",text:"non-null"})," ",(0,o.jsx)(g,{class:"secondary",text:"object"})]}),"\n",(0,o.jsx)(n.blockquote,{children:"\n"}),"\n",(0,o.jsxs)(n.h4,{id:"userconnectionaggregateaggregateuser--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["UserConnection.",(0,o.jsx)("b",{children:"aggregate"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(n.a,{href:"../../../docs/schema/objects/aggregate-user",children:(0,o.jsx)(n.code,{children:"AggregateUser!"})})," ",(0,o.jsx)(g,{class:"secondary",text:"non-null"})," ",(0,o.jsx)(g,{class:"secondary",text:"object"})]}),"\n",(0,o.jsx)(n.blockquote,{children:"\n"}),"\n",(0,o.jsx)(n.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"../../../docs/schema/queries/organizations-member-connection",children:(0,o.jsx)(n.code,{children:"organizationsMemberConnection"})})," ",(0,o.jsx)(g,{class:"secondary",text:"query"})]})]})}function m(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(j,{...e})}):j(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(296540);const o={},c=t.createContext(o);function r(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);