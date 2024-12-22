"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[761972],{501785:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>h,Bullet:()=>i,Details:()=>x,SpecifiedBy:()=>j,assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>d,metadata:()=>n,toc:()=>v});const n=JSON.parse('{"id":"schema/objects/event-project","title":"EventProject","description":"No description","source":"@site/docs/schema/objects/event-project.mdx","sourceDirName":"schema/objects","slug":"/schema/objects/event-project","permalink":"/docs/schema/objects/event-project","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/objects/event-project.mdx","tags":[],"version":"current","frontMatter":{"id":"event-project","title":"EventProject","hide_table_of_contents":false},"sidebar":"schemaSidebar","previous":{"title":"Donation","permalink":"/docs/schema/objects/donation"},"next":{"title":"EventRegistrants","permalink":"/docs/schema/objects/event-registrants"}}');var c=s(474848),o=s(28453),r=s(296540);const d={id:"event-project",title:"EventProject",hide_table_of_contents:!1},a=void 0,l={},i=()=>(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),j=e=>(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),h=e=>(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("span",{className:"badge badge--"+e.class,children:e.text})}),x=({dataOpen:e,dataClose:t,children:s,startOpen:n=!1})=>{const[o,d]=(0,r.useState)(n);return(0,c.jsxs)("details",{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&s]})},v=[{value:"Fields",id:"fields",level:3},{value:'<code>EventProject.<b>_id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"eventproject_idid--",level:4},{value:'<code>EventProject.<b>title</b></code><Bullet></Bullet><code>String!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"eventprojecttitlestring--",level:4},{value:'<code>EventProject.<b>description</b></code><Bullet></Bullet><code>String!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"eventprojectdescriptionstring--",level:4},{value:'<code>EventProject.<b>event</b></code><Bullet></Bullet><code>Event!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"eventprojecteventevent--",level:4},{value:'<code>EventProject.<b>tasks</b></code><Bullet></Bullet><code>[Task]</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"eventprojecttaskstask--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}];function u(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:"No description"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-graphql",children:"type EventProject {\n  _id: ID!\n  title: String!\n  description: String!\n  event: Event!\n  tasks: [Task]\n}\n"})}),"\n",(0,c.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,c.jsxs)(t.h4,{id:"eventproject_idid--",children:[(0,c.jsx)(t.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["EventProject.",(0,c.jsx)("b",{children:"_id"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(t.a,{href:"../../../docs/schema/scalars/id",children:(0,c.jsx)(t.code,{children:"ID!"})})," ",(0,c.jsx)(h,{class:"secondary",text:"non-null"})," ",(0,c.jsx)(h,{class:"secondary",text:"scalar"})]}),"\n",(0,c.jsx)(t.blockquote,{children:"\n"}),"\n",(0,c.jsxs)(t.h4,{id:"eventprojecttitlestring--",children:[(0,c.jsx)(t.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["EventProject.",(0,c.jsx)("b",{children:"title"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(t.a,{href:"../../../docs/schema/scalars/string",children:(0,c.jsx)(t.code,{children:"String!"})})," ",(0,c.jsx)(h,{class:"secondary",text:"non-null"})," ",(0,c.jsx)(h,{class:"secondary",text:"scalar"})]}),"\n",(0,c.jsx)(t.blockquote,{children:"\n"}),"\n",(0,c.jsxs)(t.h4,{id:"eventprojectdescriptionstring--",children:[(0,c.jsx)(t.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["EventProject.",(0,c.jsx)("b",{children:"description"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(t.a,{href:"../../../docs/schema/scalars/string",children:(0,c.jsx)(t.code,{children:"String!"})})," ",(0,c.jsx)(h,{class:"secondary",text:"non-null"})," ",(0,c.jsx)(h,{class:"secondary",text:"scalar"})]}),"\n",(0,c.jsx)(t.blockquote,{children:"\n"}),"\n",(0,c.jsxs)(t.h4,{id:"eventprojecteventevent--",children:[(0,c.jsx)(t.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["EventProject.",(0,c.jsx)("b",{children:"event"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(t.a,{href:"../../../docs/schema/objects/event",children:(0,c.jsx)(t.code,{children:"Event!"})})," ",(0,c.jsx)(h,{class:"secondary",text:"non-null"})," ",(0,c.jsx)(h,{class:"secondary",text:"object"})]}),"\n",(0,c.jsx)(t.blockquote,{children:"\n"}),"\n",(0,c.jsxs)(t.h4,{id:"eventprojecttaskstask--",children:[(0,c.jsx)(t.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["EventProject.",(0,c.jsx)("b",{children:"tasks"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(t.a,{href:"../../../docs/schema/objects/task",children:(0,c.jsx)(t.code,{children:"[Task]"})})," ",(0,c.jsx)(h,{class:"secondary",text:"list"})," ",(0,c.jsx)(h,{class:"secondary",text:"object"})]}),"\n",(0,c.jsx)(t.blockquote,{children:"\n"}),"\n",(0,c.jsx)(t.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.a,{href:"../../../docs/schema/mutations/create-event-project",children:(0,c.jsx)(t.code,{children:"createEventProject"})})," ",(0,c.jsx)(h,{class:"secondary",text:"mutation"}),(0,c.jsx)(i,{}),(0,c.jsx)(t.a,{href:"../../../docs/schema/mutations/remove-event-project",children:(0,c.jsx)(t.code,{children:"removeEventProject"})})," ",(0,c.jsx)(h,{class:"secondary",text:"mutation"}),(0,c.jsx)(i,{}),(0,c.jsx)(t.a,{href:"../../../docs/schema/mutations/update-event-project",children:(0,c.jsx)(t.code,{children:"updateEventProject"})})," ",(0,c.jsx)(h,{class:"secondary",text:"mutation"})]}),"\n",(0,c.jsx)(t.h3,{id:"member-of",children:"Member of"}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.a,{href:"../../../docs/schema/objects/event",children:(0,c.jsx)(t.code,{children:"Event"})})," ",(0,c.jsx)(h,{class:"secondary",text:"object"})]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>d});var n=s(296540);const c={},o=n.createContext(c);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);