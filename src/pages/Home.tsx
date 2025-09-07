import React from 'react'
import Profile from '../components/Profile'
import Skills from '../components/Skills'
import Research from '../components/Research'
import ProjectCard from '../components/ProjectCard'
import Publications from '../components/Publication'

const projectData = [
    {
        title: '思い出振り返りアプリ',
        description: '旅行者が観光地の写真を保存したり、地図上に記録したりするアプリを作成した。',
        tags: ['Java', 'Android Studio', 'Firebase', 'Google Cloud'],
        imageUrl: 'assets/images/project/photo_memory/photo_memory_cover.png',
        link: '/photo_memory',
        githubUrl: 'https://github.com/KIIIIT00/PhotoMemoryAlbumApp'
    },
    {
        title: 'オセロゲームアプリ',
        description: 'Android Studioで、Javaを用いてオセロゲームを作成した。',
        tags: ['Java', 'Android Studio'],
        imageUrl: 'assets/images/project/othello/othello.jpeg',
        link: '/othello',
        githubUrl: 'https://github.com/KIIIIT00/RevesiGame'
    },
    {
        title: 'Pythonを用いた画像圧縮ツール',
        description: '使いやすさにこだわったPythonを用いた画像圧縮ツール',
        tags: ['Python', 'Tkinter'],
        imageUrl: 'assets/images/project/image_compression/menu.jpg',
        link: '/image_compression',
        githubUrl: 'https://github.com/KIIIIT00/image_compression'
    },
    {
        title: '研究室Webサイト',
        description: 'チームメンバ3人で作成した研究室Webサイト',
        tags: ['Jekyll', 'GitHub', 'HTML', 'CSS', 'JavaScript'],
        imageUrl: 'assets/images/project/lab_website/lab_website.png',
        link: '/lab_website',
        githubUrl: 'https://github.com/ais-lab/ais-lab.github.io',
        websiteUrl: 'https://ais-lab.github.io/jp/'
    },
    {
        title: 'ノーコードNNコード生成アプリ',
        description: 'ノーコードでニューラルネットワークのPythonコードを生成するアプリ',
        tags: ['Python', 'TypeScript', 'React', 'JavaScript'],
        imageUrl: 'assets/images/project/nn-generator/nn-generator.png',
        link: '/nn-generator',
        githubUrl: 'https://github.com/KIIIIT00/nn-generator',
        websiteUrl: 'https://kiiiit00.github.io/nn-generator/'
    }
]

const Home: React.FC = () => {
    return (
      <>
        {/* ヒーローセクション */}
        <section className="hero">
          <div className="container">
            <h1>河原 壱樹</h1>
            <p>立命館大学大学院 情報理工学研究科 李研究室所属<a href="https://ais-lab.github.io/">[LINK]</a><br />研究テーマ：Visual Localizationに関する研究</p>
            <a href="https://forms.gle/o3xamJU4bhrQcEhd7" className="btn">お問い合わせ</a>
          </div>
        </section>
  
        {/* 各セクションをコンポーネントとして呼び出し */}
        <Profile />
        <Skills />
  
        {/* 成果物セクション */}
        <section id="projects" className="section">
          <div className="container">
            <div className="section-title">
              <h2>作成した成果物</h2>
            </div>
            <div className="projects">
              {projectData.map((project, index) => (
                <ProjectCard 
                    key={index} 
                    title={project.title} 
                    description={project.description} 
                    tags={project.tags} 
                    imageUrl={project.imageUrl} 
                    link={project.link} 
                    githubUrl={project.githubUrl} 
                    websiteUrl={project.websiteUrl} 
                />
              ))}
            </div>
          </div>
        </section>
  
        <Research />
        <Publications />
      </>
    );
  };
  
  export default Home;
