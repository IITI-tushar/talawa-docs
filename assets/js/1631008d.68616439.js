"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[41622],{667859:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=t(785893),r=t(511151);const o={},a="fetchJoinInOrg property",s={id:"talawa-mobile-docs/utils_queries/Queries/fetchJoinInOrg",title:"fetchJoinInOrg property",description:"String fetchJoinInOrg",source:"@site/docs/talawa-mobile-docs/utils_queries/Queries/fetchJoinInOrg.md",sourceDirName:"talawa-mobile-docs/utils_queries/Queries",slug:"/talawa-mobile-docs/utils_queries/Queries/fetchJoinInOrg",permalink:"/docs/talawa-mobile-docs/utils_queries/Queries/fetchJoinInOrg",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/utils_queries/Queries/fetchJoinInOrg.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"createDonation method",permalink:"/docs/talawa-mobile-docs/utils_queries/Queries/createDonation"},next:{title:"fetchJoinInOrgByName property",permalink:"/docs/talawa-mobile-docs/utils_queries/Queries/fetchJoinInOrgByName"}},c={},l=[{value:"Implementation",id:"implementation",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"fetchjoininorg-property",children:"fetchJoinInOrg property"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," fetchJoinInOrg"]}),"\n",(0,i.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:'String get fetchJoinInOrg \\{\n  return """\n  query organizationsConnection(\\$first: Int, \\$skip: Int)\\{\n    organizationsConnection(\n      first: \\$first,\n      skip: \\$skip,\n      orderBy: name_ASC\n    )\\{\n      image\n      _id\n      name\n      image\n      isPublic\n      creator\\{\n        firstName\n        lastName\n      \\}\n    \\}\n  \\}\n""";\n\\}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},511151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var i=t(667294);const r={},o=i.createContext(r);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);