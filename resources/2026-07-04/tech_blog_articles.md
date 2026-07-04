# Japanese Tech Blog Articles - 2026-07-04

対象期間: 2026年6月中旬〜7月初旬（過去7日間中心）

## Featured Articles

### 1. [Claude Code 週次アップデートまとめ（2026/06/27週）](https://zenn.dev/tottoko_hamu/articles/2026-06-27-090000)
- **著者**: saitoko (tottoko_hamu)
- **プラットフォーム**: Zenn
- **公開日**: 2026-06-29
- **概要**: Claude Code v2.1.185〜v2.1.195 の変更7件を GitHub リリースノートベースで時系列まとめ。今週の主要変更として、フックマッチャー修正（ハイフン入り識別子が完全一致に）、MCP 認証のブラウザ不要化、`/rewind` の `/clear` 跨ぎ拡張、CPU 使用率約37%削減をピックアップ。
- **開発者向けポイント**: v2.1.195 のフックマッチャー修正は破壊的変更の可能性あり。`settings.local.json` や `CLAUDE.md` の `hooks` セクションで `code-reviewer`・`mcp__brave-search` のようなハイフン入り識別子を使っている場合、正規表現記法（`mcp__brave-search__.*`）への移行が必要。アップデート後の動作確認が推奨される。
- **実装例**: v2.1.186 で `claude mcp login/logout` がブラウザ不要に。v2.1.191 で `/rewind` が `/clear` 前に遡れるように。v2.1.193 で `autoMode.classifyAllShell` 設定・Bash パス補完・OpenTelemetry 出力（`OTEL_LOG_ASSISTANT_RESPONSES=1`）が追加。

### 2. [Mac で Claude Code を始める — インストールから subagent / MCP / hook まで（2026 年版）](https://zenn.dev/penne_inc/articles/claude-code-mac-install-2026)
- **著者**: ペンネ株式会社
- **プラットフォーム**: Zenn
- **公開日**: 2026-06-28
- **概要**: 2026年時点の Claude Code を Mac に新規導入する人向けに、公式 curl インストーラ → CLAUDE.md 配置 → subagent 定義 → MCP サーバー接続 → hook による安全装置までを6ステップで解説。Node.js 不要になりインストールが1行で済むようになった点も押す。
- **開発者向けポイント**: subagent を `.claude/agents/<name>.md` で定義し `@reviewer` で呼ぶ運用、MCP を `claude mcp add --transport http` で繋ぐ手順、PreToolUse フックで `rm -rf` / `chmod 777` / `sudo` を `exit 2` で物理ブロックする安全装置の実装例がそのまま使える。ペンネ社が lead/dev/PO/qa 等の複数エージェントで SaaS を開発している実例への参照リンクも充実。
- **実装例**: コードレビュー専任 subagent の frontmatter 付き `.md`、`block-dangerous-bash.sh`（jq で `tool_input.command` を解析）、`claude mcp add github`、`.claude/settings.json` の hooks 設定をコピペ可能な形で掲載。

### 3. [Cursor vs Claude Code 2026年6月版｜実案件5タスクでガチ検証してみた](https://note.com/tsukurun_d7/n/necee15bcdb46)
- **著者**: つくるん
- **プラットフォーム**: note
- **公開日**: 2026-06-18
- **概要**: React のインライン修正、大規模リファクタリング、バグ調査、GitHub Actions 自動化、新機能プロトタイプ作成の5つの実案件タスクで Cursor と Claude Code を徹底比較。Cursor は「書きながら」使う IDE 型、Claude Code は「指示して任せる」エージェント型と結論づけた。
- **開発者向けポイント**: タスク別の勝者が明確。インライン補完（Cursor 12%高速）・大規模リファクタリング10ファイル以上（Claude Code、100万トークンコンテキスト活用）・CI/CD 整備（Claude Code の一人勝ち）・フロントのプロトタイプ（Cursor の体験感）。SWE-bench 72.5%、盲目テスト67%勝率という数値根拠も提示。
- **実装例**: 2026年6月版の最適解として「細かい編集は Cursor、大物タスクは Claude Code」のワンツーパンチ運用を提案。月40ドル（Pro 2本）の投資対効果を実データで評価。

