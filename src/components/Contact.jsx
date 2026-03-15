"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="border-b-[3px] border-black bg-[#f5f0e8]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-6 md:p-10 border-b-[3px] md:border-b-0 md:border-r-[3px] border-black flex flex-col justify-center">
          <h2 style={{ fontFamily: "var(--font-anton)" }}
            className="text-[40px] md:text-[56px] uppercase leading-none mb-4">
            AYO<br />KERJA<br />SAMA.
          </h2>
          <p className="text-[11px] md:text-[12px] leading-[1.9] text-[#555]">
            Punya project menarik atau mau berkolaborasi? Jangan ragu untuk menghubungi saya!
          </p>
        </motion.div>

        <div className="p-6 md:p-10 flex flex-col gap-3 justify-center">
          {[
            ["@", "muhamadimbar806@gmail.com", "mailto:muhamadimbar806@gmail.com"],
            ["GH", "github.com/muhamadimbar", "https://github.com/muhamadimbar"],
          ].map(([icon, val, href], i) => (
            <motion.a key={val}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              href={href}
              target="_blank"
              className="flex items-center gap-3 border-[2.5px] border-black px-4 md:px-5 py-3 text-[10px] md:text-[11px] uppercase tracking-widest hover:bg-[#ffe500] transition-colors break-all">
              <span style={{ fontFamily: "var(--font-anton)" }} className="text-[14px] w-6 flex-shrink-0">{icon}</span>
              {val}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}