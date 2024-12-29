"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[540981],{257414:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"talawa-api-docs/resolvers/Query/helperFunctions/getWhere/functions/getWhere","title":"getWhere","description":"talawa-api","source":"@site/docs/talawa-api-docs/resolvers/Query/helperFunctions/getWhere/functions/getWhere.md","sourceDirName":"talawa-api-docs/resolvers/Query/helperFunctions/getWhere/functions","slug":"/talawa-api-docs/resolvers/Query/helperFunctions/getWhere/functions/getWhere","permalink":"/docs/talawa-api-docs/resolvers/Query/helperFunctions/getWhere/functions/getWhere","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Query/helperFunctions/getWhere/functions/getWhere.md","tags":[],"version":"current","frontMatter":{}}');var t=n(474848),a=n(28453);const c={},i=void 0,d={},h=[{value:"Type Parameters",id:"type-parameters",level:2},{value:"Parameters",id:"parameters",level:2},{value:"where",id:"where",level:3},{value:"Returns",id:"returns",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Defined in",id:"defined-in",level:2}];function o(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/talawa-api-docs/",children:(0,t.jsx)(r.strong,{children:"talawa-api"})})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,t.jsx)(r.a,{href:"/docs/talawa-api-docs/resolvers/Query/helperFunctions/getWhere/",children:"resolvers/Query/helperFunctions/getWhere"})," / getWhere"]}),"\n",(0,t.jsx)(r.h1,{id:"function-getwhere",children:"Function: getWhere()"}),"\n",(0,t.jsxs)(r.p,{children:["> ",(0,t.jsx)(r.strong,{children:"getWhere"}),"<",(0,t.jsx)(r.code,{children:"T"}),">(",(0,t.jsx)(r.code,{children:"where"}),"): ",(0,t.jsx)(r.code,{children:"FilterQuery"}),"<",(0,t.jsx)(r.code,{children:"T"}),">"]}),"\n",(0,t.jsxs)(r.p,{children:["This function returns FilterQuery object which can be used to find out documents matching specific args as mentioned in ",(0,t.jsx)(r.code,{children:"where"}),".\nWhen modifying this function, check if the arg to be added isn't present before, and place ",(0,t.jsx)(r.code,{children:"where"})," argument\ntype if not present before in the intersection type."]}),"\n",(0,t.jsx)(r.h2,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.strong,{children:"T"})," = ",(0,t.jsx)(r.code,{children:"unknown"})]}),"\n",(0,t.jsxs)(r.p,{children:["used to return an object of a generic type ",(0,t.jsx)(r.code,{children:"FilterQuery\\<T\\>"})]}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(r.h3,{id:"where",children:"where"}),"\n",(0,t.jsx)(r.p,{children:"an object that contains properties that can be used to filter out documents."}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"undefined"})," | ",(0,t.jsx)(r.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/InputMaybe",children:(0,t.jsx)(r.code,{children:"InputMaybe"})}),"<",(0,t.jsx)(r.code,{children:"Partial"}),"<",(0,t.jsx)(r.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/EventWhereInput",children:(0,t.jsx)(r.code,{children:"EventWhereInput"})})," & ",(0,t.jsx)(r.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/EventVolunteerGroupWhereInput",children:(0,t.jsx)(r.code,{children:"EventVolunteerGroupWhereInput"})})," & ",(0,t.jsx)(r.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/OrganizationWhereInput",children:(0,t.jsx)(r.code,{children:"OrganizationWhereInput"})})," & ",(0,t.jsx)(r.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/PostWhereInput",children:(0,t.jsx)(r.code,{children:"PostWhereInput"})})," & ",(0,t.jsx)(r.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/UserWhereInput",children:(0,t.jsx)(r.code,{children:"UserWhereInput"})})," & ",(0,t.jsx)(r.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/DonationWhereInput",children:(0,t.jsx)(r.code,{children:"DonationWhereInput"})})," & ",(0,t.jsx)(r.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/ActionItemWhereInput",children:(0,t.jsx)(r.code,{children:"ActionItemWhereInput"})})," & ",(0,t.jsx)(r.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/ActionItemCategoryWhereInput",children:(0,t.jsx)(r.code,{children:"ActionItemCategoryWhereInput"})})," & ",(0,t.jsx)(r.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/CampaignWhereInput",children:(0,t.jsx)(r.code,{children:"CampaignWhereInput"})})," & ",(0,t.jsx)(r.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/FundWhereInput",children:(0,t.jsx)(r.code,{children:"FundWhereInput"})})," & ",(0,t.jsx)(r.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/PledgeWhereInput",children:(0,t.jsx)(r.code,{children:"PledgeWhereInput"})})," & ",(0,t.jsx)(r.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/VenueWhereInput",children:(0,t.jsx)(r.code,{children:"VenueWhereInput"})})," & ",(0,t.jsx)(r.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/ChatWhereInput",children:(0,t.jsx)(r.code,{children:"ChatWhereInput"})})," & ",(0,t.jsx)(r.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/EventVolunteerWhereInput",children:(0,t.jsx)(r.code,{children:"EventVolunteerWhereInput"})}),">>"]}),"\n",(0,t.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"FilterQuery"}),"<",(0,t.jsx)(r.code,{children:"T"}),">"]}),"\n",(0,t.jsx)(r.p,{children:"a FilterQuery object to filter out documents"}),"\n",(0,t.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(r.p,{children:["You can learn about Generics ",(0,t.jsx)(r.a,{href:"https://www.typescriptlang.org/docs/handbook/2/generics.html",children:"here"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"const inputArgs = getWhere\\<InterfaceEvent\\>(args.where);\n"})}),"\n",(0,t.jsx)(r.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/resolvers/Query/helperFunctions/getWhere.ts#L33",children:"src/resolvers/Query/helperFunctions/getWhere.ts:33"})})]})}function l(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>i});var s=n(296540);const t={},a=s.createContext(t);function c(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);