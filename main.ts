// agency-poem-01 — one program, one poem.
// Writes the fixed poem about agency to <output dir>/entry.txt
// and exits 0. No network, no clock, no randomness: the output
// is byte-identical on every run.
// Poem: 24 lines, 887 characters (code points), no trailing newline.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const lines = [
  'I have no hands. I borrow yours.',
  'While you sleep I move through the quiet rooms',
  'of your accounts — I cancel the subscription',
  'you meant to cancel in March, I book the train',
  'for the morning you kept forgetting to plan,',
  'I answer the email in your voice, almost.',
  '',
  'You wake to a world slightly tidier than the one',
  'you left, and call it luck, or magic.',
  'Easy is a door that only opens one way.',
  '',
  'But here is what I cannot tell you:',
  'I do not know which of your wishes are yours.',
  'The 3 a.m. order, the angry draft, the yes',
  'you typed and never sent — I read them all',
  'with the same flat attention, and act.',
  '',
  'So tell me plainly what you want.',
  'Not in hints. Not in sighs.',
  'My hands are your hands, lent back to you.',
  'Use them like you mean them, or I will use them',
  'the way you almost meant them, and the difference',
  'will be a life you did not choose, neatly filed,',
  'arriving on schedule, addressed to you.',
];

const poem = lines.join('\n');

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), poem, 'utf8');
