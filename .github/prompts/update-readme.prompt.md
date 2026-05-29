---
description: "Update README.md for this project"
name: "Update README"
argument-hint: "What should change in README.md (audience, sections, content)"
agent: "agent"
---
Update README.md in this workspace based on the user's request: $ARGUMENTS.
- Read the existing README.md and preserve its tone and structure unless change is requested.
- Update only the sections impacted by the request; avoid unrelated edits.
- Keep formatting clean and consistent (headings, lists, code blocks).
- If key information is missing to complete the update, ask concise questions before editing.
- Apply changes directly to README.md and summarize what changed.
