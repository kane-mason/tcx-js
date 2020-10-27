export declare class Timestamp {
    time_str: string;
    date: Date;
    epochMilliseconds: number;
    constructor(time_str: string);
    isValid(): boolean;
    toString(): string;
}
