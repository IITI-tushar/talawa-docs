"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[231905],{357455:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var n=i(785893),o=i(511151);const l={},a="initialise method",r={id:"talawa-mobile-docs/view_model_pre_auth_view_models_set_url_view_model/SetUrlViewModel/initialise",title:"initialise method",description:"void initialise",source:"@site/docs/talawa-mobile-docs/view_model_pre_auth_view_models_set_url_view_model/SetUrlViewModel/initialise.md",sourceDirName:"talawa-mobile-docs/view_model_pre_auth_view_models_set_url_view_model/SetUrlViewModel",slug:"/talawa-mobile-docs/view_model_pre_auth_view_models_set_url_view_model/SetUrlViewModel/initialise",permalink:"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_set_url_view_model/SetUrlViewModel/initialise",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_pre_auth_view_models_set_url_view_model/SetUrlViewModel/initialise.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"imageUrlKey constant",permalink:"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_set_url_view_model/SetUrlViewModel/imageUrlKey-constant"},next:{title:"orgId property",permalink:"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_set_url_view_model/SetUrlViewModel/orgId"}},s={},d=[{value:"Implementation",id:"implementation",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"initialise-method",children:"initialise method"})}),"\n",(0,n.jsxs)(t.p,{children:["void initialise\n({",(0,n.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," inviteUrl = ''})"]}),"\n",(0,n.jsx)(t.p,{children:"<p>This function initialises the variables.</p>\n<p><strong>params</strong>:</p>\n<ul>\n<li><code>inviteUrl</code>: url</li>\n</ul>\n<p><strong>returns</strong>:\nNone</p>"}),"\n",(0,n.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-dart",children:"void initialise(\\{String inviteUrl = ''\\}) \\{\n  final uri = inviteUrl;\n  if (uri.isNotEmpty) \\{\n    assigning the invite server url to the url text controller.\n    url.text = uri;\n    final box = Hive.box('url');\n    box.put(urlKey, uri);\n    box.put(imageUrlKey, \"$uri/talawa/\");\n    graphqlConfig.getOrgUrl();\n  \\}\n\n  greeting message.\n  greeting = [\n    \\{\n      'text': 'Join ',\n      'textStyle': Theme.of(navigationService.navigatorKey.currentContext!)\n          .textTheme\n          .titleLarge!\n          .copyWith(fontSize: 24, fontWeight: FontWeight.w700)\n    \\},\n    \\{\n      'text': 'and ',\n      'textStyle': Theme.of(navigationService.navigatorKey.currentContext!)\n          .textTheme\n          .headlineSmall\n    \\},\n    \\{\n      'text': 'Collaborate ',\n      'textStyle': Theme.of(navigationService.navigatorKey.currentContext!)\n          .textTheme\n          .titleLarge!\n          .copyWith(fontSize: 24, fontWeight: FontWeight.w700)\n    \\},\n    \\{\n      'text': 'with your ',\n      'textStyle': Theme.of(navigationService.navigatorKey.currentContext!)\n          .textTheme\n          .headlineSmall\n    \\},\n    \\{\n      'text': 'Organizations',\n      'textStyle': Theme.of(navigationService.navigatorKey.currentContext!)\n          .textTheme\n          .headlineSmall!\n          .copyWith(fontSize: 24, color: const Color(0xFF4285F4))\n    \\},\n  ];\n  notifyListeners();\n\\}\n"})})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},511151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>a});var n=i(667294);const o={},l=n.createContext(o);function a(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);