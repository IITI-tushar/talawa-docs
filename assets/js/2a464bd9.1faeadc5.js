"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[928309],{838376:(e,s,t)=>{t.r(s),t.d(s,{Badge:()=>m,Bullet:()=>l,Details:()=>u,SpecifiedBy:()=>h,assets:()=>d,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>r,toc:()=>x});const r=JSON.parse('{"id":"schema/objects/membership-request","title":"MembershipRequest","description":"No description","source":"@site/docs/schema/objects/membership-request.mdx","sourceDirName":"schema/objects","slug":"/schema/objects/membership-request","permalink":"/docs/schema/objects/membership-request","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/objects/membership-request.mdx","tags":[],"version":"current","frontMatter":{"id":"membership-request","title":"MembershipRequest","hide_table_of_contents":false},"sidebar":"schemaSidebar","previous":{"title":"MaximumValueError","permalink":"/docs/schema/objects/maximum-value-error"},"next":{"title":"MessageChat","permalink":"/docs/schema/objects/message-chat"}}');var n=t(474848),c=t(28453),a=t(296540);const o={id:"membership-request",title:"MembershipRequest",hide_table_of_contents:!1},i=void 0,d={},l=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),h=e=>(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),m=e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{className:"badge badge--"+e.class,children:e.text})}),u=({dataOpen:e,dataClose:s,children:t,startOpen:r=!1})=>{const[c,o]=(0,a.useState)(r);return(0,n.jsxs)("details",{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)("summary",{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:c?e:s}),c&&t]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>MembershipRequest.<b>_id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"membershiprequest_idid--",level:4},{value:'<code>MembershipRequest.<b>user</b></code><Bullet></Bullet><code>User!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"membershiprequestuseruser--",level:4},{value:'<code>MembershipRequest.<b>organization</b></code><Bullet></Bullet><code>Organization!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"membershiprequestorganizationorganization--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}];function j(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"No description"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"type MembershipRequest {\n  _id: ID!\n  user: User!\n  organization: Organization!\n}\n"})}),"\n",(0,n.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(s.h4,{id:"membershiprequest_idid--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MembershipRequest.",(0,n.jsx)("b",{children:"_id"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/scalars/id",children:(0,n.jsx)(s.code,{children:"ID!"})})," ",(0,n.jsx)(m,{class:"secondary",text:"non-null"})," ",(0,n.jsx)(m,{class:"secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"membershiprequestuseruser--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MembershipRequest.",(0,n.jsx)("b",{children:"user"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/user",children:(0,n.jsx)(s.code,{children:"User!"})})," ",(0,n.jsx)(m,{class:"secondary",text:"non-null"})," ",(0,n.jsx)(m,{class:"secondary",text:"object"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"membershiprequestorganizationorganization--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MembershipRequest.",(0,n.jsx)("b",{children:"organization"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/organization",children:(0,n.jsx)(s.code,{children:"Organization!"})})," ",(0,n.jsx)(m,{class:"secondary",text:"non-null"})," ",(0,n.jsx)(m,{class:"secondary",text:"object"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsx)(s.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"../../../docs/schema/mutations/accept-membership-request",children:(0,n.jsx)(s.code,{children:"acceptMembershipRequest"})})," ",(0,n.jsx)(m,{class:"secondary",text:"mutation"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/mutations/cancel-membership-request",children:(0,n.jsx)(s.code,{children:"cancelMembershipRequest"})})," ",(0,n.jsx)(m,{class:"secondary",text:"mutation"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/mutations/reject-membership-request",children:(0,n.jsx)(s.code,{children:"rejectMembershipRequest"})})," ",(0,n.jsx)(m,{class:"secondary",text:"mutation"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/mutations/send-membership-request",children:(0,n.jsx)(s.code,{children:"sendMembershipRequest"})})," ",(0,n.jsx)(m,{class:"secondary",text:"mutation"})]}),"\n",(0,n.jsx)(s.h3,{id:"member-of",children:"Member of"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/organization",children:(0,n.jsx)(s.code,{children:"Organization"})})," ",(0,n.jsx)(m,{class:"secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/user",children:(0,n.jsx)(s.code,{children:"User"})})," ",(0,n.jsx)(m,{class:"secondary",text:"object"})]})]})}function b(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>o});var r=t(296540);const n={},c=r.createContext(n);function a(e){const s=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(c.Provider,{value:s},e.children)}}}]);