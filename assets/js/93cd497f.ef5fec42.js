"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[128884],{991598:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"talawa-api-docs/resolvers/Mutation/blockPluginCreationBySuperadmin/variables/blockPluginCreationBySuperadmin","title":"blockPluginCreationBySuperadmin","description":"talawa-api \u2022 Docs","source":"@site/docs/talawa-api-docs/resolvers/Mutation/blockPluginCreationBySuperadmin/variables/blockPluginCreationBySuperadmin.md","sourceDirName":"talawa-api-docs/resolvers/Mutation/blockPluginCreationBySuperadmin/variables","slug":"/talawa-api-docs/resolvers/Mutation/blockPluginCreationBySuperadmin/variables/blockPluginCreationBySuperadmin","permalink":"/docs/talawa-api-docs/resolvers/Mutation/blockPluginCreationBySuperadmin/variables/blockPluginCreationBySuperadmin","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/blockPluginCreationBySuperadmin/variables/blockPluginCreationBySuperadmin.md","tags":[],"version":"current","frontMatter":{}}');var r=i(474848),s=i(28453);const t={},o=void 0,l={},d=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Param",id:"param-2",level:2},{value:"Returns",id:"returns",level:2},{value:"Defined in",id:"defined-in",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/talawa-api-docs/",children:(0,r.jsx)(n.strong,{children:"talawa-api"})})," \u2022 ",(0,r.jsx)(n.strong,{children:"Docs"})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,r.jsx)(n.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/blockPluginCreationBySuperadmin/",children:"resolvers/Mutation/blockPluginCreationBySuperadmin"})," / blockPluginCreationBySuperadmin"]}),"\n",(0,r.jsx)(n.h1,{id:"variable-blockplugincreationbysuperadmin",children:"Variable: blockPluginCreationBySuperadmin"}),"\n",(0,r.jsxs)(n.p,{children:["> ",(0,r.jsx)(n.code,{children:"const"})," ",(0,r.jsx)(n.strong,{children:"blockPluginCreationBySuperadmin"}),": ",(0,r.jsx)(n.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,r.jsx)(n.code,{children:"MutationResolvers"})}),"[",(0,r.jsx)(n.code,{children:'"blockPluginCreationBySuperadmin"'}),"]"]}),"\n",(0,r.jsx)(n.p,{children:"Allows a superadmin to enable or disable plugin creation for a specific user."}),"\n",(0,r.jsx)(n.p,{children:"This function performs several checks:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Verifies if the current user exists."}),"\n",(0,r.jsx)(n.li,{children:"Ensures that the current user has an associated app user profile."}),"\n",(0,r.jsx)(n.li,{children:"Confirms that the current user is a superadmin."}),"\n",(0,r.jsxs)(n.li,{children:["Checks if the target user exists and updates their ",(0,r.jsx)(n.code,{children:"pluginCreationAllowed"})," field based on the provided value."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"param",children:"Param"}),"\n",(0,r.jsx)(n.p,{children:"The parent object for the mutation (not used in this function)."}),"\n",(0,r.jsx)(n.h2,{id:"param-1",children:"Param"}),"\n",(0,r.jsx)(n.p,{children:"The arguments provided with the request, including:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"userId"}),": The ID of the user whose plugin creation permissions are being modified."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"blockUser"}),": A boolean indicating whether to block (",(0,r.jsx)(n.code,{children:"true"}),") or allow (",(0,r.jsx)(n.code,{children:"false"}),") plugin creation for the user."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"param-2",children:"Param"}),"\n",(0,r.jsx)(n.p,{children:"The context of the entire application, including user information and other context-specific data."}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:["A promise that resolves to the updated user app profile object with the new ",(0,r.jsx)(n.code,{children:"pluginCreationAllowed"})," value."]}),"\n",(0,r.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/92443bb6a5ff3ed66457149a509401986a82e570/src/resolvers/Mutation/blockPluginCreationBySuperadmin.ts#L34",children:"src/resolvers/Mutation/blockPluginCreationBySuperadmin.ts:34"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>o});var a=i(296540);const r={},s=a.createContext(r);function t(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);