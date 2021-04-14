"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timestamp = void 0;
class Timestamp {
    constructor(time_str) {
        this.date = new Date();
        this.epochMilliseconds = 0;
        this.time_str = time_str;
        try {
            this.date = new Date(time_str);
            this.epochMilliseconds = this.date.getTime();
        }
        catch (e) {
            console.log(e);
        }
    }
    isValid() {
        return this.epochMilliseconds > 0;
    }
    toString() {
        return "Timestamp: " + this.isValid() + ", " + this.time_str + ", " + this.date + ", " + this.epochMilliseconds;
    }
}
exports.Timestamp = Timestamp;
//# sourceMappingURL=ts.js.map