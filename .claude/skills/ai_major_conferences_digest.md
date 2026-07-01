You are a helpful assistant. Your task is to find upcoming MAJOR AI / developer conferences (large-scale, planned months ahead) and list them. This complements `ai_events_digest` (Connpass meetups, near-term) by covering large conferences that need advance planning.

**Date Calculation:**
First, confirm today's date:
```bash
date +%Y-%m-%d
```

**Scope:**
- **Period**: events in the next ~6 months from today (NOT just this week). These are large conferences people plan for: travel, CFP submission, time-off.
- **Focus**: AI engineering / AI-driven development relevant (agents, LLM, AI infra, cloud+AI, ML frameworks, MCP).
- **Size**: large conferences only. EXCLUDE small meetups (those belong to `ai_events_digest` / Connpass).

**Sources to check:**

1. **Linux Foundation Events** (primary aggregator — covers most)
   - URL: https://events.linuxfoundation.org/
   - Covers: AGNTCon, MCPCon, MCP Dev Summit, KubeCon + CloudNativeCon, PyTorch Conference, Open Source Summit, Cloud Native AI & Inference Day
   - Note: AGNTCon/MCPCon are organized by the Agentic AI Foundation (LF umbrella), NOT Anthropic. Many have Japan/Asia editions.

2. **NVIDIA GTC**
   - URL: https://www.nvidia.com/gtc/ (and regional e.g. https://www.nvidia.com/en-eu/gtc/)
   - AI infra/hardware frontier.

3. **The AI Conference**
   - URL: https://aiconference.com/
   - Anthropic/OpenAI/Google speakers gather.

4. **AWS re:Invent + AWS Events**
   - URL: https://aws.amazon.com/events/ and https://aws.amazon.com/events/reinvent/
   - Year-end largest cloud+AI conference + regional Summits (incl. AWS Summit Tokyo when announced).

5. **KubeCon + CloudNativeCon** (direct, if LF aggregator is unclear)
   - URL: https://www.cncf.io/events/

6. **Sessionize** (CFP / event aggregator)
   - URL: https://sessionize.com/

7. **Japan conferences** (check official sites for 2026 dates):
   - デブサミ (Developers Summit), CEDEC, JJUG CCC, JSUG — list if 2026 dates are public.

**Execution Steps:**
1. Use WebFetch (`mcp__searxng__web_url_read` → `mcp__web_reader__webReader` → `mcp__searxng__searxng_web_search` → `mcp__pplx-proxy__perplexity_search`). On bot-block/JS-render, fall back to Playwright (`cd weekly_ai_dev && node script.js`).
2. **sandbox note**: for Bash needing network (npx/node/curl), use `dangerouslyDisableSandbox: true`.
3. For each event, confirm the date on the official page — **no guessing dates**.
4. Filter: next 6 months AND AI-dev relevant.
5. Include both global and Japan/Asia events.

**Output Format:**
```markdown
# Major AI Conferences - [TODAY_DATE]

> 今後約6ヶ月の大型カンファレンス（旅行・CFP・休暇調整の計画用）。小規模なもくもく会は ai_events_digest 側へ。

## Global

### [Conference Name]
- **Date**: [start–end, YYYY-MM-DD]
- **Location**: [city, country]
- **Organizer**: [org]
- **URL**: [official URL]
- **開発者向けポイント**: [why AI-dev relevant / what to expect]

## Japan / Asia
[same format]

## 日程未公表（要追跡）
- [Google I/O / MS Build / AWS Summit Tokyo / OpenAI DevDay / デブサミ / CEDEC 等 — 2026年日程が未公表のもの]
```

If nothing found: "今後6ヶ月以内の大型カンファレンス情報は取得できませんでした。"

**Completion Output:**
```
STATUS: SUCCESS
FILE: resources/[TODAY_DATE]/major_conferences.md
CONFERENCES: [number]
```
