"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[64807],{53462:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var t=n(85893),i=n(11151);const a={},r="showTutorial method",c={id:"talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/showTutorial",title:"showTutorial method",description:"void showTutorial",source:"@site/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/showTutorial.md",sourceDirName:"talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel",slug:"/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/showTutorial",permalink:"/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/showTutorial",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/showTutorial.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"showHome method",permalink:"/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/showHome"},next:{title:"targets property",permalink:"/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/targets"}},s={},l=[{value:"Implementation",id:"implementation",level:2}];function d(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.header,{children:(0,t.jsx)(o.h1,{id:"showtutorial-method",children:"showTutorial method"})}),"\n",(0,t.jsxs)(o.p,{children:["void showTutorial\n({required dynamic onClickTarget(",(0,t.jsx)(o.a,{href:"https:pub.dev/documentation/tutorial_coach_mark/1.2.9/tutorial_coach_mark/TargetFocus-class.html",children:"TargetFocus"}),"), required dynamic onFinish()})"]}),"\n",(0,t.jsx)(o.p,{children:"<p>This function show tutorial to user.</p>\n<p><strong>params</strong>:</p>\n<ul>\n<li><code>onClickTarget</code>: Its a function which is required to run desired tasks on click.</li>\n<li><code>onFinish</code>: Its a function which is required to run desired tasks on finish</li>\n</ul>\n<p><strong>returns</strong>:\nNone</p>"}),"\n",(0,t.jsx)(o.h2,{id:"implementation",children:"Implementation"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-dart",children:'void showTutorial(\\{\n  required dynamic Function(TargetFocus) onClickTarget,\n  required dynamic Function() onFinish,\n\\}) \\{\n  tutorialCoachMark = TutorialCoachMark(\n    targets: targets,\n    colorShadow: Theme.of(context).colorScheme.secondaryContainer,\n    textSkip: "SKIP",\n    textStyleSkip: TextStyle(\n      color: Theme.of(context).colorScheme.background,\n      fontSize: 20,\n    ),\n    paddingFocus: 10,\n    opacityShadow: 1.0,\n    onFinish: onFinish,\n    onClickTarget: onClickTarget,\n    onSkip: () \\{\n      if (scaffoldKey.currentState!.isDrawerOpen) \\{\n        navigationService.pop();\n      \\}\n      tourSkipped = true;\n      onTabTapped(0);\n    \\},\n    onClickOverlay: (target) \\{\n      onClickTarget(target);\n    \\},\n  )..show(context: context);\n\\}\n'})})]})}function m(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,o,n)=>{n.d(o,{Z:()=>c,a:()=>r});var t=n(67294);const i={},a=t.createContext(i);function r(e){const o=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:o},e.children)}}}]);