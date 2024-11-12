"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[529624],{342394:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>r});const l=JSON.parse('{"id":"talawa-mobile-docs/utils_app_localization/AppLocalizationsDelegate/load","title":"load method","description":"- @override","source":"@site/docs/talawa-mobile-docs/utils_app_localization/AppLocalizationsDelegate/load.md","sourceDirName":"talawa-mobile-docs/utils_app_localization/AppLocalizationsDelegate","slug":"/talawa-mobile-docs/utils_app_localization/AppLocalizationsDelegate/load","permalink":"/docs/talawa-mobile-docs/utils_app_localization/AppLocalizationsDelegate/load","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/utils_app_localization/AppLocalizationsDelegate/load.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"isTest property","permalink":"/docs/talawa-mobile-docs/utils_app_localization/AppLocalizationsDelegate/isTest"},"next":{"title":"shouldReload method","permalink":"/docs/talawa-mobile-docs/utils_app_localization/AppLocalizationsDelegate/shouldReload"}}');var o=t(474848),i=t(28453);const n={},s="load method",c={},r=[{value:"Implementation",id:"implementation",level:2}];function d(e){const a={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.header,{children:(0,o.jsx)(a.h1,{id:"load-method",children:"load method"})}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:["@",(0,o.jsx)(a.a,{href:"https:api.flutter.dev/flutter/dart-core/override-constant.html",children:"override"})]}),"\n"]}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<",(0,o.jsx)(a.a,{href:"/docs/talawa-mobile-docs/utils_app_localization/AppLocalizations-class",children:"AppLocalizations"}),"> load\n(",(0,o.jsx)(a.a,{href:"https:api.flutter.dev/flutter/dart-ui/Locale-class.html",children:"Locale"})," locale)"]}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.em,{children:'<span class="feature">override</span>'})}),"\n",(0,o.jsxs)(a.p,{children:["<p>Start loading the resources for <code>locale</code>. The returned future completes\nwhen the resources have finished loading.</p>\n<p>It's assumed that this method will return an object that contains a\ncollection of related string resources (typically defined with one method\nper resource). The object will be retrieved with <a href=\"https",":api",'.flutter.dev/flutter/widgets/Localizations/of.html">Localizations.of</a>.</p>']}),"\n",(0,o.jsx)(a.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-dart",children:"@override\nFuture\\<AppLocalizations\\> load(Locale locale) async \\{\n  AppLocalizations class is where the JSON loading actually runs\n  final AppLocalizations localizations =\n      AppLocalizations(locale, isTest: isTest);\n  if (isTest) \\{\n    await localizations.loadTest(locale);\n  \\} else \\{\n    await localizations.load();\n  \\}\n\n  return localizations;\n\\}\n"})})]})}function p(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>n,x:()=>s});var l=t(296540);const o={},i=l.createContext(o);function n(e){const a=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),l.createElement(i.Provider,{value:a},e.children)}}}]);