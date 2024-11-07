"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[232083],{232605:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var o=r(785893),n=r(511151);const l={},a="Create a pull request",s={id:"git-guide/pullrequest",title:"Create a pull request",description:"Once you feel you are ready to get feedback on your work, submit a pull request. Pull requests is a way to submit your work to a particular Project. The reason for calling it as a pull request is because you're asking the project to pull changes from your fork.",source:"@site/docs/git-guide/pullrequest.md",sourceDirName:"git-guide",slug:"/git-guide/pullrequest",permalink:"/docs/git-guide/pullrequest",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/git-guide/pullrequest.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Get Talawa code",permalink:"/docs/git-guide/get-talawa-code"},next:{title:"Collaborate",permalink:"/docs/git-guide/collaborate"}},u={},i=[{value:"Create a pull request",id:"create-a-pull-request-1",level:2},{value:"Step 1: Make sure you\u2019re on a feature branch (not <code>develop</code>)",id:"step-1-make-sure-youre-on-a-feature-branch-not-develop",level:3},{value:"Step 2: Open the pull request",id:"step-2-open-the-pull-request",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"create-a-pull-request",children:"Create a pull request"})}),"\n",(0,o.jsxs)(t.p,{children:["Once you feel you are ready to get feedback on your work, submit a pull request. Pull requests is a way to submit your work to a particular Project. The reason for calling it as a ",(0,o.jsx)(t.strong,{children:"pull request"})," is because you're asking the project to pull changes from your fork."]}),"\n",(0,o.jsxs)(t.p,{children:["If you\u2019re unfamiliar with how to create a pull request, you can check out GitHub\u2019s documentation ",(0,o.jsx)(t.a,{href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork",children:"on creating a pull request from a fork"}),". You might also find GitHub\u2019s article ",(0,o.jsx)(t.a,{href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests",children:"about pull requests"})," helpful. That all said, the tutorial below will walk you through the process."]}),"\n",(0,o.jsx)(t.h2,{id:"create-a-pull-request-1",children:"Create a pull request"}),"\n",(0,o.jsx)(t.admonition,{type:"important",children:(0,o.jsx)(t.p,{children:"We do not accept Draft pull request, Submit your work only when you are finished."})}),"\n",(0,o.jsxs)(t.h3,{id:"step-1-make-sure-youre-on-a-feature-branch-not-develop",children:["Step 1: Make sure you\u2019re on a feature branch (not ",(0,o.jsx)(t.code,{children:"develop"}),")"]}),"\n",(0,o.jsxs)(t.p,{children:["It is important to ",(0,o.jsx)(t.a,{href:"../../docs/git-guide/gitworkflow#work-on-a-feature-branch",children:"work on a feature branch"})," when creating a pull request. Your new pull request will be inextricably linked with your branch while it is open, so you will need to reserve your branch only for changes related to your issue, and avoid introducing extraneous changes for other issues or from upstream."]}),"\n",(0,o.jsxs)(t.p,{children:["If you are working on a branch named ",(0,o.jsx)(t.code,{children:"develop"}),", you need to create and switch to a feature branch before proceeding."]}),"\n",(0,o.jsx)(t.h3,{id:"step-2-open-the-pull-request",children:"Step 2: Open the pull request"}),"\n",(0,o.jsxs)(t.p,{children:["If you\u2019ve never created a pull request or need a refresher, take a look at GitHub\u2019s article on ",(0,o.jsx)(t.a,{href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork",children:"creating a pull request from a fork"}),". We\u2019ll briefly review the process here."]}),"\n",(0,o.jsx)(t.p,{children:"First, sign in to GitHub on your web browser and navigate to your fork of Talawa."}),"\n",(0,o.jsxs)(t.p,{children:["Next, navigate to the branch you\u2019ve been working on. Do this by clicking on the ",(0,o.jsx)(t.strong,{children:"Branch"})," button and selecting the relevant branch. Finally, click the ",(0,o.jsx)(t.strong,{children:"New pull request"})," button. Alternatively, if you\u2019ve recently pushed the relevant branch to your fork, you will see a ",(0,o.jsx)(t.strong,{children:"Compare & pull request"})," button."]}),"\n",(0,o.jsx)(t.p,{children:"A pull request template will open with some information pre-filled in. Provide (or update) the title for your pull request and write a first comment."}),"\n",(0,o.jsx)(t.p,{children:"If your pull request makes UI changes, always include one or more still screenshots to demonstrate your changes. If it seems helpful, add a screen capture of the new functionality as well. You can find a list of tools you can use for this here."}),"\n",(0,o.jsx)(t.p,{children:"When ready, click the Create pull request button to submit the pull request, After the pull request is submitted, an automated comment may pop up from the Talawa volunteers. Review that message and ensure you've followed their guidelines."}),"\n",(0,o.jsxs)(t.p,{children:["Note: Pull request titles are different from commit messages. Commit messages can be edited with ",(0,o.jsx)(t.code,{children:"git commit --amend"}),", ",(0,o.jsx)(t.code,{children:"git rebase -i"}),", etc., while the title of a pull request can only be edited via GitHub."]}),"\n",(0,o.jsx)(t.h1,{id:"update-a-pull-request",children:"Update a pull request"}),"\n",(0,o.jsx)(t.p,{children:"As you get make progress on your feature or bugfix, your pull request, once submitted, will be updated each time you push commits to your remote branch. This means you can keep your pull request open as long as you need, rather than closing and opening new ones for the same feature or bugfix."}),"\n",(0,o.jsxs)(t.p,{children:["It\u2019s a good idea to keep your pull request mergeable with Talawa upstream by frequently fetching and pushing changes. See ",(0,o.jsx)(t.a,{href:"/docs/git-guide/gitworkflow#keep-your-fork-up-to-date",children:"keep your fork"})," up to date for details."]}),"\n",(0,o.jsx)(t.p,{children:"And, as you address review comments others have made, we recommend posting a follow-up comment in which you:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"ask for any clarifications you need,"}),"\n",(0,o.jsx)(t.li,{children:"explain to the reviewer how you solved any problems they mentioned"}),"\n",(0,o.jsx)(t.li,{children:"ask for another review."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["We have a predefined ",(0,o.jsx)(t.a,{href:"https://github.com/PalisadoesFoundation/talawa-docs/blob/develop/.github/pull_request_template.md",children:"pull request template"})," which you can go through to understand what kind of details you need to provide for your pull request."]})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},511151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>a});var o=r(667294);const n={},l=o.createContext(n);function a(e){const t=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(l.Provider,{value:t},e.children)}}}]);