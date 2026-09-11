// Measured directly from PageSpeed Insights against the live production site
// (https://ismaeljarias.com/) — report captured Sep 11, 2026, 4:01:08 PM.
// Mobile: Performance 100, FCP 0.9s, LCP 1.4s, TBT 0ms, CLS 0.017, Speed Index 1.0s.
// Desktop: Performance 100, FCP 0.2s, LCP 0.2s, TBT 0ms, CLS 0.017, Speed Index 0.3s.
// Mobile numbers are used below (the harder constraint, and what PageSpeed
// Insights shows by default). Re-run at https://pagespeed.web.dev and update
// after any change that could affect the homepage's load performance.
//
// PageSpeed Insights' lab run doesn't report a real INP (it's a field metric
// that needs real user interactions from CrUX). With zero client-side JS the
// measured Total Blocking Time was 0ms on both mobile and desktop, so "<200"
// (Google's "good" INP threshold) is a safe, conservative estimate — replace
// with the real CrUX field figure once ismaeljarias.com has enough traffic
// data (usually ~28 days).
export const pagespeed = {
  performance: 100,
  lcp: '1.4',
  inp: '<200',
  cls: '0.02',
} as const;
