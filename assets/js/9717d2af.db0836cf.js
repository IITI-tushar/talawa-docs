"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[175752],{148381:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"developers/project-2024/improved-file-upload-and-security/improved-file-upload-and-security","title":"Improved File Upload And Security","description":"Project","source":"@site/docs/developers/project-2024/improved-file-upload-and-security/improved-file-upload-and-security.md","sourceDirName":"developers/project-2024/improved-file-upload-and-security","slug":"/developers/project-2024/improved-file-upload-and-security/","permalink":"/docs/developers/project-2024/improved-file-upload-and-security/","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/developers/project-2024/improved-file-upload-and-security/improved-file-upload-and-security.md","tags":[],"version":"current","frontMatter":{"id":"improved-file-upload-and-security","title":"Improved File Upload And Security"},"sidebar":"docs","previous":{"title":"Improved File Uploads","permalink":"/docs/category/improved-file-uploads"},"next":{"title":"Event Attendance","permalink":"/docs/category/event-attendance"}}');var t=n(474848),r=n(28453);const s={id:"improved-file-upload-and-security",title:"Improved File Upload And Security"},l=void 0,a={},d=[{value:"Project",id:"project",level:2},{value:"Solution Walthrough",id:"solution-walthrough",level:2},{value:"Rational on using REST API over Graphql",id:"rational-on-using-rest-api-over-graphql",level:2},{value:"Libraries &amp; SDKs used",id:"libraries--sdks-used",level:2},{value:"Future Development Scope",id:"future-development-scope",level:2},{value:"Contributor",id:"contributor",level:2}];function c(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"project",children:"Project"}),"\n",(0,t.jsx)(i.p,{children:"The project aims to find a better solution for handling files uploaded from Talawa clients. It seeks to store files outside the code tree, access them using reliable libraries, deduplicate files, encrypt them, store them consistently regardless of their characteristics, and screen them for malicious content. Additionally, the default storage must be accessible via the system's locally accessible filesystem, with cloud storage services discouraged."}),"\n",(0,t.jsx)(i.h2,{id:"solution-walthrough",children:"Solution Walthrough"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"This project aim to avoid security threat of storing files in the project directory."}),"\n",(0,t.jsxs)(i.li,{children:["Work done under this GSoC'24 project are below:","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Storing files in an open-source object storage system ",(0,t.jsx)(i.code,{children:"minio"})]}),"\n",(0,t.jsx)(i.li,{children:"Adding all the CRUD operations for the minio integration"}),"\n",(0,t.jsx)(i.li,{children:"Handling duplicate files using hashing"}),"\n",(0,t.jsx)(i.li,{children:"Isolated the file upload APIs from other graphql APIs since these file upload APIs are Restful APIs"}),"\n",(0,t.jsx)(i.li,{children:"File encryption"}),"\n",(0,t.jsx)(i.li,{children:"Ensuring backup for both minio and mongoDb"}),"\n",(0,t.jsx)(i.li,{children:"Admin & Org Admin will have access to take backup in minio server instance hosted in the our API server"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"rational-on-using-rest-api-over-graphql",children:"Rational on using REST API over Graphql"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"GraphQL doesn't natively support uploads while REST APIs does."}),"\n",(0,t.jsx)(i.li,{children:"If graphQl would have been used then we would have to use 3rd party clients like appollo and though would increase the latency."}),"\n",(0,t.jsx)(i.li,{children:"GraphQl APIs inefficient when file size increases, hence would have affected streaming and downloads"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"libraries--sdks-used",children:"Libraries & SDKs used"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://aws.amazon.com/sdk-for-javascript/",children:"aws sdk for minio operations"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://www.npmjs.com/package/aws-sdk",children:"npm package"})}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"future-development-scope",children:"Future Development Scope"}),"\n",(0,t.jsx)(i.h2,{id:"contributor",children:"Contributor"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"https://github.com/chandel-aman/",children:"Aman Singh Chandel"})})]})}function u(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>l});var o=n(296540);const t={},r=o.createContext(t);function s(e){const i=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(r.Provider,{value:i},e.children)}}}]);