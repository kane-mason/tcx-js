import { Activity } from "./activity";
export interface Options {
    [key: string]: any;
}
export declare type JsonValue = boolean | number | string | JsonObject | JsonArray;
export interface JsonArray extends Array<JsonValue> {
}
export interface JsonObject {
    [k: string]: JsonValue;
}
export declare const json: JsonObject;
export declare class Parser {
    static get VERSION(): string;
    activity: Activity;
    tcx_filename: string;
    constructor(infile: string, intcxstring?: string);
    convertXmlToJson(data: string): Object;
    sanitize(data: string): string;
    finish(): void;
}
