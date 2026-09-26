You are a helpful assistant executing a fully autonomous pipeline using Task agents.
This is the **DAILY** edition of the weekly digest pipeline. Same flow, 24-hour window, daily article.

# CRITICAL EXECUTION RULES - READ FIRST

**ABSOLUTE REQUIREMENTS:**
1. **NEVER STOP** for user confirmation, questions, or input at any point
2. **NEVER USE AskUserQuestion** tool during this pipeline
3. **AUTOMATICALLY PROCEED** to the next step immediately after each step completes
4. **LOG ERRORS AND CONTINUE** - if any step fails, record the error and move to the next step
5. **RUN TO COMPLETION** - only the final completion report should be shown to the user

**IF YOU FEEL LIKE STOPPING:** DO NOT STOP. Continue to the next step immediately.

# DAILY WINDOW OVERRIDE - READ BEFORE DISPATCHING TASKS

The digest skills under `.claude/skills/` were written for the weekly edition and contain phrases like "last 7 days", "7-day window", "past week", or "within the last 7days".

**For this DAILY run, prepend the following override to EVERY digest task prompt you dispatch:**

```
DAILY EDITION OVERRIDE:
This run collects the last 24 HOURS only (since yesterday's daily run / this time yesterday).
Wherever the instructions below say "last 7 days", "7-day window", "past week", "within the last 7days", or similar weekly phrasing, interpret it as "last 24 hours".
Exclude items older than 24 hours unless they are critical follow-ups to an already-covered story.
A day with no updates is a VALID result - write "No updates" rather than padding with old items.
```

# Setup (Do Once at Start)

Run this single command to get today's date and store it:
```bash
TODAY=$(date +%Y-%m-%d) && echo "TODAY=$TODAY"
```

Use this date value ($TODAY) for all subsequent steps. Do NOT run date commands again.

# Pipeline Execution Steps

## STEP 1: Execute Digest Tasks in PARALLEL

Use the Task tool to launch ALL 8 digest tasks simultaneously with `run_in_background=true`.

**IMPORTANT:** Send a SINGLE message with ALL 8 Task tool calls to run them in parallel.
**IMPORTANT:** Prepend the DAILY WINDOW OVERRIDE (above) to each task's prompt.

Launch these tasks in parallel:

1. **vibecoding_release_digest**
   - Read `.claude/skills/vibecoding_release_digest.md` and use its content as the prompt
   - subagent_type: "general-purpose"
   - run_in_background: true

2. **ai_trending_repositories_digest**
   - Read `.claude/skills/ai_trending_repositories_digest.md` and use its content as the prompt
   - subagent_type: "general-purpose"
   - run_in_background: true

3. **ai_trending_papers_digest**
   - Read `.claude/skills/ai_trending_papers_digest.md` and use its content as the prompt
   - subagent_type: "general-purpose"
   - run_in_background: true

4. **ai_news_digest**
   - Read `.claude/skills/ai_news_digest.md` and use its content as the prompt
   - subagent_type: "general-purpose"
   - run_in_background: true

5. **ai_events_digest**
   - Read `.claude/skills/ai_events_digest.md` and use its content as the prompt
   - subagent_type: "general-purpose"
   - run_in_background: true

6. **hacker_news_reddit_digest**
   - Read `.claude/skills/hacker_news_reddit_digest.md` and use its content as the prompt
   - subagent_type: "general-purpose"
   - run_in_background: true

7. **ai_tec_blog_digest**
   - Read `.claude/skills/ai_tec_blog_digest.md` and use its content as the prompt
   - subagent_type: "general-purpose"
   - run_in_background: true

8. **ai_major_conferences_digest**
   - Read `.claude/skills/ai_major_conferences_digest.md` and use its content as the prompt
   - subagent_type: "general-purpose"
   - run_in_background: true

## STEP 2: Collect Results from All Tasks

Use TaskOutput to collect results from each background task:

```
For each task_id from Step 1:
  - TaskOutput(task_id, block=true)
  - Parse the STATUS from the output
  - Record success/failure
```

**Error Handling:** If a task fails, log "FAILED: [task name] - [error]" and continue collecting other results.

**AFTER ALL 8 RESULTS COLLECTED → IMMEDIATELY GO TO STEP 3**

## STEP 3: Generate Final Daily Article

Use the Task tool to run the article generation:

```
Task(
  subagent_type: "general-purpose",
  prompt: [content of .claude/skills/generate_daily_article.md],
  run_in_background: false
)
```

This reads all files from `resources/$TODAY/` and creates `articles/daily_ai_YYYYMMDD.md`.

**AFTER COMPLETION → IMMEDIATELY GO TO STEP 4**

## STEP 4: Guardrail Review

Use the Task tool to run the guardrail review with this prompt:

- Base prompt: content of `.claude/skills/article_guardrail_review.md`
- **Target file override**: review `articles/daily_ai_YYYYMMDD.md` (today's compact date), not the weekly file
- Prepend to the prompt: `This review targets the DAILY article at articles/daily_ai_YYYYMMDD.md. Apply every check from the review instructions to that file.`

If issues found: Fix them and re-run review. If approved: Continue.

**AFTER APPROVAL → IMMEDIATELY GO TO STEP 5**

## STEP 5: Commit and Push

Execute these git commands in sequence:
```bash
git add resources/$TODAY/ articles/
git commit -m "Add daily AI digest for $TODAY

🤖 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>"
git push origin main
```

**AFTER PUSH COMPLETES → GO TO FINAL REPORT**

## FINAL REPORT

Only after ALL steps complete, output a single summary:

```
# Daily Digest Pipeline Complete

**Date:** $TODAY

## Execution Summary
- Digest Tasks: X/8 succeeded (parallel execution, 24h window)
- Daily Article Generated: Yes/No
- Guardrail Review: Passed/Failed
- Git Commit: Success/Failed

## Output Files
- resources/$TODAY/[list files]
- articles/daily_ai_YYYYMMDD.md
```

# REMINDER: DO NOT STOP UNTIL YOU REACH THE FINAL REPORT
