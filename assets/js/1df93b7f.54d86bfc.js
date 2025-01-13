"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[4583],{1260:(e,a,n)=>{n.r(a),n.d(a,{default:()=>P});var s=n(6540),i=n(7143),t=n(1410);function r(){const e=document.querySelector(".NativeDevelopment"),a=e.querySelector(".dissection").children,n=a.length,s=(e,a,n)=>Math.min(n,Math.max(a,e)),i=()=>{const i=e.getBoundingClientRect().top-60,t=window.innerHeight,r=1-s(i/t,0,1),o=s((r-(l=.2))/(.9-l),0,1);var l;for(let e=0;e<n;e++){const i=s((o-e/n)*n,0,1);a[e].style.opacity=i;const t=40*(1-i);a[e].style.transform=`translateX(${t}px)`}};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)}const o=()=>{(0,s.useEffect)((()=>{!function(){const e=["full","mobile","desktop","laptop","mobile2","full2"],a=[1250,1500,1500,1500,1500,1250];let n=0;const s=[],i=document.querySelector(".LogoAnimation");function t(){const r=e[n];i.classList.remove(r),n=(n+1)%e.length;const o=e[n],l=a[n];i.classList.add(o),s.push(setTimeout(t,l))}function r(){i.classList.remove("init"),t()}function o(){document.hidden?(s.forEach((function(e){clearTimeout(e)})),s.length=0):r()}document.hidden||s.push(setTimeout(r,2e3)),document.addEventListener("visibilitychange",o,!1)}(),r()}),[])};var l=n(4848);const c=function(e){let{element:a="section",children:n,className:s,background:i="light"}=e;const t=a;return(0,l.jsx)(t,{className:s?`Section ${s} ${i}`:`Section ${i}`,children:n})},d=e=>{let{columnOne:a,columnTwo:n,reverse:s=!1}=e;const i="column first "+(s?"right":"left"),t="column last "+(s?"left":"right"),r="TwoColumns "+(s?"reverse":"");return(0,l.jsxs)("div",{className:r,children:[(0,l.jsx)("div",{className:i,children:a}),(0,l.jsx)("div",{className:t,children:n})]})};const m=function(e){let{href:a,type:n="primary",target:s,children:i,buttonClassName:t}=e;return(0,l.jsx)("a",{className:`ActionButton ${n} ${t}`,rel:"noopener",href:a,target:s,children:i})},h=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m,{type:"primary",href:"/docs",buttonClassName:"custom-button",children:"Learn More"}),(0,l.jsx)(m,{type:"secondary",href:"https://github.com/PalisadoesFoundation",buttonClassName:"custom-button",children:"GitHub"})]});var u=n(9030);const p=function(){return(0,l.jsxs)(c,{background:"light",className:"HeaderHero",children:[(0,l.jsx)("div",{className:"socialLinks"}),(0,l.jsx)(d,{reverse:!0,columnOne:(0,l.jsx)("img",{className:"custom-image bounce-animation",src:(0,u.Ay)("img/image-01.png"),alt:"HeaderHero Image"}),columnTwo:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{className:"title",children:"Talawa"}),(0,l.jsx)("h2",{className:"tagline",children:"Member Management Software"}),(0,l.jsx)("p",{className:"description",children:"For open source projects, charities and other non-profits"}),(0,l.jsx)("div",{className:"buttons",children:(0,l.jsx)(h,{})})]})})]})},g=()=>(0,l.jsxs)("div",{className:"card__container",children:[(0,l.jsx)("h2",{className:"Heading",children:"Easy Community Organization Management"}),(0,l.jsxs)("div",{className:"organization-feature-cards",children:[(0,l.jsxs)("div",{className:"organization-feature-card card__general",children:[(0,l.jsx)("div",{className:"organization-feature-card__header",children:(0,l.jsx)("h3",{children:"Open-Source Software for Organizations"})}),(0,l.jsx)("div",{className:"organization-feature-card__body",children:(0,l.jsx)("p",{className:"card__description",children:"Talawa provides customizable, open-source tools to help manage your organization efficiently."})}),(0,l.jsx)("div",{className:"organization-feature-card__footer",children:(0,l.jsx)("a",{href:"https://github.com/PalisadoesFoundation",children:(0,l.jsx)("button",{className:"organization-feature-card__button",children:"Learn More"})})})]}),(0,l.jsxs)("div",{className:"organization-feature-card card__general",children:[(0,l.jsx)("div",{className:"organization-feature-card__header",children:(0,l.jsx)("h3",{children:"Connect Your Community with Our Mobile App"})}),(0,l.jsx)("div",{className:"organization-feature-card__body",children:(0,l.jsx)("p",{className:"card__description",children:"Facilitate community interaction with social media-like features available on our app."})}),(0,l.jsx)("div",{className:"organization-feature-card__footer",children:(0,l.jsx)("a",{href:"https://docs-mobile.talawa.io/docs-talawa-apk/",rel:"noopener noreferrer",children:(0,l.jsx)("button",{className:"organization-feature-card__button",children:"Get the App"})})})]}),(0,l.jsxs)("div",{className:"organization-feature-card card__general",children:[(0,l.jsx)("div",{className:"organization-feature-card__header",children:(0,l.jsx)("h3",{children:"Simplify Management with Our Admin Portal"})}),(0,l.jsx)("div",{className:"organization-feature-card__body",children:(0,l.jsx)("p",{className:"card__description",children:"Effortlessly manage members, events, and volunteers with our intuitive web portal."})}),(0,l.jsx)("div",{className:"organization-feature-card__footer",children:(0,l.jsx)("a",{href:"https://docs-admin.talawa.io/",rel:"noopener noreferrer",children:(0,l.jsx)("button",{className:"organization-feature-card__button",children:"Get Started"})})})]})]})]}),x=()=>(0,l.jsx)(c,{className:"SecondPanel",children:(0,l.jsx)(g,{})}),w=()=>(0,l.jsxs)("div",{className:"card__container card__wide",children:[(0,l.jsx)("h2",{className:"Heading",children:"More Effective Management"}),(0,l.jsxs)("div",{className:"management__cards",children:[(0,l.jsxs)("div",{className:"management__card card__general",children:[(0,l.jsx)("div",{className:"management__image",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",className:"my-svg-icon",children:(0,l.jsx)("path",{d:"M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z"})})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"management__header",children:"Easily schedule events"}),(0,l.jsx)("p",{className:"card__description",children:"Easily schedule events and track attendance. Reports show who\u2019s coming, and how often"})]})]}),(0,l.jsxs)("div",{className:"management__card card__general",children:[(0,l.jsx)("div",{className:"management__image",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"my-svg-icon",children:(0,l.jsx)("path",{d:"M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"})})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"management__header",children:"Stay in contact"}),(0,l.jsx)("p",{className:"card__description",children:"Stay in contact with your membership with individual or group emails, now and in the future"})]})]}),(0,l.jsxs)("div",{className:"management__card card__general",children:[(0,l.jsx)("div",{className:"management__image",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"my-svg-icon",children:(0,l.jsx)("path",{d:"M448 160l-128 0 0-32 128 0 0 32zM48 64C21.5 64 0 85.5 0 112l0 64c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48L48 64zM448 352l0 32-256 0 0-32 256 0zM48 288c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48L48 288z"})})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"management__header",children:"Track tasks"}),(0,l.jsx)("p",{className:"card__description",children:"Track your volunteer time and their activity tasks. Make your planning a success"})]})]}),(0,l.jsxs)("div",{className:"management__card card__general",children:[(0,l.jsx)("div",{className:"management__image",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",className:"my-svg-icon",children:(0,l.jsx)("path",{d:"M128 32C92.7 32 64 60.7 64 96l0 256 64 0 0-256 384 0 0 256 64 0 0-256c0-35.3-28.7-64-64-64L128 32zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480l486.4 0c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2L19.2 384z"})})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"management__header",children:"Intuitive design"}),(0,l.jsx)("p",{className:"card__description",children:"Our intuitive design helps streamline work processes and increases adoption so everyone can benefit"})]})]})]})]}),v=()=>(0,l.jsx)(c,{className:"third-panel",background:"light",children:(0,l.jsx)(w,{})}),f=e=>{let{text:a}=e;return(0,l.jsx)("h2",{className:"Heading",children:a})};const j=function(e){let{title:a,text:n,moreContent:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(f,{text:a}),(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:n}}),s]})},_={intro:"\n    <ul>\n  <li>Talawa is an open-source software project to help manage organizations like yours </li>\n  <li>Your community becomes closer using our mobile app with social media features </li>\n  <li>The Admin Web Portal makes member, event and volunteer management simpler.</li>\n  </ul>\n    ",nativeCode:"\n    <ul>\n  <li>Easily schedule events and track attendance. Reports show who\u2019s coming, and how often </li>\n  <li>Stay in contact with your membership with individual or group emails, now and in the future </li>\n  <li>Track your volunteer time and their activity tasks. Make your planning a success </li>\n  <li>Our intuitive design helps streamline work processes and increases adoption so everyone can benefit </li>\n  </ul>\n    ",codeExample:"\n  import React from 'react';\n  import {Header} from './Header';\n  \n  const WelcomeScreen = () => (\n    <View>\n      <Header title=\"Welcome to Talawa\"/>\n      <Text style={heading}>Step One</Text>\n      <Text>\n      Talawa is powerful, yet intuitive community management software made for open\n      source projects, clubs, charities and other non-profits\n      </Text>\n      <Text>\n      Designed to help you save time, reduce frustration, and accomplish your goals.\n      </Text>\n      <Text>\n      Giving, event management, social media features, plus more.\n      </Text>\n      <Text>\n        Read the docs to discover what to do next:\n      </Text>\n  \n     </View>\n  );\n    ",forEveryone:"\n    <ul>\n    <li>Simple to use member dashboards</li>\n    <li>Member notifications</li>\n    <li>Event and volunteer calendars</li>\n    <li>Donation management </li>\n    <li>Advertising from local companies </li>\n    <li>Multi-organization support </li>\n    <li>Plugin support for cloud service providers</li>\n    </ul>\n   ",crossPlatform:"\n    <ul>\n  <li>View the social media news feed </li>\n  <li>Share posts, images and videos </li>\n  <li>Create events for your groups </li>\n  <li>Group chat with other members </li>\n  <li>Receive the latest community news </li>\n  <li>Get reminders and notifications </li>\n  <li>Make your community stronger </li>\n  </ul>\n    ",sixthPanel:"Talawa is an open-source project. Our active community of volunteers is constantly adding features to make administration easier.</br></br>Their varied perspectives has created a product that is easily adaptable to the cultures and languages of their countries. Contributions from 19 different timezones.\n    ",seventhPanel:"Talawa was created by The Palisadoes Foundation in 2019 as part of its social outreach programs in Jamaica. Our work was sponsored by local companies wanting to create a globally competitive workforce on the island by sponsoring philanthropic software development internships for university students.<br/><br/>\n    In 2021, Palisadoes was accepted into the prestigious Google Summer of Code (GSoC) which expanded  the development team to volunteers around the world. That same year we participated in the GitHub India, GitHub Externship program for both the winter and summer cohorts.<br/><br/>\n    Palisadoes was also selected for GSoC in 2022 and 2023. In 2022 the Google Season of Docs (GsoD) selected Palisadoes as a participant. In 2023 our Talawa projects were included in the Outreachy open-source internship program.\n    ",eightPanel:'<p>Our developer community members are talented, passionate, and amazing. They are always suggesting, coding and documenting new ideas for our software.</p>\n    <p>They span across the globe. Explore this space to learn something new from the community.</p>\n    <br/>\n    <ul>\n      <li><a href="/docs/">Explore this site</a></li>\n      <li><a href="https://github.com/PalisadoesFoundation" target="_self">Visit our GitHub pages</a></li>\n      <li><a href="https://github.com/PalisadoesFoundation/talawa#readme" target="_self">Join our Slack channel</a></li>\n    </ul>\n    <br/>\n    <strong>Jump in and get started!</strong>\n    \n    ',fastRefresh:"\n  Talawa was created by The Palisadoes Foundation in 2019 as part of its social outreach programs in Jamaica. Our work was sponsored by local companies wanting to create a globally competitive workforce on the island by sponsoring philanthropic software development internships for university students.<br/><br/>In 2021, Palisadoes was accepted into the prestigious Google Summer of Code (GSoC) which expanded  the development team to volunteers around the world. That same year we participated in the GitHub India, GitHub Externship program for both the winter and summer cohorts. <br/><br/>4.\tPalisadoes was also selected for GSoC in 2022 and 2023. In 2022 the Google Season of Docs (GsoD) selected Palisadoes as a participant. In 2023 our Talawa projects were included in the Outreachy open source internship program.\n  \n    ",talks:"\n    Get to know our Talawa community by visiting our YouTube channel. There you will find interviews, technical talks, feature reviews with volunteers and much more\n  <br/><br/>\n  You can follow the latest news from the Palisadoes team on Twitter.\n    "};const y=function(e){let{className:a}=e;return(0,l.jsx)(c,{className:`NativeDevelopment ${a} fourth-panel`,children:(0,l.jsx)("div",{className:"card__general card__wide",children:(0,l.jsx)(d,{reverse:!0,columnOne:(0,l.jsx)(j,{title:"Many Useful Admin Features",text:_.forEveryone}),columnTwo:(0,l.jsx)("div",{className:"dissection",children:(0,l.jsx)("img",{alt:"talawa",src:"img/image-04.png",className:"fourth-panel-image"})})})})})},b=()=>(0,l.jsx)("div",{className:"card__container card__wide",children:(0,l.jsxs)("div",{className:"app-feature-card",children:[(0,l.jsxs)("div",{className:"app-feature-card__body card__general",children:[(0,l.jsx)("h2",{className:"Heading",children:"Powerful, Fun Mobile Application"}),(0,l.jsx)("p",{className:"card__description",children:"Easily stay connected with your community! View social media feeds, share posts, create group events, chat with members, and receive important updates. Strengthen your community with reminders and notifications\u2014all in one app."})]}),(0,l.jsx)("div",{className:"app-feature-card__image",children:(0,l.jsx)("img",{alt:"talawa",src:"img/panel-5-img.png"})})]})});const N=function(){return(0,l.jsx)(c,{className:"fifth-panel",children:(0,l.jsx)(b,{})})};var T=n(8069);const k=()=>{const{sixthPanel:e,codeExample:a}=_;return(0,l.jsx)(c,{className:"SixthPanel",children:(0,l.jsx)(d,{columnOne:(0,l.jsx)(j,{title:"Free Software: Created by a global volunteer team",text:e}),columnTwo:"undefined"!=typeof window?(0,l.jsx)(T.A,{language:"jsx",children:a}):(0,l.jsx)("pre",{children:a})})})},z=()=>(0,l.jsxs)("div",{className:"card__container card__wide",children:[(0,l.jsx)("h2",{className:"Heading",children:"Globally Recognized, International Participation"}),(0,l.jsxs)("div",{className:"card__general participation-feature-card",children:[(0,l.jsxs)("div",{className:"participation-feature-card__body",children:[(0,l.jsx)("img",{src:(0,u.Ay)("img/talawa-logo-svg.svg"),alt:"Talawa logo"}),(0,l.jsx)("p",{className:"card__description",children:"Palisadoes was also selected for GSoC in 2022 and 2023. In 2022 the Google Season of Docs (GsoD) selected Palisadoes as a participant. In 2023 our Talawa projects were included in the Outreachy open-source internship program."}),(0,l.jsx)("p",{className:"card__description",children:(0,l.jsx)("span",{className:"card__description",children:"Talawa was created by The Palisadoes Foundation in 2019 as part of its social outreach programs in Jamaica. Our work was sponsored by local companies wanting to create a globally competitive workforce on the island by sponsoring philanthropic software development internships for university students."})}),(0,l.jsx)("p",{className:"card__description",children:"In 2021, Palisadoes was accepted into the prestigious Google Summer of Code (GSoC) which expanded the development team to volunteers around the world. That same year we participated in the GitHub India, GitHub Externship program for both the winter and summer cohorts."})]}),(0,l.jsx)("div",{className:"participation-feature-card__image",children:(0,l.jsx)("img",{alt:"talawa",src:"img/image-07.png"})})]})]}),S=()=>(0,l.jsx)(c,{className:"seventh-panel",background:"light",children:(0,l.jsx)(z,{})});const C=function(){return(0,l.jsx)(c,{className:"EightPanel",children:(0,l.jsx)("div",{className:"card__general card__wide",children:(0,l.jsx)(d,{reverse:!0,columnOne:(0,l.jsx)(j,{title:"Join Our Developer Community",text:_.eightPanel}),columnTwo:(0,l.jsx)("div",{className:"dissection",children:(0,l.jsx)("img",{alt:"people using devices",src:"img/image-08.png",className:"eigth-panel-image"})})})})})},P=()=>{o();const e="Talawa-Docs: Powered by The Palisadoes";return(0,l.jsxs)(t.A,{description:"Powering Closer Communities",wrapperClassName:"homepage",children:[(0,l.jsxs)(i.A,{children:[(0,l.jsx)("title",{children:e}),(0,l.jsx)("meta",{property:"og:title",content:e}),(0,l.jsx)("meta",{property:"twitter:title",content:e})]}),(0,l.jsx)(p,{}),(0,l.jsx)(x,{}),(0,l.jsx)(v,{}),(0,l.jsx)(y,{}),(0,l.jsx)(N,{}),(0,l.jsx)(k,{}),(0,l.jsx)(S,{}),(0,l.jsx)(C,{})]})}}}]);