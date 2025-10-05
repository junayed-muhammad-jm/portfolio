import { FaGithub, FaFacebookF, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-t from-gray-100 via-teal-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-16 overflow-hidden">

            {/* Floating blobs */}
            <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-pink-200/30 rounded-full filter blur-3xl animate-blob dark:bg-pink-800/20"></div>
            <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-teal-200/30 rounded-full filter blur-3xl animate-blob dark:bg-teal-800/20"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Logo / Name */}
                <div className="flex flex-col md:flex-row md:justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-teal-500 mb-4 md:mb-0">
                        Junayed Muhammad
                    </h1>

                    {/* Quick Links */}
                    <div className="flex gap-6 flex-wrap justify-center md:justify-start">
                         <Link to={"/"}><span className="text-gray-700 dark:text-gray-300 hover:text-teal-500 transition cursor-pointer">Home</span></Link>
                       <Link to={"/about"}> <span className="text-gray-700 dark:text-gray-300 hover:text-teal-500 transition cursor-pointer">About</span></Link>
                        <Link to={"/project"}><span className="text-gray-700 dark:text-gray-300 hover:text-teal-500 transition cursor-pointer">Projects</span></Link>
                       <Link to={"/about"}> <span className="text-gray-700 dark:text-gray-300 hover:text-teal-500 transition cursor-pointer">Skills</span></Link>
                        <Link to={"/contact"}><span className="text-gray-700 dark:text-gray-300 hover:text-teal-500 transition cursor-pointer">Contact</span></Link>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center md:justify-start gap-6 mb-8">
                    <div className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white cursor-pointer hover:bg-teal-500 hover:text-white transition">
                        <FaGithub size={20} />
                    </div>
                    <div className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white cursor-pointer hover:bg-blue-600 hover:text-white transition">
                        <FaFacebookF size={20} />
                    </div>
                    <div className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white cursor-pointer hover:bg-green-500 hover:text-white transition">
                        <FaWhatsapp size={20} />
                    </div>
                    <div className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white cursor-pointer hover:bg-red-500 hover:text-white transition">
                        <FaEnvelope size={20} />
                    </div>
                </div>

                {/* Footer Bottom */}
                <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
                    &copy; 21/9/2025 Junayed Muhammad. All rights reserved.
                </p>

            </div>
        </footer>
    );
}
