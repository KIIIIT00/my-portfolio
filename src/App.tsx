import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PhotoMemory from './pages/PhotoMemory';
import Othello from './pages/Ohello';
import ImageCompression from './pages/ImageCompression';
import LabWebsite from './pages/LabWebsite';
import NNGenerator from './pages/NNGenerator';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/photo_memory" element={<PhotoMemory />} />
                    <Route path="/othello" element={<Othello />} />
                    <Route path="/image_compression" element={<ImageCompression />} />
                    <Route path="/lab_website" element={<LabWebsite />} />
                    <Route path="/nn-generator" element={<NNGenerator />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;