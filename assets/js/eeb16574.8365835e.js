"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[865635],{441507:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var t=i(785893),o=i(511151);const l={id:"implementing-plugins-example",title:"Plugin Examples"},s=void 0,a={id:"developers/talawa-admin/plugins/implementing-plugins-example",title:"Plugin Examples",description:"Pre-Requisites :",source:"@site/docs/developers/talawa-admin/plugins/implementing-plugins-example.md",sourceDirName:"developers/talawa-admin/plugins",slug:"/developers/talawa-admin/plugins/implementing-plugins-example",permalink:"/docs/developers/talawa-admin/plugins/implementing-plugins-example",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/developers/talawa-admin/plugins/implementing-plugins-example.md",tags:[],version:"current",frontMatter:{id:"implementing-plugins-example",title:"Plugin Examples"},sidebar:"docs",previous:{title:"Plugin Implementation",permalink:"/docs/developers/talawa-admin/plugins/implementing-plugins"},next:{title:"Requirements Docs",permalink:"/docs/category/requirements-docs"}},r={},d=[{value:"1. Plugin Registration",id:"1-plugin-registration",level:2},{value:"2. Plugin Creation",id:"2-plugin-creation",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"Pre-Requisites :"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/developers/talawa-admin/plugins/plugin-architecture",children:"Plugin Architecture "})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/developers/talawa-admin/plugins/implementing-plugins",children:"Implementing Plugins"})}),"\n"]})]}),"\n",(0,t.jsx)(n.p,{children:"Previously we've seen an technical overview of how we can implement plugins for our features."}),"\n",(0,t.jsx)(n.p,{children:"Now let's see how we can implement a Donation feature as plugin and seeing it in actions. But before that let's take a look at the donation code."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"            CustomListTile(\n                key: homeModel!.keySPDonateUs,\n                index: 2,\n                type: TileType.option,\n                option: Options(\n                    icon: Icon(\n                    Icons.monetization_on,\n                    color: Theme.of(context)\n                    .colorScheme\n                    .primary,\n                    size: 30,\n                ),\n                title: AppLocalizations.of(context)!\n                .strictTranslate('Donate  Us'),\n                subtitle: AppLocalizations.of(context)!\n                    .strictTranslate(\n                    'Help us to develop for you',\n                    ),\n                ),\n                onTapOption: () => donate(context, model),\n                )\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To see the entire file go ",(0,t.jsx)(n.a,{href:"https://github.com/Palisadoesfoundation/talawa/blob/2a14faa4363ca26426fb2f9a8b39082c08e6597b/lib/views/after_auth_screens/profile/profile_page.dart",children:"here"})]}),"\n",(0,t.jsx)(n.p,{children:'It is a simple list option that says " Donate Us " and upon clicking that you get dialog with text "Help us to develop for you" for doing the payment.'}),"\n",(0,t.jsx)(n.p,{children:"Now let's follow the steps."}),"\n",(0,t.jsx)(n.h2,{id:"1-plugin-registration",children:"1. Plugin Registration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to the ",(0,t.jsx)(n.code,{children:"Plugin Store"})," and click on the ",(0,t.jsx)(n.code,{children:"Add New"})," button."]}),"\n",(0,t.jsxs)(n.li,{children:["Give the name as ",(0,t.jsxs)("strong",{children:[" ",(0,t.jsx)(n.code,{children:"Donation"})," "]})]}),"\n",(0,t.jsxs)(n.li,{children:["You add your information for ",(0,t.jsx)(n.code,{children:"Creator Name"})," and ",(0,t.jsx)(n.code,{children:"Description"})," fields."]}),"\n",(0,t.jsx)(n.li,{children:"Your plugin should be at visible the store."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["let's wrap our widget with the ",(0,t.jsx)(n.code,{children:"TalawaPluginProvider"})," widget as it comes in the type ",(0,t.jsx)(n.code,{children:"B"})," of plugin"]}),"\n",(0,t.jsx)(n.h2,{id:"2-plugin-creation",children:"2. Plugin Creation"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Wrap the donation code with the ",(0,t.jsx)(n.code,{children:"TalawaPluginProvider"})," widget as a ",(0,t.jsx)(n.code,{children:"child"})," property."]}),"\n",(0,t.jsxs)(n.li,{children:["Add ",(0,t.jsxs)("strong",{children:[" ",(0,t.jsx)(n.code,{children:"Donation"})," "]})," to ",(0,t.jsx)(n.code,{children:"pluginName"})," property."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This is how the code will look like"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"    TalawaPluginProvider(\n         pluginName: \"Donation\",\n         visible: true,\n         child: Column(\n            children: [\n            CustomListTile(\n                key: homeModel!.keySPDonateUs,\n                index: 2,\n                type: TileType.option,\n                option: Options(\n                icon: Icon(\n                Icons.monetization_on,\n                color: Theme.of(context)\n                .colorScheme\n                .primary,\n                size: 30,\n            ),\n         title: AppLocalizations.of(context)!\n         .strictTranslate('Donate  Us'),\n         subtitle: AppLocalizations.of(context)!\n         .strictTranslate(\n         'Help us to develop for you',\n                        ),\n                    ),\n         onTapOption: () => donate(context, model),\n               ),\n            ],\n         ),\n    )\n\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:["Congrats! you've successfully converted your feature to a plugin. Now you can  install/uninstall  ",(0,t.jsx)(n.code,{children:"Donation"}),"  plugin from the  ",(0,t.jsx)(n.code,{children:"Plugin Store"}),"  of the  ",(0,t.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-admin",children:"Talawa Admin"})," to see the plugin UI becoming visible if it's installed for that organization otherwise hidden."]}),"\n",(0,t.jsxs)(n.p,{children:["For development purposes to see the plugin even if it's uninstalled you can set the ",(0,t.jsx)(n.code,{children:"serverVisible"})," property to ",(0,t.jsx)(n.code,{children:"true"})]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},511151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>s});var t=i(667294);const o={},l=t.createContext(o);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);