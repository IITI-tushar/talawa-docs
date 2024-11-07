"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[460717],{228484:(a,t,e)=>{e.r(t),e.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=e(785893),n=e(511151);const o={},r="validatePassword method",i={id:"talawa-mobile-docs/utils_validators/Validator/validatePassword",title:"validatePassword method",description:"String? validatePassword",source:"@site/docs/talawa-mobile-docs/utils_validators/Validator/validatePassword.md",sourceDirName:"talawa-mobile-docs/utils_validators/Validator",slug:"/talawa-mobile-docs/utils_validators/Validator/validatePassword",permalink:"/docs/talawa-mobile-docs/utils_validators/Validator/validatePassword",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/utils_validators/Validator/validatePassword.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"validateLastName method",permalink:"/docs/talawa-mobile-docs/utils_validators/Validator/validateLastName"},next:{title:"validatePasswordConfirm method",permalink:"/docs/talawa-mobile-docs/utils_validators/Validator/validatePasswordConfirm"}},d={},l=[{value:"Implementation",id:"implementation",level:2}];function c(a){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,n.a)(),...a.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"validatepassword-method",children:"validatePassword method"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),"? validatePassword\n(",(0,s.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," password)"]}),"\n",(0,s.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:'static String? validatePassword(\n  String password,\n) \\{\n  If password is empty return.\n  if (password.isEmpty) \\{\n    return "Password must not be left blank";\n  \\}\n  const String pattern =\n      r\'^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#\\$&*%^~.]).\\{8,\\}$\';\n  final RegExp regExp = RegExp(pattern);\n\n  Regex for no spaces allowed\n  const String noSpaces = r\'^\\S+$\';\n  final RegExp noSpaceRegex = RegExp(noSpaces);\n\n  if (!noSpaceRegex.hasMatch(password)) \\{\n    return "Password must not contain spaces";\n  \\}\n  if (!regExp.hasMatch(password)) \\{\n    return "Your password must be at least 8 characters long, contain at least one numeric, one uppercase and one lowercase letters and one special character (@,#,\\$,etc.)";\n  \\}\n\n  return null;\n\\}\n'})})]})}function p(a={}){const{wrapper:t}={...(0,n.a)(),...a.components};return t?(0,s.jsx)(t,{...a,children:(0,s.jsx)(c,{...a})}):c(a)}},511151:(a,t,e)=>{e.d(t,{Z:()=>i,a:()=>r});var s=e(667294);const n={},o=s.createContext(n);function r(a){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof a?a(t):{...t,...a}}),[t,a])}function i(a){let t;return t=a.disableParentContext?"function"==typeof a.components?a.components(n):a.components||n:r(a.components),s.createElement(o.Provider,{value:t},a.children)}}}]);