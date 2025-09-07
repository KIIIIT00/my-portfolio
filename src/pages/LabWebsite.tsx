import React from 'react';
import ProjectDetailLayout from '../components/ProjectDetailLayout';


const LabWebsite: React.FC = () => {
    const projectData = {
        title: '研究室Webサイト',
        period: '2025年4月 - 2025年5月',
        tags: ['Jekyll', 'GitHub', 'HTML/CSS', 'JavaScript'],
        coverImage: { src: `${process.env.PUBLIC_URL}/assets/images/project/lab_website/lab_website.png`, alt: '研究室Webサイト' },
        githubUrl: 'https://github.com/ais-lab/ais-lab.github.io',
        overview: (
            <p>チームメンバ3人で新たに作成した研究室のWebサイトです。</p>
        ),
        technologies: (
            <ul>
                <li><strong>フロントエンド:</strong>HTML/CSS, JavaScript</li>
                <li><strong>使用したサイトジェネレータ:</strong> Jekyll</li>
            </ul>
        ),
        features: (
            <ol>
                <li><strong>言語切り替え機能:</strong>英語と日本語に対応</li>
                <li><strong>研究紹介:</strong>研究ごとの詳細な説明ページの導入</li>
                <li><strong>SNSアイコンの列挙：</strong>ワンクリックでSNS先に飛べるアイコン</li>
                <li><strong>研究室メンバの一覧：</strong>メンバの研究分野、顔がわかりやすいデザイン</li>
            </ol>
        ),
        learnings: (
            <p>研究室ウェブサイトをチームメンバ3人で制作する過程で、効率的なチーム開発手法の体験、ユーザ中心設計の実践の2つの重要な成果を学んだ。このプロジェクトを通じて、技術力向上だけでなく、実務的なプロジェクトの運営能力を成長することができた。チーム開発では、まず発生している問題をリストアップし、優先順位をつけてメンバごとにタスクを割り振ることで、効率的に作業を進めた。これにより、各メンバが自分の役割を明確に理解し、スムーズなコミュニケーションが実現した。また、ほとんど毎日の進捗共有ミーティングにより、問題の早期発見と解決を実現した。次にユーザ中心設計の実践として、他の研究室メンバにWebサイトを体験してもらい、ユーザのニーズを再確認することで、ユーザのことを第一に考えて設計した。</p>
        ),
        galleryImages: [
            { src: `${process.env.PUBLIC_URL}/assets/images/project/lab_website/research.png`, alt: '研究紹介' },
            { src: `${process.env.PUBLIC_URL}/assets/images/project/lab_website/team.png`, alt: 'チーム' },
            { src: `${process.env.PUBLIC_URL}/assets/images/project/lab_website/news.png`, alt: 'ニュース' }
        ]
    };

    return <ProjectDetailLayout {...projectData} />;
};

export default LabWebsite;