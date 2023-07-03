import './Skill.css'

const Skills = () => {
  const skills = [
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Bootstrap',
    'JavaScript',
    'React',
    'Express.js',
    'Node.js',
    'Firebase',
    'MongoDB',
    'GitHub',
    'Vercel'
  ];
  return (
    <div>
      
      <section className="bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-white text-center mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center"
            >
              <span className="text-lg text-gray-800">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Skills;