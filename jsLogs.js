/**
 * Created by promode on 8/27/16.
 */
'use strict';
var fs = require('fs');
var dirPath = process.cwd(),
    path = require('path');
var filePath = path.join(dirPath, '/errors');
var JSConsole = {
    getLogs: function (testName) {
        browser.manage().logs().get('browser').then(function (browserLog) {
            var i = 0;
            var infoMsg = [],
                warningMsg = [],
                errorMsg = [];
            console.log('Runinng Test :-' + testName);
            infoMsg.push(testName);
            warningMsg.push(testName);
            errorMsg.push(testName);

            for (i; i <= browserLog.length - 1; i++) {
                if (browserLog[i].level.name === 'INFO') {
                    infoMsg.push(browserLog[i]);
                }
                if (browserLog[i].level.name === 'WARNING') {
                    warningMsg.push(browserLog[i]);
                }
                if (browserLog[i].level.name === 'SEVERE') {
                    errorMsg.push(browserLog[i]);
                }
            }
            console.log('||===================START===============||');
            console.log('(INFO): ' + infoMsg.length);
            console.log('(WARNING): ' + warningMsg.length);
            console.log('(ERROR): ' + errorMsg.length);
            fs.writeFileSync(filePath + '/Errors.json', JSON.stringify(errorMsg));
            fs.writeFileSync(filePath + '/Warnings.json', JSON.stringify(warningMsg));
            fs.writeFileSync(filePath + '/Infos.json', JSON.stringify(infoMsg));
            console.log('||===================END==================||');
        });
    }
};
module.exports = JSConsole;
