import resumePDF from "../../assets/resume.pdf";
// import Img1 from "../../assets/PORT 1.png";
import "./Banner.css";
import { Typewriter } from "react-simple-typewriter";
import AnimateData from '../../assets/63487-programming-computer.json';
import Lottie from "lottie-react";


const Banner = () => {
  const handleDownloadResume = () => {
    window.open(resumePDF, "_blank");
  };

  return (
    <section className="bg-gray-900 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 md:pr-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight text-center md:text-left mb-6">
          Hi, I am 
          <br /> 
            <Typewriter
              
              words={["MD. SOHEL","Font-end Developer"]}
              loop={true}
              cursor
              cursorStyle="|"
            
            />
            
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 text-center md:text-left mb-8">
            I can build dynamic, user-friendly websites.
          </p>
          <button
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors duration-300 ease-in-out w-full md:w-auto"
            onClick={handleDownloadResume}
          >
            Download Resume
          </button>
        </div>
      
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
        <Lottie animationData={AnimateData}></Lottie>
          {/* <img
            src={Img1}
            alt="Profile"
            className="rounded-full h-auto max-w-full"
          /> */}
        </div>
        
      </div>
    </section>
  );
};

export default Banner;
