# 📚 MyStudyBuddy

**Smart Study Companion on the GO 🚀**  
An AI-powered, single-file study app for Singapore students from Kinder 1 to Secondary 5.

🌐 **Live App:** https://mcylle.github.io/mystudybuddy

---

## ✨ Features

### 🪄 Word Wizards
- **Sentence Builder** — build sentences from word tags with AI explanations
- **Grammar Check** — analyse and correct grammar with tips
- **Word Replacer** — find synonyms and antonyms with examples
- **Parts of Speech** — colour-coded word tagging (noun/verb/adj/adv/prep/conj/article/pronoun)
- **Spell Challenge** — manual words, file upload (.txt/.csv), or AI-generated (Random/Bee/Advanced); local TTS to hear words; 10-session history
- **🃏 Flashcards** — AI-generated cards with emoji, pronunciation, example sentences and speak button; 10-set history
- **🖼️ Vocab Match** — picture-word matching game for Kinder 1–Primary 3 (local emoji sets, no API for common categories)

### 🧠 Smart Quiz
- Multiple choice quiz for any subject and level
- Auto-completes linked Study Plan tasks
- Last 5 quiz sessions saved with recall

### 🧩 Brain Teaser Hub
- **Word Scramble** — manual words or AI auto-load by level/theme
- **Fill in the Blank** — AI-generated sentences with dropdown answers; 20-session history
- **Sudoku** — client-side generator (Easy/Medium/Hard), 50-puzzle pre-load pool, timer, error counter, hint and clear
- **Tongue Twisters** — 4 speed levels, 20-session history

### 🈳 Language Corner
Languages: 🇨🇳 Mandarin · 🇯🇵 Japanese · 🇫🇷 French · 🇩🇪 German

- **Learn** — vocabulary, sentences, stories or Q&A with speak buttons; 5-session history per language
- **Translate** — any language pair with From/To selector; 20-session history
- **Read Aloud** — generate 20 stories/poems/articles with word-by-word narration highlighting; voice selector; 20-session history
- **💬 Conversation Practice** — simulated dialogues with audio recording, playback and delete; 10-session history (sticky)
- **🏮 Culture Notes** — AI-generated or manually typed/dictated cultural tidbits; save, read aloud, edit and delete
- **🎙️ Pronunciation Practice** — speech recognition for local feedback; optional AI feedback (1 API call with confirmation); 10-session history
- **🎧 Mini Podcast** — 10 audio stories/dialogues per API call with follow-along transcript and word highlighting; 10-session history

### 💡 Explain It Simply
- AI explanation with SVG diagram, Unsplash images, and YouTube links
- 4 styles: Fun & Simple, Detailed, Story/Analogy, Summary Notes
- 20-entry history with accordion view

### 📅 Study Planner
- Daily / Weekly / Monthly calendar views
- **🎯 Effort Planner** — set target grades, configure your daily schedule (school, sleep, leisure, CCA, meals), pick an exam from the school term calendar, and get a personalised study timetable auto-added to your planner
- School term calendars: 🇸🇬 Singapore MOE · 🇲🇾 Malaysia KPM · 🇦🇺 Australia · 🇬🇧 UK · 🇺🇸 US
- Tasks auto-complete when you finish the linked activity
- Past incomplete tasks are locked (🔒); future tasks are deletable
- Auto-deletes tasks older than 1 month

### 📊 My Scores
- Quiz accuracy by subject with grade letters (A–F)
- Study streak counter 🔥
- Module usage breakdown
- Plan completion with per-activity-type progress bars

---

## 🚀 Getting Started

### 1. Open the App
Visit **https://mcylle.github.io/mystudybuddy** in **Safari** (iPhone/iPad) or **Chrome** (Android/Desktop).

### 2. Enter Access Code
On first visit, enter the access code to unlock the app. Contact **mcylle@gmail.com** for the code.

### 3. Set Up Profile
Tap ⚙️ (top-right) to set:
- Your name and school level (Kinder 1 → Secondary 5)
- Avatar
- Custom subjects (shown in all dropdowns)

### 4. Add Your API Key
Tap 🔑 **API Key** (top-right) and paste your Anthropic API key.  
Get one free at [console.anthropic.com](https://console.anthropic.com)

> Your API key is stored only on your device — never uploaded to GitHub.

### 5. Add to Home Screen (iPhone/iPad)
Safari → Share → **Add to Home Screen** → works like a native app!

---

## 💰 API Usage Guide

| Feature | API calls |
|---|---|
| Quiz, Grammar, Explain It, Language Learn | 1 per session |
| Flashcards, FIB, Tongue Twisters, Translate | 1 per session |
| Read Aloud (20 stories) | 1 per session |
| Mini Podcast (10 episodes) | 1 per session |
| Pronunciation AI Feedback | Optional — asks before calling |
| **Sudoku, Vocab Match, Spelling (manual), TTS playback** | **Free — local, no API** |

---

## 📱 Device Compatibility

| Device | Browser | Status |
|---|---|---|
| iPhone / iPad | Safari | ✅ Fully supported |
| Android phone/tablet | Chrome | ✅ Fully supported |
| Mac | Safari / Chrome | ✅ Fully supported |
| Windows | Chrome / Edge | ✅ Fully supported |

---

## 🔒 Privacy & Security

- All data stored in **localStorage on your device** only
- API key never leaves your device
- No accounts, no tracking, no ads
- Access code is XOR-encrypted in the source code
- Contact **mcylle@gmail.com** for access code or support

---

## 🔄 Updating the App

When a new version of `index.html` is available:
1. Download the new `index.html`
2. Go to **github.com/mcylle/mystudybuddy**
3. Click `index.html` → click ✏️ edit icon → **Upload new file**
4. Or drag-and-drop the new file → **Commit changes**
5. Wait 2–3 minutes → live at **mcylle.github.io/mystudybuddy**

---

*Built with ❤️ for Singapore students · Powered by Claude AI*
