"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[300467],{875735:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>r});const i=JSON.parse('{"id":"talawa-mobile-docs/view_model_after_auth_view_models_feed_view_models_organization_feed_view_model/OrganizationFeedViewModel/dispose","title":"dispose method","description":"- @override","source":"@site/docs/talawa-mobile-docs/view_model_after_auth_view_models_feed_view_models_organization_feed_view_model/OrganizationFeedViewModel/dispose.md","sourceDirName":"talawa-mobile-docs/view_model_after_auth_view_models_feed_view_models_organization_feed_view_model/OrganizationFeedViewModel","slug":"/talawa-mobile-docs/view_model_after_auth_view_models_feed_view_models_organization_feed_view_model/OrganizationFeedViewModel/dispose","permalink":"/docs/talawa-mobile-docs/view_model_after_auth_view_models_feed_view_models_organization_feed_view_model/OrganizationFeedViewModel/dispose","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_after_auth_view_models_feed_view_models_organization_feed_view_model/OrganizationFeedViewModel/dispose.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"currentOrgName property","permalink":"/docs/talawa-mobile-docs/view_model_after_auth_view_models_feed_view_models_organization_feed_view_model/OrganizationFeedViewModel/currentOrgName"},"next":{"title":"fetchNewPosts method","permalink":"/docs/talawa-mobile-docs/view_model_after_auth_view_models_feed_view_models_organization_feed_view_model/OrganizationFeedViewModel/fetchNewPosts"}}');var d=t(474848),n=t(28453);const s={},a="dispose method",l={},r=[{value:"Implementation",id:"implementation",level:2}];function _(e){const o={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.header,{children:(0,d.jsx)(o.h1,{id:"dispose-method",children:"dispose method"})}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsxs)(o.li,{children:["@",(0,d.jsx)(o.a,{href:"https:api.flutter.dev/flutter/dart-core/override-constant.html",children:"override"})]}),"\n"]}),"\n",(0,d.jsx)(o.p,{children:"void dispose\n()"}),"\n",(0,d.jsx)(o.p,{children:(0,d.jsx)(o.em,{children:'<span class="feature">override</span>'})}),"\n",(0,d.jsxs)(o.p,{children:['<p>Discards any resources used by the object. After this is called, the\nobject is not in a usable state and should be discarded (calls to\n<a href="https',":api",".flutter.dev/flutter/foundation/ChangeNotifier/addListener.html\">addListener</a> will throw after the object is disposed).</p>\n<p>This method should only be called by the object's owner.</p>\n<p>This method does not notify listeners, and clears the listener list once\nit is called. Consumers of this class must decide on whether to notify\nlisteners or not immediately before disposal.</p>"]}),"\n",(0,d.jsx)(o.h2,{id:"implementation",children:"Implementation"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-dart",children:"@override\nvoid dispose() \\{\n  Canceling the subscription so that there will be no rebuild after the widget is disposed.\n  _currentOrganizationStreamSubscription.cancel();\n  _postsSubscription.cancel();\n  _updatePostSubscription.cancel();\n  super.dispose();\n\\}\n"})})]})}function c(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,d.jsx)(o,{...e,children:(0,d.jsx)(_,{...e})}):_(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>s,x:()=>a});var i=t(296540);const d={},n=i.createContext(d);function s(e){const o=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),i.createElement(n.Provider,{value:o},e.children)}}}]);