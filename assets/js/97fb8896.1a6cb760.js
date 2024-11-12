"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[30786],{644851:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"talawa-mobile-docs/services_graphql_config/GraphqlConfig/getOrgUrl","title":"getOrgUrl method","description":"void getOrgUrl","source":"@site/docs/talawa-mobile-docs/services_graphql_config/GraphqlConfig/getOrgUrl.md","sourceDirName":"talawa-mobile-docs/services_graphql_config/GraphqlConfig","slug":"/talawa-mobile-docs/services_graphql_config/GraphqlConfig/getOrgUrl","permalink":"/docs/talawa-mobile-docs/services_graphql_config/GraphqlConfig/getOrgUrl","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_graphql_config/GraphqlConfig/getOrgUrl.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"displayImgRoute property","permalink":"/docs/talawa-mobile-docs/services_graphql_config/GraphqlConfig/displayImgRoute"},"next":{"title":"getToken method","permalink":"/docs/talawa-mobile-docs/services_graphql_config/GraphqlConfig/getToken"}}');var o=n(474848),a=n(28453);const i={},l="getOrgUrl method",s={},c=[{value:"Implementation",id:"implementation",level:2}];function g(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"getorgurl-method",children:"getOrgUrl method"})}),"\n",(0,o.jsx)(t.p,{children:"void getOrgUrl\n()"}),"\n",(0,o.jsx)(t.p,{children:"<p>This function is used to get the organization URL.</p>"}),"\n",(0,o.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"void getOrgUrl() \\{\n  final box = Hive.box('url');\n  final String? url = box.get(urlKey) as String?;\n  final String? imgUrl = box.get(imageUrlKey) as String?;\n  orgURI = url ?? ' ';\n  displayImgRoute = imgUrl ?? ' ';\n  httpLink = HttpLink(orgURI!);\n  clientToQuery();\n  authClient();\n\\}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(296540);const o={},a=r.createContext(o);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);