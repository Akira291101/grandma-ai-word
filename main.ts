import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const word: string = "artifical";
const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), word, "utf8");
