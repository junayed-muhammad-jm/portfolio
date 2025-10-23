import { FaGithub, FaFacebookF, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function OnlineWorldSection() {
    return (
        <section className="relative bg-gradient-to-b from-teal-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-24 overflow-hidden">

            {/* Floating Blobs */}
            <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-teal-200/30 rounded-full filter blur-3xl animate-blob dark:bg-teal-800/20"></div>
            <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-pink-200/30 rounded-full filter blur-3xl animate-blob dark:bg-pink-800/20"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
                        My Online <span className="text-teal-500">World</span>
                    </h2>
                    <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg">
                        Explore the platforms and tools that shape my digital journey.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">

                    {/* GitHub Card */}
                    {/* GitHub Card */}
                    <a href="https://github.com/junayed-muhammad-jm" target="_blank" rel="noopener noreferrer">
                        <motion.div
                            className="flex flex-col items-center justify-center p-8 rounded-2xl shadow-lg bg-gray-900 text-white cursor-pointer hover:scale-105 transition-transform duration-300"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0 }}
                        >
                            <div className="mb-4"><FaGithub size={36} /></div>
                            <span className="text-lg font-semibold">GitHub</span>
                        </motion.div>
                    </a>

                    {/* Facebook Card */}
                    <a href="https://www.facebook.com/junayedadnan.junayedadnan.9" target="_blank" rel="noopener noreferrer">
                        <motion.div
                            className="flex flex-col items-center justify-center p-8 rounded-2xl shadow-lg bg-blue-600 text-white cursor-pointer hover:scale-105 transition-transform duration-300"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="mb-4"><FaFacebookF size={36} /></div>
                            <span className="text-lg font-semibold">Facebook</span>
                        </motion.div>
                    </a>

                    {/* WhatsApp Card */}
                    <a href="https://wa.me/01737096775" target="_blank" rel="noopener noreferrer">
                        <motion.div
                            className="flex flex-col items-center justify-center p-8 rounded-2xl shadow-lg bg-green-500 text-white cursor-pointer hover:scale-105 transition-transform duration-300"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="mb-4"><FaWhatsapp size={36} /></div>
                            <span className="text-lg font-semibold">WhatsApp</span>
                        </motion.div>
                    </a>

                    {/* Gmail Card */}
                    <a href="mailto:junayedali1582002@gmail.com" target="_blank" rel="noopener noreferrer">

                        <motion.div
                            className="flex flex-col items-center justify-center p-8 rounded-2xl shadow-lg bg-red-500 text-white cursor-pointer hover:scale-105 transition-transform duration-300"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <div className="mb-4"><FaEnvelope size={36} /></div>
                            <span className="text-lg font-semibold">email</span>
                        </motion.div>
                    </a>

                </div>
            </div>
        </section>
    );
}
