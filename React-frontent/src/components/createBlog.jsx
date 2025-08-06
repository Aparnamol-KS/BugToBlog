import axios from 'axios';

function CreateBlog() {
    function createBlog() {
        axios.post('http://localhost:4000/createBlog', {
            title: document.getElementById('title').value,
            content: document.getElementById('content').value
        }, {
            headers: {
                token: localStorage.getItem('token')
            }
        }).then(() => {
            window.location = '/blogs';
        }).catch(() => {
            alert("An error occurred");
        });
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-r from-pink-300 to-sky-300 font-serif text-black">
            <h1 className="text-[70px] mb-8 font-bold font-serif">Create Your Blog</h1>

            <input
                id="title"
                type="text"
                placeholder="Title"
                className="w-[600px] max-w-full px-4 py-2 mb-4 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />

            <textarea
                id="content"
                rows={10}
                placeholder="Content"
                className="w-[640px] max-w-full px-4 py-2 mb-6 border border-gray-500 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>

            <button
                onClick={createBlog}
                className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-900 transition"
            >
                Create
            </button>
        </div>
    );
}

export default CreateBlog;
