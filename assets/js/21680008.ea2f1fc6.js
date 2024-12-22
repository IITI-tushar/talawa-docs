"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[870686],{945209:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"talawa-api-docs/setup/updateIgnoreFile/functions/updateIgnoreFile","title":"updateIgnoreFile","description":"talawa-api","source":"@site/docs/talawa-api-docs/setup/updateIgnoreFile/functions/updateIgnoreFile.md","sourceDirName":"talawa-api-docs/setup/updateIgnoreFile/functions","slug":"/talawa-api-docs/setup/updateIgnoreFile/functions/updateIgnoreFile","permalink":"/docs/talawa-api-docs/setup/updateIgnoreFile/functions/updateIgnoreFile","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/setup/updateIgnoreFile/functions/updateIgnoreFile.md","tags":[],"version":"current","frontMatter":{}}');var r=n(474848),a=n(28453);const o={},s=void 0,d={},l=[{value:"Parameters",id:"parameters",level:2},{value:"filePath",id:"filepath",level:3},{value:"directoryToIgnore",id:"directorytoignore",level:3},{value:"Returns",id:"returns",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Defined in",id:"defined-in",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/talawa-api-docs/",children:(0,r.jsx)(t.strong,{children:"talawa-api"})})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,r.jsx)(t.a,{href:"/docs/talawa-api-docs/setup/updateIgnoreFile/",children:"setup/updateIgnoreFile"})," / updateIgnoreFile"]}),"\n",(0,r.jsx)(t.h1,{id:"function-updateignorefile",children:"Function: updateIgnoreFile()"}),"\n",(0,r.jsxs)(t.p,{children:["> ",(0,r.jsx)(t.strong,{children:"updateIgnoreFile"}),"(",(0,r.jsx)(t.code,{children:"filePath"}),", ",(0,r.jsx)(t.code,{children:"directoryToIgnore"}),"): ",(0,r.jsx)(t.code,{children:"void"})]}),"\n",(0,r.jsx)(t.p,{children:"Updates the specified ignore file by adding an ignore pattern for a given directory."}),"\n",(0,r.jsx)(t.p,{children:"This function ensures that the directory to be ignored is relative to the project root.\nIt reads the current content of the ignore file, removes any existing entries for the MinIO data directory,\nand appends a new entry if it does not already exist."}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(t.h3,{id:"filepath",children:"filePath"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"string"})}),"\n",(0,r.jsx)(t.p,{children:"The path to the ignore file to be updated."}),"\n",(0,r.jsx)(t.h3,{id:"directorytoignore",children:"directoryToIgnore"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"string"})}),"\n",(0,r.jsx)(t.p,{children:"The directory path that should be ignored, relative to the project root."}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"void"})}),"\n",(0,r.jsx)(t.p,{children:"void"}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(t.p,{children:"If the directory is outside the project root, the function will return early without making changes.\nNo logging is performed for cases where the ignore pattern already exists in the file, as this is expected behavior."}),"\n",(0,r.jsx)(t.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/039b0f127fb8caa46d57186ab4b3bb27fe150903/src/setup/updateIgnoreFile.ts#L20",children:"src/setup/updateIgnoreFile.ts:20"})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var i=n(296540);const r={},a=i.createContext(r);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);