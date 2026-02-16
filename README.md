# Bootcamp Website

A Next.js 16 site styled with Tailwind CSS and Radix UI components.

## Local Development

```bash
pnpm install
pnpm run dev
```

## Production Build

The project is configured for static output via `output: 'export'` in `next.config.mjs`. Running the standard build command emits the production site into `out/`.

```bash
pnpm run build
```

## Deploying to Netlify

1. Ensure dependencies are installed locally (`pnpm install`).
2. Connect the repository to Netlify (UI or `netlify init`).
3. Use the following settings when prompted:
   - **Build command**: `pnpm run build`
   - **Publish directory**: `out`
   - **Node version**: `20`
4. Commit and push changes; Netlify will build and deploy the static output. For manual previews you can run `netlify deploy --build` and publish the generated draft or production deployment.

Add any required environment variables inside Netlify’s dashboard if future features need them.

## Contact Form Handling

- The form in `components/contact-form.jsx` is wired to [Netlify Forms](https://docs.netlify.com/forms/setup/) using the `data-netlify` attributes and a honeypot field.
- After each deployment Netlify will surface submissions in the dashboard under **Forms** → **contact-form**; enable email/slack notifications there if desired.
- Remember to purge submissions that you no longer need to keep personal data retention low.
