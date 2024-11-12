"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[754899],{451831:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>_,frontMatter:()=>r,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"talawa-mobile-docs/views_after_auth_screens_join_org_after_auth_join_organisation_after_auth/JoinOrganisationAfterAuth/scanQR","title":"scanQR method","description":"void scanQR","source":"@site/docs/talawa-mobile-docs/views_after_auth_screens_join_org_after_auth_join_organisation_after_auth/JoinOrganisationAfterAuth/scanQR.md","sourceDirName":"talawa-mobile-docs/views_after_auth_screens_join_org_after_auth_join_organisation_after_auth/JoinOrganisationAfterAuth","slug":"/talawa-mobile-docs/views_after_auth_screens_join_org_after_auth_join_organisation_after_auth/JoinOrganisationAfterAuth/scanQR","permalink":"/docs/talawa-mobile-docs/views_after_auth_screens_join_org_after_auth_join_organisation_after_auth/JoinOrganisationAfterAuth/scanQR","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/views_after_auth_screens_join_org_after_auth_join_organisation_after_auth/JoinOrganisationAfterAuth/scanQR.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"orgId property","permalink":"/docs/talawa-mobile-docs/views_after_auth_screens_join_org_after_auth_join_organisation_after_auth/JoinOrganisationAfterAuth/orgId"},"next":{"title":"JoinOrganisationAfterAuth class","permalink":"/docs/talawa-mobile-docs/views_after_auth_screens_join_org_after_auth_join_organisation_after_auth/JoinOrganisationAfterAuth-class"}}');var o=t(474848),i=t(28453);const r={},s="scanQR method",c={},l=[{value:"Implementation",id:"implementation",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"scanqr-method",children:"scanQR method"})}),"\n",(0,o.jsxs)(n.p,{children:["void scanQR\n(",(0,o.jsx)(n.a,{href:"https:api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," context, ",(0,o.jsx)(n.a,{href:"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_select_organization_view_model/SelectOrganizationViewModel-class",children:"SelectOrganizationViewModel"})," model)"]}),"\n",(0,o.jsx)(n.p,{children:"<p>scanQR returns a widget that is use in joining the organization via the QR code.</p>"}),"\n",(0,o.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-dart",children:"void scanQR(BuildContext context, SelectOrganizationViewModel model) \\{\n  showModalBottomSheet(\n    context: context,\n    barrierColor: Colors.transparent,\n    shape: const RoundedRectangleBorder(\n      borderRadius: BorderRadius.only(\n        topLeft: Radius.circular(30),\n        topRight: Radius.circular(30),\n      ),\n    ),\n    builder: (BuildContext context) \\{\n      return ClipRRect(\n        borderRadius: const BorderRadius.only(\n          topLeft: Radius.circular(30),\n          topRight: Radius.circular(30),\n        ),\n        child: Container(\n          height: MediaQuery.of(context).size.width,\n          decoration: BoxDecoration(\n            color: Theme.of(context).colorScheme.secondary,\n          ),\n          child: Column(\n            mainAxisAlignment: MainAxisAlignment.center,\n            children: [\n              SizedBox(\n                height: 250,\n                width: 250,\n                child: QRView(\n                  key: model.qrKey,\n                  onQRViewCreated: (controller) =\\>\n                      _onQRViewCreated(controller, model),\n                  overlay: QrScannerOverlayShape(\n                    overlayColor: Theme.of(context).colorScheme.secondary,\n                    borderRadius: 10,\n                    borderLength: 20,\n                    borderWidth: 10,\n                    cutOutSize: 250,\n                  ),\n                  /*overlayMargin: EdgeInsets.all(50)*/\n                ),\n              ),\n              SizedBox(\n                height: SizeConfig.safeBlockVertical! * 4,\n              ),\n              const Text('Scan QR'),\n              SizedBox(\n                height: SizeConfig.safeBlockVertical! * 4,\n              )\n            ],\n          ),\n        ),\n      );\n    \\},\n  );\n\\}\n"})})]})}function _(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var a=t(296540);const o={},i=a.createContext(o);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);