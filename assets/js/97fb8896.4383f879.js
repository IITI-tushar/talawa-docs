"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[21504],{33119:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(85893),o=n(11151);const a={},i="getOrgUrl method",l={id:"talawa-mobile-docs/services_graphql_config/GraphqlConfig/getOrgUrl",title:"getOrgUrl method",description:"void getOrgUrl",source:"@site/docs/talawa-mobile-docs/services_graphql_config/GraphqlConfig/getOrgUrl.md",sourceDirName:"talawa-mobile-docs/services_graphql_config/GraphqlConfig",slug:"/talawa-mobile-docs/services_graphql_config/GraphqlConfig/getOrgUrl",permalink:"/docs/talawa-mobile-docs/services_graphql_config/GraphqlConfig/getOrgUrl",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_graphql_config/GraphqlConfig/getOrgUrl.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"displayImgRoute property",permalink:"/docs/talawa-mobile-docs/services_graphql_config/GraphqlConfig/displayImgRoute"},next:{title:"getToken method",permalink:"/docs/talawa-mobile-docs/services_graphql_config/GraphqlConfig/getToken"}},s={},c=[{value:"Implementation",id:"implementation",level:2}];function g(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"getorgurl-method",children:"getOrgUrl method"})}),"\n",(0,r.jsx)(t.p,{children:"void getOrgUrl\n()"}),"\n",(0,r.jsx)(t.p,{children:"<p>This function is used to get the organization URL.</p>"}),"\n",(0,r.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-dart",children:"void getOrgUrl() \\{\n  final box = Hive.box('url');\n  final String? url = box.get(urlKey) as String?;\n  final String? imgUrl = box.get(imageUrlKey) as String?;\n  orgURI = url ?? ' ';\n  displayImgRoute = imgUrl ?? ' ';\n  httpLink = HttpLink(orgURI!);\n  clientToQuery();\n  authClient();\n\\}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var r=n(67294);const o={},a=r.createContext(o);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);