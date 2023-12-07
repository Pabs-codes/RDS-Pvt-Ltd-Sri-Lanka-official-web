// import {useRef} from 'react';


// const Contact =() => {
//     const form = useRef();

//     const sendEmail = () => {};

//   return (
//     <section>
//         <div className='container01'>
//             <h2 className='--text-center'>Contact</h2>
//             <form 
//              ref={form}
//              onSubmit={sendEmail}
//              className='--form-control --card --flex-center --dir-column'>
//                 <input type="text"
//                 placeholder='Full Name'
//                 name='user_name' required/>

//                 <input type="email"
//                 placeholder='Full Name'
//                 name='user_email' required/>
                
//                 <input type="text"
//                 placeholder='Full Name'
//                 name='subject' required/>

//                 <textarea name="message"
//                 cols="30" rows="10"></textarea>
//                 <button type='submit' className='--btn--btn-primary'>
//                      Send Now</button>
//             </form>
//         </div>
//     </section>
//   )
// }

// export default Contact


















// import { useRef } from 'react';
// import './Contact.css'; // Import your CSS file for styling

// const SteelInquiryForm = () => {
//   const form = useRef();

//   const sendInquiry = () => {
//     // Implement your send inquiry logic here
//   };

//   return (
//     <section id="c-section" className='contact-section'>
//       <div className='container01'>
//         <h2 className='contact-heading'>Fill your Inquiry </h2>
//         <form
//           ref={form}
//           onSubmit={sendInquiry}
//           className='contact-form'
//         >
//           <input type="text" placeholder='Your Full Name' name='user_name' required />

//           <input type="email" placeholder='Your Email' name='user_email' required />

//           <input type="text" placeholder='Product of Interest' name='subject' required />

//           <textarea name="message" placeholder='Your Message and Additional Details' rows="6" required></textarea>
          
//           <button type='submit' className='btn btn-primary'>
//             Send Inquiry
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default SteelInquiryForm;


import { useRef } from 'react';
import './Contact.css'; // Import your CSS file for styling

const SteelInquiryForm = () => {
  const form = useRef();

  const sendInquiry = () => {
    // Implement your send inquiry logic here
  };

  return (
    <section id="contact" className='contact-section'>
      <div className='container01'>
        <h2 className='contact-heading'>Fill your Inquiry </h2>
        <form
          ref={form}
          onSubmit={sendInquiry}
          className='contact-form'
        >
          <input type="text" placeholder='Your Full Name' name='user_name' required />

          <input type="email" placeholder='Your Email' name='user_email' required />

          <input type="text" placeholder='Product of Interest' name='subject' required />

          <textarea name="message" placeholder='Your Message and Additional Details' rows="6" required></textarea>
          
          <button type='submit' className='btn btn-primary'>
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default SteelInquiryForm;
