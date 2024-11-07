"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[714389],{483534:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=t(785893),o=t(511151);const s={},a=void 0,i={id:"talawa-api-docs/resolvers/Mutation/createEventVolunteerGroup/variables/createEventVolunteerGroup",title:"createEventVolunteerGroup",description:"talawa-api \u2022 Docs",source:"@site/docs/talawa-api-docs/resolvers/Mutation/createEventVolunteerGroup/variables/createEventVolunteerGroup.md",sourceDirName:"talawa-api-docs/resolvers/Mutation/createEventVolunteerGroup/variables",slug:"/talawa-api-docs/resolvers/Mutation/createEventVolunteerGroup/variables/createEventVolunteerGroup",permalink:"/docs/talawa-api-docs/resolvers/Mutation/createEventVolunteerGroup/variables/createEventVolunteerGroup",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/createEventVolunteerGroup/variables/createEventVolunteerGroup.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Param",id:"param-2",level:2},{value:"Returns",id:"returns",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Defined in",id:"defined-in",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/talawa-api-docs/",children:(0,n.jsx)(r.strong,{children:"talawa-api"})})," \u2022 ",(0,n.jsx)(r.strong,{children:"Docs"})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,n.jsx)(r.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/createEventVolunteerGroup/",children:"resolvers/Mutation/createEventVolunteerGroup"})," / createEventVolunteerGroup"]}),"\n",(0,n.jsx)(r.h1,{id:"variable-createeventvolunteergroup",children:"Variable: createEventVolunteerGroup"}),"\n",(0,n.jsxs)(r.p,{children:["> ",(0,n.jsx)(r.code,{children:"const"})," ",(0,n.jsx)(r.strong,{children:"createEventVolunteerGroup"}),": ",(0,n.jsx)(r.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,n.jsx)(r.code,{children:"MutationResolvers"})}),"[",(0,n.jsx)(r.code,{children:'"createEventVolunteerGroup"'}),"]"]}),"\n",(0,n.jsx)(r.p,{children:"Creates a new event volunteer group and associates it with an event."}),"\n",(0,n.jsx)(r.p,{children:"This resolver performs the following actions:"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsx)(r.li,{children:"Validates the existence of the current user."}),"\n",(0,n.jsx)(r.li,{children:"Checks if the specified event exists."}),"\n",(0,n.jsx)(r.li,{children:"Verifies that the current user is an admin of the event."}),"\n",(0,n.jsx)(r.li,{children:"Creates a new volunteer group for the event."}),"\n",(0,n.jsx)(r.li,{children:"Fetches or creates new volunteers for the group."}),"\n",(0,n.jsx)(r.li,{children:"Creates volunteer group membership records for the new volunteers."}),"\n",(0,n.jsx)(r.li,{children:"Updates the event to include the new volunteer group."}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"param",children:"Param"}),"\n",(0,n.jsx)(r.p,{children:"The parent object, not used in this resolver."}),"\n",(0,n.jsx)(r.h2,{id:"param-1",children:"Param"}),"\n",(0,n.jsx)(r.p,{children:"The input arguments for the mutation, including:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"data"}),": An object containing:"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"eventId"}),": The ID of the event to associate the volunteer group with."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"name"}),": The name of the volunteer group."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"description"}),": A description of the volunteer group."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"leaderId"}),": The ID of the user who will lead the volunteer group."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"volunteerIds"}),": An array of user IDs for the volunteers in the group."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"volunteersRequired"}),": The number of volunteers required for the group."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"param-2",children:"Param"}),"\n",(0,n.jsx)(r.p,{children:"The context object containing user information (context.userId)."}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:"A promise that resolves to the created event volunteer group object."}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsx)(r.p,{children:"This function first checks the cache for the current user and then queries the database if needed. It ensures that the user is authorized to create a volunteer group for the event before proceeding."}),"\n",(0,n.jsx)(r.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/f4877b986932181336f42a7336754de05976cd97/src/resolvers/Mutation/createEventVolunteerGroup.ts#L44",children:"src/resolvers/Mutation/createEventVolunteerGroup.ts:44"})})]})}function u(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},511151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>a});var n=t(667294);const o={},s=n.createContext(o);function a(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);