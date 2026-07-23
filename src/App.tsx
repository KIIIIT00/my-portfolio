import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PhotoMemory from './pages/PhotoMemory';
import Othello from './pages/Ohello';
import ImageCompression from './pages/ImageCompression';
import LabWebsite from './pages/LabWebsite';
import NNGenerator from './pages/NNGenerator';
import ScrollToTop from './components/ScrollToTop';
import Kusosort from './pages/Kusosort';

const App: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light' || savedTheme === 'dark') {
            return savedTheme;
        }

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <Router basename={process.env.PUBLIC_URL}>
          <ScrollToTop />
            <Header theme={theme} onToggleTheme={toggleTheme} />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/photo_memory" element={<PhotoMemory />} />
                    <Route path="/othello" element={<Othello />} />
                    <Route path="/image_compression" element={<ImageCompression />} />
                    <Route path="/lab_website" element={<LabWebsite />} />
                    <Route path="/nn-generator" element={<NNGenerator />} />
                    <Route path="/kusosort" element={<Kusosort />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
