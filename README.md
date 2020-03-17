# automationTesting
Automation project in JavaScript, using webdriverIO/Cucumber Framework (5.20.0)

This project is a short automation test using WebdriverIO/Cucumber Frameword version(5.20.0).
The tests are composed of (1) gherkin file with the description for (4) different test scenarios, 
and the corresponding step definitions using javascript to execute the scenarios.

This project functions as a starting point for the new QA automation team members.

The scenarios described under this project run over 1 website containing tab menu, a contact page, and it's corresponding form.

The project uses {WebDriverIO version ^5.21.0, WebDriverIO/Cucumber Framework ^5.20.0, NodeJS ^12.10.0, wdio/dot-reporter ^5.18.6
wdio/selenium-standalone-service ^5.16.10, wdio/cli ^5.22.0, wdio/local-runner ^5.21.0, cucumber ^6.0.5}.

To setup the project:
-Install NodeJS and NPM with at least version 12.10.0.
-*Alternatively you could use nvm to change your node version specifically for this project*
-Create the project folder
-Create a folder to contain your specs (gherkin files .feature)
-Create a folder to contain your step definitions(javascript files .js)
-Navigate to the project folder
-Use NPM package to install the latest version of WebDriverIO (npm install webdriverio@latest)
-Use NPM to install the latest wdio test runner (npm install @wdio/cli --save-dev)
-Run the configuration wizard (./node_modules/.bin/wdio config)
-Make sure to select cucumber and wbdriverIO as the framework for these tests
-Make sure to indicate the folder(s) where your specs will be contained
-Create your test specs and step definitions *You can use the file: "automationTesting\tests\feature\first.feature" 
to define your first tests and see a working example of a gherkin file.
You can also use the file: "automationTesting\tests\defs\steps.js" to check a working example of step definitions using javascript.
-To run your tests use the command npm test

Enjoy!



