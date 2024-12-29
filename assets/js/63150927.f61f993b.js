"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[865252],{501735:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>r});const s=JSON.parse('{"id":"talawa-api-docs/config/minio/variables/s3Client","title":"s3Client","description":"talawa-api","source":"@site/docs/talawa-api-docs/config/minio/variables/s3Client.md","sourceDirName":"talawa-api-docs/config/minio/variables","slug":"/talawa-api-docs/config/minio/variables/s3Client","permalink":"/docs/talawa-api-docs/config/minio/variables/s3Client","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/config/minio/variables/s3Client.md","tags":[],"version":"current","frontMatter":{}}');var t=i(474848),a=i(28453);const c={},o=void 0,l={},r=[{value:"Example",id:"example",level:2},{value:"Returns",id:"returns",level:2},{value:"Defined in",id:"defined-in",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/",children:(0,t.jsx)(n.strong,{children:"talawa-api"})})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/config/minio/",children:"config/minio"})," / s3Client"]}),"\n",(0,t.jsx)(n.h1,{id:"variable-s3client",children:"Variable: s3Client"}),"\n",(0,t.jsxs)(n.p,{children:["> ",(0,t.jsx)(n.code,{children:"const"})," ",(0,t.jsx)(n.strong,{children:"s3Client"}),": ",(0,t.jsx)(n.code,{children:"S3Client"})]}),"\n",(0,t.jsx)(n.p,{children:"Initializes and exports an S3 client instance using AWS SDK for connecting to MinIO storage."}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"s3Client"})," is an instance of the AWS S3 client configured to interact with a MinIO storage service.\nThe client uses custom endpoint, credentials, and region details from environment variables to\nestablish the connection. It also forces path-style access to ensure compatibility with MinIO."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Environment Variables:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"MINIO_ENDPOINT"}),": The MinIO storage endpoint URL."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"MINIO_ROOT_USER"}),": The access key ID for the MinIO instance."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"MINIO_ROOT_PASSWORD"}),": The secret access key for the MinIO instance."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"MINIO_BUCKET"}),": The default bucket name in MinIO."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import \\{ s3Client \\} from './path/to/file';\n\n// Example usage\nconst data = await s3Client.send(new ListBucketsCommand(\\{\\}));\nconsole.log(data.Buckets);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"S3Client - an instance of the AWS S3 client configured for MinIO storage."}),"\n",(0,t.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/config/minio/index.ts#L27",children:"src/config/minio/index.ts:27"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>o});var s=i(296540);const t={},a=s.createContext(t);function c(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);