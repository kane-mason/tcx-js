"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElapsedTime = void 0;
class ElapsedTime {
    constructor(elapsedMs) {
        this.secs = 0;
        this.hh = 0;
        this.mm = 0;
        this.ss = 0;
        this.elapsedMs = Math.abs(elapsedMs);
        this.secs = Math.round(this.elapsedMs / ElapsedTime.MILLISECONDS_PER_SECOND);
        this.hh = Math.floor(this.secs / ElapsedTime.SECONDS_PER_HOUR);
        let rem = this.secs - (this.hh * ElapsedTime.SECONDS_PER_HOUR);
        this.mm = Math.floor(rem / 60.0);
        this.ss = rem - (this.mm * 60.0);
        if (this.mm > 59) {
            console.log("ElapsedTime mm normalized to 59 - " + this.mm);
            this.mm = 59;
        }
        if (this.ss > 59) {
            console.log("ElapsedTime ss normalized to 59 - " + this.ss);
            this.ss = 59;
        }
    }
    static get MILLISECONDS_PER_SECOND() { return 1000.0; }
    static get SECONDS_PER_HOUR() { return 3600.0; }
    static get SECONDS_PER_MINUTE() { return 60.0; }
    asHHMMSS() {
        return this.zeroPad(this.hh) + ":" + this.zeroPad(this.mm) + ":" + this.zeroPad(this.ss);
    }
    zeroPad(i) {
        if (i < 10) {
            return "0" + i;
        }
        else {
            return "" + i;
        }
    }
}
exports.ElapsedTime = ElapsedTime;
//# sourceMappingURL=etime.js.map