import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/admin/login", {
        username,
        password,
      });

      if (response && response.data) {
        // Handle successful login
        console.log("Login successful!", response.data);

        // Redirect to another page after successful login
        navigate("/dashboard");
      } else {
        console.error("Login failed! Response data is undefined");
        // Handle the error or set an appropriate state
      }
    } catch (error) {
      // Handle login error
      console.error("Login failed!", error.response.data);
      // You might want to set an error state here for user feedback
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleLogin}
          className="bg-green-500 text-white p-2 rounded-md"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
