import { useState, useContext } from "react";
import { clearUsers } from "../context/github/userReducer";
import UserContext from "../context/github/usersContext";

const UserSearch = () => {
  const [search, setSearch] = useState("");
  const [alert, setAlert] = useState(false);
  const { fetchUsers, users, dispatch, isNoUser } = useContext(UserContext);

  const submitHandler = (e) => {
    e.preventDefault();

    if (search == "") {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
      return;
    }

    fetchUsers(search);
    setSearch("");
  };

  return (
    <form
      className="form-control max-w-md flex justify-center mx-auto mb-20 space-y-3"
      onSubmit={submitHandler}
    >
      {alert && <p className="alert alert-error ">Please enter a username!</p>}
      <input
        className="input input-info text-lg"
        placeholder="Search user... "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn btn-primary">Search</button>
      {users.items && users.items.length > 0 && (
        <button
          type="button"
          className="btn btn-sm btn-error"
          onClick={() => dispatch(clearUsers())}
        >
          Clear
        </button>
      )}

      {isNoUser && (
        <p className="alert alert-warning ">Please enter valid username!</p>
      )}
    </form>
  );
};

export default UserSearch;
