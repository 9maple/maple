import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

const steps = [
  { title: "Gather Materials and Tools", instructions: "[Insert step instructions here — list what to collect and verify before starting.]", tip: "[Optional tip — e.g., 'Lay everything out on a clean, flat surface.']" },
  { title: "Measure the Dog", instructions: "[Insert step instructions here — reference the measurement guide above.]", tip: "[Optional tip — e.g., 'Have a helper hold the dog steady.']" },
  { title: "Print the Parts", instructions: "[Insert step instructions here — note expected print times and order of printing.]", tip: "[Optional tip — e.g., 'Print the frame first to test fit early.']" },
  { title: "Organize Printed Parts and Hardware", instructions: "[Insert step instructions here — sort parts and label them if needed.]", tip: "" },
  { title: "Assemble the Main Frame", instructions: "[Insert step instructions here — describe how the main structure goes together.]", tip: "[Optional tip]" },
  { title: "Attach the Wheels", instructions: "[Insert step instructions here — explain axle insertion and wheel attachment.]", tip: "[Optional tip]" },
  { title: "Add Support and Harness Components", instructions: "[Insert step instructions here — describe strap routing and padding placement.]", tip: "[Optional tip]" },
  { title: "Adjust the Fit", instructions: "[Insert step instructions here — explain how to adjust frame length, height, and harness tension.]", tip: "[Optional tip — e.g., 'The dog should stand with a natural posture.']" },
  { title: "Test the Wheelchair Carefully", instructions: "[Insert step instructions here — describe the first test walk and what to look for.]", tip: "[Optional tip — e.g., 'Start indoors on a flat surface.']" },
];

const BuildGuideSection = () => (
  <section id="build-guide" className="py-20 bg-background">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-step mb-3">
          Core Instructions
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Step-by-Step Build Guide
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Follow each step carefully. Take your time — accuracy matters more than speed.
        </p>
      </motion.div>

      <div className="space-y-8">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden"
          >
            <div className="md:flex">
              {/* Step image placeholder */}
              <div className="md:w-2/5 placeholder-block rounded-none min-h-[220px] md:min-h-0 text-base border-0 border-b md:border-b-0 md:border-r">
                [Insert image for Step {i + 1} here]
              </div>

              {/* Step content */}
              <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center font-heading shrink-0">
                    {i + 1}
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {step.instructions}
                </p>
                {step.tip && (
                  <div className="flex items-start gap-2 bg-accent/60 rounded-lg p-3">
                    <Lightbulb size={16} className="text-primary mt-0.5 shrink-0" />
                    <p className="text-sm text-accent-foreground">{step.tip}</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BuildGuideSection;
