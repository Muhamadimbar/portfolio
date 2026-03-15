"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="border-b-[3px] border-black bg-[#f5f0e8]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-6 md:p-10 border-b-[3px] md:border-b-0 md:border-r-[3px] border-black flex flex-col justify-center">
          <h2 style={{ fontFamily: "var(--font-anton)" }}
            className="text-[36px] md:text-[48px] uppercase leading-none mb-4">
            Siapa<br />Saya?
          </h2>
          <p className="text-[11px] md:text-[12px] leading-[1.9] text-[#444]">
            Halo! Saya <span className="font-bold text-black">Muhamad Imbar</span>, seorang Frontend Developer & Data Science enthusiast. Saya memiliki pengalaman membangun aplikasi web modern dan mengolah data menjadi insight yang bermakna.
          </p>
          <p className="text-[11px] md:text-[12px] leading-[1.9] text-[#444] mt-3">
            Pernah mengikuti program <span className="font-bold text-black">Studi Independen Bersertifikat (SIB)</span> dan terus belajar teknologi terbaru untuk menghasilkan produk digital yang berkualitas.
          </p>
        </motion.div>

        <div className="p-6 md:p-10 flex flex-col gap-3 justify-center">
          {[
            ["SIB", "Program Selesai", "#ffe500", "#000"],
            ["2+", "Tahun Belajar", "#f5f0e8", "#000"],
            ["100%", "Komitmen", "#0a0a0a", "#ffe500"],
          ].map(([num, txt, bg, clr], i) => (
            <motion.div key={txt}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{ background: bg }}
              className="border-[2.5px] border-black px-4 md:px-6 py-3 md:py-4 flex items-baseline gap-3">
              <span style={{ fontFamily: "var(--font-anton)", color: clr }}
                className="text-[28px] md:text-[36px]">
                {num}
              </span>
              <span style={{ color: bg === "#0a0a0a" ? "#aaa" : "#555" }}
                className="text-[10px] uppercase tracking-widest">
                {txt}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}