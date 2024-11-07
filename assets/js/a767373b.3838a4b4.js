"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[195849],{89556:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>n,contentTitle:()=>d,default:()=>r,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=i(785893),o=i(511151);const l={},d="initialise method",s={id:"talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/initialise",title:"initialise method",description:"Future&lt;void\\> initialise",source:"@site/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/initialise.md",sourceDirName:"talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel",slug:"/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/initialise",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/initialise",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/initialise.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"getChatMessages method",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/getChatMessages"},next:{title:"listKey property",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/listKey"}},n={},c=[{value:"Implementation",id:"implementation",level:2}];function _(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"initialise-method",children:"initialise method"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> initialise\n()"]}),"\n",(0,a.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:"Future\\<void\\> initialise() async \\{\n  setState(ViewState.busy);\n  chatState = ChatState.loading;\n\n  _chatListSubscription = _chatService.chatListStream.listen((newChat) \\{\n    _uniqueChatIds.add(newChat.id!);\n    _chats.insert(0, newChat);\n  \\});\n\n  await _chatService.getDirectChatsByUserId();\n\n  chatState = ChatState.complete;\n  setState(ViewState.idle);\n\\}\n"})})]})}function r(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(_,{...e})}):_(e)}},511151:(e,t,i)=>{i.d(t,{Z:()=>s,a:()=>d});var a=i(667294);const o={},l=a.createContext(o);function d(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);