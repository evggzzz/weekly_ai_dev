## 今週のAI論文トレンド

1. **タイトル:** MemSlides: A Hierarchical Memory Driven Agent Framework for Personalized Slide Generation with Multi-turn Local Revision
   **著者:** Ye Jin, Yangyang Xu, Jun Zhu, Yibo Yang
   **概要:** プレゼンテーション生成のための階層的メモリフレームワークを提案。長期記憶（ユーザープロファイル+ツール実行履歴）と短期記憶（セッション制約）を分離し、マルチターン修正時の安定したパーソナライズを実現。スライド単位の局所編集により、再生成による意図しない変更を最小化。実験では、プロファイル記憶がペルソナ適合性を向上させ、ツール記憶が修正動作の安定性に寄与することを確認。
   **arXiv:** https://arxiv.org/abs/2606.17162

2. **タイトル:** Qwen-AgentWorld: Language World Models for General Agents
   **著者:** Yuxin Zuo, Zikai Xiao, Li Sheng, Fei Huang, et al. (33名)
   **概要:** 7ドメインのエージェント環境シミュレーション可能な言語ワールドモデル（Qwen-AgentWorld-35B-A3B/397B-A17B）を開発。1000万以上の環境相互作用軌跡で訓練し、長いChain-of-Thought推論により次状態予測を実現。世界モデルは（i）環境シミュレータとして強化学習トレーニングを支援（ii）統一エージェント基盤モデルとして下流タスク性能を向上。AgentWorldBench評価で既存最先端モデルを大きく上回る結果を報告。
   **arXiv:** https://arxiv.org/abs/2606.24597

3. **タイトル:** Are We Ready For An Agent-Native Memory System?
   **著者:** Wei Zhou, Xuanhe Zhou, Shaokun Han, Hongming Xu, Guoliang Li, Zhiyu Li, Feiyu Xiong, Fan Wu
   **概要:** LLMエージェントのメモリシステムをデータ管理観点から体系的に評価。メモリを表現・記憶、抽出、検索・ルーティング、保守の4モジュールに分解し、12システムを5ワークロード（11データセット）で評価。結果として、単一アーキテクチャですべてのシナリオで優位ではなく、有効性はワークロードボトルネックとの整合性に依存。局所的保守が全体的再編成よりもコスト効率が高いことを明示し、エージェントネイティブメモリシステムへの方向性を提示。
   **arXiv:** https://arxiv.org/abs/2606.24775
