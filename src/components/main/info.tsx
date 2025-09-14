import img1 from '../../../imgsheert/Rectangle1231.png';
import img2 from '../../../imgsheert/Rectangle12.png';
import img3 from '../../../imgsheert/Rectangle14.png';
import img4 from '../../../imgsheert/Rectangle16.png';
import { motion } from 'framer-motion';

export default function Info() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 uppercase">
                    Our Approach to Fashion Design
                </h2>
                <p className="text-lg md:text-xl">
                    At Elegant Vogue, we blend creativity with craftsmanship to create fashion that transcends trends and stands the test of time. Each design is meticulously crafted, ensuring the highest quality and exquisite finish.
                </p>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { src: img1, alt: "Concept sketching",},
                        { src: img2, alt: "Fabric selection",},
                        { src: img3, alt: "Pattern making",},
                        { src: img4, alt: "Final tailoring",},
                    ].map((item, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center text-center group cursor-default"
                        >
                            <div className="w-full aspect-[4/5] overflow-hidden rounded-lg shadow-md bg-gray-50">
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}