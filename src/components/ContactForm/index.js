import React from "react";
import emailjs from "emailjs-com";
import "./StylesContact.css";

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("service_5d6enl2", "template_4c5lsz4", e.target, "user_sln0CMSHZZi0TJK7j0QGE")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <div className="contact-container" id="Contact">
      <form className="contact-form" onSubmit={sendEmail}>
        <div className="contact-card mx-auto">
          <div className="card-details">
            <h2>Contact</h2>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label>Subject</label>
              <input type="text" className="form-control" name="subject" />
            </div>
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" name="name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" name="email" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea className="form-control" name="message" />
            </div>
            <div className="form-btn">
              <input type="submit" className="send-btn" value="Send" />
            </div>            
          </div>
        </div>
      </form>
    </div>
  );
}
