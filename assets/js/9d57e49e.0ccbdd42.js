"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[99949],{462482:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"talawa-mobile-docs/view_model_pre_auth_view_models_signup_details_view_model/SignupDetailsViewModel/signUp","title":"signUp method","description":"Future&lt;void\\\\> signUp","source":"@site/docs/talawa-mobile-docs/view_model_pre_auth_view_models_signup_details_view_model/SignupDetailsViewModel/signUp.md","sourceDirName":"talawa-mobile-docs/view_model_pre_auth_view_models_signup_details_view_model/SignupDetailsViewModel","slug":"/talawa-mobile-docs/view_model_pre_auth_view_models_signup_details_view_model/SignupDetailsViewModel/signUp","permalink":"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_signup_details_view_model/SignupDetailsViewModel/signUp","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_pre_auth_view_models_signup_details_view_model/SignupDetailsViewModel/signUp.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"selectedOrganization property","permalink":"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_signup_details_view_model/SignupDetailsViewModel/selectedOrganization"},"next":{"title":"validate property","permalink":"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_signup_details_view_model/SignupDetailsViewModel/validate"}}');var a=i(474848),s=i(28453);const o={},r="signUp method",l={},d=[{value:"Implementation",id:"implementation",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"signup-method",children:"signUp method"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> signUp\n()"]}),"\n",(0,a.jsx)(n.p,{children:"<p>This function is used to sign up the user into the application by passing the data to database query.\nThe function uses <code>gqlNonAuthMutation</code> method provided by <code>databaseFunctions</code> services.</p>"}),"\n",(0,a.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"Future\\<void\\> signUp() async \\{\n  FocusScope.of(navigationService.navigatorKey.currentContext!).unfocus();\n  setState(ViewState.busy);\n  validate = AutovalidateMode.always;\n  setState(ViewState.idle);\n  if (formKey.currentState!.validate()) \\{\n    validate = AutovalidateMode.disabled;\n    navigationService\n        .pushDialog(const CustomProgressDialog(key: Key('SignUpProgress')));\n    databaseFunctions.init();\n    try \\{\n      final result = await databaseFunctions.gqlNonAuthMutation(\n        queries.registerUser(\n          firstName.text,\n          lastName.text,\n          email.text,\n          password.text,\n        ),\n      );\n      navigationService.pop();\n      if (result != null) \\{\n        final User signedInUser =\n            User.fromJson(result.data!['signUp'] as Map\\<String, dynamic\\>);\n        final bool userSaved = await userConfig.updateUser(signedInUser);\n        final bool tokenRefreshed = await graphqlConfig.getToken() as bool;\n        if user successfully saved and access token is also generated.\n        if (userSaved && tokenRefreshed) \\{\n          if the selected organization is public.\n          if (selectedOrganization.isPublic!) \\{\n            try \\{\n              final QueryResult result =\n                  await databaseFunctions.gqlAuthMutation(\n                queries.joinOrgById(selectedOrganization.id!),\n              ) as QueryResult;\n\n              final List\\<OrgInfo\\>? joinedOrg = (result\n                          .data!['joinPublicOrganization']\n                      ['joinedOrganizations'] as List\\<dynamic\\>?)\n                  ?.map((e) =\\> OrgInfo.fromJson(e as Map\\<String, dynamic\\>))\n                  .toList();\n              userConfig.updateUserJoinedOrg(joinedOrg!);\n              userConfig.saveCurrentOrgInHive(\n                userConfig.currentUser.joinedOrganizations![0],\n              );\n              navigationService.removeAllAndPush(\n                Routes.mainScreen,\n                Routes.splashScreen,\n                arguments:\n                    MainScreenArgs(mainScreenIndex: 0, fromSignUp: true),\n              );\n            \\} on Exception catch (e) \\{\n              print(e);\n              navigationService.showTalawaErrorSnackBar(\n                'SomeThing went wrong',\n                MessageType.error,\n              );\n            \\}\n          \\} else \\{\n            try \\{\n              final QueryResult result =\n                  await databaseFunctions.gqlAuthMutation(\n                queries.sendMembershipRequest(selectedOrganization.id!),\n              ) as QueryResult;\n\n              final OrgInfo membershipRequest = OrgInfo.fromJson(\n                result.data!['sendMembershipRequest']['organization']\n                    as Map\\<String, dynamic\\>,\n              );\n              userConfig.updateUserMemberRequestOrg([membershipRequest]);\n              navigationService.pop();\n              navigationService.removeAllAndPush(\n                Routes.waitingScreen,\n                Routes.splashScreen,\n              );\n            \\} on Exception catch (e) \\{\n              print(e);\n              navigationService.showTalawaErrorSnackBar(\n                'SomeThing went wrong',\n                MessageType.error,\n              );\n            \\}\n          \\}\n        \\}\n      \\}\n    \\} on Exception catch (e) \\{\n      print(e);\n      navigationService.showTalawaErrorSnackBar(\n        'SomeThing went wrong',\n        MessageType.error,\n      );\n    \\}\n  \\}\n\\}\n"})})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var t=i(296540);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);