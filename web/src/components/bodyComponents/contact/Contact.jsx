import {useState, useEffect} from 'react'
import { FaLinkedin } from "react-icons/fa6";
import InputBox from './InputBox';
import TextareaBox from './TextareaBox';
import emailjs from 'emailjs-com';

function Contact() {
    const isEmail = (email) => {
        if (email.includes('@') && email.includes('.')) {
            return true;
        }
        return false;
    }
    
    const isPhoneNumber = (phoneNumber) => {
        const regex = /^[0-9-]*$/;
        if (!regex.test(phoneNumber)) {
            return false;
        }
    
        if (phoneNumber.length === 12 && phoneNumber[3] === '-' && phoneNumber[7] === '-') {
            return true;
        } else if (phoneNumber.length === 10 || phoneNumber.length === 11) {
            return true;
        }
        return false;
    }
    

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
        if (!isEmail(formData.email)) {
            alert("Invalid Email Address");
            return;
        }
        if (formData.phone !== "" && !isPhoneNumber(formData.phone)) {
            alert("Invalid Phone Number");
            return;
        }
        sendEmail(formData); // Function to send email
    };


    return (
        <>
            <div id= "contactBox" className = " z-10 contactBox mt-20 rounded-[2rem] w-[65rem] min-h-[35rem] p-10 flex flex-col items-center justify-center ">
                <h1 className = "text-4xl font-medium">Let's Get In Touch!</h1>
                <div className ="w-full h-auto flex flex-row items-center justify-center">
                    <p className = "mt-[1rem] text-base] mr-[0.5rem]">mosbill067@gmail.com | </p>
                    <a href = "https://www.linkedin.com/in/bill-wxng/" target= "_blank"><FaLinkedin className = "text-center text-xl mt-[1rem]" /></a>
                </div>
                <form onSubmit={handleSubmit} className=" p-10 flex flex-row flex-wrap w-[90%] h-auto justify-center">
                    <InputBox placeholder={"Name"} name= "name" value = {formData.name} onChange = {handleChange} width="20.8rem" height= "3.2rem" />
                    <InputBox placeholder={"Email"} name= "email" value = {formData.email} onChange = {handleChange} width="20.8rem" height= "3.2rem" />
                    <InputBox placeholder={"Phone"} name= "phone" value = {formData.phone} onChange = {handleChange} width="20.8rem" height= "3.2rem" />
                    <InputBox placeholder={"Organization"} name= "organization" value = {formData.organization} onChange = {handleChange} width="20.8rem" height= "3.2rem" />
                    <TextareaBox placeholder = {"Message"} name= "message" value = {formData.message} onChange = {handleChange} width= "43.6rem" minHeight = "12rem" />
                    <button 
                        type="submit" 
                        className="button bg-[#4f5186]/70 cursor-pointer w-[43.6rem] mt-[3rem] text-white p-2 rounded hover:bg-[#4f5186]">
                        Send Message
                    </button>
                </form>
            </div>
        </>
    )
}

export default Contact;