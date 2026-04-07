import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrintingSection = () => (
  <section id="printing" className="py-20 bg-surface-cool">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
          3D Printing Preparation
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          [Insert short intro — e.g., "Before printing, review these material and settings recommendations."]
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-card rounded-xl p-8 shadow-sm border border-border space-y-6">
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-2">Recommended Material</h3>
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">PETG</strong> is the recommended default. It is more durable than PLA and better suited for repeated use and outdoor conditions. [Insert additional material notes here.]
            </p>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-2">Print Settings</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> [Insert layer height]</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> [Insert infill percentage]</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> [Insert nozzle temperature]</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> [Insert supports/orientation notes]</li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-2">Sizing Notes</h3>
            <p className="text-sm text-muted-foreground">[Insert notes about scaling parts based on dog measurements.]</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="placeholder-block aspect-video text-base">
            [Insert image here — e.g., parts laid out on a print bed, or slicer screenshot]
          </div>
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
            <h3 className="font-heading font-semibold text-foreground mb-3">Download STL Files</h3>
            <div className="space-y-3">
              {["[Part A — STL file link]", "[Part B — STL file link]", "[Part C — STL file link]"].map((file, i) => (
                <Button key={i} variant="outline" className="w-full justify-start gap-3 text-sm" asChild>
                  <a href="#">
                    <FileDown size={16} className="text-primary" /> {file}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PrintingSection;
