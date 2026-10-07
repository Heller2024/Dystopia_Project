# state-less: what is in hand, what was built, what each page still needs

Date: 7 October 2026. Branch: `claude/brave-allen-zusipw`.
Read in full: `apps/sources/state-less-v2-reading-app.html` (14 pages, 23 editorial
notes, the exact supplied v2 source). Also read: the Utopia Undone Companion, for
cross-checks only.

Assumption this plan rests on: the Companion stays the book's companion and
state-less stays a separate site, as the second analysis you pasted recommends
("Do not merge them"). The combine plan in `apps/PLAN_COMBINE.md` is on hold.
Nothing here moves text in either direction.

## 1. What state-less is, in its own words

"This site rereads. It checks the receipts." (Home)
"This page is the table of contents. Every other page on this site is an attempt to
answer one part of the question in the title." (How We Got Here)

Fourteen pages: one entrance, eight essays, one reading list, one links page, one
exhibit, one concordance, one exercise. All of it is "supplied v2": pasted text, not
verified, not author-approved, with 23 open questions attached by the v2 build.
The v2 build also records that it "does not publish to Webador or change the live
site", so the live site is on Webador and these files are reading copies.

## 2. What was built: `apps/state-less-v3.html`

A text-first reading copy. The data block (pages, notes, exact source) is
byte-identical to the v2 build's; I checked the bytes after the build.

Kept from v2: the sidebar index, search, light and dark themes, print, the
exact-source view, the editorial questions under each page, the Markdown and
JSON exports, copy page, previous and next links, no remote fonts or scripts.

Changed, presentation only:
- Each page opens with its number, kind, "supplied v2" and its count of open
  questions, then the title, then the first paragraph set large.
- On seven pages the author's own structure is set in boxes, with a paragraph's
  own first sentence or lead-in as the box heading: the four names on Home; the
  three arguments on Ein Medina; the four entries on Reading; the three readings
  on Nation Undoing; the four exhibits on Close Enough to Be Wrong; the three
  counts on Iran ×22; the four renderings on Exercise 8.
- "Also named on this site": for each page, the other pages that name the same
  people (found in the text, not written by me).
