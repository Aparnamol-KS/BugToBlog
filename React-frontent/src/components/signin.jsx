import axios from "axios";

function Signin() {
    function signin() {
        axios.post('http://localhost:4000/signin', {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
        })
        .then(function (response) {
            let token = response.data;
            localStorage.setItem('token', token);
            window.location = '/blogs';
        })
        .catch(error => {
            alert("Some Error Occurred");
        });
    }

    return (
        <div className="flex flex-col text-[17px] items-center justify-center min-h-screen px-4 font-serif bg-gradient-to-r from-pink-300 to-sky-300">
            <h1 className="text-[70px] mb-8 font-bold font-serif">Sign In</h1>
            
            <input
                id="username"
                type="text"
                placeholder="Username"
                className="mb-4 w-64 px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
                id="password"
                type="password"
                placeholder="Password"
                className="mb-6 w-64 px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />

            <button
                onClick={signin}
                className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-900 transition"
            >
                Sign In
            </button>

            <p className="mt-6 ">
                Don't have an account?{" "}
                <a href="/signup" className="font-semibold text-black hover:underline">
                    Sign Up
                </a>
            </p>
        </div>
    );
}

export default Signin;
