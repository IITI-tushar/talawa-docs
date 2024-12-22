"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[734583],{256197:(e,n,t)=>{t.r(n),t.d(n,{default:()=>k});var a=t(296540),s=t(705260),o=t(810781);function i(){const e=document.querySelector(".NativeDevelopment"),n=e.querySelector(".dissection").children,t=n.length,a=(e,n,t)=>Math.min(t,Math.max(n,e)),s=()=>{const s=e.getBoundingClientRect().top-60,o=window.innerHeight,i=1-a(s/o,0,1),r=a((i-(l=.2))/(.9-l),0,1);var l;for(let e=0;e<t;e++){const s=a((r-e/t)*t,0,1);n[e].style.opacity=s;const o=40*(1-s);n[e].style.transform=`translateX(${o}px)`}};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)}const r=()=>{(0,a.useEffect)((()=>{!function(){const e=["full","mobile","desktop","laptop","mobile2","full2"],n=[1250,1500,1500,1500,1500,1250];let t=0;const a=[],s=document.querySelector(".LogoAnimation");function o(){const i=e[t];s.classList.remove(i),t=(t+1)%e.length;const r=e[t],l=n[t];s.classList.add(r),a.push(setTimeout(o,l))}function i(){s.classList.remove("init"),o()}function r(){document.hidden?(a.forEach((function(e){clearTimeout(e)})),a.length=0):i()}document.hidden||a.push(setTimeout(i,2e3)),document.addEventListener("visibilitychange",r,!1)}(),i()}),[])};var l=t(474848);const c=function(e){let{element:n="section",children:t,className:a,background:s="light"}=e;const o=n;return(0,l.jsx)(o,{className:a?`Section ${a} ${s}`:`Section ${s}`,children:t})},d=e=>{let{columnOne:n,columnTwo:t,reverse:a=!1}=e;const s="column first "+(a?"right":"left"),o="column last "+(a?"left":"right"),i="TwoColumns "+(a?"reverse":"");return(0,l.jsxs)("div",{className:i,children:[(0,l.jsx)("div",{className:s,children:n}),(0,l.jsx)("div",{className:o,children:t})]})};const m=function(e){let{href:n,type:t="primary",target:a,children:s,buttonClassName:o}=e;return(0,l.jsx)("a",{className:`ActionButton ${t} ${o}`,rel:"noopener",href:n,target:a,children:s})},u=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m,{type:"primary",href:"https://github.com/PalisadoesFoundation",target:"_self",buttonClassName:"custom-button",children:"Learn More"}),(0,l.jsx)(m,{type:"secondary",href:"/docs-mobile-user/",target:"_self",children:"Mobile"}),(0,l.jsx)(m,{type:"secondary",href:"/docs-web-user/",target:"_self",children:"Web"}),(0,l.jsx)(m,{type:"secondary",href:"/docs-admin/",target:"_self",children:"Admins"}),(0,l.jsx)(m,{type:"secondary",href:"/docs/",target:"_self",children:"Devs"})]});var h=t(486025);const p=function(){return(0,l.jsxs)(c,{background:"light",className:"HeaderHero",children:[(0,l.jsx)("div",{className:"socialLinks"}),(0,l.jsx)(d,{reverse:!0,columnOne:(0,l.jsx)("img",{className:"custom-image bounce-animation",src:(0,h.Ay)("img/image-01.png"),alt:"HeaderHero Image"}),columnTwo:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{className:"title",children:"Talawa"}),(0,l.jsx)("h2",{className:"tagline",children:"Member Management Software"}),(0,l.jsx)("p",{className:"description",children:"For open source projects, charities and other non-profits"}),(0,l.jsx)("div",{className:"buttons",children:(0,l.jsx)(u,{})})]})})]})},g=e=>{let{text:n}=e;return(0,l.jsx)("h2",{className:"Heading",children:n})};const f=function(e){let{title:n,text:t,moreContent:a}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g,{text:n}),(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:t}}),a]})},w={intro:"\n    <ul>\n  <li>Talawa is an open-source software project to help manage organizations like yours </li>\n  <li>Your community becomes closer using our mobile app with social media features </li>\n  <li>The Admin Web Portal makes member, event and volunteer management simpler.</li>\n  </ul>\n    ",nativeCode:"\n    <ul>\n  <li>Easily schedule events and track attendance. Reports show who\u2019s coming, and how often </li>\n  <li>Stay in contact with your membership with individual or group emails, now and in the future </li>\n  <li>Track your volunteer time and their activity tasks. Make your planning a success </li>\n  <li>Our intuitive design helps streamline work processes and increases adoption so everyone can benefit </li>\n  </ul>\n    ",codeExample:"\n  import React from 'react';\n  import {Header} from './Header';\n  \n  const WelcomeScreen = () => (\n    <View>\n      <Header title=\"Welcome to Talawa\"/>\n      <Text style={heading}>Step One</Text>\n      <Text>\n      Talawa is powerful, yet intuitive community management software made for open\n      source projects, clubs, charities and other non-profits\n      </Text>\n      <Text>\n      Designed to help you save time, reduce frustration, and accomplish your goals.\n      </Text>\n      <Text>\n      Giving, event management, social media features, plus more.\n      </Text>\n      <Text>\n        Read the docs to discover what to do next:\n      </Text>\n  \n     </View>\n  );\n    ",forEveryone:"\n    <ul>\n    <li>Simple to use member dashboards</li>\n    <li>Member notifications</li>\n    <li>Event and volunteer calendars</li>\n    <li>Donation management </li>\n    <li>Advertising from local companies </li>\n    <li>Multi-organization support </li>\n    <li>Plugin support for cloud service providers</li>\n    </ul>\n   ",crossPlatform:"\n    <ul>\n  <li>View the social media news feed </li>\n  <li>Share posts, images and videos </li>\n  <li>Create events for your groups </li>\n  <li>Group chat with other members </li>\n  <li>Receive the latest community news </li>\n  <li>Get reminders and notifications </li>\n  <li>Make your community stronger </li>\n  </ul>\n    ",sixthPanel:"Talawa is an open-source project. Our active community of volunteers is constantly adding features to make administration easier.</br></br>Their varied perspectives has created a product that is easily adaptable to the cultures and languages of their countries. Contributions from 19 different timezones.\n    ",seventhPanel:"Talawa was created by The Palisadoes Foundation in 2019 as part of its social outreach programs in Jamaica. Our work was sponsored by local companies wanting to create a globally competitive workforce on the island by sponsoring philanthropic software development internships for university students.<br/><br/>\n    In 2021, Palisadoes was accepted into the prestigious Google Summer of Code (GSoC) which expanded  the development team to volunteers around the world. That same year we participated in the GitHub India, GitHub Externship program for both the winter and summer cohorts.<br/><br/>\n    Palisadoes was also selected for GSoC in 2022 and 2023. In 2022 the Google Season of Docs (GsoD) selected Palisadoes as a participant. In 2023 our Talawa projects were included in the Outreachy open-source internship program.\n    ",eightPanel:'<p>Our developer community members are talented, passionate, and amazing. They are always suggesting, coding and documenting new ideas for our software.</p>\n    <p>They span across the globe. Explore this space to learn something new from the community.</p>\n    <br/>\n    <ul>\n      <li><a href="/docs/">Explore this site</a></li>\n      <li><a href="https://github.com/PalisadoesFoundation" target="_self">Visit our GitHub pages</a></li>\n      <li><a href="https://github.com/PalisadoesFoundation/talawa#readme" target="_self">Join our Slack channel</a></li>\n    </ul>\n    <br/>\n    <strong>Jump in and get started!</strong>\n    \n    ',fastRefresh:"\n  Talawa was created by The Palisadoes Foundation in 2019 as part of its social outreach programs in Jamaica. Our work was sponsored by local companies wanting to create a globally competitive workforce on the island by sponsoring philanthropic software development internships for university students.<br/><br/>In 2021, Palisadoes was accepted into the prestigious Google Summer of Code (GSoC) which expanded  the development team to volunteers around the world. That same year we participated in the GitHub India, GitHub Externship program for both the winter and summer cohorts. <br/><br/>4.\tPalisadoes was also selected for GSoC in 2022 and 2023. In 2022 the Google Season of Docs (GsoD) selected Palisadoes as a participant. In 2023 our Talawa projects were included in the Outreachy open source internship program.\n  \n    ",talks:"\n    Get to know our Talawa community by visiting our YouTube channel. There you will find interviews, technical talks, feature reviews with volunteers and much more\n  <br/><br/>\n  You can follow the latest news from the Palisadoes team on Twitter.\n    "},x=()=>(0,l.jsx)(c,{className:"SecondPanel",background:"tint",children:(0,l.jsx)(d,{reverse:!0,columnOne:(0,l.jsx)(f,{title:"Easy Community Organization Management",text:w.intro}),columnTwo:(0,l.jsx)("img",{alt:"",src:(0,h.Ay)("img/image-02.png"),className:"second-panel-image"})})}),v=()=>{const e=(0,h.Ay)("img/image-03.png");return(0,l.jsx)(c,{className:"third-panel",background:"light",children:(0,l.jsx)(d,{columnOne:(0,l.jsx)(f,{title:"More Effective Management",text:w.nativeCode}),columnTwo:(0,l.jsx)("img",{alt:"",src:e,className:"third-panel-image"})})})};const j=function(e){let{className:n}=e;return(0,l.jsx)(c,{className:`NativeDevelopment ${n}`,background:"tint",children:(0,l.jsx)(d,{reverse:!0,columnOne:(0,l.jsx)(f,{title:"Many Useful Admin Features",text:w.forEveryone}),columnTwo:(0,l.jsx)("div",{className:"dissection",children:(0,l.jsx)("img",{alt:"talawa",src:"img/image-04.png",className:"fourth-panel-image"})})})})};const y=function(){return(0,l.jsx)(c,{className:"fifth-panel",children:(0,l.jsx)("div",{className:"custom-panel",children:(0,l.jsx)("div",{className:"wrapper",children:(0,l.jsx)(d,{columnOne:(0,l.jsx)("div",{className:"text-column-offset",children:(0,l.jsx)(f,{title:"Powerful, Fun Mobile Application",text:w.crossPlatform})}),columnTwo:(0,l.jsx)("div",{className:"dissection",children:(0,l.jsx)("img",{alt:"talawa",src:"img/panel-5-img.png",className:"fifth-panel-image"})})})})})})};var b=t(421432);const T=()=>{const{sixthPanel:e,codeExample:n}=w;return(0,l.jsx)(c,{className:"SixthPanel",background:"tint",children:(0,l.jsx)(d,{columnOne:(0,l.jsx)(f,{title:"Free Software: Created by a global volunteer team",text:e}),columnTwo:"undefined"!=typeof window?(0,l.jsx)(b.A,{language:"jsx",children:n}):(0,l.jsx)("pre",{children:n})})})},N=()=>{const e={columnOne:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("p",{className:"firstP",children:[(0,l.jsx)("img",{src:(0,h.Ay)("img/talawa-logo-svg.svg"),alt:"Talawa logo"}),(0,l.jsx)("span",{children:"Talawa was created by The Palisadoes Foundation in 2019 as part of its social outreach programs in Jamaica. Our work was sponsored by local companies wanting to create a globally competitive workforce on the island by sponsoring philanthropic software development internships for university students."})]}),(0,l.jsx)("p",{children:"In 2021, Palisadoes was accepted into the prestigious Google Summer of Code (GSoC) which expanded the development team to volunteers around the world. That same year we participated in the GitHub India, GitHub Externship program for both the winter and summer cohorts."})]}),columnTwo:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{children:"Palisadoes was also selected for GSoC in 2022 and 2023. In 2022 the Google Season of Docs (GsoD) selected Palisadoes as a participant. In 2023 our Talawa projects were included in the Outreachy open-source internship program."}),(0,l.jsx)("img",{alt:"talawa",src:"img/image-07.png",className:"seventh-panel-image"})]})};return(0,l.jsx)(c,{className:"seventh-panel",background:"light",children:(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)(g,{text:"Globally Recognized, International Participation"}),(0,l.jsx)(d,{...e})]})})};const P=function(){return(0,l.jsx)(c,{className:"EightPanel",background:"tint",children:(0,l.jsx)(d,{reverse:!0,columnOne:(0,l.jsx)(f,{title:"Join Our Developer Community",text:w.eightPanel}),columnTwo:(0,l.jsx)("div",{className:"dissection",children:(0,l.jsx)("img",{alt:"people using devices",src:"img/image-08.png",className:"eigth-panel-image"})})})})},k=()=>{r();const e="Talawa-Docs: Powered by The Palisadoes";return(0,l.jsxs)(o.A,{description:"Powering Closer Communities",wrapperClassName:"homepage",children:[(0,l.jsxs)(s.A,{children:[(0,l.jsx)("title",{children:e}),(0,l.jsx)("meta",{property:"og:title",content:e}),(0,l.jsx)("meta",{property:"twitter:title",content:e})]}),(0,l.jsx)(p,{}),(0,l.jsx)(x,{}),(0,l.jsx)(v,{}),(0,l.jsx)(j,{}),(0,l.jsx)(y,{}),(0,l.jsx)(T,{}),(0,l.jsx)(N,{}),(0,l.jsx)(P,{})]})}}}]);