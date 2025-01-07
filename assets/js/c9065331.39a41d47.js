"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[893525],{395378:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"talawa-mobile-docs/models_post_post_model/Post/getPostCreatedDuration","title":"getPostCreatedDuration method","description":"String getPostCreatedDuration","source":"@site/docs/talawa-mobile-docs/models_post_post_model/Post/getPostCreatedDuration.md","sourceDirName":"talawa-mobile-docs/models_post_post_model/Post","slug":"/talawa-mobile-docs/models_post_post_model/Post/getPostCreatedDuration","permalink":"/docs/talawa-mobile-docs/models_post_post_model/Post/getPostCreatedDuration","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/models_post_post_model/Post/getPostCreatedDuration.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"description property","permalink":"/docs/talawa-mobile-docs/models_post_post_model/Post/description"},"next":{"title":"imageUrl property","permalink":"/docs/talawa-mobile-docs/models_post_post_model/Post/imageUrl"}}');var s=o(474848),r=o(28453);const a={},i="getPostCreatedDuration method",d={},c=[{value:"Implementation",id:"implementation",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"getpostcreatedduration-method",children:"getPostCreatedDuration method"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," getPostCreatedDuration\n()"]}),"\n",(0,s.jsx)(t.p,{children:"<p>this is to get duration of post.</p>\n<p><strong>params</strong>:\nNone</p>\n<p><strong>returns</strong>:</p>\n<ul>\n<li><code>String</code>: date is returned in ago form.</li>\n</ul>"}),"\n",(0,s.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"String getPostCreatedDuration() \\{\n  if (DateTime.now().difference(this.createdAt!).inSeconds \\< 60) \\{\n    return '$\\{DateTime.now().difference(this.createdAt!).inSeconds\\} Seconds Ago';\n  \\} else if (DateTime.now().difference(this.createdAt!).inMinutes \\< 60) \\{\n    return '$\\{DateTime.now().difference(this.createdAt!).inMinutes\\} Minutes Ago';\n  \\} else if (DateTime.now().difference(this.createdAt!).inHours \\< 24) \\{\n    return '$\\{DateTime.now().difference(this.createdAt!).inHours\\} Hours Ago';\n  \\} else if (DateTime.now().difference(this.createdAt!).inDays \\< 30) \\{\n    return '$\\{DateTime.now().difference(this.createdAt!).inDays\\} Days Ago';\n  \\} else if (DateTime.now().difference(this.createdAt!).inDays \\< 365) \\{\n    return '$\\{DateTime.now().difference(this.createdAt!).inDays ~/ 30\\} Months Ago';\n  \\} else \\{\n    return '$\\{DateTime.now().difference(this.createdAt!).inDays ~/ 365\\} Years Ago';\n  \\}\n\\}\n"})})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>i});var n=o(296540);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);