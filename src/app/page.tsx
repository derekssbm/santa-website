"use client";

import { useState, useEffect } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import NavBar from "@/components/NavBar";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import santa from "../../public/resources/santa.jpg";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import BlogList from "@/components/BlogList";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      sections.forEach((section: Element) => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop - sectionHeight / 3) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const textControls = useAnimation();
  const imageControls = useAnimation();
  const [textRef, textInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [imageRef, imageInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (textInView) {
      textControls.start({ x: 0, opacity: 1 });
    } else {
      textControls.start({ x: -100, opacity: 0 });
    }
  }, [textControls, textInView]);

  useEffect(() => {
    if (imageInView) {
      imageControls.start({ x: 0, opacity: 1 });
    } else {
      imageControls.start({ x: 100, opacity: 0 });
    }
  }, [imageControls, imageInView]);

  const servicesControls = useAnimation();
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (servicesInView) {
      servicesControls.start("visible");
    } else {
      servicesControls.start("hidden");
    }
  }, [servicesControls, servicesInView]);

  const servicesVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <ParallaxProvider>
      <NavBar activeSection={activeSection} scrollToSection={scrollToSection} />
      <AnimatedBackground />

      <main className="pt-16 overflow-hidden">
        <section
          id="home"
          className="relative h-screen flex flex-col justify-center items-center text-white"
        >
          <motion.div
            className="text-center"
            style={{ scale, opacity }}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="text-8xl font-bold font-righteous mb-4 text-shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Welcome to Solaris
            </motion.h1>
            <motion.p
              className="text-xl italic text-shadow-md"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              "Empowering digital innovation, one project at a time."
            </motion.p>
          </motion.div>
          <motion.div
            className="absolute bottom-10 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <FaArrowDown className="text-3xl animate-bounce text-shadow-md" />
            <span className="mt-2 text-lg text-shadow-md">Scroll Down</span>
          </motion.div>
        </section>

        <section
          id="about"
          className="min-h-screen flex flex-col md:flex-row items-center justify-center p-8"
        >
          <motion.div
            ref={textRef}
            className="md:w-1/2 text-white p-8"
            initial={{ x: -100, opacity: 0 }}
            animate={textControls}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-righteous mb-6 text-shadow-lg">
              About Solrise Agency
            </h2>
            <p className="mb-4 text-shadow-md">
              Solrise Agency es una agencia de marketing digital, especializada
              en potenciar negocios e-commerce a través de estrategias
              detalladas y personalizadas. Entendemos que cada empresa es única,
              por lo que ofrecemos estudios de mercado exhaustivos y planes de
              acción accesibles que los negocios pueden implementar por sí
              mismos, con nuestra guía y asesoramiento continuo.
            </p>
            <p className="mb-4 text-shadow-md">
              Desarrollamos estrategias de Customer Journey personalizadas a la
              audiencia de cada cliente. Desde SEO y SEM, email marketing, hasta
              campañas publicitarias y planificación de redes sociales,
              brindamos un enfoque integral que cubre todas las necesidades
              digitales de tu empresa, asegurando que cada acción esté alineada
              con tus objetivos comerciales.
            </p>
            <p className="mb-4 text-shadow-md">
              Nos enorgullece no solo desarrollar estrategias efectivas sino
              también acompañar a nuestros clientes durante todo el proceso de
              implementación y realizar ajustes periódicos basados en análisis
              detallados. Para empresas bien establecidas que necesitan
              marketing de calidad, ofrecemos la opción de implementar las
              estrategias por completo.
            </p>
            <p className="text-shadow-md">
              También nos apasiona proporcionar información y educar a nuestros
              clientes sobre aspectos clave del marketing digital en el ámbito
              del e-commerce. Ya sea que seas una startup o una empresa bien
              posicionada, nuestro compromiso es proporcionarte soluciones
              prácticas y efectivas que impulsen tu crecimiento y éxito en el
              competitivo mundo del e-commerce.
            </p>
          </motion.div>
          <motion.div
            ref={imageRef}
            className="md:w-1/2 p-8 flex justify-end"
            initial={{ x: 100, opacity: 0 }}
            animate={imageControls}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[500px] w-[400px]">
              <Image
                src={santa}
                alt="Santa's image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </section>

        <section
          id="services"
          className="min-h-screen flex flex-col justify-center items-center p-8"
        >
          <motion.div
            ref={servicesRef}
            initial="hidden"
            animate={servicesControls}
            variants={servicesVariants}
            className="w-full max-w-6xl"
          >
            <h2 className="text-5xl font-bold text-white text-center mb-12 text-shadow-lg">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                variants={itemVariants}
                className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-semibold text-white mb-4 text-shadow-md">
                  Strategic Planning
                </h3>
                <div className="w-full h-px bg-white mb-4"></div>
                <p className="text-white text-shadow-sm">
                  Comprehensive market analysis and tailored action plans for
                  e-commerce businesses. We provide accessible strategies that
                  businesses can implement with our ongoing guidance.
                </p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-semibold text-white mb-4 text-shadow-md">
                  Digital Marketing
                </h3>
                <div className="w-full h-px bg-white mb-4"></div>
                <p className="text-white text-shadow-sm">
                  Full-spectrum digital marketing services including SEO, SEM,
                  email marketing, and social media planning. We ensure all
                  actions align with your business objectives.
                </p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-semibold text-white mb-4 text-shadow-md">
                  Customer Journey Optimization
                </h3>
                <div className="w-full h-px bg-white mb-4"></div>
                <p className="text-white text-shadow-sm">
                  Personalized customer journey strategies tailored to your
                  specific audience. We focus on creating seamless experiences
                  that convert visitors into loyal customers.
                </p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-semibold text-white mb-4 text-shadow-md">
                  Implementation Support
                </h3>
                <div className="w-full h-px bg-white mb-4"></div>
                <p className="text-white text-shadow-sm">
                  We don't just develop strategies; we accompany our clients
                  throughout the implementation process, offering guidance and
                  making periodic adjustments based on detailed analysis.
                </p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-semibold text-white mb-4 text-shadow-md">
                  Full-Service Marketing
                </h3>
                <div className="w-full h-px bg-white mb-4"></div>
                <p className="text-white text-shadow-sm">
                  For established businesses needing comprehensive marketing
                  solutions, we offer complete implementation of our strategies,
                  handling all aspects of your digital marketing needs.
                </p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-semibold text-white mb-4 text-shadow-md">
                  E-commerce Education
                </h3>
                <div className="w-full h-px bg-white mb-4"></div>
                <p className="text-white text-shadow-sm">
                  We're passionate about educating our clients on key aspects of
                  digital marketing in e-commerce. Stay informed and ahead in
                  the competitive world of online business.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section
          id="portfolio"
          className="min-h-screen flex flex-col justify-center items-center p-8"
        >
          <h2 className="text-5xl font-bold text-white text-center mb-12 text-shadow-lg">
            Our Portfolio
          </h2>
          <PortfolioCarousel />
        </section>

        <section
          id="blog"
          className="min-h-screen flex flex-col justify-center items-center p-8"
        >
          <BlogList />
        </section>

        <section
          id="faq"
          className="min-h-screen flex flex-col justify-center items-center p-8"
        >
          <FAQ />
        </section>

        <section
          id="contact"
          className="min-h-screen flex flex-col justify-center items-center p-8"
        >
          <ContactForm />
          <Footer />
        </section>
      </main>
    </ParallaxProvider>
  );
}
