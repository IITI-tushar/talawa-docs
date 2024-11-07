"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[53970],{71221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=n(785893),i=n(511151);const s={},a="fetchOrgDetailsById method",o={id:"talawa-mobile-docs/utils_queries/Queries/fetchOrgDetailsById",title:"fetchOrgDetailsById method",description:"String fetchOrgDetailsById",source:"@site/docs/talawa-mobile-docs/utils_queries/Queries/fetchOrgDetailsById.md",sourceDirName:"talawa-mobile-docs/utils_queries/Queries",slug:"/talawa-mobile-docs/utils_queries/Queries/fetchOrgDetailsById",permalink:"/docs/talawa-mobile-docs/utils_queries/Queries/fetchOrgDetailsById",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/utils_queries/Queries/fetchOrgDetailsById.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"fetchOrgById method",permalink:"/docs/talawa-mobile-docs/utils_queries/Queries/fetchOrgById"},next:{title:"fetchUserInfo property",permalink:"/docs/talawa-mobile-docs/utils_queries/Queries/fetchUserInfo"}},l={},d=[{value:"Implementation",id:"implementation",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"fetchorgdetailsbyid-method",children:"fetchOrgDetailsById method"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," fetchOrgDetailsById\n(",(0,r.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," orgId)"]}),"\n",(0,r.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-dart",children:"String fetchOrgDetailsById(String orgId) \\{\n  return '''\n  query\\{\n    organizations(id: \"$orgId\")\\{\n      image\n      _id\n      name\n      admins\\{\n        _id\n      \\}\n      description\n      isPublic\n      creator\\{\n        _id\n        firstName\n        lastName\n      \\}\n      members\\{\n        _id\n        firstName\n        lastName\n        image\n      \\}\n    \\}\n  \\}\n''';\n\\}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},511151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var r=n(667294);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);