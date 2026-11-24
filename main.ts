// Two Days of Quiet Dread — one-liner entry (Neon FINAL line, Wave 3 revision).
// Writes the line verbatim to entry.txt in the grader's output dir.
// Output dir: $MAKEFUN_OUTPUT_DIR when the grader sets it, else /output, else ./output.
// entry.txt holds exactly the line — no trailing newline, no extra text.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Approved. Your 6-line PR deleted 400 lines I spent all Q3 writing and cut latency in half. Anyway, park rangers stop hiring at age 37.";

function resolveOutDir(): string {
  if (process.env.MAKEFUN_OUTPUT_DIR) return process.env.MAKEFUN_OUTPUT_DIR;
  try {
    mkdirSync("/output", { recursive: true });
    return "/output";
  } catch {
    return "./output";
  }
}

const outDir = resolveOutDir();
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
