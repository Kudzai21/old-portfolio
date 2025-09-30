import React from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import caseStudies from "../../../data/caseStudies.json";

const useCountUp = (to) => {
  const count = useMotionValue(0);
  const spring = useSpring(count, { stiffness: 120, damping: 20 });
  const ref = React.useRef(null);
  const inView = useInView(ref, { margin: "-10% 0px -10% 0px", once: true });

  React.useEffect(() => {
    if (inView) {
      count.set(to);
    }
  }, [inView, to, count]);

  return { ref, value: spring };
};

const StatCard = ({ value, heading, label, suffix = "", index }) => {
  const { ref, value: spring } = useCountUp(value);
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(Math.floor(v)));
    return () => unsub();
  }, [spring]);

  const resolvedSuffix = suffix || (label && label.includes("%") ? "%" : "");

  return (
    <motion.div
      ref={ref}
      className="max-w-sm w-full bg-gradient-to-b from-stone-300/40 to-transparent p-[3px] rounded-[12px]"
      custom={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="p-[2px] rounded-[10px] bg-gradient-to-b from-white to-stone-200/30 shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
        <div className="bg-gradient-to-b from-stone-200/30 to-white/70 p-6 flex flex-col items-center justify-center min-h-[180px]">
          <div className="text-4xl font-bold text-customPrimary tabular-nums tracking-tight">{display}{resolvedSuffix}</div>
          {heading && (
            <div className="mt-1 text-lg font-semibold text-customPrimary text-center">{heading}</div>
          )}
          <div className="mt-2 text-sm text-customSecondary text-center max-w-xs">{label}</div>
        </div>
      </div>
    </motion.div>
  );
};

const Statistics = ({ caseId = 2 }) => {
  const current = caseStudies.caseStudies.find((c) => c.id === caseId);
  const stats = current?.statistics ?? [];

  return (
    <div className="flex flex-wrap justify-center gap-8 py-10 px-8 md:px-16">
      {stats.map((s, i) => (
        <StatCard key={i} value={s.value} heading={s.heading} label={s.label} suffix={s.suffix} index={i} />)
      )}
    </div>
  );
};

export default Statistics;
