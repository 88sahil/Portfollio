import React from "react";
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component'
import '../../../node_modules/react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@mui/icons-material/School';
import PageLabel from "../PageLabel";
import { duration } from "@mui/material";
const Education =()=>{
    let education=[
        {
            domain:'Freelancer',
            duration:"2024-continue",
            place:'rajkot,gujarat'
        },
        {   
            domain:'Computer Engineering',
            place:'Government Enginnering College-rajkot',
            markingMethod:'CGPA',
            grade:7.57,
            duration:'2021-continue'
        },
        {
            domain:'HSC-science',
            place:'Shree Ganesh Vidhya Sankul',
            markingMethod:'Percentage',
            grade:88.76,
            duration:'2019-2021'
        },
        {
            domain:'SSC',
            place:'Shree GnanJyot vidhyalaya',
            markingMethod:'Percentage',
            grade:88.33,
            duration:'2018-2019'
        },
    ]
    return(
        <div>
            <PageLabel name={"education"} icon={<SchoolIcon/>}/>
            <p style={{
                fontSize:'35px'
            }
            }>Education&<span style={{color:'var(--green-bg)'}}>Experience</span></p>
            <div className="education-tl">
                <VerticalTimeline>
                   {
                    education?.map((edu)=>(
                        <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: 'var(--green-bg)',outline:'none', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '5px solid  rgb(33, 150, 243)'}}
                        date={edu.duration}
                        dateClassName="tl-date"
                        iconClassName="tl-icon"
                        iconStyle={{padding:'0 10px'}}
                        icon={<SchoolIcon/>}
                       >
                           <h2>{edu.domain}</h2>
                           <p className="tl-edu-place">{edu.place? edu.place:""}</p>
                           <p className="tl-edu-marks">{edu.markingMethod? `${edu.markingMethod}:-`:""}{edu.grade? edu.grade:""}{edu.markingMethod==="Percentage"? "%":""}</p>
                       </VerticalTimelineElement>
                    ))
                   }
                </VerticalTimeline>
            </div>
        </div>
    )
}
export default Education;