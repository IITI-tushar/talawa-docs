"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[600841],{683508:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"talawa-api-docs/utilities/createSampleOrganizationUtil/functions/generateUserData","title":"generateUserData","description":"talawa-api","source":"@site/docs/talawa-api-docs/utilities/createSampleOrganizationUtil/functions/generateUserData.md","sourceDirName":"talawa-api-docs/utilities/createSampleOrganizationUtil/functions","slug":"/talawa-api-docs/utilities/createSampleOrganizationUtil/functions/generateUserData","permalink":"/docs/talawa-api-docs/utilities/createSampleOrganizationUtil/functions/generateUserData","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/utilities/createSampleOrganizationUtil/functions/generateUserData.md","tags":[],"version":"current","frontMatter":{}}');var i=a(474848),s=a(28453);const t={},c=void 0,d={},o=[{value:"Parameters",id:"parameters",level:2},{value:"organizationId",id:"organizationid",level:3},{value:"userType",id:"usertype",level:3},{value:"Returns",id:"returns",level:2},{value:"Defined in",id:"defined-in",level:2}];function l(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"/docs/talawa-api-docs/",children:(0,i.jsx)(r.strong,{children:"talawa-api"})})}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,i.jsx)(r.a,{href:"/docs/talawa-api-docs/utilities/createSampleOrganizationUtil/",children:"utilities/createSampleOrganizationUtil"})," / generateUserData"]}),"\n",(0,i.jsx)(r.h1,{id:"function-generateuserdata",children:"Function: generateUserData()"}),"\n",(0,i.jsxs)(r.p,{children:["> ",(0,i.jsx)(r.strong,{children:"generateUserData"}),"(",(0,i.jsx)(r.code,{children:"organizationId"}),", ",(0,i.jsx)(r.code,{children:"userType"}),"): ",(0,i.jsx)(r.code,{children:"Promise"}),"<{ ",(0,i.jsx)(r.code,{children:"appUserProfile"}),": ",(0,i.jsx)(r.code,{children:"Document"}),"<",(0,i.jsx)(r.code,{children:"unknown"}),", {}, ",(0,i.jsx)(r.a,{href:"/docs/talawa-api-docs/models/AppUserProfile/interfaces/InterfaceAppUserProfile",children:(0,i.jsx)(r.code,{children:"InterfaceAppUserProfile"})}),"> & ",(0,i.jsx)(r.a,{href:"/docs/talawa-api-docs/models/AppUserProfile/interfaces/InterfaceAppUserProfile",children:(0,i.jsx)(r.code,{children:"InterfaceAppUserProfile"})})," & ",(0,i.jsx)(r.code,{children:"Required"}),"<{ ",(0,i.jsx)(r.code,{children:"_id"}),": ",(0,i.jsx)(r.code,{children:"ObjectId"}),"; }>; ",(0,i.jsx)(r.code,{children:"user"}),": ",(0,i.jsx)(r.code,{children:"Document"}),"<",(0,i.jsx)(r.code,{children:"unknown"}),", {}, ",(0,i.jsx)(r.a,{href:"/docs/talawa-api-docs/models/User/interfaces/InterfaceUser",children:(0,i.jsx)(r.code,{children:"InterfaceUser"})}),"> & ",(0,i.jsx)(r.a,{href:"/docs/talawa-api-docs/models/User/interfaces/InterfaceUser",children:(0,i.jsx)(r.code,{children:"InterfaceUser"})})," & ",(0,i.jsx)(r.code,{children:"Required"}),"<{ ",(0,i.jsx)(r.code,{children:"_id"}),": ",(0,i.jsx)(r.code,{children:"ObjectId"}),"; }>; }>"]}),"\n",(0,i.jsx)(r.p,{children:"Generates user data for a given organization and user type."}),"\n",(0,i.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsx)(r.h3,{id:"organizationid",children:"organizationId"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"string"})}),"\n",(0,i.jsx)(r.p,{children:"The ID of the organization the user belongs to"}),"\n",(0,i.jsx)(r.h3,{id:"usertype",children:"userType"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"string"})}),"\n",(0,i.jsx)(r.p,{children:"The type of the user ('ADMIN' or 'USER')"}),"\n",(0,i.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Promise"}),"<{ ",(0,i.jsx)(r.code,{children:"appUserProfile"}),": ",(0,i.jsx)(r.code,{children:"Document"}),"<",(0,i.jsx)(r.code,{children:"unknown"}),", {}, ",(0,i.jsx)(r.a,{href:"/docs/talawa-api-docs/models/AppUserProfile/interfaces/InterfaceAppUserProfile",children:(0,i.jsx)(r.code,{children:"InterfaceAppUserProfile"})}),"> & ",(0,i.jsx)(r.a,{href:"/docs/talawa-api-docs/models/AppUserProfile/interfaces/InterfaceAppUserProfile",children:(0,i.jsx)(r.code,{children:"InterfaceAppUserProfile"})})," & ",(0,i.jsx)(r.code,{children:"Required"}),"<{ ",(0,i.jsx)(r.code,{children:"_id"}),": ",(0,i.jsx)(r.code,{children:"ObjectId"}),"; }>; ",(0,i.jsx)(r.code,{children:"user"}),": ",(0,i.jsx)(r.code,{children:"Document"}),"<",(0,i.jsx)(r.code,{children:"unknown"}),", {}, ",(0,i.jsx)(r.a,{href:"/docs/talawa-api-docs/models/User/interfaces/InterfaceUser",children:(0,i.jsx)(r.code,{children:"InterfaceUser"})}),"> & ",(0,i.jsx)(r.a,{href:"/docs/talawa-api-docs/models/User/interfaces/InterfaceUser",children:(0,i.jsx)(r.code,{children:"InterfaceUser"})})," & ",(0,i.jsx)(r.code,{children:"Required"}),"<{ ",(0,i.jsx)(r.code,{children:"_id"}),": ",(0,i.jsx)(r.code,{children:"ObjectId"}),"; }>; }>"]}),"\n",(0,i.jsx)(r.p,{children:"A promise that resolves to an object containing the created user and their application profile"}),"\n",(0,i.jsx)(r.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/utilities/createSampleOrganizationUtil.ts#L24",children:"src/utilities/createSampleOrganizationUtil.ts:24"})})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,r,a)=>{a.d(r,{R:()=>t,x:()=>c});var n=a(296540);const i={},s=n.createContext(i);function t(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);