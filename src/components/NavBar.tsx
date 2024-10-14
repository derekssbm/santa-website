import React from "react";
import { Button } from "@/components/ui/button";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";

interface NavBarProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ activeSection, scrollToSection }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 z-50 shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange-500 font-[Righteous]">
          Solaris Marketing
        </h1>
        <div className="space-x-2">
          {[
            "home",
            "about",
            "services",
            "portfolio",
            "blog",
            "faq",
            "contact",
          ].map((section) => (
            <Button
              key={section}
              onClick={() => scrollToSection(section)}
              variant={activeSection === section ? "default" : "ghost"}
              className="text-lg"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Button>
          ))}
        </div>
        <div className="flex space-x-4">
          <Button variant="ghost" size="icon">
            <FaFacebookF className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <FaTwitter className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <FaInstagram className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <FaLinkedinIn className="h-4 w-4" />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
