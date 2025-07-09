import SectionTitle from "../../../SharedComponents/SectionTitle/SectionTitle";

const WhyChooseUs = () => {
    const features = [
        {
            icon: (
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Verified Scholarships",
            description: "All scholarships are thoroughly verified and updated regularly to ensure authenticity and accuracy."
        },
        {
            icon: (
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Quick Application Process",
            description: "Our streamlined application process saves you time and makes applying for scholarships effortless."
        },
        {
            icon: (
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 110 19.5 9.75 9.75 0 010-19.5z" />
                </svg>
            ),
            title: "24/7 Support",
            description: "Our dedicated support team is available around the clock to help you with any questions or concerns."
        },
        {
            icon: (
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            title: "Expert Guidance",
            description: "Get personalized advice from our education experts to maximize your scholarship opportunities."
        },
        {
            icon: (
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
            ),
            title: "Global Network",
            description: "Access scholarships from universities and organizations worldwide through our extensive network."
        },
        {
            icon: (
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
            ),
            title: "Free Service",
            description: "Our platform is completely free to use. No hidden fees or charges for accessing scholarships."
        }
    ];

    return (
        <div className="max-w-7xl w-full mx-auto my-8 md:my-20 px-4">
            <SectionTitle text={"Why Choose DreamBloom?"} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {features.map((feature, index) => (
                    <div key={index} className="group">
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 hover:-translate-y-2">
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-6 p-4 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;