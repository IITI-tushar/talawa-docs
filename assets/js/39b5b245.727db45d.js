"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[111923],{51618:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var t=n(785893),i=n(511151);const a={},o="sendMembershipRequest method",r={id:"talawa-mobile-docs/view_model_access_request_view_model/AccessScreenViewModel/sendMembershipRequest",title:"sendMembershipRequest method",description:"Future&lt;void\\> sendMembershipRequest",source:"@site/docs/talawa-mobile-docs/view_model_access_request_view_model/AccessScreenViewModel/sendMembershipRequest.md",sourceDirName:"talawa-mobile-docs/view_model_access_request_view_model/AccessScreenViewModel",slug:"/talawa-mobile-docs/view_model_access_request_view_model/AccessScreenViewModel/sendMembershipRequest",permalink:"/docs/talawa-mobile-docs/view_model_access_request_view_model/AccessScreenViewModel/sendMembershipRequest",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_access_request_view_model/AccessScreenViewModel/sendMembershipRequest.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"selectedOrganization property",permalink:"/docs/talawa-mobile-docs/view_model_access_request_view_model/AccessScreenViewModel/selectedOrganization"},next:{title:"AccessScreenViewModel class",permalink:"/docs/talawa-mobile-docs/view_model_access_request_view_model/AccessScreenViewModel-class"}},c={},d=[{value:"Implementation",id:"implementation",level:2}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"sendmembershiprequest-method",children:"sendMembershipRequest method"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> sendMembershipRequest\n()"]}),"\n",(0,t.jsx)(s.h2,{id:"implementation",children:"Implementation"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-dart",children:"Future\\<void\\> sendMembershipRequest() async \\{\n  TODO: Implement Message arg for below function\n  final result = await databaseFunctions.gqlAuthMutation(\n    queries.sendMembershipRequest(selectedOrganization.id!),\n  );\n  if (result != null) \\{\n    final OrgInfo membershipRequest = OrgInfo.fromJson(\n      (((result as QueryResult).data!)['sendMembershipRequest']\n          as Map\\<String, dynamic\\>)['organization'] as Map\\<String, dynamic\\>,\n    );\n    userConfig.updateUserMemberRequestOrg([membershipRequest]);\n    if (userConfig.currentUser.joinedOrganizations!.isEmpty) \\{\n      navigationService.removeAllAndPush(\n        Routes.waitingScreen,\n        Routes.splashScreen,\n      );\n    \\} else \\{\n      navigationService.pop();\n      navigationService.showTalawaErrorSnackBar(\n        'Join in request sent to $\\{selectedOrganization.name\\} successfully',\n        MessageType.info,\n      );\n    \\}\n  \\}\n\\}\n"})})]})}function u(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},511151:(e,s,n)=>{n.d(s,{Z:()=>r,a:()=>o});var t=n(667294);const i={},a=t.createContext(i);function o(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);