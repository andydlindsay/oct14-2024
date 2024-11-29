// import {useState} from 'react';
import useInput from "../hooks/useInput";

const Login = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const usernameInput = useInput('dean');
  const passwordInput = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`you are trying to sign in as ${usernameInput.value} with the password ${passwordInput.value}`);
  };

  return (
    <div>
      <h2>Login Below!</h2>

      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input 
          value={usernameInput.value}
          onChange={usernameInput.onChange}
        />
        <br/>
        <label>Password</label>
        <input { ...passwordInput } />
        <br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
