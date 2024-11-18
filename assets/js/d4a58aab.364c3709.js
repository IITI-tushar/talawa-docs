"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[14017],{641361:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"talawa-api-docs/resolvers/Mutation/createFund/variables/createFund","title":"createFund","description":"talawa-api \u2022 Docs","source":"@site/docs/talawa-api-docs/resolvers/Mutation/createFund/variables/createFund.md","sourceDirName":"talawa-api-docs/resolvers/Mutation/createFund/variables","slug":"/talawa-api-docs/resolvers/Mutation/createFund/variables/createFund","permalink":"/docs/talawa-api-docs/resolvers/Mutation/createFund/variables/createFund","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/createFund/variables/createFund.md","tags":[],"version":"current","frontMatter":{}}');var t=a(474848),i=a(28453);const s={},d=void 0,c={},o=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Param",id:"param-2",level:2},{value:"Returns",id:"returns",level:2},{value:"Defined in",id:"defined-in",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/",children:(0,t.jsx)(n.strong,{children:"talawa-api"})})," \u2022 ",(0,t.jsx)(n.strong,{children:"Docs"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/createFund/",children:"resolvers/Mutation/createFund"})," / createFund"]}),"\n",(0,t.jsx)(n.h1,{id:"variable-createfund",children:"Variable: createFund"}),"\n",(0,t.jsxs)(n.p,{children:["> ",(0,t.jsx)(n.code,{children:"const"})," ",(0,t.jsx)(n.strong,{children:"createFund"}),": ",(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,t.jsx)(n.code,{children:"MutationResolvers"})}),"[",(0,t.jsx)(n.code,{children:'"createFund"'}),"]"]}),"\n",(0,t.jsx)(n.p,{children:"Creates a new fundraising fund for a specified organization."}),"\n",(0,t.jsx)(n.p,{children:"This function performs the following actions:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Verifies the existence of the current user."}),"\n",(0,t.jsx)(n.li,{children:"Retrieves and caches the user's profile if not already cached."}),"\n",(0,t.jsx)(n.li,{children:"Verifies the existence of the specified organization."}),"\n",(0,t.jsx)(n.li,{children:"Checks if the current user is an admin of the organization."}),"\n",(0,t.jsx)(n.li,{children:"Verifies that the fund does not already exist for the given organization."}),"\n",(0,t.jsx)(n.li,{children:"Creates a new fund with the provided details."}),"\n",(0,t.jsx)(n.li,{children:"Updates the organization's list of funds to include the newly created fund."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"param",children:"Param"}),"\n",(0,t.jsx)(n.p,{children:"The parent object for the mutation. This parameter is not used in this resolver."}),"\n",(0,t.jsx)(n.h2,{id:"param-1",children:"Param"}),"\n",(0,t.jsx)(n.p,{children:"The arguments for the mutation, including:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"data.organizationId"}),": The ID of the organization for which the fund is being created."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"data.name"}),": The name of the fund."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"data.refrenceNumber"}),": The reference number for the fund."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"data.taxDeductible"}),": Indicates if the fund is tax-deductible."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"data.isDefault"}),": Indicates if the fund is a default fund."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"data.isArchived"}),": Indicates if the fund is archived."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"param-2",children:"Param"}),"\n",(0,t.jsx)(n.p,{children:"The context for the mutation, including:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"userId"}),": The ID of the current user performing the operation."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"The created fund record."}),"\n",(0,t.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/a6e7ac91b581c9109559657faf0f934f3eb41fe7/src/resolvers/Mutation/createFund.ts#L43",children:"src/resolvers/Mutation/createFund.ts:43"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>d});var r=a(296540);const t={},i=r.createContext(t);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);