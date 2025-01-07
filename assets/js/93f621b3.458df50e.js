"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[72185],{998912:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>c,frontMatter:()=>n,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"talawa-mobile-docs/view_model_widgets_view_models_custom_drawer_view_model/CustomDrawerViewModel/notifyListeners","title":"notifyListeners method","description":"- @override","source":"@site/docs/talawa-mobile-docs/view_model_widgets_view_models_custom_drawer_view_model/CustomDrawerViewModel/notifyListeners.md","sourceDirName":"talawa-mobile-docs/view_model_widgets_view_models_custom_drawer_view_model/CustomDrawerViewModel","slug":"/talawa-mobile-docs/view_model_widgets_view_models_custom_drawer_view_model/CustomDrawerViewModel/notifyListeners","permalink":"/docs/talawa-mobile-docs/view_model_widgets_view_models_custom_drawer_view_model/CustomDrawerViewModel/notifyListeners","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_widgets_view_models_custom_drawer_view_model/CustomDrawerViewModel/notifyListeners.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"isPresentinSwitchableOrg method","permalink":"/docs/talawa-mobile-docs/view_model_widgets_view_models_custom_drawer_view_model/CustomDrawerViewModel/isPresentinSwitchableOrg"},"next":{"title":"selectedOrg property","permalink":"/docs/talawa-mobile-docs/view_model_widgets_view_models_custom_drawer_view_model/CustomDrawerViewModel/selectedOrg"}}');var o=i(474848),s=i(28453);const n={},d="notifyListeners method",a={},l=[{value:"Implementation",id:"implementation",level:2}];function m(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"notifylisteners-method",children:"notifyListeners method"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["@",(0,o.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/override-constant.html",children:"override"})]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"void notifyListeners\n()"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:'<span class="feature">override</span>'})}),"\n",(0,o.jsxs)(t.p,{children:['<p>Call all the registered listeners.</p>\n<p>Call this method whenever the object changes, to notify any clients the\nobject may have changed. Listeners that are added during this iteration\nwill not be visited. Listeners that are removed during this iteration will\nnot be visited after they are removed.</p>\n<p>Exceptions thrown by listeners will be caught and reported using\n<a href="https',":api",'.flutter.dev/flutter/foundation/FlutterError/reportError.html">FlutterError.reportError</a>.</p>\n<p>This method must not be called after <a href="../../view_model_widgets_view_models_custom_drawer_view_model/CustomDrawerViewModel/dispose.md">dispose</a> has been called.</p>\n<p>Surprising behavior can result when reentrantly removing a listener (e.g.\nin response to a notification) that has been registered multiple times.\nSee the discussion at <a href="https',":api",'.flutter.dev/flutter/foundation/ChangeNotifier/removeListener.html">removeListener</a>.</p>']}),"\n",(0,o.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"@override\nvoid notifyListeners() \\{\n  if (!_disposed) \\{\n    super.notifyListeners();\n  \\}\n\\}\n"})})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>n,x:()=>d});var r=i(296540);const o={},s=r.createContext(o);function n(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);