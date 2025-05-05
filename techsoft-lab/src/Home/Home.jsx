import React, { useState } from 'react'
import RobotHand from '../Image/RobotHand.jpg'
import WebApp from '../Image/WebApp.jpg'
import ITHardWare from '../Image/ITHardWare.jpg'
import DataLake from '../Image/DataLake.jpg'
import Marketing from '../Image/Marketing.jpg'
import OurCompany from '../Image/OurCompany.jpg'
import Icon_1 from '../Image/Icon-1.jpg'
import Icon_2 from '../Image/Icon-2.jpg'
import DataMetrics from '../Image/DataMetrics.png'
import customer from '../Image/customer.jpg'
import TriveniLogo from '../Image/TriveniLogo.png'
import EnqForm from '../Form/EnqForm'

export default function Home() {
  const [showEnqForm, setShowEnqForm] = useState(false);
  return (
    <div>
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-[500px] md:h-[650px] lg:h-[875px]"
        style={{
          backgroundImage: `url(${RobotHand})`,
        }}
      >
        <div className='pt-20 md:pt-30 lg:pt-45 w-[90%] md:w-[80%] lg:w-[765px] mx-auto flex justify-center items-center flex-col gap-4 md:gap-6'>
          <h1 className='text-center font-bold text-[#0A1F44] text-2xl md:text-3xl lg:text-[40px]'>Welcome to Techsoft Lab Services</h1>
          <p className='text-center text-base md:text-lg lg:text-[20px] text-[#4B5563]'>Building tech solutions for your business needs.</p>
          <button className="bg-[#0057B8] hover:bg-[#135D60] text-white font-semibold px-8 md:px-12 lg:px-18 py-2 md:py-3 rounded-lg transition duration-300" onClick={() => setShowEnqForm(true)}>
            Get Started
          </button>
        </div>
      </div>

      {/* Our Services Section */}
      <div className='w-[95%] md:max-w-[90%] lg:max-w-[1440px] mx-auto my-8 md:my-10 lg:my-15'>
        <div className='flex justify-center items-center flex-col gap-4 md:gap-6 my-6 md:my-8 lg:my-10'>
          <h1 className='text-center font-bold text-[#0A1F44] text-2xl md:text-3xl lg:text-[40px]'>Our Core Services</h1>
          <p className='text-center text-base md:text-lg lg:text-[20px] text-[#4B5563] px-4'>Explore our top services designed for your business.</p>
          <button className="bg-[#0057B8] hover:bg-[#135D60] text-white font-semibold px-8 md:px-12 lg:px-18 py-2 md:py-3 rounded-lg transition duration-300">
            Learn More
          </button>
        </div>

        {/* Service Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 px-4 md:px-0'>
          <div className="bg-white shadow-md hover:scale-105 hover:shadow-xl duration-500 rounded-lg">
            <a href="#">
              <img src={WebApp} className='w-full rounded-t-lg' alt="Web App Development" />
            </a>
            <div className="px-4 py-3">
              <p className="text-lg font-bold text-black truncate block capitalize">Web & App Development</p>
              <div className="flex items-center">
                <p className="text-sm lg:text-lg text-[#4B5563] cursor-auto my-3">Smart, scalable websites and mobile apps tailored to your business.</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md hover:scale-105 hover:shadow-xl duration-500 rounded-lg">
            <a href="#">
              <img src={ITHardWare} className='w-full rounded-t-lg' alt="IT Hardware" />
            </a>
            <div className="px-4 py-3">
              <p className="text-lg font-bold text-black truncate block capitalize">IT - Hardware</p>
              <div className="flex items-center">
                <p className="text-sm lg:text-lg text-[#4B5563] cursor-auto my-3">Reliable hardware solutions for seamless performance and connectivity.</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md hover:scale-105 hover:shadow-xl duration-500 rounded-lg">
            <a href="#">
              <img src={DataLake} className='w-full rounded-t-lg' alt="Data Lake" />
            </a>
            <div className="px-4 py-3">
              <p className="text-lg font-bold text-black truncate block capitalize">Data Lake</p>
              <div className="flex items-center">
                <p className="text-sm lg:text-lg text-[#4B5563] cursor-auto my-3">Turn raw data into insights with smart analysis and automation.</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md hover:scale-105 hover:shadow-xl duration-500 rounded-lg">
            <a href="#">
              <img src={Marketing} className='w-full rounded-t-lg' alt="Marketing" />
            </a>
            <div className="px-4 py-3">
              <p className="text-lg font-bold text-black truncate block capitalize">Promoting/Marketing</p>
              <div className="flex items-center">
                <p className="text-sm lg:text-lg text-[#4B5563] cursor-auto my-3">Grow your brand with smart digital marketing and SEO.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Our Company */}
      <div className='bg-gradient-to-b from-[#FFFFFF] to-[#93A5BE] py-8 md:py-12 lg:py-15 mt-16 md:mt-20 lg:mt-30'>
        <div className='w-[90%] md:w-[85%] lg:max-w-[1170px] mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-[55%_auto] items-center gap-6 md:gap-8 lg:gap-10'>
            <div>
              <h1 className='text-2xl md:text-3xl lg:text-[40px] font-semibold'>About Our Company</h1>
              <p className='text-base md:text-lg lg:text-[20px] mt-4'>Together we create with the top IT Software and Hardware Company
                Based in Delhi, we are a dynamic IT company providing end-to-end solutions.</p>
            </div>
            <div className='flex justify-center lg:justify-start mt-6 lg:mt-0'>
              <img src={OurCompany} alt="Our Company" className='w-full max-w-[320px] md:max-w-[380px] lg:w-[420px] rounded' />
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center mt-10 md:mt-16 lg:mt-20 gap-6 md:gap-8 lg:gap-10'>
            <div className='bg-white/70 p-3 flex flex-col md:flex-row justify-between items-center gap-5 shadow-xl rounded-md'>
              <img src={Icon_1} alt="Mission Icon" className='w-16 md:w-auto' />
              <div>
                <h2 className='text-lg md:text-xl font-semibold mb-1 text-center md:text-left'>Mission, Vision, Values</h2>
                <p className='text-sm md:text-base'>To empower businesses through innovative, reliable, and scalable technology solutions — helping them grow, adapt, and thrive in the digital age.</p>
              </div>
            </div>
            <div className='bg-white/70 p-3 flex flex-col md:flex-row justify-between items-center gap-5 shadow-xl rounded-md'>
              <img src={Icon_2} alt="Story Icon" className='w-16 md:w-auto' />
              <div>
                <h2 className='text-lg md:text-xl font-semibold mb-1 text-center md:text-left'>Company Story</h2>
                <p className='text-sm md:text-base'>Founded in Delhi, Techsoft Lab Services started with a passion for solving real business problems through smart tech.</p>
              </div>
            </div>
          </div>

          <div className='flex justify-center mt-10 md:mt-16 lg:mt-20 pb-6 md:pb-8 lg:pb-10'>
            <button className="bg-[#0057B8] hover:bg-[#135D60] text-white font-semibold px-8 md:px-12 lg:px-18 py-2 md:py-3 rounded-lg transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Case Study Metrics */}
      <div
        className="bg-cover bg-center min-h-fit h-[250px] sm:h-[300px] md:h-[400px] lg:h-[600px] flex flex-col justify-center items-center py-10"
        style={{
          backgroundImage: `url(${DataMetrics})`,
        }}
      >
        <div className="flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 text-center px-4">
          <h1 className="font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Case Study Metrics
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-md">
            Explore the success of our projects in numbers.
          </p>
          <button className="bg-[#0057B8] hover:bg-[#135D60] text-white font-semibold px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-2.5 md:py-3 rounded-lg transition duration-300">
            View More
          </button>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-10">
          <div className="bg-[#21304E] p-4 text-white w-[320px] rounded-lg">
            <h2 className="font-semibold text-base">Clients Served</h2>
            <h1 className="font-semibold text-xl">4+</h1>
            <h2 className="font-semibold text-sm">+20%</h2>
          </div>
          <div className="bg-[#21304E] p-4 text-white w-[320px] rounded-lg">
            <h2 className="font-semibold text-base">Projects Completed</h2>
            <h1 className="font-semibold text-xl">15+</h1>
            <h2 className="font-semibold text-sm">+30%</h2>
          </div>
        </div>
      </div>

      {/* Customer Testimonials */}
      <div className='flex flex-col lg:flex-row items-center my-12 md:my-16 lg:my-24 gap-10 lg:gap-20 w-[90%] md:w-[85%] lg:max-w-[1320px] mx-auto'>
        <div className='w-full lg:w-auto'>
          <img src={customer} alt="Customer" className='w-full max-w-[800px] mx-auto' />
        </div>
        <div className='w-full'>
          <h1 className='text-2xl md:text-3xl lg:text-[40px] mb-3 md:mb-5 font-bold mt-4 md:mt-6 lg:mt-8 text-center lg:text-left'>Customer Testimonials</h1>
          <p className='font-semibold text-center lg:text-left'>See what our clients have to say about us.</p>

          <div className='flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 lg:gap-14 mt-6 md:mt-10 lg:mt-15'>
            <div className='p-4 bg-[#0000000D] rounded-2xl w-full'>
              <div className='flex items-center gap-3'>
                <img src={TriveniLogo} alt="Triveni Logo" className='w-7' />
                <h1 className='font-semibold'>Triveni Media - CEO</h1>
              </div>
              <p className='my-3 pb-3 md:pb-5 text-sm md:text-base'>Having the power to capture user feedback is revolutionary…</p>
            </div>
            <div className='p-4 bg-[#0000000D] rounded-2xl w-full'>
              <div className='flex items-center gap-3'>
                <img src={TriveniLogo} alt="Triveni Logo" className='w-7' />
                <h1 className='font-semibold'>Triveni Media - CEO</h1>
              </div>
              <p className='my-3 pb-3 md:pb-5 text-sm md:text-base'>Having the power to capture user feedback is revolutionary…</p>
            </div>
          </div>

          <div className='flex justify-center mt-8 md:mt-12 lg:mt-20 pb-6 md:pb-8 lg:pb-10'>
            <button className="bg-[#0057B8] hover:bg-[#135D60] text-white font-semibold px-8 md:px-12 lg:px-18 py-2 md:py-3 rounded-lg transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
      {showEnqForm && (
        <>
          <div
            className="fixed inset-0 bg-transparent bg-opacity-50 z-40"
            onClick={() => setShowEnqForm(false)}
          />
          <div
            className="fixed inset-x-0 top-0 z-50 transform transition-transform duration-500 ease-in-out"
            style={{ transform: showEnqForm ? 'translateY(0)' : 'translateY(-100%)' }}
          >
            <EnqForm onClose={() => setShowEnqForm(false)} />
          </div>
        </>
      )}
    </div>
  )
}