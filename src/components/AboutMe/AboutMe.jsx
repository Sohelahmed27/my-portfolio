import img1 from "../../assets/About.png";
const AboutMe = () => {
  return (
    <section className="bg-gray-900 py-10">
      <div className="max-w-6xl  px-4 sm:px-6 lg:px-2 flex flex-col-reverse md:flex-row items-center">
        <div className="w-full md:w-1/3 mt-20 mr-10">
          <img
            src={img1}
            alt="Profile"
            className="rounded-full h-auto max-w-full  md:ml-auto"
          />
        </div>
        <div className="w-full md:w-2/3  md:text-left text-white mt-20">
          <h2 className="text-4xl font-extrabold text-g mb-6">
            About Me
          </h2>
          <p className="text-lg ">
             I am Mohammad Sohel, a junior MERN stack web developer. I worked on various projects that
            involved building responsive and user-friendly web applications. I gained experience in front-end development, utilizing modern
            frameworks and libraries like React to create interactive and dynamic user interfaces. Additionally, I have knowledge of back-end
            development using Node.js and Express, and I have worked with
            MongoDB for database management. I am passionate about continuously
            learning and staying up-to-date with the latest web development
            trends and technologies. I enjoy working in collaborative
            environments where I can contribute my skills and learn from experienced professionals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