- A "Dashes" switch: as written (the default) or converted, as the v2 reading view
  did. The default changed to "as written" on 7 October because the conversion turns
  paired dashes into stray semicolons ("Ein medina; nothing works; is what Israelis
  say"). Page titles keep their punctuation either way.
- Search covers the editorial questions too.
- One labelled build note, on LINKD, saying the page has no entries yet.

Not changed: one word of the text; the 23 notes; the preface. Nothing invented
for the missing exhibit (section 4).

Checked in Chromium: desktop and phone, light and dark, the exercise with a choice
made, search, print. No script errors; no horizontal scroll at 390 px.

## 3. Page ledger

"Open" is the v2 build's question, condensed. "Mine" is my observation from the
text, labelled so you can discard it.

| # | Page | Open (v2 notes) | Mine |
|---|---|---|---|
| 01 | Home | Source and location for Scholem's "apocalyptic sting"; confirm the byline | The Leibowitz 1968 line has a citation on record in the Companion: "The Territories," 1968, as quoted in the dissertation, pp. 58–59. This page could carry the same note |
| 02 | How We Got Here | none | "written before October 2023": Uncertain whether your rule on "October 7" in any form covers a month-and-year. The page calls itself the table of contents but links nowhere; the v3 index does that job |
| 03 | Ein Medina | The last line's referent; which instances carry "That it counts as repetition is not" | Rav Dov Landau's 2025 letter recurs on Close Enough to Be Wrong; one source note would serve both pages |
| 04 | Reading | Author-approved source locations and review links | Four entries. Biale and Funkenstein carry no year. The Magid entry quotes "one reviewer" and names JRB, Commentary and The Nation without links |
| 05 | Historians on Historians | Confirm the Morris and the Shapira/Pappé formulations; attach passages | The Sparta and Masada pairing for Segev and Ohana has no source on the page. Both men also appear in the Companion's Epilogue list of public intellectuals (P, Epilogue) |
| 06 | LINKD | none | One sentence, no entries |
| 07 | Nation Undoing | "each of whom warned": name the security chiefs and the speeches, or keep as a research question | "The Undone Archive" is a name; Uncertain what it refers to. Kenan and Tammuz are the Companion's Chapter 1. The third reading, "undoing is not destruction", is the page's own position and needs no source; the Magid line "thinking through Zionism rather than against it" needs a page reference |
| 08 | Infantilization | The speech where the establishment uses Proverbs 30:22; dated passages showing who asks for loyalty and to whom | The page states its own method: tracking the migration "is an empirical project, not a polemic". It has no dated instance yet. It is the page nearest the book's Chapter 6 material, written as discourse analysis rather than literary history; keep that difference visible |
| 09 | Son of a Historian | Confirm which details are yours (the father, the name, the shelf, the dinners); do not publish assistant inference as autobiography | Nothing to add; yours to settle |
| 10 | Antisemitism Golem | The Lustick passage; confirm the Katz application as your own argument | Katz recurs on Iran ×22, where the essay title "When Is Anti-Zionism Antisemitic?" is given; the two pages should point at each other |
| 11 | The Too Late-Zionism | "it changed nothing": reception, political effect, or prevention?; whether "cannot defend the project and cannot leave it" is your position | "The Declassified Page, the companion artifact to the book" and its quoted last sentence are not in the Companion file I hold; Uncertain whether an earlier artifact is meant. "October 2023" again. "Too Late-Zionism" and "the too-late Zionist" are this site's coinages; fine here, never on book pages |
| 12 | Close Enough to Be Wrong | The Ben-Gurion wording conflict; the records behind the survey, the poem audit, the letter translations and the Ynet audit; error versus defensible difference | By the page's own words the exhibits are of two kinds: three document error (the Magid citation, the four models, the 52 errors) and one documents difference ("None is wrong. None is the same as any other."). The thesis sentence "meaning degrades when it crosses a border" fits the first three only |
| 13 | Iran ×22 | Edition, search rule and page distribution; concordance rows | Three counts on the page (Iran 22 against Israel 1; self-determination 19; antisemitism 37 against Palestinian 36); none gives an edition or a search rule |
| 14 | Exercise 8 | The speech passage and your lexical source; the contextual limits of the four options | Three further words are promised (מרות, מזב"ש, שליח ציבור). The form is the series' strongest |
| build | The build itself | The preface promises an "unverifiable-quote exhibit" the body does not contain; drafts are not locked; model reviews are reports, not evidence | See section 4 |

## 4. Three questions only you can answer

1. The missing exhibit. The v2 preface names three new pages: "the unverifiable-
   quote exhibit, the counting method, and the first Exercises in Practical
   Hebrew post". The body has Close Enough to Be Wrong, Iran ×22 and Exercise 8.
   Uncertain: whether Close Enough to Be Wrong is the exhibit under another name.
   Options: write it, rename, or drop the preface line.
2. The names. "The Declassified Page" (Too Late) and "The Undone Archive" (Nation
   Undoing): which artifacts are these, and do they still exist?
3. The date. "October 2023" appears on two pages. Does your rule cover it?

## 5. Next steps

1. Open `apps/state-less-v3.html` and read Home, Ein Medina, Close Enough to Be
   Wrong and Exercise 8 first; those carry the box layout. Say whether the dash
   default should stay "converted" or become "as written".
2. Answer the three questions in section 4.
3. Work the ledger from the cheapest fixes: Home (one citation, available), Golem
   (one Lustick passage), Infantilization (one speech location), then Reading
   (years and links), then the evidence records for Close Enough and Iran ×22.
4. Fill LINKD.
5. When a page is yours and sourced, tell me; I add a `status` field to that page
   in the data and the page kicker changes from "supplied v2" to "confirmed", with
   the notes it answered folded away. Until then every page keeps its label.
6. Keep the wall: nothing from these pages goes into the Companion or the
   manuscript. One-way links from state-less to the Companion (Leibowitz, Kenan,
   Tammuz) can come once the Companion has stable page anchors; it has none now.
