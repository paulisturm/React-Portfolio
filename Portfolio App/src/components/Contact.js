import React, { useState } from 'react';


function Contact () {
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform any necessary actions with the email and comment data, such as sending it to a server or storing it in state.
      console.log('Email:', email);
      console.log('Comment:', comment);
      // Reset the form
      setEmail('');
      setComment('');
    };
   
    return (
        //<><h1>Contact</h1><ul className='contact'> My name is Paul Sturm</ul></>
        <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Comment:
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
        
    );
}

export default Contact;