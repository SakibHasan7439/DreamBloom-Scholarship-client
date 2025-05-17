import Lottie from "lottie-react";
import { useState } from "react";
import faq from "../../../assets/FAQ.json";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-7xl w-full mx-auto flex items-center flex-col-reverse md:flex-row gap-4 justify-between">
      <div className="md:w-1/2 flex flex-col gap-4">
        <div
          tabIndex={0}
          className={`collapse collapse-plus border-base-300 bg-base-200 border
            ${isOpen ? "collapse-close" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="collapse-title text-[16px] lg:text-xl font-medium">
            Can I apply for multiple scholarships at once?
          </div>
          <div className="collapse-content">
            <p>Yes! You are welcome to apply for multiple scholarships if you meet the eligibility criteria for each one. Be sure to submit separate applications for each scholarship to be considered.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className={`collapse collapse-plus border-base-300 bg-base-200 border
            ${isOpen ? "collapse-close" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="collapse-title text-[16px] lg:text-xl font-medium">
            Who is eligible to apply for this scholarship?
          </div>
          <div className="collapse-content">
            <p>
              Being enrolled or accepted in an accredited educational
              institution. Meeting academic performance requirements.
              Demonstrating financial need (for need-based scholarships).
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className={`collapse collapse-plus border-base-300 bg-base-200 border
            ${isOpen ? "collapse-close" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="collapse-title text-[16px] lg:text-xl font-medium">
            What types of scholarships are available?
          </div>
          <div className="collapse-content">
            <p>
              There are only scholarship for the student, with free, half,
              self-funded{" "}
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className={`collapse collapse-plus border-base-300 bg-base-200 border
            ${isOpen ? "collapse-close" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="collapse-title text-[16px] lg:text-xl font-medium">
            Is there an age limit for applicants?
          </div>
          <div className="collapse-content">
            <p>
              The age limit depends on the specific scholarship. Some
              scholarships may have age restrictions, while others are open to
              applicants of all ages. Please check the eligibility criteria for
              each scholarship for detailed information.
            </p>
          </div>
        </div>
      </div>
      <div className="md:w-1/2">
        <Lottie animationData={faq}></Lottie>
      </div>
    </div>
  );
};

export default FAQ;
