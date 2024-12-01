"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[211806],{258986:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>t,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"talawa-api-docs/resolvers/Mutation/addPledgeToFundraisingCampaign/variables/addPledgeToFundraisingCampaign","title":"addPledgeToFundraisingCampaign","description":"talawa-api","source":"@site/docs/talawa-api-docs/resolvers/Mutation/addPledgeToFundraisingCampaign/variables/addPledgeToFundraisingCampaign.md","sourceDirName":"talawa-api-docs/resolvers/Mutation/addPledgeToFundraisingCampaign/variables","slug":"/talawa-api-docs/resolvers/Mutation/addPledgeToFundraisingCampaign/variables/addPledgeToFundraisingCampaign","permalink":"/docs/talawa-api-docs/resolvers/Mutation/addPledgeToFundraisingCampaign/variables/addPledgeToFundraisingCampaign","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/addPledgeToFundraisingCampaign/variables/addPledgeToFundraisingCampaign.md","tags":[],"version":"current","frontMatter":{}}');var d=n(474848),s=n(28453);const r={},t=void 0,o={},l=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Param",id:"param-2",level:2},{value:"Returns",id:"returns",level:2},{value:"Defined in",id:"defined-in",level:2}];function c(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.p,{children:(0,d.jsx)(a.a,{href:"/docs/talawa-api-docs/",children:(0,d.jsx)(a.strong,{children:"talawa-api"})})}),"\n",(0,d.jsx)(a.hr,{}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,d.jsx)(a.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/addPledgeToFundraisingCampaign/",children:"resolvers/Mutation/addPledgeToFundraisingCampaign"})," / addPledgeToFundraisingCampaign"]}),"\n",(0,d.jsx)(a.h1,{id:"variable-addpledgetofundraisingcampaign",children:"Variable: addPledgeToFundraisingCampaign"}),"\n",(0,d.jsxs)(a.p,{children:["> ",(0,d.jsx)(a.code,{children:"const"})," ",(0,d.jsx)(a.strong,{children:"addPledgeToFundraisingCampaign"}),": ",(0,d.jsx)(a.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,d.jsx)(a.code,{children:"MutationResolvers"})}),"[",(0,d.jsx)(a.code,{children:'"addPledgeToFundraisingCampaign"'}),"]"]}),"\n",(0,d.jsx)(a.p,{children:"Mutation resolver to add a pledge to a fundraising campaign."}),"\n",(0,d.jsx)(a.p,{children:"This function adds a specified pledge to a fundraising campaign. It performs several checks:"}),"\n",(0,d.jsxs)(a.ol,{children:["\n",(0,d.jsx)(a.li,{children:"Verifies that the current user exists."}),"\n",(0,d.jsx)(a.li,{children:"Confirms that the pledge exists."}),"\n",(0,d.jsx)(a.li,{children:"Checks that the campaign exists."}),"\n",(0,d.jsx)(a.li,{children:"Ensures the user has made the pledge."}),"\n",(0,d.jsx)(a.li,{children:"Verifies that the campaign is not already associated with the pledge."}),"\n"]}),"\n",(0,d.jsx)(a.p,{children:"If any of these conditions are not met, appropriate errors are thrown."}),"\n",(0,d.jsx)(a.h2,{id:"param",children:"Param"}),"\n",(0,d.jsx)(a.p,{children:"The parent object for the mutation (not used in this function)."}),"\n",(0,d.jsx)(a.h2,{id:"param-1",children:"Param"}),"\n",(0,d.jsx)(a.p,{children:"The arguments provided with the request, including:"}),"\n",(0,d.jsxs)(a.ul,{children:["\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:"pledgeId"}),": The ID of the pledge to be added."]}),"\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:"campaignId"}),": The ID of the campaign to which the pledge will be added."]}),"\n"]}),"\n",(0,d.jsx)(a.h2,{id:"param-2",children:"Param"}),"\n",(0,d.jsx)(a.p,{children:"The context of the entire application, containing user information and other context-specific data."}),"\n",(0,d.jsx)(a.h2,{id:"returns",children:"Returns"}),"\n",(0,d.jsx)(a.p,{children:"A promise that resolves to the updated pledge object."}),"\n",(0,d.jsx)(a.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,d.jsx)(a.p,{children:(0,d.jsx)(a.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/resolvers/Mutation/addPledgeToFundraisingCampaign.ts#L41",children:"src/resolvers/Mutation/addPledgeToFundraisingCampaign.ts:41"})})]})}function p(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,d.jsx)(a,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>r,x:()=>t});var i=n(296540);const d={},s=i.createContext(d);function r(e){const a=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),i.createElement(s.Provider,{value:a},e.children)}}}]);