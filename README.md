# Georgetown · Thrive Center — venture landing page

A single, self-contained landing page (`index.html`, inline CSS, no build, no JS, no
dependencies). Open it in a browser or drop it on any static host. Direction set by
JB's strategy call with Shai (June 2026) and the Georgetown visual identity.

## Strategy it implements

- **Georgetown is the brand, not "Studio."** People should feel they're *building a
  company with Georgetown's Thrive Center.* "Studio" is internal/admin language and
  is deliberately absent from the page. Brand = the **Georgetown · Thrive Center**
  co-brand lockup.
- **One page, sections, scroll, contact at the end.** Not a multi-page site.
- **Five-second test:** the hero says what we are, what we offer, and why credible.
- **"Properties," not "ideas."** The pitch is *you hold a trusted Georgetown property
  — a model, evidence base, or recognized expertise — and we help turn it into a
  business, built through the system, not against it.* Generic "we de-risk / validate
  / go faster" is dropped (every studio says it).
- **Proof:** Attunify as proof the model works (live, 267 enrolled, invited to speak
  early, $0 VC) + the SAMHSA Center of Excellence + ~30 years. Quality over quantity.
- **Audiences:** property-holders + operators (operators weighted — the harder
  recruit), into one contact.

## Brand (from the Georgetown Visual Identity)

- **Colors:** Georgetown Blue `#041E42` (dominant) + Gray `#63666A`; secondary
  `#012169` / `#003DA5` and bright `#00B5E2`; warm stone `#D6D2C4`. All from the
  official palette (georgetown.edu/color-guide).
- **Type (open substitutes):** **Jost** ≈ Futura PT (headings/UI), **Libre Caslon**
  ≈ Adobe Caslon (editorial serif). Loaded from Google Fonts.

## Before launch — must-do brand items

1. **Official logo lockup.** The header/footer lockup here is a *typographic
   approximation*. The real Georgetown + unit lockup must come through Georgetown's
   **joint brand-mark request form** (linked from georgetown.edu/visual-identity).
2. **Exact fonts.** For a pixel match, license **Futura PT** + **Adobe Caslon**, or
   apply the **Thrive Center style guide** (the Georgetown-blue-adapted one Shai
   referenced — not in this repo yet).
3. **Domain.** Stand it up on its own domain (per Shai — for speed/flexibility) and
   link it from the main Thrive site. Not on `georgetown.edu`.
4. **Contact form** is stubbed (doesn't send) — wire to the chosen provider.

## Prior versions

`_archive_v2/` holds the earlier multi-page, theme-toggle site (9 pages + 3 visual
themes). Superseded by this single Georgetown-branded page; kept for reference.

## Edit

Everything (markup + styles) is in `index.html`. Colors and fonts are CSS variables
at the top of the `<style>` block.
