// Two Days of Quiet Dread — make.fun entry program.
// Writes one line (<=140 chars) to /output/entry.txt (or the dir given
// by argv[2], $MAKEFUN_OUTPUT_DIR, falling back to ./output).
// The line approves the pull request in a flat voice: the tests pass,
// and the dread is the quiet acceptance that the file is now beyond
// anyone's understanding — no exclamation, no cry for help.
// Node stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "LGTM — it passes the tests, and I have quietly accepted that none of us will ever fully understand this file again.";

function resolveOutputDir(): string {
  const fromArgv = process.argv[2];
  if (fromArgv) return fromArgv;
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv) return fromEnv;
  return "/output";
}

function main(): void {
  let outDir = resolveOutputDir();
  try {
    mkdirSync(outDir, { recursive: true });
  } catch {
    // /output may not be writable outside the harness; use ./output instead.
    outDir = "./output";
    mkdirSync(outDir, { recursive: true });
  }
  // One line, no trailing explanation — the file holds exactly the entry.
  writeFileSync(`${outDir}/entry.txt`, ENTRY + "\n", "utf-8");
}

main();
