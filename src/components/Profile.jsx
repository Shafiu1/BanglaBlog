import React from "react";
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
        <div className="max-w-4xl mx-auto p-5 border border-gray-400 rounded-xl bg-gray-800 font-sans">
            <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                    <img src={user.profilePicture} alt="Profile" className="w-34 h-34 rounded-full object-cover" />
                </div>
                <h1 className="text-red-200">{user.username}</h1>
                <p className="text-lg font-cursive text-gray-200">{user.bio}</p>
            </div>
            <div className="flex justify-around mb-8 text-blue-200">
                <p><strong>Blogs:</strong> {user.stats.blogs}</p>
                <p><strong>Likes:</strong> {user.stats.likes}</p>
            </div>
            <div className="mt-8">
                <h1 className="text-gray-200 font-medium mb-4">Your Blogs</h1>
                {blogs.map((blog) => (
                    <div key={blog.id} className="border border-gray-300 p-4 mb-4 rounded-md bg-gray-900">
                        <h3 className="text-xl text-pink-400 mb-2">{blog.title}</h3>
                        <p className="text-gray-300">{blog.excerpt}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile;
