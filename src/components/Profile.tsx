import React from 'react';

const Profile: React.FC = () => {
    return (
      <section id="profile" className="section">
        <div className="container">
          <div className="section-title">
            <h2>プロフィール</h2>
          </div>
          <div className="profile">
            <div className="profile-img">
              <img src={"/assets/images/profile/profile.jpg"} alt="プロフィール写真" />
            </div>
            <div className="profile-content">
              <h3>河原 壱樹（かわはら　いつき）</h3>
              <span className="position">立命館大学大学院 情報理工学研究科 修士1年</span>
              <p>はじめまして、河原壱樹と申します。立命館大学大学院情報理工学研究科に所属し、現在李研究室で，Visual Localizationに関する研究を行っています。</p>
              <p>私の研究は、コンピュータビジョンと機械学習を用いて、画像からの位置推定やマッピングに関するものです。特に、深層学習を活用した手法に興味があります。</p>
              <p>趣味は音楽鑑賞や旅行で、よくライブに参戦したり、旅に出ていたりしています。</p>
              <p>現在、取得している資格は、基本情報技術者試験、G検定、化粧品検定3級であり、新たにAWSやE資格の取得に向けて日々、勉学に勤しんでいます。</p>
              <div className="contact-info">
                <span><strong>メール:</strong> kawahara.aislab@gmail.com</span>
                <span><strong>所属:</strong> 立命館大学大学 情報理工学研究科 李研究室</span>
                <span><strong>研究テーマ:</strong> Visual Localizationに関する研究</span>
              </div>
              <div className="social-links">
                <a href="https://github.com/KIIIIT00" className="social-link" title="GitHub">
                  <img src={"/assets/images/social-link/github-mark.png"} alt="GitHub" />
                </a>
                <a href="https://qiita.com/KenjiEndou" className="social-link" title="Qiita">
                  <img src={"/assets/images/social-link/qiita-icon.png"} alt="Qiita" />
                </a>
                <a href="https://zenn.dev/kenjiendou" className="social-link" title="Zen">
                  <img src={"/assets/images/social-link/zenn-logo.svg"} alt="Zen" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Profile;