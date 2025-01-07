"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[79714],{535306:(a,t,e)=>{e.r(t),e.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"talawa-mobile-docs/utils_validators/Validator/validateLastName","title":"validateLastName method","description":"String? validateLastName","source":"@site/docs/talawa-mobile-docs/utils_validators/Validator/validateLastName.md","sourceDirName":"talawa-mobile-docs/utils_validators/Validator","slug":"/talawa-mobile-docs/utils_validators/Validator/validateLastName","permalink":"/docs/talawa-mobile-docs/utils_validators/Validator/validateLastName","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/utils_validators/Validator/validateLastName.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"validateFirstName method","permalink":"/docs/talawa-mobile-docs/utils_validators/Validator/validateFirstName"},"next":{"title":"validatePassword method","permalink":"/docs/talawa-mobile-docs/utils_validators/Validator/validatePassword"}}');var s=e(474848),l=e(28453);const i={},r="validateLastName method",o={},d=[{value:"Implementation",id:"implementation",level:2}];function c(a){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,l.R)(),...a.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"validatelastname-method",children:"validateLastName method"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),"? validateLastName\n(",(0,s.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," value)"]}),"\n",(0,s.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:'static String? validateLastName(String value) \\{\n  if (value.isEmpty) \\{\n    return \'Lastname must not be left blank.\';\n  \\}\n  ignore: unnecessary_raw_strings\n  const String pattern = r"(?=.*?[A-Za-z]).+";\n  final RegExp regex = RegExp(pattern);\n  if (!regex.hasMatch(value)) \\{\n    return "Invalid Lastname";\n  \\}\n  return null;\n\\}\n'})})]})}function m(a={}){const{wrapper:t}={...(0,l.R)(),...a.components};return t?(0,s.jsx)(t,{...a,children:(0,s.jsx)(c,{...a})}):c(a)}},28453:(a,t,e)=>{e.d(t,{R:()=>i,x:()=>r});var n=e(296540);const s={},l=n.createContext(s);function i(a){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof a?a(t):{...t,...a}}),[t,a])}function r(a){let t;return t=a.disableParentContext?"function"==typeof a.components?a.components(s):a.components||s:i(a.components),n.createElement(l.Provider,{value:t},a.children)}}}]);