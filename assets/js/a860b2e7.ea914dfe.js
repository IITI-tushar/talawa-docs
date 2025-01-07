"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[979510],{912418:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>n,toc:()=>s});const n=JSON.parse('{"id":"talawa-mobile-docs/view_model_lang_view_model/AppLanguage/fetchLocale","title":"fetchLocale method","description":"Future&lt;void\\\\> fetchLocale","source":"@site/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/fetchLocale.md","sourceDirName":"talawa-mobile-docs/view_model_lang_view_model/AppLanguage","slug":"/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/fetchLocale","permalink":"/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/fetchLocale","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/fetchLocale.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"dbLanguageUpdate method","permalink":"/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/dbLanguageUpdate"},"next":{"title":"initialize method","permalink":"/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/initialize"}}');var o=t(474848),l=t(28453);const c={},i="fetchLocale method",d={},s=[{value:"Implementation",id:"implementation",level:2}];function r(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.header,{children:(0,o.jsx)(a.h1,{id:"fetchlocale-method",children:"fetchLocale method"})}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> fetchLocale\n()"]}),"\n",(0,o.jsx)(a.p,{children:"<p>This function fetch the language of the user's app.</p>"}),"\n",(0,o.jsx)(a.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-dart",children:"Future\\<void\\> fetchLocale() async \\{\n  final prefs = await SharedPreferences.getInstance();\n  final String langCode = prefs.getString('language_code') ?? 'en';\n  _appLocale = Locale(langCode);\n\n  notifyListeners();\n\\}\n"})})]})}function p(e={}){const{wrapper:a}={...(0,l.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>c,x:()=>i});var n=t(296540);const o={},l=n.createContext(o);function c(e){const a=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(l.Provider,{value:a},e.children)}}}]);