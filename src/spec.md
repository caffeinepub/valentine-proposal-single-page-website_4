# Specification

## Summary
**Goal:** Make the top-of-page personal photo on the Valentine proposal page reliably display the intended static image asset, and show a clear fallback message if it can’t be loaded.

**Planned changes:**
- Fix the frontend static asset reference/serving so `/assets/generated/personal-photo.dim_1600x1600.png` is available in build/deploy and loads with HTTP 200.
- Add client-side error handling for the personal photo element to render an in-frame English fallback state when the image fails to load (instead of an empty/broken placeholder).
- Audit the Valentine proposal page UI to ensure there is no in-app upload or upload preview flow, and that only the fixed static personal photo is shown at the top.

**User-visible outcome:** On page load, the top photo frame shows the personal photo; if the asset can’t be loaded, the frame displays a readable English “photo unavailable” fallback instead of a broken/empty placeholder.
