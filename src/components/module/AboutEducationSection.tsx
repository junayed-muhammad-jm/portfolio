

export default function AboutEducationSection() {
    return (
        <section className="bg-white dark:bg-gray-900 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-start">

                    {/* LEFT: About */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                            About Me
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            I am a passionate Web Developer specializing in HTML, CSS, JavaScript, and React.
                            I craft clean, responsive, and user-friendly web applications with maintainable, high-quality code.
                            Driven by continuous learning, problem-solving, and collaboration, my ultimate goal is to become a full-stack developer
                            and build innovative, impactful products that make a difference.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Currently, I am learning web development and building my skills to create real-world applications.
                        </p>
                    </div>

                    {/* RIGHT: Education */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                            Education
                        </h2>
                        <div className="space-y-4">
                            {/* Graduation */}
                            <div className="border-l-4 border-teal-500 pl-4">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Graduation
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Al Jamia'tul Islamia Darul Uloom Madani Nagar Madrasah — 2023
                                </p>
                            </div>

                            {/* Arabic Diploma */}
                            <div className="border-l-4 border-teal-500 pl-4">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Arabic Diploma
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    2024
                                </p>
                            </div>

                            {/* English Diploma */}
                            <div className="border-l-4 border-teal-500 pl-4">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    English Diploma
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Ahmed Education — 2025
                                </p>
                            </div>

                            {/* Currently Learning */}
                            <div className="border-l-4 border-teal-500 pl-4">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Web Development
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Currently learning and building projects
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
