import React from 'react';
import ProjectDetailLayout from '../components/ProjectDetailLayout';

const NNGenerator: React.FC = () => {
    const projectData = {
      title: 'No-Code Neural Network Code Generator',
      period: '2025年4月 - 2025年5月', // (記事に記載がなかったため仮の日付)
      tags: ['React', 'JavaScript', 'Python', 'GitHub Pages', 'Tailwind CSS'],
      coverImage: { src: "assets/images/project/nn-generator/nn-generator.png", alt: 'No-Code Neural Network Code Generatorの画面' },
      githubUrl: 'https://github.com/KIIIIT00/nn-generator',
      overview: (
        <>
          <p>プログラミングの専門知識がなくても，わずか数クリックでPyTorchを使った本格的なニューラルネットワークのコードを生成できるWebアプリケーションです。</p>
          <p>機械学習初学者が理論と実装のギャップを埋め、実際に動くモデルを見ながら理解を深められるツールを目指して開発しました。</p>
        </>
      ),
      technologies: (
        <ul>
          <li><strong>フロントエンド:</strong> React, JavaScript, Tailwind CSS</li>
          <li><strong>デプロイ:</strong> GitHub Pages</li>
          <li><strong>開発環境:</strong> Node.js</li>
        </ul>
      ),
      features: (
        <ul>
            <li><strong>カスタマイズ可能なネットワーク構成:</strong> レイヤー数、ニューロン数、活性化関数、最適化アルゴリズムを自由に設定可能。</li>
            <li><strong>データセットオプション:</strong> MNISTやCIFAR-10などの標準データセットを内蔵し、カスタムデータセット用のコードも生成。</li>
            <li><strong>トレーニングパラメータの調整:</strong> エポック数、バッチサイズ、学習率、損失関数などをGUIで調整。</li>
            <li><strong>コードのエクスポート:</strong> ワンクリックでコード全体をコピー、またはPythonファイルとしてダウンロード可能。</li>
        </ul>
      ),
      learnings: (
        <>
          <p><strong>コード形式の一貫性:</strong> 様々なパラメータの組み合わせに対して、常に実行可能なPythonコードを生成する必要がありました。広範なテストケースを作成し、生成ロジックをモジュール分割することで解決しました。</p>
          <p><strong>ユーザーエクスペリエンス:</strong> 技術知識が少ないユーザにも使いやすいよう、直感的なインターフェースの設計に注力しました。</p>
        </>
      ),
      additionalImages: [
          { src: "/assets/images/project/nn-generator/change_settings.png", alt: 'オプティマイザーを変更したときの画面' }
      ]
    };
  
    // 最後に websiteUrl も渡せるように ProjectDetailLayout を修正する必要があります
    // ここでは githubUrl のみ渡しています
    return <ProjectDetailLayout {...projectData} />;
  };
  
  export default NNGenerator;