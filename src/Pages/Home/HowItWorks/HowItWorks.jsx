import SectionTitle from "../../../SharedComponents/SectionTitle/SectionTitle";

const HowItWorks = () => {
    const steps = [
        {
            step: "01",
            title: "Create Your Profile",
            description: "Sign up and complete your profile with academic information, interests, and goals.",
            icon: (
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            )
        },
        {
            step: "02",
            title: "Browse Scholarships",
            description: "Explore thousands of scholarships filtered by your preferences and qualifications.",
            icon: (
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            )
        },
        {
            step: "03",
            title: "Apply Online",
            description: "Submit your applications directly through our platform with all required documents.",
            icon: (
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        },
        {
            step: "04",
            title: "Track Progress",
            description: "Monitor your application status and receive updates on your scholarship journey.",
            icon: (
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        }
    ];

    return (
        <div className="max-w-7xl w-full mx-auto my-8 md:my-20 px-4">
            <SectionTitle text={"How It Works"} />
            
            <div className="mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            {/* Connecting Line */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-blue-500 z-0"></div>
                            )}
                            
                            {/* Step Card */}
                            <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 hover:-translate-y-2 z-10">
                                <div className="flex flex-col items-center text-center">
                                    {/* Step Number */}
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                        {step.step}
                                    </div>
                                    
                                    {/* Icon */}
                                    <div className="mt-8 mb-6 p-4 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300">
                                        {step.icon}
                                    </div>
                                    
                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                                        {step.title}
                                    </h3>
                                    
                                    {/* Description */}
                                    <p className="text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Call to Action */}
                <div className="text-center mt-16">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Ready to Start Your Journey?
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Join thousands of students who have found their perfect scholarship through DreamBloom
                    </p>
                    <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl">
                        Get Started Today
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;