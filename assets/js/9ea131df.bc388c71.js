"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[293561],{817383:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"talawa-api-docs/resolvers/Mutation/checkIn/variables/checkIn","title":"checkIn","description":"talawa-api","source":"@site/docs/talawa-api-docs/resolvers/Mutation/checkIn/variables/checkIn.md","sourceDirName":"talawa-api-docs/resolvers/Mutation/checkIn/variables","slug":"/talawa-api-docs/resolvers/Mutation/checkIn/variables/checkIn","permalink":"/docs/talawa-api-docs/resolvers/Mutation/checkIn/variables/checkIn","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/checkIn/variables/checkIn.md","tags":[],"version":"current","frontMatter":{}}');var a=t(474848),s=t(28453);const c={},i=void 0,o={},d=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Param",id:"param-2",level:2},{value:"Returns",id:"returns",level:2},{value:"Throws",id:"throws",level:2},{value:"Throws",id:"throws-1",level:2},{value:"Throws",id:"throws-2",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Defined in",id:"defined-in",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/talawa-api-docs/",children:(0,a.jsx)(n.strong,{children:"talawa-api"})})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,a.jsx)(n.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/checkIn/",children:"resolvers/Mutation/checkIn"})," / checkIn"]}),"\n",(0,a.jsx)(n.h1,{id:"variable-checkin",children:"Variable: checkIn"}),"\n",(0,a.jsxs)(n.p,{children:["> ",(0,a.jsx)(n.code,{children:"const"})," ",(0,a.jsx)(n.strong,{children:"checkIn"}),": ",(0,a.jsx)(n.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,a.jsx)(n.code,{children:"MutationResolvers"})}),"[",(0,a.jsx)(n.code,{children:'"checkIn"'}),"]"]}),"\n",(0,a.jsx)(n.p,{children:"Handles the check-in process for event attendees."}),"\n",(0,a.jsx)(n.p,{children:"This resolver function allows event admins or superadmins to check-in attendees for a specific event.\nIt verifies the existence of the current user, the event, and the attendee to be checked in,\nand ensures proper authorization before performing the check-in operation."}),"\n",(0,a.jsx)(n.h2,{id:"param",children:"Param"}),"\n",(0,a.jsx)(n.p,{children:"The parent resolver."}),"\n",(0,a.jsx)(n.h2,{id:"param-1",children:"Param"}),"\n",(0,a.jsx)(n.p,{children:"Arguments containing data for the check-in, including the eventId, userId."}),"\n",(0,a.jsx)(n.h2,{id:"param-2",children:"Param"}),"\n",(0,a.jsx)(n.p,{children:"Context object containing user authentication and request information."}),"\n",(0,a.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(n.p,{children:"The check-in data if successful."}),"\n",(0,a.jsx)(n.h2,{id:"throws",children:"Throws"}),"\n",(0,a.jsx)(n.p,{children:"NotFoundError if the current user, event, or attendee is not found."}),"\n",(0,a.jsx)(n.h2,{id:"throws-1",children:"Throws"}),"\n",(0,a.jsx)(n.p,{children:"UnauthorizedError if the current user lacks authorization to perform the check-in operation."}),"\n",(0,a.jsx)(n.h2,{id:"throws-2",children:"Throws"}),"\n",(0,a.jsx)(n.p,{children:"ConflictError if the attendee is already checked in for the event."}),"\n",(0,a.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,a.jsx)(n.p,{children:"The function performs the following checks and operations:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Verifies the existence of the current user, event, and attendee."}),"\n",(0,a.jsx)(n.li,{children:"Checks if the current user is authorized to perform the check-in operation."}),"\n",(0,a.jsx)(n.li,{children:"Checks if the attendee is already registered for the event. If so, updates the check-in status and isCheckedIn."}),"\n",(0,a.jsx)(n.li,{children:"Checks if the attendee is not already checked in for the event then creates a new check-in entry and create new eventAttendee with chechInId and isCheckedIn."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/resolvers/Mutation/checkIn.ts#L50",children:"src/resolvers/Mutation/checkIn.ts:50"})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var r=t(296540);const a={},s=r.createContext(a);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);