"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[365655],{854783:(e,s,c)=>{c.r(s),c.d(s,{Badge:()=>x,Bullet:()=>l,Details:()=>j,SpecifiedBy:()=>h,assets:()=>i,contentTitle:()=>t,default:()=>m,frontMatter:()=>d,metadata:()=>o,toc:()=>g});var n=c(785893),a=c(511151),r=c(667294);const d={id:"user",title:"User",hide_table_of_contents:!1},t=void 0,o={id:"schema/objects/user",title:"User",description:"No description",source:"@site/docs/schema/objects/user.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/user",permalink:"/docs/schema/objects/user",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/objects/user.mdx",tags:[],version:"current",frontMatter:{id:"user",title:"User",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"UserTagsConnection",permalink:"/docs/schema/objects/user-tags-connection"},next:{title:"UsersConnectionResult",permalink:"/docs/schema/objects/users-connection-result"}},i={},l=()=>{const e={span:"span",...(0,a.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const s={a:"a",...(0,a.a)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const s={span:"span",...(0,a.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.span,{className:"badge badge--"+e.class,children:e.text})})},j=({dataOpen:e,dataClose:s,children:c,startOpen:d=!1})=>{const t={details:"details",summary:"summary",...(0,a.a)()},[o,i]=(0,r.useState)(d);return(0,n.jsxs)(t.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(t.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:o?e:s}),o&&c]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>User.<b>tokenVersion</b></code><Bullet></Bullet><code>Int!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"usertokenversionint--",level:4},{value:'<code>User.<b>_id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"user_idid--",level:4},{value:'<code>User.<b>firstName</b></code><Bullet></Bullet><code>String!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"userfirstnamestring--",level:4},{value:'<code>User.<b>lastName</b></code><Bullet></Bullet><code>String!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"userlastnamestring--",level:4},{value:'<code>User.<b>email</b></code><Bullet></Bullet><code>EmailAddress!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"useremailemailaddress--",level:4},{value:'<code>User.<b>userType</b></code><Bullet></Bullet><code>String</code> <Badge class="secondary"></Badge>',id:"userusertypestring-",level:4},{value:'<code>User.<b>appLanguageCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"userapplanguagecodestring--",level:4},{value:'<code>User.<b>createdOrganizations</b></code><Bullet></Bullet><code>[Organization]</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"usercreatedorganizationsorganization--",level:4},{value:'<code>User.<b>joinedOrganizations</b></code><Bullet></Bullet><code>[Organization]</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"userjoinedorganizationsorganization--",level:4},{value:'<code>User.<b>createdEvents</b></code><Bullet></Bullet><code>[Event]</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"usercreatedeventsevent--",level:4},{value:'<code>User.<b>registeredEvents</b></code><Bullet></Bullet><code>[Event]</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"userregisteredeventsevent--",level:4},{value:'<code>User.<b>eventAdmin</b></code><Bullet></Bullet><code>[Event]</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"usereventadminevent--",level:4},{value:'<code>User.<b>adminFor</b></code><Bullet></Bullet><code>[Organization]</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"useradminfororganization--",level:4},{value:'<code>User.<b>membershipRequests</b></code><Bullet></Bullet><code>[MembershipRequest]</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"usermembershiprequestsmembershiprequest--",level:4},{value:'<code>User.<b>organizationsBlockedBy</b></code><Bullet></Bullet><code>[Organization]</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"userorganizationsblockedbyorganization--",level:4},{value:'<code>User.<b>image</b></code><Bullet></Bullet><code>String</code> <Badge class="secondary"></Badge>',id:"userimagestring-",level:4},{value:'<code>User.<b>organizationUserBelongsTo</b></code><Bullet></Bullet><code>Organization</code> <Badge class="secondary"></Badge>',id:"userorganizationuserbelongstoorganization-",level:4},{value:'<code>User.<b>pluginCreationAllowed</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="secondary"></Badge>',id:"userplugincreationallowedboolean-",level:4},{value:'<code>User.<b>adminApproved</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="secondary"></Badge>',id:"useradminapprovedboolean-",level:4},{value:'<code>User.<b>assignedTasks</b></code><Bullet></Bullet><code>[Task]</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"userassignedtaskstask--",level:4},{value:'<code>User.<b>createdAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="secondary"></Badge>',id:"usercreatedatdatetime-",level:4},{value:'<code>User.<b>tagsAssignedWith</b></code><Bullet></Bullet><code>UserTagsConnection</code> <Badge class="secondary"></Badge>',id:"usertagsassignedwithusertagsconnection-",level:4},{value:'<code>User.tagsAssignedWith.<b>after</b></code><Bullet></Bullet><code>String</code> <Badge class="secondary"></Badge>',id:"usertagsassignedwithafterstring-",level:5},{value:'<code>User.tagsAssignedWith.<b>before</b></code><Bullet></Bullet><code>String</code> <Badge class="secondary"></Badge>',id:"usertagsassignedwithbeforestring-",level:5},{value:'<code>User.tagsAssignedWith.<b>first</b></code><Bullet></Bullet><code>PositiveInt</code> <Badge class="secondary"></Badge>',id:"usertagsassignedwithfirstpositiveint-",level:5},{value:'<code>User.tagsAssignedWith.<b>last</b></code><Bullet></Bullet><code>PositiveInt</code> <Badge class="secondary"></Badge>',id:"usertagsassignedwithlastpositiveint-",level:5},{value:'<code>User.tagsAssignedWith.<b>organizationId</b></code><Bullet></Bullet><code>ID</code> <Badge class="secondary"></Badge>',id:"usertagsassignedwithorganizationidid-",level:5},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}];function u(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"No description"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"type User {\n  tokenVersion: Int!\n  _id: ID!\n  firstName: String!\n  lastName: String!\n  email: EmailAddress!\n  userType: String\n  appLanguageCode: String!\n  createdOrganizations: [Organization]\n  joinedOrganizations: [Organization]\n  createdEvents: [Event]\n  registeredEvents: [Event]\n  eventAdmin: [Event]\n  adminFor: [Organization]\n  membershipRequests: [MembershipRequest]\n  organizationsBlockedBy: [Organization]\n  image: String\n  organizationUserBelongsTo: Organization\n  pluginCreationAllowed: Boolean\n  adminApproved: Boolean\n  assignedTasks: [Task]\n  createdAt: DateTime\n  tagsAssignedWith(\n    after: String\n    before: String\n    first: PositiveInt\n    last: PositiveInt\n    organizationId: ID\n  ): UserTagsConnection\n}\n"})}),"\n",(0,n.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(s.h4,{id:"usertokenversionint--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,n.jsx)("b",{children:"tokenVersion"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/scalars/int",children:(0,n.jsx)(s.code,{children:"Int!"})})," ",(0,n.jsx)(x,{class:"secondary",text:"non-null"})," ",(0,n.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"user_idid--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,n.jsx)("b",{children:"_id"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/scalars/id",children:(0,n.jsx)(s.code,{children:"ID!"})})," ",(0,n.jsx)(x,{class:"secondary",text:"non-null"})," ",(0,n.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"userfirstnamestring--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,n.jsx)("b",{children:"firstName"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/scalars/string",children:(0,n.jsx)(s.code,{children:"String!"})})," ",(0,n.jsx)(x,{class:"secondary",text:"non-null"})," ",(0,n.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"userlastnamestring--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,n.jsx)("b",{children:"lastName"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/scalars/string",children:(0,n.jsx)(s.code,{children:"String!"})})," ",(0,n.jsx)(x,{class:"secondary",text:"non-null"})," ",(0,n.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"useremailemailaddress--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,n.jsx)("b",{children:"email"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/scalars/email-address",children:(0,n.jsx)(s.code,{children:"EmailAddress!"})})," ",(0,n.jsx)(x,{class:"secondary",text:"non-null"})," ",(0,n.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"userusertypestring-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,n.jsx)("b",{children:"userType"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/scalars/string",children:(0,n.jsx)(s.code,{children:"String"})})," ",(0,n.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"userapplanguagecodestring--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,n.jsx)("b",{children:"appLanguageCode"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/scalars/string",children:(0,n.jsx)(s.code,{children:"String!"})})," ",(0,n.jsx)(x,{class:"secondary",text:"non-null"})," ",(0,n.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"usercreatedorganizationsorganization--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,n.jsx)("b",{children:"createdOrganizations"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/organization",children:(0,n.jsx)(s.code,{children:"[Organization]"})})," ",(0,n.jsx)(x,{class:"secondary",text:"list"})," ",(0,n.jsx)(x,{class:"secondary",text:"object"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"userjoinedorganizationsorganization--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,n.jsx)("b",{children:"joinedOrganizations"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/organization",children:(0,n.jsx)(s.code,{children:"[Organization]"})})," ",(0,n.jsx)(x,{class:"secondary",text:"list"})," ",(0,n.jsx)(x,{class:"secondary",text:"object"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"usercreatedeventsevent--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,n.jsx)("b",{children:"createdEvents"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/event",children:(0,n.jsx)(s.code,{children:"[Event]"})})," ",(0,n.jsx)(x,{class:"secondary",text:"list"})," ",(0,n.jsx)(x,{class:"secondary",text:"object"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"userregisteredeventsevent--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,n.jsx)("b",{children:"registeredEvents"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/event",children:(0,n.jsx)(s.code,{children:"[Event]"})})," ",(0,n.jsx)(x,{class:"secondary",text:"list"})," ",(0,n.jsx)(x,{class:"secondary",text:"object"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"usereventadminevent--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,n.jsx)("b",{children:"eventAdmin"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/event",children:(0,n.jsx)(s.code,{children:"[Event]"})})," ",(0,n.jsx)(x,{class:"secondary",text:"list"})," ",(0,n.jsx)(x,{class:"secondary",text:"object"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"useradminfororganization--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,n.jsx)("b",{children:"adminFor"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/organization",children:(0,n.jsx)(s.code,{children:"[Organization]"})})," ",(0,n.jsx)(x,{class:"secondary",text:"list"})," ",(0,n.jsx)(x,{class:"secondary",text:"object"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"usermembershiprequestsmembershiprequest--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,n.jsx)("b",{children:"membershipRequests"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/membership-request",children:(0,n.jsx)(s.code,{children:"[MembershipRequest]"})})," ",(0,n.jsx)(x,{class:"secondary",text:"list"})," ",(0,n.jsx)(x,{class:"secondary",text:"object"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"userorganizationsblockedbyorganization--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,n.jsx)("b",{children:"organizationsBlockedBy"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/organization",children:(0,n.jsx)(s.code,{children:"[Organization]"})})," ",(0,n.jsx)(x,{class:"secondary",text:"list"})," ",(0,n.jsx)(x,{class:"secondary",text:"object"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"userimagestring-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,n.jsx)("b",{children:"image"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/scalars/string",children:(0,n.jsx)(s.code,{children:"String"})})," ",(0,n.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"userorganizationuserbelongstoorganization-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,n.jsx)("b",{children:"organizationUserBelongsTo"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/organization",children:(0,n.jsx)(s.code,{children:"Organization"})})," ",(0,n.jsx)(x,{class:"secondary",text:"object"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"userplugincreationallowedboolean-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,n.jsx)("b",{children:"pluginCreationAllowed"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/scalars/boolean",children:(0,n.jsx)(s.code,{children:"Boolean"})})," ",(0,n.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"useradminapprovedboolean-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,n.jsx)("b",{children:"adminApproved"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/scalars/boolean",children:(0,n.jsx)(s.code,{children:"Boolean"})})," ",(0,n.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"userassignedtaskstask--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,n.jsx)("b",{children:"assignedTasks"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/task",children:(0,n.jsx)(s.code,{children:"[Task]"})})," ",(0,n.jsx)(x,{class:"secondary",text:"list"})," ",(0,n.jsx)(x,{class:"secondary",text:"object"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"usercreatedatdatetime-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,n.jsx)("b",{children:"createdAt"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/scalars/date-time",children:(0,n.jsx)(s.code,{children:"DateTime"})})," ",(0,n.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"usertagsassignedwithusertagsconnection-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,n.jsx)("b",{children:"tagsAssignedWith"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/user-tags-connection",children:(0,n.jsx)(s.code,{children:"UserTagsConnection"})})," ",(0,n.jsx)(x,{class:"secondary",text:"object"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.h5,{id:"usertagsassignedwithafterstring-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["User.tagsAssignedWith.",(0,n.jsx)("b",{children:"after"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/scalars/string",children:(0,n.jsx)(s.code,{children:"String"})})," ",(0,n.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n"]}),"\n",(0,n.jsxs)(s.h5,{id:"usertagsassignedwithbeforestring-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["User.tagsAssignedWith.",(0,n.jsx)("b",{children:"before"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/scalars/string",children:(0,n.jsx)(s.code,{children:"String"})})," ",(0,n.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h5,{id:"usertagsassignedwithfirstpositiveint-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["User.tagsAssignedWith.",(0,n.jsx)("b",{children:"first"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/scalars/positive-int",children:(0,n.jsx)(s.code,{children:"PositiveInt"})})," ",(0,n.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h5,{id:"usertagsassignedwithlastpositiveint-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["User.tagsAssignedWith.",(0,n.jsx)("b",{children:"last"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/scalars/positive-int",children:(0,n.jsx)(s.code,{children:"PositiveInt"})})," ",(0,n.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h5,{id:"usertagsassignedwithorganizationidid-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["User.tagsAssignedWith.",(0,n.jsx)("b",{children:"organizationId"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/scalars/id",children:(0,n.jsx)(s.code,{children:"ID"})})," ",(0,n.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsx)(s.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"../../../docs/schema/mutations/add-event-attendee",children:(0,n.jsx)(s.code,{children:"addEventAttendee"})})," ",(0,n.jsx)(x,{class:"secondary",text:"mutation"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/mutations/add-user-image",children:(0,n.jsx)(s.code,{children:"addUserImage"})})," ",(0,n.jsx)(x,{class:"secondary",text:"mutation"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/mutations/assign-user-tag",children:(0,n.jsx)(s.code,{children:"assignUserTag"})})," ",(0,n.jsx)(x,{class:"secondary",text:"mutation"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/mutations/block-plugin-creation-by-superadmin",children:(0,n.jsx)(s.code,{children:"blockPluginCreationBySuperadmin"})})," ",(0,n.jsx)(x,{class:"secondary",text:"mutation"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/mutations/block-user",children:(0,n.jsx)(s.code,{children:"blockUser"})})," ",(0,n.jsx)(x,{class:"secondary",text:"mutation"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/queries/check-auth",children:(0,n.jsx)(s.code,{children:"checkAuth"})})," ",(0,n.jsx)(x,{class:"secondary",text:"query"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/mutations/create-admin",children:(0,n.jsx)(s.code,{children:"createAdmin"})})," ",(0,n.jsx)(x,{class:"secondary",text:"mutation"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/mutations/join-public-organization",children:(0,n.jsx)(s.code,{children:"joinPublicOrganization"})})," ",(0,n.jsx)(x,{class:"secondary",text:"mutation"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/mutations/leave-organization",children:(0,n.jsx)(s.code,{children:"leaveOrganization"})})," ",(0,n.jsx)(x,{class:"secondary",text:"mutation"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/queries/me",children:(0,n.jsx)(s.code,{children:"me"})})," ",(0,n.jsx)(x,{class:"secondary",text:"query"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/queries/registrants-by-event",children:(0,n.jsx)(s.code,{children:"registrantsByEvent"})})," ",(0,n.jsx)(x,{class:"secondary",text:"query"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/mutations/remove-admin",children:(0,n.jsx)(s.code,{children:"removeAdmin"})})," ",(0,n.jsx)(x,{class:"secondary",text:"mutation"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/mutations/remove-event-attendee",children:(0,n.jsx)(s.code,{children:"removeEventAttendee"})})," ",(0,n.jsx)(x,{class:"secondary",text:"mutation"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/mutations/remove-organization",children:(0,n.jsx)(s.code,{children:"removeOrganization"})})," ",(0,n.jsx)(x,{class:"secondary",text:"mutation"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/mutations/remove-user-image",children:(0,n.jsx)(s.code,{children:"removeUserImage"})})," ",(0,n.jsx)(x,{class:"secondary",text:"mutation"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/mutations/unassign-user-tag",children:(0,n.jsx)(s.code,{children:"unassignUserTag"})})," ",(0,n.jsx)(x,{class:"secondary",text:"mutation"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/mutations/unblock-user",children:(0,n.jsx)(s.code,{children:"unblockUser"})})," ",(0,n.jsx)(x,{class:"secondary",text:"mutation"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/mutations/update-language",children:(0,n.jsx)(s.code,{children:"updateLanguage"})})," ",(0,n.jsx)(x,{class:"secondary",text:"mutation"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/mutations/update-user-password",children:(0,n.jsx)(s.code,{children:"updateUserPassword"})})," ",(0,n.jsx)(x,{class:"secondary",text:"mutation"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/mutations/update-user-profile",children:(0,n.jsx)(s.code,{children:"updateUserProfile"})})," ",(0,n.jsx)(x,{class:"secondary",text:"mutation"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/queries/user",children:(0,n.jsx)(s.code,{children:"user"})})," ",(0,n.jsx)(x,{class:"secondary",text:"query"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/queries/users",children:(0,n.jsx)(s.code,{children:"users"})})," ",(0,n.jsx)(x,{class:"secondary",text:"query"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/queries/users-connection",children:(0,n.jsx)(s.code,{children:"usersConnection"})})," ",(0,n.jsx)(x,{class:"secondary",text:"query"})]}),"\n",(0,n.jsx)(s.h3,{id:"member-of",children:"Member of"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/auth-data",children:(0,n.jsx)(s.code,{children:"AuthData"})})," ",(0,n.jsx)(x,{class:"secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/check-in",children:(0,n.jsx)(s.code,{children:"CheckIn"})})," ",(0,n.jsx)(x,{class:"secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/check-in-status",children:(0,n.jsx)(s.code,{children:"CheckInStatus"})})," ",(0,n.jsx)(x,{class:"secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/comment",children:(0,n.jsx)(s.code,{children:"Comment"})})," ",(0,n.jsx)(x,{class:"secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/direct-chat",children:(0,n.jsx)(s.code,{children:"DirectChat"})})," ",(0,n.jsx)(x,{class:"secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/direct-chat-message",children:(0,n.jsx)(s.code,{children:"DirectChatMessage"})})," ",(0,n.jsx)(x,{class:"secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/event",children:(0,n.jsx)(s.code,{children:"Event"})})," ",(0,n.jsx)(x,{class:"secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/group",children:(0,n.jsx)(s.code,{children:"Group"})})," ",(0,n.jsx)(x,{class:"secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/group-chat",children:(0,n.jsx)(s.code,{children:"GroupChat"})})," ",(0,n.jsx)(x,{class:"secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/group-chat-message",children:(0,n.jsx)(s.code,{children:"GroupChatMessage"})})," ",(0,n.jsx)(x,{class:"secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/membership-request",children:(0,n.jsx)(s.code,{children:"MembershipRequest"})})," ",(0,n.jsx)(x,{class:"secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/message",children:(0,n.jsx)(s.code,{children:"Message"})})," ",(0,n.jsx)(x,{class:"secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/message-chat",children:(0,n.jsx)(s.code,{children:"MessageChat"})})," ",(0,n.jsx)(x,{class:"secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/organization",children:(0,n.jsx)(s.code,{children:"Organization"})})," ",(0,n.jsx)(x,{class:"secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/organization-info-node",children:(0,n.jsx)(s.code,{children:"OrganizationInfoNode"})})," ",(0,n.jsx)(x,{class:"secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/post",children:(0,n.jsx)(s.code,{children:"Post"})})," ",(0,n.jsx)(x,{class:"secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/task",children:(0,n.jsx)(s.code,{children:"Task"})})," ",(0,n.jsx)(x,{class:"secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/user-connection",children:(0,n.jsx)(s.code,{children:"UserConnection"})})," ",(0,n.jsx)(x,{class:"secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/user-edge",children:(0,n.jsx)(s.code,{children:"UserEdge"})})," ",(0,n.jsx)(x,{class:"secondary",text:"object"})]})]})}function m(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},511151:(e,s,c)=>{c.d(s,{Z:()=>t,a:()=>d});var n=c(667294);const a={},r=n.createContext(a);function d(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);