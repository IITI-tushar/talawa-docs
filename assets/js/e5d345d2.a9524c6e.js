"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[392397],{723519:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"talawa-api-docs/resolvers/Mutation/removeUserTag/variables/removeUserTag","title":"removeUserTag","description":"talawa-api","source":"@site/docs/talawa-api-docs/resolvers/Mutation/removeUserTag/variables/removeUserTag.md","sourceDirName":"talawa-api-docs/resolvers/Mutation/removeUserTag/variables","slug":"/talawa-api-docs/resolvers/Mutation/removeUserTag/variables/removeUserTag","permalink":"/docs/talawa-api-docs/resolvers/Mutation/removeUserTag/variables/removeUserTag","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/removeUserTag/variables/removeUserTag.md","tags":[],"version":"current","frontMatter":{}}');var t=s(474848),n=s(28453);const i={},o=void 0,l={},d=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Param",id:"param-2",level:2},{value:"Returns",id:"returns",level:2},{value:"Defined in",id:"defined-in",level:2}];function c(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"/docs/talawa-api-docs/",children:(0,t.jsx)(a.strong,{children:"talawa-api"})})}),"\n",(0,t.jsx)(a.hr,{}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,t.jsx)(a.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/removeUserTag/",children:"resolvers/Mutation/removeUserTag"})," / removeUserTag"]}),"\n",(0,t.jsx)(a.h1,{id:"variable-removeusertag",children:"Variable: removeUserTag"}),"\n",(0,t.jsxs)(a.p,{children:["> ",(0,t.jsx)(a.code,{children:"const"})," ",(0,t.jsx)(a.strong,{children:"removeUserTag"}),": ",(0,t.jsx)(a.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,t.jsx)(a.code,{children:"MutationResolvers"})}),"[",(0,t.jsx)(a.code,{children:'"removeUserTag"'}),"]"]}),"\n",(0,t.jsx)(a.p,{children:"Removes a user tag from an organization."}),"\n",(0,t.jsx)(a.p,{children:"This function removes a specific tag associated with a user in an organization.\nIt checks whether the user has the proper authorization to delete the tag.\nIt also handles cases where the user or the tag is not found in the system."}),"\n",(0,t.jsx)(a.p,{children:"The function performs the following steps:"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsx)(a.li,{children:"Attempts to find the user in the cache or database."}),"\n",(0,t.jsx)(a.li,{children:"Verifies if the user exists."}),"\n",(0,t.jsx)(a.li,{children:"Attempts to find the user's profile in the cache or database."}),"\n",(0,t.jsx)(a.li,{children:"Checks if the user has the necessary permissions to delete the tag."}),"\n",(0,t.jsx)(a.li,{children:"Fetches the tag that needs to be deleted."}),"\n",(0,t.jsx)(a.li,{children:"Retrieves all child tags (including the parent tag) related to the organization."}),"\n",(0,t.jsx)(a.li,{children:"Deletes all related tags from the organization and user tag entries."}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"param",children:"Param"}),"\n",(0,t.jsx)(a.p,{children:"This parameter is not used in this resolver function."}),"\n",(0,t.jsx)(a.h2,{id:"param-1",children:"Param"}),"\n",(0,t.jsx)(a.p,{children:"The arguments provided by the GraphQL query, specifically containing the ID of the tag to be removed."}),"\n",(0,t.jsx)(a.h2,{id:"param-2",children:"Param"}),"\n",(0,t.jsx)(a.p,{children:"The context of the request, containing information about the currently authenticated user."}),"\n",(0,t.jsx)(a.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(a.p,{children:"The tag that was deleted."}),"\n",(0,t.jsx)(a.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/resolvers/Mutation/removeUserTag.ts#L43",children:"src/resolvers/Mutation/removeUserTag.ts:43"})})]})}function h(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,a,s)=>{s.d(a,{R:()=>i,x:()=>o});var r=s(296540);const t={},n=r.createContext(t);function i(e){const a=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(n.Provider,{value:a},e.children)}}}]);