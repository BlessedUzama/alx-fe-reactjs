import UserContext from "./UserContext";

function UserDetails() {
  return (
    <div>
      <UserContext.Consumer>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </UserContext.Consumer>
    </div>
  );
}

export default UserDetails;
