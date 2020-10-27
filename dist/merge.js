"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class Merge {
    constructor() {
        this.tsFiles = [
            "src/top.ts",
            "src/ts.ts",
            "src/etime.ts",
            "src/geo.ts",
            "src/trackpoint.ts",
            "src/author.ts",
            "src/creator.ts",
            "src/activity.ts",
            "src/parser.ts"
        ];
        this.mergedLines = new Array();
        this.outfile = "";
    }
    execute() {
        if (process.argv.length < 3) {
            console.log('Invalid program args');
            console.log('node dist/merge.js <outfile>');
            console.log('');
        }
        else {
            this.outfile = process.argv[2];
            for (var i = 0; i < this.tsFiles.length; i++) {
                var infile = this.tsFiles[i];
                console.log("merging file: " + infile);
                let filteredLines = this.readLines(infile);
                for (var l = 0; l < filteredLines.length; l++) {
                    this.mergedLines.push(filteredLines[l]);
                }
            }
            fs.writeFileSync(this.outfile, this.mergedLines.join("\n"));
            console.log("file written: " + this.outfile + ", lines: " + this.mergedLines.length);
        }
    }
    readLines(infile) {
        let filteredLines = new Array();
        let allLines = fs.readFileSync(infile).toString().split("\n");
        let inZone = false;
        for (var i = 0; i < allLines.length; i++) {
            let line = allLines[i];
            if (inZone) {
                filteredLines.push(line);
            }
            if (line === "//=") {
                inZone = true;
            }
        }
        return filteredLines;
    }
}
exports.Merge = Merge;
new Merge().execute();
//# sourceMappingURL=merge.js.map