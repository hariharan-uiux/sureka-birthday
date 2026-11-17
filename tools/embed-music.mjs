#!/usr/bin/env node
/**
 * Bake a song into the single-file birthday site, or clear it again.
 *
 *   node tools/embed-music.mjs "/home/hari/Downloads/our-song.mp3"
 *   node tools/embed-music.mjs --clear
 *   node tools/embed-music.mjs song.mp3 path/to/index.html   (custom target)
 *
 * The audio is base64-encoded into the `default-song-data` slot, so the page
 * still works when shared as one .html file with no separate music file.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(here, '..', 'index.html');

const MIME = {
  '.mp3': 'audio/mpeg',
  '.m4a': 'audio/mp4',
  '.aac': 'audio/aac',
  '.wav': 'audio/wav',
  '.ogg': 'audio/ogg',
  '.oga': 'audio/ogg',
  '.opus': 'audio/ogg',
  '.flac': 'audio/flac',
};

const arg = process.argv[2];
if (!arg) {
  console.error('usage: node tools/embed-music.mjs <song file> | --clear');
  process.exit(1);
}

const htmlTarget = process.argv[3] ? path.resolve(process.argv[3]) : htmlPath;
const html = fs.readFileSync(htmlTarget, 'utf8');
const slot = /<script id="default-song-data"[^>]*>([\s\S]*?)<\/script>/;
if (!slot.test(html)) {
  console.error('index.html has no default-song-data slot');
  process.exit(1);
}

let payload = '';
let mime = 'audio/mpeg';
let title = '';

if (arg !== '--clear') {
  const songPath = path.resolve(arg);
  if (!fs.existsSync(songPath)) {
    console.error('no such file:', songPath);
    process.exit(1);
  }
  mime = MIME[path.extname(songPath).toLowerCase()] || 'audio/mpeg';
  title = path
    .basename(songPath, path.extname(songPath))
    .replace(/pendujatt\.dev/gi, ' ')
    .split(' - ')[0]
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  payload = fs.readFileSync(songPath).toString('base64');
}

const replacement = `<script id="default-song-data" type="text/plain" data-mime="${mime}" data-title="${title}">\n${payload}\n</script>`;
fs.writeFileSync(htmlTarget, html.replace(slot, replacement));

if (payload) {
  console.log(`embedded ${arg} (${(payload.length / 1e6).toFixed(1)} MB base64) into index.html`);
} else {
  console.log('cleared embedded song from index.html');
}
