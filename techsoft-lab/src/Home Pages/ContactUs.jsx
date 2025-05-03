// ContactForm.jsx
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ContactForm = () => {

  const [formData, setFormData] = useState({
    userName: '',
    phoneNumber: '',
    userEmail: '',
    userTitle: '',
    userDescription: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const aboutUsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactUsRef = useRef(null);

  const animateOnScroll = (ref) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const payload = {
      userName: formData.userName,
      phoneNumber: formData.phoneNumber,
      userEmail: formData.userEmail,
      userTitle: formData.userTitle,
      userDescription: formData.userDescription
    };

    try {
      const res = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/web/user/enq`, payload);
      // console.log('API Response:', res.data);

      Swal.fire({
        icon: 'success',
        title: 'Thank You!',
        text: 'Your enquiry has been received. Our team will reach out to you soon.',
        confirmButtonColor: '#f97316',
      }).then(() => {
        // Clear form data only after SweetAlert is dismissed
        setFormData({
          userName: '',
          phoneNumber: '',
          userEmail: '',
          userTitle: '',
          userDescription: ''
        });
      });
    } catch (err) {
      console.error('API Error:', err);

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Please try again later.',
        confirmButtonColor: '#f97316',
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const cleanupAboutUs = animateOnScroll(aboutUsRef);
    const cleanupServices = animateOnScroll(servicesRef);
    const cleanupContactUs = animateOnScroll(contactUsRef);

    return () => {
      cleanupAboutUs();
      cleanupServices();
      cleanupContactUs();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-violet-200 to-pink-200 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="text-black md:w-1/2 p-6">
          <h2 className="text-sm uppercase tracking-wider mb-4">Contact Us</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch: We're <br />
            <span className="text-pink-500">Here to Answer Your Questions</span>
          </h1>

          {/* Contact Info */}
          <div className="flex space-x-4 mb-8">
            <div className="flex items-center bg-gray-800 p-3 rounded-lg">
              <svg className="w-6 h-6 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className='text-white'>sambhavkarn7@gmail.com</span>
            </div>
            <div className="flex items-center bg-gray-800 p-3 rounded-lg">
              <svg className="w-6 h-6 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className='text-white'>+91-8506072686</span>
            </div>
          </div>

          {/* Support Info */}
          <div className="flex space-x-8 text-sm">
            <div>
              <h3 className="font-semibold mb-2">Customer Support</h3>
              <p>Our support team is available around the clock to help you with any queries</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Feedback and Suggestions</h3>
              <p>We value your important feedbacks and are continuously working to help you better.</p>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="md:w-1/2 p-6 bg-gray-800 bg-opacity-50 rounded-xl shadow-lg">
          <h2 className="text-white text-xl font-semibold mb-2">Get in Touch</h2>
          <p className="text-gray-400 mb-6">You can reach us anytime</p>
          <form className="space-y-4" onSubmit={handleSubmit} >
            <div className="">
              <div>
                <span className="uppercase text-sm text-white font-bold">Full Name</span>
                <input className="w-full bg-gray-300 text-gray-900 mt-1 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text" placeholder="Enter Your Name" id="userName" name="userName" value={formData.userName} onChange={handleChange} />
              </div>
              <div className="mt-3">
                <span className="uppercase text-sm text-white font-bold">Email</span>
                <input className="w-full bg-gray-300 text-gray-900 mt-1 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email" placeholder='Enter Your Email' id="userEmail" name="userEmail" value={formData.userEmail} onChange={handleChange} />
              </div>
              <div className="mt-3">
                <span className="uppercase text-sm text-white font-bold">Phone Number</span>
                <input className="w-full bg-gray-300 text-gray-900 mt-1 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text" placeholder='Enter Your Number' id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
              </div>
              <div className="mt-3">
                <span className="uppercase text-sm text-white font-bold">Subject</span>
                <input className="w-full bg-gray-300 text-gray-900 mt-1 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text" placeholder='Subject' id="userTitle" name="userTitle" value={formData.userTitle} onChange={handleChange} />
              </div>
              <div className="mt-3">
                <span className="uppercase text-sm text-white font-bold">Message</span>
                <textarea
                  className="w-full h-20 bg-gray-300 text-gray-900 mt-1 p-2 rounded-lg focus:outline-none focus:shadow-outline" id="userDescription" name="userDescription" value={formData.userDescription} rows="4" onChange={handleChange}></textarea>
              </div>
              <div className="mt-3">
                <button
                  disabled={isLoading}
                  className={`transition-colors duration-300 flex items-center justify-center uppercase text-sm font-bold tracking-wide bg-orange-400 text-gray-100 p-2 rounded-lg w-full focus:outline-none focus:shadow-outline ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <svg
                        className="animate-spin mr-2 h-5 w-5 text-white" // Changed -ml-1 to mr-2
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;