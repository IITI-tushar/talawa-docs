"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[27927],{95519:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var t=n(85893),a=n(11151);const i={},r="showHome method",s={id:"talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/showHome",title:"showHome method",description:"void showHome",source:"@site/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/showHome.md",sourceDirName:"talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel",slug:"/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/showHome",permalink:"/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/showHome",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/showHome.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"showAppTour property",permalink:"/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/showAppTour"},next:{title:"showTutorial method",permalink:"/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/showTutorial"}},c={},d=[{value:"Implementation",id:"implementation",level:2}];function l(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.header,{children:(0,t.jsx)(o.h1,{id:"showhome-method",children:"showHome method"})}),"\n",(0,t.jsxs)(o.p,{children:["void showHome\n(",(0,t.jsx)(o.a,{href:"https:pub.dev/documentation/tutorial_coach_mark/1.2.9/tutorial_coach_mark/TargetFocus-class.html",children:"TargetFocus"})," clickedTarget)"]}),"\n",(0,t.jsx)(o.p,{children:"<p>This function shows the Home screen.</p>\n<p><strong>params</strong>:</p>\n<ul>\n<li><code>clickedTarget</code>: object to identify clickedTarget.</li>\n</ul>\n<p><strong>returns</strong>:\nNone</p>"}),"\n",(0,t.jsx)(o.h2,{id:"implementation",children:"Implementation"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-dart",children:'void showHome(TargetFocus clickedTarget) \\{\n  switch (clickedTarget.identify) \\{\n    case "keySHMenuIcon":\n      scaffoldKey.currentState!.openDrawer();\n      break;\n    case "keyDrawerLeaveCurrentOrg":\n      navigationService.pop();\n  \\}\n\\}\n'})})]})}function m(e={}){const{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,o,n)=>{n.d(o,{Z:()=>s,a:()=>r});var t=n(67294);const a={},i=t.createContext(a);function r(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);