"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[658478],{164279:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"talawa-api-docs/helpers/event/updateEventHelpers/updateRecurringEventInstances/functions/updateRecurringEventInstances","title":"updateRecurringEventInstances","description":"talawa-api \u2022 Docs","source":"@site/docs/talawa-api-docs/helpers/event/updateEventHelpers/updateRecurringEventInstances/functions/updateRecurringEventInstances.md","sourceDirName":"talawa-api-docs/helpers/event/updateEventHelpers/updateRecurringEventInstances/functions","slug":"/talawa-api-docs/helpers/event/updateEventHelpers/updateRecurringEventInstances/functions/updateRecurringEventInstances","permalink":"/docs/talawa-api-docs/helpers/event/updateEventHelpers/updateRecurringEventInstances/functions/updateRecurringEventInstances","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/helpers/event/updateEventHelpers/updateRecurringEventInstances/functions/updateRecurringEventInstances.md","tags":[],"version":"current","frontMatter":{}}');var t=r(474848),a=r(28453);const c={},i=void 0,d={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Defined in",id:"defined-in",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/",children:(0,t.jsx)(n.strong,{children:"talawa-api"})})," \u2022 ",(0,t.jsx)(n.strong,{children:"Docs"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/helpers/event/updateEventHelpers/updateRecurringEventInstances/",children:"helpers/event/updateEventHelpers/updateRecurringEventInstances"})," / updateRecurringEventInstances"]}),"\n",(0,t.jsx)(n.h1,{id:"function-updaterecurringeventinstances",children:"Function: updateRecurringEventInstances()"}),"\n",(0,t.jsxs)(n.p,{children:["> ",(0,t.jsx)(n.strong,{children:"updateRecurringEventInstances"}),"(",(0,t.jsx)(n.code,{children:"args"}),", ",(0,t.jsx)(n.code,{children:"event"}),", ",(0,t.jsx)(n.code,{children:"recurrenceRule"}),", ",(0,t.jsx)(n.code,{children:"baseRecurringEvent"}),", ",(0,t.jsx)(n.code,{children:"recurringEventUpdateType"}),", ",(0,t.jsx)(n.code,{children:"session"}),"): ",(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/models/Event/interfaces/InterfaceEvent",children:(0,t.jsx)(n.code,{children:"InterfaceEvent"})}),">"]}),"\n",(0,t.jsx)(n.p,{children:"This function updates this and the following instances of a recurring event."}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"args"}),": ",(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationUpdateEventArgs",children:(0,t.jsx)(n.code,{children:"MutationUpdateEventArgs"})})]}),"\n",(0,t.jsx)(n.p,{children:"update event args."}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"event"}),": ",(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/models/Event/interfaces/InterfaceEvent",children:(0,t.jsx)(n.code,{children:"InterfaceEvent"})})]}),"\n",(0,t.jsx)(n.p,{children:"the event to be updated."}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"recurrenceRule"}),": ",(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/models/RecurrenceRule/interfaces/InterfaceRecurrenceRule",children:(0,t.jsx)(n.code,{children:"InterfaceRecurrenceRule"})})]}),"\n",(0,t.jsx)(n.p,{children:"the recurrence rule followed by the instances."}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"baseRecurringEvent"}),": ",(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/models/Event/interfaces/InterfaceEvent",children:(0,t.jsx)(n.code,{children:"InterfaceEvent"})})]}),"\n",(0,t.jsx)(n.p,{children:"the base recurring event."}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"recurringEventUpdateType"}),": ",(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/RecurringEventMutationType",children:(0,t.jsx)(n.code,{children:"RecurringEventMutationType"})})]}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"session"}),": ",(0,t.jsx)(n.code,{children:"ClientSession"})]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/models/Event/interfaces/InterfaceEvent",children:(0,t.jsx)(n.code,{children:"InterfaceEvent"})}),">"]}),"\n",(0,t.jsx)(n.p,{children:"The updated first instance following the recurrence rule."}),"\n",(0,t.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsx)(n.p,{children:"The following steps are followed:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Check if the recurrence rule has changed."}),"\n",(0,t.jsxs)(n.li,{children:["If the recurrence rule has changed:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"get the appropriate data to create new recurring event instances and update the baseRecurringEvent."}),"\n",(0,t.jsx)(n.li,{children:"get the recurrence dates and generate new instances."}),"\n",(0,t.jsx)(n.li,{children:"remove the current instances and their associations as a new series has been created.\nIf the recurrence rule hasn't changed:"}),"\n",(0,t.jsx)(n.li,{children:"just perform a regular bulk update."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Update the base recurring event if required."}),"\n",(0,t.jsx)(n.li,{children:"Removes any dangling recurrence rule and base recurrence rule documents."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/92443bb6a5ff3ed66457149a509401986a82e570/src/helpers/event/updateEventHelpers/updateRecurringEventInstances.ts#L45",children:"src/helpers/event/updateEventHelpers/updateRecurringEventInstances.ts:45"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>i});var s=r(296540);const t={},a=s.createContext(t);function c(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);