"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[186478],{513098:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"talawa-api-docs/utilities/graphQLConnection/parseGraphQLConnectionArguments/functions/parseGraphQLConnectionArguments","title":"parseGraphQLConnectionArguments","description":"talawa-api","source":"@site/docs/talawa-api-docs/utilities/graphQLConnection/parseGraphQLConnectionArguments/functions/parseGraphQLConnectionArguments.md","sourceDirName":"talawa-api-docs/utilities/graphQLConnection/parseGraphQLConnectionArguments/functions","slug":"/talawa-api-docs/utilities/graphQLConnection/parseGraphQLConnectionArguments/functions/parseGraphQLConnectionArguments","permalink":"/docs/talawa-api-docs/utilities/graphQLConnection/parseGraphQLConnectionArguments/functions/parseGraphQLConnectionArguments","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/utilities/graphQLConnection/parseGraphQLConnectionArguments/functions/parseGraphQLConnectionArguments.md","tags":[],"version":"current","frontMatter":{}}');var s=r(474848),t=r(28453);const i={},o=void 0,c={},l=[{value:"Type Parameters",id:"type-parameters",level:2},{value:"Parameters",id:"parameters",level:2},{value:"__namedParameters",id:"__namedparameters",level:3},{value:"args",id:"args",level:4},{value:"maximumLimit",id:"maximumlimit",level:4},{value:"parseCursor",id:"parsecursor",level:4},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Defined in",id:"defined-in",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/talawa-api-docs/",children:(0,s.jsx)(n.strong,{children:"talawa-api"})})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,s.jsx)(n.a,{href:"/docs/talawa-api-docs/utilities/graphQLConnection/parseGraphQLConnectionArguments/",children:"utilities/graphQLConnection/parseGraphQLConnectionArguments"})," / parseGraphQLConnectionArguments"]}),"\n",(0,s.jsx)(n.h1,{id:"function-parsegraphqlconnectionarguments",children:"Function: parseGraphQLConnectionArguments()"}),"\n",(0,s.jsxs)(n.p,{children:["> ",(0,s.jsx)(n.strong,{children:"parseGraphQLConnectionArguments"}),"<",(0,s.jsx)(n.code,{children:"T0"}),">(",(0,s.jsx)(n.code,{children:"__namedParameters"}),"): ",(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.a,{href:"/docs/talawa-api-docs/utilities/graphQLConnection/parseGraphQLConnectionArguments/type-aliases/ParseGraphQLConnectionArgumentsResult",children:(0,s.jsx)(n.code,{children:"ParseGraphQLConnectionArgumentsResult"})}),"<",(0,s.jsx)(n.code,{children:"T0"}),">>"]}),"\n",(0,s.jsx)(n.p,{children:"This function handles validating and transforming arguments of a base graphQL connection."}),"\n",(0,s.jsx)(n.h2,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"T0"})]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.h3,{id:"__namedparameters",children:"__namedParameters"}),"\n",(0,s.jsx)(n.h4,{id:"args",children:"args"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/talawa-api-docs/utilities/graphQLConnection/type-aliases/DefaultGraphQLConnectionArguments",children:(0,s.jsx)(n.code,{children:"DefaultGraphQLConnectionArguments"})})}),"\n",(0,s.jsx)(n.h4,{id:"maximumlimit",children:"maximumLimit"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"number"})," = ",(0,s.jsx)(n.code,{children:"MAXIMUM_FETCH_LIMIT"})]}),"\n",(0,s.jsx)(n.h4,{id:"parsecursor",children:"parseCursor"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/talawa-api-docs/utilities/graphQLConnection/parseGraphQLConnectionArguments/type-aliases/ParseGraphQLConnectionCursor",children:(0,s.jsx)(n.code,{children:"ParseGraphQLConnectionCursor"})}),"<",(0,s.jsx)(n.code,{children:"T0"}),">"]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.a,{href:"/docs/talawa-api-docs/utilities/graphQLConnection/parseGraphQLConnectionArguments/type-aliases/ParseGraphQLConnectionArgumentsResult",children:(0,s.jsx)(n.code,{children:"ParseGraphQLConnectionArgumentsResult"})}),"<",(0,s.jsx)(n.code,{children:"T0"}),">>"]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'const result = await parseGraphQLConnectionArguments(\\{\n  args: \\{\n    after,\n    first,\n  \\},\n  maximumLimit: 20,\n  parseCursor\n\\})\nif (result.isSuccessful === false) \\{\n   throw new GraphQLError("Invalid arguments provided.", \\{\n     extensions: \\{\n       code: "INVALID_ARGUMENTS",\n       errors: result.errors\n     \\}\n  \\})\n\\}\nconst \\{ parsedArgs: \\{ cursor, direction, limit \\} \\} = result;\n'})}),"\n",(0,s.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/utilities/graphQLConnection/parseGraphQLConnectionArguments.ts#L88",children:"src/utilities/graphQLConnection/parseGraphQLConnectionArguments.ts:88"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var a=r(296540);const s={},t=a.createContext(s);function i(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);