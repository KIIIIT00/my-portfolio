import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false);
  const location = useLocation();

  const handleNavClick = (hash: string) => {
    setMenuActive(false);
    if (location.pathname === '/') {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 70, // headerの高さ分を引く
          behavior: 'smooth',
        });
      }
    } else {
      // トップページ以外からは、ハッシュ付きでトップページに遷移
      window.location.href = `/${hash}`;
    }
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
              <li><a href="/#profile" onClick={(e) => { e.preventDefault(); handleNavClick('#profile'); }}>プロフィール</a></li>
              <li><a href="/#skills" onClick={(e) => { e.preventDefault(); handleNavClick('#skills'); }}>スキル</a></li>
              <li><a href="/#projects" onClick={(e) => { e.preventDefault(); handleNavClick('#projects'); }}>成果物</a></li>
              <li><a href="/#research" onClick={(e) => { e.preventDefault(); handleNavClick('#research'); }}>研究内容</a></li>
              <li><a href="/#publications" onClick={(e) => { e.preventDefault(); handleNavClick('#publications'); }}>学会発表</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;