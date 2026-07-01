# Release Information Digest (2026-06-24 ~ 2026-07-01)

## anthropics/claude-code

**Latest Version:** 2.1.197 (2026-06-30)

**Repository:** https://github.com/anthropics/claude-code
**CHANGELOG:** https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md

### 2.1.197 (2026-06-30)

- **Claude Sonnet 5**: Now the default model in Claude Code, with a native 1M-token context window and promotional pricing of $2/$10 per Mtok through August 31, 2026
- Full announcement: https://www.anthropic.com/news/claude-sonnet-5

### 2.1.196 (2026-06-29)

- **Organization Default Models**: Admins can set default models in the org console; appears as "Org default" or "Role default" in `/model`
- **Readable Session Names**: Sessions now have readable default names at start for easier identification
- **Clickable File Attachments**: Cmd/Ctrl-click reveals attached files in Finder/Explorer
- **Security Enhancement**: `claude mcp list`/`get` no longer spawn `.mcp.json` servers from untrusted workspace `.claude/settings.json`
- **Bug Fixes**: Multiple fixes for background jobs, rate-limit telemetry, PowerShell commands, agents panel, and MCP OAuth

### 2.1.195 (2026-06-27)

- **Mouse Control Setting**: `CLAUDE_CODE_DISABLE_MOUSE_CLICKS` to disable mouse interactions in fullscreen mode
- **Hook Matcher Fix**: Hyphenated identifiers now exact-match (use `mcp__brave-search__.*` for wildcard matching)
- **Voice Dictation Improvements**: Fixed silence capture in long-running macOS sessions and auto-submit for spaceless languages
- **Background Agents**: Improved reliability and reduced crash recovery time

---

## cline/cline

**Latest Version:** v4.0.5 (2026-06-30)

**Repository:** https://github.com/cline/cline
**Release:** https://github.com/cline/cline/releases/tag/v4.0.5

### Changes

- **Claude Sonnet 5 Support**: Added support across Anthropic, Bedrock, Vertex, Claude Code, SAP AI Core, OpenRouter, and Vercel AI Gateway providers
- Updated model picker and recommended-model settings

---

## Cursor

**Latest Update:** Jun 30, 2026 (Version 3.9)

**Website:** https://cursor.sh
**Changelog:** https://cursor.sh/changelog

### Team MCPs and Organizations in Team Marketplaces (Jun 30, 2026)

- **Team MCPs**: Admins can configure Team MCP servers once and distribute across cloud agents, agents window, IDE, and CLI
- **Organization Groups**: Team marketplaces now support organization groups in addition to SCIM directory groups

### Cursor Mobile App for iOS (Jun 29, 2026)

- **Public Beta**: Cursor for iOS now available on all paid plans
- **Cloud Agents on Mobile**: Launch and manage always-on agents from anywhere
- **Remote Control**: Direct agents running on your computer from your phone
- **Live Activities & Push Notifications**: Track agent status on lock screen
- **Artifacts & SCM**: Review demos, screenshots, logs, and diffs; merge PRs directly from app

---

## github/copilot-cli

**Latest Version:** v1.0.67 (2026-06-30)

**Repository:** https://github.com/github/copilot-cli
**Release:** https://github.com/github/copilot-cli/releases/tag/v1.0.67

### Changes

- **Sandbox Behavior**: Disabling sandbox now takes effect immediately for the rest of the session
- **Subagent Restrictions**: Subagent sessions keep parent tool restrictions
- **Error Handling**: Show warnings when host custom agents fail to load
- **Session Limits**: Minimum requirement of 30 AI credits
- **Claude Sonnet 5**: Added as a supported model
- **Hook Timeouts**: Tool calls continue when hooks time out
- **UI Enhancement**: Ctrl+Q enqueues highlighted slash-command argument completion
- **OAuth Fix**: MCP OAuth against Microsoft Entra vanity domains (e.g., Copilot Studio) no longer fails to refresh

---

## Kiro

**Latest Updates:** Jun 24 - Jul 1, 2026

**Website:** https://kiro.dev
**Changelog:** https://kiro.dev/changelog/

### Claude Sonnet 5 Now Available (Jul 1, 2026)

