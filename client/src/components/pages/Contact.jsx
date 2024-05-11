import React, { useState } from "react";
import PageLabel from "../PageLabel";
import ContactsIcon from '@mui/icons-material/Contacts';
const Contact =()=>{
    const [subject,setsubject] = useState('');
    const [body,setbody] = useState('')
    const sendmail=(e)=>{
        e.preventDefault()
        let link = `mailto:sahilmaliya59@gmail.com?subject=${subject}&body=${body}`;
        window.open(link,"_blank")
    }
   return(
    <div className="Contact-main">
        <PageLabel name={"Contact"} icon={<ContactsIcon/>}/>
        <p style={{fontSize:'35px'}}>Let's Work<span style={{color:"var(--green-bg)"}}> together</span></p>
        <form>
            <div className="contact-form-4">
                <div className="contact-inp">
                    <label>
                        FullName<span>*</span>
                    </label>
                    <input type="text" placeholder="eg.,Sahil Maliya"/>
                </div>
                <div className="contact-inp">
                    <label>
                         Email<span>*</span>
                    </label>
                    <input type="email" placeholder="eg.,sahil@gmail.com"/>
                </div>
                <div className="contact-inp">
                    <label>
                        Mobile(optional)<span>*</span>
                    </label>
                    <input type="Number" minLength={10} placeholder="eg.,8888888888" inputMode="numeric"/>
                </div>
                <div className="contact-inp">
                     <label>
                        Subject<span>*</span>
                    </label>
                    <input type="text" value={subject} onChange={(e)=>setsubject(e.target.value)} placeholder="eg.,Intership opportunity"/>
                </div>
            </div>
            <div className="contact-inp message">
                <label>Message<span>*</span></label>
                <textarea rows={10} value={body} onChange={(e)=>setbody(e.target.value)} placeholder="hii sahil" />
            </div>
            <button onClick={(e)=>sendmail(e)}>Send Message</button>
        </form>
    </div>
   )
}
export default Contact