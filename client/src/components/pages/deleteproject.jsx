import axios from "axios";
import React, { useEffect, useState } from "react";
const Deleteproject=()=>{
    const [project,setproject] = useState([])
    const getProject = async()=>{
        try{
            let res = await axios.get(`${import.meta.env.VITE_server}/allprojects`,{withCredentials:true})
            setproject(res.data.projects)
        }catch(err){
            console.log(err)
        }
    }
    const handledelte=async(id)=>{
        try{
            let res = await axios.delete(`${import.meta.env.VITE_server}/delete/${id}`,{withCredentials:true})
            if(res.data){
                alert('successfully deleted')
            }
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
      getProject()  
    },[])
    return(
        <div>
            {
                project.length>0? (
                    <table className="project-table" border={"1"}>
                        {
                            project.map((pro)=>(
                                <tr>
                                    <td>{pro.title}</td>
                                    <td><button onClick={()=>handledelte(pro._id)}>Delete</button></td>
                                    <td><a href={pro.projectlink} target="_blank">visit</a></td>
                                </tr>
                            ))
                        }
                    </table>
                ):(<h1>0 projects</h1>)
            }
        </div>
    )
}
export default Deleteproject