"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[16925],{693812:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>n});const l=JSON.parse('{"id":"talawa-mobile-docs/view_model_after_auth_view_models_add_post_view_models_add_post_view_model/AddPostViewModel-class","title":"AddPostViewModel class","description":"\\\\AddPostViewModel class have different functions that are used.\\\\","source":"@site/docs/talawa-mobile-docs/view_model_after_auth_view_models_add_post_view_models_add_post_view_model/AddPostViewModel-class.md","sourceDirName":"talawa-mobile-docs/view_model_after_auth_view_models_add_post_view_models_add_post_view_model","slug":"/talawa-mobile-docs/view_model_after_auth_view_models_add_post_view_models_add_post_view_model/AddPostViewModel-class","permalink":"/docs/talawa-mobile-docs/view_model_after_auth_view_models_add_post_view_models_add_post_view_model/AddPostViewModel-class","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_after_auth_view_models_add_post_view_models_add_post_view_model/AddPostViewModel-class.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"userName property","permalink":"/docs/talawa-mobile-docs/view_model_after_auth_view_models_add_post_view_models_add_post_view_model/AddPostViewModel/userName"},"next":{"title":"add_post_view_model library","permalink":"/docs/talawa-mobile-docs/view_model_after_auth_view_models_add_post_view_models_add_post_view_model/view_model_after_auth_view_models_add_post_view_models_add_post_view_model-library"}}');var i=s(474848),d=s(28453);const a={},o="AddPostViewModel class",r={},n=[{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"controller \u2192 TextEditingController",id:"controller--texteditingcontroller",level:5},{value:"hashCode \u2192 int",id:"hashcode--int",level:5},{value:"hasListeners \u2192 bool",id:"haslisteners--bool",level:5},{value:"imageFile \u2192 File?",id:"imagefile--file",level:5},{value:"isBusy \u2192 bool",id:"isbusy--bool",level:5},{value:"orgName \u2192 String",id:"orgname--string",level:5},{value:"runtimeType \u2192 Type",id:"runtimetype--type",level:5},{value:"state \u2192 ViewState",id:"state--viewstate",level:5},{value:"titleController \u2192 TextEditingController",id:"titlecontroller--texteditingcontroller",level:5},{value:"userName \u2192 String",id:"username--string",level:5},{value:"Methods",id:"methods",level:2},{value:"addListener(VoidCallback listener) void",id:"addlistenervoidcallback-listener-void",level:5},{value:"dispose() void",id:"dispose-void",level:5},{value:"getImageFromGallery({bool camera = false}) Future&lt;void&gt;",id:"getimagefromgallerybool-camera--false-futurevoid",level:5},{value:"initialise() void",id:"initialise-void",level:5},{value:"noSuchMethod(Invocation invocation) dynamic",id:"nosuchmethodinvocation-invocation-dynamic",level:5},{value:"notifyListeners() void",id:"notifylisteners-void",level:5},{value:"removeImage() void",id:"removeimage-void",level:5},{value:"removeListener(VoidCallback listener) void",id:"removelistenervoidcallback-listener-void",level:5},{value:"setState(ViewState viewState) void",id:"setstateviewstate-viewstate-void",level:5},{value:"toString() String",id:"tostring-string",level:5},{value:"uploadPost() Future&lt;void&gt;",id:"uploadpost-futurevoid",level:5},{value:"Operators",id:"operators",level:2},{value:"operator ==(Object other) bool",id:"operator-object-other-bool",level:5}];function h(e){const t={a:"a",br:"br",em:"em",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"addpostviewmodel-class",children:"AddPostViewModel class"})}),"\n",(0,i.jsx)(t.p,{children:"<p>AddPostViewModel class have different functions that are used.</p>\n<p>to interact with the model to add a new post in the organization.</p>"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Inheritance"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Object-class.html",children:"Object"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/foundation/ChangeNotifier-class.html",children:"ChangeNotifier"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_base_view_model/BaseModel-class",children:"BaseModel"})}),"\n",(0,i.jsx)(t.li,{children:"AddPostViewModel"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"constructors",children:"Constructors"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_add_post_view_models_add_post_view_model/AddPostViewModel/",children:"AddPostViewModel"})," ()"]}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(t.h5,{id:"controller--texteditingcontroller",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_add_post_view_models_add_post_view_model/AddPostViewModel/controller",children:"controller"})," \u2192 ",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/widgets/TextEditingController-class.html",children:"TextEditingController"})]}),"\n",(0,i.jsxs)(t.p,{children:["Post body text controller.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:'<span class="feature">read-only</span>'})]}),"\n",(0,i.jsxs)(t.h5,{id:"hashcode--int",children:[(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Object/hashCode.html",children:"hashCode"})," \u2192 ",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/int-class.html",children:"int"})]}),"\n",(0,i.jsxs)(t.p,{children:["The hash code for this object.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:'<span class="feature">read-only</span><span class="feature">inherited</span>'})]}),"\n",(0,i.jsxs)(t.h5,{id:"haslisteners--bool",children:[(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/foundation/ChangeNotifier/hasListeners.html",children:"hasListeners"})," \u2192 ",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"})]}),"\n",(0,i.jsxs)(t.p,{children:["Whether any listeners are currently registered.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:'<span class="feature">read-only</span><span class="feature">inherited</span>'})]}),"\n",(0,i.jsxs)(t.h5,{id:"imagefile--file",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_add_post_view_models_add_post_view_model/AddPostViewModel/imageFile",children:"imageFile"})," \u2192 ",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-io/File-class.html",children:"File"}),"?"]}),"\n",(0,i.jsxs)(t.p,{children:["The image file that is to be uploaded.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:'<span class="feature">read-only</span>'})]}),"\n",(0,i.jsxs)(t.h5,{id:"isbusy--bool",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_base_view_model/BaseModel/isBusy",children:"isBusy"})," \u2192 ",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:'<span class="feature">read-only</span><span class="feature">inherited</span>'})}),"\n",(0,i.jsxs)(t.h5,{id:"orgname--string",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_add_post_view_models_add_post_view_model/AddPostViewModel/orgName",children:"orgName"})," \u2192 ",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})]}),"\n",(0,i.jsxs)(t.p,{children:["The organisation name.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:'<span class="feature">read-only</span>'})]}),"\n",(0,i.jsxs)(t.h5,{id:"runtimetype--type",children:[(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Object/runtimeType.html",children:"runtimeType"})," \u2192 ",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Type-class.html",children:"Type"})]}),"\n",(0,i.jsxs)(t.p,{children:["A representation of the runtime type of the object.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:'<span class="feature">read-only</span><span class="feature">inherited</span>'})]}),"\n",(0,i.jsxs)(t.h5,{id:"state--viewstate",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_base_view_model/BaseModel/state",children:"state"})," \u2192 ",(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/enums_enums/ViewState",children:"ViewState"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:'<span class="feature">read-only</span><span class="feature">inherited</span>'})}),"\n",(0,i.jsxs)(t.h5,{id:"titlecontroller--texteditingcontroller",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_add_post_view_models_add_post_view_model/AddPostViewModel/titleController",children:"titleController"})," \u2192 ",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/widgets/TextEditingController-class.html",children:"TextEditingController"})]}),"\n",(0,i.jsxs)(t.p,{children:["Post title text controller.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:'<span class="feature">read-only</span>'})]}),"\n",(0,i.jsxs)(t.h5,{id:"username--string",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_add_post_view_models_add_post_view_model/AddPostViewModel/userName",children:"userName"})," \u2192 ",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})]}),"\n",(0,i.jsxs)(t.p,{children:["The Username.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:'<span class="feature">read-only</span>'})]}),"\n",(0,i.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsxs)(t.h5,{id:"addlistenervoidcallback-listener-void",children:[(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/foundation/ChangeNotifier/addListener.html",children:"addListener"}),"(",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-ui/VoidCallback.html",children:"VoidCallback"})," listener) void"]}),"\n",(0,i.jsxs)(t.p,{children:["Register a closure to be called when the object changes.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:'<span class="feature">inherited</span>'})]}),"\n",(0,i.jsxs)(t.h5,{id:"dispose-void",children:[(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/foundation/ChangeNotifier/dispose.html",children:"dispose"}),"() void"]}),"\n",(0,i.jsxs)(t.p,{children:['Discards any resources used by the object. After this is called, the\nobject is not in a usable state and should be discarded (calls to\n<a href="https',":api",'.flutter.dev/flutter/foundation/ChangeNotifier/addListener.html">addListener</a> will throw after the object is disposed).',(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:'<span class="feature">inherited</span>'})]}),"\n",(0,i.jsxs)(t.h5,{id:"getimagefromgallerybool-camera--false-futurevoid",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_add_post_view_models_add_post_view_model/AddPostViewModel/getImageFromGallery",children:"getImageFromGallery"}),"({",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"})," camera = false}) ",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void>"]}),"\n",(0,i.jsx)(t.p,{children:"This function is used to get the image from gallery."}),"\n",(0,i.jsxs)(t.h5,{id:"initialise-void",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_add_post_view_models_add_post_view_model/AddPostViewModel/initialise",children:"initialise"}),"() void"]}),"\n",(0,i.jsx)(t.p,{children:"This function is usedto do initialisation of stuff in the view model."}),"\n",(0,i.jsxs)(t.h5,{id:"nosuchmethodinvocation-invocation-dynamic",children:[(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html",children:"noSuchMethod"}),"(",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Invocation-class.html",children:"Invocation"})," invocation) dynamic"]}),"\n",(0,i.jsxs)(t.p,{children:["Invoked when a non-existent method or property is accessed.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:'<span class="feature">inherited</span>'})]}),"\n",(0,i.jsxs)(t.h5,{id:"notifylisteners-void",children:[(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/foundation/ChangeNotifier/notifyListeners.html",children:"notifyListeners"}),"() void"]}),"\n",(0,i.jsxs)(t.p,{children:["Call all the registered listeners.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:'<span class="feature">inherited</span>'})]}),"\n",(0,i.jsxs)(t.h5,{id:"removeimage-void",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_add_post_view_models_add_post_view_model/AddPostViewModel/removeImage",children:"removeImage"}),"() void"]}),"\n",(0,i.jsx)(t.p,{children:"This function removes the image selected."}),"\n",(0,i.jsxs)(t.h5,{id:"removelistenervoidcallback-listener-void",children:[(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/foundation/ChangeNotifier/removeListener.html",children:"removeListener"}),"(",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-ui/VoidCallback.html",children:"VoidCallback"})," listener) void"]}),"\n",(0,i.jsxs)(t.p,{children:["Remove a previously registered closure from the list of closures that are\nnotified when the object changes.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:'<span class="feature">inherited</span>'})]}),"\n",(0,i.jsxs)(t.h5,{id:"setstateviewstate-viewstate-void",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_base_view_model/BaseModel/setState",children:"setState"}),"(",(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/enums_enums/ViewState",children:"ViewState"})," viewState) void"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:'<span class="feature">inherited</span>'})}),"\n",(0,i.jsxs)(t.h5,{id:"tostring-string",children:[(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Object/toString.html",children:"toString"}),"() ",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})]}),"\n",(0,i.jsxs)(t.p,{children:["A string representation of this object.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:'<span class="feature">inherited</span>'})]}),"\n",(0,i.jsxs)(t.h5,{id:"uploadpost-futurevoid",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_add_post_view_models_add_post_view_model/AddPostViewModel/uploadPost",children:"uploadPost"}),"() ",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void>"]}),"\n",(0,i.jsx)(t.p,{children:"This function uploads the post finally, and navigate the success message or error message in Snack Bar."}),"\n",(0,i.jsx)(t.h2,{id:"operators",children:"Operators"}),"\n",(0,i.jsxs)(t.h5,{id:"operator-object-other-bool",children:[(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Object/operator_equals.html",children:"operator =="}),"(",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Object-class.html",children:"Object"})," other) ",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"})]}),"\n",(0,i.jsxs)(t.p,{children:["The equality operator.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:'<span class="feature">inherited</span>'})]})]})}function c(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var l=s(296540);const i={},d=l.createContext(i);function a(e){const t=l.useContext(d);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),l.createElement(d.Provider,{value:t},e.children)}}}]);