"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[397482],{593709:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=t(785893),s=t(511151);const a={},i=void 0,o={id:"talawa-api-docs/resolvers/Mutation/createVolunteerMembership/variables/createVolunteerMembership",title:"createVolunteerMembership",description:"talawa-api \u2022 Docs",source:"@site/docs/talawa-api-docs/resolvers/Mutation/createVolunteerMembership/variables/createVolunteerMembership.md",sourceDirName:"talawa-api-docs/resolvers/Mutation/createVolunteerMembership/variables",slug:"/talawa-api-docs/resolvers/Mutation/createVolunteerMembership/variables/createVolunteerMembership",permalink:"/docs/talawa-api-docs/resolvers/Mutation/createVolunteerMembership/variables/createVolunteerMembership",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/createVolunteerMembership/variables/createVolunteerMembership.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Param",id:"param-2",level:2},{value:"Returns",id:"returns",level:2},{value:"Defined in",id:"defined-in",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/talawa-api-docs/",children:(0,n.jsx)(r.strong,{children:"talawa-api"})})," \u2022 ",(0,n.jsx)(r.strong,{children:"Docs"})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,n.jsx)(r.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/createVolunteerMembership/",children:"resolvers/Mutation/createVolunteerMembership"})," / createVolunteerMembership"]}),"\n",(0,n.jsx)(r.h1,{id:"variable-createvolunteermembership",children:"Variable: createVolunteerMembership"}),"\n",(0,n.jsxs)(r.p,{children:["> ",(0,n.jsx)(r.code,{children:"const"})," ",(0,n.jsx)(r.strong,{children:"createVolunteerMembership"}),": ",(0,n.jsx)(r.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,n.jsx)(r.code,{children:"MutationResolvers"})}),"[",(0,n.jsx)(r.code,{children:'"createVolunteerMembership"'}),"]"]}),"\n",(0,n.jsx)(r.p,{children:"Creates a new event volunteer membership entry."}),"\n",(0,n.jsx)(r.p,{children:"This function performs the following actions:"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsx)(r.li,{children:"Validates the existence of the current user."}),"\n",(0,n.jsx)(r.li,{children:"Checks if the specified user and event exist."}),"\n",(0,n.jsx)(r.li,{children:"Creates a new volunteer entry for the event."}),"\n",(0,n.jsx)(r.li,{children:"Creates a volunteer membership record for the new volunteer."}),"\n",(0,n.jsx)(r.li,{children:"Returns the created vvolunteer membership record."}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"param",children:"Param"}),"\n",(0,n.jsx)(r.p,{children:"The parent object for the mutation. This parameter is not used in this resolver."}),"\n",(0,n.jsx)(r.h2,{id:"param-1",children:"Param"}),"\n",(0,n.jsx)(r.p,{children:"The arguments for the mutation, including:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"data.userId"}),": The ID of the user to be assigned as a volunteer."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"data.event"}),": The ID of the event for which the volunteer is being created."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"data.group"}),": The ID of the volunteer group to which the user is being added."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"data.status"}),": The status of the volunteer membership."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"param-2",children:"Param"}),"\n",(0,n.jsx)(r.p,{children:"The context for the mutation, including:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"userId"}),": The ID of the current user performing the operation."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:"The created event volunteer record."}),"\n",(0,n.jsx)(r.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/f4877b986932181336f42a7336754de05976cd97/src/resolvers/Mutation/createVolunteerMembership.ts#L31",children:"src/resolvers/Mutation/createVolunteerMembership.ts:31"})})]})}function h(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},511151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>i});var n=t(667294);const s={},a=n.createContext(s);function i(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);