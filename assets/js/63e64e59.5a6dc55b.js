"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[687125],{427272:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=s(785893),t=s(511151);const r={},d="Module: setup/redisConfiguration",o={id:"talawa-api-docs/modules/setup_redisConfiguration",title:"setup_redisConfiguration",description:"talawa-api / Exports / setup/redisConfiguration",source:"@site/docs/talawa-api-docs/modules/setup_redisConfiguration.md",sourceDirName:"talawa-api-docs/modules",slug:"/talawa-api-docs/modules/setup_redisConfiguration",permalink:"/docs/talawa-api-docs/modules/setup_redisConfiguration",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/modules/setup_redisConfiguration.md",tags:[],version:"current",frontMatter:{}},c={},l=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"askForRedisUrl",id:"askforredisurl",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"checkExistingRedis",id:"checkexistingredis",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"checkRedisConnection",id:"checkredisconnection",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/talawa-api-docs/",children:"talawa-api"})," / ",(0,i.jsx)(n.a,{href:"/docs/talawa-api-docs/modules",children:"Exports"})," / setup/redisConfiguration"]}),"\n",(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"module-setupredisconfiguration",children:"Module: setup/redisConfiguration"})}),"\n",(0,i.jsx)(n.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,i.jsx)(n.h3,{id:"functions",children:"Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/talawa-api-docs/modules/setup_redisConfiguration#askforredisurl",children:"askForRedisUrl"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/talawa-api-docs/modules/setup_redisConfiguration#checkexistingredis",children:"checkExistingRedis"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/talawa-api-docs/modules/setup_redisConfiguration#checkredisconnection",children:"checkRedisConnection"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"functions-1",children:"Functions"}),"\n",(0,i.jsx)(n.h3,{id:"askforredisurl",children:"askForRedisUrl"}),"\n",(0,i.jsxs)(n.p,{children:["\u25b8 ",(0,i.jsx)(n.strong,{children:"askForRedisUrl"}),"(): ",(0,i.jsx)(n.code,{children:"Promise"}),"<{ ",(0,i.jsx)(n.code,{children:"host"}),": ",(0,i.jsx)(n.code,{children:"string"})," ; ",(0,i.jsx)(n.code,{children:"password"}),": ",(0,i.jsx)(n.code,{children:"string"})," ; ",(0,i.jsx)(n.code,{children:"port"}),": ",(0,i.jsx)(n.code,{children:"number"}),"  }>"]}),"\n",(0,i.jsxs)(n.p,{children:["The function ",(0,i.jsx)(n.code,{children:"askForRedisUrl"})," prompts the user to enter the Redis hostname, port, and password, and\nreturns an object with these values."]}),"\n",(0,i.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Promise"}),"<{ ",(0,i.jsx)(n.code,{children:"host"}),": ",(0,i.jsx)(n.code,{children:"string"})," ; ",(0,i.jsx)(n.code,{children:"password"}),": ",(0,i.jsx)(n.code,{children:"string"})," ; ",(0,i.jsx)(n.code,{children:"port"}),": ",(0,i.jsx)(n.code,{children:"number"}),"  }>"]}),"\n",(0,i.jsxs)(n.p,{children:["The function ",(0,i.jsx)(n.code,{children:"askForRedisUrl"})," returns a promise that resolves to an object with the\nproperties ",(0,i.jsx)(n.code,{children:"host"}),", ",(0,i.jsx)(n.code,{children:"port"}),", and ",(0,i.jsx)(n.code,{children:"password"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/setup/redisConfiguration.ts#L36",children:"src/setup/redisConfiguration.ts:36"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"checkexistingredis",children:"checkExistingRedis"}),"\n",(0,i.jsxs)(n.p,{children:["\u25b8 ",(0,i.jsx)(n.strong,{children:"checkExistingRedis"}),"(): ",(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.code,{children:"string"})," | ",(0,i.jsx)(n.code,{children:"null"}),">"]}),"\n",(0,i.jsxs)(n.p,{children:["The function ",(0,i.jsx)(n.code,{children:"checkExistingRedis"})," checks if there is an existing Redis connection by iterating\nthrough a list of Redis URLs and testing the connection."]}),"\n",(0,i.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.code,{children:"string"})," | ",(0,i.jsx)(n.code,{children:"null"}),">"]}),"\n",(0,i.jsxs)(n.p,{children:["The function ",(0,i.jsx)(n.code,{children:"checkExistingRedis"})," returns a Promise that resolves to a string or null."]}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/setup/redisConfiguration.ts#L71",children:"src/setup/redisConfiguration.ts:71"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"checkredisconnection",children:"checkRedisConnection"}),"\n",(0,i.jsxs)(n.p,{children:["\u25b8 ",(0,i.jsx)(n.strong,{children:"checkRedisConnection"}),"(",(0,i.jsx)(n.code,{children:"url"}),"): ",(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.code,{children:"boolean"}),">"]}),"\n",(0,i.jsxs)(n.p,{children:["The function ",(0,i.jsx)(n.code,{children:"checkRedisConnection"})," checks if a connection to Redis can be established using the\nprovided URL."]}),"\n",(0,i.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"url"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["The ",(0,i.jsx)(n.code,{children:"url"})," parameter is a string that represents the URL of the Redis server. It is used to establish a connection to the Redis server."]})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.code,{children:"boolean"}),">"]}),"\n",(0,i.jsx)(n.p,{children:"a Promise that resolves to a boolean value."}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/setup/redisConfiguration.ts#L12",children:"src/setup/redisConfiguration.ts:12"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},511151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>d});var i=s(667294);const t={},r=i.createContext(t);function d(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);