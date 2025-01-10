import React from "react";
import "./Blog.css"; // Import custom CSS
import Header from "./Header";
import Footer from "./Footer";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Top 5 Event Planning Tips for a Successful Celebration",
      description:
        "Discover the secrets to planning a perfect event, from managing guest lists to choosing the best décor.",
      image: "/ev2.jpg",
      date: "June 10, 2024",
    },
    {
      id: 2,
      title: "How to Choose the Perfect Venue for Your Event",
      description:
        "Learn the factors to consider when picking a venue that suits your theme, budget, and guest count.",
      image: "/ev3.jpeg",
      date: "June 15, 2024",
    },
    {
      id: 3,
      title: "Latest Trends in Wedding Decorations for 2024",
      description:
        "Explore the newest trends in wedding décor, including lighting, floral arrangements, and tablescapes.",
      image: "/ev6.jpg",
      date: "June 20, 2024",
    },
  ];

  return (
    <div>
      <Header /> {/* Reusing Header */}
      <div className="blog-container">
        <h1 className="blog-title">Our Latest Blogs</h1>
        <p className="blog-intro">
          Stay up-to-date with the latest tips, trends, and ideas for event
          planning and management.
        </p>
        <div className="blog-list">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <div className="blog-content">
                <h2 className="blog-heading">{blog.title}</h2>
                <p className="blog-date">{blog.date}</p>
                <p className="blog-description">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer /> {/* Reusing Footer */}
    </div>
  );
};

export default Blog;
