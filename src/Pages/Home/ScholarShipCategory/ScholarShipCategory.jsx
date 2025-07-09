import { Link } from "react-router-dom";
import SectionTitle from "../../../SharedComponents/SectionTitle/SectionTitle";

const ScholarshipCategories = () => {
    const categories = [
        {
            title: "Undergraduate Scholarships",
            description: "Financial aid for bachelor's degree programs",
            count: "1,250+",
            icon: (
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            color: "from-blue-500 to-blue-600"
        },
        {
            title: "Graduate Scholarships",
            description: "Support for master's and PhD programs",
            count: "950+",
            icon: (
                <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            ),
            color: "from-purple-500 to-purple-600"
        },
        {
            title: "Research Grants",
            description: "Funding for research projects and studies",
            count: "320+",
            icon: (
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            color: "from-green-500 to-green-600"
        },
        {
            title: "Merit-Based Awards",
            description: "Recognition for academic excellence",
            count: "890+",
            icon: (
                <svg className="w-12 h-12 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
            ),
            color: "from-yellow-500 to-yellow-600"
        },
        {
            title: "Need-Based Aid",
            description: "Financial assistance based on economic need",
            count: "670+",
            icon: (
                <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            color: "from-red-500 to-red-600"
        },
        {
            title: "International Students",
            description: "Special programs for international applicants",
            count: "540+",
            icon: (
                <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: "from-indigo-500 to-indigo-600"
        }
    ];

    return (
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 my-8 md:my-20">
            <div className="max-w-7xl w-full mx-auto px-4">
                <SectionTitle text={"Scholarship Categories"} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {categories.map((category, index) => (
                        <div key={index} className="group">
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
                                <div className="flex flex-col items-center text-center">
                                    <div className={`mb-6 p-4 rounded-full bg-gradient-to-r ${category.color} shadow-lg`}>
                                        <div className="text-white">
                                            {category.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                                        {category.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {category.description}
                                    </p>
                                    <div className="text-2xl font-bold text-blue-600 mb-6">
                                        {category.count}
                                    </div>
                                    <Link 
                                        to="/allScholarships" 
                                        className="inline-flex items-center px-6 py-3 bg-[#5395e0] text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
                                    >
                                        Explore
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ScholarshipCategories;