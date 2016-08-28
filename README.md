# SeleniumJSConsoleLogger
A Javascript console logger(From browser) in the Selenium Webdriver JS Test cases.

### Usage :###

In Your Test Add :

 var jsLogs = require('jsLogs.js');
 
 var testName = 'Test1.js';
 
 // Add JS Logger in the After Each 
 

 
        afterEach(function () { 
            jsLogs.getLogs(testName);
            });
            


#### Files Generated :- #####

Errors.json

Warnings.json

Infos.json

