import React from 'react';

// --- データ定義 ---

// 研究内容の型
interface ResearchItem {
  title: string;
  period: string;
  supervisor: string;
  description: string[];
}

// 研究内容のデータ
const researchData: ResearchItem[] = [
  {
    title: '特徴量が乏しい環境下でのカラー画像を用いたカメラの姿勢・位置の推定',
    period: '2025年3月 - 現在',
    supervisor: '李　周浩 教授',
    description: [
      '特徴量が乏しい環境において、カラー画像からカメラの姿勢・位置の推定（Visual Localization）が困難という問題がある。',
      '本研究では，この問題を解決できる手法を提案する。',
    ],
  },
  {
    title: '深層学習を用いたカラー画像から赤外線画像への変換',
    period: '2024年5月 - 2025年2月',
    supervisor: '李　周浩 教授',
    description: [
      '本研究では、公開されているカラー画像と赤外線画像が不足している問題に対して，深層学習を用いて手法の比較を行っています。',
      'カラー画像と赤外線画像が同じ条件下で撮影できる機構を本研究で開発し、その機構を用いて集めたデータセットを用いて比較しました。',
    ],
  },
];



const Research: React.FC = () => {
  return (
    <section id="research" className="section">
      <div className="container">
        <div className="section-title">
          <h2>研究内容</h2>
        </div>
        {researchData.map((item, index) => (
          <div className="research-item" key={index}>
            <h3>{item.title}</h3>
            <span>研究期間: {item.period}</span>
            <span>指導教員: {item.supervisor}</span>
            {item.description.map((paragraph, pIndex) => (
              <p key={pIndex}>{paragraph}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Research;