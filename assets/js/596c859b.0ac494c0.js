"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[896388],{410145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>v,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"talawa-mobile-docs/services_event_service/EventService/deleteEvent","title":"deleteEvent method","description":"Future deleteEvent","source":"@site/docs/talawa-mobile-docs/services_event_service/EventService/deleteEvent.md","sourceDirName":"talawa-mobile-docs/services_event_service/EventService","slug":"/talawa-mobile-docs/services_event_service/EventService/deleteEvent","permalink":"/docs/talawa-mobile-docs/services_event_service/EventService/deleteEvent","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_event_service/EventService/deleteEvent.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"EventService constructor","permalink":"/docs/talawa-mobile-docs/services_event_service/EventService/"},"next":{"title":"dispose method","permalink":"/docs/talawa-mobile-docs/services_event_service/EventService/dispose"}}');var r=n(474848),i=n(28453);const o={},a="deleteEvent method",c={},l=[{value:"Implementation",id:"implementation",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"deleteevent-method",children:"deleteEvent method"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"})," deleteEvent\n(",(0,r.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," eventId)"]}),"\n",(0,r.jsx)(t.p,{children:"<p>This function is used to delete the event.</p>\n<p><strong>params</strong>:</p>\n<ul>\n<li><code>eventId</code>: id of an event</li>\n</ul>\n<p><strong>returns</strong>:</p>\n<ul>\n<li><code>Future<dynamic></code>: Information about the event deletion</li>\n</ul>"}),"\n",(0,r.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-dart",children:"Future\\<dynamic\\> deleteEvent(String eventId) async \\{\n  navigationService.pushDialog(\n    const CustomProgressDialog(key: Key('DeleteEventProgress')),\n  );\n  final tokenResult = await _dbFunctions\n      .refreshAccessToken(userConfig.currentUser.refreshToken!);\n  debugPrint(tokenResult.toString());\n  final result = await _dbFunctions.gqlAuthMutation(\n    EventQueries().deleteEvent(eventId),\n  );\n  navigationService.pop();\n  return result;\n\\}\n"})})]})}function v(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(296540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);