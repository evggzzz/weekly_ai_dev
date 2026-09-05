# 開発ツール リリース情報 - 2026-09-05

> 対象期間: 2026-08-30 〜 2026-09-05

## Claude Code (anthropics/claude-code) — v2.1.261
- **日付**: 2026-09-04（CHANGELOG 最終更新）
- **リポジトリ**: https://github.com/anthropics/claude-code
- **CHANGELOG**: https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md

### 主な変更
- `/skill-doctor` 追加 — 読み込まれているスキルのうち未使用のものと、それぞれが消費しているコンテキスト量を表示し、削減判断を支援
- `bashOutputMaxChars` / `taskOutputMaxChars` 設定追加 — コマンドやバックグラウンドタスクの出力をファイル保存せずインラインで受け取れる上限を最大 128K 文字まで拡張
- `--append-subagent-system-prompt-file` 追加 — サブエージェントのシステムプロンプトをファイルから読める（CLI 引数に収まらない大きなプロンプト向け）
- `/status` と `claude doctor` に「Organization policy」行を追加 — 組織ポリシーがロードできない理由（プロキシがエンドポイントを通していない等）を表示
- 高速入力・キーリピート時に打鍵が入れ替わったり落ちたりする問題を修正
- Bedrock セットアップウィザードが AWS 応答なしで固まる問題、TLS 検査プロキシ配下でのモデルチェック失敗を修正
- 再開できないバックグラウンドエージェントが高 CPU のままリトライし続ける問題を修正
- Remote Control（電話/ブラウザ接続）の stale permission mode 表示・停止後もスピナーが回る問題などを修正

### 開発者への影響
スキルが増えすぎたプロジェクトのコンテキスト肥大を `/skill-doctor` で可視化できるようになり、運用の健全化が進む。長い出力を扱うワークフローでは `bashOutputMaxChars` によりファイル経由の手間が減る。

## GitHub Copilot CLI (github/copilot-cli) — v1.0.83
- **日付**: 2026-09-04
- **リポジトリ**: https://github.com/github/copilot-cli
- **リリース**: https://github.com/github/copilot-cli/releases/tag/v1.0.83

### 主な変更
- claude-fable-5.1 モデルサポートを追加
- カスタムエージェントが `model` に複数モデルを列挙可能（順にフォールバック）、`model-policy: required` でそのリストから外れないよう強制
- MCP OAuth サインインに Client ID Metadata Document (CIMD) 対応
- Windows 11 タスクバーに実行中セッションの状態カードを表示
- サンドボックス内 `gh` コマンドが Copilot CLI のログインではなくリポジトリに設定されたアカウントで認証
- サンドボックスのファイルツールがシェルと同じ開発ツールパス（`~/.npmrc` 等のトークン含む）を読めるように。無効化は `sandbox.allowDevToolAccess: false`
- macOS/Linux でサンドボックス内コマンドがローカルホスト上のサービスへ到達できなくなった（macOS はコマンド自身が起動した 127.0.0.1 サーバーも遮断。`/sandbox` の Allow local network で緩和）
- Linux サンドボックスのネットワーク出口を設定済みプロキシに制限（slirp4netns / util-linux 2.35+ / iptables / /dev/net/tun が必要）
- 一時的なフォールバック後も Anthropic セッションが継続するよう修正（invalid thinking signatures で失敗しない）
- エンタープライズ: `forceLoginOrgs` 管理設定で承認済み GitHub 組織へのサインインを強制、管理ポリシー解決前に拒否済み MCP サーバーが起動しないよう修正
- `/mcp config` と MCP 追加/編集/認証フォームをプラグインダッシュボード内で開くように変更
- プラグイン由来の MCP サーバーを「User」ではなく built-in 表示し、供給元プラグイン名を表示

