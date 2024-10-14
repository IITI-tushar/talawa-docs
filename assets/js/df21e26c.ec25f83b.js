"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[23624],{73077:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=t(85893),i=t(11151);const a={},s="fetchJoinInOrgByName property",o={id:"talawa-mobile-docs/utils_queries/Queries/fetchJoinInOrgByName",title:"fetchJoinInOrgByName property",description:"String fetchJoinInOrgByName",source:"@site/docs/talawa-mobile-docs/utils_queries/Queries/fetchJoinInOrgByName.md",sourceDirName:"talawa-mobile-docs/utils_queries/Queries",slug:"/talawa-mobile-docs/utils_queries/Queries/fetchJoinInOrgByName",permalink:"/docs/talawa-mobile-docs/utils_queries/Queries/fetchJoinInOrgByName",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/utils_queries/Queries/fetchJoinInOrgByName.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"fetchJoinInOrg property",permalink:"/docs/talawa-mobile-docs/utils_queries/Queries/fetchJoinInOrg"},next:{title:"fetchOrgById method",permalink:"/docs/talawa-mobile-docs/utils_queries/Queries/fetchOrgById"}},c={},l=[{value:"Implementation",id:"implementation",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"fetchjoininorgbyname-property",children:"fetchJoinInOrgByName property"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," fetchJoinInOrgByName"]}),"\n",(0,r.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:'String get fetchJoinInOrgByName \\{\n  return """\n  query organizationsConnection(\n    \\$first: Int,\n    \\$skip: Int,\n    \\$nameStartsWith: String\n  )\\{\n    organizationsConnection(\n      where:\\{\n        name_starts_with: \\$nameStartsWith,\n        visibleInSearch: true,\n        isPublic: true,\n      \\}\n      first: \\$first,\n      skip: \\$skip,\n      orderBy: name_ASC\n    )\\{\n      image\n      _id\n      name\n      image\n      isPublic\n      creator\\{\n        firstName\n        lastName\n      \\}\n    \\}\n  \\}\n""";\n\\}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var r=t(67294);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);