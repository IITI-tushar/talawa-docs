"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[677770],{149449:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"talawa-api-docs/resolvers/Mutation/addOrganizationImage/variables/addOrganizationImage","title":"addOrganizationImage","description":"talawa-api","source":"@site/docs/talawa-api-docs/resolvers/Mutation/addOrganizationImage/variables/addOrganizationImage.md","sourceDirName":"talawa-api-docs/resolvers/Mutation/addOrganizationImage/variables","slug":"/talawa-api-docs/resolvers/Mutation/addOrganizationImage/variables/addOrganizationImage","permalink":"/docs/talawa-api-docs/resolvers/Mutation/addOrganizationImage/variables/addOrganizationImage","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/addOrganizationImage/variables/addOrganizationImage.md","tags":[],"version":"current","frontMatter":{}}');var t=n(474848),r=n(28453);const o={},s=void 0,d={},l=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Param",id:"param-2",level:2},{value:"Returns",id:"returns",level:2},{value:"See",id:"see",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Defined in",id:"defined-in",level:2}];function c(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"/docs/talawa-api-docs/",children:(0,t.jsx)(a.strong,{children:"talawa-api"})})}),"\n",(0,t.jsx)(a.hr,{}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,t.jsx)(a.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/addOrganizationImage/",children:"resolvers/Mutation/addOrganizationImage"})," / addOrganizationImage"]}),"\n",(0,t.jsx)(a.h1,{id:"variable-addorganizationimage",children:"Variable: addOrganizationImage"}),"\n",(0,t.jsxs)(a.p,{children:["> ",(0,t.jsx)(a.code,{children:"const"})," ",(0,t.jsx)(a.strong,{children:"addOrganizationImage"}),": ",(0,t.jsx)(a.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,t.jsx)(a.code,{children:"MutationResolvers"})}),"[",(0,t.jsx)(a.code,{children:'"addOrganizationImage"'}),"]"]}),"\n",(0,t.jsx)(a.p,{children:"Mutation resolver function to add or update an organization's image."}),"\n",(0,t.jsx)(a.p,{children:"This function performs the following actions:"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["Retrieves the organization from the cache or database based on the provided ",(0,t.jsx)(a.code,{children:"organizationId"}),"."]}),"\n",(0,t.jsx)(a.li,{children:"Checks if the organization exists. If not, throws a not found error."}),"\n",(0,t.jsx)(a.li,{children:"Verifies if the current user is an admin of the organization."}),"\n",(0,t.jsx)(a.li,{children:"Uploads the provided image file and updates the organization's image field with the new file name."}),"\n",(0,t.jsx)(a.li,{children:"Updates the organization document in the database with the new image information."}),"\n",(0,t.jsx)(a.li,{children:"Caches the updated organization data."}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"param",children:"Param"}),"\n",(0,t.jsx)(a.p,{children:"The parent object for the mutation. Typically, this is not used in this resolver."}),"\n",(0,t.jsx)(a.h2,{id:"param-1",children:"Param"}),"\n",(0,t.jsx)(a.p,{children:"The arguments for the mutation, including:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"organizationId"}),": The ID of the organization to which the image is being added or updated."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"file"}),": The encoded image file to be uploaded."]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"param-2",children:"Param"}),"\n",(0,t.jsx)(a.p,{children:"The context for the mutation, including:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"userId"}),": The ID of the current user making the request."]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(a.p,{children:"A promise that resolves to the updated organization document with the new image."}),"\n",(0,t.jsx)(a.h2,{id:"see",children:"See"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Organization - The Organization model used to interact with the organizations collection in the database."}),"\n",(0,t.jsx)(a.li,{children:"MutationResolvers - The type definition for the mutation resolvers."}),"\n",(0,t.jsx)(a.li,{children:"adminCheck - Utility function to verify if a user is an admin of an organization."}),"\n",(0,t.jsx)(a.li,{children:"uploadEncodedImage - Utility function to handle the upload of an encoded image file."}),"\n",(0,t.jsx)(a.li,{children:"cacheOrganizations - Service function to cache the updated organization data."}),"\n",(0,t.jsx)(a.li,{children:"findOrganizationsInCache - Service function to retrieve organizations from cache."}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(a.p,{children:["The function uses the ",(0,t.jsx)(a.code,{children:"findOrganizationsInCache"})," method to first attempt to retrieve the organization from the cache.\nIf the organization is not found in the cache, it queries the database.\nIt then verifies the user's admin status and performs the image upload before updating the organization's image field."]}),"\n",(0,t.jsx)(a.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/6bd0fecc1032af2aa70d925c85724d9fec2350f9/src/resolvers/Mutation/addOrganizationImage.ts#L44",children:"src/resolvers/Mutation/addOrganizationImage.ts:44"})})]})}function h(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>s});var i=n(296540);const t={},r=i.createContext(t);function o(e){const a=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:a},e.children)}}}]);