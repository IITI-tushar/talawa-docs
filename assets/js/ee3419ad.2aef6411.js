"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[906337],{797551:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"talawa-mobile-docs/utils_task_queries/TaskQueries/eventTasks","title":"eventTasks method","description":"String eventTasks","source":"@site/docs/talawa-mobile-docs/utils_task_queries/TaskQueries/eventTasks.md","sourceDirName":"talawa-mobile-docs/utils_task_queries/TaskQueries","slug":"/talawa-mobile-docs/utils_task_queries/TaskQueries/eventTasks","permalink":"/docs/talawa-mobile-docs/utils_task_queries/TaskQueries/eventTasks","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/utils_task_queries/TaskQueries/eventTasks.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"editTask method","permalink":"/docs/talawa-mobile-docs/utils_task_queries/TaskQueries/editTask"},"next":{"title":"userTasks method","permalink":"/docs/talawa-mobile-docs/utils_task_queries/TaskQueries/userTasks"}}');var n=s(474848),i=s(28453);const r={},o="eventTasks method",l={},d=[{value:"Implementation",id:"implementation",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"eventtasks-method",children:"eventTasks method"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," eventTasks\n(",(0,n.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," eventId)"]}),"\n",(0,n.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-dart",children:"static String eventTasks(String eventId) =\\> '''\n  query \\{\n    tasksByEvent(id: \"$eventId\") \\{\n      _id\n      title\n      description\n      createdAt\n      deadline\n      creator \\{\n        _id\n        firstName\n      \\}\n      event \\{\n        _id\n        title\n      \\}\n    \\}\n  \\}\n''';\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>o});var a=s(296540);const n={},i=a.createContext(n);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);