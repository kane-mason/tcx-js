import { JsonObject } from "./tcx";
export declare class Creator {
    type: string;
    name: string;
    product_id: string;
    unit_id: string;
    build_major: string;
    build_minor: string;
    version_major: string;
    version_minor: string;
    constructor(raw_obj: JsonObject | null);
}
