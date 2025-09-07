import React from 'react';
import ProjectDetailLayout from '../components/ProjectDetailLayout';


const Othello: React.FC = () => {
  const projectData = {
    title: 'オセロゲームアプリ',
    period: '2022年10月 - 2023年11月',
    tags: ['Android Studio', 'Java'],
    coverImage: { src: `${process.env.PUBLIC_URL}/assets/images/project/othello/othello.jpeg`, alt: 'Othello' },
    githubUrl: 'https://github.com/KIIIIT00/RevesiGame',
    overview: (
      <p>Android Studioを用いてCPU対戦機能，対面対戦機能を備えたオセロゲームアプリ</p>
    ),
    technologies: (
      <ul>
        <li><strong>バックエンド:</strong> Java</li>
        <li><strong>開発環境:</strong> Android Studio</li>
      </ul>
    ),
    features: (
      <ol>
        <li><strong>CPU対戦機能:</strong> ユーザは、強さが3段階のCPUと対戦することができる。</li>
        <li><strong>対面対戦機能:</strong> ユーザは、1つのスマートフォンを通して、オセロを楽しむことができる。</li>
      </ol>
    ),
    learnings: (
      <>
        <p>Android Studioで、オセロのゲームAIの作成について学ぶことができた。</p>
        <p>Android Studioを用いた初めてのアプリ開発で，わからないことがたくさんあったが，あきらめずに、自分で調べて一通り形にすることができた。</p>
      </>
    ),
    additionalImages: [
        { src: `${process.env.PUBLIC_URL}/assets/images/project/othello/AndroidStudio.jpg`, alt: 'Android Studio' }
    ]
  };

  return <ProjectDetailLayout {...projectData} />;
};

export default Othello;