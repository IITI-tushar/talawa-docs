"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[910634],{363095:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"talawa-api-docs/helpers/event/deleteEventHelpers/deleteRecurringEventInstances/functions/deleteRecurringEventInstances","title":"deleteRecurringEventInstances","description":"talawa-api","source":"@site/docs/talawa-api-docs/helpers/event/deleteEventHelpers/deleteRecurringEventInstances/functions/deleteRecurringEventInstances.md","sourceDirName":"talawa-api-docs/helpers/event/deleteEventHelpers/deleteRecurringEventInstances/functions","slug":"/talawa-api-docs/helpers/event/deleteEventHelpers/deleteRecurringEventInstances/functions/deleteRecurringEventInstances","permalink":"/docs/talawa-api-docs/helpers/event/deleteEventHelpers/deleteRecurringEventInstances/functions/deleteRecurringEventInstances","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/helpers/event/deleteEventHelpers/deleteRecurringEventInstances/functions/deleteRecurringEventInstances.md","tags":[],"version":"current","frontMatter":{}}');var r=s(474848),c=s(28453);const l={},i=void 0,a={},d=[{value:"Parameters",id:"parameters",level:2},{value:"event",id:"event",level:3},{value:"recurrenceRule",id:"recurrencerule",level:3},{value:"baseRecurringEvent",id:"baserecurringevent",level:3},{value:"session",id:"session",level:3},{value:"Returns",id:"returns",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Defined in",id:"defined-in",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/talawa-api-docs/",children:(0,r.jsx)(n.strong,{children:"talawa-api"})})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,r.jsx)(n.a,{href:"/docs/talawa-api-docs/helpers/event/deleteEventHelpers/deleteRecurringEventInstances/",children:"helpers/event/deleteEventHelpers/deleteRecurringEventInstances"})," / deleteRecurringEventInstances"]}),"\n",(0,r.jsx)(n.h1,{id:"function-deleterecurringeventinstances",children:"Function: deleteRecurringEventInstances()"}),"\n",(0,r.jsxs)(n.p,{children:["> ",(0,r.jsx)(n.strong,{children:"deleteRecurringEventInstances"}),"(",(0,r.jsx)(n.code,{children:"event"}),", ",(0,r.jsx)(n.code,{children:"recurrenceRule"}),", ",(0,r.jsx)(n.code,{children:"baseRecurringEvent"}),", ",(0,r.jsx)(n.code,{children:"session"}),"): ",(0,r.jsx)(n.code,{children:"Promise"}),"<",(0,r.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,r.jsx)(n.p,{children:"Deletes all instances or thisAndFollowingInstances of a recurring event."}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(n.h3,{id:"event",children:"event"}),"\n",(0,r.jsx)(n.p,{children:"The event instance to be deleted:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"For thisAndFollowingInstances, represents the starting instance."}),"\n",(0,r.jsx)(n.li,{children:"For allInstances, should be null."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"null"})," | ",(0,r.jsx)(n.a,{href:"/docs/talawa-api-docs/models/Event/interfaces/InterfaceEvent",children:(0,r.jsx)(n.code,{children:"InterfaceEvent"})})]}),"\n",(0,r.jsx)(n.h3,{id:"recurrencerule",children:"recurrenceRule"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/talawa-api-docs/models/RecurrenceRule/interfaces/InterfaceRecurrenceRule",children:(0,r.jsx)(n.code,{children:"InterfaceRecurrenceRule"})})}),"\n",(0,r.jsx)(n.p,{children:"The recurrence rule associated with the instances."}),"\n",(0,r.jsx)(n.h3,{id:"baserecurringevent",children:"baseRecurringEvent"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/talawa-api-docs/models/Event/interfaces/InterfaceEvent",children:(0,r.jsx)(n.code,{children:"InterfaceEvent"})})}),"\n",(0,r.jsx)(n.p,{children:"The base recurring event from which instances are derived."}),"\n",(0,r.jsx)(n.h3,{id:"session",children:"session"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"ClientSession"})}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Promise"}),"<",(0,r.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,r.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"This function performs the following steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Constructs a query object to fetch instances based on the delete type."}),"\n",(0,r.jsx)(n.li,{children:"Retrieves and deletes all associated documents (attendees, users, profiles, action items)."}),"\n",(0,r.jsx)(n.li,{children:"Deletes the instances themselves."}),"\n",(0,r.jsx)(n.li,{children:"Updates the recurrence rule and base recurring event as needed."}),"\n",(0,r.jsx)(n.li,{children:"Removes any dangling documents related to the recurrence rule and base recurring event."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/helpers/event/deleteEventHelpers/deleteRecurringEventInstances.ts#L32",children:"src/helpers/event/deleteEventHelpers/deleteRecurringEventInstances.ts:32"})})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var t=s(296540);const r={},c=t.createContext(r);function l(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);