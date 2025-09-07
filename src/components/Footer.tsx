import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>河原壱樹</h3>
            <p>立命館大学大学院 情報理工学研究科<br />李研究室所属</p>
            <p>研究テーマ：Visual Localizationに関する研究</p>
          </div>
          <div className="footer-column">
            <h3>リンク</h3>
            <ul className="footer-links">
              <li><a href="/#profile">プロフィール</a></li>
              <li><a href="/#skills">スキル</a></li>
              <li><a href="/#projects">成果物</a></li>
              <li><a href="/#research">研究内容</a></li>
              <li><a href="/#publications">学会発表</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>連絡先</h3>
            <ul className="footer-links">
              <li>メール: kawahara.aislab@gmail.com</li>
              <li>GitHub: github.com/KIIIIT00</li>
              <li>Qiita: qiita.com/KenjiEndou</li>
              <li>Zen: zenn.dev/kenjiendou</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 河原壱樹. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;