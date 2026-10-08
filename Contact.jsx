import React, { useState } from "react";
import emailjs from '@emailjs/browser';

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

import "./Contact.css";

function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
const form = useRef();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

  const sendEmail = (e) => {
    e.preventDefault();
    

    // console.log(formData);

    // alert("Message sent successfully!");

    // setFormData({
    //   name: "",
    //   email: "",
    //   message: "",
    // });
    emailjs
      .sendForm('service_m1vs6rc', 'template_6j9ja4m', form.current, {
        publicKey: 'QR8yUi76sVA09Dy_H',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Form Added Succefully")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    // <section className="contact-page">
    //   {/* Header */}
    //   <div className="contact-header">
    //     <p>GET IN TOUCH</p>
    //     <h1>
    //       Contact <span>Me</span>
    //     </h1>
    //     <p>
    //       Have a project or idea? Let's work together.
    //     </p>
    //   </div>

    //   <div className="contact-container">
    //     {/* LEFT SIDE */}
    //     <div className="contact-left">
    //       <h2>Let's Talk</h2>
    //       <p className="contact-description">
    //         I'm available for freelance graphic design,
    //         frontend development and creative projects.
    //       </p>
    //       {/* Contact Details */}
    //       <div className="contact-info">
    //         <div className="info-item">
    //           <div className="info-icon">
    //             <FaEnvelope />
    //           </div>
    //           <div>
    //             <span>Email</span>
    //             <p>manohar.chadulla8910@gmail.com</p>
    //           </div>
    //         </div>

    //         {/* <div className="info-item">

    //           <div className="info-icon">
    //             <FaPhone />
    //           </div>

    //           <div>
    //             <span>Phone</span>
    //             <p>+91 98765 43210</p>
    //           </div>

    //         </div> */}


    //         <div className="info-item">

    //           <div className="info-icon">
    //             <FaMapMarkerAlt />
    //           </div>

    //           <div>
    //             <span>Address</span>
    //             <p>Andhra Pradesh, India</p>
    //           </div>

    //         </div>

    //       </div>


    //       {/* Social Sharing */}

    //       <div className="social-section">

    //         <h3>Share / Follow Me</h3>

    //         <div className="social-icons">

    //           <a href="#" className="linkedin">
    //             <FaLinkedin />
    //           </a>

    //           <a href="#" className="github">
    //             <FaGithub />
    //           </a>

    //           <a href="#" className="instagram">
    //             <FaInstagram />
    //           </a>

    //           <a href="#" className="facebook">
    //             <FaFacebook />
    //           </a>

    //         </div>

    //       </div>

    //     </div>


    //     {/* RIGHT SIDE */}

    //     <div className="contact-right">

          

    //       {/* Address Card */}

    //       <div className="address-card">

    //         <FaMapMarkerAlt />

    //         <div>
    //           <h3>My Location</h3>

    //           <p>
    //             Andhra Pradesh, India
    //           </p>

    //           <small>
    //             Available for remote projects worldwide.
    //           </small>
    //         </div>

    //       </div>

    //     </div>

    //   </div>

    // </section>
    <div className="form-card">

            <h2>Send Me a Message</h2>

            <form ref={form} onSubmit={sendEmail}>

              {/* Name */}

              <div className="input-group">

                <FaUser />

                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                //   value={formData.name}
                //   onChange={handleChange}
                  required
                />

              </div>


              {/* Email */}

              <div className="input-group">

                <FaEnvelope />

                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                //   value={formData.email}
                //   onChange={handleChange}
                  required
                />

              </div>


              {/* Message */}

              <div className="input-group textarea-group">

                <FaPaperPlane />

                <textarea
                  name="message"
                  placeholder="Your Message"
                //   value={formData.message}
                //   onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" value="Send">
                Send Message
                <FaPaperPlane />
              </button>

            </form>

          </div>

  );
}

export default Contact;