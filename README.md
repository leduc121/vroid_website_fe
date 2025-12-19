# V-MARKET (VRoid Assets Marketplace)

Production deployment: GitHub Pages via GitHub Actions

## Branches
- `main`: deploys to GitHub Pages on every push
- `duc`: development branch, auto-merged to `main` on push

## Workflows
- `.github/workflows/merge-duc-to-main.yml`: merges `duc` into `main`
- `.github/workflows/deploy.yml`: builds and deploys to Pages

## Local development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
