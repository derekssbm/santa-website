"use client";

import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar
        activeSection={""}
        scrollToSection={function (sectionId: string): void {
          throw new Error("Function not implemented.");
        }}
      />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <div className="space-y-4">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            Please read these terms of service carefully before using Santa's
            Workshop website and services.
          </p>
          <h2 className="text-2xl font-semibold mt-4">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using our services, you agree to be bound by these
            Terms of Service and all applicable laws and regulations. If you do
            not agree with any part of these terms, you may not use our
            services.
          </p>
          <h2 className="text-2xl font-semibold mt-4">2. Use of Services</h2>
          <p>
            You may use our services only for lawful purposes and in accordance
            with these Terms of Service. You agree not to use our services in
            any way that violates any applicable local, state, national, or
            international law or regulation.
          </p>
          <h2 className="text-2xl font-semibold mt-4">
            3. Intellectual Property
          </h2>
          <p>
            The content, features, and functionality of our services are owned
            by Santa's Workshop and are protected by international copyright,
            trademark, patent, trade secret, and other intellectual property or
            proprietary rights laws.
          </p>
          <h2 className="text-2xl font-semibold mt-4">
            4. Limitation of Liability
          </h2>
          <p>
            In no event shall Santa's Workshop, nor its directors, employees,
            partners, agents, suppliers, or affiliates, be liable for any
            indirect, incidental, special, consequential or punitive damages,
            including without limitation, loss of profits, data, use, goodwill,
            or other intangible losses, resulting from your access to or use of
            or inability to access or use the services.
          </p>
          <h2 className="text-2xl font-semibold mt-4">5. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material, we will try to
            provide at least 30 days' notice prior to any new terms taking
            effect.
          </p>
          <h2 className="text-2xl font-semibold mt-4">6. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at
            terms@santasworkshop.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
