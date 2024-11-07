"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[190677],{232700:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=r(785893),o=r(511151);const i={},n="setOrgStreamSubscription method",a={id:"talawa-mobile-docs/services_post_service/PostService/setOrgStreamSubscription",title:"setOrgStreamSubscription method",description:"void setOrgStreamSubscription",source:"@site/docs/talawa-mobile-docs/services_post_service/PostService/setOrgStreamSubscription.md",sourceDirName:"talawa-mobile-docs/services_post_service/PostService",slug:"/talawa-mobile-docs/services_post_service/PostService/setOrgStreamSubscription",permalink:"/docs/talawa-mobile-docs/services_post_service/PostService/setOrgStreamSubscription",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_post_service/PostService/setOrgStreamSubscription.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"removeLike method",permalink:"/docs/talawa-mobile-docs/services_post_service/PostService/removeLike"},next:{title:"updatedPostStream property",permalink:"/docs/talawa-mobile-docs/services_post_service/PostService/updatedPostStream"}},c={},d=[{value:"Implementation",id:"implementation",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"setorgstreamsubscription-method",children:"setOrgStreamSubscription method"})}),"\n",(0,s.jsx)(t.p,{children:"void setOrgStreamSubscription\n()"}),"\n",(0,s.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:'void setOrgStreamSubscription() \\{\n  _userConfig.currentOrgInfoStream.listen((updatedOrganization) \\{\n    if (updatedOrganization != _currentOrg) \\{\n      print("org changes from post service");\n      _renderedPostID.clear();\n      _currentOrg = updatedOrganization;\n      getPosts();\n    \\}\n  \\});\n\\}\n'})})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},511151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>n});var s=r(667294);const o={},i=s.createContext(o);function n(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);