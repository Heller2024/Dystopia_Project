# Plan: one reading site from the Utopia Undone Companion and state-less

Date: 7 October 2026. Branch: `claude/brave-allen-zusipw`.
Sources read in full: `apps/sources/utopia-undone-companion.html` (1,598 lines) and
`apps/sources/state-less-v2-reading-app.html` (14 pages, 23 editorial notes).
The PDF "UTOPIA UNDONE | Corpus Sphere" is a two-page print of an older artifact
(claude.ai/code/artifact/4aaeb540…); it was read for its text only.

## 1. What is true now

1. The sphere is already gone from the Companion file. Its script sets
   `HAS_WEBGL = false` with the comment "no WebGL scene remains; the timeline
   is 2D". The PDF shows the older version that still had the sphere. No sphere
   code needs removing; the Book view (`.bk-*`) already renders chapters and
   novels as static text boxes.
2. What still makes the Companion feel like a game, with the line in the file:
   - Overture: letter-by-letter title, typewriter epigraph, blinking cursor,
     "Open the book" gate (lines 494–503, 1085–1096).
   - Synthesized sound on click, hover, open, "unlock", "complete" (1038–1074).
   - Discovery bar "0/N" and toasts: FIRST RECORD, HALFWAY, CORPUS COMPLETE,
     CHAPTER N READ, "· opened" badges (514–517, 1098–1119, 1150).
   - "Reading console" with RUN button and typewriter replies (591–595, 1390–1432).
   - Grain and vignette overlays, rotating brand mark, 360° spinning chapter
     number, card lift and glow, stagger entrances, "Replay entrance" on the
     canvas timeline (31–34, 79, 187, 171, 256–258, 556).
   - Uppercase letterspaced monospace labels throughout (sci-fi register).
3. state-less is already the text-first model: serif reading column, light and
   dark themes, sidebar index, search, print, exact-source view, exports, and a
   separate editorial-notes layer per page. It has no animation beyond a
   140 ms fade.
4. The Companion's data is the richer model: 6 chapters plus frame and
   epilogue, 16 novel records with plot, quotation, argument, origins,
   relations, legacy and a source tag on every field; two anchors (Leibowitz
   1968, Herzl 1902); a four-text source table.

## 2. Conflicts with 00_Decisions.md (3 October 2026) found in the Companion

Fix these in the data before any build. Quoted text is from the file.

| Decision | Companion now | Fix |
|---|---|---|
| "No fixed count anywhere" | `CORPUS_N` drives the overture line, the corpus heading ("N novels by M authors"), the discovery bar "/N", the console's "how many" answer and its greeting (981–986, 1241–1243, 1423, 1432) | Delete every count; the corpus heading becomes "The novels" |
| same | Niv record: "Outside the fourteen-novel corpus." (938) | "The novel sits in the Epilogue, outside the chapters." |
| "theocratic capture" is replaced | Ch. 5 threat: "Pseudo-sacred zeal corrupts modern Israel through theocratic capture and prophetic delusion" (665, source I, Ch. 5) | Uncertain: needs the July 2026 draft's sentence; until supplied, cut the phrase and keep the rest |
| "Adaf's Kfor (2010) is in Chapter 5" | No Adaf record; Ch. 5 lists Sarid and Burstein only | Add a dashed (proposal-only) card: *Kfor*, Shimon Adaf, 2010, "[Reading not yet on record]". Publisher: Uncertain, left blank |
| "Burg is in" | No Burg novel in the data | Uncertain: title and chapter not in the files I hold; do not add until named |
| Never "October 7" in any form | Companion: none. state-less: "written before October 2023", "the tense of October 2023" (pages how-we-got-here, too-late) | Uncertain: whether "October 2023" counts. Flag on those two pages; do not rewrite the author's text |
| Coined terms only from authoritative files | state-less page title "The Too Late-Zionism" and the word "seismograph" do not appear in the Companion | Keep state-less wording on state-less pages only; never let it cross into Book pages or search summaries |

Checks that passed: Chapter 6 "The Shin Bet State: Big Brother Confesses";
Conclusion "Warning, Testimony, Confession"; Epilogue "Facing Gaza" with no date
range; Sarna self-published 2014, suit over a Facebook post, "suggested";
*The Third* Restless Books 2024; the dropped Dolly City line is absent;
Gottlieb's third type cited to D, pp. 55–56.

## 3. The combined site

One static HTML file, no build step, deployable as an artifact or on GitHub
Pages. Working name: `apps/reading-site.html`.

Shell (from state-less): sticky header, left index, reading column of 70ch,
light theme by default with a dark toggle, search over everything, print
stylesheet, "exact source" view, exports.

Two wings in the index, kept visibly distinct:

1. **The book** (from the Companion data)
   - Introduction: Between the Kibbutz and Armageddon (the two anchor cards:
     Herzl 1902, Leibowitz 1968)
   - Chapters 1–6, each a page: context, threat, argument, the novels as
     text boxes, afterlife, with the source tag under each paragraph
   - Each novel a page: record line, What happens, the quotation as the
     dissertation gives it, In the argument, Origins, Relations (links),
     Legacy. A dashed border still marks "proposal reading only"
   - Conclusion: Warning, Testimony, Confession
   - Epilogue: Facing Gaza (Niv)
   - Sources: the four-text table and the per-novel "where the reading sits"
   - The book in order: the static flowchart, kept as is (it has no motion)
2. **state-less** (the 14 pages, text unchanged, notes layer kept)
3. **Notes**: editorial audit, provenance, and a new "Decisions" page that
   reproduces 00_Decisions.md so the site states its own authority order

Cross-links, one direction only: a state-less page that names Kenan, Tammuz,
Leibowitz or a corpus novel links to the Book record. Book pages never link
out to state-less; the manuscript side stays sealed.

Removed outright: overture, sound, discovery bar, toasts, console, grain,
vignette, canvas timeline, hover cards, stagger and rotation animations,
high-contrast button (the light theme and the dark theme both meet contrast
without it). The record drawer becomes a page; a page prints and has a URL.

Typography: one serif for reading (Newsreader or Georgia), one system sans for
UI, no monospace. Source tags are small, grey, sentence case: "P, Ch. One".
Chapter colours survive only as a thin top rule on each chapter's cards.

## 4. Steps

1. Convert the Companion's JS constants (CHAPTERS, EPILOGUE, FRAME, NOVELS,
   ANCHORS, SOURCES) to a JSON block; apply the fixes in section 2. Keep
   `<i>` for titles; strip nothing else. (half a day)
2. Build the shell from state-less, add hash routes `#book/…`, `#novel/…`,
   `#page/…`, `#notes/…`, and one search index over both wings. (one day)
3. Render Book pages and novel pages; port the Book view and the flowchart;
   write the print stylesheet so the whole book wing prints in reading order.
   (one day)
4. Mount the state-less pages and their notes unchanged; add the one-way
   cross-links; add the Decisions page. (half a day)
5. Check: no count of novels anywhere; no banned term on a Book page; every
   paragraph on a Book page carries a source tag; keyboard reach to every
   link; phone width with no horizontal scroll; print. (half a day)

## 5. Decisions needed from you

1. Light default (state-less) or dark default (Companion)? Assumed light.
2. Keep the flowchart, or is the Book view enough? Assumed keep.
3. Confirm the Chapter 5 threat sentence from the July draft, Adaf's publisher,
   and Burg's title and chapter, or leave each marked Uncertain in the site.
