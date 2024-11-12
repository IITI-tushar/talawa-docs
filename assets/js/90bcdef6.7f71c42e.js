"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[413708],{171986:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});const o=JSON.parse('{"id":"talawa-mobile-docs/views_after_auth_screens_profile_profile_page/ProfilePage/donate","title":"donate method","description":"void donate","source":"@site/docs/talawa-mobile-docs/views_after_auth_screens_profile_profile_page/ProfilePage/donate.md","sourceDirName":"talawa-mobile-docs/views_after_auth_screens_profile_profile_page/ProfilePage","slug":"/talawa-mobile-docs/views_after_auth_screens_profile_profile_page/ProfilePage/donate","permalink":"/docs/talawa-mobile-docs/views_after_auth_screens_profile_profile_page/ProfilePage/donate","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/views_after_auth_screens_profile_profile_page/ProfilePage/donate.md","tags":[],"version":"current","frontMatter":{},"sidebar":"Talawa","previous":{"title":"build method","permalink":"/docs/talawa-mobile-docs/views_after_auth_screens_profile_profile_page/ProfilePage/build"},"next":{"title":"homeModel property","permalink":"/docs/talawa-mobile-docs/views_after_auth_screens_profile_profile_page/ProfilePage/homeModel"}}');var i=t(474848),a=t(28453);const r={},l="donate method",d={},s=[{value:"Implementation",id:"implementation",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"donate-method",children:"donate method"})}),"\n",(0,i.jsxs)(n.p,{children:["void donate\n(",(0,i.jsx)(n.a,{href:"https:api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," context, ",(0,i.jsx)(n.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel-class",children:"ProfilePageViewModel"})," model)"]}),"\n",(0,i.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"void donate(BuildContext context, ProfilePageViewModel model) \\{\n  showModalBottomSheet(\n    context: context,\n    isScrollControlled: true,\n    shape: const RoundedRectangleBorder(\n      borderRadius: BorderRadius.only(\n        topLeft: Radius.circular(30),\n        topRight: Radius.circular(30),\n      ),\n    ),\n    builder: (BuildContext context) \\{\n      return StatefulBuilder(\n        builder: (context, setState) \\{\n          model.attachListener(setState);\n          return ClipRRect(\n            borderRadius: const BorderRadius.only(\n              topLeft: Radius.circular(30),\n              topRight: Radius.circular(30),\n            ),\n            child: SizedBox(\n              height: model.bottomSheetHeight,\n              child: Scaffold(\n                background color set to Primary\n                backgroundColor:\n                    Theme.of(context).colorScheme.primaryContainer,\n                header\n                appBar: AppBar(\n                  centerTitle: true,\n                  automaticallyImplyLeading: false,\n                  backgroundColor: Colors.transparent,\n                  elevation: 0.0,\n                  toolbarHeight: SizeConfig.screenHeight! * 0.15,\n                  title: Padding(\n                    padding: const EdgeInsets.only(top: 8.0),\n                    display title\n                    child: Text(\n                      'Donating to \\n$\\{model.currentOrg.name\\}',\n                      style: Theme.of(context)\n                          .textTheme\n                          .headlineMedium!\n                          .copyWith(fontSize: 24),\n                      maxLines: 2,\n                      overflow: TextOverflow.ellipsis,\n                      textAlign: TextAlign.center,\n                    ),\n                  ),\n                  actions: [\n                    Padding(\n                      padding: EdgeInsets.only(\n                        right: 8.0,\n                        top: SizeConfig.screenHeight! * 0.01,\n                      ),\n                      child: IconButton(\n                        icon: Icon(\n                          Icons.cancel,\n                          color: Theme.of(context).colorScheme.primary,\n                        ),\n                        onPressed: model.popBottomSheet,\n                      ),\n                    )\n                  ],\n                ),\n                body: SingleChildScrollView(\n                  SingleChildScrollView is a box in which a single widget can be scrolled.\n                  child: Column(\n                    crossAxisAlignment: CrossAxisAlignment.center,\n                    mainAxisSize: MainAxisSize.min,\n                    children: [\n                      SizedBox(\n                        height: SizeConfig.screenWidth! * 0.05,\n                      ),\n                      Text(\n                        'Please Select and amount',\n                        style: Theme.of(context).textTheme.headlineSmall,\n                      ),\n                      SizedBox(\n                        height: SizeConfig.screenWidth! * 0.05,\n                      ),\n                      Container(\n                        child: Row(\n                          mainAxisAlignment: MainAxisAlignment.spaceEvenly,\n                          looping through and renders button for donation amounts.\n                          children: List.generate(\n                            3,\n                            (index) =\\> model.dominationButton(\n                              model.denomination[index],\n                              context,\n                              setState,\n                            ),\n                          ),\n                        ),\n                      ),\n                      SizedBox(\n                        height: SizeConfig.screenWidth! * 0.05,\n                      ),\n                      Text(\n                        'Or',\n                        style: Theme.of(context).textTheme.headlineSmall,\n                      ),\n                      Text(\n                        'Input custom amount',\n                        style: Theme.of(context).textTheme.headlineSmall,\n                      ),\n                      SizedBox(\n                        height: SizeConfig.screenWidth! * 0.05,\n                      ),\n                      containers for custom amount\n                      Container(\n                        padding: EdgeInsets.symmetric(\n                          horizontal: SizeConfig.screenWidth! * 0.05,\n                        ),\n                        child: TextField(\n                          controller: model.donationAmount,\n                          focusNode: model.donationField,\n                          textInputAction: TextInputAction.next,\n                          keyboardType: TextInputType.number,\n                          autofillHints: const \\<String\\>[AutofillHints.email],\n                          enableSuggestions: true,\n                          style: Theme.of(context).textTheme.titleLarge,\n                          onChanged: (text) \\{\n                            setState(() \\{\\});\n                          \\},\n                          decoration: InputDecoration(\n                            hintText: AppLocalizations.of(context)!\n                                .translate(\"Enter donation amount\"),\n                            labelText: AppLocalizations.of(context)!\n                                .translate(\"Enter custom donation amount\"),\n                            labelStyle:\n                                Theme.of(context).textTheme.titleMedium,\n                            prefixIcon: GestureDetector(\n                              onTap: () \\{\n                                model.changeCurrency(context, setState);\n                              \\},\n                              child: Padding(\n                                padding: const EdgeInsets.symmetric(\n                                  horizontal: 15.0,\n                                ),\n                                child: Row(\n                                  mainAxisSize: MainAxisSize.min,\n                                  children: [\n                                    Text(\n                                      model.donationCurrency,\n                                      textAlign: TextAlign.center,\n                                      style: Theme.of(context)\n                                          .textTheme\n                                          .headlineSmall,\n                                    ),\n                                    const Icon(\n                                      Icons.arrow_drop_down_circle_outlined,\n                                    )\n                                  ],\n                                ),\n                              ),\n                            ),\n                            enabledBorder: OutlineInputBorder(\n                              borderRadius: const BorderRadius.all(\n                                Radius.circular(12.0),\n                              ),\n                              borderSide: BorderSide(\n                                color:\n                                    Theme.of(context).colorScheme.secondary,\n                                width: 2,\n                              ),\n                            ),\n                            focusedBorder: OutlineInputBorder(\n                              borderRadius: const BorderRadius.all(\n                                Radius.circular(10.0),\n                              ),\n                              borderSide: BorderSide(\n                                color:\n                                    Theme.of(context).colorScheme.secondary,\n                              ),\n                            ),\n                          ),\n                        ),\n                      ),\n                      SizedBox(\n                        height: SizeConfig.screenWidth! * 0.05,\n                      ),\n                      ElevatedButton(\n                        onPressed: () async \\{\n                          required fields for donation transaction\n                          late final String userId;\n                          late final String orgId;\n                          late final String nameOfOrg;\n                          late final String nameOfUser;\n                          late final String payPalId;\n                          late final double amount;\n                          orgId = model.currentOrg.id!;\n                          userId = model.currentUser.id!;\n                          nameOfUser =\n                              \"$\\{model.currentUser.firstName!\\} $\\{model.currentUser.lastName!\\}\";\n                          nameOfOrg = model.currentOrg.name!;\n\n                          amount = double.parse(model.donationAmount.text);\n                          final request = BraintreeDropInRequest(\n                            tokenizationKey:\n                                '\\<YOUR_BRAINTREE_SANDBOX_API_KEY\\>',\n                            collectDeviceData: true,\n                            paypalRequest: BraintreePayPalRequest(\n                              amount: model.donationAmount.text,\n                              displayName: \"Talawa\",\n                            ),\n                            cardEnabled: true,\n                          );\n\n                          final BraintreeDropInResult? result =\n                              await BraintreeDropIn.start(request);\n                          if (result != null) \\{\n                            saving the donation in server\n                            late final GraphQLClient client =\n                                graphqlConfig.clientToQuery();\n\n                            getting transaction id from `brainTree` API\n                            payPalId = result.paymentMethodNonce.nonce;\n\n                            final QueryResult donationResult =\n                                await client.mutate(\n                              MutationOptions(\n                                document: gql(\n                                  queries.createDonation(\n                                    userId,\n                                    orgId,\n                                    nameOfOrg,\n                                    nameOfUser,\n                                    payPalId,\n                                    amount,\n                                  ),\n                                ),\n                              ),\n                            );\n                            if (donationResult.hasException) \\{\n                              model.showSnackBar(\n                                \"Error occurred while making a donation\",\n                              );\n                            \\}\n\n                            hiding the donation UI once it is successful\n                            model.popBottomSheet();\n                            model.showSnackBar(\n                              'Donation Successful,Thanks for the support !',\n                            );\n                          \\}\n                        \\},\n                        style: ButtonStyle(\n                          backgroundColor: MaterialStateProperty.all(\n                            if the donation amount entered or selected is empty then renders grey color\n                            else render primary color\n                            model.donationAmount.text.isEmpty\n                                ? Colors.grey\n                                : Theme.of(context).colorScheme.primary,\n                          ),\n                        ),\n                        child: Text(\n                          'DONATE',\n                          style: Theme.of(context).textTheme.labelLarge,\n                        ),\n                      )\n                    ],\n                  ),\n                ),\n              ),\n            ),\n          );\n        \\},\n      );\n    \\},\n  ).then((value) =\\> model.updateSheetHeight());\n\\}\n"})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var o=t(296540);const i={},a=o.createContext(i);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);