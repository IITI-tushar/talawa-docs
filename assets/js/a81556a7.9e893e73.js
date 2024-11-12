"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[30203],{814728:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"talawa-admin-docs/screens/OrganizationFundCampaign/OrganizationFundCampagins/functions/default","title":"default","description":"talawa-admin \u2022 Docs","source":"@site/docs/talawa-admin-docs/screens/OrganizationFundCampaign/OrganizationFundCampagins/functions/default.md","sourceDirName":"talawa-admin-docs/screens/OrganizationFundCampaign/OrganizationFundCampagins/functions","slug":"/talawa-admin-docs/screens/OrganizationFundCampaign/OrganizationFundCampagins/functions/default","permalink":"/docs/talawa-admin-docs/screens/OrganizationFundCampaign/OrganizationFundCampagins/functions/default","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-admin-docs/screens/OrganizationFundCampaign/OrganizationFundCampagins/functions/default.md","tags":[],"version":"current","frontMatter":{}}');var s=a(474848),d=a(28453);const t={},r=void 0,c={},o=[{value:"Functionality",id:"functionality",level:3},{value:"State",id:"state",level:3},{value:"Methods",id:"methods",level:3},{value:"GraphQL Queries",id:"graphql-queries",level:3},{value:"Rendering",id:"rendering",level:3},{value:"Returns",id:"returns",level:2},{value:"Defined in",id:"defined-in",level:2}];function l(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,d.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"/docs/talawa-admin-docs/",children:(0,s.jsx)(e.strong,{children:"talawa-admin"})})," \u2022 ",(0,s.jsx)(e.strong,{children:"Docs"})]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"/docs/talawa-admin-docs/modules",children:"talawa-admin"})," / ",(0,s.jsx)(e.a,{href:"/docs/talawa-admin-docs/screens/OrganizationFundCampaign/OrganizationFundCampagins/",children:"screens/OrganizationFundCampaign/OrganizationFundCampagins"})," / default"]}),"\n",(0,s.jsx)(e.h1,{id:"function-default",children:"Function: default()"}),"\n",(0,s.jsxs)(e.p,{children:["> ",(0,s.jsx)(e.strong,{children:"default"}),"(): ",(0,s.jsx)(e.code,{children:"Element"})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"orgFundCampaign"})," component displays a list of fundraising campaigns for a specific fund within an organization.\nIt allows users to search, sort, view and edit campaigns."]}),"\n",(0,s.jsx)(e.h3,{id:"functionality",children:"Functionality"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Displays a data grid with campaigns information, including their names, start and end dates, funding goals, and actions."}),"\n",(0,s.jsx)(e.li,{children:"Provides search functionality to filter campaigns by name."}),"\n",(0,s.jsx)(e.li,{children:"Offers sorting options based on funding goal and end date."}),"\n",(0,s.jsx)(e.li,{children:"Opens modals for creating or editing campaigns."}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"state",children:"State"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"campaign"}),": The current campaign being edited or deleted."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"searchTerm"}),": The term used for searching campaigns by name."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"sortBy"}),": The current sorting criteria for campaigns."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"modalState"}),": An object indicating the visibility of different modals (",(0,s.jsx)(e.code,{children:"same"})," for create/edit)."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"campaignModalMode"}),": Determines if the modal is in 'edit' or 'create' mode."]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"handleOpenModal(campaign: InterfaceCampaignInfo | null, mode: 'edit' | 'create')"}),": Opens the modal for creating or editing a campaign."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"handleClick(campaignId: string)"}),": Navigates to the pledge details page for a specific campaign."]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"graphql-queries",children:"GraphQL Queries"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Uses ",(0,s.jsx)(e.code,{children:"FUND_CAMPAIGN"})," query to fetch the list of campaigns based on the provided fund ID, search term, and sorting criteria."]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"rendering",children:"Rendering"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Renders a ",(0,s.jsx)(e.code,{children:"DataGrid"})," component with campaigns information."]}),"\n",(0,s.jsx)(e.li,{children:"Displays modals for creating and editing campaigns."}),"\n",(0,s.jsxs)(e.li,{children:["Shows error and loading states using ",(0,s.jsx)(e.code,{children:"Loader"})," and error message components."]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"Element"})}),"\n",(0,s.jsx)(e.p,{children:"The rendered component including breadcrumbs, search and filter controls, data grid, and modals."}),"\n",(0,s.jsx)(e.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://github.com/PalisadoesFoundation/talawa-admin/blob/9dd5d7fd647f8a7c9e1c1e14bf645b71b32c51c2/src/screens/OrganizationFundCampaign/OrganizationFundCampagins.tsx#L77",children:"src/screens/OrganizationFundCampaign/OrganizationFundCampagins.tsx:77"})})]})}function h(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},28453:(n,e,a)=>{a.d(e,{R:()=>t,x:()=>r});var i=a(296540);const s={},d=i.createContext(s);function t(n){const e=i.useContext(d);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),i.createElement(d.Provider,{value:e},n.children)}}}]);