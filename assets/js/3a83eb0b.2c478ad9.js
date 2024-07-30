"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[65222],{7448:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var n=r(85893),t=r(11151);const i={},c=void 0,d={id:"talawa-api-docs/resolvers/middleware/currentUserExists/functions/currentUserExists",title:"currentUserExists",description:"talawa-api \u2022 Docs",source:"@site/docs/talawa-api-docs/resolvers/middleware/currentUserExists/functions/currentUserExists.md",sourceDirName:"talawa-api-docs/resolvers/middleware/currentUserExists/functions",slug:"/talawa-api-docs/resolvers/middleware/currentUserExists/functions/currentUserExists",permalink:"/docs/talawa-api-docs/resolvers/middleware/currentUserExists/functions/currentUserExists",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/middleware/currentUserExists/functions/currentUserExists.md",tags:[],version:"current",frontMatter:{}},a={},o=[{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"See",id:"see",level:2},{value:"Defined in",id:"defined-in",level:2}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/talawa-api-docs/",children:(0,n.jsx)(s.strong,{children:"talawa-api"})})," \u2022 ",(0,n.jsx)(s.strong,{children:"Docs"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,n.jsx)(s.a,{href:"/docs/talawa-api-docs/resolvers/middleware/currentUserExists/",children:"resolvers/middleware/currentUserExists"})," / currentUserExists"]}),"\n",(0,n.jsx)(s.h1,{id:"function-currentuserexists",children:"Function: currentUserExists()"}),"\n",(0,n.jsxs)(s.p,{children:["> ",(0,n.jsx)(s.strong,{children:"currentUserExists"}),"(): (",(0,n.jsx)(s.code,{children:"next"}),") => (",(0,n.jsx)(s.code,{children:"root"}),", ",(0,n.jsx)(s.code,{children:"args"}),", ",(0,n.jsx)(s.code,{children:"context"}),", ",(0,n.jsx)(s.code,{children:"info"}),") => ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"any"}),">"]}),"\n",(0,n.jsx)(s.p,{children:"Middleware function to check if the current user exists in the database."}),"\n",(0,n.jsx)(s.p,{children:"This function is used to check if the user making a request to the server exists in the database.\nIf the user does not exist, the function throws an error."}),"\n",(0,n.jsx)(s.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"Function"})}),"\n",(0,n.jsx)(s.p,{children:"The result of the next function in the resolver chain."}),"\n",(0,n.jsx)(s.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"next"})]}),"\n",(0,n.jsx)(s.h3,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"Function"})}),"\n",(0,n.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"root"}),": ",(0,n.jsx)(s.code,{children:"any"})]}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"args"}),": ",(0,n.jsx)(s.code,{children:"any"})]}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"context"})]}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"context.userId"}),": ",(0,n.jsx)(s.code,{children:"any"})]}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"info"}),": ",(0,n.jsx)(s.code,{children:"any"})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"any"}),">"]}),"\n",(0,n.jsx)(s.h2,{id:"see",children:"See"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"User - The User model used to interact with the users collection in the database."}),"\n",(0,n.jsx)(s.li,{children:"USER_NOT_FOUND_ERROR - The error message to display when the user is not found."}),"\n",(0,n.jsx)(s.li,{children:"errors - The library used to create custom errors in the application."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/1f38da5423898626c6ebfa24896a9c3d008195c6/src/resolvers/middleware/currentUserExists.ts#L21",children:"src/resolvers/middleware/currentUserExists.ts:21"})})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,s,r)=>{r.d(s,{Z:()=>d,a:()=>c});var n=r(67294);const t={},i=n.createContext(t);function c(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);