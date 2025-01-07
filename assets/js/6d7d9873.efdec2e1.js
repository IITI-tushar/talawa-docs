"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[871533],{118035:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"talawa-mobile-docs/utils_comment_queries/CommentQueries/getPostsComments","title":"getPostsComments method","description":"String getPostsComments","source":"@site/docs/talawa-mobile-docs/utils_comment_queries/CommentQueries/getPostsComments.md","sourceDirName":"talawa-mobile-docs/utils_comment_queries/CommentQueries","slug":"/talawa-mobile-docs/utils_comment_queries/CommentQueries/getPostsComments","permalink":"/docs/talawa-mobile-docs/utils_comment_queries/CommentQueries/getPostsComments","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/utils_comment_queries/CommentQueries/getPostsComments.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"createComment method","permalink":"/docs/talawa-mobile-docs/utils_comment_queries/CommentQueries/createComment"},"next":{"title":"CommentQueries class","permalink":"/docs/talawa-mobile-docs/utils_comment_queries/CommentQueries-class"}}');var o=s(474848),m=s(28453);const r={},a="getPostsComments method",i={},c=[{value:"Implementation",id:"implementation",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,m.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"getpostscomments-method",children:"getPostsComments method"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," getPostsComments\n(",(0,o.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," postId)"]}),"\n",(0,o.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:'String getPostsComments(String postId) \\{\n  return """\n  query\\{\n    commentsByPost(id: "$postId")\\{\n      _id\n      text\n      createdAt\n      creator\\{\n        firstName\n        lastName\n      \\}\n    \\}\n  \\}\n  """;\n\\}\n'})})]})}function d(e={}){const{wrapper:t}={...(0,m.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var n=s(296540);const o={},m=n.createContext(o);function r(e){const t=n.useContext(m);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(m.Provider,{value:t},e.children)}}}]);