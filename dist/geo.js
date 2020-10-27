"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GeoJsonLocation {
    constructor(latitude, longitude) {
        this.type = 'Point';
        this.coordinates = [longitude, latitude];
    }
}
exports.GeoJsonLocation = GeoJsonLocation;
//# sourceMappingURL=geo.js.map