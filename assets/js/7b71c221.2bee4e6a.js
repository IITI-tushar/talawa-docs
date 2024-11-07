"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[157678],{281180:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var a=t(785893),i=t(511151);const s={id:"feed-caching",title:"Feed Caching"},d=void 0,r={id:"developers/talawa/offline-first-features/feed-caching",title:"Feed Caching",description:"An abstract base class for managing a feed of type [T] with support for caching and online data fetching. This class is designed to provide a unified interface for handling data operations that involve both local caching and remote API interactions.",source:"@site/docs/developers/talawa/offline-first-features/feed-caching.md",sourceDirName:"developers/talawa/offline-first-features",slug:"/developers/talawa/offline-first-features/feed-caching",permalink:"/docs/developers/talawa/offline-first-features/feed-caching",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/developers/talawa/offline-first-features/feed-caching.md",tags:[],version:"current",frontMatter:{id:"feed-caching",title:"Feed Caching"},sidebar:"docs",previous:{title:"ActionHandlerService",permalink:"/docs/developers/talawa/offline-first-features/action-handler-service"},next:{title:"Talawa API",permalink:"/docs/category/talawa-api"}},c={},l=[{value:"Overview",id:"overview",level:3},{value:"Flow-breakdown",id:"flow-breakdown",level:3},{value:"Constructor",id:"constructor",level:3},{value:"<code>BaseFeedManager(String cacheKey)</code>",id:"basefeedmanagerstring-cachekey",level:4},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"<code>_initialize()</code>",id:"_initialize",level:4},{value:"<code>Future&lt;List&lt;T&gt;&gt; loadCachedData()</code>",id:"futurelistt-loadcacheddata",level:4},{value:"<code>Future&lt;void&gt; saveDataToCache(List&lt;T&gt; data)</code>",id:"futurevoid-savedatatocachelistt-data",level:4},{value:"<code>Future&lt;List&lt;T&gt;&gt; fetchDataFromApi()</code>",id:"futurelistt-fetchdatafromapi",level:4},{value:"<code>Future&lt;List&lt;T&gt;&gt; getNewFeedAndRefreshCache()</code>",id:"futurelistt-getnewfeedandrefreshcache",level:4},{value:"Example Usage",id:"example-usage",level:3}];function o(e){const n={code:"code",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["An abstract base class for managing a feed of type ",(0,a.jsx)(n.code,{children:"[T]"})," with support for caching and online data fetching. This class is designed to provide a unified interface for handling data operations that involve both local caching and remote API interactions."]}),"\n",(0,a.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"BaseFeedManager"})," provides a robust framework for managing data feeds by:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Initializing a cache using Hive."}),"\n",(0,a.jsx)(n.li,{children:"Loading data from the local cache."}),"\n",(0,a.jsx)(n.li,{children:"Saving data to the local cache."}),"\n",(0,a.jsx)(n.li,{children:"Fetching new data from a remote API."}),"\n",(0,a.jsx)(n.li,{children:"Automatically refreshing the cache based on online connectivity."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["This class is generic and can be used with any data type by specifying the type parameter ",(0,a.jsx)(n.code,{children:"[T]"}),". Subclasses must implement the abstract method ",(0,a.jsx)(n.code,{children:"fetchDataFromApi"})," to define how to retrieve data from an API."]}),"\n",(0,a.jsx)(n.h3,{id:"flow-breakdown",children:"Flow-breakdown"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Basefeed manager",src:t(637769).Z+"",width:"1278",height:"682"})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Initialize Feed"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"BaseFeedManager"})," is initialized with the specific feed type. During initialization:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The associated Hive box for caching is set up."}),"\n",(0,a.jsx)(n.li,{children:"Any previously cached feed data is loaded from local storage."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Serve Cached Data"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The feed manager immediately retrieves and serves cached data from local storage to the UI."}),"\n",(0,a.jsx)(n.li,{children:"This ensures that users see previously loaded content while new data is fetched in the background."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Fetch Fresh Data"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The API Service performs a network request to fetch the latest feed data from the server."}),"\n",(0,a.jsx)(n.li,{children:"This operation occurs asynchronously to avoid blocking the UI thread."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Update Cache"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Once fresh data is successfully fetched, it is stored in the cache."}),"\n",(0,a.jsx)(n.li,{children:"The existing cache is cleared and replaced with the new data to ensure that the cache remains up-to-date."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"UI Update"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The UI is updated to display the latest feed content."}),"\n",(0,a.jsx)(n.li,{children:"This involves notifying relevant components to refresh and render the updated data, ensuring that users have access to the most recent information."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"constructor",children:"Constructor"}),"\n",(0,a.jsx)(n.h4,{id:"basefeedmanagerstring-cachekey",children:(0,a.jsx)(n.code,{children:"BaseFeedManager(String cacheKey)"})}),"\n",(0,a.jsxs)(n.p,{children:["Initializes the ",(0,a.jsx)(n.code,{children:"BaseFeedManager"})," with a unique cache key for Hive."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"cacheKey"}),": A unique string used to identify the cache box in Hive."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"String cacheKey"})}),": The unique key used to access the Hive cache box."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"Box<T> _box"})}),": The Hive box that stores the cached data."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"methods",children:"Methods"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Method"})}),"\n",(0,a.jsx)(n.h4,{id:"_initialize",children:(0,a.jsx)(n.code,{children:"_initialize()"})}),"\n",(0,a.jsxs)(n.p,{children:["Initializes the Hive box associated with the ",(0,a.jsx)(n.code,{children:"cacheKey"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Future<void>"}),": Completes when the initialization is finished."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Method"})}),"\n",(0,a.jsx)(n.h4,{id:"futurelistt-loadcacheddata",children:(0,a.jsx)(n.code,{children:"Future<List<T>> loadCachedData()"})}),"\n",(0,a.jsx)(n.p,{children:"Loads the data cached in Hive."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Future<List<T>>"}),": A ",(0,a.jsx)(n.code,{children:"Future"})," that resolves to a list of cached data of type ",(0,a.jsx)(n.code,{children:"[T]"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Method"})}),"\n",(0,a.jsx)(n.h4,{id:"futurevoid-savedatatocachelistt-data",children:(0,a.jsx)(n.code,{children:"Future<void> saveDataToCache(List<T> data)"})}),"\n",(0,a.jsx)(n.p,{children:"Saves a list of data to the cache, replacing any existing data."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"data"}),": A list of data of type ",(0,a.jsx)(n.code,{children:"[T]"})," to be saved in the cache."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Future<void>"}),": Completes when the data has been saved to the cache."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Method"})}),"\n",(0,a.jsx)(n.h4,{id:"futurelistt-fetchdatafromapi",children:(0,a.jsx)(n.code,{children:"Future<List<T>> fetchDataFromApi()"})}),"\n",(0,a.jsx)(n.p,{children:"An abstract method that must be implemented by subclasses to fetch data from an API."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Future<List<T>>"}),": A ",(0,a.jsx)(n.code,{children:"Future"})," that resolves to a list of data of type ",(0,a.jsx)(n.code,{children:"[T]"})," fetched from the API."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Method"})}),"\n",(0,a.jsx)(n.h4,{id:"futurelistt-getnewfeedandrefreshcache",children:(0,a.jsx)(n.code,{children:"Future<List<T>> getNewFeedAndRefreshCache()"})}),"\n",(0,a.jsx)(n.p,{children:"Fetches new data from the API if online, updates the cache, and returns the data. If offline, it loads and returns cached data."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Future<List<T>>"}),": A ",(0,a.jsx)(n.code,{children:"Future"})," that resolves to a list of the latest data of type ",(0,a.jsx)(n.code,{children:"[T]"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"example-usage",children:"Example Usage"}),"\n",(0,a.jsxs)(n.p,{children:["To use ",(0,a.jsx)(n.code,{children:"BaseFeedManager"}),", create a subclass that implements the ",(0,a.jsx)(n.code,{children:"fetchDataFromApi"})," method. Here is an example of how to create a concrete implementation:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"import 'package:flutter/material.dart';\nimport 'package:hive/hive.dart';\nimport 'base_feed_manager.dart'; // Import your BaseFeedManager class\n\nclass MyFeedManager extends BaseFeedManager<MyDataType> {\n  MyFeedManager() : super('myFeedCacheKey');\n\n  @override\n  Future<List<MyDataType>> fetchDataFromApi() async {\n    // Replace with your actual API fetching logic\n    final response = await http.get(Uri.parse('https://api.example.com/data'));\n    if (response.statusCode == 200) {\n      final List<dynamic> jsonData = json.decode(response.body);\n      return jsonData.map((item) => MyDataType.fromJson(item)).toList();\n    } else {\n      throw Exception('Failed to load data');\n    }\n  }\n}\n\nvoid main() async {\n  WidgetsFlutterBinding.ensureInitialized();\n\n  // Open Hive box\n  await Hive.openBox<MyDataType>('myFeedCacheKey');\n\n  final feedManager = MyFeedManager();\n\n  // Fetch and refresh cache\n  final data = await feedManager.getNewFeedAndRefreshCache();\n\n  // Use the data\n  print(data);\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},637769:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/base_feed_manager_flow-a8ad7b64378d1f49dd4179f26d06d492.png"},511151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>d});var a=t(667294);const i={},s=a.createContext(i);function d(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);