"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[728541],{692793:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"talawa-admin-docs/screens/Users/Users/functions/default","title":"default","description":"talawa-admin \u2022 Docs","source":"@site/docs/talawa-admin-docs/screens/Users/Users/functions/default.md","sourceDirName":"talawa-admin-docs/screens/Users/Users/functions","slug":"/talawa-admin-docs/screens/Users/Users/functions/default","permalink":"/docs/talawa-admin-docs/screens/Users/Users/functions/default","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-admin-docs/screens/Users/Users/functions/default.md","tags":[],"version":"current","frontMatter":{}}');var i=n(474848),t=n(28453);const d={},l=void 0,a={},c=[{value:"Features:",id:"features",level:2},{value:"GraphQL Queries:",id:"graphql-queries",level:2},{value:"Component State:",id:"component-state",level:2},{value:"Event Handlers:",id:"event-handlers",level:2},{value:"Rendering:",id:"rendering",level:2},{value:"Returns",id:"returns",level:2},{value:"Defined in",id:"defined-in",level:2}];function o(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/talawa-admin-docs/",children:(0,i.jsx)(s.strong,{children:"talawa-admin"})})," \u2022 ",(0,i.jsx)(s.strong,{children:"Docs"})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/talawa-admin-docs/modules",children:"talawa-admin"})," / ",(0,i.jsx)(s.a,{href:"/docs/talawa-admin-docs/screens/Users/Users/",children:"screens/Users/Users"})," / default"]}),"\n",(0,i.jsx)(s.h1,{id:"function-default",children:"Function: default()"}),"\n",(0,i.jsxs)(s.p,{children:["> ",(0,i.jsx)(s.strong,{children:"default"}),"(): ",(0,i.jsx)(s.code,{children:"Element"})]}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"Users"})," component is responsible for displaying a list of users in a paginated and sortable format.\nIt supports search functionality, filtering, and sorting of users. The component integrates with GraphQL\nfor fetching and managing user data and displays results with infinite scrolling."]}),"\n",(0,i.jsx)(s.h2,{id:"features",children:"Features:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Search:"})," Allows users to search for users by their first name."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Sorting:"})," Provides options to sort users by creation date (newest or oldest)."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Filtering:"})," Enables filtering users based on their roles (admin, superadmin, user, etc.)."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Pagination:"})," Utilizes infinite scrolling to load more users as the user scrolls down."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"graphql-queries",children:"GraphQL Queries:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"USER_LIST"}),": Fetches a list of users with specified search, sorting, and pagination parameters."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"ORGANIZATION_CONNECTION_LIST"}),": Fetches a list of organizations to verify organization existence."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"component-state",children:"Component State:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"isLoading"}),": Indicates whether the component is currently loading data."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"hasMore"}),": Indicates if there are more users to load."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"isLoadingMore"}),": Indicates if more users are currently being loaded."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"searchByName"}),": The current search query for user names."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"sortingOption"}),": The current sorting option (newest or oldest)."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"filteringOption"}),": The current filtering option (admin, superadmin, user, cancel)."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"displayedUsers"}),": The list of users currently displayed, filtered and sorted."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"event-handlers",children:"Event Handlers:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"handleSearch"}),": Handles searching users by name and refetches the user list."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"handleSearchByEnter"}),": Handles search input when the Enter key is pressed."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"handleSearchByBtnClick"}),": Handles search input when the search button is clicked."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"resetAndRefetch"}),": Resets search and refetches the user list with default parameters."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"loadMoreUsers"}),": Loads more users when scrolling reaches the end of the list."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"handleSorting"}),": Updates sorting option and refetches the user list."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"handleFiltering"}),": Updates filtering option and refetches the user list."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"rendering",children:"Rendering:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Displays a search input and button for searching users."}),"\n",(0,i.jsx)(s.li,{children:"Provides dropdowns for sorting and filtering users."}),"\n",(0,i.jsx)(s.li,{children:"Renders a table of users with infinite scrolling support."}),"\n",(0,i.jsx)(s.li,{children:"Shows appropriate messages when no users are found or when search yields no results."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"Element"})}),"\n",(0,i.jsxs)(s.p,{children:["The rendered ",(0,i.jsx)(s.code,{children:"Users"})," component."]}),"\n",(0,i.jsx)(s.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/PalisadoesFoundation/talawa-admin/blob/084ac7e92dede9766b77e75cf296f40165965140/src/screens/Users/Users.tsx#L64",children:"src/screens/Users/Users.tsx:64"})})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>l});var r=n(296540);const i={},t=r.createContext(i);function d(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);