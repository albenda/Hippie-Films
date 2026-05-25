# Hippie Films - Editing Guide for Tal

This project is the live QR landing page for Hippie Films:

```text
https://albenda.github.io/Hippie-Films/
```

The GitHub repository is:

```text
https://github.com/albenda/Hippie-Films
```

## How Access Works

Alon can invite Tal as a collaborator in GitHub:

1. Open the repository on GitHub.
2. Go to `Settings`.
3. Go to `Collaborators`.
4. Click `Add people`.
5. Search for Tal's GitHub username or email.
6. Send the invitation.
7. Tal accepts the invitation from email or GitHub notifications.

After accepting, Tal can edit files and push changes to the repository.

## Easy Browser Editing

Tal can edit directly in the browser:

1. Open `https://github.com/albenda/Hippie-Films`.
2. Press the `.` key on the keyboard.
3. GitHub opens a VS Code-style editor in the browser.
4. Edit files.
5. Commit changes.

Every push to `main` triggers GitHub Actions and updates the live site.

## Main Files to Edit

### Text, Links, Phone, Email

Edit:

```text
src/data/brandContent.js
```

This file contains:

- brand text
- phone and WhatsApp link
- email
- social links
- service text
- small detail tags

### Page Layout and Design

Edit:

```text
src/App.jsx
src/styles.css
```

Use these for:

- layout changes
- section order
- buttons
- animations
- colors
- spacing
- moon and star feel

### Images

Put image files inside:

```text
public/
```

Current key images:

```text
public/realistic-moon.png
public/hippie-sanpaku-visual-world.png
```

If a new image is added to `public/`, reference it from React with:

```js
assetPath('your-image-name.png')
```

## Before Printing a New Card

The current permanent QR points to:

```text
https://albenda.github.io/Hippie-Films/
```

Do not replace the printed QR unless the public URL changes.

Current print QR files:

```text
exports/qr/Hippie-Films-PERMANENT-PRINT-QR.png
exports/qr/Hippie-Films-PERMANENT-PRINT-QR.svg
```

## Safer Workflow

For small text/image edits, committing directly to `main` is fine if Tal is comfortable.

For bigger design changes:

1. Create a branch.
2. Make the design changes.
3. Open a pull request.
4. Review on GitHub.
5. Merge when it looks right.

This keeps the live QR page stable while experimenting.
