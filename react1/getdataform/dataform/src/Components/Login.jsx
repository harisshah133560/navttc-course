import { useState } from "react";
function Login() {
    const [username, setUsername] = useState("");
    const handleSubmit = () => {
        alert(`Username: ${username}`);
        console.log(`Username: ${username}`);
    }
    return (
        <div className="login-container flex flex-col item-center bg-sky-600 p-4 rounded shadow m-4">
            <h2>Login Page</h2>
            <div className="input-group flex flex-col gap-2 w-1/4">
            <input
                type="text"
                className="border border-2 "
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button className="bg-green-600 text-white w-16 " onClick={handleSubmit}>Submit</button>
            <p>Entered Username: {username}</p>
            </div>

        </div>
    );
}
export default Login;