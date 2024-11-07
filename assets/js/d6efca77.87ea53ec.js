"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[225663],{661494:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var t=d(785893),a=d(511151);const s={},l=void 0,o={id:"talawa-admin-docs/screens/FundCampaignPledge/PledgeDeleteModal/functions/default",title:"default",description:"talawa-admin \u2022 Docs",source:"@site/docs/talawa-admin-docs/screens/FundCampaignPledge/PledgeDeleteModal/functions/default.md",sourceDirName:"talawa-admin-docs/screens/FundCampaignPledge/PledgeDeleteModal/functions",slug:"/talawa-admin-docs/screens/FundCampaignPledge/PledgeDeleteModal/functions/default",permalink:"/docs/talawa-admin-docs/screens/FundCampaignPledge/PledgeDeleteModal/functions/default",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-admin-docs/screens/FundCampaignPledge/PledgeDeleteModal/functions/default.md",tags:[],version:"current",frontMatter:{}},c={},i=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Defined in",id:"defined-in",level:2}];function r(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/talawa-admin-docs/",children:(0,t.jsx)(n.strong,{children:"talawa-admin"})})," \u2022 ",(0,t.jsx)(n.strong,{children:"Docs"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/talawa-admin-docs/modules",children:"talawa-admin"})," / ",(0,t.jsx)(n.a,{href:"/docs/talawa-admin-docs/screens/FundCampaignPledge/PledgeDeleteModal/",children:"screens/FundCampaignPledge/PledgeDeleteModal"})," / default"]}),"\n",(0,t.jsx)(n.h1,{id:"function-default",children:"Function: default()"}),"\n",(0,t.jsxs)(n.p,{children:["> ",(0,t.jsx)(n.strong,{children:"default"}),"(",(0,t.jsx)(n.code,{children:"props"}),", ",(0,t.jsx)(n.code,{children:"deprecatedLegacyContext"}),"?): ",(0,t.jsx)(n.code,{children:"ReactNode"})]}),"\n",(0,t.jsx)(n.p,{children:"A modal dialog for confirming the deletion of a pledge."}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"props"}),": ",(0,t.jsx)(n.a,{href:"/docs/talawa-admin-docs/screens/FundCampaignPledge/PledgeDeleteModal/interfaces/InterfaceDeletePledgeModal",children:(0,t.jsx)(n.code,{children:"InterfaceDeletePledgeModal"})})]}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"deprecatedLegacyContext?"}),": ",(0,t.jsx)(n.code,{children:"any"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Deprecated"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods",children:"React Docs"})}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"ReactNode"})}),"\n",(0,t.jsx)(n.p,{children:"The rendered modal component."}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"PledgeDeleteModal"})," component displays a confirmation dialog when a user attempts to delete a pledge.\nIt allows the user to either confirm or cancel the deletion.\nOn confirmation, the ",(0,t.jsx)(n.code,{children:"deletePledge"})," mutation is called to remove the pledge from the database,\nand the ",(0,t.jsx)(n.code,{children:"refetchPledge"})," function is invoked to update the list of pledges.\nA success or error toast notification is shown based on the result of the deletion operation."]}),"\n",(0,t.jsx)(n.p,{children:"The modal includes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A header with a title and a close button."}),"\n",(0,t.jsx)(n.li,{children:"A body with a message asking for confirmation."}),"\n",(0,t.jsx)(n.li,{children:'A footer with "Yes" and "No" buttons to confirm or cancel the deletion.'}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"deletePledge"})," mutation is used to perform the deletion operation."]}),"\n",(0,t.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-admin/blob/c49a58cefb47697eb25ed53aa1ef6d685c772d3e/src/screens/FundCampaignPledge/PledgeDeleteModal.tsx#L42",children:"src/screens/FundCampaignPledge/PledgeDeleteModal.tsx:42"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},511151:(e,n,d)=>{d.d(n,{Z:()=>o,a:()=>l});var t=d(667294);const a={},s=t.createContext(a);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);