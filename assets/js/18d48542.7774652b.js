"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[44286],{16486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var a=n(85893),i=n(11151);const o={},l="authClient method",r={id:"talawa-mobile-docs/services_graphql_config/GraphqlConfig/authClient",title:"authClient method",description:"GraphQLClient authClient",source:"@site/docs/talawa-mobile-docs/services_graphql_config/GraphqlConfig/authClient.md",sourceDirName:"talawa-mobile-docs/services_graphql_config/GraphqlConfig",slug:"/talawa-mobile-docs/services_graphql_config/GraphqlConfig/authClient",permalink:"/docs/talawa-mobile-docs/services_graphql_config/GraphqlConfig/authClient",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_graphql_config/GraphqlConfig/authClient.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"GraphqlConfig constructor",permalink:"/docs/talawa-mobile-docs/services_graphql_config/GraphqlConfig/"},next:{title:"clientToQuery method",permalink:"/docs/talawa-mobile-docs/services_graphql_config/GraphqlConfig/clientToQuery"}},c={},s=[{value:"Implementation",id:"implementation",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"authclient-method",children:"authClient method"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https:pub.dev/documentation/graphql/5.2.0-beta.4/graphql/GraphQLClient-class.html",children:"GraphQLClient"})," authClient\n()"]}),"\n",(0,a.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:"GraphQLClient authClient() \\{\n  final AuthLink authLink = AuthLink(getToken: () async =\\> 'Bearer $token');\n  final Link finalAuthLink = authLink.concat(httpLink);\n  return GraphQLClient(\n    cache: GraphQLCache(partialDataPolicy: PartialDataCachePolicy.accept),\n    link: finalAuthLink,\n  );\n\\}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>l});var a=n(67294);const i={},o=a.createContext(i);function l(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);