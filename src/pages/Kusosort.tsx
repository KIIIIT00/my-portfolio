import React from 'react';
import ProjectDetailLayout from '../components/ProjectDetailLayout';

const Kusosort: React.FC = () => {
    const projectData = {
      title: 'クソソートライブラリ',
      period: '2025年10月', // (記事に記載がなかったため仮の日付)
      tags: [ 'Python', 'C++', 'PyPI'],
      coverImage: { src: `${process.env.PUBLIC_URL}/assets/images/project/kusosort/kusosort.png`, alt: 'kusosortライブラリの画面' },
      githubUrl: 'https://github.com/KIIIIT00/kusosort',
      overview: (
        <>
          <p>実用性のない面白いソート手法を集めたライブラリです。</p>
          <p>アルゴリズムの「悪い例」を楽しく学ぶためのツールであり，最大限のパフォーマンス(？)を発揮します。</p>
        </>
      ),
      technologies: (
        <ul>
          <li><strong>バックエンド:</strong> C++, Python</li>
        </ul>
      ),
      features: (
        <ul>
            <li><strong>クソソートがすぐ使える:</strong> 名前は聞くが、実装をしないであろうクソソートがすぐ使えます。</li>
        </ul>
      ),
      learnings: (
        <>
          <p><strong>ライブラリの提供方法:</strong> これまで自作ライブラリを世の中に出したことがなかったため、これを機に自作ライブラリの作成方法を学びました。</p>
          <p><strong>ユーザの視点に立った関数設計:</strong> ユーザがどのようにして関数を呼び出した方がやりやすいかなどのユーザ視点で考えることができた。</p>
        </>
      )
    };
  
    // 最後に websiteUrl も渡せるように ProjectDetailLayout を修正する必要があります
    // ここでは githubUrl のみ渡しています
    return <ProjectDetailLayout {...projectData} />;
  };
  
  export default Kusosort;