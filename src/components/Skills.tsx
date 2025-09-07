import React from 'react';

// --- データ定義 ---

// 個々のスキルの型
interface Skill {
  name: string;
  level: number;
}

// スキルカテゴリの型
interface SkillCategory {
  category: string;
  skills: Skill[];
}

// スキルデータ全体
const skillData: SkillCategory[] = [
  {
    category: 'プログラミング言語',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 75 },
      { name: 'C/C++', level: 30 },
      { name: 'JavaScript', level: 30 },
    ],
  },
  {
    category: 'フレームワーク・ライブラリ',
    skills: [
      { name: 'TensorFlow', level: 80 },
      { name: 'PyTorch', level: 80 },
      { name: 'NumPy/Pandas', level: 80 },
      { name: 'React', level: 50 },
    ],
  },
  {
    category: 'その他',
    skills: [
      { name: 'Git/GitHub', level: 70 },
      { name: 'Docker', level: 40 },
    ],
  },
];


// --- コンポーネント ---

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-title">
          <h2>スキル一覧</h2>
        </div>
        <div className="skills-content">
          {skillData.map((categoryObj) => (
            <div className="skill-category" key={categoryObj.category}>
              <h3>{categoryObj.category}</h3>
              {categoryObj.skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <div className="skill-name">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;