"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[785483],{378740:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"talawa-api-docs/utilities/userFamilyAdminCheck/functions/adminCheck","title":"adminCheck","description":"talawa-api","source":"@site/docs/talawa-api-docs/utilities/userFamilyAdminCheck/functions/adminCheck.md","sourceDirName":"talawa-api-docs/utilities/userFamilyAdminCheck/functions","slug":"/talawa-api-docs/utilities/userFamilyAdminCheck/functions/adminCheck","permalink":"/docs/talawa-api-docs/utilities/userFamilyAdminCheck/functions/adminCheck","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/utilities/userFamilyAdminCheck/functions/adminCheck.md","tags":[],"version":"current","frontMatter":{}}');var a=s(474848),r=s(28453);const d={},t=void 0,c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"userId",id:"userid",level:3},{value:"userFamily",id:"userfamily",level:3},{value:"Returns",id:"returns",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Defined in",id:"defined-in",level:2}];function o(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.p,{children:(0,a.jsx)(i.a,{href:"/docs/talawa-api-docs/",children:(0,a.jsx)(i.strong,{children:"talawa-api"})})}),"\n",(0,a.jsx)(i.hr,{}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,a.jsx)(i.a,{href:"/docs/talawa-api-docs/utilities/userFamilyAdminCheck/",children:"utilities/userFamilyAdminCheck"})," / adminCheck"]}),"\n",(0,a.jsx)(i.h1,{id:"function-admincheck",children:"Function: adminCheck()"}),"\n",(0,a.jsxs)(i.p,{children:["> ",(0,a.jsx)(i.strong,{children:"adminCheck"}),"(",(0,a.jsx)(i.code,{children:"userId"}),", ",(0,a.jsx)(i.code,{children:"userFamily"}),"): ",(0,a.jsx)(i.code,{children:"Promise"}),"<",(0,a.jsx)(i.code,{children:"void"}),">"]}),"\n",(0,a.jsx)(i.p,{children:"Checks if the current user is an admin of the organization or a super admin.\nThrows an UnauthorizedError if the user is neither an admin nor a super admin."}),"\n",(0,a.jsx)(i.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsx)(i.h3,{id:"userid",children:"userId"}),"\n",(0,a.jsx)(i.p,{children:"The ID of the current user."}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.code,{children:"string"})," | ",(0,a.jsx)(i.code,{children:"ObjectId"})]}),"\n",(0,a.jsx)(i.h3,{id:"userfamily",children:"userFamily"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.a,{href:"/docs/talawa-api-docs/models/userFamily/interfaces/InterfaceUserFamily",children:(0,a.jsx)(i.code,{children:"InterfaceUserFamily"})})}),"\n",(0,a.jsxs)(i.p,{children:["The user family data of type ",(0,a.jsx)(i.code,{children:"InterfaceUserFamily"}),"."]}),"\n",(0,a.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.code,{children:"Promise"}),"<",(0,a.jsx)(i.code,{children:"void"}),">"]}),"\n",(0,a.jsx)(i.h2,{id:"remarks",children:"Remarks"}),"\n",(0,a.jsxs)(i.p,{children:["This function queries the ",(0,a.jsx)(i.code,{children:"userFamily"})," to check if the ",(0,a.jsx)(i.code,{children:"userId"})," is listed as an admin.\nAdditionally, it queries the ",(0,a.jsx)(i.code,{children:"AppUserProfile"})," to check if the ",(0,a.jsx)(i.code,{children:"userId"})," is a super admin."]}),"\n",(0,a.jsx)(i.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/039b0f127fb8caa46d57186ab4b3bb27fe150903/src/utilities/userFamilyAdminCheck.ts#L19",children:"src/utilities/userFamilyAdminCheck.ts:19"})})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},28453:(e,i,s)=>{s.d(i,{R:()=>d,x:()=>t});var n=s(296540);const a={},r=n.createContext(a);function d(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);