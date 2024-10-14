import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 Effective Strategies for E-commerce Growth in 2024",
    excerpt:
      "In the ever-evolving world of e-commerce, staying ahead of the curve is crucial. This post explores five powerful strategies that can propel your online business to new heights in 2024...",
    date: "March 15, 2024",
  },
  {
    id: 2,
    title: "The Impact of AI on Digital Marketing: What You Need to Know",
    excerpt:
      "Artificial Intelligence is revolutionizing the digital marketing landscape. Discover how AI is shaping customer experiences, optimizing campaigns, and transforming the way businesses connect with their audience...",
    date: "March 10, 2024",
  },
  {
    id: 3,
    title: "Mastering Social Media Analytics: Turning Data into Action",
    excerpt:
      "Social media analytics can be a goldmine of insights for your marketing strategy. Learn how to interpret key metrics, identify trends, and make data-driven decisions that boost your social media performance...",
    date: "March 5, 2024",
  },
  {
    id: 4,
    title: "The Rise of Voice Search: Optimizing Your Content for the Future",
    excerpt:
      "As voice-activated devices become more prevalent, optimizing your content for voice search is no longer optional. This post guides you through the essentials of voice search optimization...",
    date: "February 28, 2024",
  },
];

const BlogList: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Latest from Our Blog
      </h2>
      <ul className="space-y-8">
        {blogPosts.map((post, index) => (
          <motion.li
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg p-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-2">
              {post.title}
            </h3>
            <p className="text-sm text-gray-300 mb-4">{post.date}</p>
            <p className="text-white mb-4">{post.excerpt}</p>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-500"
            >
              Read More
            </Button>
          </motion.li>
        ))}
      </ul>
      <div className="text-center mt-12">
        <Button
          variant="default"
          className="bg-white text-blue-500 hover:bg-orange-500 hover:text-white"
        >
          View All Blog Posts
        </Button>
      </div>
    </div>
  );
};

export default BlogList;
