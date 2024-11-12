"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[833319],{301015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"talawa-mobile-docs/views_after_auth_screens_events_create_event_form/CreateEventForm/build","title":"build method","description":"- @override","source":"@site/docs/talawa-mobile-docs/views_after_auth_screens_events_create_event_form/CreateEventForm/build.md","sourceDirName":"talawa-mobile-docs/views_after_auth_screens_events_create_event_form/CreateEventForm","slug":"/talawa-mobile-docs/views_after_auth_screens_events_create_event_form/CreateEventForm/build","permalink":"/docs/talawa-mobile-docs/views_after_auth_screens_events_create_event_form/CreateEventForm/build","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/views_after_auth_screens_events_create_event_form/CreateEventForm/build.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"CreateEventForm constructor","permalink":"/docs/talawa-mobile-docs/views_after_auth_screens_events_create_event_form/CreateEventForm/"},"next":{"title":"model property","permalink":"/docs/talawa-mobile-docs/views_after_auth_screens_events_create_event_form/CreateEventForm/model"}}');var o=n(474848),r=n(28453);const a={},s="build method",l={},d=[{value:"Implementation",id:"implementation",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"build-method",children:"build method"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["@",(0,o.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/override-constant.html",children:"override"})]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https:api.flutter.dev/flutter/widgets/Widget-class.html",children:"Widget"})," build\n(",(0,o.jsx)(t.a,{href:"https:api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," context)"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:'<span class="feature">override</span>'})}),"\n",(0,o.jsxs)(t.p,{children:['<p>Describes the part of the user interface represented by this widget.</p>\n<p>The framework calls this method when this widget is inserted into the tree\nin a given <a href="https',":api",'.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a> and when the dependencies of this widget change\n(e.g., an <a href="https',":api",'.flutter.dev/flutter/widgets/InheritedWidget-class.html">InheritedWidget</a> referenced by this widget changes). This\nmethod can potentially be called in every frame and should not have any side\neffects beyond building a widget.</p>\n<p>The framework replaces the subtree below this widget with the widget\nreturned by this method, either by updating the existing subtree or by\nremoving the subtree and inflating a new subtree, depending on whether the\nwidget returned by this method can update the root of the existing\nsubtree, as determined by calling <a href="https',":api",'.flutter.dev/flutter/widgets/Widget/canUpdate.html">Widget.canUpdate</a>.</p>\n<p>Typically implementations return a newly created constellation of widgets\nthat are configured with information from this widget\'s constructor and\nfrom the given <a href="https',":api",'.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a>.</p>\n<p>The given <a href="https',":api",'.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a> contains information about the location in the\ntree at which this widget is being built. For example, the context\nprovides the set of inherited widgets for this location in the tree. A\ngiven widget might be built with multiple different <a href="https',":api",'.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a>\narguments over time if the widget is moved around the tree or if the\nwidget is inserted into the tree in multiple places at once.</p>\n<p>The implementation of this method must only depend on:</p>\n<ul>\n<li>the fields of the widget, which themselves must not change over time,\nand</li>\n<li>any ambient state obtained from the <code>context</code> using\n<a href="https',":api",'.flutter.dev/flutter/widgets/BuildContext/dependOnInheritedWidgetOfExactType.html">BuildContext.dependOnInheritedWidgetOfExactType</a>.</li>\n</ul>\n<p>If a widget\'s <a href="../../views_after_auth_screens_events_create_event_form/CreateEventForm/build.md">build</a> method is to depend on anything else, use a\n<a href="https',":api",'.flutter.dev/flutter/widgets/StatefulWidget-class.html">StatefulWidget</a> instead.</p>\n<p>See also:</p>\n<ul>\n<li><a href="https',":api",'.flutter.dev/flutter/widgets/StatelessWidget-class.html">StatelessWidget</a>, which contains the discussion on performance considerations.</li>\n</ul>']}),"\n",(0,o.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"@override\nWidget build(BuildContext context) \\{\n  Form class is a container for grouping together multiple form field widgets.\n  return Form(\n    key: model.formKey,\n    child: Column(\n      crossAxisAlignment: CrossAxisAlignment.start,\n      children: [\n        Text field for event title.\n        TextFormField(\n          key: const Key('create_event_form_tff1'),\n          textInputAction: TextInputAction.next,\n          controller: model.eventTitleTextController,\n          keyboardType: TextInputType.name,\n          maxLength: 20,\n          focusNode: model.titleFocus,\n          validator: (value) =\\> Validator.validateEventForm(value!, 'Title'),\n          decoration: InputDecoration(\n            placeholder of the text field\n            labelText: 'Add Event Title',\n            isDense: true,\n            labelStyle: Theme.of(context).textTheme.titleMedium,\n            focusedBorder: InputBorder.none,\n            counterText: \"\",\n            enabledBorder: InputBorder.none,\n            prefixIcon: Container(\n              transform: Matrix4.translationValues(\n                -SizeConfig.screenWidth! * 0.027,\n                0.0,\n                0.0,\n              ),\n              child: const Icon(\n                Icons.title,\n                size: 25,\n              ),\n            ),\n          ),\n        ),\n        SizedBox(\n          height: SizeConfig.screenHeight! * 0.013,\n        ),\n        Text field for the location.\n        TextFormField(\n          key: const Key('create_event_form_tff2'),\n          textInputAction: TextInputAction.next,\n          keyboardType: TextInputType.streetAddress,\n          controller: model.eventLocationTextController,\n          focusNode: model.locationFocus,\n          validator: (value) =\\>\n              Validator.validateEventForm(value!, 'Location'),\n          decoration: InputDecoration(\n            hintText: 'Where is the event?',\n            labelText: 'Add Location',\n            labelStyle: Theme.of(context).textTheme.titleMedium,\n            border: InputBorder.none,\n            focusedBorder: InputBorder.none,\n            enabledBorder: InputBorder.none,\n            suffix: GestureDetector(\n              key: const Key('gesture_cef_test'),\n              onTap: () =\\> navigationService.pushScreen(\n                Routes.mapScreen,\n                arguments: \\{\n                  'model': model,\n                  initalize the map screen with a marker at this location\n                  'latitude': 37.42796133580664,\n                  'longitude': -122.085749655962,\n                \\},\n              ),\n              child: Text(\n                AppLocalizations.of(context)!\n                    .strictTranslate('Choose on map'),\n                style: Theme.of(context)\n                    .textTheme\n                    .bodySmall!\n                    .copyWith(fontSize: 16),\n              ),\n            ),\n            prefixIcon: Container(\n              transform: Matrix4.translationValues(\n                -SizeConfig.screenWidth! * 0.027,\n                0.0,\n                0.0,\n              ),\n              child: const Icon(\n                Icons.place,\n                size: 25,\n              ),\n            ),\n          ),\n        ),\n        SizedBox(\n          height: SizeConfig.screenHeight! * 0.013,\n        ),\n        Text field for event description.\n        TextFormField(\n          key: const Key('create_event_form_tff3'),\n          keyboardType: TextInputType.multiline,\n          controller: model.eventDescriptionTextController,\n          focusNode: model.descriptionFocus,\n          validator: (value) =\\>\n              Validator.validateEventForm(value!, 'Description'),\n          maxLines: 10,\n          minLines: 1,\n          decoration: InputDecoration(\n            hintText: 'Describe the event',\n            labelText: 'Add Description',\n            labelStyle: Theme.of(context).textTheme.titleMedium,\n            border: InputBorder.none,\n            focusedBorder: InputBorder.none,\n            enabledBorder: InputBorder.none,\n            prefixIcon: Container(\n              transform: Matrix4.translationValues(\n                -SizeConfig.screenWidth! * 0.027,\n                0.0,\n                0.0,\n              ),\n              child: const Icon(\n                Icons.view_headline,\n                size: 25,\n              ),\n            ),\n          ),\n        ),\n      ],\n    ),\n  );\n\\}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var i=n(296540);const o={},r=i.createContext(o);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);