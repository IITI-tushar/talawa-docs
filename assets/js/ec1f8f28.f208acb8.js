"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[136302],{383743:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"talawa-api-docs/utilities/graphQLConnection/transformToDefaultGraphQLConnection/functions/transformToDefaultGraphQLConnection","title":"transformToDefaultGraphQLConnection","description":"talawa-api","source":"@site/docs/talawa-api-docs/utilities/graphQLConnection/transformToDefaultGraphQLConnection/functions/transformToDefaultGraphQLConnection.md","sourceDirName":"talawa-api-docs/utilities/graphQLConnection/transformToDefaultGraphQLConnection/functions","slug":"/talawa-api-docs/utilities/graphQLConnection/transformToDefaultGraphQLConnection/functions/transformToDefaultGraphQLConnection","permalink":"/docs/talawa-api-docs/utilities/graphQLConnection/transformToDefaultGraphQLConnection/functions/transformToDefaultGraphQLConnection","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/utilities/graphQLConnection/transformToDefaultGraphQLConnection/functions/transformToDefaultGraphQLConnection.md","tags":[],"version":"current","frontMatter":{}}');var o=t(474848),r=t(28453);const i={},s=void 0,c={},l=[{value:"Type Parameters",id:"type-parameters",level:2},{value:"Parameters",id:"parameters",level:2},{value:"__namedParameters",id:"__namedparameters",level:3},{value:"Returns",id:"returns",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Defined in",id:"defined-in",level:2}];function d(n){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"/docs/talawa-api-docs/",children:(0,o.jsx)(e.strong,{children:"talawa-api"})})}),"\n",(0,o.jsx)(e.hr,{}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,o.jsx)(e.a,{href:"/docs/talawa-api-docs/utilities/graphQLConnection/transformToDefaultGraphQLConnection/",children:"utilities/graphQLConnection/transformToDefaultGraphQLConnection"})," / transformToDefaultGraphQLConnection"]}),"\n",(0,o.jsx)(e.h1,{id:"function-transformtodefaultgraphqlconnection",children:"Function: transformToDefaultGraphQLConnection()"}),"\n",(0,o.jsxs)(e.p,{children:["> ",(0,o.jsx)(e.strong,{children:"transformToDefaultGraphQLConnection"}),"<",(0,o.jsx)(e.code,{children:"T0"}),", ",(0,o.jsx)(e.code,{children:"T1"}),", ",(0,o.jsx)(e.code,{children:"T2"}),">(",(0,o.jsx)(e.code,{children:"__namedParameters"}),"): ",(0,o.jsx)(e.a,{href:"/docs/talawa-api-docs/utilities/graphQLConnection/generateDefaultGraphQLConnection/type-aliases/DefaultGraphQLConnection",children:(0,o.jsx)(e.code,{children:"DefaultGraphQLConnection"})}),"<",(0,o.jsx)(e.code,{children:"T2"}),">"]}),"\n",(0,o.jsx)(e.p,{children:"This function is used to transform a list of objects to a standard graphQL connection object."}),"\n",(0,o.jsx)(e.h2,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,o.jsxs)(e.p,{children:["\u2022 ",(0,o.jsx)(e.strong,{children:"T0"})]}),"\n",(0,o.jsxs)(e.p,{children:["\u2022 ",(0,o.jsx)(e.strong,{children:"T1"})," ",(0,o.jsx)(e.em,{children:"extends"})," ",(0,o.jsx)(e.code,{children:"object"})]}),"\n",(0,o.jsxs)(e.p,{children:["\u2022 ",(0,o.jsx)(e.strong,{children:"T2"})]}),"\n",(0,o.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsx)(e.h3,{id:"__namedparameters",children:"__namedParameters"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"/docs/talawa-api-docs/utilities/graphQLConnection/transformToDefaultGraphQLConnection/type-aliases/TransformToDefaultGraphQLConnectionArguments",children:(0,o.jsx)(e.code,{children:"TransformToDefaultGraphQLConnectionArguments"})}),"<",(0,o.jsx)(e.code,{children:"T0"}),", ",(0,o.jsx)(e.code,{children:"T1"}),", ",(0,o.jsx)(e.code,{children:"T2"}),">"]}),"\n",(0,o.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"/docs/talawa-api-docs/utilities/graphQLConnection/generateDefaultGraphQLConnection/type-aliases/DefaultGraphQLConnection",children:(0,o.jsx)(e.code,{children:"DefaultGraphQLConnection"})}),"<",(0,o.jsx)(e.code,{children:"T2"}),">"]}),"\n",(0,o.jsx)(e.h2,{id:"remarks",children:"Remarks"}),"\n",(0,o.jsx)(e.p,{children:"The logic used in this function is common to almost all graphQL connection creation flows,\nabstracting that away into this function lets developers use a declarative way to create the\ngraphQL connection object they want and prevents code duplication."}),"\n",(0,o.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"const [objectList, totalCount] = await Promise.all([\n  User.find(filter)\n    .sort(sort)\n    .limit(limit)\n    .exec(),\n  User.find(filter)\n    .countDocuments()\n    .exec(),\n]);\n\nreturn transformToDefaultGraphQLConnection\\<\n String,\n DatabaseUser,\n DatabaseUser\n\\>(\\{\n objectList,\n parsedArgs,\n totalCount,\n\\});\n"})}),"\n",(0,o.jsx)(e.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/6bd0fecc1032af2aa70d925c85724d9fec2350f9/src/utilities/graphQLConnection/transformToDefaultGraphQLConnection.ts#L53",children:"src/utilities/graphQLConnection/transformToDefaultGraphQLConnection.ts:53"})})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>s});var a=t(296540);const o={},r=a.createContext(o);function i(n){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),a.createElement(r.Provider,{value:e},n.children)}}}]);