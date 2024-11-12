"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[113473],{415459:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/tourProfile","title":"tourProfile method","description":"void tourProfile","source":"@site/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/tourProfile.md","sourceDirName":"talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel","slug":"/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/tourProfile","permalink":"/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/tourProfile","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/tourProfile.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"tourHomeTargets method","permalink":"/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/tourHomeTargets"},"next":{"title":"tourSkipped property","permalink":"/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/tourSkipped"}}');var r=o(474848),a=o(28453);const i={},l="tourProfile method",s={},d=[{value:"Implementation",id:"implementation",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"tourprofile-method",children:"tourProfile method"})}),"\n",(0,r.jsx)(n.p,{children:"void tourProfile\n()"}),"\n",(0,r.jsx)(n.p,{children:"<p>This function show the tutorial for the profile page.</p>\n<p><strong>params</strong>:\nNone</p>\n<p><strong>returns</strong>:\nNone</p>"}),"\n",(0,r.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"void tourProfile() \\{\n  targets.clear();\n  targets.add(\n    focusTarget(\n      keyBNProfile,\n      'keyBNProfile',\n      'This is the Profile tab here you can see all options related to account, app setting, invitation, help etc',\n      isCircle: true,\n      align: ContentAlign.top,\n      nextCrossAlign: CrossAxisAlignment.start,\n    ),\n  );\n  targets.add(\n    focusTarget(\n      keySPAppSetting,\n      'keySPAppSetting',\n      'You can edit application settings like language, theme etc from here',\n    ),\n  );\n  targets.add(\n    focusTarget(\n      keySPHelp,\n      'keySPHelp',\n      'For any help we are always there. You can reach us from here',\n    ),\n  );\n  targets.add(\n    focusTarget(\n      keySPDonateUs,\n      'keySPDonateUs',\n      'To help your organization grow you can support them financially from here',\n    ),\n  );\n  targets.add(\n    focusTarget(\n      keySPInvite,\n      'keySPInvite',\n      'Wanna invite colleague, invite them from here',\n    ),\n  );\n  targets.add(\n    focusTarget(\n      keySPPalisadoes,\n      'keySPPalisadoes',\n      'You are all set to go lets get you in',\n      isEnd: true,\n    ),\n  );\n  showTutorial(\n    onFinish: () \\{\n      if (!tourComplete && !tourSkipped) \\{\n        tourComplete = true;\n        onTabTapped(0);\n      \\}\n    \\},\n    onClickTarget: (TargetFocus a) \\{\\},\n  );\n\\}\n"})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>l});var t=o(296540);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);