import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-cardBg/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl mb-6">About Crypterio</h2>
          <p className="text-gray-400 mb-8">
            We are a cutting-edge NFT marketplace that brings together artists and collectors
            in a seamless digital experience. Our platform showcases unique digital artworks
            across various categories, from stunning illustrations to mesmerizing 3D creations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-darkBg rounded-xl"
            >
              <h3 className="font-display text-2xl mb-2">Innovation</h3>
              <p className="text-gray-400">Pushing the boundaries of digital art and ownership</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-darkBg rounded-xl"
            >
              <h3 className="font-display text-2xl mb-2">Community</h3>
              <p className="text-gray-400">Building connections between creators and collectors</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-darkBg rounded-xl"
            >
              <h3 className="font-display text-2xl mb-2">Security</h3>
              <p className="text-gray-400">Ensuring safe and transparent transactions</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;