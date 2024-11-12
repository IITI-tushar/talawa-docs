"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[953626],{34398:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"talawa-mobile-docs/plugins_talawa_plugin_provider/TalawaPluginProvider/checkFromPluginList","title":"checkFromPluginList method","description":"bool checkFromPluginList","source":"@site/docs/talawa-mobile-docs/plugins_talawa_plugin_provider/TalawaPluginProvider/checkFromPluginList.md","sourceDirName":"talawa-mobile-docs/plugins_talawa_plugin_provider/TalawaPluginProvider","slug":"/talawa-mobile-docs/plugins_talawa_plugin_provider/TalawaPluginProvider/checkFromPluginList","permalink":"/docs/talawa-mobile-docs/plugins_talawa_plugin_provider/TalawaPluginProvider/checkFromPluginList","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/plugins_talawa_plugin_provider/TalawaPluginProvider/checkFromPluginList.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"build method","permalink":"/docs/talawa-mobile-docs/plugins_talawa_plugin_provider/TalawaPluginProvider/build"},"next":{"title":"child property","permalink":"/docs/talawa-mobile-docs/plugins_talawa_plugin_provider/TalawaPluginProvider/child"}}');var a=i(474848),t=i(28453);const o={},r="checkFromPluginList method",s={},c=[{value:"Implementation",id:"implementation",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"checkfrompluginlist-method",children:"checkFromPluginList method"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https:api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"})," checkFromPluginList\n()"]}),"\n",(0,a.jsx)(n.p,{children:"<p>return <code>bool</code> decides the final visibility of the verifying from database and current OrgId</p>"}),"\n",(0,a.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:'bool checkFromPluginList() \\{\n  final UserConfig userConfig = locator\\<UserConfig\\>();\n  final Box box;\n  bool res = false;\n  box = Hive.box(\'pluginBox\');\n  var pluginList = box.get(\'plugins\');\n  pluginList ??= []; if null then make it  []\n\n  mapping over the list from the server\n  pluginList\n      .map(\n        (plugin) =\\> \\{\n          if (plugin["pluginName"] == pluginName)\n            \\{\n              if (plugin["pluginInstallStatus"] as bool)\n                \\{\n                  res = plugin["pluginInstallStatus"] as bool ||\n                      plugin["installedOrgs"]\n                          .contains(userConfig.currentOrg.id) as bool\n                \\}\n            \\}\n        \\},\n      )\n      .toList();\n  return res;\n\\}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var l=i(296540);const a={},t=l.createContext(a);function o(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);