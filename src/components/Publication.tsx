import React from 'react';

// 学会発表の型を定義
interface Publication {
  title: string;
  authors: string;
  conference: string;
  date: string;
  location: string;
}

// 学会発表のデータを配列として定義
const publicationsData: Publication[] = [
  {
    title: 'RGB2THERMAL：CycleGANを用いた疑似的な赤外線画像の生成',
    authors: '河原　壱樹, 藤井　康之, チャン ディン トゥアン，李　周浩',
    conference: '第25回 計測自動制御学会システムインテグレーション部門講演会（SI2024）',
    date: '2024年12月18日 - 2024年12月20日',
    location: 'アイーナいわて県民情報交流センター（岩手県盛岡市）'
  },
  {
    title: '機械学習モデルによる可視画像からの赤外線画像生成手法の考察',
    authors: '河原　壱樹, 藤井　康之, チャン ディン トゥアン，李　周浩',
    conference: 'ロボティクス・メカトロニクス講演会2025（ROBOMECH2025）',
    date: '2025年6月4日 - 2025年6月7日',
    location: '山形ビッグウイング・やまぎん県民ホール'
  }
  // 他に発表があれば、ここにオブジェクトを追加
];

const Publications: React.FC = () => {
  return (
    <section id="publications" className="section">
      <div className="container">
        <div className="section-title">
          <h2>学会発表内容</h2>
        </div>
        <div className="publications">
          {publicationsData.map((pub, index) => (
            <div className="publication-item" key={index}>
              <h3>{pub.title}</h3>
              <div className="publication-meta">
                <p><strong>著者:</strong> {pub.authors}</p>
                <p><strong>会議名:</strong> {pub.conference}</p>
                <p><strong>日付:</strong> {pub.date}</p>
                <p><strong>場所:</strong> {pub.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;