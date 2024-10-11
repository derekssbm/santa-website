import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "E-commerce Optimization",
    description: "Boosted online sales by 150% through targeted strategies",
    imageUrl: "/resources/project1.jpg",
  },
  {
    id: 2,
    title: "Social Media Campaign",
    description: "Increased brand engagement by 200% across platforms",
    imageUrl: "/resources/project2.jpg",
  },
  {
    id: 3,
    title: "SEO Overhaul",
    description: "Achieved first page rankings for key industry terms",
    imageUrl: "/resources/project3.jpg",
  },
  {
    id: 4,
    title: "Email Marketing Revamp",
    description: "Improved open rates by 75% and click-through rates by 50%",
    imageUrl: "/resources/project4.jpg",
  },
  {
    id: 5,
    title: "Content Marketing Strategy",
    description: "Generated 500% more leads through strategic content creation",
    imageUrl: "/resources/project5.jpg",
  },
  {
    id: 6,
    title: "PPC Campaign Management",
    description:
      "Reduced cost per acquisition by 40% while increasing conversions",
    imageUrl: "/resources/project6.jpg",
  },
];

const PortfolioCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= portfolioItems.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? portfolioItems.length - 1 : prevIndex - 1
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="w-full max-w-7xl mx-auto relative px-12"
    >
      <div className="flex justify-between items-center">
        <Button
          onClick={prevSlide}
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full bg-white text-blue-500 hover:bg-orange-500 hover:text-white"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex justify-between space-x-6 w-full">
          {[0, 1, 2].map((offset) => {
            const item =
              portfolioItems[(currentIndex + offset) % portfolioItems.length];
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="w-full bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white text-sm">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <Button
          onClick={nextSlide}
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full bg-white text-blue-500 hover:bg-orange-500 hover:text-white"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="mt-12 text-center">
        <Button
          variant="default"
          className="bg-white text-blue-500 hover:bg-orange-500 hover:text-white"
        >
          View All Portfolio Items
        </Button>
      </div>
    </motion.div>
  );
};

export default PortfolioCarousel;
