"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[989639],{620861:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>s,contentTitle:()=>n,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"talawa-mobile-docs/services_third_party_service_multi_media_pick_service/MultiMediaPickerService/cropImage","title":"cropImage method","description":"Future&lt;File?\\\\> cropImage","source":"@site/docs/talawa-mobile-docs/services_third_party_service_multi_media_pick_service/MultiMediaPickerService/cropImage.md","sourceDirName":"talawa-mobile-docs/services_third_party_service_multi_media_pick_service/MultiMediaPickerService","slug":"/talawa-mobile-docs/services_third_party_service_multi_media_pick_service/MultiMediaPickerService/cropImage","permalink":"/docs/talawa-mobile-docs/services_third_party_service_multi_media_pick_service/MultiMediaPickerService/cropImage","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_third_party_service_multi_media_pick_service/MultiMediaPickerService/cropImage.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"MultiMediaPickerService constructor","permalink":"/docs/talawa-mobile-docs/services_third_party_service_multi_media_pick_service/MultiMediaPickerService/"},"next":{"title":"fileStream property","permalink":"/docs/talawa-mobile-docs/services_third_party_service_multi_media_pick_service/MultiMediaPickerService/fileStream"}}');var a=t(474848),c=t(28453);const o={},n="cropImage method",s={},l=[{value:"Implementation",id:"implementation",level:2}];function d(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.header,{children:(0,a.jsx)(i.h1,{id:"cropimage-method",children:"cropImage method"})}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<",(0,a.jsx)(i.a,{href:"https:api.flutter.dev/flutter/dart-io/File-class.html",children:"File"}),"?> cropImage\n({required ",(0,a.jsx)(i.a,{href:"https:api.flutter.dev/flutter/dart-io/File-class.html",children:"File"})," imageFile})"]}),"\n",(0,a.jsx)(i.p,{children:"<p>This function is used to crop the image selected by the user.</p>\n<p>The function accepts a <code>File</code> type image and returns <code>File</code> type of cropped image.</p>\n<p><strong>params</strong>:</p>\n<ul>\n<li><code>imageFile</code>: the image file to be cropped.</li>\n</ul>\n<p><strong>returns</strong>:</p>\n<ul>\n<li><code>Future<File?></code>: the image after been cropped.</li>\n</ul>"}),"\n",(0,a.jsx)(i.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-dart",children:"Future\\<File?\\> cropImage(\\{required File imageFile\\}) async \\{\n  try, to crop the image and returns a File with cropped image path.\n  try \\{\n    final CroppedFile? croppedImage = await locator\\<ImageCropper\\>().cropImage(\n      sourcePath: imageFile.path,\n      aspectRatioPresets: [\n        CropAspectRatioPreset.square,\n        CropAspectRatioPreset.original,\n      ],\n      uiSettings: [\n        AndroidUiSettings(\n          toolbarTitle: 'Crop Image',\n          toolbarColor: const Color(0xff18191A),\n          toolbarWidgetColor: Colors.white,\n          backgroundColor: Colors.black,\n          cropGridColor: Colors.white,\n          initAspectRatio: CropAspectRatioPreset.original,\n          lockAspectRatio: false,\n        ),\n        IOSUiSettings(\n          minimumAspectRatio: 1.0,\n        )\n      ],\n    );\n    if (croppedImage != null) \\{\n      return File(croppedImage.path);\n    \\}\n  \\} catch (e) \\{\n    print(\n      \"MultiMediaPickerService : Exception occurred while cropping Image\",\n    );\n  \\}\n  return null;\n\\}\n"})})]})}function p(e={}){const{wrapper:i}={...(0,c.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>n});var r=t(296540);const a={},c=r.createContext(a);function o(e){const i=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function n(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(c.Provider,{value:i},e.children)}}}]);