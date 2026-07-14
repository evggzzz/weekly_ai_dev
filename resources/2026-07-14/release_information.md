# 開発ツール リリース情報 - 2026-07-14

> 対象期間: 2026-07-08 〜 2026-07-14

## Claude Code (anthropics/claude-code) — v2.1.207 / v2.1.206
- **日付**: 2026-07-11（CHANGELOG 最終更新）
- **リポジトリ**: https://github.com/anthropics/claude-code
- **CHANGELOG**: https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md

### v2.1.207 の主な変更
- Auto mode が `CLAUDE_CODE_ENABLE_AUTO_MODE` オプトインなしで Bedrock / Vertex AI / Foundry で利用可能に（無効化は設定の `disableAutoMode`）
- 非常に長いリスト・表・段落・コードブロックを含むレスポンス配信中の端末フリーズ・キー遅延を修正
- `claude -p` / SDK など非対話実行でリモート管理設定が同意ダイアログなしに恒久的に同意扱いになる問題を修正
- 自動アップデータが `~/.local/bin/claude` のカスタムランチャーやシンボリックリンクを毎リリース上書きする問題を修正（`/doctor` が外部管理ランチャーを報告）
- Bedrock / Vertex / Claude Platform on AWS が Claude Opus 4.8 をデフォルト化
- プラグインセキュリティ: シェル形式コマンドでの `${user_config.*}` 展開を拒否（インジェクション修正）、`pluginConfigs` をプロジェクト級 `.claude/settings.json` から読まない

### v2.1.206 の主な変更
- `/doctor` がチェックイン済み `CLAUDE.md` の肥大化を検知し、削減提案を出す
- `/commit-push-pr` が `remote.pushDefault`（または唯一のリモート）への `git push` を自動許可
- `EnterWorktree` が `.claude/worktrees/` 外の worktree 进入前に確認を取る
- MCP サーバーの per-server `request_timeout_ms` が `--mcp-config` / `.mcp.json` で無視される問題を修正
- バックグラウンドエージェントが更新後にバックグラウンドで自動アップグレードする（attach 時の遅延アップグレードを回避）

### 開発者への影響
Auto mode の前提環境が拡大し、マネージド基盤（Bedrock/Vertex/Foundry）で Opus 4.8 デフォルトが揃った。`/doctor` による CLAUDE.md 健全化と `/commit-push-pr` の push 自動許可で、CI や自動化フローの手戻りが減る。

## GitHub Copilot CLI (github/copilot-cli) — v1.0.70
- **日付**: 2026-07-10
- **リポジトリ**: https://github.com/github/copilot-cli
- **リリース**: https://github.com/github/copilot-cli/releases/tag/v1.0.70

### 主な変更
- GPT-5.6 モデルサポート追加
- `/refine` — 荒いプロンプトを明確なプロンプトに書き直すコマンド
- `--sandbox` / `--no-sandbox` フラグ — セッション単位で OS レベルのシェルサンドボックスを切替（保存設定は変えない、`-p` と併用想定）
- 信頼済みリポジトリが `.github/copilot/settings.json` でモデル・effort・context tier を固定し、URL/MCP/skill の deny リストを拡張
- `preToolUse` フックが exit code 2 でツール呼び出しを拒否
- Forge が明確なワークフローパターンを検出した際にドラフトスキルを作成
- `web_fetch` が必須 HTTPS プロキシ経由で動作
- paginated な `session.mcp.resources` の read/list/listTemplates RPC（MCP サーバーリソース操作）
- `/settings`・`/model` に `--repo` / `--local` フラグ追加
- Ctrl+Y でプランファイルやリサーチレポートを任意モードで開く
- SDK API で実行中セッションの MCP サーバーを管理

### 開発者への影響
GPT-5.6 を CLI から扱えるのに加え、`--sandbox` と `preToolUse` の exit-code 拒否でエージェント実行の安全境界が強化された。`.github/copilot/settings.json` によるチーム単位のモデル/権限ピン留めは、組織運用に直結する。

## Cursor — 3.11
- **日付**: 2026-07-10
- **サイト**: https://cursor.com
- **Changelog**: https://cursor.com/changelog

