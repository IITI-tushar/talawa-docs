"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[250595],{655661:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"developers/talawa/offline-first-features/action-handler-service","title":"ActionHandlerService","description":"The ActionHandlerService provides a standardized way to handle both optimistic and critical user actions within the application, ensuring that they are executed consistently, regardless of whether the user is online or offline. This documentation outlines the flow of the performAction method, with detailed step-by-step explanations for both optimistic and critical actions.","source":"@site/docs/developers/talawa/offline-first-features/action-handler-service.md","sourceDirName":"developers/talawa/offline-first-features","slug":"/developers/talawa/offline-first-features/action-handler-service","permalink":"/docs/developers/talawa/offline-first-features/action-handler-service","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/developers/talawa/offline-first-features/action-handler-service.md","tags":[],"version":"current","frontMatter":{"id":"action-handler-service","title":"ActionHandlerService"},"sidebar":"docs","previous":{"title":"Offline User Actions","permalink":"/docs/developers/talawa/offline-first-features/offline-user-actions"},"next":{"title":"Feed Caching","permalink":"/docs/developers/talawa/offline-first-features/feed-caching"}}');var s=n(474848),r=n(28453);const l={id:"action-handler-service",title:"ActionHandlerService"},a=void 0,c={},o=[{value:"Key Features:",id:"key-features",level:2},{value:"<strong>ActionHandlerService PerformAction Flow</strong>",id:"actionhandlerservice-performaction-flow",level:2},{value:"1. User Initiates an Action",id:"1-user-initiates-an-action",level:3},{value:"2. Wrapping Actions with ActionHandlerService",id:"2-wrapping-actions-with-actionhandlerservice",level:3},{value:"3. Action Type Decision",id:"3-action-type-decision",level:3},{value:"4. Handling Optimistic Actions",id:"4-handling-optimistic-actions",level:3},{value:"i. UI Update Prior to API Call",id:"i-ui-update-prior-to-api-call",level:4},{value:"ii. Execute API Call",id:"ii-execute-api-call",level:4},{value:"iii. Post-API Behavior",id:"iii-post-api-behavior",level:4},{value:"Error Handling for Optimistic Actions",id:"error-handling-for-optimistic-actions",level:4},{value:"5. Handling Critical Actions",id:"5-handling-critical-actions",level:3},{value:"i. Check Network Status",id:"i-check-network-status",level:4},{value:"ia. Online Status",id:"ia-online-status",level:4},{value:"ib. Offline Status",id:"ib-offline-status",level:4},{value:"6. The <code>executeApiCall</code> Method",id:"6-the-executeapicall-method",level:3},{value:"7. Optimizing for Offline-First Design",id:"7-optimizing-for-offline-first-design",level:3},{value:"8. Summary of Key Flows",id:"8-summary-of-key-flows",level:3},{value:"Methods:",id:"methods",level:3},{value:"<code>executeApiCall</code>",id:"executeapicall",level:4},{value:"Parameters:",id:"parameters",level:5},{value:"Returns:",id:"returns",level:5},{value:"Usage Example:",id:"usage-example",level:4},{value:"<code>performAction</code>",id:"performaction",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Returns:",id:"returns-1",level:4},{value:"Usage Example:",id:"usage-example-1",level:4},{value:"Optimistic vs. Critical Actions",id:"optimistic-vs-critical-actions",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"Example:",id:"example",level:4}];function d(e){const i={code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.strong,{children:"ActionHandlerService"})," provides a standardized way to handle both optimistic and critical user actions within the application, ensuring that they are executed consistently, regardless of whether the user is online or offline. This documentation outlines the flow of the ",(0,s.jsx)(i.code,{children:"performAction"})," method, with detailed step-by-step explanations for both optimistic and critical actions."]}),"\n",(0,s.jsx)(i.p,{children:"The service focuses on:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Optimistic actions"}),": These actions immediately update the UI, assuming that the API call will succeed."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Critical actions"}),": These actions wait for the API call to succeed before updating the UI. They are important actions that require confirmation from the server."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"key-features",children:"Key Features:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Handles API calls with extensive error handling and optional UI updates."}),"\n",(0,s.jsx)(i.li,{children:"Supports optimistic and critical actions with distinct UI behaviors."}),"\n",(0,s.jsx)(i.li,{children:"Provides hooks for handling valid results, exceptions, and final tasks after API execution."}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h2,{id:"actionhandlerservice-performaction-flow",children:(0,s.jsx)(i.strong,{children:"ActionHandlerService PerformAction Flow"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"ActionHandler PerformAction Flow",src:n(978584).A+"",width:"1530",height:"755"})}),"\n",(0,s.jsx)(i.h3,{id:"1-user-initiates-an-action",children:"1. User Initiates an Action"}),"\n",(0,s.jsxs)(i.p,{children:["The user triggers an action in the app, such as liking a post, commenting, or creating/deleting an event. Each action is routed through the ",(0,s.jsx)(i.strong,{children:"performAction"})," method of the ",(0,s.jsx)(i.code,{children:"ActionHandlerService"}),", which wraps the action with logic to handle network status, UI updates, and error management."]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"2-wrapping-actions-with-actionhandlerservice",children:"2. Wrapping Actions with ActionHandlerService"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"performAction"})," method serves as a central point for managing all user actions. It handles:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"UI updates for optimistic actions."}),"\n",(0,s.jsx)(i.li,{children:"Network state detection."}),"\n",(0,s.jsx)(i.li,{children:"Executing API calls asynchronously."}),"\n",(0,s.jsx)(i.li,{children:"Offline behavior management, including retries for actions."}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"3-action-type-decision",children:"3. Action Type Decision"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"performAction"})," method categorizes actions as either ",(0,s.jsx)(i.strong,{children:"optimistic"})," or ",(0,s.jsx)(i.strong,{children:"critical"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Optimistic Actions"}),": These actions (e.g., liking or commenting on a post) allow immediate UI feedback to the user before confirmation from the server."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Critical Actions"}),": These actions (e.g., creating or deleting a post) require reliable server interaction and will only update the UI after the server response."]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"4-handling-optimistic-actions",children:"4. Handling Optimistic Actions"}),"\n",(0,s.jsx)(i.h4,{id:"i-ui-update-prior-to-api-call",children:"i. UI Update Prior to API Call"}),"\n",(0,s.jsx)(i.p,{children:'For optimistic actions, the UI is updated immediately after the action is performed, giving the user instant feedback. For example, when a user likes a post, the like button changes to the "liked" state.'}),"\n",(0,s.jsx)(i.h4,{id:"ii-execute-api-call",children:"ii. Execute API Call"}),"\n",(0,s.jsxs)(i.p,{children:["After the UI update, the ",(0,s.jsx)(i.code,{children:"executeApiCall"})," method is called asynchronously to send the action request to the server."]}),"\n",(0,s.jsx)(i.h4,{id:"iii-post-api-behavior",children:"iii. Post-API Behavior"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Success Case"}),": If the API call succeeds, the UI is already updated, so no further action is required."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Failure Case"}),": If the API call fails (e.g., the user is offline), the user is notified that the action will be performed once the device is back online."]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"error-handling-for-optimistic-actions",children:"Error Handling for Optimistic Actions"}),"\n",(0,s.jsx)(i.p,{children:"In case of failure, optimistic actions should have robust error handling to notify the user and queue the action for later execution."}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"5-handling-critical-actions",children:"5. Handling Critical Actions"}),"\n",(0,s.jsx)(i.h4,{id:"i-check-network-status",children:"i. Check Network Status"}),"\n",(0,s.jsx)(i.p,{children:"The network status is checked before executing critical actions to determine whether the user is online or offline."}),"\n",(0,s.jsx)(i.h4,{id:"ia-online-status",children:"ia. Online Status"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Execute API Call"}),": If the device is online, the ",(0,s.jsx)(i.code,{children:"executeApiCall"})," method sends the request to the server."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Post-API UI Update"}),": Once the server confirms the action, the UI is updated accordingly (e.g., the new post appears in the feed)."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"ApiCallSuccess Callback"}),": After the API call completes, additional tasks like notifications or navigation are triggered via the success callback."]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"ib-offline-status",children:"ib. Offline Status"}),"\n",(0,s.jsx)(i.p,{children:"If the device is offline, the user is notified, and no API call is made. The user is asked to retry once the device is connected to the internet."}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsxs)(i.h3,{id:"6-the-executeapicall-method",children:["6. The ",(0,s.jsx)(i.code,{children:"executeApiCall"})," Method"]}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"executeApiCall"})," method is responsible for:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Asynchronous Network Request"}),": Sending the API request without blocking the UI."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Error Handling"}),": Managing network failures or server errors by informing the user or retrying the action."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Success Callback"}),": Triggering additional tasks after the API call completes successfully."]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"7-optimizing-for-offline-first-design",children:"7. Optimizing for Offline-First Design"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"performAction"})," method is designed to accommodate offline scenarios:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Optimistic Actions"}),": The UI is updated before the server response to provide a seamless user experience."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Critical Actions"}),": API calls are only made when the device is online, ensuring data integrity."]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"8-summary-of-key-flows",children:"8. Summary of Key Flows"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Optimistic Actions"}),":","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Immediate UI update followed by API call."}),"\n",(0,s.jsx)(i.li,{children:"Error handling for failed API calls."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Critical Actions"}),":","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Network status is checked before performing the action."}),"\n",(0,s.jsx)(i.li,{children:"Online: API call, followed by UI update and success callback."}),"\n",(0,s.jsx)(i.li,{children:"Offline: User is notified, and no action is taken."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"methods",children:"Methods:"}),"\n",(0,s.jsx)(i.h4,{id:"executeapicall",children:(0,s.jsx)(i.code,{children:"executeApiCall"})}),"\n",(0,s.jsx)(i.p,{children:"Executes an API action with appropriate error handling."}),"\n",(0,s.jsx)(i.h5,{id:"parameters",children:"Parameters:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"action"}),": A function that performs the API call and returns a ",(0,s.jsx)(i.code,{children:"Future<QueryResult<Object?>?>"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"onValidResult"}),": A callback function that processes the API call result when it is successful."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"onActionException"}),": A callback function that handles any exceptions that occur during the API call."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"onActionFinally"}),": A callback function that executes regardless of the success or failure of the API call (typically used for cleanup tasks)."]}),"\n"]}),"\n",(0,s.jsx)(i.h5,{id:"returns",children:"Returns:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Future<bool?>"}),": A boolean indicating the success (",(0,s.jsx)(i.code,{children:"true"}),"), failure (",(0,s.jsx)(i.code,{children:"false"}),"), or ",(0,s.jsx)(i.code,{children:"null"})," if the result is invalid."]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"usage-example",children:"Usage Example:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-dart",children:"final result = await actionHandlerService.executeApiCall(\n  action: () async => await yourGraphqlClient.query(options),\n  onValidResult: (result) async {\n    // Handle valid result\n  },\n  onActionException: (e) async {\n    // Handle exception\n  },\n  onActionFinally: () async {\n    // Perform final cleanup or update UI\n  },\n);\n"})}),"\n",(0,s.jsx)(i.h3,{id:"performaction",children:(0,s.jsx)(i.code,{children:"performAction"})}),"\n",(0,s.jsxs)(i.p,{children:["Executes a user action based on its type (",(0,s.jsx)(i.code,{children:"optimistic"})," or ",(0,s.jsx)(i.code,{children:"critical"}),"), updating the UI and handling errors accordingly."]}),"\n",(0,s.jsx)(i.h4,{id:"parameters-1",children:"Parameters:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"actionType"}),": Specifies whether the action is optimistic or critical. (",(0,s.jsx)(i.code,{children:"ActionType.optimistic"})," or ",(0,s.jsx)(i.code,{children:"ActionType.critical"}),")."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"action"}),": The action to perform, which returns a ",(0,s.jsx)(i.code,{children:"Future<QueryResult<Object?>?>"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"onValidResult"}),": A callback function that processes the result when the action is successful."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"onActionException"}),": A callback function that handles exceptions during the action."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"updateUI"}),": A callback function to update the UI. For optimistic actions, it runs immediately; for critical actions, it runs after the API call."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"apiCallSuccessUpdateUI"}),": A callback function to update the UI after a successful API call."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"criticalActionFailureMessage"}),": A string for the error message used when a critical action fails."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"onActionFinally"}),": A callback function to execute regardless of the success or failure of the action."]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"returns-1",children:"Returns:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"Future<void>"})}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"usage-example-1",children:"Usage Example:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-dart",children:"await actionHandlerService.performAction(\n  actionType: ActionType.optimistic,\n  action: () async => await yourGraphqlClient.query(options),\n  onValidResult: (result) async {\n    // Handle valid result\n  },\n  onActionException: (e) async {\n    // Handle exception\n  },\n  updateUI: () {\n    // Immediately update UI for optimistic action\n  },\n  apiCallSuccessUpdateUI: () {\n    // Update UI after API call success\n  },\n  criticalActionFailureMessage: 'Failed to save your action. Please try again.',\n  onActionFinally: () async {\n    // Perform final cleanup\n  },\n);\n"})}),"\n",(0,s.jsx)(i.h2,{id:"optimistic-vs-critical-actions",children:"Optimistic vs. Critical Actions"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Optimistic actions"})," immediately update the UI before the API call is made. This improves perceived responsiveness, but the UI may need to be rolled back if the API call fails."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Critical actions"})," wait for a response from the server before updating the UI. This ensures that the UI reflects the actual state after the server confirms the action."]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h2,{id:"error-handling",children:"Error Handling"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"ActionHandlerService"})," is designed to gracefully handle exceptions. For optimistic actions, the UI is updated before the API call, but if an error occurs, a rollback or UI adjustment might be needed. For critical actions, error messages are handled based on the type of error, and the UI is updated accordingly."]}),"\n",(0,s.jsxs)(i.p,{children:["In case the device is offline, a ",(0,s.jsx)(i.strong,{children:"critical action"})," will trigger an exception with a user-friendly message, notifying the user that their action was not saved."]}),"\n",(0,s.jsx)(i.h4,{id:"example",children:"Example:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-dart",children:"if (await connectivityViewModel.isOnline()) {\n  await actionHandlerService.performAction(\n    actionType: ActionType.critical,\n    action: () async => await yourGraphqlClient.mutate(options),\n    onValidResult: (result) async {\n      // Handle valid mutation result\n    },\n    onActionException: (e) async {\n      // Handle exception, such as showing an error message to the user\n    },\n    updateUI: () {\n      // Update UI only after the API call for critical actions\n    },\n    apiCallSuccessUpdateUI: () {\n      // Additional UI update on successful API call\n    },\n    criticalActionFailureMessage: 'Failed to save critical action. Please try again.',\n    onActionFinally: () async {\n      // Perform any final tasks after the API call\n    },\n  );\n} else {\n  // Handle the case where the device is offline\n  showOfflineError();\n}\n"})})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},978584:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/perform_action_wrapper_flow-8ba84044e42218540ec5f54a4ce8dfe4.png"},28453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>a});var t=n(296540);const s={},r=t.createContext(s);function l(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);