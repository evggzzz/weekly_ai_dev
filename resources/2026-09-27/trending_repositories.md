# Trending Repositories - 2026-09-27

ソース: https://github.com/trending?since=daily （daily トレンドから AI 駆動開発関連を抽出）

## 1. paperclipai/paperclip

- **URL**: https://github.com/paperclipai/paperclip
- **サイト**: https://paperclip.ing / ドキュメント: https://docs.paperclip.ing
- **言語**: TypeScript（Node.js サーバー + React UI）、MIT ライセンス
- **スター数**: 約 86,800（daily トレンド 1 位圏）

「AI エージェントを仕事で管理するためのオープンソースアプリ」。README は「OpenClaw が従業員なら、Paperclip は会社」と説明する。

### 何ができるか

個々のエージェントにゴールを割り当て、進捗とコストを 1 つのダッシュボードで追跡するオーケストレーション基盤。表面上はタスクマネージャーだが、内部には組織図・予算・ガバナンス・ゴール整合・エージェント間調整の仕組みを持つ。使い方は「01 ゴールを定義（例: AI ノートアプリを $1M MRR まで）→ 02 チームを編成（CEO、CTO、エンジニア、デザイナー、マーケターを任意のプロバイダの bot で配置）→ 03 戦略をレビューして予算を設定し実行」の 3 ステップ。管理単位が PR ではなくビジネスゴールなのが特徴。

### なぜ今注目されているか

単発のエージェント実行（コーディング、調査）は各種ツールで成熟したが、「複数エージェントを編成して継続的に仕事をさせる」段階では管理面（誰に何をさせ、どこまで金を払わせ、誰が承認するか）が手作業になりがちだった。Paperclip はその管理レイヤーを会社の組織運営のメタファーで丸ごと OSS 化した点が新しく、86k スター超という伸びはマルチエージェント運用への需要の大きさを示している。

## 2. vectorize-io/hindsight

- **URL**: https://github.com/vectorize-io/hindsight
- **ドキュメント**: https://hindsight.vectorize.io / ベンチマーク: https://benchmarks.hindsight.vectorize.io/
- **論文**: https://arxiv.org/abs/2512.12818
- **言語**: Python（hindsight-api / Python・npm クライアント）、MIT ライセンス
- **スター数**: 約 31,700

「学習するエージェントメモリ」。ほかのメモリシステムが会話履歴の想起に重点を置くのに対し、Hindsight は「覚える」だけでなく「学習して賢くなる」ことを目指す。

### 何ができるか

基本操作は retain / recall / reflect の 3 つ。観察（observations）を蓄積し、そこから mental models と knowledge pages を構築して長期タスクでの振る舞いを改善する。LLM ラッパーは 2 行で接続でき、コーディングエージェントや MCP サーバー経由の統合も用意。サーバー不要の Python embedded モードもある。LongMemEval ベンチマークで SOTA を主張しており、RAG やナレッジグラフ単体の弱点（断片的な検索・関係性の欠落）を補う設計を謳う。

### なぜ今注目されているか

コーディングエージェントの実用化が進むと「前回失敗したから今回は避ける」「このプロジェクトの慣習を覚えている」といった長期記憶の質が生産性を左右する。Claude Code でも MEMORY.md の運用が課題になる中（本日も Zenn で関連記事が複数投稿されている）、記憶の学習をシステム側に担わせるアプローチとして、スター数の伸びとともに選択肢の一つになりつつある。

STATUS: SUCCESS
REPOS_FOUND: 2
