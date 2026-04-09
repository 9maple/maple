import { motion } from "framer-motion";

const AboutCreatorsSection = () => (
  <section id="about-creators" className="py-20 bg-surface-cool">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
          about the creators
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
      
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
        <div className="rounded-3xl overflow-hidden shadow-sm border border-border bg-card">
          <img
            src="/creators.png"
            alt="Creators working on the project"
            className="w-full h-full object-cover min-h-[300px]"
          />
        </div>
        <div className="bg-background rounded-3xl p-8 shadow-sm border border-border">
          <p className="text-muted-foreground text-base leading-7">
            hello we maddie and emma and we getting into harvard :3
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutCreatorsSection;
