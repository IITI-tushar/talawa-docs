"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[700914],{771324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"developers/talawa/flutter-testing","title":"Flutter Testing Guide","description":"Introduction","source":"@site/docs/developers/talawa/flutter-testing-guide.md","sourceDirName":"developers/talawa","slug":"/developers/talawa/flutter-testing","permalink":"/docs/developers/talawa/flutter-testing","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/developers/talawa/flutter-testing-guide.md","tags":[],"version":"current","frontMatter":{"id":"flutter-testing","title":"Flutter Testing Guide"},"sidebar":"docs","previous":{"title":"Talawa Lint Ecosystem","permalink":"/docs/developers/talawa/talawa-lint"},"next":{"title":"Offline First Features","permalink":"/docs/category/offline-first-features"}}');var a=n(474848),o=n(28453);const r={id:"flutter-testing",title:"Flutter Testing Guide"},i=void 0,l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Understanding Corner Cases",id:"understanding-corner-cases",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Basic Test Example",id:"basic-test-example",level:2},{value:"Intermediary Test Examples",id:"intermediary-test-examples",level:2},{value:"Mocks",id:"mocks",level:3},{value:"Mocks Test Example",id:"mocks-test-example",level:3},{value:"Stubs",id:"stubs",level:3},{value:"Mocks and Stubs Test Example",id:"mocks-and-stubs-test-example",level:3},{value:"Method Under Test",id:"method-under-test",level:4},{value:"Sample Mock and Test Code",id:"sample-mock-and-test-code",level:4},{value:"Test Explanation",id:"test-explanation",level:4},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(t.p,{children:"Tests are an essential part of software development. They help developers to verify the functionality of the code they write and ensure that it behaves as expected. Testing is a process of executing a program with the intent of finding errors. They help to catch bugs early in the development process, which saves time and effort in the long run. Writing tests also makes the code more reliable and maintainable."}),"\n",(0,a.jsx)(t.p,{children:"The cost of removing defects increases exponentially. A defect caught in requirement and design phase costs less to fix than an error caught in the software maintenance cycle."}),"\n",(0,a.jsx)(t.h2,{id:"understanding-corner-cases",children:"Understanding Corner Cases"}),"\n",(0,a.jsx)(t.p,{children:"In software testing, a corner case refers to a scenario or input that is rare, extreme, or unusual, and is not typically encountered in normal usage. These cases often involve unexpected combinations of inputs or circumstances that can cause a system to behave in unexpected or undefined ways. For example, if a software system is designed to handle only positive integers, a corner case might involve testing what happens when a negative integer is entered as input."}),"\n",(0,a.jsx)(t.p,{children:"To ensure that your tests cover all corner cases, you should consider the different input values and edge cases that your code might encounter. For example, if you are testing a function that performs a calculation, you should test it with different input values, including negative numbers, zero, and large numbers."}),"\n",(0,a.jsx)(t.p,{children:"It's also a good idea to use boundary testing, where you test the boundaries between different input values. For example, if your function takes an input between 0 and 100, you should test it with values of 0, 1, 99, 100, and values just above and below these boundaries."}),"\n",(0,a.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,a.jsx)(t.p,{children:"Following are the steps you have to follow in order to start writing and testing your code:-"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Add the ",(0,a.jsx)(t.code,{children:"flutter_test"})," package to your ",(0,a.jsx)(t.code,{children:"pubspec.yaml"})," file."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Create a new test file in your project's ",(0,a.jsx)(t.code,{children:"test"})," directory. The file should have the same name as the file you want to test, with ",(0,a.jsx)(t.code,{children:"_test"})," appended to the end. For example, if you want to test a file called ",(0,a.jsx)(t.code,{children:"my_widget.dart"}),", the test file should be called ",(0,a.jsx)(t.code,{children:"my_widget_test.dart"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Write test cases for the functions, widgets, or other parts of your application that you want to test. Use the tools provided by the flutter_test package, such as the test() and expect() functions, to define your test cases."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Run your tests using the flutter test command. This will run all the tests in your project's test directory."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"basic-test-example",children:"Basic Test Example"}),"\n",(0,a.jsxs)(t.p,{children:["Suppose you have a ",(0,a.jsx)(t.code,{children:"Calculator"})," class with a ",(0,a.jsx)(t.code,{children:"add"})," method that takes two integers and returns their sum:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:"class Calculator {\n  int add(int a, int b) {\n    return a + b;\n  }\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["To write a test for the ",(0,a.jsx)(t.code,{children:"add"})," method, you can create a new file called ",(0,a.jsx)(t.code,{children:"calculator_test.dart"})," in the same directory as your ",(0,a.jsx)(t.code,{children:"calculator.dart"})," file, and write the following code:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:"import 'package:flutter_test/flutter_test.dart';\nimport 'package:my_app/calculator.dart';\n\nvoid main() {\n  test('Calculator add method', () {\n    final calculator = Calculator();\n    final result = calculator.add(2, 3);\n    expect(result, 5);\n  });\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["This test imports the ",(0,a.jsx)(t.code,{children:"flutter_test"})," package, which provides the test function for writing tests, and imports the ",(0,a.jsx)(t.code,{children:"Calculator"})," class from ",(0,a.jsx)(t.code,{children:"calculator.dart"}),'. The test function takes a string description of the test (in this case, "Calculator add method"), and a closure that contains the actual test code.']}),"\n",(0,a.jsxs)(t.p,{children:["Inside the closure, we create a new instance of the ",(0,a.jsx)(t.code,{children:"Calculator"})," class, call its ",(0,a.jsx)(t.code,{children:"add"})," method with the arguments 2 and 3, and store the result in a variable called ",(0,a.jsx)(t.code,{children:"result"}),". We then use the expect function to ",(0,a.jsx)(t.code,{children:"assert"})," that the value of ",(0,a.jsx)(t.code,{children:"result"})," is equal to ",(0,a.jsx)(t.code,{children:"5"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"To run this test, you can run the following command in your terminal:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"flutter test\n"})}),"\n",(0,a.jsxs)(t.p,{children:["This will run all the tests in your project, including the ",(0,a.jsx)(t.code,{children:"Calculator add"})," method test we just wrote. If the test passes, you should see the following output in your terminal:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"00:00 +1: All tests passed!\n"})}),"\n",(0,a.jsx)(t.p,{children:"If the test fails (for example, if the add method in calculator.dart was implemented incorrectly), you will see an error message in your terminal indicating what went wrong."}),"\n",(0,a.jsx)(t.h2,{id:"intermediary-test-examples",children:"Intermediary Test Examples"}),"\n",(0,a.jsx)(t.p,{children:"Now moving towards a more complex example where we will see the use of mocks and stubs to generate relevant tests for our code. First we will see what are mocks and stubs and how to use them."}),"\n",(0,a.jsx)(t.h3,{id:"mocks",children:"Mocks"}),"\n",(0,a.jsx)(t.p,{children:"Mocks are objects that simulate the behavior of real objects in your application. They are often used in testing to isolate the part of your code that you want to test from the rest of the application."}),"\n",(0,a.jsx)(t.p,{children:"In Flutter, mocks can be generated using tools like Mockito, which is a popular mock object library for Dart.\nTo generate a mock object using Mockito, you can follow these steps:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Add the ",(0,a.jsx)(t.code,{children:"mockito"})," package to your pubspec.yaml file."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Import the mockito package in your test file:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:"import 'package:mockito/mockito.dart';\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Define a mock object by extending the Mock class:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:"class MockMyObject extends Mock implements MyObject {}\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Use the mock object in your test cases:"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:"class MockMyObject extends Mock implements MyObject {}  \n"})}),"\n",(0,a.jsx)(t.h3,{id:"mocks-test-example",children:"Mocks Test Example"}),"\n",(0,a.jsxs)(t.p,{children:["Suppose you have a ",(0,a.jsx)(t.code,{children:"Calculator"})," class that performs arithmetic operations, and you want to test a ",(0,a.jsx)(t.code,{children:"CalculatorController"})," class that uses the Calculator to perform\ncalculations. To isolate the ",(0,a.jsx)(t.code,{children:"CalculatorController"})," for testing, you can create a mock ",(0,a.jsx)(t.code,{children:"Calculator"})," object that simulates the behavior of the real Calculator."]}),"\n",(0,a.jsxs)(t.p,{children:["First, you'll need to create a ",(0,a.jsx)(t.code,{children:"mock"})," object using ",(0,a.jsx)(t.code,{children:"mockito"})," as stated above, which provides tools for creating mock objects. Here's an example of how to create a\nmock"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:"import 'package:mockito/mockito.dart';\nclass MockCalculator extends Mock implements Calculator {}\n// Create the mock object in your test case\nfinal calculator = MockCalculator();\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Now, you can use the ",(0,a.jsx)(t.code,{children:"calculator"})," mock object to simulate the behavior of the ",(0,a.jsx)(t.code,{children:"Calculator"})," in your tests. For example, here's a test that verifies that the\n",(0,a.jsx)(t.code,{children:"CalculatorController"})," correctly adds two numbers:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:"test('CalculatorController adds two numbers', () {\n// Create a new CalculatorController, passing in the mock Calculator\nfinal controller = CalculatorController(calculator);\n\n// Stub the add method on the mock calculator\nwhen(calculator.add(2, 3)).thenReturn(5);\n\n// Call the addNumbers method on the controller\nfinal result = controller.addNumbers(2, 3);\n\n// Verify that the add method was called on the calculator\nverify(calculator.add(2, 3)).called(1);\n\n// Verify that the result returned by the controller is correct\nexpect(result, equals(5));\n});\n"})}),"\n",(0,a.jsxs)(t.p,{children:["In this test, the ",(0,a.jsx)(t.code,{children:"MockCalculator"})," is created and passed to the ",(0,a.jsx)(t.code,{children:"CalculatorController"}),". The ",(0,a.jsx)(t.code,{children:"when"})," method is used to stub the ",(0,a.jsx)(t.code,{children:"add"})," method on the mock calculator, so\nthat when the ",(0,a.jsx)(t.code,{children:"add"})," method is called with arguments 2 and 3, it returns the value 5. Then, the ",(0,a.jsx)(t.code,{children:"addNumbers"})," method is called on the ",(0,a.jsx)(t.code,{children:"CalculatorController"}),", and the\nresult is verified using the ",(0,a.jsx)(t.code,{children:"expect"})," method. Finally, the ",(0,a.jsx)(t.code,{children:"verify"})," method is used to ensure that the ",(0,a.jsx)(t.code,{children:"add"})," method was called on the mock calculator with the correct\narguments."]}),"\n",(0,a.jsx)(t.h3,{id:"stubs",children:"Stubs"}),"\n",(0,a.jsx)(t.p,{children:"Stubbing is a technique used in testing to replace a real object with a simplified version that provides predictable behavior."}),"\n",(0,a.jsx)(t.p,{children:"In Flutter, you can use stubs to replace real objects with mock objects or other simplified versions."}),"\n",(0,a.jsxs)(t.p,{children:["To stub a method or class in Flutter, you can use the when() function provided by the ",(0,a.jsx)(t.code,{children:"mockito"})," package. For example, if you have a method called myMethod() that you want to stub, you can do the following:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:"var myMock = MockMyObject();\nwhen(myMock.myMethod()).thenReturn('my result');\n"})}),"\n",(0,a.jsxs)(t.p,{children:["This will replace the ",(0,a.jsx)(t.code,{children:"myMethod()"})," method on the ",(0,a.jsx)(t.code,{children:"myMock"})," object with a stub that always returns the string ",(0,a.jsx)(t.code,{children:"my result"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"when()"})," method is used in the previous Calculator example as well where it is used to stub the add method to mock the Calculator."]}),"\n",(0,a.jsx)(t.p,{children:"You can also use the any matcher to match any input value. For example:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:"when(myMock.myMethod(any)).thenReturn('my result');\n"})}),"\n",(0,a.jsxs)(t.p,{children:["This will stub the ",(0,a.jsx)(t.code,{children:"myMethod()"})," method to always return ",(0,a.jsx)(t.code,{children:"my result"}),", regardless of the input value."]}),"\n",(0,a.jsx)(t.h3,{id:"mocks-and-stubs-test-example",children:"Mocks and Stubs Test Example"}),"\n",(0,a.jsxs)(t.p,{children:["In this example, we'll be testing the ",(0,a.jsx)(t.code,{children:"sendMessageToDirectChat"})," method from our application. This method is responsible for sending direct messages between two users in a private chat. The ",(0,a.jsx)(t.code,{children:"sendMessageToDirectChat"})," method is critical to the functionality of our application, and we need to ensure that it works correctly under a variety of conditions. To do so, we'll be using a combination of manual and automated testing techniques to thoroughly test this method and uncover any potential bugs or issues. By the end of this example, you'll have a better understanding of how to approach testing for critical methods in this application. The file is located in ",(0,a.jsx)(t.code,{children:"talawa/lib/services/chat_service.dart"})," and its tests are written in the file ",(0,a.jsx)(t.code,{children:"talawa\\test\\service_tests\\chat_service_test.dart"})]}),"\n",(0,a.jsx)(t.h4,{id:"method-under-test",children:"Method Under Test"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"sendMessageToDirectChat"})," is the function that sends a message of a person in his/her desired chat. Below is the code of this method which is to be tested if its functioning properly or not."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:'Future<void> sendMessageToDirectChat(\n    String chatId,\n    String messageContent,\n  ) async {\n    // trigger graphQL mutation to push the message in the Database.\n    final result = await _dbFunctions.gqlAuthMutation(\n      ChatQueries().sendMessageToDirectChat(),\n      variables: {"chatId": chatId, "messageContent": messageContent},\n    );\n\n    final message = ChatMessage.fromJson(\n      result.data[\'sendMessageToDirectChat\'] as Map<String, dynamic>,\n    );\n\n    _chatMessageController.add(message);\n\n    debugPrint(result.data.toString());\n  }\n'})}),"\n",(0,a.jsx)(t.h4,{id:"sample-mock-and-test-code",children:"Sample Mock and Test Code"}),"\n",(0,a.jsx)(t.p,{children:"Test written for this method looks like this"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:"test('Test SendMessageToDirectChat Method', () async {\n      final dataBaseMutationFunctions = locator<DataBaseMutationFunctions>();\n      const id = \"1\";\n      const messageContent = \"test\";\n\n      final query = ChatQueries().sendMessageToDirectChat();\n      when(\n        dataBaseMutationFunctions.gqlAuthMutation(\n          query,\n          variables: {\n            \"chatId\": id,\n            \"messageContent\": messageContent,\n          },\n        ),\n      ).thenAnswer(\n        (_) async => QueryResult(\n          options: QueryOptions(document: gql(query)),\n          data: {\n            'sendMessageToDirectChat': {\n              '_id': id,\n              'messageContent': messageContent,\n              'sender': {\n                'firstName': 'Mohamed',\n              },\n              'receiver': {\n                'firstName': 'Ali',\n              }\n            },\n          },\n          source: QueryResultSource.network,\n        ),\n      );\n      final service = ChatService();\n      await service.sendMessageToDirectChat(\n        id,\n        messageContent,\n      );\n    })\n"})}),"\n",(0,a.jsx)(t.h4,{id:"test-explanation",children:"Test Explanation"}),"\n",(0,a.jsx)(t.p,{children:"Here is a breakdown of what this test does"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["The test starts by defining a mock object for the ",(0,a.jsx)(t.code,{children:"_dbFunctions"})," class using the when function from the ",(0,a.jsx)(t.code,{children:"Mockito"})," package. The mock object is set up to return a ",(0,a.jsx)(t.code,{children:"QueryResult"})," object that simulates the result of a GraphQL mutation when the ",(0,a.jsx)(t.code,{children:"gqlAuthMutation"})," method is called with the correct query and variables."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"ChatService"})," class is instantiated, and the ",(0,a.jsx)(t.code,{children:"sendMessageToDirectChat"})," method is called with the correct ",(0,a.jsx)(t.code,{children:"chatId"})," and ",(0,a.jsx)(t.code,{children:"messageContent"})," parameters."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Finally, the test verifies that the ",(0,a.jsx)(t.code,{children:"_chatMessageController"})," object has been updated with the correct ",(0,a.jsx)(t.code,{children:"ChatMessage"})," object that was received from the mocked ",(0,a.jsx)(t.code,{children:"GraphQL mutation"})," result."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"when"})," function is used to set up a mock behavior for the ",(0,a.jsx)(t.code,{children:"gqlAuthMutation"})," method of the ",(0,a.jsx)(t.code,{children:"_dbFunctions"})," object. The mocked behavior returns a ",(0,a.jsx)(t.code,{children:"QueryResult"})," object that simulates the result of a GraphQL mutation. The ",(0,a.jsx)(t.code,{children:"QueryResult"})," object contains a map with a key of ",(0,a.jsx)(t.code,{children:"sendMessageToDirectChat"}),", which contains a value that represents the returned ",(0,a.jsx)(t.code,{children:"ChatMessage"})," object from the mutation."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Overall, this test verifies that the ",(0,a.jsx)(t.code,{children:"sendMessageToDirectChat"})," method correctly triggers a GraphQL mutation and correctly handles the returned data by updating the ",(0,a.jsx)(t.code,{children:"_chatMessageController"})," object with the expected ",(0,a.jsx)(t.code,{children:"ChatMessage"})," object."]}),"\n",(0,a.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,a.jsx)(t.p,{children:"If you find a bug while writing a test for a file, the first thing to do is to write a test case that reproduces the bug. This will help you ensure that the bug is fixed and doesn't reappear in the future."}),"\n",(0,a.jsx)(t.p,{children:"Once you have a failing test case, you should debug the code and identify the cause of the bug. You can use tools like the print() function, the debugger in your IDE, or the debugPrint() function provided by Flutter to help you debug your code."}),"\n",(0,a.jsx)(t.p,{children:"Once you have identified the cause of the bug, you should fix the code and run your tests again to ensure that the bug has been fixed. If you have multiple test cases that cover the same code, you should run all of them to ensure that the fix doesn't break any other parts of your code."}),"\n",(0,a.jsx)(t.p,{children:"If you are working in a team, it's a good idea to communicate the bug and the fix to your teammates so that they are aware of the issue and can review your fix."}),"\n",(0,a.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(t.p,{children:"Writing tests is an important part of the software development process, and Flutter provides a set of tools that make it easy to write tests for your application. By following the guidelines in this guide, you can ensure that your tests cover all corner cases, use mocks and stubs to isolate your code, and effectively debug and fix bugs that you encounter during the testing process."})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var s=n(296540);const a={},o=s.createContext(a);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);