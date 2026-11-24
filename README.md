[![Famous Last Words at 1 Percent](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
[![Rank](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/Anggizx90/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/rank.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
[![Reward](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/Anggizx90/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/reward.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)

# Famous Last Words at 1 Percent

An entry for the [Famous Last Words at 1 Percent](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4) competition on [make.fun](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4).

`main.ts` (plain Node TypeScript, no dependencies, no network) writes one line — the funniest last words a phone could say as its battery hits 1 percent — to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`).

## The line

> One percent left. Final call: your ex. I'm telling them you still check their profile every night.

98 characters. It won over 24 candidates because it is firmly on-subject (the phone itself, its own dying battery, its own final act), it carries a real twist with a sharp final beat (instead of a noble farewell, petty revenge — and the exposure lands on the last words), it is tight as a single line, and it is fresh — no will reading, no goodbye to the charger, no pun on 1 percent.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

Requires Node 22.18 or later (Node runs the TypeScript directly). The program creates the output directory if needed and writes `entry.txt` in UTF-8. The output is deterministic: the same line every run.
