import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What services does Solaris Marketing offer?",
    answer:
      "Solaris Marketing offers a comprehensive range of digital marketing services including SEO, PPC advertising, social media marketing, content creation, email marketing, and e-commerce optimization. We tailor our strategies to meet the unique needs of each client.",
  },
  {
    question: "How can digital marketing help my business grow?",
    answer:
      "Digital marketing can significantly boost your business growth by increasing your online visibility, attracting more qualified leads, improving customer engagement, and ultimately driving more conversions and sales. It allows you to reach your target audience more effectively and measure your marketing efforts with precision.",
  },
  {
    question: "What makes Solaris Marketing different from other agencies?",
    answer:
      "At Solaris Marketing, we pride ourselves on our data-driven approach, customized strategies, and commitment to continuous learning and adaptation. We stay ahead of industry trends and algorithm changes to ensure our clients always benefit from the most effective and up-to-date marketing techniques.",
  },
  {
    question:
      "How long does it take to see results from digital marketing efforts?",
    answer:
      "The timeline for seeing results can vary depending on the specific strategies employed and your business goals. Some tactics, like PPC advertising, can show immediate results, while others, like SEO, may take several months to demonstrate significant impact. We provide regular reports and updates to keep you informed of progress throughout the process.",
  },
  {
    question: "Do you offer packages for small businesses or startups?",
    answer:
      "Yes, we offer scalable solutions suitable for businesses of all sizes, including startups and small businesses. Our team can work with you to create a customized package that fits your budget and goals, ensuring you get the most value from your marketing investment.",
  },
];

const FAQ: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-white text-left">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-200">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
