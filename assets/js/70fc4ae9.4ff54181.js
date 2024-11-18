"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[685848],{434241:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>t});const i=JSON.parse('{"id":"talawa-api-docs/utilities/TalawaGraphQLError/classes/TalawaGraphQLError","title":"TalawaGraphQLError","description":"talawa-api \u2022 Docs","source":"@site/docs/talawa-api-docs/utilities/TalawaGraphQLError/classes/TalawaGraphQLError.md","sourceDirName":"talawa-api-docs/utilities/TalawaGraphQLError/classes","slug":"/talawa-api-docs/utilities/TalawaGraphQLError/classes/TalawaGraphQLError","permalink":"/docs/talawa-api-docs/utilities/TalawaGraphQLError/classes/TalawaGraphQLError","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/utilities/TalawaGraphQLError/classes/TalawaGraphQLError.md","tags":[],"version":"current","frontMatter":{}}');var d=n(474848),s=n(28453);const l={},o=void 0,a={},t=[{value:"Example",id:"example",level:2},{value:"Extends",id:"extends",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new TalawaGraphQLError()",id:"new-talawagraphqlerror",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"extensions",id:"extensions",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"locations",id:"locations",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"message",id:"message",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"name",id:"name",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"nodes",id:"nodes",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"originalError",id:"originalerror",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"path",id:"path",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"positions",id:"positions",level:3},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"source",id:"source",level:3},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"stack?",id:"stack",level:3},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"prepareStackTrace()?",id:"preparestacktrace",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"See",id:"see",level:4},{value:"Inherited from",id:"inherited-from-10",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"stackTraceLimit",id:"stacktracelimit",level:3},{value:"Inherited from",id:"inherited-from-11",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"Accessors",id:"accessors",level:2},{value:"[toStringTag]",id:"tostringtag",level:3},{value:"Get Signature",id:"get-signature",level:4},{value:"Returns",id:"returns-2",level:5},{value:"Inherited from",id:"inherited-from-12",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"Methods",id:"methods",level:2},{value:"toJSON()",id:"tojson",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-13",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"toString()",id:"tostring",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-14",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"captureStackTrace()",id:"capturestacktrace",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-15",level:4},{value:"Defined in",id:"defined-in-16",level:4}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/docs/talawa-api-docs/",children:(0,d.jsx)(r.strong,{children:"talawa-api"})})," \u2022 ",(0,d.jsx)(r.strong,{children:"Docs"})]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,d.jsx)(r.a,{href:"/docs/talawa-api-docs/utilities/TalawaGraphQLError/",children:"utilities/TalawaGraphQLError"})," / TalawaGraphQLError"]}),"\n",(0,d.jsx)(r.h1,{id:"class-talawagraphqlerror",children:"Class: TalawaGraphQLError"}),"\n",(0,d.jsx)(r.p,{children:"A custom class extended from the GraphQLError class to standardize the errors returned from talawa-api's\ngraphQL resolvers. This standardization prevents the talawa-api contributers from returning undocumented,\narbitrary errors to the client applications in the graphQL query responses. This standardization also helps\nthe client developers to know beforehand what kind of errors they can expect from talawa-api's graphQL\nresponses, helping them design better UI experiences for user feedback."}),"\n",(0,d.jsx)(r.p,{children:"If necessary, the localization of the error messages(i18n) can be done within the graphQL resolvers where the\nTalawaGraphQLError class is used."}),"\n",(0,d.jsx)(r.p,{children:"This is the definition of a graphQL resolver for resolving the user record of the best friend of a user:-"}),"\n",(0,d.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-ts",children:'export const bestFriend = async (parent) =\\> \\{\n const user = await dbClient.query.user.findFirst(\\{\n     where(fields, operators) \\{\n         return operators.eq(fields.id, parent.bestFriendId);\n     \\}\n \\});\n\n if (user === undefined) \\{\n     throw new TalawaGraphQLError("Best friend not found", \\{\n         code: "RESOURCE_NOT_FOUND"\n     \\})\n \\}\n\n return user;\n\\}\n'})}),"\n",(0,d.jsx)(r.h2,{id:"extends",children:"Extends"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.code,{children:"GraphQLError"})}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"constructors",children:"Constructors"}),"\n",(0,d.jsx)(r.h3,{id:"new-talawagraphqlerror",children:"new TalawaGraphQLError()"}),"\n",(0,d.jsxs)(r.p,{children:["> ",(0,d.jsx)(r.strong,{children:"new TalawaGraphQLError"}),"(",(0,d.jsx)(r.code,{children:"message"}),", ",(0,d.jsx)(r.code,{children:"options"}),"): ",(0,d.jsx)(r.a,{href:"/docs/talawa-api-docs/utilities/TalawaGraphQLError/classes/TalawaGraphQLError",children:(0,d.jsx)(r.code,{children:"TalawaGraphQLError"})})]}),"\n",(0,d.jsx)(r.h4,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsxs)(r.p,{children:["\u2022 ",(0,d.jsx)(r.strong,{children:"message"}),": ",(0,d.jsx)(r.code,{children:"string"})]}),"\n",(0,d.jsxs)(r.p,{children:["\u2022 ",(0,d.jsx)(r.strong,{children:"options"}),": ",(0,d.jsx)(r.code,{children:"GraphQLErrorOptions"})," & ",(0,d.jsx)(r.code,{children:"object"})]}),"\n",(0,d.jsx)(r.h4,{id:"returns",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"/docs/talawa-api-docs/utilities/TalawaGraphQLError/classes/TalawaGraphQLError",children:(0,d.jsx)(r.code,{children:"TalawaGraphQLError"})})}),"\n",(0,d.jsx)(r.h4,{id:"overrides",children:"Overrides"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"GraphQLError.constructor"})}),"\n",(0,d.jsx)(r.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/a6e7ac91b581c9109559657faf0f934f3eb41fe7/src/utilities/TalawaGraphQLError.ts#L189",children:"src/utilities/TalawaGraphQLError.ts:189"})}),"\n",(0,d.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,d.jsx)(r.h3,{id:"extensions",children:"extensions"}),"\n",(0,d.jsxs)(r.p,{children:["> ",(0,d.jsx)(r.code,{children:"readonly"})," ",(0,d.jsx)(r.strong,{children:"extensions"}),": ",(0,d.jsx)(r.code,{children:"GraphQLErrorExtensions"})]}),"\n",(0,d.jsx)(r.p,{children:"Extension fields to add to the formatted error."}),"\n",(0,d.jsx)(r.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"GraphQLError.extensions"})}),"\n",(0,d.jsx)(r.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,d.jsx)(r.p,{children:"node_modules/graphql/error/GraphQLError.d.ts:77"}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"locations",children:"locations"}),"\n",(0,d.jsxs)(r.p,{children:["> ",(0,d.jsx)(r.code,{children:"readonly"})," ",(0,d.jsx)(r.strong,{children:"locations"}),": ",(0,d.jsx)(r.code,{children:"undefined"})," | readonly ",(0,d.jsx)(r.code,{children:"SourceLocation"}),"[]"]}),"\n",(0,d.jsxs)(r.p,{children:["An array of ",(0,d.jsx)(r.code,{children:"\\{ line, column \\}"})," locations within the source GraphQL document\nwhich correspond to this error."]}),"\n",(0,d.jsx)(r.p,{children:"Errors during validation often contain multiple locations, for example to\npoint out two things with the same name. Errors during execution include a\nsingle location, the field which produced the error."}),"\n",(0,d.jsx)(r.p,{children:"Enumerable, and appears in the result of JSON.stringify()."}),"\n",(0,d.jsx)(r.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"GraphQLError.locations"})}),"\n",(0,d.jsx)(r.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,d.jsx)(r.p,{children:"node_modules/graphql/error/GraphQLError.d.ts:46"}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"message",children:"message"}),"\n",(0,d.jsxs)(r.p,{children:["> ",(0,d.jsx)(r.strong,{children:"message"}),": ",(0,d.jsx)(r.code,{children:"string"})]}),"\n",(0,d.jsx)(r.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"GraphQLError.message"})}),"\n",(0,d.jsx)(r.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,d.jsx)(r.p,{children:"node_modules/typescript/lib/lib.es5.d.ts:1077"}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"name",children:"name"}),"\n",(0,d.jsxs)(r.p,{children:["> ",(0,d.jsx)(r.strong,{children:"name"}),": ",(0,d.jsx)(r.code,{children:"string"})]}),"\n",(0,d.jsx)(r.h4,{id:"inherited-from-3",children:"Inherited from"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"GraphQLError.name"})}),"\n",(0,d.jsx)(r.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,d.jsx)(r.p,{children:"node_modules/typescript/lib/lib.es5.d.ts:1076"}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"nodes",children:"nodes"}),"\n",(0,d.jsxs)(r.p,{children:["> ",(0,d.jsx)(r.code,{children:"readonly"})," ",(0,d.jsx)(r.strong,{children:"nodes"}),": ",(0,d.jsx)(r.code,{children:"undefined"})," | readonly ",(0,d.jsx)(r.code,{children:"ASTNode"}),"[]"]}),"\n",(0,d.jsx)(r.p,{children:"An array of GraphQL AST Nodes corresponding to this error."}),"\n",(0,d.jsx)(r.h4,{id:"inherited-from-4",children:"Inherited from"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"GraphQLError.nodes"})}),"\n",(0,d.jsx)(r.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,d.jsx)(r.p,{children:"node_modules/graphql/error/GraphQLError.d.ts:57"}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"originalerror",children:"originalError"}),"\n",(0,d.jsxs)(r.p,{children:["> ",(0,d.jsx)(r.code,{children:"readonly"})," ",(0,d.jsx)(r.strong,{children:"originalError"}),": ",(0,d.jsx)(r.code,{children:"undefined"})," | ",(0,d.jsx)(r.code,{children:"Error"})]}),"\n",(0,d.jsx)(r.p,{children:"The original error thrown from a field resolver during execution."}),"\n",(0,d.jsx)(r.h4,{id:"inherited-from-5",children:"Inherited from"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"GraphQLError.originalError"})}),"\n",(0,d.jsx)(r.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,d.jsx)(r.p,{children:"node_modules/graphql/error/GraphQLError.d.ts:73"}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"path",children:"path"}),"\n",(0,d.jsxs)(r.p,{children:["> ",(0,d.jsx)(r.code,{children:"readonly"})," ",(0,d.jsx)(r.strong,{children:"path"}),": ",(0,d.jsx)(r.code,{children:"undefined"})," | readonly (",(0,d.jsx)(r.code,{children:"string"})," | ",(0,d.jsx)(r.code,{children:"number"}),")[]"]}),"\n",(0,d.jsx)(r.p,{children:"An array describing the JSON-path into the execution response which\ncorresponds to this error. Only included for errors during execution."}),"\n",(0,d.jsx)(r.p,{children:"Enumerable, and appears in the result of JSON.stringify()."}),"\n",(0,d.jsx)(r.h4,{id:"inherited-from-6",children:"Inherited from"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"GraphQLError.path"})}),"\n",(0,d.jsx)(r.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,d.jsx)(r.p,{children:"node_modules/graphql/error/GraphQLError.d.ts:53"}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"positions",children:"positions"}),"\n",(0,d.jsxs)(r.p,{children:["> ",(0,d.jsx)(r.code,{children:"readonly"})," ",(0,d.jsx)(r.strong,{children:"positions"}),": ",(0,d.jsx)(r.code,{children:"undefined"})," | readonly ",(0,d.jsx)(r.code,{children:"number"}),"[]"]}),"\n",(0,d.jsx)(r.p,{children:"An array of character offsets within the source GraphQL document\nwhich correspond to this error."}),"\n",(0,d.jsx)(r.h4,{id:"inherited-from-7",children:"Inherited from"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"GraphQLError.positions"})}),"\n",(0,d.jsx)(r.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,d.jsx)(r.p,{children:"node_modules/graphql/error/GraphQLError.d.ts:69"}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"source",children:"source"}),"\n",(0,d.jsxs)(r.p,{children:["> ",(0,d.jsx)(r.code,{children:"readonly"})," ",(0,d.jsx)(r.strong,{children:"source"}),": ",(0,d.jsx)(r.code,{children:"undefined"})," | ",(0,d.jsx)(r.code,{children:"Source"})]}),"\n",(0,d.jsx)(r.p,{children:"The source GraphQL document for the first location of this error."}),"\n",(0,d.jsx)(r.p,{children:"Note that if this Error represents more than one node, the source may not\nrepresent nodes after the first node."}),"\n",(0,d.jsx)(r.h4,{id:"inherited-from-8",children:"Inherited from"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"GraphQLError.source"})}),"\n",(0,d.jsx)(r.h4,{id:"defined-in-9",children:"Defined in"}),"\n",(0,d.jsx)(r.p,{children:"node_modules/graphql/error/GraphQLError.d.ts:64"}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"stack",children:"stack?"}),"\n",(0,d.jsxs)(r.p,{children:["> ",(0,d.jsx)(r.code,{children:"optional"})," ",(0,d.jsx)(r.strong,{children:"stack"}),": ",(0,d.jsx)(r.code,{children:"string"})]}),"\n",(0,d.jsx)(r.h4,{id:"inherited-from-9",children:"Inherited from"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"GraphQLError.stack"})}),"\n",(0,d.jsx)(r.h4,{id:"defined-in-10",children:"Defined in"}),"\n",(0,d.jsx)(r.p,{children:"node_modules/typescript/lib/lib.es5.d.ts:1078"}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"preparestacktrace",children:"prepareStackTrace()?"}),"\n",(0,d.jsxs)(r.p,{children:["> ",(0,d.jsx)(r.code,{children:"static"})," ",(0,d.jsx)(r.code,{children:"optional"})," ",(0,d.jsx)(r.strong,{children:"prepareStackTrace"}),": (",(0,d.jsx)(r.code,{children:"err"}),", ",(0,d.jsx)(r.code,{children:"stackTraces"}),") => ",(0,d.jsx)(r.code,{children:"any"})]}),"\n",(0,d.jsx)(r.p,{children:"Optional override for formatting stack traces"}),"\n",(0,d.jsx)(r.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,d.jsxs)(r.p,{children:["\u2022 ",(0,d.jsx)(r.strong,{children:"err"}),": ",(0,d.jsx)(r.code,{children:"Error"})]}),"\n",(0,d.jsxs)(r.p,{children:["\u2022 ",(0,d.jsx)(r.strong,{children:"stackTraces"}),": ",(0,d.jsx)(r.code,{children:"CallSite"}),"[]"]}),"\n",(0,d.jsx)(r.h4,{id:"returns-1",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"any"})}),"\n",(0,d.jsx)(r.h4,{id:"see",children:"See"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"https://v8.dev/docs/stack-trace-api#customizing-stack-traces",children:"https://v8.dev/docs/stack-trace-api#customizing-stack-traces"})}),"\n",(0,d.jsx)(r.h4,{id:"inherited-from-10",children:"Inherited from"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"GraphQLError.prepareStackTrace"})}),"\n",(0,d.jsx)(r.h4,{id:"defined-in-11",children:"Defined in"}),"\n",(0,d.jsx)(r.p,{children:"node_modules/@types/node/globals.d.ts:143"}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"stacktracelimit",children:"stackTraceLimit"}),"\n",(0,d.jsxs)(r.p,{children:["> ",(0,d.jsx)(r.code,{children:"static"})," ",(0,d.jsx)(r.strong,{children:"stackTraceLimit"}),": ",(0,d.jsx)(r.code,{children:"number"})]}),"\n",(0,d.jsx)(r.h4,{id:"inherited-from-11",children:"Inherited from"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"GraphQLError.stackTraceLimit"})}),"\n",(0,d.jsx)(r.h4,{id:"defined-in-12",children:"Defined in"}),"\n",(0,d.jsx)(r.p,{children:"node_modules/@types/node/globals.d.ts:145"}),"\n",(0,d.jsx)(r.h2,{id:"accessors",children:"Accessors"}),"\n",(0,d.jsx)(r.h3,{id:"tostringtag",children:"[toStringTag]"}),"\n",(0,d.jsx)(r.h4,{id:"get-signature",children:"Get Signature"}),"\n",(0,d.jsxs)(r.p,{children:["> ",(0,d.jsx)(r.strong,{children:"get"})," ",(0,d.jsx)(r.strong,{children:"[toStringTag]"}),"(): ",(0,d.jsx)(r.code,{children:"string"})]}),"\n",(0,d.jsx)(r.h5,{id:"returns-2",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"string"})}),"\n",(0,d.jsx)(r.h4,{id:"inherited-from-12",children:"Inherited from"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"GraphQLError.[toStringTag]"})}),"\n",(0,d.jsx)(r.h4,{id:"defined-in-13",children:"Defined in"}),"\n",(0,d.jsx)(r.p,{children:"node_modules/graphql/error/GraphQLError.d.ts:95"}),"\n",(0,d.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,d.jsx)(r.h3,{id:"tojson",children:"toJSON()"}),"\n",(0,d.jsxs)(r.p,{children:["> ",(0,d.jsx)(r.strong,{children:"toJSON"}),"(): ",(0,d.jsx)(r.code,{children:"GraphQLFormattedError"})]}),"\n",(0,d.jsx)(r.h4,{id:"returns-3",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"GraphQLFormattedError"})}),"\n",(0,d.jsx)(r.h4,{id:"inherited-from-13",children:"Inherited from"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"GraphQLError.toJSON"})}),"\n",(0,d.jsx)(r.h4,{id:"defined-in-14",children:"Defined in"}),"\n",(0,d.jsx)(r.p,{children:"node_modules/graphql/error/GraphQLError.d.ts:97"}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"tostring",children:"toString()"}),"\n",(0,d.jsxs)(r.p,{children:["> ",(0,d.jsx)(r.strong,{children:"toString"}),"(): ",(0,d.jsx)(r.code,{children:"string"})]}),"\n",(0,d.jsx)(r.p,{children:"Returns a string representation of an object."}),"\n",(0,d.jsx)(r.h4,{id:"returns-4",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"string"})}),"\n",(0,d.jsx)(r.h4,{id:"inherited-from-14",children:"Inherited from"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"GraphQLError.toString"})}),"\n",(0,d.jsx)(r.h4,{id:"defined-in-15",children:"Defined in"}),"\n",(0,d.jsx)(r.p,{children:"node_modules/graphql/error/GraphQLError.d.ts:96"}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"capturestacktrace",children:"captureStackTrace()"}),"\n",(0,d.jsxs)(r.p,{children:["> ",(0,d.jsx)(r.code,{children:"static"})," ",(0,d.jsx)(r.strong,{children:"captureStackTrace"}),"(",(0,d.jsx)(r.code,{children:"targetObject"}),", ",(0,d.jsx)(r.code,{children:"constructorOpt"}),"?): ",(0,d.jsx)(r.code,{children:"void"})]}),"\n",(0,d.jsx)(r.p,{children:"Create .stack property on a target object"}),"\n",(0,d.jsx)(r.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,d.jsxs)(r.p,{children:["\u2022 ",(0,d.jsx)(r.strong,{children:"targetObject"}),": ",(0,d.jsx)(r.code,{children:"object"})]}),"\n",(0,d.jsxs)(r.p,{children:["\u2022 ",(0,d.jsx)(r.strong,{children:"constructorOpt?"}),": ",(0,d.jsx)(r.code,{children:"Function"})]}),"\n",(0,d.jsx)(r.h4,{id:"returns-5",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"void"})}),"\n",(0,d.jsx)(r.h4,{id:"inherited-from-15",children:"Inherited from"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"GraphQLError.captureStackTrace"})}),"\n",(0,d.jsx)(r.h4,{id:"defined-in-16",children:"Defined in"}),"\n",(0,d.jsx)(r.p,{children:"node_modules/@types/node/globals.d.ts:136"})]})}function c(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>o});var i=n(296540);const d={},s=i.createContext(d);function l(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);