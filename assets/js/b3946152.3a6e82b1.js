"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[457451],{375162:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"talawa-mobile-docs/services_post_service/PostService/getPosts","title":"getPosts method","description":"Future&lt;void\\\\> getPosts","source":"@site/docs/talawa-mobile-docs/services_post_service/PostService/getPosts.md","sourceDirName":"talawa-mobile-docs/services_post_service/PostService","slug":"/talawa-mobile-docs/services_post_service/PostService/getPosts","permalink":"/docs/talawa-mobile-docs/services_post_service/PostService/getPosts","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_post_service/PostService/getPosts.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"addLike method","permalink":"/docs/talawa-mobile-docs/services_post_service/PostService/addLike"},"next":{"title":"postStream property","permalink":"/docs/talawa-mobile-docs/services_post_service/PostService/postStream"}}');var n=s(474848),r=s(28453);const a={},i="getPosts method",c={},d=[{value:"Implementation",id:"implementation",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"getposts-method",children:"getPosts method"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> getPosts\n()"]}),"\n",(0,n.jsx)(t.p,{children:"<p>This function used to get all posts of an organization.\nThe function reference the organization Id from <code>_currentOrg</code>.</p>"}),"\n",(0,n.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-dart",children:"Future\\<void\\> getPosts() async \\{\n  variables\n  final String currentOrgID = _currentOrg.id!;\n  final String query = PostQueries().getPostsById(currentOrgID);\n  final result = await _dbFunctions.gqlAuthQuery(query);\n\n  Checking if the dbFunctions return the postJSON, if not return.\n  if (result.data!['postsByOrganization'] == null) return;\n\n  final List postsJson = result.data!['postsByOrganization'] as List;\n\n  postsJson.forEach((postJson) \\{\n    final Post post = Post.fromJson(postJson as Map\\<String, dynamic\\>);\n    if (!_renderedPostID.contains(post.sId)) \\{\n      _posts.insert(0, post);\n      _renderedPostID.add(post.sId);\n    \\}\n  \\});\n  _postStreamController.add(_posts);\n\\}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>i});var o=s(296540);const n={},r=o.createContext(n);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);