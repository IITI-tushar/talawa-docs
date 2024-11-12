"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[144543],{476321:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});const c=JSON.parse('{"id":"talawa-api-docs/libraries/dbLogger/functions/createLoggingMiddleware","title":"createLoggingMiddleware","description":"talawa-api \u2022 Docs","source":"@site/docs/talawa-api-docs/libraries/dbLogger/functions/createLoggingMiddleware.md","sourceDirName":"talawa-api-docs/libraries/dbLogger/functions","slug":"/talawa-api-docs/libraries/dbLogger/functions/createLoggingMiddleware","permalink":"/docs/talawa-api-docs/libraries/dbLogger/functions/createLoggingMiddleware","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/libraries/dbLogger/functions/createLoggingMiddleware.md","tags":[],"version":"current","frontMatter":{}}');var i=n(474848),r=n(28453);const s={},o=void 0,a={},l=[{value:"Type Parameters",id:"type-parameters",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Defined in",id:"defined-in",level:2}];function t(e){const d={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(d.p,{children:[(0,i.jsx)(d.a,{href:"/docs/talawa-api-docs/",children:(0,i.jsx)(d.strong,{children:"talawa-api"})})," \u2022 ",(0,i.jsx)(d.strong,{children:"Docs"})]}),"\n",(0,i.jsx)(d.hr,{}),"\n",(0,i.jsxs)(d.p,{children:[(0,i.jsx)(d.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,i.jsx)(d.a,{href:"/docs/talawa-api-docs/libraries/dbLogger/",children:"libraries/dbLogger"})," / createLoggingMiddleware"]}),"\n",(0,i.jsx)(d.h1,{id:"function-createloggingmiddleware",children:"Function: createLoggingMiddleware()"}),"\n",(0,i.jsxs)(d.p,{children:["> ",(0,i.jsx)(d.strong,{children:"createLoggingMiddleware"}),"<",(0,i.jsx)(d.code,{children:"T"}),">(",(0,i.jsx)(d.code,{children:"schema"}),", ",(0,i.jsx)(d.code,{children:"modelName"}),"): ",(0,i.jsx)(d.code,{children:"void"})]}),"\n",(0,i.jsx)(d.p,{children:"Creates a logging middleware for a Mongoose schema. This middleware logs\ncreate, update, and delete operations on the specified schema."}),"\n",(0,i.jsx)(d.h2,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,i.jsxs)(d.p,{children:["\u2022 ",(0,i.jsx)(d.strong,{children:"T"})," ",(0,i.jsx)(d.em,{children:"extends"})," ",(0,i.jsx)(d.code,{children:"Document"}),"<",(0,i.jsx)(d.code,{children:"any"}),", ",(0,i.jsx)(d.code,{children:"any"}),", ",(0,i.jsx)(d.code,{children:"any"}),">"]}),"\n",(0,i.jsx)(d.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(d.p,{children:["\u2022 ",(0,i.jsx)(d.strong,{children:"schema"}),": ",(0,i.jsx)(d.code,{children:"Schema"}),"<",(0,i.jsx)(d.code,{children:"T"}),", ",(0,i.jsx)(d.code,{children:"Model"}),"<",(0,i.jsx)(d.code,{children:"T"}),", ",(0,i.jsx)(d.code,{children:"any"}),", ",(0,i.jsx)(d.code,{children:"any"}),", ",(0,i.jsx)(d.code,{children:"any"}),", ",(0,i.jsx)(d.code,{children:"IfAny"}),"<",(0,i.jsx)(d.code,{children:"T"}),", ",(0,i.jsx)(d.code,{children:"any"}),", ",(0,i.jsx)(d.code,{children:"Document"}),"<",(0,i.jsx)(d.code,{children:"unknown"}),", ",(0,i.jsx)(d.code,{children:"any"}),", ",(0,i.jsx)(d.code,{children:"T"}),"> & ",(0,i.jsx)(d.code,{children:"Require_id"}),"<",(0,i.jsx)(d.code,{children:"T"}),">>, ",(0,i.jsx)(d.code,{children:"any"}),">, ",(0,i.jsx)(d.code,{children:"object"}),", ",(0,i.jsx)(d.code,{children:"object"}),", ",(0,i.jsx)(d.code,{children:"object"}),", ",(0,i.jsx)(d.code,{children:"object"}),", ",(0,i.jsx)(d.code,{children:"DefaultSchemaOptions"}),", ",(0,i.jsx)(d.code,{children:"ObtainDocumentType"}),"<",(0,i.jsx)(d.code,{children:"any"}),", ",(0,i.jsx)(d.code,{children:"T"}),", ",(0,i.jsx)(d.code,{children:"ResolveSchemaOptions"}),"<",(0,i.jsx)(d.code,{children:"DefaultSchemaOptions"}),">>, ",(0,i.jsx)(d.code,{children:"IfAny"}),"<",(0,i.jsx)(d.code,{children:"FlatRecord"}),"<",(0,i.jsx)(d.code,{children:"ObtainDocumentType"}),"<",(0,i.jsx)(d.code,{children:"any"}),", ",(0,i.jsx)(d.code,{children:"T"}),", ",(0,i.jsx)(d.code,{children:"ResolveSchemaOptions"}),"<",(0,i.jsx)(d.code,{children:"DefaultSchemaOptions"}),">>>, ",(0,i.jsx)(d.code,{children:"any"}),", ",(0,i.jsx)(d.code,{children:"Document"}),"<",(0,i.jsx)(d.code,{children:"unknown"}),", ",(0,i.jsx)(d.code,{children:"object"}),", ",(0,i.jsx)(d.code,{children:"FlatRecord"}),"<",(0,i.jsx)(d.code,{children:"ObtainDocumentType"}),"<",(0,i.jsx)(d.code,{children:"any"}),", ",(0,i.jsx)(d.code,{children:"T"}),", ",(0,i.jsx)(d.code,{children:"ResolveSchemaOptions"}),"<",(0,i.jsx)(d.code,{children:"DefaultSchemaOptions"}),">>>> & ",(0,i.jsx)(d.code,{children:"Require_id"}),"<",(0,i.jsx)(d.code,{children:"FlatRecord"}),"<",(0,i.jsx)(d.code,{children:"ObtainDocumentType"}),"<",(0,i.jsx)(d.code,{children:"any"}),", ",(0,i.jsx)(d.code,{children:"T"}),", ",(0,i.jsx)(d.code,{children:"ResolveSchemaOptions"}),"<",(0,i.jsx)(d.code,{children:"DefaultSchemaOptions"}),">>>>>>"]}),"\n",(0,i.jsx)(d.p,{children:"The Mongoose schema to which the middleware will be added"}),"\n",(0,i.jsxs)(d.p,{children:["\u2022 ",(0,i.jsx)(d.strong,{children:"modelName"}),": ",(0,i.jsx)(d.code,{children:"string"})]}),"\n",(0,i.jsx)(d.p,{children:"The name of the model associated with the schema"}),"\n",(0,i.jsx)(d.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(d.p,{children:(0,i.jsx)(d.code,{children:"void"})}),"\n",(0,i.jsx)(d.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(d.p,{children:(0,i.jsx)(d.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/bba5d82264abb62b9e358a3d3fe1af18a8a8f6e4/src/libraries/dbLogger.ts#L65",children:"src/libraries/dbLogger.ts:65"})})]})}function h(e={}){const{wrapper:d}={...(0,r.R)(),...e.components};return d?(0,i.jsx)(d,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},28453:(e,d,n)=>{n.d(d,{R:()=>s,x:()=>o});var c=n(296540);const i={},r=c.createContext(i);function s(e){const d=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function o(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),c.createElement(r.Provider,{value:d},e.children)}}}]);