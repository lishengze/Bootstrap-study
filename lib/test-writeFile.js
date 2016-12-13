var spi               = require("./server-spi.js");
var EVENTS            = require("./Events.js");
var SysUserApiStruct  = require("./SysUserApiStruct.js");
var addon             = require("./addon.js");
var path              = require('path');
var fs                = require('fs');

var fileName = path.join (__dirname, './test-file.txt');
var fileData = "Child Process Pid: " + process.pid + '\n';
fs.writeFileSync(fileName, fileData);