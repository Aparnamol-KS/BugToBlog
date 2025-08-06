import axios from "axios";

function Signup() {
    function addUser() {
        axios.post('http://localhost:4000/signup', {
            username: document.getElementById('username').value,
            name: document.getElementById('name').value,
            password: document.getElementById('password').value
        }).then(function (response) {
            alert(response.data);
            window.location = '/signin';
        });
    }

    return (
        <div className="min-h-screen text-[17px] flex flex-col items-center justify-center px-4 font-serif bg-gradient-to-r from-pink-300 to-sky-300 text-black">
            <h1 className="text-[70px] font-serif font-bold mb-8">Sign Up</h1>

            <input
                id="username"
                type="text"
                placeholder="Username"
                className="mb-4 w-64 px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
                id="name"
                type="text"
                placeholder="Name"
                className="mb-4 w-64 px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
                id="password"
                type="password"
                placeholder="Password"
                className="mb-6 w-64 px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />

            <button
                onClick={addUser}
                className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-900 transition mb-4"
            >
                Sign Up
            </button>

            <p >
                Already have an account?{" "}
                <a href="/signin" className="font-semibold hover:underline">
                    Sign In
                </a>
            </p>
        </div>
    );
}

export default Signup;
