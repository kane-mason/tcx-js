"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Creator = void 0;
class Creator {
    constructor(raw_obj) {
        this.type = 'Creator';
        this.name = '';
        this.product_id = '';
        this.unit_id = '';
        this.build_major = '';
        this.build_minor = '';
        this.version_major = '';
        this.version_minor = '';
        if (raw_obj !== null) {
            this.name = raw_obj["Name"];
            this.unit_id = raw_obj["UnitId"];
            this.product_id = raw_obj["ProductID"];
            let vers = raw_obj["Version"];
            this.version_major = vers["VersionMajor"];
            this.version_minor = vers["VersionMinor"];
            this.build_major = vers["BuildMajor"];
            this.build_minor = vers["BuildMinor"];
        }
    }
}
exports.Creator = Creator;
//# sourceMappingURL=creator.js.map