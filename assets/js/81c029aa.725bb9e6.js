"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[774172],{165891:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var i=t(785893),n=t(511151);const r={},a=void 0,c={id:"talawa-api-docs/resolvers/Mutation/cancelMembershipRequest/variables/cancelMembershipRequest",title:"cancelMembershipRequest",description:"talawa-api \u2022 Docs",source:"@site/docs/talawa-api-docs/resolvers/Mutation/cancelMembershipRequest/variables/cancelMembershipRequest.md",sourceDirName:"talawa-api-docs/resolvers/Mutation/cancelMembershipRequest/variables",slug:"/talawa-api-docs/resolvers/Mutation/cancelMembershipRequest/variables/cancelMembershipRequest",permalink:"/docs/talawa-api-docs/resolvers/Mutation/cancelMembershipRequest/variables/cancelMembershipRequest",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/cancelMembershipRequest/variables/cancelMembershipRequest.md",tags:[],version:"current",frontMatter:{}},l={},o=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Param",id:"param-2",level:2},{value:"Returns",id:"returns",level:2},{value:"See",id:"see",level:2},{value:"Defined in",id:"defined-in",level:2}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/talawa-api-docs/",children:(0,i.jsx)(s.strong,{children:"talawa-api"})})," \u2022 ",(0,i.jsx)(s.strong,{children:"Docs"})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,i.jsx)(s.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/cancelMembershipRequest/",children:"resolvers/Mutation/cancelMembershipRequest"})," / cancelMembershipRequest"]}),"\n",(0,i.jsx)(s.h1,{id:"variable-cancelmembershiprequest",children:"Variable: cancelMembershipRequest"}),"\n",(0,i.jsxs)(s.p,{children:["> ",(0,i.jsx)(s.code,{children:"const"})," ",(0,i.jsx)(s.strong,{children:"cancelMembershipRequest"}),": ",(0,i.jsx)(s.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,i.jsx)(s.code,{children:"MutationResolvers"})}),"[",(0,i.jsx)(s.code,{children:'"cancelMembershipRequest"'}),"]"]}),"\n",(0,i.jsx)(s.p,{children:"Mutation resolver function to cancel a membership request."}),"\n",(0,i.jsx)(s.p,{children:"This function performs the following actions:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Verifies that the membership request specified by ",(0,i.jsx)(s.code,{children:"args.membershipRequestId"})," exists."]}),"\n",(0,i.jsx)(s.li,{children:"Ensures that the organization associated with the membership request exists."}),"\n",(0,i.jsxs)(s.li,{children:["Confirms that the user specified by ",(0,i.jsx)(s.code,{children:"context.userId"})," exists."]}),"\n",(0,i.jsx)(s.li,{children:"Checks if the current user is the creator of the membership request."}),"\n",(0,i.jsx)(s.li,{children:"Deletes the membership request."}),"\n",(0,i.jsxs)(s.li,{children:["Updates the organization document to remove the membership request from its ",(0,i.jsx)(s.code,{children:"membershipRequests"})," list."]}),"\n",(0,i.jsxs)(s.li,{children:["Updates the user's document to remove the membership request from their ",(0,i.jsx)(s.code,{children:"membershipRequests"})," list."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"param",children:"Param"}),"\n",(0,i.jsx)(s.p,{children:"The parent object for the mutation. This parameter is not used in this resolver."}),"\n",(0,i.jsx)(s.h2,{id:"param-1",children:"Param"}),"\n",(0,i.jsx)(s.p,{children:"The arguments for the mutation, including:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"membershipRequestId"}),": The ID of the membership request to be canceled."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"param-2",children:"Param"}),"\n",(0,i.jsx)(s.p,{children:"The context for the mutation, including:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"userId"}),": The ID of the current user making the request."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(s.p,{children:"A promise that resolves to the deleted membership request."}),"\n",(0,i.jsx)(s.h2,{id:"see",children:"See"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"MembershipRequest - The MembershipRequest model used to interact with the membership requests collection in the database."}),"\n",(0,i.jsx)(s.li,{children:"Organization - The Organization model used to interact with the organizations collection in the database."}),"\n",(0,i.jsx)(s.li,{children:"User - The User model used to interact with the users collection in the database."}),"\n",(0,i.jsx)(s.li,{children:"MutationResolvers - The type definition for the mutation resolvers."}),"\n",(0,i.jsx)(s.li,{children:"findOrganizationsInCache - Service function to retrieve organizations from cache."}),"\n",(0,i.jsx)(s.li,{children:"cacheOrganizations - Service function to cache updated organization data."}),"\n",(0,i.jsx)(s.li,{children:"findUserInCache - Service function to retrieve users from cache."}),"\n",(0,i.jsx)(s.li,{children:"cacheUsers - Service function to cache updated user data."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/f4877b986932181336f42a7336754de05976cd97/src/resolvers/Mutation/cancelMembershipRequest.ts#L45",children:"src/resolvers/Mutation/cancelMembershipRequest.ts:45"})})]})}function d(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},511151:(e,s,t)=>{t.d(s,{Z:()=>c,a:()=>a});var i=t(667294);const n={},r=i.createContext(n);function a(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);