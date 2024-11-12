"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[399424],{348211:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"talawa-api-docs/helpers/event/deleteEventHelpers/deleteSingleEvent/functions/deleteSingleEvent","title":"deleteSingleEvent","description":"talawa-api \u2022 Docs","source":"@site/docs/talawa-api-docs/helpers/event/deleteEventHelpers/deleteSingleEvent/functions/deleteSingleEvent.md","sourceDirName":"talawa-api-docs/helpers/event/deleteEventHelpers/deleteSingleEvent/functions","slug":"/talawa-api-docs/helpers/event/deleteEventHelpers/deleteSingleEvent/functions/deleteSingleEvent","permalink":"/docs/talawa-api-docs/helpers/event/deleteEventHelpers/deleteSingleEvent/functions/deleteSingleEvent","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/helpers/event/deleteEventHelpers/deleteSingleEvent/functions/deleteSingleEvent.md","tags":[],"version":"current","frontMatter":{}}');var l=t(474848),r=t(28453);const i={},d=void 0,c={},o=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Defined in",id:"defined-in",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/talawa-api-docs/",children:(0,l.jsx)(n.strong,{children:"talawa-api"})})," \u2022 ",(0,l.jsx)(n.strong,{children:"Docs"})]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,l.jsx)(n.a,{href:"/docs/talawa-api-docs/helpers/event/deleteEventHelpers/deleteSingleEvent/",children:"helpers/event/deleteEventHelpers/deleteSingleEvent"})," / deleteSingleEvent"]}),"\n",(0,l.jsx)(n.h1,{id:"function-deletesingleevent",children:"Function: deleteSingleEvent()"}),"\n",(0,l.jsxs)(n.p,{children:["> ",(0,l.jsx)(n.strong,{children:"deleteSingleEvent"}),"(",(0,l.jsx)(n.code,{children:"eventId"}),", ",(0,l.jsx)(n.code,{children:"session"}),", ",(0,l.jsx)(n.code,{children:"recurrenceRule"}),"?, ",(0,l.jsx)(n.code,{children:"baseRecurringEvent"}),"?): ",(0,l.jsx)(n.code,{children:"Promise"}),"<",(0,l.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,l.jsx)(n.p,{children:"Deletes a single event."}),"\n",(0,l.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(n.p,{children:["\u2022 ",(0,l.jsx)(n.strong,{children:"eventId"}),": ",(0,l.jsx)(n.code,{children:"string"})]}),"\n",(0,l.jsx)(n.p,{children:"The ID of the event to be deleted."}),"\n",(0,l.jsxs)(n.p,{children:["\u2022 ",(0,l.jsx)(n.strong,{children:"session"}),": ",(0,l.jsx)(n.code,{children:"ClientSession"})]}),"\n",(0,l.jsx)(n.p,{children:"The MongoDB client session for transactional operations."}),"\n",(0,l.jsxs)(n.p,{children:["\u2022 ",(0,l.jsx)(n.strong,{children:"recurrenceRule?"}),": ",(0,l.jsx)(n.code,{children:"string"})]}),"\n",(0,l.jsx)(n.p,{children:"Optional ID of the recurrence rule associated with the event (for recurring events)."}),"\n",(0,l.jsxs)(n.p,{children:["\u2022 ",(0,l.jsx)(n.strong,{children:"baseRecurringEvent?"}),": ",(0,l.jsx)(n.code,{children:"string"})]}),"\n",(0,l.jsx)(n.p,{children:"Optional ID of the base recurring event (for recurring events)."}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Promise"}),"<",(0,l.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,l.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,l.jsx)(n.p,{children:"This function performs the following steps:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Removes all associations (attendees, users, profiles, action items) related to the event."}),"\n",(0,l.jsx)(n.li,{children:"Deletes the event document itself."}),"\n",(0,l.jsx)(n.li,{children:"If provided, removes any dangling documents related to the recurrence rule and base recurring event."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/bba5d82264abb62b9e358a3d3fe1af18a8a8f6e4/src/helpers/event/deleteEventHelpers/deleteSingleEvent.ts#L25",children:"src/helpers/event/deleteEventHelpers/deleteSingleEvent.ts:25"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var s=t(296540);const l={},r=s.createContext(l);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);