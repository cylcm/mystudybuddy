# 📚 MyStudyBuddy v5.3

**Smart Study Companion on the GO ✈️**  
AI-powered educational suite for Singapore students K1–Secondary 5.  
Single-file standalone HTML app — no build step, no backend, no server required.

---

## ✨ Features

| Module | What it does |
|---|---|
| 🧠 **Smart Quiz** | AI-generated MCQ quizzes from your uploaded syllabus, beginner→advanced |
| 🪄 **Word Wizards** | Sentence builder, grammar check, synonyms, POS, spelling, flashcards, vocab match |
| 🧩 **Brain Teaser Hub** | Fill-in-blank, word scramble, tongue twisters, offline Sudoku |
| 🈳 **Language Corner** | 8 languages (EN/ZH/YUE/JA/FR/DE/FIL/MS) with TTS, pronunciation coach |
| 💡 **Explain It** | AI explanations with SVG diagrams for any topic |
| 📅 **Study Planner** | Daily/weekly/monthly tasks, effort planner, syllabus upload |
| 📊 **My Scores** | XP/level/streaks/badges, AI cache manager, parent summary report |

---

## 🚀 GitHub Pages Setup

### Step 1 — Fork or upload

```
Your repo structure:
├── index.html
├── manifest.json
├── sw.js
└── data/
    ├── quiz-pack.json
    ├── vocab-pack.json
    └── language-pack.json
```

### Step 2 — Enable Pages

1. Go to your GitHub repo
2. **Settings → Pages**
3. Source: **Deploy from branch**
4. Branch: `main` | Folder: `/ (root)`
5. Click **Save**

### Step 3 — Visit your site

URL: `https://<your-username>.github.io/<repo-name>/`

The app installs its service worker on first visit — after that it works offline.

---

## 🔑 API Key Setup

1. Get a free API key from [console.anthropic.com](https://console.anthropic.com)
2. Open the app → click the **🔑** button top-right
3. Paste your key → Save
4. The key is stored only in your browser's localStorage — never sent anywhere except Anthropic's API

**Token budget:** Default 100K daily / 20K per session. Change in Profile → ⚙️.

---

## 📦 Architecture

```
index.html (420 KB — entire app, self-contained)
│
├── CONFIG          — all magic values (model, TTL, limits)
├── KEYS            — localStorage key names
├── DataLoader      — lazy loads /data/*.json packs
├── AICache         — 10-day persistent AI generation cache
├── Voice           — reusable SpeechRecognition module
├── AppEvents       — lightweight pub/sub event bus
├── App.*           — module namespaces (storage/ai/ui/rewards/cache/perf/voice)
│
├── App.storage     — localStorage helpers + all load/save functions
├── App.ai          — Claude API + all generators
├── App.ui          — rendering, tabs, panels
├── App.rewards     — XP, levels, streaks, badges
├── App.cache       — history, AICache, analytics, error log
├── App.perf        — result cache, lazy render, registries
└── App.voice       — SpeechRecognition (spell/quiz/vocab/pron modes)
```

---

## 💾 Storage Map

| Key | Contents | Max size |
|---|---|---|
| `sb_aic` | AI generation cache (quizzes, insights) | 50 entries × 10 days TTL |
| `sb_analytics` | Parent summary session records | 90 days, 2000 records |
| `sb_rewards` | XP, badges, streak, session count | ~1 KB |
| `sb_qh` | Quiz history | 5 entries |
| `sb_ai_insights` | AI insight sessions | 20 entries |
| `sb_pack_*` | DataLoader offline copies of JSON packs | ~15 KB |
| `sb_syllabus_v1` | Uploaded syllabi | Per subject |
| `sb_pf` | Student profile | ~1 KB |
| `sb_tok` | Token usage stats | ~0.5 KB |

---

## 📱 PWA / Offline

Installable on Chrome (desktop + Android) and Safari (iOS — use Share → Add to Home Screen).

**Works offline:**
- Sudoku (fully local algorithm)
- Tongue Twisters (5 built-in + pack if cached)
- Vocabulary Match (built-in sets)
- Spelling / Scramble (manual word entry mode)
- All history/recall functions
- Study planner tasks
- Gamification (XP, badges)

**Requires internet:**
- All AI generation (quiz, grammar, language, explain)
- Pronunciation feedback (AI)

---

## 🗂 Version History

| Version | Date | Changes |
|---|---|---|
| v5.3 | 2026-05-26 | Production build — dead code removed, versioning, analytics, parent dashboard |
| v5.2 | 2026-05 | Module namespaces, AppEvents, AICache, Voice module, gamification, PWA |
| v5.0 | 2026-05 | Initial full-featured release |

---

## 📄 License

Personal / educational use. AI content generated via Anthropic Claude API — subject to [Anthropic's usage policies](https://www.anthropic.com/legal/usage-policy).
