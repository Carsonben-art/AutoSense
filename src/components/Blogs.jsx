import React from 'react';
import '../styles/blogs.css';
import blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2.jpg'
import blog3 from '../assets/blog3.jpg'

const BlogSection = () => {
  const blogs = [
    {
      title: 'The Role of AI in Sustainable Manufacturing',
      description: 'Exploring how AI enhances efficiency and sustainability in modern manufacturing...',
      readTime: '2 min read',
      image: blog1
    },
    {
      title: 'How to Reduce Waste with Smart Robotics',
      description: 'Leveraging smart robotics to minimize waste and optimize resource efficiency...',
      readTime: '5 min read',
      image: blog2
    },
    {
      title: 'Optimizing Energy Usage in Industrial Production',
      description: 'Strategies for optimizing energy usage to enhance efficiency in industrial production...',
      readTime: '3 min read',
      image: blog3
    },
  ];

  return (
    <section className="blog-section">
      <h2>Blog Exploration</h2>
      <div className="blog-container">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <div
              className="blog-image"
              style={{ backgroundImage: `url(${blog.image})` }}
            ></div>
            <div className="blog-content">
              <p className="blog-read-time">{blog.readTime}</p>
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="view-all-button">View All</button>
    </section>
  );
};

export default BlogSection;
