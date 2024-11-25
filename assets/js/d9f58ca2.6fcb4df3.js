"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[616875],{773045:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"talawa-api-docs/resolvers/Mutation/createAgendaItem/variables/createAgendaItem","title":"createAgendaItem","description":"talawa-api \u2022 Docs","source":"@site/docs/talawa-api-docs/resolvers/Mutation/createAgendaItem/variables/createAgendaItem.md","sourceDirName":"talawa-api-docs/resolvers/Mutation/createAgendaItem/variables","slug":"/talawa-api-docs/resolvers/Mutation/createAgendaItem/variables/createAgendaItem","permalink":"/docs/talawa-api-docs/resolvers/Mutation/createAgendaItem/variables/createAgendaItem","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/createAgendaItem/variables/createAgendaItem.md","tags":[],"version":"current","frontMatter":{}}');var i=n(474848),s=n(28453);const r={},d=void 0,c={},l=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Param",id:"param-2",level:2},{value:"Returns",id:"returns",level:2},{value:"Defined in",id:"defined-in",level:2}];function o(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.a,{href:"/docs/talawa-api-docs/",children:(0,i.jsx)(a.strong,{children:"talawa-api"})})," \u2022 ",(0,i.jsx)(a.strong,{children:"Docs"})]}),"\n",(0,i.jsx)(a.hr,{}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,i.jsx)(a.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/createAgendaItem/",children:"resolvers/Mutation/createAgendaItem"})," / createAgendaItem"]}),"\n",(0,i.jsx)(a.h1,{id:"variable-createagendaitem",children:"Variable: createAgendaItem"}),"\n",(0,i.jsxs)(a.p,{children:["> ",(0,i.jsx)(a.code,{children:"const"})," ",(0,i.jsx)(a.strong,{children:"createAgendaItem"}),": ",(0,i.jsx)(a.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,i.jsx)(a.code,{children:"MutationResolvers"})}),"[",(0,i.jsx)(a.code,{children:'"createAgendaItem"'}),"]"]}),"\n",(0,i.jsx)(a.p,{children:"Creates a new agenda item and associates it with an event if specified."}),"\n",(0,i.jsx)(a.p,{children:"This function performs the following actions:"}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsx)(a.li,{children:"Verifies that the current user exists and is authorized."}),"\n",(0,i.jsx)(a.li,{children:"Checks the existence of the specified organization."}),"\n",(0,i.jsx)(a.li,{children:"If a related event is specified, verifies its existence and checks if the user is an admin of the event."}),"\n",(0,i.jsx)(a.li,{children:"Checks if the user is an admin of the organization or has super admin privileges."}),"\n",(0,i.jsx)(a.li,{children:"Creates the new agenda item and associates it with the event if applicable."}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"param",children:"Param"}),"\n",(0,i.jsx)(a.p,{children:"The parent object for the mutation. This parameter is not used in this resolver."}),"\n",(0,i.jsx)(a.h2,{id:"param-1",children:"Param"}),"\n",(0,i.jsx)(a.p,{children:"The arguments for the mutation, including:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"input"}),": An object containing:","\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"organizationId"}),": The ID of the organization where the agenda item will be created."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"relatedEventId"})," (optional): The ID of the related event, if applicable."]}),"\n",(0,i.jsx)(a.li,{children:"Other agenda item details."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"param-2",children:"Param"}),"\n",(0,i.jsx)(a.p,{children:"The context for the mutation, including:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"userId"}),": The ID of the current user making the request."]}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(a.p,{children:"The created agenda item."}),"\n",(0,i.jsx)(a.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/92443bb6a5ff3ed66457149a509401986a82e570/src/resolvers/Mutation/createAgendaItem.ts#L53",children:"src/resolvers/Mutation/createAgendaItem.ts:53"})})]})}function h(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>r,x:()=>d});var t=n(296540);const i={},s=t.createContext(i);function r(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);