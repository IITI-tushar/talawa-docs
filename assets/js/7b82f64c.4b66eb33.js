"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[356493],{661896:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"talawa-api-docs/resolvers/Mutation/createActionItemCategory/variables/createActionItemCategory","title":"createActionItemCategory","description":"talawa-api","source":"@site/docs/talawa-api-docs/resolvers/Mutation/createActionItemCategory/variables/createActionItemCategory.md","sourceDirName":"talawa-api-docs/resolvers/Mutation/createActionItemCategory/variables","slug":"/talawa-api-docs/resolvers/Mutation/createActionItemCategory/variables/createActionItemCategory","permalink":"/docs/talawa-api-docs/resolvers/Mutation/createActionItemCategory/variables/createActionItemCategory","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/createActionItemCategory/variables/createActionItemCategory.md","tags":[],"version":"current","frontMatter":{}}');var i=a(474848),r=a(28453);const o={},s=void 0,c={},l=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Param",id:"param-2",level:2},{value:"Returns",id:"returns",level:2},{value:"See",id:"see",level:2},{value:"Defined in",id:"defined-in",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/talawa-api-docs/",children:(0,i.jsx)(t.strong,{children:"talawa-api"})})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,i.jsx)(t.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/createActionItemCategory/",children:"resolvers/Mutation/createActionItemCategory"})," / createActionItemCategory"]}),"\n",(0,i.jsx)(t.h1,{id:"variable-createactionitemcategory",children:"Variable: createActionItemCategory"}),"\n",(0,i.jsxs)(t.p,{children:["> ",(0,i.jsx)(t.code,{children:"const"})," ",(0,i.jsx)(t.strong,{children:"createActionItemCategory"}),": ",(0,i.jsx)(t.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,i.jsx)(t.code,{children:"MutationResolvers"})}),"[",(0,i.jsx)(t.code,{children:'"createActionItemCategory"'}),"]"]}),"\n",(0,i.jsx)(t.p,{children:"Mutation resolver function to create a new ActionItemCategory."}),"\n",(0,i.jsx)(t.p,{children:"This function performs the following actions:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Verifies that the current user, identified by ",(0,i.jsx)(t.code,{children:"context.userId"}),", exists."]}),"\n",(0,i.jsxs)(t.li,{children:["Ensures that the organization specified by ",(0,i.jsx)(t.code,{children:"args.organizationId"})," exists."]}),"\n",(0,i.jsx)(t.li,{children:"Checks if the current user is authorized to perform the operation (must be an admin)."}),"\n",(0,i.jsx)(t.li,{children:"Checks if an ActionItemCategory with the provided name already exists for the specified organization."}),"\n",(0,i.jsx)(t.li,{children:"Creates a new ActionItemCategory if no conflicts are found."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"param",children:"Param"}),"\n",(0,i.jsx)(t.p,{children:"The parent object for the mutation. This parameter is not used in this resolver."}),"\n",(0,i.jsx)(t.h2,{id:"param-1",children:"Param"}),"\n",(0,i.jsx)(t.p,{children:"The arguments for the mutation, including:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"name"}),": The name of the ActionItemCategory to be created."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"organizationId"}),": The ID of the organization where the ActionItemCategory will be created."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"param-2",children:"Param"}),"\n",(0,i.jsx)(t.p,{children:"The context for the mutation, including:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"userId"}),": The ID of the current user making the request."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"A promise that resolves to the created ActionItemCategory."}),"\n",(0,i.jsx)(t.h2,{id:"see",children:"See"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"ActionItemCategory - The ActionItemCategory model used to interact with the ActionItemCategory collection in the database."}),"\n",(0,i.jsx)(t.li,{children:"Organization - The Organization model used to interact with the organizations collection in the database."}),"\n",(0,i.jsx)(t.li,{children:"User - The User model used to interact with the users collection in the database."}),"\n",(0,i.jsx)(t.li,{children:"MutationResolvers - The type definition for the mutation resolvers."}),"\n",(0,i.jsx)(t.li,{children:"findOrganizationsInCache - Service function to retrieve organizations from cache."}),"\n",(0,i.jsx)(t.li,{children:"cacheOrganizations - Service function to cache updated organization data."}),"\n",(0,i.jsx)(t.li,{children:"findUserInCache - Service function to retrieve users from cache."}),"\n",(0,i.jsx)(t.li,{children:"cacheUsers - Service function to cache updated user data."}),"\n",(0,i.jsx)(t.li,{children:"adminCheck - Utility function to check if a user is an admin of an organization."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/resolvers/Mutation/createActionItemCategory.ts#L46",children:"src/resolvers/Mutation/createActionItemCategory.ts:46"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>s});var n=a(296540);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);