# AI News Summary - 2026-07-14

> 対象期間: 2026-07-08 〜 2026-07-14

## Major Announcements

### OpenAI — GPT-5.6 モデルファミリー公開
- **Title**: GPT-5.6（Sol / Terra / Luna）および GPT-Live 音声モデル
- **Date**: 2026-07-09
- **Source**: https://help.openai.com/en/articles/9624314-model-release-notes
- **関連**: CNBC https://www.cnbc.com/2026/07/08/openai-expanding-gpt-5point6-ai-model-release-ending-government-limits.html
- **Summary**: 3 モデル構成（旗艦 Sol、低コスト Terra、最速・低コスト Luna）を ChatGPT と API の両方で提供。応答スタイルと品質の改善が主目的。会話/音声向け GPT-Live モデルも追加。米政府の承認を受けた広範なロールアウト。
- **開発者への影響**: API で GPT-5.6 ファミリーが使え、Sol/Terra/Luna で性能・コスト・レイテンシを使い分けられる。GPT-Live でリアルタイム音声アプリの選択肢が増える。
- **その他**: 7/2 にセルフサーブファインチューニングポリシー変更（推論実績がない組織は FT ジョブ作成不可）、7/23 一部旧モデル（computer-use 等）の API 停止予定。

### Anthropic — Claude Fable 5 再展開
- **Title**: Claude Fable 5 の再展開とアクセス延長
- **Date**: 2026-07-01〜（無料アクセス 7/12 → 7/19 に延長）
- **Source**: https://www.anthropic.com/news/redeploying-fable-5
- **Summary**: 米商務省が Claude Fable 5 と Mythos 5 の輸出規制を解除（6/30）を受け、Fable 5 を 7/1 から再提供。サイバーセキュリティ保護を更新。有料プランの無料アクセスは 7/12 から 7/19 に延長（50% キャップ、$10/$50 クレジット）。
- **開発者への影響**: 最上位モデル Fable 5 が API/プランで再び利用可能。Mythos 5（同一ベース・分類器なし）の規制解除も背景にあり、フロンティアモデルへのアクセスが回復。
- **その他**: 7/9「AI への最も難しい質問」公募イニシアティブ、7/8 新プライバシーポリシー施行。
- **Anthropic News**: https://www.anthropic.com/news

### Google / DeepMind — AlphaEvolve GA ほか
- **Title**: AlphaEvolve の Google Cloud GA、AI Studio 無料サブドメイン、Data Agent Kit for BigQuery
- **Date**: 2026-07-09 〜 2026-07-10
- **Source**:
  - AlphaEvolve: https://cloud.google.com/blog/products/ai-machine-learning/alphaevolve-is-available-for-everyone
  - AI Studio: https://ai.google.dev/gemini-api/docs/aistudio-deploying
  - Data Agent Kit (BigQuery RN): https://docs.cloud.google.com/bigquery/docs/release-notes
- **Summary**: AlphaEvolve（Gemini ベースの進化的コーディングエージェント、アルゴリズム最適化・チップ設計・コード最適化）が Google Cloud で GA。AI Studio は公開アプリに無料カスタムサブドメイン `.ai.studio` を提供（Cloud Run 不要・課金設定不要）。Data Agent Kit for BigQuery がプレビュー（VS Code 拡張・Gemini CLI/Codex プラグイン・MCP ツール同梱）。
- **開発者への影響**: AI Studio でプロトタイプ公開の摩擦が下がり、Data Agent Kit で BigQuery 周辺のエージェント作業が IDE 内で完結する。
- **見どころ**: Gemini 3.5 Pro の Vertex AI GA が 7/17 を目標に報じられている。

## Other Notable Updates
- **Microsoft / Hugging Face**: Microsoft Build 2026 で発表の Foundry Managed Compute 上で Hugging Face オープン重みモデルカタログが利用可能（https://huggingface.co/blog/microsoft/foundry-managed-compute）。

## 備考（除外）
- Meta「Watermelon」は 2026 年 7 月時点でまだ学習中・未リリース（https://www.vasundhara.io/blogs/meta-watermelon-ai-model-explained）。未確定情報として今週のリリース項目から外した。

## Source References
- OpenAI Model Release Notes: https://help.openai.com/en/articles/9624314-model-release-notes
- Anthropic News: https://www.anthropic.com/news
- Google Cloud Blog: https://cloud.google.com/blog/products/ai-machine-learning
- Google AI Studio: https://ai.google.dev/gemini-api/docs/aistudio-deploying
- Hugging Face Blog: https://huggingface.co/blog
