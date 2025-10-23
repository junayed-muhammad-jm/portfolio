import { motion } from "framer-motion";
import { Link } from "react-router";

export default function ProjectsSection() {
    const projects = [
        {
            title: "Library web side",
            description: "Personal portfolio built with React.",
            url: "#"
        },
        {
            title: "Madrasa Site",
            description: "Modern shopping experience.",
            url: "https://madrasa-project.vercel.app/"
        },
        {
            title: "Blog Platform",
            description: "A blog platform for writers.",
            url: ""
        },
        {
            title: "Task Manager",
            description: "Organize your daily tasks easily.",
            url: "#"
        },
        {
            title: "Chat App",
            description: "Real-time messaging with friends.",
            url: "#"
        },
        {
            title: "Weather App",
            description: "Get instant weather updates.",
            url: "#"
        },
    ];

    return (
        <section className="bg-gray-50 dark:bg-gray-950 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
                        My <span className="text-teal-500">Projects</span>
                    </h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        Small, clean and colorful project boxes with a fresh look.
                    </p>
                </div>

                {/* 6 small cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <Link
                            key={index}
                            to={project.url}
                            target="_blank"           // নতুন ট্যাবে খোলে
                            rel="noopener noreferrer" // নিরাপদ
                        >
                            <motion.div
                                className="relative h-40 rounded-2xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                {/* দুই রঙের ব্যাকগ্রাউন্ড */}
                                <div className="absolute inset-0 grid grid-cols-2">
                                    <div className="bg-teal-500"></div>
                                    <div className="bg-indigo-500"></div>
                                </div>

                                {/* content */}
                                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                                    <h3 className="text-xl font-bold">{project.title}</h3>
                                    <p className="text-white/90 text-sm mt-2">{project.description}</p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
