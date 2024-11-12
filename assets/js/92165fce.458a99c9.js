"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[853406],{971036:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>l,Details:()=>v,SpecifiedBy:()=>h,assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>x});const s=JSON.parse('{"id":"schema/queries/events-by-organization-connection","title":"eventsByOrganizationConnection","description":"No description","source":"@site/docs/schema/queries/events-by-organization-connection.mdx","sourceDirName":"schema/queries","slug":"/schema/queries/events-by-organization-connection","permalink":"/docs/schema/queries/events-by-organization-connection","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/queries/events-by-organization-connection.mdx","tags":[],"version":"current","frontMatter":{"id":"events-by-organization-connection","title":"eventsByOrganizationConnection","hide_table_of_contents":false},"sidebar":"schemaSidebar","previous":{"title":"event","permalink":"/docs/schema/queries/event"},"next":{"title":"eventsByOrganization","permalink":"/docs/schema/queries/events-by-organization"}}');var o=t(474848),i=t(28453),c=t(296540);const r={id:"events-by-organization-connection",title:"eventsByOrganizationConnection",hide_table_of_contents:!1},a=void 0,d={},l=()=>{const e={span:"span",...(0,i.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,i.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,i.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.span,{className:"badge badge--"+e.class,children:e.text})})},v=({dataOpen:e,dataClose:n,children:t,startOpen:s=!1})=>{const r={details:"details",summary:"summary",...(0,i.R)()},[a,d]=(0,c.useState)(s);return(0,o.jsxs)(r.details,{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(r.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:a?e:n}),a&&t]})},x=[{value:"Arguments",id:"arguments",level:3},{value:'<code>eventsByOrganizationConnection.<b>where</b></code><Bullet></Bullet><code>EventWhereInput</code> <Badge class="secondary"></Badge>',id:"eventsbyorganizationconnectionwhereeventwhereinput-",level:4},{value:'<code>eventsByOrganizationConnection.<b>first</b></code><Bullet></Bullet><code>Int</code> <Badge class="secondary"></Badge>',id:"eventsbyorganizationconnectionfirstint-",level:4},{value:'<code>eventsByOrganizationConnection.<b>skip</b></code><Bullet></Bullet><code>Int</code> <Badge class="secondary"></Badge>',id:"eventsbyorganizationconnectionskipint-",level:4},{value:'<code>eventsByOrganizationConnection.<b>orderBy</b></code><Bullet></Bullet><code>EventOrderByInput</code> <Badge class="secondary"></Badge>',id:"eventsbyorganizationconnectionorderbyeventorderbyinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>Event</code> <Badge class="secondary"></Badge>',id:"event-",level:4}];function y(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"No description"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"eventsByOrganizationConnection(\n  where: EventWhereInput\n  first: Int\n  skip: Int\n  orderBy: EventOrderByInput\n): [Event!]!\n"})}),"\n",(0,o.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,o.jsxs)(n.h4,{id:"eventsbyorganizationconnectionwhereeventwhereinput-",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["eventsByOrganizationConnection.",(0,o.jsx)("b",{children:"where"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"../../../docs/schema/inputs/event-where-input",children:(0,o.jsx)(n.code,{children:"EventWhereInput"})})," ",(0,o.jsx)(u,{class:"secondary",text:"input"})]}),"\n",(0,o.jsx)(n.blockquote,{children:"\n"}),"\n",(0,o.jsxs)(n.h4,{id:"eventsbyorganizationconnectionfirstint-",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["eventsByOrganizationConnection.",(0,o.jsx)("b",{children:"first"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"../../../docs/schema/scalars/int",children:(0,o.jsx)(n.code,{children:"Int"})})," ",(0,o.jsx)(u,{class:"secondary",text:"scalar"})]}),"\n",(0,o.jsx)(n.blockquote,{children:"\n"}),"\n",(0,o.jsxs)(n.h4,{id:"eventsbyorganizationconnectionskipint-",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["eventsByOrganizationConnection.",(0,o.jsx)("b",{children:"skip"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"../../../docs/schema/scalars/int",children:(0,o.jsx)(n.code,{children:"Int"})})," ",(0,o.jsx)(u,{class:"secondary",text:"scalar"})]}),"\n",(0,o.jsx)(n.blockquote,{children:"\n"}),"\n",(0,o.jsxs)(n.h4,{id:"eventsbyorganizationconnectionorderbyeventorderbyinput-",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["eventsByOrganizationConnection.",(0,o.jsx)("b",{children:"orderBy"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"../../../docs/schema/enums/event-order-by-input",children:(0,o.jsx)(n.code,{children:"EventOrderByInput"})})," ",(0,o.jsx)(u,{class:"secondary",text:"enum"})]}),"\n",(0,o.jsx)(n.blockquote,{children:"\n"}),"\n",(0,o.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,o.jsxs)(n.h4,{id:"event-",children:[(0,o.jsx)(n.a,{href:"../../../docs/schema/objects/event",children:(0,o.jsx)(n.code,{children:"Event"})})," ",(0,o.jsx)(u,{class:"secondary",text:"object"})]}),"\n",(0,o.jsx)(n.blockquote,{children:"\n"})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(y,{...e})}):y(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var s=t(296540);const o={},i=s.createContext(o);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);