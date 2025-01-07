"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[345764],{888783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"talawa-mobile-docs/utils_queries/Queries/fetchOrgDetailsById","title":"fetchOrgDetailsById method","description":"String fetchOrgDetailsById","source":"@site/docs/talawa-mobile-docs/utils_queries/Queries/fetchOrgDetailsById.md","sourceDirName":"talawa-mobile-docs/utils_queries/Queries","slug":"/talawa-mobile-docs/utils_queries/Queries/fetchOrgDetailsById","permalink":"/docs/talawa-mobile-docs/utils_queries/Queries/fetchOrgDetailsById","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/utils_queries/Queries/fetchOrgDetailsById.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"fetchOrgById method","permalink":"/docs/talawa-mobile-docs/utils_queries/Queries/fetchOrgById"},"next":{"title":"fetchUserInfo property","permalink":"/docs/talawa-mobile-docs/utils_queries/Queries/fetchUserInfo"}}');var s=n(474848),i=n(28453);const a={},o="fetchOrgDetailsById method",l={},d=[{value:"Implementation",id:"implementation",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"fetchorgdetailsbyid-method",children:"fetchOrgDetailsById method"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," fetchOrgDetailsById\n(",(0,s.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," orgId)"]}),"\n",(0,s.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"String fetchOrgDetailsById(String orgId) \\{\n  return '''\n  query\\{\n    organizations(id: \"$orgId\")\\{\n      image\n      _id\n      name\n      admins\\{\n        _id\n      \\}\n      description\n      isPublic\n      creator\\{\n        _id\n        firstName\n        lastName\n      \\}\n      members\\{\n        _id\n        firstName\n        lastName\n        image\n      \\}\n    \\}\n  \\}\n''';\n\\}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(296540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);