"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[338555],{788450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>r});const i=JSON.parse('{"id":"talawa-mobile-docs/widgets_custom_list_tile/CustomListTile/build","title":"build method","description":"- @override","source":"@site/docs/talawa-mobile-docs/widgets_custom_list_tile/CustomListTile/build.md","sourceDirName":"talawa-mobile-docs/widgets_custom_list_tile/CustomListTile","slug":"/talawa-mobile-docs/widgets_custom_list_tile/CustomListTile/build","permalink":"/docs/talawa-mobile-docs/widgets_custom_list_tile/CustomListTile/build","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/widgets_custom_list_tile/CustomListTile/build.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"CustomListTile constructor","permalink":"/docs/talawa-mobile-docs/widgets_custom_list_tile/CustomListTile/"},"next":{"title":"index property","permalink":"/docs/talawa-mobile-docs/widgets_custom_list_tile/CustomListTile/"}}');var o=n(474848),l=n(28453);const s={},d="build method",a={},r=[{value:"Implementation",id:"implementation",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"build-method",children:"build method"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["@",(0,o.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/override-constant.html",children:"override"})]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https:api.flutter.dev/flutter/widgets/Widget-class.html",children:"Widget"})," build\n(",(0,o.jsx)(t.a,{href:"https:api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," context)"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:'<span class="feature">override</span>'})}),"\n",(0,o.jsxs)(t.p,{children:['<p>Describes the part of the user interface represented by this widget.</p>\n<p>The framework calls this method when this widget is inserted into the tree\nin a given <a href="https',":api",'.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a> and when the dependencies of this widget change\n(e.g., an <a href="https',":api",'.flutter.dev/flutter/widgets/InheritedWidget-class.html">InheritedWidget</a> referenced by this widget changes). This\nmethod can potentially be called in every frame and should not have any side\neffects beyond building a widget.</p>\n<p>The framework replaces the subtree below this widget with the widget\nreturned by this method, either by updating the existing subtree or by\nremoving the subtree and inflating a new subtree, depending on whether the\nwidget returned by this method can update the root of the existing\nsubtree, as determined by calling <a href="https',":api",'.flutter.dev/flutter/widgets/Widget/canUpdate.html">Widget.canUpdate</a>.</p>\n<p>Typically implementations return a newly created constellation of widgets\nthat are configured with information from this widget\'s constructor and\nfrom the given <a href="https',":api",'.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a>.</p>\n<p>The given <a href="https',":api",'.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a> contains information about the location in the\ntree at which this widget is being built. For example, the context\nprovides the set of inherited widgets for this location in the tree. A\ngiven widget might be built with multiple different <a href="https',":api",'.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a>\narguments over time if the widget is moved around the tree or if the\nwidget is inserted into the tree in multiple places at once.</p>\n<p>The implementation of this method must only depend on:</p>\n<ul>\n<li>the fields of the widget, which themselves must not change over time,\nand</li>\n<li>any ambient state obtained from the <code>context</code> using\n<a href="https',":api",'.flutter.dev/flutter/widgets/BuildContext/dependOnInheritedWidgetOfExactType.html">BuildContext.dependOnInheritedWidgetOfExactType</a>.</li>\n</ul>\n<p>If a widget\'s <a href="../../widgets_custom_list_tile/CustomListTile/build.md">build</a> method is to depend on anything else, use a\n<a href="https',":api",'.flutter.dev/flutter/widgets/StatefulWidget-class.html">StatefulWidget</a> instead.</p>\n<p>See also:</p>\n<ul>\n<li><a href="https',":api",'.flutter.dev/flutter/widgets/StatelessWidget-class.html">StatelessWidget</a>, which contains the discussion on performance considerations.</li>\n</ul>']}),"\n",(0,o.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"@override\nWidget build(BuildContext context) \\{\n  return InkWell(\n    checking wheather the tapped tile is of user or org.\n    onTap: () =\\> type == TileType.org\n        ? onTapOrgInfo!(orgInfo!)\n        : type == TileType.user\n            ? onTapUserInfo!()\n            ignore: avoid_dynamic_calls\n            : onTapOption!(),\n    child: Padding(\n      padding: const EdgeInsets.all(18.0),\n      child: Container(\n        decoration: BoxDecoration(\n          color: Colors.white,\n          borderRadius: BorderRadius.circular(20),\n        ),\n        height: 70,\n        child: Row(\n          children: [\n            Expanded(\n              flex: 3,\n              child: Padding(\n                padding: const EdgeInsets.symmetric(\n                  horizontal: 25,\n                ),\n                child: Text(\n                  type == TileType.org\n                      ? orgInfo!.name!\n                      : type == TileType.user\n                          ? '$\\{userInfo!.firstName!\\} $\\{userInfo!.lastName!\\}'\n                          : option!.title,\n                  style: type == TileType.org\n                      ? Theme.of(context)\n                          .textTheme\n                          .headlineSmall!\n                          .copyWith(fontSize: 18, color: Colors.black)\n                      : type == TileType.user\n                          ? Theme.of(context)\n                              .textTheme\n                              .titleLarge!\n                              .copyWith(fontSize: 18, color: Colors.black)\n                          : option!.trailingIconButton == null\n                              ? Theme.of(context)\n                                  .textTheme\n                                  .bodyMedium!\n                                  .copyWith(fontSize: 18, color: Colors.black)\n                              : Theme.of(context)\n                                  .textTheme\n                                  .headlineSmall!\n                                  .copyWith(\n                                    fontSize: 18,\n                                    color: Colors.black,\n                                  ),\n                ),\n              ),\n            ),\n            Expanded(\n              flex: 1,\n              child: type != TileType.user\n                  ? type == TileType.org\n                      ? Icon(\n                          orgInfo!.isPublic! ? Icons.lock_open : Icons.lock,\n                          color: orgInfo!.isPublic!\n                              ? const Color(0xFF34AD64)\n                              : const Color(0xffFABC57),\n                        )\n                      : option!.trailingIconButton ?? const SizedBox()\n                  : const SizedBox(),\n            ),\n          ],\n        ),\n      ),\n    ),\n  );\n\\}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>d});var i=n(296540);const o={},l=i.createContext(o);function s(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);