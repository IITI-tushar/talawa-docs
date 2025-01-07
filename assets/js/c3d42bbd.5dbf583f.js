"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[774111],{252484:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>h,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"talawa-mobile-docs/custom_painters_telegram_logo/TelegramLogo/paint","title":"paint method","description":"- @override","source":"@site/docs/talawa-mobile-docs/custom_painters_telegram_logo/TelegramLogo/paint.md","sourceDirName":"talawa-mobile-docs/custom_painters_telegram_logo/TelegramLogo","slug":"/talawa-mobile-docs/custom_painters_telegram_logo/TelegramLogo/paint","permalink":"/docs/talawa-mobile-docs/custom_painters_telegram_logo/TelegramLogo/paint","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/custom_painters_telegram_logo/TelegramLogo/paint.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"TelegramLogo constructor","permalink":"/docs/talawa-mobile-docs/custom_painters_telegram_logo/TelegramLogo/"},"next":{"title":"shouldRepaint method","permalink":"/docs/talawa-mobile-docs/custom_painters_telegram_logo/TelegramLogo/shouldRepaint"}}');var n=a(474848),s=a(28453);const l={},h="paint method",r={},o=[{value:"Implementation",id:"implementation",level:2}];function p(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"paint-method",children:"paint method"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["@",(0,n.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/override-constant.html",children:"override"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["void paint\n(",(0,n.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-ui/Canvas-class.html",children:"Canvas"})," canvas, ",(0,n.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-ui/Size-class.html",children:"Size"})," size)"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:'<span class="feature">override</span>'})}),"\n",(0,n.jsxs)(t.p,{children:['<p>Called whenever the object needs to paint. The given <a href="https',":api",'.flutter.dev/flutter/dart-ui/Canvas-class.html">Canvas</a> has its\ncoordinate space configured such that the origin is at the top left of the\nbox. The area of the box is the size of the <code>size</code> argument.</p>\n<p>Paint operations should remain inside the given area. Graphical\noperations outside the bounds may be silently ignored, clipped, or not\nclipped. It may sometimes be difficult to guarantee that a certain\noperation is inside the bounds (e.g., drawing a rectangle whose size is\ndetermined by user inputs). In that case, consider calling\n<a href="https',":api",'.flutter.dev/flutter/dart-ui/Canvas/clipRect.html">Canvas.clipRect</a> at the beginning of <a href="../../custom_painters_telegram_logo/TelegramLogo/paint.md">paint</a> so everything that follows\nwill be guaranteed to only draw within the clipped area.</p>\n<p>Implementations should be wary of correctly pairing any calls to\n<a href="https',":api",'.flutter.dev/flutter/dart-ui/Canvas/save.html">Canvas.save</a>/<a href="https',":api",'.flutter.dev/flutter/dart-ui/Canvas/saveLayer.html">Canvas.saveLayer</a> and <a href="https',":api",'.flutter.dev/flutter/dart-ui/Canvas/restore.html">Canvas.restore</a>, otherwise all\nsubsequent painting on this canvas may be affected, with potentially\nhilarious but confusing results.</p>\n<p>To paint text on a <a href="https',":api",'.flutter.dev/flutter/dart-ui/Canvas-class.html">Canvas</a>, use a <a href="https',":api",'.flutter.dev/flutter/painting/TextPainter-class.html">TextPainter</a>.</p>\n<p>To paint an image on a <a href="https',":api",'.flutter.dev/flutter/dart-ui/Canvas-class.html">Canvas</a>:</p>\n<ol>\n<li>\n<p>Obtain an <a href="https',":api",'.flutter.dev/flutter/painting/ImageStream-class.html">ImageStream</a>, for example by calling <a href="https',":api",'.flutter.dev/flutter/painting/ImageProvider/resolve.html">ImageProvider.resolve</a>\non an <a href="https',":api",'.flutter.dev/flutter/painting/AssetImage-class.html">AssetImage</a> or <a href="https',":api",'.flutter.dev/flutter/painting/NetworkImage-class.html">NetworkImage</a> object.</p>\n</li>\n<li>\n<p>Whenever the <a href="https',":api",'.flutter.dev/flutter/painting/ImageStream-class.html">ImageStream</a>\'s underlying <a href="https',":api",'.flutter.dev/flutter/painting/ImageInfo-class.html">ImageInfo</a> object changes\n(see <a href="https',":api",'.flutter.dev/flutter/painting/ImageStream/addListener.html">ImageStream.addListener</a>), create a new instance of your custom\npaint delegate, giving it the new <a href="https',":api",'.flutter.dev/flutter/painting/ImageInfo-class.html">ImageInfo</a> object.</p>\n</li>\n<li>\n<p>In your delegate\'s <a href="../../custom_painters_telegram_logo/TelegramLogo/paint.md">paint</a> method, call the <a href="https',":api",'.flutter.dev/flutter/dart-ui/Canvas/drawImage.html">Canvas.drawImage</a>,\n<a href="https',":api",'.flutter.dev/flutter/dart-ui/Canvas/drawImageRect.html">Canvas.drawImageRect</a>, or <a href="https',":api",'.flutter.dev/flutter/dart-ui/Canvas/drawImageNine.html">Canvas.drawImageNine</a> methods to paint the\n<a href="https',":api",'.flutter.dev/flutter/painting/ImageInfo/image.html">ImageInfo.image</a> object, applying the <a href="https',":api",'.flutter.dev/flutter/painting/ImageInfo/scale.html">ImageInfo.scale</a> value to\nobtain the correct rendering size.</p>\n</li>\n</ol>']}),"\n",(0,n.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-dart",children:"@override\nvoid paint(Canvas canvas, Size size) \\{\n  final Paint paint0Fill = Paint()..style = PaintingStyle.fill;\n  paint0Fill.shader = ui.Gradient.linear(\n      Offset(size.width * 0.6670000, size.height * 0.1670000),\n      Offset(size.width * 0.4170000, size.height * 0.7500000), [\n    const Color(0xff37aee2).withOpacity(1),\n    const Color(0xff1e96c8).withOpacity(1)\n  ], [\n    0,\n    1\n  ]);\n  canvas.drawCircle(\n    Offset(size.width * 0.5000000, size.height * 0.5000000),\n    size.width * 0.5000000,\n    paint0Fill,\n  );\n\n  final Path path_1 = Path();\n  path_1.moveTo(size.width * 0.4083333, size.height * 0.7291667);\n  path_1.cubicTo(\n    size.width * 0.3921333,\n    size.height * 0.7291667,\n    size.width * 0.3948875,\n    size.height * 0.7230500,\n    size.width * 0.3893000,\n    size.height * 0.7076250,\n  );\n  path_1.lineTo(size.width * 0.3416667, size.height * 0.5508625);\n  path_1.lineTo(size.width * 0.7083333, size.height * 0.3333333);\n\n  final Paint paint1Fill = Paint()..style = PaintingStyle.fill;\n  paint1Fill.color = const Color(0xffc8daea).withOpacity(1.0);\n  canvas.drawPath(path_1, paint1Fill);\n\n  final Path path_2 = Path();\n  path_2.moveTo(size.width * 0.4083333, size.height * 0.7291667);\n  path_2.cubicTo(\n    size.width * 0.4208333,\n    size.height * 0.7291667,\n    size.width * 0.4263542,\n    size.height * 0.7234500,\n    size.width * 0.4333333,\n    size.height * 0.7166667,\n  );\n  path_2.lineTo(size.width * 0.5000000, size.height * 0.6518417);\n  path_2.lineTo(size.width * 0.4168417, size.height * 0.6016958);\n\n  final Paint paint2Fill = Paint()..style = PaintingStyle.fill;\n  paint2Fill.color = const Color(0xffa9c9dd).withOpacity(1.0);\n  canvas.drawPath(path_2, paint2Fill);\n\n  final Path path_3 = Path();\n  path_3.moveTo(size.width * 0.4168333, size.height * 0.6017083);\n  path_3.lineTo(size.width * 0.6183333, size.height * 0.7505792);\n  path_3.cubicTo(\n    size.width * 0.6413292,\n    size.height * 0.7632667,\n    size.width * 0.6579208,\n    size.height * 0.7566958,\n    size.width * 0.6636500,\n    size.height * 0.7292333,\n  );\n  path_3.lineTo(size.width * 0.7456708, size.height * 0.3427208);\n  path_3.cubicTo(\n    size.width * 0.7540667,\n    size.height * 0.3090542,\n    size.width * 0.7328375,\n    size.height * 0.2937792,\n    size.width * 0.7108375,\n    size.height * 0.3037667,\n  );\n  path_3.lineTo(size.width * 0.2292125, size.height * 0.4894792);\n  path_3.cubicTo(\n    size.width * 0.1963375,\n    size.height * 0.5026667,\n    size.width * 0.1965333,\n    size.height * 0.5210083,\n    size.width * 0.2232208,\n    size.height * 0.5291792,\n  );\n  path_3.lineTo(size.width * 0.3468167, size.height * 0.5677583);\n  path_3.lineTo(size.width * 0.6329542, size.height * 0.3872375);\n  path_3.cubicTo(\n    size.width * 0.6464625,\n    size.height * 0.3790458,\n    size.width * 0.6588625,\n    size.height * 0.3834458,\n    size.width * 0.6486875,\n    size.height * 0.3924792,\n  );\n\n  final Paint paint3Fill = Paint()..style = PaintingStyle.fill;\n  paint3Fill.shader = ui.Gradient.linear(\n      Offset(size.width * 0.6600000, size.height * 0.4370000),\n      Offset(size.width * 0.8510000, size.height * 0.8020000), [\n    const Color(0xffeff7fc).withOpacity(1),\n    const Color(0xffffffff).withOpacity(1)\n  ], [\n    0,\n    1\n  ]);\n  canvas.drawPath(path_3, paint3Fill);\n\\}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>l,x:()=>h});var i=a(296540);const n={},s=i.createContext(n);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);