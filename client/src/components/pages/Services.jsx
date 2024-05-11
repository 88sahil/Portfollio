import React from "react";
import PageLabel from "../PageLabel";
import ExtensionIcon from '@mui/icons-material/Extension';
import LanguageIcon from '@mui/icons-material/Language';
import CodeIcon from '@mui/icons-material/Code';
const Services=()=>{
    let Services=[{
        name:'Website Design',
        icon:<LanguageIcon />,
        description:'I create Design of website using figma&framer',
        noOfProject:2
    },
    {
        name:'Development',
        icon:<CodeIcon/>,
        description:'I build fullstack webisite using React js,Express js,Node js,MongoDb',
        noOfProject:8
    }
]
    return(
        <div className="Services-main">
           <PageLabel name={"Services"} icon={<ExtensionIcon/>} />
           <p id="Services-speci">My <span style={{color:'var(--green-bg)'}}>Specializations</span></p>
            {
                Services?.map((serv,index)=>(
                    <button key={index} className="Service-card">
                        <div className="service-card-name">
                            <a id="name">{serv.name}</a>
                            <a>{serv.icon}</a>
                        </div>
                        <p className="service-card-desc">{serv.description}</p>
                        <p style={{display:'flex',marginTop:'10px',color:'white',fontWeight:'bold'}}>{serv.noOfProject} projects</p>
                    </button>
                ))
            }
        </div>
    )
}
export default Services;