"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[260386],{954673:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"talawa-api-docs/REST/services/minio/functions/deleteFile","title":"deleteFile","description":"talawa-api","source":"@site/docs/talawa-api-docs/REST/services/minio/functions/deleteFile.md","sourceDirName":"talawa-api-docs/REST/services/minio/functions","slug":"/talawa-api-docs/REST/services/minio/functions/deleteFile","permalink":"/docs/talawa-api-docs/REST/services/minio/functions/deleteFile","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/REST/services/minio/functions/deleteFile.md","tags":[],"version":"current","frontMatter":{}}');var s=t(474848),c=t(28453);const a={},o=void 0,l={},d=[{value:"Parameters",id:"parameters",level:2},{value:"bucketName",id:"bucketname",level:3},{value:"objectKey",id:"objectkey",level:3},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Defined in",id:"defined-in",level:2}];function r(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/talawa-api-docs/",children:(0,s.jsx)(n.strong,{children:"talawa-api"})})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,s.jsx)(n.a,{href:"/docs/talawa-api-docs/REST/services/minio/",children:"REST/services/minio"})," / deleteFile"]}),"\n",(0,s.jsx)(n.h1,{id:"function-deletefile",children:"Function: deleteFile()"}),"\n",(0,s.jsxs)(n.p,{children:["> ",(0,s.jsx)(n.strong,{children:"deleteFile"}),"(",(0,s.jsx)(n.code,{children:"bucketName"}),", ",(0,s.jsx)(n.code,{children:"objectKey"}),"): ",(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.code,{children:"DeleteObjectCommandOutput"}),">"]}),"\n",(0,s.jsx)(n.p,{children:"Deletes a file from a specified S3 bucket."}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"deleteFile"})," function deletes an object in an S3 bucket using the ",(0,s.jsx)(n.code,{children:"DeleteObjectCommand"}),".\nIf an error occurs during the deletion process, it logs the error and rethrows it."]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.h3,{id:"bucketname",children:"bucketName"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"string"})}),"\n",(0,s.jsx)(n.p,{children:"The name of the S3 bucket from which the file will be deleted."}),"\n",(0,s.jsx)(n.h3,{id:"objectkey",children:"objectKey"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"string"})}),"\n",(0,s.jsx)(n.p,{children:"The key of the object to be deleted in the S3 bucket."}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.code,{children:"DeleteObjectCommandOutput"}),">"]}),"\n",(0,s.jsxs)(n.p,{children:["A promise that resolves to the output of the ",(0,s.jsx)(n.code,{children:"DeleteObjectCommand"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'const response = await deleteFile("my-bucket", "image123.png");\nconsole.log(response);\n'})}),"\n",(0,s.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/039b0f127fb8caa46d57186ab4b3bb27fe150903/src/REST/services/minio/index.ts#L114",children:"src/REST/services/minio/index.ts:114"})})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(296540);const s={},c=i.createContext(s);function a(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);