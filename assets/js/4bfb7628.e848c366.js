"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[117208],{822007:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=n(785893),s=n(511151);const a={id:"gsod-ideas-2022",title:"GSoD 2022 - Revamping and restructuring the Talawa Docs"},o=void 0,r={id:"internships/gsod/gsod-ideas-2022",title:"GSoD 2022 - Revamping and restructuring the Talawa Docs",description:"Introduction",source:"@site/docs/internships/gsod/ideas-2022.md",sourceDirName:"internships/gsod",slug:"/internships/gsod/gsod-ideas-2022",permalink:"/docs/internships/gsod/gsod-ideas-2022",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/internships/gsod/ideas-2022.md",tags:[],version:"current",frontMatter:{id:"gsod-ideas-2022",title:"GSoD 2022 - Revamping and restructuring the Talawa Docs"},sidebar:"docs",previous:{title:"GSoD 2024 - Improving the accessibility of the Talawa Documentation",permalink:"/docs/internships/gsod/gsod-ideas"},next:{title:"Calico",permalink:"/docs/category/calico"}},d={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Our Project&#39;s Problem",id:"our-projects-problem",level:3},{value:"Project Scope",id:"project-scope",level:3},{value:"Measuring the project&#39;s success",id:"measuring-the-projects-success",level:3},{value:"Timeline",id:"timeline",level:3},{value:"Budget",id:"budget",level:3},{value:"General Considerations",id:"general-considerations",level:3},{value:"Repository Languages and Skills",id:"repository-languages-and-skills",level:3},{value:"Ideas List",id:"ideas-list",level:2},{value:"Add Base Documentation for each Repository (Talawa, Talawa-API and Talawa-Admin)",id:"add-base-documentation-for-each-repository-talawa-talawa-api-and-talawa-admin",level:3},{value:"Create How-To Guides and Tutorials for getting started with Talawa, Talawa API and Talawa-Admin",id:"create-how-to-guides-and-tutorials-for-getting-started-with-talawa-talawa-api-and-talawa-admin",level:3},{value:"Create visualisations for various GraphQL Schema and Queries",id:"create-visualisations-for-various-graphql-schema-and-queries",level:3},{value:"Revamp and Restructure the Current Documentation Page",id:"revamp-and-restructure-the-current-documentation-page",level:3}];function h(e){const t={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.p,{children:"Welcome to our project proposal and ideas page! Get familiar with our general philosophy by reading this section. The ideas follow afterwards."}),"\n",(0,i.jsx)(t.p,{children:"We need to reduce the learning curve of contributors and sysadmins alike. Our documentation projects make our main repositories easier to use and therefore help us meet this goal."}),"\n",(0,i.jsx)(t.h3,{id:"our-projects-problem",children:"Our Project's Problem"}),"\n",(0,i.jsx)(t.p,{children:"Due to the influx of pull requests we receive on a weekly basis, we have created CI/CD pipelines to automate the documentation process. It works as follows, and is illustrated by the proceeding figure:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Whenever a pull request is made, a GitHub Action checks whether Javascript/Dart files being pushed have comments of a specified form."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"If a pull request is successful, another GitHub Action runs a command such as jsdoc or dartdoc to generate a static HTML file that contains the documentation from the comments and then sent to the Talawa-Docs repo."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Finally, a GitHub Action collates and organizes the HTML files within a prespecificed template containing the documentation that is then added to the site."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"alt text",src:n(90664).Z+"",width:"3464",height:"2566"})}),"\n",(0,i.jsx)(t.p,{children:"However, since this pipeline has been put in place there has not been much activity on the bulk of the older files, leaving most of the documentation lacking in our three codebases. The majority of the code is undocumented or badly documented and is not growing in an organic manner with our ever increasing codebase. Our goal is to ameliorate this problem through the creation/refinement constructing documentation for our repositories which is extensive enough to account for the latest features and developments, such that we are in a good position for further development with the pipelines already in place. Furthermore, we need to make it straightforward for first time contributors to become productive with our repositories."}),"\n",(0,i.jsx)(t.h3,{id:"project-scope",children:"Project Scope"}),"\n",(0,i.jsx)(t.p,{children:"The Talawa project aims to:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Audit the existing documentation and note the areas within the respective codebase(s) where the documentation specifically needs to be improved."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Use a friction log to determine the pains within the existing documentation. This can be done from the viewpoints of multiple users as more experienced users may \u2018miss\u2019 aspects that can affect first time contributors."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Assess where within the documentation would benefit from the addition of a diagram or illustration of complex relationships such as GraphQL schema and queries."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Maintaining a public log of all progress/hurdles made/encountered and write up a summary of any disparity between the expected and actual project outcomes."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Coordinating with others on partially automated conversion from HTML to pdf and Markdown, and vice-versa, using pandoc."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Coordinating with others on any feedback and issues identified."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Outside of this project's scope is modifying the existing automation architecture and/or any form of testing and verification."}),"\n",(0,i.jsx)(t.h3,{id:"measuring-the-projects-success",children:"Measuring the project's success"}),"\n",(0,i.jsx)(t.p,{children:"Ideally, if the majority of our files containing code have adequate documentation in the form of comments which can be parsed by the documentation generating libraries we use (jsdoc, dartdoc, etc) then this would give us a rough estimate of the total coverage we have for documentation for a given repository. We have scripts in place to measure how much of the code is documented in the form that we desire.\nAfter the new documentation has been published we will consider the project a success if :"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"The number of pull requests on any and/or all of three repos increases by 30% more than it is currently from dedicated users."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"We see a significant uptick on the number of new users contributing to the repositories, around 30-40%."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"The number of documentation related pull requests increase by ~20%."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"timeline",children:"Timeline"}),"\n",(0,i.jsx)(t.p,{children:"The project itself will take around six months to complete. Once the tech writer(s) are hired, we'll spend a month getting them up to speed on the state of the documentation, the workflows we use for creating documentation and then move onto the audit and friction log with the possible mentors, and spend the remaining months focusing on creating the documentation."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Dates"}),(0,i.jsx)(t.th,{children:"Action items"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"May"}),(0,i.jsx)(t.td,{children:"Orientation"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"June-July"}),(0,i.jsx)(t.td,{children:"Audit current documentation; note the pain points with mentor input; highlight where in the existing infrastructure would benefit from illustrations"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"August - October"}),(0,i.jsx)(t.td,{children:"Begin working on documenting Talawa"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"November"}),(0,i.jsx)(t.td,{children:"Project completion and final report due"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"This timeline, especially within the May-July period, is not strict and has some room for unforeseen circumstances that may arise. However, it is expected that you'll complete all the requiste tasks within the intervals posted and have everything completed by the November deadline."}),"\n",(0,i.jsx)(t.h3,{id:"budget",children:"Budget"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Item"}),(0,i.jsx)(t.th,{children:"Amount"}),(0,i.jsx)(t.th,{children:"Running total"}),(0,i.jsx)(t.th,{children:"Notes"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Technical Writers (x2)"}),(0,i.jsx)(t.td,{children:"10000"}),(0,i.jsx)(t.td,{children:"10000"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Volunteer Stipends"}),(0,i.jsx)(t.td,{children:"2000"}),(0,i.jsx)(t.td,{children:"12000"}),(0,i.jsx)(t.td,{children:"4 volunteer stipends at $500 each"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Graphic design - architecture diagrams, and visuals to accompany documentation"}),(0,i.jsx)(t.td,{children:"1000"}),(0,i.jsx)(t.td,{children:"13000"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Printed Palisadoes Foundation T-shirts (10 T-shirts)"}),(0,i.jsx)(t.td,{children:"120"}),(0,i.jsx)(t.td,{children:"13120"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Sundry expenses"}),(0,i.jsx)(t.td,{children:"394"}),(0,i.jsx)(t.td,{children:"13514"}),(0,i.jsx)(t.td,{children:"3% payment processing fees"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"Additional information"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["The Palisadoes Foundation was selected for Google Summer of Code (GSoC) 2022, and was previously selected for GSoC in 2021. We were able to make a number of leaps and bounds during the 2021 editions which resulted in a massive codebase that is severely undocumented. During this time, the Palisadoes Foundation was also selected for the ",(0,i.jsx)(t.a,{href:"https://externship.github.in/",children:"Github externship"})," on three separate occasions."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"The foundation was also selected for Google Season of Docs (Gsod) 2022. In this season, the documentation status of the repositories was improved. But, some aspects were not covered in this duration and still need to be worked upon."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"general-considerations",children:"General Considerations"}),"\n",(0,i.jsx)(t.p,{children:"This is not an exhaustive list of ideas, but they are the ones we currently feel need the most attention."}),"\n",(0,i.jsxs)(t.p,{children:['We also welcome any other ideas that we could use. Please review the "Desired Features" section of this website for ',(0,i.jsx)(t.strong,{children:"even more ideas"})," and further necessary information."]}),"\n",(0,i.jsx)(t.h3,{id:"repository-languages-and-skills",children:"Repository Languages and Skills"}),"\n",(0,i.jsx)(t.p,{children:"We are looking for motivated candidates with a history of strong, demonstration technical writing skills that can provide structure and organization to our codebases. It is not necessary to be well-versed in the tech stack being used for a given repository though some familiarity would be seen as a positive. Our mentors will provide ample support in a 'learn as you go' fashion."}),"\n",(0,i.jsx)(t.p,{children:"The following lists the primary tech stack being used for each respective repository which is helpful for the purpose of documenting each repository (but you are not required to know them):"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Talawa:"})," Flutter / Dart, GraphQL"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Talawa-API:"})," Node.js, GraphQL, MongoDB"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Talawa-Admin Portal:"})," TypeScript, Node.js"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"There are others, but these are the main ones that will guide your contributions."}),"\n",(0,i.jsx)(t.h2,{id:"ideas-list",children:"Ideas List"}),"\n",(0,i.jsx)(t.p,{children:"Here are the features we'd like to implement in the coming months."}),"\n",(0,i.jsx)(t.h3,{id:"add-base-documentation-for-each-repository-talawa-talawa-api-and-talawa-admin",children:"Add Base Documentation for each Repository (Talawa, Talawa-API and Talawa-Admin)"}),"\n",(0,i.jsx)(t.p,{children:"Since the introduction of the CI/CD pipeline for automating documentation, there has not been much activity on the bulk of the older files, leaving most of the three codebases lacking in documentation. The goal of this task is to add comments on all of the existing methods, events and namespaces of all the classes within the Talawa, Talawa-Admin and Talawa API."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Repos to update:"})," Talawa-API, Talawa, Talawa-Admin"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Skills Required:"})," The ideal candidate should be familiar with Javascript and in particular Node.js. Additionally, they need to be comfortable with using Git/Github and to update the documentation via pull requests."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"How we measure sucess:"})," Increased documentation for files which have not been modified for more than 3 months. Additionally, an increase in the percentage of the documentation completed from the documentation coverage script that is used."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Possible Mentors:"})," Shannika Jackson, Dominic Mills, Michael Lue, Tasneem Koushar"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact details:"})," Send your CV along with at least two technical writing samples to ",(0,i.jsx)(t.img,{alt:"img",src:n(60171).Z+"",width:"225",height:"20"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"create-how-to-guides-and-tutorials-for-getting-started-with-talawa-talawa-api-and-talawa-admin",children:"Create How-To Guides and Tutorials for getting started with Talawa, Talawa API and Talawa-Admin"}),"\n",(0,i.jsx)(t.p,{children:"Currently, there exists no truly detailed guide on how to get setup and become productive within the basic ecosystems of Talawa, Talawa-API and Talawa-Admin. There are a number of resources available, such as videos demonstrating features from merged pull requests in the respective repositories as well as notes that need to be structured and organised in a meaningful way for a prospective user to be productive with the codebase."}),"\n",(0,i.jsx)(t.p,{children:"Ideally, we aim to have the following accomplished (though this list is not exhaustive):"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Improve documentation readability by ensuring the language is accessible by individuals regardless of their language background. This can consist of separating it into two distinct levels, namely: beginners and advanced."}),"\n",(0,i.jsx)(t.li,{children:"Construct a guide and style format for new technical writers/contributors, to keep the documentation organic with the codebase, up to date and adhering to our standards."}),"\n",(0,i.jsx)(t.li,{children:"Teaching beginners how to document code optimally and effectively with best practices. In addition to this, include detailed videos and tutorials on using the application, connecting to the API, etc."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Additional information follows:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Repos to update:"})," Talawa-API, Talawa, Talawa-Admin"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Skills Required:"})," The ideal candidate should be familiar with Javascript and in particular Node.js and TypeScript. Additionally, they need to be comfortable with using Git/Github and to update the documentation via pull requests."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"How we measure sucess:"})," The creation of tutorials and hot-to guides in different forms (static HTML pages, pdfs, etc)."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Possible Mentors:"})," Shannika Jackson, Dominic Mills, Michael Lue, Tasneem Koushar"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact details:"})," Send your CV along with at least two technical writing samples to ",(0,i.jsx)(t.img,{alt:"img",src:n(60171).Z+"",width:"225",height:"20"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"create-visualisations-for-various-graphql-schema-and-queries",children:"Create visualisations for various GraphQL Schema and Queries"}),"\n",(0,i.jsxs)(t.p,{children:["The Talawa API has a number of GraphQL queries which are undocumented and have become increasingly complex and interlinked. We need a way to package these details in a more fitting manner for anyone interested in working on this. We require creating written documentation punctuated with code snippets to give a top level overview of the use and functionality of these schema and queries and then using graphical software such as ",(0,i.jsx)(t.a,{href:"https://graphviz.org/",children:"GraphViz"})," to highlight the relationships between these various queries and schema."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Repos to update:"})," Talawa-API"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Skills Required:"})," The ideal candidate should be familiar with Node.js; GraphQL is not a strict requirement, but they must be willing to learn. Additionally, they need to be comfortable with using Git/Github. Experience in Illustration or graphic design is a plus."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"How we measure success:"})," Visualisations present through the base documentation and any new documentation generated from this program."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Possible Mentors:"})," Anwer Sayeed (Github: anwersayeed), Tasneem Koushar (Github: tasneemkoushar), Eva Sharma (Github: evasharma12)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact details:"})," Send your CV along with at least two technical writing samples to ",(0,i.jsx)(t.img,{alt:"img",src:n(60171).Z+"",width:"225",height:"20"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"revamp-and-restructure-the-current-documentation-page",children:"Revamp and Restructure the Current Documentation Page"}),"\n",(0,i.jsx)(t.p,{children:"The website that currently hosts the documentation is rather simplistic and has not evolved from when the Talawa application was more refined than it is now. It no longer takes into consideration the needs of contributing to a complex, multi-layered application, and as such it needs to be remodelled and redesigned to account for a number of changes that have and are currently taking place. Remodelling involves re-writing much of the documentation already in place on the site, as well as, working with a candidate that may be adding to the documentation and ensuring that templates are in place such that the look and feel of the site is cogent and consistent. Note: it is possible to work on this task in conjunction with another one of the aforementioned tasks here.."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Repos to update:"})," Talawa-API"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Skills Required:"})," HTML, Javascript, CSS. Any design skills would be a plus. Must also be comfortable using Github to submit changes."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"How we measure sucess:"})," A website structured in a completely different manner, which is more efficient and effective in providing the information for a user wishing contribute to Talawa. This can be measured by the increase in new contributors via pull requests."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Possible Mentors:"})," Shannika Jackson, Dominic Mills, Michael Lue, Tasneem Koushar"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact details:"})," Send your CV along with at least two technical writing samples to ",(0,i.jsx)(t.img,{alt:"img",src:n(60171).Z+"",width:"225",height:"20"})]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},60171:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"},90664:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/gsod2022-white-b2ce3f4dc90fcbfcf03df6118c7df536.png"},511151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var i=n(667294);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);