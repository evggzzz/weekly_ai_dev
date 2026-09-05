# Trending Repositories - 2026-09-05

> 出典: https://github.com/trending?since=weekly
> 重複除外: 過去のダイジェスト掲載リポジトリ（約120件、ChromeDevTools/chrome-devtools-mcp、abi/screenshot-to-code、punkpeye/awesome-mcp-servers 等を含む）は除外済み。

## MakazhanAlpamys/Soup
- **URL**: https://github.com/MakazhanAlpamys/Soup

Soup は LLM のファインチューニングとポストトレーニングを 1 コマンドで行う CLI ツールだ。「No SSH, no config hell」を掲げ、YAML を 1 枚書けば学習が回る構成になっている。トレンドページの説明によれば、Layer streaming という方式で 8B モデルを 4GB のラップトップ GPU 上で学習できる。
`pip install soup-cli` で導入でき（PyPI 公開済み）、Apache-2.0 ライセンス。設定ファイルの複雑さが原因でファインチューニングを諦めていた個人開発者にとって、参入障壁を下げる道具として意味がある。
ローカル LLM 運用が一般化する中、「自分のタスクに合わせて小さく調整する」需要は伸びている。専用 GPU サーバーを用意せずに試せる点は、検証段階のコストを大きく下げる。

## K-Dense-AI/scientific-agent-skills
- **URL**: https://github.com/K-Dense-AI/scientific-agent-skills

科学・研究分野の Agent Skills を 163 個まとめたライブラリ。がんゲノム学、1000 Genomes の個人レベルクエリ、病原体変異の監視、PK/PD モデリング、生物医学文献の全文検索、分子動力学、時系列予測など、100 以上の科学データベースに接続するスキルを含む。
もともと「Claude Scientific Skills」として Claude Code 向けに作られたが、オープンな Agent Skills 標準（agentskills.io）に対応する任意のエージェントで動くように改名・拡張され、Cursor・Claude Code・Codex・Google Antigravity で動作する。Agent Plugins 規約（plugin.json + skills/）のポータブルパッケージにもなっており、プラグイン対応クライアントなら 1 プラグインとして一括ロードできる。
手法論文も arXiv に公開されており（https://arxiv.org/abs/2609.00065）、スキルライブラリという形で「運用知識」を配布する流れの代表例と言える。デスクトップで動くオープンソースの AI co-scientist「K-Dense BYOK」（40+ モデルを BYOK で選択、データはローカル保持）も公開されている。
