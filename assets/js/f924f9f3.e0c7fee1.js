"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[67384],{23190:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=t(785893),a=t(511151);const s={id:"talawa-lint",title:"Talawa Lint Ecosystem"},l=void 0,r={id:"developers/talawa/talawa-lint",title:"Talawa Lint Ecosystem",description:"Talawa Lint",source:"@site/docs/developers/talawa/talawa-lint.md",sourceDirName:"developers/talawa",slug:"/developers/talawa/talawa-lint",permalink:"/docs/developers/talawa/talawa-lint",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/developers/talawa/talawa-lint.md",tags:[],version:"current",frontMatter:{id:"talawa-lint",title:"Talawa Lint Ecosystem"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/developers/talawa/talawa-introduction"},next:{title:"Flutter Testing Guide",permalink:"/docs/developers/talawa/flutter-testing"}},o={},d=[{value:"Talawa Lint",id:"talawa-lint",level:2},{value:"Proper Installation",id:"proper-installation",level:3},{value:"Usage",id:"usage",level:3},{value:"In IDE",id:"in-ide",level:4},{value:"Command line",id:"command-line",level:4},{value:"Logs",id:"logs",level:4},{value:"Talawa Lint Rules",id:"talawa-lint-rules",level:2},{value:"talawa_api_doc",id:"talawa_api_doc",level:3},{value:"talawa_good_doc_comments",id:"talawa_good_doc_comments",level:3},{value:"For non function/method/getter/setter (classes, enums, variables etc)",id:"for-non-functionmethodgettersetter-classes-enums-variables-etc",level:4},{value:"Single line",id:"single-line",level:5},{value:"Multi line",id:"multi-line",level:5},{value:"For functions and methods",id:"for-functions-and-methods",level:4},{value:"No parameter and void return",id:"no-parameter-and-void-return",level:5},{value:"Has parameter(s) and void return",id:"has-parameters-and-void-return",level:5},{value:"No parameter and non-void return",id:"no-parameter-and-non-void-return",level:5},{value:"Has parameter(s) and non-void return",id:"has-parameters-and-non-void-return",level:5}];function c(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"talawa-lint",children:"Talawa Lint"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"talawa_lint"})," is Talawa's custom lint rule set that we enforced to ensure\nproper documentation for our codebase. It is a mini package that lives as a\nsub-directory in ",(0,i.jsx)(n.code,{children:"talawa"})," package."]}),"\n",(0,i.jsx)(n.h3,{id:"proper-installation",children:"Proper Installation"}),"\n",(0,i.jsxs)(n.p,{children:["Since ",(0,i.jsx)(n.code,{children:"talawa_lint"})," is a package in itself, it has its own dependencies which\nshould be installed. To do so, go to ",(0,i.jsx)(n.code,{children:"talawa"})," directory, then:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd talawa_lint\nflutter pub get\ncd ..\nflutter pub get\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This will install all the required dependencies properly.\nSometimes (highly unlikely), you may get ",(0,i.jsx)(n.code,{children:"Conflicting plugin version"})," error. In that\ncase you will need to clean your dev environment of ",(0,i.jsx)(n.code,{children:"talawa"})," and reinstall packages.\nTo do so, go to ",(0,i.jsx)(n.code,{children:"talawa"})," directory, then:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"flutter clean\ncd talawa_lint\nflutter clean\nflutter pub get\ncd ..\nflutter pub get\n"})}),"\n",(0,i.jsx)(n.p,{children:"This should resolve the conflicting issues."}),"\n",(0,i.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.p,{children:"If the installation was successful, you will be able to get lint warnings/errors right\nin your IDE, as well as analyze your files from command line."}),"\n",(0,i.jsx)(n.h4,{id:"in-ide",children:"In IDE"}),"\n",(0,i.jsx)(n.p,{children:"With proper installation, you will get lint warnings if either your fields don't have any\ndocumentation, or the documentation is not in the right format. Something like this"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Lint warning example",src:t(265689).Z+"",width:"1038",height:"276"})}),"\n",(0,i.jsx)(n.h4,{id:"command-line",children:"Command line"}),"\n",(0,i.jsxs)(n.p,{children:["Run ",(0,i.jsx)(n.code,{children:"flutter pub run custom_lint"})," in ",(0,i.jsx)(n.code,{children:"talawa"})," root directory to analyze all of the files\nfor custom lint rules."]}),"\n",(0,i.jsx)(n.h4,{id:"logs",children:"Logs"}),"\n",(0,i.jsxs)(n.p,{children:["Logs are generated for our custom lint analysis in the file named ",(0,i.jsx)(n.code,{children:"custom_lint.log"}),". This file\nexists under both ",(0,i.jsx)(n.code,{children:"talawa"})," and ",(0,i.jsx)(n.code,{children:"talawa_lint"})," directories. You can find any error related to\n",(0,i.jsx)(n.code,{children:"talawa_lint"})," integration in these logs. This comes handy while troubleshooting."]}),"\n",(0,i.jsx)(n.h2,{id:"talawa-lint-rules",children:"Talawa Lint Rules"}),"\n",(0,i.jsxs)(n.p,{children:["For now, we enforce two custom lint rules to our codebase, which should be strictly followed\nby each file and their fields (classes, methods, attributes, getters, setters, top level variables,\nfunctions, enums.......).",(0,i.jsx)("br",{}),"\nThe rules being."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"talawa_api_doc"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"talawa_good_doc_comments"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"talawa_api_doc",children:"talawa_api_doc"}),"\n",(0,i.jsx)(n.p,{children:"This lint rule checks for presence of documentation comment for any field. You will get a warning\nas shown here"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"No Lint warning example",src:t(838268).Z+"",width:"675",height:"208"})}),"\n",(0,i.jsxs)(n.p,{children:["Note that a documentation comment is different from a normal comment as in normal comment starts\nwith ",(0,i.jsx)(n.code,{children:"//"})," whereas doc comment starts with ",(0,i.jsx)(n.code,{children:"///"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"talawa_good_doc_comments",children:"talawa_good_doc_comments"}),"\n",(0,i.jsx)(n.p,{children:"This is where the fun lies. This lint rule checks if the documentation provided for a field is in\nthe format that we expect. The format being:"}),"\n",(0,i.jsx)(n.h4,{id:"for-non-functionmethodgettersetter-classes-enums-variables-etc",children:"For non function/method/getter/setter (classes, enums, variables etc)"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["First line of documentation must be a complete line ending with end punctuation (",(0,i.jsx)(n.code,{children:"."}),", ",(0,i.jsx)(n.code,{children:"!"}),", ",(0,i.jsx)(n.code,{children:"?"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"If you think that there should be more to the documentation, leave the second line empty and write\nfurther documentation in paragraph fashion from the next line."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Examples of valid documentation include:"}),"\n",(0,i.jsx)(n.h5,{id:"single-line",children:"Single line"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"/// This is my class and it does stuff.\nclass MyClass {}\n"})}),"\n",(0,i.jsx)(n.h5,{id:"multi-line",children:"Multi line"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"/// This is my class and it does stuff.\n///\n/// The stuff includes playing pong with\n/// my chip-8 emulator.\nclass MyClass {}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"for-functions-and-methods",children:"For functions and methods"}),"\n",(0,i.jsxs)(n.p,{children:["Same rules as for non functions/methods as described above, in conjunction with two other\nsections for ",(0,i.jsx)(n.code,{children:"**params**:"})," and ",(0,i.jsx)(n.code,{children:"**returns**:"})]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Follow same rules as described in the above section."}),"\n",(0,i.jsxs)(n.li,{children:["Add ",(0,i.jsx)(n.code,{children:"/// **params**:"})," block. This marks the beginning of ",(0,i.jsx)(n.code,{children:"params"})," section where you describe all the parameters\nthat this function takes from the next line. The format being","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/// * `param_name`:"})," followed by its description starting in the same line."]}),"\n",(0,i.jsx)(n.li,{children:"The description can be multi line and requires no extra formatting."}),"\n",(0,i.jsxs)(n.li,{children:["If the function takes no parameters, ",(0,i.jsx)(n.code,{children:"/// **params**:"})," should be followed by ",(0,i.jsx)(n.code,{children:"///   None"})," in the next line."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["After documenting all of the parameters, add ",(0,i.jsx)(n.code,{children:"/// **returns**:"})," block. Note that there must be a blank line ",(0,i.jsx)(n.code,{children:"///"})," between\nthe ",(0,i.jsx)(n.code,{children:"**params**"})," and ",(0,i.jsx)(n.code,{children:"**returns**"})," blocks."]}),"\n",(0,i.jsxs)(n.li,{children:["Followed by returns:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Add ",(0,i.jsx)(n.code,{children:"/// * `return_type`:"})," followed by its description starting in the same line."]}),"\n",(0,i.jsx)(n.li,{children:"The description can be multi line and requires no extra formatting."}),"\n",(0,i.jsxs)(n.li,{children:["If the function returns void, ",(0,i.jsx)(n.code,{children:"/// **returns**:"})," should be followed by ",(0,i.jsx)(n.code,{children:"/// None"})," in the next line.\nNote that ",(0,i.jsx)(n.code,{children:"Future<void>"})," is different from void. ",(0,i.jsx)(n.code,{children:"///   None"})," is strictly used only for ",(0,i.jsx)(n.code,{children:"void"})," type."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Examples of valid documentation include:"}),"\n",(0,i.jsx)(n.h5,{id:"no-parameter-and-void-return",children:"No parameter and void return"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"/// My fun.\n///\n/// Other description.\n///\n/// **params**:\n///   None\n///\n/// **returns**:\n///   None\nvoid fun () {}\n"})}),"\n",(0,i.jsx)(n.h5,{id:"has-parameters-and-void-return",children:"Has parameter(s) and void return"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"/// My fun.\n///\n/// Other description.\n///\n/// **params**:\n/// * `name`: description\n/// * `age`: description\n///\n/// **returns**:\n///   None\nvoid fun (String? name, int age) {}\n"})}),"\n",(0,i.jsx)(n.h5,{id:"no-parameter-and-non-void-return",children:"No parameter and non-void return"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"/// My fun.\n///\n/// Other description.\n///\n/// **params**:\n///   None\n///\n/// **returns**:\n/// * `int`: Answer of life.\nint fun () {\n    return 42;\n}\n"})}),"\n",(0,i.jsx)(n.h5,{id:"has-parameters-and-non-void-return",children:"Has parameter(s) and non-void return"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"/// My fun.\n///\n/// Other description.\n///\n/// **params**:\n/// * `name`: description\n/// * `age`: description\n///\n/// **returns**:\n/// * `int`: Answer of life.\nint fun (String? name, int age) {\n    return 42;\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"params:"})," block expects the ",(0,i.jsx)(n.strong,{children:"name"})," of the parameter and ",(0,i.jsx)(n.strong,{children:"not its type"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"returns:"})," block expects the ",(0,i.jsx)(n.strong,{children:"type"})," of the parameter and ",(0,i.jsx)(n.strong,{children:"not its name"}),"."]}),"\n"]})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},265689:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/lint_warning_ex-05ac61e7a3b0086ecf3cbbf18dd1538e.png"},838268:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/no_lint_ex-292c46f76e4689999713772998e83702.png"},511151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>l});var i=t(667294);const a={},s=i.createContext(a);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);