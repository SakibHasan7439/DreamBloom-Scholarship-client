import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, Award, Users, Clock } from "lucide-react";

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: 1,
      icon: <Award className="w-5 h-5" />,
      question: "Can I apply for multiple scholarships at once?",
      answer: "Yes! You are welcome to apply for multiple scholarships if you meet the eligibility criteria for each one. Be sure to submit separate applications for each scholarship to be considered."
    },
    {
      id: 2,
      icon: <Users className="w-5 h-5" />,
      question: "Who is eligible to apply for this scholarship?",
      answer: "Being enrolled or accepted in an accredited educational institution. Meeting academic performance requirements. Demonstrating financial need (for need-based scholarships)."
    },
    {
      id: 3,
      icon: <HelpCircle className="w-5 h-5" />,
      question: "What types of scholarships are available?",
      answer: "There are only scholarship for the student, with free, half, self-funded options available."
    },
    {
      id: 4,
      icon: <Clock className="w-5 h-5" />,
      question: "Is there an age limit for applicants?",
      answer: "The age limit depends on the specific scholarship. Some scholarships may have age restrictions, while others are open to applicants of all ages. Please check the eligibility criteria for each scholarship for detailed information."
    }
  ];

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="max-w-7xl w-full mx-auto px-4 py-8 md:py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4">
          <HelpCircle className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Find answers to common questions about our scholarship programs
        </p>
      </div>

      <div className="flex items-start flex-col lg:flex-row gap-8 justify-between">
        {/* FAQ Items */}
        <div className="w-full lg:w-[65%] space-y-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {item.question}
                  </h3>
                </div>
                <div className="flex-shrink-0 w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors duration-200">
                  {openItem === item.id ? <ChevronUp /> : <ChevronDown />}
                </div>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openItem === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 ml-14">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Side Panel */}
        <div className="w-full lg:w-[30%] lg:sticky lg:top-8">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Need More Help?</h3>
              <p className="text-white/90 mb-6">
                Can&apos;t find the answer you&apos;re looking for? Our support team is here to help you with your scholarship application.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 w-full">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;