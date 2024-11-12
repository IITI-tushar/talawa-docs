"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[653613],{471833:(e,n,o)=>{o.r(n),o.d(n,{Badge:()=>u,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>r,metadata:()=>t,toc:()=>g});const t=JSON.parse('{"id":"schema/mutations/remove-organization-custom-field","title":"removeOrganizationCustomField","description":"No description","source":"@site/docs/schema/mutations/remove-organization-custom-field.mdx","sourceDirName":"schema/mutations","slug":"/schema/mutations/remove-organization-custom-field","permalink":"/docs/schema/mutations/remove-organization-custom-field","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/mutations/remove-organization-custom-field.mdx","tags":[],"version":"current","frontMatter":{"id":"remove-organization-custom-field","title":"removeOrganizationCustomField","hide_table_of_contents":false},"sidebar":"schemaSidebar","previous":{"title":"removeMember","permalink":"/docs/schema/mutations/remove-member"},"next":{"title":"removeOrganizationImage","permalink":"/docs/schema/mutations/remove-organization-image"}}');var a=o(474848),s=o(28453),i=o(296540);const r={id:"remove-organization-custom-field",title:"removeOrganizationCustomField",hide_table_of_contents:!1},d=void 0,c={},l=()=>{const e={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const n={a:"a",...(0,s.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:"badge badge--"+e.class,children:e.text})})},h=({dataOpen:e,dataClose:n,children:o,startOpen:t=!1})=>{const r={details:"details",summary:"summary",...(0,s.R)()},[d,c]=(0,i.useState)(t);return(0,a.jsxs)(r.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(r.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&o]})},g=[{value:"Arguments",id:"arguments",level:3},{value:'<code>removeOrganizationCustomField.<b>organizationId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"removeorganizationcustomfieldorganizationidid--",level:4},{value:'<code>removeOrganizationCustomField.<b>customFieldId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"removeorganizationcustomfieldcustomfieldidid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>OrganizationCustomField</code> <Badge class="secondary"></Badge>',id:"organizationcustomfield-",level:4}];function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"No description"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"removeOrganizationCustomField(\n  organizationId: ID!\n  customFieldId: ID!\n): OrganizationCustomField!\n"})}),"\n",(0,a.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,a.jsxs)(n.h4,{id:"removeorganizationcustomfieldorganizationidid--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["removeOrganizationCustomField.",(0,a.jsx)("b",{children:"organizationId"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"../../../docs/schema/scalars/id",children:(0,a.jsx)(n.code,{children:"ID!"})})," ",(0,a.jsx)(u,{class:"secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"secondary",text:"scalar"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(n.h4,{id:"removeorganizationcustomfieldcustomfieldidid--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["removeOrganizationCustomField.",(0,a.jsx)("b",{children:"customFieldId"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"../../../docs/schema/scalars/id",children:(0,a.jsx)(n.code,{children:"ID!"})})," ",(0,a.jsx)(u,{class:"secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"secondary",text:"scalar"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,a.jsxs)(n.h4,{id:"organizationcustomfield-",children:[(0,a.jsx)(n.a,{href:"../../../docs/schema/objects/organization-custom-field",children:(0,a.jsx)(n.code,{children:"OrganizationCustomField"})})," ",(0,a.jsx)(u,{class:"secondary",text:"object"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>r});var t=o(296540);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);