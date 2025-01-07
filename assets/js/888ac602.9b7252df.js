"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[334895],{146835:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>d,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"talawa-mobile-docs/views_after_auth_screens_chat_direct_chats/DirectChats/build","title":"build method","description":"- @override","source":"@site/docs/talawa-mobile-docs/views_after_auth_screens_chat_direct_chats/DirectChats/build.md","sourceDirName":"talawa-mobile-docs/views_after_auth_screens_chat_direct_chats/DirectChats","slug":"/talawa-mobile-docs/views_after_auth_screens_chat_direct_chats/DirectChats/build","permalink":"/docs/talawa-mobile-docs/views_after_auth_screens_chat_direct_chats/DirectChats/build","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/views_after_auth_screens_chat_direct_chats/DirectChats/build.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"DirectChats constructor","permalink":"/docs/talawa-mobile-docs/views_after_auth_screens_chat_direct_chats/DirectChats/"},"next":{"title":"DirectChats class","permalink":"/docs/talawa-mobile-docs/views_after_auth_screens_chat_direct_chats/DirectChats-class"}}');var a=i(474848),s=i(28453);const d={},r="build method",l={},h=[{value:"Implementation",id:"implementation",level:2}];function o(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"build-method",children:"build method"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["@",(0,a.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/override-constant.html",children:"override"})]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https:api.flutter.dev/flutter/widgets/Widget-class.html",children:"Widget"})," build\n(",(0,a.jsx)(t.a,{href:"https:api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," context)"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:'<span class="feature">override</span>'})}),"\n",(0,a.jsxs)(t.p,{children:['<p>Describes the part of the user interface represented by this widget.</p>\n<p>The framework calls this method when this widget is inserted into the tree\nin a given <a href="https',":api",'.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a> and when the dependencies of this widget change\n(e.g., an <a href="https',":api",'.flutter.dev/flutter/widgets/InheritedWidget-class.html">InheritedWidget</a> referenced by this widget changes). This\nmethod can potentially be called in every frame and should not have any side\neffects beyond building a widget.</p>\n<p>The framework replaces the subtree below this widget with the widget\nreturned by this method, either by updating the existing subtree or by\nremoving the subtree and inflating a new subtree, depending on whether the\nwidget returned by this method can update the root of the existing\nsubtree, as determined by calling <a href="https',":api",'.flutter.dev/flutter/widgets/Widget/canUpdate.html">Widget.canUpdate</a>.</p>\n<p>Typically implementations return a newly created constellation of widgets\nthat are configured with information from this widget\'s constructor and\nfrom the given <a href="https',":api",'.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a>.</p>\n<p>The given <a href="https',":api",'.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a> contains information about the location in the\ntree at which this widget is being built. For example, the context\nprovides the set of inherited widgets for this location in the tree. A\ngiven widget might be built with multiple different <a href="https',":api",'.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a>\narguments over time if the widget is moved around the tree or if the\nwidget is inserted into the tree in multiple places at once.</p>\n<p>The implementation of this method must only depend on:</p>\n<ul>\n<li>the fields of the widget, which themselves must not change over time,\nand</li>\n<li>any ambient state obtained from the <code>context</code> using\n<a href="https',":api",'.flutter.dev/flutter/widgets/BuildContext/dependOnInheritedWidgetOfExactType.html">BuildContext.dependOnInheritedWidgetOfExactType</a>.</li>\n</ul>\n<p>If a widget\'s <a href="../../views_after_auth_screens_chat_direct_chats/DirectChats/build.md">build</a> method is to depend on anything else, use a\n<a href="https',":api",'.flutter.dev/flutter/widgets/StatefulWidget-class.html">StatefulWidget</a> instead.</p>\n<p>See also:</p>\n<ul>\n<li><a href="https',":api",'.flutter.dev/flutter/widgets/StatelessWidget-class.html">StatelessWidget</a>, which contains the discussion on performance considerations.</li>\n</ul>']}),"\n",(0,a.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:"@override\nWidget build(BuildContext context) \\{\n  return BaseView\\<DirectChatViewModel\\>(\n    onModelReady: (model) =\\> model.initialise(),\n    builder: (context, model, child) \\{\n      return ListView.builder(\n        key: model.listKey,\n        itemCount: model.chats.length,\n        itemBuilder: (context, index) \\{\n          return ChatTile(\n            chat: model.chats[index],\n            model: model,\n          );\n        \\},\n      );\n    \\},\n  );\n\\}\n"})})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>d,x:()=>r});var n=i(296540);const a={},s=n.createContext(a);function d(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);