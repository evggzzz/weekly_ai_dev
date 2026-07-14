## 今週のAI論文トレンド

1. **タイトル:** Long-Horizon-Terminal-Bench: Testing the Limits of Agents on Long-Horizon Terminal Tasks with Dense Reward-Based Grading
   **著者:** Zongxia Li, Zhongzhi Li, Yucheng Shi, Ruhan Wang, Junyao Yang, Zhichao Liu, Xiyang Wu, Anhao Li, Yue Yu, Ninghao Liu, Lichao Sun, Haotao Mi, Leowei Liang
   **概要:** AIエージェントは短時間の単純タスクを自律実行できるようになったが、既存のターミナルベンチマークは数分で終わる問題を最終結果のみで評価するため、中間進捗や部分解が見落とされている。本論文は、実験再現、ソフトウェアエンジニアリング、マルチモーダル分析、ゲーム、科学計算など9カテゴリ46タスクからなる長時間ターミナルベンチマーク「Long-Horizon-Terminal-Bench」を提案する。各タスクは細粒度のサブタスクに分解され、密な中間報酬と部分点を与える設計で、エージェントが最終目標に到達したかだけでなく途中どれだけ進んだかを評価できる。15のフロンティアモデルを評価した結果、最強モデルでも完全達成率10.9%、平均4.3%という低い成功率であり、長時間計画・長文脈管理・反復デバッグ能力に大きな改善余地があることを示した。
   **arXiv:** https://arxiv.org/abs/2607.08964

2. **タイトル:** Scalable Visual Pretraining for Language Intelligence
   **著者:** Yiming Zhang, Zhonghan Zhao, Wenwei Zhang, Haiteng Zhao, Tianyang Lin, Yunhua Zhou, Demin Song, Kuikun Liu, Haochen Ye, Haian Huang, Yuzhe Gu, Haijun Lv, Qipeng Guo, Bin Liu, Gaoang Wang, Kai Chen
   **概要:** 大規模基盤モデルの進歩は主に大規模テキストコーパスでの事前学習によって牽引されてきたが、図表、数式、ページレイアウトなどの視覚的表現に込められた知識はテキストのみでは忠実に捉えられない。現状のアプローチでは文書やウェブページを平文に変換する際、これらの視覚的手がかりを破棄している。本論文は「言語モデルはテキスト表現でのみ学習すべき」という前提に異を唱え、視覚的事前学習が基盤モデルの知能をスケールさせる学習器であることを示す。テキスト抽出を行わず視覚文書を直接活用する教師なし視覚事前学習パラダイムを体系的に研究し、複数のバックボーンとベンチマークにおいて、同一コーパスでも視覚事前学習が一貫してテキストのみの事前学習を上回ることを実証した。
   **arXiv:** https://arxiv.org/abs/2607.09657

3. **タイトル:** Video Generation Models are General-Purpose Vision Learners
   **著者:** Letian Wang, Chuhan Zhang, Rishabh Kabra, Jasper Uijlings, Steven Waslander, Andrew Zisserman, Joao Carreira, Kaiming He, Misha Andriluka, Eduard Gabriel Bazavan, Andrei Zanfir, Cristian Sminchisescu
   **概要:** NLPが次トークン予測によって汎用基盤モデルへと移行したように、コンピュータビジョンにおける汎用モデル実現の触媒は何かという問いに答える。本論文は大規模テキストto動画生成がコンピュータビジョンの強力な事前学習パラダイムであると主張し、動画生成拡散バックボーンを用いたフィードフォワード知覚モデル「GenCeption」を提案する。テキスト指示で深度、表面法線、カメラ姿勢推定、参照表現セグメンテーション、3Dキーポイント予測など多様なタスクを実行し、DepthAnything3やSAM3などの専門モデルに匹敵・超越する性能を達成した。さらにV-JEPA等の代替事前学習を上回り、7〜500倍少ない学習データで同等性能を実現するデータ効率性と、合成人間動画のみで学習したモデルが実世界映像や動物・ロボット等の未学習カテゴリに汎化する創発的挙動も確認された。
   **arXiv:** https://arxiv.org/abs/2607.09024
