"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeoJsonLocation = void 0;
class GeoJsonLocation {
    constructor(latitude, longitude) {
        this.type = 'Point';
        this.coordinates = [longitude, latitude];
    }
}
exports.GeoJsonLocation = GeoJsonLocation;
//# sourceMappingURL=geo.js.map