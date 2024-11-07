"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[494505],{76259:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=s(785893),o=s(511151);const i={},a="PostService class",l={id:"talawa-mobile-docs/services_post_service/PostService-class",title:"PostService class",description:"\\PostService class provides functions in the context of a Post.\\",source:"@site/docs/talawa-mobile-docs/services_post_service/PostService-class.md",sourceDirName:"talawa-mobile-docs/services_post_service",slug:"/talawa-mobile-docs/services_post_service/PostService-class",permalink:"/docs/talawa-mobile-docs/services_post_service/PostService-class",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_post_service/PostService-class.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"updatedPostStream property",permalink:"/docs/talawa-mobile-docs/services_post_service/PostService/updatedPostStream"},next:{title:"post_service library",permalink:"/docs/talawa-mobile-docs/services_post_service/services_post_service-library"}},c={},d=[{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"hashCode \u2192 int",id:"hashcode--int",level:5},{value:"postStream \u2192 Stream&lt;List&lt;Post&gt;&gt;",id:"poststream--streamlistpost",level:5},{value:"runtimeType \u2192 Type",id:"runtimetype--type",level:5},{value:"updatedPostStream \u2192 Stream&lt;Post&gt;",id:"updatedpoststream--streampost",level:5},{value:"Methods",id:"methods",level:2},{value:"addCommentLocally(String postID) void",id:"addcommentlocallystring-postid-void",level:5},{value:"addLike(String postID) Future&lt;void&gt;",id:"addlikestring-postid-futurevoid",level:5},{value:"getPosts() Future&lt;void&gt;",id:"getposts-futurevoid",level:5},{value:"noSuchMethod(Invocation invocation) dynamic",id:"nosuchmethodinvocation-invocation-dynamic",level:5},{value:"removeLike(String postID) Future&lt;void&gt;",id:"removelikestring-postid-futurevoid",level:5},{value:"setOrgStreamSubscription() void",id:"setorgstreamsubscription-void",level:5},{value:"toString() String",id:"tostring-string",level:5},{value:"Operators",id:"operators",level:2},{value:"operator ==(Object other) bool",id:"operator-object-other-bool",level:5}];function n(e){const t={a:"a",br:"br",em:"em",h1:"h1",h2:"h2",h5:"h5",header:"header",p:"p",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"postservice-class",children:"PostService class"})}),"\n",(0,r.jsx)(t.p,{children:"<p>PostService class provides functions in the context of a Post.</p>\n<p>Services include:</p>\n<ul>\n<li><code>getPosts</code> : to get all posts of the organization.</li>\n<li><code>addLike</code> : to add like to the post.</li>\n<li><code>removeLike</code> : to remove the like from the post.</li>\n</ul>"}),"\n",(0,r.jsx)(t.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/talawa-mobile-docs/services_post_service/PostService/",children:"PostService"})," ()"]}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(t.h5,{id:"hashcode--int",children:[(0,r.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Object/hashCode.html",children:"hashCode"})," \u2192 ",(0,r.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/int-class.html",children:"int"})]}),"\n",(0,r.jsxs)(t.p,{children:["The hash code for this object.",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.em,{children:'<span class="feature">read-only</span><span class="feature">inherited</span>'})]}),"\n",(0,r.jsxs)(t.h5,{id:"poststream--streamlistpost",children:[(0,r.jsx)(t.a,{href:"/docs/talawa-mobile-docs/services_post_service/PostService/postStream",children:"postStream"})," \u2192 ",(0,r.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-async/Stream-class.html",children:"Stream"}),"<",(0,r.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/List-class.html",children:"List"}),"<",(0,r.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_post_post_model/Post-class",children:"Post"}),">>"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:'<span class="feature">read-only</span>'})}),"\n",(0,r.jsxs)(t.h5,{id:"runtimetype--type",children:[(0,r.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Object/runtimeType.html",children:"runtimeType"})," \u2192 ",(0,r.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Type-class.html",children:"Type"})]}),"\n",(0,r.jsxs)(t.p,{children:["A representation of the runtime type of the object.",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.em,{children:'<span class="feature">read-only</span><span class="feature">inherited</span>'})]}),"\n",(0,r.jsxs)(t.h5,{id:"updatedpoststream--streampost",children:[(0,r.jsx)(t.a,{href:"/docs/talawa-mobile-docs/services_post_service/PostService/updatedPostStream",children:"updatedPostStream"})," \u2192 ",(0,r.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-async/Stream-class.html",children:"Stream"}),"<",(0,r.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_post_post_model/Post-class",children:"Post"}),">"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:'<span class="feature">read-only</span>'})}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)(t.h5,{id:"addcommentlocallystring-postid-void",children:[(0,r.jsx)(t.a,{href:"/docs/talawa-mobile-docs/services_post_service/PostService/addCommentLocally",children:"addCommentLocally"}),"(",(0,r.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," postID) void"]}),"\n",(0,r.jsxs)(t.h5,{id:"addlikestring-postid-futurevoid",children:[(0,r.jsx)(t.a,{href:"/docs/talawa-mobile-docs/services_post_service/PostService/addLike",children:"addLike"}),"(",(0,r.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," postID) ",(0,r.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void>"]}),"\n",(0,r.jsx)(t.p,{children:"This function is used to add Like to the Post."}),"\n",(0,r.jsxs)(t.h5,{id:"getposts-futurevoid",children:[(0,r.jsx)(t.a,{href:"/docs/talawa-mobile-docs/services_post_service/PostService/getPosts",children:"getPosts"}),"() ",(0,r.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void>"]}),"\n",(0,r.jsx)(t.p,{children:"This function used to get all posts of an organization.\nThe function reference the organization Id from <code>_currentOrg</code>."}),"\n",(0,r.jsxs)(t.h5,{id:"nosuchmethodinvocation-invocation-dynamic",children:[(0,r.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html",children:"noSuchMethod"}),"(",(0,r.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Invocation-class.html",children:"Invocation"})," invocation) dynamic"]}),"\n",(0,r.jsxs)(t.p,{children:["Invoked when a non-existent method or property is accessed.",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.em,{children:'<span class="feature">inherited</span>'})]}),"\n",(0,r.jsxs)(t.h5,{id:"removelikestring-postid-futurevoid",children:[(0,r.jsx)(t.a,{href:"/docs/talawa-mobile-docs/services_post_service/PostService/removeLike",children:"removeLike"}),"(",(0,r.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," postID) ",(0,r.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void>"]}),"\n",(0,r.jsx)(t.p,{children:"This function is used to remove like from the Post."}),"\n",(0,r.jsxs)(t.h5,{id:"setorgstreamsubscription-void",children:[(0,r.jsx)(t.a,{href:"/docs/talawa-mobile-docs/services_post_service/PostService/setOrgStreamSubscription",children:"setOrgStreamSubscription"}),"() void"]}),"\n",(0,r.jsxs)(t.h5,{id:"tostring-string",children:[(0,r.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Object/toString.html",children:"toString"}),"() ",(0,r.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})]}),"\n",(0,r.jsxs)(t.p,{children:["A string representation of this object.",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.em,{children:'<span class="feature">inherited</span>'})]}),"\n",(0,r.jsx)(t.h2,{id:"operators",children:"Operators"}),"\n",(0,r.jsxs)(t.h5,{id:"operator-object-other-bool",children:[(0,r.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Object/operator_equals.html",children:"operator =="}),"(",(0,r.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Object-class.html",children:"Object"})," other) ",(0,r.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"})]}),"\n",(0,r.jsxs)(t.p,{children:["The equality operator.",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.em,{children:'<span class="feature">inherited</span>'})]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(n,{...e})}):n(e)}},511151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>a});var r=s(667294);const o={},i=r.createContext(o);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);