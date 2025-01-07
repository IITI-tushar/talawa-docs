"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[143878],{979721:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>_,frontMatter:()=>n,metadata:()=>o,toc:()=>r});const o=JSON.parse('{"id":"talawa-mobile-docs/view_model_widgets_view_models_progress_dialog_view_model/ProgressDialogViewModel/initialise","title":"initialise method","description":"Future&lt;void\\\\> initialise","source":"@site/docs/talawa-mobile-docs/view_model_widgets_view_models_progress_dialog_view_model/ProgressDialogViewModel/initialise.md","sourceDirName":"talawa-mobile-docs/view_model_widgets_view_models_progress_dialog_view_model/ProgressDialogViewModel","slug":"/talawa-mobile-docs/view_model_widgets_view_models_progress_dialog_view_model/ProgressDialogViewModel/initialise","permalink":"/docs/talawa-mobile-docs/view_model_widgets_view_models_progress_dialog_view_model/ProgressDialogViewModel/initialise","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_widgets_view_models_progress_dialog_view_model/ProgressDialogViewModel/initialise.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"connectivityResult property","permalink":"/docs/talawa-mobile-docs/view_model_widgets_view_models_progress_dialog_view_model/ProgressDialogViewModel/connectivityResult"},"next":{"title":"ProgressDialogViewModel class","permalink":"/docs/talawa-mobile-docs/view_model_widgets_view_models_progress_dialog_view_model/ProgressDialogViewModel-class"}}');var s=t(474848),l=t(28453);const n={},a="initialise method",d={},r=[{value:"Implementation",id:"implementation",level:2}];function c(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"initialise-method",children:"initialise method"})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> initialise\n()"]}),"\n",(0,s.jsx)(i.h2,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-dart",children:"Future\\<void\\> initialise() async \\{\n  setState(ViewState.busy);\n  connectivityResult = await connectivity.checkConnectivity();\n  if (connectivityResult == ConnectivityResult.none) \\{\n    connectivityPresent = false;\n    Future.delayed(const Duration(seconds: 2))\n        .then((value) =\\> navigationService.pop());\n  \\} else \\{\n    connectivityPresent = true;\n  \\}\n  setState(ViewState.idle);\n\\}\n"})})]})}function _(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>n,x:()=>a});var o=t(296540);const s={},l=o.createContext(s);function n(e){const i=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),o.createElement(l.Provider,{value:i},e.children)}}}]);