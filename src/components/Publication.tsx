import React from 'react';

interface Publication {
  title: string;
  authors: string;
  conference: string;
  year: string;
  month: string;
  date: string;
  location: string;
  category: 'journal' | 'intl_peer' | 'intl_no_peer' | 'domestic_no_peer';
  tags?: string[]; // ⑤ 追加：オプションでタグの配列を持たせる
}

const CATEGORIES = [
  { id: 'journal', label: '論文誌' },
  { id: 'intl_peer', label: '国際会議（査読あり）' },
  { id: 'intl_no_peer', label: '国際会議（査読なし）' },
  { id: 'domestic_no_peer', label: '国内学会（査読なし）' },
] as const;

// データを画像のデザインに合せて少し拡充
const publicationsData: Publication[] = [
  {
    year: '2026',
    month: '07',
    title: 'EdgeJamMa: Edge-Enhanced Joint Mamba for Feature Matching',
    authors: 'Itsuki Kawahara, Yuya Hosoda, Joo-Ho Lee',
    conference: 'The 23rd International Conference on Ubiquitous Robots',
    date: '2026年7月15日 - 2026年7月18日',
    location: '立命館大学',
    category: 'intl_peer',
    tags: ['採択済み']
  },
  {
    year: '2026',
    month: '06',
    title: 'EdgeJamMa: エッジ特徴を用いたJoint Mambaによる特徴マッチング',
    authors: '河原　壱樹, 細田　侑也，李　周浩',
    conference: 'ロボティクス・メカトロニクス講演会2026（ROBOMECH2026）',
    date: '2026年6月28日 - 2026年7月1日',
    location:"福岡国際会議場",
    category: 'domestic_no_peer',
  },
  {
    year: '2025',
    month: '12',
    title: '疑似ペアデータ生成による熱赤外線視覚言語モデルの構築',
    authors: '細田　侑也, 河原　壱樹，李　周浩',
    conference: '第26回計測自動制御学会システムインテグレーション部門講演会（SI025）',
    date: '2025年12月10日 - 2025年12月12日',
    location: '広島国際会議場',
    category: 'domestic_no_peer',
    tags: ['優秀講演賞']
  },
  {
    year: '2025',
    month: '06',
    title: '機械学習モデルによる可視画像からの赤外線画像生成手法の考察',
    authors: '河原　壱樹, 藤井　康之, チャン ディン トゥアン，李　周浩',
    conference: 'ロボティクス・メカトロニクス講演会2025（ROBOMECH2025）',
    date: '2025年6月4日 - 2025年6月7日',
    location: '山形ビッグウイング・やまぎん県民ホール',
    category: 'domestic_no_peer'
  },
  {
    year: '2024',
    month: '12',
    title: 'RGB2THERMAL：CycleGANを用いた疑似的な赤外線画像の生成',
    authors: '河原　壱樹, 藤井　康之, チャン ディン トゥアン，李　周浩',
    conference: '第25回 計測自動制御学会システムインテグレーション部門講演会（SI2024）',
    date: '2024年12月18日 - 2024年12月20日',
    location: 'アイーナいわて県民交流センター（岩手県盛岡市）',
    category: 'domestic_no_peer'
  },
];

const Publications: React.FC = () => {
  // 自分の名前を太字にするためのヘルパー関数
  const renderAuthors = (authorsText: string) => {
    const targetNames = ['河原　壱樹', 'Itsuki Kawahara'];
    const pattern = new RegExp(`(${targetNames.join('|')})`, 'g');
    const parts = authorsText.split(pattern);

    return (
      <>
        {parts.map((part, index) => (
          targetNames.includes(part)
            ? <strong className="my-name" key={index}>{part}</strong>
            : <React.Fragment key={index}>{part}</React.Fragment>
        ))}
      </>
    );
  };

  return (
    <section id="publications" className="section">
      <div className="container">
        <div className="section-title">
          <h2>研究業績</h2>
        </div>
        
        <div className="publications-timeline">
          {CATEGORIES.map((cat) => {
            const filteredPubs = publicationsData
              .filter(pub => pub.category === cat.id)
              .sort((a, b) => parseInt(b.year + b.month) - parseInt(a.year + a.month));

            if (filteredPubs.length === 0) {
              return null;
            }

            return (
              <div className="publication-category-block" key={cat.id}>
                <h3 className="category-subtitle">{cat.label}</h3>
                
                <div className="timeline-list">
                  {filteredPubs.map((pub, index) => (
                    <div className="publication-timeline-item" key={index}>
                      
                      <div className="pub-date">
                        <span className="pub-year">{pub.year}</span>
                        <span className="pub-month">{pub.month}</span>
                      </div>
                      
                      <div className="pub-content">
                        {/* タイトルとタグのエリア */}
                        <div className="pub-title-container">
                          <h4 className="pub-title">{pub.title}</h4>
                          {/* タグが存在する場合のみレンダリング */}
                          {pub.tags && pub.tags.length > 0 && (
                            <div className="pub-tags">
                              {pub.tags.map((tag, tIndex) => (
                                <span key={tIndex} className={`pub-tag tag-${tag.toLowerCase()}`}>
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="pub-meta">
                          {/* 著者名の描画にヘルパー関数を適用 */}
                          <p><strong>著者:</strong> {renderAuthors(pub.authors)}</p>
                          <p><strong>掲載誌/会議名:</strong> {pub.conference}</p>
                          <p><strong>開催期間:</strong> {pub.date}</p>
                          <p><strong>開催地:</strong> {pub.location}</p>
                        </div>
                      </div>
                      
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Publications;
