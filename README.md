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

## Editing Links

All editable brand links live in:

```text
src/data/brandContent.js
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

1. Push this project to GitHub.
2. Import the repo into Vercel or Netlify.
3. Use the default build command: `npm run build`.
4. Use the default output folder: `dist`.
5. Deploy the page first.

## Generating the QR

1. Copy the final live URL after deployment.
2. Generate a QR code from that live URL.
3. Keep the QR black on white or very high contrast.
4. Leave a clean white quiet zone around the QR.
5. Do not place the QR on a busy background.
6. Do not put a huge logo inside the QR.
7. Test the QR on multiple phones before printing.
8. Use that QR on the physical card, sticker, poster, or Instagram story.

The QR should point to this landing page, not directly to Instagram, so links can be updated later without reprinting the QR.

## Visual Asset

The generated cinematic hero image is stored at:

```text
public/hippie-sanpaku-visual-world.png
```

It is intentionally text-free, so it can sit behind the brand copy without creating incorrect details.
