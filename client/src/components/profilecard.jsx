import React from "react";
import './components.css'
import profileimg from '../assets/profile-img.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
const Profilecard=()=>{
    let links = [
        {
            icon:<GitHubIcon sx={{fontSize:'20px'}}/>,
            link:'https://github.com/88sahil',
            label:'Github'
        },
        {
            icon:<LinkedInIcon sx={{fontSize:'20px'}}/>,
            link:'https://www.linkedin.com/in/sahil-maliya-633779258/',
            label:'linkedin'
        },
        {
            icon:<XIcon sx={{fontSize:'20px'}}/>,
            link:'https://twitter.com/Sahil_maliya88?t=8Q9Ens5Lo4CXAGG4QcrCxw&s=09',
            label:'X'
        }
        
    ];
    const handleClick =()=>{
        const mailtoLink = 'mailto:sahilmaliya59@gmail.com?subject=Job Offer'
        window.location.href = mailtoLink
    }
    return(
        <div className="main-profilecard">
            <div className="profilecard-intro">
                <h2>Sahil</h2>
                <a>MERN Stack</a>
            </div>
            <div className="profilecard-image">
                <img src={profileimg} alt="profile" />
            </div>
            <div className="profilecard-contact">
                <p>sahilmaliya59@gmail.com</p>
                <p>Rajkot,Gujarat</p>
            </div>
            <div className="profilecard-links">
                {
                    links?.map((ele)=>{
                        return(
                           
                                <a title={ele.label} href={ele.link} target="_blank">
                                    {ele.icon}
                                </a>
                        )
                    })
                }
            </div>
            <div className="profilecard-hireme">
                <button onClick={handleClick}><MailOutlineIcon/>HireMe</button>
            </div>
        </div>
    )
}
export default Profilecard