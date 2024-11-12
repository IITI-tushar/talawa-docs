"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[924098],{644618:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"talawa-api-docs/resolvers/Mutation/createEvent/variables/createEvent","title":"createEvent","description":"talawa-api \u2022 Docs","source":"@site/docs/talawa-api-docs/resolvers/Mutation/createEvent/variables/createEvent.md","sourceDirName":"talawa-api-docs/resolvers/Mutation/createEvent/variables","slug":"/talawa-api-docs/resolvers/Mutation/createEvent/variables/createEvent","permalink":"/docs/talawa-api-docs/resolvers/Mutation/createEvent/variables/createEvent","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/createEvent/variables/createEvent.md","tags":[],"version":"current","frontMatter":{}}');var r=t(474848),s=t(28453);const i={},o=void 0,c={},l=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Param",id:"param-2",level:2},{value:"Returns",id:"returns",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Defined in",id:"defined-in",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/talawa-api-docs/",children:(0,r.jsx)(n.strong,{children:"talawa-api"})})," \u2022 ",(0,r.jsx)(n.strong,{children:"Docs"})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,r.jsx)(n.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/createEvent/",children:"resolvers/Mutation/createEvent"})," / createEvent"]}),"\n",(0,r.jsx)(n.h1,{id:"variable-createevent",children:"Variable: createEvent"}),"\n",(0,r.jsxs)(n.p,{children:["> ",(0,r.jsx)(n.code,{children:"const"})," ",(0,r.jsx)(n.strong,{children:"createEvent"}),": ",(0,r.jsx)(n.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,r.jsx)(n.code,{children:"MutationResolvers"})}),"[",(0,r.jsx)(n.code,{children:'"createEvent"'}),"]"]}),"\n",(0,r.jsx)(n.p,{children:"Creates a new event and associates it with an organization."}),"\n",(0,r.jsx)(n.p,{children:"This resolver handles both recurring and non-recurring events, performing the following steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Validates the existence of the user, their app user profile, and the associated organization."}),"\n",(0,r.jsx)(n.li,{children:"Checks if the user is authorized to create an event in the organization."}),"\n",(0,r.jsx)(n.li,{children:"Validates the provided event details, including title, description, location, and date range."}),"\n",(0,r.jsx)(n.li,{children:"Creates the event using the appropriate method based on whether it's recurring or not."}),"\n",(0,r.jsx)(n.li,{children:"Uses a database transaction to ensure data consistency."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"param",children:"Param"}),"\n",(0,r.jsx)(n.p,{children:"The parent object, not used in this resolver."}),"\n",(0,r.jsx)(n.h2,{id:"param-1",children:"Param"}),"\n",(0,r.jsx)(n.p,{children:"The input arguments for the mutation, including:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"data"}),": An object containing:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"organizationId"}),": The ID of the organization to associate with the event."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"title"}),": The title of the event (max 256 characters)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"description"}),": A description of the event (max 500 characters)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"location"}),": The location of the event (max 50 characters)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"startDate"}),": The start date of the event."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"endDate"}),": The end date of the event."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"recurring"}),": A boolean indicating if the event is recurring."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"param-2",children:"Param"}),"\n",(0,r.jsx)(n.p,{children:"The context object containing user information (context.userId)."}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:"A promise that resolves to the created event object."}),"\n",(0,r.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"This function uses a transaction to ensure that either all operations succeed or none do, maintaining data integrity."}),"\n",(0,r.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/bba5d82264abb62b9e358a3d3fe1af18a8a8f6e4/src/resolvers/Mutation/createEvent.ts#L56",children:"src/resolvers/Mutation/createEvent.ts:56"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var a=t(296540);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);