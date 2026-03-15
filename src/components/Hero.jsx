"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const icons = [
  { label: "React", bg: "#61DAFB", color: "#000", top: "0%", left: "0%" },
  { label: "Next.js", bg: "#000", color: "#fff", top: "0%", right: "0%" },
  { label: "Python", bg: "#3776AB", color: "#fff", bottom: "15%", left: "-5%" },
  { label: "Tailwind", bg: "#06B6D4", color: "#000", bottom: "5%", right: "0%" },
  { label: "Figma", bg: "#F24E1E", color: "#fff", top: "45%", right: "-8%" },
];

export default function Hero() {
  return (
    <section
      style={{ fontFamily: "var(--font-space-mono)", minHeight: "100vh" }}
      className="bg-[#f5f0e8] border-b-[3px] border-black flex items-center px-4 md:px-12  relative">

      {/* Dekorasi background */}
      <span
        style={{ fontFamily: "var(--font-anton)" }}
        className="absolute right-0 bottom-0 text-[100px] md:text-[200px] leading-none text-black opacity-[0.03] select-none pointer-events-none">
        IMBAR
      </span>

      {/* Grid utama */}
      <div className="w-full grid grid-cols-2 gap-6 md:gap-16 items-center z-10">

        {/* KIRI */}
        <div>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block bg-[#ffe500] border-[2px] border-black text-[9px] md:text-[10px] uppercase tracking-[3px] px-3 py-1 mb-6">
            ✦ Available for work
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            <p className="text-[10px] md:text-[11px] uppercase tracking-[4px] text-[#888] mb-1">
              Halo, saya
            </p>
            <h1
              style={{ fontFamily: "var(--font-anton)" }}
              className="text-[70px] md:text-[70px] lg:text-[96px] leading-[0.9] uppercase">
              MUHAMAD
            </h1>
            <h1
              style={{
                fontFamily: "var(--font-anton)",
                WebkitTextStroke: "1px #0a0a0a",
                color: "#ffe500",
              }}
              className="text-[70px] md:text-[70px] lg:text-[96px] leading-[0.9] uppercase mb-4">
              IMBAR
            </h1>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[3px] bg-[#ffe500] flex-shrink-0"></span>
              <p style={{ fontFamily: "var(--font-anton)" }}
                className="text-[14px] md:text-[18px] lg:text-[20px] uppercase text-[#666] tracking-wider">
                Frontend Dev & Data Science
              </p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[12px] leading-[1.9] text-[#444] max-w-sm mb-8 border-l-[3px] border-[#ffe500] pl-4">
            Membangun pengalaman digital yang kuat dan berkarakter. Alumni program Studi Independen Bersertifikat (SIB).
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-3 flex-wrap">
            <a href="#projects"
              className="bg-[#0a0a0a] text-[#ffe500] border-[2.5px] border-black px-4 md:px-6 py-2 md:py-3 text-[11px] uppercase tracking-widest hover:bg-[#ffe500] hover:text-black transition-colors">
              Lihat Project →
            </a>
            <a href="#contact"
              className="bg-transparent text-black border-[2.5px] border-black px-4 md:px-6 py-2 md:py-3 text-[11px] uppercase tracking-widest hover:bg-black hover:text-[#ffe500] transition-colors">
              Kontak Saya
            </a>
          </motion.div>
        </div>

        {/* KANAN — Foto + Icons */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-content relative w-full"
          style={{ height: "380px" }}>

          {/* Shadow kuning */}
          <div style={{
            position: "absolute",
            width: "190px",
            height: "280px",
            top: "55px",
            left: "calc(50% - 90px)",
            background: "#ffe500",
            border: "3px solid #0a0a0a",
            zIndex: 0,
          }} />

          {/* Foto */}
          <div style={{
            position: "absolute",
            width: "200px",
            height: "300px",
            top: "40px",
            left: "calc(50% - 85px)",
            border: "3px solid #0a0a0a",
            overflow: "hidden",
            zIndex: 1,
          }}>
            <img
              src="/im.png"
              alt="Muhamad Imbar"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
                display: "block",
              }}
            />
          </div>

          {/* Floating icons */}
          {icons.map((icon, i) => (
            <motion.div key={icon.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
              style={{
                position: "absolute",
                top: icon.top,
                bottom: icon.bottom,
                left: icon.left,
                right: icon.right,
                background: icon.bg,
                color: icon.color,
                fontFamily: "var(--font-anton)",
                zIndex: 2,
                width: "76px",
                height: "66px",
                border: "2.5px solid #0a0a0a",
                boxShadow: "3px 3px 0 #0a0a0a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                textAlign: "center",
              }}>
              {icon.label}
            </motion.div>
          ))}

          {/* Bintang */}
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{ position: "absolute", top: "2px", right: "80px", fontSize: "28px", zIndex: 3 }}>
            ✦
          </motion.span>
          <motion.span
            animate={{ rotate: -260 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            style={{ position: "absolute", bottom: "10px", left: "80px", fontSize: "28px", zIndex: 3 }}>
            ✦
          </motion.span>

        </motion.div>

      </div>
    </section>
  );
}
