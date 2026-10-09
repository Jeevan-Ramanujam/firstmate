// Claude Code's canonical Calm preservation policy must live under
// .claude/mods/firstmate-calm/lib/fm-calm-preservation.ts because Claude refuses
// hooks-module imports from outside the plugin folder, symlinks included.
//
// Pi's loader has no equivalent restriction, so this file is a plain re-export rather
// than a git symlink: a tracked symlink checks out as an unusable text file (the
// literal target path, not executable TypeScript) on filesystems/git configurations
// that do not materialize real symlinks. The plain re-export preserves one canonical
// implementation across both harnesses without requiring filesystem symlink support.

export * from "../../../.claude/mods/firstmate-calm/lib/fm-calm-preservation.ts";
