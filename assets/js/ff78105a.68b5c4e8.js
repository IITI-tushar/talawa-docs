"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[329971],{793190:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>s});const a=JSON.parse('{"id":"talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_edit_event_view_model/EditEventViewModel/updateEvent","title":"updateEvent method","description":"Future&lt;void\\\\> updateEvent","source":"@site/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_edit_event_view_model/EditEventViewModel/updateEvent.md","sourceDirName":"talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_edit_event_view_model/EditEventViewModel","slug":"/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_edit_event_view_model/EditEventViewModel/updateEvent","permalink":"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_edit_event_view_model/EditEventViewModel/updateEvent","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_edit_event_view_model/EditEventViewModel/updateEvent.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"titleFocus property","permalink":"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_edit_event_view_model/EditEventViewModel/titleFocus"},"next":{"title":"validate property","permalink":"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_edit_event_view_model/EditEventViewModel/validate"}}');var i=n(474848),d=n(28453);const o={},l="updateEvent method",r={},s=[{value:"Implementation",id:"implementation",level:2}];function v(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"updateevent-method",children:"updateEvent method"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> updateEvent\n()"]}),"\n",(0,i.jsx)(t.p,{children:"<p>This function is used to update an event.\nThe function uses <code>editEvent</code> function provided by <code>eventService</code> service.</p>"}),"\n",(0,i.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-dart",children:"Future\\<void\\> updateEvent() async \\{\n  titleFocus.unfocus();\n  locationFocus.unfocus();\n  descriptionFocus.unfocus();\n  validate = AutovalidateMode.always;\n  if (formKey.currentState!.validate()) \\{\n    validate = AutovalidateMode.disabled;\n    final DateTime startTime = DateTime(\n      eventStartDate.year,\n      eventStartDate.month,\n      eventStartDate.day,\n      eventStartTime.hour,\n      eventStartTime.minute,\n    );\n    final DateTime endTime = DateTime(\n      eventEndDate.year,\n      eventEndDate.month,\n      eventEndDate.day,\n      eventEndTime.hour,\n      eventEndTime.minute,\n    );\n    map for the required data to update an event.\n    final Map\\<String, dynamic\\> variables = \\{\n      'title': eventTitleTextController.text,\n      'description': eventDescriptionTextController.text,\n      'location': eventLocationTextController.text,\n      'isPublic': isPublicSwitch,\n      'isRegisterable': isRegisterableSwitch,\n      'recurring': false,\n      'allDay': false,\n      'startDate': DateFormat('yyyy-MM-dd').format(eventStartDate),\n      'endDate': DateFormat('yyyy-MM-dd').format(eventEndDate),\n      'startTime': '$\\{DateFormat('HH:mm:ss').format(startTime)\\}Z',\n      'endTime': '$\\{DateFormat('HH:mm:ss').format(endTime)\\}Z',\n    \\};\n    _eventService.editEvent(eventId: _event.id!, variables: variables);\n  \\}\n\\}\n"})})]})}function m(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(v,{...e})}):v(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var a=n(296540);const i={},d=a.createContext(i);function o(e){const t=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(d.Provider,{value:t},e.children)}}}]);