"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[189894],{588273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"talawa-api-docs/middleware/isAuth/functions/isAuthMiddleware","title":"isAuthMiddleware","description":"talawa-api","source":"@site/docs/talawa-api-docs/middleware/isAuth/functions/isAuthMiddleware.md","sourceDirName":"talawa-api-docs/middleware/isAuth/functions","slug":"/talawa-api-docs/middleware/isAuth/functions/isAuthMiddleware","permalink":"/docs/talawa-api-docs/middleware/isAuth/functions/isAuthMiddleware","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/middleware/isAuth/functions/isAuthMiddleware.md","tags":[],"version":"current","frontMatter":{}}');var i=n(474848),a=n(28453);const d={},r=void 0,c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"req",id:"req",level:3},{value:"res",id:"res",level:3},{value:"next",id:"next",level:3},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Defined in",id:"defined-in",level:2}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/talawa-api-docs/",children:(0,i.jsx)(t.strong,{children:"talawa-api"})})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,i.jsx)(t.a,{href:"/docs/talawa-api-docs/middleware/isAuth/",children:"middleware/isAuth"})," / isAuthMiddleware"]}),"\n",(0,i.jsx)(t.h1,{id:"function-isauthmiddleware",children:"Function: isAuthMiddleware()"}),"\n",(0,i.jsxs)(t.p,{children:["> ",(0,i.jsx)(t.strong,{children:"isAuthMiddleware"}),"(",(0,i.jsx)(t.code,{children:"req"}),", ",(0,i.jsx)(t.code,{children:"res"}),", ",(0,i.jsx)(t.code,{children:"next"}),"): ",(0,i.jsx)(t.code,{children:"void"})]}),"\n",(0,i.jsx)(t.p,{children:"Middleware for REST APIs to authenticate users based on the JWT token in the Authorization header."}),"\n",(0,i.jsxs)(t.p,{children:["This middleware checks if the incoming request has a valid JWT token. It sets the authentication\nstatus, user ID, and token expiration status on the ",(0,i.jsx)(t.code,{children:"req"})," object for downstream middleware and\nroute handlers to use."]}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsx)(t.h3,{id:"req",children:"req"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/talawa-api-docs/middleware/isAuth/interfaces/InterfaceAuthenticatedRequest",children:(0,i.jsx)(t.code,{children:"InterfaceAuthenticatedRequest"})})}),"\n",(0,i.jsxs)(t.p,{children:["The incoming request object. The JWT token is expected in the ",(0,i.jsx)(t.code,{children:"Authorization"})," header."]}),"\n",(0,i.jsx)(t.h3,{id:"res",children:"res"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"Response"})}),"\n",(0,i.jsx)(t.p,{children:"The response object. If authentication fails, an HTTP 401 response will be sent."}),"\n",(0,i.jsx)(t.h3,{id:"next",children:"next"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"NextFunction"})}),"\n",(0,i.jsx)(t.p,{children:"The next middleware function in the stack. It is called if the user is authenticated."}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"void"})}),"\n",(0,i.jsx)(t.p,{children:"Returns a 401 Unauthorized response if the user is not authenticated or the token has expired."}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:'app.use("/api/protected-route", isAuthMiddleware, (req, res) =\\> \\{\n  if (req.isAuth) \\{\n    res.json(\\{ message: "This is a protected route" \\});\n  \\}\n\\});\n'})}),"\n",(0,i.jsx)(t.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/middleware/isAuth.ts#L110",children:"src/middleware/isAuth.ts:110"})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>r});var s=n(296540);const i={},a=s.createContext(i);function d(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);