"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[657353],{976096:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"talawa-api-docs/resolvers/Query/getVenueByOrgId/variables/getVenueByOrgId","title":"getVenueByOrgId","description":"talawa-api","source":"@site/docs/talawa-api-docs/resolvers/Query/getVenueByOrgId/variables/getVenueByOrgId.md","sourceDirName":"talawa-api-docs/resolvers/Query/getVenueByOrgId/variables","slug":"/talawa-api-docs/resolvers/Query/getVenueByOrgId/variables/getVenueByOrgId","permalink":"/docs/talawa-api-docs/resolvers/Query/getVenueByOrgId/variables/getVenueByOrgId","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Query/getVenueByOrgId/variables/getVenueByOrgId.md","tags":[],"version":"current","frontMatter":{}}');var i=n(474848),t=n(28453);const a={},o=void 0,d={},l=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Returns",id:"returns",level:2},{value:"Defined in",id:"defined-in",level:2}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"/docs/talawa-api-docs/",children:(0,i.jsx)(r.strong,{children:"talawa-api"})})}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,i.jsx)(r.a,{href:"/docs/talawa-api-docs/resolvers/Query/getVenueByOrgId/",children:"resolvers/Query/getVenueByOrgId"})," / getVenueByOrgId"]}),"\n",(0,i.jsx)(r.h1,{id:"variable-getvenuebyorgid",children:"Variable: getVenueByOrgId"}),"\n",(0,i.jsxs)(r.p,{children:["> ",(0,i.jsx)(r.code,{children:"const"})," ",(0,i.jsx)(r.strong,{children:"getVenueByOrgId"}),": ",(0,i.jsx)(r.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/QueryResolvers",children:(0,i.jsx)(r.code,{children:"QueryResolvers"})}),"[",(0,i.jsx)(r.code,{children:'"getVenueByOrgId"'}),"]"]}),"\n",(0,i.jsx)(r.p,{children:"Retrieves venues associated with a specific organization, with optional filtering and sorting."}),"\n",(0,i.jsx)(r.p,{children:"This function performs the following steps:"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["Constructs the query filter using the ",(0,i.jsx)(r.code,{children:"getWhere"})," helper function based on provided filter criteria."]}),"\n",(0,i.jsxs)(r.li,{children:["Determines the sorting order using the ",(0,i.jsx)(r.code,{children:"getSort"})," helper function based on provided sort criteria."]}),"\n",(0,i.jsxs)(r.li,{children:["Queries the ",(0,i.jsx)(r.code,{children:"Venue"})," collection in the database to find venues that match the specified organization ID and any additional filter criteria."]}),"\n",(0,i.jsxs)(r.li,{children:["Limits the number of results based on the ",(0,i.jsx)(r.code,{children:"first"})," argument and skips results based on the ",(0,i.jsx)(r.code,{children:"skip"})," argument."]}),"\n",(0,i.jsx)(r.li,{children:"Sorts the results according to the specified sort criteria."}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"param",children:"Param"}),"\n",(0,i.jsx)(r.p,{children:"This parameter is not used in this resolver function but is included for compatibility with GraphQL resolver signatures."}),"\n",(0,i.jsx)(r.h2,{id:"param-1",children:"Param"}),"\n",(0,i.jsx)(r.p,{children:"The arguments provided by the GraphQL query, including:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"orgId"}),": The ID of the organization for which venues are being retrieved."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"where"}),": Optional filter criteria to apply to the venue query."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"orderBy"}),": Optional sorting criteria for the results."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"first"}),": Optional limit on the number of results to return."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"skip"}),": Optional number of results to skip for pagination."]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(r.p,{children:"A promise that resolves to an array of venues matching the query criteria."}),"\n",(0,i.jsx)(r.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/5c5b29a0ea487bda8306089fe128f43f3be29f94/src/resolvers/Query/getVenueByOrgId.ts#L27",children:"src/resolvers/Query/getVenueByOrgId.ts:27"})})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>o});var s=n(296540);const i={},t=s.createContext(i);function a(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);