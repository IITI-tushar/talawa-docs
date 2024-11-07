"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[58979],{70700:(e,n,o)=>{o.r(n),o.d(n,{Badge:()=>p,Bullet:()=>l,Details:()=>u,SpecifiedBy:()=>h,assets:()=>d,contentTitle:()=>a,default:()=>g,frontMatter:()=>c,metadata:()=>r,toc:()=>x});var s=o(785893),t=o(511151),i=o(667294);const c={id:"posts-by-organization-connection",title:"postsByOrganizationConnection",hide_table_of_contents:!1},a=void 0,r={id:"schema/queries/posts-by-organization-connection",title:"postsByOrganizationConnection",description:"No description",source:"@site/docs/schema/queries/posts-by-organization-connection.mdx",sourceDirName:"schema/queries",slug:"/schema/queries/posts-by-organization-connection",permalink:"/docs/schema/queries/posts-by-organization-connection",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/queries/posts-by-organization-connection.mdx",tags:[],version:"current",frontMatter:{id:"posts-by-organization-connection",title:"postsByOrganizationConnection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"post",permalink:"/docs/schema/queries/post"},next:{title:"postsByOrganization",permalink:"/docs/schema/queries/posts-by-organization"}},d={},l=()=>{const e={span:"span",...(0,t.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,t.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,t.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:"badge badge--"+e.class,children:e.text})})},u=({dataOpen:e,dataClose:n,children:o,startOpen:c=!1})=>{const a={details:"details",summary:"summary",...(0,t.a)()},[r,d]=(0,i.useState)(c);return(0,s.jsxs)(a.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(a.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:r?e:n}),r&&o]})},x=[{value:"Arguments",id:"arguments",level:3},{value:'<code>postsByOrganizationConnection.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"postsbyorganizationconnectionidid--",level:4},{value:'<code>postsByOrganizationConnection.<b>where</b></code><Bullet></Bullet><code>PostWhereInput</code> <Badge class="secondary"></Badge>',id:"postsbyorganizationconnectionwherepostwhereinput-",level:4},{value:'<code>postsByOrganizationConnection.<b>first</b></code><Bullet></Bullet><code>Int</code> <Badge class="secondary"></Badge>',id:"postsbyorganizationconnectionfirstint-",level:4},{value:'<code>postsByOrganizationConnection.<b>skip</b></code><Bullet></Bullet><code>Int</code> <Badge class="secondary"></Badge>',id:"postsbyorganizationconnectionskipint-",level:4},{value:'<code>postsByOrganizationConnection.<b>orderBy</b></code><Bullet></Bullet><code>PostOrderByInput</code> <Badge class="secondary"></Badge>',id:"postsbyorganizationconnectionorderbypostorderbyinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>PostConnection</code> <Badge class="secondary"></Badge>',id:"postconnection-",level:4}];function y(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"No description"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"postsByOrganizationConnection(\n  id: ID!\n  where: PostWhereInput\n  first: Int\n  skip: Int\n  orderBy: PostOrderByInput\n): PostConnection\n"})}),"\n",(0,s.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(n.h4,{id:"postsbyorganizationconnectionidid--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["postsByOrganizationConnection.",(0,s.jsx)("b",{children:"id"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"../../../docs/schema/scalars/id",children:(0,s.jsx)(n.code,{children:"ID!"})})," ",(0,s.jsx)(p,{class:"secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(n.h4,{id:"postsbyorganizationconnectionwherepostwhereinput-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["postsByOrganizationConnection.",(0,s.jsx)("b",{children:"where"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"../../../docs/schema/inputs/post-where-input",children:(0,s.jsx)(n.code,{children:"PostWhereInput"})})," ",(0,s.jsx)(p,{class:"secondary",text:"input"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(n.h4,{id:"postsbyorganizationconnectionfirstint-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["postsByOrganizationConnection.",(0,s.jsx)("b",{children:"first"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"../../../docs/schema/scalars/int",children:(0,s.jsx)(n.code,{children:"Int"})})," ",(0,s.jsx)(p,{class:"secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(n.h4,{id:"postsbyorganizationconnectionskipint-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["postsByOrganizationConnection.",(0,s.jsx)("b",{children:"skip"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"../../../docs/schema/scalars/int",children:(0,s.jsx)(n.code,{children:"Int"})})," ",(0,s.jsx)(p,{class:"secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(n.h4,{id:"postsbyorganizationconnectionorderbypostorderbyinput-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["postsByOrganizationConnection.",(0,s.jsx)("b",{children:"orderBy"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"../../../docs/schema/enums/post-order-by-input",children:(0,s.jsx)(n.code,{children:"PostOrderByInput"})})," ",(0,s.jsx)(p,{class:"secondary",text:"enum"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,s.jsxs)(n.h4,{id:"postconnection-",children:[(0,s.jsx)(n.a,{href:"../../../docs/schema/objects/post-connection",children:(0,s.jsx)(n.code,{children:"PostConnection"})})," ",(0,s.jsx)(p,{class:"secondary",text:"object"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"A connection to a list of items."}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(y,{...e})}):y(e)}},511151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>c});var s=o(667294);const t={},i=s.createContext(t);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);