"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const parser_1 = require("./parser");
class Main {
    constructor() {
    }
    execute() {
        if (process.argv.length < 4) {
            console.log('Invalid program args');
            console.log('node main.js <infile> <outfile>');
            console.log('');
        }
        else {
            var infile = process.argv[2];
            var outfile = process.argv[3];
            console.log('infile:  ' + infile);
            console.log('outfile: ' + outfile);
            var parser = new parser_1.Parser(infile);
            var jstr = JSON.stringify(parser.activity, (key, value) => {
                if (value !== null) {
                    return value;
                }
            }, 2);
            fs.writeFileSync(outfile, jstr);
            console.log("file written: " + outfile);
        }
    }
}
exports.Main = Main;
new Main().execute();
//# sourceMappingURL=main.js.map