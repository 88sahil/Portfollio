import React, { useState } from "react";
import axios from 'axios'
import {useForm}  from 'react-hook-form'
const AddProject=()=>{
    const [photo,setphoto] = useState({})
    console.log(photo)
    const {register,handleSubmit} = useForm()
    const uploadphoto=async(img)=>{
      try{
        let res = await axios.post(`${import.meta.env.VITE_server}/upload`,{photo:img},{
            withCredentials:true,
            headers:{
                "Content-Type":'multipart/form-data'
            }
        })
        return res;
      }catch(err){
        console.log(err)
      }
    }
    const handleForm = async(data)=>{
        try{
            let photodetail = await uploadphoto(photo);
            data.coverPhoto = photodetail.data.resp.url
            data.coverphotoid = photodetail.data.resp.public_id

            let response = await axios.post(`${import.meta.env.VITE_server}/addProject`,data,{withCredentials:true})
            if(response.data){
                alert("successfully added")
            }
        }catch(err){
            console.log(err)
        }
    }
    return(
        <div className="addproject-main">
            <form className="addproject-form" onSubmit={handleSubmit(handleForm)}>
                <label htmlFor="title">
                   <sup style={{color:'red'}}>*</sup>Title
                </label>
                <input type="text" name="title" {...register("title",{required:true})}></input>
                <label htmlFor="Type">
                   <sup style={{color:'red'}}>*</sup>Type
                </label>
                <input type="text" name="Type" {...register("type",{required:true})} ></input>
                <label htmlFor="Projectlink">
                   <sup style={{color:'red'}}>*</sup>ProjectLink
                </label>
                <input type="text" name="Projectlink" {...register("projectlink",{required:true})}></input>
                <label htmlFor="GithubLink">
                   <sup style={{color:'red'}}>*</sup>GitHubLink
                </label>
                <input type="text" name="GitHubLink" {...register("githublink",{required:true})}></input>
                <label htmlFor="Photo">
                   <sup style={{color:'red'}}>*</sup>CoverPhoto
                </label>
                <input type="file" name="Photo" accept="image/*" onChange={(e)=>setphoto(e.target.files[0])} required></input>
                <button>Add</button>
            </form>
        </div>
    )
}
export default AddProject