"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[559102],{312069:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>s,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var o=t(785893),n=t(511151);const a={},d="initialize method",r={id:"talawa-mobile-docs/view_model_widgets_view_models_custom_drawer_view_model/CustomDrawerViewModel/initialize",title:"initialize method",description:"void initialize",source:"@site/docs/talawa-mobile-docs/view_model_widgets_view_models_custom_drawer_view_model/CustomDrawerViewModel/initialize.md",sourceDirName:"talawa-mobile-docs/view_model_widgets_view_models_custom_drawer_view_model/CustomDrawerViewModel",slug:"/talawa-mobile-docs/view_model_widgets_view_models_custom_drawer_view_model/CustomDrawerViewModel/initialize",permalink:"/docs/talawa-mobile-docs/view_model_widgets_view_models_custom_drawer_view_model/CustomDrawerViewModel/initialize",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_widgets_view_models_custom_drawer_view_model/CustomDrawerViewModel/initialize.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"dispose method",permalink:"/docs/talawa-mobile-docs/view_model_widgets_view_models_custom_drawer_view_model/CustomDrawerViewModel/dispose"},next:{title:"isPresentinSwitchableOrg method",permalink:"/docs/talawa-mobile-docs/view_model_widgets_view_models_custom_drawer_view_model/CustomDrawerViewModel/isPresentinSwitchableOrg"}},s={},l=[{value:"Implementation",id:"implementation",level:2}];function c(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.header,{children:(0,o.jsx)(i.h1,{id:"initialize-method",children:"initialize method"})}),"\n",(0,o.jsxs)(i.p,{children:["void initialize\n(",(0,o.jsx)(i.a,{href:"/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel-class",children:"MainScreenViewModel"})," homeModel, ",(0,o.jsx)(i.a,{href:"https:api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," context)"]}),"\n",(0,o.jsx)(i.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-dart",children:"void initialize(MainScreenViewModel homeModel, BuildContext context) \\{\n  _currentOrganizationStreamSubscription =\n      userConfig.currentOrgInfoStream.listen(\n    (updatedOrganization) \\{\n      setSelectedOrganizationName(updatedOrganization);\n    \\},\n  );\n  _currentUser = userConfig.currentUser;\n  _selectedOrg = userConfig.currentOrg;\n  _switchAbleOrg = _currentUser.joinedOrganizations!;\n\\}\n"})})]})}function m(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},511151:(e,i,t)=>{t.d(i,{Z:()=>r,a:()=>d});var o=t(667294);const n={},a=o.createContext(n);function d(e){const i=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),o.createElement(a.Provider,{value:i},e.children)}}}]);