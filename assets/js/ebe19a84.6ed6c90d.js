"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[212478],{927886:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});const d=JSON.parse('{"id":"talawa-api-docs/resolvers/Mutation/addFeedback/variables/addFeedback","title":"addFeedback","description":"talawa-api \u2022 Docs","source":"@site/docs/talawa-api-docs/resolvers/Mutation/addFeedback/variables/addFeedback.md","sourceDirName":"talawa-api-docs/resolvers/Mutation/addFeedback/variables","slug":"/talawa-api-docs/resolvers/Mutation/addFeedback/variables/addFeedback","permalink":"/docs/talawa-api-docs/resolvers/Mutation/addFeedback/variables/addFeedback","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/addFeedback/variables/addFeedback.md","tags":[],"version":"current","frontMatter":{}}');var t=n(474848),s=n(28453);const r={},i=void 0,c={},l=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Param",id:"param-2",level:2},{value:"Returns",id:"returns",level:2},{value:"See",id:"see",level:2},{value:"Defined in",id:"defined-in",level:2}];function o(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/docs/talawa-api-docs/",children:(0,t.jsx)(a.strong,{children:"talawa-api"})})," \u2022 ",(0,t.jsx)(a.strong,{children:"Docs"})]}),"\n",(0,t.jsx)(a.hr,{}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,t.jsx)(a.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/addFeedback/",children:"resolvers/Mutation/addFeedback"})," / addFeedback"]}),"\n",(0,t.jsx)(a.h1,{id:"variable-addfeedback",children:"Variable: addFeedback"}),"\n",(0,t.jsxs)(a.p,{children:["> ",(0,t.jsx)(a.code,{children:"const"})," ",(0,t.jsx)(a.strong,{children:"addFeedback"}),": ",(0,t.jsx)(a.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,t.jsx)(a.code,{children:"MutationResolvers"})}),"[",(0,t.jsx)(a.code,{children:'"addFeedback"'}),"]"]}),"\n",(0,t.jsx)(a.p,{children:"Mutation resolver function to add feedback for an event."}),"\n",(0,t.jsx)(a.p,{children:"This function pcerforms the following ations:"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsx)(a.li,{children:"Checks if the specified event exists."}),"\n",(0,t.jsx)(a.li,{children:"Retrieves the event attendee record for the current user and event."}),"\n",(0,t.jsx)(a.li,{children:"Checks if the user is registered for the event and if they have checked in."}),"\n",(0,t.jsx)(a.li,{children:"Ensures the user has not already submitted feedback for the event."}),"\n",(0,t.jsx)(a.li,{children:"Updates the check-in record to mark feedback as submitted."}),"\n",(0,t.jsx)(a.li,{children:"Creates and saves a new feedback entry."}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"param",children:"Param"}),"\n",(0,t.jsx)(a.p,{children:"The parent object for the mutation. Typically, this is not used in this resolver."}),"\n",(0,t.jsx)(a.h2,{id:"param-1",children:"Param"}),"\n",(0,t.jsx)(a.p,{children:"The arguments for the mutation, including:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"data.eventId"}),": The ID of the event for which feedback is being submitted."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"data.feedback"}),": The feedback content to be submitted."]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"param-2",children:"Param"}),"\n",(0,t.jsx)(a.p,{children:"The context for the mutation, including:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"userId"}),": The ID of the current user making the request."]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(a.p,{children:"A promise that resolves to the newly created feedback document."}),"\n",(0,t.jsx)(a.h2,{id:"see",children:"See"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Event - The Event model used to interact with the events collection in the database."}),"\n",(0,t.jsx)(a.li,{children:"EventAttendee - The EventAttendee model used to manage event attendee records."}),"\n",(0,t.jsx)(a.li,{children:"CheckIn - The CheckIn model used to manage check-in records."}),"\n",(0,t.jsx)(a.li,{children:"Feedback - The Feedback model used to create and manage feedback entries."}),"\n",(0,t.jsx)(a.li,{children:"MutationResolvers - The type definition for the mutation resolvers."}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/bba5d82264abb62b9e358a3d3fe1af18a8a8f6e4/src/resolvers/Mutation/addFeedback.ts#L37",children:"src/resolvers/Mutation/addFeedback.ts:37"})})]})}function h(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>r,x:()=>i});var d=n(296540);const t={},s=d.createContext(t);function r(e){const a=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),d.createElement(s.Provider,{value:a},e.children)}}}]);