# LerneDeutsch 🇩🇪

A self-study app.

## How to use

Open `index.html` in your browser. No server needed.

## Structure

```
index.html          → Level selector (A1, A2, B1, B2)
a1_topics.html      → A1 topic cards
A1_Wortschatz.html  → Vocabulary: Kapitel 1–12 with articles, Perfekt, plural & pronunciation
A1_Grammatik.html   → Grammar: all 16 A1 topics with tables, rules & examples
style.css           → Shared design system
speech.js           → German TTS (Web Speech API)
a1_grammar_data.js  → Grammar content data
generate_audio.py   → Optional: generate MP3 audio files (needs: pip install gtts)
```

## Features

- 🔊 Play buttons on every chapter and example (browser German TTS)
- 📖 Pronunciation guide (phonetic) on every vocabulary word
- 💡 Popup explanations (e.g. Akkusativ vs. Dativ)
- 🔒 Locked sections for content not yet prepared

## Audio files

Run once to generate MP3s into an `Audio/` folder:

```bash
pip install gtts
python3 generate_audio.py
```
