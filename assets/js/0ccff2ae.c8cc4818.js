"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[459842],{744709:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=s(785893),i=s(511151);const r={},a="sendMembershipRequest method",o={id:"talawa-mobile-docs/utils_queries/Queries/sendMembershipRequest",title:"sendMembershipRequest method",description:"String sendMembershipRequest",source:"@site/docs/talawa-mobile-docs/utils_queries/Queries/sendMembershipRequest.md",sourceDirName:"talawa-mobile-docs/utils_queries/Queries",slug:"/talawa-mobile-docs/utils_queries/Queries/sendMembershipRequest",permalink:"/docs/talawa-mobile-docs/utils_queries/Queries/sendMembershipRequest",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/utils_queries/Queries/sendMembershipRequest.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"saveFcmToken method",permalink:"/docs/talawa-mobile-docs/utils_queries/Queries/saveFcmToken"},next:{title:"updateLanguage method",permalink:"/docs/talawa-mobile-docs/utils_queries/Queries/updateLanguage"}},d={},u=[{value:"Implementation",id:"implementation",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"sendmembershiprequest-method",children:"sendMembershipRequest method"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," sendMembershipRequest\n(",(0,n.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," orgId)"]}),"\n",(0,n.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-dart",children:"String sendMembershipRequest(String orgId) \\{\n  return '''\n    mutation \\{\n        sendMembershipRequest(organizationId: \"$orgId\")\\{\n          organization\\{\n            _id\n            name\n            image\n            description\n            isPublic\n            creator\\{\n              _id\n              firstName\n              lastName\n              image\n            \\}\n          \\}\n       \\}\n  \\}\n''';\n\\}\n"})})]})}function c(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},511151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>a});var n=s(667294);const i={},r=n.createContext(i);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);