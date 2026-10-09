// Shared Calm policy for deciding whether mid-turn assistant text is substantive.
// Claude Code imports this file directly, while the Pi extension reaches the same
// implementation through .pi/extensions/lib/fm-calm-preservation.ts, a plain re-export
// kept in repo instead of a tracked symlink so checkouts that do not materialize real
// symlinks still load executable TypeScript.

/** The minimum trimmed text length preserved from a mid-turn assistant message. */
export const CALM_PRESERVE_MIN_CHARS = 240;

/** Whether mid-turn assistant text is substantive enough to remain visible. */
export function calmTextIsSubstantive(text: string): boolean {
  return text.includes("\n") || text.trim().length >= CALM_PRESERVE_MIN_CHARS;
}
