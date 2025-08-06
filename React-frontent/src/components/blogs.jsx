import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Blogs() {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/blogs', {
            headers: {
                token: localStorage.getItem('token')
            }
        }).then(response => {
            setBlogs(response.data);
        });
    }, []);

    function createBlog() {
        navigate('/createBlog');
    }

    function view(id) {
        navigate(`/blogs/${id}`);
    }

    function yourBlogs() {
        navigate('/yourBlogs');
    }

    return (
        <div className="min-h-screen px-6 py-10 flex flex-col items-center bg-gradient-to-r from-pink-300 to-sky-300 font-serif text-black">
            <h1 className="text-[70px] font-bold mb-10">Blogs</h1>

            <div className="flex flex-wrap gap-4 justify-center mb-10">
                <button
                    onClick={createBlog}
                    className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-900 transition"
                >
                    Create Blog
                </button>
                <button
                    onClick={yourBlogs}
                    className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-900 transition"
                >
                    Your Blogs
                </button>
            </div>

            <div className="w-full max-w-4xl space-y-6">
                {blogs.map((blog) => (
                    <div
                        key={blog._id}
                        onClick={() => view(blog._id)}
                        className="bg-white/80 backdrop-blur-md border border-gray-300 rounded-lg shadow-md p-6 hover:shadow-lg transition cursor-pointer"
                    >
                        <h3 className="text-2xl font-semibold mb-2 text-gray-900">{blog.title}</h3>
                        <p className="text-gray-700 leading-relaxed text-base">
                            {blog.content.length > 300 ? blog.content.slice(0, 300) + "..." : blog.content}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blogs;
