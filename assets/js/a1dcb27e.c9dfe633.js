"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[950578],{825156:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(785893),o=a(511151);const s={},r="shouldRepaint method",i={id:"talawa-mobile-docs/custom_painters_whatsapp_logo/WhatsappLogo/shouldRepaint",title:"shouldRepaint method",description:"- @override",source:"@site/docs/talawa-mobile-docs/custom_painters_whatsapp_logo/WhatsappLogo/shouldRepaint.md",sourceDirName:"talawa-mobile-docs/custom_painters_whatsapp_logo/WhatsappLogo",slug:"/talawa-mobile-docs/custom_painters_whatsapp_logo/WhatsappLogo/shouldRepaint",permalink:"/docs/talawa-mobile-docs/custom_painters_whatsapp_logo/WhatsappLogo/shouldRepaint",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/custom_painters_whatsapp_logo/WhatsappLogo/shouldRepaint.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"paint method",permalink:"/docs/talawa-mobile-docs/custom_painters_whatsapp_logo/WhatsappLogo/paint"},next:{title:"WhatsappLogo class",permalink:"/docs/talawa-mobile-docs/custom_painters_whatsapp_logo/WhatsappLogo-class"}},l={},p=[{value:"Implementation",id:"implementation",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"shouldrepaint-method",children:"shouldRepaint method"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["@",(0,n.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/override-constant.html",children:"override"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"})," shouldRepaint\n(covariant ",(0,n.jsx)(t.a,{href:"https:api.flutter.dev/flutter/rendering/CustomPainter-class.html",children:"CustomPainter"})," oldDelegate)"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:'<span class="feature">override</span>'})}),"\n",(0,n.jsxs)(t.p,{children:['<p>Called whenever a new instance of the custom painter delegate class is\nprovided to the <a href="https',":api",'.flutter.dev/flutter/rendering/RenderCustomPaint-class.html">RenderCustomPaint</a> object, or any time that a new\n<a href="https',":api",'.flutter.dev/flutter/widgets/CustomPaint-class.html">CustomPaint</a> object is created with a new instance of the custom painter\ndelegate class (which amounts to the same thing, because the latter is\nimplemented in terms of the former).</p>\n<p>If the new instance represents different information than the old\ninstance, then the method should return true, otherwise it should return\nfalse.</p>\n<p>If the method returns false, then the <a href="../../custom_painters_whatsapp_logo/WhatsappLogo/paint.md">paint</a> call might be optimized\naway.</p>\n<p>It\'s possible that the <a href="../../custom_painters_whatsapp_logo/WhatsappLogo/paint.md">paint</a> method will get called even if\n<a href="../../custom_painters_whatsapp_logo/WhatsappLogo/shouldRepaint.md">shouldRepaint</a> returns false (e.g. if an ancestor or descendant needed to\nbe repainted). It\'s also possible that the <a href="../../custom_painters_whatsapp_logo/WhatsappLogo/paint.md">paint</a> method will get called\nwithout <a href="../../custom_painters_whatsapp_logo/WhatsappLogo/shouldRepaint.md">shouldRepaint</a> being called at all (e.g. if the box changes\nsize).</p>\n<p>If a custom delegate has a particularly expensive paint function such that\nrepaints should be avoided as much as possible, a <a href="https',":api",'.flutter.dev/flutter/widgets/RepaintBoundary-class.html">RepaintBoundary</a> or\n<a href="https',":api",'.flutter.dev/flutter/rendering/RenderRepaintBoundary-class.html">RenderRepaintBoundary</a> (or other render object with\n<a href="https',":api",'.flutter.dev/flutter/rendering/RenderObject/isRepaintBoundary.html">RenderObject.isRepaintBoundary</a> set to true) might be helpful.</p>\n<p>The <code>oldDelegate</code> argument will never be null.</p>']}),"\n",(0,n.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-dart",children:"@override\nbool shouldRepaint(covariant CustomPainter oldDelegate) \\{\n  return true;\n\\}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},511151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>r});var n=a(667294);const o={},s=n.createContext(o);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);