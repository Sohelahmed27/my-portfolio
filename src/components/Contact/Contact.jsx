// import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import img1 from '../../assets/contact.jpg'

 const Contact = () => {
  // const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nb8a2yc', 'template_pmynwl9', e.target, '4esI1pvpSQdphBGmL')
      .then((result) => {
          console.log(result);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
  <section className='bg-gray-900 '>
  <h2 className="text-4xl font-extrabold text-white text-center mb-6">Contact</h2>
    <div className='max-w-6xl  px-4 sm:px-6 lg:px-2 flex flex-col-reverse md:flex-row items-center'>
    <div className='w-[50%] ml-10'>
         <img src={img1} className='h-[400px] w-[100%]' />
    </div>
    <div className=" w-[50%]">
  <form className="flex flex-col w-[100%] p-6 rounded-lg shadow-lg ml-10" onSubmit={sendEmail}>
    <label className="text-white text-lg font-bold mb-2">Name</label>
    <input className="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600" type="text" name="user_name" />

    <label className="text-white text-lg font-bold mt-4 mb-2">Email</label>
    <input className="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600" type="email" name="user_email" />

    <label className="text-white text-lg font-bold mt-4 mb-2">Message</label>
    <textarea className="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600" name="message" rows="4"></textarea>

    <input className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6 cursor-pointer" type="submit" value="Send" />
  </form>
</div>
    </div>
  </section>

  );
};

export default Contact;