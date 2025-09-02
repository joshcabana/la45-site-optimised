# LA45 Optimisation Patch
Changes applied:
- Added **tailwind.config.js** with brand tokens (ink/paper/gold), fluid typography, container paddings.
- Ensured **app/globals.css** includes Tailwind layers and base brand styles + safe-area utilities.
- Converted PNG/JPG images in **/public** to **.webp** (lossy quality ~82) and left originals in place.
- Tweaked **next.config.mjs** to enable modern image formats and long cache TTL (if not already present).

## Local run
1. Ensure deps are installed: `npm i` or `yarn`
2. Dev: `npm run dev`
3. Prod build: `npm run build && npm run start`

No extra plugins required.
