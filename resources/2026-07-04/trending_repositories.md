## GitHub Trending: AI駆動開発注目リポジトリ

### 🧠 codebase-memory-mcp: コードベースを知識グラフに変え、Claude Code/Codexのトークン消費を99%削る

[DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp)

AIコーディングエージェントが大型コードベースを扱うとき、一番の壁になるのが「コンテキストの限界とトークン爆発」だ。ファイルを順番に読ませて全体像を掴ませるアプローチは、Linuxカーネルのような巨大プロジェクトでは現実的に回らない。codebase-memory-mcpは、この問題を構造化された知識グラフで解きに来たMCPサーバー。

リポジトリをインデックスすると、158言語のtree-sitter文法でASTを解析し、関数・クラス・コールチェイン・HTTPルート・クロスサービスリンクをノードとエッジのグラフとしてSQLiteに永続化する。エージェントが「`ProcessOrder`を呼んでいるのは誰?」と聞いたとき、ファイルをgrepして回る代わりにグラフクエリで1ms未満で答えを返す。論文（arXiv:2603.27277）のベンチマークでは、31の実プロジェクトで回答品質83%、トークン消費10分の1、ツール呼び出し回数2.1分の1を達成している。

**最大の差別化ポイントは「Hybrid LSP」レイヤー**。tree-sitterだけでは解決できない「`user.profile.display_name()`が3モジュール先の`Profile.display_name`に解決される」といった型推論を、言語サーバープロセスを立ち上げずにC実装でカバーしている。Python、TypeScript/JSX、PHP、C#、Go、C/C++、Java、Kotlin、Rustについて、インポート解決・ジェネリクス・継承階層・戻り値型推論まで扱う。tsserver/pyright/gopls/Roslyn/rust-analyzerと構造的に互換性のある解決を、単一の静的バイナリに埋め込んで実行するあたりが技術的な肝だ。

**実用面での使い勝手も徹底して作り込まれている**。ワンラインインストールでClaude Code、Codex CLI、Gemini CLI、Zed、OpenCode、Antigravity、Aider、KiloCode、VS Code、OpenClaw、Kiroの11エージェントを自動検出し、MCP設定・指示ファイル・PreToolUseフックまで揃えてくれる。「Index this project」と言うだけで完了。Linuxカーネル（28M LOC、75Kファイル）のフルインデックスが3分、Djangoプロジェクトなら約6秒。グラフの3D可視化UI（`localhost:9749`）もオプションで備わっている。

**チーム共有の仕組みも用意**。`.codebase-memory/graph.db.zst`として知識グラフのスナップショットをコミットでき、チームメイトはクローン後にインデックスをスキップして增量更新だけ回せる。`merge=ours`で`.gitattributes`が自動設定されるため、バイナリ成果物のマージコンフリクトも起きない。

 dead code検出、Cypherライクなグラフクエリ（`MATCH (f:Function)-[:CALLS]->(g) WHERE ...`）、gRPC/GraphQL/tRPCのサービス間リンク、Kubernetesマニフェストのインフラ構造ノード化など、単なる「コード検索」の枠を超えた構造分析ツールとして完成度が高い。今週10,186スターを獲得してトレント1位付近に浮上しており、MCPエコシステムにおける「コード理解インフラ」のデファクト候補として注目に値する。

---

### 🐳 Orca: 複数のAIコーディングエージェントを並列ワークツリーで統括するADE

[stablyai/orca](https://github.com/stablyai/orca)

「CodexとClaude Codeを同時に走らせて、良い方を採用したい」というニーズは、現場のAIコーディング利用者あるあるだ。Orcaは、この「エージェントの並列運用」をIDEレベルで解決するAgent Development Environment（ADE）。1つのプロンプトを複数エージェントにファンアウトし、それぞれを独立したgit worktreeで走らせて、結果を比較して勝者をマージするワークフローをネイティブで提供する。

対応エージェントはClaude Code、Codex、Grok、Cursor、GitHub Copilot、OpenCode、Amp、Antigravity、Devin、Goose、Gemini CLI、Qwen Code、Kimi、Kiroなど30種類以上。「ターミナルで動くものなら何でも動く」が売りで、ユーザー自身のサブスクリプションを使うため追加のAPIキー管理が不要だ。

**差別化される機能が豊富**:
- **Mobile Companion**: iOS/Androidアプリからエージェントの完了通知を受け取り、フォローアップ指示を送れる。デスクトップアプリとペアリングするだけで、外出先でもエージェントの進捗を監視・操作できる
- **Design Mode**: 実ChromiumウィンドウでUI要素をクリックすると、そのHTML・CSS・スクリーンショットがエージェントのプロンプトに直接送られる。フロントエンドの微調整を自然言語で指示する UXが秀逸
- **SSH Worktrees**: リモートの強力なマシンでエージェントを走らせ、ファイル編集・git・ターミナルまでフル操作。自動再接続とポートフォワーディング付き
- **GitHub & Linearネイティブ統合**: PR・issue・プロジェクトボードをアプリ内で閲覧し、タスクから直接worktreeをオープンできる
- **Annotate AI Diffs**: AIが生成した差分に行コメントを付け、それをエージェントにフィードバックできる。レビュー・編集・コミットをOrca内で完結
- **Terminal Splits**: GhosttyクラスのWebGLレンダリングターミナルを無限分割。スクロールバックは再起動後も保持される
- **Computer Use**: デスクトップアプリや可視UIをエージェントに操作させるワークフローにも対応

**Orca CLI**も用意され、`orca worktree create`、`snapshot`、`click`、`fill`でワークフローをスクリプト化できる。エージェント自身がOrcaを駆動するメタな使い方も可能。アカウント切り替えとClaude/Codexの使用量・レートリセット追跡、quick open、Markdown/PDF/画像のリッチプレビューなど、日常的な開発体験を支える細部も揃う。

macOS・Windows・Linux対応のデスクトップアプリがHomebrew (`brew install --cask stablyai/orca/orca`) やAURからインストール可能。今週3,700スターを獲得しており、「単一エージェント」から「エージェントフリート」へ開発パラダイムが移行する中で、その統制を担うIDEとしてタイムリーな登場と言える。
