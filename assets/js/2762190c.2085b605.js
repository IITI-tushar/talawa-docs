"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[718887],{260551:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>d,toc:()=>c});const d=JSON.parse('{"id":"talawa-api-docs/modules/middleware_isAuth","title":"middleware_isAuth","description":"talawa-api / Exports / middleware/isAuth","source":"@site/docs/talawa-api-docs/modules/middleware_isAuth.md","sourceDirName":"talawa-api-docs/modules","slug":"/talawa-api-docs/modules/middleware_isAuth","permalink":"/docs/talawa-api-docs/modules/middleware_isAuth","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/modules/middleware_isAuth.md","tags":[],"version":"current","frontMatter":{}}');var n=s(474848),a=s(28453);const i={},r="Module: middleware/isAuth",l={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Interfaces",id:"interfaces",level:3},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"isAuth",id:"isauth",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/talawa-api-docs/",children:"talawa-api"})," / ",(0,n.jsx)(t.a,{href:"/docs/talawa-api-docs/modules",children:"Exports"})," / middleware/isAuth"]}),"\n",(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"module-middlewareisauth",children:"Module: middleware/isAuth"})}),"\n",(0,n.jsx)(t.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,n.jsx)(t.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/talawa-api-docs/interfaces/middleware_isAuth.InterfaceAuthData",children:"InterfaceAuthData"})}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"functions",children:"Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/talawa-api-docs/modules/middleware_isAuth#isauth",children:"isAuth"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"functions-1",children:"Functions"}),"\n",(0,n.jsx)(t.h3,{id:"isauth",children:"isAuth"}),"\n",(0,n.jsxs)(t.p,{children:["\u25b8 ",(0,n.jsx)(t.strong,{children:"isAuth"}),"(",(0,n.jsx)(t.code,{children:"request"}),"): ",(0,n.jsx)(t.a,{href:"/docs/talawa-api-docs/interfaces/middleware_isAuth.InterfaceAuthData",children:(0,n.jsx)(t.code,{children:"InterfaceAuthData"})})]}),"\n",(0,n.jsx)(t.p,{children:"This function determines whether the user is authorised and whether the access token has expired."}),"\n",(0,n.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"request"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.code,{children:"Request"}),"<",(0,n.jsx)(t.code,{children:"ParamsDictionary"}),", ",(0,n.jsx)(t.code,{children:"any"}),", ",(0,n.jsx)(t.code,{children:"any"}),", ",(0,n.jsx)(t.code,{children:"ParsedQs"}),", ",(0,n.jsx)(t.code,{children:"Record"}),"<",(0,n.jsx)(t.code,{children:"string"}),", ",(0,n.jsx)(t.code,{children:"any"}),">>"]})]})})]}),"\n",(0,n.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/docs/talawa-api-docs/interfaces/middleware_isAuth.InterfaceAuthData",children:(0,n.jsx)(t.code,{children:"InterfaceAuthData"})})}),"\n",(0,n.jsxs)(t.p,{children:["Returns ",(0,n.jsx)(t.code,{children:"authData"})," object with ",(0,n.jsx)(t.code,{children:"isAuth"}),", ",(0,n.jsx)(t.code,{children:"expired"})," and ",(0,n.jsx)(t.code,{children:"userId"})," properties."]}),"\n",(0,n.jsx)(t.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/middleware/isAuth.ts#L17",children:"src/middleware/isAuth.ts:17"})})]})}function o(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>r});var d=s(296540);const n={},a=d.createContext(n);function i(e){const t=d.useContext(a);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),d.createElement(a.Provider,{value:t},e.children)}}}]);