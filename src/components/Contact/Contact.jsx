import React from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={`${styles.contact} container section}`}>
      <h2 className="sectionTitle">Get In Touch</h2>

      <div className={`${styles.contactContainer} grid`}>
        <div className={styles.contactInfo}>
          <h3 className={styles.contactTitle}>Let's talk about everything!</h3>
          <p className={styles.contactDetails}>
            Don't Like Forms? Send me an email.✍️
          </p>
        </div>
        <form action="" className={styles.contactForm}>
        <div className={styles.contactFormGroup}>
            <div className={styles.contactFormDiv}>
              <input
                className={styles.contactFormInput}
                type="text"
                name=""
                id=""
                placeholder="Insert your name"
              />
            </div>
        
            <div className={styles.contactFormDiv}>
              <input
                className={styles.contactFormInput}
                type="email"
                name=""
                id=""
                placeholder="Insert your email"
              />
            </div>
            </div>
       
            <div className={`${styles.contactFormDiv}`}>
              <input
                className={styles.contactFormInput}
                type="text"
                name=""
                id=""
                placeholder="Insert your Subject"
              />
            </div>
        
            <div className={styles.contactFormDiv}>
              <textarea
                className={`${styles.contactFormInput} ${styles.contactFormArea}`}
                cols="30"
                rows="10"
                name=""
                id=""
                placeholder="Write your message"
                
              />
              
            </div>
            <button  className="btn">Send Message</button>
        </form>
      
      </div>
      
    </section>
  );
}
