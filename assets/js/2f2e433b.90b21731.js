"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[846052],{786205:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>d,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/tourAddPost","title":"tourAddPost method","description":"void tourAddPost","source":"@site/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/tourAddPost.md","sourceDirName":"talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel","slug":"/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/tourAddPost","permalink":"/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/tourAddPost","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/tourAddPost.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"targets property","permalink":"/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/targets"},"next":{"title":"tourChat method","permalink":"/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/tourChat"}}');var a=o(474848),i=o(28453);const d={},r="tourAddPost method",s={},l=[{value:"Implementation",id:"implementation",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"touraddpost-method",children:"tourAddPost method"})}),"\n",(0,a.jsx)(t.p,{children:"void tourAddPost\n()"}),"\n",(0,a.jsx)(t.p,{children:"<p>This function show the tutorial to add Post in the organization.</p>\n<p><strong>params</strong>:\nNone</p>\n<p><strong>returns</strong>:\nNone</p>"}),"\n",(0,a.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:"void tourAddPost() \\{\n  targets.clear();\n  targets.add(\n    focusTarget(\n      keyBNPost,\n      'keyBNPost',\n      'This is the Create post tab here you can add post to the current selected organization',\n      isCircle: true,\n      align: ContentAlign.top,\n    ),\n  );\n  showTutorial(\n    onFinish: () \\{\n      onTabTapped(currentPageIndex + 1);\n      if (!tourComplete && !tourSkipped) \\{\n        tourChat();\n      \\}\n    \\},\n    onClickTarget: (TargetFocus a) \\{\\},\n  );\n\\}\n"})})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>d,x:()=>r});var n=o(296540);const a={},i=n.createContext(a);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);