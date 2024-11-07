"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[445895],{143147:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var r=n(785893),o=n(511151);const t={},i="saveUserInHive method",a={id:"talawa-mobile-docs/services_user_config/UserConfig/saveUserInHive",title:"saveUserInHive method",description:"void saveUserInHive",source:"@site/docs/talawa-mobile-docs/services_user_config/UserConfig/saveUserInHive.md",sourceDirName:"talawa-mobile-docs/services_user_config/UserConfig",slug:"/talawa-mobile-docs/services_user_config/UserConfig/saveUserInHive",permalink:"/docs/talawa-mobile-docs/services_user_config/UserConfig/saveUserInHive",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_user_config/UserConfig/saveUserInHive.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"saveCurrentOrgInHive method",permalink:"/docs/talawa-mobile-docs/services_user_config/UserConfig/saveCurrentOrgInHive"},next:{title:"updateAccessToken method",permalink:"/docs/talawa-mobile-docs/services_user_config/UserConfig/updateAccessToken"}},c={},d=[{value:"Implementation",id:"implementation",level:2}];function l(e){const s={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"saveuserinhive-method",children:"saveUserInHive method"})}),"\n",(0,r.jsx)(s.p,{children:"void saveUserInHive\n()"}),"\n",(0,r.jsx)(s.h2,{id:"implementation",children:"Implementation"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-dart",children:"void saveUserInHive() \\{\n  final box = Hive.box\\<User\\>('currentUser');\n  if (box.get('user') == null) \\{\n    box.put('user', _currentUser!);\n  \\} else \\{\n    box.put('user', _currentUser!);\n  \\}\n\\}\n"})})]})}function u(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},511151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>i});var r=n(667294);const o={},t=r.createContext(o);function i(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);