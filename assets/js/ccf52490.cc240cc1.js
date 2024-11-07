"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[304703],{531986:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(785893),a=n(511151);const r={},i="tourChat method",s={id:"talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/tourChat",title:"tourChat method",description:"void tourChat",source:"@site/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/tourChat.md",sourceDirName:"talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel",slug:"/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/tourChat",permalink:"/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/tourChat",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/tourChat.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"tourAddPost method",permalink:"/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/tourAddPost"},next:{title:"tourComplete property",permalink:"/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/tourComplete"}},d={},l=[{value:"Implementation",id:"implementation",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"tourchat-method",children:"tourChat method"})}),"\n",(0,o.jsx)(t.p,{children:"void tourChat\n()"}),"\n",(0,o.jsx)(t.p,{children:"<p>This function show the tour of chats.</p>\n<p><strong>params</strong>:\nNone</p>\n<p><strong>returns</strong>:\nNone</p>"}),"\n",(0,o.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"void tourChat() \\{\n  targets.clear();\n  targets.add(\n    focusTarget(\n      keyBNChat,\n      'keyBNChat',\n      'This is the Chat tab here you can see all your messages of the current selected organization',\n      isCircle: true,\n      align: ContentAlign.top,\n    ),\n  );\n  showTutorial(\n    onFinish: () \\{\n      onTabTapped(currentPageIndex + 1);\n      if (!tourComplete && !tourSkipped) \\{\n        tourProfile();\n      \\}\n    \\},\n    onClickTarget: (TargetFocus a) \\{\\},\n  );\n\\}\n"})})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},511151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var o=n(667294);const a={},r=o.createContext(a);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);