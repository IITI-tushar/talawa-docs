"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[210927],{711721:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>n,toc:()=>r});const n=JSON.parse('{"id":"talawa-mobile-docs/view_model_pre_auth_view_models_waiting_view_model/WaitingViewModel/initialise","title":"initialise method","description":"void initialise","source":"@site/docs/talawa-mobile-docs/view_model_pre_auth_view_models_waiting_view_model/WaitingViewModel/initialise.md","sourceDirName":"talawa-mobile-docs/view_model_pre_auth_view_models_waiting_view_model/WaitingViewModel","slug":"/talawa-mobile-docs/view_model_pre_auth_view_models_waiting_view_model/WaitingViewModel/initialise","permalink":"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_waiting_view_model/WaitingViewModel/initialise","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_pre_auth_view_models_waiting_view_model/WaitingViewModel/initialise.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"greeting property","permalink":"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_waiting_view_model/WaitingViewModel/greeting"},"next":{"title":"joinOrg method","permalink":"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_waiting_view_model/WaitingViewModel/joinOrg"}}');var o=i(474848),a=i(28453);const l={},s="initialise method",d={},r=[{value:"Implementation",id:"implementation",level:2}];function m(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"initialise-method",children:"initialise method"})}),"\n",(0,o.jsxs)(t.p,{children:["void initialise\n(",(0,o.jsx)(t.a,{href:"https:api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," context)"]}),"\n",(0,o.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"void initialise(BuildContext context) \\{\n  currentUser = userConfig.currentUser;\n  pendingRequestOrg = currentUser.membershipRequests!;\n  greetings\n  greeting = [\n    \\{\n      'text': \"Please wait\",\n      'textStyle': Theme.of(context).textTheme.headlineSmall\n    \\},\n    \\{\n      'text': \" $\\{currentUser.firstName\\} \",\n      'textStyle':\n          Theme.of(context).textTheme.titleLarge!.copyWith(fontSize: 24)\n    \\},\n    \\{\n      'text': \"for organisation(s) to accept your invitation.\",\n      'textStyle': Theme.of(context).textTheme.headlineSmall\n    \\},\n  ];\n\\}\n"})})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>s});var n=i(296540);const o={},a=n.createContext(o);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);