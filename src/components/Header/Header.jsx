import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header className="flex items-center justify-between p-4 bg-gray-900">
        <Link to="/" className="text-2xl font-bold text-white">Portfolio</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
            <li><Link to="/about" className="text-white hover:text-gray-300">About Me</Link></li>
            <li><Link to="/skill" className="text-white hover:text-gray-300">Skills</Link></li>
            <li><Link to="/projects" className="text-white hover:text-gray-300">Projects</Link></li>
            <li><Link to="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
