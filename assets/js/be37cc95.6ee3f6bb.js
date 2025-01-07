"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[343574],{924306:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>i});const t=JSON.parse('{"id":"talawa-admin-docs/screens/EventVolunteers/VolunteerGroups/VolunteerGroupModal/functions/default","title":"default","description":"talawa-admin \u2022 Docs","source":"@site/docs/talawa-admin-docs/screens/EventVolunteers/VolunteerGroups/VolunteerGroupModal/functions/default.md","sourceDirName":"talawa-admin-docs/screens/EventVolunteers/VolunteerGroups/VolunteerGroupModal/functions","slug":"/talawa-admin-docs/screens/EventVolunteers/VolunteerGroups/VolunteerGroupModal/functions/default","permalink":"/docs/talawa-admin-docs/screens/EventVolunteers/VolunteerGroups/VolunteerGroupModal/functions/default","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-admin-docs/screens/EventVolunteers/VolunteerGroups/VolunteerGroupModal/functions/default.md","tags":[],"version":"current","frontMatter":{}}');var o=r(474848),s=r(28453);const l={},d=void 0,a={},i=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Defined in",id:"defined-in",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/talawa-admin-docs/",children:(0,o.jsx)(n.strong,{children:"talawa-admin"})})," \u2022 ",(0,o.jsx)(n.strong,{children:"Docs"})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/talawa-admin-docs/modules",children:"talawa-admin"})," / ",(0,o.jsx)(n.a,{href:"/docs/talawa-admin-docs/screens/EventVolunteers/VolunteerGroups/VolunteerGroupModal/",children:"screens/EventVolunteers/VolunteerGroups/VolunteerGroupModal"})," / default"]}),"\n",(0,o.jsx)(n.h1,{id:"function-default",children:"Function: default()"}),"\n",(0,o.jsxs)(n.p,{children:["> ",(0,o.jsx)(n.strong,{children:"default"}),"(",(0,o.jsx)(n.code,{children:"props"}),", ",(0,o.jsx)(n.code,{children:"deprecatedLegacyContext"}),"?): ",(0,o.jsx)(n.code,{children:"ReactNode"})]}),"\n",(0,o.jsx)(n.p,{children:"A modal dialog for creating or editing a volunteer group."}),"\n",(0,o.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(n.p,{children:["\u2022 ",(0,o.jsx)(n.strong,{children:"props"}),": ",(0,o.jsx)(n.a,{href:"/docs/talawa-admin-docs/screens/EventVolunteers/VolunteerGroups/VolunteerGroupModal/interfaces/InterfaceVolunteerGroupModal",children:(0,o.jsx)(n.code,{children:"InterfaceVolunteerGroupModal"})})]}),"\n",(0,o.jsxs)(n.p,{children:["\u2022 ",(0,o.jsx)(n.strong,{children:"deprecatedLegacyContext?"}),": ",(0,o.jsx)(n.code,{children:"any"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Deprecated"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"See"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods",children:"React Docs"})}),"\n",(0,o.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"ReactNode"})}),"\n",(0,o.jsx)(n.p,{children:"The rendered modal component."}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"VolunteerGroupModal"})," component displays a form within a modal dialog for creating or editing a Volunteer Group.\nIt includes fields for entering the group name, description, volunteersRequired, and selecting volunteers/leaders."]}),"\n",(0,o.jsx)(n.p,{children:"The modal includes:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"A header with a title indicating the current mode (create or edit) and a close button."}),"\n",(0,o.jsxs)(n.li,{children:["A form with:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"An input field for entering the group name."}),"\n",(0,o.jsx)(n.li,{children:"A textarea for entering the group description."}),"\n",(0,o.jsx)(n.li,{children:"A multi-select dropdown for selecting leader."}),"\n",(0,o.jsx)(n.li,{children:"A multi-select dropdown for selecting volunteers."}),"\n",(0,o.jsx)(n.li,{children:"An input field for entering the number of volunteers required."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"A submit button to create or update the pledge."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"On form submission, the component either:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Calls ",(0,o.jsx)(n.code,{children:"updatePledge"})," mutation to update an existing pledge, or"]}),"\n",(0,o.jsxs)(n.li,{children:["Calls ",(0,o.jsx)(n.code,{children:"createPledge"})," mutation to create a new pledge."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Success or error messages are displayed using toast notifications based on the result of the mutation."}),"\n",(0,o.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-admin/blob/b465221425f3dcc638f77fbf5f1ccedb8e0dd082/src/screens/EventVolunteers/VolunteerGroups/VolunteerGroupModal.tsx#L63",children:"src/screens/EventVolunteers/VolunteerGroups/VolunteerGroupModal.tsx:63"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>d});var t=r(296540);const o={},s=t.createContext(o);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);