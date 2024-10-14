"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[72425],{71663:(i,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>r});var n=t(85893),h=t(11151);const a={},s="paint method",o={id:"talawa-mobile-docs/custom_painters_whatsapp_logo/WhatsappLogo/paint",title:"paint method",description:"- @override",source:"@site/docs/talawa-mobile-docs/custom_painters_whatsapp_logo/WhatsappLogo/paint.md",sourceDirName:"talawa-mobile-docs/custom_painters_whatsapp_logo/WhatsappLogo",slug:"/talawa-mobile-docs/custom_painters_whatsapp_logo/WhatsappLogo/paint",permalink:"/docs/talawa-mobile-docs/custom_painters_whatsapp_logo/WhatsappLogo/paint",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/custom_painters_whatsapp_logo/WhatsappLogo/paint.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"WhatsappLogo constructor",permalink:"/docs/talawa-mobile-docs/custom_painters_whatsapp_logo/WhatsappLogo/"},next:{title:"shouldRepaint method",permalink:"/docs/talawa-mobile-docs/custom_painters_whatsapp_logo/WhatsappLogo/shouldRepaint"}},l={},r=[{value:"Implementation",id:"implementation",level:2}];function d(i){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,h.a)(),...i.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.header,{children:(0,n.jsx)(e.h1,{id:"paint-method",children:"paint method"})}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["@",(0,n.jsx)(e.a,{href:"https:api.flutter.dev/flutter/dart-core/override-constant.html",children:"override"})]}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["void paint\n(",(0,n.jsx)(e.a,{href:"https:api.flutter.dev/flutter/dart-ui/Canvas-class.html",children:"Canvas"})," canvas, ",(0,n.jsx)(e.a,{href:"https:api.flutter.dev/flutter/dart-ui/Size-class.html",children:"Size"})," size)"]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.em,{children:'<span class="feature">override</span>'})}),"\n",(0,n.jsxs)(e.p,{children:['<p>Called whenever the object needs to paint. The given <a href="https',":api",'.flutter.dev/flutter/dart-ui/Canvas-class.html">Canvas</a> has its\ncoordinate space configured such that the origin is at the top left of the\nbox. The area of the box is the size of the <code>size</code> argument.</p>\n<p>Paint operations should remain inside the given area. Graphical\noperations outside the bounds may be silently ignored, clipped, or not\nclipped. It may sometimes be difficult to guarantee that a certain\noperation is inside the bounds (e.g., drawing a rectangle whose size is\ndetermined by user inputs). In that case, consider calling\n<a href="https',":api",'.flutter.dev/flutter/dart-ui/Canvas/clipRect.html">Canvas.clipRect</a> at the beginning of <a href="../../custom_painters_whatsapp_logo/WhatsappLogo/paint.md">paint</a> so everything that follows\nwill be guaranteed to only draw within the clipped area.</p>\n<p>Implementations should be wary of correctly pairing any calls to\n<a href="https',":api",'.flutter.dev/flutter/dart-ui/Canvas/save.html">Canvas.save</a>/<a href="https',":api",'.flutter.dev/flutter/dart-ui/Canvas/saveLayer.html">Canvas.saveLayer</a> and <a href="https',":api",'.flutter.dev/flutter/dart-ui/Canvas/restore.html">Canvas.restore</a>, otherwise all\nsubsequent painting on this canvas may be affected, with potentially\nhilarious but confusing results.</p>\n<p>To paint text on a <a href="https',":api",'.flutter.dev/flutter/dart-ui/Canvas-class.html">Canvas</a>, use a <a href="https',":api",'.flutter.dev/flutter/painting/TextPainter-class.html">TextPainter</a>.</p>\n<p>To paint an image on a <a href="https',":api",'.flutter.dev/flutter/dart-ui/Canvas-class.html">Canvas</a>:</p>\n<ol>\n<li>\n<p>Obtain an <a href="https',":api",'.flutter.dev/flutter/painting/ImageStream-class.html">ImageStream</a>, for example by calling <a href="https',":api",'.flutter.dev/flutter/painting/ImageProvider/resolve.html">ImageProvider.resolve</a>\non an <a href="https',":api",'.flutter.dev/flutter/painting/AssetImage-class.html">AssetImage</a> or <a href="https',":api",'.flutter.dev/flutter/painting/NetworkImage-class.html">NetworkImage</a> object.</p>\n</li>\n<li>\n<p>Whenever the <a href="https',":api",'.flutter.dev/flutter/painting/ImageStream-class.html">ImageStream</a>\'s underlying <a href="https',":api",'.flutter.dev/flutter/painting/ImageInfo-class.html">ImageInfo</a> object changes\n(see <a href="https',":api",'.flutter.dev/flutter/painting/ImageStream/addListener.html">ImageStream.addListener</a>), create a new instance of your custom\npaint delegate, giving it the new <a href="https',":api",'.flutter.dev/flutter/painting/ImageInfo-class.html">ImageInfo</a> object.</p>\n</li>\n<li>\n<p>In your delegate\'s <a href="../../custom_painters_whatsapp_logo/WhatsappLogo/paint.md">paint</a> method, call the <a href="https',":api",'.flutter.dev/flutter/dart-ui/Canvas/drawImage.html">Canvas.drawImage</a>,\n<a href="https',":api",'.flutter.dev/flutter/dart-ui/Canvas/drawImageRect.html">Canvas.drawImageRect</a>, or <a href="https',":api",'.flutter.dev/flutter/dart-ui/Canvas/drawImageNine.html">Canvas.drawImageNine</a> methods to paint the\n<a href="https',":api",'.flutter.dev/flutter/painting/ImageInfo/image.html">ImageInfo.image</a> object, applying the <a href="https',":api",'.flutter.dev/flutter/painting/ImageInfo/scale.html">ImageInfo.scale</a> value to\nobtain the correct rendering size.</p>\n</li>\n</ol>']}),"\n",(0,n.jsx)(e.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-dart",children:"@override\nvoid paint(Canvas canvas, Size size) \\{\n  final Path path_0 = Path();\n  path_0.moveTo(size.width * 0.3580000, size.height * 0.1673307);\n  path_0.cubicTo(\n    size.width * 0.4170000,\n    size.height * 0.1406375,\n    size.width * 0.4836000,\n    size.height * 0.1314741,\n    size.width * 0.5480000,\n    size.height * 0.1400398,\n  );\n  path_0.cubicTo(\n    size.width * 0.6134000,\n    size.height * 0.1486056,\n    size.width * 0.6760000,\n    size.height * 0.1764940,\n    size.width * 0.7260000,\n    size.height * 0.2193227,\n  );\n  path_0.cubicTo(\n    size.width * 0.7740000,\n    size.height * 0.2595618,\n    size.width * 0.8106000,\n    size.height * 0.3129482,\n    size.width * 0.8308000,\n    size.height * 0.3719124,\n  );\n  path_0.cubicTo(\n    size.width * 0.8540000,\n    size.height * 0.4390438,\n    size.width * 0.8558000,\n    size.height * 0.5133466,\n    size.width * 0.8360000,\n    size.height * 0.5810757,\n  );\n  path_0.arcToPoint(\n    Offset(size.width * 0.7034000, size.height * 0.7677291),\n    radius:\n        Radius.elliptical(size.width * 0.3520000, size.height * 0.3505976),\n    rotation: 0,\n    largeArc: false,\n    clockwise: true,\n  );\n  path_0.arcToPoint(\n    Offset(size.width * 0.5662000, size.height * 0.8264940),\n    radius:\n        Radius.elliptical(size.width * 0.3500000, size.height * 0.3486056),\n    rotation: 0,\n    largeArc: false,\n    clockwise: true,\n  );\n  path_0.cubicTo(\n    size.width * 0.4822000,\n    size.height * 0.8424303,\n    size.width * 0.3930000,\n    size.height * 0.8268924,\n    size.width * 0.3202000,\n    size.height * 0.7826693,\n  );\n  path_0.cubicTo(\n    size.width * 0.3156000,\n    size.height * 0.7806773,\n    size.width * 0.3112000,\n    size.height * 0.7756972,\n    size.width * 0.3058000,\n    size.height * 0.7778884,\n  );\n  path_0.lineTo(size.width * 0.1780000, size.height * 0.8107570);\n  path_0.lineTo(size.width * 0.2120000, size.height * 0.6864542);\n  path_0.cubicTo(\n    size.width * 0.2140000,\n    size.height * 0.6820717,\n    size.width * 0.2100000,\n    size.height * 0.6784861,\n    size.width * 0.2080000,\n    size.height * 0.6745020,\n  );\n  path_0.cubicTo(\n    size.width * 0.1694000,\n    size.height * 0.6159363,\n    size.width * 0.1494000,\n    size.height * 0.5454183,\n    size.width * 0.1514000,\n    size.height * 0.4752988,\n  );\n  path_0.cubicTo(\n    size.width * 0.1534000,\n    size.height * 0.3318725,\n    size.width * 0.2454000,\n    size.height * 0.2183267,\n    size.width * 0.3574000,\n    size.height * 0.1665339,\n  );\n\n  final Paint paint0Fill = Paint()..style = PaintingStyle.fill;\n  paint0Fill.color = const Color(0xff40c351).withOpacity(1.0);\n  canvas.drawPath(path_0, paint0Fill);\n\n  final Path path_1 = Path();\n  path_1.moveTo(size.width * 0.3760000, size.height * 0.2908367);\n  path_1.cubicTo(\n    size.width * 0.3854000,\n    size.height * 0.2910359,\n    size.width * 0.3916000,\n    size.height * 0.2994024,\n    size.width * 0.3952000,\n    size.height * 0.3067729,\n  );\n  path_1.cubicTo(\n    size.width * 0.4072000,\n    size.height * 0.3326693,\n    size.width * 0.4168000,\n    size.height * 0.3593625,\n    size.width * 0.4282000,\n    size.height * 0.3854582,\n  );\n  path_1.cubicTo(\n    size.width * 0.4306000,\n    size.height * 0.3908367,\n    size.width * 0.4322000,\n    size.height * 0.3968127,\n    size.width * 0.4302000,\n    size.height * 0.4025896,\n  );\n  path_1.cubicTo(\n    size.width * 0.4242000,\n    size.height * 0.4195219,\n    size.width * 0.4102000,\n    size.height * 0.4316733,\n    size.width * 0.3990000,\n    size.height * 0.4452191,\n  );\n  path_1.cubicTo(\n    size.width * 0.3950000,\n    size.height * 0.4498008,\n    size.width * 0.3954000,\n    size.height * 0.4563745,\n    size.width * 0.3986000,\n    size.height * 0.4611554,\n  );\n  path_1.arcToPoint(\n    Offset(size.width * 0.5456000, size.height * 0.5876494),\n    radius:\n        Radius.elliptical(size.width * 0.2600000, size.height * 0.2589641),\n    rotation: 0,\n    largeArc: false,\n    clockwise: false,\n  );\n  path_1.cubicTo(\n    size.width * 0.5516000,\n    size.height * 0.5902390,\n    size.width * 0.5588000,\n    size.height * 0.5896414,\n    size.width * 0.5630000,\n    size.height * 0.5844622,\n  );\n  path_1.arcToPoint(\n    Offset(size.width * 0.5970000, size.height * 0.5428287),\n    radius:\n        Radius.elliptical(size.width * 0.5640000, size.height * 0.5617530),\n    rotation: 0,\n    largeArc: false,\n    clockwise: false,\n  );\n  path_1.cubicTo(\n    size.width * 0.6062000,\n    size.height * 0.5308765,\n    size.width * 0.6142000,\n    size.height * 0.5342629,\n    size.width * 0.6262000,\n    size.height * 0.5392430,\n  );\n  path_1.lineTo(size.width * 0.7030000, size.height * 0.5760956);\n  path_1.cubicTo(\n    size.width * 0.7090000,\n    size.height * 0.5786853,\n    size.width * 0.7150000,\n    size.height * 0.5830677,\n    size.width * 0.7144000,\n    size.height * 0.5900398,\n  );\n  path_1.cubicTo(\n    size.width * 0.7184000,\n    size.height * 0.6418327,\n    size.width * 0.6718000,\n    size.height * 0.6820717,\n    size.width * 0.6230000,\n    size.height * 0.6836653,\n  );\n  path_1.cubicTo(\n    size.width * 0.4970000,\n    size.height * 0.6745020,\n    size.width * 0.4110000,\n    size.height * 0.6047809,\n    size.width * 0.3490000,\n    size.height * 0.5243028,\n  );\n  path_1.cubicTo(\n    size.width * 0.3286000,\n    size.height * 0.4960159,\n    size.width * 0.3070000,\n    size.height * 0.4675299,\n    size.width * 0.2958000,\n    size.height * 0.4338645,\n  );\n  path_1.cubicTo(\n    size.width * 0.2852000,\n    size.height * 0.4043825,\n    size.width * 0.2848000,\n    size.height * 0.3707171,\n    size.width * 0.2974000,\n    size.height * 0.3416335,\n  );\n  path_1.cubicTo(\n    size.width * 0.3168000,\n    size.height * 0.3027888,\n    size.width * 0.3338000,\n    size.height * 0.2878486,\n    size.width * 0.3766000,\n    size.height * 0.2902390,\n  );\n  path_1.close();\n  path_1.moveTo(size.width * 0.2580000, size.height * 0.1422311);\n  path_1.cubicTo(\n    size.width * 0.3504000,\n    size.height * 0.07649402,\n    size.width * 0.4700000,\n    size.height * 0.05139442,\n    size.width * 0.5820000,\n    size.height * 0.07370518,\n  );\n  path_1.arcToPoint(\n    Offset(size.width * 0.7774000, size.height * 0.1699203),\n    radius:\n        Radius.elliptical(size.width * 0.4180000, size.height * 0.4163347),\n    rotation: 0,\n    largeArc: false,\n    clockwise: true,\n  );\n  path_1.arcToPoint(\n    Offset(size.width * 0.9178000, size.height * 0.4368526),\n    radius:\n        Radius.elliptical(size.width * 0.4200000, size.height * 0.4183267),\n    rotation: 0,\n    largeArc: false,\n    clockwise: true,\n  );\n  path_1.arcToPoint(\n    Offset(size.width * 0.8918000, size.height * 0.6380478),\n    radius:\n        Radius.elliptical(size.width * 0.4220000, size.height * 0.4203187),\n    rotation: 0,\n    largeArc: false,\n    clockwise: true,\n  );\n  path_1.cubicTo(\n    size.width * 0.8622000,\n    size.height * 0.7137450,\n    size.width * 0.8098000,\n    size.height * 0.7802789,\n    size.width * 0.7434000,\n    size.height * 0.8272908,\n  );\n  path_1.arcToPoint(\n    Offset(size.width * 0.5254000, size.height * 0.9039841),\n    radius:\n        Radius.elliptical(size.width * 0.4180000, size.height * 0.4163347),\n    rotation: 0,\n    largeArc: false,\n    clockwise: true,\n  );\n  path_1.arcToPoint(\n    Offset(size.width * 0.2994000, size.height * 0.8541833),\n    radius:\n        Radius.elliptical(size.width * 0.4200000, size.height * 0.4183267),\n    rotation: 0,\n    largeArc: false,\n    clockwise: true,\n  );\n  path_1.lineTo(size.width * 0.07540000, size.height * 0.9119522);\n  path_1.lineTo(size.width * 0.1344000, size.height * 0.6968127);\n  path_1.cubicTo(\n    size.width * 0.1356000,\n    size.height * 0.6942231,\n    size.width * 0.1338000,\n    size.height * 0.6920319,\n    size.width * 0.1324000,\n    size.height * 0.6900398,\n  );\n  path_1.arcToPoint(\n    Offset(size.width * 0.08240000, size.height * 0.4310757),\n    radius:\n        Radius.elliptical(size.width * 0.4200000, size.height * 0.4183267),\n    rotation: 0,\n    largeArc: false,\n    clockwise: true,\n  );\n  path_1.arcToPoint(\n    Offset(size.width * 0.2574000, size.height * 0.1422311),\n    radius:\n        Radius.elliptical(size.width * 0.4260000, size.height * 0.4243028),\n    rotation: 0,\n    largeArc: false,\n    clockwise: true,\n  );\n  path_1.moveTo(size.width * 0.3568000, size.height * 0.1673307);\n  path_1.cubicTo(\n    size.width * 0.2898000,\n    size.height * 0.1972112,\n    size.width * 0.2328000,\n    size.height * 0.2486056,\n    size.width * 0.1964000,\n    size.height * 0.3121514,\n  );\n  path_1.cubicTo(\n    size.width * 0.1676000,\n    size.height * 0.3619522,\n    size.width * 0.1516000,\n    size.height * 0.4187251,\n    size.width * 0.1504000,\n    size.height * 0.4760956,\n  );\n  path_1.cubicTo(\n    size.width * 0.1484000,\n    size.height * 0.5462151,\n    size.width * 0.1684000,\n    size.height * 0.6165339,\n    size.width * 0.2070000,\n    size.height * 0.6752988,\n  );\n  path_1.cubicTo(\n    size.width * 0.2090000,\n    size.height * 0.6788845,\n    size.width * 0.2126000,\n    size.height * 0.6826693,\n    size.width * 0.2110000,\n    size.height * 0.6872510,\n  );\n  path_1.lineTo(size.width * 0.1770000, size.height * 0.8115538);\n  path_1.cubicTo(\n    size.width * 0.2196000,\n    size.height * 0.8007968,\n    size.width * 0.2622000,\n    size.height * 0.7892430,\n    size.width * 0.3050000,\n    size.height * 0.7784861,\n  );\n  path_1.cubicTo(\n    size.width * 0.3104000,\n    size.height * 0.7764940,\n    size.width * 0.3150000,\n    size.height * 0.7808765,\n    size.width * 0.3194000,\n    size.height * 0.7832669,\n  );\n  path_1.arcToPoint(\n    Offset(size.width * 0.5654000, size.height * 0.8272908),\n    radius:\n        Radius.elliptical(size.width * 0.3500000, size.height * 0.3486056),\n    rotation: 0,\n    largeArc: false,\n    clockwise: false,\n  );\n  path_1.arcToPoint(\n    Offset(size.width * 0.7026000, size.height * 0.7685259),\n    radius:\n        Radius.elliptical(size.width * 0.3460000, size.height * 0.3446215),\n    rotation: 0,\n    largeArc: false,\n    clockwise: false,\n  );\n  path_1.arcToPoint(\n    Offset(size.width * 0.8352000, size.height * 0.5818725),\n    radius:\n        Radius.elliptical(size.width * 0.3520000, size.height * 0.3505976),\n    rotation: 0,\n    largeArc: false,\n    clockwise: false,\n  );\n  path_1.arcToPoint(\n    Offset(size.width * 0.8300000, size.height * 0.3727092),\n    radius:\n        Radius.elliptical(size.width * 0.3500000, size.height * 0.3486056),\n    rotation: 0,\n    largeArc: false,\n    clockwise: false,\n  );\n  path_1.arcToPoint(\n    Offset(size.width * 0.7252000, size.height * 0.2201195),\n    radius:\n        Radius.elliptical(size.width * 0.3500000, size.height * 0.3486056),\n    rotation: 0,\n    largeArc: false,\n    clockwise: false,\n  );\n  path_1.arcToPoint(\n    Offset(size.width * 0.5470000, size.height * 0.1408367),\n    radius:\n        Radius.elliptical(size.width * 0.3480000, size.height * 0.3466135),\n    rotation: 0,\n    largeArc: false,\n    clockwise: false,\n  );\n  path_1.cubicTo(\n    size.width * 0.4830000,\n    size.height * 0.1322709,\n    size.width * 0.4162000,\n    size.height * 0.1414343,\n    size.width * 0.3570000,\n    size.height * 0.1681275,\n  );\n  path_1.close();\n\n  final Paint paint1fill = Paint()..style = PaintingStyle.fill;\n  paint1fill.color = const Color(0xfffcfcfc).withOpacity(1.0);\n  canvas.drawPath(path_1, paint1fill);\n\\}\n"})})]})}function c(i={}){const{wrapper:e}={...(0,h.a)(),...i.components};return e?(0,n.jsx)(e,{...i,children:(0,n.jsx)(d,{...i})}):d(i)}},11151:(i,e,t)=>{t.d(e,{Z:()=>o,a:()=>s});var n=t(67294);const h={},a=n.createContext(h);function s(i){const e=n.useContext(a);return n.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function o(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(h):i.components||h:s(i.components),n.createElement(a.Provider,{value:e},i.children)}}}]);