"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[933813],{515129:(e,s,t)=>{t.r(s),t.d(s,{Badge:()=>h,Bullet:()=>o,Details:()=>p,SpecifiedBy:()=>u,assets:()=>r,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>x});var n=t(785893),a=t(511151),i=t(667294);const c={id:"task-input",title:"TaskInput",hide_table_of_contents:!1},l=void 0,d={id:"schema/inputs/task-input",title:"TaskInput",description:"No description",source:"@site/docs/schema/inputs/task-input.mdx",sourceDirName:"schema/inputs",slug:"/schema/inputs/task-input",permalink:"/docs/schema/inputs/task-input",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/inputs/task-input.mdx",tags:[],version:"current",frontMatter:{id:"task-input",title:"TaskInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"RecaptchaVerification",permalink:"/docs/schema/inputs/recaptcha-verification"},next:{title:"ToggleUserTagAssignInput",permalink:"/docs/schema/inputs/toggle-user-tag-assign-input"}},r={},o=()=>{const e={span:"span",...(0,a.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const s={a:"a",...(0,a.a)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const s={span:"span",...(0,a.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.span,{className:"badge badge--"+e.class,children:e.text})})},p=({dataOpen:e,dataClose:s,children:t,startOpen:c=!1})=>{const l={details:"details",summary:"summary",...(0,a.a)()},[d,r]=(0,i.useState)(c);return(0,n.jsxs)(l.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(l.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:d?e:s}),d&&t]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>TaskInput.<b>title</b></code><Bullet></Bullet><code>String!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"taskinputtitlestring--",level:4},{value:'<code>TaskInput.<b>description</b></code><Bullet></Bullet><code>String!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"taskinputdescriptionstring--",level:4},{value:'<code>TaskInput.<b>deadline</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"taskinputdeadlinedatetime--",level:4},{value:"Member of",id:"member-of",level:3}];function m(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"No description"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"input TaskInput {\n  title: String!\n  description: String!\n  deadline: DateTime!\n}\n"})}),"\n",(0,n.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(s.h4,{id:"taskinputtitlestring--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["TaskInput.",(0,n.jsx)("b",{children:"title"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/scalars/string",children:(0,n.jsx)(s.code,{children:"String!"})})," ",(0,n.jsx)(h,{class:"secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"taskinputdescriptionstring--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["TaskInput.",(0,n.jsx)("b",{children:"description"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/scalars/string",children:(0,n.jsx)(s.code,{children:"String!"})})," ",(0,n.jsx)(h,{class:"secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"taskinputdeadlinedatetime--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["TaskInput.",(0,n.jsx)("b",{children:"deadline"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/scalars/date-time",children:(0,n.jsx)(s.code,{children:"DateTime!"})})," ",(0,n.jsx)(h,{class:"secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsx)(s.h3,{id:"member-of",children:"Member of"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"../../../docs/schema/mutations/create-task",children:(0,n.jsx)(s.code,{children:"createTask"})})," ",(0,n.jsx)(h,{class:"secondary",text:"mutation"})]})]})}function g(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},511151:(e,s,t)=>{t.d(s,{Z:()=>l,a:()=>c});var n=t(667294);const a={},i=n.createContext(a);function c(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);