"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[451154],{82088:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var i=n(785893),a=n(511151);const r={},o="build method",d={id:"talawa-mobile-docs/widgets_custom_avatar/CustomAvatar/build",title:"build method",description:"- @override",source:"@site/docs/talawa-mobile-docs/widgets_custom_avatar/CustomAvatar/build.md",sourceDirName:"talawa-mobile-docs/widgets_custom_avatar/CustomAvatar",slug:"/talawa-mobile-docs/widgets_custom_avatar/CustomAvatar/build",permalink:"/docs/talawa-mobile-docs/widgets_custom_avatar/CustomAvatar/build",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/widgets_custom_avatar/CustomAvatar/build.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"CustomAvatar constructor",permalink:"/docs/talawa-mobile-docs/widgets_custom_avatar/CustomAvatar/"},next:{title:"cacheManager property",permalink:"/docs/talawa-mobile-docs/widgets_custom_avatar/CustomAvatar/cacheManager"}},s={},l=[{value:"Implementation",id:"implementation",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"build-method",children:"build method"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["@",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/override-constant.html",children:"override"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/widgets/Widget-class.html",children:"Widget"})," build\n(",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," context)"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:'<span class="feature">override</span>'})}),"\n",(0,i.jsxs)(t.p,{children:['<p>Describes the part of the user interface represented by this widget.</p>\n<p>The framework calls this method when this widget is inserted into the tree\nin a given <a href="https',":api",'.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a> and when the dependencies of this widget change\n(e.g., an <a href="https',":api",'.flutter.dev/flutter/widgets/InheritedWidget-class.html">InheritedWidget</a> referenced by this widget changes). This\nmethod can potentially be called in every frame and should not have any side\neffects beyond building a widget.</p>\n<p>The framework replaces the subtree below this widget with the widget\nreturned by this method, either by updating the existing subtree or by\nremoving the subtree and inflating a new subtree, depending on whether the\nwidget returned by this method can update the root of the existing\nsubtree, as determined by calling <a href="https',":api",'.flutter.dev/flutter/widgets/Widget/canUpdate.html">Widget.canUpdate</a>.</p>\n<p>Typically implementations return a newly created constellation of widgets\nthat are configured with information from this widget\'s constructor and\nfrom the given <a href="https',":api",'.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a>.</p>\n<p>The given <a href="https',":api",'.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a> contains information about the location in the\ntree at which this widget is being built. For example, the context\nprovides the set of inherited widgets for this location in the tree. A\ngiven widget might be built with multiple different <a href="https',":api",'.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a>\narguments over time if the widget is moved around the tree or if the\nwidget is inserted into the tree in multiple places at once.</p>\n<p>The implementation of this method must only depend on:</p>\n<ul>\n<li>the fields of the widget, which themselves must not change over time,\nand</li>\n<li>any ambient state obtained from the <code>context</code> using\n<a href="https',":api",'.flutter.dev/flutter/widgets/BuildContext/dependOnInheritedWidgetOfExactType.html">BuildContext.dependOnInheritedWidgetOfExactType</a>.</li>\n</ul>\n<p>If a widget\'s <a href="../../widgets_custom_avatar/CustomAvatar/build.md">build</a> method is to depend on anything else, use a\n<a href="https',":api",'.flutter.dev/flutter/widgets/StatefulWidget-class.html">StatefulWidget</a> instead.</p>\n<p>See also:</p>\n<ul>\n<li><a href="https',":api",'.flutter.dev/flutter/widgets/StatelessWidget-class.html">StatelessWidget</a>, which contains the discussion on performance considerations.</li>\n</ul>']}),"\n",(0,i.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-dart",children:"@override\nWidget build(BuildContext context) \\{\n  return isImageNull\n      creating the avatar with the icon-theme color when the image is null\n      ? CircleAvatar(\n          backgroundColor:\n              Theme.of(context).iconTheme.color!.withOpacity(0.2),\n          child: Center(\n            child: Text(\n              firstAlphabet!,\n              style: Theme.of(context)\n                  .textTheme\n                  .bodyMedium!\n                  .copyWith(fontSize: fontSize),\n            ),\n          ),\n        )\n      creating the avatar with the provided image\n      : CachedNetworkImage(\n          cacheManager: cacheManager,\n          imageBuilder: (context, imageProvider) \\{\n            return CircleAvatar(\n              backgroundColor:\n                  Theme.of(context).iconTheme.color!.withOpacity(0.2),\n              backgroundImage: imageProvider,\n            );\n          \\},\n          imageUrl: imageUrl!,\n          placeholder: (context, url) =\\> CircleAvatar(\n            child: Shimmer.fromColors(\n              baseColor: Colors.transparent,\n              highlightColor: Colors.white30,\n              child: const CircleAvatar(),\n            ),\n          ),\n          errorWidget: (context, url, error) =\\>\n              const CircleAvatar(child: Icon(Icons.error)),\n        );\n\\}\n"})})]})}function c(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},511151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>o});var i=n(667294);const a={},r=i.createContext(a);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);