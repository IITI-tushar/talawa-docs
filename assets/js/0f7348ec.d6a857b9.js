"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[71463],{920480:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var i=t(785893),n=t(511151);const a={},l="logout method",d={id:"talawa-mobile-docs/view_model_pre_auth_view_models_waiting_view_model/WaitingViewModel/logout",title:"logout method",description:"void logout",source:"@site/docs/talawa-mobile-docs/view_model_pre_auth_view_models_waiting_view_model/WaitingViewModel/logout.md",sourceDirName:"talawa-mobile-docs/view_model_pre_auth_view_models_waiting_view_model/WaitingViewModel",slug:"/talawa-mobile-docs/view_model_pre_auth_view_models_waiting_view_model/WaitingViewModel/logout",permalink:"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_waiting_view_model/WaitingViewModel/logout",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_pre_auth_view_models_waiting_view_model/WaitingViewModel/logout.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"joinOrg method",permalink:"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_waiting_view_model/WaitingViewModel/joinOrg"},next:{title:"pendingRequestOrg property",permalink:"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_waiting_view_model/WaitingViewModel/pendingRequestOrg"}},r={},s=[{value:"Implementation",id:"implementation",level:2}];function c(e){const o={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.header,{children:(0,i.jsx)(o.h1,{id:"logout-method",children:"logout method"})}),"\n",(0,i.jsx)(o.p,{children:"void logout\n()"}),"\n",(0,i.jsx)(o.p,{children:"<p>This function ends the session for the user or logout the user from the application.</p>"}),"\n",(0,i.jsx)(o.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-dart",children:"void logout() \\{\n  final user = Hive.box\\<User\\>('currentUser');\n  final url = Hive.box('url');\n  user.clear();\n  url.clear();\n  navigationService.removeAllAndPush(\n    Routes.languageSelectionRoute,\n    Routes.splashScreen,\n    arguments: '0',\n  );\n\\}\n"})})]})}function u(e={}){const{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},511151:(e,o,t)=>{t.d(o,{Z:()=>d,a:()=>l});var i=t(667294);const n={},a=i.createContext(n);function l(e){const o=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(a.Provider,{value:o},e.children)}}}]);