"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[507815],{332495:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>r});const s=JSON.parse('{"id":"talawa-mobile-docs/services_post_service/PostService/addCommentLocally","title":"addCommentLocally method","description":"void addCommentLocally","source":"@site/docs/talawa-mobile-docs/services_post_service/PostService/addCommentLocally.md","sourceDirName":"talawa-mobile-docs/services_post_service/PostService","slug":"/talawa-mobile-docs/services_post_service/PostService/addCommentLocally","permalink":"/docs/talawa-mobile-docs/services_post_service/PostService/addCommentLocally","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_post_service/PostService/addCommentLocally.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"PostService constructor","permalink":"/docs/talawa-mobile-docs/services_post_service/PostService/"},"next":{"title":"addLike method","permalink":"/docs/talawa-mobile-docs/services_post_service/PostService/addLike"}}');var a=o(474848),n=o(28453);const c={},d="addCommentLocally method",i={},r=[{value:"Implementation",id:"implementation",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"addcommentlocally-method",children:"addCommentLocally method"})}),"\n",(0,a.jsxs)(t.p,{children:["void addCommentLocally\n(",(0,a.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," postID)"]}),"\n",(0,a.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:"void addCommentLocally(String postID) \\{\n  for (int i = 0; i \\< _posts.length; i++) \\{\n    if (_posts[i].sId == postID) \\{\n      _posts[i].comments!.add(Comments(sId: postID));\n      _updatedPostStreamController.add(_posts[i]);\n    \\}\n  \\}\n\\}\n"})})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>c,x:()=>d});var s=o(296540);const a={},n=s.createContext(a);function c(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);