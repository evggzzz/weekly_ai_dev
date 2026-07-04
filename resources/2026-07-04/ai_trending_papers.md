## 今週のAI論文トレンド

1. **タイトル:** Orca: The World is in Your Mind
   **著者:** Yihao Wang, Yuheng Ji, Mingyu Cao, Yanqing Shen, Runze Xiao, Huaihai Lyu, Senwei Xie, Euan Liu, Klara Tian, Tianfeng Long, Yichi Zhang, Zhengliang Cai, Ruike Chen, Jifan Zhao, Ruochuan Shi, Zihan Tang, Jing Lyu, Wenxing Tan, Ningbo Zhang, Yangtao Hu, Yuming Gao, Xiansheng Chen, Junkai Zhao, Congsheng Xu, Boan Zhu, Ziqi Wang, Yupu Feng, Qiongqiong Zhang, Yingli Zhao, Yulong Ao, Shaoxuan Xie, You Liu, Guocai Yao, Leiduo Zhang, Xiaodan Liu, Yunyan Zhang, Yance Jiao, Xinyan Yang, Jiaxing Wei, Xu Liu, Tengfei Pan, Shaokai Nie, Chunlei Men, Sen Cui, Xiaojie Jin, Hongyang Li, Jianlan Luo, Yao Mu, Yunchao Wei, Jun Yan, Hang Zhao, Xiaolong Zheng, Jiaming Li, Yonghua Lin, Tiejun Huang, Zhongyuan Wang, Pengwei Wang
   **概要:** 本論文は汎用ワールド基盤モデル「Orca」を提案する。Orcaは従来のnext-token/next-frame/next-action予測といった個別最適化ではなく、状態遷移を統一的に扱う「Next-State-Prediction」モデリングを中核に据える。多様なマルチモーダル世界信号から統一された潜在空間を学習し、複数の読み出しインターフェース（テキスト生成・画像予測・身体行動生成）を介して下流タスクに対応する。学習は無意識的学習（連続動画からの密な自然状態遷移）と意識的学習（言語記述イベントやVQAによる疎な意味的状態遷移）の2パラダイムで構成される。事前学習には125K時間の動画データと160Mのイベントアノテーションからなる大規模データセットを構築した。バックボーンを凍結し軽量なモダリティ別デコーダのみを訓練する設計で、提案パラダイムのスケーラビリティと、より強い世界潜在がより強い下流性能をもたらすことを実証。同サイズの特化型ベースラインを上回り、理解・予測・行動を統合する汎用ワールドモデルの有望性を示した。
   **arXiv:** https://arxiv.org/abs/2606.30534

2. **タイトル:** Agentic Abstention: Do Agents Know When to Stop Instead of Act?
   **著者:** Han Luo, Bingbing Wen, Lucy Lu Wang
   **概要:** 本論文はLLMエージェントの新たな課題「Agentic Abstention（エージェントの控除）」を定義する。これは不確実性下でエージェントがいつ行動を止めるべきかを判断する問題である。従来の単一ターンのabstention（回答するか控除するか）とは異なり、エージェントのabstentionは逐次決定問題であり、各ターンで回答・控除・情報収集を選択でき、控除の必要性が環境との相互作用の後に初めて判明することもある。本研究はWebショッピング、ターミナル環境、質問応答の3領域で、13のLLMエージェントシステムと2つのエージェント足場を28,000タスク以上で評価した。主要な課題は「控除できるか」だけでなく「いつ控除するか」にあることを発見。一部エージェントは控除すべき時に控除せず、他は不要な相互作用を繰り返した後に控除した。モデル規模・推論能力・エージェント足場がそれぞれ異なる形で影響し、より大きいモデルが控除で劣ることもあった。さらに、対話軌跡を再利用可能な停止ルールに蒸留するCONVOLVEという手法を提案し、WebShopでLlama-3.3-70Bの時宜あるリコール率を26.7から57.4に大幅改善した。
   **arXiv:** https://arxiv.org/abs/2606.28733

3. **タイトル:** Dockerless: Environment-Free Program Verifier for Coding Agents
   **著者:** Wenhao Zeng, Yuling Shi, Xiaodong Gu, Chao Hu, Chaofan Wang, Yuhao Cui, Hongting Zhou, Mengnan Qi, Jianqiao Wangni, Zhaojian Yu, Shuzheng Gao, Kai Cai, Shilin He
   **概要:** 本論文はコーディングエージェント訓練における環境構築コストを排除する「Dockerless」を提案する。従来の実行ベースのプログラム検証はDockerイメージ等のリポジトリ別環境でユニットテストを実行する必要があり、環境セットアップに多大なコストがかかる。Dockerlessはコードパッチを実行せずに評価する環境不要のエージェント型検証器である。単純なパッチと参照のマッチングではなく、エージェントによるリポジトリ探索から収集した証拠を用いてパッチの正確性を判断する。検証器評価ベンチマークで最強のオープンソース検証器を14.3 AUC点上回り、SFT軌跡フィルタとRL報酬の両方としてDockerlessを用いることで完全環境不要のポストトレーニングパイプラインを実現した。結果モデルはSWE-bench Verified/Multilingual/Proでそれぞれ62.0%/50.0%/35.2%の解決率を達成し、Qwen3.5-9Bベースラインを2.4/8.7/2.9点上回り、環境ベースのポストトレーニングに匹敵する性能を示した。
   **arXiv:** https://arxiv.org/abs/2606.28436
