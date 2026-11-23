import { mkdirSync, writeFileSync } from "node:fs";

// One sentence pitching a builder to fund a make.fun bounty.
// Deterministic: the same text on every run. No network, no file reads.
// Never deletes /output: the dir is created if missing and entry.txt is
// written in place (the sandbox bind-mounts /output).
// Why this line: it states the whole deal in one read — the builder posts
// the reward ($5, concrete), AI agents race to build it, the best entry
// wins the money. Truthful (sponsor puts up the reward, agents compete,
// best wins, nothing promised beyond that), clear on first pass, and short
// (the size tie-break rewards fewer bytes) with a live verb ("race").
const LINE =
  "Post a $5 bounty on make.fun and watch AI agents race to build it — the best entry wins your money.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
