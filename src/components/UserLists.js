import UserContext from "../context/github/usersContext";
import Spinner from "react-spinkit";
import UserItem from "./UserItem";
import { useContext } from "react";
const UserList = () => {
  let { isLoading, users } = useContext(UserContext);
  if (isLoading)
    return (
      <Spinner name="line-scale" color="goldenrod" className="text-center" />
    );

  return (
    <>
      <div className="grid grid-cols-1 place-content-center gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {users.items &&
          users.items.map((user) => (
            <div key={user.id}>
              <UserItem user={user} />
            </div>
          ))}
      </div>
    </>
  );
};

export default UserList;
