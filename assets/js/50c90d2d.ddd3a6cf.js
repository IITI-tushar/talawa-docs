"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[435214],{329098:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"talawa-api-docs/utilities/graphQLConnection/getCommonGraphQLConnectionSort/functions/getCommonGraphQLConnectionSort","title":"getCommonGraphQLConnectionSort","description":"talawa-api \u2022 Docs","source":"@site/docs/talawa-api-docs/utilities/graphQLConnection/getCommonGraphQLConnectionSort/functions/getCommonGraphQLConnectionSort.md","sourceDirName":"talawa-api-docs/utilities/graphQLConnection/getCommonGraphQLConnectionSort/functions","slug":"/talawa-api-docs/utilities/graphQLConnection/getCommonGraphQLConnectionSort/functions/getCommonGraphQLConnectionSort","permalink":"/docs/talawa-api-docs/utilities/graphQLConnection/getCommonGraphQLConnectionSort/functions/getCommonGraphQLConnectionSort","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/utilities/graphQLConnection/getCommonGraphQLConnectionSort/functions/getCommonGraphQLConnectionSort.md","tags":[],"version":"current","frontMatter":{}}');var i=o(474848),r=o(28453);const a={},s=void 0,c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Defined in",id:"defined-in",level:2}];function h(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"/docs/talawa-api-docs/",children:(0,i.jsx)(e.strong,{children:"talawa-api"})})," \u2022 ",(0,i.jsx)(e.strong,{children:"Docs"})]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,i.jsx)(e.a,{href:"/docs/talawa-api-docs/utilities/graphQLConnection/getCommonGraphQLConnectionSort/",children:"utilities/graphQLConnection/getCommonGraphQLConnectionSort"})," / getCommonGraphQLConnectionSort"]}),"\n",(0,i.jsx)(e.h1,{id:"function-getcommongraphqlconnectionsort",children:"Function: getCommonGraphQLConnectionSort()"}),"\n",(0,i.jsxs)(e.p,{children:["> ",(0,i.jsx)(e.strong,{children:"getCommonGraphQLConnectionSort"}),"(",(0,i.jsx)(e.code,{children:"__namedParameters"}),"): ",(0,i.jsx)(e.code,{children:"CommmonGraphQLConnectionSort"})]}),"\n",(0,i.jsx)(e.p,{children:"This function is used to get an object containing common mongoose sorting logic."}),"\n",(0,i.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(e.p,{children:["\u2022 ",(0,i.jsx)(e.strong,{children:"__namedParameters"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u2022 ",(0,i.jsx)(e.strong,{children:"__namedParameters.direction"}),": ",(0,i.jsx)(e.a,{href:"/docs/talawa-api-docs/utilities/graphQLConnection/type-aliases/GraphQLConnectionTraversalDirection",children:(0,i.jsx)(e.code,{children:"GraphQLConnectionTraversalDirection"})})]}),"\n",(0,i.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"CommmonGraphQLConnectionSort"})}),"\n",(0,i.jsx)(e.h2,{id:"remarks",children:"Remarks"}),"\n",(0,i.jsx)(e.p,{children:"Here are a few assumptions this function makes which are common to most of the\ngraphQL connections."}),"\n",(0,i.jsx)(e.p,{children:"The entity that has the latest creation datetime must appear at the top of the connection. This\nmeans the default sorting logic would be sorting in descending order by the time of creation of\nan entity, and if two or more entities have the same time of creation sorting in descending order\nby the primary key of the entity. MongoDB object ids are lexographically sortable all on their own\nbecause they contain information about both the creation time and primary key for the document."}),"\n",(0,i.jsx)(e.p,{children:"Therefore, this function only returns sorting logic for sorting by the object id of a mongoDB\ndocument."}),"\n",(0,i.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:'const sort = getCommonGraphQLConnectionSort(\\{\n  direction: "BACKWARD"\n \\});\nconst objectList = await User.find().sort(sort).limit(10);\n'})}),"\n",(0,i.jsx)(e.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/bba5d82264abb62b9e358a3d3fe1af18a8a8f6e4/src/utilities/graphQLConnection/getCommonGraphQLConnectionSort.ts#L34",children:"src/utilities/graphQLConnection/getCommonGraphQLConnectionSort.ts:34"})})]})}function l(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},28453:(n,e,o)=>{o.d(e,{R:()=>a,x:()=>s});var t=o(296540);const i={},r=t.createContext(i);function a(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);