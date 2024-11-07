"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[665748],{110792:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=t(785893),a=t(511151);const o={id:"authentication",title:"Authentication"},s=void 0,r={id:"developers/talawa-api/authentication",title:"Authentication",description:"Authentication is important for recognizing a user's identity. Authentication prevents unauthorized users from accessing your device or network. This is a security process that covers all of the human-to-computer interactions that require the user to register and log in.",source:"@site/docs/developers/talawa-api/authentication.md",sourceDirName:"developers/talawa-api",slug:"/developers/talawa-api/authentication",permalink:"/docs/developers/talawa-api/authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/developers/talawa-api/authentication.md",tags:[],version:"current",frontMatter:{id:"authentication",title:"Authentication"},sidebar:"docs",previous:{title:"Schemas",permalink:"/docs/developers/talawa-api/schemas"},next:{title:"Functionality",permalink:"/docs/developers/talawa-api/functionality"}},c={},l=[{value:"How can a <code>User</code> Authenticate?",id:"how-can-a-user-authenticate",level:3},{value:"<code>Sign Up</code>",id:"sign-up",level:3},{value:"<code>Login</code>",id:"login",level:3}];function d(e){const n={blockquote:"blockquote",code:"code",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Authentication is important for recognizing a user's identity. Authentication prevents unauthorized users from accessing your device or network. This is a security process that covers all of the human-to-computer interactions that require the user to register and log in."}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"how-can-a-user-authenticate",children:["How can a ",(0,i.jsx)(n.code,{children:"User"})," Authenticate?"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.h3,{id:"sign-up",children:(0,i.jsx)(n.code,{children:"Sign Up"})}),"\n",(0,i.jsx)(n.p,{children:"A user can authenticate by creating a new account. This can be done by sending request to api with sign up fields."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:"image: string\ntokenVersion: number\nfirstName: string\nlastName: string\nemail: string\npassword: string\ncreatedOrganizations: [Organization]\ncreatedEvents: [Event]\njoinedOrganizations: [Organization]\nregisteredEvents: [Event]\neventAdmin: [Event]\nadminFor: [Event]\nmembershipRequests: [MembershipRequest]\norganizationsBlockBy: [Organization]\norganizationUserBelongsTo: [Organization]\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.h3,{id:"login",children:(0,i.jsx)(n.code,{children:"Login"})}),"\n",(0,i.jsx)(n.p,{children:"If a User has already signed up He/She can login to the application by authenticating following Fields ."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:"email: string\npassword: string\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},511151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var i=t(667294);const a={},o=i.createContext(a);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);