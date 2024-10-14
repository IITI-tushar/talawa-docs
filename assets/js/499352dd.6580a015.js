"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[14261],{91930:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=o(85893),n=o(11151);const a={},i="uploadPost method",r={id:"talawa-mobile-docs/utils_post_queries/PostQueries/uploadPost",title:"uploadPost method",description:"String uploadPost",source:"@site/docs/talawa-mobile-docs/utils_post_queries/PostQueries/uploadPost.md",sourceDirName:"talawa-mobile-docs/utils_post_queries/PostQueries",slug:"/talawa-mobile-docs/utils_post_queries/PostQueries/uploadPost",permalink:"/docs/talawa-mobile-docs/utils_post_queries/PostQueries/uploadPost",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/utils_post_queries/PostQueries/uploadPost.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"removeLike method",permalink:"/docs/talawa-mobile-docs/utils_post_queries/PostQueries/removeLike"},next:{title:"PostQueries class",permalink:"/docs/talawa-mobile-docs/utils_post_queries/PostQueries-class"}},l={},d=[{value:"Implementation",id:"implementation",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"uploadpost-method",children:"uploadPost method"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," uploadPost\n()"]}),"\n",(0,s.jsx)(t.p,{children:"<p>Upload a post to database.</p>\n<p><strong>params</strong>:\nNone</p>\n<p><strong>returns</strong>:</p>\n<ul>\n<li><code>String</code>: The query related to uploadingPost.</li>\n</ul>"}),"\n",(0,s.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"String uploadPost() \\{\n  return '''\n  mutation CreatePost(\n  \\$text: String!\n  \\$title: String!\n  \\$imageUrl: URL\n  \\$videoUrl: URL\n  \\$organizationId: ID!\n) \\{\n  createPost(\n    data: \\{\n      text: \\$text\n      title: \\$title\n      imageUrl: \\$imageUrl\n      videoUrl: \\$videoUrl\n      organizationId: \\$organizationId\n    \\}\n  ) \\{\n    _id\n  \\}\n\\}\n  ''';\n\\}\n"})})]})}function c(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>r,a:()=>i});var s=o(67294);const n={},a=s.createContext(n);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);