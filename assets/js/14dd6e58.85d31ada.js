"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[81566],{110378:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>t,default:()=>v,frontMatter:()=>s,metadata:()=>n,toc:()=>c});var o=r(785893),i=r(511151);const s={},t="showTalawaErrorDialog method",n={id:"talawa-mobile-docs/services_navigation_service/NavigationService/showTalawaErrorDialog",title:"showTalawaErrorDialog method",description:"void showTalawaErrorDialog",source:"@site/docs/talawa-mobile-docs/services_navigation_service/NavigationService/showTalawaErrorDialog.md",sourceDirName:"talawa-mobile-docs/services_navigation_service/NavigationService",slug:"/talawa-mobile-docs/services_navigation_service/NavigationService/showTalawaErrorDialog",permalink:"/docs/talawa-mobile-docs/services_navigation_service/NavigationService/showTalawaErrorDialog",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_navigation_service/NavigationService/showTalawaErrorDialog.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"showSnackBar method",permalink:"/docs/talawa-mobile-docs/services_navigation_service/NavigationService/showSnackBar"},next:{title:"showTalawaErrorSnackBar method",permalink:"/docs/talawa-mobile-docs/services_navigation_service/NavigationService/showTalawaErrorSnackBar"}},l={},c=[{value:"Implementation",id:"implementation",level:2}];function d(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.header,{children:(0,o.jsx)(a.h1,{id:"showtalawaerrordialog-method",children:"showTalawaErrorDialog method"})}),"\n",(0,o.jsxs)(a.p,{children:["void showTalawaErrorDialog\n(",(0,o.jsx)(a.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," errorMessage, ",(0,o.jsx)(a.a,{href:"/docs/talawa-mobile-docs/enums_enums/MessageType",children:"MessageType"})," messageType)"]}),"\n",(0,o.jsx)(a.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-dart",children:"void showTalawaErrorDialog(String errorMessage, MessageType messageType) \\{\n  showDialog(\n    context: navigatorKey.currentContext!,\n    barrierColor: Colors.transparent,\n    barrierDismissible: false,\n    builder: (BuildContext context) \\{\n      return TalawaErrorDialog(\n        errorMessage,\n        messageType: messageType,\n      );\n    \\},\n  );\n\\}\n"})})]})}function v(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},511151:(e,a,r)=>{r.d(a,{Z:()=>n,a:()=>t});var o=r(667294);const i={},s=o.createContext(i);function t(e){const a=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(s.Provider,{value:a},e.children)}}}]);