### 開発者への影響
Fable 5.1 を CLI から直接使えるようになった。サンドボックスのネットワーク遮断強化（localhost 含む）は「テストがローカルポートを bind すると失敗する」という具体的な挙動変化を伴うため、CI・テスト実行環境の見直しが必要。`model-policy: required` による複数モデル列挙は、モデル在庫が流動的な環境でのレート制限対策として実用的。

## OpenAI Codex (openai/codex) — rust-v0.153.4
- **日付**: 2026-09-04
- **リポジトリ**: https://github.com/openai/codex
- **リリース**: https://github.com/openai/codex/releases/tag/rust-v0.153.4

### 主な変更（hotfix）
- Astra（GPT-6 Astra）がバンドルのモデルピッカーに表示され、モデルを明示設定しない場合のデフォルトになった
- Astra の非同期質問のガイダンスを、セッションでツールが利用可能な場合に限定するよう修正

### 開発者への影響
GPT-6 Astra 公開（9/3）に即応した hotfix。Codex CLI をデフォルト設定のまま使うと自動的に Astra が選択されるため、挙動の変化を把握した上で使いたい。

## Cline (cline/cline) — desktop-v0.0.23
- **日付**: 2026-09-03
- **リポジトリ**: https://github.com/cline/cline
- **リリース**: https://github.com/cline/cline/releases/tag/desktop-v0.0.23

### 主な変更
- Agent Plugins を共有 Hub が発見・実行するように。`~/.agents/plugins` 配下のパッケージを `plugin.json` で検証し、有効な Agent Skills をエージェントに提供、stdio / Streamable HTTP / SSE の MCP サーバーを自動起動
- サインイン時にアプリ側へデバイス確認コードを表示（ブラウザ側のコードと照合可能に）
- 「Cline Hub was updated」ダイアログが毎回出る問題を修正（同一コアバージョンでは表示しない等）
- 1 つの固まった MCP サーバーが他のシャットダウンを阻害してプロセスがリークする問題を修正
- 音声入力の失敗時に設定画面へ直接遷移するよう改善

### 開発者への影響
`~/.agents/plugins` という共通規約でのプラグイン配布が機能し、Agent Skills + MCP サーバーを1パッケージで配れるようになった。エコシステム横断の「Agent Plugins」標準が実装レベルで動き始めた例。

## VS Code (microsoft/vscode) — 1.136.1 [AI/Copilot 関連]
- **日付**: 2026-09-03
- **リポジトリ**: https://github.com/microsoft/vscode
- **リリースノート**: https://code.visualstudio.com/updates/v1_136

### 主な変更（AI/Copilot 関連のみ）
- エージェントで PR を完遂するワークフローの強化
- 複雑なワークスペースと関連チャットを横断したエージェント作業の管理

### 開発者への影響
PR の仕上げ（レビュー対応・修正・マージ前確認）をエージェントに任せる流れが IDE 標準機能として整備された。複数ワークスペース横断の並行エージェント作業の管理画面も進んでいる。

## Gemini CLI (google-gemini/gemini-cli) — v0.58.0
- **日付**: 2026-09-01
- **リポジトリ**: https://github.com/google-gemini/gemini-cli
- **リリース**: https://github.com/google-gemini/gemini-cli/releases/tag/v0.58.0

### 主な変更
- macOS Seatbelt サンドボックスで Docker / コンテナランタイムのソケットとバイナリを分離
- 書き込みポリシー設定にトップレベルの safety checker を宣言できるように
- history rollback と retry nudge の最適化
- a2a-server で新しいメッセージターン時に残ったキャンセルエラーをクリア

### 開発者への影響
サンドボックスとコンテナランタイムの境界分離が進み、ローカル実行時の安全境界が固まった。書き込みポリシーの safety checker 宣言は、誤書き込み防止の制御点を増やす。

---

**対象外（7日窓外／対象変更なし）**: paul-gauthier/aider (v0.86.0, 2025-08-09), continuedev/continue (v2.0.0-vscode, 2026-06-19), All-Hands-AI/OpenHands (v1.16.0, 2026-08-27)
