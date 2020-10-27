import { Author } from "./author";
import { Creator } from "./creator";
import { Trackpoint } from "./trackpoint";
export declare class Activity {
    tcx_filename: string;
    activityId: string;
    sport: string;
    author: Author;
    creator: Creator;
    trackpoints: Trackpoint[];
    firstTrackpoint: Trackpoint | null;
    startingEpoch: number;
    parsedDate: string;
    constructor();
    addTrackpoint(tkpt: Trackpoint): void;
}
