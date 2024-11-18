"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[523142],{963783:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"talawa-api-docs/REST/services/file/createFile/functions/createFile","title":"createFile","description":"talawa-api \u2022 Docs","source":"@site/docs/talawa-api-docs/REST/services/file/createFile/functions/createFile.md","sourceDirName":"talawa-api-docs/REST/services/file/createFile/functions","slug":"/talawa-api-docs/REST/services/file/createFile/functions/createFile","permalink":"/docs/talawa-api-docs/REST/services/file/createFile/functions/createFile","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/REST/services/file/createFile/functions/createFile.md","tags":[],"version":"current","frontMatter":{}}');var a=i(474848),t=i(28453);const c={},r=void 0,l={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Defined in",id:"defined-in",level:2}];function o(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/docs/talawa-api-docs/",children:(0,a.jsx)(s.strong,{children:"talawa-api"})})," \u2022 ",(0,a.jsx)(s.strong,{children:"Docs"})]}),"\n",(0,a.jsx)(s.hr,{}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,a.jsx)(s.a,{href:"/docs/talawa-api-docs/REST/services/file/createFile/",children:"REST/services/file/createFile"})," / createFile"]}),"\n",(0,a.jsx)(s.h1,{id:"function-createfile",children:"Function: createFile()"}),"\n",(0,a.jsxs)(s.p,{children:["> ",(0,a.jsx)(s.strong,{children:"createFile"}),"(",(0,a.jsx)(s.code,{children:"uploadResult"}),", ",(0,a.jsx)(s.code,{children:"originalname"}),", ",(0,a.jsx)(s.code,{children:"mimetype"}),", ",(0,a.jsx)(s.code,{children:"size"}),"): ",(0,a.jsx)(s.code,{children:"Promise"}),"<",(0,a.jsx)(s.a,{href:"/docs/talawa-api-docs/models/File/interfaces/InterfaceFile",children:(0,a.jsx)(s.code,{children:"InterfaceFile"})}),">"]}),"\n",(0,a.jsx)(s.p,{children:"Creates or updates a file document in the database based on the upload result."}),"\n",(0,a.jsx)(s.p,{children:"This function checks if a file with the same hash already exists. If it does, the reference count of the file is incremented.\nIf not, a new file document is created and saved to the database."}),"\n",(0,a.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(s.p,{children:["\u2022 ",(0,a.jsx)(s.strong,{children:"uploadResult"}),": ",(0,a.jsx)(s.a,{href:"/docs/talawa-api-docs/REST/services/minio/interfaces/InterfaceUploadResult",children:(0,a.jsx)(s.code,{children:"InterfaceUploadResult"})})]}),"\n",(0,a.jsx)(s.p,{children:"The result from the file upload containing the hash, object key, and hash algorithm."}),"\n",(0,a.jsxs)(s.p,{children:["\u2022 ",(0,a.jsx)(s.strong,{children:"originalname"}),": ",(0,a.jsx)(s.code,{children:"string"})]}),"\n",(0,a.jsx)(s.p,{children:"The original name of the uploaded file."}),"\n",(0,a.jsxs)(s.p,{children:["\u2022 ",(0,a.jsx)(s.strong,{children:"mimetype"}),": ",(0,a.jsx)(s.code,{children:"string"})]}),"\n",(0,a.jsx)(s.p,{children:"The MIME type of the uploaded file."}),"\n",(0,a.jsxs)(s.p,{children:["\u2022 ",(0,a.jsx)(s.strong,{children:"size"}),": ",(0,a.jsx)(s.code,{children:"number"})]}),"\n",(0,a.jsx)(s.p,{children:"The size of the uploaded file in bytes."}),"\n",(0,a.jsx)(s.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"Promise"}),"<",(0,a.jsx)(s.a,{href:"/docs/talawa-api-docs/models/File/interfaces/InterfaceFile",children:(0,a.jsx)(s.code,{children:"InterfaceFile"})}),">"]}),"\n",(0,a.jsx)(s.p,{children:"A promise that resolves to the created or updated file document."}),"\n",(0,a.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-typescript",children:'const file = await createFile(uploadResult, "image.png", "image/png", 2048);\nconsole.log(file);\n'})}),"\n",(0,a.jsx)(s.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/a6e7ac91b581c9109559657faf0f934f3eb41fe7/src/REST/services/file/createFile.ts#L25",children:"src/REST/services/file/createFile.ts:25"})})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>c,x:()=>r});var n=i(296540);const a={},t=n.createContext(a);function c(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);