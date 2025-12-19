# Bold Heart Bullies (Fresh Restart)

## Pages included
- Home
- Available Puppies
- Breedings (Pending + Planned)
- Dams (with profile pages)
- Studs (Owned) (with profile page)
- Past Litters
- Contracts (important details + files)
- Contact
- Terms / Privacy

## What pictures go where (already wired)
- Logo: `public/assets/brand/logo.png`
- Home background: `public/assets/brand/hero_home.png`
- Turbo: `public/assets/dogs/studs/turbo/`
- Dams: `public/assets/dogs/dams/<name>/`
- Outside studs (Tyson, Rango): `public/assets/dogs/outside/<name>/`
- Past litter photos:
  - Dolla × Geronimo: `public/assets/past_litters/dolla_geronimo_2025/`
  - Lotty litter: `public/assets/past_litters/lotty_litter_1/`

## Local run
```bash
npm install
npm run dev
```

## GitHub Pages deploy (repo name: boldheartbullies)
This project is set for GitHub Pages at: `https://<your-username>.github.io/boldheartbullies/`

1) Build:
```bash
npm run build
```

2) Publish dist into /docs (Pages main/docs):
```bash
rm -rf docs
mkdir docs
cp -r dist/* docs/
cp docs/index.html docs/404.html
```

3) Commit + push.

4) GitHub → Settings → Pages:
- Source: Deploy from a branch
- Branch: main
- Folder: /docs
