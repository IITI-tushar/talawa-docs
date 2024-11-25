"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[469742],{500888:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"talawa-api-docs/REST/controllers/mutation/updatePost/functions/updatePost","title":"updatePost","description":"talawa-api \u2022 Docs","source":"@site/docs/talawa-api-docs/REST/controllers/mutation/updatePost/functions/updatePost.md","sourceDirName":"talawa-api-docs/REST/controllers/mutation/updatePost/functions","slug":"/talawa-api-docs/REST/controllers/mutation/updatePost/functions/updatePost","permalink":"/docs/talawa-api-docs/REST/controllers/mutation/updatePost/functions/updatePost","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/REST/controllers/mutation/updatePost/functions/updatePost.md","tags":[],"version":"current","frontMatter":{}}');var o=t(474848),r=t(28453);const i={},a=void 0,d={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Throws",id:"throws",level:2},{value:"Throws",id:"throws-1",level:2},{value:"Throws",id:"throws-2",level:2},{value:"Defined in",id:"defined-in",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/talawa-api-docs/",children:(0,o.jsx)(n.strong,{children:"talawa-api"})})," \u2022 ",(0,o.jsx)(n.strong,{children:"Docs"})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,o.jsx)(n.a,{href:"/docs/talawa-api-docs/REST/controllers/mutation/updatePost/",children:"REST/controllers/mutation/updatePost"})," / updatePost"]}),"\n",(0,o.jsx)(n.h1,{id:"function-updatepost",children:"Function: updatePost()"}),"\n",(0,o.jsxs)(n.p,{children:["> ",(0,o.jsx)(n.strong,{children:"updatePost"}),"(",(0,o.jsx)(n.code,{children:"req"}),", ",(0,o.jsx)(n.code,{children:"res"}),"): ",(0,o.jsx)(n.code,{children:"Promise"}),"<",(0,o.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,o.jsx)(n.p,{children:"Updates an existing post\nasync\nfunction - updatePost"}),"\n",(0,o.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(n.p,{children:["\u2022 ",(0,o.jsx)(n.strong,{children:"req"}),": ",(0,o.jsx)(n.a,{href:"/docs/talawa-api-docs/middleware/isAuth/interfaces/InterfaceAuthenticatedRequest",children:(0,o.jsx)(n.code,{children:"InterfaceAuthenticatedRequest"})})]}),"\n",(0,o.jsx)(n.p,{children:"Express request object with authenticated user"}),"\n",(0,o.jsxs)(n.p,{children:["\u2022 ",(0,o.jsx)(n.strong,{children:"res"}),": ",(0,o.jsx)(n.code,{children:"Response"}),"<",(0,o.jsx)(n.code,{children:"any"}),", ",(0,o.jsx)(n.code,{children:"Record"}),"<",(0,o.jsx)(n.code,{children:"string"}),", ",(0,o.jsx)(n.code,{children:"any"}),">>"]}),"\n",(0,o.jsx)(n.p,{children:"Express response object"}),"\n",(0,o.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Promise"}),"<",(0,o.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,o.jsx)(n.p,{children:"Promise<void> - Responds with updated post or error"}),"\n",(0,o.jsx)(n.p,{children:"Description\nThis controller handles post updates with the following features:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Validates user permissions (creator, organization admin, or super admin)"}),"\n",(0,o.jsx)(n.li,{children:"Supports file attachment updates with cleanup of old files"}),"\n",(0,o.jsx)(n.li,{children:"Enforces business rules for pinned posts and titles"}),"\n",(0,o.jsx)(n.li,{children:"Validates content length restrictions"}),"\n",(0,o.jsx)(n.li,{children:"Maintains cache consistency"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Request body expects:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"\\{\n  title?: string;\n  text?: string;\n  pinned?: boolean;\n\\}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Authorization Rules:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Post creator can edit their own posts"}),"\n",(0,o.jsx)(n.li,{children:"Organization admins can edit posts in their organizations"}),"\n",(0,o.jsx)(n.li,{children:"Super admins can edit any post"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"throws",children:"Throws"}),"\n",(0,o.jsx)(n.p,{children:"NotFoundError - When user or post is not found"}),"\n",(0,o.jsx)(n.h2,{id:"throws-1",children:"Throws"}),"\n",(0,o.jsx)(n.p,{children:"UnauthorizedError - When user lacks permissions to update the post"}),"\n",(0,o.jsx)(n.h2,{id:"throws-2",children:"Throws"}),"\n",(0,o.jsx)(n.p,{children:"InputValidationError - When title/text validation fails or pinned status requirements aren't met"}),"\n",(0,o.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/92443bb6a5ff3ed66457149a509401986a82e570/src/REST/controllers/mutation/updatePost.ts#L73",children:"src/REST/controllers/mutation/updatePost.ts:73"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(296540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);