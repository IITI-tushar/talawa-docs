"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[260773],{347423:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"talawa-mobile-docs/view_model_widgets_view_models_comments_view_model/CommentsViewModel-class","title":"CommentsViewModel class","description":"\\\\CommentsViewModel class helps to serve the data from model","source":"@site/docs/talawa-mobile-docs/view_model_widgets_view_models_comments_view_model/CommentsViewModel-class.md","sourceDirName":"talawa-mobile-docs/view_model_widgets_view_models_comments_view_model","slug":"/talawa-mobile-docs/view_model_widgets_view_models_comments_view_model/CommentsViewModel-class","permalink":"/docs/talawa-mobile-docs/view_model_widgets_view_models_comments_view_model/CommentsViewModel-class","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_widgets_view_models_comments_view_model/CommentsViewModel-class.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"postId property","permalink":"/docs/talawa-mobile-docs/view_model_widgets_view_models_comments_view_model/CommentsViewModel/postId"},"next":{"title":"comments_view_model library","permalink":"/docs/talawa-mobile-docs/view_model_widgets_view_models_comments_view_model/view_model_widgets_view_models_comments_view_model-library"}}');var l=s(474848),o=s(28453);const n={},r="CommentsViewModel class",d={},a=[{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"commentList \u2192 List&lt;Comment&gt;",id:"commentlist--listcomment",level:5},{value:"hashCode \u2192 int",id:"hashcode--int",level:5},{value:"hasListeners \u2192 bool",id:"haslisteners--bool",level:5},{value:"isBusy \u2192 bool",id:"isbusy--bool",level:5},{value:"postId \u2192 String",id:"postid--string",level:5},{value:"runtimeType \u2192 Type",id:"runtimetype--type",level:5},{value:"state \u2192 ViewState",id:"state--viewstate",level:5},{value:"Methods",id:"methods",level:2},{value:"addCommentLocally(String msg) void",id:"addcommentlocallystring-msg-void",level:5},{value:"addListener(VoidCallback listener) void",id:"addlistenervoidcallback-listener-void",level:5},{value:"createComment(String msg) Future",id:"createcommentstring-msg-future",level:5},{value:"dispose() void",id:"dispose-void",level:5},{value:"getComments() Future",id:"getcomments-future",level:5},{value:"initialise(String postID) Future",id:"initialisestring-postid-future",level:5},{value:"noSuchMethod(Invocation invocation) dynamic",id:"nosuchmethodinvocation-invocation-dynamic",level:5},{value:"notifyListeners() void",id:"notifylisteners-void",level:5},{value:"removeListener(VoidCallback listener) void",id:"removelistenervoidcallback-listener-void",level:5},{value:"setState(ViewState viewState) void",id:"setstateviewstate-viewstate-void",level:5},{value:"toString() String",id:"tostring-string",level:5},{value:"Operators",id:"operators",level:2},{value:"operator ==(Object other) bool",id:"operator-object-other-bool",level:5}];function c(e){const t={a:"a",br:"br",em:"em",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"commentsviewmodel-class",children:"CommentsViewModel class"})}),"\n",(0,l.jsx)(t.p,{children:"<p>CommentsViewModel class helps to serve the data from model\nand to react to user's input for Comment Widget.</p>\n<p>Methods include:</p>\n<ul>\n<li><code>getComments</code> : to get all comments on the post.</li>\n<li><code>createComment</code> : to add comment on the post.</li>\n</ul>"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"Inheritance"})}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Object-class.html",children:"Object"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/foundation/ChangeNotifier-class.html",children:"ChangeNotifier"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_base_view_model/BaseModel-class",children:"BaseModel"})}),"\n",(0,l.jsx)(t.li,{children:"CommentsViewModel"}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"constructors",children:"Constructors"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_widgets_view_models_comments_view_model/CommentsViewModel/",children:"CommentsViewModel"})," ()"]}),"\n",(0,l.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,l.jsxs)(t.h5,{id:"commentlist--listcomment",children:[(0,l.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_widgets_view_models_comments_view_model/CommentsViewModel/commentList",children:"commentList"})," \u2192 ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/List-class.html",children:"List"}),"<",(0,l.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_comment_comment_model/Comment-class",children:"Comment"}),">"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.em,{children:'<span class="feature">read-only</span>'})}),"\n",(0,l.jsxs)(t.h5,{id:"hashcode--int",children:[(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Object/hashCode.html",children:"hashCode"})," \u2192 ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/int-class.html",children:"int"})]}),"\n",(0,l.jsxs)(t.p,{children:["The hash code for this object.",(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.em,{children:'<span class="feature">read-only</span><span class="feature">inherited</span>'})]}),"\n",(0,l.jsxs)(t.h5,{id:"haslisteners--bool",children:[(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/foundation/ChangeNotifier/hasListeners.html",children:"hasListeners"})," \u2192 ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"})]}),"\n",(0,l.jsxs)(t.p,{children:["Whether any listeners are currently registered.",(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.em,{children:'<span class="feature">read-only</span><span class="feature">inherited</span>'})]}),"\n",(0,l.jsxs)(t.h5,{id:"isbusy--bool",children:[(0,l.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_base_view_model/BaseModel/isBusy",children:"isBusy"})," \u2192 ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"})]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.em,{children:'<span class="feature">read-only</span><span class="feature">inherited</span>'})}),"\n",(0,l.jsxs)(t.h5,{id:"postid--string",children:[(0,l.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_widgets_view_models_comments_view_model/CommentsViewModel/postId",children:"postId"})," \u2192 ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.em,{children:'<span class="feature">read-only</span>'})}),"\n",(0,l.jsxs)(t.h5,{id:"runtimetype--type",children:[(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Object/runtimeType.html",children:"runtimeType"})," \u2192 ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Type-class.html",children:"Type"})]}),"\n",(0,l.jsxs)(t.p,{children:["A representation of the runtime type of the object.",(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.em,{children:'<span class="feature">read-only</span><span class="feature">inherited</span>'})]}),"\n",(0,l.jsxs)(t.h5,{id:"state--viewstate",children:[(0,l.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_base_view_model/BaseModel/state",children:"state"})," \u2192 ",(0,l.jsx)(t.a,{href:"/docs/talawa-mobile-docs/enums_enums/ViewState",children:"ViewState"})]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.em,{children:'<span class="feature">read-only</span><span class="feature">inherited</span>'})}),"\n",(0,l.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,l.jsxs)(t.h5,{id:"addcommentlocallystring-msg-void",children:[(0,l.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_widgets_view_models_comments_view_model/CommentsViewModel/addCommentLocally",children:"addCommentLocally"}),"(",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," msg) void"]}),"\n",(0,l.jsxs)(t.h5,{id:"addlistenervoidcallback-listener-void",children:[(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/foundation/ChangeNotifier/addListener.html",children:"addListener"}),"(",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-ui/VoidCallback.html",children:"VoidCallback"})," listener) void"]}),"\n",(0,l.jsxs)(t.p,{children:["Register a closure to be called when the object changes.",(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.em,{children:'<span class="feature">inherited</span>'})]}),"\n",(0,l.jsxs)(t.h5,{id:"createcommentstring-msg-future",children:[(0,l.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_widgets_view_models_comments_view_model/CommentsViewModel/createComment",children:"createComment"}),"(",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," msg) ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"})]}),"\n",(0,l.jsx)(t.p,{children:"This function add comment on the post.\nThe function uses <code>createComments</code> method provided by Comment Service."}),"\n",(0,l.jsxs)(t.h5,{id:"dispose-void",children:[(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/foundation/ChangeNotifier/dispose.html",children:"dispose"}),"() void"]}),"\n",(0,l.jsxs)(t.p,{children:['Discards any resources used by the object. After this is called, the\nobject is not in a usable state and should be discarded (calls to\n<a href="https',":api",'.flutter.dev/flutter/foundation/ChangeNotifier/addListener.html">addListener</a> will throw after the object is disposed).',(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.em,{children:'<span class="feature">inherited</span>'})]}),"\n",(0,l.jsxs)(t.h5,{id:"getcomments-future",children:[(0,l.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_widgets_view_models_comments_view_model/CommentsViewModel/getComments",children:"getComments"}),"() ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"})]}),"\n",(0,l.jsx)(t.p,{children:"This methods fetch all comments on the post.\nThe function uses <code>getCommentsForPost</code> method by Comment Service."}),"\n",(0,l.jsxs)(t.h5,{id:"initialisestring-postid-future",children:[(0,l.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_widgets_view_models_comments_view_model/CommentsViewModel/initialise",children:"initialise"}),"(",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," postID) ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"})]}),"\n",(0,l.jsxs)(t.h5,{id:"nosuchmethodinvocation-invocation-dynamic",children:[(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html",children:"noSuchMethod"}),"(",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Invocation-class.html",children:"Invocation"})," invocation) dynamic"]}),"\n",(0,l.jsxs)(t.p,{children:["Invoked when a non-existent method or property is accessed.",(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.em,{children:'<span class="feature">inherited</span>'})]}),"\n",(0,l.jsxs)(t.h5,{id:"notifylisteners-void",children:[(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/foundation/ChangeNotifier/notifyListeners.html",children:"notifyListeners"}),"() void"]}),"\n",(0,l.jsxs)(t.p,{children:["Call all the registered listeners.",(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.em,{children:'<span class="feature">inherited</span>'})]}),"\n",(0,l.jsxs)(t.h5,{id:"removelistenervoidcallback-listener-void",children:[(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/foundation/ChangeNotifier/removeListener.html",children:"removeListener"}),"(",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-ui/VoidCallback.html",children:"VoidCallback"})," listener) void"]}),"\n",(0,l.jsxs)(t.p,{children:["Remove a previously registered closure from the list of closures that are\nnotified when the object changes.",(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.em,{children:'<span class="feature">inherited</span>'})]}),"\n",(0,l.jsxs)(t.h5,{id:"setstateviewstate-viewstate-void",children:[(0,l.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_base_view_model/BaseModel/setState",children:"setState"}),"(",(0,l.jsx)(t.a,{href:"/docs/talawa-mobile-docs/enums_enums/ViewState",children:"ViewState"})," viewState) void"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.em,{children:'<span class="feature">inherited</span>'})}),"\n",(0,l.jsxs)(t.h5,{id:"tostring-string",children:[(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Object/toString.html",children:"toString"}),"() ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})]}),"\n",(0,l.jsxs)(t.p,{children:["A string representation of this object.",(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.em,{children:'<span class="feature">inherited</span>'})]}),"\n",(0,l.jsx)(t.h2,{id:"operators",children:"Operators"}),"\n",(0,l.jsxs)(t.h5,{id:"operator-object-other-bool",children:[(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Object/operator_equals.html",children:"operator =="}),"(",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Object-class.html",children:"Object"})," other) ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"})]}),"\n",(0,l.jsxs)(t.p,{children:["The equality operator.",(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.em,{children:'<span class="feature">inherited</span>'})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>r});var i=s(296540);const l={},o=i.createContext(l);function n(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:n(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);