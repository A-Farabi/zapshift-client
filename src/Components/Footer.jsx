import { FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const navLinks = ["Services", "Coverage", "About Us", "Pricing", "Blog", "Contact"];

  const socialLinks = [
    {
      icon: <FaLinkedinIn size={16} />,
      href: "#",
      label: "LinkedIn",
      bg: "bg-[#0077B5]",
    },
    {
      icon: <FaXTwitter size={16} />,
      href: "#",
      label: "X (Twitter)",
      bg: "bg-black border border-white/20",
    },
    {
      icon: <FaFacebookF size={16} />,
      href: "#",
      label: "Facebook",
      bg: "bg-[#1877F2]",
    },
    {
      icon: <FaYoutube size={16} />,
      href: "#",
      label: "YouTube",
      bg: "bg-[#FF0000]",
    },
  ];

  return (
    <footer className="w-full bg-[#0f0f0f] text-white px-6 py-12">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">

        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* Lightning bolt icon */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <path
              d="M16 2L6 16H13L12 26L22 12H15L16 2Z"
              fill="#AAEE44"
              stroke="#AAEE44"
              strokeWidth="0.5"
              strokeLinejoin="round"
            />
          </svg>
          <span
            className="text-2xl font-bold tracking-tight"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            ZapShift
          </span>
        </div>

        {/* Tagline */}
        <p
          className="text-center text-sm text-gray-400 max-w-md leading-relaxed"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From
          personal packages to business shipments — we deliver on time, every time.
        </p>

        {/* Divider */}
        <div className="w-full border-t border-dashed border-white/10" />

        {/* Nav Links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-gray-300 hover:text-[#AAEE44] transition-colors duration-200"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div className="w-full border-t border-dashed border-white/10" />

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {socialLinks.map(({ icon, href, label, bg }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className={`w-9 h-9 rounded-full flex items-center justify-center text-white hover:scale-110 hover:brightness-110 transition-all duration-200 ${bg}`}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Bottom copyright */}
        <p
          className="text-xs text-gray-600 mt-2"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          © {new Date().getFullYear()} ZapShift. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;