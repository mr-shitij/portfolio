import React, { useState } from 'react'
import Header from './components/header'
import Home from './pages/home'
import Constants from './constants'
import Career from './pages/career'
import Skills from './pages/skills'
import Projects from './pages/projects'
import Contact from './pages/contact'
import './App.css'

function Index() {
  const [tab,setTab]  = useState(Constants.HOME)
  return (
    <div >
      <Header tab={tab} setTab={setTab} />
      {
      tab === Constants.HOME ? <Home tab = {tab} setTab={setTab}/>
      : tab === Constants.SKILLS ? <Skills/>
      : tab === Constants.CAREER ? <Career/>
      : tab === Constants.PROJECTS ? <Projects/>
      : tab === Constants.CONTACT ? <Contact/>
      : <>No Tab Found</>
    }
    </div>
  )
}

export default Index