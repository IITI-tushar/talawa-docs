"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[52933],{119247:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>a});const l=JSON.parse('{"id":"talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel-class","title":"ExploreEventsViewModel class","description":"\\\\ExploreEventsViewModel class helps to interact with model to serve data to view for event explore section.\\\\","source":"@site/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel-class.md","sourceDirName":"talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model","slug":"/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel-class","permalink":"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel-class","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel-class.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"refreshEvents method","permalink":"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/refreshEvents"},"next":{"title":"explore_events_view_model library","permalink":"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/view_model_after_auth_view_models_event_view_models_explore_events_view_model-library"}}');var i=s(474848),r=s(28453);const n={},d="ExploreEventsViewModel class",o={},a=[{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"chosenValue \u2192 String",id:"chosenvalue--string",level:5},{value:"emptyListMessage \u2192 String",id:"emptylistmessage--string",level:5},{value:"events \u2192 List&lt;Event&gt;",id:"events--listevent",level:5},{value:"eventService \u2192 EventService",id:"eventservice--eventservice",level:5},{value:"hashCode \u2192 int",id:"hashcode--int",level:5},{value:"hasListeners \u2192 bool",id:"haslisteners--bool",level:5},{value:"isBusy \u2192 bool",id:"isbusy--bool",level:5},{value:"runtimeType \u2192 Type",id:"runtimetype--type",level:5},{value:"state \u2192 ViewState",id:"state--viewstate",level:5},{value:"Methods",id:"methods",level:2},{value:"addListener(VoidCallback listener) void",id:"addlistenervoidcallback-listener-void",level:5},{value:"checkIfExistsAndAddNewEvent(Event newEvent) Future&lt;void&gt;",id:"checkifexistsandaddneweventevent-newevent-futurevoid",level:5},{value:"choseValueFromDropdown(String value) Future&lt;void&gt;",id:"chosevaluefromdropdownstring-value-futurevoid",level:5},{value:"deleteEvent({required String eventId}) Future&lt;void&gt;",id:"deleteeventrequired-string-eventid-futurevoid",level:5},{value:"dispose() void",id:"dispose-void",level:5},{value:"fetchNewEvents() Future&lt;void&gt;",id:"fetchnewevents-futurevoid",level:5},{value:"initialise() Future&lt;void&gt;",id:"initialise-futurevoid",level:5},{value:"noSuchMethod(Invocation invocation) dynamic",id:"nosuchmethodinvocation-invocation-dynamic",level:5},{value:"notifyListeners() void",id:"notifylisteners-void",level:5},{value:"refreshEvents() Future&lt;void&gt;",id:"refreshevents-futurevoid",level:5},{value:"removeListener(VoidCallback listener) void",id:"removelistenervoidcallback-listener-void",level:5},{value:"setState(ViewState viewState) void",id:"setstateviewstate-viewstate-void",level:5},{value:"toString() String",id:"tostring-string",level:5},{value:"Operators",id:"operators",level:2},{value:"operator ==(Object other) bool",id:"operator-object-other-bool",level:5}];function h(e){const t={a:"a",br:"br",em:"em",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"exploreeventsviewmodel-class",children:"ExploreEventsViewModel class"})}),"\n",(0,i.jsx)(t.p,{children:"<p>ExploreEventsViewModel class helps to interact with model to serve data to view for event explore section.</p>\n<p>Methods include:</p>\n<ul>\n<li><code>fetchNewEvents</code> : to fetch new events in the organization.</li>\n<li><code>refreshEvents</code> : to refersh the event.</li>\n<li><code>checkIfExistsAndAddNewEvent</code> : to check if the event exists or not, if now add a new event.</li>\n<li><code>deleteEvent</code> : to delete the event.</li>\n<li><code>choseValueFromDropdown</code> : to return the relevant message in the dropdown after any action.</li>\n</ul>"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Inheritance"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Object-class.html",children:"Object"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/foundation/ChangeNotifier-class.html",children:"ChangeNotifier"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_base_view_model/BaseModel-class",children:"BaseModel"})}),"\n",(0,i.jsx)(t.li,{children:"ExploreEventsViewModel"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"constructors",children:"Constructors"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/",children:"ExploreEventsViewModel"})," ()"]}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(t.h5,{id:"chosenvalue--string",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/chosenValue",children:"chosenValue"})," \u2192 ",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:'<span class="feature">read-only</span>'})}),"\n",(0,i.jsxs)(t.h5,{id:"emptylistmessage--string",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/emptyListMessage",children:"emptyListMessage"})," \u2192 ",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:'<span class="feature">read-only</span>'})}),"\n",(0,i.jsxs)(t.h5,{id:"events--listevent",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/events",children:"events"})," \u2192 ",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/List-class.html",children:"List"}),"<",(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_events_event_model/Event-class",children:"Event"}),">"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:'<span class="feature">read-only</span>'})}),"\n",(0,i.jsxs)(t.h5,{id:"eventservice--eventservice",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/eventService",children:"eventService"})," \u2192 ",(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/services_event_service/EventService-class",children:"EventService"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:'<span class="feature">read-only</span>'})}),"\n",(0,i.jsxs)(t.h5,{id:"hashcode--int",children:[(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Object/hashCode.html",children:"hashCode"})," \u2192 ",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/int-class.html",children:"int"})]}),"\n",(0,i.jsxs)(t.p,{children:["The hash code for this object.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:'<span class="feature">read-only</span><span class="feature">inherited</span>'})]}),"\n",(0,i.jsxs)(t.h5,{id:"haslisteners--bool",children:[(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/foundation/ChangeNotifier/hasListeners.html",children:"hasListeners"})," \u2192 ",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"})]}),"\n",(0,i.jsxs)(t.p,{children:["Whether any listeners are currently registered.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:'<span class="feature">read-only</span><span class="feature">inherited</span>'})]}),"\n",(0,i.jsxs)(t.h5,{id:"isbusy--bool",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_base_view_model/BaseModel/isBusy",children:"isBusy"})," \u2192 ",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:'<span class="feature">read-only</span><span class="feature">inherited</span>'})}),"\n",(0,i.jsxs)(t.h5,{id:"runtimetype--type",children:[(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Object/runtimeType.html",children:"runtimeType"})," \u2192 ",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Type-class.html",children:"Type"})]}),"\n",(0,i.jsxs)(t.p,{children:["A representation of the runtime type of the object.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:'<span class="feature">read-only</span><span class="feature">inherited</span>'})]}),"\n",(0,i.jsxs)(t.h5,{id:"state--viewstate",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_base_view_model/BaseModel/state",children:"state"})," \u2192 ",(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/enums_enums/ViewState",children:"ViewState"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:'<span class="feature">read-only</span><span class="feature">inherited</span>'})}),"\n",(0,i.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsxs)(t.h5,{id:"addlistenervoidcallback-listener-void",children:[(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/foundation/ChangeNotifier/addListener.html",children:"addListener"}),"(",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-ui/VoidCallback.html",children:"VoidCallback"})," listener) void"]}),"\n",(0,i.jsxs)(t.p,{children:["Register a closure to be called when the object changes.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:'<span class="feature">inherited</span>'})]}),"\n",(0,i.jsxs)(t.h5,{id:"checkifexistsandaddneweventevent-newevent-futurevoid",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/checkIfExistsAndAddNewEvent",children:"checkIfExistsAndAddNewEvent"}),"(",(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_events_event_model/Event-class",children:"Event"})," newEvent) ",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void>"]}),"\n",(0,i.jsx)(t.p,{children:"This function add a new event if the event not exist."}),"\n",(0,i.jsxs)(t.h5,{id:"chosevaluefromdropdownstring-value-futurevoid",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/choseValueFromDropdown",children:"choseValueFromDropdown"}),"(",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," value) ",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void>"]}),"\n",(0,i.jsx)(t.p,{children:"This function takes the choosen value from dropdown and\nreturn the filter events, if empty list then return relevant message."}),"\n",(0,i.jsxs)(t.h5,{id:"deleteeventrequired-string-eventid-futurevoid",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/deleteEvent",children:"deleteEvent"}),"({required ",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," eventId}) ",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void>"]}),"\n",(0,i.jsx)(t.p,{children:"This function deletes the event."}),"\n",(0,i.jsxs)(t.h5,{id:"dispose-void",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/dispose",children:"dispose"}),"() void"]}),"\n",(0,i.jsxs)(t.p,{children:['Discards any resources used by the object. After this is called, the\nobject is not in a usable state and should be discarded (calls to\n<a href="https',":api",'.flutter.dev/flutter/foundation/ChangeNotifier/addListener.html">addListener</a> will throw after the object is disposed).',(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:'<span class="feature">override</span>'})]}),"\n",(0,i.jsxs)(t.h5,{id:"fetchnewevents-futurevoid",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/fetchNewEvents",children:"fetchNewEvents"}),"() ",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void>"]}),"\n",(0,i.jsx)(t.p,{children:"This function is used to fetch new events in the organization.\nThe function uses <code>getEvents</code> method from <code>EventService</code>."}),"\n",(0,i.jsxs)(t.h5,{id:"initialise-futurevoid",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/initialise",children:"initialise"}),"() ",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void>"]}),"\n",(0,i.jsxs)(t.h5,{id:"nosuchmethodinvocation-invocation-dynamic",children:[(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html",children:"noSuchMethod"}),"(",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Invocation-class.html",children:"Invocation"})," invocation) dynamic"]}),"\n",(0,i.jsxs)(t.p,{children:["Invoked when a non-existent method or property is accessed.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:'<span class="feature">inherited</span>'})]}),"\n",(0,i.jsxs)(t.h5,{id:"notifylisteners-void",children:[(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/foundation/ChangeNotifier/notifyListeners.html",children:"notifyListeners"}),"() void"]}),"\n",(0,i.jsxs)(t.p,{children:["Call all the registered listeners.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:'<span class="feature">inherited</span>'})]}),"\n",(0,i.jsxs)(t.h5,{id:"refreshevents-futurevoid",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/refreshEvents",children:"refreshEvents"}),"() ",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void>"]}),"\n",(0,i.jsx)(t.p,{children:"This function is used to refresh the events in the organization.\nThe function uses <code>getEvents</code> method from <code>EventService</code>."}),"\n",(0,i.jsxs)(t.h5,{id:"removelistenervoidcallback-listener-void",children:[(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/foundation/ChangeNotifier/removeListener.html",children:"removeListener"}),"(",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-ui/VoidCallback.html",children:"VoidCallback"})," listener) void"]}),"\n",(0,i.jsxs)(t.p,{children:["Remove a previously registered closure from the list of closures that are\nnotified when the object changes.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:'<span class="feature">inherited</span>'})]}),"\n",(0,i.jsxs)(t.h5,{id:"setstateviewstate-viewstate-void",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_base_view_model/BaseModel/setState",children:"setState"}),"(",(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/enums_enums/ViewState",children:"ViewState"})," viewState) void"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:'<span class="feature">inherited</span>'})}),"\n",(0,i.jsxs)(t.h5,{id:"tostring-string",children:[(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Object/toString.html",children:"toString"}),"() ",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})]}),"\n",(0,i.jsxs)(t.p,{children:["A string representation of this object.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:'<span class="feature">inherited</span>'})]}),"\n",(0,i.jsx)(t.h2,{id:"operators",children:"Operators"}),"\n",(0,i.jsxs)(t.h5,{id:"operator-object-other-bool",children:[(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Object/operator_equals.html",children:"operator =="}),"(",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Object-class.html",children:"Object"})," other) ",(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"})]}),"\n",(0,i.jsxs)(t.p,{children:["The equality operator.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:'<span class="feature">inherited</span>'})]})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>d});var l=s(296540);const i={},r=l.createContext(i);function n(e){const t=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);