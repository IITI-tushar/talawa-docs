"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[12262],{617169:(e,s,l)=>{l.r(s),l.d(s,{Badge:()=>h,Bullet:()=>r,Details:()=>g,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>i,default:()=>j,frontMatter:()=>c,metadata:()=>n,toc:()=>x});const n=JSON.parse('{"id":"schema/objects/plugin-field","title":"PluginField","description":"No description","source":"@site/docs/schema/objects/plugin-field.mdx","sourceDirName":"schema/objects","slug":"/schema/objects/plugin-field","permalink":"/docs/schema/objects/plugin-field","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/objects/plugin-field.mdx","tags":[],"version":"current","frontMatter":{"id":"plugin-field","title":"PluginField","hide_table_of_contents":false},"sidebar":"schemaSidebar","previous":{"title":"PageInfo","permalink":"/docs/schema/objects/page-info"},"next":{"title":"Plugin","permalink":"/docs/schema/objects/plugin"}}');var t=l(474848),a=l(28453),d=l(296540);const c={id:"plugin-field",title:"PluginField",hide_table_of_contents:!1},i=void 0,o={},r=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),u=e=>(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),h=e=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{className:"badge badge--"+e.class,children:e.text})}),g=({dataOpen:e,dataClose:s,children:l,startOpen:n=!1})=>{const[a,c]=(0,d.useState)(n);return(0,t.jsxs)("details",{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:a?e:s}),a&&l]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>PluginField.<b>key</b></code><Bullet></Bullet><code>String!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"pluginfieldkeystring--",level:4},{value:'<code>PluginField.<b>value</b></code><Bullet></Bullet><code>String!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"pluginfieldvaluestring--",level:4},{value:'<code>PluginField.<b>status</b></code><Bullet></Bullet><code>Status!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"pluginfieldstatusstatus--",level:4},{value:'<code>PluginField.<b>createdAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="secondary"></Badge>',id:"pluginfieldcreatedatdatetime-",level:4}];function f(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"No description"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:"type PluginField {\n  key: String!\n  value: String!\n  status: Status!\n  createdAt: DateTime\n}\n"})}),"\n",(0,t.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(s.h4,{id:"pluginfieldkeystring--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PluginField.",(0,t.jsx)("b",{children:"key"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/scalars/string",children:(0,t.jsx)(s.code,{children:"String!"})})," ",(0,t.jsx)(h,{class:"secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(s.h4,{id:"pluginfieldvaluestring--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PluginField.",(0,t.jsx)("b",{children:"value"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/scalars/string",children:(0,t.jsx)(s.code,{children:"String!"})})," ",(0,t.jsx)(h,{class:"secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(s.h4,{id:"pluginfieldstatusstatus--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PluginField.",(0,t.jsx)("b",{children:"status"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/enums/status",children:(0,t.jsx)(s.code,{children:"Status!"})})," ",(0,t.jsx)(h,{class:"secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"secondary",text:"enum"})]}),"\n",(0,t.jsx)(s.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(s.h4,{id:"pluginfieldcreatedatdatetime-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PluginField.",(0,t.jsx)("b",{children:"createdAt"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/scalars/date-time",children:(0,t.jsx)(s.code,{children:"DateTime"})})," ",(0,t.jsx)(h,{class:"secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.blockquote,{children:"\n"})]})}function j(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},28453:(e,s,l)=>{l.d(s,{R:()=>d,x:()=>c});var n=l(296540);const t={},a=n.createContext(t);function d(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);