"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[738432],{316515:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>n});var s=a(785893),i=a(511151);const o={},d="getChatMessages method",c={id:"talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/getChatMessages",title:"getChatMessages method",description:"Future&lt;void\\> getChatMessages",source:"@site/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/getChatMessages.md",sourceDirName:"talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel",slug:"/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/getChatMessages",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/getChatMessages",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/getChatMessages.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"dispose method",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/dispose"},next:{title:"initialise method",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/initialise"}},l={},n=[{value:"Implementation",id:"implementation",level:2}];function r(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"getchatmessages-method",children:"getChatMessages method"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> getChatMessages\n(",(0,s.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," chatId)"]}),"\n",(0,s.jsx)(t.p,{children:"<p>This function get all messages for a chat.</p>\n<p>params:</p>\n<ul>\n<li><code>chatId</code> : id of a chat for which messages need to be fetched.</li>\n</ul>"}),"\n",(0,s.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"Future\\<void\\> getChatMessages(String chatId) async \\{\n  _chatMessagesByUser.clear();\n  chatState = ChatState.loading;\n  await _chatService.getMessagesFromDirectChat();\n  variable\n  final List\\<ChatMessage\\> messages = [];\n  _chatMessageSubscription =\n      _chatService.chatMessagesStream.listen((newMessage) \\{\n    messages.add(newMessage);\n    _chatMessagesByUser[chatId] = messages;\n  \\});\n  use `chatService` services\n  await _chatService.getDirectChatMessagesByChatId(chatId);\n  chatState = ChatState.complete;\n  notifyListeners();\n\\}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},511151:(e,t,a)=>{a.d(t,{Z:()=>c,a:()=>d});var s=a(667294);const i={},o=s.createContext(i);function d(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);