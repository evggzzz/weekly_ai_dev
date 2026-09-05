# AI News Summary - 2026-09-05

> 対象期間: 2026-08-30 〜 2026-09-05

## Major Announcements

### OpenAI — GPT-6 Astra 公開
- **Title**: GPT-6 Astra
- **Date**: 2026-09-03
- **Source**: https://developers.openai.com/api/docs/changelog （モデルリリースノート）
- **Summary**: OpenAI が「最も高性能で、最も難しいエンドツーエンドの仕事のために作られた」新モデル GPT-6 Astra を公開。推論・コーディング・computer use・研究タスク向け。システムカードも公開された。Hacker News のスレッドは 2,150 ポイント・1,970 コメントに達し、ARC-AGI-3 上の評価結果も議論されている。
- **開発者への影響**: Codex CLI は rust-v0.153.4 で Astra をバンドルのデフォルトモデルにしたため、既存ユーザーは設定を変えない限り自動的に Astra を使い始めることになる。GitHub Copilot CLI や各種エージェントツールの対応も進んでいる。
- **関連**:
  - HN: https://news.ycombinator.com/item?id=49554643 （GPT-6 Astra）
  - ARC-AGI-3 評価: https://news.ycombinator.com/item?id=49555691
  - System Card: https://news.ycombinator.com/item?id=49555440
  - OpenRouter: https://news.ycombinator.com/item?id=49570545

### Anthropic — Claude Fable 5.1 / Mythos 5.1 公開
- **Title**: Introducing Claude Fable 5.1 and Claude Mythos 5.1
- **Date**: 2026-09-01
- **Source**: https://www.anthropic.com/claude-fable-and-mythos-5-1 （ニュースルーム: https://www.anthropic.com/news ）
- **Summary**: 「コーディングとナレッジワークのための最も高度なモデル」として Fable 5.1 と Mythos 5.1 を公開。先行の Fable 5（特定ベンチマークで 21.4%）からさらに改善が謳われている。Hacker News のスレッドは 1,412 ポイント・1,382 コメント。
- **開発者への影響**: GitHub Copilot CLI v1.0.83 が直後に claude-fable-5.1 をサポートした。Mythos 5.1 の扱い（分類器の有無・アクセス条件）は導入前に公式ドキュメントでの確認が要る。
- **関連**: HN: https://news.ycombinator.com/item?id=49525378
- **その他**: Claude Platform では 9/3 に `ant` CLI v1.30.0 がリリースされ、`ant apply` でエージェント・環境・スキル・メモリストア・デプロイの作成・更新がコマンド化された（ https://platform.claude.com/docs/en/release-notes/overview ）。Salesforce との提携「Claudeforce」（8/26 発表）は9月にオープンベータ予定（ https://www.salesforce.com/news/press-releases/2026/08/26/salesforce-and-anthropic-announce-claudeforce/ ）。

### ChatGPT・Claude・Grok の同時障害
- **Title**: OpenAI・Anthropic・xAI のサービスが数時間の間に相次いでダウン
- **Date**: 2026-09-03 前後
- **Source**: https://www.wired.com/story/nobody-is-saying-why-openai-and-anthropic-had-outages-today/
- **Summary**: ChatGPT・Claude・Grok が数時間の間に相次いで障害入りし、Gemini にも報告がスパイクした。Anthropic は「infrastructure issue」、xAI はメンフィスデータセンター障害を原因としたが、OpenAI は当時原因を公表せず、共通原因を示す証拠も確認されていない（Wired）。
- **開発者への影響**: 主要プロバイダの同時ダウンはマルチプロバイダ構成やフォールバック設計（OmniRoute のようなゲートウェイ、Copilot CLI の複数モデル列挙）の価値を再確認させる事象になった。
- **関連**:
  - HN（Ask HN・675 コメント）: https://news.ycombinator.com/item?id=49551096
  - Claude 復旧: https://news.ycombinator.com/item?id=49549676
  - 原因不明のまま: https://news.ycombinator.com/item?id=49567594

### Google — Android のデフォルトアシスタントが Gemini へ
- **Title**: Google Assistant の削除開始（9/4〜）、Gemini が Android のデフォルトアシスタントに
- **Date**: 2026-09-04
- **Summary**: Android での Google Assistant の削除が 9/4 から開始され、Gemini がデフォルトアシスタントになる。Vertex AI では Gemini 2.5 Pro/Flash のリタイア日が 2026-10-16 に更新されている。
- **開発者への影響**: Gemini 2.5 系を本番で使っている場合は 10/16 のリタイア日が移行期限になる。

### OpenAI DevDay 2026 開催決定
- **Title**: OpenAI DevDay 2026（9/29、サンフランシスコ）
- **Date**: 2026-09 前半に発表
- **Source**: https://openai.com/index/devday-2026/
- **Summary**: 年次開発者会議 DevDay 2026 が 9 月 29 日にサンフランシスコで開催される。

## Source References
- OpenAI API Changelog: https://developers.openai.com/api/docs/changelog
- OpenAI DevDay: https://openai.com/index/devday-2026/
- Anthropic Newsroom: https://www.anthropic.com/news
- Claude Platform Release Notes: https://platform.claude.com/docs/en/release-notes/overview
- Wired（障害報道）: https://www.wired.com/story/nobody-is-saying-why-openai-and-anthropic-had-outages-today/
