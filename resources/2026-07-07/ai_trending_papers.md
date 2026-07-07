## 今週のAI論文トレンド

1. **タイトル:** The Mirage of Optimizing Training Policies: Monotonic Inference Policies as the Real Objective for LLM Reinforcement Learning
   **著者:** Jing Liang, Hongyao Tang, Yi Ma, Yancheng He, Weixun Wang, Xiaoyang Li, Ju Huang, Wenbo Su, Jinyi Liu, Yan Zheng, Jianye Hao, Bo Zheng
   **概要:** LLMのポストトレーニングにおいて強化学習（RL）は広く使われているが、訓練の不安定性や崩壊という根本的課題が残る。本論文は、生成効率のための推論エンジンと訓練精度のための訓練エンジンを分離するLLM特有の構造に起因する「訓練・推論ミスマッチ」が、同じ軌跡に対して確率の不一致を生み、結果としてオフポリシーネスを恒常的に注入して学習を毒することを指摘する。従来研究はこのミスマッチ下での訓練ポリシーの安定化に集中していたが、本稿は「訓練エンジンのポリシー改善が、デプロイ先である推論ポリシーの改善を必ずしも保証しない」という目的の不整合を新たに提示。これを解決するため、単調な推論ポリシー改善（MIPI）という新しい最適化目的を導入し、さらにサンプラー参照候補更新を構築して推論側ギャッププロキシで選択的に採用する二段階フレームワークMIPUを提案している。高いミスマッチ条件下の二つのモデルスケールで実験を行い、推論性能の向上と訓練安定性の改善を実証しており、LLMのRL後段階のパラダイムを見直す意義ある研究。
   **arXiv:** https://arxiv.org/abs/2606.29526

2. **タイトル:** UI-MOPD: Multi-Platform On-Policy Distillation for Continual GUI Agent Learning
   **著者:** Niu Lian, Alan Chen, Zhehao Yu, Chengzhen Duan, Fazhan Liu, Hui Liu, Pei Fu, Jian Luan, Yaowei Wang, Shu-Tao Xia, Jinpeng Wang
   **概要:** マルチモーダル基盤モデルの進展によりGUIエージェントは単一プラットフォームから複数プラットフォームへの拡張が進んでいるが、クロスプラットフォーム化には二つの壁がある。第一に高品質かつ実行可能なクロスプラットフォーム軌跡データが乏しく、既存データはプラットフォーム被覆が限定的であること。第二にプラットフォームごとの操作規約の違いが、合同・継続学習で行動パターンの混在、特定能力の劣化、破滅的忘却を引き起こすこと。本論文は高品質なクロスプラットフォームGUI相互作用データセットUni-GUIを構築するとともに、GUIエージェントの継続学習に初めてマルチティーチャー・オンポリシー蒸留を組み込んだUI-MOPDを提案する。本手法は現在の環境に応じてプラットフォーム固有のティーチャーを動的に選択し、プラットフォーム条件付き蒸留によって固有の行動事前知識を共有ポリシーへ転移する。これにより新プラットフォームへの適応と既存能力の保持を両立し、OSWorldで38.2%、MobileWorldで12.0%のタスク成功率を達成し、クロスプラットフォームGUIエージェントの実用性を前進させている。
   **arXiv:** https://arxiv.org/abs/2607.04425

3. **タイトル:** PixWorld: Unifying 3D Scene Generation and Reconstruction in Pixel Space
   **著者:** Sensen Gao, Zhaoqing Wang, Qihang Cao, Dongdong Yu, Changhu Wang, Jia-Wang Bian
   **概要:** 3D再構成と生成はこれまで別々のパラダイムで扱われてきた。再構成はピクセル空間の回帰、生成は潜在拡散が主流で、近年これらを潜在空間で統一する試みも出ている。しかし潜在空間アプローチは、拡散目的関数が本来の3D表現ではなく潜在特徴に定義される点、潜在エンコーディングによる情報損失が両系統で生じる点、事前学習済みVAE/RAEを必要とする点に欠点がある。本論文は二つのタスクを統一されたピクセル空間拡散パラダイムとして再定式化し、単一モデルで再構成と生成を同時に解くPixWorldを提案する。レンダリング画像上で直接拡散を監督することで上記制約を排除し、最適化を3Dシーン忠実度に一致させる。さらに、画像レベルの监督が持たない3D幾何認識を補うため、事前学習済み3D基盤モデルの幾何認識特徴空間でレンダリング視点と正解を整列させるgeometry perception lossを導入し、3D構造の監督を強化。PixWorldは潜在空間生成手法を一貫して上回り、高精度の再構成専用手法に匹敵する性能を示し、ピクセル空間統一アプローチの優位性を実証している。
   **arXiv:** https://arxiv.org/abs/2607.05373
