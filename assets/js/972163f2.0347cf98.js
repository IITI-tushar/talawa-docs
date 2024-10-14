"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[9315],{64150:(a,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>v,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=r(85893),n=r(11151);const s={},t="showTalawaErrorSnackBar method",i={id:"talawa-mobile-docs/services_navigation_service/NavigationService/showTalawaErrorSnackBar",title:"showTalawaErrorSnackBar method",description:"void showTalawaErrorSnackBar",source:"@site/docs/talawa-mobile-docs/services_navigation_service/NavigationService/showTalawaErrorSnackBar.md",sourceDirName:"talawa-mobile-docs/services_navigation_service/NavigationService",slug:"/talawa-mobile-docs/services_navigation_service/NavigationService/showTalawaErrorSnackBar",permalink:"/docs/talawa-mobile-docs/services_navigation_service/NavigationService/showTalawaErrorSnackBar",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_navigation_service/NavigationService/showTalawaErrorSnackBar.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"showTalawaErrorDialog method",permalink:"/docs/talawa-mobile-docs/services_navigation_service/NavigationService/showTalawaErrorDialog"},next:{title:"NavigationService class",permalink:"/docs/talawa-mobile-docs/services_navigation_service/NavigationService-class"}},c={},l=[{value:"Implementation",id:"implementation",level:2}];function d(a){const e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,n.a)(),...a.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"showtalawaerrorsnackbar-method",children:"showTalawaErrorSnackBar method"})}),"\n",(0,o.jsxs)(e.p,{children:["void showTalawaErrorSnackBar\n(",(0,o.jsx)(e.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," errorMessage, ",(0,o.jsx)(e.a,{href:"/docs/talawa-mobile-docs/enums_enums/MessageType",children:"MessageType"})," messageType, {",(0,o.jsx)(e.a,{href:"https:api.flutter.dev/flutter/dart-core/Duration-class.html",children:"Duration"})," duration = const Duration(seconds: 2)})"]}),"\n",(0,o.jsx)(e.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-dart",children:"void showTalawaErrorSnackBar(\n  String errorMessage,\n  MessageType messageType, \\{\n  Duration duration = const Duration(seconds: 2),\n\\}) \\{\n  ScaffoldMessenger.of(navigatorKey.currentContext!).showSnackBar(\n    SnackBar(\n      padding: EdgeInsets.zero,\n      content: TalawaErrorSnackBar(\n        messageType: messageType,\n        errorMessage: errorMessage,\n      ),\n      backgroundColor: const Color.fromRGBO(65, 65, 66, 1),\n    ),\n  );\n\\}\n"})})]})}function v(a={}){const{wrapper:e}={...(0,n.a)(),...a.components};return e?(0,o.jsx)(e,{...a,children:(0,o.jsx)(d,{...a})}):d(a)}},11151:(a,e,r)=>{r.d(e,{Z:()=>i,a:()=>t});var o=r(67294);const n={},s=o.createContext(n);function t(a){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function i(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(n):a.components||n:t(a.components),o.createElement(s.Provider,{value:e},a.children)}}}]);