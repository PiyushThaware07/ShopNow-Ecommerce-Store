import React, { useRef, useState } from 'react';
// Icons
import { RiMailSendFill } from "react-icons/ri";
import { GiConfirmed } from "react-icons/gi";

// Library
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const form = useRef();
    const [formSubmit, setFormSubmit] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gmt6gdj', 'template_5aru5e1', form.current, 'V4w3SqT2RRepq4F66')
            .then((result) => {
                console.log(result.text);
                // setFormSubmit(true);
            }, (error) => {
                console.log(error.text);
                setFormSubmit(false);
            });
    };

    function handleSumbitButton() {
        setTimeout(() => {
            setFormSubmit(true);
        }, 700)
    }
    return (
        <>
            <div className="w-full flex flex-nowrap items-center justify-center p-10" style={{ fontFamily: "'Poppins', sans-serif" }}>

                <form action="" className='flex flex-col bg-gray-100 p-6 md:p-12 rounded-xl' ref={form} onSubmit={sendEmail}>
                    <h1 className='text-xl font-bold ms-2 text-slate-600 capitalize' >Get In <span className='text-[orange]'>Touch</span> With Us</h1>
                    <hr className='my-3' />
                    <div className="">
                        <input type="text" placeholder='Full Name' className='p-2 m-2 focus:outline-none w-full md:w-auto' name='user_name' />
                        <input type="email" placeholder='Email Address' className='p-2 m-2 focus:outline-none w-full md:w-auto' name='user_email' />
                    </div>
                    <textarea cols="30" rows="7" className='p-2 m-2 focus:outline-none w-full md:w-auto' placeholder='Leave a message here...' name='message'></textarea>
                    <button className={`p-2 bg-[orange] text-white w-[170px] ms-2 my-2 ${formSubmit ? 'hidden' : 'flex'}  flex-nowrap items-center justify-center gap-2 `} type='submit' value="Send" onClick={() => handleSumbitButton()}>Send Message <RiMailSendFill /></button>
                    <div className={`p-2  text-slate-600 font-semibold w-auto ms-2 my-2  ${formSubmit ? 'flex' : 'hidden'}  flex-nowrap items-center justify-start gap-2`} type='button'><GiConfirmed />Thanks For Contacting</div>
                </form>

            </div>
        </>
    )
}
