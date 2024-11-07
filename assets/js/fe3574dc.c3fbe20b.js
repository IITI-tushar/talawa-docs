"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[413115],{489528:(e,s,n)=>{n.r(s),n.d(s,{Badge:()=>h,Bullet:()=>o,Details:()=>g,SpecifiedBy:()=>u,assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>i,toc:()=>x});var l=n(785893),t=n(511151),a=n(667294);const d={id:"plugin-field",title:"PluginField",hide_table_of_contents:!1},c=void 0,i={id:"schema/objects/plugin-field",title:"PluginField",description:"No description",source:"@site/docs/schema/objects/plugin-field.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/plugin-field",permalink:"/docs/schema/objects/plugin-field",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/objects/plugin-field.mdx",tags:[],version:"current",frontMatter:{id:"plugin-field",title:"PluginField",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PageInfo",permalink:"/docs/schema/objects/page-info"},next:{title:"Plugin",permalink:"/docs/schema/objects/plugin"}},r={},o=()=>{const e={span:"span",...(0,t.a)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const s={a:"a",...(0,t.a)()};return(0,l.jsxs)(l.Fragment,{children:["Specification",(0,l.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const s={span:"span",...(0,t.a)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(s.span,{className:"badge badge--"+e.class,children:e.text})})},g=({dataOpen:e,dataClose:s,children:n,startOpen:d=!1})=>{const c={details:"details",summary:"summary",...(0,t.a)()},[i,r]=(0,a.useState)(d);return(0,l.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,l.jsx)(c.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:i?e:s}),i&&n]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>PluginField.<b>key</b></code><Bullet></Bullet><code>String!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"pluginfieldkeystring--",level:4},{value:'<code>PluginField.<b>value</b></code><Bullet></Bullet><code>String!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"pluginfieldvaluestring--",level:4},{value:'<code>PluginField.<b>status</b></code><Bullet></Bullet><code>Status!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"pluginfieldstatusstatus--",level:4},{value:'<code>PluginField.<b>createdAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="secondary"></Badge>',id:"pluginfieldcreatedatdatetime-",level:4}];function j(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.p,{children:"No description"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-graphql",children:"type PluginField {\n  key: String!\n  value: String!\n  status: Status!\n  createdAt: DateTime\n}\n"})}),"\n",(0,l.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,l.jsxs)(s.h4,{id:"pluginfieldkeystring--",children:[(0,l.jsx)(s.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["PluginField.",(0,l.jsx)("b",{children:"key"})]})}),(0,l.jsx)(o,{}),(0,l.jsx)(s.a,{href:"../../../docs/schema/scalars/string",children:(0,l.jsx)(s.code,{children:"String!"})})," ",(0,l.jsx)(h,{class:"secondary",text:"non-null"})," ",(0,l.jsx)(h,{class:"secondary",text:"scalar"})]}),"\n",(0,l.jsx)(s.blockquote,{children:"\n"}),"\n",(0,l.jsxs)(s.h4,{id:"pluginfieldvaluestring--",children:[(0,l.jsx)(s.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["PluginField.",(0,l.jsx)("b",{children:"value"})]})}),(0,l.jsx)(o,{}),(0,l.jsx)(s.a,{href:"../../../docs/schema/scalars/string",children:(0,l.jsx)(s.code,{children:"String!"})})," ",(0,l.jsx)(h,{class:"secondary",text:"non-null"})," ",(0,l.jsx)(h,{class:"secondary",text:"scalar"})]}),"\n",(0,l.jsx)(s.blockquote,{children:"\n"}),"\n",(0,l.jsxs)(s.h4,{id:"pluginfieldstatusstatus--",children:[(0,l.jsx)(s.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["PluginField.",(0,l.jsx)("b",{children:"status"})]})}),(0,l.jsx)(o,{}),(0,l.jsx)(s.a,{href:"../../../docs/schema/enums/status",children:(0,l.jsx)(s.code,{children:"Status!"})})," ",(0,l.jsx)(h,{class:"secondary",text:"non-null"})," ",(0,l.jsx)(h,{class:"secondary",text:"enum"})]}),"\n",(0,l.jsx)(s.blockquote,{children:"\n"}),"\n",(0,l.jsxs)(s.h4,{id:"pluginfieldcreatedatdatetime-",children:[(0,l.jsx)(s.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["PluginField.",(0,l.jsx)("b",{children:"createdAt"})]})}),(0,l.jsx)(o,{}),(0,l.jsx)(s.a,{href:"../../../docs/schema/scalars/date-time",children:(0,l.jsx)(s.code,{children:"DateTime"})})," ",(0,l.jsx)(h,{class:"secondary",text:"scalar"})]}),"\n",(0,l.jsx)(s.blockquote,{children:"\n"})]})}function p(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(j,{...e})}):j(e)}},511151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>d});var l=n(667294);const t={},a=l.createContext(t);function d(e){const s=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),l.createElement(a.Provider,{value:s},e.children)}}}]);