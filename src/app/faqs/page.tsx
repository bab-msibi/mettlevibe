"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Sidebar from "../../components/Sidebar";
import Discover from "../tasks/Discover";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Why choose us?",
    answer:
      "We offer a seamless esports experience with verified tournaments, secure payments, and real-time updates.",
  },
  {
    question: "How do I join a tournament?",
    answer:
      "Simply sign up, choose your preferred tournament, and click 'Join Now'. You’ll get all match info via email.",
  },
  {
    question: "Is it free to play?",
    answer:
      "Some tournaments are free, while others may have entry fees that contribute to the prize pool.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <Sidebar />

      <div className="w-[1200px] mt-2">
        <h1 className="text-3xl mb-6">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg overflow-hidden bg-black-sec text-white"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-800 transition"
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>

              {openIndex === index && (
                <div className="p-4 border-t border-gray-700 text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Discover />
    </div>
  );
}
