"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[731782],{744932:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"talawa-mobile-docs/models_events_event_model/Event/Event.fromJson","title":"Event.fromJson constructor","description":"Event.fromJson(Map&lt;String, dynamic\\\\> json)","source":"@site/docs/talawa-mobile-docs/models_events_event_model/Event/Event.fromJson.md","sourceDirName":"talawa-mobile-docs/models_events_event_model/Event","slug":"/talawa-mobile-docs/models_events_event_model/Event/Event.fromJson","permalink":"/docs/talawa-mobile-docs/models_events_event_model/Event/Event.fromJson","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/models_events_event_model/Event/Event.fromJson.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"Event constructor","permalink":"/docs/talawa-mobile-docs/models_events_event_model/Event/"},"next":{"title":"admins property","permalink":"/docs/talawa-mobile-docs/models_events_event_model/Event/admins"}}');var s=t(474848),a=t(28453);const r={},i="Event.fromJson constructor",l={},d=[{value:"Implementation",id:"implementation",level:2}];function c(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"eventfromjson-constructor",children:"Event.fromJson constructor"})}),"\n",(0,s.jsxs)(e.p,{children:["Event.fromJson(",(0,s.jsx)(e.a,{href:"https:api.flutter.dev/flutter/dart-core/Map-class.html",children:"Map"}),"<",(0,s.jsx)(e.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),", dynamic> json)"]}),"\n",(0,s.jsx)(e.h2,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-dart",children:"factory Event.fromJson(\n  Map\\<String, dynamic\\> json,\n) \\{\n  return Event(\n    id: json['_id'] as String,\n    title: json['title'] as String?,\n    description: json['description'] as String?,\n    attendees: json['attendees'] as String?,\n    location: json['location'] as String?,\n    longitude: json['longitude'] as double?,\n    latitude: json['latitude'] as double?,\n    recurring: json['recurring'] as bool?,\n    allDay: json['allDay'] as bool?,\n    startDate: json['startDate'] as String?,\n    endDate: json['endDate'] as String?,\n    startTime: json['startTime'] as String?,\n    endTime: json['endTime'] as String?,\n    recurrence: json['recurrence'] as String?,\n    isPublic: json['isPublic'] as bool?,\n    isRegistered: json['isRegistered'] as bool?,\n    isRegisterable: json['isRegisterable'] as bool?,\n    creator: json['creator'] == null\n        ? null\n        Creating a new User instance from a map structure.\n        : User.fromJson(\n            json['creator'] as Map\\<String, dynamic\\>,\n            fromOrg: true,\n          ),\n    organization: json['organization'] == null\n        ? null\n        Creating a new OrgInfo instance from a map structure.\n        : OrgInfo.fromJson(json['organization'] as Map\\<String, dynamic\\>),\n    admins: json['admins'] == null\n        ? null\n        : (json['admins'] as List\\<dynamic\\>?)\n            ?.map(\n              (e) =\\> User.fromJson(e as Map\\<String, dynamic\\>, fromOrg: true),\n            )\n            .toList(),\n    registrants: (json['registrants'] as List\\<dynamic\\>?)\n        ?.map((e) =\\> User.fromJson(e as Map\\<String, dynamic\\>, fromOrg: false))\n        .toList(),\n  );\n\\}\n"})})]})}function m(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>i});var o=t(296540);const s={},a=o.createContext(s);function r(n){const e=o.useContext(a);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),o.createElement(a.Provider,{value:e},n.children)}}}]);