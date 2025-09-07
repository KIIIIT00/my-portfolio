import React from 'react';
import ProjectDetailLayout from '../components/ProjectDetailLayout';


const ImageCompression: React.FC = () => {
    const projectData = {
        title: '画像圧縮ツール',
        period: '2025年1月 - 2025年3月',
        tags: ['Python', 'Tkinter'],
        coverImage: { src: `${process.env.PUBLIC_URL}/assets/images/project/image_compression/menu.jpg`, alt: '画像圧縮ツール' },
        githubUrl: 'https://github.com/KIIIIT00/image_compression',
        overview: (
            <p>Pythonを用いたGUI，CUIの両方から使用できる画像圧縮ツールです。</p>
        ),
        technologies: (
            <ul>
                <li><strong>バックエンド:</strong> Python</li>
                <li><strong>使用したモジュール:</strong> Tkinter, Pillow, Threading</li>
            </ul>
        ),
        features: (
            <ol>
                <li><strong>複数の圧縮レベル:</strong>強・普通・弱の3段階から選択が可能</li>
                <li><strong>多様な画像形式対応:</strong>JPG，PNG，HEIC，HEIF，WEBP，BMP，TIFFなどに対応</li>
                <li><strong>バッチ処理：</strong>フォルダ内の全画像を一度に処理</li>
                <li><strong>プレビュー機能：</strong>選択した画像を表示</li>
                <li><strong>進行状況表示：</strong>処理中の進歩をリアルタイムで表示</li>
            </ol>
        ),
        learnings: (
            <p>機能だけでなく、使いやすさも重要であることを再認識できた。また、多様な画像形式に対応するようにしているときに、予期せぬエラーが多数発生し、堅牢なエラーハンドリングの重要性を学んだ。マルチスレッド処理の実装をやることができ、並列処理の知識が深まった。</p>
        ),
        additionalImages: [
            { src: `${process.env.PUBLIC_URL}/assets/images/project/image_compression/Lena_compression.jpg`, alt: '圧縮するフォルダを選択したときの画面' }
        ]
    };

    return <ProjectDetailLayout {...projectData} />;
};

export default ImageCompression;