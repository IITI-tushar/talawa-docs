"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[37],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),d=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=d(a),p=n,m=h["".concat(l,".").concat(p)]||h[p]||c[p]||o;return a?i.createElement(m,r(r({ref:t},u),{},{components:a})):i.createElement(m,r({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:n,r[1]=s;for(var d=2;d<o;d++)r[d]=a[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3805:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=a(7462),n=(a(7294),a(3905));const o={id:"gsod-ideas",title:"GSoD 2023 - Improving the accessibility of the Talawa Docs"},r=void 0,s={unversionedId:"internships/gsod/gsod-ideas",id:"internships/gsod/gsod-ideas",title:"GSoD 2023 - Improving the accessibility of the Talawa Docs",description:"About Talawa",source:"@site/docs/internships/gsod/ideas.md",sourceDirName:"internships/gsod",slug:"/internships/gsod/gsod-ideas",permalink:"/docs/internships/gsod/gsod-ideas",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/internships/gsod/ideas.md",tags:[],version:"current",frontMatter:{id:"gsod-ideas",title:"GSoD 2023 - Improving the accessibility of the Talawa Docs"},sidebar:"docs",previous:{title:"GSoD",permalink:"/docs/category/gsod"},next:{title:"GSoD 2022 - Revamping and restructuring the Talawa Docs",permalink:"/docs/internships/gsod/gsod-ideas-2022"}},l={},d=[{value:"About Talawa",id:"about-talawa",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Our Project&#39;s Problem",id:"our-projects-problem",level:3},{value:"Project Scope",id:"project-scope",level:3},{value:"Measuring the project&#39;s success",id:"measuring-the-projects-success",level:3},{value:"Timeline",id:"timeline",level:3},{value:"Budget",id:"budget",level:3},{value:"General Considerations",id:"general-considerations",level:3},{value:"Repository Languages and Skills",id:"repository-languages-and-skills",level:3},{value:"Ideas List",id:"ideas-list",level:2},{value:"Complete the Documentation for the <strong>Talawa</strong>, and <strong>Talawa Admin</strong> Repositories",id:"complete-the-documentation-for-the-talawa-and-talawa-admin-repositories",level:3},{value:"Create Video Tutorials and Visual guides for <strong>Talawa</strong>, <strong>Talawa API</strong> and <strong>Talawa Admin</strong>",id:"create-video-tutorials-and-visual-guides-for-talawa-talawa-api-and-talawa-admin",level:3},{value:"Create how-to guides for auxiliary tasks for <strong>Talawa</strong>, <strong>Talawa API</strong> and <strong>Talawa-Admin</strong>",id:"create-how-to-guides-for-auxiliary-tasks-for-talawa-talawa-api-and-talawa-admin",level:3},{value:"Create visualisations for various GraphQL Schema and Queries",id:"create-visualisations-for-various-graphql-schema-and-queries",level:3},{value:"Create Documentation for the Code Output from Figma or Adobe InDesign <strong>Talawa</strong>, and <strong>Talawa-admin</strong> Repositories",id:"create-documentation-for-the-code-output-from-figma-or-adobe-indesign-talawa-and-talawa-admin-repositories",level:3}],u={toc:d},h="wrapper";function c(e){let{components:t,...o}=e;return(0,n.kt)(h,(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"about-talawa"},"About Talawa"),(0,n.kt)("p",null,"Talawa is a mobile application designed to make it easier for community-based organizations to collaborate with their members, including religious groups, non-profits, social groups, and businesses. Unlike other software solutions in this space, Talawa is specifically designed to work in countries with limited technology and education resources, such as in Jamaica. Talawa is run by the Palisadoes Foundation which is an entirely decentralized organization that relies solely on volunteer participation to meet its goals. "),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Welcome to the Talawa documentation ideas page for 2023! Thanks to our participation in the Google Season of Docs (GSoD) program last year, we significantly improved the documentation in our codebase (to put it lightly!). We are currently focused on improving the learning curve for our existing and future contributors by leveraging the insights gained from our previous participation. Our goal is to increase the user-friendliness of our main repositories through our documentation projects. To achieve this, we will begin with a discussion of the project's issues, scope, and success metrics, followed by a proposed ideas section that will include a timeline and budget."),(0,n.kt)("h3",{id:"our-projects-problem"},"Our Project's Problem"),(0,n.kt)("p",null,"Our main method of documentation creation involves the use of CI/CD pipelines to automate the process, as illustrated in the following steps:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A GitHub Action checks whether the JavaScript/Dart files being pushed have comments of a specified form whenever a pull request is made.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If the pull request is successful, another GitHub Action runs a command such as jsdoc or dartdoc to generate a static HTML file containing the documentation from the comments. The artifact file is then sent to the Talawa-Docs repository.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Finally, a GitHub Action collates and organizes the HTML files within a pre-specified template, creating a cohesive documentation file which is then added to the site."))),(0,n.kt)("p",null,"While this method was useful in consolidating information, from individual files across the three respositories, several issues became apparent that now need to be addressed, the four most pressing are:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Completing the documentation for the remaining Talawa repositories. While we were able to complete the documentation for 100% of the Talawa API, only around 70% of the Talawa Mobile Frontend and 40% of the Talawa Admin were able to be completed during this period, due the overwhelming amount files that span across the three repositories, and still need to be completed. The missing documentetation needs to be prioritized and completed as soon as possible.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Using a cohesive underlying methodology for organizing and structuring the documentation outside of the automated documentation framework mentioned above. To address this issue, we decided upon using the ",(0,n.kt)("a",{parentName:"p",href:"https://diataxis.fr/"},"Di\xe1taxis"),' methodology to rework much of the existing documentation within the proposed framework of tutorials, how-to guides, technical references, and "explanations". This approach will ensure that the documentation will be restructured and reorganized in a way that can be easily navigated and understood by different types of users, including those with varying levels of technical expertise. This is especially important as Talawa is specifically directed at underserved communities and aims to be inclusive in all respects. ')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Prioritizing the incorporation of visual aids to enhance the readers' understanding of the content. To improve comprehension, we aim to incorporate more visualizations into the documentation. Through usability tests and informal interactions, we found that presenting high-level summaries and diagrams at the outset of introducing contributors to various topics was highly beneficial. Moreover, there is ",(0,n.kt)("a",{parentName:"p",href:"https://www.lesswrong.com/posts/mAdMkFqWzbJRB544m/book-review-how-learning-works#Strategies_"},"scientific evidence")," to support the effectiveness of this technique. This approach increases readers' confidence and enables them to establish practical expectations before delving into specific details. Following the previous point, this is in line with the ethos of the Talawa community to provide adequate resources to enable the highest possible number of interested developers to contribute to Talawa.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"We also identified a lack of documentation in describing how to do auxiliary tasks such as getting set up on different machines, troubleshooting, writing tests, as well as describing the various types of tests and the relevance of code coverage within the testing framework. To address this issue, we recommend creating separate documentation for auxiliary tasks, which will provide more clarity and help users navigate the documentation more easily."))),(0,n.kt)("h3",{id:"project-scope"},"Project Scope"),(0,n.kt)("p",null,"The Talawa documentation project aims to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Establish a set of documentation standards and guidelines for the project, to ensure consistency and quality across all documentation.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Conduct a comprehensive audit of the existing documentation to identify areas where it can be improved. This includes analyzing the content, organization, and formatting of the documentation to ensure that it is accurate, clear, and easy to understand.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Introduce a review process for all new documentation, to ensure it meets the established standards and guidelines before being published.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Use a "friction log" to identify pain points and areas of confusion in the documentation. This log should be created from the perspective of multiple users, including both experienced contributors and new users. By doing so, we can ensure that the documentation addresses the needs of all users, regardless of their level of experience.')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Evaluate which parts of the documentation would benefit from the addition of diagrams, illustrations, or other visual aids. This is particularly important for complex relationships, such as those involving data models, APIs, or other technical concepts.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Keep a public log of all progress and obstacles encountered during the project. This log should include a summary of any discrepancies between the expected and actual project outcomes. By doing so, we can make necessary adjustments as we move forward.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Conduct user testing and feedback sessions to gather input on the effectiveness and usability of the documentation, and use this feedback to make improvements.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Provide resources for contributors on how to effectively document their code, including best practices, tools, and examples in the form of video tutorials and how-to guides.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Ensure that all documentation is accessible to a diverse audience, including those with disabilities or who use assistive technology."))),(0,n.kt)("p",null,"Outside of this project's scope is modifying the existing automation architecture and/or any form of testing and verification."),(0,n.kt)("h3",{id:"measuring-the-projects-success"},"Measuring the project's success"),(0,n.kt)("p",null,"We have implemented scripts to measure the amount of code that is documented in the form of comments files individual files, which can be parsed by documentation generating libraries such as jsdoc, dartdoc, and others. These libraries are integrated into our CI/CD pipeline for each repository. While we prioritize measuring the quantity of documentation, we also value metrics related to the accessibility and user experience of the documentation. We aim to ensure that the documentation is presented in a way that is easy to access and understand, and that it provides a high quality of life for users who rely on it."),(0,n.kt)("p",null,"To that end, we consider the documentation to be success if it addresses the following heuristics:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reduction in bug reports: By improving the quality of the documentation, we expect to see a reduction in bug reports related to misunderstandings or incorrect assumptions about how the code works. We are aiming for a 30% reduction. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reduced onboarding time: We expect the improved documentation to reduce the amount of time required for new developers to get up to speed on the codebase, resulting in faster onboarding times. This can be accomplished using survey data after the programme has completed. We are aiming for a 25% increase based on the results. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Improved developer satisfaction: Clear, comprehensive documentation can help developers feel more confident and satisfied with their work. By improving documentation, we hope to increase developer satisfaction and reduce frustration or confusion caused by poorly documented code. This can be accomplished using survey data after the programme has completed. We are aiming for 40% increase in satisfaction. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Faster code reviews: By improving the quality of the documentation, we may see faster and more efficient code reviews as reviewers are able to understand the code more easily. This can be done by compare the approval rates of past and present pull requests that seek to be merged. We're aiming for a 40% reduction in the time taken. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Improved code maintainability: Clear, comprehensive documentation can make code easier to maintain in the long term. By improving documentation quality, we may see a reduction in technical debt and increased maintainability of the codebase."))),(0,n.kt)("p",null,"Achieving these goals will indicate a marked improvement in documentation quality and will have a positive impact on the usability and maintainability of the code. This, in turn, will help us to better serve our users and improve the overall quality of our software."),(0,n.kt)("h3",{id:"timeline"},"Timeline"),(0,n.kt)("p",null,"The project itself will take around six months to complete. Once the tech writer(s) are hired, we'll spend a month getting them up to speed on the state of the documentation, the workflows we use for creating documentation and then move onto the audit and friction log with the possible mentors, and spend the remaining months focusing on creating the documentation."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Dates"),(0,n.kt)("th",{parentName:"tr",align:null},"Action items"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"May"),(0,n.kt)("td",{parentName:"tr",align:null},"Orientation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"June-July"),(0,n.kt)("td",{parentName:"tr",align:null},"Review the Di\xe1taxis methodology and understand its role in Talawa; Audit current documentation; highlight where in the existing infrastructure would benefit from illustrations")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"August - October"),(0,n.kt)("td",{parentName:"tr",align:null},"Begin working on documenting Talawa")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"November"),(0,n.kt)("td",{parentName:"tr",align:null},"Project completion and final report due")))),(0,n.kt)("p",null,"This timeline, especially within the May-July period, is not strict and has some room for unforeseen circumstances that may arise. However, it is expected that you'll complete all the requiste tasks within the intervals posted and have everything completed by the November deadline."),(0,n.kt)("h3",{id:"budget"},"Budget"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Item"),(0,n.kt)("th",{parentName:"tr",align:null},"Amount"),(0,n.kt)("th",{parentName:"tr",align:null},"Running total"),(0,n.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Technical Writers (x4)"),(0,n.kt)("td",{parentName:"tr",align:null},"2500"),(0,n.kt)("td",{parentName:"tr",align:null},"10000"),(0,n.kt)("td",{parentName:"tr",align:null},"stipends at $2500 each")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Volunteer Stipends"),(0,n.kt)("td",{parentName:"tr",align:null},"2000"),(0,n.kt)("td",{parentName:"tr",align:null},"12000"),(0,n.kt)("td",{parentName:"tr",align:null},"stipends at $500 each")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Project Manager"),(0,n.kt)("td",{parentName:"tr",align:null},"1000"),(0,n.kt)("td",{parentName:"tr",align:null},"13000"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Graphic designer - to assist with visuals in the documentation"),(0,n.kt)("td",{parentName:"tr",align:null},"1000"),(0,n.kt)("td",{parentName:"tr",align:null},"14000"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Printed Palisadoes Foundation T-shirts (10 T-shirts)"),(0,n.kt)("td",{parentName:"tr",align:null},"120"),(0,n.kt)("td",{parentName:"tr",align:null},"14120"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Sundry expenses"),(0,n.kt)("td",{parentName:"tr",align:null},"880"),(0,n.kt)("td",{parentName:"tr",align:null},"15000"),(0,n.kt)("td",{parentName:"tr",align:null},"3% payment processing fees; mailing fees; paraphernalia for candidates; etc")))),(0,n.kt)("p",null,"Additional information"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The Palisadoes Foundation was selected for Google Summer of Code (GSoC) in 2023, ",(0,n.kt)("a",{parentName:"li",href:"https://summerofcode.withgoogle.com/programs/2022/organizations/the-palisadoes-foundation"},"2022"),", and ",(0,n.kt)("a",{parentName:"li",href:"https://summerofcode.withgoogle.com/archive/2021/organizations/4835102856577024"},"2021")," and ",(0,n.kt)("a",{parentName:"li",href:"https://www.outreachy.org/apply/project-selection/#palisadoes-foundation"},"Outreachy in 2023"),". The Palisadoes Foundation was also selected for the ",(0,n.kt)("a",{parentName:"li",href:"https://externship.github.in/"},"Github externship")," on three separate occasions in years 2021 and 2022. The mentors have all previously been mentors of GSoC since the Palisadoes Foundation was first accepted. ")),(0,n.kt)("h3",{id:"general-considerations"},"General Considerations"),(0,n.kt)("p",null,"This is not an exhaustive list of ideas, but they are the ones we currently feel need the most attention."),(0,n.kt)("p",null,"We also welcome any other ideas that we could use. "),(0,n.kt)("h3",{id:"repository-languages-and-skills"},"Repository Languages and Skills"),(0,n.kt)("p",null,"We are looking for motivated candidates with a history of strong, demonstratable technical writing skills that can provide structure and organization to our codebases. It is not necessary to be well-versed in the tech stack being used for a given repository though some familiarity would be seen as a positive. Our mentors will provide ample support in a 'learn as you go' fashion."),(0,n.kt)("p",null,"The following lists the primary tech stack being used for each respective repository which is helpful for the purpose of documenting each repository (but you are not required to know them):"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Talawa:")," Flutter / Dart, GraphQL"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Talawa-API:")," Node.js, GraphQL, MongoDB"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Talawa-Admin Portal:")," TypeScript, Node.js")),(0,n.kt)("p",null,"There are others, but these are the main ones that will guide your contributions."),(0,n.kt)("h2",{id:"ideas-list"},"Ideas List"),(0,n.kt)("p",null,"Here are the features we'd like to implement in the coming months."),(0,n.kt)("h3",{id:"complete-the-documentation-for-the-talawa-and-talawa-admin-repositories"},"Complete the Documentation for the ",(0,n.kt)("strong",{parentName:"h3"},"Talawa"),", and ",(0,n.kt)("strong",{parentName:"h3"},"Talawa Admin")," Repositories"),(0,n.kt)("p",null,"Our previous participation in Google Season of Docs 2022 was able to cover the entire backlog of uncommented files in the Talawa API repository. The goal of this task is to add comments for all of the existing methods, events and namespaces of all the classes within the Talawa Mobile and Talawa Admin repositories."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Repos to update:")," Talawa, Talawa Admin."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Skills Required:")," The ideal candidate should be familiar with Typescript and in particular Node.js. They also need to be comfortable with using Git and Github and to update the documentation via pull requests. Additionally, knowledge of TSDocs is also required."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"How we measure sucess:")," Increased documentation for files which have not been modified for more than 3 months. Additionally, an increase in the percentage of the documentation completed from the documentation coverage script that is used."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Possible Mentors:")," Dominic Mills (Github: DMills27), Anwer Sayeed (Github: anwersayeed), Tasneem Koushar (Github: tasneemkoushar), Eva Sharma (Github: evasharma12)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contact details:")," Send your CV along with at least two technical writing samples to ",(0,n.kt)("img",{alt:"img",src:a(171).Z,width:"225",height:"20"}))),(0,n.kt)("h3",{id:"create-video-tutorials-and-visual-guides-for-talawa-talawa-api-and-talawa-admin"},"Create Video Tutorials and Visual guides for ",(0,n.kt)("strong",{parentName:"h3"},"Talawa"),", ",(0,n.kt)("strong",{parentName:"h3"},"Talawa API")," and ",(0,n.kt)("strong",{parentName:"h3"},"Talawa Admin")),(0,n.kt)("p",null,"Currently, there are no video guides available to help users get started and become productive within the basic ecosystems of Talawa, Talawa API, and Talawa Admin. Our goal is to accomplish the following (although this list is not exhaustive):"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create video tutorials that are accessible to individuals with different technical backgrounds, and make the user experience easier and enhance user understanding for the three repositories. The guides should be divided into two distinct levels: beginners and advanced.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Develop visual guides and style formats for new technical writers/contributors to ensure that documentation remains organic with the codebase, up-to-date, and adheres to our standards.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Provide beginners with detailed videos and tutorials on how to document code optimally and effectively with best practices, as well as instructions on using the application, connecting to the API, etc.-"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Repos to update:")," Talawa API, Talawa, Talawa Admin"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Skills Required:")," The ideal candidate should have strong writing skills and be able to present samples of their technical writing. They should also be familiar with video editing software such as CapCut, photo editing software such as Adobe Photoshop and experience creating modified screenshots with an appliation such as ",(0,n.kt)("a",{parentName:"li",href:"https://app.prntscr.com/en/index.html"},"Lightshot"),". Coding experience  in Javascript/Node.js/Dart would be an asset. Additionally, they need to be comfortable with using Git and Github and to update the documentation via pull requests."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"How we measure sucess:")," The creation of tutorials and how-to guides in different forms."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Possible Mentors:")," Dominic Mills (Github: DMills27), Anwer Sayeed (Github: anwersayeed), Tasneem Koushar (Github: tasneemkoushar), Eva Sharma (Github: evasharma12)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contact details:")," Send your CV along with at least two technical writing samples to ",(0,n.kt)("img",{alt:"img",src:a(171).Z,width:"225",height:"20"}))),(0,n.kt)("h3",{id:"create-how-to-guides-for-auxiliary-tasks-for-talawa-talawa-api-and-talawa-admin"},"Create how-to guides for auxiliary tasks for ",(0,n.kt)("strong",{parentName:"h3"},"Talawa"),", ",(0,n.kt)("strong",{parentName:"h3"},"Talawa API")," and ",(0,n.kt)("strong",{parentName:"h3"},"Talawa-Admin")),(0,n.kt)("p",null,"Currently, there are no how-to guides on a number of auxiliary tasks such as getting set up on different machines, testing and troubleshooting various issues. The goal of this task is to create proper ",(0,n.kt)("em",{parentName:"p"},"How-to guides")," on for the aforementioned tasks to make a prospective developer's jobs easier."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Repos to update:")," Talawa API, Talawa, Talawa Admin"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Skills Required:")," The ideal candidate should have strong writing skills and be able to present samples of their technical writing was well as familiarity with Javascript and in particular Node.js and TypeScript. Additionally, they need to be comfortable with using Git and Github and to update the documentation via pull requests."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"How we measure sucess:")," The creation of tutorials and hot-to guides in different forms."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Possible Mentors:")," Dominic Mills (Github: DMills27), Anwer Sayeed (Github: anwersayeed), Tasneem Koushar (Github: tasneemkoushar), Eva Sharma (Github: evasharma12)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contact details:")," Send your CV along with at least two technical writing samples to ",(0,n.kt)("img",{alt:"img",src:a(171).Z,width:"225",height:"20"}))),(0,n.kt)("h3",{id:"create-visualisations-for-various-graphql-schema-and-queries"},"Create visualisations for various GraphQL Schema and Queries"),(0,n.kt)("p",null,"The Talawa API has a number of GraphQL queries which are undocumented and have become increasingly complex and interlinked. We need a way to package these details in a more fitting manner for anyone interested in working on this. We require creating written documentation punctuated with code snippets to give a top level overview of the use and functionality of these schema and queries and then using graphical software such as ",(0,n.kt)("a",{parentName:"p",href:"https://graphviz.org/"},"GraphViz")," to highlight the relationships between these various queries and schema."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Repos to update:")," Talawa API"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Skills Required:")," The ideal candidate should be familiar with Node.js; GraphQL is not a strict requirement, but they must be willing to learn. Additionally, they need to be comfortable with using Git and Github. Experience in Illustration or graphic design is a plus."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"How we measure sucess:")," Visualisations present through the base documentation and any new documentation generated from this program."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Possible Mentors:")," Dominic Mills (Github: DMills27), Anwer Sayeed (Github: anwersayeed), Tasneem Koushar (Github: tasneemkoushar), Eva Sharma (Github: evasharma12)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contact details:")," Send your CV along with at least two technical writing samples to ",(0,n.kt)("img",{alt:"img",src:a(171).Z,width:"225",height:"20"}))),(0,n.kt)("h3",{id:"create-documentation-for-the-code-output-from-figma-or-adobe-indesign-talawa-and-talawa-admin-repositories"},"Create Documentation for the Code Output from Figma or Adobe InDesign ",(0,n.kt)("strong",{parentName:"h3"},"Talawa"),", and ",(0,n.kt)("strong",{parentName:"h3"},"Talawa-admin")," Repositories"),(0,n.kt)("p",null,'There exist plugins in Figma and Adobe InDesign that allow one to export code in HTML, React, Vue or any other modern web framework as well as in Dart. However, the issue with the code generated with these plugins is that they are usually verbose, unoptimised and unintuitive and require "clean-up" from developers to incorporate in the any part of the application.  This task involves working with a developer, and possibly a designer, to document how one would create a template with these modifications that would later aid in incorporating new pages at a faster rate in the Talawa Frontend and Admin Portal.'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Repos to update:")," Talawa, Talawa Admin."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Skills Required:")," The ideal candidate should have strong writing skills and be able to present samples of their technical writing. Familarity with Typescript and in particular Node.js and/or Dart would be a plus. They also need to be comfortable with using Git and Github and to update the documentation via pull requests."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"How we measure sucess:")," Increased documentation for files which have not been modified for more than 3 months. Additionally, an increase in the percentage of the documentation completed from the documentation coverage script that is used."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Possible Mentors:")," Dominic Mills (Github: DMills27), Michael Lue (Github: JamaicaFriedChicken)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contact details:")," Send your CV along with at least two technical writing samples to ",(0,n.kt)("img",{alt:"img",src:a(171).Z,width:"225",height:"20"}))))}c.isMDXComponent=!0},171:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/png;base64,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"}}]);