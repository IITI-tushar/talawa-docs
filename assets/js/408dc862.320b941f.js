"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[520389],{719571:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var l=n(785893),s=n(511151);const r={},d="Module: helpers/event/deleteEventHelpers/deleteRecurringEvent",i={id:"talawa-api-docs/modules/helpers_event_deleteEventHelpers_deleteRecurringEvent",title:"helpers_event_deleteEventHelpers_deleteRecurringEvent",description:"talawa-api / Exports / helpers/event/deleteEventHelpers/deleteRecurringEvent",source:"@site/docs/talawa-api-docs/modules/helpers_event_deleteEventHelpers_deleteRecurringEvent.md",sourceDirName:"talawa-api-docs/modules",slug:"/talawa-api-docs/modules/helpers_event_deleteEventHelpers_deleteRecurringEvent",permalink:"/docs/talawa-api-docs/modules/helpers_event_deleteEventHelpers_deleteRecurringEvent",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/modules/helpers_event_deleteEventHelpers_deleteRecurringEvent.md",tags:[],version:"current",frontMatter:{}},c={},a=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"deleteRecurringEvent",id:"deleterecurringevent",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.a,{href:"/docs/talawa-api-docs/",children:"talawa-api"})," / ",(0,l.jsx)(t.a,{href:"/docs/talawa-api-docs/modules",children:"Exports"})," / helpers/event/deleteEventHelpers/deleteRecurringEvent"]}),"\n",(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"module-helperseventdeleteeventhelpersdeleterecurringevent",children:"Module: helpers/event/deleteEventHelpers/deleteRecurringEvent"})}),"\n",(0,l.jsx)(t.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,l.jsx)(t.h3,{id:"functions",children:"Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/docs/talawa-api-docs/modules/helpers_event_deleteEventHelpers_deleteRecurringEvent#deleterecurringevent",children:"deleteRecurringEvent"})}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"functions-1",children:"Functions"}),"\n",(0,l.jsx)(t.h3,{id:"deleterecurringevent",children:"deleteRecurringEvent"}),"\n",(0,l.jsxs)(t.p,{children:["\u25b8 ",(0,l.jsx)(t.strong,{children:"deleteRecurringEvent"}),"(",(0,l.jsx)(t.code,{children:"args"}),", ",(0,l.jsx)(t.code,{children:"event"}),", ",(0,l.jsx)(t.code,{children:"session"}),"): ",(0,l.jsx)(t.code,{children:"Promise"}),"<",(0,l.jsx)(t.code,{children:"void"}),">"]}),"\n",(0,l.jsx)(t.p,{children:"This function deletes thisInstance / allInstances / thisAndFollowingInstances of a recurring event."}),"\n",(0,l.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"args"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/talawa-api-docs/modules/types_generatedGraphQLTypes#mutationremoveeventargs",children:(0,l.jsx)(t.code,{children:"MutationRemoveEventArgs"})})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"removeEventArgs"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"event"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/talawa-api-docs/interfaces/models_Event.InterfaceEvent",children:(0,l.jsx)(t.code,{children:"InterfaceEvent"})})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"an instance of the recurring event to be deleted."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"session"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"ClientSession"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]})]})]}),"\n",(0,l.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"Promise"}),"<",(0,l.jsx)(t.code,{children:"void"}),">"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:(0,l.jsx)(t.code,{children:"Remarks"})})}),"\n",(0,l.jsx)(t.p,{children:"The following steps are followed:"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:"get the recurrence rule and the base recurring event."}),"\n",(0,l.jsx)(t.li,{children:"if the instance is an exception instance or if we're deleting thisInstance only, just delete that single instance."}),"\n",(0,l.jsx)(t.li,{children:"if it's a bulk delete operation, handle it accordingly."}),"\n"]}),"\n",(0,l.jsx)(t.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/helpers/event/deleteEventHelpers/deleteRecurringEvent.ts#L22",children:"src/helpers/event/deleteEventHelpers/deleteRecurringEvent.ts:22"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},511151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>d});var l=n(667294);const s={},r=l.createContext(s);function d(e){const t=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);