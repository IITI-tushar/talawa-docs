"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[58577],{70133:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=n(85893),o=n(11151);const i={},s="fetchOrgById method",r={id:"talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions/fetchOrgById",title:"fetchOrgById method",description:"Future fetchOrgById",source:"@site/docs/talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions/fetchOrgById.md",sourceDirName:"talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions",slug:"/talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions/fetchOrgById",permalink:"/docs/talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions/fetchOrgById",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions/fetchOrgById.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"encounteredExceptionOrError method",permalink:"/docs/talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions/encounteredExceptionOrError"},next:{title:"gqlAuthMutation method",permalink:"/docs/talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions/gqlAuthMutation"}},c={},d=[{value:"Implementation",id:"implementation",level:2}];function u(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"fetchorgbyid-method",children:"fetchOrgById method"})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"})," fetchOrgById\n(",(0,a.jsx)(e.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," id)"]}),"\n",(0,a.jsx)(e.p,{children:"<p>This function fetch the organization using the <code>id</code> passed.</p>\n<p><strong>params</strong>:</p>\n<ul>\n<li><code>id</code>: id that identifies a particular org</li>\n</ul>\n<p><strong>returns</strong>:</p>\n<ul>\n<li><code>Future<dynamic></code>: it returns Future of dynamic</li>\n</ul>"}),"\n",(0,a.jsx)(e.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-dart",children:"Future\\<dynamic\\> fetchOrgById(String id) async \\{\n  final QueryResult result = await clientNonAuth\n      .mutate(MutationOptions(document: gql(_query.fetchOrgById(id))));\n  if there is an error or exception in [result]\n  if (result.hasException) \\{\n    final exception = encounteredExceptionOrError(result.exception!);\n    if (exception!) \\{\n      fetchOrgById(id);\n    \\}\n  \\} else if (result.data != null && result.isConcrete) \\{\n    return OrgInfo.fromJson(\n      ignore: collection_methods_unrelated_type\n      (result.data!['organizations'] as Map\\<String, dynamic\\>)[0]\n          as Map\\<String, dynamic\\>,\n    );\n  \\}\n  return false;\n\\}\n"})})]})}function l(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(u,{...t})}):u(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>r,a:()=>s});var a=n(67294);const o={},i=a.createContext(o);function s(t){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:s(t.components),a.createElement(i.Provider,{value:e},t.children)}}}]);