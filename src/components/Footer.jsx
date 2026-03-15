export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] px-4 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
      <span className="text-[10px] uppercase tracking-widest text-[#555] text-center">
        © 2026 <span className="text-[#ffe500]">Muhamad Imbar</span>
      </span>
      <span className="text-[10px] uppercase tracking-widest text-[#555] text-center">
        Built with Next.js + Tailwind
      </span>
    </footer>
  );
}