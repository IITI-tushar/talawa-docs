"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[793844],{200292:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(785893),r=n(511151);const s={},i="gqlNonAuthQuery method",o={id:"talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions/gqlNonAuthQuery",title:"gqlNonAuthQuery method",description:"Future&lt;QueryResult&lt;Object?\\>?\\> gqlNonAuthQuery",source:"@site/docs/talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions/gqlNonAuthQuery.md",sourceDirName:"talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions",slug:"/talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions/gqlNonAuthQuery",permalink:"/docs/talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions/gqlNonAuthQuery",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions/gqlNonAuthQuery.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"gqlNonAuthMutation method",permalink:"/docs/talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions/gqlNonAuthMutation"},next:{title:"init method",permalink:"/docs/talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions/init"}},u={},l=[{value:"Implementation",id:"implementation",level:2}];function c(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"gqlnonauthquery-method",children:"gqlNonAuthQuery method"})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<",(0,a.jsx)(e.a,{href:"https:pub.dev/documentation/graphql/5.2.0-beta.4/graphql/QueryResult-class.html",children:"QueryResult"}),"<",(0,a.jsx)(e.a,{href:"https:api.flutter.dev/flutter/dart-core/Object-class.html",children:"Object"}),"?>?> gqlNonAuthQuery\n(",(0,a.jsx)(e.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," query, {",(0,a.jsx)(e.a,{href:"https:api.flutter.dev/flutter/dart-core/Map-class.html",children:"Map"}),"<",(0,a.jsx)(e.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),", dynamic>? variables})"]}),"\n",(0,a.jsx)(e.p,{children:"<p>This function is used to run the graph-ql query for the non signed-in user.</p>\n<p><strong>params</strong>:</p>\n<ul>\n<li><code>query</code>: query is used to fetch data in graphql, for more info read graphql docs</li>\n<li><code>variables</code>: variables to be passed with query</li>\n</ul>\n<p><strong>returns</strong>:</p>\n<ul>\n<li><code>Future<QueryResult<Object?>?></code>: it returns Future of QueryResult, contains all data</li>\n</ul>"}),"\n",(0,a.jsx)(e.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-dart",children:"Future\\<QueryResult\\<Object?\\>?\\> gqlNonAuthQuery(\n  String query, \\{\n  Map\\<String, dynamic\\>? variables,\n\\}) async \\{\n  final queryOptions = QueryOptions(\n    document: gql(query),\n    variables: variables ?? \\<String, dynamic\\>\\{\\},\n  );\n  final result = await clientNonAuth.query(queryOptions);\n  QueryResult? finalRes;\n  if there is an error or exception in [result]\n  if (result.hasException) \\{\n    final exception = encounteredExceptionOrError(result.exception!);\n    if (exception!) \\{\n      finalRes = await gqlNonAuthQuery(query, variables: variables);\n    \\}\n  \\} else if (result.data != null && result.isConcrete) \\{\n    return result;\n  \\}\n  return finalRes;\n\\}\n"})})]})}function d(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(c,{...t})}):c(t)}},511151:(t,e,n)=>{n.d(e,{Z:()=>o,a:()=>i});var a=n(667294);const r={},s=a.createContext(r);function i(t){const e=a.useContext(s);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:i(t.components),a.createElement(s.Provider,{value:e},t.children)}}}]);