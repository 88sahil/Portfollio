import React, { useEffect } from "react";
import PageLabel from "../PageLabel";
import '../components.css'
import HomeIcon from '@mui/icons-material/Home';
import {gsap} from 'gsap'
import  {useGSAP}from '@gsap/react'

const Home=()=>{
    useGSAP(()=>{
        gsap.from('.Home-intro>h1,.Home-intro-small>p',{opacity:0,scrollTrigger:true,y:-50,duration:1})
    })
    const handleclick =()=>{
        let link = "https://drive.google.com/file/d/1ZQ8C2lcUtzZ9AnPPRA_-HE_PN02HYdTU/view?usp=sharing";
        window.location.href = link;
    }
    gsap.from('.Home-intro',{color:'red',duration:5})
    return(
        <div className="Home-main">
            <PageLabel name={"introduce"} icon={<HomeIcon sx={{fontSize:'22px'}}/>}/>
            <div className="Home-intro">
                <h1>Say Hi from <span style={{color:'rgb(76,255,76)'}}>Sahil</span>,</h1>
                <h1>MERN Stack developer</h1>
                <span className="Home-intro-small">
                    <p>I Design and code beautifully and i love what <br></br> i do just simple like that!</p>
                </span>
            </div>
            <div className="Home-project">
                <button onClick={handleclick}>Download CV</button>
            </div>
        </div>
    )
}
export default Home