"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[307418],{967391:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"talawa-api-docs/resolvers/Mutation/blockUser/variables/blockUser","title":"blockUser","description":"talawa-api \u2022 Docs","source":"@site/docs/talawa-api-docs/resolvers/Mutation/blockUser/variables/blockUser.md","sourceDirName":"talawa-api-docs/resolvers/Mutation/blockUser/variables","slug":"/talawa-api-docs/resolvers/Mutation/blockUser/variables/blockUser","permalink":"/docs/talawa-api-docs/resolvers/Mutation/blockUser/variables/blockUser","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/blockUser/variables/blockUser.md","tags":[],"version":"current","frontMatter":{}}');var t=n(474848),r=n(28453);const a={},o=void 0,l={},c=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Param",id:"param-2",level:2},{value:"Returns",id:"returns",level:2},{value:"See",id:"see",level:2},{value:"Defined in",id:"defined-in",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/talawa-api-docs/",children:(0,t.jsx)(s.strong,{children:"talawa-api"})})," \u2022 ",(0,t.jsx)(s.strong,{children:"Docs"})]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,t.jsx)(s.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/blockUser/",children:"resolvers/Mutation/blockUser"})," / blockUser"]}),"\n",(0,t.jsx)(s.h1,{id:"variable-blockuser",children:"Variable: blockUser"}),"\n",(0,t.jsxs)(s.p,{children:["> ",(0,t.jsx)(s.code,{children:"const"})," ",(0,t.jsx)(s.strong,{children:"blockUser"}),": ",(0,t.jsx)(s.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,t.jsx)(s.code,{children:"MutationResolvers"})}),"[",(0,t.jsx)(s.code,{children:'"blockUser"'}),"]"]}),"\n",(0,t.jsx)(s.p,{children:"Mutation resolver function to block a user from an organization."}),"\n",(0,t.jsx)(s.p,{children:"This function performs the following actions:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Verifies that the organization specified by ",(0,t.jsx)(s.code,{children:"args.organizationId"})," exists."]}),"\n",(0,t.jsxs)(s.li,{children:["Ensures that the user specified by ",(0,t.jsx)(s.code,{children:"args.userId"})," exists."]}),"\n",(0,t.jsx)(s.li,{children:"Checks if the user attempting to block the user is an admin of the organization."}),"\n",(0,t.jsx)(s.li,{children:"Verifies if the user to be blocked is currently a member of the organization."}),"\n",(0,t.jsx)(s.li,{children:"Ensures that the user is not attempting to block themselves."}),"\n",(0,t.jsxs)(s.li,{children:["Blocks the user by adding them to the organization's ",(0,t.jsx)(s.code,{children:"blockedUsers"})," list and removing them from the ",(0,t.jsx)(s.code,{children:"members"})," list."]}),"\n",(0,t.jsxs)(s.li,{children:["Updates the user's document to reflect that they have been blocked by the organization, and removes the organization from their ",(0,t.jsx)(s.code,{children:"joinedOrganizations"})," list."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"param",children:"Param"}),"\n",(0,t.jsx)(s.p,{children:"The parent object for the mutation. This parameter is not used in this resolver."}),"\n",(0,t.jsx)(s.h2,{id:"param-1",children:"Param"}),"\n",(0,t.jsx)(s.p,{children:"The arguments for the mutation, including:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"organizationId"}),": The ID of the organization from which the user is to be blocked."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"userId"}),": The ID of the user to be blocked."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"param-2",children:"Param"}),"\n",(0,t.jsx)(s.p,{children:"The context for the mutation, including:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"userId"}),": The ID of the current user making the request."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(s.p,{children:"A promise that resolves to the updated user document after blocking."}),"\n",(0,t.jsx)(s.h2,{id:"see",children:"See"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Organization - The Organization model used to interact with the organizations collection in the database."}),"\n",(0,t.jsx)(s.li,{children:"User - The User model used to interact with the users collection in the database."}),"\n",(0,t.jsx)(s.li,{children:"MutationResolvers - The type definition for the mutation resolvers."}),"\n",(0,t.jsx)(s.li,{children:"adminCheck - Utility function to check if the current user is an admin of the organization."}),"\n",(0,t.jsx)(s.li,{children:"findOrganizationsInCache - Service function to retrieve organizations from cache."}),"\n",(0,t.jsx)(s.li,{children:"cacheOrganizations - Service function to cache updated organization data."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/92443bb6a5ff3ed66457149a509401986a82e570/src/resolvers/Mutation/blockUser.ts#L45",children:"src/resolvers/Mutation/blockUser.ts:45"})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>o});var i=n(296540);const t={},r=i.createContext(t);function a(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);