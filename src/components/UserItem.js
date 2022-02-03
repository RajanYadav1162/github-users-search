import { Link } from "react-router-dom";

const UserItem = ({ user }) => {
  return (
    <div className="shadow-lg rounded-lg flex space-x-3 py-3 px-2 mb-3 max-w-sm mx-auto justify-center">
      <img
        src={user.avatar_url}
        alt="user"
        className="avatar w-12 h-12 rounded-r-xl rounded-b-xl object-center object-cover"
      />
      <div>
        <h1 className="text-slate-200 text-sm font-semibold capitalize">
          {user.login.slice(0, 8)}
        </h1>
        <Link to={`/users/${user.login}`} className="text-base-300 text-sm">
          visit profile
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
