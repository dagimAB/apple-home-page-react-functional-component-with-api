import  { useState } from 'react'
import "./commonResource/css/styles.css"
import "./commonResource/css/bootstrap.css"
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Alert from './components/Alert.jsx'
import FirstSection from './components/FirstSection.jsx'
import SecondSection from "./components/SecondSection.jsx"
import ThirdSection from './components/ThirdSection.jsx'
import FourthSection from './components/FourthSection.jsx'
import FifthSection from './components/FifthSection.jsx'
import SixthSection from './components/SixthSection.jsx'
import YouTubeVideos from './components/YouTube/YouTubeVideos.jsx'
import AppleYouTubeVideos from './components/YouTube/AppleYouTubeVideos.jsx'
function App() {

  return (
    <>
      <Header />
      <Alert />
      <FirstSection />
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
      <YouTubeVideos />
      <AppleYouTubeVideos/>
      <Footer />
    </>
  );
}

export default App
