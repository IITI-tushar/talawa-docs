"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[206457],{319852:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>v,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=i(785893),o=i(511151);const s={},l="initialise method",a={id:"talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/initialise",title:"initialise method",description:"Future&lt;void\\> initialise",source:"@site/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/initialise.md",sourceDirName:"talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel",slug:"/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/initialise",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/initialise",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/initialise.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"fetchNewEvents method",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/fetchNewEvents"},next:{title:"refreshEvents method",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/refreshEvents"}},r={},d=[{value:"Implementation",id:"implementation",level:2}];function _(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"initialise-method",children:"initialise method"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> initialise\n()"]}),"\n",(0,n.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-dart",children:"Future\\<void\\> initialise() async \\{\n  setState(ViewState.busy);\n  _currentOrganizationStreamSubscription = userConfig.currentOrgInfoStream\n      .listen((updatedOrganization) =\\> refreshEvents());\n  await _eventService.getEvents();\n\n  _eventStreamSubscription = _eventService.eventStream.listen(\n    (newEvent) =\\> checkIfExistsAndAddNewEvent(newEvent),\n  );\n  _bufferEvents = _events;\n  setState(ViewState.idle);\n\\}\n"})})]})}function v(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(_,{...e})}):_(e)}},511151:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>l});var n=i(667294);const o={},s=n.createContext(o);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);