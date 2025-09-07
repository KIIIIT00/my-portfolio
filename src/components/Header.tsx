import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (sectionId: string) => {
    setMenuActive(false);
    // まずトップページに移動する
    navigate('/');
    // 少し待ってからスクロール処理を実行
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 70; // ヘッダーの高さ
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100); // 100ミリ秒待つことで、ページ遷移が完了してからスクロールする
  };

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">河原壱樹</Link>
          </div>
          <div className="menu-toggle" onClick={() => setMenuActive(!menuActive)}>&#9776;</div>
          <nav>
            <ul className={menuActive ? 'active' : ''}>
              <li><button onClick={() => handleNavClick('profile')}>プロフィール</button></li>
              <li><button onClick={() => handleNavClick('skills')}>スキル</button></li>
              <li><button onClick={() => handleNavClick('projects')}>成果物</button></li>
              <li><button onClick={() => handleNavClick('research')}>研究内容</button></li>
              <li><button onClick={() => handleNavClick('publications')}>学会発表</button></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;