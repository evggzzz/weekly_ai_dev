# Japanese Tech Blog Articles - 2026-06-27

## Featured Articles

### 1. [個人開発で AI デスクトップ作ったら、チャットから cron / 並列バッチ / 編集可能な .pptx まで吐けるようになった](https://qiita.com/gen99/items/b5ee04644ff6da7e7671)
- **著者**: gen99
- **プラットフォーム**: Qiita
- **公開日**: 2026-06-23
- **いいね数**: 12
- **概要**: Praxia DesktopというWindows用ローカルAIワークスペースを開発。チャットから自然言語で指示するだけで、cronスケジュール登録・複数ファイルへの並列バッチ実行・編集可能なネイティブ.pptx出力まで一気通貫で実行可能。Tauri 2 + Pythonサイドカー構成で、ローカル完結・無料・OSS（Apache 2.0）。MCP対応によりClaude Desktop/Cursor向けのMCPサーバーがそのまま動く。
- **開発者向けポイント**: LLMプロバイダはOpenAI/Anthropic/Azure/Gemini/Ollama/LM Studioに対応。MCP（Model Context Protocol）対応でClaude DesktopやCursor用のMCPサーバーがそのまま利用可能。20+ SaaSコネクタ（GitHub/Slack/Notion/kintone等）にper-user OAuthで接続。
- **実装例**: cronスケジュール（自然言語→POSIX cron式変換）、並列バッチ処理（50個のPDFをLLM providerのレート制限内で並列spawn）、PowerPoint生成（python-pptxでコード生成→実行→vision-LLMでチェックループ）

### 2. [毎日AIニュース 0625](https://qiita.com/AITLND/items/951ba2e4941660919fc7)
- **著者**: AITLND
- **プラットフォーム**: Qiita
- **公開日**: 2026-06-25
- **いいね数**: 0
- **概要**: 2026年6月25日付のAIニュースまとめ。OpenAIがBroadcomと共同開発した初の自社製推論チップJalapeñoを公開。GoogleがGemini 3.5 FlashにComputer Useを組み込み。AlibabaのQwenチームが言語世界モデルQwen-AgentWorldをオープンウェイトで公開。NotionがClaudeとCursorを呼べるExternal Agentsを公開。FigmaがFigma Motionを公開。QualcommがModularの買収を発表。
- **開発者向けポイント**: Gemini 3.5 FlashにComputer Useが組み込まれ、開発者はブラウザ/モバイル/デスクトップの画面を見て判断・操作するエージェントを構築可能に。Notion External AgentsによりClaudeとCursorをNotionから直接呼び出し、MCPサーバー経由でコード計画からテスト・PR作成まで任せられる。
- **実装例**: Gemini APIのComputer Use機能によるエージェント構築、Notion External AgentsでのCursor SDK連携、Figma Motionによるアニメーション生成とMCP経由でのコーディングエージェント連携

## Trending Topics
- **ローカルAIワークスペース**: Tauri 2 + Pythonで構成されたデスクトップアプリが、チャットから自然言語で複雑なタスク（スケジュール、バッチ、ドキュメント生成）を実行可能に
- **MCP（Model Context Protocol）**: Claude Desktop/Cursor向けのMCPサーバーが他のツール（Praxia Desktop等）でもそのまま動く互換性が広がり
- **Computer Useの統合**: GoogleがGemini 3.5 FlashにComputer Useを組み込み込みツールとして提供、長時間の自動化タスク向けに
- **External Agents**: NotionがClaudeとCursorを呼べるExternal Agentsを公開、MCPサーバー経由でコードタスクを連携
- **推論チップ自社開発**: OpenAIがBroadcomと共同開発したJalapeñoを公開、2026年末の初期展開予定

## Recommended Reading Order
1. **個人開発で AI デスクトップ作ったら...**: ローカルAIワークスペースの実装例とMCP対応を理解する
2. **毎日AIニュース 0625**: Computer Use統合やExternal Agentsなど最新のAI開発ツール動向を把握する
