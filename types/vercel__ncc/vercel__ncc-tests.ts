import { default as ncc } from '@vercel/ncc';

const fullOptions = {
    cache: './custom/cache/path',
    externals: ['externalpackage'],
    filterAssetBase: '/some/path',
    minify: false,
    sourceMap: false,
    assetBuilds: false,
    sourceMapBasePrefix: '../',
    sourceMapRegister: true,
    watch: false,
    license: '',
    target: 'es2015',
    v8cache: false,
    quiet: false,
    debugLog: false,
};

// $ExpectType Promise<{ code: string; map: string; assets: { [key: string]: string; }; }>
ncc('filePath', fullOptions);

// $ExpectType Promise<{ code: string; map: string; assets: { [key: string]: string; }; }>
ncc('filePath', {});

// $ExpectType Promise<{ code: string; map: string; assets: { [key: string]: string; }; }>
ncc('filePath', {cache: false});
