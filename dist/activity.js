"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const author_1 = require("./author");
const creator_1 = require("./creator");
const trackpoint_1 = require("./trackpoint");
class Activity {
    constructor() {
        this.tcx_filename = "";
        this.activityId = "";
        this.sport = "";
        this.trackpoints = new Array();
        this.firstTrackpoint = new trackpoint_1.Trackpoint({}, 0);
        this.startingEpoch = 0;
        this.parsedDate = new Date().toISOString();
        this.sport = "";
        this.author = new author_1.Author(null);
        this.creator = new creator_1.Creator(null);
    }
    addTrackpoint(tkpt) {
        this.trackpoints.push(tkpt);
        if (this.trackpoints.length === 1) {
            this.firstTrackpoint = tkpt;
            this.startingEpoch = tkpt.epoch_ms;
        }
    }
}
exports.Activity = Activity;
//# sourceMappingURL=activity.js.map