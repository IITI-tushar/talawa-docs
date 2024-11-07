"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[775805],{584723:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>_,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var r=o(785893),s=o(511151);const n={},i="removeUserFromList method",a={id:"talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/removeUserFromList",title:"removeUserFromList method",description:"void removeUserFromList",source:"@site/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/removeUserFromList.md",sourceDirName:"talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel",slug:"/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/removeUserFromList",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/removeUserFromList",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/removeUserFromList.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"removeImage method",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/removeImage"},next:{title:"selectedMembers property",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/selectedMembers"}},d={},l=[{value:"Implementation",id:"implementation",level:2}];function m(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"removeuserfromlist-method",children:"removeUserFromList method"})}),"\n",(0,r.jsxs)(t.p,{children:["void removeUserFromList\n({required ",(0,r.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," userId})"]}),"\n",(0,r.jsx)(t.p,{children:"<p>This function is used to remove a user from user's list.</p>\n<p><strong>params</strong>:</p>\n<ul>\n<li><code>userId</code>: id of the user that need to be removed.</li>\n</ul>\n<p><strong>returns</strong>:\nNone</p>"}),"\n",(0,r.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-dart",children:"void removeUserFromList(\\{required String userId\\}) \\{\n  _selectedMembers.removeWhere((user) =\\> user.id == userId);\n  _memberCheckedMap[userId] = false;\n\n  notifyListeners();\n\\}\n"})})]})}function _(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},511151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>i});var r=o(667294);const s={},n=r.createContext(s);function i(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);