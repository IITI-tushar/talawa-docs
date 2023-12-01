"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[13774],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>h});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=u(r),p=a,h=d["".concat(l,".").concat(p)]||d[p]||m[p]||n;return r?o.createElement(h,s(s({ref:t},i),{},{components:r})):o.createElement(h,s({ref:t},i))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,s[1]=c;for(var u=2;u<n;u++)s[u]=r[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},39698:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>i,Details:()=>h,SpecifiedBy:()=>d,assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var o=r(87462),a=r(67294),n=r(3905);const s={id:"remove-user-from-group-chat",title:"removeUserFromGroupChat",hide_table_of_contents:!1},c=void 0,l={unversionedId:"schema/mutations/remove-user-from-group-chat",id:"schema/mutations/remove-user-from-group-chat",title:"removeUserFromGroupChat",description:"No description",source:"@site/docs/schema/mutations/remove-user-from-group-chat.mdx",sourceDirName:"schema/mutations",slug:"/schema/mutations/remove-user-from-group-chat",permalink:"/docs/schema/mutations/remove-user-from-group-chat",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/mutations/remove-user-from-group-chat.mdx",tags:[],version:"current",frontMatter:{id:"remove-user-from-group-chat",title:"removeUserFromGroupChat",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"removeUserCustomData",permalink:"/docs/schema/mutations/remove-user-custom-data"},next:{title:"removeUserImage",permalink:"/docs/schema/mutations/remove-user-image"}},u={},i=()=>(0,n.kt)(a.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,n.kt)(a.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,n.kt)(a.Fragment,null,(0,n.kt)("span",{className:"badge badge--"+e.class},e.text)),p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>removeUserFromGroupChat.<b>userId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-removeuserfromgroupchatbuseridbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>removeUserFromGroupChat.<b>chatId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-removeuserfromgroupchatbchatidbcodeid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>GroupChat</code> <Badge class="secondary" text="object"/>',id:"groupchat-",level:4}],h=e=>{let{dataOpen:t,dataClose:r,children:s,startOpen:c=!1}=e;const[l,u]=(0,a.useState)(c);return(0,n.kt)("details",(0,o.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},l?t:r),l&&s)},f={Bullet:i,SpecifiedBy:d,Badge:m,toc:p,Details:h},g="wrapper";function y(e){let{components:t,...r}=e;return(0,n.kt)(g,(0,o.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"No description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"removeUserFromGroupChat(\n  userId: ID!\n  chatId: ID!\n): GroupChat!\n")),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-removeuserfromgroupchatbuseridbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"removeUserFromGroupChat.",(0,n.kt)("b",null,"userId"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-removeuserfromgroupchatbchatidbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"removeUserFromGroupChat.",(0,n.kt)("b",null,"chatId"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("h4",{id:"groupchat-"},(0,n.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/group-chat"},(0,n.kt)("inlineCode",{parentName:"a"},"GroupChat"))," ",(0,n.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null))}y.isMDXComponent=!0}}]);