"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[908445],{114047:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"talawa-admin-docs/screens/UserPortal/Chat/Chat/functions/default","title":"default","description":"talawa-admin \u2022 Docs","source":"@site/docs/talawa-admin-docs/screens/UserPortal/Chat/Chat/functions/default.md","sourceDirName":"talawa-admin-docs/screens/UserPortal/Chat/Chat/functions","slug":"/talawa-admin-docs/screens/UserPortal/Chat/Chat/functions/default","permalink":"/docs/talawa-admin-docs/screens/UserPortal/Chat/Chat/functions/default","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-admin-docs/screens/UserPortal/Chat/Chat/functions/default.md","tags":[],"version":"current","frontMatter":{}}');var a=t(474848),r=t(28453);const i={},c=void 0,d={},l=[{value:"Features:",id:"features",level:2},{value:"GraphQL Queries:",id:"graphql-queries",level:2},{value:"Event Handlers:",id:"event-handlers",level:2},{value:"Rendering:",id:"rendering",level:2},{value:"Returns",id:"returns",level:2},{value:"Defined in",id:"defined-in",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/talawa-admin-docs/",children:(0,a.jsx)(n.strong,{children:"talawa-admin"})})," \u2022 ",(0,a.jsx)(n.strong,{children:"Docs"})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/talawa-admin-docs/modules",children:"talawa-admin"})," / ",(0,a.jsx)(n.a,{href:"/docs/talawa-admin-docs/screens/UserPortal/Chat/Chat/",children:"screens/UserPortal/Chat/Chat"})," / default"]}),"\n",(0,a.jsx)(n.h1,{id:"function-default",children:"Function: default()"}),"\n",(0,a.jsxs)(n.p,{children:["> ",(0,a.jsx)(n.strong,{children:"default"}),"(): ",(0,a.jsx)(n.code,{children:"JSX.Element"})]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"chat"})," component provides a user interface for interacting with contacts and chat rooms within an organization.\nIt features a contact list with search functionality and displays the chat room for the selected contact.\nThe component uses GraphQL to fetch and manage contact data, and React state to handle user interactions."]}),"\n",(0,a.jsx)(n.h2,{id:"features",children:"Features:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Search Contacts:"})," Allows users to search for contacts by their first name."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Contact List:"})," Displays a list of contacts with their details and a profile image."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Chat Room:"})," Shows the chat room for the selected contact."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"graphql-queries",children:"GraphQL Queries:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"ORGANIZATIONS_MEMBER_CONNECTION_LIST"}),": Fetches a list of members within an organization, with optional filtering based on the first name."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"event-handlers",children:"Event Handlers:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"handleSearch"}),": Updates the filterName state and refetches the contact data based on the search query."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"handleSearchByEnter"}),": Handles search input when the Enter key is pressed."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"handleSearchByBtnClick"}),": Handles search input when the search button is clicked."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"rendering",children:"Rendering:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Displays a search input field and a search button for filtering contacts."}),"\n",(0,a.jsx)(n.li,{children:"Shows a list of contacts with their details and profile images."}),"\n",(0,a.jsx)(n.li,{children:"Renders a chat room component for the selected contact."}),"\n",(0,a.jsx)(n.li,{children:"Displays a loading indicator while contact data is being fetched."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"JSX.Element"})}),"\n",(0,a.jsxs)(n.p,{children:["The rendered ",(0,a.jsx)(n.code,{children:"chat"})," component."]}),"\n",(0,a.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-admin/blob/9dd5d7fd647f8a7c9e1c1e14bf645b71b32c51c2/src/screens/UserPortal/Chat/Chat.tsx#L51",children:"src/screens/UserPortal/Chat/Chat.tsx:51"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(296540);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);