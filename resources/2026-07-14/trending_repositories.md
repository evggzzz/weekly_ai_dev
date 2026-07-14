# Trending Repositories - 2026-07-14

> 出典: https://github.com/trending?since=weekly
> 重複除外: 過去のダイジェスト掲載リポジトリ（BuilderIO/agent-native, DeusData/codebase-memory-mcp, google-labs-code/design.md, ogulcancelik/herdr, openai/codex-plugin-cc, stablyai/orca 等）は除外済み。

## diegosouzapw/OmniRoute
- **URL**: https://github.com/diegosouzapw/OmniRoute

OmniRoute は、250 以上のプロバイダー（うち 90 以上が無料 tier）を単一のエンドポイントに束ねる無料の AI ゲートウェイだ。Claude Code、Codex、Cursor、Cline、Copilot、Antigravity といった主要コーディングエージェントを、無料の Claude/GPT/Gemini に接続でき、プロバイダー障害時の自動フォールバックも備える。

目玉はトークン効率で、独自の「RTK + Caveman」圧縮が 15〜95% のトークンを節約すると謳う。無料 tier を束ねた月約 1.6B トークン（初月は登録クレジットで最大約 2.1B）に加え、18 のルーティング戦略でコストと性能を割り振る。

コーディングエージェントの利用率が上がる一方で、API コストとレート制限が日常の障壁になっている。複数プロバイダーの無料 tier を一本化し、圧縮で枠を延ばすアプローチは、個人開発者や小規模チームがエージェントを試し続けるための現実的な逃げ道になり得る。ただし「無料 tier の束ね」は各プロバイダーの規約次第であり、本番利用前に利用条件を確認したい。

## iOfficeAI/OfficeCLI
- **URL**: https://github.com/iOfficeAI/OfficeCLI

OfficeCLI は「AI エージェント向けの Office スイート」を標榜し、Word・Excel・PowerPoint を 1 行で制御できる。オープンソースでシングルバイナリ、Office インストールも依存ライブラリも不要で動く。

鍵は内蔵の HTML レンダリングエンジンで、`.docx`/`.xlsx`/`.pptx` を HTML または PNG に描画する。これによりエージェントが文書を「見て」判断し、修正を戻す render → look → fix のループを閉じる設計だ。

エージェントが扱う対象がコードだけでなく、提案書や資料といったオフィス文書にまで広がりつつある中、文書の生成・編集・校正をプログラムから安定に行える手段は実務価値が高い。レポート作成や定型ドキュメントの自動化など、コード中心のワークフローに文書処理を組み込める点が新しい。
