"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[767738],{966003:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"talawa-api-docs/resolvers/Mutation/checkOut/variables/checkOut","title":"checkOut","description":"talawa-api \u2022 Docs","source":"@site/docs/talawa-api-docs/resolvers/Mutation/checkOut/variables/checkOut.md","sourceDirName":"talawa-api-docs/resolvers/Mutation/checkOut/variables","slug":"/talawa-api-docs/resolvers/Mutation/checkOut/variables/checkOut","permalink":"/docs/talawa-api-docs/resolvers/Mutation/checkOut/variables/checkOut","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/checkOut/variables/checkOut.md","tags":[],"version":"current","frontMatter":{}}');var a=n(474848),s=n(28453);const c={},i=void 0,o={},h=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Param",id:"param-2",level:2},{value:"Returns",id:"returns",level:2},{value:"Throws",id:"throws",level:2},{value:"Throws",id:"throws-1",level:2},{value:"Throws",id:"throws-2",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Defined in",id:"defined-in",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/docs/talawa-api-docs/",children:(0,a.jsx)(t.strong,{children:"talawa-api"})})," \u2022 ",(0,a.jsx)(t.strong,{children:"Docs"})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,a.jsx)(t.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/checkOut/",children:"resolvers/Mutation/checkOut"})," / checkOut"]}),"\n",(0,a.jsx)(t.h1,{id:"variable-checkout",children:"Variable: checkOut"}),"\n",(0,a.jsxs)(t.p,{children:["> ",(0,a.jsx)(t.code,{children:"const"})," ",(0,a.jsx)(t.strong,{children:"checkOut"}),": ",(0,a.jsx)(t.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,a.jsx)(t.code,{children:"MutationResolvers"})}),"[",(0,a.jsx)(t.code,{children:'"checkOut"'}),"]"]}),"\n",(0,a.jsx)(t.p,{children:"Handles the check-out process for event attendees."}),"\n",(0,a.jsx)(t.p,{children:"This resolver function allows event admins or superadmins to check-out attendees from a specific event.\nIt verifies the existence of the current user, the event, and the attendee to be checked in,\nand ensures proper authorization before performing the check-in operation."}),"\n",(0,a.jsx)(t.h2,{id:"param",children:"Param"}),"\n",(0,a.jsx)(t.p,{children:"The parent resolver."}),"\n",(0,a.jsx)(t.h2,{id:"param-1",children:"Param"}),"\n",(0,a.jsx)(t.p,{children:"Arguments containing data for the check-in, including the eventId, userId"}),"\n",(0,a.jsx)(t.h2,{id:"param-2",children:"Param"}),"\n",(0,a.jsx)(t.p,{children:"Context object containing user authentication and request information."}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"The check-in data if successful."}),"\n",(0,a.jsx)(t.h2,{id:"throws",children:"Throws"}),"\n",(0,a.jsx)(t.p,{children:"NotFoundError if the current user, event, or attendee is not found."}),"\n",(0,a.jsx)(t.h2,{id:"throws-1",children:"Throws"}),"\n",(0,a.jsx)(t.p,{children:"UnauthorizedError if the current user lacks authorization to perform the check-out operation."}),"\n",(0,a.jsx)(t.h2,{id:"throws-2",children:"Throws"}),"\n",(0,a.jsx)(t.p,{children:"ConflictError if the attendee is not checked in and if the user is already checked out from the event."}),"\n",(0,a.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,a.jsx)(t.p,{children:"The function performs the following checks and operations:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Verifies the existence of the current user, event, and attendee."}),"\n",(0,a.jsx)(t.li,{children:"Checks if the current user is authorized to perform the check-out operation."}),"\n",(0,a.jsx)(t.li,{children:"Checks if the user is an event attendee."}),"\n",(0,a.jsx)(t.li,{children:"Checks if the attendee is checkedIn and if the attendee is already checked out."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/bba5d82264abb62b9e358a3d3fe1af18a8a8f6e4/src/resolvers/Mutation/checkOut.ts#L52",children:"src/resolvers/Mutation/checkOut.ts:52"})})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var r=n(296540);const a={},s=r.createContext(a);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);