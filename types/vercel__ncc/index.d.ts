// Type definitions for @vercel/ncc 0.36
// Project: https://github.com/vercel/ncc#readme
// Definitions by: Mirco Hacker <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default function(
    filepath: string,
    options: NccOptions,
): Promise<{
    code: string;
    map: string;
    assets: { [key: string]: string };
}>;

export interface NccOptions {
    cache?: string | false;
    externals?: string[];
    filterAssetBase?: string;
    minify?: boolean;
    sourceMap?: boolean;
    assetBuilds?: boolean;
    sourceMapBasePrefix?: string;
    sourceMapRegister?: boolean;
    watch?: boolean;
    license?: string;
    target?: string;
    v8cache?: boolean;
    quiet?: boolean;
    debugLog?: boolean;
}
