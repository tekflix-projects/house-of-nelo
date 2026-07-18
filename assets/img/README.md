# Images

Drop real project photography here as the portfolio grows, then swap the CSS
placeholder tiles (`<div class="ph …">`) for real `<img>` tags.

## How to replace a placeholder with a real photo

Find markup like this in a page:

```html
<div class="frame frame--tall">
  <div class="ph ph--d" data-label="Maitama Residence"></div>
</div>
```

Replace the inner `<div class="ph …">` with an image:

```html
<div class="frame frame--tall">
  <img src="assets/img/maitama-residence.jpg" alt="Maitama Residence living room" />
</div>
```

## Recommendations
- **Format:** `.webp` or optimized `.jpg` (keep each under ~400 KB).
- **Sizing:** ~1600px on the long edge is plenty for a web portfolio.
- **Naming:** lowercase, hyphenated, descriptive — `lagos-terracotta-kitchen.jpg`.
- **Aspect ratios:** the frames handle cropping (`frame--tall` = 3:4, `frame--wide` = 4:3, `frame--sq` = 1:1).
- The lightbox will automatically use the real image once it's an `<img>`.
