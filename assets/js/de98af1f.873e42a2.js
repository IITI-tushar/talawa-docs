"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[621093],{906073:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"talawa-api-docs/libraries/errors/applicationError/classes/ApplicationError","title":"ApplicationError","description":"talawa-api \u2022 Docs","source":"@site/docs/talawa-api-docs/libraries/errors/applicationError/classes/ApplicationError.md","sourceDirName":"talawa-api-docs/libraries/errors/applicationError/classes","slug":"/talawa-api-docs/libraries/errors/applicationError/classes/ApplicationError","permalink":"/docs/talawa-api-docs/libraries/errors/applicationError/classes/ApplicationError","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/libraries/errors/applicationError/classes/ApplicationError.md","tags":[],"version":"current","frontMatter":{}}');var s=i(474848),d=i(28453);const a={},l=void 0,c={},o=[{value:"Extends",id:"extends",level:2},{value:"Extended by",id:"extended-by",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new ApplicationError()",id:"new-applicationerror",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"errors",id:"errors",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"httpCode",id:"httpcode",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"message",id:"message",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"name",id:"name",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"stack?",id:"stack",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"prepareStackTrace()?",id:"preparestacktrace",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"See",id:"see",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"stackTraceLimit",id:"stacktracelimit",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"Methods",id:"methods",level:2},{value:"captureStackTrace()",id:"capturestacktrace",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-8",level:4}];function t(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/talawa-api-docs/",children:(0,s.jsx)(r.strong,{children:"talawa-api"})})," \u2022 ",(0,s.jsx)(r.strong,{children:"Docs"})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,s.jsx)(r.a,{href:"/docs/talawa-api-docs/libraries/errors/applicationError/",children:"libraries/errors/applicationError"})," / ApplicationError"]}),"\n",(0,s.jsx)(r.h1,{id:"class-applicationerror",children:"Class: ApplicationError"}),"\n",(0,s.jsx)(r.p,{children:"This class is responsible for handling application errors.\nIt extends the built-in Error class to include additional properties and methods."}),"\n",(0,s.jsx)(r.h2,{id:"extends",children:"Extends"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"Error"})}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"extended-by",children:"Extended by"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/talawa-api-docs/libraries/errors/ImageSizeLimitExceeded/classes/ImageSizeLimitExceeded",children:(0,s.jsx)(r.code,{children:"ImageSizeLimitExceeded"})})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/talawa-api-docs/libraries/errors/conflictError/classes/ConflictError",children:(0,s.jsx)(r.code,{children:"ConflictError"})})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/talawa-api-docs/libraries/errors/inputValidationError/classes/InputValidationError",children:(0,s.jsx)(r.code,{children:"InputValidationError"})})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/talawa-api-docs/libraries/errors/internalServerError/classes/InternalServerError",children:(0,s.jsx)(r.code,{children:"InternalServerError"})})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/talawa-api-docs/libraries/errors/invalidFileTypeError/classes/InvalidFileTypeError",children:(0,s.jsx)(r.code,{children:"InvalidFileTypeError"})})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/talawa-api-docs/libraries/errors/notFoundError/classes/NotFoundError",children:(0,s.jsx)(r.code,{children:"NotFoundError"})})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/talawa-api-docs/libraries/errors/unauthenticatedError/classes/UnauthenticatedError",children:(0,s.jsx)(r.code,{children:"UnauthenticatedError"})})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/talawa-api-docs/libraries/errors/unauthorizedError/classes/UnauthorizedError",children:(0,s.jsx)(r.code,{children:"UnauthorizedError"})})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/talawa-api-docs/libraries/errors/validationError/classes/ValidationError",children:(0,s.jsx)(r.code,{children:"ValidationError"})})}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"constructors",children:"Constructors"}),"\n",(0,s.jsx)(r.h3,{id:"new-applicationerror",children:"new ApplicationError()"}),"\n",(0,s.jsxs)(r.p,{children:["> ",(0,s.jsx)(r.strong,{children:"new ApplicationError"}),"(",(0,s.jsx)(r.code,{children:"errors"}),", ",(0,s.jsx)(r.code,{children:"httpCode"}),", ",(0,s.jsx)(r.code,{children:"message"}),"): ",(0,s.jsx)(r.a,{href:"/docs/talawa-api-docs/libraries/errors/applicationError/classes/ApplicationError",children:(0,s.jsx)(r.code,{children:"ApplicationError"})})]}),"\n",(0,s.jsx)(r.p,{children:"Creates an instance of ApplicationError."}),"\n",(0,s.jsx)(r.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"errors"}),": ",(0,s.jsx)(r.a,{href:"/docs/talawa-api-docs/libraries/errors/applicationError/interfaces/InterfaceError",children:(0,s.jsx)(r.code,{children:"InterfaceError"})}),"[]"]}),"\n",(0,s.jsx)(r.p,{children:"An array of errors conforming to the InterfaceError interface."}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"httpCode"}),": ",(0,s.jsx)(r.code,{children:"number"})," = ",(0,s.jsx)(r.code,{children:"422"})]}),"\n",(0,s.jsx)(r.p,{children:"The HTTP status code associated with the error (default is 422)."}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"message"}),": ",(0,s.jsx)(r.code,{children:"string"})," = ",(0,s.jsx)(r.code,{children:'"Error"'})]}),"\n",(0,s.jsx)(r.p,{children:'The error message (default is "Error").'}),"\n",(0,s.jsx)(r.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/talawa-api-docs/libraries/errors/applicationError/classes/ApplicationError",children:(0,s.jsx)(r.code,{children:"ApplicationError"})})}),"\n",(0,s.jsx)(r.h4,{id:"overrides",children:"Overrides"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"Error.constructor"})}),"\n",(0,s.jsx)(r.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/92443bb6a5ff3ed66457149a509401986a82e570/src/libraries/errors/applicationError.ts#L32",children:"src/libraries/errors/applicationError.ts:32"})}),"\n",(0,s.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(r.h3,{id:"errors",children:"errors"}),"\n",(0,s.jsxs)(r.p,{children:["> ",(0,s.jsx)(r.strong,{children:"errors"}),": ",(0,s.jsx)(r.a,{href:"/docs/talawa-api-docs/libraries/errors/applicationError/interfaces/InterfaceError",children:(0,s.jsx)(r.code,{children:"InterfaceError"})}),"[]"]}),"\n",(0,s.jsx)(r.p,{children:"An array of errors conforming to the InterfaceError interface"}),"\n",(0,s.jsx)(r.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/92443bb6a5ff3ed66457149a509401986a82e570/src/libraries/errors/applicationError.ts#L21",children:"src/libraries/errors/applicationError.ts:21"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"httpcode",children:"httpCode"}),"\n",(0,s.jsxs)(r.p,{children:["> ",(0,s.jsx)(r.strong,{children:"httpCode"}),": ",(0,s.jsx)(r.code,{children:"number"})]}),"\n",(0,s.jsx)(r.p,{children:"The HTTP status code associated with the error"}),"\n",(0,s.jsx)(r.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/92443bb6a5ff3ed66457149a509401986a82e570/src/libraries/errors/applicationError.ts#L23",children:"src/libraries/errors/applicationError.ts:23"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"message",children:"message"}),"\n",(0,s.jsxs)(r.p,{children:["> ",(0,s.jsx)(r.strong,{children:"message"}),": ",(0,s.jsx)(r.code,{children:"string"})]}),"\n",(0,s.jsx)(r.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"Error.message"})}),"\n",(0,s.jsx)(r.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,s.jsx)(r.p,{children:"node_modules/typescript/lib/lib.es5.d.ts:1077"}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"name",children:"name"}),"\n",(0,s.jsxs)(r.p,{children:["> ",(0,s.jsx)(r.strong,{children:"name"}),": ",(0,s.jsx)(r.code,{children:"string"})]}),"\n",(0,s.jsx)(r.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"Error.name"})}),"\n",(0,s.jsx)(r.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,s.jsx)(r.p,{children:"node_modules/typescript/lib/lib.es5.d.ts:1076"}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"stack",children:"stack?"}),"\n",(0,s.jsxs)(r.p,{children:["> ",(0,s.jsx)(r.code,{children:"optional"})," ",(0,s.jsx)(r.strong,{children:"stack"}),": ",(0,s.jsx)(r.code,{children:"string"})]}),"\n",(0,s.jsx)(r.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"Error.stack"})}),"\n",(0,s.jsx)(r.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,s.jsx)(r.p,{children:"node_modules/typescript/lib/lib.es5.d.ts:1078"}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"preparestacktrace",children:"prepareStackTrace()?"}),"\n",(0,s.jsxs)(r.p,{children:["> ",(0,s.jsx)(r.code,{children:"static"})," ",(0,s.jsx)(r.code,{children:"optional"})," ",(0,s.jsx)(r.strong,{children:"prepareStackTrace"}),": (",(0,s.jsx)(r.code,{children:"err"}),", ",(0,s.jsx)(r.code,{children:"stackTraces"}),") => ",(0,s.jsx)(r.code,{children:"any"})]}),"\n",(0,s.jsx)(r.p,{children:"Optional override for formatting stack traces"}),"\n",(0,s.jsx)(r.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"err"}),": ",(0,s.jsx)(r.code,{children:"Error"})]}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"stackTraces"}),": ",(0,s.jsx)(r.code,{children:"CallSite"}),"[]"]}),"\n",(0,s.jsx)(r.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"any"})}),"\n",(0,s.jsx)(r.h4,{id:"see",children:"See"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://v8.dev/docs/stack-trace-api#customizing-stack-traces",children:"https://v8.dev/docs/stack-trace-api#customizing-stack-traces"})}),"\n",(0,s.jsx)(r.h4,{id:"inherited-from-3",children:"Inherited from"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"Error.prepareStackTrace"})}),"\n",(0,s.jsx)(r.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,s.jsx)(r.p,{children:"node_modules/@types/node/globals.d.ts:143"}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"stacktracelimit",children:"stackTraceLimit"}),"\n",(0,s.jsxs)(r.p,{children:["> ",(0,s.jsx)(r.code,{children:"static"})," ",(0,s.jsx)(r.strong,{children:"stackTraceLimit"}),": ",(0,s.jsx)(r.code,{children:"number"})]}),"\n",(0,s.jsx)(r.h4,{id:"inherited-from-4",children:"Inherited from"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"Error.stackTraceLimit"})}),"\n",(0,s.jsx)(r.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,s.jsx)(r.p,{children:"node_modules/@types/node/globals.d.ts:145"}),"\n",(0,s.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(r.h3,{id:"capturestacktrace",children:"captureStackTrace()"}),"\n",(0,s.jsxs)(r.p,{children:["> ",(0,s.jsx)(r.code,{children:"static"})," ",(0,s.jsx)(r.strong,{children:"captureStackTrace"}),"(",(0,s.jsx)(r.code,{children:"targetObject"}),", ",(0,s.jsx)(r.code,{children:"constructorOpt"}),"?): ",(0,s.jsx)(r.code,{children:"void"})]}),"\n",(0,s.jsx)(r.p,{children:"Create .stack property on a target object"}),"\n",(0,s.jsx)(r.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"targetObject"}),": ",(0,s.jsx)(r.code,{children:"object"})]}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"constructorOpt?"}),": ",(0,s.jsx)(r.code,{children:"Function"})]}),"\n",(0,s.jsx)(r.h4,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"void"})}),"\n",(0,s.jsx)(r.h4,{id:"inherited-from-5",children:"Inherited from"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"Error.captureStackTrace"})}),"\n",(0,s.jsx)(r.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,s.jsx)(r.p,{children:"node_modules/@types/node/globals.d.ts:136"})]})}function h(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},28453:(e,r,i)=>{i.d(r,{R:()=>a,x:()=>l});var n=i(296540);const s={},d=n.createContext(s);function a(e){const r=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);