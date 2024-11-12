"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[936590],{276074:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>n,frontMatter:()=>r,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/refreshChats","title":"refreshChats method","description":"void refreshChats","source":"@site/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/refreshChats.md","sourceDirName":"talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel","slug":"/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/refreshChats","permalink":"/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/refreshChats","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/refreshChats.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"name property","permalink":"/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/name"},"next":{"title":"sendMessageToDirectChat method","permalink":"/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/sendMessageToDirectChat"}}');var i=a(474848),s=a(28453);const r={},d="refreshChats method",c={},l=[{value:"Implementation",id:"implementation",level:2}];function _(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"refreshchats-method",children:"refreshChats method"})}),"\n",(0,i.jsx)(t.p,{children:"void refreshChats\n()"}),"\n",(0,i.jsx)(t.p,{children:"<p>This function refresh the chats.</p>"}),"\n",(0,i.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-dart",children:"void refreshChats() \\{\n  _chats.clear();\n  _uniqueChatIds.clear();\n  notifyListeners();\n  _chatService.getDirectChatsByUserId();\n\\}\n"})})]})}function n(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(_,{...e})}):_(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>d});var o=a(296540);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);