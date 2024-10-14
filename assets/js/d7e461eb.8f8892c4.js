"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[55091],{63018:(a,t,e)=>{e.r(t),e.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var i=e(85893),l=e(11151);const n={},r="validateEmail method",o={id:"talawa-mobile-docs/utils_validators/Validator/validateEmail",title:"validateEmail method",description:"String? validateEmail",source:"@site/docs/talawa-mobile-docs/utils_validators/Validator/validateEmail.md",sourceDirName:"talawa-mobile-docs/utils_validators/Validator",slug:"/talawa-mobile-docs/utils_validators/Validator/validateEmail",permalink:"/docs/talawa-mobile-docs/utils_validators/Validator/validateEmail",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/utils_validators/Validator/validateEmail.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"Validator constructor",permalink:"/docs/talawa-mobile-docs/utils_validators/Validator/"},next:{title:"validateEventForm method",permalink:"/docs/talawa-mobile-docs/utils_validators/Validator/validateEventForm"}},d={},s=[{value:"Implementation",id:"implementation",level:2}];function c(a){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,l.a)(),...a.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"validateemail-method",children:"validateEmail method"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),"? validateEmail\n(",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," email)"]}),"\n",(0,i.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-dart",children:'static String? validateEmail(\n  String email,\n) \\{\n  If email is empty return.\n  if (email.isEmpty) \\{\n    return "Email must not be left blank";\n  \\}\n  const String pattern =\n      r"^[a-zA-Z0-9.!#$%&\'*+/=?^_`\\{|\\}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]\\{0,253\\}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]\\{0,253\\}[a-zA-Z0-9])?)*$";\n  final RegExp regex = RegExp(pattern);\n  if (!regex.hasMatch(email)) \\{\n    return \'Please enter a valid Email Address\';\n  \\}\n  return null;\n\\}\n'})})]})}function m(a={}){const{wrapper:t}={...(0,l.a)(),...a.components};return t?(0,i.jsx)(t,{...a,children:(0,i.jsx)(c,{...a})}):c(a)}},11151:(a,t,e)=>{e.d(t,{Z:()=>o,a:()=>r});var i=e(67294);const l={},n=i.createContext(l);function r(a){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof a?a(t):{...t,...a}}),[t,a])}function o(a){let t;return t=a.disableParentContext?"function"==typeof a.components?a.components(l):a.components||l:r(a.components),i.createElement(n.Provider,{value:t},a.children)}}}]);