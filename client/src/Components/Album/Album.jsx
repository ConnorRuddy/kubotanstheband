import React, {useState, useEffect }from 'react'
import emailjs from '@emailjs/browser';
import album from '../Assets/Photos/album.jpg'
import './Album.css'



export const Album = () => {
  //   const initInputs ={
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: ""
  // }

  //This is for the div from lastpass that is hiding out
  // useEffect(() => {
  //   var overlayDiv = document.querySelector('div[data-lastpass-infield="true"]');
  //   if (overlayDiv) {
  //     overlayDiv.style.display = 'none';
  //   }
  // }, []);


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');


  // function handleChange(e){
  //   const{name, value} = event.target;
  //   setInputs({...inputs, [name]: value});
  // };


//Your EmailJS service ID, template ID, Public Key
  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = 'service_prxw9hl';
    const templateId = 'template_c8pmup8';
    const publicKey = '9ezRvgz_Z8l7L42zl';
  
  //Create a new Object that contains dynamic template params
  const templateParams ={
    from_firstName: firstName,
    from_lastName: lastName,
    from_email: email,
    to_name: 'Kubotans',
    from_phone: phone,
  };

  emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log('Email sent successfully!', response);
     setFirstName('')
     setLastName('')
     setEmail('')
     setPhone('')
    })
    .catch((error) => {
      console.error('error sending email', error)
     });
    }

  // const {firstName, lastName, email, phone} = inputs
  
  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div>
      {!showForm ? (
        <div className="album-img">
          <img src={album} alt="" className="album" />
          <button className="album-button" onClick={openForm}>
            ORDER NOW!
          </button>
        </div>
      ) : (
        <div className='form-container'>
          <form onSubmit={handleSubmit}>
            <h3>FILL OUT THE FORM!</h3>
            <p>(You will receive an email with further instructions to complete the purchase)</p>
            <input type='text'
              placeholder=' First Name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required />
            <input type='text'
              placeholder=' Last Name'
              value ={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required />
            <input type='text'
              placeholder=' Enter Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required />
            <input type='number'
              placeholder=' Phone Number'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required />
            <div className='button-container'>
              <button type='submit' className='submit'>Submit</button>
              <button type='button' className='cancel' onClick={closeForm}> Close</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
