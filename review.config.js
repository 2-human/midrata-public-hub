/* Midrata Demand-Test Hub — review-widget config (feature_version 1.3.0).
 *
 * Loaded before review-bootstrap.js. Defines the config global the widget reads.
 *
 * BACKEND: FIREBASE_CONFIG is intentionally left blank, so comments persist to
 * THIS browser only (localStorage) — fine for solo review, NOT shared across
 * reviewers. This mirrors meaning-global's hub, which also ships local-only until
 * the client has its own Firebase. We deliberately do NOT point Midrata at the
 * shared credo-712c4 review database, to keep one client's review comments out of
 * another client's backend. To enable shared team commenting, paste a Midrata
 * Firebase Realtime Database config below (apiKey, authDomain, databaseURL,
 * projectId, storageBucket, messagingSenderId, appId). The page-slug rule in
 * review-mode.js namespaces comments per page, so no path changes are needed.
 */
window.MIDRATA_REVIEW_CONFIG = {
  FIREBASE_CONFIG: {
    apiKey: "",
    authDomain: "",
    databaseURL: "",          // PASTE a Midrata RTDB URL here to enable shared comments
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  },
  REVIEW_LABELS: {
    toggleButton: "Comments",
    toggleButtonTitle: "Open comment review mode",
    bannerTitle: "Review mode · Midrata demand-test hub",
    localOnly: "Local-only — add a Midrata Firebase config for shared comments",
    exit: "Exit review",
    sidebarTitle: "Comments",
    empty: "No comments on this view yet. Hover any line of text and click the + to add one.",
    add: "+ Comment",
    save: "Post comment",
    cancel: "Cancel",
    edit: "Edit",
    del: "Delete",
    resolve: "Resolve",
    reopen: "Reopen",
    tabOpen: "Open",
    tabResolved: "Resolved",
    resolvePrompt: "Resolution note (what was done):",
    placeholder: "Your feedback…",
    replacementPlaceholder: "Suggested change (optional)…",
    namePrompt: "Your name (so the team knows who left this comment):"
  }
};
