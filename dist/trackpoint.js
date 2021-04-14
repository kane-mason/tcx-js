"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trackpoint = void 0;
const geo_1 = require("./geo");
const etime_1 = require("./etime");
const ts_1 = require("./ts");
class Trackpoint {
    constructor(raw_obj, sequence) {
        this.doctype = 'trackpoint';
        this.time = null;
        this.seq = null;
        this.latitude = 0;
        this.longitude = 0;
        this.altitude_meters = null;
        this.altitude_feet = null;
        this.distance_meters = 0;
        this.distance_miles = null;
        this.distance_km = null;
        this.distance_yds = null;
        this.heart_rate_bpm = null;
        this.speed = null;
        this.cadence = null;
        this.watts = null;
        this.location = null;
        this.elapsed_sec = null;
        this.elapsed_hhmmss = null;
        this.epoch_ms = -1;
        this.seq = sequence;
        this.epoch_ms = -1;
        let keys = Object.keys(raw_obj);
        if (keys.includes("Time")) {
            this.time = raw_obj["Time"];
        }
        else {
            this.time = Trackpoint.DEFAULT_EPOCH_TIMESTAMP_STRING;
        }
        try {
            let ts = new ts_1.Timestamp(this.time);
            this.epoch_ms = ts.epochMilliseconds;
        }
        catch (e) {
            console.log(e);
        }
        if (keys.includes("Position")) {
            try {
                let position = raw_obj["Position"];
                this.latitude = Number(position["LatitudeDegrees"]);
                this.longitude = Number(position["LongitudeDegrees"]);
            }
            catch (e) {
                console.log(e);
            }
        }
        if (keys.includes("AltitudeMeters")) {
            this.altitude_meters = Number(raw_obj["AltitudeMeters"]);
        }
        if (keys.includes("DistanceMeters")) {
            this.distance_meters = Number(raw_obj["DistanceMeters"]);
        }
        if (keys.includes("HeartRateBpm")) {
            try {
                let hr = raw_obj["HeartRateBpm"];
                this.heart_rate_bpm = Number(hr["Value"]);
            }
            catch (e) {
                console.log(e);
            }
        }
        if (keys.includes("Cadence")) {
            this.cadence = Number(raw_obj["Cadence"]);
        }
        if (keys.includes("Extensions")) {
            try {
                let ext = raw_obj["Extensions"];
                let ext_keys = Object.keys(ext);
                if (ext_keys.includes("TPX")) {
                    let tpx = ext["TPX"];
                    let tpx_keys = Object.keys(tpx);
                    if (tpx_keys.includes("Speed")) {
                        this.speed = Number(tpx["Speed"]);
                    }
                    if (tpx_keys.includes("RunCadence")) {
                        this.cadence = Number(tpx["RunCadence"]);
                    }
                    if (tpx_keys.includes("Watts")) {
                        this.watts = Number(tpx["Watts"]);
                    }
                }
            }
            catch (e) {
                console.log(e);
            }
        }
    }
    static get DEFAULT_EPOCH_TIMESTAMP_STRING() { return "1970-01-01T00:00:00.000Z"; }
    static get MILES_PER_KILOMETER() { return 0.621371192237334; }
    static get YARDS_PER_MILE() { return 1760.0; }
    static get FEET_PER_METER() { return 3.280839895013123; }
    addAltitudeFeet() {
        if (this.altitude_meters) {
            try {
                this.altitude_meters = Number(this.altitude_meters);
                this.altitude_feet = this.altitude_meters * Trackpoint.FEET_PER_METER;
            }
            catch (e) {
                console.log(e);
            }
        }
    }
    addDistances() {
        if (this.distance_meters !== null) {
            try {
                this.distance_km = this.distance_meters / 1000.0;
                this.distance_miles = this.distance_km * Trackpoint.MILES_PER_KILOMETER;
                this.distance_yds = this.distance_miles * Trackpoint.YARDS_PER_MILE;
            }
            catch (e) {
                console.log(e);
            }
        }
    }
    calculateElapsed(startingEpoch) {
        let elapsedMs = this.epoch_ms - startingEpoch;
        let et = new etime_1.ElapsedTime(elapsedMs);
        this.elapsed_sec = et.secs;
        this.elapsed_hhmmss = et.asHHMMSS();
    }
    addGeoJson() {
        try {
            let lat = this.latitude;
            let lng = this.longitude;
            this.location = new geo_1.GeoJsonLocation(lat, lng);
        }
        catch (e) {
            console.log(e);
        }
    }
    cleanup() {
    }
}
exports.Trackpoint = Trackpoint;
//# sourceMappingURL=trackpoint.js.map