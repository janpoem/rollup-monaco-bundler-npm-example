import { RollupMonacoBundler } from 'rollup-monaco-bundler';

const inputVer = process.env.VER;

const latestVer = '0.52.2';

const version =
  (inputVer != null && typeof inputVer === 'string' && inputVer.trim() !== '')
    ? inputVer
    : latestVer;

const bundler = new RollupMonacoBundler({
  srcDir: `tmp/${version}`,
  outputDir: `dist/${version}`,
});

export default bundler.entries.map(bundler.makeEntryOptions);
