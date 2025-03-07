import { RollupMonacoBundler } from 'rollup-monaco-bundler';

const version = '0.50.0';
// const version = '0.52.2';

const bundler = new RollupMonacoBundler({
  srcDir: `tmp/${version}`,
  outputDir: `dist/${version}`,
});

export default bundler.entries.map(bundler.makeEntryOptions);
