# shared/constants

Stage 03 emits `tokens.ts` here — the single canonical source of design values
(colors, fonts, spacing, durations, easings) for all generated code.

Stage 04 imports every design value from this file. If a component in the built
site contains a hardcoded hex color or ms duration, that is a stage 04 audit
failure.

Human workflow: to retune the site's look, edit `_config/design-tokens.md`,
re-run stage 03 (regenerates tokens.ts), then re-run stage 04.
