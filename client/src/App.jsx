import React from "react";
import {Profilecard,Home,About,Education,Services,Skills, Projects, Contact} from './components/index'
import './App.css'
const App =()=>{
  return(
   <div className="container">
     <div className="main-left">
      <Profilecard/>
    </div>
    <div className="main-right">
      <section id="Home">
        <Home/>
      </section>
      <section id="About">
        <About></About>
      </section>
      <section id="education">
        <Education/>
      </section>
      <section id="sevices">
        <Services />
      </section>
      <section id="Skills">
        <Skills/>
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact/>
      </section>
    </div>
   </div>
  )
}
export default App;