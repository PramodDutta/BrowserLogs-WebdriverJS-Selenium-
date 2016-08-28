# SeleniumJSConsoleLogger
A Javascript console logger in the Selenium Webdriver js Test cases.

###Usage :###

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

