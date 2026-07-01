## 今週のAI論文トレンド

1. **タイトル:** Orca: The World is in Your Mind
   **著者:** Yihao Wang, Yuheng Ji, Mingyu Cao, Yanqing Shen, Runze Xiao, Huaihai Lyu, Senwei Xie, Euan Liu, Klara Tian, Tianfeng Long, Yichi Zhang, Zhengliang Cai, Ruike Chen, Jifan Zhao, Ruochuan Shi, Zihan Tang, Jing Lyu, Wenxing Tan, Ningbo Zhang, Yangtao Hu, Yuming Gao, Xiansheng Chen, 他37名
   **概要:** 世界モデルの汎用基盤モデル「Orca」を提案。マルチモーダルデータから統一された世界潜在空間を学習し、Next-State-Predictionモデリングによって世界の理解・予測・行動を統一的に扱う。125K時間の動画データと160Mイベントアノテーションで事前学習し、テキスト生成・画像予測・具現行動生成の3つのダウンストリームタスクで同等サイズの専用モデルを上回る性能を達成。バックボーンを凍結し軽量なモダリティ固有デコーダのみを学習させるアプローチのスケーラビリティを実証した。
   **arXiv:** https://arxiv.org/abs/2606.30534

2. **タイトル:** Agentic Abstention: Do Agents Know When to Stop Instead of Act?
   **著者:** Han Luo, Bingbing Wen, Lucy Lu Wang
   **概要:** LLMエージェントが不確実性下でいつ行動を停止すべきかを決定する「Agentic Abstention」問題を定義・分析。ウェブショッピング・ターミナル環境・QAの28,000タスク以上で13のLLMエージェントシステムを評価。主な課題は「棄権できるか」ではなく「いつ棄権するか」であることを明らかにした。一部のエージェントは棄権すべき時に棄権せず、他は多くの不要なインタラクション後にようやく棄権する。CONVOLVEという文脈エンジニアリング手法を提案し、Llama-3.3-70Bの適時再現率を26.7%から57.4%に改善した。
   **arXiv:** https://arxiv.org/abs/2606.28733

3. **タイトル:** Scaling the Horizon, Not the Parameters: Reaching Trillion-Parameter Performance with a 35B Agent
   **著者:** Lei Bai, Zongsheng Cao, Yang Chen, Zhiyao Cui, Shangheng Du, Yue Fan, Shiyang Feng, Zijie Guo, Haonan He, Liang He, Xiaohan He, Shuyue Hu, Yusong Hu, Songtao Huang, Yichen Jiang, Hao Li, Xin Li, Dahua Lin, Weihao Lin, Fenghua Ling, Dongrui Liu, Zhuo Liu, 他28名
   **概要:** 35BパラメータのMixture-of-Expertsエージェントモデル「Agents-A1」を開発。長ホライゾントラjectory（平均45Kトークン）と異種エージェント能力のスケーリングにより、1Tパラメータモデルに匹敵する性能を実現。3段階の訓練レシピ（全ドメインSFT、ドメインレベル教師モデル、マルチ教師ドメインルーティングon-policy蒸留）を採用し、6つの異種ドメインを1つの展開可能なモデルに統一。SEAL-0、IFBench、HiPhO、FrontierScience-Olympiad、MolBench-Bindで1Tモデル（Kimi-K2.6、DeepSeek-V4-pro）を上回る Leading results を達成。
   **arXiv:** https://arxiv.org/abs/2606.30616
