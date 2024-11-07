"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[524906],{381033:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>r});var i=n(785893),s=n(511151);const l={},o="fetchList method",c={id:"talawa-mobile-docs/plugins_fetch_plugin_list/FetchPluginList/fetchList",title:"fetchList method",description:"Future&lt;void\\> fetchList",source:"@site/docs/talawa-mobile-docs/plugins_fetch_plugin_list/FetchPluginList/fetchList.md",sourceDirName:"talawa-mobile-docs/plugins_fetch_plugin_list/FetchPluginList",slug:"/talawa-mobile-docs/plugins_fetch_plugin_list/FetchPluginList/fetchList",permalink:"/docs/talawa-mobile-docs/plugins_fetch_plugin_list/FetchPluginList/fetchList",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/plugins_fetch_plugin_list/FetchPluginList/fetchList.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"box property",permalink:"/docs/talawa-mobile-docs/plugins_fetch_plugin_list/FetchPluginList/box"},next:{title:"FetchPluginList class",permalink:"/docs/talawa-mobile-docs/plugins_fetch_plugin_list/FetchPluginList-class"}},a={},r=[{value:"Implementation",id:"implementation",level:2}];function u(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"fetchlist-method",children:"fetchList method"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> fetchList\n()"]}),"\n",(0,i.jsx)(e.p,{children:"<p>Fetches plugins from server and stores them in Hive <code>pluginBox</code>.</p>\n<p><strong>params</strong>:\nNone</p>\n<p><strong>returns</strong>:</p>\n<ul>\n<li><code>Future<void></code>: it returns Future of void</li>\n</ul>"}),"\n",(0,i.jsx)(e.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-dart",children:"Future\\<void\\> fetchList() async \\{\n  late final GraphQLClient client = graphqlConfig.clientToQuery();\n  final QueryResult result = await client.query(\n    QueryOptions(\n      document: gql(queries.getPluginsList()),\n    ),\n  );\n  box = Hive.box('pluginBox');\n  box.put('plugins', result.data![\"getPlugins\"]);\n\\}\n"})})]})}function d(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(u,{...t})}):u(t)}},511151:(t,e,n)=>{n.d(e,{Z:()=>c,a:()=>o});var i=n(667294);const s={},l=i.createContext(s);function o(t){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:o(t.components),i.createElement(l.Provider,{value:e},t.children)}}}]);