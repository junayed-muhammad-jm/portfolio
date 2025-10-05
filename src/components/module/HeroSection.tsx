
import { motion } from "framer-motion";
import { Link } from "react-router";

// HeroSection with: profile picture, gradient/blob background, subtle animations (zoom-in, fade-in, floating)
export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-teal-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-800 ">
            {/* Decorative blobs (SVG) */}
            <svg
                className="pointer-events-none absolute -right-32 top-0 w-[480px] opacity-40 dark:opacity-20"
                viewBox="0 0 600 600"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
            >
                <g transform="translate(300,300)">
                    <defs>
                        <linearGradient id="g1" x1="0%" x2="100%">
                            <stop offset="0%" stopColor="#34d399" />
                            <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                        <linearGradient id="g2" x1="0%" x2="100%">
                            <stop offset="0%" stopColor="#7dd3fc" />
                            <stop offset="100%" stopColor="#60a5fa" />
                        </linearGradient>
                    </defs>

                    <motion.path
                        d="M120,-160C160,-120,180,-60,190,0C200,60,190,120,150,160C110,200,50,220,0,220C-50,220,-110,200,-150,160C-190,120,-200,60,-190,0C-180,-60,-160,-120,-120,-160C-80,-200,-40,-200,0,-200C40,-200,80,-200,120,-160Z"
                        fill="url(#g1)"
                        initial={{ scale: 0.95, rotate: -8, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 0.9 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    />

                    <motion.path
                        d="M140,-120C180,-80,200,-20,210,40C220,100,200,160,150,190C100,220,30,230,-30,220C-90,210,-150,180,-180,130C-210,80,-210,10,-200,-40C-190,-90,-160,-140,-120,-170C-80,-200,-40,-200,0,-200C40,-200,80,-200,140,-120Z"
                        fill="url(#g2)"
                        opacity="0.7"
                        initial={{ scale: 0.95, rotate: 6, opacity: 0 }}
                        animate={{ scale: 1.02, rotate: 0, opacity: 0.6 }}
                        transition={{ duration: 1.6, ease: "easeOut" }}
                    />
                </g>
            </svg>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col-reverse md:flex-row items-center gap-10">
                    {/* LEFT: Text */}
                    <motion.div
                        className="md:w-2/3 text-center md:text-left"
                        initial={{ opacity: 0, x: -24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                    >
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                            Hi, I’m
                            <span className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-700 dark:from-teal-400 dark:to-teal-600">
                                Junayed Muhammad
                            </span>
                        </h1>

                        <motion.p
                            className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto md:mx-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.9, delay: 0.35 }}
                        >
                            I am a passionate Web Developer specializing in HTML, CSS, JavaScript, and React. I craft clean, responsive, and user-friendly web applications with maintainable, high-quality code. Driven by continuous learning, problem-solving, and collaboration, my ultimate goal is to become a full-stack developer and build innovative, impactful products that make a difference.
                        </motion.p>

                        {/* CTA and badges */}
                        <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-4">
                            <motion.a

                                className="inline-flex items-center justify-center rounded-full bg-teal-600 px-5 py-3 text-white font-medium shadow hover:scale-[1.02] transform-gpu transition"
                                whileHover={{ scale: 1.03 }}
                                initial={{ scale: 0.98 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.25 }}
                            >
                                <Link to={"/contact"}>  Hire Me</Link>
                            </motion.a>

                            <a
                                href="/Junayed.pdf"      // তোমার PDF ফাইলের লিঙ্ক
                                download                // ফাইল ডাউনলোড করার জন্য
                                target="_blank"         // নতুন ট্যাবে খুলবে (ইচ্ছামত)
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 px-4 py-3 text-sm text-gray-700 dark:text-gray-200 bg-white/60 dark:bg-transparent backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                            >
                                Download CV
                            </a>

                            {/* Skills chips */}
                            <div className="flex flex-wrap gap-2 mt-3 sm:mt-0">
                                {[
                                    "HTML",
                                    "CSS",
                                    "JavaScript",
                                    "React",
                                    "Tailwind",
                                    "Node"
                                ].map((s) => (
                                    <span
                                        key={s}
                                        className="text-xs px-2.5 py-1 rounded-full bg-white/80 dark:bg-gray-800/60 text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-700"
                                    >
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* small stats */}
                        <div className="mt-8 flex flex-wrap gap-6">
                            <div className="flex flex-col">
                                <span className="text-2xl font-semibold text-gray-900 dark:text-white">3+</span>
                                <span className="text-sm text-gray-600 dark:text-gray-300">Years experience</span>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-2xl font-semibold text-gray-900 dark:text-white">20+</span>
                                <span className="text-sm text-gray-600 dark:text-gray-300">Projects</span>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-2xl font-semibold text-gray-900 dark:text-white">5+</span>
                                <span className="text-sm text-gray-600 dark:text-gray-300">Happy clients</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT: Image card with zoom + floating effect */}
                    <div className="md:w-1/3 flex justify-center md:justify-end">
                        <motion.div
                            className="relative w-[260px] h-[340px]"
                            initial={{ scale: 0.96, y: 8, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            {/* subtle floating animation */}
                            <motion.div
                                className="absolute -inset-1 rounded-3xl shadow-2xl"
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* colored rotated card behind image */}
                            <div className="absolute -top-5 -left-5 w-full h-full rounded-3xl bg-gradient-to-br from-teal-400 to-blue-500 mix-blend-multiply opacity-90 transform rotate-3" />

                            {/* profile image */}
                            <motion.img
                                src="/img-1.jpg"
                                alt="Junayed Muhammad"
                                className="relative z-10 w-full h-full object-cover rounded-3xl border-4 border-white dark:border-gray-900 shadow-lg"
                                initial={{ scale: 0.98 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.8 }}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
