import { motion } from "framer-motion";
import { FaBook, FaBriefcase } from "react-icons/fa";

export default function BooksAndWorkSection() {
    return (
        <section className="bg-gradient-to-b from-white via-teal-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
                        My <span className="text-teal-500">Reading</span> & <span className="text-indigo-500">Work</span>
                    </h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        A glimpse into my reading habits and work journey.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Books Section */}
                    <motion.div
                        className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex items-center mb-6">
                            <div className="p-4 bg-teal-500 rounded-full text-white mr-4">
                                <FaBook size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">My Reading</h3>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            I enjoy reading religious, technology, and personal development books.
                            Gaining knowledge from new books is a part of my daily routine.
                        </p>
                    </motion.div>

                    {/* Work Section */}
                    <motion.div
                        className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex items-center mb-6">
                            <div className="p-4 bg-indigo-500 rounded-full text-white mr-4">
                                <FaBriefcase size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">My Work</h3>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            I am currently learning web development and working on various projects.
                            In the future, I aim to become a skilled full-stack developer.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
