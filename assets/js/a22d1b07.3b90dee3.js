"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[717890],{365465:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"talawa-api-docs/resolvers/Mutation/createUserTag/variables/createUserTag","title":"createUserTag","description":"talawa-api \u2022 Docs","source":"@site/docs/talawa-api-docs/resolvers/Mutation/createUserTag/variables/createUserTag.md","sourceDirName":"talawa-api-docs/resolvers/Mutation/createUserTag/variables","slug":"/talawa-api-docs/resolvers/Mutation/createUserTag/variables/createUserTag","permalink":"/docs/talawa-api-docs/resolvers/Mutation/createUserTag/variables/createUserTag","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/createUserTag/variables/createUserTag.md","tags":[],"version":"current","frontMatter":{}}');var s=r(474848),n=r(28453);const i={},o=void 0,c={},l=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Param",id:"param-2",level:2},{value:"Returns",id:"returns",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Defined in",id:"defined-in",level:2}];function d(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/docs/talawa-api-docs/",children:(0,s.jsx)(a.strong,{children:"talawa-api"})})," \u2022 ",(0,s.jsx)(a.strong,{children:"Docs"})]}),"\n",(0,s.jsx)(a.hr,{}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,s.jsx)(a.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/createUserTag/",children:"resolvers/Mutation/createUserTag"})," / createUserTag"]}),"\n",(0,s.jsx)(a.h1,{id:"variable-createusertag",children:"Variable: createUserTag"}),"\n",(0,s.jsxs)(a.p,{children:["> ",(0,s.jsx)(a.code,{children:"const"})," ",(0,s.jsx)(a.strong,{children:"createUserTag"}),": ",(0,s.jsx)(a.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,s.jsx)(a.code,{children:"MutationResolvers"})}),"[",(0,s.jsx)(a.code,{children:'"createUserTag"'}),"]"]}),"\n",(0,s.jsx)(a.p,{children:"Creates a new tag for an organization if the user is authorized to do so."}),"\n",(0,s.jsx)(a.p,{children:"This resolver performs the following steps:"}),"\n",(0,s.jsxs)(a.ol,{children:["\n",(0,s.jsx)(a.li,{children:"Verifies that the current user exists and is fetched from the cache or database."}),"\n",(0,s.jsx)(a.li,{children:"Checks if the current user has an application profile."}),"\n",(0,s.jsx)(a.li,{children:"Ensures the current user is authorized to create a tag by being either a super admin or an admin for the specified organization."}),"\n",(0,s.jsx)(a.li,{children:"Checks if the provided organization exists."}),"\n",(0,s.jsx)(a.li,{children:"Validates that the parent tag (if provided) belongs to the specified organization."}),"\n",(0,s.jsx)(a.li,{children:"Ensures no other tag with the same name exists under the same parent tag."}),"\n",(0,s.jsx)(a.li,{children:"Creates a new tag if all validation checks pass."}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"param",children:"Param"}),"\n",(0,s.jsx)(a.p,{children:"The parent object, not used in this resolver."}),"\n",(0,s.jsx)(a.h2,{id:"param-1",children:"Param"}),"\n",(0,s.jsx)(a.p,{children:"The input arguments for the mutation, including the tag details and organization ID."}),"\n",(0,s.jsx)(a.h2,{id:"param-2",children:"Param"}),"\n",(0,s.jsx)(a.p,{children:"The context object, including the user ID and other necessary context for authorization."}),"\n",(0,s.jsx)(a.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(a.p,{children:"The created tag object."}),"\n",(0,s.jsx)(a.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsx)(a.p,{children:"This function is intended for creating new tags within an organization and includes validation to ensure the integrity of the tag creation process."}),"\n",(0,s.jsx)(a.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/bba5d82264abb62b9e358a3d3fe1af18a8a8f6e4/src/resolvers/Mutation/createUserTag.ts#L46",children:"src/resolvers/Mutation/createUserTag.ts:46"})})]})}function h(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,a,r)=>{r.d(a,{R:()=>i,x:()=>o});var t=r(296540);const s={},n=t.createContext(s);function i(e){const a=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(n.Provider,{value:a},e.children)}}}]);