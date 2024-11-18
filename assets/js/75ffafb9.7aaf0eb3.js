"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[649681],{273204:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"talawa-api-docs/helpers/event/recurringEventHelpers/removeDanglingDocuments/functions/removeDanglingDocuments","title":"removeDanglingDocuments","description":"talawa-api \u2022 Docs","source":"@site/docs/talawa-api-docs/helpers/event/recurringEventHelpers/removeDanglingDocuments/functions/removeDanglingDocuments.md","sourceDirName":"talawa-api-docs/helpers/event/recurringEventHelpers/removeDanglingDocuments/functions","slug":"/talawa-api-docs/helpers/event/recurringEventHelpers/removeDanglingDocuments/functions/removeDanglingDocuments","permalink":"/docs/talawa-api-docs/helpers/event/recurringEventHelpers/removeDanglingDocuments/functions/removeDanglingDocuments","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/helpers/event/recurringEventHelpers/removeDanglingDocuments/functions/removeDanglingDocuments.md","tags":[],"version":"current","frontMatter":{}}');var t=r(474848),c=r(28453);const o={},i=void 0,a={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Defined in",id:"defined-in",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/",children:(0,t.jsx)(n.strong,{children:"talawa-api"})})," \u2022 ",(0,t.jsx)(n.strong,{children:"Docs"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/helpers/event/recurringEventHelpers/removeDanglingDocuments/",children:"helpers/event/recurringEventHelpers/removeDanglingDocuments"})," / removeDanglingDocuments"]}),"\n",(0,t.jsx)(n.h1,{id:"function-removedanglingdocuments",children:"Function: removeDanglingDocuments()"}),"\n",(0,t.jsxs)(n.p,{children:["> ",(0,t.jsx)(n.strong,{children:"removeDanglingDocuments"}),"(",(0,t.jsx)(n.code,{children:"recurrenceRuleId"}),", ",(0,t.jsx)(n.code,{children:"baseRecurringEventId"}),", ",(0,t.jsx)(n.code,{children:"session"}),"): ",(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,t.jsx)(n.p,{children:"Removes dangling recurrence rule and base recurring event documents if they have no associated events."}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"recurrenceRuleId"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsx)(n.p,{children:"_id of the recurrence rule."}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"baseRecurringEventId"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsx)(n.p,{children:"_id of the base recurring event."}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"session"}),": ",(0,t.jsx)(n.code,{children:"ClientSession"})]}),"\n",(0,t.jsx)(n.p,{children:"Mongoose client session."}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,t.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsx)(n.p,{children:"The function first checks if there are any associated events for each document.\nIf no associated events are found, it deletes the document from the database."}),"\n",(0,t.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/a6e7ac91b581c9109559657faf0f934f3eb41fe7/src/helpers/event/recurringEventHelpers/removeDanglingDocuments.ts#L13",children:"src/helpers/event/recurringEventHelpers/removeDanglingDocuments.ts:13"})})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>i});var s=r(296540);const t={},c=s.createContext(t);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);