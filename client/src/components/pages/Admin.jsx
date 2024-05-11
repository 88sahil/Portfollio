import React from "react";
import {useForm} from 'react-hook-form'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import '../components.css'
const Admin=()=>{
    const navigate = useNavigate()
    const {handleSubmit,register} = useForm()
    const authentication =(data)=>{
     axios.get(`https://portfollio-dcrq.onrender.com/api/project/auth?password=${data.password}`,{withCredentials:true}).then(res=>{
        if(res.data.granted){
            navigate('/adminpage')
        }
     }).catch(err=>console.log(err))
    }
    return(
            <form onSubmit={handleSubmit(authentication)} className="admin-signin-form">
                <h1>Hii Sahil!</h1>
                <input type="text" placeholder="enter password" {...register("password")} required></input>
                <button type="submit">Continue</button>
            </form>
    )
}

export default Admin;