"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[221981],{219044:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=n(785893),r=n(511151);const s={},i=void 0,o={id:"talawa-api-docs/resolvers/Mutation/createVenue/variables/createVenue",title:"createVenue",description:"talawa-api \u2022 Docs",source:"@site/docs/talawa-api-docs/resolvers/Mutation/createVenue/variables/createVenue.md",sourceDirName:"talawa-api-docs/resolvers/Mutation/createVenue/variables",slug:"/talawa-api-docs/resolvers/Mutation/createVenue/variables/createVenue",permalink:"/docs/talawa-api-docs/resolvers/Mutation/createVenue/variables/createVenue",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/createVenue/variables/createVenue.md",tags:[],version:"current",frontMatter:{}},c={},l=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Param",id:"param-2",level:2},{value:"Returns",id:"returns",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Defined in",id:"defined-in",level:2}];function d(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/docs/talawa-api-docs/",children:(0,t.jsx)(a.strong,{children:"talawa-api"})})," \u2022 ",(0,t.jsx)(a.strong,{children:"Docs"})]}),"\n",(0,t.jsx)(a.hr,{}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,t.jsx)(a.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/createVenue/",children:"resolvers/Mutation/createVenue"})," / createVenue"]}),"\n",(0,t.jsx)(a.h1,{id:"variable-createvenue",children:"Variable: createVenue"}),"\n",(0,t.jsxs)(a.p,{children:["> ",(0,t.jsx)(a.code,{children:"const"})," ",(0,t.jsx)(a.strong,{children:"createVenue"}),": ",(0,t.jsx)(a.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,t.jsx)(a.code,{children:"MutationResolvers"})}),"[",(0,t.jsx)(a.code,{children:'"createVenue"'}),"]"]}),"\n",(0,t.jsx)(a.p,{children:"Creates a new venue within an organization, if the user has appropriate permissions and the venue does not already exist."}),"\n",(0,t.jsx)(a.p,{children:"This resolver performs the following checks:"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsx)(a.li,{children:"Verifies the existence of the user and fetches their profile."}),"\n",(0,t.jsx)(a.li,{children:"Checks if the specified organization exists."}),"\n",(0,t.jsx)(a.li,{children:"Ensures the user is authorized to create a venue by verifying their admin or superadmin status within the organization."}),"\n",(0,t.jsx)(a.li,{children:"Validates that a venue name is provided."}),"\n",(0,t.jsx)(a.li,{children:"Ensures that no venue with the same name already exists within the organization."}),"\n",(0,t.jsx)(a.li,{children:"Uploads an image if provided and associates it with the venue."}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"param",children:"Param"}),"\n",(0,t.jsx)(a.p,{children:"The parent object, not used in this resolver."}),"\n",(0,t.jsx)(a.h2,{id:"param-1",children:"Param"}),"\n",(0,t.jsx)(a.p,{children:"The input arguments for the mutation, including the venue details and organization ID."}),"\n",(0,t.jsx)(a.h2,{id:"param-2",children:"Param"}),"\n",(0,t.jsx)(a.p,{children:"The context object, including the user ID, API root URL, and other necessary context for authorization and image upload."}),"\n",(0,t.jsx)(a.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(a.p,{children:"The created venue object, including the associated organization."}),"\n",(0,t.jsx)(a.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsx)(a.p,{children:"This function includes validation for user authorization, venue uniqueness, and handles image uploads if applicable."}),"\n",(0,t.jsx)(a.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/f4877b986932181336f42a7336754de05976cd97/src/resolvers/Mutation/createVenue.ts#L40",children:"src/resolvers/Mutation/createVenue.ts:40"})})]})}function u(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},511151:(e,a,n)=>{n.d(a,{Z:()=>o,a:()=>i});var t=n(667294);const r={},s=t.createContext(r);function i(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);