"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[899692],{304458:(r,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"talawa-api-docs/libraries/errors/validationError/classes/ValidationError","title":"ValidationError","description":"talawa-api","source":"@site/docs/talawa-api-docs/libraries/errors/validationError/classes/ValidationError.md","sourceDirName":"talawa-api-docs/libraries/errors/validationError/classes","slug":"/talawa-api-docs/libraries/errors/validationError/classes/ValidationError","permalink":"/docs/talawa-api-docs/libraries/errors/validationError/classes/ValidationError","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/libraries/errors/validationError/classes/ValidationError.md","tags":[],"version":"current","frontMatter":{}}');var a=i(474848),n=i(28453);const d={},l=void 0,c={},o=[{value:"Extends",id:"extends",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new ValidationError()",id:"new-validationerror",level:3},{value:"Parameters",id:"parameters",level:4},{value:"errors",id:"errors",level:5},{value:"message",id:"message",level:5},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"errors",id:"errors-1",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"httpCode",id:"httpcode",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"message",id:"message-1",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"name",id:"name",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"stack?",id:"stack",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"prepareStackTrace()?",id:"preparestacktrace",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"err",id:"err",level:5},{value:"stackTraces",id:"stacktraces",level:5},{value:"Returns",id:"returns-1",level:4},{value:"See",id:"see",level:4},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"stackTraceLimit",id:"stacktracelimit",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"Methods",id:"methods",level:2},{value:"captureStackTrace()",id:"capturestacktrace",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"targetObject",id:"targetobject",level:5},{value:"constructorOpt?",id:"constructoropt",level:5},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"Defined in",id:"defined-in-8",level:4}];function t(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...r.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/talawa-api-docs/",children:(0,a.jsx)(e.strong,{children:"talawa-api"})})}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,a.jsx)(e.a,{href:"/docs/talawa-api-docs/libraries/errors/validationError/",children:"libraries/errors/validationError"})," / ValidationError"]}),"\n",(0,a.jsx)(e.h1,{id:"class-validationerror",children:"Class: ValidationError"}),"\n",(0,a.jsx)(e.p,{children:"This class represents an error indicating validation errors.\nIt extends the ApplicationError class to handle and format the error information."}),"\n",(0,a.jsx)(e.h2,{id:"extends",children:"Extends"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"/docs/talawa-api-docs/libraries/errors/applicationError/classes/ApplicationError",children:(0,a.jsx)(e.code,{children:"ApplicationError"})})}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"constructors",children:"Constructors"}),"\n",(0,a.jsx)(e.h3,{id:"new-validationerror",children:"new ValidationError()"}),"\n",(0,a.jsxs)(e.p,{children:["> ",(0,a.jsx)(e.strong,{children:"new ValidationError"}),"(",(0,a.jsx)(e.code,{children:"errors"}),", ",(0,a.jsx)(e.code,{children:"message"}),"): ",(0,a.jsx)(e.a,{href:"/docs/talawa-api-docs/libraries/errors/validationError/classes/ValidationError",children:(0,a.jsx)(e.code,{children:"ValidationError"})})]}),"\n",(0,a.jsx)(e.p,{children:"Creates an instance of ValidationError."}),"\n",(0,a.jsx)(e.h4,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsx)(e.h5,{id:"errors",children:"errors"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"/docs/talawa-api-docs/libraries/errors/applicationError/interfaces/InterfaceError",children:(0,a.jsx)(e.code,{children:"InterfaceError"})}),"[] = ",(0,a.jsx)(e.code,{children:"[]"})]}),"\n",(0,a.jsx)(e.p,{children:"An array of errors conforming to the InterfaceError interface (default is an empty array)."}),"\n",(0,a.jsx)(e.h5,{id:"message",children:"message"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"string"})," = ",(0,a.jsx)(e.code,{children:'"Validation error"'})]}),"\n",(0,a.jsx)(e.p,{children:'The error message (default is "Validation error").'}),"\n",(0,a.jsx)(e.h4,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/talawa-api-docs/libraries/errors/validationError/classes/ValidationError",children:(0,a.jsx)(e.code,{children:"ValidationError"})})}),"\n",(0,a.jsx)(e.h4,{id:"overrides",children:"Overrides"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"/docs/talawa-api-docs/libraries/errors/applicationError/classes/ApplicationError",children:(0,a.jsx)(e.code,{children:"ApplicationError"})}),".",(0,a.jsx)(e.a,{href:"/docs/talawa-api-docs/libraries/errors/applicationError/classes/ApplicationError#constructors",children:(0,a.jsx)(e.code,{children:"constructor"})})]}),"\n",(0,a.jsx)(e.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/039b0f127fb8caa46d57186ab4b3bb27fe150903/src/libraries/errors/validationError.ts#L15",children:"src/libraries/errors/validationError.ts:15"})}),"\n",(0,a.jsx)(e.h2,{id:"properties",children:"Properties"}),"\n",(0,a.jsx)(e.h3,{id:"errors-1",children:"errors"}),"\n",(0,a.jsxs)(e.p,{children:["> ",(0,a.jsx)(e.strong,{children:"errors"}),": ",(0,a.jsx)(e.a,{href:"/docs/talawa-api-docs/libraries/errors/applicationError/interfaces/InterfaceError",children:(0,a.jsx)(e.code,{children:"InterfaceError"})}),"[]"]}),"\n",(0,a.jsx)(e.p,{children:"An array of errors conforming to the InterfaceError interface"}),"\n",(0,a.jsx)(e.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"/docs/talawa-api-docs/libraries/errors/applicationError/classes/ApplicationError",children:(0,a.jsx)(e.code,{children:"ApplicationError"})}),".",(0,a.jsx)(e.a,{href:"/docs/talawa-api-docs/libraries/errors/applicationError/classes/ApplicationError#errors-1",children:(0,a.jsx)(e.code,{children:"errors"})})]}),"\n",(0,a.jsx)(e.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/039b0f127fb8caa46d57186ab4b3bb27fe150903/src/libraries/errors/applicationError.ts#L21",children:"src/libraries/errors/applicationError.ts:21"})}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h3,{id:"httpcode",children:"httpCode"}),"\n",(0,a.jsxs)(e.p,{children:["> ",(0,a.jsx)(e.strong,{children:"httpCode"}),": ",(0,a.jsx)(e.code,{children:"number"})]}),"\n",(0,a.jsx)(e.p,{children:"The HTTP status code associated with the error"}),"\n",(0,a.jsx)(e.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"/docs/talawa-api-docs/libraries/errors/applicationError/classes/ApplicationError",children:(0,a.jsx)(e.code,{children:"ApplicationError"})}),".",(0,a.jsx)(e.a,{href:"/docs/talawa-api-docs/libraries/errors/applicationError/classes/ApplicationError#httpcode-1",children:(0,a.jsx)(e.code,{children:"httpCode"})})]}),"\n",(0,a.jsx)(e.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/039b0f127fb8caa46d57186ab4b3bb27fe150903/src/libraries/errors/applicationError.ts#L23",children:"src/libraries/errors/applicationError.ts:23"})}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h3,{id:"message-1",children:"message"}),"\n",(0,a.jsxs)(e.p,{children:["> ",(0,a.jsx)(e.strong,{children:"message"}),": ",(0,a.jsx)(e.code,{children:"string"})]}),"\n",(0,a.jsx)(e.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"/docs/talawa-api-docs/libraries/errors/applicationError/classes/ApplicationError",children:(0,a.jsx)(e.code,{children:"ApplicationError"})}),".",(0,a.jsx)(e.a,{href:"/docs/talawa-api-docs/libraries/errors/applicationError/classes/ApplicationError#message-1",children:(0,a.jsx)(e.code,{children:"message"})})]}),"\n",(0,a.jsx)(e.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,a.jsx)(e.p,{children:"node_modules/typescript/lib/lib.es5.d.ts:1077"}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h3,{id:"name",children:"name"}),"\n",(0,a.jsxs)(e.p,{children:["> ",(0,a.jsx)(e.strong,{children:"name"}),": ",(0,a.jsx)(e.code,{children:"string"})]}),"\n",(0,a.jsx)(e.h4,{id:"inherited-from-3",children:"Inherited from"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"/docs/talawa-api-docs/libraries/errors/applicationError/classes/ApplicationError",children:(0,a.jsx)(e.code,{children:"ApplicationError"})}),".",(0,a.jsx)(e.a,{href:"/docs/talawa-api-docs/libraries/errors/applicationError/classes/ApplicationError#name",children:(0,a.jsx)(e.code,{children:"name"})})]}),"\n",(0,a.jsx)(e.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,a.jsx)(e.p,{children:"node_modules/typescript/lib/lib.es5.d.ts:1076"}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h3,{id:"stack",children:"stack?"}),"\n",(0,a.jsxs)(e.p,{children:["> ",(0,a.jsx)(e.code,{children:"optional"})," ",(0,a.jsx)(e.strong,{children:"stack"}),": ",(0,a.jsx)(e.code,{children:"string"})]}),"\n",(0,a.jsx)(e.h4,{id:"inherited-from-4",children:"Inherited from"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"/docs/talawa-api-docs/libraries/errors/applicationError/classes/ApplicationError",children:(0,a.jsx)(e.code,{children:"ApplicationError"})}),".",(0,a.jsx)(e.a,{href:"/docs/talawa-api-docs/libraries/errors/applicationError/classes/ApplicationError#stack",children:(0,a.jsx)(e.code,{children:"stack"})})]}),"\n",(0,a.jsx)(e.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,a.jsx)(e.p,{children:"node_modules/typescript/lib/lib.es5.d.ts:1078"}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h3,{id:"preparestacktrace",children:"prepareStackTrace()?"}),"\n",(0,a.jsxs)(e.p,{children:["> ",(0,a.jsx)(e.code,{children:"static"})," ",(0,a.jsx)(e.code,{children:"optional"})," ",(0,a.jsx)(e.strong,{children:"prepareStackTrace"}),": (",(0,a.jsx)(e.code,{children:"err"}),", ",(0,a.jsx)(e.code,{children:"stackTraces"}),") => ",(0,a.jsx)(e.code,{children:"any"})]}),"\n",(0,a.jsx)(e.p,{children:"Optional override for formatting stack traces"}),"\n",(0,a.jsx)(e.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,a.jsx)(e.h5,{id:"err",children:"err"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:"Error"})}),"\n",(0,a.jsx)(e.h5,{id:"stacktraces",children:"stackTraces"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"CallSite"}),"[]"]}),"\n",(0,a.jsx)(e.h4,{id:"returns-1",children:"Returns"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:"any"})}),"\n",(0,a.jsx)(e.h4,{id:"see",children:"See"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://v8.dev/docs/stack-trace-api#customizing-stack-traces",children:"https://v8.dev/docs/stack-trace-api#customizing-stack-traces"})}),"\n",(0,a.jsx)(e.h4,{id:"inherited-from-5",children:"Inherited from"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"/docs/talawa-api-docs/libraries/errors/applicationError/classes/ApplicationError",children:(0,a.jsx)(e.code,{children:"ApplicationError"})}),".",(0,a.jsx)(e.a,{href:"/docs/talawa-api-docs/libraries/errors/applicationError/classes/ApplicationError#preparestacktrace",children:(0,a.jsx)(e.code,{children:"prepareStackTrace"})})]}),"\n",(0,a.jsx)(e.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,a.jsx)(e.p,{children:"node_modules/@types/node/globals.d.ts:143"}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h3,{id:"stacktracelimit",children:"stackTraceLimit"}),"\n",(0,a.jsxs)(e.p,{children:["> ",(0,a.jsx)(e.code,{children:"static"})," ",(0,a.jsx)(e.strong,{children:"stackTraceLimit"}),": ",(0,a.jsx)(e.code,{children:"number"})]}),"\n",(0,a.jsx)(e.h4,{id:"inherited-from-6",children:"Inherited from"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"/docs/talawa-api-docs/libraries/errors/applicationError/classes/ApplicationError",children:(0,a.jsx)(e.code,{children:"ApplicationError"})}),".",(0,a.jsx)(e.a,{href:"/docs/talawa-api-docs/libraries/errors/applicationError/classes/ApplicationError#stacktracelimit",children:(0,a.jsx)(e.code,{children:"stackTraceLimit"})})]}),"\n",(0,a.jsx)(e.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,a.jsx)(e.p,{children:"node_modules/@types/node/globals.d.ts:145"}),"\n",(0,a.jsx)(e.h2,{id:"methods",children:"Methods"}),"\n",(0,a.jsx)(e.h3,{id:"capturestacktrace",children:"captureStackTrace()"}),"\n",(0,a.jsxs)(e.p,{children:["> ",(0,a.jsx)(e.code,{children:"static"})," ",(0,a.jsx)(e.strong,{children:"captureStackTrace"}),"(",(0,a.jsx)(e.code,{children:"targetObject"}),", ",(0,a.jsx)(e.code,{children:"constructorOpt"}),"?): ",(0,a.jsx)(e.code,{children:"void"})]}),"\n",(0,a.jsx)(e.p,{children:"Create .stack property on a target object"}),"\n",(0,a.jsx)(e.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,a.jsx)(e.h5,{id:"targetobject",children:"targetObject"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:"object"})}),"\n",(0,a.jsx)(e.h5,{id:"constructoropt",children:"constructorOpt?"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:"Function"})}),"\n",(0,a.jsx)(e.h4,{id:"returns-2",children:"Returns"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:"void"})}),"\n",(0,a.jsx)(e.h4,{id:"inherited-from-7",children:"Inherited from"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"/docs/talawa-api-docs/libraries/errors/applicationError/classes/ApplicationError",children:(0,a.jsx)(e.code,{children:"ApplicationError"})}),".",(0,a.jsx)(e.a,{href:"/docs/talawa-api-docs/libraries/errors/applicationError/classes/ApplicationError#capturestacktrace",children:(0,a.jsx)(e.code,{children:"captureStackTrace"})})]}),"\n",(0,a.jsx)(e.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,a.jsx)(e.p,{children:"node_modules/@types/node/globals.d.ts:136"})]})}function h(r={}){const{wrapper:e}={...(0,n.R)(),...r.components};return e?(0,a.jsx)(e,{...r,children:(0,a.jsx)(t,{...r})}):t(r)}},28453:(r,e,i)=>{i.d(e,{R:()=>d,x:()=>l});var s=i(296540);const a={},n=s.createContext(a);function d(r){const e=s.useContext(n);return s.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function l(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(a):r.components||a:d(r.components),s.createElement(n.Provider,{value:e},r.children)}}}]);