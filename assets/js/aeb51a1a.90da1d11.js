"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[418962],{153561:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"talawa-mobile-docs/widgets_custom_alert_dialog/CustomAlertDialog-class","title":"CustomAlertDialog class","description":"\\\\This Class returns CustomAlertDialog widget. Custom Alert Dialog is a popup","source":"@site/docs/talawa-mobile-docs/widgets_custom_alert_dialog/CustomAlertDialog-class.md","sourceDirName":"talawa-mobile-docs/widgets_custom_alert_dialog","slug":"/talawa-mobile-docs/widgets_custom_alert_dialog/CustomAlertDialog-class","permalink":"/docs/talawa-mobile-docs/widgets_custom_alert_dialog/CustomAlertDialog-class","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/widgets_custom_alert_dialog/CustomAlertDialog-class.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"successText property","permalink":"/docs/talawa-mobile-docs/widgets_custom_alert_dialog/CustomAlertDialog/successText"},"next":{"title":"custom_alert_dialog library","permalink":"/docs/talawa-mobile-docs/widgets_custom_alert_dialog/widgets_custom_alert_dialog-library"}}');var l=s(474848),r=s(28453);const n={},a="CustomAlertDialog class",o={},d=[{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"dialogSubTitle \u2192 String",id:"dialogsubtitle--string",level:5},{value:"dialogTitle \u2192 String?",id:"dialogtitle--string",level:5},{value:"hashCode \u2192 int",id:"hashcode--int",level:5},{value:"key \u2192 Key?",id:"key--key",level:5},{value:"reverse \u2192 bool",id:"reverse--bool",level:5},{value:"runtimeType \u2192 Type",id:"runtimetype--type",level:5},{value:"secondaryButtonTap \u2192 Function?",id:"secondarybuttontap--function",level:5},{value:"secondaryButtonText \u2192 String",id:"secondarybuttontext--string",level:5},{value:"success \u2192 Function",id:"success--function",level:5},{value:"successText \u2192 String?",id:"successtext--string",level:5},{value:"Methods",id:"methods",level:2},{value:"build(BuildContext context) Widget",id:"buildbuildcontext-context-widget",level:5},{value:"createElement() StatelessElement",id:"createelement-statelesselement",level:5},{value:"debugDescribeChildren() List&lt;DiagnosticsNode&gt;",id:"debugdescribechildren-listdiagnosticsnode",level:5},{value:"debugFillProperties(DiagnosticPropertiesBuilder properties) void",id:"debugfillpropertiesdiagnosticpropertiesbuilder-properties-void",level:5},{value:"noSuchMethod(Invocation invocation) dynamic",id:"nosuchmethodinvocation-invocation-dynamic",level:5},{value:"toDiagnosticsNode({String? name, DiagnosticsTreeStyle? style}) DiagnosticsNode",id:"todiagnosticsnodestring-name-diagnosticstreestyle-style-diagnosticsnode",level:5},{value:"toString({DiagnosticLevel minLevel = DiagnosticLevel.info}) String",id:"tostringdiagnosticlevel-minlevel--diagnosticlevelinfo-string",level:5},{value:"toStringDeep({String prefixLineOne = &#39;&#39;, String? prefixOtherLines, DiagnosticLevel minLevel = DiagnosticLevel.debug}) String",id:"tostringdeepstring-prefixlineone---string-prefixotherlines-diagnosticlevel-minlevel--diagnosticleveldebug-string",level:5},{value:"toStringShallow({String joiner = &#39;, &#39;, DiagnosticLevel minLevel = DiagnosticLevel.debug}) String",id:"tostringshallowstring-joiner----diagnosticlevel-minlevel--diagnosticleveldebug-string",level:5},{value:"toStringShort() String",id:"tostringshort-string",level:5},{value:"Operators",id:"operators",level:2},{value:"operator ==(Object other) bool",id:"operator-object-other-bool",level:5}];function c(e){const t={a:"a",br:"br",em:"em",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"customalertdialog-class",children:"CustomAlertDialog class"})}),"\n",(0,l.jsx)(t.p,{children:"<p>This Class returns CustomAlertDialog widget. Custom Alert Dialog is a popup\nthat appeared in the screen showing Alert message along with the event buttons.\nThis extends stateless widget that means it cannot change its state during the\nruntime of a application.</p>"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"Inheritance"})}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Object-class.html",children:"Object"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/foundation/DiagnosticableTree-class.html",children:"DiagnosticableTree"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/widgets/Widget-class.html",children:"Widget"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/widgets/StatelessWidget-class.html",children:"StatelessWidget"})}),"\n",(0,l.jsx)(t.li,{children:"CustomAlertDialog"}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"constructors",children:"Constructors"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.a,{href:"/docs/talawa-mobile-docs/widgets_custom_alert_dialog/CustomAlertDialog/",children:"CustomAlertDialog"})," ({",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/foundation/Key-class.html",children:"Key"}),"? key, ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),"? successText, ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),"? dialogTitle, ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"})," reverse = false, ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," secondaryButtonText = 'Close', ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Function-class.html",children:"Function"}),"? secondaryButtonTap, required ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Function-class.html",children:"Function"})," success, required ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," dialogSubTitle})"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.em,{children:"const"})}),"\n",(0,l.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,l.jsxs)(t.h5,{id:"dialogsubtitle--string",children:[(0,l.jsx)(t.a,{href:"/docs/talawa-mobile-docs/widgets_custom_alert_dialog/CustomAlertDialog/dialogSubTitle",children:"dialogSubTitle"})," \u2192 ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.em,{children:'<span class="feature">final</span>'})}),"\n",(0,l.jsxs)(t.h5,{id:"dialogtitle--string",children:[(0,l.jsx)(t.a,{href:"/docs/talawa-mobile-docs/widgets_custom_alert_dialog/CustomAlertDialog/dialogTitle",children:"dialogTitle"})," \u2192 ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),"?"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.em,{children:'<span class="feature">final</span>'})}),"\n",(0,l.jsxs)(t.h5,{id:"hashcode--int",children:[(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/widgets/Widget/hashCode.html",children:"hashCode"})," \u2192 ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/int-class.html",children:"int"})]}),"\n",(0,l.jsxs)(t.p,{children:["The hash code for this object.",(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.em,{children:'<span class="feature">read-only</span><span class="feature">inherited</span>'})]}),"\n",(0,l.jsxs)(t.h5,{id:"key--key",children:[(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/widgets/Widget/key.html",children:"key"})," \u2192 ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/foundation/Key-class.html",children:"Key"}),"?"]}),"\n",(0,l.jsxs)(t.p,{children:["Controls how one widget replaces another widget in the tree.",(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.em,{children:'<span class="feature">final</span><span class="feature">inherited</span>'})]}),"\n",(0,l.jsxs)(t.h5,{id:"reverse--bool",children:[(0,l.jsx)(t.a,{href:"/docs/talawa-mobile-docs/widgets_custom_alert_dialog/CustomAlertDialog/reverse",children:"reverse"})," \u2192 ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"})]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.em,{children:'<span class="feature">final</span>'})}),"\n",(0,l.jsxs)(t.h5,{id:"runtimetype--type",children:[(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Object/runtimeType.html",children:"runtimeType"})," \u2192 ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Type-class.html",children:"Type"})]}),"\n",(0,l.jsxs)(t.p,{children:["A representation of the runtime type of the object.",(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.em,{children:'<span class="feature">read-only</span><span class="feature">inherited</span>'})]}),"\n",(0,l.jsxs)(t.h5,{id:"secondarybuttontap--function",children:[(0,l.jsx)(t.a,{href:"/docs/talawa-mobile-docs/widgets_custom_alert_dialog/CustomAlertDialog/secondaryButtonTap",children:"secondaryButtonTap"})," \u2192 ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Function-class.html",children:"Function"}),"?"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.em,{children:'<span class="feature">final</span>'})}),"\n",(0,l.jsxs)(t.h5,{id:"secondarybuttontext--string",children:[(0,l.jsx)(t.a,{href:"/docs/talawa-mobile-docs/widgets_custom_alert_dialog/CustomAlertDialog/secondaryButtonText",children:"secondaryButtonText"})," \u2192 ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.em,{children:'<span class="feature">final</span>'})}),"\n",(0,l.jsxs)(t.h5,{id:"success--function",children:[(0,l.jsx)(t.a,{href:"/docs/talawa-mobile-docs/widgets_custom_alert_dialog/CustomAlertDialog/success",children:"success"})," \u2192 ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Function-class.html",children:"Function"})]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.em,{children:'<span class="feature">final</span>'})}),"\n",(0,l.jsxs)(t.h5,{id:"successtext--string",children:[(0,l.jsx)(t.a,{href:"/docs/talawa-mobile-docs/widgets_custom_alert_dialog/CustomAlertDialog/successText",children:"successText"})," \u2192 ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),"?"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.em,{children:'<span class="feature">final</span>'})}),"\n",(0,l.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,l.jsxs)(t.h5,{id:"buildbuildcontext-context-widget",children:[(0,l.jsx)(t.a,{href:"/docs/talawa-mobile-docs/widgets_custom_alert_dialog/CustomAlertDialog/build",children:"build"}),"(",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," context) ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/widgets/Widget-class.html",children:"Widget"})]}),"\n",(0,l.jsxs)(t.p,{children:["Describes the part of the user interface represented by this widget.",(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.em,{children:'<span class="feature">override</span>'})]}),"\n",(0,l.jsxs)(t.h5,{id:"createelement-statelesselement",children:[(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/widgets/StatelessWidget/createElement.html",children:"createElement"}),"() ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/widgets/StatelessElement-class.html",children:"StatelessElement"})]}),"\n",(0,l.jsxs)(t.p,{children:['Creates a <a href="https',":api",".flutter.dev/flutter/widgets/StatelessElement-class.html\">StatelessElement</a> to manage this widget's location in the tree.",(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.em,{children:'<span class="feature">inherited</span>'})]}),"\n",(0,l.jsxs)(t.h5,{id:"debugdescribechildren-listdiagnosticsnode",children:[(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html",children:"debugDescribeChildren"}),"() ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/List-class.html",children:"List"}),"<",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/foundation/DiagnosticsNode-class.html",children:"DiagnosticsNode"}),">"]}),"\n",(0,l.jsxs)(t.p,{children:["Returns a list of <code>DiagnosticsNode</code> objects describing this node's\nchildren.",(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.em,{children:'<span class="feature">inherited</span>'})]}),"\n",(0,l.jsxs)(t.h5,{id:"debugfillpropertiesdiagnosticpropertiesbuilder-properties-void",children:[(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html",children:"debugFillProperties"}),"(",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/foundation/DiagnosticPropertiesBuilder-class.html",children:"DiagnosticPropertiesBuilder"})," properties) void"]}),"\n",(0,l.jsxs)(t.p,{children:["Add additional properties associated with the node.",(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.em,{children:'<span class="feature">inherited</span>'})]}),"\n",(0,l.jsxs)(t.h5,{id:"nosuchmethodinvocation-invocation-dynamic",children:[(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html",children:"noSuchMethod"}),"(",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Invocation-class.html",children:"Invocation"})," invocation) dynamic"]}),"\n",(0,l.jsxs)(t.p,{children:["Invoked when a non-existent method or property is accessed.",(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.em,{children:'<span class="feature">inherited</span>'})]}),"\n",(0,l.jsxs)(t.h5,{id:"todiagnosticsnodestring-name-diagnosticstreestyle-style-diagnosticsnode",children:[(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html",children:"toDiagnosticsNode"}),"({",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),"? name, ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/foundation/DiagnosticsTreeStyle.html",children:"DiagnosticsTreeStyle"}),"? style}) ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/foundation/DiagnosticsNode-class.html",children:"DiagnosticsNode"})]}),"\n",(0,l.jsxs)(t.p,{children:['Returns a debug representation of the object that is used by debugging\ntools and by <a href="https',":api",'.flutter.dev/flutter/foundation/DiagnosticsNode/toStringDeep.html">DiagnosticsNode.toStringDeep</a>.',(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.em,{children:'<span class="feature">inherited</span>'})]}),"\n",(0,l.jsxs)(t.h5,{id:"tostringdiagnosticlevel-minlevel--diagnosticlevelinfo-string",children:[(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/foundation/Diagnosticable/toString.html",children:"toString"}),"({",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/foundation/DiagnosticLevel.html",children:"DiagnosticLevel"})," minLevel = DiagnosticLevel.info}) ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})]}),"\n",(0,l.jsxs)(t.p,{children:["A string representation of this object.",(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.em,{children:'<span class="feature">inherited</span>'})]}),"\n",(0,l.jsxs)(t.h5,{id:"tostringdeepstring-prefixlineone---string-prefixotherlines-diagnosticlevel-minlevel--diagnosticleveldebug-string",children:[(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html",children:"toStringDeep"}),"({",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," prefixLineOne = '', ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),"? prefixOtherLines, ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/foundation/DiagnosticLevel.html",children:"DiagnosticLevel"})," minLevel = DiagnosticLevel.debug}) ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})]}),"\n",(0,l.jsxs)(t.p,{children:["Returns a string representation of this node and its descendants.",(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.em,{children:'<span class="feature">inherited</span>'})]}),"\n",(0,l.jsxs)(t.h5,{id:"tostringshallowstring-joiner----diagnosticlevel-minlevel--diagnosticleveldebug-string",children:[(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html",children:"toStringShallow"}),"({",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," joiner = ', ', ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/foundation/DiagnosticLevel.html",children:"DiagnosticLevel"})," minLevel = DiagnosticLevel.debug}) ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})]}),"\n",(0,l.jsxs)(t.p,{children:["Returns a one-line detailed description of the object.",(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.em,{children:'<span class="feature">inherited</span>'})]}),"\n",(0,l.jsxs)(t.h5,{id:"tostringshort-string",children:[(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/widgets/Widget/toStringShort.html",children:"toStringShort"}),"() ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})]}),"\n",(0,l.jsxs)(t.p,{children:["A short, textual description of this widget.",(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.em,{children:'<span class="feature">inherited</span>'})]}),"\n",(0,l.jsx)(t.h2,{id:"operators",children:"Operators"}),"\n",(0,l.jsxs)(t.h5,{id:"operator-object-other-bool",children:[(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/widgets/Widget/operator_equals.html",children:"operator =="}),"(",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/Object-class.html",children:"Object"})," other) ",(0,l.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"})]}),"\n",(0,l.jsxs)(t.p,{children:["The equality operator.",(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.em,{children:'<span class="feature">inherited</span>'})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>a});var i=s(296540);const l={},r=i.createContext(l);function n(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:n(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);