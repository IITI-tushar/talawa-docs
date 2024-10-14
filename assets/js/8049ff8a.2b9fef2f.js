"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[88594],{97693:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>_,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=o(85893),i=o(11151);const a={},r="fetchMoreHelper method",l={id:"talawa-mobile-docs/view_model_pre_auth_view_models_select_organization_view_model/SelectOrganizationViewModel/fetchMoreHelper",title:"fetchMoreHelper method",description:"void fetchMoreHelper",source:"@site/docs/talawa-mobile-docs/view_model_pre_auth_view_models_select_organization_view_model/SelectOrganizationViewModel/fetchMoreHelper.md",sourceDirName:"talawa-mobile-docs/view_model_pre_auth_view_models_select_organization_view_model/SelectOrganizationViewModel",slug:"/talawa-mobile-docs/view_model_pre_auth_view_models_select_organization_view_model/SelectOrganizationViewModel/fetchMoreHelper",permalink:"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_select_organization_view_model/SelectOrganizationViewModel/fetchMoreHelper",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_pre_auth_view_models_select_organization_view_model/SelectOrganizationViewModel/fetchMoreHelper.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"controller property",permalink:"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_select_organization_view_model/SelectOrganizationViewModel/controller"},next:{title:"initialise method",permalink:"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_select_organization_view_model/SelectOrganizationViewModel/initialise"}},s={},c=[{value:"Implementation",id:"implementation",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"fetchmorehelper-method",children:"fetchMoreHelper method"})}),"\n",(0,n.jsxs)(t.p,{children:["void fetchMoreHelper\n(",(0,n.jsx)(t.a,{href:"https:pub.dev/documentation/graphql_flutter/5.2.0-beta.5/graphql_flutter/FetchMore.html",children:"FetchMore"}),"<",(0,n.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Object-class.html",children:"Object"}),"?> fetchMore, ",(0,n.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/List-class.html",children:"List"})," organizations)"]}),"\n",(0,n.jsx)(t.p,{children:"<p>This function fetch more option.</p>"}),"\n",(0,n.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-dart",children:'void fetchMoreHelper(FetchMore fetchMore, List organizations) \\{\n  fetchMore(\n    FetchMoreOptions(\n      variables: \\{\n        "first": organizations.length + 15,\n        "skip": organizations.length,\n      \\},\n      updateQuery: (existingOrganizations, newOrganizations) \\{\n        return \\{\n          \'organizationsConnection\': [\n            ...existingOrganizations!["organizationsConnection"],\n            ...newOrganizations![\'organizationsConnection\'],\n          ],\n        \\};\n      \\},\n    ),\n  );\n\\}\n'})})]})}function _(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>l,a:()=>r});var n=o(67294);const i={},a=n.createContext(i);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);