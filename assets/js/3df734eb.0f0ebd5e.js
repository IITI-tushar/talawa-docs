"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[31368],{12158:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>n,toc:()=>l});var r=s(85893),o=s(11151);const c={},a="PostService constructor",n={id:"talawa-mobile-docs/services_post_service/PostService/PostService",title:"PostService constructor",description:"PostService()",source:"@site/docs/talawa-mobile-docs/services_post_service/PostService/PostService.md",sourceDirName:"talawa-mobile-docs/services_post_service/PostService",slug:"/talawa-mobile-docs/services_post_service/PostService/",permalink:"/docs/talawa-mobile-docs/services_post_service/PostService/",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_post_service/PostService/PostService.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"org_service library",permalink:"/docs/talawa-mobile-docs/services_org_service/services_org_service-library"},next:{title:"addCommentLocally method",permalink:"/docs/talawa-mobile-docs/services_post_service/PostService/addCommentLocally"}},i={},l=[{value:"Implementation",id:"implementation",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"postservice-constructor",children:"PostService constructor"})}),"\n",(0,r.jsx)(t.p,{children:"PostService()"}),"\n",(0,r.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-dart",children:"PostService() \\{\n  _postStream = _postStreamController.stream.asBroadcastStream();\n  _updatedPostStream =\n      _updatedPostStreamController.stream.asBroadcastStream();\n  _currentOrg = _userConfig.currentOrg;\n  setOrgStreamSubscription();\n  getPosts();\n\\}\n"})})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>n,a:()=>a});var r=s(67294);const o={},c=r.createContext(o);function a(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);