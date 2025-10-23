import React, { useState } from "react";

// Type definition for image item
type ImageItem = {
    src: string;
    caption: string;
};

// Images + captions
const images: ImageItem[] = [
    { src: "/img-1.jpg", caption: "My Gulbahar is smiling" },
    { src: "/img-2.jpg", caption: "একাকীত্বে সমুদ্রের তীরে বসে থাকলে মনে হয়, সবকিছু সম্ভব, কারণ সমুদ্রের গভীরতাও সীমাহীন।" },
    { src: "/img-3.jpg", caption: "বাঁশেরপোল যেখানে সন্ধ্যা নামে আমার" },
    { src: "/img-4.jpg", caption: "Childhood friend" },
    { src: "/img-5.jpg", caption: "One day on the playground with my cousins" },
    { src: "/img-6.jpg", caption: "হিমু" },
    { src: "/img-7.jpg", caption: " ব্যারিস্টার আরমান এর গুম জীবনের উপাখ্যান   ' আয়নাঘরের সাক্ষী' " },
    { src: "/img-8.jpg", caption: "বই মেলায় একদিন" },
    { src: "/img-10.jpg", caption: "Coffee shop" },
];

const MyImage: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

    const openLightbox = (img: ImageItem) => setSelectedImage(img);
    const closeLightbox = () => setSelectedImage(null);

    return (
        <section className="py-10 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                My Image Gallery
            </h2>

            {/* Grid Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="w-full h-60 overflow-hidden rounded-lg cursor-pointer relative"
                        onClick={() => openLightbox(img)}
                    >
                        <img
                            src={img.src}
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-full object-cover transform transition duration-300 hover:scale-105"
                        />
                        {/* Caption overlay */}
                        <div className="absolute bottom-0 left-0 w-full p-2 text-center text-sm font-medium text-gray-900 dark:text-gray-100 bg-opacity-0">
                            {img.caption}
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox / Fullscreen Viewer */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
                    onClick={closeLightbox}
                >
                    <div className="relative max-w-full max-h-full">
                        <img
                            src={selectedImage.src}
                            alt="Fullscreen"
                            className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                        />
                        {/* Caption in lightbox */}
                        <div className="absolute bottom-0 left-0 w-full p-4 text-center text-gray-900 dark:text-gray-100 text-lg font-medium bg-white/20 dark:bg-gray-900/20 rounded-b-lg backdrop-blur-sm">
                            {selectedImage.caption}
                        </div>
                        <button
                            className="absolute top-4 right-4 text-white text-3xl font-bold"
                            onClick={closeLightbox}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default MyImage;
