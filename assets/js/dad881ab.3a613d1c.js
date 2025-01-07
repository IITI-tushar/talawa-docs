"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[139726],{866980:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"talawa-mobile-docs/main/setUpFirebaseKeys","title":"setUpFirebaseKeys function","description":"Future&lt;void\\\\> setUpFirebaseKeys","source":"@site/docs/talawa-mobile-docs/main/setUpFirebaseKeys.md","sourceDirName":"talawa-mobile-docs/main","slug":"/talawa-mobile-docs/main/setUpFirebaseKeys","permalink":"/docs/talawa-mobile-docs/main/setUpFirebaseKeys","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/main/setUpFirebaseKeys.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"setUpFirebase function","permalink":"/docs/talawa-mobile-docs/main/setUpFirebase"},"next":{"title":"setUpFirebaseMessaging function","permalink":"/docs/talawa-mobile-docs/main/setUpFirebaseMessaging"}}');var i=a(474848),t=a(28453);const o={},r="setUpFirebaseKeys function",p={},l=[{value:"Implementation",id:"implementation",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"setupfirebasekeys-function",children:"setUpFirebaseKeys function"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> setUpFirebaseKeys\n()"]}),"\n",(0,i.jsx)(n.p,{children:"<p>Initializes the firebase keys in the app according to the userplatform (android/iOS).</p>\n<p><strong>params</strong>:\nNone</p>\n<p><strong>returns</strong>:</p>\n<ul>\n<li><code>Future<void></code>: promise that will be fulfilled Firebase keys are setted up.</li>\n</ul>"}),"\n",(0,i.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"Future\\<void\\> setUpFirebaseKeys() async \\{\n  final androidFirebaseOptionsBox =\n      await Hive.openBox('androidFirebaseOptions');\n  final androidFirebaseOptionsMap = androidFirebaseOptionsBox\n      .get('androidFirebaseOptions') as Map\\<dynamic, dynamic\\>?;\n\n  final iosFirebaseOptionsBox = await Hive.openBox('iosFirebaseOptions');\n  final iosFirebaseOptionsMap =\n      iosFirebaseOptionsBox.get('iosFirebaseOptions') as Map\\<dynamic, dynamic\\>?;\n  if (androidFirebaseOptionsMap != null) \\{\n    androidFirebaseOptions = androidFirebaseOptionsMap.map((key, value) \\{\n      return MapEntry(key.toString(), value);\n    \\});\n  \\}\n  if (iosFirebaseOptionsMap != null) \\{\n    iosFirebaseOptions = iosFirebaseOptionsMap.map((key, value) \\{\n      return MapEntry(key.toString(), value);\n    \\});\n  \\}\n\\}\n"})})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>r});var s=a(296540);const i={},t=s.createContext(i);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);