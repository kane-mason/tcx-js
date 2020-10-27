export declare class ElapsedTime {
    static readonly MILLISECONDS_PER_SECOND: number;
    static readonly SECONDS_PER_HOUR: number;
    static readonly SECONDS_PER_MINUTE: number;
    elapsedMs: number;
    secs: number;
    hh: number;
    mm: number;
    ss: number;
    constructor(elapsedMs: number);
    asHHMMSS(): string;
    private zeroPad;
}
