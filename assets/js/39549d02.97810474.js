"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[72771],{2961:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=n(85893),s=n(11151);const o={},i="saveCurrentOrgInHive method",a={id:"talawa-mobile-docs/services_user_config/UserConfig/saveCurrentOrgInHive",title:"saveCurrentOrgInHive method",description:"void saveCurrentOrgInHive",source:"@site/docs/talawa-mobile-docs/services_user_config/UserConfig/saveCurrentOrgInHive.md",sourceDirName:"talawa-mobile-docs/services_user_config/UserConfig",slug:"/talawa-mobile-docs/services_user_config/UserConfig/saveCurrentOrgInHive",permalink:"/docs/talawa-mobile-docs/services_user_config/UserConfig/saveCurrentOrgInHive",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_user_config/UserConfig/saveCurrentOrgInHive.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"initialiseStream method",permalink:"/docs/talawa-mobile-docs/services_user_config/UserConfig/initialiseStream"},next:{title:"saveUserInHive method",permalink:"/docs/talawa-mobile-docs/services_user_config/UserConfig/saveUserInHive"}},c={},l=[{value:"Implementation",id:"implementation",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"savecurrentorginhive-method",children:"saveCurrentOrgInHive method"})}),"\n",(0,t.jsxs)(r.p,{children:["void saveCurrentOrgInHive\n(",(0,t.jsx)(r.a,{href:"/docs/talawa-mobile-docs/models_organization_org_info/OrgInfo-class",children:"OrgInfo"})," saveOrgAsCurrent)"]}),"\n",(0,t.jsx)(r.h2,{id:"implementation",children:"Implementation"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-dart",children:"void saveCurrentOrgInHive(OrgInfo saveOrgAsCurrent) \\{\n  _currentOrg = saveOrgAsCurrent;\n  _currentOrgInfoController.add(_currentOrg!);\n  final box = Hive.box\\<OrgInfo\\>('currentOrg');\n  if (box.get('org') == null) \\{\n    box.put('org', _currentOrg!);\n  \\} else \\{\n    box.put('org', _currentOrg!);\n  \\}\n\\}\n"})})]})}function u(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>i});var t=n(67294);const s={},o=t.createContext(s);function i(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);