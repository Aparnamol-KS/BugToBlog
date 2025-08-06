import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function IndividualBlog() {
    const [blog, setBlog] = useState({});
    const { blogId } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:4000/blogs/${blogId}`, {
            headers: {
                token: localStorage.getItem('token'),
            },
        })
        .then((response) => {
            setBlog(response.data);
        })
        .catch(() => {
            alert('Error occurred!');
        });
    }, [blogId]);

    function back() {
        window.location = '/blogs';
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-r from-pink-300 to-sky-300 font-serif text-black">
            <h1 className="text-5xl font-bold font-serif mb-8 text-center">{blog.title}</h1>
            <p className="text-lg text-gray-800 leading-relaxed max-w-3xl text-center mb-10">
                {blog.content}
            </p>
            <button
                onClick={back}
                className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-900 transition"
            >
                Back
            </button>
        </div>
    );
}

export default IndividualBlog;
