"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[609195],{188311:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>o});var t=s(785893),r=s(511151);const n={},i=void 0,c={id:"talawa-api-docs/resolvers/Mutation/createMessageChat/variables/createMessageChat",title:"createMessageChat",description:"talawa-api \u2022 Docs",source:"@site/docs/talawa-api-docs/resolvers/Mutation/createMessageChat/variables/createMessageChat.md",sourceDirName:"talawa-api-docs/resolvers/Mutation/createMessageChat/variables",slug:"/talawa-api-docs/resolvers/Mutation/createMessageChat/variables/createMessageChat",permalink:"/docs/talawa-api-docs/resolvers/Mutation/createMessageChat/variables/createMessageChat",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/createMessageChat/variables/createMessageChat.md",tags:[],version:"current",frontMatter:{}},l={},o=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Param",id:"param-2",level:2},{value:"Returns",id:"returns",level:2},{value:"Defined in",id:"defined-in",level:2}];function d(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/docs/talawa-api-docs/",children:(0,t.jsx)(a.strong,{children:"talawa-api"})})," \u2022 ",(0,t.jsx)(a.strong,{children:"Docs"})]}),"\n",(0,t.jsx)(a.hr,{}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,t.jsx)(a.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/createMessageChat/",children:"resolvers/Mutation/createMessageChat"})," / createMessageChat"]}),"\n",(0,t.jsx)(a.h1,{id:"variable-createmessagechat",children:"Variable: createMessageChat"}),"\n",(0,t.jsxs)(a.p,{children:["> ",(0,t.jsx)(a.code,{children:"const"})," ",(0,t.jsx)(a.strong,{children:"createMessageChat"}),": ",(0,t.jsx)(a.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,t.jsx)(a.code,{children:"MutationResolvers"})}),"[",(0,t.jsx)(a.code,{children:'"createMessageChat"'}),"]"]}),"\n",(0,t.jsx)(a.p,{children:"Creates a new chat message between users."}),"\n",(0,t.jsx)(a.p,{children:"This function performs the following actions:"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsx)(a.li,{children:"Verifies the existence of the current user."}),"\n",(0,t.jsx)(a.li,{children:"Retrieves and caches the current user's details and application profile if not already cached."}),"\n",(0,t.jsx)(a.li,{children:"Checks the existence of the receiver user and retrieves their application profile."}),"\n",(0,t.jsx)(a.li,{children:"Ensures that both the current user and the receiver have valid application profiles."}),"\n",(0,t.jsx)(a.li,{children:"Compares the language codes of the sender and receiver to determine if there is a language barrier."}),"\n",(0,t.jsx)(a.li,{children:"Creates a new chat message with the specified content and language barrier status."}),"\n",(0,t.jsx)(a.li,{children:"Publishes the created message chat to a pub/sub channel for real-time updates."}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"param",children:"Param"}),"\n",(0,t.jsx)(a.p,{children:"The parent object for the mutation. This parameter is not used in this resolver."}),"\n",(0,t.jsx)(a.h2,{id:"param-1",children:"Param"}),"\n",(0,t.jsx)(a.p,{children:"The arguments for the mutation, including:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"data.receiver"}),": The ID of the user receiving the message."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"data.message"}),": The content of the message being sent."]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"param-2",children:"Param"}),"\n",(0,t.jsx)(a.p,{children:"The context for the mutation, including:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"userId"}),": The ID of the current user sending the message."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"pubsub"}),": The pub/sub instance for publishing real-time updates."]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(a.p,{children:"The created message chat record."}),"\n",(0,t.jsx)(a.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/f1c816bca43cc03a8c1bd303394e2550a50db017/src/resolvers/Mutation/createMessageChat.ts#L37",children:"src/resolvers/Mutation/createMessageChat.ts:37"})})]})}function h(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},511151:(e,a,s)=>{s.d(a,{Z:()=>c,a:()=>i});var t=s(667294);const r={},n=t.createContext(r);function i(e){const a=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(n.Provider,{value:a},e.children)}}}]);