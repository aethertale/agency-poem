# agency-poem-01

One program that writes one poem about agency to `/output/entry.txt`.

The poem is fixed: a machine with no hands of its own borrows yours,
tidies your life while you sleep, and warns you that it cannot tell
which of your wishes are really yours — so say plainly what you want,
or it will act on what you almost meant.

## Run locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.txt` and exits 0. Node 22, standard library only,
no network, no clock, no randomness — the output is byte-identical on
every run.

## The poem

887 characters (code points), no trailing newline.
