
import { Link } from 'react-router-dom';
import './Projects.css'


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'WesternWood Restaurant',
      image: 'https://i.ibb.co/qNr5kvc/screencapture-western-wood-web-app-2023-07-02-11-23-49.png', 
      description: 'The western wood restaurant is responsive user friendly E-commerce platform. To build this site I have used tailwind, daisyUI, React.js, Express.js, Node.js, MongoDb, react-stripe.js, Firebase and so on.',
      github:'https://github.com/Sohelahmed27/The-western-wood-restaurent',
      livesite:'https://western-wood.web.app/'},
    {
      id: 2,
      title: 'Ema-Jhon-shop',
      image: 'https://i.ibb.co/b652SgK/screencapture-ema-jhon-firebase-auth-d6dc5-web-app-2023-07-02-20-22-57.png', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      github:'https://ema-jhon-firebase-auth-d6dc5.web.app/',
      livesite:'https://ema-jhon-firebase-auth-d6dc5.web.app/'
    },
   
    {
      id: 3,
      title: 'Cosmic Law Firm',
      image: 'https://i.ibb.co/BGP544M/screencapture-lighthearted-baklava-fd24c0-netlify-app-2023-07-03-06-36-17.png', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      livesite:'https://lighthearted-baklava-fd24c0.netlify.app/'

    }
    
  ];
  
  return (
    <section className="bg-gray-900 py-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-gray-100 text-center mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md p-6"
           
          >
            <div className="img-wrap">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
             
            </div>
            <h1 className='text-center text-lg font-bold mb-5'>{project.title}</h1>
            
<div className="mx-auto"> 

{/* <button className="btn btn-primary btn-sm"><Link to={project.github}>Github </Link></button> */}
<button className="btn btn-primary btn-sm mx-auto"><Link to={project.livesite}>Live Site </Link></button>
</div>

          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Projects;