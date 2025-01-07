"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[771705],{266934:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions/encounteredExceptionOrError","title":"encounteredExceptionOrError method","description":"bool? encounteredExceptionOrError","source":"@site/docs/talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions/encounteredExceptionOrError.md","sourceDirName":"talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions","slug":"/talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions/encounteredExceptionOrError","permalink":"/docs/talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions/encounteredExceptionOrError","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions/encounteredExceptionOrError.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"emailAccountPresent property","permalink":"/docs/talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions/emailAccountPresent"},"next":{"title":"fetchOrgById method","permalink":"/docs/talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions/fetchOrgById"}}');var a=r(474848),o=r(28453);const s={},i="encounteredExceptionOrError method",c={},l=[{value:"Implementation",id:"implementation",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"encounteredexceptionorerror-method",children:"encounteredExceptionOrError method"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https:api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"}),"? encounteredExceptionOrError\n(",(0,a.jsx)(n.a,{href:"https:pub.dev/documentation/graphql/5.2.0-beta.4/graphql/OperationException-class.html",children:"OperationException"})," exception, {",(0,a.jsx)(n.a,{href:"https:api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"})," showSnackBar = true})"]}),"\n",(0,a.jsx)(n.p,{children:"<p>This function is used to check if any exceptions or error encountered. The return type is <code>boolean</code>.</p>\n<p><strong>params</strong>:</p>\n<ul>\n<li><code>exception</code>: OperationException which occur when calling for graphql post request</li>\n<li><code>showSnackBar</code>: Tell if the the place where this function is called wants a SnackBar on error</li>\n</ul>\n<p><strong>returns</strong>:</p>\n<ul>\n<li><code>bool?</code>: returns a bool whether or not their is error, can be null</li>\n</ul>"}),"\n",(0,a.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:'bool? encounteredExceptionOrError(\n  OperationException exception, \\{\n  bool showSnackBar = true,\n\\}) \\{\n  if server link is wrong.\n  if (exception.linkException != null) \\{\n    debugPrint(exception.linkException.toString());\n    if (showSnackBar) \\{\n      WidgetsBinding.instance.addPostFrameCallback(\n        (_) =\\> navigationService.showTalawaErrorSnackBar(\n          "Server not running/wrong url",\n          MessageType.info,\n        ),\n      );\n    \\}\n    return false;\n  \\}\n\n  looping through graphQL errors.\n  debugPrint(exception.graphqlErrors.toString());\n  for (int i = 0; i \\< exception.graphqlErrors.length; i++) \\{\n    if the error message is "Access Token has expired. Please refresh session.: Undefined location"\n    if (exception.graphqlErrors[i].message ==\n        refreshAccessTokenExpiredException.message) \\{\n      print(\'token refreshed\');\n      refreshAccessToken(userConfig.currentUser.refreshToken!).then(\n        (value) =\\> graphqlConfig\n            .getToken()\n            .then((value) =\\> databaseFunctions.init()),\n      );\n      print(\'client refreshed\');\n      return true;\n    \\}\n\n    if the error message is "User is not authenticated"\n    if (exception.graphqlErrors[i].message == userNotAuthenticated.message) \\{\n      print(\'client refreshed\');\n      refreshAccessToken(userConfig.currentUser.refreshToken!).then(\n        (value) =\\> graphqlConfig\n            .getToken()\n            .then((value) =\\> databaseFunctions.init()),\n      );\n      return true;\n    \\}\n\n    if the error message is "User not found"\n    if (exception.graphqlErrors[i].message == userNotFound.message) \\{\n      if (showSnackBar) \\{\n        WidgetsBinding.instance.addPostFrameCallback(\n          (_) =\\> navigationService.showTalawaErrorDialog(\n            "No account registered with this email",\n            MessageType.error,\n          ),\n        );\n      \\}\n      return false;\n    \\}\n\n    if the error message is "Membership Request already exists"\n    if (exception.graphqlErrors[i].message == memberRequestExist.message) \\{\n      if (showSnackBar) \\{\n        WidgetsBinding.instance.addPostFrameCallback(\n          (_) =\\> navigationService.showTalawaErrorDialog(\n            "Membership request already exist",\n            MessageType.error,\n          ),\n        );\n      \\}\n      return false;\n    \\}\n\n    if the error message is "Invalid credentials"\n    if (exception.graphqlErrors[i].message == wrongCredentials.message) \\{\n      if (showSnackBar) \\{\n        WidgetsBinding.instance.addPostFrameCallback(\n          (_) =\\> navigationService.showTalawaErrorDialog(\n            "Enter a valid password",\n            MessageType.error,\n          ),\n        );\n      \\}\n      return false;\n    \\}\n\n    if the error message is "Organization not found"\n    if (exception.graphqlErrors[i].message == organizationNotFound.message) \\{\n      if (showSnackBar) \\{\n        WidgetsBinding.instance.addPostFrameCallback(\n          (_) =\\> navigationService.showTalawaErrorDialog(\n            "Organization Not Found",\n            MessageType.error,\n          ),\n        );\n      \\}\n      return false;\n    \\}\n\n    if the error message is "Email address already exists"\n    if (exception.graphqlErrors[i].message == emailAccountPresent.message) \\{\n      if (showSnackBar) \\{\n        WidgetsBinding.instance.addPostFrameCallback(\n          (_) =\\> navigationService.showTalawaErrorDialog(\n            "Account with this email already registered",\n            MessageType.error,\n          ),\n        );\n      \\}\n      return false;\n    \\}\n    if (exception.graphqlErrors[i].message ==\n        notifFeatureNotInstalled.message) \\{\n      if (showSnackBar) \\{\n        WidgetsBinding.instance.addPostFrameCallback(\n          (_) =\\> navigationService.showTalawaErrorDialog(\n            "Notification Feature is not installed",\n            MessageType.error,\n          ),\n        );\n      \\}\n      return false;\n    \\}\n  \\}\n  if the error is unknown\n\n  WidgetsBinding.instance.addPostFrameCallback(\n    (_) =\\> navigationService.showTalawaErrorDialog(\n      "Something went wrong!",\n      MessageType.error,\n    ),\n  );\n  return false;\n\\}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>i});var t=r(296540);const a={},o=t.createContext(a);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);