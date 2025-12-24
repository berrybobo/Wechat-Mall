# Repository Guidelines

## Project Structure & Module Organization
- Root config: `app.js`, `app.json`, `app.wxss`, `project.config.json`, `project.private.config.json`, `sitemap.json`.
- Pages live in `pages/<name>/<name>.{js,wxml,wxss}[.json]`.
  Examples: `pages/index`, `pages/product`, `pages/checkout`, `pages/order-success`.
- Shared data/helpers: `utils/data.js`. Prices are stored in cents; use a formatter (e.g., `formatPrice`) before display (see `pages/index/index.js`).

## Build, Test, and Development
- Run locally with WeChat Developer Tools: Import the project root, then the Simulator auto-reloads on save (`Ctrl+R` to rebuild). Use Preview to test on device.
- No npm install/build steps in this repo.

## Coding Style & Naming Conventions
- JavaScript: ES6 modules, 2-space indent, semicolons, `camelCase` for vars/functions.
- Pages and CSS classes use `kebab-case`. Filenames mirror the folder (e.g., `pages/order-success/order-success.js`).
- JSON uses double quotes; WXML attributes use double quotes.

## Testing Guidelines
- Manual smoke flow: Home → Product → Checkout → Order Success.
  Verify price formatting (`price/100` with two decimals), navigation works, and state persists between pages.
- Use DevTools: Preview for device; Debugger/Console for errors; simulate offline/slow network in Network panel.

## Commit & Pull Request Guidelines
- Commits: short, imperative; prefer Conventional Commits (`feat:`, `fix:`, `chore:`) with optional scope.
  Example: `feat(checkout): format price and add success page`.
- PRs: include a clear description, linked issues, before/after screenshots of affected pages, and a short test plan.
  Keep PRs focused; do not commit `project.private.config.json` or change the `appid` without discussion.

## Security & Configuration Tips
- Do not commit secrets. `project.private.config.json` is machine-specific.
- `project.config.json` holds app settings; call out any changes in your PR description.
- 本项目请始终用中文跟用户交流
