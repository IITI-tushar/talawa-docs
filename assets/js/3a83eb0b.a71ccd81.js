"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[703839],{208807:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"talawa-api-docs/resolvers/middleware/currentUserExists/functions/currentUserExists","title":"currentUserExists","description":"talawa-api","source":"@site/docs/talawa-api-docs/resolvers/middleware/currentUserExists/functions/currentUserExists.md","sourceDirName":"talawa-api-docs/resolvers/middleware/currentUserExists/functions","slug":"/talawa-api-docs/resolvers/middleware/currentUserExists/functions/currentUserExists","permalink":"/docs/talawa-api-docs/resolvers/middleware/currentUserExists/functions/currentUserExists","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/middleware/currentUserExists/functions/currentUserExists.md","tags":[],"version":"current","frontMatter":{}}');var t=r(474848),i=r(28453);const d={},c=void 0,a={},l=[{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters",level:3},{value:"next",id:"next",level:4},{value:"Returns",id:"returns-1",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"root",id:"root",level:5},{value:"args",id:"args",level:5},{value:"context",id:"context",level:5},{value:"userId",id:"userid",level:6},{value:"info",id:"info",level:5},{value:"Returns",id:"returns-2",level:4},{value:"See",id:"see",level:2},{value:"Defined in",id:"defined-in",level:2}];function o(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/docs/talawa-api-docs/",children:(0,t.jsx)(s.strong,{children:"talawa-api"})})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,t.jsx)(s.a,{href:"/docs/talawa-api-docs/resolvers/middleware/currentUserExists/",children:"resolvers/middleware/currentUserExists"})," / currentUserExists"]}),"\n",(0,t.jsx)(s.h1,{id:"function-currentuserexists",children:"Function: currentUserExists()"}),"\n",(0,t.jsxs)(s.p,{children:["> ",(0,t.jsx)(s.strong,{children:"currentUserExists"}),"(): (",(0,t.jsx)(s.code,{children:"next"}),") => (",(0,t.jsx)(s.code,{children:"root"}),", ",(0,t.jsx)(s.code,{children:"args"}),", ",(0,t.jsx)(s.code,{children:"context"}),", ",(0,t.jsx)(s.code,{children:"info"}),") => ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"any"}),">"]}),"\n",(0,t.jsx)(s.p,{children:"Middleware function to check if the current user exists in the database."}),"\n",(0,t.jsx)(s.p,{children:"This function is used to check if the user making a request to the server exists in the database.\nIf the user does not exist, the function throws an error."}),"\n",(0,t.jsx)(s.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"Function"})}),"\n",(0,t.jsx)(s.p,{children:"The result of the next function in the resolver chain."}),"\n",(0,t.jsx)(s.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(s.h4,{id:"next",children:"next"}),"\n",(0,t.jsxs)(s.p,{children:["(",(0,t.jsx)(s.code,{children:"root"}),", ",(0,t.jsx)(s.code,{children:"args"}),", ",(0,t.jsx)(s.code,{children:"context"}),", ",(0,t.jsx)(s.code,{children:"info"}),") => ",(0,t.jsx)(s.code,{children:"any"})]}),"\n",(0,t.jsx)(s.h3,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"Function"})}),"\n",(0,t.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsx)(s.h5,{id:"root",children:"root"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"any"})}),"\n",(0,t.jsx)(s.h5,{id:"args",children:"args"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"any"})}),"\n",(0,t.jsx)(s.h5,{id:"context",children:"context"}),"\n",(0,t.jsx)(s.h6,{id:"userid",children:"userId"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"any"})}),"\n",(0,t.jsx)(s.h5,{id:"info",children:"info"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"any"})}),"\n",(0,t.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"any"}),">"]}),"\n",(0,t.jsx)(s.h2,{id:"see",children:"See"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"User - The User model used to interact with the users collection in the database."}),"\n",(0,t.jsx)(s.li,{children:"USER_NOT_FOUND_ERROR - The error message to display when the user is not found."}),"\n",(0,t.jsx)(s.li,{children:"errors - The library used to create custom errors in the application."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/039b0f127fb8caa46d57186ab4b3bb27fe150903/src/resolvers/middleware/currentUserExists.ts#L21",children:"src/resolvers/middleware/currentUserExists.ts:21"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>d,x:()=>c});var n=r(296540);const t={},i=n.createContext(t);function d(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);