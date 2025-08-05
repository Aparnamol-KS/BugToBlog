import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";


function YourBlogs() {
    const navigate = useNavigate();

    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/your_blogs', {
            headers: {
                token: localStorage.getItem('token')
            }
        }).then(function (response) {

            setBlogs(response.data)
        })
    }, []);

    function view(id) {
        navigate(`/blogs/${id}`);
    }

    function back() {
        navigate('/blogs')
    }

    function delete_blog(id) {
        axios.delete('http://localhost:4000/deleteBlogs/' + id, {
            headers: {
                token: localStorage.getItem('token')
            }
        }).then(function (response) {
            setBlogs(response.data)
        })
    }




    return <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "cambria"
    }}>
        <h1 style={{ fontSize: "60px" }}>Your Blogs</h1>
        {blogs.map(blog =>
            <div key={blog._id} style={{ padding: "10px", border: "1px solid black", width: "50%", boxShadow: "3px 2px 4px grey", margin: "10px", cursor: "pointer" }}>
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
                 <button style={{ backgroundColor: "black", color: "white", borderRadius: "5px", padding: "5px", width: "100px", margin: "10px" }}  onClick={() => view(blog._id)}>View</button>
                <button style={{ backgroundColor: "black", color: "white", borderRadius: "5px", padding: "5px", width: "100px", margin: "10px" }} onClick={() => delete_blog(blog._id)}>Delete</button>
            </div>
        )}

        <button style={{ backgroundColor: "black", color: "white", borderRadius: "5px", padding: "5px", width: "100px", margin: "10px" }} onClick={back}>Back</button>

    </div>
}


export default YourBlogs;