- Claude Sonnet 5 now available in IDE, CLI, and Web
- Anthropic's most agentic Sonnet with stronger reasoning, tool use, and coding
- Approaches Opus 4.8 performance at Sonnet-class pricing
- Plans before editing, runs longer without supervision, checks own output
- Full 1M context window, 1.3x credit multiplier
- Rolling out to Pro, Pro+, Pro Max, and Power customers in AWS US-East-1 and Europe (Frankfurt)

### Config Hot-Reload and Resource Inheritance Control (Jun 26, 2026) - CLI 2.10.0

- **MCP/Agent Hot-Reload**: Configurations reconcile live when saved without restarting session
- **Custom Agent Setting**: `chat.disableInheritingDefaultResources` to opt out of inheriting default resources

### Agent Focus, Permissions, Custom Agents (Jun 25, 2026) - IDE 1.0.0

- **Agent Focus (Experimental)**: Chat-first layout for directing multiple parallel agents
- **Permissions System**: Capability-based permissions evaluating file reads, command execution, MCP calls
- **Custom Agents**: Build specialized agents in Markdown with tool access tags
- **Natural Language Hooks**: Describe automation in natural language, Kiro generates hook config
- **Dockable Chat**: Open chat sessions as full-width editor tabs
- **Agent Selection**: Switch agents mid-session without losing conversation history

### V3 Stability Fixes (Jun 24, 2026) - CLI 2.9.0

- Fixed session expiration for Entra ID (Azure AD) users
- Resolved approval prompt loops for compound shell commands in V3
- Added compact tool card previews for sub-agent calls

---

## google-gemini/gemini-cli

**Latest Version:** v0.51.0-nightly.20260701 (2026-07-01)

**Repository:** https://github.com/google-gemini/gemini-cli
**Release:** https://github.com/google-gemini/gemini-cli/releases/tag/v0.51.0-nightly.20260701.g7f00c5fe5

### Changes

- **Core Tools Fix**: Resolved defensive path resolution for at-reference files and fixed macOS tests
- **Caretaker Feature**: Implemented Cloud Run webhook ingestion service

---

## microsoft/vscode

**Latest Version:** 1.127.0 (2026-07-01)

**Repository:** https://github.com/microsoft/vscode
**Release:** https://github.com/microsoft/vscode/releases/tag/1.127.0

### Changes

- **Token Pricing**: Updated normalization to support legacy "flat" pricing payload (June 23, 2026)
- *Note: No AI-specific features or GitHub Copilot changes in this release*

---

## OpenHands (formerly OpenDevin)

**Latest Version:** cloud-1.40.0 (2026-06-26)

**Repository:** https://github.com/All-Hands-AI/OpenHands
**Release:** https://github.com/All-Hands-AI/OpenHands/releases/tag/cloud-1.40.0

### Features

- **Git History Setting**: Add full Git history user setting
- **Enterprise**: Admin user-provisioning endpoint
- **Agent Pause UI**: Use interrupt endpoint for agent pause UI
- **User Settings**: Add `default_sandbox_spec_id` to user settings
- **Azure DevOps**: Add resolver mentions + org-level one-click webhook setup
- **Jira DC**: Email-mode auto-link, targeted repo lookup, and picker mentions

### Bug Fixes & Security

- Multiple CVE fixes (OpenTelemetry, Pydantic, Protobufjs, WebSocket)
- Improved LLM key resolution and frontend polling behavior
- Python dependency freshness guardrails

---

## openai/codex

**Latest Version:** rust-v0.143.0-alpha.32 (2026-07-01)

**Repository:** https://github.com/openai/codex
**Release:** https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.32

### Release 0.143.0-alpha.32

- Pre-release version with binary distributions for multiple platforms
- Includes codex CLI, app server, command runner, and responses API proxy
- NPM packages and Python wheels available

---

## Continuedev/Continue

**Latest Version:** v2.0.0-vscode (2026-06-19)

**Repository:** https://github.com/continuedev/continue
**Release:** https://github.com/continuedev/continue/releases/tag/v2.0.0-vscode

*No new releases in the past 7 days (latest is from June 19)*

---

## paul-gauthier/aider

**Latest Version:** v0.86.0 (2025-08-09)

**Repository:** https://github.com/paul-gauthier/aider
**Release:** https://github.com/paul-gauthier/aider/releases/tag/v0.86.0

*No new releases in the past 7 days (latest is from August 2025)*

---

## sourcegraph/cody

**Status:** Repository not found or renamed

*The repository `sourcegraph/cody` could not be found on GitHub*
