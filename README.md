# Furbox

---

## Structure

- `src` - Source code
  - `lib` - Contains reusable functions and components
  - `routes` - Each route has its own folder with a required field `+page.svelte`
- `static` - Static files
- `app.css` - Global styles (only use when you need them globally, else use style tag in svelte files)
- `app.html` - Main HTML file (only use when you need to add meta tags, else use svelte:head tag in svelte files)
- `app.d.ts` - Typescript definitions

## Running

Install [pnpm](https://pnpm.io/) and use latest lts version of Node.js with `pnpm env use --global lts`

```bash
pnpm install
```

```bash
pnpm run dev
```
