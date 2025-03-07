# rollup-monaco-bundler-npm-example

项目基于 [rollup-monaco-bundler](https://github.com/janpoem/rollup-monaco-bundler) 

调整使用 pnpm，npm 的 peer-deps 实在是麻烦。

```bash
pnpm install

# 下载依赖包
download-monaco -v 0.52.2
# 或者使用
pnpm run download

# 构建 monaco-editor umd 包
pnpm run build

# 启动 webpack 验证
pnpm run server
```

然后浏览器访问 http://localhost:8080/ （0.52.2）

如果要构建多个版本，请参考以下：

```bash
# 下载依赖包
download-monaco -v 0.50.0
```

修改 `rollup.config.js` 里面的版本，再次执行 `npm run build` 构建对应的版本（输出到 `dist/0.50.0`）。

然后浏览器访问 http://localhost:8080/index2.html （0.50.0）
