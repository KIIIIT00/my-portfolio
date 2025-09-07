import React from 'react';
import ProjectDetailLayout from '../components/ProjectDetailLayout';


const PhotoMemory: React.FC = () => {
    const projectData = {
      title: '思い出振り返りアプリ',
      period: '2023年4月 - 2023年7月',
      tags: ['Java', 'Android Studio', 'Firebase', 'Google Cloud'],
      coverImage: { src: "/assets/images/project/photo_memory/photo_memory_cover.png", alt: '思い出振り返りアプリ メイン画像' },
      githubUrl: 'https://github.com/KIIIIT00/PhotoMemoryAlbumApp',
      overview: (
        <>
          <p>新型コロナウイルスによる制限が緩和された後、旅行者数が回復した現状がある。今回、旅行者の行動に着目し、旅行者が必ず行うであろう観光地の写真撮影に関するアプリを制作した。</p>
          <p>容易に写真と場所、日付の情報をすぐに振り返ることができ、写真の場所を地図上に示すことで、視覚的に訪れた場所がわかる。</p>
        </>
      ),
      technologies: (
        <ul>
          <li><strong>バックエンド:</strong> Java</li>
          <li><strong>API:</strong> Firebase, Google Cloud</li>
          <li><strong>開発環境:</strong> Android Studio</li>
        </ul>
      ),
      features: (
        <ol>
          <li><strong>写真登録機能:</strong> ユーザは、撮影した写真登録することができる。</li>
          <li><strong>写真の撮影日付の登録、閲覧:</strong> ユーザは、撮影した写真の日付を登録したり、閲覧したりできる。</li>
          <li><strong>現在地と登録した写真の位置の登録閲覧:</strong> 現在地と、登録した写真の位置の閲覧をすることができる。</li>
        </ol>
      ),
      learnings: (
        <>
          <p>Android Studioで、Google Cloud Vision APIの中にあるランドマーク検出用のAPIを正確にたたくときに大変だった。</p>
          <p>必要な情報だけを抜き出して、Android Studioのアプリ内で表示したり、観光名所の写真や観光名所を音連れた日付などの情報をもつ連結リスト内のセルに抜き出したデータを格納したりする点を努力した。</p>
          <p>Java言語を用いて、APIを使用したAndroidアプリの開発を自分で調べ学習し、自分の想定通りに実装できる能力を得ることが出来た。また、実装する際に、詰まったところを自分で調べ、解決するという自己解決能力をより得ることが出来たと考える。</p>
        </>
      ),
      galleryImages: [
          { src: "/assets/images/project/photo_memory/register.png", alt: 'アプリの画面1' },
          { src: "/assets/images/project/photo_memory/register_skytree.png", alt: 'アプリの画面2' },
          { src: "/assets/images/project/photo_memory/location_skytree.png", alt: 'アプリの画面3' },
          { src: "/assets/images/project/photo_memory/register_locations.png", alt: 'アプリの画面4' },
      ],
    };
  
    return <ProjectDetailLayout {...projectData} />;
  };
  
  export default PhotoMemory;