### 主な変更
- `/automate` スキル追加
- GitHub / Slack トリガー追加
- computer use サポート

### 開発者への影響
`/automate` と外部トリガー（GitHub/Slack）で、エディタ外のイベントから Cursor のエージェントを起動できる。computer use によりブラウザやデスクトップ操作まで担う範囲が広がる。

## Gemini CLI (google-gemini/gemini-cli) — v0.50.0
- **日付**: 2026-07-08
- **リポジトリ**: https://github.com/google-gemini/gemini-cli
- **リリース**: https://github.com/google-gemini/gemini-cli/releases/tag/v0.50.0

### 主な変更
- Tool Registry Discovery 機能（ツールレジストリの動的発見）
- CI/release 検証の安定化: bad NPM release の防止、workspace binary shadowing の防止

### 開発者への影響
ツールレジストリの動的発見により、MCP や外部ツールの取り込みが柔軟になる方向。リリースパイプライン強化は安定性向上。

## Cline (cline/cline) — cli-v3.0.40
- **日付**: 2026-07-13
- **リポジトリ**: https://github.com/cline/cline
- **リリース**: https://github.com/cline/cline/releases/tag/cli-v3.0.40

### 主な変更
- OAuth プロバイダーに手動 API キー入力のエスケープハッチを追加
- モデル切替時にプロバイダー設定が再読み込みされない問題を修正
- Bun グローバルインストールでの自動更新検出を修正
- ClinePass 利用上限エラーを明示化、セッション ID 保持、コンテキスト圧縮バジェット強化

### 開発者への影響
OAuth 認証のつまずき（トークンリフレッシュ失敗等）を手動キーで回避可能に。モデル切替の信頼性向上。

## Kiro — IDE 1.0.138 / 1.0.116, CLI 2.12.1
- **日付**: 2026-07-13（1.0.138）/ 2026-07-09（1.0.116, CLI 2.12.1）
- **サイト**: https://kiro.dev
- **Changelog**: https://kiro.dev/changelog/

### 主な変更
- IDE 1.0.138: セッション高速化・圧縮修正・PowerShell トラスト
- IDE 1.0.116: エージェント書き込み時のフック・遅延 MCP 認証・マルチウィンドウ同期
- CLI 2.12.1: MCP OAuth サポート拡張

### 開発者への影響
エージェントの書き込み操作をフックで制御でき、マルチウィンドウでの並列作業が安定する。CLI の MCP OAuth 拡張で認証付き MCP サーバー運用が楽になる。

## VS Code (microsoft/vscode) — 1.128.0 [AI/Copilot 関連]
- **日付**: 2026-07-08
- **リポジトリ**: https://github.com/microsoft/vscode
- **リリースノート**: https://code.visualstudio.com/updates/v1_128

### 主な変更（AI/Copilot 関連のみ）
- リッチなマルチチャットエージェントセッション
- Copilot Chat で画像サポートが GA
- BYOK ユーティリティモデル設定、エージェントワークフロー拡張、チャット添付・ブラウザタブ制御

### 開発者への影響
複数エージェントを並列チャットで進行でき、画像入力が安定利用に。BYOK 設定で自带キー運用が整理された。

## OpenHands (All-Hands-AI/OpenHands) — cloud-1.46.0
- **日付**: 2026-07-10
- **リポジトリ**: https://github.com/All-Hands-AI/OpenHands
- **リリース**: https://github.com/All-Hands-AI/OpenHands/releases/tag/cloud-1.46.0

### 主な変更
- 最終アーカイブマニフェスト強化・初期スナップショット削除
- BYOR キーエイリアスパターンを設定可能化
- LIFO DB コネクションプーリング、予算アラート SMTP 環境変数、オブザーバビリティコンテキスト保持

### 開発者への影響
クラウド版の安定性・観測性向上。BYOR（Bring Your Own Runtime）のキー運用が設定で制御可能に。

---

**対象外（7日窓外／実質変更なし）**: paul-gauthier/aider (v0.86.0, 2025-08-09), continuedev/continue (v2.0.0-vscode, 2026-06-19), openai/codex (rust-v0.144.3, バージョンのみのリリース), sourcegraph/cody (GitHub Releases なし)
