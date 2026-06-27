# Release Information (2026-06-20 ~ 2026-06-27)

## google-gemini/gemini-cli v0.49.0 (2026-06-25)

### Summary
- **Repository**: https://github.com/google-gemini/gemini-cli
- **Release**: https://github.com/google-gemini/gemini-cli/releases/tag/v0.49.0

### Key Changes
- Added `eval:inventory` CLI command for static analysis source evaluation with JSON output support
- Fixed zero-quota limits failing fast to prevent retry loop hangs
- Fixed path traversal vulnerabilities during skill install
- Fixed tmux false positive background detection
- Added GDC air-gapped Service Identity support
- Standardized tool output formatting
- Enabled cooldown period for npm packages in Dependabot

---

## anthropics/claude-code 2.1.195 (2026-06-26)

### Summary
- **Repository**: https://github.com/anthropics/claude-code
- **CHANGELOG**: https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md

### Key Changes
- Added `CLAUDE_CODE_DISABLE_MOUSE_CLICKS` to disable mouse interactions in fullscreen mode
- Fixed hook matchers with hyphenated identifiers (now exact-match instead of substring-match)
- Fixed voice dictation on macOS (silence capture in long sessions, auto-submit for Japanese/Chinese/Thai)
- Fixed background agents disappearing after Claude Code updates
- Fixed `/plugin` Enable/Disable when plugin name differs from marketplace entry
- Improved voice mode on Linux (distinguishes "no microphone" from "SoX not installed")
- Improved Remote session startup with provisioning checklist

---

## Cursor 3.9 (2026-06-22)

### Summary
- **Website**: https://cursor.sh
- **Changelog**: https://cursor.sh/changelog

### Key Changes
- **Customize Page**: Unified management for plugins, skills, MCPs, subagents, rules, commands, and hooks
- **Marketplace Leaderboard**: Shows most popular plugins/skills/MCPs across teams
- **Plugin Canvases**: Prebuilt templates (Hex Canvas for data viz, Atlassian Canvas for issues/projects)
- **Team Marketplaces**: Now supports GitLab, BitBucket, and Azure DevOps imports

---

## Cursor 3.8 (2026-06-18)

### Key Changes
- **/automate skill**: Create automations directly in local agent sessions
- **Slack Emoji Trigger**: React to messages to kick off automations
- **New GitHub Triggers**: Issue comment, PR review comment, PR review submitted, review thread updated, workflow run completed
- **Computer Use for Automations**: Cloud agents can use computers to produce demos

---

## microsoft/vscode 1.126.0 (2026-06-24)

### Summary
- **Repository**: https://github.com/microsoft/vscode
- **Release**: https://github.com/microsoft/vscode/releases/tag/1.126.0

### AI-Related Changes
- **Session-level cost information**: See total cost for entire chat sessions
- **Multiple chats per session**: Run several chats side by side in one agent host Copilot session
- **Unified model customization picker**: Combined context size and reasoning controls
- **Agentic code feedback**: Comments stored on agent host, agent can interact with feedback

---

## cline/cline v4.0.0 (2026-06-26)

### Summary
- **Repository**: https://github.com/cline/cline
- **Release**: https://github.com/cline/cline/releases/tag/v4.0.0

### Major Features
- **SDK-backed VS Code extension**: New runtime for agent turns, tools, Plan/Act mode, MCP, telemetry
- **ClinePass**: Onboarding, provider selection, signup, subscription, live model lists
- **Customize Marketplace**: Discover and manage Skills, MCP servers, and Plugins
- **Cline Plugins**: Extend with custom tools, workflows, skills, and MCP-powered capabilities
- **Queued prompts**: Messages submitted while Cline is working are queued and shown
- **Generic SDK provider settings**: More providers can share model picker and controls
- **New providers**: Fireworks GLM 5.2, Kimi K2.6 Fast, Kimi K2.7 Code, Qwen 3.7 Plus, MiniMax M3, SAP AI Core

---

## openai/codex v0.142.3 (2026-06-26)

### Summary
- **Repository**: https://github.com/openai/codex
- **Release**: https://github.com/openai/codex/releases/tag/rust-v0.142.3

### Key Changes
- Maintenance-only patch release with no user-facing changes

---

## github/copilot-cli v1.0.65 (2026-06-24)

### Summary
- **Repository**: https://github.com/github/copilot-cli
- **Release**: https://github.com/github/copilot-cli/releases/tag/v1.0.65

### Key Changes
- `/cd` now persists working directory and discovers custom agents in new directory
- Slash-prefixed string arguments (e.g. `--body "/azp run"`) no longer trigger filesystem permission prompts
- Fullscreen timeline stays anchored when older content is trimmed
- Resume open canvases automatically after restarting CLI
- Added `copilot skill` subcommand (and `/skill` alias)
- Up/down history and Ctrl+R now include past shell commands in normal mode

---

## Kiro CLI 2.10.0 (2026-06-26)

### Summary
- **Website**: https://kiro.dev
- **Changelog**: https://kiro.dev/changelog/

### Key Changes
- **MCP and Agent Config Hot-Reload**: Changes take effect without restarting session
- **Custom Agent Resource Inheritance**: New `chat.disableInheritingDefaultResources` setting

---

## Kiro IDE 1.0.0 (2026-06-25)

### Key Changes
- **Agent Focus (Experimental)**: Direct multiple agents from chat-first layout
- **Permissions**: Capability-based system for file read, command execution, MCP calls
- **Custom Agents**: Build specialized agents with Markdown files and tool access tags
- **Natural Language Hooks**: Describe automation and Kiro generates hook configuration
- **Dockable Chat**: Open sessions as full-width editor tabs
- **Agent Selection**: Switch agents without losing conversation history

---

## Kiro CLI 2.9.0 (2026-06-24)

### Key Changes
- Fixed session expiration for Entra ID (Azure AD) users
- Fixed approval prompt loops for compound shell commands in V3
- Added compact tool card previews for sub-agent calls
