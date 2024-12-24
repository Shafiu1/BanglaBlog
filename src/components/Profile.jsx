// import React from "react";
import "./Profile.css";
import user1 from '../assets/users/user1.jpg'
const Profile = () => {
    const user = {
        username: "John Doe",
        bio: "Lover of tech and blogging",
        profilePicture: user1,
        stats: { blogs: 5, likes: 120 },
    };

    const blogs = [
        { id: 1, title: "First Blog", excerpt: "This is my first blog post." },
        { id: 2, title: "Learning React", excerpt: "React is awesome for building UIs!" },
        { id: 3, title: "Tips for Blogging", excerpt: "Blogging tips for beginners." },
    ];

    return (
        <div className="profile-container">
            <div className="profile-header">
                <img src={user.profilePicture} alt="Profile" />
                <h1>{user.username}</h1>
                <p>{user.bio}</p>
            </div>
            <div className="profile-stats">
                <p><strong>Blogs:</strong> {user.stats.blogs}</p>
                <p><strong>Likes:</strong> {user.stats.likes}</p>
            </div>
            <div className="blog-list">
                <h2>Your Blogs</h2>
                {blogs.map((blog) => (
                    <div key={blog.id} className="blog-item">
                        <h3>{blog.title}</h3>
                        <p>{blog.excerpt}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile;
