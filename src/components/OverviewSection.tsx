import { motion } from "framer-motion";

const OverviewSection = () => (
  <section id="overview" className="py-20 bg-background">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Project Overview
        </h2>
        <p className="text-muted-foreground text-lg">
          [Insert project description here — briefly explain what this wheelchair is, who it's for, and why you created it. Keep it short and clear.]
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="placeholder-block aspect-video text-base">
          [Insert image here — e.g., a dog using the wheelchair, or a close-up of the design]
        </div>
        <div className="space-y-4">
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
            <h3 className="font-heading font-semibold text-foreground mb-2">Affordable</h3>
            <p className="text-muted-foreground text-sm">[Insert detail about cost — e.g., "Total material cost under $XX."]</p>
          </div>
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
            <h3 className="font-heading font-semibold text-foreground mb-2">Fully 3D-Printed</h3>
            <p className="text-muted-foreground text-sm">[Insert detail about how the wheelchair is printed and assembled.]</p>
          </div>
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
            <h3 className="font-heading font-semibold text-foreground mb-2">Customizable</h3>
            <p className="text-muted-foreground text-sm">[Insert detail about how the design can be adjusted for different dog sizes.]</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OverviewSection;
