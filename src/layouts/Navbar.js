import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
const Navbar = ({ title = "GitFinder" }) => {
  return (
    <nav className="navbar mb-12 shadow-md bg-neutral text-neutral-content px-3 md:px-5 lg:px-24">
      <FaGithub className="text-xl" />
      <Link
        to="/"
        className="text-lg font-semibold tracking-wide ml-2 italic text-secondary-focus hover:border-b-2 hover:border-primary"
      >
        {title}
      </Link>
      <div className="links flex justify-end w-full space-x-3">
        <Link className="btn btn-ghost " to="/">
          Home
        </Link>
        <Link className="btn btn-ghost " to="/about">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
