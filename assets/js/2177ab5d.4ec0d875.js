"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[623912],{41453:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>d,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"talawa-mobile-docs/models_user_user_info/UserAdapter/read","title":"read method","description":"- @override","source":"@site/docs/talawa-mobile-docs/models_user_user_info/UserAdapter/read.md","sourceDirName":"talawa-mobile-docs/models_user_user_info/UserAdapter","slug":"/talawa-mobile-docs/models_user_user_info/UserAdapter/read","permalink":"/docs/talawa-mobile-docs/models_user_user_info/UserAdapter/read","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/models_user_user_info/UserAdapter/read.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"operator == method","permalink":"/docs/talawa-mobile-docs/models_user_user_info/UserAdapter/operator_equals"},"next":{"title":"typeId property","permalink":"/docs/talawa-mobile-docs/models_user_user_info/UserAdapter/typeId"}}');var n=s(474848),t=s(28453);const d={},i="read method",o={},l=[{value:"Implementation",id:"implementation",level:2}];function c(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"read-method",children:"read method"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["@",(0,n.jsx)(r.a,{href:"https:api.flutter.dev/flutter/dart-core/override-constant.html",children:"override"})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/talawa-mobile-docs/models_user_user_info/User-class",children:"User"})," read\n(",(0,n.jsx)(r.a,{href:"https:pub.dev/documentation/hive/2.2.3/hive/BinaryReader-class.html",children:"BinaryReader"})," reader)"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:'<span class="feature">override</span>'})}),"\n",(0,n.jsx)(r.p,{children:"<p>Is called when a value has to be decoded.</p>"}),"\n",(0,n.jsx)(r.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-dart",children:"@override\nUser read(BinaryReader reader) \\{\n  final numOfFields = reader.readByte();\n  final fields = \\<int, dynamic\\>\\{\n    for (int i = 0; i \\< numOfFields; i++) reader.readByte(): reader.read(),\n  \\};\n  return User(\n    adminFor: (fields[9] as List?)?.cast\\<OrgInfo\\>(),\n    createdOrganizations: (fields[8] as List?)?.cast\\<OrgInfo\\>(),\n    email: fields[5] as String?,\n    firstName: fields[3] as String?,\n    id: fields[2] as String?,\n    image: fields[6] as String?,\n    joinedOrganizations: (fields[7] as List?)?.cast\\<OrgInfo\\>(),\n    lastName: fields[4] as String?,\n    authToken: fields[0] as String?,\n    refreshToken: fields[1] as String?,\n    membershipRequests: (fields[10] as List?)?.cast\\<OrgInfo\\>(),\n  );\n\\}\n"})})]})}function m(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>d,x:()=>i});var a=s(296540);const n={},t=a.createContext(n);function d(e){const r=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),a.createElement(t.Provider,{value:r},e.children)}}}]);