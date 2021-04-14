export declare class ElapsedTime {
    static get MILLISECONDS_PER_SECOND(): number;
    static get SECONDS_PER_HOUR(): number;
    static get SECONDS_PER_MINUTE(): number;
    elapsedMs: number;
    secs: number;
    hh: number;
    mm: number;
    ss: number;
    constructor(elapsedMs: number);
    asHHMMSS(): string;
    private zeroPad;
}
