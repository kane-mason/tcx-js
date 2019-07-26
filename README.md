## tcx-js

### Purpose

A Node.js library for parsing TCX/XML files, such as from a Garmin GPS device.

Optionally provides additional calculated Trackpoint fields.

### Examples

#### Setup

Add tcx-js to your project or package.json file:
```
npm install tcx-js
```

Require tcx-js in your code:
```
tcx = require("tcx-js")
```

#### Parse a TCX file from Garmin Connect - JavaScript example

Parsing elapsed time is typically sub-second, even for a marathon run.
The tcx-js Parser uses the 'node-expat' library, and the SAX API, for speed and performance.

Note: this library is implemented with CoffeeScript, and these examples are also in CoffeeScript.

```
var infile = "data/activity_twin_cities_marathon.tcx"
var parser = new tcx.Parser(infile);
var activity = parser.activity;
var creator = activity.creator;
var author = activity.author;
var trackpoints = activity.trackpoints;
```

"creator" is the device that recorded the data

```
console.log(JSON.stringify(creator, null, 2)) ->
{
  "type": "Creator",
  "name": "Garmin Forerunner 620",
  "product_id": "1623",
  "unit_id": "3875991210",
  "build_major": "0",
  "build_minor": "0",
  "version_major": "3",
  "version_minor": "0"
}
```

"author" is what created the tcx/xml file

```
console.log(JSON.stringify(author, null, 2)) ->
{
  "type": "Author",
  "name": "Garmin Connect API",
  "part_number": "006-D2449-00",
  "lang": "en",
  "build_major": "0",
  "build_minor": "0",
  "version_major": "14",
  "version_minor": "10"
}
```

"trackpoints" is an Array of the recorded data points

```
console.log(trackpoints.length) -> 2256

console.log(JSON.stringify(trackpoints[0], null, 2)) ->
{
  "doctype": "trackpoint",
  "time": "2014-10-05T13:07:53.000Z",
  "seq": 1,
  "latitude": 44.97431952506304,
  "longitude": -93.26310088858008,
  "altitude_meters": 257,
  "altitude_feet": 843.1758530183727,
  "distance_meters": 0,
  "distance_miles": 0,
  "distance_km": 0,
  "distance_yds": 0,
  "heart_rate_bpm": 85,
  "speed": 0,
  "cadence": 89,
  "location": {
    "type": "Point",
    "coordinates": [
      -93.26310088858008,
      44.97431952506304
    ]
  },
  "elapsed_sec": 0,
  "elapsed_hhmmss": "00:00:00",
  "epoch_ms": 1412514473000
}

console.log(JSON.stringify(trackpoints[trackpoints.length - 1], null, 2)) ->
{
  "doctype": "trackpoint",
  "time": "2014-10-05T17:22:17.000Z",
  "seq": 2256,
  "latitude": 44.95180849917233,
  "longitude": -93.10493202880025,
  "altitude_meters": 260,
  "altitude_feet": 853.018372703412,
  "distance_meters": 42635.44921875,
  "distance_miles": 26.492439912628996,
  "distance_km": 42.63544921875,
  "distance_yds": 46626.69424622703,
  "heart_rate_bpm": 161,
  "speed": 3.5460000038146977,
  "cadence": 77,
  "location": {
    "type": "Point",
    "coordinates": [
      -93.10493202880025,
      44.95180849917233
    ]
  },
  "elapsed_sec": 15264,
  "elapsed_hhmmss": "04:14:24",
  "epoch_ms": 1412529737000
}
```

#### Parse a TCX file from Garmin Connect - TypeScript example

```
import * as fs from "fs";

import { Parser }     from "tcx";
import { Activity }   from "tcx";
import { Author }     from "tcx";
import { Creator }    from "tcx";
import { Trackpoint } from "tcx";

...

var infile  = process.argv[2];
var outfile = process.argv[3];

var parser :   Parser   = new Parser(infile);
var activity : Activity = parser.activity;
var creator :  Creator  = activity.creator;
var author :   Author   = activity.author;
var trackpoints : Trackpoint[] = activity.trackpoints;

var jstr : string = JSON.stringify(parser.activity, (key, value) => {
    if (value !== null) {
        return value;
    }
}, 2);
fs.writeFileSync(outfile, jstr);

```

### Release History

* 2019-07-26  v1.0.0  Library rewritten in TypeScript.
* 2014-11-09  v0.1.2  Added optional calculated Trackpoint fields 'elapsed_sec' and 'elapsed_hhmmss'.
* 2014-11-09  v0.1.1  Added optional calculated Trackpoint fields 'alt_feet' and 'dist_miles'.
* 2014-11-09  v0.1.0  Initial working version.
* 2014-11-09  v0.0.1  alpha 1
