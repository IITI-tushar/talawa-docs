"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[85375],{29423:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=a(85893),i=a(11151);const o={},s="gqlAuthMutation method",r={id:"talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions/gqlAuthMutation",title:"gqlAuthMutation method",description:"Future gqlAuthMutation",source:"@site/docs/talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions/gqlAuthMutation.md",sourceDirName:"talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions",slug:"/talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions/gqlAuthMutation",permalink:"/docs/talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions/gqlAuthMutation",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions/gqlAuthMutation.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"fetchOrgById method",permalink:"/docs/talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions/fetchOrgById"},next:{title:"gqlAuthQuery method",permalink:"/docs/talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions/gqlAuthQuery"}},u={},l=[{value:"Implementation",id:"implementation",level:2}];function c(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.header,{children:(0,n.jsx)(e.h1,{id:"gqlauthmutation-method",children:"gqlAuthMutation method"})}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"})," gqlAuthMutation\n(",(0,n.jsx)(e.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," mutation, {",(0,n.jsx)(e.a,{href:"https:api.flutter.dev/flutter/dart-core/Map-class.html",children:"Map"}),"<",(0,n.jsx)(e.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),", dynamic>? variables})"]}),"\n",(0,n.jsx)(e.p,{children:"<p>This function is used to run the graph-ql mutation for authenticated user.</p>\n<p><strong>params</strong>:</p>\n<ul>\n<li><code>mutation</code>: mutation is used to change/add/delete data in graphql, for more info read graphql docs</li>\n<li><code>variables</code>: variables to be passed with mutation</li>\n</ul>\n<p><strong>returns</strong>:</p>\n<ul>\n<li><code>Future<dynamic></code>: it returns Future of dynamic</li>\n</ul>"}),"\n",(0,n.jsx)(e.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-dart",children:"Future\\<dynamic\\> gqlAuthMutation(\n  String mutation, \\{\n  Map\\<String, dynamic\\>? variables,\n\\}) async \\{\n  final QueryResult result = await clientAuth.mutate(\n    MutationOptions(\n      document: gql(mutation),\n      variables: variables ?? \\<String, dynamic\\>\\{\\},\n    ),\n  );\n  if there is an error or exception in [result]\n  if (result.hasException) \\{\n    final exception = encounteredExceptionOrError(result.exception!);\n    if (exception!) \\{\n      gqlAuthMutation(mutation, variables: variables);\n    \\}\n  \\} else if (result.data != null && result.isConcrete) \\{\n    return result;\n  \\}\n  return null;\n\\}\n"})})]})}function d(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(c,{...t})}):c(t)}},11151:(t,e,a)=>{a.d(e,{Z:()=>r,a:()=>s});var n=a(67294);const i={},o=n.createContext(i);function s(t){const e=n.useContext(o);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:s(t.components),n.createElement(o.Provider,{value:e},t.children)}}}]);