"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[80257],{468597:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>l,frontMatter:()=>n,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"talawa-mobile-docs/utils_chat_queries/ChatQueries/fetchDirectChatMessagesByChatId","title":"fetchDirectChatMessagesByChatId method","description":"String fetchDirectChatMessagesByChatId","source":"@site/docs/talawa-mobile-docs/utils_chat_queries/ChatQueries/fetchDirectChatMessagesByChatId.md","sourceDirName":"talawa-mobile-docs/utils_chat_queries/ChatQueries","slug":"/talawa-mobile-docs/utils_chat_queries/ChatQueries/fetchDirectChatMessagesByChatId","permalink":"/docs/talawa-mobile-docs/utils_chat_queries/ChatQueries/fetchDirectChatMessagesByChatId","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/utils_chat_queries/ChatQueries/fetchDirectChatMessagesByChatId.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"ChatQueries constructor","permalink":"/docs/talawa-mobile-docs/utils_chat_queries/ChatQueries/"},"next":{"title":"fetchDirectChatsByUserId method","permalink":"/docs/talawa-mobile-docs/utils_chat_queries/ChatQueries/fetchDirectChatsByUserId"}}');var r=a(474848),i=a(28453);const n={},c="fetchDirectChatMessagesByChatId method",h={},d=[{value:"Implementation",id:"implementation",level:2}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"fetchdirectchatmessagesbychatid-method",children:"fetchDirectChatMessagesByChatId method"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," fetchDirectChatMessagesByChatId\n(",(0,r.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," chatId)"]}),"\n",(0,r.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-dart",children:"String fetchDirectChatMessagesByChatId(String chatId) \\{\n  return '''\n      query \\{\n        directChatsMessagesByChatID(id: \"$chatId\") \\{\n          _id\n          messageContent\n          sender \\{\n            _id\n            firstName\n            image\n          \\}\n          receiver \\{\n            _id\n            firstName\n            image\n          \\}\n        \\}\n      \\}\n  ''';\n\\}\n"})})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>n,x:()=>c});var s=a(296540);const r={},i=s.createContext(r);function n(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);