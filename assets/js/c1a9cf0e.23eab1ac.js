"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[70428],{71579:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>n,toc:()=>o});var a=s(85893),r=s(11151);const i={},c="getDirectChatsByUserId method",n={id:"talawa-mobile-docs/services_chat_service/ChatService/getDirectChatsByUserId",title:"getDirectChatsByUserId method",description:"Future&lt;void\\> getDirectChatsByUserId",source:"@site/docs/talawa-mobile-docs/services_chat_service/ChatService/getDirectChatsByUserId.md",sourceDirName:"talawa-mobile-docs/services_chat_service/ChatService",slug:"/talawa-mobile-docs/services_chat_service/ChatService/getDirectChatsByUserId",permalink:"/docs/talawa-mobile-docs/services_chat_service/ChatService/getDirectChatsByUserId",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_chat_service/ChatService/getDirectChatsByUserId.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"getDirectChatMessagesByChatId method",permalink:"/docs/talawa-mobile-docs/services_chat_service/ChatService/getDirectChatMessagesByChatId"},next:{title:"sendMessageToDirectChat method",permalink:"/docs/talawa-mobile-docs/services_chat_service/ChatService/sendMessageToDirectChat"}},d={},o=[{value:"Implementation",id:"implementation",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"getdirectchatsbyuserid-method",children:"getDirectChatsByUserId method"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https:api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> getDirectChatsByUserId\n()"]}),"\n",(0,a.jsx)(t.p,{children:"<p>This function is used to get all the chats by the user.</p>\n<p>parameters required:</p>\n<ul>\n<li><code>usedId</code> - current user id, to get all the direct chats associated with this id.</li>\n</ul>"}),"\n",(0,a.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:"Future\\<void\\> getDirectChatsByUserId() async \\{\n  final userId = _userConfig.currentUser.id;\n\n  trigger graphQL query to get all the chats of the user using [userId].\n  final String query = ChatQueries().fetchDirectChatsByUserId(userId!);\n\n  final result = await _dbFunctions.gqlAuthQuery(query);\n\n  final directMessageList = result.data['directChatsByUserID'] as List;\n\n  loop through the result [directMessageList] and append the element to the directChat.\n  directMessageList.forEach((chat) \\{\n    final directChat =\n        ChatListTileDataModel.fromJson(chat as Map\\<String, dynamic\\>);\n\n    directChat.users!.forEach((element) \\{\n      if (element.id != userId) _chatController.add(directChat);\n    \\});\n  \\});\n\\}\n"})})]})}function l(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>n,a:()=>c});var a=s(67294);const r={},i=a.createContext(r);function c(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);