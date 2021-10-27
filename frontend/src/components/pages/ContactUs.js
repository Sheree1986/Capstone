// import { useState } from 'react';
// import '../CSS/ContactUs.css';
// import App2 from './App2';
// import FormInput from './FormInput';

// function ContactUs() {
//   const [message, setMessage] = useState('');

//   const initialValues = {
//     firstName: '',
//     lastName: '',
//     emailAddress: '',
//     password: '',
//   };

//   const submit = (form) => {
//     setMessage(`Thank you for subscribing to our mailing list, ${form.firstName} ${form.lastName}! We've sent a confirmation email to ${form.emailAddress}.`);
//   };

//   return (
//     <div className="App">
//       <h1>Sign Up</h1>

//       <App2 submit={submit} initialValues={initialValues}>
//         <FormInput 
//           label="First Name" 
//           name="firstName" />
//         <FormInput 
//           label="Last Name" 
//           name="lastName" />
//         <FormInput 
//           label="Email Address" 
//           type="email" 
//           name="emailAddress" />
//         <FormInput 
//           label="Password" 
//           type="password" 
//           name="password" />
//       </App2>

//       <p className= "access">{message}</p>

//       <h2>Log In</h2>
//       <App2
//         submit={(form) => {
//           alert(`Logged in as ${form.username}!`);
//         }}
//         initialValues={{
//           username: '',
//           password: ''
//         }}>
//         <FormInput
//           label="Username"
//           name="username" />
//         <FormInput
//           label="Password"
//           name="password" />
//       </App2>
//     </div>
//   );
// }

// export default ContactUs;

// // import React from 'react';
// import { useState } from 'react';
// import { send } from 'emailjs-com';
// import '../../App.css';

// export default function ContactUs() {

 
//     const [toSend, setToSend] = useState({
//       from_name: '',
//       to_name: 'Sheree',
//       message: '',
//       reply_to: '',
//     });
  
//     const onSubmit = (e) => {
//       e.preventDefault();
//       send(
//         'service_j4mukjf',
//         'template_nelrrcd',
//         toSend,
//         'user_FCzqXI4SX9vcVAoanDANx'
//       )
//         .then((response) => {
//           alert('Email Sent!', response.status, response.text);
//         })
//         .catch((err) => {
//           alert('Unable to sent email...', err);
//         });
//     };
   
//     const handleChange = (e) => {
//       setToSend({ ...toSend, [e.target.name]: e.target.value });
//     };
  
//     return (
//       <div className='Contact'>

      
      
//  <form onSubmit={onSubmit}>
//   <input
//     type='text'
//     name='from_name'
//     placeholder='from name'
//     required value={toSend.from_name}
//     onChange={handleChange}
//   />
//   <input
//     type='text'
//     name='to_name'
//     placeholder='Sheree'
//     required value={toSend.to_name}
//     onChange={handleChange}
//   />
//   <input
//     type='text'
//     name='message'
//     placeholder='Your message'
//     required value={toSend.message}
//     onChange={handleChange}
//   />
//   <input
//     type='text'
//     name='reply_to'
//     placeholder='Your email'
//     required value={toSend.reply_to}
//     onChange={handleChange}
//   />
// <button type='submit'>Submit</button>

// </form>
//       </div>
//       )
//     };

