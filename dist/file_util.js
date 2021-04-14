"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUtil = void 0;
const fs = require("fs");
class FileUtil {
    exists(infile) {
        return fs.existsSync(infile);
    }
    getFilenames(path) {
        return fs.readdirSync(path);
    }
    readText(infile) {
        return fs.readFileSync(infile).toString();
    }
    readLines(infile) {
        return fs.readFileSync(infile).toString().split("\n");
    }
    readParseJsonFile(infile) {
        var jstr = fs.readFileSync(infile).toString();
        return JSON.parse(jstr);
    }
    writeFile(outfile, text) {
        fs.writeFileSync(outfile, text);
        console.log("file written: " + outfile);
    }
    writeJsonObject(outfile, obj) {
        this.writeFile(outfile, JSON.stringify(obj, null, 2));
    }
}
exports.FileUtil = FileUtil;
//# sourceMappingURL=file_util.js.map