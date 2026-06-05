# Merrill Foods — Brand Mark

A combination mark: an **"M" monogram** whose center valley sprouts a **gold leaf**
(growth + specialty food, drawn from the letterform's negative space), paired with a
refined serif wordmark — "Merrill" dominant, "FOODS" tracked and secondary.

## Files
| File | Use |
|------|-----|
| `logo-full-color.svg` | Primary lockup (forest M, gold leaf, espresso/green wordmark) on light backgrounds |
| `logo-reversed.svg`   | White-on-dark version for the forest field, photos, dark UI |
| `logo-monochrome.svg` | Single-ink version for stamps, embossing, faxable/1-color print |
| `favicon.svg`         | Icon alone in a rounded "crate" tile — favicon / app icon / social avatar |
| `preview.html`        | Open in a browser to see all versions + palette |

## Palette
- Forest green `#1F3D2B`
- Warm gold / amber `#C8902F`
- Espresso brown `#2E211A`
- Cream / off-white `#F5EFE2`

## Notes
- **Flat only** — no gradients, shadows, or 3D, per brief.
- **Clear space:** keep at least the height of the leaf clear on all sides.
- **Min sizes:** full lockup ≥ 120px wide; icon ≥ 16px.
- **Fonts:** the wordmark uses a serif stack (Cormorant Garamond → Playfair Display →
  Georgia). For final/portable assets, **convert the text to outlines** so rendering
  is identical everywhere. To outline with Inkscape:
  `inkscape logo-full-color.svg --export-text-to-path --export-plain-svg=logo-outlined.svg`
- Need PNGs? e.g. `inkscape favicon.svg -w 512 -h 512 -o favicon-512.png`
