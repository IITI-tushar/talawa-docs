"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[692136],{581585:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"talawa-admin-docs/screens/EventVolunteers/Volunteers/VolunteerDeleteModal/functions/default","title":"default","description":"talawa-admin \u2022 Docs","source":"@site/docs/talawa-admin-docs/screens/EventVolunteers/Volunteers/VolunteerDeleteModal/functions/default.md","sourceDirName":"talawa-admin-docs/screens/EventVolunteers/Volunteers/VolunteerDeleteModal/functions","slug":"/talawa-admin-docs/screens/EventVolunteers/Volunteers/VolunteerDeleteModal/functions/default","permalink":"/docs/talawa-admin-docs/screens/EventVolunteers/Volunteers/VolunteerDeleteModal/functions/default","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-admin-docs/screens/EventVolunteers/Volunteers/VolunteerDeleteModal/functions/default.md","tags":[],"version":"current","frontMatter":{}}');var s=t(474848),l=t(28453);const r={},a=void 0,d={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Defined in",id:"defined-in",level:2}];function i(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/talawa-admin-docs/",children:(0,s.jsx)(n.strong,{children:"talawa-admin"})})," \u2022 ",(0,s.jsx)(n.strong,{children:"Docs"})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/talawa-admin-docs/modules",children:"talawa-admin"})," / ",(0,s.jsx)(n.a,{href:"/docs/talawa-admin-docs/screens/EventVolunteers/Volunteers/VolunteerDeleteModal/",children:"screens/EventVolunteers/Volunteers/VolunteerDeleteModal"})," / default"]}),"\n",(0,s.jsx)(n.h1,{id:"function-default",children:"Function: default()"}),"\n",(0,s.jsxs)(n.p,{children:["> ",(0,s.jsx)(n.strong,{children:"default"}),"(",(0,s.jsx)(n.code,{children:"props"}),", ",(0,s.jsx)(n.code,{children:"deprecatedLegacyContext"}),"?): ",(0,s.jsx)(n.code,{children:"ReactNode"})]}),"\n",(0,s.jsx)(n.p,{children:"A modal dialog for confirming the deletion of a volunteer."}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"props"}),": ",(0,s.jsx)(n.a,{href:"/docs/talawa-admin-docs/screens/EventVolunteers/Volunteers/VolunteerDeleteModal/interfaces/InterfaceDeleteVolunteerModal",children:(0,s.jsx)(n.code,{children:"InterfaceDeleteVolunteerModal"})})]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"deprecatedLegacyContext?"}),": ",(0,s.jsx)(n.code,{children:"any"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Deprecated"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods",children:"React Docs"})}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"ReactNode"})}),"\n",(0,s.jsx)(n.p,{children:"The rendered modal component."}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VolunteerDeleteModal"})," component displays a confirmation dialog when a user attempts to delete a volunteer.\nIt allows the user to either confirm or cancel the deletion.\nOn confirmation, the ",(0,s.jsx)(n.code,{children:"deleteVolunteer"})," mutation is called to remove the pledge from the database,\nand the ",(0,s.jsx)(n.code,{children:"refetchVolunteers"})," function is invoked to update the list of volunteers.\nA success or error toast notification is shown based on the result of the deletion operation."]}),"\n",(0,s.jsx)(n.p,{children:"The modal includes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A header with a title and a close button."}),"\n",(0,s.jsx)(n.li,{children:"A body with a message asking for confirmation."}),"\n",(0,s.jsx)(n.li,{children:'A footer with "Yes" and "No" buttons to confirm or cancel the deletion.'}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"deleteVolunteer"})," mutation is used to perform the deletion operation."]}),"\n",(0,s.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-admin/blob/7a991b3aa824070bd53d6367f1ce7f072321af88/src/screens/EventVolunteers/Volunteers/VolunteerDeleteModal.tsx#L42",children:"src/screens/EventVolunteers/Volunteers/VolunteerDeleteModal.tsx:42"})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(296540);const s={},l=o.createContext(s);function r(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);