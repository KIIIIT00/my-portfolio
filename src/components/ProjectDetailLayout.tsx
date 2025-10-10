import React from 'react';
import { Link } from 'react-router-dom';

// --- 型定義 ---

// Propsの型を定義
interface ProjectDetailLayoutProps {
  title: string;
  period: string;
  tags: string[];
  coverImage: { src: string; alt: string };
  overview: React.ReactNode;
  technologies: React.ReactNode;
  features: React.ReactNode;
  learnings: React.ReactNode;
  galleryImages?: { src: string; alt: string }[];
  additionalImages?: { src: string; alt: string }[];
  githubUrl: string;
}


// --- コンポーネント ---

const ProjectDetailLayout: React.FC<ProjectDetailLayoutProps> = ({
  title,
  period,
  tags,
  coverImage,
  overview,
  technologies,
  features,
  learnings,
  galleryImages,
  additionalImages,
  githubUrl,
}) => {
  return (
    <section className="project-detail">
      <div className="container">
        {/* ヘッダー */}
        <div className="project-header">
          <h1 className="project-title">{title}</h1>
          <div className="project-meta">
            <p>開発期間: {period}</p>
          </div>
          <div className="project-tags">
            {tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
          </div>
        </div>

        {/* カバー画像 */}
        <div className="project-image">
          <img src={coverImage.src} alt={coverImage.alt} />
        </div>

        {/* 詳細説明 */}
        <div className="project-description">
          <div className="project-section">
            <h2>概要</h2>
            {overview}
          </div>
          <div className="project-section">
            <h2>使用技術</h2>
            {technologies}
          </div>
          <div className="project-section">
            <h2>主な機能</h2>
            {features}
          </div>
          <div className="project-section">
            <h2>学んだこと・工夫した点</h2>
            {learnings}
          </div>
        </div>
        
        {/* 追加画像 (個別表示用) */}
        {additionalImages && additionalImages.map((image, index) => (
            <div className="project-image" key={index}>
                <img src={image.src} alt={image.alt} />
            </div>
        ))}

        {/* ギャラリー (グリッド表示用) */}
        {galleryImages && (
          <div className="project-gallery">
            {galleryImages.map((image, index) => (
              <div className="gallery-item" key={index}>
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        )}

        {/* リンク */}
        <div className="project-links">
          <a href={githubUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHubリポジトリ</a>
        </div>

        <div className="back-link">
          <Link to="/#projects">← 成果物一覧に戻る</Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailLayout;