"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 80, bg: "#61DAFB", color: "#000", icon: "⚛" },
  { name: "Next.js", level: 75, bg: "#000000", color: "#fff", icon: "N" },
  { name: "Tailwind", level: 85, bg: "#06B6D4", color: "#000", icon: "TW" },
  { name: "JavaScript", level: 80, bg: "#F7DF1E", color: "#000", icon: "JS" },
  { name: "Python", level: 70, bg: "#3776AB", color: "#fff", icon: "PY" },
  { name: "Data Analysis", level: 65, bg: "#4CAF50", color: "#fff", icon: "DA" },
  { name: "Git & GitHub", level: 75, bg: "#F05032", color: "#fff", icon: "GIT" },
  { name: "Figma", level: 60, bg: "#F24E1E", color: "#fff", icon: "FIG" },
  { name: "SQL", level: 65, bg: "#336791", color: "#fff", icon: "SQL" },
];

export default function Skills() {
  return (
    <section id="skills" className="px-4 md:px-8 lg:px-16 py-10 md:py-14 border-b-[3px] border-black bg-[#f5f0e8]">
      <p className="text-[10px] uppercase tracking-[4px] text-[#666] mb-6 flex items-center gap-2">
        <span className="inline-block w-5 h-[2px] bg-[#ffe500]"></span>
        Skills
        <span className="flex-1 h-[1px] bg-[#ccc]"></span>
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 border-[2.5px] border-black">
        {skills.map((skill, i) => (
          <motion.div key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
            viewport={{ once: true }}
            className="p-3 md:p-4 border-r-[2px] border-b-[2px] border-black hover:bg-[#ffe500] transition-colors group"
            style={{
              borderRight: (i + 1) % 2 === 0 ? "none" : "",
              borderBottom: i >= skills.length - 3 ? "none" : "",
            }}>
            <div className="flex items-center gap-2 md:gap-3 mb-3">
              <div style={{
                  background: skill.bg,
                  color: skill.color,
                  fontFamily: "var(--font-anton)",
                  border: "2px solid #0a0a0a",
                  boxShadow: "2px 2px 0 #0a0a0a",
                  width: "36px", height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "10px",
                  flexShrink: 0,
                }}>
                {skill.icon}
              </div>
              <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest leading-tight">{skill.name}</p>
            </div>
            <div className="h-1 bg-[#ddd]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 0.8, delay: i * 0.06 + 0.2 }}
                viewport={{ once: true }}
                className="h-1 bg-black">
              </motion.div>
            </div>
            <p className="text-[9px] md:text-[10px] text-[#888] mt-1">{skill.level}%</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}