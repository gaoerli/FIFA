# 前端基于 FIS3 的工程母板

## 环境要求

要求 Node.js v4.0 及以上。

## 安装

工程取消了原有的全局安装，所有依赖均在本地。进入工程目录，使用以下命令安装：

```node
npm i
```

或

```node
yarn
```

> 如遇网络环境不稳定，建议安装 `nrm`, 切换仓库后重试。执行安装 `npm i -g nrm` 或 `yarn global add nrm`。[查看手册](https://yarnpkg.com/zh-Hans/package/nrm)

## 运行

### 启动

使用 `npm run server:start` 或 `yarn server:start` 启动开发服务器，默认运行于 [http://127.0.0.1:8080/]() 和 [http://\[本机 IP\]:8080/]() .

FIS3 内置的 Server 会在后台**常驻**，直到重启计算机或者调用命令关闭。所以，后续不需要每次 release 就启动一次 server。

### 停止

使用 `npm run server:stop` 或 `yarn server:stop` 停止开发服务器。

### 预览及监听

使用 `npm run start` 或 `yarn start` 启动监听。

### 发布

使用 `npm run build` 或 `yarn build` 将产出输出至 `./docs` 文件夹。推送至 `github` 后，`./docs` 文件夹将用于生成 `Github Pages` .

### IDE 集成

假设你正在使用 [VS Code](https://code.visualstudio.com/) .

* 安装 Prettier.

  在 `用户设置` 中启用自动保存，及保存时自动格式化。

  ```json
    "files.autoSave": "onFocusChange",
    "editor.formatOnSave": true,
    "javascript.format.enable": false // JavaScript 格式化将由 ESLint 接管。
  ```

* 安装 ESLint, 以启用 JavaScript 语法检查，及自动格式化。将使用 Prettier 配置。修改 `用户设置`：

  ```json
    "eslint.autoFixOnSave": true,
    "eslint.alwaysShowStatus": true,
    "eslint.enable": true,
    "eslint.packageManager": "yarn"
  ```

VS Code 有很多高效设置，[了解更多](https://github.com/Microsoft/vscode-tips-and-tricks)。
