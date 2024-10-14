"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[86434],{99626:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var i=t(85893),o=t(11151);const s={},r="build method",l={id:"talawa-mobile-docs/views_after_auth_screens_events_explore_events/ExploreEvents/build",title:"build method",description:"- @override",source:"@site/docs/talawa-mobile-docs/views_after_auth_screens_events_explore_events/ExploreEvents/build.md",sourceDirName:"talawa-mobile-docs/views_after_auth_screens_events_explore_events/ExploreEvents",slug:"/talawa-mobile-docs/views_after_auth_screens_events_explore_events/ExploreEvents/build",permalink:"/docs/talawa-mobile-docs/views_after_auth_screens_events_explore_events/ExploreEvents/build",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/views_after_auth_screens_events_explore_events/ExploreEvents/build.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"ExploreEvents constructor",permalink:"/docs/talawa-mobile-docs/views_after_auth_screens_events_explore_events/ExploreEvents/"},next:{title:"dropDownList method",permalink:"/docs/talawa-mobile-docs/views_after_auth_screens_events_explore_events/ExploreEvents/dropDownList"}},d={},a=[{value:"Implementation",id:"implementation",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"build-method",children:"build method"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["@",(0,i.jsx)(n.a,{href:"https:api.flutter.dev/flutter/dart-core/override-constant.html",children:"override"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https:api.flutter.dev/flutter/widgets/Widget-class.html",children:"Widget"})," build\n(",(0,i.jsx)(n.a,{href:"https:api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," context)"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:'<span class="feature">override</span>'})}),"\n",(0,i.jsxs)(n.p,{children:['<p>Describes the part of the user interface represented by this widget.</p>\n<p>The framework calls this method when this widget is inserted into the tree\nin a given <a href="https',":api",'.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a> and when the dependencies of this widget change\n(e.g., an <a href="https',":api",'.flutter.dev/flutter/widgets/InheritedWidget-class.html">InheritedWidget</a> referenced by this widget changes). This\nmethod can potentially be called in every frame and should not have any side\neffects beyond building a widget.</p>\n<p>The framework replaces the subtree below this widget with the widget\nreturned by this method, either by updating the existing subtree or by\nremoving the subtree and inflating a new subtree, depending on whether the\nwidget returned by this method can update the root of the existing\nsubtree, as determined by calling <a href="https',":api",'.flutter.dev/flutter/widgets/Widget/canUpdate.html">Widget.canUpdate</a>.</p>\n<p>Typically implementations return a newly created constellation of widgets\nthat are configured with information from this widget\'s constructor and\nfrom the given <a href="https',":api",'.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a>.</p>\n<p>The given <a href="https',":api",'.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a> contains information about the location in the\ntree at which this widget is being built. For example, the context\nprovides the set of inherited widgets for this location in the tree. A\ngiven widget might be built with multiple different <a href="https',":api",'.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a>\narguments over time if the widget is moved around the tree or if the\nwidget is inserted into the tree in multiple places at once.</p>\n<p>The implementation of this method must only depend on:</p>\n<ul>\n<li>the fields of the widget, which themselves must not change over time,\nand</li>\n<li>any ambient state obtained from the <code>context</code> using\n<a href="https',":api",'.flutter.dev/flutter/widgets/BuildContext/dependOnInheritedWidgetOfExactType.html">BuildContext.dependOnInheritedWidgetOfExactType</a>.</li>\n</ul>\n<p>If a widget\'s <a href="../../views_after_auth_screens_events_explore_events/ExploreEvents/build.md">build</a> method is to depend on anything else, use a\n<a href="https',":api",'.flutter.dev/flutter/widgets/StatefulWidget-class.html">StatefulWidget</a> instead.</p>\n<p>See also:</p>\n<ul>\n<li><a href="https',":api",'.flutter.dev/flutter/widgets/StatelessWidget-class.html">StatelessWidget</a>, which contains the discussion on performance considerations.</li>\n</ul>']}),"\n",(0,i.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:'@override\nWidget build(BuildContext context) \\{\n  return BaseView\\<ExploreEventsViewModel\\>(\n    onModelReady: (model) =\\> model.initialise(),\n    builder: (context, model, child) \\{\n      return Scaffold(\n        appBar: AppBar(\n          AppBar returns widget for the header.\n          backgroundColor: Theme.of(context).primaryColor,\n          key: const Key("ExploreEventsAppBar"),\n          elevation: 0.0,\n          automaticallyImplyLeading: false,\n          centerTitle: true,\n          title: Text(\n            AppLocalizations.of(context)!.strictTranslate(\'Explore Events\'),\n            style: Theme.of(context).textTheme.titleLarge!.copyWith(\n                  fontWeight: FontWeight.w600,\n                  fontSize: 20,\n                ),\n          ),\n          leading: IconButton(\n            returns a button of menu icon to redirect to home.\n            color: Theme.of(context).iconTheme.color,\n            icon: const Icon(Icons.menu),\n            onPressed: () =\\>\n                MainScreenViewModel.scaffoldKey.currentState!.openDrawer(),\n          ),\n          actions: [\n            Padding(\n              padding: EdgeInsets.only(\n                right: SizeConfig.screenWidth! * 0.027,\n              ),\n              if the events is not empty then renders button for searching the events else renders just a box.\n              child: model.events.isNotEmpty\n                  ? IconButton(\n                      onPressed: () \\{\n                        showSearch(\n                          context: context,\n                          delegate: EventSearch(\n                            eventList: model.events,\n                            exploreEventsViewModel: model,\n                          ),\n                        );\n                      \\},\n                      icon: const Icon(Icons.search, size: 20),\n                    )\n                  : const SizedBox(),\n            )\n          ],\n        ),\n        if the model is still fetching the events list then renders the Circular Progress Indicator\n        else render refresh icon along with the list of searched events for exploration.\n        body: model.isBusy\n            ? const Center(child: CircularProgressIndicator())\n            : RefreshIndicator(\n                onRefresh: () async =\\> model.refreshEvents(),\n                child: Stack(\n                  children: [\n                    SingleChildScrollView(\n                      physics: const AlwaysScrollableScrollPhysics(),\n                      child: Padding(\n                        padding: EdgeInsets.symmetric(\n                          horizontal: SizeConfig.screenWidth! * 0.010,\n                        ),\n                        child: Column(\n                          children: [\n                            Row(\n                              mainAxisAlignment:\n                                  MainAxisAlignment.spaceBetween,\n                              children: [\n                                Expanded(\n                                  flex: 3,\n                                  child: Card(\n                                    color: Theme.of(context)\n                                        .colorScheme\n                                        .onPrimary,\n                                    elevation: 2,\n                                    child: Container(\n                                      padding: const EdgeInsets.symmetric(\n                                        horizontal: 20,\n                                      ),\n                                      width: SizeConfig.screenWidth! * 0.45,\n                                      child: DropdownButtonHideUnderline(\n                                        child: dropDownList(model, context),\n                                      ),\n                                    ),\n                                  ),\n                                ),\n                                Expanded(\n                                  flex: 2,\n                                  child: GestureDetector(\n                                    onTap: () \\{\n                                      showDialog(\n                                        on tap open the Explore Event Dialog.\n                                        context: context,\n                                        builder: (_) \\{\n                                          return const ExploreEventDialog(\n                                            key: Key(\'ExploreEvents\'),\n                                          );\n                                        \\},\n                                      );\n                                    \\},\n                                    child: Card(\n                                      key: homeModel?.keySEDateFilter,\n                                      color: Theme.of(context)\n                                          .colorScheme\n                                          .onPrimary,\n                                      child: Container(\n                                        padding: const EdgeInsets.symmetric(\n                                          vertical: 12,\n                                        ),\n                                        width: SizeConfig.screenWidth! * 0.30,\n                                        child: Row(\n                                          mainAxisAlignment:\n                                              MainAxisAlignment.spaceEvenly,\n                                          children: [\n                                            const Icon(\n                                              Icons.calendar_today,\n                                              color: Color(0xff524F4F),\n                                            ),\n                                            const SizedBox(\n                                              width: 8,\n                                            ),\n                                            Text(\n                                              AppLocalizations.of(context)!\n                                                  .strictTranslate(\n                                                "Add Date",\n                                              ),\n                                            ),\n                                          ],\n                                        ),\n                                      ),\n                                    ),\n                                  ),\n                                ),\n                                Expanded(\n                                  flex: 1,\n                                  child: Card(\n                                    color: Theme.of(context)\n                                        .colorScheme\n                                        .onPrimary,\n                                    child: IconButton(\n                                      onPressed: () \\{\n                                        navigationService.pushScreen(\n                                          Routes.calendar,\n                                          arguments: model.events,\n                                        );\n                                      \\},\n                                      icon: const Icon(\n                                        Icons.calendar_month,\n                                      ),\n                                    ),\n                                  ),\n                                ),\n                              ],\n                            ),\n                            SizedBox(\n                              height: SizeConfig.screenHeight! * 0.027,\n                            ),\n                            if the events model is empty then renders a box with text as "Empty List"\n                            else renders lists of the all event tile.\n                            model.events.isEmpty\n                                ? SizedBox(\n                                    height: SizeConfig.screenHeight! * 0.5,\n                                    child: Center(\n                                      child: Text(model.emptyListMessage),\n                                    ),\n                                  )\n                                : ListView.builder(\n                                    physics:\n                                        const NeverScrollableScrollPhysics(),\n                                    shrinkWrap: true,\n                                    itemCount: model.events.length,\n                                    itemBuilder:\n                                        (BuildContext context, int index) \\{\n                                      return GestureDetector(\n                                        onTap: () \\{\n                                          navigationService.pushScreen(\n                                            "/eventInfo",\n                                            arguments: \\{\n                                              "event": model.events[index],\n                                              "exploreEventViewModel": model\n                                            \\},\n                                          );\n                                        \\},\n                                        child: EventCard(\n                                          event: model.events[index],\n                                          isSearchItem: false,\n                                        ),\n                                      );\n                                    \\},\n                                  ),\n                          ],\n                        ),\n                      ),\n                    ),\n                  ],\n                ),\n              ),\n        floatingActionButton: FloatingActionButton.extended(\n          key: homeModel?.keySEAdd,\n          heroTag: "AddEventFab",\n          backgroundColor: Theme.of(context).colorScheme.background,\n          onPressed: () \\{\n            navigationService.pushScreen(\n              "/createEventPage",\n            );\n          \\},\n          icon: Icon(\n            Icons.add,\n            color: Theme.of(context).colorScheme.secondary,\n          ),\n          label: Text(\n            AppLocalizations.of(context)!.strictTranslate("Event"),\n            style: Theme.of(context)\n                .textTheme\n                .headlineSmall!\n                .copyWith(color: Theme.of(context).colorScheme.secondary),\n          ),\n        ),\n      );\n    \\},\n  );\n\\}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var i=t(67294);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);