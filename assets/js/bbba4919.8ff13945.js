"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[436532],{142092:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>_});var a=t(785893),o=t(511151);const l={},r="fetchTasksByUser method",i={id:"talawa-mobile-docs/view_model_after_auth_view_models_task_view_models_explore_tasks_view_model/ExploreTasksViewModel/fetchTasksByUser",title:"fetchTasksByUser method",description:"Future&lt;void\\> fetchTasksByUser",source:"@site/docs/talawa-mobile-docs/view_model_after_auth_view_models_task_view_models_explore_tasks_view_model/ExploreTasksViewModel/fetchTasksByUser.md",sourceDirName:"talawa-mobile-docs/view_model_after_auth_view_models_task_view_models_explore_tasks_view_model/ExploreTasksViewModel",slug:"/talawa-mobile-docs/view_model_after_auth_view_models_task_view_models_explore_tasks_view_model/ExploreTasksViewModel/fetchTasksByUser",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_task_view_models_explore_tasks_view_model/ExploreTasksViewModel/fetchTasksByUser",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_after_auth_view_models_task_view_models_explore_tasks_view_model/ExploreTasksViewModel/fetchTasksByUser.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"fetchTasks method",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_task_view_models_explore_tasks_view_model/ExploreTasksViewModel/fetchTasks"},next:{title:"tasks property",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_task_view_models_explore_tasks_view_model/ExploreTasksViewModel/tasks"}},d={},_=[{value:"Implementation",id:"implementation",level:2}];function n(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"fetchtasksbyuser-method",children:"fetchTasksByUser method"})}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> fetchTasksByUser\n()"]}),"\n",(0,a.jsx)(s.p,{children:"<p>This function fetch tasks created by the current user for an event.\nThe function uses <code>getTasksByUser</code> method of Task Service.</p>"}),"\n",(0,a.jsx)(s.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-dart",children:"Future\\<void\\> fetchTasksByUser() async \\{\n  setState(ViewState.busy);\n  await _taskService.getTasksByUser();\n  setState(ViewState.idle);\n\\}\n"})})]})}function c(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(n,{...e})}):n(e)}},511151:(e,s,t)=>{t.d(s,{Z:()=>i,a:()=>r});var a=t(667294);const o={},l=a.createContext(o);function r(e){const s=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(l.Provider,{value:s},e.children)}}}]);