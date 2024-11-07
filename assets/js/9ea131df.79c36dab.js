"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[992490],{934591:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var t=r(785893),a=r(511151);const s={},i=void 0,c={id:"talawa-api-docs/resolvers/Mutation/checkIn/variables/checkIn",title:"checkIn",description:"talawa-api \u2022 Docs",source:"@site/docs/talawa-api-docs/resolvers/Mutation/checkIn/variables/checkIn.md",sourceDirName:"talawa-api-docs/resolvers/Mutation/checkIn/variables",slug:"/talawa-api-docs/resolvers/Mutation/checkIn/variables/checkIn",permalink:"/docs/talawa-api-docs/resolvers/Mutation/checkIn/variables/checkIn",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/checkIn/variables/checkIn.md",tags:[],version:"current",frontMatter:{}},o={},h=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Param",id:"param-2",level:2},{value:"Returns",id:"returns",level:2},{value:"Throws",id:"throws",level:2},{value:"Throws",id:"throws-1",level:2},{value:"Throws",id:"throws-2",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Defined in",id:"defined-in",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/",children:(0,t.jsx)(n.strong,{children:"talawa-api"})})," \u2022 ",(0,t.jsx)(n.strong,{children:"Docs"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/checkIn/",children:"resolvers/Mutation/checkIn"})," / checkIn"]}),"\n",(0,t.jsx)(n.h1,{id:"variable-checkin",children:"Variable: checkIn"}),"\n",(0,t.jsxs)(n.p,{children:["> ",(0,t.jsx)(n.code,{children:"const"})," ",(0,t.jsx)(n.strong,{children:"checkIn"}),": ",(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,t.jsx)(n.code,{children:"MutationResolvers"})}),"[",(0,t.jsx)(n.code,{children:'"checkIn"'}),"]"]}),"\n",(0,t.jsx)(n.p,{children:"Handles the check-in process for event attendees."}),"\n",(0,t.jsx)(n.p,{children:"This resolver function allows event admins or superadmins to check-in attendees for a specific event.\nIt verifies the existence of the current user, the event, and the attendee to be checked in,\nand ensures proper authorization before performing the check-in operation."}),"\n",(0,t.jsx)(n.h2,{id:"param",children:"Param"}),"\n",(0,t.jsx)(n.p,{children:"The parent resolver."}),"\n",(0,t.jsx)(n.h2,{id:"param-1",children:"Param"}),"\n",(0,t.jsx)(n.p,{children:"Arguments containing data for the check-in, including the eventId, userId."}),"\n",(0,t.jsx)(n.h2,{id:"param-2",children:"Param"}),"\n",(0,t.jsx)(n.p,{children:"Context object containing user authentication and request information."}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"The check-in data if successful."}),"\n",(0,t.jsx)(n.h2,{id:"throws",children:"Throws"}),"\n",(0,t.jsx)(n.p,{children:"NotFoundError if the current user, event, or attendee is not found."}),"\n",(0,t.jsx)(n.h2,{id:"throws-1",children:"Throws"}),"\n",(0,t.jsx)(n.p,{children:"UnauthorizedError if the current user lacks authorization to perform the check-in operation."}),"\n",(0,t.jsx)(n.h2,{id:"throws-2",children:"Throws"}),"\n",(0,t.jsx)(n.p,{children:"ConflictError if the attendee is already checked in for the event."}),"\n",(0,t.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsx)(n.p,{children:"The function performs the following checks and operations:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Verifies the existence of the current user, event, and attendee."}),"\n",(0,t.jsx)(n.li,{children:"Checks if the current user is authorized to perform the check-in operation."}),"\n",(0,t.jsx)(n.li,{children:"Checks if the attendee is already registered for the event. If so, updates the check-in status and isCheckedIn."}),"\n",(0,t.jsx)(n.li,{children:"Checks if the attendee is not already checked in for the event then creates a new check-in entry and create new eventAttendee with chechInId and isCheckedIn."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/f4877b986932181336f42a7336754de05976cd97/src/resolvers/Mutation/checkIn.ts#L50",children:"src/resolvers/Mutation/checkIn.ts:50"})})]})}function l(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},511151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>i});var t=r(667294);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);