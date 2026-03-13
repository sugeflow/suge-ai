# 苏格AI

苏格AI是 `sugeflow` 的作品展示站，用来集中呈现 AI 产品、自动化流程、创意界面与开放实验。

## 本地开发

```bash
npm install
npm run dev
```

默认开发地址通常是 `http://localhost:5173`。

## 构建与测试

```bash
npm run build
npm run test
```

## 部署

这个站点当前使用 Cloudflare Pages / Workers 静态资源部署，核心配置在 `wrangler.toml`。

- Cloudflare 项目名：`sugeflow-suge-ai`
- GitHub 主页链接：`https://github.com/sugeflow`
- 构建输出目录：`dist`

如果后续再修改 GitHub 用户名或仓库名，记得同时检查以下位置是否同步：

- `src/App.tsx`
- `src/data/projects.ts`
- `index.html`
- `wrangler.toml`
