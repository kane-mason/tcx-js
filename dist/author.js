"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Author = void 0;
class Author {
    constructor(raw_obj) {
        this.type = 'Author';
        this.name = '';
        this.part_number = '';
        this.lang = '';
        this.build_major = '';
        this.build_minor = '';
        this.version_major = '';
        this.version_minor = '';
        if (raw_obj !== null) {
            this.name = raw_obj["Name"];
            this.lang = raw_obj["LangID"];
            this.part_number = raw_obj["PartNumber"];
            let build = raw_obj["Build"];
            let vers = build["Version"];
            this.version_major = vers["VersionMajor"];
            this.version_minor = vers["VersionMinor"];
            this.build_major = vers["BuildMajor"];
            this.build_minor = vers["BuildMinor"];
        }
    }
}
exports.Author = Author;
//# sourceMappingURL=author.js.map