var child_process = require("child_process");
var spawn = child_process.spawn;
var exec = child_process.exec;
var Logger = require("nice-logger");

var log = new Logger("open", "warning");

function open(url) {
    log.debug("Platform detected:", process.platform);
    log.debug("Opening", url);
    switch (process.platform) {
        case "win32":
            exec("start explorer " + '"' + url + '"');
            break;
        case "darwin":
            spawn("open", [url]);
            break;
        default:
            spawn("xdg-open", [url]);
            break;
    }
}

open.setLogLevel = log.setLevel;

module.exports = open;
