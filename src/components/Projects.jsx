"use client";
import { motion } from "framer-motion";

const projects = [
  { num: "01", title: "SIB — Web App", desc: "Aplikasi web yang dibangun selama program SIB menggunakan React dan REST API.", tags: ["React", "REST API", "Tailwind"], link: "#" },
  { num: "02", title: "SIB — Dashboard", desc: "Dashboard interaktif untuk visualisasi data dengan fitur filter dan chart dinamis.", tags: ["Next.js", "Chart.js"], link: "#" },
  { num: "03", title: "SIB — Data Science", desc: "Analisis data menggunakan Python untuk menemukan pola dan insight dari dataset.", tags: ["Python", "Pandas", "Matplotlib"], link: "#" },
  { num: "04", title: "SIB — Landing Page", desc: "Landing page modern dan responsif dengan performa tinggi dan SEO optimal.", tags: ["Next.js", "Tailwind", "Vercel"], link: "#" },
];

export default function Projects() {
  return (
    <section id="projects" className="px-4 md:px-8 lg:px-16 py-10 md:py-14 border-b-[3px] border-black bg-[#f5f0e8]">
      <p className="text-[10px] uppercase tracking-[4px] text-[#666] mb-6 flex items-center gap-2">
        <span className="inline-block w-5 h-[2px] bg-[#ffe500]"></span>
        Projects
        <span className="flex-1 h-[1px] bg-[#ccc]"></span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 border-[2.5px] border-black">
        {projects.map((p, i) => (
          <motion.div key={p.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-5 md:p-6 border-b-[2px] border-r-[0px] md:border-r-[2px] border-black hover:bg-[#0a0a0a] hover:text-[#f5f0e8] transition-colors group cursor-pointer"
            style={{
              borderRight: (i + 1) % 2 === 0 ? "none" : "",
              borderBottom: i >= projects.length - 2 ? "none" : "",
            }}>
            <div style={{ fontFamily: "var(--font-anton)" }}
              className="text-[36px] md:text-[40px] text-[#ddd] group-hover:text-[#333] leading-none">{p.num}</div>
            <h3 style={{ fontFamily: "var(--font-anton)" }}
              className="text-[16px] md:text-[18px] uppercase my-1">{p.title}</h3>
            <p className="text-[10px] md:text-[11px] leading-[1.7] text-[#555] group-hover:text-[#aaa] mb-3">{p.desc}</p>
            <div className="flex gap-2 flex-wrap">
              {p.tags.map(tag => (
                <span key={tag}
                  className="text-[9px] uppercase tracking-widest border-[1.5px] border-black group-hover:border-[#ffe500] group-hover:text-[#ffe500] px-2 py-0.5">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}