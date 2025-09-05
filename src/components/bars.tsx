import { motion } from "framer-motion";

const Bars = ({ color = "#145DFC" }) => {
    const delays = [0, 0.2, 0.4];
    return (
      <div className="flex items-end gap-0.5 h-3">
        {delays.map((d, i) => (
          <motion.span
            key={i}
            initial={{ scaleY: 0.3 }}
            animate={{ scaleY: [0.3, 1, 0.5, 0.9, 0.4] }}
            transition={{ duration: 1.1, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: d }}
            style={{ width: 3, height: "100%", background: color, transformOrigin: "bottom", borderRadius: 2 }}
          />
        ))}
      </div>
    );
}

export default Bars
