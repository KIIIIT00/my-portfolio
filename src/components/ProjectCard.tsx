import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  githubUrl: string;
  websiteUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, imageUrl, link, githubUrl, websiteUrl }) => {
  return (
    <div className="project">
      <Link to={link} className="project-link-wrapper">
        <div className="project-img">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="project-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="project-tags">
            {tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </Link>
      <div className="project-links">
        {websiteUrl && (
          <a href={websiteUrl} className="project-link live-link" target="_blank" rel="noopener noreferrer">Webサイト</a>
        )}
        <a href={githubUrl} className="project-link github-link" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
};

export default ProjectCard;