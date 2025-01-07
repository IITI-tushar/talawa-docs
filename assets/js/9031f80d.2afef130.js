"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[647530],{288064:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>d,default:()=>c,frontMatter:()=>l,metadata:()=>n,toc:()=>s});const n=JSON.parse('{"id":"talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/dominationButton","title":"dominationButton method","description":"Widget dominationButton","source":"@site/docs/talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/dominationButton.md","sourceDirName":"talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel","slug":"/talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/dominationButton","permalink":"/docs/talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/dominationButton","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/dominationButton.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"denomination property","permalink":"/docs/talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/denomination"},"next":{"title":"donationAmount property","permalink":"/docs/talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/donationAmount"}}');var i=o(474848),a=o(28453);const l={},d="dominationButton method",r={},s=[{value:"Implementation",id:"implementation",level:2}];function m(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"dominationbutton-method",children:"dominationButton method"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/widgets/Widget-class.html",children:"Widget"})," dominationButton\n(",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," amount, ",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," context, ",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Function-class.html",children:"Function"})," setter)"]}),"\n",(0,i.jsx)(t.p,{children:"<p>This widget returns button for domination.</p>\n<p>params:</p>\n<ul>\n<li><code>amount</code> : donation Amount.</li>\n<li><code>setter</code> : <code>Function</code> type, which on tap set the amount to <code>donationAmount</code>.</li>\n</ul>"}),"\n",(0,i.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-dart",children:"Widget dominationButton(\n  String amount,\n  BuildContext context,\n  Function setter,\n) \\{\n  return InkWell(\n    onTap: () \\{\n      setter(() \\{\n        donationAmount.text = amount;\n      \\});\n    \\},\n    child: Container(\n      padding: EdgeInsets.symmetric(\n        vertical: SizeConfig.screenHeight! * 0.02,\n        horizontal: SizeConfig.screenWidth! * 0.075,\n      ),\n      decoration: BoxDecoration(\n        borderRadius: BorderRadius.circular(10),\n        color: donationAmount.text == amount\n            ? Theme.of(context).colorScheme.secondary\n            : Theme.of(context).colorScheme.primary,\n      ),\n      child: Text(\n        '$donationCurrencySymbol $amount',\n        style: Theme.of(context).textTheme.titleMedium,\n      ),\n    ),\n  );\n\\}\n"})})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>l,x:()=>d});var n=o(296540);const i={},a=n.createContext(i);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);