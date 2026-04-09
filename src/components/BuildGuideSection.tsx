import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

const steps = [
  { title: "Gather Materials & Tools", instructions: "[Insert step instructions here — list what to collect and verify before starting.]", tip: "[Optional tip — e.g., 'Lay everything out on a clean, flat surface.']" },
  { title: "Measure the Dog", instructions: "[Insert step instructions here — reference the measurement guide.]", tip: "[Optional tip — e.g., 'Have a helper hold the dog steady.']" },
  { title: "Print the Parts", instructions: "[Insert step instructions here — note expected print times and order of printing.]", tip: "[Optional tip — e.g., 'Print the frame first to test fit early.']" },
  { title: "Organize Printed Parts & Hardware", instructions: "[Insert step instructions here — sort parts and label them if needed.]", tip: "" },
  { title: "Assemble the Main Frame", instructions: "[Insert step instructions here — describe how the main structure goes together.]", tip: "[Optional tip]" },
  { title: "Attach the Wheels", instructions: "[Insert step instructions here — explain axle insertion and wheel attachment.]", tip: "[Optional tip]" },
  { title: "Add Support & Harness", instructions: "[Insert step instructions here — describe strap routing and padding placement.]", tip: "[Optional tip]" },
  { title: "Adjust the Fit", instructions: "[Insert step instructions here — explain how to adjust frame length, height, and harness tension.]", tip: "[Optional tip — e.g., 'The dog should stand with a natural posture.']" },
  { title: "Test Carefully", instructions: "[Insert step instructions here — describe the first test walk and what to look for.]", tip: "[Optional tip — e.g., 'Start indoors on a flat surface.']" },
];

const BuildGuideSection = () => (
  <section id="build-guide" className="py-16 md:py-20 bg-background">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">
          step-by-step build guide
        </h2>
        <p className="text-muted-foreground text-base max-w-xl mx-auto">
          follow each step carefully — take your time!
        </p>
      </motion.div>

      <div className="space-y-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="bg-card rounded-2xl border border-border overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-2/5 placeholder-block rounded-none min-h-[180px] md:min-h-0 text-sm border-0 border-b md:border-b-0 md:border-r">
                [Insert image for Step {i + 1}]
              </div>

              <div className="md:w-3/5 p-5 md:p-6 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-9 h-9 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center font-heading shrink-0">
                    {i + 1}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                  {step.instructions}
                </p>
                {step.tip && (
                  <div className="flex items-start gap-2 bg-accent/60 rounded-xl p-3">
                    <Lightbulb size={14} className="text-accent-foreground mt-0.5 shrink-0" />
                    <p className="text-xs text-accent-foreground">{step.tip}</p>
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
