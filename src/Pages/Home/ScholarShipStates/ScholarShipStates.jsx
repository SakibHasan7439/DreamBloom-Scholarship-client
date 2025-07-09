import { useEffect, useState } from "react";

const ScholarshipStats = () => {
    const [stats, setStats] = useState({
        scholarships: 0,
        students: 0,
        universities: 0,
        success: 0
    });

    useEffect(() => {
        // Animate counters
        const animateCounter = (target, key, duration = 2000) => {
            const increment = target / (duration / 16);
            let current = 0;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    setStats(prev => ({ ...prev, [key]: target }));
                    clearInterval(timer);
                } else {
                    setStats(prev => ({ ...prev, [key]: Math.floor(current) }));
                }
            }, 16);
        };

        // Start animations
        animateCounter(5000, 'scholarships');
        animateCounter(25000, 'students');
        animateCounter(500, 'universities');
        animateCounter(95, 'success');
    }, []);

    return (
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 my-8 md:my-20">
            <div className="max-w-7xl w-full mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Our Impact in Numbers
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Discover how we&apos;re making education accessible worldwide through scholarships
                    </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center group">
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-blue-200 hover:border-blue-300">
                            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                                {stats.scholarships.toLocaleString()}+
                            </div>
                            <div className="text-gray-700 font-semibold text-sm md:text-base">
                                Scholarships Available
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-center group">
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-blue-200 hover:border-blue-300">
                            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                                {stats.students.toLocaleString()}+
                            </div>
                            <div className="text-gray-700 font-semibold text-sm md:text-base">
                                Students Helped
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-center group">
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-blue-200 hover:border-blue-300">
                            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                                {stats.universities.toLocaleString()}+
                            </div>
                            <div className="text-gray-700 font-semibold text-sm md:text-base">
                                Partner Universities
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-center group">
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-blue-200 hover:border-blue-300">
                            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                                {stats.success}%
                            </div>
                            <div className="text-gray-700 font-semibold text-sm md:text-base">
                                Success Rate
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScholarshipStats;