"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[39517],{266472:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>l,Details:()=>v,SpecifiedBy:()=>h,assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>x});var s=t(785893),o=t(511151),i=t(667294);const a={id:"events-by-organization-connection",title:"eventsByOrganizationConnection",hide_table_of_contents:!1},c=void 0,r={id:"schema/queries/events-by-organization-connection",title:"eventsByOrganizationConnection",description:"No description",source:"@site/docs/schema/queries/events-by-organization-connection.mdx",sourceDirName:"schema/queries",slug:"/schema/queries/events-by-organization-connection",permalink:"/docs/schema/queries/events-by-organization-connection",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/queries/events-by-organization-connection.mdx",tags:[],version:"current",frontMatter:{id:"events-by-organization-connection",title:"eventsByOrganizationConnection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"event",permalink:"/docs/schema/queries/event"},next:{title:"eventsByOrganization",permalink:"/docs/schema/queries/events-by-organization"}},d={},l=()=>{const e={span:"span",...(0,o.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,o.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,o.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:"badge badge--"+e.class,children:e.text})})},v=({dataOpen:e,dataClose:n,children:t,startOpen:a=!1})=>{const c={details:"details",summary:"summary",...(0,o.a)()},[r,d]=(0,i.useState)(a);return(0,s.jsxs)(c.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(c.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:r?e:n}),r&&t]})},x=[{value:"Arguments",id:"arguments",level:3},{value:'<code>eventsByOrganizationConnection.<b>where</b></code><Bullet></Bullet><code>EventWhereInput</code> <Badge class="secondary"></Badge>',id:"eventsbyorganizationconnectionwhereeventwhereinput-",level:4},{value:'<code>eventsByOrganizationConnection.<b>first</b></code><Bullet></Bullet><code>Int</code> <Badge class="secondary"></Badge>',id:"eventsbyorganizationconnectionfirstint-",level:4},{value:'<code>eventsByOrganizationConnection.<b>skip</b></code><Bullet></Bullet><code>Int</code> <Badge class="secondary"></Badge>',id:"eventsbyorganizationconnectionskipint-",level:4},{value:'<code>eventsByOrganizationConnection.<b>orderBy</b></code><Bullet></Bullet><code>EventOrderByInput</code> <Badge class="secondary"></Badge>',id:"eventsbyorganizationconnectionorderbyeventorderbyinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>Event</code> <Badge class="secondary"></Badge>',id:"event-",level:4}];function y(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"No description"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"eventsByOrganizationConnection(\n  where: EventWhereInput\n  first: Int\n  skip: Int\n  orderBy: EventOrderByInput\n): [Event!]!\n"})}),"\n",(0,s.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(n.h4,{id:"eventsbyorganizationconnectionwhereeventwhereinput-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["eventsByOrganizationConnection.",(0,s.jsx)("b",{children:"where"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"../../../docs/schema/inputs/event-where-input",children:(0,s.jsx)(n.code,{children:"EventWhereInput"})})," ",(0,s.jsx)(u,{class:"secondary",text:"input"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(n.h4,{id:"eventsbyorganizationconnectionfirstint-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["eventsByOrganizationConnection.",(0,s.jsx)("b",{children:"first"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"../../../docs/schema/scalars/int",children:(0,s.jsx)(n.code,{children:"Int"})})," ",(0,s.jsx)(u,{class:"secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(n.h4,{id:"eventsbyorganizationconnectionskipint-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["eventsByOrganizationConnection.",(0,s.jsx)("b",{children:"skip"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"../../../docs/schema/scalars/int",children:(0,s.jsx)(n.code,{children:"Int"})})," ",(0,s.jsx)(u,{class:"secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(n.h4,{id:"eventsbyorganizationconnectionorderbyeventorderbyinput-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["eventsByOrganizationConnection.",(0,s.jsx)("b",{children:"orderBy"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"../../../docs/schema/enums/event-order-by-input",children:(0,s.jsx)(n.code,{children:"EventOrderByInput"})})," ",(0,s.jsx)(u,{class:"secondary",text:"enum"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,s.jsxs)(n.h4,{id:"event-",children:[(0,s.jsx)(n.a,{href:"../../../docs/schema/objects/event",children:(0,s.jsx)(n.code,{children:"Event"})})," ",(0,s.jsx)(u,{class:"secondary",text:"object"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(y,{...e})}):y(e)}},511151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>a});var s=t(667294);const o={},i=s.createContext(o);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);