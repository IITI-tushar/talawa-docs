"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[95714],{48591:(o,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=n(85893),e=n(11151);const r={},a="Post.fromJson constructor",l={id:"talawa-mobile-docs/models_post_post_model/Post/Post.fromJson",title:"Post.fromJson constructor",description:"Post.fromJson(Map&lt;String, dynamic\\> json)",source:"@site/docs/talawa-mobile-docs/models_post_post_model/Post/Post.fromJson.md",sourceDirName:"talawa-mobile-docs/models_post_post_model/Post",slug:"/talawa-mobile-docs/models_post_post_model/Post/Post.fromJson",permalink:"/docs/talawa-mobile-docs/models_post_post_model/Post/Post.fromJson",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/models_post_post_model/Post/Post.fromJson.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"Post constructor",permalink:"/docs/talawa-mobile-docs/models_post_post_model/Post/"},next:{title:"comments property",permalink:"/docs/talawa-mobile-docs/models_post_post_model/Post/comments"}},i={},c=[{value:"Implementation",id:"implementation",level:2}];function d(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,e.a)(),...o.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"postfromjson-constructor",children:"Post.fromJson constructor"})}),"\n",(0,s.jsxs)(t.p,{children:["Post.fromJson(",(0,s.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Map-class.html",children:"Map"}),"<",(0,s.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),", dynamic> json)"]}),"\n",(0,s.jsx)(t.p,{children:"<p>Creating a new Post instance from a map structure.</p>\n<p>params:\nNone\nreturns:</p>\n<ul>\n<li><code>PostObject</code>: Dart Object for posts</li>\n</ul>"}),"\n",(0,s.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"params:\nNone\nreturns:\n* `PostObject`: Dart Object for posts\nPost.fromJson(Map\\<String, dynamic\\> json) \\{\n  sId = json['_id'] as String;\n  description = json['text'] as String?;\n  createdAt = DateTime.parse(json['createdAt'] as String);\n  imageUrl = json['imageUrl'] as String?;\n  videoUrl = json['videoUrl'] as String?;\n  creator = json['creator'] != null\n      ? User.fromJson(json['creator'] as Map\\<String, dynamic\\>, fromOrg: true)\n      : null;\n  organization = json['organization'] != null\n      ? OrgInfo.fromJson(json['organization'] as Map\\<String, dynamic\\>)\n      : null;\n  if (json['likedBy'] != null) \\{\n    likedBy = \\<LikedBy\\>[];\n    json['likedBy'].forEach((v) \\{\n      likedBy?.add(LikedBy.fromJson(v as Map\\<String, dynamic\\>));\n    \\});\n  \\}\n  if (json['comments'] != null) \\{\n    comments = \\<Comments\\>[];\n    json['comments'].forEach((v) \\{\n      comments?.add(Comments.fromJson(v as Map\\<String, dynamic\\>));\n    \\});\n  \\}\n\\}\n"})})]})}function m(o={}){const{wrapper:t}={...(0,e.a)(),...o.components};return t?(0,s.jsx)(t,{...o,children:(0,s.jsx)(d,{...o})}):d(o)}},11151:(o,t,n)=>{n.d(t,{Z:()=>l,a:()=>a});var s=n(67294);const e={},r=s.createContext(e);function a(o){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof o?o(t):{...t,...o}}),[t,o])}function l(o){let t;return t=o.disableParentContext?"function"==typeof o.components?o.components(e):o.components||e:a(o.components),s.createElement(r.Provider,{value:t},o.children)}}}]);