import React, { useRef } from "react";
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import PageLabel from "../PageLabel";
import gsap from "gsap";
import {useGSAP} from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {html,css,js,reactic,typescript,aws, tailwind, sass, node, socket, express, mongo, sql, boot, material, github, figma, java} from '../../assets/export'
const Skills=()=>{
    let skills=[
        {
            name:'html',
            img:html
        },
        {
            name:'css',
            img:css
        },
        {
            name:'javascipt',
            img:js
        },{
            name:"typescipt",
            img:typescript
        },
        {
            name:'react',
            img:reactic
        },
        {
            name:'tailwind css',
            img:tailwind
        },
        {
            name:'sass',
            img:sass
        },
        {
            name:'node js',
            img:node
        },
        {
            name:"aws",
            img:aws
        },{
            name:'Java',
            img:java
        },
        {
            name:"express js",
            img:express
        },{
            name:'socket io',
            img:socket
        },{
            name:'Mongo Db',
            img:mongo
        },
        {
            name:'My SQL',
            img:sql
        },{
            name:'bootstrap',
            img:boot
        },{
            name:'material ui',
            img:material
        },
        {
            name:'figma',
            img:figma
        },
        {
            name:'github',
            img:github
        }

        ]
        const cardref = useRef()
       useGSAP(()=>{
           
            gsap.from(".skill-card-childs",{duration:1,y:100,scrollTrigger:".skill-card-childs"})
       })
    return(
        <div className="Skills-main">
            <PageLabel name={"skills"} icon={<DeviceHubIcon/>}/>
            <div className="skill-card-parent">
                {
                    skills.map((skill,index)=>(
                         <button className="skill-card-childs" key={index} ref={cardref}>
                          <div className="skill-child-img">
                            <img src={skill.img} alt={skill.name} title={skill.name} />
                          </div>
                          <p>{skill.name}</p>
                      </button>
                     
                    ))
                }
            </div>
        </div>
    )
}
export default Skills;