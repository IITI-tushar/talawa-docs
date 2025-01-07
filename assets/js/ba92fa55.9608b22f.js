"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[70012],{543144:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"talawa-mobile-docs/services_user_config/UserConfig/updateAccessToken","title":"updateAccessToken method","description":"Future updateAccessToken","source":"@site/docs/talawa-mobile-docs/services_user_config/UserConfig/updateAccessToken.md","sourceDirName":"talawa-mobile-docs/services_user_config/UserConfig","slug":"/talawa-mobile-docs/services_user_config/UserConfig/updateAccessToken","permalink":"/docs/talawa-mobile-docs/services_user_config/UserConfig/updateAccessToken","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_user_config/UserConfig/updateAccessToken.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"saveUserInHive method","permalink":"/docs/talawa-mobile-docs/services_user_config/UserConfig/saveUserInHive"},"next":{"title":"updateUser method","permalink":"/docs/talawa-mobile-docs/services_user_config/UserConfig/updateUser"}}');var r=t(474848),o=t(28453);const c={},a="updateAccessToken method",i={},d=[{value:"Implementation",id:"implementation",level:2}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"updateaccesstoken-method",children:"updateAccessToken method"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"})," updateAccessToken\n({required ",(0,r.jsx)(s.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," accessToken, required ",(0,r.jsx)(s.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," refreshToken})"]}),"\n",(0,r.jsx)(s.p,{children:"<p>This function is used to updated the access token of the user.</p>\n<p>params:</p>\n<ul>\n<li><code>accessToken</code></li>\n<li><code>refreshToken</code></li>\n</ul>"}),"\n",(0,r.jsx)(s.h2,{id:"implementation",children:"Implementation"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-dart",children:"Future updateAccessToken(\\{\n  required String accessToken,\n  required String refreshToken,\n\\}) async \\{\n  _currentUser!.refreshToken = refreshToken;\n  _currentUser!.authToken = accessToken;\n  saveUserInHive();\n\\}\n"})})]})}function u(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>c,x:()=>a});var n=t(296540);const r={},o=n.createContext(r);function c(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);