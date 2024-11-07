"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[949827],{956526:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var o=s(785893),i=s(511151);const t={},c="Module: setup/MongoDB",r={id:"talawa-api-docs/modules/setup_MongoDB",title:"setup_MongoDB",description:"talawa-api / Exports / setup/MongoDB",source:"@site/docs/talawa-api-docs/modules/setup_MongoDB.md",sourceDirName:"talawa-api-docs/modules",slug:"/talawa-api-docs/modules/setup_MongoDB",permalink:"/docs/talawa-api-docs/modules/setup_MongoDB",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/modules/setup_MongoDB.md",tags:[],version:"current",frontMatter:{}},l={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"askForMongoDBUrl",id:"askformongodburl",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"checkConnection",id:"checkconnection",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"checkExistingMongoDB",id:"checkexistingmongodb",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/talawa-api-docs/",children:"talawa-api"})," / ",(0,o.jsx)(n.a,{href:"/docs/talawa-api-docs/modules",children:"Exports"})," / setup/MongoDB"]}),"\n",(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"module-setupmongodb",children:"Module: setup/MongoDB"})}),"\n",(0,o.jsx)(n.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,o.jsx)(n.h3,{id:"functions",children:"Functions"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/talawa-api-docs/modules/setup_MongoDB#askformongodburl",children:"askForMongoDBUrl"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/talawa-api-docs/modules/setup_MongoDB#checkconnection",children:"checkConnection"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/talawa-api-docs/modules/setup_MongoDB#checkexistingmongodb",children:"checkExistingMongoDB"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"functions-1",children:"Functions"}),"\n",(0,o.jsx)(n.h3,{id:"askformongodburl",children:"askForMongoDBUrl"}),"\n",(0,o.jsxs)(n.p,{children:["\u25b8 ",(0,o.jsx)(n.strong,{children:"askForMongoDBUrl"}),"(): ",(0,o.jsx)(n.code,{children:"Promise"}),"<",(0,o.jsx)(n.code,{children:"string"}),">"]}),"\n",(0,o.jsxs)(n.p,{children:["The function ",(0,o.jsx)(n.code,{children:"askForMongoDBUrl"})," prompts the user to enter a MongoDB URL and returns the entered URL\nas a string."]}),"\n",(0,o.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Promise"}),"<",(0,o.jsx)(n.code,{children:"string"}),">"]}),"\n",(0,o.jsx)(n.p,{children:"a Promise that resolves to a string."}),"\n",(0,o.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/setup/MongoDB.ts#L73",children:"src/setup/MongoDB.ts:73"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"checkconnection",children:"checkConnection"}),"\n",(0,o.jsxs)(n.p,{children:["\u25b8 ",(0,o.jsx)(n.strong,{children:"checkConnection"}),"(",(0,o.jsx)(n.code,{children:"url"}),"): ",(0,o.jsx)(n.code,{children:"Promise"}),"<",(0,o.jsx)(n.code,{children:"boolean"}),">"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"checkConnection"})," function attempts to establish a connection to a MongoDB instance using a provided URL."]}),"\n",(0,o.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,o.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,o.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"left"},children:(0,o.jsx)(n.code,{children:"url"})}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"The MongoDB connection URL."})]})})]}),"\n",(0,o.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Promise"}),"<",(0,o.jsx)(n.code,{children:"boolean"}),">"]}),"\n",(0,o.jsx)(n.p,{children:"A promise that resolves to a boolean indicating whether the connection was successful (true) or not (false)."}),"\n",(0,o.jsx)(n.p,{children:"It performs the following steps:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Tries to establish a connection to the MongoDB instance using the provided URL with a server selection timeout of 1000 milliseconds."}),"\n",(0,o.jsx)(n.li,{children:"If the connection is successful, it closes the connection and returns true."}),"\n",(0,o.jsxs)(n.li,{children:["If the connection fails, it logs an error message and returns false.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"If the error is an instance of the Error class, it logs the error message."}),"\n",(0,o.jsx)(n.li,{children:"If the error is not an instance of the Error class, it logs a generic error message and the error itself."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"This function is used during the initial setup process to test the MongoDB connection."}),"\n",(0,o.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/setup/MongoDB.ts#L45",children:"src/setup/MongoDB.ts:45"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"checkexistingmongodb",children:"checkExistingMongoDB"}),"\n",(0,o.jsxs)(n.p,{children:["\u25b8 ",(0,o.jsx)(n.strong,{children:"checkExistingMongoDB"}),"(): ",(0,o.jsx)(n.code,{children:"Promise"}),"<",(0,o.jsx)(n.code,{children:"string"})," | ",(0,o.jsx)(n.code,{children:"null"}),">"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"checkExistingMongoDB"})," function checks for an existing MongoDB URL in the environment variables and attempts to establish a connection."]}),"\n",(0,o.jsx)(n.p,{children:"It performs the following steps:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Retrieves the MongoDB URL from the environment variables."}),"\n",(0,o.jsx)(n.li,{children:"If no URL is found, it immediately returns null."}),"\n",(0,o.jsxs)(n.li,{children:["If a URL is found, it attempts to establish a connection using the ",(0,o.jsx)(n.code,{children:"checkConnection"})," function.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If the connection is successful (i.e., ",(0,o.jsx)(n.code,{children:"checkConnection"})," returns true), it returns the URL."]}),"\n",(0,o.jsxs)(n.li,{children:["If the connection fails (i.e., ",(0,o.jsx)(n.code,{children:"checkConnection"})," returns false), it returns null."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"This function is used during the initial setup process to check if a valid MongoDB connection can be made with the existing URL in the environment variables."}),"\n",(0,o.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Promise"}),"<",(0,o.jsx)(n.code,{children:"string"})," | ",(0,o.jsx)(n.code,{children:"null"}),">"]}),"\n",(0,o.jsx)(n.p,{children:"A promise that resolves to a string (if a connection could be made to the existing URL) or null (if no existing URL or connection could not be made)."}),"\n",(0,o.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/setup/MongoDB.ts#L17",children:"src/setup/MongoDB.ts:17"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},511151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>c});var o=s(667294);const i={},t=o.createContext(i);function c(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);