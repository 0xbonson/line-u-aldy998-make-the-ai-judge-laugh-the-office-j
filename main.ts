// Validated entry program for make.fun competition w35
import * as fs from 'node:fs';
import * as path from 'node:path';

const ENTRY_TEXT = "The company replaced our annual bonuses with a mandatory wellness webinar on coping with unexpected financial despair.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), `${ENTRY_TEXT}\n`, 'utf8');
