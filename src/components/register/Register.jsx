import "/nav.register.register.css" 
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const addUser = async (e) => {
    e.preventDefault();
    const user = {
      name: e.target.name.value,
      username: e.target.username.value<
await fetch ("/register, {
    method:"POST",
    Headers: {
            "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    }
      .then(() => navigate("/login", { replace: true }))
      .catch((error) => console.log(error));
  };
  return (
    <div className="mainRegistrationDiv">
      <h1>Sign Up</h1>
      <form onSubmit={addUser}>
        <label htmlFor="name">Enter your name</label> <br />
        <input type="text" name="name" placeholder="Bill" required /> <br />
        <label htmlFor="surname">Enter your surname</label> <br />
        <input type="text" name="surname" placeholder="Gates" required /> <br />
        <label htmlFor="username">Enter your username </label> <br />
        <input  type="text" name="username"placeholder=""pinkFairy></input><br />
        <label htmlFor="password">Enter your password</label> <br />
        <input type="password" name="password"   placeholder="RealyG00dPass"minLength="6" required/>{" "}
        <br />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};
export default Register;



