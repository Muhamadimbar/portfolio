"use client";

const menuItems = [
  { label: "About", color: "#FF6B6B" },
  { label: "Skills", color: "#61DAFB" },
  { label: "Projects", color: "#4CAF50" },
  { label: "Contact", color: "#ffe500" },
];

export default function Navbar() {
  return (
    <nav style={{ fontFamily: "var(--font-space-mono)" }}
      className="border-b-[3px] border-black px-4 md:px-8 py-3 flex justify-between items-center bg-[#0a0a0a]">

      {/* Logo */}
      <span style={{ fontFamily: "var(--font-anton)" }}
        className="text-[#ffe500] text-xl tracking-widest">
        MI.
      </span>

      {/* Menu */}
      <div className="flex gap-2 md:gap-3">
        {menuItems.map((item) => (
          <a key={item.label}
            href={`#${item.label.toLowerCase()}`}
            style={{
                border : `2px solid ${item.color}`, 
                color: item.color }}
            onMouseEnter={(e) => {
                e.currentTarget.style.background = item.color;
                e.currentTarget.style.color = "#0a0a0a";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.color = item.color;
            }}
            className="text-[9px] md:text-[10px] uppercase tracking-widest px-2 md:px-3 py-1 md:py-1.5 transition-colors">
            {item.label}
          </a>
        ))}
      </div>

    </nav>
  );
}