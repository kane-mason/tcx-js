import { JsonObject } from "./tcx";
export declare class Author {
    type: string;
    name: string;
    part_number: string;
    lang: string;
    build_major: string;
    build_minor: string;
    version_major: string;
    version_minor: string;
    constructor(raw_obj: JsonObject | null);
}
