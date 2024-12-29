"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[101469],{846409:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"talawa-api-docs/resolvers/Mutation/addUserImage/variables/addUserImage","title":"addUserImage","description":"talawa-api","source":"@site/docs/talawa-api-docs/resolvers/Mutation/addUserImage/variables/addUserImage.md","sourceDirName":"talawa-api-docs/resolvers/Mutation/addUserImage/variables","slug":"/talawa-api-docs/resolvers/Mutation/addUserImage/variables/addUserImage","permalink":"/docs/talawa-api-docs/resolvers/Mutation/addUserImage/variables/addUserImage","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/addUserImage/variables/addUserImage.md","tags":[],"version":"current","frontMatter":{}}');var n=s(474848),t=s(28453);const i={},d=void 0,o={},l=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Param",id:"param-2",level:2},{value:"Returns",id:"returns",level:2},{value:"See",id:"see",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Defined in",id:"defined-in",level:2}];function c(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"/docs/talawa-api-docs/",children:(0,n.jsx)(a.strong,{children:"talawa-api"})})}),"\n",(0,n.jsx)(a.hr,{}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,n.jsx)(a.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/addUserImage/",children:"resolvers/Mutation/addUserImage"})," / addUserImage"]}),"\n",(0,n.jsx)(a.h1,{id:"variable-adduserimage",children:"Variable: addUserImage"}),"\n",(0,n.jsxs)(a.p,{children:["> ",(0,n.jsx)(a.code,{children:"const"})," ",(0,n.jsx)(a.strong,{children:"addUserImage"}),": ",(0,n.jsx)(a.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,n.jsx)(a.code,{children:"MutationResolvers"})}),"[",(0,n.jsx)(a.code,{children:'"addUserImage"'}),"]"]}),"\n",(0,n.jsx)(a.p,{children:"Mutation resolver function to add or update a user's profile image."}),"\n",(0,n.jsx)(a.p,{children:"This function performs the following actions:"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["Retrieves the current user from the cache or database based on the ",(0,n.jsx)(a.code,{children:"userId"})," from the context."]}),"\n",(0,n.jsx)(a.li,{children:"Checks if the current user exists. If not, throws a not found error."}),"\n",(0,n.jsx)(a.li,{children:"Uploads the provided encoded image file and updates the user's profile image with the new file path."}),"\n",(0,n.jsx)(a.li,{children:"Updates the user document in the database with the new image information."}),"\n",(0,n.jsx)(a.li,{children:"Caches the updated user data."}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"param",children:"Param"}),"\n",(0,n.jsx)(a.p,{children:"The parent object for the mutation. Typically, this is not used in this resolver."}),"\n",(0,n.jsx)(a.h2,{id:"param-1",children:"Param"}),"\n",(0,n.jsx)(a.p,{children:"The arguments for the mutation, including:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"file"}),": The encoded image file to be uploaded."]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"param-2",children:"Param"}),"\n",(0,n.jsx)(a.p,{children:"The context for the mutation, including:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"userId"}),": The ID of the current user making the request."]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(a.p,{children:"A promise that resolves to the updated user document with the new image."}),"\n",(0,n.jsx)(a.h2,{id:"see",children:"See"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"User - The User model used to interact with the users collection in the database."}),"\n",(0,n.jsx)(a.li,{children:"MutationResolvers - The type definition for the mutation resolvers."}),"\n",(0,n.jsx)(a.li,{children:"uploadEncodedImage - Utility function to handle the upload of an encoded image file."}),"\n",(0,n.jsx)(a.li,{children:"cacheUsers - Service function to cache the updated user data."}),"\n",(0,n.jsx)(a.li,{children:"findUserInCache - Service function to retrieve users from cache."}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(a.p,{children:["The function first attempts to retrieve the user from the cache using ",(0,n.jsx)(a.code,{children:"findUserInCache"}),".\nIf the user is not found in the cache, it queries the database.\nIt then performs the image upload and updates the user's profile image before saving the changes to the database."]}),"\n",(0,n.jsx)(a.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/resolvers/Mutation/addUserImage.ts#L39",children:"src/resolvers/Mutation/addUserImage.ts:39"})})]})}function h(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,a,s)=>{s.d(a,{R:()=>i,x:()=>d});var r=s(296540);const n={},t=r.createContext(n);function i(e){const a=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(t.Provider,{value:a},e.children)}}}]);