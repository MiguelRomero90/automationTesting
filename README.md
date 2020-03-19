# Automation Testing! :boom:

Hi! This project is a short automation test using **WebdriverIO/Cucumber Framework** *version (5.20.0).* :see_no_evil:

This project functions as a starting point for the new QA automation team members.

This line is just to make a change into this README file. If necessary just erase it, just for training purposes.

# Description :pencil2:
The tests are composed of:

 -1 Gherking File which contains the description for 
 -4 different test scenarios and corresponding step definitions using javascript.

# Dependencies :wrench:
The project uses:

 -**WebDriverIO** *5.21.0*
 -**Cucumber Framework** *5.20.0*
 -**NodeJS** *12.10.0*
 -**Wdio/dot-reporter** *5.18.6*
 -**Wdio/selenium-standalone-service** *5.16.10*
 -**Wdio/cli** *5.22.0*
 -**Wdio/local-runner** *5.21.0*
 -**Cucumber version** *6.0.5*

# Installation Guide :pencil:

To setup the project: 

1. Install NodeJS and NPM with at least version 12.10.0.

> **Note:** *Alternatively you could use nvm to change your node version specifically for this project.*

2. Create the project folder 
3. Create a folder to contain your specs (gherkin files .feature) 
4. Create a folder to contain your step definitions (javascript files .js) 
5. Navigate to the project folder 
6. Use NPM package to install the latest version of WebDriverIO 
```sh
$ npm install webdriverio@latest
```
7. Use NPM to install the latest wdio test runner 
```sh
$ npm install @wdio/cli --save-dev
```
8. Run the configuration wizard 
```sh
$ ./node_modules/.bin/wdio config
```
> **Note:** *Make sure to select cucumber and wbdriverIO as the framework for these tests and make sure to indicate the folder(s) where your specs will be contained*

9. To run your tests use the command
```sh
$ npm test
```
## Extra :bulb:
You can use the file: *"automationTesting\tests\feature\first.feature"* to define your first tests and see a working example of a gherkin file. 

You can also use the file: "*automationTesting\tests\defs\steps.js*" to check a working example of step definitions using javascript. 
# ENROUTE SYSTEMS - GO FURTHER! :rocket: :rocket: :rocket:

