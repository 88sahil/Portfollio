import React, { useState ,useEffect} from "react";
import PageLabel from "../PageLabel";
import WorkIcon from '@mui/icons-material/Work';
import axios from "axios";
import GitHubIcon from '@mui/icons-material/GitHub';
import '../components.css'
const Projects=()=>{
    const [projects,setprojects] = useState([])
    const getProject = async()=>{
        try{
            let res = await axios.get(`${import.meta.env.VITE_server}/allprojects`,{withCredentials:true})
            setprojects(res.data.projects)
        }catch(err){
            console.log(err)
        }
    }
 useEffect(()=>{
      getProject()  
    },[])
    return(
        <div className="projects-main" style={{marginTop:'100px'}}>
            <PageLabel name={"Portfollio"} icon={<WorkIcon/>} />
            <p style={{fontSize:'35px'}}>Featured <span style={{color:"var(--green-bg)"}}>Projects</span></p>
            <div className="projects">
                {
                    projects.map((pro)=>(
                     <div >
                         <a className="project-card">
                            <img src={pro.coverPhoto}></img>
                            <a id="pro-type">{pro.type}</a>
                            <a id="pro-git" href={pro.gith}><GitHubIcon/></a>
                        </a>
                        <br></br>
                        <strong style={{fontStyle:'italic',marginLeft:'15px',padding:'4px'}}>{pro.title}</strong>
                    </div>

                    ))
                }
            </div>
        </div>
    )
}

export default Projects