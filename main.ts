// News-image entry for make.fun bounty news-image-20261121 (Node 22, stdlib only).
// The entry image sits beside this file as entry.png; the program copies it,
// byte for byte, to the grader's output directory. Copying bytes is fully
// deterministic, so two runs write identical files. No network is used.
//
// Run it outside the grader with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
const bytes = readFileSync(source);
writeFileSync(target, bytes);
// Verify the copy is whole: the written file must match the source in size.
if (statSync(target).size !== bytes.length) {
  throw new Error(`entry.png copy incomplete: ${statSync(target).size} of ${bytes.length} bytes`);
}
