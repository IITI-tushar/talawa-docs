"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[7218],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(o),m=n,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return o?r.createElement(f,l(l({ref:t},u),{},{components:o})):r.createElement(f,l({ref:t},u))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<a;p++)l[p]=o[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9386:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=o(7462),n=(o(7294),o(3905));const a={id:"follow-tag-support",title:"Follow Tag Support"},l=void 0,i={unversionedId:"features/notifications/follow-tag-support",id:"features/notifications/follow-tag-support",title:"Follow Tag Support",description:"This section is a work in progress.",source:"@site/docs/features/notifications/follow-tag.md",sourceDirName:"features/notifications",slug:"/features/notifications/follow-tag-support",permalink:"/docs/features/notifications/follow-tag-support",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/features/notifications/follow-tag.md",tags:[],version:"current",frontMatter:{id:"follow-tag-support",title:"Follow Tag Support"},sidebar:"docs",previous:{title:"Notifications",permalink:"/docs/features/notifications/notifications-overview"},next:{title:"Data Management",permalink:"/docs/category/data-management"}},s={},p=[{value:"Code: TAG",id:"code-tag",level:2},{value:"Overview",id:"overview",level:2},{value:"Problem",id:"problem",level:3},{value:"Goals",id:"goals",level:3},{value:"Out of Scope",id:"out-of-scope",level:3},{value:"People and Roles",id:"people-and-roles",level:3},{value:"Context",id:"context",level:2},{value:"Use Cases",id:"use-cases",level:3},{value:"Proposal/Solution",id:"proposalsolution",level:2},{value:"User Experience",id:"user-experience",level:3},{value:"Important Details To Capture",id:"important-details-to-capture",level:3},{value:"Future Work",id:"future-work",level:3},{value:"Tasks and Timeline",id:"tasks-and-timeline",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This section is a work in progress.")),(0,n.kt)("h2",{id:"code-tag"},"Code: TAG"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Authored by")," ",(0,n.kt)("em",{parentName:"p"}," ",(0,n.kt)("strong",{parentName:"em"},"Xavier Bryson")," ")," ",(0,n.kt)("em",{parentName:"p"},". Last updated on")," ",(0,n.kt)("em",{parentName:"p"}," ",(0,n.kt)("strong",{parentName:"em"},"14/03/21")," ")),(0,n.kt)("p",null,"This feature aims to ",(0,n.kt)("em",{parentName:"p"}," ",(0,n.kt)("strong",{parentName:"em"},"track posts")," ")," by _ ",(0,n.kt)("strong",{parentName:"p"},"allowing users to subscribe to hashtags"),"."),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("h3",{id:"problem"},"Problem"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Users of the application need a way to follow posts under similar topic/groupings:"))),(0,n.kt)("h3",{id:"goals"},"Goals"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Allow for the customizing of a users news feed")," :\nWith the following of certain topics through hashtags, a user will be able to receive more tailored content.")),(0,n.kt)("h3",{id:"out-of-scope"},"Out of Scope"),(0,n.kt)("p",null,"N/A"),(0,n.kt)("h3",{id:"people-and-roles"},"People and Roles"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Xavier Bryson (Feature Lead)"),": clarify functionality and assumptions.")),(0,n.kt)("h2",{id:"context"},"Context"),(0,n.kt)("h3",{id:"use-cases"},"Use Cases"),(0,n.kt)("p",null,"N/A"),(0,n.kt)("h2",{id:"proposalsolution"},"Proposal/Solution"),(0,n.kt)("p",null,"Similar to Instagram's implementation (outlined in the link below):"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://help.instagram.com/2003408499915301"},"https://help.instagram.com/2003408499915301")),(0,n.kt)("h3",{id:"user-experience"},"User Experience"),(0,n.kt)("p",null,"N/A"),(0,n.kt)("h3",{id:"important-details-to-capture"},"Important Details To Capture"),(0,n.kt)("p",null,"N/A"),(0,n.kt)("h3",{id:"future-work"},"Future Work"),(0,n.kt)("p",null,"N/A"),(0,n.kt)("h2",{id:"tasks-and-timeline"},"Tasks and Timeline"),(0,n.kt)("p",null,"N/A"))}d.isMDXComponent=!0}}]);