## 今週のAI論文トレンド

1. **タイトル:** Repo-To-Skill: Distilling GitHub Repositories Into AI4AI Skills
   **著者:** Jianlyu Chen, Yuyang Hu, Hongjin Qian, Jiawei Liu, Wenqing Wei, Xiaolong Chen, Defu Lian, Zhicheng Dou, Chaozhuo Li, Qiwei Ye, Zheng Liu
   **概要:** 自律エージェントが ML 研究をエンドツーエンドで行うようになったが、モデルのバックボーンとハーネス（計画・実行・メモリ・検証）だけではドメイン固有のノウハウがエージェントの外に置き去りになっている。著者らはこの欠けた層を「operational knowledge（運用知識）」と呼び、手法を知っていることと動かせることの差を生む知識だと定義する。リポジトリや論文には存在するものの、人間向けに書かれ大きすぎてタスク中にロードできないのが課題だ。提案する DisCo はスキルを作り、研究の中で使うエージェントで、蒸留を「タスク非依存」（分野で広く使われるリポジトリを再利用可能なスキルに凝縮）と「タスク指向」（具体タスクに必要なスキルを生成）の2形態で回す。前者をオープンエコシステム全体に適用すると、広く使われる 1,000 の ML リポジトリから 5,000 以上の検証済みスキルを蒸留し、20 分野・178 の能力ファミリーに整理した AREX-Skill Library が得られる。GPT-5.5 バックボーン・リサーチハーネス・実行予算を固定した比較で、スキルありのエージェントはスキルなしに比べ MLE-bench で 134.3%、PaperBench で 34.4%、FrontierCS で 9.2%、PassNet で 14.0% スコアが向上した。後付けの追加学習ではなく、蒸留された運用コンテキストの追加だけでこの差が出ている点が示唆的で、Claude Code の Skills / Agent Plugins といった「スキルを配布する」エコシステムの有効性を裏付ける結果になっている。
   **arXiv:** https://arxiv.org/abs/2609.02749

2. **タイトル:** Compile by Training: Turning Natural-Language Specifications into Local Neural Functions
   **著者:** Yuntian Deng, Pengyu Nie, Stuart Shieber
   **概要:** 繰り返し使うテキスト処理は「言葉で説明するのは簡単だが、ルールで実装するのは難しい」。一方で入力のたびに大規模リモートモデルを呼ぶと、コスト・レイテンシ・プロバイダ依存が繰り返し発生する。本論文は「compile by training」として、自然言語の仕様を再利用可能なニューラル関数にコンパイルする手法を提案する。コンパイル時に教師モデルがタスク固有の例を生成し、それを使ってコンパクトなインタプリタに小さなアダプタを学習させる。出来上がった関数は教師モデルなしで動き、通常のソフトウェアと同じように保存・バージョン管理・合成ができる。FuzzyBench-Hard のうち先行の Program-as-Weights 高速コンパイラが1件も一致を出せなかったサブセットで、本手法は 83.6% の意味的一致率に到達した。精度と引き換えにコンパイル時間は秒単位から約1分に増える。公開の対話型サービスとして実装され、複数サイトのウェブヘルパー、言語操作できる 3D アバター、双方向の英〈Claudish〉翻訳器といったコンパイル済み関数の実例が示されている。「仕様を書いたらローカルで動く小さなモデル関数が得られる」という方向は、推論コストとレイテンシが支配的なエージェント運用のあり方を変えうる。
   **arXiv:** https://arxiv.org/abs/2609.04199

3. **タイトル:** HarnessDev: Can LLMs Create and Evolve Their Own Agent Harness?
   **著者:** Yuhao Wu, Jingyuan Zhang, Jiajun Shi, Xinping Lei, Qingshui Gu, Yuxuan Zhang, Zexuan Wang, Chen He, Chen Huang, Maojia Song, Zhiyuan Zeng, Shaowen Wang, Jinkai Liu, Yunfeng Shi, Jiaheng Liu, Shen Yan, Wenhao Huang, Ge Zhang, Wenxuan Zhang
   **概要:** エージェントの実力がモデルの重みだけでなく、計画・実行・検証を担う「エージェントハーネス」に強く依存するようになった。ハーネスを変えればモデル固定のまま性能が大きく動く。しかし従来の評価は所与のハーネス下での下流タスク性能を報告するだけで、ハーネス自体を開発できるかはほぼ調べられてこなかった。提案する HarnessDev は評価の単位を「タスク出力」から「動くインフラ」に移すベンチマークで、Creation（最小シードと少数のケースから完全な実行システムを構築）と Evolution（自作ハーネスを下流の実行フィードバックで反復改良）の2段階からなる。構築したハーネスは能力（未知ベンチマークでのタスク成功率）と効率（実行トークンコスト）で評価される。6 作成 LLM × 4 ドメイン × 5 下流ベンチマーク計 2,207 インスタンスの結果、生成ハーネスはコード系・検索研究系では成熟した人間製のリファレンスに大きく届かず、ライティングと ML 実験では同等以上になるなど大きくばらついた。Evolution による改善は不安定で未知タスクへの転移も部分的。実行モデルを固定した実験では、利得がハーネスを動かすモデルに強く依存し、モデルをまたぐ転移が限定的なことも分かった。ハーネス自体の自動構築はまだ人間の設計に届いておらず、「ハーネス設計」が当面は人間の仕事であり続けることを示す実測になっている。
   **arXiv:** https://arxiv.org/abs/2609.01437
