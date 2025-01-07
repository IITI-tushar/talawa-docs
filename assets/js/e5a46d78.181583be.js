"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[883621],{721129:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});const o=JSON.parse('{"id":"talawa-mobile-docs/view_model_pre_auth_view_models_set_url_view_model/SetUrlViewModel/scanQR","title":"scanQR method","description":"void scanQR","source":"@site/docs/talawa-mobile-docs/view_model_pre_auth_view_models_set_url_view_model/SetUrlViewModel/scanQR.md","sourceDirName":"talawa-mobile-docs/view_model_pre_auth_view_models_set_url_view_model/SetUrlViewModel","slug":"/talawa-mobile-docs/view_model_pre_auth_view_models_set_url_view_model/SetUrlViewModel/scanQR","permalink":"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_set_url_view_model/SetUrlViewModel/scanQR","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_pre_auth_view_models_set_url_view_model/SetUrlViewModel/scanQR.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"result property","permalink":"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_set_url_view_model/SetUrlViewModel/result"},"next":{"title":"url property","permalink":"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_set_url_view_model/SetUrlViewModel/url"}}');var i=t(474848),r=t(28453);const l={},a="scanQR method",d={},s=[{value:"Implementation",id:"implementation",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"scanqr-method",children:"scanQR method"})}),"\n",(0,i.jsxs)(n.p,{children:["void scanQR\n(",(0,i.jsx)(n.a,{href:"https:api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," context)"]}),"\n",(0,i.jsx)(n.p,{children:"<p>This function create a widget which is used to scan the QR-code.</p>\n<p><strong>params</strong>:</p>\n<ul>\n<li><code>context</code>: BuildContext</li>\n</ul>\n<p><strong>returns</strong>:\nNone</p>"}),"\n",(0,i.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"void scanQR(BuildContext context) \\{\n  showModalBottomSheet(\n    context: context,\n    barrierColor: Colors.transparent,\n    shape: const RoundedRectangleBorder(\n      borderRadius: BorderRadius.only(\n        topLeft: Radius.circular(30),\n        topRight: Radius.circular(30),\n      ),\n    ),\n    builder: (BuildContext context) \\{\n      return ClipRRect(\n        borderRadius: const BorderRadius.only(\n          topLeft: Radius.circular(30),\n          topRight: Radius.circular(30),\n        ),\n        child: Container(\n          height: MediaQuery.of(context).size.width,\n          decoration: BoxDecoration(\n            color: Theme.of(context).colorScheme.secondary,\n          ),\n          child: Column(\n            mainAxisAlignment: MainAxisAlignment.center,\n            children: [\n              SizedBox(\n                height: 250,\n                width: 250,\n                child: QRView(\n                  key: qrKey,\n                  onQRViewCreated: _onQRViewCreated,\n                  overlay: QrScannerOverlayShape(\n                    borderRadius: 10,\n                    borderLength: 20,\n                    borderWidth: 10,\n                    cutOutSize: 250,\n                  ),\n                  /*overlayMargin: EdgeInsets.all(50)*/\n                ),\n              ),\n              SizedBox(\n                height: SizeConfig.safeBlockVertical! * 4,\n              ),\n              const Text('Scan QR'),\n              SizedBox(\n                height: SizeConfig.safeBlockVertical! * 4,\n              )\n            ],\n          ),\n        ),\n      );\n    \\},\n  );\n\\}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var o=t(296540);const i={},r=o.createContext(i);function l(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);