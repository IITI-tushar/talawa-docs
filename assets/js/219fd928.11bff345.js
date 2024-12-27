"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[733570],{879240:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"talawa-api-docs/helpers/event/createEventHelpers/createRecurringEventInstancesDuringQuery/functions/createRecurringEventInstancesDuringQuery","title":"createRecurringEventInstancesDuringQuery","description":"talawa-api","source":"@site/docs/talawa-api-docs/helpers/event/createEventHelpers/createRecurringEventInstancesDuringQuery/functions/createRecurringEventInstancesDuringQuery.md","sourceDirName":"talawa-api-docs/helpers/event/createEventHelpers/createRecurringEventInstancesDuringQuery/functions","slug":"/talawa-api-docs/helpers/event/createEventHelpers/createRecurringEventInstancesDuringQuery/functions/createRecurringEventInstancesDuringQuery","permalink":"/docs/talawa-api-docs/helpers/event/createEventHelpers/createRecurringEventInstancesDuringQuery/functions/createRecurringEventInstancesDuringQuery","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/helpers/event/createEventHelpers/createRecurringEventInstancesDuringQuery/functions/createRecurringEventInstancesDuringQuery.md","tags":[],"version":"current","frontMatter":{}}');var s=r(474848),a=r(28453);const i={},c=void 0,l={},d=[{value:"Parameters",id:"parameters",level:2},{value:"organizationId",id:"organizationid",level:3},{value:"Returns",id:"returns",level:2},{value:"See",id:"see",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Defined in",id:"defined-in",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/talawa-api-docs/",children:(0,s.jsx)(n.strong,{children:"talawa-api"})})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,s.jsx)(n.a,{href:"/docs/talawa-api-docs/helpers/event/createEventHelpers/createRecurringEventInstancesDuringQuery/",children:"helpers/event/createEventHelpers/createRecurringEventInstancesDuringQuery"})," / createRecurringEventInstancesDuringQuery"]}),"\n",(0,s.jsx)(n.h1,{id:"function-createrecurringeventinstancesduringquery",children:"Function: createRecurringEventInstancesDuringQuery()"}),"\n",(0,s.jsxs)(n.p,{children:["> ",(0,s.jsx)(n.strong,{children:"createRecurringEventInstancesDuringQuery"}),"(",(0,s.jsx)(n.code,{children:"organizationId"}),"): ",(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,s.jsx)(n.p,{children:"Creates instances of recurring events up to a specified date during queries."}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.h3,{id:"organizationid",children:"organizationId"}),"\n",(0,s.jsx)(n.p,{children:"The ID of the organization to which the events belong."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"undefined"})," | ",(0,s.jsx)(n.code,{children:"null"})," | ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,s.jsx)(n.h2,{id:"see",children:"See"}),"\n",(0,s.jsx)(n.p,{children:"Parent file:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"resolvers/Mutation/createEvent.ts."})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"resolvers/Query/eventsByOrganizationConnection.ts."})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsx)(n.p,{children:"This function follows these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Calculates the date limit up to which recurrence rules are queried and new instances are generated."}),"\n",(0,s.jsx)(n.li,{children:"Retrieves recurrence rules based on the organization ID and their latest instance dates."}),"\n",(0,s.jsx)(n.li,{children:"For each recurrence rule found:"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Finds the base recurring event to gather data for new instance generation."}),"\n",(0,s.jsx)(n.li,{children:"Determines how many existing instances exist and calculates how many new instances to generate."}),"\n",(0,s.jsx)(n.li,{children:"Generates new instances starting from the latest instance date recorded."}),"\n",(0,s.jsx)(n.li,{children:"Updates the latest instance date for the recurrence rule."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/5c5b29a0ea487bda8306089fe128f43f3be29f94/src/helpers/event/createEventHelpers/createRecurringEventInstancesDuringQuery.ts#L32",children:"src/helpers/event/createEventHelpers/createRecurringEventInstancesDuringQuery.ts:32"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var t=r(296540);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);