"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[18983],{318915:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"talawa-api-docs/REST/controllers/query/getFile/functions/getFile","title":"getFile","description":"talawa-api","source":"@site/docs/talawa-api-docs/REST/controllers/query/getFile/functions/getFile.md","sourceDirName":"talawa-api-docs/REST/controllers/query/getFile/functions","slug":"/talawa-api-docs/REST/controllers/query/getFile/functions/getFile","permalink":"/docs/talawa-api-docs/REST/controllers/query/getFile/functions/getFile","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/REST/controllers/query/getFile/functions/getFile.md","tags":[],"version":"current","frontMatter":{}}');var s=r(474848),i=r(28453);const l={},o=void 0,a={},c=[{value:"Parameters",id:"parameters",level:2},{value:"req",id:"req",level:3},{value:"res",id:"res",level:3},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Defined in",id:"defined-in",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/talawa-api-docs/",children:(0,s.jsx)(t.strong,{children:"talawa-api"})})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,s.jsx)(t.a,{href:"/docs/talawa-api-docs/REST/controllers/query/getFile/",children:"REST/controllers/query/getFile"})," / getFile"]}),"\n",(0,s.jsx)(t.h1,{id:"function-getfile",children:"Function: getFile()"}),"\n",(0,s.jsxs)(t.p,{children:["> ",(0,s.jsx)(t.strong,{children:"getFile"}),"(",(0,s.jsx)(t.code,{children:"req"}),", ",(0,s.jsx)(t.code,{children:"res"}),"): ",(0,s.jsx)(t.code,{children:"Promise"}),"<",(0,s.jsx)(t.code,{children:"void"}),">"]}),"\n",(0,s.jsx)(t.p,{children:"Middleware to retrieve a file from S3 storage."}),"\n",(0,s.jsx)(t.p,{children:"This function retrieves a file from an S3-compatible storage service using the provided key from the request parameters.\nIf the file is found, it streams the file's content back to the client with the appropriate content type.\nIf an error occurs during the retrieval, it logs the error and sends a 500 status code response."}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(t.h3,{id:"req",children:"req"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"Request"})}),"\n",(0,s.jsx)(t.p,{children:"The Express request object, containing the key for the file in the parameters."}),"\n",(0,s.jsx)(t.h3,{id:"res",children:"res"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"Response"})}),"\n",(0,s.jsx)(t.p,{children:"The Express response object used to send the file back to the client."}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Promise"}),"<",(0,s.jsx)(t.code,{children:"void"}),">"]}),"\n",(0,s.jsx)(t.p,{children:"A promise that resolves to void. The function either streams the file or sends an error response."}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:'app.get("/file/:key*", getFile);\n'})}),"\n",(0,s.jsx)(t.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/REST/controllers/query/getFile.ts#L23",children:"src/REST/controllers/query/getFile.ts:23"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>o});var n=r(296540);const s={},i=n.createContext(s);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);