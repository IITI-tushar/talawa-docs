"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[9085],{3979:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"features/donations-and-fees","title":"Donations & Fees","description":"This section is a work in progress.","source":"@site/docs/features/donations.md","sourceDirName":"features","slug":"/features/donations-and-fees","permalink":"/docs/features/donations-and-fees","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/features/donations.md","tags":[],"version":"current","frontMatter":{"id":"donations-and-fees","title":"Donations & Fees"},"sidebar":"docs","previous":{"title":"Members","permalink":"/docs/features/members"},"next":{"title":"News Feed","permalink":"/docs/features/news-feed"}}');var i=s(4848),t=s(8453);const r={id:"donations-and-fees",title:"Donations & Fees"},a=void 0,l={},d=[{value:"Code: DON-005",id:"code-don-005",level:3},{value:"Overview",id:"overview",level:3},{value:"Problem",id:"problem",level:3},{value:"Goals",id:"goals",level:3},{value:"Out of Scope",id:"out-of-scope",level:3},{value:"People and Roles",id:"people-and-roles",level:3},{value:"Context",id:"context",level:3},{value:"Use Cases",id:"use-cases",level:3},{value:"Proposal/Solution",id:"proposalsolution",level:3},{value:"User Experience",id:"user-experience",level:3},{value:"Important Details To Capture",id:"important-details-to-capture",level:3},{value:"Future Work",id:"future-work",level:3},{value:"Tasks and Timeline",id:"tasks-and-timeline",level:3}];function c(e){const n={admonition:"admonition",em:"em",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"This section is a work in progress."})}),"\n",(0,i.jsx)(n.h3,{id:"code-don-005",children:"Code: DON-005"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.em,{children:["Authored by ",(0,i.jsx)(n.strong,{children:"Xavier Bryson"}),". Last updated on ",(0,i.jsx)(n.strong,{children:"4/04/21"})]})}),"\n",(0,i.jsxs)(n.p,{children:["This feature aims to ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"manage privileged access"})})," by ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"use of fees associated with certain features/terms of use"})}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.h3,{id:"problem",children:"Problem"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Some organization's require a means of generating revenue to fund their operations :"}),"\nSince the target audience of the application would be those similar to non-profits if not non-profits themselves, a crucial part of their revenue would be from their members/participants. Therefore, a means to manage member contributions would need to be established and should be easy to configure."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"goals",children:"Goals"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Allow for a secure method of receiving donations online"})," :\nThrough the use of a payment gateway for ease of management and integrations, we can allow members to offer secure payments on fees to access exclusive events/features."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Differentiate the various fees associated with features/terms of use"})," :\nCurrently, there are three main categories for fees within the application, namely: Donations and Membership Fees.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Donations: These are fees that can be contributed at any time by members/participants of an organization."}),"\n",(0,i.jsx)(n.li,{children:"Membership Fees: Similar to donations, membership fees can be contributed at any time or can be associated with a certain event. These fees can also be one-time or recurring."}),"\n",(0,i.jsx)(n.li,{children:"Plugin Fees: These are payments made to grant access to certain features of the application."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"out-of-scope",children:"Out of Scope"}),"\n",(0,i.jsx)(n.p,{children:"N/A"}),"\n",(0,i.jsx)(n.h3,{id:"people-and-roles",children:"People and Roles"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Xavier Bryson (Feature Lead)"}),": clarify feature changes and assumptions."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"context",children:"Context"}),"\n",(0,i.jsx)(n.h3,{id:"use-cases",children:"Use Cases"}),"\n",(0,i.jsx)(n.p,{children:"N/A"}),"\n",(0,i.jsx)(n.h3,{id:"proposalsolution",children:"Proposal/Solution"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"For ease of managing transactions, external Billing Systems would need to be employed. Two recommendations are as follows:"}),"\n",(0,i.jsx)(n.p,{children:"\u25cb Stripe"}),"\n",(0,i.jsx)(n.p,{children:"\u25cb Paypal"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"For ease of incorporation into the various endpoints a node/express middleware could be used to pre-validate requests."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"user-experience",children:"User Experience"}),"\n",(0,i.jsx)(n.p,{children:"N/A"}),"\n",(0,i.jsx)(n.h3,{id:"important-details-to-capture",children:"Important Details To Capture"}),"\n",(0,i.jsx)(n.p,{children:"Payments would be made online via credit/debit cards or contributions."}),"\n",(0,i.jsx)(n.h3,{id:"future-work",children:"Future Work"}),"\n",(0,i.jsx)(n.p,{children:"N/A"}),"\n",(0,i.jsx)(n.h3,{id:"tasks-and-timeline",children:"Tasks and Timeline"}),"\n",(0,i.jsx)(n.p,{children:"N/A"})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var o=s(6540);const i={},t=o.createContext(i);function r(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);