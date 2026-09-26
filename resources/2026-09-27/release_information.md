# Release Information - 2026-09-27

収集ウィンドウ: 2026-09-26 00:00 JST 以降（daily 版・24時間）

## anthropics/claude-code — v2.1.283

- **日付**: 2026-09-26（CHANGELOG 更新を確認）
- **リポジトリ**: https://github.com/anthropics/claude-code
- **CHANGELOG**: https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md

### 主な変更点

- **`/doctor prompt-audit` を追加**: CLAUDE.md、skills、agents、commands に書かれた「古いモデル向けのプロンプトパターン」を監査するコマンド。 `/checkup prompt-audit` でも実行可能。長期運用している設定ファイルの陳腐化を機械的に検出できる
- **エンタープライズ向けモデル管理を強化**:
  - `availableModelsMatch` managed setting を追加。`"exact"` を指定すると `availableModels` のエントリは記載されたバージョンのみを許可し、新リリースは明示的に追加するまでブロックされる
  - `deniedModels` managed setting を追加。`availableModels` が許可していても特定モデルをブロックできる
- **LLM ゲートウェイ向けに `x-claude-code-prompt-id` ヘッダーを追加**: 1 ユーザープロンプトを構成する複数リクエストをゲートウェイ側でグルーピング可能。`CLAUDE_CODE_GATEWAY_HINT_HEADERS=1` でオプトイン
- **Amazon Bedrock の `mantle` エンドポイント向け upstream provider を追加**
- **Claude apps gateway に `load_test_mode` ブロックを追加**（オプトイン）: リクエストを構築・署名するが上流には送信せず、クライアントには定型応答を返す。デプロイの負荷試験用
- **MCP 関連の修正・改善**:
  - 長時間ツール呼び出しをバックグラウンドに移した後も MCP progress 通知が破棄されないよう修正。バックグラウンドタスクに最新の進捗が表示される
  - MCP ツールが返す画像もファイルに保存され、Bash / Read など他ツールから開けるように
  - セッション終了時に起動中の stdio MCP サーバーが取り残される問題を修正
  - `/mcp` のツールリストが一度に多く表示され、ページキー・ホイール・クリックで操作可能に。組織にブロックされたツールには警告アイコン
- **`/context` が MCP サーバー指示を独立した行として集計するよう修正**
- **Windows: PowerShell ツールで `cmd /c rd` / `rmdir` / `del` などがドライブルートやホームフォルダを削除できてしまう重大バグを修正**
- このほか vim モードのカーソル修正、keybindings の誤字警告、Warp ターミナルでの markdown リンク修正など多数

## cline/cline — desktop-v0.0.37

- **日付**: 2026-09-26 11:27 JST
- **リリース**: https://github.com/cline/cline/releases/tag/desktop-v0.0.37
- **リポジトリ**: https://github.com/cline/cline

### 主な変更点

- 設定に **About ページ**を新設。バージョンとチャネル表示、`Check for updates` / `Restart to update` ボタン、最近のリリースノート一覧を同梱
- アップデート後の **What's new ダイアログ**を追加。初回分は SSH リモート、worktree、composer 内の PR ステータス、並列サブエージェントをカバー
- macOS の Help → Export Diagnostics… が診断情報エクスポートを直接開くように
- Amazon Bedrock 経由の OpenAI モデルで、inference profile（`us.openai.…` / `global.openai.…`）利用時に reasoning effort 設定で "Unknown parameter: 'reasoningConfig'" エラーになる問題を修正

## All-Hands-AI/OpenHands — v1.24.0

- **日付**: 2026-09-26 00:09 JST
- **リリース**: https://github.com/All-Hands-AI/OpenHands/releases/tag/v1.24.0
- **リポジトリ**: https://github.com/All-Hands-AI/OpenHands

### 主な変更点

- Conversations ヘッダーから全ワークスペースフォルダを一括トグル可能に
- クラウド上の共有 automation 会話を読み取り専用で開くように
- MCP OAuth 資格情報をクラウド保存時に保持し、トークンが有効なら同意画面をスキップ
- 保存済み LLM プロファイルが利用不可モデルを参照している場合に警告表示

## 窓外の確認事項

- google-gemini/gemini-cli: 安定版 v0.61.0 は 2026-09-24 リリース（https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0）で窓外。 nightly は日常的に更新されるため対象外
- openai/codex: rust-v0.159.0-alpha.5（2026-09-27 02:34 JST）はリリースノート本文なしの alpha pre-release のため対象外

STATUS: SUCCESS
RELEASES_FOUND: 3
