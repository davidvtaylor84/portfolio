import React from 'react'
import './Contact.css'


const Contact = () => {


  return (
    <div className='contactContainer'>
      <form onSubmit="sendEmail(); reset(); return false;">
        <h4>Get in touch via the form below or email me at davidvaldeztaylor@gmail.com</h4>
        <input className='input' type="text" id="name" placeholder='Your Name' required/>
        <br></br>
        <input className='input' type="email" id="email" placeholder='Email Address' required/>
        <br></br>
        <input className='input' type="text" id="phone" placeholder='Phone Number' required/>
        <br></br>
        <textarea id='message' rows='4' placeholder='How can I help?'></textarea>
        <button type='submit'>Send</button>
      </form>

      {/* <script src="https://smtpjs.com/v3/smtp.js"></script>
      <script>
        function sendEmail(){
          Email.send({
            Host : "smtp.elasticemail.com",
            Username : "username",
            Password : "password",
            To : 'them@website.com',
            From : "you@isp.com",
            Subject : "This is the subject",
            Body : "And this is the body"
        }).then(
          message => alert(message)
        )} */}
      {/* </script> */}
    </div>
  )
}

export default Contact

