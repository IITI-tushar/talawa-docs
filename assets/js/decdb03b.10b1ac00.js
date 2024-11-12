"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[281958],{818329:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"talawa-api-docs/config/plugins/loadPlugins/functions/default","title":"default","description":"talawa-api \u2022 Docs","source":"@site/docs/talawa-api-docs/config/plugins/loadPlugins/functions/default.md","sourceDirName":"talawa-api-docs/config/plugins/loadPlugins/functions","slug":"/talawa-api-docs/config/plugins/loadPlugins/functions/default","permalink":"/docs/talawa-api-docs/config/plugins/loadPlugins/functions/default","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/config/plugins/loadPlugins/functions/default.md","tags":[],"version":"current","frontMatter":{}}');var i=s(474848),t=s(28453);const l={},o=void 0,d={},c=[{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"See",id:"see",level:2},{value:"Defined in",id:"defined-in",level:2}];function r(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/talawa-api-docs/",children:(0,i.jsx)(n.strong,{children:"talawa-api"})})," \u2022 ",(0,i.jsx)(n.strong,{children:"Docs"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,i.jsx)(n.a,{href:"/docs/talawa-api-docs/config/plugins/loadPlugins/",children:"config/plugins/loadPlugins"})," / default"]}),"\n",(0,i.jsx)(n.h1,{id:"function-default",children:"Function: default()"}),"\n",(0,i.jsxs)(n.p,{children:["> ",(0,i.jsx)(n.strong,{children:"default"}),"(): ",(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,i.jsx)(n.p,{children:"Loads plugin data into the MongoDB database if it is not already present."}),"\n",(0,i.jsxs)(n.p,{children:["This function connects to the MongoDB database using the connection URL specified in the environment variables.\nIt checks if the plugin data already exists in the database. If the data does not exist, it inserts the data from\nthe provided JSON file (",(0,i.jsx)(n.code,{children:"pluginData.json"}),"). If the data is already present, it logs a message indicating so."]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,i.jsx)(n.p,{children:"A promise that resolves when the plugins have been loaded or confirms that they are already present."}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import loadPlugins from './path/to/loadPlugins';\n\nloadPlugins().then(() =\\> \\{\n  console.log('Plugins loaded successfully.');\n\\}).catch(error =\\> \\{\n  console.error('Error loading plugins:', error);\n\\});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"see",children:"See"}),"\n",(0,i.jsx)(n.p,{children:"Parent File:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"src/index.ts"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/bba5d82264abb62b9e358a3d3fe1af18a8a8f6e4/src/config/plugins/loadPlugins.ts#L31",children:"src/config/plugins/loadPlugins.ts:31"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var a=s(296540);const i={},t=a.createContext(i);function l(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);