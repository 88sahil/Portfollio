import React from "react";
import PageLabel from '../PageLabel'
import InfoIcon from '@mui/icons-material/Info';
const About=()=>{
    return(
        <div className="about-main">
            <PageLabel icon={<InfoIcon />} name={"About"}/>
            <div className="about-intro">
                <span>
                    <h1 style={{textAlign:'justify'}}> Every development of  website begin  with an even <span style={{color:'var(--green-bg)'}}>better story</span></h1>
                </span>
                <span>
                    <p>Hi, I'm Sahil, a 19-year-old ComputerEngineering student at Government Engineering College. I'm passionate about web development and seeking an internship in the field. I have a strong foundation in programming languages and enjoy experimenting with new technologies. Let's connect if you have any internship opportunities available. Thanks for visiting my Porfolio!</p>
                </span>
            </div>
        </div>
    )
}
export default About