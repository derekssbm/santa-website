"use client";

import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar
        activeSection={""}
        scrollToSection={function (sectionId: string): void {
          throw new Error("Function not implemented.");
        }}
      />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <div className="space-y-4">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            At Santa's Workshop, we respect your privacy and are committed to
            protecting your personal data. This privacy policy will inform you
            about how we look after your personal data and tell you about your
            privacy rights and how the law protects you.
          </p>
          <h2 className="text-2xl font-semibold mt-4">
            1. Information We Collect
          </h2>
          <p>
            We may collect, use, store and transfer different kinds of personal
            data about you, including your name, email address, and any other
            information you provide when using our services or contacting us.
          </p>
          <h2 className="text-2xl font-semibold mt-4">
            2. How We Use Your Information
          </h2>
          <p>
            We use your personal data to provide you with our services, to
            communicate with you, and to improve our services. We may also use
            your data to comply with legal obligations or to protect our rights.
          </p>
          <h2 className="text-2xl font-semibold mt-4">3. Data Security</h2>
          <p>
            We have implemented appropriate security measures to prevent your
            personal data from being accidentally lost, used, or accessed in an
            unauthorized way. We limit access to your personal data to those
            employees, agents, contractors, and other third parties who have a
            business need to know.
          </p>
          <h2 className="text-2xl font-semibold mt-4">4. Your Rights</h2>
          <p>
            Under certain circumstances, you have rights under data protection
            laws in relation to your personal data, including the right to
            access, correct, erase, or object to the processing of your personal
            data.
          </p>
          <h2 className="text-2xl font-semibold mt-4">5. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy
            practices, please contact us at privacy@santasworkshop.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
