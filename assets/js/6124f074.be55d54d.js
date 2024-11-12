"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[855521],{340162:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"talawa-mobile-docs/widgets_rich_text/CustomRichText/build","title":"build method","description":"- @override","source":"@site/docs/talawa-mobile-docs/widgets_rich_text/CustomRichText/build.md","sourceDirName":"talawa-mobile-docs/widgets_rich_text/CustomRichText","slug":"/talawa-mobile-docs/widgets_rich_text/CustomRichText/build","permalink":"/docs/talawa-mobile-docs/widgets_rich_text/CustomRichText/build","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/widgets_rich_text/CustomRichText/build.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"CustomRichText constructor","permalink":"/docs/talawa-mobile-docs/widgets_rich_text/CustomRichText/"},"next":{"title":"words property","permalink":"/docs/talawa-mobile-docs/widgets_rich_text/CustomRichText/words"}}');var s=i(474848),d=i(28453);const a={},r="build method",l={},o=[{value:"Implementation",id:"implementation",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"build-method",children:"build method"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["@",(0,s.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/override-constant.html",children:"override"})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https:api.flutter.dev/flutter/widgets/Widget-class.html",children:"Widget"})," build\n(",(0,s.jsx)(t.a,{href:"https:api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," context)"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:'<span class="feature">override</span>'})}),"\n",(0,s.jsxs)(t.p,{children:['<p>Describes the part of the user interface represented by this widget.</p>\n<p>The framework calls this method when this widget is inserted into the tree\nin a given <a href="https',":api",'.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a> and when the dependencies of this widget change\n(e.g., an <a href="https',":api",'.flutter.dev/flutter/widgets/InheritedWidget-class.html">InheritedWidget</a> referenced by this widget changes). This\nmethod can potentially be called in every frame and should not have any side\neffects beyond building a widget.</p>\n<p>The framework replaces the subtree below this widget with the widget\nreturned by this method, either by updating the existing subtree or by\nremoving the subtree and inflating a new subtree, depending on whether the\nwidget returned by this method can update the root of the existing\nsubtree, as determined by calling <a href="https',":api",'.flutter.dev/flutter/widgets/Widget/canUpdate.html">Widget.canUpdate</a>.</p>\n<p>Typically implementations return a newly created constellation of widgets\nthat are configured with information from this widget\'s constructor and\nfrom the given <a href="https',":api",'.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a>.</p>\n<p>The given <a href="https',":api",'.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a> contains information about the location in the\ntree at which this widget is being built. For example, the context\nprovides the set of inherited widgets for this location in the tree. A\ngiven widget might be built with multiple different <a href="https',":api",'.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a>\narguments over time if the widget is moved around the tree or if the\nwidget is inserted into the tree in multiple places at once.</p>\n<p>The implementation of this method must only depend on:</p>\n<ul>\n<li>the fields of the widget, which themselves must not change over time,\nand</li>\n<li>any ambient state obtained from the <code>context</code> using\n<a href="https',":api",'.flutter.dev/flutter/widgets/BuildContext/dependOnInheritedWidgetOfExactType.html">BuildContext.dependOnInheritedWidgetOfExactType</a>.</li>\n</ul>\n<p>If a widget\'s <a href="../../widgets_rich_text/CustomRichText/build.md">build</a> method is to depend on anything else, use a\n<a href="https',":api",'.flutter.dev/flutter/widgets/StatefulWidget-class.html">StatefulWidget</a> instead.</p>\n<p>See also:</p>\n<ul>\n<li><a href="https',":api",'.flutter.dev/flutter/widgets/StatelessWidget-class.html">StatelessWidget</a>, which contains the discussion on performance considerations.</li>\n</ul>']}),"\n",(0,s.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"@override\nWidget build(BuildContext context) \\{\n  return RichText(\n    textAlign: TextAlign.start,\n    text: TextSpan(\n      text:\n          \"$\\{AppLocalizations.of(context)!.strictTranslate(words[0]['text'].toString().trim())\\} \",\n      style: words[0]['textStyle'] as TextStyle,\n      children: List.generate(\n        words.length - 1,\n        (index) =\\> TextSpan(\n          text:\n              \"$\\{AppLocalizations.of(context)!.strictTranslate(words[index + 1]['text'].toString().trim())\\} \",\n          style: words[index + 1]['textStyle'] as TextStyle,\n        ),\n      ),\n    ),\n  );\n\\}\n"})})]})}function c(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>r});var n=i(296540);const s={},d=n.createContext(s);function a(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);