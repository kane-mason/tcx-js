"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const xml2js = require("xml2js");
const activity_1 = require("./activity");
const author_1 = require("./author");
const creator_1 = require("./creator");
const trackpoint_1 = require("./trackpoint");
exports.json = {};
class Parser {
    constructor(infile, intcxstring) {
        this.activity = new activity_1.Activity();
        this.tcx_filename = '';
        this.tcx_filename = infile;
        this.activity.tcx_filename = infile;
        let tcx_xml_str = intcxstring ? intcxstring : fs.readFileSync(infile).toString();
        let root_obj = this.convertXmlToJson(tcx_xml_str);
        let tcdb = root_obj["TrainingCenterDatabase"];
        let tcdb_file = this.tcx_filename + ".json";
        let activities = tcdb["Activities"];
        let activity = activities["Activity"];
        this.activity.activityId = activity["Id"];
        try {
            let activityDollar = activity["$"];
            this.activity.sport = activityDollar["Sport"];
        }
        catch (e) {
            console.log(e);
        }
        try {
            let author_data = tcdb["Author"];
            this.activity.author = new author_1.Author(author_data);
        }
        catch (e) {
        }
        try {
            let creator_data = activity["Creator"];
            this.activity.creator = new creator_1.Creator(creator_data);
        }
        catch (e) {
        }
        let lapObj = activity["Lap"];
        let tkpt_seq = 0;
        if (Array.isArray(lapObj)) {
            let laps = activity["Lap"];
            let lap_count = laps.length;
            for (var i = 0; i < lap_count; i++) {
                let curr_lap = laps[i];
                let curr_track = curr_lap["Track"];
                let curr_tkpts = curr_track["Trackpoint"];
                let curr_tkpt_length = curr_tkpts.length;
                for (var t = 0; t < curr_tkpt_length; t++) {
                    tkpt_seq++;
                    let tkpt_data = curr_tkpts[t];
                    this.activity.addTrackpoint(new trackpoint_1.Trackpoint(tkpt_data, tkpt_seq));
                }
            }
        }
        else {
            let curr_lap = lapObj;
            let curr_track = curr_lap["Track"];
            let curr_tkpts = curr_track["Trackpoint"];
            let curr_tkpt_length = curr_tkpts.length;
            for (var t = 0; t < curr_tkpt_length; t++) {
                tkpt_seq++;
                let tkpt_data = curr_tkpts[t];
                this.activity.addTrackpoint(new trackpoint_1.Trackpoint(tkpt_data, tkpt_seq));
            }
        }
        let startingEpoch = this.activity.startingEpoch;
        for (var i = 0; i < this.activity.trackpoints.length; i++) {
            this.activity.trackpoints[i].addAltitudeFeet();
            this.activity.trackpoints[i].addDistances();
            this.activity.trackpoints[i].calculateElapsed(startingEpoch);
            this.activity.trackpoints[i].addGeoJson();
            this.activity.trackpoints[i].cleanup();
        }
        this.activity.firstTrackpoint = null;
    }
    static get VERSION() { return "1.0.1"; }
    convertXmlToJson(data) {
        let res = {};
        xml2js.parseString(data, { explicitArray: false }, (error, result) => {
            if (error) {
                throw new Error(error);
            }
            else {
                res = result;
            }
        });
        return res;
    }
    finish() {
    }
}
exports.Parser = Parser;
//# sourceMappingURL=parser.js.map