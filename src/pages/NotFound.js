import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
const NotFound = () => {
  return (
    <div className="flex flex-col space-y-6 justify-center items-center h-1/2">
      <h1 className="text-5xl font-bold text-error ">Oops!</h1>
      <p className="text-xl text-info">404-Page Not Found!</p>
      <Link to="/" className="btn btn-primary ">
        <FaHome className="mr-2 text-xl" />
        Back TO Home
      </Link>
    </div>
  );
};

export default NotFound;
