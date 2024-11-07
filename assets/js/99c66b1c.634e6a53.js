"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[444475],{259171:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var r=a(785893),s=a(511151);const n={},i="createTask method",c={id:"talawa-mobile-docs/services_task_service/TaskService/createTask",title:"createTask method",description:"Future&lt;bool\\> createTask",source:"@site/docs/talawa-mobile-docs/services_task_service/TaskService/createTask.md",sourceDirName:"talawa-mobile-docs/services_task_service/TaskService",slug:"/talawa-mobile-docs/services_task_service/TaskService/createTask",permalink:"/docs/talawa-mobile-docs/services_task_service/TaskService/createTask",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_task_service/TaskService/createTask.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"callbackNotifyListeners property",permalink:"/docs/talawa-mobile-docs/services_task_service/TaskService/callbackNotifyListeners"},next:{title:"deleteTask method",permalink:"/docs/talawa-mobile-docs/services_task_service/TaskService/deleteTask"}},l={},d=[{value:"Implementation",id:"implementation",level:2}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"createtask-method",children:"createTask method"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<",(0,r.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"}),"> createTask\n({required ",(0,r.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," title, required ",(0,r.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," description, required ",(0,r.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," deadline, required ",(0,r.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," eventId})"]}),"\n",(0,r.jsx)(t.p,{children:"<p>This function is used to create a new task for the event.</p>\n<p>params:</p>\n<ul>\n<li><code>title</code> : task title.</li>\n<li><code>description</code> : task description.</li>\n<li><code>deadline</code> : task deadline.</li>\n<li><code>eventId</code> : Event for which task need to be create.</li>\n</ul>"}),"\n",(0,r.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-dart",children:"Future\\<bool\\> createTask(\\{\n  required String title,\n  required String description,\n  required String deadline,\n  required String eventId,\n\\}) async \\{\n  _databaseMutationFunctions\n      .refreshAccessToken(_userConfig.currentUser.refreshToken!);\n  final res = await _databaseMutationFunctions.gqlAuthMutation(\n    TaskQueries.addTask(\n      title: title,\n      description: description,\n      deadline: deadline,\n      eventId: eventId,\n    ),\n  );\n\n  if (res != null) \\{\n    final task = res.data!['createTask'] as Map\\<String, dynamic\\>;\n    _tasks.add(Task.fromJson(task));\n    callbackNotifyListeners();\n    return true;\n  \\}\n  return false;\n\\}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},511151:(e,t,a)=>{a.d(t,{Z:()=>c,a:()=>i});var r=a(667294);const s={},n=r.createContext(s);function i(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);