"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[898997],{408348:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"talawa-api-docs/resolvers/Mutation/createMember/variables/createMember","title":"createMember","description":"talawa-api","source":"@site/docs/talawa-api-docs/resolvers/Mutation/createMember/variables/createMember.md","sourceDirName":"talawa-api-docs/resolvers/Mutation/createMember/variables","slug":"/talawa-api-docs/resolvers/Mutation/createMember/variables/createMember","permalink":"/docs/talawa-api-docs/resolvers/Mutation/createMember/variables/createMember","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/createMember/variables/createMember.md","tags":[],"version":"current","frontMatter":{}}');var s=r(474848),t=r(28453);const i={},o=void 0,c={},d=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Param",id:"param-2",level:2},{value:"Returns",id:"returns",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Defined in",id:"defined-in",level:2}];function l(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:(0,s.jsx)(a.a,{href:"/docs/talawa-api-docs/",children:(0,s.jsx)(a.strong,{children:"talawa-api"})})}),"\n",(0,s.jsx)(a.hr,{}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,s.jsx)(a.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/createMember/",children:"resolvers/Mutation/createMember"})," / createMember"]}),"\n",(0,s.jsx)(a.h1,{id:"variable-createmember",children:"Variable: createMember"}),"\n",(0,s.jsxs)(a.p,{children:["> ",(0,s.jsx)(a.code,{children:"const"})," ",(0,s.jsx)(a.strong,{children:"createMember"}),": ",(0,s.jsx)(a.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,s.jsx)(a.code,{children:"MutationResolvers"})}),"[",(0,s.jsx)(a.code,{children:'"createMember"'}),"]"]}),"\n",(0,s.jsx)(a.p,{children:"Adds a user as a member to an organization."}),"\n",(0,s.jsx)(a.p,{children:"This resolver performs the following actions:"}),"\n",(0,s.jsxs)(a.ol,{children:["\n",(0,s.jsx)(a.li,{children:"Verifies if the current user making the request exists and is either a superAdmin or an admin of the organization."}),"\n",(0,s.jsx)(a.li,{children:"Checks if the specified organization exists in the cache; if not, fetches it from the database and caches it."}),"\n",(0,s.jsx)(a.li,{children:"Checks if the specified user exists and is not already a member of the organization."}),"\n",(0,s.jsx)(a.li,{children:"Adds the user to the organization's member list and updates the user's joinedOrganizations list."}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"param",children:"Param"}),"\n",(0,s.jsx)(a.p,{children:"The parent object, not used in this resolver."}),"\n",(0,s.jsx)(a.h2,{id:"param-1",children:"Param"}),"\n",(0,s.jsx)(a.p,{children:"The input arguments for the mutation, including:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"input"}),": An object containing:","\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"organizationId"}),": The ID of the organization to which the user will be added."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"userId"}),": The ID of the user to be added as a member."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"param-2",children:"Param"}),"\n",(0,s.jsx)(a.p,{children:"The context object containing user information (context.userId)."}),"\n",(0,s.jsx)(a.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(a.p,{children:"An object containing:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"organization"}),": The updated organization object."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"userErrors"}),": A list of errors encountered during the process."]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsx)(a.p,{children:"This function returns the updated organization and any errors encountered. It ensures that the user is not already a member before adding them and handles caching of the organization."}),"\n",(0,s.jsx)(a.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/resolvers/Mutation/createMember.ts#L47",children:"src/resolvers/Mutation/createMember.ts:47"})})]})}function h(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,a,r)=>{r.d(a,{R:()=>i,x:()=>o});var n=r(296540);const s={},t=n.createContext(s);function i(e){const a=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(t.Provider,{value:a},e.children)}}}]);