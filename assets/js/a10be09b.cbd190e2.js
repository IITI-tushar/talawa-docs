"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[742257],{704945:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"talawa-mobile-docs/services_user_config/UserConfig/updateUser","title":"updateUser method","description":"Future&lt;bool\\\\> updateUser","source":"@site/docs/talawa-mobile-docs/services_user_config/UserConfig/updateUser.md","sourceDirName":"talawa-mobile-docs/services_user_config/UserConfig","slug":"/talawa-mobile-docs/services_user_config/UserConfig/updateUser","permalink":"/docs/talawa-mobile-docs/services_user_config/UserConfig/updateUser","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_user_config/UserConfig/updateUser.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"updateAccessToken method","permalink":"/docs/talawa-mobile-docs/services_user_config/UserConfig/updateAccessToken"},"next":{"title":"updateUserAdminOrg method","permalink":"/docs/talawa-mobile-docs/services_user_config/UserConfig/updateUserAdminOrg"}}');var r=s(474848),a=s(28453);const o={},i="updateUser method",d={},c=[{value:"Implementation",id:"implementation",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"updateuser-method",children:"updateUser method"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<",(0,r.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"}),"> updateUser\n(",(0,r.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_user_user_info/User-class",children:"User"})," updatedUserDetails)"]}),"\n",(0,r.jsx)(t.p,{children:"<p>This function is used to update the user details.</p>\n<p>params:</p>\n<ul>\n<li><code>updatedUserDetails</code> : <code>User</code> type variable containing all the details of an user need to be updated.</li>\n</ul>"}),"\n",(0,r.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-dart",children:"Future\\<bool\\> updateUser(User updatedUserDetails) async \\{\n  try \\{\n    _currentUser = updatedUserDetails;\n    saveUserInHive();\n    graphqlConfig.getToken();\n    databaseFunctions.init();\n    return true;\n  \\} on Exception catch (e) \\{\n    debugPrint(e.toString());\n    return false;\n  \\}\n\\}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>i});var n=s(296540);const r={},a=n.createContext(r);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);