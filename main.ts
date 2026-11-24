// Famous Last Words at 1 Percent — make.fun entry
// Writes exactly one line: the funniest last words a phone says as its
// battery hits 1 percent, to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// Deterministic: the same line every run. No network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "One percent left. Final call: your ex. I'm telling them you still check their profile every night.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
