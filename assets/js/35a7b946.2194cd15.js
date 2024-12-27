"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[802266],{163507:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"talawa-api-docs/setup/MongoDB/functions/checkExistingMongoDB","title":"checkExistingMongoDB","description":"talawa-api","source":"@site/docs/talawa-api-docs/setup/MongoDB/functions/checkExistingMongoDB.md","sourceDirName":"talawa-api-docs/setup/MongoDB/functions","slug":"/talawa-api-docs/setup/MongoDB/functions/checkExistingMongoDB","permalink":"/docs/talawa-api-docs/setup/MongoDB/functions/checkExistingMongoDB","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/setup/MongoDB/functions/checkExistingMongoDB.md","tags":[],"version":"current","frontMatter":{}}');var i=o(474848),s=o(28453);const c={},a=void 0,r={},l=[{value:"Returns",id:"returns",level:2},{value:"Defined in",id:"defined-in",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"/docs/talawa-api-docs/",children:(0,i.jsx)(e.strong,{children:"talawa-api"})})}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,i.jsx)(e.a,{href:"/docs/talawa-api-docs/setup/MongoDB/",children:"setup/MongoDB"})," / checkExistingMongoDB"]}),"\n",(0,i.jsx)(e.h1,{id:"function-checkexistingmongodb",children:"Function: checkExistingMongoDB()"}),"\n",(0,i.jsxs)(e.p,{children:["> ",(0,i.jsx)(e.strong,{children:"checkExistingMongoDB"}),"(): ",(0,i.jsx)(e.code,{children:"Promise"}),"<",(0,i.jsx)(e.code,{children:"string"})," | ",(0,i.jsx)(e.code,{children:"null"}),">"]}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.code,{children:"checkExistingMongoDB"})," function checks for an existing MongoDB URL in the environment variables and attempts to establish a connection."]}),"\n",(0,i.jsx)(e.p,{children:"It performs the following steps:"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"Retrieves the MongoDB URL from the environment variables."}),"\n",(0,i.jsx)(e.li,{children:"If no URL is found, it immediately returns null."}),"\n",(0,i.jsxs)(e.li,{children:["If a URL is found, it attempts to establish a connection using the ",(0,i.jsx)(e.code,{children:"checkConnection"})," function.","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["If the connection is successful (i.e., ",(0,i.jsx)(e.code,{children:"checkConnection"})," returns true), it returns the URL."]}),"\n",(0,i.jsxs)(e.li,{children:["If the connection fails (i.e., ",(0,i.jsx)(e.code,{children:"checkConnection"})," returns false), it returns null."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"This function is used during the initial setup process to check if a valid MongoDB connection can be made with the existing URL in the environment variables."}),"\n",(0,i.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"Promise"}),"<",(0,i.jsx)(e.code,{children:"string"})," | ",(0,i.jsx)(e.code,{children:"null"}),">"]}),"\n",(0,i.jsx)(e.p,{children:"A promise that resolves to a string (if a connection could be made to the existing URL) or null (if no existing URL or connection could not be made)."}),"\n",(0,i.jsx)(e.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/5c5b29a0ea487bda8306089fe128f43f3be29f94/src/setup/MongoDB.ts#L17",children:"src/setup/MongoDB.ts:17"})})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},28453:(n,e,o)=>{o.d(e,{R:()=>c,x:()=>a});var t=o(296540);const i={},s=t.createContext(i);function c(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);