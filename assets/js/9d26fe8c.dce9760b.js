"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[896704],{62403:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>u,Bullet:()=>d,Details:()=>x,SpecifiedBy:()=>h,assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>j});var a=s(785893),t=s(511151),r=s(667294);const l={id:"translation",title:"Translation",hide_table_of_contents:!1},o=void 0,c={id:"schema/objects/translation",title:"Translation",description:"No description",source:"@site/docs/schema/objects/translation.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/translation",permalink:"/docs/schema/objects/translation",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/objects/translation.mdx",tags:[],version:"current",frontMatter:{id:"translation",title:"Translation",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Task",permalink:"/docs/schema/objects/task"},next:{title:"UnauthenticatedError",permalink:"/docs/schema/objects/unauthenticated-error"}},i={},d=()=>{const e={span:"span",...(0,t.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,t.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,t.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:"badge badge--"+e.class,children:e.text})})},x=({dataOpen:e,dataClose:n,children:s,startOpen:l=!1})=>{const o={details:"details",summary:"summary",...(0,t.a)()},[c,i]=(0,r.useState)(l);return(0,a.jsxs)(o.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(o.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&s]})},j=[{value:"Fields",id:"fields",level:3},{value:'<code>Translation.<b>lang_code</b></code><Bullet></Bullet><code>String</code> <Badge class="secondary"></Badge>',id:"translationlang_codestring-",level:4},{value:'<code>Translation.<b>en_value</b></code><Bullet></Bullet><code>String</code> <Badge class="secondary"></Badge>',id:"translationen_valuestring-",level:4},{value:'<code>Translation.<b>translation</b></code><Bullet></Bullet><code>String</code> <Badge class="secondary"></Badge>',id:"translationtranslationstring-",level:4},{value:'<code>Translation.<b>verified</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="secondary"></Badge>',id:"translationverifiedboolean-",level:4},{value:"Returned by",id:"returned-by",level:3}];function g(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"No description"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"type Translation {\n  lang_code: String\n  en_value: String\n  translation: String\n  verified: Boolean\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"translationlang_codestring-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Translation.",(0,a.jsx)("b",{children:"lang_code"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(n.a,{href:"../../../docs/schema/scalars/string",children:(0,a.jsx)(n.code,{children:"String"})})," ",(0,a.jsx)(u,{class:"secondary",text:"scalar"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(n.h4,{id:"translationen_valuestring-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Translation.",(0,a.jsx)("b",{children:"en_value"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(n.a,{href:"../../../docs/schema/scalars/string",children:(0,a.jsx)(n.code,{children:"String"})})," ",(0,a.jsx)(u,{class:"secondary",text:"scalar"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(n.h4,{id:"translationtranslationstring-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Translation.",(0,a.jsx)("b",{children:"translation"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(n.a,{href:"../../../docs/schema/scalars/string",children:(0,a.jsx)(n.code,{children:"String"})})," ",(0,a.jsx)(u,{class:"secondary",text:"scalar"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(n.h4,{id:"translationverifiedboolean-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Translation.",(0,a.jsx)("b",{children:"verified"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(n.a,{href:"../../../docs/schema/scalars/boolean",children:(0,a.jsx)(n.code,{children:"Boolean"})})," ",(0,a.jsx)(u,{class:"secondary",text:"scalar"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsx)(n.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"../../../docs/schema/queries/getlanguage",children:(0,a.jsx)(n.code,{children:"getlanguage"})})," ",(0,a.jsx)(u,{class:"secondary",text:"query"})]})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},511151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>l});var a=s(667294);const t={},r=a.createContext(t);function l(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);