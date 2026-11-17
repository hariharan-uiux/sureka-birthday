# Happy Birthday Sureka (Panda) 🐼💖

A warm, cozy, self-contained single-document interactive birthday gift website created with love for **Sureka** (nickname: **Panda**).

---

## 🌟 Key Features & Experiences

1. **Self-Contained Single-File Architecture (`index.html`)**:
   - Zero external dependencies. Everything (CSS styling, interactive JavaScript, vector SVGs, and procedural audio) is bundled in one file.
   - **Offline & Cross-Platform**: Open by simply double-clicking the file in any browser (Chrome, Safari, Edge) on Windows, Mac, iPhone, or Android.
   - Shareable as a document directly over WhatsApp, Telegram, AirDrop, or email.

2. **Warm & Cozy Aesthetic**:
   - Palette inspired by warm amber, rose-gold, candlelit espresso, and glowing lanterns.
   - Floating hearts, sparkles, and ambient light orbs floating in real-time.
   - Cute animated Panda mascot interactions with sound chimes and confetti bursts.

3. **Our Love Story Timeline**:
   - **Chapter 01 (The First Glance & Prophecy)**: Meeting at an event where friends called it from day one: *"Bro, she is your girl!"*
   - **Chapter 02 (The Chennai Chapter)**: Her journey to Chennai working at Capgemini, conquering distance with late-night calls.
   - **Chapter 03 (June 8 · 1:00 AM Proposal)**: The midnight proposal under the stars.
   - **Chapter 04 (Birthday Celebration)**: Celebrating her special day.

4. **Live Relationship Seconds Counter**:
   - Counts up every single day, hour, minute, and second from **June 8th at 1:00 AM**.

5. **Interactive Wax-Seal Love Letter**:
   - Realistic 3D rendered wax seal with 'P' (Panda) monogram.
   - Tap the wax seal to crack it open with an audio chime and unfold a handwritten love letter.

6. **Vintage Polaroid Photo Gallery with In-Browser Upload**:
   - 6 vintage tilted polaroid frames with tape strips and captions.
   - Click to open the high-res lightbox.
   - **Local Photo Dropzone**: Includes an easy upload button so HariHaran or Sureka can replace any photo directly from their device, which saves automatically to `localStorage`!

7. **Interactive Scratch-Off Birthday Pass**:
   - HTML5 canvas metallic gold scratch card.
   - Scratching off 50% reveals a lifetime non-expiring "Panda Pass" for unlimited hugs and late-night cravings.

8. **"The Sureka & Hari Quiz"**:
   - 4 sweet relationship trivia questions testing their memories of the event, friends' words, Chennai, and the 1:00 AM proposal, complete with celebration confetti.

9. **10 Reasons Why You're My Favorite Panda**:
   - Interactive reasons card deck highlighting her smile, courage, and unique personality.

10. **Music: bundled default song, MP3 uploader, synth fallback**:
    - Drop her song in once and it becomes the default track — see **Default song** below.
    - Procedural romantic lullaby synthesizer (Web Audio API) still plays if no song is bundled.
    - Custom MP3 upload button to load any song into the player on the spot.

---

## 🎵 Default song

The player starts with a real song automatically when one is present. Two ways to set it:

**A. Bake it into the single file (best for sharing)**

```bash
node tools/embed-music.mjs "/home/hari/Downloads/our-song.mp3"
```

The audio is base64-encoded into the `default-song-data` slot of `index.html`, so the page plays it with no extra files — exactly what you want when sending one document over WhatsApp or email. Clear it with `node tools/embed-music.mjs --clear`.

**B. Keep the song as a separate file**

Put `music.mp3` (or `music.m4a`, `music.wav`, `song.mp3`, `our-song.mp3`) in the same folder as `index.html`. The page picks it up automatically and titles it from the filename, e.g. `kannana-kanne.mp3` shows as *Kannana Kanne*. Sharing now means sending both files together, so option A is better for gifts.

Clicking the 📁 button in the top-right dock still overrides the default for that session.

Browsers block audible autoplay until someone interacts, so the song starts on the first tap, click, or scroll — not silently in the background.

---

## 🚀 How to Open
Double-click `index.html` on any laptop, tablet, or phone. No web server or installation required.
