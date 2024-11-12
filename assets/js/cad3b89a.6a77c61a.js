"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[11468],{522980:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>h,Bullet:()=>r,Details:()=>p,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>i,default:()=>j,frontMatter:()=>d,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"schema/objects/post-connection","title":"PostConnection","description":"A connection to a list of items.","source":"@site/docs/schema/objects/post-connection.mdx","sourceDirName":"schema/objects","slug":"/schema/objects/post-connection","permalink":"/docs/schema/objects/post-connection","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/objects/post-connection.mdx","tags":[],"version":"current","frontMatter":{"id":"post-connection","title":"PostConnection","hide_table_of_contents":false},"sidebar":"schemaSidebar","previous":{"title":"Plugin","permalink":"/docs/schema/objects/plugin"},"next":{"title":"Post","permalink":"/docs/schema/objects/post"}}');var t=s(474848),c=s(28453),a=s(296540);const d={id:"post-connection",title:"PostConnection",hide_table_of_contents:!1},i=void 0,l={},r=()=>{const e={span:"span",...(0,c.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const n={a:"a",...(0,c.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,c.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:"badge badge--"+e.class,children:e.text})})},p=({dataOpen:e,dataClose:n,children:s,startOpen:o=!1})=>{const d={details:"details",summary:"summary",...(0,c.R)()},[i,l]=(0,a.useState)(o);return(0,t.jsxs)(d.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(d.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&s]})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>PostConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"postconnectionpageinfopageinfo--",level:4},{value:'<code>PostConnection.<b>edges</b></code><Bullet></Bullet><code>[Post]!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"postconnectionedgespost--",level:4},{value:'<code>PostConnection.<b>aggregate</b></code><Bullet></Bullet><code>AggregatePost!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"postconnectionaggregateaggregatepost--",level:4},{value:"Returned by",id:"returned-by",level:3}];function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"A connection to a list of items."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"type PostConnection {\n  pageInfo: PageInfo!\n  edges: [Post]!\n  aggregate: AggregatePost!\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"postconnectionpageinfopageinfo--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PostConnection.",(0,t.jsx)("b",{children:"pageInfo"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(n.a,{href:"../../../docs/schema/objects/page-info",children:(0,t.jsx)(n.code,{children:"PageInfo!"})})," ",(0,t.jsx)(h,{class:"secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"secondary",text:"object"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Information to aid in pagination."}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"postconnectionedgespost--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PostConnection.",(0,t.jsx)("b",{children:"edges"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(n.a,{href:"../../../docs/schema/objects/post",children:(0,t.jsx)(n.code,{children:"[Post]!"})})," ",(0,t.jsx)(h,{class:"secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"secondary",text:"object"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"A list of edges."}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"postconnectionaggregateaggregatepost--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PostConnection.",(0,t.jsx)("b",{children:"aggregate"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(n.a,{href:"../../../docs/schema/objects/aggregate-post",children:(0,t.jsx)(n.code,{children:"AggregatePost!"})})," ",(0,t.jsx)(h,{class:"secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"secondary",text:"object"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsx)(n.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"../../../docs/schema/queries/posts-by-organization-connection",children:(0,t.jsx)(n.code,{children:"postsByOrganizationConnection"})})," ",(0,t.jsx)(h,{class:"secondary",text:"query"})]})]})}function j(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>d});var o=s(296540);const t={},c=o.createContext(t);function a(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);