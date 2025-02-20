import {useState, useEffect} from 'react'
import { FaLinkedin } from "react-icons/fa6";
import InputBox from './InputBox';
import TextareaBox from './TextareaBox';
import emailjs from 'emailjs-com';

function Contact() {

    const sendEmail = (formData) => {
        emailjs.send(
            "service_iqn43hi",   // Replace with your EmailJS Service ID
            "template_5o5o7rh",  // Replace with your EmailJS Template ID
            formData, 
            "KWPMtLdJ7FGBsFvYu"    // Replace with your EmailJS Public Key
        ).then(
            (response) => {
                console.log("SUCCESS!", response.status, response.text);
                alert("Message sent successfully!");
            },
            (err) => {
                console.log("FAILED...", err);
                alert("Failed to send message.");
            }
        );
    };

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        organization: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail(formData); // Function to send email
    };


    return (
        <>
            <div className = "contactBox mt-20 rounded-[2rem] w-[65rem] min-h-[35rem] bg-[#D9D9D9]/15 p-10 flex flex-col items-center justify-center ">
                <h1>Let's Get In Touch!</h1>
                <p className = "relative">mosbill067@gmail.com | <FaLinkedin/></p>
                <form onSubmit={handleSubmit} className="p-10 flex flex-row flex-wrap w-[90%] h-auto justify-center">
                    <InputBox placeholder={"Name"} name= "name" value = {formData.name} onChange = {handleChange} width="20.8rem" height= "3.2rem" />
                    <InputBox placeholder={"Email"} name= "email" value = {formData.email} onChange = {handleChange} width="20.8rem" height= "3.2rem" />
                    <InputBox placeholder={"Phone"} name= "phone" value = {formData.phone} onChange = {handleChange} width="20.8rem" height= "3.2rem" />
                    <InputBox placeholder={"Organization"} name= "organization" value = {formData.organization} onChange = {handleChange} width="20.8rem" height= "3.2rem" />
                    <TextareaBox placeholder = {"Message"} name= "message" value = {formData.message} onChange = {handleChange} width= "43.6rem" minHeight = "12rem" />
                    <button 
                        type="submit" 
                        className="cursor-pointer w-[43.6rem] mt-[3rem] bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                        Send Message
                    </button>
                </form>
            </div>
        </>
    )
}

export default Contact;