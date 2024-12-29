"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[680390],{567010:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"talawa-api-docs/REST/controllers/mutation/createPost/functions/createPost","title":"createPost","description":"talawa-api","source":"@site/docs/talawa-api-docs/REST/controllers/mutation/createPost/functions/createPost.md","sourceDirName":"talawa-api-docs/REST/controllers/mutation/createPost/functions","slug":"/talawa-api-docs/REST/controllers/mutation/createPost/functions/createPost","permalink":"/docs/talawa-api-docs/REST/controllers/mutation/createPost/functions/createPost","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/REST/controllers/mutation/createPost/functions/createPost.md","tags":[],"version":"current","frontMatter":{}}');var r=n(474848),o=n(28453);const a={},i=void 0,c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"req",id:"req",level:3},{value:"res",id:"res",level:3},{value:"Returns",id:"returns",level:2},{value:"Throws",id:"throws",level:2},{value:"Throws",id:"throws-1",level:2},{value:"Throws",id:"throws-2",level:2},{value:"Defined in",id:"defined-in",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/talawa-api-docs/",children:(0,r.jsx)(t.strong,{children:"talawa-api"})})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,r.jsx)(t.a,{href:"/docs/talawa-api-docs/REST/controllers/mutation/createPost/",children:"REST/controllers/mutation/createPost"})," / createPost"]}),"\n",(0,r.jsx)(t.h1,{id:"function-createpost",children:"Function: createPost()"}),"\n",(0,r.jsxs)(t.p,{children:["> ",(0,r.jsx)(t.strong,{children:"createPost"}),"(",(0,r.jsx)(t.code,{children:"req"}),", ",(0,r.jsx)(t.code,{children:"res"}),"): ",(0,r.jsx)(t.code,{children:"Promise"}),"<",(0,r.jsx)(t.code,{children:"void"}),">"]}),"\n",(0,r.jsx)(t.p,{children:"Creates a new post within an organization\nasync\nfunction - createPost"}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(t.h3,{id:"req",children:"req"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/talawa-api-docs/middleware/isAuth/interfaces/InterfaceAuthenticatedRequest",children:(0,r.jsx)(t.code,{children:"InterfaceAuthenticatedRequest"})})}),"\n",(0,r.jsx)(t.p,{children:"Express request object with authenticated user"}),"\n",(0,r.jsx)(t.h3,{id:"res",children:"res"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"Response"})}),"\n",(0,r.jsx)(t.p,{children:"Express response object"}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Promise"}),"<",(0,r.jsx)(t.code,{children:"void"}),">"]}),"\n",(0,r.jsx)(t.p,{children:"Promise<void> - Responds with created post or error"}),"\n",(0,r.jsx)(t.p,{children:"Description\nThis controller handles post creation with the following features:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Validates user membership in the organization"}),"\n",(0,r.jsx)(t.li,{children:"Supports file attachments"}),"\n",(0,r.jsx)(t.li,{children:"Handles post pinning with proper authorization"}),"\n",(0,r.jsx)(t.li,{children:"Validates title and text length"}),"\n",(0,r.jsx)(t.li,{children:"Caches created posts and updated organizations"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Request body expects:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"\\{\n  organizationId: string;\n  title?: string;\n  text: string;\n  pinned?: boolean;\n\\}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"throws",children:"Throws"}),"\n",(0,r.jsx)(t.p,{children:"NotFoundError - When user or organization is not found"}),"\n",(0,r.jsx)(t.h2,{id:"throws-1",children:"Throws"}),"\n",(0,r.jsx)(t.p,{children:"UnauthorizedError - When user is not authorized or lacks permissions"}),"\n",(0,r.jsx)(t.h2,{id:"throws-2",children:"Throws"}),"\n",(0,r.jsx)(t.p,{children:"InputValidationError - When title or text validation fails"}),"\n",(0,r.jsx)(t.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/REST/controllers/mutation/createPost.ts#L71",children:"src/REST/controllers/mutation/createPost.ts:71"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var s=n(296540);const r={},o=s.createContext(r);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);