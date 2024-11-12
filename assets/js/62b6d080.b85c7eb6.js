"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[765827],{168058:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"talawa-api-docs/resolvers/Mutation/createFundraisingCampaignPledge/variables/createFundraisingCampaignPledge","title":"createFundraisingCampaignPledge","description":"talawa-api \u2022 Docs","source":"@site/docs/talawa-api-docs/resolvers/Mutation/createFundraisingCampaignPledge/variables/createFundraisingCampaignPledge.md","sourceDirName":"talawa-api-docs/resolvers/Mutation/createFundraisingCampaignPledge/variables","slug":"/talawa-api-docs/resolvers/Mutation/createFundraisingCampaignPledge/variables/createFundraisingCampaignPledge","permalink":"/docs/talawa-api-docs/resolvers/Mutation/createFundraisingCampaignPledge/variables/createFundraisingCampaignPledge","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/createFundraisingCampaignPledge/variables/createFundraisingCampaignPledge.md","tags":[],"version":"current","frontMatter":{}}');var r=n(474848),s=n(28453);const t={},d=void 0,l={},c=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Param",id:"param-2",level:2},{value:"Returns",id:"returns",level:2},{value:"Defined in",id:"defined-in",level:2}];function o(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"/docs/talawa-api-docs/",children:(0,r.jsx)(a.strong,{children:"talawa-api"})})," \u2022 ",(0,r.jsx)(a.strong,{children:"Docs"})]}),"\n",(0,r.jsx)(a.hr,{}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,r.jsx)(a.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/createFundraisingCampaignPledge/",children:"resolvers/Mutation/createFundraisingCampaignPledge"})," / createFundraisingCampaignPledge"]}),"\n",(0,r.jsx)(a.h1,{id:"variable-createfundraisingcampaignpledge",children:"Variable: createFundraisingCampaignPledge"}),"\n",(0,r.jsxs)(a.p,{children:["> ",(0,r.jsx)(a.code,{children:"const"})," ",(0,r.jsx)(a.strong,{children:"createFundraisingCampaignPledge"}),": ",(0,r.jsx)(a.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,r.jsx)(a.code,{children:"MutationResolvers"})}),"[",(0,r.jsx)(a.code,{children:'"createFundraisingCampaignPledge"'}),"]"]}),"\n",(0,r.jsx)(a.p,{children:"Creates a new pledge for a fundraising campaign."}),"\n",(0,r.jsx)(a.p,{children:"This function performs the following actions:"}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsx)(a.li,{children:"Verifies the existence of the current user."}),"\n",(0,r.jsx)(a.li,{children:"Retrieves and caches the user's details if not already cached."}),"\n",(0,r.jsx)(a.li,{children:"Checks the validity of the provided or default campaign start and end dates."}),"\n",(0,r.jsx)(a.li,{children:"Verifies the existence of the specified fundraising campaign."}),"\n",(0,r.jsx)(a.li,{children:"Creates a new pledge for the specified campaign with the given details."}),"\n",(0,r.jsx)(a.li,{children:"Updates the campaign to include the newly created pledge."}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"param",children:"Param"}),"\n",(0,r.jsx)(a.p,{children:"The parent object for the mutation. This parameter is not used in this resolver."}),"\n",(0,r.jsx)(a.h2,{id:"param-1",children:"Param"}),"\n",(0,r.jsx)(a.p,{children:"The arguments for the mutation, including:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"data.campaignId"}),": The ID of the fundraising campaign for which the pledge is being created."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"data.userIds"}),": An array of user IDs associated with the pledge."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"data.startDate"}),": The start date of the pledge (optional; defaults to the campaign's start date)."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"data.endDate"}),": The end date of the pledge (optional; defaults to the campaign's end date)."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"data.amount"}),": The amount pledged."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"data.currency"}),": The currency of the pledged amount."]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"param-2",children:"Param"}),"\n",(0,r.jsx)(a.p,{children:"The context for the mutation, including:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"userId"}),": The ID of the current user performing the operation."]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(a.p,{children:"The created pledge record."}),"\n",(0,r.jsx)(a.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/bba5d82264abb62b9e358a3d3fe1af18a8a8f6e4/src/resolvers/Mutation/createFundraisingCampaignPledge.ts#L42",children:"src/resolvers/Mutation/createFundraisingCampaignPledge.ts:42"})})]})}function h(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>t,x:()=>d});var i=n(296540);const r={},s=i.createContext(r);function t(e){const a=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(s.Provider,{value:a},e.children)}}}]);