### 4. [AIコーディングツールが一気に動いた2026年6月｜自動化・従量課金・ローカル化を個人開発目線で整理する](https://note.com/aikatuyou00/n/n20cbad3f78f8)
- **著者**: AIの未来予想
- **プラットフォーム**: note
- **公開日**: 2026-06-21
- **概要**: 2026年6月の AI コーディングツール界隈の変化を「自動化・従量課金・ローカル化」の3軸で整理。Cursor 3.8 の Automations 強化、GitHub Copilot の従量課金移行（6月1日〜）、Claude Design × Vercel 連携、VS Code 1.122 の BYOK オフライン対応を取り上げる。
- **開発者向けポイント**: Cursor の `/automate` スキルで Slack 絵文字・PR レビュー・Issue コメントをトリガーに AI が自律起動する新ワークフローを解説。Copilot は Pro+ で「1日でクレジット大幅消費」の声もあり、補完中心か重い自動処理かで月額リスクが変わる。月初のクレジット残量確認習慣を推奨。
- **実装例**: Claude Design で作った LP・Web アプリ UI を Vercel に即デプロイする流れ、VS Code 1.122 で Anthropic/Gemini/OpenAI/Ollama を GitHub サインインなしで切り替える BYOK 設定画面を具体的に紹介。

### 5. [【保存版】Claude Code完全設定ガイド2026 - Hooks/Skills/MCP/権限を全部入りで本番運用する](https://qiita.com/emi_ndk/items/56b2fc8bf4e7ed5ba7f3)
- **著者**: emi_ndk
- **プラットフォーム**: Qiita
- **公開日**: 2026-02-28（2026年版として今も参照される保存版）
- **概要**: Claude Code の設定を CLAUDE.md / Auto Memory / rules / settings.json / Hooks(17イベント) / Skills / MCP の7レイヤーで体系化し、コピペで使える本番運用テンプレートを提供。権限パターンの構文（`Bash(npm run *)` の単語境界の有無による違い）や、Hook の4種類ハンドラ（command/http/prompt/agent）まで踏み込む。
- **開発者向けポイント**: CLAUDE.md の黄金律「人間だけが知っていること（なぜ・禁止事項・ビジネス制約）だけを書き、コードから読める情報は書かない」が明快。`.claude/rules/*.md` でパス条件付きルールを分離、`@import` で外部ファイル参照、`attribution` 設定で `Co-Authored-By` を制御する手法が実用的。
- **実装例**: deny ファーストの `.claude/settings.json`（`.env*`・`*.pem`・`rm -rf`・`git push --force` を拒否）、PostToolUse での ESLint `--fix` 自動実行、Prompt Hook で LLM に本番影響を判断させる実装、PR レビュー／Issue 修正／デプロイの Skill 実例をフルコードで掲載。

## Trending Topics
- **Cursor vs Claude Code の使い分け論**: 2026年6月時点の最適解として「インライン編集は Cursor、大規模タスクは Claude Code」の二刀流が複数記事で一致。エディタ型 vs エージェント型という構図が定着。
- **Cursor Automations（v3.8, 6/18）**: `/automate` によるトリガーベースの自律実行が登場。AI が「指示待ち」から「条件で自走」へ移行しつつある。
- **Claude Code の高速イテレーション**: v2.1.185〜195 の週次アップデート。hook マッチャーの破壊的変更、MCP 認証のブラウザ不要化、`/rewind` 拡張、CPU 37%削減が話題。
- **subagent / Skills / Hooks の本番運用**: 複数エージェントの役割分担、`.claude/agents/*.md`、PreToolUse での物理ブロック、`disable-model-invocation` による安全弁など設定ベストプラクティスが成熟。
- **従量課金へのシフト**: GitHub Copilot が6/1から完全従量課金（AI Credits）へ。Cursor/Claude の料金分離騒動と並び、月額コスト管理への意識が高まっている。
- **デザイン→公開の地続き化**: Claude Design × Vercel 連携で LP/UI を即デプロイ。非エンジニアの参入障壁が下がる方向。

## Recommended Reading Order
1. **[3] Cursor vs Claude Code 実案件検証（note）** — まず両ツールの性質の違いを5タスクで直感的に把握
2. **[4] 2026年6月のツール変化まとめ（note）** — Cursor Automations / Copilot 従量課金 / Claude Design など界隈の動向を俯瞰
3. **[2] Mac で Claude Code を始める（Zenn）** — インストールから subagent / MCP / hook まで手を動かして構築
4. **[1] Claude Code 週次アップデート（Zenn）** — v2.1.195 の破壊的変更など、今日使っているバージョンの注意点を確認
5. **[5] Claude Code 完全設定ガイド（Qiita）** — 本番運用向けの権限・Hook・Skill 設定を全部入りで参照・模写
