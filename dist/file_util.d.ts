export declare class FileUtil {
    exists(infile: string): boolean;
    getFilenames(path: string): string[];
    readText(infile: string): string;
    readLines(infile: string): string[];
    readParseJsonFile(infile: string): object;
    writeFile(outfile: string, text: string): void;
    writeJsonObject(outfile: string, obj: object): void;
}
