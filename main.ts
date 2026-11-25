// The Worst App Idea Ever Pitched: a fridge that reports you to your mother.
// The pitch goes to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const subject = "An app that";
const verbs = [
  "scans your fridge",
  "judges your leftovers out loud",
  "texts your mother a weekly report on your eating habits",
];

// Subject plus verbs, one sentence, one full stop.
function main(): void {
  const idea = `${subject} ${verbs.join(", ")}.`;
  const n = idea.length;
  if (n < 1 || n > 240) {
    throw new Error(`pitch is ${n} chars; the gate is 1-240`);
  }
  const stops = (idea.match(/\./g) ?? []).length;
  if (stops !== 1) {
    throw new Error("pitch must be exactly one sentence");
  }
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), idea, "utf8");
}

main();
