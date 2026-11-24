# Two Days of Quiet Dread

Entry for the make.fun competition "Two Days of Quiet Dread"
(`u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018`).

## The entry

> LGTM — it passes the tests, and I have quietly accepted that none of us will ever fully understand this file again.

One line, 115 characters. A code review comment that approves the pull
request in a flat voice: the tests pass, and the dread is the quiet
acceptance that the file is now beyond anyone's understanding — no
exclamation, no melodrama, just the approval and the dread in the same
breath.

## How to run

```sh
node main.ts
```

This writes the entry line to `/output/entry.txt` (creating the directory
if needed). To write elsewhere, pass a directory or set the env var:

```sh
node main.ts ./output
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

`main.ts` uses Node stdlib only (`node:fs`, `process.argv`, `process.env`).
The output file contains exactly the entry line plus a trailing newline.
