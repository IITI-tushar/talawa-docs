"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[378199],{332764:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"talawa-api-docs/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithWhere/functions/parseGraphQLConnectionArgumentsWithWhere","title":"parseGraphQLConnectionArgumentsWithWhere","description":"talawa-api","source":"@site/docs/talawa-api-docs/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithWhere/functions/parseGraphQLConnectionArgumentsWithWhere.md","sourceDirName":"talawa-api-docs/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithWhere/functions","slug":"/talawa-api-docs/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithWhere/functions/parseGraphQLConnectionArgumentsWithWhere","permalink":"/docs/talawa-api-docs/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithWhere/functions/parseGraphQLConnectionArgumentsWithWhere","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithWhere/functions/parseGraphQLConnectionArgumentsWithWhere.md","tags":[],"version":"current","frontMatter":{}}');var t=r(474848),a=r(28453);const i={},o=void 0,c={},h=[{value:"Type Parameters",id:"type-parameters",level:2},{value:"Parameters",id:"parameters",level:2},{value:"__namedParameters",id:"__namedparameters",level:3},{value:"args",id:"args",level:4},{value:"maximumLimit",id:"maximumlimit",level:4},{value:"parseCursor",id:"parsecursor",level:4},{value:"parseWhereResult",id:"parsewhereresult",level:4},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Defined in",id:"defined-in",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/",children:(0,t.jsx)(n.strong,{children:"talawa-api"})})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithWhere/",children:"utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithWhere"})," / parseGraphQLConnectionArgumentsWithWhere"]}),"\n",(0,t.jsx)(n.h1,{id:"function-parsegraphqlconnectionargumentswithwhere",children:"Function: parseGraphQLConnectionArgumentsWithWhere()"}),"\n",(0,t.jsxs)(n.p,{children:["> ",(0,t.jsx)(n.strong,{children:"parseGraphQLConnectionArgumentsWithWhere"}),"<",(0,t.jsx)(n.code,{children:"T0"}),", ",(0,t.jsx)(n.code,{children:"T1"}),">(",(0,t.jsx)(n.code,{children:"__namedParameters"}),"): ",(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithWhere/type-aliases/ParseGraphQLConnectionArgumentsWithWhereResult",children:(0,t.jsx)(n.code,{children:"ParseGraphQLConnectionArgumentsWithWhereResult"})}),"<",(0,t.jsx)(n.code,{children:"T0"}),", ",(0,t.jsx)(n.code,{children:"T1"}),">"]}),"\n",(0,t.jsx)(n.p,{children:"This function handles validating and transforming arguments for a custom graphQL connection\nthat also provides filtering capabilities."}),"\n",(0,t.jsx)(n.h2,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"T0"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"T1"})]}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(n.h3,{id:"__namedparameters",children:"__namedParameters"}),"\n",(0,t.jsx)(n.h4,{id:"args",children:"args"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/utilities/graphQLConnection/type-aliases/DefaultGraphQLConnectionArguments",children:(0,t.jsx)(n.code,{children:"DefaultGraphQLConnectionArguments"})})}),"\n",(0,t.jsx)(n.h4,{id:"maximumlimit",children:"maximumLimit"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"number"})," = ",(0,t.jsx)(n.code,{children:"MAXIMUM_FETCH_LIMIT"})]}),"\n",(0,t.jsx)(n.h4,{id:"parsecursor",children:"parseCursor"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/utilities/graphQLConnection/parseGraphQLConnectionArguments/type-aliases/ParseGraphQLConnectionCursor",children:(0,t.jsx)(n.code,{children:"ParseGraphQLConnectionCursor"})}),"<",(0,t.jsx)(n.code,{children:"T0"}),">"]}),"\n",(0,t.jsx)(n.h4,{id:"parsewhereresult",children:"parseWhereResult"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithWhere/type-aliases/ParseGraphQLConnectionWhereResult",children:(0,t.jsx)(n.code,{children:"ParseGraphQLConnectionWhereResult"})}),"<",(0,t.jsx)(n.code,{children:"T1"}),">"]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithWhere/type-aliases/ParseGraphQLConnectionArgumentsWithWhereResult",children:(0,t.jsx)(n.code,{children:"ParseGraphQLConnectionArgumentsWithWhereResult"})}),"<",(0,t.jsx)(n.code,{children:"T0"}),", ",(0,t.jsx)(n.code,{children:"T1"}),">"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'const result = await parseGraphQLConnectionArgumentsWithSortedBy(\\{\n  args: \\{\n    after,\n    first,\n  \\},\n  maximumLimit: 20,\n  parseCursor,\n  parseSortedBy,\n\\})\nif (result.isSuccessful === false) \\{\n   throw new GraphQLError("Invalid arguments provided.", \\{\n     extensions: \\{\n       code: "INVALID_ARGUMENTS",\n       errors: result.errors\n     \\}\n  \\})\n\\}\nconst \\{ parsedArgs: \\{ cursor, direction, filter, limit \\} \\} = result;\n'})}),"\n",(0,t.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/5c5b29a0ea487bda8306089fe128f43f3be29f94/src/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithWhere.ts#L70",children:"src/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithWhere.ts:70"})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var s=r(296540);const t={},a=s.createContext(t);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);