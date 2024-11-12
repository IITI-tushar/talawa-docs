"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[758874],{588471:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"talawa-mobile-docs/view_model_lang_view_model/AppLanguage/selectLanguagePress","title":"selectLanguagePress method","description":"Future&lt;void\\\\> selectLanguagePress","source":"@site/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/selectLanguagePress.md","sourceDirName":"talawa-mobile-docs/view_model_lang_view_model/AppLanguage","slug":"/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/selectLanguagePress","permalink":"/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/selectLanguagePress","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/selectLanguagePress.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"navigationService property","permalink":"/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/navigationService"},"next":{"title":"userLanguageQuery method","permalink":"/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/userLanguageQuery"}}');var s=n(474848),o=n(28453);const l={},i="selectLanguagePress method",r={},d=[{value:"Implementation",id:"implementation",level:2}];function c(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.header,{children:(0,s.jsx)(a.h1,{id:"selectlanguagepress-method",children:"selectLanguagePress method"})}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> selectLanguagePress\n()"]}),"\n",(0,s.jsx)(a.p,{children:"<p>This function navigate user to <code>/appSettingsPage</code> route if the user is authenticated\nelse navigate to <code>/setUrl</code> route.</p>"}),"\n",(0,s.jsx)(a.h2,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-dart",children:"Future\\<void\\> selectLanguagePress() async \\{\n  final bool userLoggedIn = await userConfig.userLoggedIn();\n  if (userLoggedIn) \\{\n    dbLanguageUpdate();\n    navigationService.popAndPushScreen('/appSettingsPage', arguments: '');\n  \\} else \\{\n    navigationService.pushScreen('/setUrl', arguments: '');\n  \\}\n\\}\n"})})]})}function u(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>l,x:()=>i});var t=n(296540);const s={},o=t.createContext(s);function l(e){const a=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(o.Provider,{value:a},e.children)}}}]);