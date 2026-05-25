# Hippie Films x Sanpaku QR Landing Page

A mobile-first React landing page for Tal Ben David's connected creative brands, built as a high-end QR business card and mini portfolio destination.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production output is generated in `dist/`, ready for Vercel, Netlify, or any static hosting provider.

Live GitHub Pages URL:

```text
https://albenda.github.io/Hippie-Films/
```

## Editing Links

All editable brand links live in:

```text
src/data/brandContent.js
```

For Tal / collaborator editing, see:

```text
EDITING_GUIDE_FOR_TAL.md
```

Current contact values taken from the supplied business card:

- WhatsApp / phone: `058-69-22222` (`https://wa.me/972586922222`)
- Email: `Hippiefilmspro@gmail.com`

Missing information to fill later:

- Confirm phone and email are final before public launch
- Final website / portfolio link, if it exists
- Logo or profile image
- Final decision: English only or Hebrew + English

## Deploying

### GitHub Pages

This repo is configured to deploy through GitHub Actions:

```text
.github/workflows/deploy.yml
```

The GitHub Pages source should be set to **GitHub Actions**.

### Vercel / Netlify Alternative

1. Import the repo into Vercel or Netlify.
2. Use the default build command: `npm run build`.
3. Use the default output folder: `dist`.

## Generating the QR

1. Copy the final live URL after deployment.
2. Generate a QR code from that live URL.
3. Keep the QR black on white or very high contrast.
4. Leave a clean white quiet zone around the QR.
5. Do not place the QR on a busy background.
6. Do not put a huge logo inside the QR.
7. Test the QR on multiple phones before printing.
8. Use that QR on the physical card, sticker, poster, or Instagram story.

Permanent print QR files have been generated for the live GitHub Pages URL:

```text
exports/qr/Hippie-Films-PERMANENT-PRINT-QR.png
exports/qr/Hippie-Films-PERMANENT-PRINT-QR.svg
```

They point to:

```text
https://albenda.github.io/Hippie-Films/
```

The QR should point to this landing page, not directly to Instagram, so links can be updated later without reprinting the QR.

## Visual Asset

The generated realistic moon visual is stored at:

```text
public/realistic-moon.png
```

The older generated cinematic hero image is also kept at:

```text
public/hippie-sanpaku-visual-world.png
```

It is intentionally text-free, so it can sit behind the brand copy without creating incorrect details.
