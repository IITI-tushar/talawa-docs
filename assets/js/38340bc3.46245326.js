"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[963811],{754352:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"talawa-api-docs/helpers/event/deleteEventHelpers/deleteRecurringEvent/functions/deleteRecurringEvent","title":"deleteRecurringEvent","description":"talawa-api","source":"@site/docs/talawa-api-docs/helpers/event/deleteEventHelpers/deleteRecurringEvent/functions/deleteRecurringEvent.md","sourceDirName":"talawa-api-docs/helpers/event/deleteEventHelpers/deleteRecurringEvent/functions","slug":"/talawa-api-docs/helpers/event/deleteEventHelpers/deleteRecurringEvent/functions/deleteRecurringEvent","permalink":"/docs/talawa-api-docs/helpers/event/deleteEventHelpers/deleteRecurringEvent/functions/deleteRecurringEvent","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/helpers/event/deleteEventHelpers/deleteRecurringEvent/functions/deleteRecurringEvent.md","tags":[],"version":"current","frontMatter":{}}');var r=t(474848),i=t(28453);const l={},c=void 0,d={},a=[{value:"Parameters",id:"parameters",level:2},{value:"args",id:"args",level:3},{value:"event",id:"event",level:3},{value:"session",id:"session",level:3},{value:"Returns",id:"returns",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Defined in",id:"defined-in",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/talawa-api-docs/",children:(0,r.jsx)(n.strong,{children:"talawa-api"})})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,r.jsx)(n.a,{href:"/docs/talawa-api-docs/helpers/event/deleteEventHelpers/deleteRecurringEvent/",children:"helpers/event/deleteEventHelpers/deleteRecurringEvent"})," / deleteRecurringEvent"]}),"\n",(0,r.jsx)(n.h1,{id:"function-deleterecurringevent",children:"Function: deleteRecurringEvent()"}),"\n",(0,r.jsxs)(n.p,{children:["> ",(0,r.jsx)(n.strong,{children:"deleteRecurringEvent"}),"(",(0,r.jsx)(n.code,{children:"args"}),", ",(0,r.jsx)(n.code,{children:"event"}),", ",(0,r.jsx)(n.code,{children:"session"}),"): ",(0,r.jsx)(n.code,{children:"Promise"}),"<",(0,r.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,r.jsx)(n.p,{children:"Deletes instances of a recurring event based on the delete type specified.\nDelete types include: thisInstance, allInstances, thisAndFollowingInstances."}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(n.h3,{id:"args",children:"args"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationRemoveEventArgs",children:(0,r.jsx)(n.code,{children:"MutationRemoveEventArgs"})})}),"\n",(0,r.jsx)(n.p,{children:"Arguments containing details for the event deletion."}),"\n",(0,r.jsx)(n.h3,{id:"event",children:"event"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/talawa-api-docs/models/Event/interfaces/InterfaceEvent",children:(0,r.jsx)(n.code,{children:"InterfaceEvent"})})}),"\n",(0,r.jsx)(n.p,{children:"The instance of the recurring event to be deleted."}),"\n",(0,r.jsx)(n.h3,{id:"session",children:"session"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"ClientSession"})}),"\n",(0,r.jsx)(n.p,{children:"The MongoDB client session for transactional operations."}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Promise"}),"<",(0,r.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,r.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"This function follows these steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Retrieves the recurrence rule associated with the event."}),"\n",(0,r.jsx)(n.li,{children:"Retrieves the base recurring event to which the event belongs."}),"\n",(0,r.jsxs)(n.li,{children:["If the event is an exception instance or deleting a single instance (",(0,r.jsx)(n.code,{children:"thisInstance"}),"), deletes that specific instance."]}),"\n",(0,r.jsxs)(n.li,{children:["If deleting all instances (",(0,r.jsx)(n.code,{children:"allInstances"}),"), deletes all instances associated with the recurrence rule."]}),"\n",(0,r.jsxs)(n.li,{children:["If deleting this and following instances (",(0,r.jsx)(n.code,{children:"thisAndFollowingInstances"}),"), deletes all instances starting from the specified event instance."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/helpers/event/deleteEventHelpers/deleteRecurringEvent.ts#L29",children:"src/helpers/event/deleteEventHelpers/deleteRecurringEvent.ts:29"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var s=t(296540);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);